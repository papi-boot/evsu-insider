/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap v5.0.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
   true ? module.exports = e(__webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/index.js")) : 0;
}(this, function (t) {
  "use strict";

  function e(t) {
    if (t && t.__esModule) return t;
    var e = Object.create(null);
    return t && Object.keys(t).forEach(function (s) {
      if ("default" !== s) {
        var i = Object.getOwnPropertyDescriptor(t, s);
        Object.defineProperty(e, s, i.get ? i : {
          enumerable: !0,
          get: function () {
            return t[s];
          }
        });
      }
    }), e.default = t, Object.freeze(e);
  }

  var s = e(t);

  const i = {
    find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
    findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
    children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)),

    parents(t, e) {
      const s = [];
      let i = t.parentNode;

      for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) i.matches(e) && s.push(i), i = i.parentNode;

      return s;
    },

    prev(t, e) {
      let s = t.previousElementSibling;

      for (; s;) {
        if (s.matches(e)) return [s];
        s = s.previousElementSibling;
      }

      return [];
    },

    next(t, e) {
      let s = t.nextElementSibling;

      for (; s;) {
        if (s.matches(e)) return [s];
        s = s.nextElementSibling;
      }

      return [];
    }

  },
        n = t => {
    do {
      t += Math.floor(1e6 * Math.random());
    } while (document.getElementById(t));

    return t;
  },
        o = t => {
    let e = t.getAttribute("data-bs-target");

    if (!e || "#" === e) {
      let s = t.getAttribute("href");
      if (!s || !s.includes("#") && !s.startsWith(".")) return null;
      s.includes("#") && !s.startsWith("#") && (s = "#" + s.split("#")[1]), e = s && "#" !== s ? s.trim() : null;
    }

    return e;
  },
        r = t => {
    const e = o(t);
    return e && document.querySelector(e) ? e : null;
  },
        a = t => {
    const e = o(t);
    return e ? document.querySelector(e) : null;
  },
        l = t => {
    if (!t) return 0;
    let {
      transitionDuration: e,
      transitionDelay: s
    } = window.getComputedStyle(t);
    const i = Number.parseFloat(e),
          n = Number.parseFloat(s);
    return i || n ? (e = e.split(",")[0], s = s.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(s))) : 0;
  },
        c = t => {
    t.dispatchEvent(new Event("transitionend"));
  },
        h = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        d = t => h(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? i.findOne(t) : null,
        u = (t, e) => {
    let s = !1;
    const i = e + 5;
    t.addEventListener("transitionend", function e() {
      s = !0, t.removeEventListener("transitionend", e);
    }), setTimeout(() => {
      s || c(t);
    }, i);
  },
        g = (t, e, s) => {
    Object.keys(s).forEach(i => {
      const n = s[i],
            o = e[i],
            r = o && h(o) ? "element" : null == (a = o) ? "" + a : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
      var a;
      if (!new RegExp(n).test(r)) throw new TypeError(`${t.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${n}".`);
    });
  },
        f = t => {
    if (!t) return !1;

    if (t.style && t.parentNode && t.parentNode.style) {
      const e = getComputedStyle(t),
            s = getComputedStyle(t.parentNode);
      return "none" !== e.display && "none" !== s.display && "hidden" !== e.visibility;
    }

    return !1;
  },
        p = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
        m = t => {
    if (!document.documentElement.attachShadow) return null;

    if ("function" == typeof t.getRootNode) {
      const e = t.getRootNode();
      return e instanceof ShadowRoot ? e : null;
    }

    return t instanceof ShadowRoot ? t : t.parentNode ? m(t.parentNode) : null;
  },
        _ = () => {},
        b = t => t.offsetHeight,
        v = () => {
    const {
      jQuery: t
    } = window;
    return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
  },
        y = () => "rtl" === document.documentElement.dir,
        w = t => {
    var e;
    e = () => {
      const e = v();

      if (e) {
        const s = t.NAME,
              i = e.fn[s];
        e.fn[s] = t.jQueryInterface, e.fn[s].Constructor = t, e.fn[s].noConflict = () => (e.fn[s] = i, t.jQueryInterface);
      }
    }, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e) : e();
  },
        E = t => {
    "function" == typeof t && t();
  },
        T = new Map();

  var A = {
    set(t, e, s) {
      T.has(t) || T.set(t, new Map());
      const i = T.get(t);
      i.has(e) || 0 === i.size ? i.set(e, s) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);
    },

    get: (t, e) => T.has(t) && T.get(t).get(e) || null,

    remove(t, e) {
      if (!T.has(t)) return;
      const s = T.get(t);
      s.delete(e), 0 === s.size && T.delete(t);
    }

  };
  const k = /[^.]*(?=\..*)\.|.*/,
        L = /\..*/,
        C = /::\d+$/,
        D = {};
  let N = 1;
  const S = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
        O = /^(mouseenter|mouseleave)/i,
        I = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function x(t, e) {
    return e && `${e}::${N++}` || t.uidEvent || N++;
  }

  function j(t) {
    const e = x(t);
    return t.uidEvent = e, D[e] = D[e] || {}, D[e];
  }

  function P(t, e, s = null) {
    const i = Object.keys(t);

    for (let n = 0, o = i.length; n < o; n++) {
      const o = t[i[n]];
      if (o.originalHandler === e && o.delegationSelector === s) return o;
    }

    return null;
  }

  function M(t, e, s) {
    const i = "string" == typeof e,
          n = i ? s : e;
    let o = B(t);
    return I.has(o) || (o = t), [i, n, o];
  }

  function H(t, e, s, i, n) {
    if ("string" != typeof e || !t) return;

    if (s || (s = i, i = null), O.test(e)) {
      const t = t => function (e) {
        if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
      };

      i ? i = t(i) : s = t(s);
    }

    const [o, r, a] = M(e, s, i),
          l = j(t),
          c = l[a] || (l[a] = {}),
          h = P(c, r, o ? s : null);
    if (h) return void (h.oneOff = h.oneOff && n);
    const d = x(r, e.replace(k, "")),
          u = o ? function (t, e, s) {
      return function i(n) {
        const o = t.querySelectorAll(e);

        for (let {
          target: r
        } = n; r && r !== this; r = r.parentNode) for (let a = o.length; a--;) if (o[a] === r) return n.delegateTarget = r, i.oneOff && $.off(t, n.type, e, s), s.apply(r, [n]);

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
    const o = P(e[s], i, n);
    o && (t.removeEventListener(s, o, Boolean(n)), delete e[s][o.uidEvent]);
  }

  function B(t) {
    return t = t.replace(L, ""), S[t] || t;
  }

  const $ = {
    on(t, e, s, i) {
      H(t, e, s, i, !1);
    },

    one(t, e, s, i) {
      H(t, e, s, i, !0);
    },

    off(t, e, s, i) {
      if ("string" != typeof e || !t) return;
      const [n, o, r] = M(e, s, i),
            a = r !== e,
            l = j(t),
            c = e.startsWith(".");

      if (void 0 !== o) {
        if (!l || !l[r]) return;
        return void R(t, l, r, o, n ? s : null);
      }

      c && Object.keys(l).forEach(s => {
        !function (t, e, s, i) {
          const n = e[s] || {};
          Object.keys(n).forEach(o => {
            if (o.includes(i)) {
              const i = n[o];
              R(t, e, s, i.originalHandler, i.delegationSelector);
            }
          });
        }(t, l, s, e.slice(1));
      });
      const h = l[r] || {};
      Object.keys(h).forEach(s => {
        const i = s.replace(C, "");

        if (!a || e.includes(i)) {
          const e = h[s];
          R(t, l, r, e.originalHandler, e.delegationSelector);
        }
      });
    },

    trigger(t, e, s) {
      if ("string" != typeof e || !t) return null;
      const i = v(),
            n = B(e),
            o = e !== n,
            r = I.has(n);
      let a,
          l = !0,
          c = !0,
          h = !1,
          d = null;
      return o && i && (a = i.Event(e, s), i(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(n, l, !0)) : d = new CustomEvent(e, {
        bubbles: l,
        cancelable: !0
      }), void 0 !== s && Object.keys(s).forEach(t => {
        Object.defineProperty(d, t, {
          get: () => s[t]
        });
      }), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d;
    }

  };

  class z {
    constructor(t) {
      (t = d(t)) && (this._element = t, A.set(this._element, this.constructor.DATA_KEY, this));
    }

    dispose() {
      A.remove(this._element, this.constructor.DATA_KEY), $.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(t => {
        this[t] = null;
      });
    }

    _queueCallback(t, e, s = !0) {
      if (!s) return void E(t);
      const i = l(e);
      $.one(e, "transitionend", () => E(t)), u(e, i);
    }

    static getInstance(t) {
      return A.get(t, this.DATA_KEY);
    }

    static get VERSION() {
      return "5.0.1";
    }

    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }

    static get DATA_KEY() {
      return "bs." + this.NAME;
    }

    static get EVENT_KEY() {
      return "." + this.DATA_KEY;
    }

  }

  class U extends z {
    static get NAME() {
      return "alert";
    }

    close(t) {
      const e = t ? this._getRootElement(t) : this._element,
            s = this._triggerCloseEvent(e);

      null === s || s.defaultPrevented || this._removeElement(e);
    }

    _getRootElement(t) {
      return a(t) || t.closest(".alert");
    }

    _triggerCloseEvent(t) {
      return $.trigger(t, "close.bs.alert");
    }

    _removeElement(t) {
      t.classList.remove("show");
      const e = t.classList.contains("fade");

      this._queueCallback(() => this._destroyElement(t), t, e);
    }

    _destroyElement(t) {
      t.parentNode && t.parentNode.removeChild(t), $.trigger(t, "closed.bs.alert");
    }

    static jQueryInterface(t) {
      return this.each(function () {
        let e = A.get(this, "bs.alert");
        e || (e = new U(this)), "close" === t && e[t](this);
      });
    }

    static handleDismiss(t) {
      return function (e) {
        e && e.preventDefault(), t.close(this);
      };
    }

  }

  $.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', U.handleDismiss(new U())), w(U);

  class q extends z {
    static get NAME() {
      return "button";
    }

    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
    }

    static jQueryInterface(t) {
      return this.each(function () {
        let e = A.get(this, "bs.button");
        e || (e = new q(this)), "toggle" === t && e[t]();
      });
    }

  }

  function F(t) {
    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
  }

  function W(t) {
    return t.replace(/[A-Z]/g, t => "-" + t.toLowerCase());
  }

  $.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', t => {
    t.preventDefault();
    const e = t.target.closest('[data-bs-toggle="button"]');
    let s = A.get(e, "bs.button");
    s || (s = new q(e)), s.toggle();
  }), w(q);
  const K = {
    setDataAttribute(t, e, s) {
      t.setAttribute("data-bs-" + W(e), s);
    },

    removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-" + W(e));
    },

    getDataAttributes(t) {
      if (!t) return {};
      const e = {};
      return Object.keys(t.dataset).filter(t => t.startsWith("bs")).forEach(s => {
        let i = s.replace(/^bs/, "");
        i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = F(t.dataset[s]);
      }), e;
    },

    getDataAttribute: (t, e) => F(t.getAttribute("data-bs-" + W(e))),

    offset(t) {
      const e = t.getBoundingClientRect();
      return {
        top: e.top + document.body.scrollTop,
        left: e.left + document.body.scrollLeft
      };
    },

    position: t => ({
      top: t.offsetTop,
      left: t.offsetLeft
    })
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

  class J extends z {
    constructor(t, e) {
      super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._indicatorsElement = i.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners();
    }

    static get Default() {
      return V;
    }

    static get NAME() {
      return "carousel";
    }

    next() {
      this._isSliding || this._slide(X);
    }

    nextWhenVisible() {
      !document.hidden && f(this._element) && this.next();
    }

    prev() {
      this._isSliding || this._slide(Y);
    }

    pause(t) {
      t || (this._isPaused = !0), i.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (c(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }

    cycle(t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }

    to(t) {
      this._activeElement = i.findOne(".active.carousel-item", this._element);

      const e = this._getItemIndex(this._activeElement);

      if (t > this._items.length - 1 || t < 0) return;
      if (this._isSliding) return void $.one(this._element, "slid.bs.carousel", () => this.to(t));
      if (e === t) return this.pause(), void this.cycle();
      const s = t > e ? X : Y;

      this._slide(s, this._items[t]);
    }

    _getConfig(t) {
      return t = { ...V,
        ...t
      }, g("carousel", t, Q), t;
    }

    _handleSwipe() {
      const t = Math.abs(this.touchDeltaX);
      if (t <= 40) return;
      const e = t / this.touchDeltaX;
      this.touchDeltaX = 0, e && this._slide(e > 0 ? Z : G);
    }

    _addEventListeners() {
      this._config.keyboard && $.on(this._element, "keydown.bs.carousel", t => this._keydown(t)), "hover" === this._config.pause && ($.on(this._element, "mouseenter.bs.carousel", t => this.pause(t)), $.on(this._element, "mouseleave.bs.carousel", t => this.cycle(t))), this._config.touch && this._touchSupported && this._addTouchEventListeners();
    }

    _addTouchEventListeners() {
      const t = t => {
        !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX) : this.touchStartX = t.clientX;
      },
            e = t => {
        this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX;
      },
            s = t => {
        !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType || (this.touchDeltaX = t.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(t => this.cycle(t), 500 + this._config.interval));
      };

      i.find(".carousel-item img", this._element).forEach(t => {
        $.on(t, "dragstart.bs.carousel", t => t.preventDefault());
      }), this._pointerEvent ? ($.on(this._element, "pointerdown.bs.carousel", e => t(e)), $.on(this._element, "pointerup.bs.carousel", t => s(t)), this._element.classList.add("pointer-event")) : ($.on(this._element, "touchstart.bs.carousel", e => t(e)), $.on(this._element, "touchmove.bs.carousel", t => e(t)), $.on(this._element, "touchend.bs.carousel", t => s(t)));
    }

    _keydown(t) {
      /input|textarea/i.test(t.target.tagName) || ("ArrowLeft" === t.key ? (t.preventDefault(), this._slide(Z)) : "ArrowRight" === t.key && (t.preventDefault(), this._slide(G)));
    }

    _getItemIndex(t) {
      return this._items = t && t.parentNode ? i.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t);
    }

    _getItemByOrder(t, e) {
      const s = t === X,
            i = t === Y,
            n = this._getItemIndex(e),
            o = this._items.length - 1;

      if ((i && 0 === n || s && n === o) && !this._config.wrap) return e;
      const r = (n + (i ? -1 : 1)) % this._items.length;
      return -1 === r ? this._items[this._items.length - 1] : this._items[r];
    }

    _triggerSlideEvent(t, e) {
      const s = this._getItemIndex(t),
            n = this._getItemIndex(i.findOne(".active.carousel-item", this._element));

      return $.trigger(this._element, "slide.bs.carousel", {
        relatedTarget: t,
        direction: e,
        from: n,
        to: s
      });
    }

    _setActiveIndicatorElement(t) {
      if (this._indicatorsElement) {
        const e = i.findOne(".active", this._indicatorsElement);
        e.classList.remove("active"), e.removeAttribute("aria-current");
        const s = i.find("[data-bs-target]", this._indicatorsElement);

        for (let e = 0; e < s.length; e++) if (Number.parseInt(s[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
          s[e].classList.add("active"), s[e].setAttribute("aria-current", "true");
          break;
        }
      }
    }

    _updateInterval() {
      const t = this._activeElement || i.findOne(".active.carousel-item", this._element);
      if (!t) return;
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
    }

    _slide(t, e) {
      const s = this._directionToOrder(t),
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

      const g = () => {
        $.trigger(this._element, "slid.bs.carousel", {
          relatedTarget: r,
          direction: u,
          from: o,
          to: a
        });
      };

      if (this._element.classList.contains("slide")) {
        r.classList.add(d), b(r), n.classList.add(h), r.classList.add(h);

        const t = () => {
          r.classList.remove(h, d), r.classList.add("active"), n.classList.remove("active", d, h), this._isSliding = !1, setTimeout(g, 0);
        };

        this._queueCallback(t, n, !0);
      } else n.classList.remove("active"), r.classList.add("active"), this._isSliding = !1, g();

      l && this.cycle();
    }

    _directionToOrder(t) {
      return [Z, G].includes(t) ? y() ? t === G ? Y : X : t === G ? X : Y : t;
    }

    _orderToDirection(t) {
      return [X, Y].includes(t) ? y() ? t === Y ? G : Z : t === Y ? Z : G : t;
    }

    static carouselInterface(t, e) {
      let s = A.get(t, "bs.carousel"),
          i = { ...V,
        ...K.getDataAttributes(t)
      };
      "object" == typeof e && (i = { ...i,
        ...e
      });
      const n = "string" == typeof e ? e : i.slide;
      if (s || (s = new J(t, i)), "number" == typeof e) s.to(e);else if ("string" == typeof n) {
        if (void 0 === s[n]) throw new TypeError(`No method named "${n}"`);
        s[n]();
      } else i.interval && i.ride && (s.pause(), s.cycle());
    }

    static jQueryInterface(t) {
      return this.each(function () {
        J.carouselInterface(this, t);
      });
    }

    static dataApiClickHandler(t) {
      const e = a(this);
      if (!e || !e.classList.contains("carousel")) return;
      const s = { ...K.getDataAttributes(e),
        ...K.getDataAttributes(this)
      },
            i = this.getAttribute("data-bs-slide-to");
      i && (s.interval = !1), J.carouselInterface(e, s), i && A.get(e, "bs.carousel").to(i), t.preventDefault();
    }

  }

  $.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", J.dataApiClickHandler), $.on(window, "load.bs.carousel.data-api", () => {
    const t = i.find('[data-bs-ride="carousel"]');

    for (let e = 0, s = t.length; e < s; e++) J.carouselInterface(t[e], A.get(t[e], "bs.carousel"));
  }), w(J);
  const tt = {
    toggle: !0,
    parent: ""
  },
        et = {
    toggle: "boolean",
    parent: "(string|element)"
  };

  class st extends z {
    constructor(t, e) {
      super(t), this._isTransitioning = !1, this._config = this._getConfig(e), this._triggerArray = i.find(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`);
      const s = i.find('[data-bs-toggle="collapse"]');

      for (let t = 0, e = s.length; t < e; t++) {
        const e = s[t],
              n = r(e),
              o = i.find(n).filter(t => t === this._element);
        null !== n && o.length && (this._selector = n, this._triggerArray.push(e));
      }

      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }

    static get Default() {
      return tt;
    }

    static get NAME() {
      return "collapse";
    }

    toggle() {
      this._element.classList.contains("show") ? this.hide() : this.show();
    }

    show() {
      if (this._isTransitioning || this._element.classList.contains("show")) return;
      let t, e;
      this._parent && (t = i.find(".show, .collapsing", this._parent).filter(t => "string" == typeof this._config.parent ? t.getAttribute("data-bs-parent") === this._config.parent : t.classList.contains("collapse")), 0 === t.length && (t = null));
      const s = i.findOne(this._selector);

      if (t) {
        const i = t.find(t => s !== t);
        if (e = i ? A.get(i, "bs.collapse") : null, e && e._isTransitioning) return;
      }

      if ($.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
      t && t.forEach(t => {
        s !== t && st.collapseInterface(t, "hide"), e || A.set(t, "bs.collapse", null);
      });

      const n = this._getDimension();

      this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[n] = 0, this._triggerArray.length && this._triggerArray.forEach(t => {
        t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0);
      }), this.setTransitioning(!0);
      const o = "scroll" + (n[0].toUpperCase() + n.slice(1));
      this._queueCallback(() => {
        this._element.classList.remove("collapsing"), this._element.classList.add("collapse", "show"), this._element.style[n] = "", this.setTransitioning(!1), $.trigger(this._element, "shown.bs.collapse");
      }, this._element, !0), this._element.style[n] = this._element[o] + "px";
    }

    hide() {
      if (this._isTransitioning || !this._element.classList.contains("show")) return;
      if ($.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;

      const t = this._getDimension();

      this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", b(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
      const e = this._triggerArray.length;
      if (e > 0) for (let t = 0; t < e; t++) {
        const e = this._triggerArray[t],
              s = a(e);
        s && !s.classList.contains("show") && (e.classList.add("collapsed"), e.setAttribute("aria-expanded", !1));
      }
      this.setTransitioning(!0), this._element.style[t] = "", this._queueCallback(() => {
        this.setTransitioning(!1), this._element.classList.remove("collapsing"), this._element.classList.add("collapse"), $.trigger(this._element, "hidden.bs.collapse");
      }, this._element, !0);
    }

    setTransitioning(t) {
      this._isTransitioning = t;
    }

    _getConfig(t) {
      return (t = { ...tt,
        ...t
      }).toggle = Boolean(t.toggle), g("collapse", t, et), t;
    }

    _getDimension() {
      return this._element.classList.contains("width") ? "width" : "height";
    }

    _getParent() {
      let {
        parent: t
      } = this._config;
      t = d(t);
      const e = `[data-bs-toggle="collapse"][data-bs-parent="${t}"]`;
      return i.find(e, t).forEach(t => {
        const e = a(t);

        this._addAriaAndCollapsedClass(e, [t]);
      }), t;
    }

    _addAriaAndCollapsedClass(t, e) {
      if (!t || !e.length) return;
      const s = t.classList.contains("show");
      e.forEach(t => {
        s ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", s);
      });
    }

    static collapseInterface(t, e) {
      let s = A.get(t, "bs.collapse");
      const i = { ...tt,
        ...K.getDataAttributes(t),
        ...("object" == typeof e && e ? e : {})
      };

      if (!s && i.toggle && "string" == typeof e && /show|hide/.test(e) && (i.toggle = !1), s || (s = new st(t, i)), "string" == typeof e) {
        if (void 0 === s[e]) throw new TypeError(`No method named "${e}"`);
        s[e]();
      }
    }

    static jQueryInterface(t) {
      return this.each(function () {
        st.collapseInterface(this, t);
      });
    }

  }

  $.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    const e = K.getDataAttributes(this),
          s = r(this);
    i.find(s).forEach(t => {
      const s = A.get(t, "bs.collapse");
      let i;
      s ? (null === s._parent && "string" == typeof e.parent && (s._config.parent = e.parent, s._parent = s._getParent()), i = "toggle") : i = e, st.collapseInterface(t, i);
    });
  }), w(st);
  const it = new RegExp("ArrowUp|ArrowDown|Escape"),
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

  class ut extends z {
    constructor(t, e) {
      super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }

    static get Default() {
      return ht;
    }

    static get DefaultType() {
      return dt;
    }

    static get NAME() {
      return "dropdown";
    }

    toggle() {
      p(this._element) || (this._element.classList.contains("show") ? this.hide() : this.show());
    }

    show() {
      if (p(this._element) || this._menu.classList.contains("show")) return;
      const t = ut.getParentFromElement(this._element),
            e = {
        relatedTarget: this._element
      };

      if (!$.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
        if (this._inNavbar) K.setDataAttribute(this._menu, "popper", "none");else {
          if (void 0 === s) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
          let e = this._element;
          "parent" === this._config.reference ? e = t : h(this._config.reference) ? e = d(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);

          const i = this._getPopperConfig(),
                n = i.modifiers.find(t => "applyStyles" === t.name && !1 === t.enabled);

          this._popper = s.createPopper(e, this._menu, i), n && K.setDataAttribute(this._menu, "popper", "static");
        }
        "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && [].concat(...document.body.children).forEach(t => $.on(t, "mouseover", _)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), $.trigger(this._element, "shown.bs.dropdown", e);
      }
    }

    hide() {
      if (p(this._element) || !this._menu.classList.contains("show")) return;
      const t = {
        relatedTarget: this._element
      };

      this._completeHide(t);
    }

    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }

    update() {
      this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
    }

    _addEventListeners() {
      $.on(this._element, "click.bs.dropdown", t => {
        t.preventDefault(), this.toggle();
      });
    }

    _completeHide(t) {
      $.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => $.off(t, "mouseover", _)), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), K.removeDataAttribute(this._menu, "popper"), $.trigger(this._element, "hidden.bs.dropdown", t));
    }

    _getConfig(t) {
      if (t = { ...this.constructor.Default,
        ...K.getDataAttributes(this._element),
        ...t
      }, g("dropdown", t, this.constructor.DefaultType), "object" == typeof t.reference && !h(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
      return t;
    }

    _getMenuElement() {
      return i.next(this._element, ".dropdown-menu")[0];
    }

    _getPlacement() {
      const t = this._element.parentNode;
      if (t.classList.contains("dropend")) return lt;
      if (t.classList.contains("dropstart")) return ct;
      const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? e ? ot : nt : e ? at : rt;
    }

    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }

    _getOffset() {
      const {
        offset: t
      } = this._config;
      return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t;
    }

    _getPopperConfig() {
      const t = {
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
      }]), { ...t,
        ...("function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig)
      };
    }

    _selectMenuItem(t) {
      const e = i.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(f);
      if (!e.length) return;
      let s = e.indexOf(t.target);
      "ArrowUp" === t.key && s > 0 && s--, "ArrowDown" === t.key && s < e.length - 1 && s++, s = -1 === s ? 0 : s, e[s].focus();
    }

    static dropdownInterface(t, e) {
      let s = A.get(t, "bs.dropdown");

      if (s || (s = new ut(t, "object" == typeof e ? e : null)), "string" == typeof e) {
        if (void 0 === s[e]) throw new TypeError(`No method named "${e}"`);
        s[e]();
      }
    }

    static jQueryInterface(t) {
      return this.each(function () {
        ut.dropdownInterface(this, t);
      });
    }

    static clearMenus(t) {
      if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key)) return;
      const e = i.find('[data-bs-toggle="dropdown"]');

      for (let s = 0, i = e.length; s < i; s++) {
        const i = A.get(e[s], "bs.dropdown");
        if (!i || !1 === i._config.autoClose) continue;
        if (!i._element.classList.contains("show")) continue;
        const n = {
          relatedTarget: i._element
        };

        if (t) {
          const e = t.composedPath(),
                s = e.includes(i._menu);
          if (e.includes(i._element) || "inside" === i._config.autoClose && !s || "outside" === i._config.autoClose && s) continue;
          if (i._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
          "click" === t.type && (n.clickEvent = t);
        }

        i._completeHide(n);
      }
    }

    static getParentFromElement(t) {
      return a(t) || t.parentNode;
    }

    static dataApiKeydownHandler(t) {
      if (/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !it.test(t.key)) return;
      const e = this.classList.contains("show");
      if (!e && "Escape" === t.key) return;
      if (t.preventDefault(), t.stopPropagation(), p(this)) return;

      const s = () => this.matches('[data-bs-toggle="dropdown"]') ? this : i.prev(this, '[data-bs-toggle="dropdown"]')[0];

      if ("Escape" === t.key) return s().focus(), void ut.clearMenus();
      e || "ArrowUp" !== t.key && "ArrowDown" !== t.key ? e && "Space" !== t.key ? ut.getInstance(s())._selectMenuItem(t) : ut.clearMenus() : s().click();
    }

  }

  $.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', ut.dataApiKeydownHandler), $.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", ut.dataApiKeydownHandler), $.on(document, "click.bs.dropdown.data-api", ut.clearMenus), $.on(document, "keyup.bs.dropdown.data-api", ut.clearMenus), $.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', function (t) {
    t.preventDefault(), ut.dropdownInterface(this);
  }), w(ut);

  const gt = () => {
    const t = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  },
        ft = (t = gt()) => {
    pt(), mt("body", "paddingRight", e => e + t), mt(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", e => e + t), mt(".sticky-top", "marginRight", e => e - t);
  },
        pt = () => {
    const t = document.body.style.overflow;
    t && K.setDataAttribute(document.body, "overflow", t), document.body.style.overflow = "hidden";
  },
        mt = (t, e, s) => {
    const n = gt();
    i.find(t).forEach(t => {
      if (t !== document.body && window.innerWidth > t.clientWidth + n) return;
      const i = t.style[e],
            o = window.getComputedStyle(t)[e];
      K.setDataAttribute(t, e, i), t.style[e] = s(Number.parseFloat(o)) + "px";
    });
  },
        _t = () => {
    bt("body", "overflow"), bt("body", "paddingRight"), bt(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), bt(".sticky-top", "marginRight");
  },
        bt = (t, e) => {
    i.find(t).forEach(t => {
      const s = K.getDataAttribute(t, e);
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

  class wt {
    constructor(t) {
      this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
    }

    show(t) {
      this._config.isVisible ? (this._append(), this._config.isAnimated && b(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(() => {
        E(t);
      })) : E(t);
    }

    hide(t) {
      this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(() => {
        this.dispose(), E(t);
      })) : E(t);
    }

    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        t.className = "modal-backdrop", this._config.isAnimated && t.classList.add("fade"), this._element = t;
      }

      return this._element;
    }

    _getConfig(t) {
      return (t = { ...vt,
        ...("object" == typeof t ? t : {})
      }).rootElement = t.rootElement || document.body, g("backdrop", t, yt), t;
    }

    _append() {
      this._isAppended || (this._config.rootElement.appendChild(this._getElement()), $.on(this._getElement(), "mousedown.bs.backdrop", () => {
        E(this._config.clickCallback);
      }), this._isAppended = !0);
    }

    dispose() {
      this._isAppended && ($.off(this._element, "mousedown.bs.backdrop"), this._getElement().parentNode.removeChild(this._element), this._isAppended = !1);
    }

    _emulateAnimation(t) {
      if (!this._config.isAnimated) return void E(t);
      const e = l(this._getElement());
      $.one(this._getElement(), "transitionend", () => E(t)), u(this._getElement(), e);
    }

  }

  const Et = {
    backdrop: !0,
    keyboard: !0,
    focus: !0
  },
        Tt = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean"
  };

  class At extends z {
    constructor(t, e) {
      super(t), this._config = this._getConfig(e), this._dialog = i.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1;
    }

    static get Default() {
      return Et;
    }

    static get NAME() {
      return "modal";
    }

    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }

    show(t) {
      if (this._isShown || this._isTransitioning) return;
      this._isAnimated() && (this._isTransitioning = !0);
      const e = $.trigger(this._element, "show.bs.modal", {
        relatedTarget: t
      });
      this._isShown || e.defaultPrevented || (this._isShown = !0, ft(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), $.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', t => this.hide(t)), $.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
        $.one(this._element, "mouseup.dismiss.bs.modal", t => {
          t.target === this._element && (this._ignoreBackdropClick = !0);
        });
      }), this._showBackdrop(() => this._showElement(t)));
    }

    hide(t) {
      if (t && t.preventDefault(), !this._isShown || this._isTransitioning) return;
      if ($.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
      this._isShown = !1;

      const e = this._isAnimated();

      e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), $.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), $.off(this._element, "click.dismiss.bs.modal"), $.off(this._dialog, "mousedown.dismiss.bs.modal"), this._queueCallback(() => this._hideModal(), this._element, e);
    }

    dispose() {
      [window, this._dialog].forEach(t => $.off(t, ".bs.modal")), this._backdrop.dispose(), super.dispose(), $.off(document, "focusin.bs.modal");
    }

    handleUpdate() {
      this._adjustDialog();
    }

    _initializeBackDrop() {
      return new wt({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated()
      });
    }

    _getConfig(t) {
      return t = { ...Et,
        ...K.getDataAttributes(this._element),
        ...t
      }, g("modal", t, Tt), t;
    }

    _showElement(t) {
      const e = this._isAnimated(),
            s = i.findOne(".modal-body", this._dialog);

      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, s && (s.scrollTop = 0), e && b(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus(), this._queueCallback(() => {
        this._config.focus && this._element.focus(), this._isTransitioning = !1, $.trigger(this._element, "shown.bs.modal", {
          relatedTarget: t
        });
      }, this._dialog, e);
    }

    _enforceFocus() {
      $.off(document, "focusin.bs.modal"), $.on(document, "focusin.bs.modal", t => {
        document === t.target || this._element === t.target || this._element.contains(t.target) || this._element.focus();
      });
    }

    _setEscapeEvent() {
      this._isShown ? $.on(this._element, "keydown.dismiss.bs.modal", t => {
        this._config.keyboard && "Escape" === t.key ? (t.preventDefault(), this.hide()) : this._config.keyboard || "Escape" !== t.key || this._triggerBackdropTransition();
      }) : $.off(this._element, "keydown.dismiss.bs.modal");
    }

    _setResizeEvent() {
      this._isShown ? $.on(window, "resize.bs.modal", () => this._adjustDialog()) : $.off(window, "resize.bs.modal");
    }

    _hideModal() {
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
        document.body.classList.remove("modal-open"), this._resetAdjustments(), _t(), $.trigger(this._element, "hidden.bs.modal");
      });
    }

    _showBackdrop(t) {
      $.on(this._element, "click.dismiss.bs.modal", t => {
        this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition());
      }), this._backdrop.show(t);
    }

    _isAnimated() {
      return this._element.classList.contains("fade");
    }

    _triggerBackdropTransition() {
      if ($.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
      const t = this._element.scrollHeight > document.documentElement.clientHeight;
      t || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
      const e = l(this._dialog);
      $.off(this._element, "transitionend"), $.one(this._element, "transitionend", () => {
        this._element.classList.remove("modal-static"), t || ($.one(this._element, "transitionend", () => {
          this._element.style.overflowY = "";
        }), u(this._element, e));
      }), u(this._element, e), this._element.focus();
    }

    _adjustDialog() {
      const t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = gt(),
            s = e > 0;
      (!s && t && !y() || s && !t && y()) && (this._element.style.paddingLeft = e + "px"), (s && !t && !y() || !s && t && y()) && (this._element.style.paddingRight = e + "px");
    }

    _resetAdjustments() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }

    static jQueryInterface(t, e) {
      return this.each(function () {
        const s = At.getInstance(this) || new At(this, "object" == typeof t ? t : {});

        if ("string" == typeof t) {
          if (void 0 === s[t]) throw new TypeError(`No method named "${t}"`);
          s[t](e);
        }
      });
    }

  }

  $.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
    const e = a(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), $.one(e, "show.bs.modal", t => {
      t.defaultPrevented || $.one(e, "hidden.bs.modal", () => {
        f(this) && this.focus();
      });
    }), (At.getInstance(e) || new At(e)).toggle(this);
  }), w(At);
  const kt = {
    backdrop: !0,
    keyboard: !0,
    scroll: !1
  },
        Lt = {
    backdrop: "boolean",
    keyboard: "boolean",
    scroll: "boolean"
  };

  class Ct extends z {
    constructor(t, e) {
      super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._addEventListeners();
    }

    static get NAME() {
      return "offcanvas";
    }

    static get Default() {
      return kt;
    }

    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }

    show(t) {
      this._isShown || $.trigger(this._element, "show.bs.offcanvas", {
        relatedTarget: t
      }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (ft(), this._enforceFocusOnElement(this._element)), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(() => {
        $.trigger(this._element, "shown.bs.offcanvas", {
          relatedTarget: t
        });
      }, this._element, !0));
    }

    hide() {
      this._isShown && ($.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || ($.off(document, "focusin.bs.offcanvas"), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(() => {
        this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || _t(), $.trigger(this._element, "hidden.bs.offcanvas");
      }, this._element, !0)));
    }

    dispose() {
      this._backdrop.dispose(), super.dispose(), $.off(document, "focusin.bs.offcanvas");
    }

    _getConfig(t) {
      return t = { ...kt,
        ...K.getDataAttributes(this._element),
        ...("object" == typeof t ? t : {})
      }, g("offcanvas", t, Lt), t;
    }

    _initializeBackDrop() {
      return new wt({
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide()
      });
    }

    _enforceFocusOnElement(t) {
      $.off(document, "focusin.bs.offcanvas"), $.on(document, "focusin.bs.offcanvas", e => {
        document === e.target || t === e.target || t.contains(e.target) || t.focus();
      }), t.focus();
    }

    _addEventListeners() {
      $.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', () => this.hide()), $.on(this._element, "keydown.dismiss.bs.offcanvas", t => {
        this._config.keyboard && "Escape" === t.key && this.hide();
      });
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = A.get(this, "bs.offcanvas") || new Ct(this, "object" == typeof t ? t : {});

        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }

  }

  $.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
    const e = a(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), p(this)) return;
    $.one(e, "hidden.bs.offcanvas", () => {
      f(this) && this.focus();
    });
    const s = i.findOne(".offcanvas.show");
    s && s !== e && Ct.getInstance(s).hide(), (A.get(e, "bs.offcanvas") || new Ct(e)).toggle(this);
  }), $.on(window, "load.bs.offcanvas.data-api", () => {
    i.find(".offcanvas.show").forEach(t => (A.get(t, "bs.offcanvas") || new Ct(t)).show());
  }), w(Ct);

  const Dt = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        Nt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
        St = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        Ot = (t, e) => {
    const s = t.nodeName.toLowerCase();
    if (e.includes(s)) return !Dt.has(s) || Boolean(Nt.test(t.nodeValue) || St.test(t.nodeValue));
    const i = e.filter(t => t instanceof RegExp);

    for (let t = 0, e = i.length; t < e; t++) if (i[t].test(s)) return !0;

    return !1;
  };

  function It(t, e, s) {
    if (!t.length) return t;
    if (s && "function" == typeof s) return s(t);
    const i = new window.DOMParser().parseFromString(t, "text/html"),
          n = Object.keys(e),
          o = [].concat(...i.body.querySelectorAll("*"));

    for (let t = 0, s = o.length; t < s; t++) {
      const s = o[t],
            i = s.nodeName.toLowerCase();

      if (!n.includes(i)) {
        s.parentNode.removeChild(s);
        continue;
      }

      const r = [].concat(...s.attributes),
            a = [].concat(e["*"] || [], e[i] || []);
      r.forEach(t => {
        Ot(t, a) || s.removeAttribute(t.nodeName);
      });
    }

    return i.body.innerHTML;
  }

  const xt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
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

  class Bt extends z {
    constructor(t, e) {
      if (void 0 === s) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners();
    }

    static get Default() {
      return Ht;
    }

    static get NAME() {
      return "tooltip";
    }

    static get Event() {
      return Rt;
    }

    static get DefaultType() {
      return Pt;
    }

    enable() {
      this._isEnabled = !0;
    }

    disable() {
      this._isEnabled = !1;
    }

    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }

    toggle(t) {
      if (this._isEnabled) if (t) {
        const e = this._initializeOnDelegatedTarget(t);

        e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
      } else {
        if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);

        this._enter(null, this);
      }
    }

    dispose() {
      clearTimeout(this._timeout), $.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip), this._popper && this._popper.destroy(), super.dispose();
    }

    show() {
      if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled) return;
      const t = $.trigger(this._element, this.constructor.Event.SHOW),
            e = m(this._element),
            i = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
      if (t.defaultPrevented || !i) return;
      const o = this.getTipElement(),
            r = n(this.constructor.NAME);
      o.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this.setContent(), this._config.animation && o.classList.add("fade");

      const a = "function" == typeof this._config.placement ? this._config.placement.call(this, o, this._element) : this._config.placement,
            l = this._getAttachment(a);

      this._addAttachmentClass(l);

      const {
        container: c
      } = this._config;
      A.set(o, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (c.appendChild(o), $.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = s.createPopper(this._element, o, this._getPopperConfig(l)), o.classList.add("show");
      const h = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
      h && o.classList.add(...h.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => {
        $.on(t, "mouseover", _);
      });
      const d = this.tip.classList.contains("fade");

      this._queueCallback(() => {
        const t = this._hoverState;
        this._hoverState = null, $.trigger(this._element, this.constructor.Event.SHOWN), "out" === t && this._leave(null, this);
      }, this.tip, d);
    }

    hide() {
      if (!this._popper) return;
      const t = this.getTipElement();
      if ($.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
      t.classList.remove("show"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => $.off(t, "mouseover", _)), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
      const e = this.tip.classList.contains("fade");
      this._queueCallback(() => {
        this._isWithActiveTrigger() || ("show" !== this._hoverState && t.parentNode && t.parentNode.removeChild(t), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), $.trigger(this._element, this.constructor.Event.HIDDEN), this._popper && (this._popper.destroy(), this._popper = null));
      }, this.tip, e), this._hoverState = "";
    }

    update() {
      null !== this._popper && this._popper.update();
    }

    isWithContent() {
      return Boolean(this.getTitle());
    }

    getTipElement() {
      if (this.tip) return this.tip;
      const t = document.createElement("div");
      return t.innerHTML = this._config.template, this.tip = t.children[0], this.tip;
    }

    setContent() {
      const t = this.getTipElement();
      this.setElementContent(i.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show");
    }

    setElementContent(t, e) {
      if (null !== t) return h(e) ? (e = d(e), void (this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = It(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
    }

    getTitle() {
      let t = this._element.getAttribute("data-bs-original-title");

      return t || (t = "function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title), t;
    }

    updateAttachment(t) {
      return "right" === t ? "end" : "left" === t ? "start" : t;
    }

    _initializeOnDelegatedTarget(t, e) {
      const s = this.constructor.DATA_KEY;
      return (e = e || A.get(t.delegateTarget, s)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), A.set(t.delegateTarget, s, e)), e;
    }

    _getOffset() {
      const {
        offset: t
      } = this._config;
      return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t;
    }

    _getPopperConfig(t) {
      const e = {
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
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
          name: "onChange",
          enabled: !0,
          phase: "afterWrite",
          fn: t => this._handlePopperPlacementChange(t)
        }],
        onFirstUpdate: t => {
          t.options.placement !== t.placement && this._handlePopperPlacementChange(t);
        }
      };
      return { ...e,
        ...("function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig)
      };
    }

    _addAttachmentClass(t) {
      this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t));
    }

    _getAttachment(t) {
      return Mt[t.toUpperCase()];
    }

    _setListeners() {
      this._config.trigger.split(" ").forEach(t => {
        if ("click" === t) $.on(this._element, this.constructor.Event.CLICK, this._config.selector, t => this.toggle(t));else if ("manual" !== t) {
          const e = "hover" === t ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                s = "hover" === t ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
          $.on(this._element, e, this._config.selector, t => this._enter(t)), $.on(this._element, s, this._config.selector, t => this._leave(t));
        }
      }), this._hideModalHandler = () => {
        this._element && this.hide();
      }, $.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = { ...this._config,
        trigger: "manual",
        selector: ""
      } : this._fixTitle();
    }

    _fixTitle() {
      const t = this._element.getAttribute("title"),
            e = typeof this._element.getAttribute("data-bs-original-title");

      (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
    }

    _enter(t, e) {
      e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e._config.delay && e._config.delay.show ? e._timeout = setTimeout(() => {
        "show" === e._hoverState && e.show();
      }, e._config.delay.show) : e.show());
    }

    _leave(t, e) {
      e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(() => {
        "out" === e._hoverState && e.hide();
      }, e._config.delay.hide) : e.hide());
    }

    _isWithActiveTrigger() {
      for (const t in this._activeTrigger) if (this._activeTrigger[t]) return !0;

      return !1;
    }

    _getConfig(t) {
      const e = K.getDataAttributes(this._element);
      return Object.keys(e).forEach(t => {
        jt.has(t) && delete e[t];
      }), (t = { ...this.constructor.Default,
        ...e,
        ...("object" == typeof t && t ? t : {})
      }).container = !1 === t.container ? document.body : d(t.container), "number" == typeof t.delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), g("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = It(t.template, t.allowList, t.sanitizeFn)), t;
    }

    _getDelegateConfig() {
      const t = {};
      if (this._config) for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
      return t;
    }

    _cleanTipClass() {
      const t = this.getTipElement(),
            e = t.getAttribute("class").match(xt);
      null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e));
    }

    _handlePopperPlacementChange(t) {
      const {
        state: e
      } = t;
      e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
    }

    static jQueryInterface(t) {
      return this.each(function () {
        let e = A.get(this, "bs.tooltip");
        const s = "object" == typeof t && t;

        if ((e || !/dispose|hide/.test(t)) && (e || (e = new Bt(this, s)), "string" == typeof t)) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }

  }

  w(Bt);
  const $t = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        zt = { ...Bt.Default,
    placement: "right",
    offset: [0, 8],
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  },
        Ut = { ...Bt.DefaultType,
    content: "(string|element|function)"
  },
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

  class Ft extends Bt {
    static get Default() {
      return zt;
    }

    static get NAME() {
      return "popover";
    }

    static get Event() {
      return qt;
    }

    static get DefaultType() {
      return Ut;
    }

    isWithContent() {
      return this.getTitle() || this._getContent();
    }

    setContent() {
      const t = this.getTipElement();
      this.setElementContent(i.findOne(".popover-header", t), this.getTitle());

      let e = this._getContent();

      "function" == typeof e && (e = e.call(this._element)), this.setElementContent(i.findOne(".popover-body", t), e), t.classList.remove("fade", "show");
    }

    _addAttachmentClass(t) {
      this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t));
    }

    _getContent() {
      return this._element.getAttribute("data-bs-content") || this._config.content;
    }

    _cleanTipClass() {
      const t = this.getTipElement(),
            e = t.getAttribute("class").match($t);
      null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e));
    }

    static jQueryInterface(t) {
      return this.each(function () {
        let e = A.get(this, "bs.popover");
        const s = "object" == typeof t ? t : null;

        if ((e || !/dispose|hide/.test(t)) && (e || (e = new Ft(this, s), A.set(this, "bs.popover", e)), "string" == typeof t)) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }

  }

  w(Ft);
  const Wt = {
    offset: 10,
    method: "auto",
    target: ""
  },
        Kt = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  };

  class Vt extends z {
    constructor(t, e) {
      super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, $.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()), this.refresh(), this._process();
    }

    static get Default() {
      return Wt;
    }

    static get NAME() {
      return "scrollspy";
    }

    refresh() {
      const t = this._scrollElement === this._scrollElement.window ? "offset" : "position",
            e = "auto" === this._config.method ? t : this._config.method,
            s = "position" === e ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), i.find(this._selector).map(t => {
        const n = r(t),
              o = n ? i.findOne(n) : null;

        if (o) {
          const t = o.getBoundingClientRect();
          if (t.width || t.height) return [K[e](o).top + s, n];
        }

        return null;
      }).filter(t => t).sort((t, e) => t[0] - e[0]).forEach(t => {
        this._offsets.push(t[0]), this._targets.push(t[1]);
      });
    }

    dispose() {
      $.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
    }

    _getConfig(t) {
      if ("string" != typeof (t = { ...Wt,
        ...K.getDataAttributes(this._element),
        ...("object" == typeof t && t ? t : {})
      }).target && h(t.target)) {
        let {
          id: e
        } = t.target;
        e || (e = n("scrollspy"), t.target.id = e), t.target = "#" + e;
      }

      return g("scrollspy", t, Kt), t;
    }

    _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }

    _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }

    _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }

    _process() {
      const t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            s = this._config.offset + e - this._getOffsetHeight();

      if (this._scrollHeight !== e && this.refresh(), t >= s) {
        const t = this._targets[this._targets.length - 1];
        this._activeTarget !== t && this._activate(t);
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

        for (let e = this._offsets.length; e--;) this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e]);
      }
    }

    _activate(t) {
      this._activeTarget = t, this._clear();

      const e = this._selector.split(",").map(e => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`),
            s = i.findOne(e.join(","));

      s.classList.contains("dropdown-item") ? (i.findOne(".dropdown-toggle", s.closest(".dropdown")).classList.add("active"), s.classList.add("active")) : (s.classList.add("active"), i.parents(s, ".nav, .list-group").forEach(t => {
        i.prev(t, ".nav-link, .list-group-item").forEach(t => t.classList.add("active")), i.prev(t, ".nav-item").forEach(t => {
          i.children(t, ".nav-link").forEach(t => t.classList.add("active"));
        });
      })), $.trigger(this._scrollElement, "activate.bs.scrollspy", {
        relatedTarget: t
      });
    }

    _clear() {
      i.find(this._selector).filter(t => t.classList.contains("active")).forEach(t => t.classList.remove("active"));
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = Vt.getInstance(this) || new Vt(this, "object" == typeof t ? t : {});

        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }

  }

  $.on(window, "load.bs.scrollspy.data-api", () => {
    i.find('[data-bs-spy="scroll"]').forEach(t => new Vt(t));
  }), w(Vt);

  class Qt extends z {
    static get NAME() {
      return "tab";
    }

    show() {
      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
      let t;

      const e = a(this._element),
            s = this._element.closest(".nav, .list-group");

      if (s) {
        const e = "UL" === s.nodeName || "OL" === s.nodeName ? ":scope > li > .active" : ".active";
        t = i.find(e, s), t = t[t.length - 1];
      }

      const n = t ? $.trigger(t, "hide.bs.tab", {
        relatedTarget: this._element
      }) : null;
      if ($.trigger(this._element, "show.bs.tab", {
        relatedTarget: t
      }).defaultPrevented || null !== n && n.defaultPrevented) return;

      this._activate(this._element, s);

      const o = () => {
        $.trigger(t, "hidden.bs.tab", {
          relatedTarget: this._element
        }), $.trigger(this._element, "shown.bs.tab", {
          relatedTarget: t
        });
      };

      e ? this._activate(e, e.parentNode, o) : o();
    }

    _activate(t, e, s) {
      const n = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? i.children(e, ".active") : i.find(":scope > li > .active", e))[0],
            o = s && n && n.classList.contains("fade"),
            r = () => this._transitionComplete(t, n, s);

      n && o ? (n.classList.remove("show"), this._queueCallback(r, t, !0)) : r();
    }

    _transitionComplete(t, e, s) {
      if (e) {
        e.classList.remove("active");
        const t = i.findOne(":scope > .dropdown-menu .active", e.parentNode);
        t && t.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
      }

      t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), b(t), t.classList.contains("fade") && t.classList.add("show");
      let n = t.parentNode;

      if (n && "LI" === n.nodeName && (n = n.parentNode), n && n.classList.contains("dropdown-menu")) {
        const e = t.closest(".dropdown");
        e && i.find(".dropdown-toggle", e).forEach(t => t.classList.add("active")), t.setAttribute("aria-expanded", !0);
      }

      s && s();
    }

    static jQueryInterface(t) {
      return this.each(function () {
        const e = A.get(this, "bs.tab") || new Qt(this);

        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }

  }

  $.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), p(this) || (A.get(this, "bs.tab") || new Qt(this)).show();
  }), w(Qt);
  const Xt = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
        Yt = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  };

  class Gt extends z {
    constructor(t, e) {
      super(t), this._config = this._getConfig(e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
    }

    static get DefaultType() {
      return Xt;
    }

    static get Default() {
      return Yt;
    }

    static get NAME() {
      return "toast";
    }

    show() {
      $.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), b(this._element), this._element.classList.add("showing"), this._queueCallback(() => {
        this._element.classList.remove("showing"), this._element.classList.add("show"), $.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide();
      }, this._element, this._config.animation));
    }

    hide() {
      this._element.classList.contains("show") && ($.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.remove("show"), this._queueCallback(() => {
        this._element.classList.add("hide"), $.trigger(this._element, "hidden.bs.toast");
      }, this._element, this._config.animation)));
    }

    dispose() {
      this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), super.dispose();
    }

    _getConfig(t) {
      return t = { ...Yt,
        ...K.getDataAttributes(this._element),
        ...("object" == typeof t && t ? t : {})
      }, g("toast", t, this.constructor.DefaultType), t;
    }

    _maybeScheduleHide() {
      this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay)));
    }

    _onInteraction(t, e) {
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
      const s = t.relatedTarget;
      this._element === s || this._element.contains(s) || this._maybeScheduleHide();
    }

    _setListeners() {
      $.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', () => this.hide()), $.on(this._element, "mouseover.bs.toast", t => this._onInteraction(t, !0)), $.on(this._element, "mouseout.bs.toast", t => this._onInteraction(t, !1)), $.on(this._element, "focusin.bs.toast", t => this._onInteraction(t, !0)), $.on(this._element, "focusout.bs.toast", t => this._onInteraction(t, !1));
    }

    _clearTimeout() {
      clearTimeout(this._timeout), this._timeout = null;
    }

    static jQueryInterface(t) {
      return this.each(function () {
        let e = A.get(this, "bs.toast");

        if (e || (e = new Gt(this, "object" == typeof t && t)), "string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }

  }

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

/***/ "./public/js/change-password.js":
/*!**************************************!*\
  !*** ./public/js/change-password.js ***!
  \**************************************/
/***/ (function() {

const formProfileChangePassword = document.querySelector(".form__profile-change-password"),
      changePasswordBtn = document.querySelector(".change__password-btn"),
      toggleShowPassword = document.querySelector(".show__password"),
      passwordInputField = document.querySelectorAll(".change__password-field"),
      passwordCheckerInfo = document.querySelectorAll(".password__checker"),
      cirlceCheckIcon = document.querySelectorAll(".bi-check-circle-fill"),
      loadingSpinnerChangePassword = document.querySelector(".change__password-loading-spinner"),
      alertBoxChangePassword = document.querySelectorAll(".alert__change-password"),
      alertMessageChangePassword = document.querySelectorAll(".change__password-alert-message");
/* Password input field in array 
1. input[0] = Current Password
2. input[1] = New Password
3. input[2] = Confirm New Password
 */
//toggle show password for all password input field

toggleShowPassword.addEventListener("change", e => {
  e.preventDefault();
  passwordInputField.forEach(item => {
    const type = item.getAttribute("type") === "password" ? "text" : "password";
    item.setAttribute("type", type);

    if (toggleShowPassword.checked) {
      item.setAttribute("type", type);
    } else {
      item.setAttribute("type", type);
    }
  });
}); //password checker pasword length should be 8 characters long

passwordInputField[1].addEventListener("input", e => {
  e.preventDefault();
  passwordCheckerInfo[0].classList.remove("d-none");

  if (e.target.value.length >= 8) {
    passwordCheckerInfo[0].classList.remove("text-danger");
    passwordCheckerInfo[0].classList.add("text-success");
    cirlceCheckIcon[0].classList.remove("d-none");
  } else {
    passwordCheckerInfo[0].classList.remove("text-success");
    passwordCheckerInfo[0].classList.add("text-danger");
    cirlceCheckIcon[0].classList.add("d-none");
  }
}); //confirm password to check if this confirm password are equals to new password

passwordInputField[2].addEventListener("input", e => {
  e.preventDefault();
  passwordCheckerInfo[1].classList.remove("d-none");

  if (e.target.value === passwordInputField[1].value) {
    passwordCheckerInfo[1].classList.remove("text-danger");
    passwordCheckerInfo[1].classList.add("text-success");
    passwordCheckerInfo[1].innerHTML = `Password matched. <i class="bi bi-check-circle-fill f_size-1"></i>`;
    changePasswordBtn.removeAttribute("disabled");
  } else {
    passwordCheckerInfo[1].classList.remove("text-success");
    passwordCheckerInfo[1].classList.add("text-danger");
    passwordCheckerInfo[1].innerHTML = `Password matched.`;
    changePasswordBtn.setAttribute("disabled", "true");
  }
}); //submit change password request

formProfileChangePassword.addEventListener("submit", e => {
  e.preventDefault();
  loadingSpinnerChangePassword.classList.remove("d-none");
  changePasswordBtn.setAttribute("disabled", "true");

  const sendChangePasswordRequest = async () => {
    const changePasswordURL = "/change-password";

    try {
      if (passwordInputField[1].value === passwordInputField[2].value) {
        const response = await fetch(changePasswordURL, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          mode: "cors",
          cache: "no-cache",
          body: JSON.stringify({
            current_password: passwordInputField[0].value,
            new_password: passwordInputField[1].value,
            confirm_new_password: passwordInputField[2].value
          })
        });

        if (response.ok) {
          const data = await response.json();
          return data;
        } else if (response.status === 401) {
          const data = await response.json();
          return data;
        } else {
          return;
        }
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  sendChangePasswordRequest().then(res => {
    loadingSpinnerChangePassword.classList.add("d-none");

    if (res.error) {
      alertBoxChangePassword[1].classList.remove("d-none");
      alertBoxChangePassword[1].classList.add("error__shake");
      alertMessageChangePassword[1].textContent = res.error_message;
      passwordCheckerInfo.forEach(item => item.classList.add("d-none"));
      passwordInputField.forEach(item => item.value = "");
      changePasswordBtn.setAttribute("disabled", "true");
      setTimeout(() => {
        alertBoxChangePassword[1].classList.add("d-none");
      }, 6000);
    }

    if (res.success) {
      alertBoxChangePassword[0].classList.remove("d-none");
      alertMessageChangePassword[0].textContent = res.success_message;
      passwordCheckerInfo.forEach(item => item.classList.add("d-none"));
      passwordInputField.forEach(item => item.value = "");
      changePasswordBtn.setAttribute("disabled", "true");
      setTimeout(() => {
        alertBoxChangePassword[0].classList.add("d-none");
      }, 6000);
    }
  }).catch(err => {
    console.error(err);
  });
});

/***/ }),

/***/ "./public/js/comment.js":
/*!******************************!*\
  !*** ./public/js/comment.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch_comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-comment */ "./public/js/fetch-comment.js");
/* eslint-disable no-undef */

window.addEventListener("load", async () => {
  const btnComment = document.querySelector(".btn__comment");
  const commentForm = document.querySelector(".form__comment");
  const loadingSpinner = document.querySelector(".loading-spinner");
  const sessionTriggerFocusStorage = sessionStorage;
  const NEW_COMMENT = "new_comment";
  const comment_body = document.querySelectorAll(".comment__body"); //comment enable button

  commentForm.addEventListener("submit", e => {
    e.preventDefault();
    loadingSpinner.classList.remove("d-none");
    _fetch_comment__WEBPACK_IMPORTED_MODULE_0__.default;

    const postComment = async () => {
      const response = await fetch("/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        mode: "cors",
        credentials: "include",
        body: JSON.stringify({
          comment_body: tinymce.get("commentField").getContent(),
          post_id: btnComment.dataset.postId,
          subject_id: btnComment.dataset.subjectId
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      }
    };

    postComment().then(res => {
      console.log("Comment Success", res);
      tinymce.get("commentField").setContent("".trim());
      sessionTriggerFocusStorage.setItem(NEW_COMMENT, res.new_comment);
      window.location.href = res.url;
    }).catch(err => console.error(err));
  }); //comment autofocus

  const focusToNewComment = () => {
    const commentToFocus = sessionTriggerFocusStorage.getItem(NEW_COMMENT);

    for (let i = 0; i < comment_body.length; i++) {
      Array.from(comment_body).indexOf(comment_body[i]);
      const commentBodyFocus = comment_body[i].getAttribute("id");

      if (commentBodyFocus === commentToFocus) {
        window.location.hash = `#${commentToFocus}`;
        comment_body[i].classList.add("new__comment");
        setTimeout(() => {
          comment_body[i].classList.add("fade__new-comment");
        }, 4000);
      }
    }

    sessionTriggerFocusStorage.clear();
  };

  focusToNewComment();
});

/***/ }),

/***/ "./public/js/copy-code.js":
/*!********************************!*\
  !*** ./public/js/copy-code.js ***!
  \********************************/
/***/ (function() {

const checkSnippetCode = document.querySelectorAll('pre[class^="language"]');
checkSnippetCode.forEach((item, index) => {
  const copyCodeBtn = document.createElement("button");
  checkSnippetCode[index].style.setProperty("position", "relative !important");
  copyCodeBtn.setAttribute("class", "copy__snippet-code");
  copyCodeBtn.textContent = "Copy Snippet";
  copyCodeBtn.classList.add("copy__code-snippet");
  item.appendChild(copyCodeBtn);
});
const copyCode = document.querySelectorAll(".copy__snippet-code");

for (let i = 0; i < copyCode.length; i++) {
  copyCode[i].addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();
    initializeCopyCodeBtn(e, i);
  });
}

const initializeCopyCodeBtn = (e, i) => {
  Array.from(copyCode).indexOf(e.target);
  copyCode[i].style.setProperty("background", "#119000");
  copyCode[i].style.setProperty("color", "#fff");
  copyCode[i].innerHTML = "Copy &check;";
  let snippetContent = checkSnippetCode[i].textContent.replace("Copy ✓", "");
  const dummyTextArea = document.createElement("textarea");
  dummyTextArea.value = snippetContent;
  dummyTextArea.style.position = "absolute";
  dummyTextArea.style.left = "-100%";
  document.body.appendChild(dummyTextArea);
  dummyTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(dummyTextArea);
};

/***/ }),

/***/ "./public/js/create-post.js":
/*!**********************************!*\
  !*** ./public/js/create-post.js ***!
  \**********************************/
/***/ (function() {

/* eslint-disable no-useless-escape */
const btnSubmitPost = document.querySelector(".btn__submit-post");
const formCreatePost = document.querySelector(".form__create-post");
formCreatePost.addEventListener("submit", e => {
  fetch("/send-notification", {
    method: "GET"
  }).then(res => res.json()).then(data => {
    if (data) {
      window.location.href = data.url;
    }
  }).catch(err => console.error(err));
});

/***/ }),

/***/ "./public/js/fetch-comment.js":
/*!************************************!*\
  !*** ./public/js/fetch-comment.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const renderComments = () => {
  const fetchAllCommentForPost = async () => {
    try {
      const response = await fetch("/comments", {
        method: "GET",
        cache: "no-cache",
        mode: "cors"
      });

      if (response.ok) {
        let data = response.json();
        return data;
      } else {
        const message = {
          error_message: "Unabled to fetch comment, Please refresh the page"
        };
        return message;
      }
    } catch (err) {
      console.error(err);
    }
  };

  fetchAllCommentForPost().then(res => {}).catch(err => console.error(err));
};

/* harmony default export */ __webpack_exports__["default"] = (renderComments);

/***/ }),

/***/ "./public/js/image-load.js":
/*!*********************************!*\
  !*** ./public/js/image-load.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_logo_insider_hub_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/logo/insider-hub.png */ "./public/assets/logo/insider-hub.png");

window.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelectorAll(".logo");
  logo.forEach(item => item.src = _assets_logo_insider_hub_png__WEBPACK_IMPORTED_MODULE_0__.default);
});

/***/ }),

/***/ "./public/js/login.js":
/*!****************************!*\
  !*** ./public/js/login.js ***!
  \****************************/
/***/ (function() {

window.addEventListener("DOMContentLoaded", () => {
  const loadingContainer = document.querySelector(".loading-container");
  const btnSignIn = document.querySelector(".btn__sign-in");
  const rememberMe = document.querySelector(".remember-me");
  const formLogin = document.querySelector(".form__container-login"); //input for credentials save to session storage

  const inputEmail = document.querySelector(".user__email");
  const inputPassword = document.querySelector(".user__password");
  let loginStorage = localStorage; // Set LocalStorage for email only and not inlcuding password Storage

  let user_email = loginStorage.getItem("user_email");
  inputEmail.value = user_email;
  let rememberMeState = loginStorage.getItem("remember_me_state");

  if (rememberMeState === "true") {
    rememberMe.checked = true;
  } else {
    rememberMe.checked = false;
  }

  rememberMe.addEventListener("change", e => {
    e.preventDefault();

    if (rememberMe.checked) {
      let setRememberMe = true;
      loginStorage.setItem("remember_me_state", setRememberMe);
    } else {
      let setRememberMe = false;
      loginStorage.setItem("remember_me_state", setRememberMe);
    }
  });
  formLogin.addEventListener("submit", e => {
    e.preventDefault();
    loadingContainer.classList.remove("d-none");

    const sendLoginRequest = async () => {
      const response = await fetch("/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        mode: "cors",
        cache: "no-cache",
        credentials: "include",
        body: JSON.stringify({
          remember_me: rememberMe.checked ? true : false,
          email: inputEmail.value,
          password: inputPassword.value
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else if (response.status >= 400 && response.status <= 499) {
        window.location.reload();
      }
    };

    sendLoginRequest().then(res => {
      window.location.href = res.authenticate_url;
    }).catch(err => console.error(err));
  });
  btnSignIn.addEventListener("click", () => {
    const loginCredentials = {
      user_email: inputEmail.value
    };
    loginStorage.setItem("user_email", loginCredentials.user_email);
  });
});

/***/ }),

/***/ "./public/js/navburger.anim.js":
/*!*************************************!*\
  !*** ./public/js/navburger.anim.js ***!
  \*************************************/
/***/ (function() {

window.addEventListener("DOMContentLoaded", () => {
  const navToggler = document.querySelector(".burger-toggler");
  const navbarContainer = document.querySelector(".--nav-list-container");
  let navIsOpen = false;

  if (navToggler) {
    navToggler.addEventListener("click", () => {
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

/***/ "./public/js/notification/notification_api.js":
/*!****************************************************!*\
  !*** ./public/js/notification/notification_api.js ***!
  \****************************************************/
/***/ (function() {

/* window.addEventListener("load", () => {

  const checkNewPost = async () => {
    const response = await fetch("/new-post", {
      method: "GET",
      cache: "no-cache",
      keepalive: true,
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  };

  let postLengthChecker = 0; //for post length checker
  let currentPostLength = 0; //fetch one and get current post value

  //Get the current post length
  checkNewPost()
    .then((res) => {
      currentPostLength = res;
    })
    .catch((err) => console.info(err));

  //Check for new post
  setInterval(() => {
    checkNewPost()
      .then((res) => {
        postLengthChecker = res;
        if (postLengthChecker > currentPostLength) {
          window.alert("NEW POST!");
          currentPostLength++;
        }
      })
      .catch((err) => console.info(err));
  }, 10000);
  console.log(postLengthChecker);
  console.log(currentPostLength);
});
 */

/***/ }),

/***/ "./public/js/option_post_toggle.js":
/*!*****************************************!*\
  !*** ./public/js/option_post_toggle.js ***!
  \*****************************************/
/***/ (function() {

window.addEventListener("DOMContentLoaded", () => {
  const toggleOptionBtn = document.querySelectorAll(".pin__post");
  const optionContainer = document.querySelectorAll(".option-container"); //for delete dialog

  const deleteOptionBtn = document.querySelectorAll(".delete__option-btn");
  const deleteDialog = document.querySelectorAll(".custom__delete-dialog");
  const deleteDialogCancel = document.querySelectorAll(".custom__dialog-btn-cancel");
  const deleteDialogConfirm = document.querySelectorAll(".custom__dialog-btn-confirm");
  const pinPost = document.querySelectorAll(".pin__option-btn");
  const unPinPost = document.querySelectorAll(".unpin__option-btn"); // Option Card open

  let optionIsOpen = false; // for toggle options

  for (let i = 0; i < toggleOptionBtn.length; i++) {
    toggleOptionBtn[i].addEventListener("click", e => {
      if (!optionIsOpen) {
        optionContainer[i].classList.remove("d-none");
        optionIsOpen = true;
      } else {
        optionContainer[i].classList.add("d-none");
        optionIsOpen = false;
      }

      toggleOptions(e, toggleOptionBtn[i].dataset.postId);
    });
  }

  const toggleOptions = e => {
    Array.from(toggleOptionBtn).indexOf(e.target) + 1;
  }; //Open DELETE dialog -- Close or Confirm Delete


  for (let i = 0; i < deleteOptionBtn.length; i++) {
    deleteOptionBtn[i].addEventListener("click", e => {
      deleteDialog[i].classList.remove("d-none");
      deletePostOpenDialog(e);
    });
    deleteDialogCancel[i].addEventListener("click", e => {
      deleteDialog[i].classList.add("d-none");
      closeDialog(e);
    });
    deleteDialogConfirm[i].addEventListener("click", e => {
      confirmDeletePost(e, deleteDialogConfirm[i].dataset.postId);
    });
  } // Open dialog for delete confirmation


  const deletePostOpenDialog = e => {
    Array.from(deleteOptionBtn).indexOf(e.target) + 1;
  }; //Cancel/Close dialog delete


  const closeDialog = e => {
    Array.from(deleteDialogCancel).indexOf(e.target) + 1;
  }; //Delete post/answer


  const confirmDeletePost = (e, dataPostId) => {
    Array.from(deleteDialogConfirm).indexOf(e.target) + 1;

    const deleteOnePost = async () => {
      try {
        const URL_DELETE_POST = `/post-options?post_id=${dataPostId}`;
        const response = await fetch(URL_DELETE_POST, {
          method: "DELETE",
          cache: "no-cache",
          mode: "cors"
        });
        const data = await response.json();

        if (response.ok) {
          return data;
        } else {
          const message = {
            error: "Something went wrong on deleting the content."
          };
          return message;
        }
      } catch (err) {
        console.error(err);
      }
    }; //DELETE REQUEST PROMISE


    deleteOnePost().then(res => {
      window.location.href = res.url;
    }).catch(err => console.error(err));
  }; //pin options post push


  for (let i = 0; i < pinPost.length; i++) {
    pinPost[i].addEventListener("click", e => {
      e.preventDefault();
      initializePinPost(e, pinPost[i].dataset.postId);
    });
  }

  for (let i = 0; i < unPinPost.length; i++) {
    unPinPost[i].addEventListener("click", e => {
      e.preventDefault();
      initializeUnPinPost(e, unPinPost[i].dataset.postId);
    });
  } //Pin Post


  const initializePinPost = (e, dataPostId) => {
    Array.from(pinPost).indexOf(e.target) + 1;
    const setIsPinPost = true;
    pinOptionConfig(e, dataPostId, setIsPinPost).then(res => {
      window.location.href = res.url;
    });
  }; //Unpin post


  const initializeUnPinPost = (e, dataPostId) => {
    Array.from(unPinPost).indexOf(e.target);
    const setIsPinPost = false;
    pinOptionConfig(e, dataPostId, setIsPinPost).then(res => {
      window.location.href = res.url;
    });
  };

  const pinOptionConfig = async (e, dataPostId, setPinPost) => {
    try {
      const URL_PIN_POST = `/post-options/update?post_id=${dataPostId}`;
      const response = await fetch(URL_PIN_POST, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        cache: "no-cache",
        mode: "cors",
        body: JSON.stringify({
          pin_post: setPinPost
        })
      });
      const data = await response.json();

      if (response.ok) {
        return data;
      } else {
        const message = {
          message: "Something went wrong on pinning the post"
        };
        return message;
      }
    } catch (err) {
      console.error(err);
    }
  };
});

/***/ }),

/***/ "./public/js/options_post.js":
/*!***********************************!*\
  !*** ./public/js/options_post.js ***!
  \***********************************/
/***/ (function() {

window.addEventListener("DOMContentLoaded", () => {
  const deleteButton = document.querySelector(".btn__delete-answer");
  const dataPostId_delete = deleteButton.dataset.postId;
  const loadingSpinner = document.querySelectorAll(".loading-spinner"); // Update form

  const updateForm = document.querySelector(".update__form");
  const updateTitle = document.querySelector(".update__title");
  const updateTag = document.querySelector(".update__tag");
  const updateBody = document.querySelector(".update__body");
  const updateBtn = document.querySelector(".btn__update-answer");
  const dataPostId_update = updateBtn.dataset.postId; //click event to trigger delete request

  deleteButton.addEventListener("click", e => {
    //send Delete Http Request
    e.preventDefault();
    loadingSpinner.forEach(item => item.classList.remove("d-none"));

    const deleteOnePost = async () => {
      try {
        const response = await fetch(`/post-options?post_id=${dataPostId_delete}`, {
          method: "DELETE",
          cache: "no-cache",
          mode: "cors"
        });
        const data = await response.json();

        if (response.ok) {
          return data;
        } else {
          const message = {
            error: "Something went wrong on deleting the content."
          };
          return message;
        }
      } catch (err) {
        console.error(err);
      }
    }; //DELETE REQUEST PROMISE


    deleteOnePost().then(res => {
      window.location.href = res.url;
    }).catch(err => console.error(err));
  }); //click event to trigger put request

  updateForm.addEventListener("submit", e => {
    e.preventDefault();
    loadingSpinner.forEach(item => item.classList.remove("d-none"));
    const postUpdatedContent = {
      post_title: updateTitle.value,
      post_tag: updateTag.value,
      // eslint-disable-next-line no-undef
      post_body: tinymce.get("shareAnswerForm").getContent()
    };

    const updateOnePost = async () => {
      try {
        const response = await fetch(`/post-options?post_id=${dataPostId_update}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          cache: "no-cache",
          mode: "cors",
          body: JSON.stringify(postUpdatedContent)
        });
        const data = await response.json();

        if (response.ok) {
          return data;
        } else {
          const message = {
            message: "Something went wrong when attempted to update the answer."
          };
          return message;
        }
      } catch (err) {
        console.error(err);
      }
    }; //UPDATE REQUEST PROMISE


    updateOnePost().then(res => {
      window.location.href = res.url;
    }).catch(err => console.error(err));
  });
});

/***/ }),

/***/ "./public/js/profile_settings.js":
/*!***************************************!*\
  !*** ./public/js/profile_settings.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

window.addEventListener("DOMContentLoaded", () => {
  __webpack_require__(/*! ./change-password */ "./public/js/change-password.js");

  const changePasswordBtnDropDown = document.querySelector(".change__password-option-header");
  const changePasswordContainer = document.querySelector(".change__password-option");
  const btnUpdateProfileSettings = document.querySelector(".btn__update-profile-info"); //btn to update information not password

  let imageFile;
  let isOpen = false;
  changePasswordBtnDropDown.addEventListener("click", () => {
    if (!isOpen) {
      changePasswordContainer.classList.add("open");
      btnUpdateProfileSettings ? btnUpdateProfileSettings.classList.add("d-none") : "";
      isOpen = true;
    } else {
      changePasswordContainer.classList.remove("open");
      btnUpdateProfileSettings ? btnUpdateProfileSettings.classList.remove("d-none") : "";
      isOpen = false;
    }
  }); //PREVIEW UPLOADED FILES AND WORKLOADS

  const uploadProfileImgPicker = document.querySelector(".upload__profile-image-picker");
  const alertProfileSettings = document.querySelector(".profile__settings-alert");
  const alertTextProfileSettings = document.querySelector(".profile__settings-alert-text");
  uploadProfileImgPicker.addEventListener("change", () => {
    const file = uploadProfileImgPicker.files[0];
    const uploadProfileImgPreview = document.querySelector(".preview__profile-image");
    const imageReader = new FileReader();
    imageReader.addEventListener("load", async () => {
      try {
        const STANDARD_SIZE = 3145728;

        if (file.size < STANDARD_SIZE) {
          uploadProfileImgPreview.src = imageReader.result;

          imageFile = () => {
            return file;
          };
        } else {
          alertProfileSettings.classList.remove("d-none");
          alertProfileSettings.classList.add("error__shake");
          setTimeout(() => {
            alertProfileSettings.classList.add("d-none");
          }, 6000);
          throw new Error(`Image size is too large`);
        }
      } catch (err) {
        alertTextProfileSettings.textContent = err.message;
      }
    }, false);

    if (file) {
      imageReader.readAsDataURL(file);
    }
  }); //HANDLE UPLOAD FILES, FULLNAME AND EMAIL CHANGES

  const formProfileSettings = document.querySelector(".form__profile-settings"),
        profileSettingsFullname = document.querySelector(".profile__settings-fullname"),
        profileSettingsEmail = document.querySelector(".profile__settings-email"),
        loadingSpinner = document.querySelector(".loading-spinner"),
        loadingProfileSettings = document.querySelector(".loading__profile-settings");
  formProfileSettings.addEventListener("submit", e => {
    e.preventDefault();
    loadingSpinner.classList.remove("d-none");
    loadingProfileSettings.classList.remove("d-none");
    btnUpdateProfileSettings.removeAttribute("for");
    btnUpdateProfileSettings.removeAttribute("role");
    const profileSettingsFormData = new FormData(formProfileSettings),
          PROFILE_IMAGE = "profile_image";
    profileSettingsFormData.append(PROFILE_IMAGE, imageFile);
    profileSettingsFormData.append("fullname", profileSettingsFullname.value);
    profileSettingsFormData.append("email", profileSettingsEmail.value);

    const updateProfileInformation = async () => {
      const UPDATE_INFO_URL = "/profile-info-update";
      const response = await fetch(UPDATE_INFO_URL, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        body: profileSettingsFormData
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      }
    };

    updateProfileInformation().then(res => {
      window.location.href = res.url;
    }).catch(err => console.error(err));
  });
});

/***/ }),

/***/ "./public/js/register.js":
/*!*******************************!*\
  !*** ./public/js/register.js ***!
  \*******************************/
/***/ (function() {

window.addEventListener("DOMContentLoaded", () => {
  const regUserName = document.querySelector(".reg_user_name");
  const regUserEmail = document.querySelector(".reg_user_email");
  const regUserPassword = document.querySelector(".reg_user_password");
  const regUserConfirmPassword = document.querySelector(".reg_user_confirm_password");
  const formRegister = document.querySelector(".form__container-register"); //password and confirm password checker

  const passwordChecker = document.querySelector(".password__checker");
  const confirmPasswordChecker = document.querySelector(".confirm__password-checker");
  const checkIcon = document.querySelectorAll(".bi-check-circle-fill");
  const showPassword = document.querySelector(".show__password");
  const SESSION_STORAGE_NAME = "register_user_name",
        SESSION_STORAGE_EMAIL = "register_user_email";
  let registerSessionStorage = sessionStorage;
  let recoverCredentials = {
    user_name: registerSessionStorage.getItem(SESSION_STORAGE_NAME),
    user_email: registerSessionStorage.getItem(SESSION_STORAGE_EMAIL)
  };
  regUserName.value = recoverCredentials.user_name;
  regUserEmail.value = recoverCredentials.user_email;
  registerSessionStorage.clear(); //Store session email and name on session storage

  let forEmailLocalStorage = localStorage;
  formRegister.addEventListener("submit", () => {
    registerSessionStorage.setItem(SESSION_STORAGE_NAME, regUserName.value);
    registerSessionStorage.setItem(SESSION_STORAGE_EMAIL, regUserEmail.value);
    forEmailLocalStorage.setItem("user_email", regUserEmail.value);
  }); //password listener

  regUserPassword.addEventListener("input", e => {
    e.preventDefault();
    passwordChecker.classList.remove("d-none");

    if (e.target.value.length >= 8) {
      passwordChecker.classList.remove("text-danger");
      passwordChecker.classList.add("text-success");
      checkIcon[0].classList.remove("d-none");
    } else {
      passwordChecker.classList.add("text-danger");
      passwordChecker.classList.remove("text-success");
      checkIcon[0].classList.add("d-none");
    }
  }); //password confirm checker

  regUserConfirmPassword.addEventListener("input", e => {
    e.preventDefault();
    confirmPasswordChecker.classList.remove("d-none");

    if (e.target.value === regUserPassword.value) {
      confirmPasswordChecker.classList.remove("text-danger");
      confirmPasswordChecker.classList.add("text-success");
      confirmPasswordChecker.innerHTML = `Password matched. <i class="bi bi-check-circle-fill f_size-1"></i>`;
    } else {
      confirmPasswordChecker.classList.add("text-danger");
      confirmPasswordChecker.classList.remove("text-success");
      confirmPasswordChecker.innerHTML = `Password do not matched.`;
    }
  }); //show password checker

  const passwordField = document.querySelectorAll("input[type=password]");
  showPassword.addEventListener("change", e => {
    e.preventDefault();
    passwordField.forEach(item => {
      const type = item.getAttribute("type") === "password" ? "text" : "password";
      item.setAttribute("type", type);

      if (showPassword.checked) {
        item.setAttribute("type", type);
      } else {
        item.setAttribute("type", type);
      }
    });
  });
});

/***/ }),

/***/ "./public/js/subject_dropdown.js":
/*!***************************************!*\
  !*** ./public/js/subject_dropdown.js ***!
  \***************************************/
/***/ (function() {

window.addEventListener("DOMContentLoaded", () => {
  const subjectDropdown = document.querySelectorAll(".subject__dropdown");
  const subjectDropdownGroup = document.querySelectorAll(".subject__dropdown-group");
  const subjectDropdownBtn = document.querySelectorAll(".subject__dropdown-btn");
  const subjectDropdownIcon = document.querySelectorAll(".fa-chevron-right");

  for (let i = 0; i < subjectDropdownGroup.length; i++) {
    let subjectDropdownOpen = false;
    subjectDropdownBtn[i].addEventListener("click", e => {
      if (!subjectDropdownOpen) {
        subjectDropdownGroup[i].classList.add("subject__dropdown-open");
        subjectDropdown[i].classList.add("subject__dropdown-open");
        subjectDropdownIcon[i].classList.add("icon-rotate");
        subjectDropdownOpen = true;
      } else {
        subjectDropdownGroup[i].classList.remove("subject__dropdown-open");
        subjectDropdown[i].classList.remove("subject__dropdown-open");
        subjectDropdownIcon[i].classList.remove("icon-rotate");
        subjectDropdownOpen = false;
      }

      arrayIndexFinder(e);
    });
  }

  const arrayIndexFinder = e => {
    Array.from(subjectDropdown).indexOf(e.target);
  };
});

/***/ }),

/***/ "./public/assets/logo/insider-hub.png":
/*!********************************************!*\
  !*** ./public/assets/logo/insider-hub.png ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11d3f3b20d1239d14eb0e738b96392f7.png");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
if (document.querySelector(".user__email")) {
  __webpack_require__(/*! ./js/login */ "./public/js/login.js");
}

if (document.querySelector(".reg_user_name")) {
  __webpack_require__(/*! ./js/register */ "./public/js/register.js");
}

if (document.querySelector(".form__comment")) {
  __webpack_require__(/*! ./js/comment */ "./public/js/comment.js");
}

if (document.querySelector(".btn__delete-answer")) {
  __webpack_require__(/*! ./js/options_post */ "./public/js/options_post.js");
}

if (document.querySelector(".btn__update-answer")) {
  __webpack_require__(/*! ./js/options_post */ "./public/js/options_post.js");
}

__webpack_require__(/*! ./js/image-load */ "./public/js/image-load.js");

__webpack_require__(/*! ./js/option_post_toggle */ "./public/js/option_post_toggle.js");

__webpack_require__(/*! ./bootstrap/js/bootstrap.min */ "./public/bootstrap/js/bootstrap.min.js");

__webpack_require__(/*! ./js/navburger.anim */ "./public/js/navburger.anim.js");

__webpack_require__(/*! ./js/subject_dropdown */ "./public/js/subject_dropdown.js");

__webpack_require__(/*! ./js/copy-code */ "./public/js/copy-code.js");

__webpack_require__(/*! ./js/notification/notification_api */ "./public/js/notification/notification_api.js");

__webpack_require__(/*! ./js/profile_settings */ "./public/js/profile_settings.js");

__webpack_require__(/*! ./js/create-post */ "./public/js/create-post.js"); // require("./js/tinymce.form");

/* STYLE */


__webpack_require__(/*! ./bootstrap/css/bootstrap.min.css */ "./public/bootstrap/css/bootstrap.min.css");

__webpack_require__(/*! ./main.scss */ "./public/main.scss");
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvY3JlYXRlUG9wcGVyLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDbGlwcGluZ1JlY3QuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50UmVjdC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldEhUTUxFbGVtZW50U2Nyb2xsLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Tm9kZVNjcm9sbC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFBhcmVudE5vZGUuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRTY3JvbGxQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRWaWV3cG9ydFJlY3QuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3dTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzU2Nyb2xsUGFyZW50LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaXNUYWJsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9saXN0U2Nyb2xsUGFyZW50cy5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZW51bXMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2luZGV4LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9hcnJvdy5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2ZsaXAuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9oaWRlLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9vZmZzZXQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9wb3BwZXJPZmZzZXRzLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9wb3BwZXItbGl0ZS5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvcG9wcGVyLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvY29tcHV0ZU9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2RlYm91bmNlLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9kZXRlY3RPdmVyZmxvdy5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZXhwYW5kVG9IYXNoTWFwLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEFsdEF4aXMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldFZhcmlhdGlvbi5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvbWF0aC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvbWVyZ2VCeU5hbWUuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvb3JkZXJNb2RpZmllcnMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3VuaXF1ZUJ5LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy92YWxpZGF0ZU1vZGlmaWVycy5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvd2l0aGluLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy9kb20vc2VsZWN0b3ItZW5naW5lLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy91dGlsL2luZGV4LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy9kb20vZGF0YS5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvZG9tL2V2ZW50LWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi4vanMvc3JjL2Jhc2UtY29tcG9uZW50LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy9hbGVydC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvYnV0dG9uLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy9kb20vbWFuaXB1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi4vanMvc3JjL2Nhcm91c2VsLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy9jb2xsYXBzZS5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi4vanMvc3JjL3V0aWwvc2Nyb2xsYmFyLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy91dGlsL2JhY2tkcm9wLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvb2ZmY2FudmFzLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy91dGlsL3Nhbml0aXplci5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvcG9wb3Zlci5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvc2Nyb2xsc3B5LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy90YWIuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi4vanMvc3JjL3RvYXN0LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL2luZGV4LnVtZC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL3B1YmxpYy9qcy9jaGFuZ2UtcGFzc3dvcmQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9wdWJsaWMvanMvY29tbWVudC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL3B1YmxpYy9qcy9jb3B5LWNvZGUuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9wdWJsaWMvanMvY3JlYXRlLXBvc3QuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9wdWJsaWMvanMvZmV0Y2gtY29tbWVudC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL3B1YmxpYy9qcy9pbWFnZS1sb2FkLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vcHVibGljL2pzL2xvZ2luLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vcHVibGljL2pzL25hdmJ1cmdlci5hbmltLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vcHVibGljL2pzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb25fYXBpLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vcHVibGljL2pzL29wdGlvbl9wb3N0X3RvZ2dsZS5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL3B1YmxpYy9qcy9vcHRpb25zX3Bvc3QuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9wdWJsaWMvanMvcHJvZmlsZV9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL3B1YmxpYy9qcy9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL3B1YmxpYy9qcy9zdWJqZWN0X2Ryb3Bkb3duLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vcHVibGljL2Fzc2V0cy9sb2dvL2luc2lkZXItaHViLnBuZyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL3B1YmxpYy9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vcHVibGljL21haW4uc2NzcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2luc2lkZXItaHViL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9wdWJsaWMvaW5kZXguanMiXSwibmFtZXMiOlsiU2VsZWN0b3JFbmdpbmUiLCJmaW5kIiwic2VsZWN0b3IiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjb25jYXQiLCJFbGVtZW50IiwicHJvdG90eXBlIiwicXVlcnlTZWxlY3RvckFsbCIsImNhbGwiLCJmaW5kT25lIiwicXVlcnlTZWxlY3RvciIsImNoaWxkcmVuIiwiZmlsdGVyIiwiY2hpbGQiLCJtYXRjaGVzIiwicGFyZW50cyIsImFuY2VzdG9yIiwicGFyZW50Tm9kZSIsIm5vZGVUeXBlIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsInB1c2giLCJwcmV2IiwicHJldmlvdXMiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibmV4dCIsIm5leHRFbGVtZW50U2libGluZyIsImdldFVJRCIsInByZWZpeCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdldEVsZW1lbnRCeUlkIiwiZ2V0U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJocmVmQXR0ciIsImluY2x1ZGVzIiwic3RhcnRzV2l0aCIsInNwbGl0IiwidHJpbSIsImdldFNlbGVjdG9yRnJvbUVsZW1lbnQiLCJnZXRFbGVtZW50RnJvbVNlbGVjdG9yIiwiZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uRGVsYXkiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24iLCJOdW1iZXIiLCJwYXJzZUZsb2F0IiwiZmxvYXRUcmFuc2l0aW9uRGVsYXkiLCJ0cmlnZ2VyVHJhbnNpdGlvbkVuZCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsImlzRWxlbWVudCIsIm9iaiIsImpxdWVyeSIsImdldEVsZW1lbnQiLCJsZW5ndGgiLCJlbXVsYXRlVHJhbnNpdGlvbkVuZCIsImR1cmF0aW9uIiwiY2FsbGVkIiwiZW11bGF0ZWREdXJhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJsaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwidHlwZUNoZWNrQ29uZmlnIiwiY29tcG9uZW50TmFtZSIsImNvbmZpZyIsImNvbmZpZ1R5cGVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJwcm9wZXJ0eSIsImV4cGVjdGVkVHlwZXMiLCJ2YWx1ZSIsInZhbHVlVHlwZSIsInRvU3RyaW5nIiwibWF0Y2giLCJ0b0xvd2VyQ2FzZSIsIlJlZ0V4cCIsInRlc3QiLCJUeXBlRXJyb3IiLCJ0b1VwcGVyQ2FzZSIsImlzVmlzaWJsZSIsInN0eWxlIiwiZWxlbWVudFN0eWxlIiwicGFyZW50Tm9kZVN0eWxlIiwiZGlzcGxheSIsInZpc2liaWxpdHkiLCJpc0Rpc2FibGVkIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJkaXNhYmxlZCIsImhhc0F0dHJpYnV0ZSIsImZpbmRTaGFkb3dSb290IiwiYXR0YWNoU2hhZG93IiwiZ2V0Um9vdE5vZGUiLCJyb290IiwiU2hhZG93Um9vdCIsIm5vb3AiLCJyZWZsb3ciLCJvZmZzZXRIZWlnaHQiLCJnZXRqUXVlcnkiLCJqUXVlcnkiLCJib2R5IiwiaXNSVEwiLCJkaXIiLCJkZWZpbmVKUXVlcnlQbHVnaW4iLCJwbHVnaW4iLCJjYWxsYmFjayIsIiQiLCJuYW1lIiwiTkFNRSIsIkpRVUVSWV9OT19DT05GTElDVCIsImZuIiwialF1ZXJ5SW50ZXJmYWNlIiwiQ29uc3RydWN0b3IiLCJub0NvbmZsaWN0IiwicmVhZHlTdGF0ZSIsImV4ZWN1dGUiLCJlbGVtZW50TWFwIiwiTWFwIiwic2V0Iiwia2V5IiwiaW5zdGFuY2UiLCJoYXMiLCJpbnN0YW5jZU1hcCIsImdldCIsInNpemUiLCJjb25zb2xlIiwiZXJyb3IiLCJBcnJheSIsImZyb20iLCJyZW1vdmUiLCJkZWxldGUiLCJuYW1lc3BhY2VSZWdleCIsInN0cmlwTmFtZVJlZ2V4Iiwic3RyaXBVaWRSZWdleCIsImV2ZW50UmVnaXN0cnkiLCJ1aWRFdmVudCIsImN1c3RvbUV2ZW50cyIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwiY3VzdG9tRXZlbnRzUmVnZXgiLCJuYXRpdmVFdmVudHMiLCJTZXQiLCJnZXRVaWRFdmVudCIsInVpZCIsImdldEV2ZW50IiwiZmluZEhhbmRsZXIiLCJldmVudHMiLCJoYW5kbGVyIiwiZGVsZWdhdGlvblNlbGVjdG9yIiwidWlkRXZlbnRMaXN0IiwiaSIsImxlbiIsImV2ZW50Iiwib3JpZ2luYWxIYW5kbGVyIiwibm9ybWFsaXplUGFyYW1zIiwib3JpZ2luYWxUeXBlRXZlbnQiLCJkZWxlZ2F0aW9uRm4iLCJkZWxlZ2F0aW9uIiwidHlwZUV2ZW50IiwiZ2V0VHlwZUV2ZW50IiwiYWRkSGFuZGxlciIsIm9uZU9mZiIsIndyYXBGbiIsInJlbGF0ZWRUYXJnZXQiLCJkZWxlZ2F0ZVRhcmdldCIsInRoaXMiLCJoYW5kbGVycyIsInByZXZpb3VzRm4iLCJyZXBsYWNlIiwiZG9tRWxlbWVudHMiLCJ0YXJnZXQiLCJFdmVudEhhbmRsZXIiLCJvZmYiLCJ0eXBlIiwiYXBwbHkiLCJib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlciIsImJvb3RzdHJhcEhhbmRsZXIiLCJyZW1vdmVIYW5kbGVyIiwiQm9vbGVhbiIsIm9uIiwib25lIiwiaW5OYW1lc3BhY2UiLCJpc05hbWVzcGFjZSIsImVsZW1lbnRFdmVudCIsIm5hbWVzcGFjZSIsInN0b3JlRWxlbWVudEV2ZW50IiwiaGFuZGxlcktleSIsInJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyIsInNsaWNlIiwia2V5SGFuZGxlcnMiLCJ0cmlnZ2VyIiwiYXJncyIsImlzTmF0aXZlIiwialF1ZXJ5RXZlbnQiLCJidWJibGVzIiwibmF0aXZlRGlzcGF0Y2giLCJkZWZhdWx0UHJldmVudGVkIiwiZXZ0IiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCIsImlzRGVmYXVsdFByZXZlbnRlZCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJjYW5jZWxhYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJwcmV2ZW50RGVmYXVsdCIsIkJhc2VDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsIl9lbGVtZW50IiwiRGF0YSIsIkRBVEFfS0VZIiwiZGlzcG9zZSIsIkVWRU5UX0tFWSIsImdldE93blByb3BlcnR5TmFtZXMiLCJwcm9wZXJ0eU5hbWUiLCJfcXVldWVDYWxsYmFjayIsImlzQW5pbWF0ZWQiLCJbb2JqZWN0IE9iamVjdF0iLCJWRVJTSU9OIiwiRXJyb3IiLCJBbGVydCIsImNsb3NlIiwicm9vdEVsZW1lbnQiLCJfZ2V0Um9vdEVsZW1lbnQiLCJjdXN0b21FdmVudCIsIl90cmlnZ2VyQ2xvc2VFdmVudCIsIl9yZW1vdmVFbGVtZW50IiwiY2xvc2VzdCIsIl9kZXN0cm95RWxlbWVudCIsInJlbW92ZUNoaWxkIiwiZWFjaCIsImRhdGEiLCJhbGVydEluc3RhbmNlIiwiaGFuZGxlRGlzbWlzcyIsIkJ1dHRvbiIsInRvZ2dsZSIsInNldEF0dHJpYnV0ZSIsIm5vcm1hbGl6ZURhdGEiLCJ2YWwiLCJub3JtYWxpemVEYXRhS2V5IiwiY2hyIiwiYnV0dG9uIiwiTWFuaXB1bGF0b3IiLCJzZXREYXRhQXR0cmlidXRlIiwicmVtb3ZlRGF0YUF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImdldERhdGFBdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsImRhdGFzZXQiLCJwdXJlS2V5IiwiY2hhckF0IiwiZ2V0RGF0YUF0dHJpYnV0ZSIsIm9mZnNldCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJzY3JvbGxUb3AiLCJsZWZ0Iiwic2Nyb2xsTGVmdCIsInBvc2l0aW9uIiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsIkRlZmF1bHQiLCJpbnRlcnZhbCIsImtleWJvYXJkIiwic2xpZGUiLCJwYXVzZSIsIndyYXAiLCJ0b3VjaCIsIkRlZmF1bHRUeXBlIiwiT1JERVJfTkVYVCIsIk9SREVSX1BSRVYiLCJESVJFQ1RJT05fTEVGVCIsIkRJUkVDVElPTl9SSUdIVCIsIkNhcm91c2VsIiwic3VwZXIiLCJfaXRlbXMiLCJfaW50ZXJ2YWwiLCJfYWN0aXZlRWxlbWVudCIsIl9pc1BhdXNlZCIsIl9pc1NsaWRpbmciLCJ0b3VjaFRpbWVvdXQiLCJ0b3VjaFN0YXJ0WCIsInRvdWNoRGVsdGFYIiwiX2NvbmZpZyIsIl9nZXRDb25maWciLCJfaW5kaWNhdG9yc0VsZW1lbnQiLCJfdG91Y2hTdXBwb3J0ZWQiLCJuYXZpZ2F0b3IiLCJtYXhUb3VjaFBvaW50cyIsIl9wb2ludGVyRXZlbnQiLCJQb2ludGVyRXZlbnQiLCJfYWRkRXZlbnRMaXN0ZW5lcnMiLCJfc2xpZGUiLCJuZXh0V2hlblZpc2libGUiLCJoaWRkZW4iLCJjeWNsZSIsImNsZWFySW50ZXJ2YWwiLCJfdXBkYXRlSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInZpc2liaWxpdHlTdGF0ZSIsImJpbmQiLCJ0byIsImluZGV4IiwiYWN0aXZlSW5kZXgiLCJfZ2V0SXRlbUluZGV4Iiwib3JkZXIiLCJfaGFuZGxlU3dpcGUiLCJhYnNEZWx0YXgiLCJhYnMiLCJkaXJlY3Rpb24iLCJfa2V5ZG93biIsIl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzIiwic3RhcnQiLCJwb2ludGVyVHlwZSIsInRvdWNoZXMiLCJjbGllbnRYIiwibW92ZSIsImVuZCIsImNsZWFyVGltZW91dCIsIml0ZW1JbWciLCJlIiwiYWRkIiwidGFnTmFtZSIsImluZGV4T2YiLCJfZ2V0SXRlbUJ5T3JkZXIiLCJhY3RpdmVFbGVtZW50IiwiaXNOZXh0IiwiaXNQcmV2IiwibGFzdEl0ZW1JbmRleCIsIml0ZW1JbmRleCIsIl90cmlnZ2VyU2xpZGVFdmVudCIsImV2ZW50RGlyZWN0aW9uTmFtZSIsInRhcmdldEluZGV4IiwiZnJvbUluZGV4IiwiX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQiLCJhY3RpdmVJbmRpY2F0b3IiLCJpbmRpY2F0b3JzIiwicGFyc2VJbnQiLCJlbGVtZW50SW50ZXJ2YWwiLCJkZWZhdWx0SW50ZXJ2YWwiLCJkaXJlY3Rpb25Pck9yZGVyIiwiX2RpcmVjdGlvblRvT3JkZXIiLCJhY3RpdmVFbGVtZW50SW5kZXgiLCJuZXh0RWxlbWVudCIsIm5leHRFbGVtZW50SW5kZXgiLCJpc0N5Y2xpbmciLCJkaXJlY3Rpb25hbENsYXNzTmFtZSIsIm9yZGVyQ2xhc3NOYW1lIiwiX29yZGVyVG9EaXJlY3Rpb24iLCJ0cmlnZ2VyU2xpZEV2ZW50IiwiY29tcGxldGVDYWxsQmFjayIsImFjdGlvbiIsInJpZGUiLCJjYXJvdXNlbEludGVyZmFjZSIsInNsaWRlSW5kZXgiLCJkYXRhQXBpQ2xpY2tIYW5kbGVyIiwiY2Fyb3VzZWxzIiwicGFyZW50IiwiQ29sbGFwc2UiLCJfaXNUcmFuc2l0aW9uaW5nIiwiX3RyaWdnZXJBcnJheSIsImlkIiwidG9nZ2xlTGlzdCIsImVsZW0iLCJmaWx0ZXJFbGVtZW50IiwiZm91bmRFbGVtIiwiX3NlbGVjdG9yIiwiX3BhcmVudCIsIl9nZXRQYXJlbnQiLCJfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzIiwiaGlkZSIsInNob3ciLCJhY3RpdmVzIiwiYWN0aXZlc0RhdGEiLCJjb250YWluZXIiLCJ0ZW1wQWN0aXZlRGF0YSIsImVsZW1BY3RpdmUiLCJjb2xsYXBzZUludGVyZmFjZSIsImRpbWVuc2lvbiIsIl9nZXREaW1lbnNpb24iLCJzZXRUcmFuc2l0aW9uaW5nIiwic2Nyb2xsU2l6ZSIsInRyaWdnZXJBcnJheUxlbmd0aCIsImlzVHJhbnNpdGlvbmluZyIsInNlbGVjdGVkIiwidHJpZ2dlckFycmF5IiwiaXNPcGVuIiwidHJpZ2dlckRhdGEiLCJSRUdFWFBfS0VZRE9XTiIsIlBMQUNFTUVOVF9UT1AiLCJQTEFDRU1FTlRfVE9QRU5EIiwiUExBQ0VNRU5UX0JPVFRPTSIsIlBMQUNFTUVOVF9CT1RUT01FTkQiLCJQTEFDRU1FTlRfUklHSFQiLCJQTEFDRU1FTlRfTEVGVCIsImJvdW5kYXJ5IiwicmVmZXJlbmNlIiwicG9wcGVyQ29uZmlnIiwiYXV0b0Nsb3NlIiwiRHJvcGRvd24iLCJfcG9wcGVyIiwiX21lbnUiLCJfZ2V0TWVudUVsZW1lbnQiLCJfaW5OYXZiYXIiLCJfZGV0ZWN0TmF2YmFyIiwiZ2V0UGFyZW50RnJvbUVsZW1lbnQiLCJQb3BwZXIiLCJyZWZlcmVuY2VFbGVtZW50IiwiX2dldFBvcHBlckNvbmZpZyIsImlzRGlzcGxheVN0YXRpYyIsIm1vZGlmaWVycyIsIm1vZGlmaWVyIiwiZW5hYmxlZCIsImNyZWF0ZVBvcHBlciIsImZvY3VzIiwiX2NvbXBsZXRlSGlkZSIsImRlc3Ryb3kiLCJ1cGRhdGUiLCJfZ2V0UGxhY2VtZW50IiwicGFyZW50RHJvcGRvd24iLCJpc0VuZCIsImdldFByb3BlcnR5VmFsdWUiLCJfZ2V0T2Zmc2V0IiwibWFwIiwicG9wcGVyRGF0YSIsImRlZmF1bHRCc1BvcHBlckNvbmZpZyIsInBsYWNlbWVudCIsIm9wdGlvbnMiLCJfc2VsZWN0TWVudUl0ZW0iLCJpdGVtcyIsImRyb3Bkb3duSW50ZXJmYWNlIiwidG9nZ2xlcyIsImNvbnRleHQiLCJjb21wb3NlZFBhdGgiLCJpc01lbnVUYXJnZXQiLCJjbGlja0V2ZW50IiwiaXNBY3RpdmUiLCJzdG9wUHJvcGFnYXRpb24iLCJnZXRUb2dnbGVCdXR0b24iLCJjbGVhck1lbnVzIiwiZ2V0SW5zdGFuY2UiLCJjbGljayIsImRhdGFBcGlLZXlkb3duSGFuZGxlciIsImdldFdpZHRoIiwiZG9jdW1lbnRXaWR0aCIsImNsaWVudFdpZHRoIiwiaW5uZXJXaWR0aCIsIndpZHRoIiwiX2Rpc2FibGVPdmVyRmxvdyIsIl9zZXRFbGVtZW50QXR0cmlidXRlcyIsImNhbGN1bGF0ZWRWYWx1ZSIsImFjdHVhbFZhbHVlIiwib3ZlcmZsb3ciLCJzdHlsZVByb3AiLCJzY3JvbGxiYXJXaWR0aCIsInJlc2V0IiwiX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMiLCJyZW1vdmVQcm9wZXJ0eSIsImNsaWNrQ2FsbGJhY2siLCJCYWNrZHJvcCIsIl9pc0FwcGVuZGVkIiwiX2FwcGVuZCIsIl9nZXRFbGVtZW50IiwiX2VtdWxhdGVBbmltYXRpb24iLCJiYWNrZHJvcCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uIiwiTW9kYWwiLCJfZGlhbG9nIiwiX2JhY2tkcm9wIiwiX2luaXRpYWxpemVCYWNrRHJvcCIsIl9pc1Nob3duIiwiX2lnbm9yZUJhY2tkcm9wQ2xpY2siLCJfaXNBbmltYXRlZCIsInNob3dFdmVudCIsInNjcm9sbEJhckhpZGUiLCJfYWRqdXN0RGlhbG9nIiwiX3NldEVzY2FwZUV2ZW50IiwiX3NldFJlc2l6ZUV2ZW50IiwiX3Nob3dCYWNrZHJvcCIsIl9zaG93RWxlbWVudCIsIl9oaWRlTW9kYWwiLCJodG1sRWxlbWVudCIsImhhbmRsZVVwZGF0ZSIsIm1vZGFsQm9keSIsIl9lbmZvcmNlRm9jdXMiLCJfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbiIsIl9yZXNldEFkanVzdG1lbnRzIiwic2Nyb2xsQmFyUmVzZXQiLCJjdXJyZW50VGFyZ2V0IiwiaXNNb2RhbE92ZXJmbG93aW5nIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwib3ZlcmZsb3dZIiwibW9kYWxUcmFuc2l0aW9uRHVyYXRpb24iLCJnZXRTY3JvbGxCYXJXaWR0aCIsImlzQm9keU92ZXJmbG93aW5nIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJzY3JvbGwiLCJPZmZjYW52YXMiLCJfZW5mb3JjZUZvY3VzT25FbGVtZW50IiwiYmx1ciIsInVuZGVmaW5lZCIsImFsbFJlYWR5T3BlbiIsImVsIiwidXJpQXR0cnMiLCJTQUZFX1VSTF9QQVRURVJOIiwiREFUQV9VUkxfUEFUVEVSTiIsImFsbG93ZWRBdHRyaWJ1dGUiLCJhdHRyIiwiYWxsb3dlZEF0dHJpYnV0ZUxpc3QiLCJhdHRyTmFtZSIsIm5vZGVOYW1lIiwibm9kZVZhbHVlIiwicmVnRXhwIiwiYXR0clJlZ2V4Iiwic2FuaXRpemVIdG1sIiwidW5zYWZlSHRtbCIsImFsbG93TGlzdCIsInNhbml0aXplRm4iLCJjcmVhdGVkRG9jdW1lbnQiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJhbGxvd2xpc3RLZXlzIiwiZWxlbWVudHMiLCJlbE5hbWUiLCJhdHRyaWJ1dGVMaXN0IiwiYWxsb3dlZEF0dHJpYnV0ZXMiLCJpbm5lckhUTUwiLCJCU0NMU19QUkVGSVhfUkVHRVgiLCJESVNBTExPV0VEX0FUVFJJQlVURVMiLCJhbmltYXRpb24iLCJ0ZW1wbGF0ZSIsInRpdGxlIiwiZGVsYXkiLCJodG1sIiwiZmFsbGJhY2tQbGFjZW1lbnRzIiwiY3VzdG9tQ2xhc3MiLCJzYW5pdGl6ZSIsIkF0dGFjaG1lbnRNYXAiLCJBVVRPIiwiVE9QIiwiUklHSFQiLCJCT1RUT00iLCJMRUZUIiwiKiIsImEiLCJhcmVhIiwiYiIsImJyIiwiY29sIiwiY29kZSIsImRpdiIsImVtIiwiaHIiLCJoMSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJpbWciLCJsaSIsIm9sIiwicCIsInByZSIsInMiLCJzbWFsbCIsInNwYW4iLCJzdWIiLCJzdXAiLCJzdHJvbmciLCJ1IiwidWwiLCJISURFIiwiSElEREVOIiwiU0hPVyIsIlNIT1dOIiwiSU5TRVJURUQiLCJDTElDSyIsIkZPQ1VTSU4iLCJGT0NVU09VVCIsIk1PVVNFRU5URVIiLCJNT1VTRUxFQVZFIiwiVG9vbHRpcCIsIl9pc0VuYWJsZWQiLCJfdGltZW91dCIsIl9ob3ZlclN0YXRlIiwiX2FjdGl2ZVRyaWdnZXIiLCJ0aXAiLCJfc2V0TGlzdGVuZXJzIiwiZW5hYmxlIiwiZGlzYWJsZSIsInRvZ2dsZUVuYWJsZWQiLCJfaW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0IiwiX2lzV2l0aEFjdGl2ZVRyaWdnZXIiLCJfZW50ZXIiLCJfbGVhdmUiLCJnZXRUaXBFbGVtZW50IiwiX2hpZGVNb2RhbEhhbmRsZXIiLCJpc1dpdGhDb250ZW50Iiwic2hhZG93Um9vdCIsImlzSW5UaGVEb20iLCJvd25lckRvY3VtZW50IiwidGlwSWQiLCJzZXRDb250ZW50IiwiYXR0YWNobWVudCIsIl9nZXRBdHRhY2htZW50IiwiX2FkZEF0dGFjaG1lbnRDbGFzcyIsInByZXZIb3ZlclN0YXRlIiwiX2NsZWFuVGlwQ2xhc3MiLCJnZXRUaXRsZSIsInNldEVsZW1lbnRDb250ZW50IiwiY29udGVudCIsInRleHRDb250ZW50IiwidXBkYXRlQXR0YWNobWVudCIsImRhdGFLZXkiLCJfZ2V0RGVsZWdhdGVDb25maWciLCJwaGFzZSIsIl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UiLCJvbkZpcnN0VXBkYXRlIiwiZXZlbnRJbiIsImV2ZW50T3V0IiwiX2ZpeFRpdGxlIiwib3JpZ2luYWxUaXRsZVR5cGUiLCJkYXRhQXR0cmlidXRlcyIsImRhdGFBdHRyIiwidGFiQ2xhc3MiLCJ0b2tlbiIsInRDbGFzcyIsInN0YXRlIiwicG9wcGVyIiwiUG9wb3ZlciIsIl9nZXRDb250ZW50IiwibWV0aG9kIiwiU2Nyb2xsU3B5IiwiX3Njcm9sbEVsZW1lbnQiLCJfb2Zmc2V0cyIsIl90YXJnZXRzIiwiX2FjdGl2ZVRhcmdldCIsIl9zY3JvbGxIZWlnaHQiLCJfcHJvY2VzcyIsInJlZnJlc2giLCJhdXRvTWV0aG9kIiwib2Zmc2V0TWV0aG9kIiwib2Zmc2V0QmFzZSIsIl9nZXRTY3JvbGxUb3AiLCJfZ2V0U2Nyb2xsSGVpZ2h0IiwidGFyZ2V0U2VsZWN0b3IiLCJ0YXJnZXRCQ1IiLCJoZWlnaHQiLCJpdGVtIiwic29ydCIsInBhZ2VZT2Zmc2V0IiwibWF4IiwiX2dldE9mZnNldEhlaWdodCIsImlubmVySGVpZ2h0IiwibWF4U2Nyb2xsIiwiX2FjdGl2YXRlIiwiX2NsZWFyIiwicXVlcmllcyIsImxpbmsiLCJqb2luIiwibGlzdEdyb3VwIiwibmF2SXRlbSIsIm5vZGUiLCJzcHkiLCJUYWIiLCJsaXN0RWxlbWVudCIsIml0ZW1TZWxlY3RvciIsImhpZGVFdmVudCIsImNvbXBsZXRlIiwiYWN0aXZlIiwiX3RyYW5zaXRpb25Db21wbGV0ZSIsImRyb3Bkb3duQ2hpbGQiLCJkcm9wZG93bkVsZW1lbnQiLCJkcm9wZG93biIsImF1dG9oaWRlIiwiVG9hc3QiLCJfaGFzTW91c2VJbnRlcmFjdGlvbiIsIl9oYXNLZXlib2FyZEludGVyYWN0aW9uIiwiX2NsZWFyVGltZW91dCIsIl9tYXliZVNjaGVkdWxlSGlkZSIsIl9vbkludGVyYWN0aW9uIiwiaXNJbnRlcmFjdGluZyIsImZvcm1Qcm9maWxlQ2hhbmdlUGFzc3dvcmQiLCJjaGFuZ2VQYXNzd29yZEJ0biIsInRvZ2dsZVNob3dQYXNzd29yZCIsInBhc3N3b3JkSW5wdXRGaWVsZCIsInBhc3N3b3JkQ2hlY2tlckluZm8iLCJjaXJsY2VDaGVja0ljb24iLCJsb2FkaW5nU3Bpbm5lckNoYW5nZVBhc3N3b3JkIiwiYWxlcnRCb3hDaGFuZ2VQYXNzd29yZCIsImFsZXJ0TWVzc2FnZUNoYW5nZVBhc3N3b3JkIiwiY2hlY2tlZCIsInNlbmRDaGFuZ2VQYXNzd29yZFJlcXVlc3QiLCJjaGFuZ2VQYXNzd29yZFVSTCIsInJlc3BvbnNlIiwiZmV0Y2giLCJoZWFkZXJzIiwibW9kZSIsImNhY2hlIiwiSlNPTiIsInN0cmluZ2lmeSIsImN1cnJlbnRfcGFzc3dvcmQiLCJuZXdfcGFzc3dvcmQiLCJjb25maXJtX25ld19wYXNzd29yZCIsIm9rIiwianNvbiIsInN0YXR1cyIsImVyciIsIm1lc3NhZ2UiLCJ0aGVuIiwicmVzIiwiZXJyb3JfbWVzc2FnZSIsInN1Y2Nlc3MiLCJzdWNjZXNzX21lc3NhZ2UiLCJjYXRjaCIsImJ0bkNvbW1lbnQiLCJjb21tZW50Rm9ybSIsImxvYWRpbmdTcGlubmVyIiwic2Vzc2lvblRyaWdnZXJGb2N1c1N0b3JhZ2UiLCJzZXNzaW9uU3RvcmFnZSIsIk5FV19DT01NRU5UIiwiY29tbWVudF9ib2R5IiwicmVuZGVyQ29tbWVudHMiLCJwb3N0Q29tbWVudCIsImNyZWRlbnRpYWxzIiwidGlueW1jZSIsImdldENvbnRlbnQiLCJwb3N0X2lkIiwicG9zdElkIiwic3ViamVjdF9pZCIsInN1YmplY3RJZCIsImxvZyIsInNldEl0ZW0iLCJuZXdfY29tbWVudCIsImxvY2F0aW9uIiwiaHJlZiIsInVybCIsImZvY3VzVG9OZXdDb21tZW50IiwiY29tbWVudFRvRm9jdXMiLCJnZXRJdGVtIiwiY29tbWVudEJvZHlGb2N1cyIsImhhc2giLCJjbGVhciIsImNoZWNrU25pcHBldENvZGUiLCJjb3B5Q29kZUJ0biIsInNldFByb3BlcnR5IiwiY29weUNvZGUiLCJpbml0aWFsaXplQ29weUNvZGVCdG4iLCJzbmlwcGV0Q29udGVudCIsImR1bW15VGV4dEFyZWEiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsImJ0blN1Ym1pdFBvc3QiLCJmb3JtQ3JlYXRlUG9zdCIsImZldGNoQWxsQ29tbWVudEZvclBvc3QiLCJsb2dvIiwic3JjIiwibG9nb0ltYWdlIiwibG9hZGluZ0NvbnRhaW5lciIsImJ0blNpZ25JbiIsInJlbWVtYmVyTWUiLCJmb3JtTG9naW4iLCJpbnB1dEVtYWlsIiwiaW5wdXRQYXNzd29yZCIsImxvZ2luU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsInVzZXJfZW1haWwiLCJyZW1lbWJlck1lU3RhdGUiLCJzZXRSZW1lbWJlck1lIiwic2VuZExvZ2luUmVxdWVzdCIsInJlbWVtYmVyX21lIiwiZW1haWwiLCJwYXNzd29yZCIsInJlbG9hZCIsImF1dGhlbnRpY2F0ZV91cmwiLCJsb2dpbkNyZWRlbnRpYWxzIiwibmF2VG9nZ2xlciIsIm5hdmJhckNvbnRhaW5lciIsIm5hdklzT3BlbiIsInRvZ2dsZU9wdGlvbkJ0biIsIm9wdGlvbkNvbnRhaW5lciIsImRlbGV0ZU9wdGlvbkJ0biIsImRlbGV0ZURpYWxvZyIsImRlbGV0ZURpYWxvZ0NhbmNlbCIsImRlbGV0ZURpYWxvZ0NvbmZpcm0iLCJwaW5Qb3N0IiwidW5QaW5Qb3N0Iiwib3B0aW9uSXNPcGVuIiwidG9nZ2xlT3B0aW9ucyIsImRlbGV0ZVBvc3RPcGVuRGlhbG9nIiwiY2xvc2VEaWFsb2ciLCJjb25maXJtRGVsZXRlUG9zdCIsImRhdGFQb3N0SWQiLCJkZWxldGVPbmVQb3N0IiwiVVJMX0RFTEVURV9QT1NUIiwiaW5pdGlhbGl6ZVBpblBvc3QiLCJpbml0aWFsaXplVW5QaW5Qb3N0Iiwic2V0SXNQaW5Qb3N0IiwicGluT3B0aW9uQ29uZmlnIiwic2V0UGluUG9zdCIsIlVSTF9QSU5fUE9TVCIsInBpbl9wb3N0IiwiZGVsZXRlQnV0dG9uIiwiZGF0YVBvc3RJZF9kZWxldGUiLCJ1cGRhdGVGb3JtIiwidXBkYXRlVGl0bGUiLCJ1cGRhdGVUYWciLCJ1cGRhdGVCb2R5IiwidXBkYXRlQnRuIiwiZGF0YVBvc3RJZF91cGRhdGUiLCJwb3N0VXBkYXRlZENvbnRlbnQiLCJwb3N0X3RpdGxlIiwicG9zdF90YWciLCJwb3N0X2JvZHkiLCJ1cGRhdGVPbmVQb3N0IiwicmVxdWlyZSIsImNoYW5nZVBhc3N3b3JkQnRuRHJvcERvd24iLCJjaGFuZ2VQYXNzd29yZENvbnRhaW5lciIsImJ0blVwZGF0ZVByb2ZpbGVTZXR0aW5ncyIsImltYWdlRmlsZSIsInVwbG9hZFByb2ZpbGVJbWdQaWNrZXIiLCJhbGVydFByb2ZpbGVTZXR0aW5ncyIsImFsZXJ0VGV4dFByb2ZpbGVTZXR0aW5ncyIsImZpbGUiLCJmaWxlcyIsInVwbG9hZFByb2ZpbGVJbWdQcmV2aWV3IiwiaW1hZ2VSZWFkZXIiLCJGaWxlUmVhZGVyIiwiU1RBTkRBUkRfU0laRSIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJmb3JtUHJvZmlsZVNldHRpbmdzIiwicHJvZmlsZVNldHRpbmdzRnVsbG5hbWUiLCJwcm9maWxlU2V0dGluZ3NFbWFpbCIsImxvYWRpbmdQcm9maWxlU2V0dGluZ3MiLCJwcm9maWxlU2V0dGluZ3NGb3JtRGF0YSIsIkZvcm1EYXRhIiwiUFJPRklMRV9JTUFHRSIsImFwcGVuZCIsInVwZGF0ZVByb2ZpbGVJbmZvcm1hdGlvbiIsIlVQREFURV9JTkZPX1VSTCIsInJlZ1VzZXJOYW1lIiwicmVnVXNlckVtYWlsIiwicmVnVXNlclBhc3N3b3JkIiwicmVnVXNlckNvbmZpcm1QYXNzd29yZCIsImZvcm1SZWdpc3RlciIsInBhc3N3b3JkQ2hlY2tlciIsImNvbmZpcm1QYXNzd29yZENoZWNrZXIiLCJjaGVja0ljb24iLCJzaG93UGFzc3dvcmQiLCJTRVNTSU9OX1NUT1JBR0VfTkFNRSIsIlNFU1NJT05fU1RPUkFHRV9FTUFJTCIsInJlZ2lzdGVyU2Vzc2lvblN0b3JhZ2UiLCJyZWNvdmVyQ3JlZGVudGlhbHMiLCJ1c2VyX25hbWUiLCJmb3JFbWFpbExvY2FsU3RvcmFnZSIsInBhc3N3b3JkRmllbGQiLCJzdWJqZWN0RHJvcGRvd24iLCJzdWJqZWN0RHJvcGRvd25Hcm91cCIsInN1YmplY3REcm9wZG93bkJ0biIsInN1YmplY3REcm9wZG93bkljb24iLCJzdWJqZWN0RHJvcGRvd25PcGVuIiwiYXJyYXlJbmRleEZpbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStEO0FBQ047QUFDUTtBQUNKO0FBQ0U7QUFDUjtBQUNaO0FBQ2tCO0FBQ2xCO0FBQ2dCO0FBQ1Y7QUFDTTtBQUNEO0FBQ3BCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUVBQXFFLGFBQWE7QUFDbEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBLHFCQUFxQixtRUFBUyxjQUFjLHdFQUFpQix5Q0FBeUMsd0VBQWlCO0FBQ3ZILGtCQUFrQix3RUFBaUI7QUFDbkMsVUFBVTtBQUNWOztBQUVBLCtCQUErQixpRUFBYyxDQUFDLDhEQUFXLHdEQUF3RDs7QUFFakg7QUFDQTtBQUNBLFNBQVMsRUFBRTtBQUNYOztBQUVBLFlBQVksSUFBcUM7QUFDakQsMEJBQTBCLDJEQUFRO0FBQ2xDO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsVUFBVSxvRUFBaUI7O0FBRTNCLGNBQWMsbUVBQWdCLDhC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QUFFQTs7O0FBQ0FBLG1CQUFPLENBQUMsbUZBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyx1Q0FBRCxDQUFQLEMiLCJmaWxlIjoibWFpbi5jb21waWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRDb21wb3NpdGVSZWN0IGZyb20gXCIuL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGxpc3RTY3JvbGxQYXJlbnRzIGZyb20gXCIuL2RvbS11dGlscy9saXN0U2Nyb2xsUGFyZW50cy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IG9yZGVyTW9kaWZpZXJzIGZyb20gXCIuL3V0aWxzL29yZGVyTW9kaWZpZXJzLmpzXCI7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSBcIi4vdXRpbHMvZGVib3VuY2UuanNcIjtcbmltcG9ydCB2YWxpZGF0ZU1vZGlmaWVycyBmcm9tIFwiLi91dGlscy92YWxpZGF0ZU1vZGlmaWVycy5qc1wiO1xuaW1wb3J0IHVuaXF1ZUJ5IGZyb20gXCIuL3V0aWxzL3VuaXF1ZUJ5LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgbWVyZ2VCeU5hbWUgZnJvbSBcIi4vdXRpbHMvbWVyZ2VCeU5hbWUuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCB7IGF1dG8gfSBmcm9tIFwiLi9lbnVtcy5qc1wiO1xudmFyIElOVkFMSURfRUxFTUVOVF9FUlJPUiA9ICdQb3BwZXI6IEludmFsaWQgcmVmZXJlbmNlIG9yIHBvcHBlciBhcmd1bWVudCBwcm92aWRlZC4gVGhleSBtdXN0IGJlIGVpdGhlciBhIERPTSBlbGVtZW50IG9yIHZpcnR1YWwgZWxlbWVudC4nO1xudmFyIElORklOSVRFX0xPT1BfRVJST1IgPSAnUG9wcGVyOiBBbiBpbmZpbml0ZSBsb29wIGluIHRoZSBtb2RpZmllcnMgY3ljbGUgaGFzIGJlZW4gZGV0ZWN0ZWQhIFRoZSBjeWNsZSBoYXMgYmVlbiBpbnRlcnJ1cHRlZCB0byBwcmV2ZW50IGEgYnJvd3NlciBjcmFzaC4nO1xudmFyIERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgbW9kaWZpZXJzOiBbXSxcbiAgc3RyYXRlZ3k6ICdhYnNvbHV0ZSdcbn07XG5cbmZ1bmN0aW9uIGFyZVZhbGlkRWxlbWVudHMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gIWFyZ3Muc29tZShmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiAhKGVsZW1lbnQgJiYgdHlwZW9mIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID09PSAnZnVuY3Rpb24nKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BwZXJHZW5lcmF0b3IoZ2VuZXJhdG9yT3B0aW9ucykge1xuICBpZiAoZ2VuZXJhdG9yT3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgZ2VuZXJhdG9yT3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9nZW5lcmF0b3JPcHRpb25zID0gZ2VuZXJhdG9yT3B0aW9ucyxcbiAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRNb2RpZmllcnMsXG4gICAgICBkZWZhdWx0TW9kaWZpZXJzID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmID09PSB2b2lkIDAgPyBbXSA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZixcbiAgICAgIF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0T3B0aW9ucyxcbiAgICAgIGRlZmF1bHRPcHRpb25zID0gX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9PT0gdm9pZCAwID8gREVGQVVMVF9PUFRJT05TIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmMjtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZVBvcHBlcihyZWZlcmVuY2UsIHBvcHBlciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcbiAgICB9XG5cbiAgICB2YXIgc3RhdGUgPSB7XG4gICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgb3JkZXJlZE1vZGlmaWVyczogW10sXG4gICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX09QVElPTlMsIGRlZmF1bHRPcHRpb25zKSxcbiAgICAgIG1vZGlmaWVyc0RhdGE6IHt9LFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgcmVmZXJlbmNlOiByZWZlcmVuY2UsXG4gICAgICAgIHBvcHBlcjogcG9wcGVyXG4gICAgICB9LFxuICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICBzdHlsZXM6IHt9XG4gICAgfTtcbiAgICB2YXIgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgIHZhciBpc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHZhciBpbnN0YW5jZSA9IHtcbiAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgIHNldE9wdGlvbnM6IGZ1bmN0aW9uIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHN0YXRlLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgc3RhdGUub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHN0YXRlLnNjcm9sbFBhcmVudHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBpc0VsZW1lbnQocmVmZXJlbmNlKSA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZSkgOiByZWZlcmVuY2UuY29udGV4dEVsZW1lbnQgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UuY29udGV4dEVsZW1lbnQpIDogW10sXG4gICAgICAgICAgcG9wcGVyOiBsaXN0U2Nyb2xsUGFyZW50cyhwb3BwZXIpXG4gICAgICAgIH07IC8vIE9yZGVycyB0aGUgbW9kaWZpZXJzIGJhc2VkIG9uIHRoZWlyIGRlcGVuZGVuY2llcyBhbmQgYHBoYXNlYFxuICAgICAgICAvLyBwcm9wZXJ0aWVzXG5cbiAgICAgICAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlck1vZGlmaWVycyhtZXJnZUJ5TmFtZShbXS5jb25jYXQoZGVmYXVsdE1vZGlmaWVycywgc3RhdGUub3B0aW9ucy5tb2RpZmllcnMpKSk7IC8vIFN0cmlwIG91dCBkaXNhYmxlZCBtb2RpZmllcnNcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICByZXR1cm4gbS5lbmFibGVkO1xuICAgICAgICB9KTsgLy8gVmFsaWRhdGUgdGhlIHByb3ZpZGVkIG1vZGlmaWVycyBzbyB0aGF0IHRoZSBjb25zdW1lciB3aWxsIGdldCB3YXJuZWRcbiAgICAgICAgLy8gaWYgb25lIG9mIHRoZSBtb2RpZmllcnMgaXMgaW52YWxpZCBmb3IgYW55IHJlYXNvblxuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICB2YXIgbW9kaWZpZXJzID0gdW5pcXVlQnkoW10uY29uY2F0KG9yZGVyZWRNb2RpZmllcnMsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gX3JlZi5uYW1lO1xuICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFsaWRhdGVNb2RpZmllcnMobW9kaWZpZXJzKTtcblxuICAgICAgICAgIGlmIChnZXRCYXNlUGxhY2VtZW50KHN0YXRlLm9wdGlvbnMucGxhY2VtZW50KSA9PT0gYXV0bykge1xuICAgICAgICAgICAgdmFyIGZsaXBNb2RpZmllciA9IHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZmluZChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICAgICAgdmFyIG5hbWUgPSBfcmVmMi5uYW1lO1xuICAgICAgICAgICAgICByZXR1cm4gbmFtZSA9PT0gJ2ZsaXAnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghZmxpcE1vZGlmaWVyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFwiYXV0b1wiIHBsYWNlbWVudHMgcmVxdWlyZSB0aGUgXCJmbGlwXCIgbW9kaWZpZXIgYmUnLCAncHJlc2VudCBhbmQgZW5hYmxlZCB0byB3b3JrLiddLmpvaW4oJyAnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShwb3BwZXIpLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3AgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5Ub3AsXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0ID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luUmlnaHQsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbSA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpbkJvdHRvbSxcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpbkxlZnQ7IC8vIFdlIG5vIGxvbmdlciB0YWtlIGludG8gYWNjb3VudCBgbWFyZ2luc2Agb24gdGhlIHBvcHBlciwgYW5kIGl0IGNhblxuICAgICAgICAgIC8vIGNhdXNlIGJ1Z3Mgd2l0aCBwb3NpdGlvbmluZywgc28gd2UnbGwgd2FybiB0aGUgY29uc3VtZXJcblxuXG4gICAgICAgICAgaWYgKFttYXJnaW5Ub3AsIG1hcmdpblJpZ2h0LCBtYXJnaW5Cb3R0b20sIG1hcmdpbkxlZnRdLnNvbWUoZnVuY3Rpb24gKG1hcmdpbikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQobWFyZ2luKTtcbiAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFsnUG9wcGVyOiBDU1MgXCJtYXJnaW5cIiBzdHlsZXMgY2Fubm90IGJlIHVzZWQgdG8gYXBwbHkgcGFkZGluZycsICdiZXR3ZWVuIHRoZSBwb3BwZXIgYW5kIGl0cyByZWZlcmVuY2UgZWxlbWVudCBvciBib3VuZGFyeS4nLCAnVG8gcmVwbGljYXRlIG1hcmdpbiwgdXNlIHRoZSBgb2Zmc2V0YCBtb2RpZmllciwgYXMgd2VsbCBhcycsICd0aGUgYHBhZGRpbmdgIG9wdGlvbiBpbiB0aGUgYHByZXZlbnRPdmVyZmxvd2AgYW5kIGBmbGlwYCcsICdtb2RpZmllcnMuJ10uam9pbignICcpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBydW5Nb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLnVwZGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIC8vIFN5bmMgdXBkYXRlIOKAkyBpdCB3aWxsIGFsd2F5cyBiZSBleGVjdXRlZCwgZXZlbiBpZiBub3QgbmVjZXNzYXJ5LiBUaGlzXG4gICAgICAvLyBpcyB1c2VmdWwgZm9yIGxvdyBmcmVxdWVuY3kgdXBkYXRlcyB3aGVyZSBzeW5jIGJlaGF2aW9yIHNpbXBsaWZpZXMgdGhlXG4gICAgICAvLyBsb2dpYy5cbiAgICAgIC8vIEZvciBoaWdoIGZyZXF1ZW5jeSB1cGRhdGVzIChlLmcuIGByZXNpemVgIGFuZCBgc2Nyb2xsYCBldmVudHMpLCBhbHdheXNcbiAgICAgIC8vIHByZWZlciB0aGUgYXN5bmMgUG9wcGVyI3VwZGF0ZSBtZXRob2RcbiAgICAgIGZvcmNlVXBkYXRlOiBmdW5jdGlvbiBmb3JjZVVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKGlzRGVzdHJveWVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9zdGF0ZSRlbGVtZW50cyA9IHN0YXRlLmVsZW1lbnRzLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gX3N0YXRlJGVsZW1lbnRzLnJlZmVyZW5jZSxcbiAgICAgICAgICAgIHBvcHBlciA9IF9zdGF0ZSRlbGVtZW50cy5wb3BwZXI7IC8vIERvbid0IHByb2NlZWQgaWYgYHJlZmVyZW5jZWAgb3IgYHBvcHBlcmAgYXJlIG5vdCB2YWxpZCBlbGVtZW50c1xuICAgICAgICAvLyBhbnltb3JlXG5cbiAgICAgICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoSU5WQUxJRF9FTEVNRU5UX0VSUk9SKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gU3RvcmUgdGhlIHJlZmVyZW5jZSBhbmQgcG9wcGVyIHJlY3RzIHRvIGJlIHJlYWQgYnkgbW9kaWZpZXJzXG5cblxuICAgICAgICBzdGF0ZS5yZWN0cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGdldENvbXBvc2l0ZVJlY3QocmVmZXJlbmNlLCBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKSwgc3RhdGUub3B0aW9ucy5zdHJhdGVneSA9PT0gJ2ZpeGVkJyksXG4gICAgICAgICAgcG9wcGVyOiBnZXRMYXlvdXRSZWN0KHBvcHBlcilcbiAgICAgICAgfTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gcmVzZXQgdGhlIGN1cnJlbnQgdXBkYXRlIGN5Y2xlLiBUaGVcbiAgICAgICAgLy8gbW9zdCBjb21tb24gdXNlIGNhc2UgZm9yIHRoaXMgaXMgdGhlIGBmbGlwYCBtb2RpZmllciBjaGFuZ2luZyB0aGVcbiAgICAgICAgLy8gcGxhY2VtZW50LCB3aGljaCB0aGVuIG5lZWRzIHRvIHJlLXJ1biBhbGwgdGhlIG1vZGlmaWVycywgYmVjYXVzZSB0aGVcbiAgICAgICAgLy8gbG9naWMgd2FzIHByZXZpb3VzbHkgcmFuIGZvciB0aGUgcHJldmlvdXMgcGxhY2VtZW50IGFuZCBpcyB0aGVyZWZvcmVcbiAgICAgICAgLy8gc3RhbGUvaW5jb3JyZWN0XG5cbiAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUucGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7IC8vIE9uIGVhY2ggdXBkYXRlIGN5Y2xlLCB0aGUgYG1vZGlmaWVyc0RhdGFgIHByb3BlcnR5IGZvciBlYWNoIG1vZGlmaWVyXG4gICAgICAgIC8vIGlzIGZpbGxlZCB3aXRoIHRoZSBpbml0aWFsIGRhdGEgc3BlY2lmaWVkIGJ5IHRoZSBtb2RpZmllci4gVGhpcyBtZWFuc1xuICAgICAgICAvLyBpdCBkb2Vzbid0IHBlcnNpc3QgYW5kIGlzIGZyZXNoIG9uIGVhY2ggdXBkYXRlLlxuICAgICAgICAvLyBUbyBlbnN1cmUgcGVyc2lzdGVudCBkYXRhLCB1c2UgYCR7bmFtZX0jcGVyc2lzdGVudGBcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlLm1vZGlmaWVyc0RhdGFbbW9kaWZpZXIubmFtZV0gPSBPYmplY3QuYXNzaWduKHt9LCBtb2RpZmllci5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBfX2RlYnVnX2xvb3BzX18gPSAwO1xuXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIF9fZGVidWdfbG9vcHNfXyArPSAxO1xuXG4gICAgICAgICAgICBpZiAoX19kZWJ1Z19sb29wc19fID4gMTAwKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoSU5GSU5JVEVfTE9PUF9FUlJPUik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzdGF0ZS5yZXNldCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIGluZGV4ID0gLTE7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX3N0YXRlJG9yZGVyZWRNb2RpZmllID0gc3RhdGUub3JkZXJlZE1vZGlmaWVyc1tpbmRleF0sXG4gICAgICAgICAgICAgIGZuID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLmZuLFxuICAgICAgICAgICAgICBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm9wdGlvbnMsXG4gICAgICAgICAgICAgIF9vcHRpb25zID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9PT0gdm9pZCAwID8ge30gOiBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyLFxuICAgICAgICAgICAgICBuYW1lID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm5hbWU7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IGZuKHtcbiAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgICBvcHRpb25zOiBfb3B0aW9ucyxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlXG4gICAgICAgICAgICB9KSB8fCBzdGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBBc3luYyBhbmQgb3B0aW1pc3RpY2FsbHkgb3B0aW1pemVkIHVwZGF0ZSDigJMgaXQgd2lsbCBub3QgYmUgZXhlY3V0ZWQgaWZcbiAgICAgIC8vIG5vdCBuZWNlc3NhcnkgKGRlYm91bmNlZCB0byBydW4gYXQgbW9zdCBvbmNlLXBlci10aWNrKVxuICAgICAgdXBkYXRlOiBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgIGluc3RhbmNlLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgcmVzb2x2ZShzdGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSksXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIGlzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBjb25zb2xlLmVycm9yKElOVkFMSURfRUxFTUVOVF9FUlJPUik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5zZXRPcHRpb25zKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICBpZiAoIWlzRGVzdHJveWVkICYmIG9wdGlvbnMub25GaXJzdFVwZGF0ZSkge1xuICAgICAgICBvcHRpb25zLm9uRmlyc3RVcGRhdGUoc3RhdGUpO1xuICAgICAgfVxuICAgIH0pOyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byBleGVjdXRlIGFyYml0cmFyeSBjb2RlIGJlZm9yZSB0aGUgZmlyc3RcbiAgICAvLyB1cGRhdGUgY3ljbGUgcnVucy4gVGhleSB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSB1cGRhdGVcbiAgICAvLyBjeWNsZS4gVGhpcyBpcyB1c2VmdWwgd2hlbiBhIG1vZGlmaWVyIGFkZHMgc29tZSBwZXJzaXN0ZW50IGRhdGEgdGhhdFxuICAgIC8vIG90aGVyIG1vZGlmaWVycyBuZWVkIHRvIHVzZSwgYnV0IHRoZSBtb2RpZmllciBpcyBydW4gYWZ0ZXIgdGhlIGRlcGVuZGVudFxuICAgIC8vIG9uZS5cblxuICAgIGZ1bmN0aW9uIHJ1bk1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBfcmVmMy5uYW1lLFxuICAgICAgICAgICAgX3JlZjMkb3B0aW9ucyA9IF9yZWYzLm9wdGlvbnMsXG4gICAgICAgICAgICBvcHRpb25zID0gX3JlZjMkb3B0aW9ucyA9PT0gdm9pZCAwID8ge30gOiBfcmVmMyRvcHRpb25zLFxuICAgICAgICAgICAgZWZmZWN0ID0gX3JlZjMuZWZmZWN0O1xuXG4gICAgICAgIGlmICh0eXBlb2YgZWZmZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFyIGNsZWFudXBGbiA9IGVmZmVjdCh7XG4gICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIG5vb3BGbiA9IGZ1bmN0aW9uIG5vb3BGbigpIHt9O1xuXG4gICAgICAgICAgZWZmZWN0Q2xlYW51cEZucy5wdXNoKGNsZWFudXBGbiB8fCBub29wRm4pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgZWZmZWN0Q2xlYW51cEZucy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgIH0pO1xuICAgICAgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfTtcbn1cbmV4cG9ydCB2YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcigpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGRldGVjdE92ZXJmbG93IH07IiwiaW1wb3J0IHsgaXNTaGFkb3dSb290IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFpbnMocGFyZW50LCBjaGlsZCkge1xuICB2YXIgcm9vdE5vZGUgPSBjaGlsZC5nZXRSb290Tm9kZSAmJiBjaGlsZC5nZXRSb290Tm9kZSgpOyAvLyBGaXJzdCwgYXR0ZW1wdCB3aXRoIGZhc3RlciBuYXRpdmUgbWV0aG9kXG5cbiAgaWYgKHBhcmVudC5jb250YWlucyhjaGlsZCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyB0aGVuIGZhbGxiYWNrIHRvIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiB3aXRoIFNoYWRvdyBET00gc3VwcG9ydFxuICBlbHNlIGlmIChyb290Tm9kZSAmJiBpc1NoYWRvd1Jvb3Qocm9vdE5vZGUpKSB7XG4gICAgICB2YXIgbmV4dCA9IGNoaWxkO1xuXG4gICAgICBkbyB7XG4gICAgICAgIGlmIChuZXh0ICYmIHBhcmVudC5pc1NhbWVOb2RlKG5leHQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddOiBuZWVkIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhpcy4uLlxuXG5cbiAgICAgICAgbmV4dCA9IG5leHQucGFyZW50Tm9kZSB8fCBuZXh0Lmhvc3Q7XG4gICAgICB9IHdoaWxlIChuZXh0KTtcbiAgICB9IC8vIEdpdmUgdXAsIHRoZSByZXN1bHQgaXMgZmFsc2VcblxuXG4gIHJldHVybiBmYWxzZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICB0b3A6IHJlY3QudG9wLFxuICAgIHJpZ2h0OiByZWN0LnJpZ2h0LFxuICAgIGJvdHRvbTogcmVjdC5ib3R0b20sXG4gICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgIHg6IHJlY3QubGVmdCxcbiAgICB5OiByZWN0LnRvcFxuICB9O1xufSIsImltcG9ydCB7IHZpZXdwb3J0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0Vmlld3BvcnRSZWN0IGZyb20gXCIuL2dldFZpZXdwb3J0UmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50UmVjdCBmcm9tIFwiLi9nZXREb2N1bWVudFJlY3QuanNcIjtcbmltcG9ydCBsaXN0U2Nyb2xsUGFyZW50cyBmcm9tIFwiLi9saXN0U2Nyb2xsUGFyZW50cy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCIuL2NvbnRhaW5zLmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCByZWN0VG9DbGllbnRSZWN0IGZyb20gXCIuLi91dGlscy9yZWN0VG9DbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgeyBtYXgsIG1pbiB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5cbmZ1bmN0aW9uIGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCk7XG4gIHJlY3QudG9wID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudFRvcDtcbiAgcmVjdC5sZWZ0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRMZWZ0O1xuICByZWN0LmJvdHRvbSA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIHJlY3QucmlnaHQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LndpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgcmVjdC5oZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC54ID0gcmVjdC5sZWZ0O1xuICByZWN0LnkgPSByZWN0LnRvcDtcbiAgcmV0dXJuIHJlY3Q7XG59XG5cbmZ1bmN0aW9uIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50KSB7XG4gIHJldHVybiBjbGlwcGluZ1BhcmVudCA9PT0gdmlld3BvcnQgPyByZWN0VG9DbGllbnRSZWN0KGdldFZpZXdwb3J0UmVjdChlbGVtZW50KSkgOiBpc0hUTUxFbGVtZW50KGNsaXBwaW5nUGFyZW50KSA/IGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGNsaXBwaW5nUGFyZW50KSA6IHJlY3RUb0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkpO1xufSAvLyBBIFwiY2xpcHBpbmcgcGFyZW50XCIgaXMgYW4gb3ZlcmZsb3dhYmxlIGNvbnRhaW5lciB3aXRoIHRoZSBjaGFyYWN0ZXJpc3RpYyBvZlxuLy8gY2xpcHBpbmcgKG9yIGhpZGluZykgb3ZlcmZsb3dpbmcgZWxlbWVudHMgd2l0aCBhIHBvc2l0aW9uIGRpZmZlcmVudCBmcm9tXG4vLyBgaW5pdGlhbGBcblxuXG5mdW5jdGlvbiBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkge1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gbGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XG4gIHZhciBjYW5Fc2NhcGVDbGlwcGluZyA9IFsnYWJzb2x1dGUnLCAnZml4ZWQnXS5pbmRleE9mKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24pID49IDA7XG4gIHZhciBjbGlwcGVyRWxlbWVudCA9IGNhbkVzY2FwZUNsaXBwaW5nICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkgPyBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gIGlmICghaXNFbGVtZW50KGNsaXBwZXJFbGVtZW50KSkge1xuICAgIHJldHVybiBbXTtcbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMTQxNFxuXG5cbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50cy5maWx0ZXIoZnVuY3Rpb24gKGNsaXBwaW5nUGFyZW50KSB7XG4gICAgcmV0dXJuIGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgJiYgY29udGFpbnMoY2xpcHBpbmdQYXJlbnQsIGNsaXBwZXJFbGVtZW50KSAmJiBnZXROb2RlTmFtZShjbGlwcGluZ1BhcmVudCkgIT09ICdib2R5JztcbiAgfSk7XG59IC8vIEdldHMgdGhlIG1heGltdW0gYXJlYSB0aGF0IHRoZSBlbGVtZW50IGlzIHZpc2libGUgaW4gZHVlIHRvIGFueSBudW1iZXIgb2Zcbi8vIGNsaXBwaW5nIHBhcmVudHNcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDbGlwcGluZ1JlY3QoZWxlbWVudCwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSkge1xuICB2YXIgbWFpbkNsaXBwaW5nUGFyZW50cyA9IGJvdW5kYXJ5ID09PSAnY2xpcHBpbmdQYXJlbnRzJyA/IGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSA6IFtdLmNvbmNhdChib3VuZGFyeSk7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSBbXS5jb25jYXQobWFpbkNsaXBwaW5nUGFyZW50cywgW3Jvb3RCb3VuZGFyeV0pO1xuICB2YXIgZmlyc3RDbGlwcGluZ1BhcmVudCA9IGNsaXBwaW5nUGFyZW50c1swXTtcbiAgdmFyIGNsaXBwaW5nUmVjdCA9IGNsaXBwaW5nUGFyZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjY1JlY3QsIGNsaXBwaW5nUGFyZW50KSB7XG4gICAgdmFyIHJlY3QgPSBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCk7XG4gICAgYWNjUmVjdC50b3AgPSBtYXgocmVjdC50b3AsIGFjY1JlY3QudG9wKTtcbiAgICBhY2NSZWN0LnJpZ2h0ID0gbWluKHJlY3QucmlnaHQsIGFjY1JlY3QucmlnaHQpO1xuICAgIGFjY1JlY3QuYm90dG9tID0gbWluKHJlY3QuYm90dG9tLCBhY2NSZWN0LmJvdHRvbSk7XG4gICAgYWNjUmVjdC5sZWZ0ID0gbWF4KHJlY3QubGVmdCwgYWNjUmVjdC5sZWZ0KTtcbiAgICByZXR1cm4gYWNjUmVjdDtcbiAgfSwgZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgZmlyc3RDbGlwcGluZ1BhcmVudCkpO1xuICBjbGlwcGluZ1JlY3Qud2lkdGggPSBjbGlwcGluZ1JlY3QucmlnaHQgLSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LmhlaWdodCA9IGNsaXBwaW5nUmVjdC5ib3R0b20gLSBjbGlwcGluZ1JlY3QudG9wO1xuICBjbGlwcGluZ1JlY3QueCA9IGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QueSA9IGNsaXBwaW5nUmVjdC50b3A7XG4gIHJldHVybiBjbGlwcGluZ1JlY3Q7XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXROb2RlU2Nyb2xsIGZyb20gXCIuL2dldE5vZGVTY3JvbGwuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjsgLy8gUmV0dXJucyB0aGUgY29tcG9zaXRlIHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LlxuLy8gQ29tcG9zaXRlIG1lYW5zIGl0IHRha2VzIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zIGFzIHdlbGwgYXMgbGF5b3V0LlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb21wb3NpdGVSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50LCBvZmZzZXRQYXJlbnQsIGlzRml4ZWQpIHtcbiAgaWYgKGlzRml4ZWQgPT09IHZvaWQgMCkge1xuICAgIGlzRml4ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQpO1xuICB2YXIgaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIHZhciBzY3JvbGwgPSB7XG4gICAgc2Nyb2xsTGVmdDogMCxcbiAgICBzY3JvbGxUb3A6IDBcbiAgfTtcbiAgdmFyIG9mZnNldHMgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgaWYgKGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50IHx8ICFpc09mZnNldFBhcmVudEFuRWxlbWVudCAmJiAhaXNGaXhlZCkge1xuICAgIGlmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpICE9PSAnYm9keScgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMDc4XG4gICAgaXNTY3JvbGxQYXJlbnQoZG9jdW1lbnRFbGVtZW50KSkge1xuICAgICAgc2Nyb2xsID0gZ2V0Tm9kZVNjcm9sbChvZmZzZXRQYXJlbnQpO1xuICAgIH1cblxuICAgIGlmIChpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkpIHtcbiAgICAgIG9mZnNldHMgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50KTtcbiAgICAgIG9mZnNldHMueCArPSBvZmZzZXRQYXJlbnQuY2xpZW50TGVmdDtcbiAgICAgIG9mZnNldHMueSArPSBvZmZzZXRQYXJlbnQuY2xpZW50VG9wO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBvZmZzZXRzLnggPSBnZXRXaW5kb3dTY3JvbGxCYXJYKGRvY3VtZW50RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiByZWN0LmxlZnQgKyBzY3JvbGwuc2Nyb2xsTGVmdCAtIG9mZnNldHMueCxcbiAgICB5OiByZWN0LnRvcCArIHNjcm9sbC5zY3JvbGxUb3AgLSBvZmZzZXRzLnksXG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICB9O1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGdldFdpbmRvdyhlbGVtZW50KS5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xufSIsImltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSB7XG4gIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgcmV0dXJuICgoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudC5vd25lckRvY3VtZW50IDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gIGVsZW1lbnQuZG9jdW1lbnQpIHx8IHdpbmRvdy5kb2N1bWVudCkuZG9jdW1lbnRFbGVtZW50O1xufSIsImltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuaW1wb3J0IHsgbWF4IH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjsgLy8gR2V0cyB0aGUgZW50aXJlIHNpemUgb2YgdGhlIHNjcm9sbGFibGUgZG9jdW1lbnQgYXJlYSwgZXZlbiBleHRlbmRpbmcgb3V0c2lkZVxuLy8gb2YgdGhlIGA8aHRtbD5gIGFuZCBgPGJvZHk+YCByZWN0IGJvdW5kcyBpZiBob3Jpem9udGFsbHkgc2Nyb2xsYWJsZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREb2N1bWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgd2luU2Nyb2xsID0gZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpO1xuICB2YXIgYm9keSA9IChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keTtcbiAgdmFyIHdpZHRoID0gbWF4KGh0bWwuc2Nyb2xsV2lkdGgsIGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LnNjcm9sbFdpZHRoIDogMCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKTtcbiAgdmFyIGhlaWdodCA9IG1heChodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGJvZHkgPyBib2R5LnNjcm9sbEhlaWdodCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudEhlaWdodCA6IDApO1xuICB2YXIgeCA9IC13aW5TY3JvbGwuc2Nyb2xsTGVmdCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCk7XG4gIHZhciB5ID0gLXdpblNjcm9sbC5zY3JvbGxUb3A7XG5cbiAgaWYgKGdldENvbXB1dGVkU3R5bGUoYm9keSB8fCBodG1sKS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgeCArPSBtYXgoaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwKSAtIHdpZHRoO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRTY3JvbGwoZWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IGVsZW1lbnQuc2Nyb2xsVG9wXG4gIH07XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjsgLy8gUmV0dXJucyB0aGUgbGF5b3V0IHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LiBMYXlvdXRcbi8vIG1lYW5zIGl0IGRvZXNuJ3QgdGFrZSBpbnRvIGFjY291bnQgdHJhbnNmb3Jtcy5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TGF5b3V0UmVjdChlbGVtZW50KSB7XG4gIHZhciBjbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpOyAvLyBVc2UgdGhlIGNsaWVudFJlY3Qgc2l6ZXMgaWYgaXQncyBub3QgYmVlbiB0cmFuc2Zvcm1lZC5cbiAgLy8gRml4ZXMgaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMjIzXG5cbiAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LndpZHRoIC0gd2lkdGgpIDw9IDEpIHtcbiAgICB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC5oZWlnaHQgLSBoZWlnaHQpIDw9IDEpIHtcbiAgICBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuICAgIHk6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE5vZGVOYW1lKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgPyAoZWxlbWVudC5ub2RlTmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKSA6IG51bGw7XG59IiwiaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldEhUTUxFbGVtZW50U2Nyb2xsIGZyb20gXCIuL2dldEhUTUxFbGVtZW50U2Nyb2xsLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXROb2RlU2Nyb2xsKG5vZGUpIHtcbiAgaWYgKG5vZGUgPT09IGdldFdpbmRvdyhub2RlKSB8fCAhaXNIVE1MRWxlbWVudChub2RlKSkge1xuICAgIHJldHVybiBnZXRXaW5kb3dTY3JvbGwobm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdldEhUTUxFbGVtZW50U2Nyb2xsKG5vZGUpO1xuICB9XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBpc1RhYmxlRWxlbWVudCBmcm9tIFwiLi9pc1RhYmxlRWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuXG5mdW5jdGlvbiBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvODM3XG4gIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudDtcbn0gLy8gYC5vZmZzZXRQYXJlbnRgIHJlcG9ydHMgYG51bGxgIGZvciBmaXhlZCBlbGVtZW50cywgd2hpbGUgYWJzb2x1dGUgZWxlbWVudHNcbi8vIHJldHVybiB0aGUgY29udGFpbmluZyBibG9ja1xuXG5cbmZ1bmN0aW9uIGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB7XG4gIHZhciBpc0ZpcmVmb3ggPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpICE9PSAtMTtcbiAgdmFyIGlzSUUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQnKSAhPT0gLTE7XG5cbiAgaWYgKGlzSUUgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgIC8vIEluIElFIDksIDEwIGFuZCAxMSBmaXhlZCBlbGVtZW50cyBjb250YWluaW5nIGJsb2NrIGlzIGFsd2F5cyBlc3RhYmxpc2hlZCBieSB0aGUgdmlld3BvcnRcbiAgICB2YXIgZWxlbWVudENzcyA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG5cbiAgICBpZiAoZWxlbWVudENzcy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgdmFyIGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcblxuICB3aGlsZSAoaXNIVE1MRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgWydodG1sJywgJ2JvZHknXS5pbmRleE9mKGdldE5vZGVOYW1lKGN1cnJlbnROb2RlKSkgPCAwKSB7XG4gICAgdmFyIGNzcyA9IGdldENvbXB1dGVkU3R5bGUoY3VycmVudE5vZGUpOyAvLyBUaGlzIGlzIG5vbi1leGhhdXN0aXZlIGJ1dCBjb3ZlcnMgdGhlIG1vc3QgY29tbW9uIENTUyBwcm9wZXJ0aWVzIHRoYXRcbiAgICAvLyBjcmVhdGUgYSBjb250YWluaW5nIGJsb2NrLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Db250YWluaW5nX2Jsb2NrI2lkZW50aWZ5aW5nX3RoZV9jb250YWluaW5nX2Jsb2NrXG5cbiAgICBpZiAoY3NzLnRyYW5zZm9ybSAhPT0gJ25vbmUnIHx8IGNzcy5wZXJzcGVjdGl2ZSAhPT0gJ25vbmUnIHx8IGNzcy5jb250YWluID09PSAncGFpbnQnIHx8IFsndHJhbnNmb3JtJywgJ3BlcnNwZWN0aXZlJ10uaW5kZXhPZihjc3Mud2lsbENoYW5nZSkgIT09IC0xIHx8IGlzRmlyZWZveCAmJiBjc3Mud2lsbENoYW5nZSA9PT0gJ2ZpbHRlcicgfHwgaXNGaXJlZm94ICYmIGNzcy5maWx0ZXIgJiYgY3NzLmZpbHRlciAhPT0gJ25vbmUnKSB7XG4gICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn0gLy8gR2V0cyB0aGUgY2xvc2VzdCBhbmNlc3RvciBwb3NpdGlvbmVkIGVsZW1lbnQuIEhhbmRsZXMgc29tZSBlZGdlIGNhc2VzLFxuLy8gc3VjaCBhcyB0YWJsZSBhbmNlc3RvcnMgYW5kIGNyb3NzIGJyb3dzZXIgYnVncy5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50KTtcblxuICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIGlzVGFibGVFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50KTtcbiAgfVxuXG4gIGlmIChvZmZzZXRQYXJlbnQgJiYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdodG1sJyB8fCBnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnYm9keScgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkgfHwgd2luZG93O1xufSIsImltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCB7IGlzU2hhZG93Um9vdCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBhcmVudE5vZGUoZWxlbWVudCkge1xuICBpZiAoZ2V0Tm9kZU5hbWUoZWxlbWVudCkgPT09ICdodG1sJykge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuICgvLyB0aGlzIGlzIGEgcXVpY2tlciAoYnV0IGxlc3MgdHlwZSBzYWZlKSB3YXkgdG8gc2F2ZSBxdWl0ZSBzb21lIGJ5dGVzIGZyb20gdGhlIGJ1bmRsZVxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl1cbiAgICAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICBlbGVtZW50LmFzc2lnbmVkU2xvdCB8fCAvLyBzdGVwIGludG8gdGhlIHNoYWRvdyBET00gb2YgdGhlIHBhcmVudCBvZiBhIHNsb3R0ZWQgbm9kZVxuICAgIGVsZW1lbnQucGFyZW50Tm9kZSB8fCAoIC8vIERPTSBFbGVtZW50IGRldGVjdGVkXG4gICAgaXNTaGFkb3dSb290KGVsZW1lbnQpID8gZWxlbWVudC5ob3N0IDogbnVsbCkgfHwgLy8gU2hhZG93Um9vdCBkZXRlY3RlZFxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBIVE1MRWxlbWVudCBpcyBhIE5vZGVcbiAgICBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkgLy8gZmFsbGJhY2tcblxuICApO1xufSIsImltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KG5vZGUpIHtcbiAgaWYgKFsnaHRtbCcsICdib2R5JywgJyNkb2N1bWVudCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUobm9kZSkpID49IDApIHtcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgaWYgKGlzSFRNTEVsZW1lbnQobm9kZSkgJiYgaXNTY3JvbGxQYXJlbnQobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShub2RlKSk7XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHZpc3VhbFZpZXdwb3J0ID0gd2luLnZpc3VhbFZpZXdwb3J0O1xuICB2YXIgd2lkdGggPSBodG1sLmNsaWVudFdpZHRoO1xuICB2YXIgaGVpZ2h0ID0gaHRtbC5jbGllbnRIZWlnaHQ7XG4gIHZhciB4ID0gMDtcbiAgdmFyIHkgPSAwOyAvLyBOQjogVGhpcyBpc24ndCBzdXBwb3J0ZWQgb24gaU9TIDw9IDEyLiBJZiB0aGUga2V5Ym9hcmQgaXMgb3BlbiwgdGhlIHBvcHBlclxuICAvLyBjYW4gYmUgb2JzY3VyZWQgdW5kZXJuZWF0aCBpdC5cbiAgLy8gQWxzbywgYGh0bWwuY2xpZW50SGVpZ2h0YCBhZGRzIHRoZSBib3R0b20gYmFyIGhlaWdodCBpbiBTYWZhcmkgaU9TLCBldmVuXG4gIC8vIGlmIGl0IGlzbid0IG9wZW4sIHNvIGlmIHRoaXMgaXNuJ3QgYXZhaWxhYmxlLCB0aGUgcG9wcGVyIHdpbGwgYmUgZGV0ZWN0ZWRcbiAgLy8gdG8gb3ZlcmZsb3cgdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuIHRvbyBlYXJseS5cblxuICBpZiAodmlzdWFsVmlld3BvcnQpIHtcbiAgICB3aWR0aCA9IHZpc3VhbFZpZXdwb3J0LndpZHRoO1xuICAgIGhlaWdodCA9IHZpc3VhbFZpZXdwb3J0LmhlaWdodDsgLy8gVXNlcyBMYXlvdXQgVmlld3BvcnQgKGxpa2UgQ2hyb21lOyBTYWZhcmkgZG9lcyBub3QgY3VycmVudGx5KVxuICAgIC8vIEluIENocm9tZSwgaXQgcmV0dXJucyBhIHZhbHVlIHZlcnkgY2xvc2UgdG8gMCAoKy8tKSBidXQgY29udGFpbnMgcm91bmRpbmdcbiAgICAvLyBlcnJvcnMgZHVlIHRvIGZsb2F0aW5nIHBvaW50IG51bWJlcnMsIHNvIHdlIG5lZWQgdG8gY2hlY2sgcHJlY2lzaW9uLlxuICAgIC8vIFNhZmFyaSByZXR1cm5zIGEgbnVtYmVyIDw9IDAsIHVzdWFsbHkgPCAtMSB3aGVuIHBpbmNoLXpvb21lZFxuICAgIC8vIEZlYXR1cmUgZGV0ZWN0aW9uIGZhaWxzIGluIG1vYmlsZSBlbXVsYXRpb24gbW9kZSBpbiBDaHJvbWUuXG4gICAgLy8gTWF0aC5hYnMod2luLmlubmVyV2lkdGggLyB2aXN1YWxWaWV3cG9ydC5zY2FsZSAtIHZpc3VhbFZpZXdwb3J0LndpZHRoKSA8XG4gICAgLy8gMC4wMDFcbiAgICAvLyBGYWxsYmFjayBoZXJlOiBcIk5vdCBTYWZhcmlcIiB1c2VyQWdlbnRcblxuICAgIGlmICghL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgeCA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQ7XG4gICAgICB5ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHg6IHggKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpLFxuICAgIHk6IHlcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3cobm9kZSkge1xuICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIGlmIChub2RlLnRvU3RyaW5nKCkgIT09ICdbb2JqZWN0IFdpbmRvd10nKSB7XG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQ7XG4gICAgcmV0dXJuIG93bmVyRG9jdW1lbnQgPyBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdyA6IHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGwobm9kZSkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KG5vZGUpO1xuICB2YXIgc2Nyb2xsTGVmdCA9IHdpbi5wYWdlWE9mZnNldDtcbiAgdmFyIHNjcm9sbFRvcCA9IHdpbi5wYWdlWU9mZnNldDtcbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBzY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogc2Nyb2xsVG9wXG4gIH07XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSB7XG4gIC8vIElmIDxodG1sPiBoYXMgYSBDU1Mgd2lkdGggZ3JlYXRlciB0aGFuIHRoZSB2aWV3cG9ydCwgdGhlbiB0aGlzIHdpbGwgYmVcbiAgLy8gaW5jb3JyZWN0IGZvciBSVEwuXG4gIC8vIFBvcHBlciAxIGlzIGJyb2tlbiBpbiB0aGlzIGNhc2UgYW5kIG5ldmVyIGhhZCBhIGJ1ZyByZXBvcnQgc28gbGV0J3MgYXNzdW1lXG4gIC8vIGl0J3Mgbm90IGFuIGlzc3VlLiBJIGRvbid0IHRoaW5rIGFueW9uZSBldmVyIHNwZWNpZmllcyB3aWR0aCBvbiA8aHRtbD5cbiAgLy8gYW55d2F5LlxuICAvLyBCcm93c2VycyB3aGVyZSB0aGUgbGVmdCBzY3JvbGxiYXIgZG9lc24ndCBjYXVzZSBhbiBpc3N1ZSByZXBvcnQgYDBgIGZvclxuICAvLyB0aGlzIChlLmcuIEVkZ2UgMjAxOSwgSUUxMSwgU2FmYXJpKVxuICByZXR1cm4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkubGVmdCArIGdldFdpbmRvd1Njcm9sbChlbGVtZW50KS5zY3JvbGxMZWZ0O1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5cbmZ1bmN0aW9uIGlzRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNIVE1MRWxlbWVudChub2RlKSB7XG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLkhUTUxFbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc1NoYWRvd1Jvb3Qobm9kZSkge1xuICAvLyBJRSAxMSBoYXMgbm8gU2hhZG93Um9vdFxuICBpZiAodHlwZW9mIFNoYWRvd1Jvb3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuU2hhZG93Um9vdDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xufVxuXG5leHBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQsIGlzU2hhZG93Um9vdCB9OyIsImltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gRmlyZWZveCB3YW50cyB1cyB0byBjaGVjayBgLXhgIGFuZCBgLXlgIHZhcmlhdGlvbnMgYXMgd2VsbFxuICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLFxuICAgICAgb3ZlcmZsb3cgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvdyxcbiAgICAgIG92ZXJmbG93WCA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WCxcbiAgICAgIG92ZXJmbG93WSA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WTtcblxuICByZXR1cm4gL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVuLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKTtcbn0iLCJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGFibGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIFsndGFibGUnLCAndGQnLCAndGgnXS5pbmRleE9mKGdldE5vZGVOYW1lKGVsZW1lbnQpKSA+PSAwO1xufSIsImltcG9ydCBnZXRTY3JvbGxQYXJlbnQgZnJvbSBcIi4vZ2V0U2Nyb2xsUGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7XG4vKlxuZ2l2ZW4gYSBET00gZWxlbWVudCwgcmV0dXJuIHRoZSBsaXN0IG9mIGFsbCBzY3JvbGwgcGFyZW50cywgdXAgdGhlIGxpc3Qgb2YgYW5jZXNvcnNcbnVudGlsIHdlIGdldCB0byB0aGUgdG9wIHdpbmRvdyBvYmplY3QuIFRoaXMgbGlzdCBpcyB3aGF0IHdlIGF0dGFjaCBzY3JvbGwgbGlzdGVuZXJzXG50bywgYmVjYXVzZSBpZiBhbnkgb2YgdGhlc2UgcGFyZW50IGVsZW1lbnRzIHNjcm9sbCwgd2UnbGwgbmVlZCB0byByZS1jYWxjdWxhdGUgdGhlXG5yZWZlcmVuY2UgZWxlbWVudCdzIHBvc2l0aW9uLlxuKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFNjcm9sbFBhcmVudHMoZWxlbWVudCwgbGlzdCkge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gIGlmIChsaXN0ID09PSB2b2lkIDApIHtcbiAgICBsaXN0ID0gW107XG4gIH1cblxuICB2YXIgc2Nyb2xsUGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpO1xuICB2YXIgaXNCb2R5ID0gc2Nyb2xsUGFyZW50ID09PSAoKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5KTtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhzY3JvbGxQYXJlbnQpO1xuICB2YXIgdGFyZ2V0ID0gaXNCb2R5ID8gW3dpbl0uY29uY2F0KHdpbi52aXN1YWxWaWV3cG9ydCB8fCBbXSwgaXNTY3JvbGxQYXJlbnQoc2Nyb2xsUGFyZW50KSA/IHNjcm9sbFBhcmVudCA6IFtdKSA6IHNjcm9sbFBhcmVudDtcbiAgdmFyIHVwZGF0ZWRMaXN0ID0gbGlzdC5jb25jYXQodGFyZ2V0KTtcbiAgcmV0dXJuIGlzQm9keSA/IHVwZGF0ZWRMaXN0IDogLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IGlzQm9keSB0ZWxscyB1cyB0YXJnZXQgd2lsbCBiZSBhbiBIVE1MRWxlbWVudCBoZXJlXG4gIHVwZGF0ZWRMaXN0LmNvbmNhdChsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKHRhcmdldCkpKTtcbn0iLCJleHBvcnQgdmFyIHRvcCA9ICd0b3AnO1xuZXhwb3J0IHZhciBib3R0b20gPSAnYm90dG9tJztcbmV4cG9ydCB2YXIgcmlnaHQgPSAncmlnaHQnO1xuZXhwb3J0IHZhciBsZWZ0ID0gJ2xlZnQnO1xuZXhwb3J0IHZhciBhdXRvID0gJ2F1dG8nO1xuZXhwb3J0IHZhciBiYXNlUGxhY2VtZW50cyA9IFt0b3AsIGJvdHRvbSwgcmlnaHQsIGxlZnRdO1xuZXhwb3J0IHZhciBzdGFydCA9ICdzdGFydCc7XG5leHBvcnQgdmFyIGVuZCA9ICdlbmQnO1xuZXhwb3J0IHZhciBjbGlwcGluZ1BhcmVudHMgPSAnY2xpcHBpbmdQYXJlbnRzJztcbmV4cG9ydCB2YXIgdmlld3BvcnQgPSAndmlld3BvcnQnO1xuZXhwb3J0IHZhciBwb3BwZXIgPSAncG9wcGVyJztcbmV4cG9ydCB2YXIgcmVmZXJlbmNlID0gJ3JlZmVyZW5jZSc7XG5leHBvcnQgdmFyIHZhcmlhdGlvblBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovYmFzZVBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTtcbmV4cG9ydCB2YXIgcGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9bXS5jb25jYXQoYmFzZVBsYWNlbWVudHMsIFthdXRvXSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50LCBwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pOyAvLyBtb2RpZmllcnMgdGhhdCBuZWVkIHRvIHJlYWQgdGhlIERPTVxuXG5leHBvcnQgdmFyIGJlZm9yZVJlYWQgPSAnYmVmb3JlUmVhZCc7XG5leHBvcnQgdmFyIHJlYWQgPSAncmVhZCc7XG5leHBvcnQgdmFyIGFmdGVyUmVhZCA9ICdhZnRlclJlYWQnOyAvLyBwdXJlLWxvZ2ljIG1vZGlmaWVyc1xuXG5leHBvcnQgdmFyIGJlZm9yZU1haW4gPSAnYmVmb3JlTWFpbic7XG5leHBvcnQgdmFyIG1haW4gPSAnbWFpbic7XG5leHBvcnQgdmFyIGFmdGVyTWFpbiA9ICdhZnRlck1haW4nOyAvLyBtb2RpZmllciB3aXRoIHRoZSBwdXJwb3NlIHRvIHdyaXRlIHRvIHRoZSBET00gKG9yIHdyaXRlIGludG8gYSBmcmFtZXdvcmsgc3RhdGUpXG5cbmV4cG9ydCB2YXIgYmVmb3JlV3JpdGUgPSAnYmVmb3JlV3JpdGUnO1xuZXhwb3J0IHZhciB3cml0ZSA9ICd3cml0ZSc7XG5leHBvcnQgdmFyIGFmdGVyV3JpdGUgPSAnYWZ0ZXJXcml0ZSc7XG5leHBvcnQgdmFyIG1vZGlmaWVyUGhhc2VzID0gW2JlZm9yZVJlYWQsIHJlYWQsIGFmdGVyUmVhZCwgYmVmb3JlTWFpbiwgbWFpbiwgYWZ0ZXJNYWluLCBiZWZvcmVXcml0ZSwgd3JpdGUsIGFmdGVyV3JpdGVdOyIsImV4cG9ydCAqIGZyb20gXCIuL2VudW1zLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tb2RpZmllcnMvaW5kZXguanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBwb3BwZXJHZW5lcmF0b3IsIGRldGVjdE92ZXJmbG93LCBjcmVhdGVQb3BwZXIgYXMgY3JlYXRlUG9wcGVyQmFzZSB9IGZyb20gXCIuL2NyZWF0ZVBvcHBlci5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciB9IGZyb20gXCIuL3BvcHBlci5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciBhcyBjcmVhdGVQb3BwZXJMaXRlIH0gZnJvbSBcIi4vcG9wcGVyLWxpdGUuanNcIjsiLCJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4uL2RvbS11dGlscy9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiOyAvLyBUaGlzIG1vZGlmaWVyIHRha2VzIHRoZSBzdHlsZXMgcHJlcGFyZWQgYnkgdGhlIGBjb21wdXRlU3R5bGVzYCBtb2RpZmllclxuLy8gYW5kIGFwcGxpZXMgdGhlbSB0byB0aGUgSFRNTEVsZW1lbnRzIHN1Y2ggYXMgcG9wcGVyIGFuZCBhcnJvd1xuXG5mdW5jdGlvbiBhcHBseVN0eWxlcyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHN0eWxlID0gc3RhdGUuc3R5bGVzW25hbWVdIHx8IHt9O1xuICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEZsb3cgZG9lc24ndCBzdXBwb3J0IHRvIGV4dGVuZCB0aGlzIHByb3BlcnR5LCBidXQgaXQncyB0aGUgbW9zdFxuICAgIC8vIGVmZmVjdGl2ZSB3YXkgdG8gYXBwbHkgc3R5bGVzIHRvIGFuIEhUTUxFbGVtZW50XG4gICAgLy8gJEZsb3dGaXhNZVtjYW5ub3Qtd3JpdGVdXG5cblxuICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlO1xuICB2YXIgaW5pdGlhbFN0eWxlcyA9IHtcbiAgICBwb3BwZXI6IHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgbGVmdDogJzAnLFxuICAgICAgdG9wOiAnMCcsXG4gICAgICBtYXJnaW46ICcwJ1xuICAgIH0sXG4gICAgYXJyb3c6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSxcbiAgICByZWZlcmVuY2U6IHt9XG4gIH07XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMucG9wcGVyLnN0eWxlLCBpbml0aWFsU3R5bGVzLnBvcHBlcik7XG4gIHN0YXRlLnN0eWxlcyA9IGluaXRpYWxTdHlsZXM7XG5cbiAgaWYgKHN0YXRlLmVsZW1lbnRzLmFycm93KSB7XG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5hcnJvdy5zdHlsZSwgaW5pdGlhbFN0eWxlcy5hcnJvdyk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdO1xuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgICAgdmFyIHN0eWxlUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHN0YXRlLnN0eWxlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IHN0YXRlLnN0eWxlc1tuYW1lXSA6IGluaXRpYWxTdHlsZXNbbmFtZV0pOyAvLyBTZXQgYWxsIHZhbHVlcyB0byBhbiBlbXB0eSBzdHJpbmcgdG8gdW5zZXQgdGhlbVxuXG4gICAgICB2YXIgc3R5bGUgPSBzdHlsZVByb3BlcnRpZXMucmVkdWNlKGZ1bmN0aW9uIChzdHlsZSwgcHJvcGVydHkpIHtcbiAgICAgICAgc3R5bGVbcHJvcGVydHldID0gJyc7XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH0sIHt9KTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogYXBwbHlTdHlsZXMsXG4gIGVmZmVjdDogZWZmZWN0LFxuICByZXF1aXJlczogWydjb21wdXRlU3R5bGVzJ11cbn07IiwiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCIuLi9kb20tdXRpbHMvY29udGFpbnMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHdpdGhpbiBmcm9tIFwiLi4vdXRpbHMvd2l0aGluLmpzXCI7XG5pbXBvcnQgbWVyZ2VQYWRkaW5nT2JqZWN0IGZyb20gXCIuLi91dGlscy9tZXJnZVBhZGRpbmdPYmplY3QuanNcIjtcbmltcG9ydCBleHBhbmRUb0hhc2hNYXAgZnJvbSBcIi4uL3V0aWxzL2V4cGFuZFRvSGFzaE1hcC5qc1wiO1xuaW1wb3J0IHsgbGVmdCwgcmlnaHQsIGJhc2VQbGFjZW1lbnRzLCB0b3AsIGJvdHRvbSB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciB0b1BhZGRpbmdPYmplY3QgPSBmdW5jdGlvbiB0b1BhZGRpbmdPYmplY3QocGFkZGluZywgc3RhdGUpIHtcbiAgcGFkZGluZyA9IHR5cGVvZiBwYWRkaW5nID09PSAnZnVuY3Rpb24nID8gcGFkZGluZyhPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pKSA6IHBhZGRpbmc7XG4gIHJldHVybiBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xufTtcblxuZnVuY3Rpb24gYXJyb3coX3JlZikge1xuICB2YXIgX3N0YXRlJG1vZGlmaWVyc0RhdGEkO1xuXG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBheGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgaXNWZXJ0aWNhbCA9IFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwO1xuICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICBpZiAoIWFycm93RWxlbWVudCB8fCAhcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gdG9QYWRkaW5nT2JqZWN0KG9wdGlvbnMucGFkZGluZywgc3RhdGUpO1xuICB2YXIgYXJyb3dSZWN0ID0gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpO1xuICB2YXIgbWluUHJvcCA9IGF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gIHZhciBtYXhQcm9wID0gYXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gIHZhciBlbmREaWZmID0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2xlbl0gKyBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc10gLSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucG9wcGVyW2xlbl07XG4gIHZhciBzdGFydERpZmYgPSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdO1xuICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoYXJyb3dFbGVtZW50KTtcbiAgdmFyIGNsaWVudFNpemUgPSBhcnJvd09mZnNldFBhcmVudCA/IGF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50V2lkdGggfHwgMCA6IDA7XG4gIHZhciBjZW50ZXJUb1JlZmVyZW5jZSA9IGVuZERpZmYgLyAyIC0gc3RhcnREaWZmIC8gMjsgLy8gTWFrZSBzdXJlIHRoZSBhcnJvdyBkb2Vzbid0IG92ZXJmbG93IHRoZSBwb3BwZXIgaWYgdGhlIGNlbnRlciBwb2ludCBpc1xuICAvLyBvdXRzaWRlIG9mIHRoZSBwb3BwZXIgYm91bmRzXG5cbiAgdmFyIG1pbiA9IHBhZGRpbmdPYmplY3RbbWluUHJvcF07XG4gIHZhciBtYXggPSBjbGllbnRTaXplIC0gYXJyb3dSZWN0W2xlbl0gLSBwYWRkaW5nT2JqZWN0W21heFByb3BdO1xuICB2YXIgY2VudGVyID0gY2xpZW50U2l6ZSAvIDIgLSBhcnJvd1JlY3RbbGVuXSAvIDIgKyBjZW50ZXJUb1JlZmVyZW5jZTtcbiAgdmFyIG9mZnNldCA9IHdpdGhpbihtaW4sIGNlbnRlciwgbWF4KTsgLy8gUHJldmVudHMgYnJlYWtpbmcgc3ludGF4IGhpZ2hsaWdodGluZy4uLlxuXG4gIHZhciBheGlzUHJvcCA9IGF4aXM7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSAoX3N0YXRlJG1vZGlmaWVyc0RhdGEkID0ge30sIF9zdGF0ZSRtb2RpZmllcnNEYXRhJFtheGlzUHJvcF0gPSBvZmZzZXQsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJC5jZW50ZXJPZmZzZXQgPSBvZmZzZXQgLSBjZW50ZXIsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJCk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCxcbiAgICAgIGFycm93RWxlbWVudCA9IF9vcHRpb25zJGVsZW1lbnQgPT09IHZvaWQgMCA/ICdbZGF0YS1wb3BwZXItYXJyb3ddJyA6IF9vcHRpb25zJGVsZW1lbnQ7XG5cbiAgaWYgKGFycm93RWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIENTUyBzZWxlY3RvclxuXG5cbiAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMucG9wcGVyLnF1ZXJ5U2VsZWN0b3IoYXJyb3dFbGVtZW50KTtcblxuICAgIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICghaXNIVE1MRWxlbWVudChhcnJvd0VsZW1lbnQpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImFycm93XCIgZWxlbWVudCBtdXN0IGJlIGFuIEhUTUxFbGVtZW50IChub3QgYW4gU1ZHRWxlbWVudCkuJywgJ1RvIHVzZSBhbiBTVkcgYXJyb3csIHdyYXAgaXQgaW4gYW4gSFRNTEVsZW1lbnQgdGhhdCB3aWxsIGJlIHVzZWQgYXMnLCAndGhlIGFycm93LiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb250YWlucyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIsIGFycm93RWxlbWVudCkpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImFycm93XCIgbW9kaWZpZXJcXCdzIGBlbGVtZW50YCBtdXN0IGJlIGEgY2hpbGQgb2YgdGhlIHBvcHBlcicsICdlbGVtZW50LiddLmpvaW4oJyAnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3RhdGUuZWxlbWVudHMuYXJyb3cgPSBhcnJvd0VsZW1lbnQ7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhcnJvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBhcnJvdyxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXVxufTsiLCJpbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHJvdW5kIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgdW5zZXRTaWRlcyA9IHtcbiAgdG9wOiAnYXV0bycsXG4gIHJpZ2h0OiAnYXV0bycsXG4gIGJvdHRvbTogJ2F1dG8nLFxuICBsZWZ0OiAnYXV0bydcbn07IC8vIFJvdW5kIHRoZSBvZmZzZXRzIHRvIHRoZSBuZWFyZXN0IHN1aXRhYmxlIHN1YnBpeGVsIGJhc2VkIG9uIHRoZSBEUFIuXG4vLyBab29taW5nIGNhbiBjaGFuZ2UgdGhlIERQUiwgYnV0IGl0IHNlZW1zIHRvIHJlcG9ydCBhIHZhbHVlIHRoYXQgd2lsbFxuLy8gY2xlYW5seSBkaXZpZGUgdGhlIHZhbHVlcyBpbnRvIHRoZSBhcHByb3ByaWF0ZSBzdWJwaXhlbHMuXG5cbmZ1bmN0aW9uIHJvdW5kT2Zmc2V0c0J5RFBSKF9yZWYpIHtcbiAgdmFyIHggPSBfcmVmLngsXG4gICAgICB5ID0gX3JlZi55O1xuICB2YXIgd2luID0gd2luZG93O1xuICB2YXIgZHByID0gd2luLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgcmV0dXJuIHtcbiAgICB4OiByb3VuZChyb3VuZCh4ICogZHByKSAvIGRwcikgfHwgMCxcbiAgICB5OiByb3VuZChyb3VuZCh5ICogZHByKSAvIGRwcikgfHwgMFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwVG9TdHlsZXMoX3JlZjIpIHtcbiAgdmFyIF9PYmplY3QkYXNzaWduMjtcblxuICB2YXIgcG9wcGVyID0gX3JlZjIucG9wcGVyLFxuICAgICAgcG9wcGVyUmVjdCA9IF9yZWYyLnBvcHBlclJlY3QsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmMi5wbGFjZW1lbnQsXG4gICAgICBvZmZzZXRzID0gX3JlZjIub2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uID0gX3JlZjIucG9zaXRpb24sXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfcmVmMi5ncHVBY2NlbGVyYXRpb24sXG4gICAgICBhZGFwdGl2ZSA9IF9yZWYyLmFkYXB0aXZlLFxuICAgICAgcm91bmRPZmZzZXRzID0gX3JlZjIucm91bmRPZmZzZXRzO1xuXG4gIHZhciBfcmVmMyA9IHJvdW5kT2Zmc2V0cyA9PT0gdHJ1ZSA/IHJvdW5kT2Zmc2V0c0J5RFBSKG9mZnNldHMpIDogdHlwZW9mIHJvdW5kT2Zmc2V0cyA9PT0gJ2Z1bmN0aW9uJyA/IHJvdW5kT2Zmc2V0cyhvZmZzZXRzKSA6IG9mZnNldHMsXG4gICAgICBfcmVmMyR4ID0gX3JlZjMueCxcbiAgICAgIHggPSBfcmVmMyR4ID09PSB2b2lkIDAgPyAwIDogX3JlZjMkeCxcbiAgICAgIF9yZWYzJHkgPSBfcmVmMy55LFxuICAgICAgeSA9IF9yZWYzJHkgPT09IHZvaWQgMCA/IDAgOiBfcmVmMyR5O1xuXG4gIHZhciBoYXNYID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneCcpO1xuICB2YXIgaGFzWSA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3knKTtcbiAgdmFyIHNpZGVYID0gbGVmdDtcbiAgdmFyIHNpZGVZID0gdG9wO1xuICB2YXIgd2luID0gd2luZG93O1xuXG4gIGlmIChhZGFwdGl2ZSkge1xuICAgIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKTtcbiAgICB2YXIgaGVpZ2h0UHJvcCA9ICdjbGllbnRIZWlnaHQnO1xuICAgIHZhciB3aWR0aFByb3AgPSAnY2xpZW50V2lkdGgnO1xuXG4gICAgaWYgKG9mZnNldFBhcmVudCA9PT0gZ2V0V2luZG93KHBvcHBlcikpIHtcbiAgICAgIG9mZnNldFBhcmVudCA9IGdldERvY3VtZW50RWxlbWVudChwb3BwZXIpO1xuXG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uICE9PSAnc3RhdGljJykge1xuICAgICAgICBoZWlnaHRQcm9wID0gJ3Njcm9sbEhlaWdodCc7XG4gICAgICAgIHdpZHRoUHJvcCA9ICdzY3JvbGxXaWR0aCc7XG4gICAgICB9XG4gICAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYXN0XTogZm9yY2UgdHlwZSByZWZpbmVtZW50LCB3ZSBjb21wYXJlIG9mZnNldFBhcmVudCB3aXRoIHdpbmRvdyBhYm92ZSwgYnV0IEZsb3cgZG9lc24ndCBkZXRlY3QgaXRcblxuXG4gICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50O1xuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gdG9wKSB7XG4gICAgICBzaWRlWSA9IGJvdHRvbTsgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG5cbiAgICAgIHkgLT0gb2Zmc2V0UGFyZW50W2hlaWdodFByb3BdIC0gcG9wcGVyUmVjdC5oZWlnaHQ7XG4gICAgICB5ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSBsZWZ0KSB7XG4gICAgICBzaWRlWCA9IHJpZ2h0OyAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cblxuICAgICAgeCAtPSBvZmZzZXRQYXJlbnRbd2lkdGhQcm9wXSAtIHBvcHBlclJlY3Qud2lkdGg7XG4gICAgICB4ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29tbW9uU3R5bGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgcG9zaXRpb246IHBvc2l0aW9uXG4gIH0sIGFkYXB0aXZlICYmIHVuc2V0U2lkZXMpO1xuXG4gIGlmIChncHVBY2NlbGVyYXRpb24pIHtcbiAgICB2YXIgX09iamVjdCRhc3NpZ247XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24gPSB7fSwgX09iamVjdCRhc3NpZ25bc2lkZVldID0gaGFzWSA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbltzaWRlWF0gPSBoYXNYID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduLnRyYW5zZm9ybSA9ICh3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSA8IDIgPyBcInRyYW5zbGF0ZShcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4KVwiIDogXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4LCAwKVwiLCBfT2JqZWN0JGFzc2lnbikpO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduMiA9IHt9LCBfT2JqZWN0JGFzc2lnbjJbc2lkZVldID0gaGFzWSA/IHkgKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yW3NpZGVYXSA9IGhhc1ggPyB4ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMi50cmFuc2Zvcm0gPSAnJywgX09iamVjdCRhc3NpZ24yKSk7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVTdHlsZXMoX3JlZjQpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjQuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjQub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZ3B1QWNjZWxlcmF0LFxuICAgICAgX29wdGlvbnMkYWRhcHRpdmUgPSBvcHRpb25zLmFkYXB0aXZlLFxuICAgICAgYWRhcHRpdmUgPSBfb3B0aW9ucyRhZGFwdGl2ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFkYXB0aXZlLFxuICAgICAgX29wdGlvbnMkcm91bmRPZmZzZXRzID0gb3B0aW9ucy5yb3VuZE9mZnNldHMsXG4gICAgICByb3VuZE9mZnNldHMgPSBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyb3VuZE9mZnNldHM7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHZhciB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRDb21wdXRlZFN0eWxlKHN0YXRlLmVsZW1lbnRzLnBvcHBlcikudHJhbnNpdGlvblByb3BlcnR5IHx8ICcnO1xuXG4gICAgaWYgKGFkYXB0aXZlICYmIFsndHJhbnNmb3JtJywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLnNvbWUoZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gdHJhbnNpdGlvblByb3BlcnR5LmluZGV4T2YocHJvcGVydHkpID49IDA7XG4gICAgfSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihbJ1BvcHBlcjogRGV0ZWN0ZWQgQ1NTIHRyYW5zaXRpb25zIG9uIGF0IGxlYXN0IG9uZSBvZiB0aGUgZm9sbG93aW5nJywgJ0NTUyBwcm9wZXJ0aWVzOiBcInRyYW5zZm9ybVwiLCBcInRvcFwiLCBcInJpZ2h0XCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLicsICdcXG5cXG4nLCAnRGlzYWJsZSB0aGUgXCJjb21wdXRlU3R5bGVzXCIgbW9kaWZpZXJcXCdzIGBhZGFwdGl2ZWAgb3B0aW9uIHRvIGFsbG93JywgJ2ZvciBzbW9vdGggdHJhbnNpdGlvbnMsIG9yIHJlbW92ZSB0aGVzZSBwcm9wZXJ0aWVzIGZyb20gdGhlIENTUycsICd0cmFuc2l0aW9uIGRlY2xhcmF0aW9uIG9uIHRoZSBwb3BwZXIgZWxlbWVudCBpZiBvbmx5IHRyYW5zaXRpb25pbmcnLCAnb3BhY2l0eSBvciBiYWNrZ3JvdW5kLWNvbG9yIGZvciBleGFtcGxlLicsICdcXG5cXG4nLCAnV2UgcmVjb21tZW5kIHVzaW5nIHRoZSBwb3BwZXIgZWxlbWVudCBhcyBhIHdyYXBwZXIgYXJvdW5kIGFuIGlubmVyJywgJ2VsZW1lbnQgdGhhdCBjYW4gaGF2ZSBhbnkgQ1NTIHByb3BlcnR5IHRyYW5zaXRpb25lZCBmb3IgYW5pbWF0aW9ucy4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb21tb25TdHlsZXMgPSB7XG4gICAgcGxhY2VtZW50OiBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCksXG4gICAgcG9wcGVyOiBzdGF0ZS5lbGVtZW50cy5wb3BwZXIsXG4gICAgcG9wcGVyUmVjdDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIGdwdUFjY2VsZXJhdGlvbjogZ3B1QWNjZWxlcmF0aW9uXG4gIH07XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5wb3BwZXIsIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLFxuICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICBhZGFwdGl2ZTogYWRhcHRpdmUsXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgIH0pKSk7XG4gIH1cblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLmFycm93ID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLmFycm93LCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3csXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGFkYXB0aXZlOiBmYWxzZSxcbiAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgfSkpKTtcbiAgfVxuXG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAnZGF0YS1wb3BwZXItcGxhY2VtZW50Jzogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnY29tcHV0ZVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnYmVmb3JlV3JpdGUnLFxuICBmbjogY29tcHV0ZVN0eWxlcyxcbiAgZGF0YToge31cbn07IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldFdpbmRvdy5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciBwYXNzaXZlID0ge1xuICBwYXNzaXZlOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJHNjcm9sbCA9IG9wdGlvbnMuc2Nyb2xsLFxuICAgICAgc2Nyb2xsID0gX29wdGlvbnMkc2Nyb2xsID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkc2Nyb2xsLFxuICAgICAgX29wdGlvbnMkcmVzaXplID0gb3B0aW9ucy5yZXNpemUsXG4gICAgICByZXNpemUgPSBfb3B0aW9ucyRyZXNpemUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyZXNpemU7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coc3RhdGUuZWxlbWVudHMucG9wcGVyKTtcbiAgdmFyIHNjcm9sbFBhcmVudHMgPSBbXS5jb25jYXQoc3RhdGUuc2Nyb2xsUGFyZW50cy5yZWZlcmVuY2UsIHN0YXRlLnNjcm9sbFBhcmVudHMucG9wcGVyKTtcblxuICBpZiAoc2Nyb2xsKSB7XG4gICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgIHNjcm9sbFBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHJlc2l6ZSkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgICBzY3JvbGxQYXJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXNpemUpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH1cbiAgfTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2V2ZW50TGlzdGVuZXJzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICd3cml0ZScsXG4gIGZuOiBmdW5jdGlvbiBmbigpIHt9LFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgZGF0YToge31cbn07IiwiaW1wb3J0IGdldE9wcG9zaXRlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBjb21wdXRlQXV0b1BsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IGJvdHRvbSwgdG9wLCBzdGFydCwgcmlnaHQsIGxlZnQsIGF1dG8gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4uL3V0aWxzL2dldFZhcmlhdGlvbi5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmZ1bmN0aW9uIGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHBsYWNlbWVudCkge1xuICBpZiAoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgcmV0dXJuIFtnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpLCBvcHBvc2l0ZVBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpXTtcbn1cblxuZnVuY3Rpb24gZmxpcChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyA9IG9wdGlvbnMuZmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZmxpcFZhcmlhdGlvID0gb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMkZmxpcFZhcmlhdGlvID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZmxpcFZhcmlhdGlvLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHM7XG4gIHZhciBwcmVmZXJyZWRQbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSBiYXNlUGxhY2VtZW50ID09PSBwcmVmZXJyZWRQbGFjZW1lbnQ7XG4gIHZhciBmYWxsYmFja1BsYWNlbWVudHMgPSBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgfHwgKGlzQmFzZVBsYWNlbWVudCB8fCAhZmxpcFZhcmlhdGlvbnMgPyBbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KV0gOiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwcmVmZXJyZWRQbGFjZW1lbnQpKTtcbiAgdmFyIHBsYWNlbWVudHMgPSBbcHJlZmVycmVkUGxhY2VtZW50XS5jb25jYXQoZmFsbGJhY2tQbGFjZW1lbnRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvID8gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnM6IGZsaXBWYXJpYXRpb25zLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzOiBhbGxvd2VkQXV0b1BsYWNlbWVudHNcbiAgICB9KSA6IHBsYWNlbWVudCk7XG4gIH0sIFtdKTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgY2hlY2tzTWFwID0gbmV3IE1hcCgpO1xuICB2YXIgbWFrZUZhbGxiYWNrQ2hlY2tzID0gdHJ1ZTtcbiAgdmFyIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHNbMF07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFjZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBsYWNlbWVudCA9IHBsYWNlbWVudHNbaV07XG5cbiAgICB2YXIgX2Jhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cbiAgICB2YXIgaXNTdGFydFZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSBzdGFydDtcbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihfYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcbiAgICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KTtcbiAgICB2YXIgbWFpblZhcmlhdGlvblNpZGUgPSBpc1ZlcnRpY2FsID8gaXNTdGFydFZhcmlhdGlvbiA/IHJpZ2h0IDogbGVmdCA6IGlzU3RhcnRWYXJpYXRpb24gPyBib3R0b20gOiB0b3A7XG5cbiAgICBpZiAocmVmZXJlbmNlUmVjdFtsZW5dID4gcG9wcGVyUmVjdFtsZW5dKSB7XG4gICAgICBtYWluVmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB9XG5cbiAgICB2YXIgYWx0VmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB2YXIgY2hlY2tzID0gW107XG5cbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbX2Jhc2VQbGFjZW1lbnRdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W21haW5WYXJpYXRpb25TaWRlXSA8PSAwLCBvdmVyZmxvd1thbHRWYXJpYXRpb25TaWRlXSA8PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tzLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH0pKSB7XG4gICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgICBtYWtlRmFsbGJhY2tDaGVja3MgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNoZWNrc01hcC5zZXQocGxhY2VtZW50LCBjaGVja3MpO1xuICB9XG5cbiAgaWYgKG1ha2VGYWxsYmFja0NoZWNrcykge1xuICAgIC8vIGAyYCBtYXkgYmUgZGVzaXJlZCBpbiBzb21lIGNhc2VzIOKAkyByZXNlYXJjaCBsYXRlclxuICAgIHZhciBudW1iZXJPZkNoZWNrcyA9IGZsaXBWYXJpYXRpb25zID8gMyA6IDE7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChfaSkge1xuICAgICAgdmFyIGZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzLmZpbmQoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgICAgICB2YXIgY2hlY2tzID0gY2hlY2tzTWFwLmdldChwbGFjZW1lbnQpO1xuXG4gICAgICAgIGlmIChjaGVja3MpIHtcbiAgICAgICAgICByZXR1cm4gY2hlY2tzLnNsaWNlKDAsIF9pKS5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChmaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IGZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgICAgIHJldHVybiBcImJyZWFrXCI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAodmFyIF9pID0gbnVtYmVyT2ZDaGVja3M7IF9pID4gMDsgX2ktLSkge1xuICAgICAgdmFyIF9yZXQgPSBfbG9vcChfaSk7XG5cbiAgICAgIGlmIChfcmV0ID09PSBcImJyZWFrXCIpIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGF0ZS5wbGFjZW1lbnQgIT09IGZpcnN0Rml0dGluZ1BsYWNlbWVudCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXAgPSB0cnVlO1xuICAgIHN0YXRlLnBsYWNlbWVudCA9IGZpcnN0Rml0dGluZ1BsYWNlbWVudDtcbiAgICBzdGF0ZS5yZXNldCA9IHRydWU7XG4gIH1cbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2ZsaXAnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogZmxpcCxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXSxcbiAgZGF0YToge1xuICAgIF9za2lwOiBmYWxzZVxuICB9XG59OyIsImltcG9ydCB7IHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuXG5mdW5jdGlvbiBnZXRTaWRlT2Zmc2V0cyhvdmVyZmxvdywgcmVjdCwgcHJldmVudGVkT2Zmc2V0cykge1xuICBpZiAocHJldmVudGVkT2Zmc2V0cyA9PT0gdm9pZCAwKSB7XG4gICAgcHJldmVudGVkT2Zmc2V0cyA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9wOiBvdmVyZmxvdy50b3AgLSByZWN0LmhlaWdodCAtIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICByaWdodDogb3ZlcmZsb3cucmlnaHQgLSByZWN0LndpZHRoICsgcHJldmVudGVkT2Zmc2V0cy54LFxuICAgIGJvdHRvbTogb3ZlcmZsb3cuYm90dG9tIC0gcmVjdC5oZWlnaHQgKyBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgbGVmdDogb3ZlcmZsb3cubGVmdCAtIHJlY3Qud2lkdGggLSBwcmV2ZW50ZWRPZmZzZXRzLnhcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKG92ZXJmbG93KSB7XG4gIHJldHVybiBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5zb21lKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93W3NpZGVdID49IDA7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoaWRlKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIHByZXZlbnRlZE9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnByZXZlbnRPdmVyZmxvdztcbiAgdmFyIHJlZmVyZW5jZU92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBlbGVtZW50Q29udGV4dDogJ3JlZmVyZW5jZSdcbiAgfSk7XG4gIHZhciBwb3BwZXJBbHRPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYWx0Qm91bmRhcnk6IHRydWVcbiAgfSk7XG4gIHZhciByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhyZWZlcmVuY2VPdmVyZmxvdywgcmVmZXJlbmNlUmVjdCk7XG4gIHZhciBwb3BwZXJFc2NhcGVPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocG9wcGVyQWx0T3ZlcmZsb3csIHBvcHBlclJlY3QsIHByZXZlbnRlZE9mZnNldHMpO1xuICB2YXIgaXNSZWZlcmVuY2VIaWRkZW4gPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzKTtcbiAgdmFyIGhhc1BvcHBlckVzY2FwZWQgPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocG9wcGVyRXNjYXBlT2Zmc2V0cyk7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSB7XG4gICAgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzOiByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMsXG4gICAgcG9wcGVyRXNjYXBlT2Zmc2V0czogcG9wcGVyRXNjYXBlT2Zmc2V0cyxcbiAgICBpc1JlZmVyZW5jZUhpZGRlbjogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgaGFzUG9wcGVyRXNjYXBlZDogaGFzUG9wcGVyRXNjYXBlZFxuICB9O1xuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXJlZmVyZW5jZS1oaWRkZW4nOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICAnZGF0YS1wb3BwZXItZXNjYXBlZCc6IGhhc1BvcHBlckVzY2FwZWRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdoaWRlJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXSxcbiAgZm46IGhpZGVcbn07IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBhcHBseVN0eWxlcyB9IGZyb20gXCIuL2FwcGx5U3R5bGVzLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFycm93IH0gZnJvbSBcIi4vYXJyb3cuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tcHV0ZVN0eWxlcyB9IGZyb20gXCIuL2NvbXB1dGVTdHlsZXMuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXZlbnRMaXN0ZW5lcnMgfSBmcm9tIFwiLi9ldmVudExpc3RlbmVycy5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmbGlwIH0gZnJvbSBcIi4vZmxpcC5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBoaWRlIH0gZnJvbSBcIi4vaGlkZS5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBvZmZzZXQgfSBmcm9tIFwiLi9vZmZzZXQuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcG9wcGVyT2Zmc2V0cyB9IGZyb20gXCIuL3BvcHBlck9mZnNldHMuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHJldmVudE92ZXJmbG93IH0gZnJvbSBcIi4vcHJldmVudE92ZXJmbG93LmpzXCI7IiwiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIHBsYWNlbWVudHMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHJlY3RzLCBvZmZzZXQpIHtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHZhciBpbnZlcnREaXN0YW5jZSA9IFtsZWZ0LCB0b3BdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IC0xIDogMTtcblxuICB2YXIgX3JlZiA9IHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicgPyBvZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgcmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KSkgOiBvZmZzZXQsXG4gICAgICBza2lkZGluZyA9IF9yZWZbMF0sXG4gICAgICBkaXN0YW5jZSA9IF9yZWZbMV07XG5cbiAgc2tpZGRpbmcgPSBza2lkZGluZyB8fCAwO1xuICBkaXN0YW5jZSA9IChkaXN0YW5jZSB8fCAwKSAqIGludmVydERpc3RhbmNlO1xuICByZXR1cm4gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyB7XG4gICAgeDogZGlzdGFuY2UsXG4gICAgeTogc2tpZGRpbmdcbiAgfSA6IHtcbiAgICB4OiBza2lkZGluZyxcbiAgICB5OiBkaXN0YW5jZVxuICB9O1xufVxuXG5mdW5jdGlvbiBvZmZzZXQoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmMi5uYW1lO1xuICB2YXIgX29wdGlvbnMkb2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQsXG4gICAgICBvZmZzZXQgPSBfb3B0aW9ucyRvZmZzZXQgPT09IHZvaWQgMCA/IFswLCAwXSA6IF9vcHRpb25zJG9mZnNldDtcbiAgdmFyIGRhdGEgPSBwbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgc3RhdGUucmVjdHMsIG9mZnNldCk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICB2YXIgX2RhdGEkc3RhdGUkcGxhY2VtZW50ID0gZGF0YVtzdGF0ZS5wbGFjZW1lbnRdLFxuICAgICAgeCA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC54LFxuICAgICAgeSA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC55O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy54ICs9IHg7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnkgKz0geTtcbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnb2Zmc2V0JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICBmbjogb2Zmc2V0XG59OyIsImltcG9ydCBjb21wdXRlT2Zmc2V0cyBmcm9tIFwiLi4vdXRpbHMvY29tcHV0ZU9mZnNldHMuanNcIjtcblxuZnVuY3Rpb24gcG9wcGVyT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICAvLyBPZmZzZXRzIGFyZSB0aGUgYWN0dWFsIHBvc2l0aW9uIHRoZSBwb3BwZXIgbmVlZHMgdG8gaGF2ZSB0byBiZVxuICAvLyBwcm9wZXJseSBwb3NpdGlvbmVkIG5lYXIgaXRzIHJlZmVyZW5jZSBlbGVtZW50XG4gIC8vIFRoaXMgaXMgdGhlIG1vc3QgYmFzaWMgcGxhY2VtZW50LCBhbmQgd2lsbCBiZSBhZGp1c3RlZCBieVxuICAvLyB0aGUgbW9kaWZpZXJzIGluIHRoZSBuZXh0IHN0ZXBcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICByZWZlcmVuY2U6IHN0YXRlLnJlY3RzLnJlZmVyZW5jZSxcbiAgICBlbGVtZW50OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdwb3BwZXJPZmZzZXRzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdyZWFkJyxcbiAgZm46IHBvcHBlck9mZnNldHMsXG4gIGRhdGE6IHt9XG59OyIsImltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgc3RhcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRBbHRBeGlzIGZyb20gXCIuLi91dGlscy9nZXRBbHRBeGlzLmpzXCI7XG5pbXBvcnQgd2l0aGluIGZyb20gXCIuLi91dGlscy93aXRoaW4uanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgZ2V0RnJlc2hTaWRlT2JqZWN0IGZyb20gXCIuLi91dGlscy9nZXRGcmVzaFNpZGVPYmplY3QuanNcIjtcbmltcG9ydCB7IG1heCBhcyBtYXRoTWF4LCBtaW4gYXMgbWF0aE1pbiB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5cbmZ1bmN0aW9uIHByZXZlbnRPdmVyZmxvdyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIF9vcHRpb25zJHRldGhlciA9IG9wdGlvbnMudGV0aGVyLFxuICAgICAgdGV0aGVyID0gX29wdGlvbnMkdGV0aGVyID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkdGV0aGVyLFxuICAgICAgX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID0gb3B0aW9ucy50ZXRoZXJPZmZzZXQsXG4gICAgICB0ZXRoZXJPZmZzZXQgPSBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQ7XG4gIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5XG4gIH0pO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gIXZhcmlhdGlvbjtcbiAgdmFyIG1haW5BeGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgYWx0QXhpcyA9IGdldEFsdEF4aXMobWFpbkF4aXMpO1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgdGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gdGV0aGVyT2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogdGV0aGVyT2Zmc2V0O1xuICB2YXIgZGF0YSA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY2hlY2tNYWluQXhpcyB8fCBjaGVja0FsdEF4aXMpIHtcbiAgICB2YXIgbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgICB2YXIgYWx0U2lkZSA9IG1haW5BeGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICB2YXIgb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc107XG4gICAgdmFyIG1pbiA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdICsgb3ZlcmZsb3dbbWFpblNpZGVdO1xuICAgIHZhciBtYXggPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSAtIG92ZXJmbG93W2FsdFNpZGVdO1xuICAgIHZhciBhZGRpdGl2ZSA9IHRldGhlciA/IC1wb3BwZXJSZWN0W2xlbl0gLyAyIDogMDtcbiAgICB2YXIgbWluTGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IHJlZmVyZW5jZVJlY3RbbGVuXSA6IHBvcHBlclJlY3RbbGVuXTtcbiAgICB2YXIgbWF4TGVuID0gdmFyaWF0aW9uID09PSBzdGFydCA/IC1wb3BwZXJSZWN0W2xlbl0gOiAtcmVmZXJlbmNlUmVjdFtsZW5dOyAvLyBXZSBuZWVkIHRvIGluY2x1ZGUgdGhlIGFycm93IGluIHRoZSBjYWxjdWxhdGlvbiBzbyB0aGUgYXJyb3cgZG9lc24ndCBnb1xuICAgIC8vIG91dHNpZGUgdGhlIHJlZmVyZW5jZSBib3VuZHNcblxuICAgIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgICB2YXIgYXJyb3dSZWN0ID0gdGV0aGVyICYmIGFycm93RWxlbWVudCA/IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KSA6IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwXG4gICAgfTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nT2JqZWN0ID0gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddID8gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddLnBhZGRpbmcgOiBnZXRGcmVzaFNpZGVPYmplY3QoKTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWluID0gYXJyb3dQYWRkaW5nT2JqZWN0W21haW5TaWRlXTtcbiAgICB2YXIgYXJyb3dQYWRkaW5nTWF4ID0gYXJyb3dQYWRkaW5nT2JqZWN0W2FsdFNpZGVdOyAvLyBJZiB0aGUgcmVmZXJlbmNlIGxlbmd0aCBpcyBzbWFsbGVyIHRoYW4gdGhlIGFycm93IGxlbmd0aCwgd2UgZG9uJ3Qgd2FudFxuICAgIC8vIHRvIGluY2x1ZGUgaXRzIGZ1bGwgc2l6ZSBpbiB0aGUgY2FsY3VsYXRpb24uIElmIHRoZSByZWZlcmVuY2UgaXMgc21hbGxcbiAgICAvLyBhbmQgbmVhciB0aGUgZWRnZSBvZiBhIGJvdW5kYXJ5LCB0aGUgcG9wcGVyIGNhbiBvdmVyZmxvdyBldmVuIGlmIHRoZVxuICAgIC8vIHJlZmVyZW5jZSBpcyBub3Qgb3ZlcmZsb3dpbmcgYXMgd2VsbCAoZS5nLiB2aXJ0dWFsIGVsZW1lbnRzIHdpdGggbm9cbiAgICAvLyB3aWR0aCBvciBoZWlnaHQpXG5cbiAgICB2YXIgYXJyb3dMZW4gPSB3aXRoaW4oMCwgcmVmZXJlbmNlUmVjdFtsZW5dLCBhcnJvd1JlY3RbbGVuXSk7XG4gICAgdmFyIG1pbk9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IHJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgLSBhZGRpdGl2ZSAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gdGV0aGVyT2Zmc2V0VmFsdWUgOiBtaW5MZW4gLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIHRldGhlck9mZnNldFZhbHVlO1xuICAgIHZhciBtYXhPZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyAtcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiArIGFkZGl0aXZlICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyB0ZXRoZXJPZmZzZXRWYWx1ZSA6IG1heExlbiArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgdGV0aGVyT2Zmc2V0VmFsdWU7XG4gICAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3cgJiYgZ2V0T2Zmc2V0UGFyZW50KHN0YXRlLmVsZW1lbnRzLmFycm93KTtcbiAgICB2YXIgY2xpZW50T2Zmc2V0ID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBtYWluQXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50VG9wIHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRMZWZ0IHx8IDAgOiAwO1xuICAgIHZhciBvZmZzZXRNb2RpZmllclZhbHVlID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQgPyBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldFtzdGF0ZS5wbGFjZW1lbnRdW21haW5BeGlzXSA6IDA7XG4gICAgdmFyIHRldGhlck1pbiA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdICsgbWluT2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIGNsaWVudE9mZnNldDtcbiAgICB2YXIgdGV0aGVyTWF4ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gKyBtYXhPZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlO1xuXG4gICAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICAgIHZhciBwcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4odGV0aGVyID8gbWF0aE1pbihtaW4sIHRldGhlck1pbikgOiBtaW4sIG9mZnNldCwgdGV0aGVyID8gbWF0aE1heChtYXgsIHRldGhlck1heCkgOiBtYXgpO1xuICAgICAgcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQ7XG4gICAgICBkYXRhW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldCAtIG9mZnNldDtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgICB2YXIgX21haW5TaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IHRvcCA6IGxlZnQ7XG5cbiAgICAgIHZhciBfYWx0U2lkZSA9IG1haW5BeGlzID09PSAneCcgPyBib3R0b20gOiByaWdodDtcblxuICAgICAgdmFyIF9vZmZzZXQgPSBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdO1xuXG4gICAgICB2YXIgX21pbiA9IF9vZmZzZXQgKyBvdmVyZmxvd1tfbWFpblNpZGVdO1xuXG4gICAgICB2YXIgX21heCA9IF9vZmZzZXQgLSBvdmVyZmxvd1tfYWx0U2lkZV07XG5cbiAgICAgIHZhciBfcHJldmVudGVkT2Zmc2V0ID0gd2l0aGluKHRldGhlciA/IG1hdGhNaW4oX21pbiwgdGV0aGVyTWluKSA6IF9taW4sIF9vZmZzZXQsIHRldGhlciA/IG1hdGhNYXgoX21heCwgdGV0aGVyTWF4KSA6IF9tYXgpO1xuXG4gICAgICBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldDtcbiAgICAgIGRhdGFbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0IC0gX29mZnNldDtcbiAgICB9XG4gIH1cblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J11cbn07IiwiaW1wb3J0IHsgcG9wcGVyR2VuZXJhdG9yLCBkZXRlY3RPdmVyZmxvdyB9IGZyb20gXCIuL2NyZWF0ZVBvcHBlci5qc1wiO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qc1wiO1xuaW1wb3J0IHBvcHBlck9mZnNldHMgZnJvbSBcIi4vbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanNcIjtcbmltcG9ydCBjb21wdXRlU3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzXCI7XG5pbXBvcnQgYXBwbHlTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2FwcGx5U3R5bGVzLmpzXCI7XG52YXIgZGVmYXVsdE1vZGlmaWVycyA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cywgY29tcHV0ZVN0eWxlcywgYXBwbHlTdHlsZXNdO1xudmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3Ioe1xuICBkZWZhdWx0TW9kaWZpZXJzOiBkZWZhdWx0TW9kaWZpZXJzXG59KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIsIHBvcHBlckdlbmVyYXRvciwgZGVmYXVsdE1vZGlmaWVycywgZGV0ZWN0T3ZlcmZsb3cgfTsiLCJpbXBvcnQgeyBwb3BwZXJHZW5lcmF0b3IsIGRldGVjdE92ZXJmbG93IH0gZnJvbSBcIi4vY3JlYXRlUG9wcGVyLmpzXCI7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vbW9kaWZpZXJzL2V2ZW50TGlzdGVuZXJzLmpzXCI7XG5pbXBvcnQgcG9wcGVyT2Zmc2V0cyBmcm9tIFwiLi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanNcIjtcbmltcG9ydCBhcHBseVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanNcIjtcbmltcG9ydCBvZmZzZXQgZnJvbSBcIi4vbW9kaWZpZXJzL29mZnNldC5qc1wiO1xuaW1wb3J0IGZsaXAgZnJvbSBcIi4vbW9kaWZpZXJzL2ZsaXAuanNcIjtcbmltcG9ydCBwcmV2ZW50T3ZlcmZsb3cgZnJvbSBcIi4vbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGFycm93IGZyb20gXCIuL21vZGlmaWVycy9hcnJvdy5qc1wiO1xuaW1wb3J0IGhpZGUgZnJvbSBcIi4vbW9kaWZpZXJzL2hpZGUuanNcIjtcbnZhciBkZWZhdWx0TW9kaWZpZXJzID0gW2V2ZW50TGlzdGVuZXJzLCBwb3BwZXJPZmZzZXRzLCBjb21wdXRlU3R5bGVzLCBhcHBseVN0eWxlcywgb2Zmc2V0LCBmbGlwLCBwcmV2ZW50T3ZlcmZsb3csIGFycm93LCBoaWRlXTtcbnZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKHtcbiAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVyc1xufSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyLCBwb3BwZXJHZW5lcmF0b3IsIGRlZmF1bHRNb2RpZmllcnMsIGRldGVjdE92ZXJmbG93IH07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyIGFzIGNyZWF0ZVBvcHBlckxpdGUgfSBmcm9tIFwiLi9wb3BwZXItbGl0ZS5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCAqIGZyb20gXCIuL21vZGlmaWVycy9pbmRleC5qc1wiOyIsImltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4vZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgeyB2YXJpYXRpb25QbGFjZW1lbnRzLCBiYXNlUGxhY2VtZW50cywgcGxhY2VtZW50cyBhcyBhbGxQbGFjZW1lbnRzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4vZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVBdXRvUGxhY2VtZW50KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9IF9vcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyA9IF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9PT0gdm9pZCAwID8gYWxsUGxhY2VtZW50cyA6IF9vcHRpb25zJGFsbG93ZWRBdXRvUDtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpO1xuICB2YXIgcGxhY2VtZW50cyA9IHZhcmlhdGlvbiA/IGZsaXBWYXJpYXRpb25zID8gdmFyaWF0aW9uUGxhY2VtZW50cyA6IHZhcmlhdGlvblBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHZhcmlhdGlvbjtcbiAgfSkgOiBiYXNlUGxhY2VtZW50cztcbiAgdmFyIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHJldHVybiBhbGxvd2VkQXV0b1BsYWNlbWVudHMuaW5kZXhPZihwbGFjZW1lbnQpID49IDA7XG4gIH0pO1xuXG4gIGlmIChhbGxvd2VkUGxhY2VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHM7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBUaGUgYGFsbG93ZWRBdXRvUGxhY2VtZW50c2Agb3B0aW9uIGRpZCBub3QgYWxsb3cgYW55JywgJ3BsYWNlbWVudHMuIEVuc3VyZSB0aGUgYHBsYWNlbWVudGAgb3B0aW9uIG1hdGNoZXMgdGhlIHZhcmlhdGlvbicsICdvZiB0aGUgYWxsb3dlZCBwbGFjZW1lbnRzLicsICdGb3IgZXhhbXBsZSwgXCJhdXRvXCIgY2Fubm90IGJlIHVzZWQgdG8gYWxsb3cgXCJib3R0b20tc3RhcnRcIi4nLCAnVXNlIFwiYXV0by1zdGFydFwiIGluc3RlYWQuJ10uam9pbignICcpKTtcbiAgICB9XG4gIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtdHlwZV06IEZsb3cgc2VlbXMgdG8gaGF2ZSBwcm9ibGVtcyB3aXRoIHR3byBhcnJheSB1bmlvbnMuLi5cblxuXG4gIHZhciBvdmVyZmxvd3MgPSBhbGxvd2VkUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgYWNjW3BsYWNlbWVudF0gPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KVtnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCldO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG92ZXJmbG93cykuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBvdmVyZmxvd3NbYV0gLSBvdmVyZmxvd3NbYl07XG4gIH0pO1xufSIsImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4vZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0LCBzdGFydCwgZW5kIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciByZWZlcmVuY2UgPSBfcmVmLnJlZmVyZW5jZSxcbiAgICAgIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQgPyBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgdmFyaWF0aW9uID0gcGxhY2VtZW50ID8gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgY29tbW9uWCA9IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoIC8gMiAtIGVsZW1lbnQud2lkdGggLyAyO1xuICB2YXIgY29tbW9uWSA9IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodCAvIDIgLSBlbGVtZW50LmhlaWdodCAvIDI7XG4gIHZhciBvZmZzZXRzO1xuXG4gIHN3aXRjaCAoYmFzZVBsYWNlbWVudCkge1xuICAgIGNhc2UgdG9wOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgLSBlbGVtZW50LmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBib3R0b206XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcmlnaHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBsZWZ0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggLSBlbGVtZW50LndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLngsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55XG4gICAgICB9O1xuICB9XG5cbiAgdmFyIG1haW5BeGlzID0gYmFzZVBsYWNlbWVudCA/IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KSA6IG51bGw7XG5cbiAgaWYgKG1haW5BeGlzICE9IG51bGwpIHtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHN3aXRjaCAodmFyaWF0aW9uKSB7XG4gICAgICBjYXNlIHN0YXJ0OlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdIC0gKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBlbmQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gKyAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvZmZzZXRzO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZuKSB7XG4gIHZhciBwZW5kaW5nO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghcGVuZGluZykge1xuICAgICAgcGVuZGluZyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBlbmRpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgcmVzb2x2ZShmbigpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGVuZGluZztcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0Q2xpcHBpbmdSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Q2xpcHBpbmdSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgY29tcHV0ZU9mZnNldHMgZnJvbSBcIi4vY29tcHV0ZU9mZnNldHMuanNcIjtcbmltcG9ydCByZWN0VG9DbGllbnRSZWN0IGZyb20gXCIuL3JlY3RUb0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCB7IGNsaXBwaW5nUGFyZW50cywgcmVmZXJlbmNlLCBwb3BwZXIsIGJvdHRvbSwgdG9wLCByaWdodCwgYmFzZVBsYWNlbWVudHMsIHZpZXdwb3J0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBtZXJnZVBhZGRpbmdPYmplY3QgZnJvbSBcIi4vbWVyZ2VQYWRkaW5nT2JqZWN0LmpzXCI7XG5pbXBvcnQgZXhwYW5kVG9IYXNoTWFwIGZyb20gXCIuL2V4cGFuZFRvSGFzaE1hcC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGVjdE92ZXJmbG93KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgX29wdGlvbnMkcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMkcGxhY2VtZW50ID09PSB2b2lkIDAgPyBzdGF0ZS5wbGFjZW1lbnQgOiBfb3B0aW9ucyRwbGFjZW1lbnQsXG4gICAgICBfb3B0aW9ucyRib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucyRib3VuZGFyeSA9PT0gdm9pZCAwID8gY2xpcHBpbmdQYXJlbnRzIDogX29wdGlvbnMkYm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRyb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucyRyb290Qm91bmRhcnkgPT09IHZvaWQgMCA/IHZpZXdwb3J0IDogX29wdGlvbnMkcm9vdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZWxlbWVudENvbnRlID0gX29wdGlvbnMuZWxlbWVudENvbnRleHQsXG4gICAgICBlbGVtZW50Q29udGV4dCA9IF9vcHRpb25zJGVsZW1lbnRDb250ZSA9PT0gdm9pZCAwID8gcG9wcGVyIDogX29wdGlvbnMkZWxlbWVudENvbnRlLFxuICAgICAgX29wdGlvbnMkYWx0Qm91bmRhcnkgPSBfb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMkYWx0Qm91bmRhcnkgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucyRwYWRkaW5nID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkcGFkZGluZztcbiAgdmFyIHBhZGRpbmdPYmplY3QgPSBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xuICB2YXIgYWx0Q29udGV4dCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyByZWZlcmVuY2UgOiBwb3BwZXI7XG4gIHZhciByZWZlcmVuY2VFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1thbHRCb3VuZGFyeSA/IGFsdENvbnRleHQgOiBlbGVtZW50Q29udGV4dF07XG4gIHZhciBjbGlwcGluZ0NsaWVudFJlY3QgPSBnZXRDbGlwcGluZ1JlY3QoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudCA6IGVsZW1lbnQuY29udGV4dEVsZW1lbnQgfHwgZ2V0RG9jdW1lbnRFbGVtZW50KHN0YXRlLmVsZW1lbnRzLnBvcHBlciksIGJvdW5kYXJ5LCByb290Qm91bmRhcnkpO1xuICB2YXIgcmVmZXJlbmNlQ2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChyZWZlcmVuY2VFbGVtZW50KTtcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiByZWZlcmVuY2VDbGllbnRSZWN0LFxuICAgIGVsZW1lbnQ6IHBvcHBlclJlY3QsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgfSk7XG4gIHZhciBwb3BwZXJDbGllbnRSZWN0ID0gcmVjdFRvQ2xpZW50UmVjdChPYmplY3QuYXNzaWduKHt9LCBwb3BwZXJSZWN0LCBwb3BwZXJPZmZzZXRzKSk7XG4gIHZhciBlbGVtZW50Q2xpZW50UmVjdCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyBwb3BwZXJDbGllbnRSZWN0IDogcmVmZXJlbmNlQ2xpZW50UmVjdDsgLy8gcG9zaXRpdmUgPSBvdmVyZmxvd2luZyB0aGUgY2xpcHBpbmcgcmVjdFxuICAvLyAwIG9yIG5lZ2F0aXZlID0gd2l0aGluIHRoZSBjbGlwcGluZyByZWN0XG5cbiAgdmFyIG92ZXJmbG93T2Zmc2V0cyA9IHtcbiAgICB0b3A6IGNsaXBwaW5nQ2xpZW50UmVjdC50b3AgLSBlbGVtZW50Q2xpZW50UmVjdC50b3AgKyBwYWRkaW5nT2JqZWN0LnRvcCxcbiAgICBib3R0b206IGVsZW1lbnRDbGllbnRSZWN0LmJvdHRvbSAtIGNsaXBwaW5nQ2xpZW50UmVjdC5ib3R0b20gKyBwYWRkaW5nT2JqZWN0LmJvdHRvbSxcbiAgICBsZWZ0OiBjbGlwcGluZ0NsaWVudFJlY3QubGVmdCAtIGVsZW1lbnRDbGllbnRSZWN0LmxlZnQgKyBwYWRkaW5nT2JqZWN0LmxlZnQsXG4gICAgcmlnaHQ6IGVsZW1lbnRDbGllbnRSZWN0LnJpZ2h0IC0gY2xpcHBpbmdDbGllbnRSZWN0LnJpZ2h0ICsgcGFkZGluZ09iamVjdC5yaWdodFxuICB9O1xuICB2YXIgb2Zmc2V0RGF0YSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0OyAvLyBPZmZzZXRzIGNhbiBiZSBhcHBsaWVkIG9ubHkgdG8gdGhlIHBvcHBlciBlbGVtZW50XG5cbiAgaWYgKGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgJiYgb2Zmc2V0RGF0YSkge1xuICAgIHZhciBvZmZzZXQgPSBvZmZzZXREYXRhW3BsYWNlbWVudF07XG4gICAgT2JqZWN0LmtleXMob3ZlcmZsb3dPZmZzZXRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtdWx0aXBseSA9IFtyaWdodCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/IDEgOiAtMTtcbiAgICAgIHZhciBheGlzID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/ICd5JyA6ICd4JztcbiAgICAgIG92ZXJmbG93T2Zmc2V0c1trZXldICs9IG9mZnNldFtheGlzXSAqIG11bHRpcGx5O1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG92ZXJmbG93T2Zmc2V0cztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHBhbmRUb0hhc2hNYXAodmFsdWUsIGtleXMpIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uIChoYXNoTWFwLCBrZXkpIHtcbiAgICBoYXNoTWFwW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gaGFzaE1hcDtcbiAgfSwge30pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChzdHIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIFtdLmNvbmNhdChhcmdzKS5yZWR1Y2UoZnVuY3Rpb24gKHAsIGMpIHtcbiAgICByZXR1cm4gcC5yZXBsYWNlKC8lcy8sIGMpO1xuICB9LCBzdHIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEFsdEF4aXMoYXhpcykge1xuICByZXR1cm4gYXhpcyA9PT0gJ3gnID8gJ3knIDogJ3gnO1xufSIsImltcG9ydCB7IGF1dG8gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRGcmVzaFNpZGVPYmplY3QoKSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwXG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpID49IDAgPyAneCcgOiAneSc7XG59IiwidmFyIGhhc2ggPSB7XG4gIGxlZnQ6ICdyaWdodCcsXG4gIHJpZ2h0OiAnbGVmdCcsXG4gIGJvdHRvbTogJ3RvcCcsXG4gIHRvcDogJ2JvdHRvbSdcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgfSk7XG59IiwidmFyIGhhc2ggPSB7XG4gIHN0YXJ0OiAnZW5kJyxcbiAgZW5kOiAnc3RhcnQnXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvc3RhcnR8ZW5kL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xufSIsImV4cG9ydCB2YXIgbWF4ID0gTWF0aC5tYXg7XG5leHBvcnQgdmFyIG1pbiA9IE1hdGgubWluO1xuZXhwb3J0IHZhciByb3VuZCA9IE1hdGgucm91bmQ7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VCeU5hbWUobW9kaWZpZXJzKSB7XG4gIHZhciBtZXJnZWQgPSBtb2RpZmllcnMucmVkdWNlKGZ1bmN0aW9uIChtZXJnZWQsIGN1cnJlbnQpIHtcbiAgICB2YXIgZXhpc3RpbmcgPSBtZXJnZWRbY3VycmVudC5uYW1lXTtcbiAgICBtZXJnZWRbY3VycmVudC5uYW1lXSA9IGV4aXN0aW5nID8gT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcsIGN1cnJlbnQsIHtcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLm9wdGlvbnMsIGN1cnJlbnQub3B0aW9ucyksXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5kYXRhLCBjdXJyZW50LmRhdGEpXG4gICAgfSkgOiBjdXJyZW50O1xuICAgIHJldHVybiBtZXJnZWQ7XG4gIH0sIHt9KTsgLy8gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IE9iamVjdC52YWx1ZXNcblxuICByZXR1cm4gT2JqZWN0LmtleXMobWVyZ2VkKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBtZXJnZWRba2V5XTtcbiAgfSk7XG59IiwiaW1wb3J0IGdldEZyZXNoU2lkZU9iamVjdCBmcm9tIFwiLi9nZXRGcmVzaFNpZGVPYmplY3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlUGFkZGluZ09iamVjdChwYWRkaW5nT2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBnZXRGcmVzaFNpZGVPYmplY3QoKSwgcGFkZGluZ09iamVjdCk7XG59IiwiaW1wb3J0IHsgbW9kaWZpZXJQaGFzZXMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjsgLy8gc291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTg3NTI1NVxuXG5mdW5jdGlvbiBvcmRlcihtb2RpZmllcnMpIHtcbiAgdmFyIG1hcCA9IG5ldyBNYXAoKTtcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgbWFwLnNldChtb2RpZmllci5uYW1lLCBtb2RpZmllcik7XG4gIH0pOyAvLyBPbiB2aXNpdGluZyBvYmplY3QsIGNoZWNrIGZvciBpdHMgZGVwZW5kZW5jaWVzIGFuZCB2aXNpdCB0aGVtIHJlY3Vyc2l2ZWx5XG5cbiAgZnVuY3Rpb24gc29ydChtb2RpZmllcikge1xuICAgIHZpc2l0ZWQuYWRkKG1vZGlmaWVyLm5hbWUpO1xuICAgIHZhciByZXF1aXJlcyA9IFtdLmNvbmNhdChtb2RpZmllci5yZXF1aXJlcyB8fCBbXSwgbW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cyB8fCBbXSk7XG4gICAgcmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICBpZiAoIXZpc2l0ZWQuaGFzKGRlcCkpIHtcbiAgICAgICAgdmFyIGRlcE1vZGlmaWVyID0gbWFwLmdldChkZXApO1xuXG4gICAgICAgIGlmIChkZXBNb2RpZmllcikge1xuICAgICAgICAgIHNvcnQoZGVwTW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmVzdWx0LnB1c2gobW9kaWZpZXIpO1xuICB9XG5cbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgaWYgKCF2aXNpdGVkLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgLy8gY2hlY2sgZm9yIHZpc2l0ZWQgb2JqZWN0XG4gICAgICBzb3J0KG1vZGlmaWVyKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcmRlck1vZGlmaWVycyhtb2RpZmllcnMpIHtcbiAgLy8gb3JkZXIgYmFzZWQgb24gZGVwZW5kZW5jaWVzXG4gIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXIobW9kaWZpZXJzKTsgLy8gb3JkZXIgYmFzZWQgb24gcGhhc2VcblxuICByZXR1cm4gbW9kaWZpZXJQaGFzZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBoYXNlKSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQob3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICByZXR1cm4gbW9kaWZpZXIucGhhc2UgPT09IHBoYXNlO1xuICAgIH0pKTtcbiAgfSwgW10pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlY3RUb0NsaWVudFJlY3QocmVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcmVjdCwge1xuICAgIGxlZnQ6IHJlY3QueCxcbiAgICB0b3A6IHJlY3QueSxcbiAgICByaWdodDogcmVjdC54ICsgcmVjdC53aWR0aCxcbiAgICBib3R0b206IHJlY3QueSArIHJlY3QuaGVpZ2h0XG4gIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuaXF1ZUJ5KGFyciwgZm4pIHtcbiAgdmFyIGlkZW50aWZpZXJzID0gbmV3IFNldCgpO1xuICByZXR1cm4gYXJyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciBpZGVudGlmaWVyID0gZm4oaXRlbSk7XG5cbiAgICBpZiAoIWlkZW50aWZpZXJzLmhhcyhpZGVudGlmaWVyKSkge1xuICAgICAgaWRlbnRpZmllcnMuYWRkKGlkZW50aWZpZXIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn0iLCJpbXBvcnQgZm9ybWF0IGZyb20gXCIuL2Zvcm1hdC5qc1wiO1xuaW1wb3J0IHsgbW9kaWZpZXJQaGFzZXMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbnZhciBJTlZBTElEX01PRElGSUVSX0VSUk9SID0gJ1BvcHBlcjogbW9kaWZpZXIgXCIlc1wiIHByb3ZpZGVkIGFuIGludmFsaWQgJXMgcHJvcGVydHksIGV4cGVjdGVkICVzIGJ1dCBnb3QgJXMnO1xudmFyIE1JU1NJTkdfREVQRU5ERU5DWV9FUlJPUiA9ICdQb3BwZXI6IG1vZGlmaWVyIFwiJXNcIiByZXF1aXJlcyBcIiVzXCIsIGJ1dCBcIiVzXCIgbW9kaWZpZXIgaXMgbm90IGF2YWlsYWJsZSc7XG52YXIgVkFMSURfUFJPUEVSVElFUyA9IFsnbmFtZScsICdlbmFibGVkJywgJ3BoYXNlJywgJ2ZuJywgJ2VmZmVjdCcsICdyZXF1aXJlcycsICdvcHRpb25zJ107XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZU1vZGlmaWVycyhtb2RpZmllcnMpIHtcbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgT2JqZWN0LmtleXMobW9kaWZpZXIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSAnbmFtZSc6XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllci5uYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgU3RyaW5nKG1vZGlmaWVyLm5hbWUpLCAnXCJuYW1lXCInLCAnXCJzdHJpbmdcIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLm5hbWUpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdlbmFibGVkJzpcbiAgICAgICAgICBpZiAodHlwZW9mIG1vZGlmaWVyLmVuYWJsZWQgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wiZW5hYmxlZFwiJywgJ1wiYm9vbGVhblwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIuZW5hYmxlZCkgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdwaGFzZSc6XG4gICAgICAgICAgaWYgKG1vZGlmaWVyUGhhc2VzLmluZGV4T2YobW9kaWZpZXIucGhhc2UpIDwgMCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wicGhhc2VcIicsIFwiZWl0aGVyIFwiICsgbW9kaWZpZXJQaGFzZXMuam9pbignLCAnKSwgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIucGhhc2UpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdmbic6XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllci5mbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wiZm5cIicsICdcImZ1bmN0aW9uXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5mbikgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2VmZmVjdCc6XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllci5lZmZlY3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcImVmZmVjdFwiJywgJ1wiZnVuY3Rpb25cIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLmZuKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmVxdWlyZXMnOlxuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtb2RpZmllci5yZXF1aXJlcykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcInJlcXVpcmVzXCInLCAnXCJhcnJheVwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIucmVxdWlyZXMpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdyZXF1aXJlc0lmRXhpc3RzJzpcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcInJlcXVpcmVzSWZFeGlzdHNcIicsICdcImFycmF5XCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnb3B0aW9ucyc6XG4gICAgICAgIGNhc2UgJ2RhdGEnOlxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlBvcHBlckpTOiBhbiBpbnZhbGlkIHByb3BlcnR5IGhhcyBiZWVuIHByb3ZpZGVkIHRvIHRoZSBcXFwiXCIgKyBtb2RpZmllci5uYW1lICsgXCJcXFwiIG1vZGlmaWVyLCB2YWxpZCBwcm9wZXJ0aWVzIGFyZSBcIiArIFZBTElEX1BST1BFUlRJRVMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcXFwiXCIgKyBzICsgXCJcXFwiXCI7XG4gICAgICAgICAgfSkuam9pbignLCAnKSArIFwiOyBidXQgXFxcIlwiICsga2V5ICsgXCJcXFwiIHdhcyBwcm92aWRlZC5cIik7XG4gICAgICB9XG5cbiAgICAgIG1vZGlmaWVyLnJlcXVpcmVzICYmIG1vZGlmaWVyLnJlcXVpcmVzLmZvckVhY2goZnVuY3Rpb24gKHJlcXVpcmVtZW50KSB7XG4gICAgICAgIGlmIChtb2RpZmllcnMuZmluZChmdW5jdGlvbiAobW9kKSB7XG4gICAgICAgICAgcmV0dXJuIG1vZC5uYW1lID09PSByZXF1aXJlbWVudDtcbiAgICAgICAgfSkgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KE1JU1NJTkdfREVQRU5ERU5DWV9FUlJPUiwgU3RyaW5nKG1vZGlmaWVyLm5hbWUpLCByZXF1aXJlbWVudCwgcmVxdWlyZW1lbnQpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSIsImltcG9ydCB7IG1heCBhcyBtYXRoTWF4LCBtaW4gYXMgbWF0aE1pbiB9IGZyb20gXCIuL21hdGguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhpbihtaW4sIHZhbHVlLCBtYXgpIHtcbiAgcmV0dXJuIG1hdGhNYXgobWluLCBtYXRoTWluKHZhbHVlLCBtYXgpKTtcbn0iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IGRvbS9zZWxlY3Rvci1lbmdpbmUuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOT0RFX1RFWFQgPSAzXG5cbmNvbnN0IFNlbGVjdG9yRW5naW5lID0ge1xuICBmaW5kKHNlbGVjdG9yLCBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCguLi5FbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yQWxsLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpKVxuICB9LFxuXG4gIGZpbmRPbmUoc2VsZWN0b3IsIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3Rvci5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKVxuICB9LFxuXG4gIGNoaWxkcmVuKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCguLi5lbGVtZW50LmNoaWxkcmVuKVxuICAgICAgLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5tYXRjaGVzKHNlbGVjdG9yKSlcbiAgfSxcblxuICBwYXJlbnRzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgY29uc3QgcGFyZW50cyA9IFtdXG5cbiAgICBsZXQgYW5jZXN0b3IgPSBlbGVtZW50LnBhcmVudE5vZGVcblxuICAgIHdoaWxlIChhbmNlc3RvciAmJiBhbmNlc3Rvci5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiYgYW5jZXN0b3Iubm9kZVR5cGUgIT09IE5PREVfVEVYVCkge1xuICAgICAgaWYgKGFuY2VzdG9yLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHBhcmVudHMucHVzaChhbmNlc3RvcilcbiAgICAgIH1cblxuICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnROb2RlXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudHNcbiAgfSxcblxuICBwcmV2KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgbGV0IHByZXZpb3VzID0gZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG5cbiAgICB3aGlsZSAocHJldmlvdXMpIHtcbiAgICAgIGlmIChwcmV2aW91cy5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gW3ByZXZpb3VzXVxuICAgICAgfVxuXG4gICAgICBwcmV2aW91cyA9IHByZXZpb3VzLnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfSxcblxuICBuZXh0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgbGV0IG5leHQgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZ1xuXG4gICAgd2hpbGUgKG5leHQpIHtcbiAgICAgIGlmIChuZXh0Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBbbmV4dF1cbiAgICAgIH1cblxuICAgICAgbmV4dCA9IG5leHQubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0b3JFbmdpbmVcbiIsImltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IHV0aWwvaW5kZXguanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBNQVhfVUlEID0gMTAwMDAwMFxuY29uc3QgTUlMTElTRUNPTkRTX01VTFRJUExJRVIgPSAxMDAwXG5jb25zdCBUUkFOU0lUSU9OX0VORCA9ICd0cmFuc2l0aW9uZW5kJ1xuXG4vLyBTaG91dG91dCBBbmd1c0Nyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXG5jb25zdCB0b1R5cGUgPSBvYmogPT4ge1xuICBpZiAob2JqID09PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGAke29ian1gXG4gIH1cblxuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbChvYmopLm1hdGNoKC9cXHMoW2Etel0rKS9pKVsxXS50b0xvd2VyQ2FzZSgpXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFB1YmxpYyBVdGlsIEFwaVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBnZXRVSUQgPSBwcmVmaXggPT4ge1xuICBkbyB7XG4gICAgcHJlZml4ICs9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpXG4gIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpXG5cbiAgcmV0dXJuIHByZWZpeFxufVxuXG5jb25zdCBnZXRTZWxlY3RvciA9IGVsZW1lbnQgPT4ge1xuICBsZXQgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnKVxuXG4gIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09ICcjJykge1xuICAgIGxldCBocmVmQXR0ciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJylcblxuICAgIC8vIFRoZSBvbmx5IHZhbGlkIGNvbnRlbnQgdGhhdCBjb3VsZCBkb3VibGUgYXMgYSBzZWxlY3RvciBhcmUgSURzIG9yIGNsYXNzZXMsXG4gICAgLy8gc28gZXZlcnl0aGluZyBzdGFydGluZyB3aXRoIGAjYCBvciBgLmAuIElmIGEgXCJyZWFsXCIgVVJMIGlzIHVzZWQgYXMgdGhlIHNlbGVjdG9yLFxuICAgIC8vIGBkb2N1bWVudC5xdWVyeVNlbGVjdG9yYCB3aWxsIHJpZ2h0ZnVsbHkgY29tcGxhaW4gaXQgaXMgaW52YWxpZC5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8zMjI3M1xuICAgIGlmICghaHJlZkF0dHIgfHwgKCFocmVmQXR0ci5pbmNsdWRlcygnIycpICYmICFocmVmQXR0ci5zdGFydHNXaXRoKCcuJykpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8vIEp1c3QgaW4gY2FzZSBzb21lIENNUyBwdXRzIG91dCBhIGZ1bGwgVVJMIHdpdGggdGhlIGFuY2hvciBhcHBlbmRlZFxuICAgIGlmIChocmVmQXR0ci5pbmNsdWRlcygnIycpICYmICFocmVmQXR0ci5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIGhyZWZBdHRyID0gYCMke2hyZWZBdHRyLnNwbGl0KCcjJylbMV19YFxuICAgIH1cblxuICAgIHNlbGVjdG9yID0gaHJlZkF0dHIgJiYgaHJlZkF0dHIgIT09ICcjJyA/IGhyZWZBdHRyLnRyaW0oKSA6IG51bGxcbiAgfVxuXG4gIHJldHVybiBzZWxlY3RvclxufVxuXG5jb25zdCBnZXRTZWxlY3RvckZyb21FbGVtZW50ID0gZWxlbWVudCA9PiB7XG4gIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudClcblxuICBpZiAoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgPyBzZWxlY3RvciA6IG51bGxcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmNvbnN0IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IgPSBlbGVtZW50ID0+IHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KVxuXG4gIHJldHVybiBzZWxlY3RvciA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogbnVsbFxufVxuXG5jb25zdCBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgLy8gR2V0IHRyYW5zaXRpb24tZHVyYXRpb24gb2YgdGhlIGVsZW1lbnRcbiAgbGV0IHsgdHJhbnNpdGlvbkR1cmF0aW9uLCB0cmFuc2l0aW9uRGVsYXkgfSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpXG5cbiAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gPSBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkRlbGF5ID0gTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KVxuXG4gIC8vIFJldHVybiAwIGlmIGVsZW1lbnQgb3IgdHJhbnNpdGlvbiBkdXJhdGlvbiBpcyBub3QgZm91bmRcbiAgaWYgKCFmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiAmJiAhZmxvYXRUcmFuc2l0aW9uRGVsYXkpIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgLy8gSWYgbXVsdGlwbGUgZHVyYXRpb25zIGFyZSBkZWZpbmVkLCB0YWtlIHRoZSBmaXJzdFxuICB0cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24uc3BsaXQoJywnKVswXVxuICB0cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXkuc3BsaXQoJywnKVswXVxuXG4gIHJldHVybiAoTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKSArIE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSkpICogTUlMTElTRUNPTkRTX01VTFRJUExJRVJcbn1cblxuY29uc3QgdHJpZ2dlclRyYW5zaXRpb25FbmQgPSBlbGVtZW50ID0+IHtcbiAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChUUkFOU0lUSU9OX0VORCkpXG59XG5cbmNvbnN0IGlzRWxlbWVudCA9IG9iaiA9PiB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAodHlwZW9mIG9iai5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgb2JqID0gb2JqWzBdXG4gIH1cblxuICByZXR1cm4gdHlwZW9mIG9iai5ub2RlVHlwZSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuY29uc3QgZ2V0RWxlbWVudCA9IG9iaiA9PiB7XG4gIGlmIChpc0VsZW1lbnQob2JqKSkgeyAvLyBpdCdzIGEgalF1ZXJ5IG9iamVjdCBvciBhIG5vZGUgZWxlbWVudFxuICAgIHJldHVybiBvYmouanF1ZXJ5ID8gb2JqWzBdIDogb2JqXG4gIH1cblxuICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycgJiYgb2JqLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShvYmopXG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5jb25zdCBlbXVsYXRlVHJhbnNpdGlvbkVuZCA9IChlbGVtZW50LCBkdXJhdGlvbikgPT4ge1xuICBsZXQgY2FsbGVkID0gZmFsc2VcbiAgY29uc3QgZHVyYXRpb25QYWRkaW5nID0gNVxuICBjb25zdCBlbXVsYXRlZER1cmF0aW9uID0gZHVyYXRpb24gKyBkdXJhdGlvblBhZGRpbmdcblxuICBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICBjYWxsZWQgPSB0cnVlXG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFRSQU5TSVRJT05fRU5ELCBsaXN0ZW5lcilcbiAgfVxuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgbGlzdGVuZXIpXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZChlbGVtZW50KVxuICAgIH1cbiAgfSwgZW11bGF0ZWREdXJhdGlvbilcbn1cblxuY29uc3QgdHlwZUNoZWNrQ29uZmlnID0gKGNvbXBvbmVudE5hbWUsIGNvbmZpZywgY29uZmlnVHlwZXMpID0+IHtcbiAgT2JqZWN0LmtleXMoY29uZmlnVHlwZXMpLmZvckVhY2gocHJvcGVydHkgPT4ge1xuICAgIGNvbnN0IGV4cGVjdGVkVHlwZXMgPSBjb25maWdUeXBlc1twcm9wZXJ0eV1cbiAgICBjb25zdCB2YWx1ZSA9IGNvbmZpZ1twcm9wZXJ0eV1cbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZSAmJiBpc0VsZW1lbnQodmFsdWUpID8gJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKVxuXG4gICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgYCR7Y29tcG9uZW50TmFtZS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwiJHtwcm9wZXJ0eX1cIiBwcm92aWRlZCB0eXBlIFwiJHt2YWx1ZVR5cGV9XCIgYnV0IGV4cGVjdGVkIHR5cGUgXCIke2V4cGVjdGVkVHlwZXN9XCIuYFxuICAgICAgKVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgaXNWaXNpYmxlID0gZWxlbWVudCA9PiB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKGVsZW1lbnQuc3R5bGUgJiYgZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5zdHlsZSkge1xuICAgIGNvbnN0IGVsZW1lbnRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudClcbiAgICBjb25zdCBwYXJlbnROb2RlU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQucGFyZW50Tm9kZSlcblxuICAgIHJldHVybiBlbGVtZW50U3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmXG4gICAgICBwYXJlbnROb2RlU3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmXG4gICAgICBlbGVtZW50U3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbidcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5jb25zdCBpc0Rpc2FibGVkID0gZWxlbWVudCA9PiB7XG4gIGlmICghZWxlbWVudCB8fCBlbGVtZW50Lm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50LmRpc2FibGVkICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBlbGVtZW50LmRpc2FibGVkXG4gIH1cblxuICByZXR1cm4gZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgIT09ICdmYWxzZSdcbn1cblxuY29uc3QgZmluZFNoYWRvd1Jvb3QgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0YWNoU2hhZG93KSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIENhbiBmaW5kIHRoZSBzaGFkb3cgcm9vdCBvdGhlcndpc2UgaXQnbGwgcmV0dXJuIHRoZSBkb2N1bWVudFxuICBpZiAodHlwZW9mIGVsZW1lbnQuZ2V0Um9vdE5vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCByb290ID0gZWxlbWVudC5nZXRSb290Tm9kZSgpXG4gICAgcmV0dXJuIHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gcm9vdCA6IG51bGxcbiAgfVxuXG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuICAgIHJldHVybiBlbGVtZW50XG4gIH1cblxuICAvLyB3aGVuIHdlIGRvbid0IGZpbmQgYSBzaGFkb3cgcm9vdFxuICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gZmluZFNoYWRvd1Jvb3QoZWxlbWVudC5wYXJlbnROb2RlKVxufVxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3QgcmVmbG93ID0gZWxlbWVudCA9PiBlbGVtZW50Lm9mZnNldEhlaWdodFxuXG5jb25zdCBnZXRqUXVlcnkgPSAoKSA9PiB7XG4gIGNvbnN0IHsgalF1ZXJ5IH0gPSB3aW5kb3dcblxuICBpZiAoalF1ZXJ5ICYmICFkb2N1bWVudC5ib2R5Lmhhc0F0dHJpYnV0ZSgnZGF0YS1icy1uby1qcXVlcnknKSkge1xuICAgIHJldHVybiBqUXVlcnlcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmNvbnN0IG9uRE9NQ29udGVudExvYWRlZCA9IGNhbGxiYWNrID0+IHtcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjYWxsYmFjaylcbiAgfSBlbHNlIHtcbiAgICBjYWxsYmFjaygpXG4gIH1cbn1cblxuY29uc3QgaXNSVEwgPSAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGlyID09PSAncnRsJ1xuXG5jb25zdCBkZWZpbmVKUXVlcnlQbHVnaW4gPSBwbHVnaW4gPT4ge1xuICBvbkRPTUNvbnRlbnRMb2FkZWQoKCkgPT4ge1xuICAgIGNvbnN0ICQgPSBnZXRqUXVlcnkoKVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICgkKSB7XG4gICAgICBjb25zdCBuYW1lID0gcGx1Z2luLk5BTUVcbiAgICAgIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bbmFtZV1cbiAgICAgICQuZm5bbmFtZV0gPSBwbHVnaW4ualF1ZXJ5SW50ZXJmYWNlXG4gICAgICAkLmZuW25hbWVdLkNvbnN0cnVjdG9yID0gcGx1Z2luXG4gICAgICAkLmZuW25hbWVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICAgICAgICQuZm5bbmFtZV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICAgICAgcmV0dXJuIHBsdWdpbi5qUXVlcnlJbnRlcmZhY2VcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGV4ZWN1dGUgPSBjYWxsYmFjayA9PiB7XG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjaygpXG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0VUlELFxuICBnZXRTZWxlY3RvckZyb21FbGVtZW50LFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCxcbiAgdHJpZ2dlclRyYW5zaXRpb25FbmQsXG4gIGlzRWxlbWVudCxcbiAgZW11bGF0ZVRyYW5zaXRpb25FbmQsXG4gIHR5cGVDaGVja0NvbmZpZyxcbiAgaXNWaXNpYmxlLFxuICBpc0Rpc2FibGVkLFxuICBmaW5kU2hhZG93Um9vdCxcbiAgbm9vcCxcbiAgcmVmbG93LFxuICBnZXRqUXVlcnksXG4gIG9uRE9NQ29udGVudExvYWRlZCxcbiAgaXNSVEwsXG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZXhlY3V0ZVxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBkb20vZGF0YS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IGVsZW1lbnRNYXAgPSBuZXcgTWFwKClcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzZXQoZWxlbWVudCwga2V5LCBpbnN0YW5jZSkge1xuICAgIGlmICghZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIGVsZW1lbnRNYXAuc2V0KGVsZW1lbnQsIG5ldyBNYXAoKSlcbiAgICB9XG5cbiAgICBjb25zdCBpbnN0YW5jZU1hcCA9IGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpXG5cbiAgICAvLyBtYWtlIGl0IGNsZWFyIHdlIG9ubHkgd2FudCBvbmUgaW5zdGFuY2UgcGVyIGVsZW1lbnRcbiAgICAvLyBjYW4gYmUgcmVtb3ZlZCBsYXRlciB3aGVuIG11bHRpcGxlIGtleS9pbnN0YW5jZXMgYXJlIGZpbmUgdG8gYmUgdXNlZFxuICAgIGlmICghaW5zdGFuY2VNYXAuaGFzKGtleSkgJiYgaW5zdGFuY2VNYXAuc2l6ZSAhPT0gMCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEJvb3RzdHJhcCBkb2Vzbid0IGFsbG93IG1vcmUgdGhhbiBvbmUgaW5zdGFuY2UgcGVyIGVsZW1lbnQuIEJvdW5kIGluc3RhbmNlOiAke0FycmF5LmZyb20oaW5zdGFuY2VNYXAua2V5cygpKVswXX0uYClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGluc3RhbmNlTWFwLnNldChrZXksIGluc3RhbmNlKVxuICB9LFxuXG4gIGdldChlbGVtZW50LCBrZXkpIHtcbiAgICBpZiAoZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybiBlbGVtZW50TWFwLmdldChlbGVtZW50KS5nZXQoa2V5KSB8fCBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfSxcblxuICByZW1vdmUoZWxlbWVudCwga2V5KSB7XG4gICAgaWYgKCFlbGVtZW50TWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaW5zdGFuY2VNYXAgPSBlbGVtZW50TWFwLmdldChlbGVtZW50KVxuXG4gICAgaW5zdGFuY2VNYXAuZGVsZXRlKGtleSlcblxuICAgIC8vIGZyZWUgdXAgZWxlbWVudCByZWZlcmVuY2VzIGlmIHRoZXJlIGFyZSBubyBpbnN0YW5jZXMgbGVmdCBmb3IgYW4gZWxlbWVudFxuICAgIGlmIChpbnN0YW5jZU1hcC5zaXplID09PSAwKSB7XG4gICAgICBlbGVtZW50TWFwLmRlbGV0ZShlbGVtZW50KVxuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBkb20vZXZlbnQtaGFuZGxlci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGdldGpRdWVyeSB9IGZyb20gJy4uL3V0aWwvaW5kZXgnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IG5hbWVzcGFjZVJlZ2V4ID0gL1teLl0qKD89XFwuLiopXFwufC4qL1xuY29uc3Qgc3RyaXBOYW1lUmVnZXggPSAvXFwuLiovXG5jb25zdCBzdHJpcFVpZFJlZ2V4ID0gLzo6XFxkKyQvXG5jb25zdCBldmVudFJlZ2lzdHJ5ID0ge30gLy8gRXZlbnRzIHN0b3JhZ2VcbmxldCB1aWRFdmVudCA9IDFcbmNvbnN0IGN1c3RvbUV2ZW50cyA9IHtcbiAgbW91c2VlbnRlcjogJ21vdXNlb3ZlcicsXG4gIG1vdXNlbGVhdmU6ICdtb3VzZW91dCdcbn1cbmNvbnN0IGN1c3RvbUV2ZW50c1JlZ2V4ID0gL14obW91c2VlbnRlcnxtb3VzZWxlYXZlKS9pXG5jb25zdCBuYXRpdmVFdmVudHMgPSBuZXcgU2V0KFtcbiAgJ2NsaWNrJyxcbiAgJ2RibGNsaWNrJyxcbiAgJ21vdXNldXAnLFxuICAnbW91c2Vkb3duJyxcbiAgJ2NvbnRleHRtZW51JyxcbiAgJ21vdXNld2hlZWwnLFxuICAnRE9NTW91c2VTY3JvbGwnLFxuICAnbW91c2VvdmVyJyxcbiAgJ21vdXNlb3V0JyxcbiAgJ21vdXNlbW92ZScsXG4gICdzZWxlY3RzdGFydCcsXG4gICdzZWxlY3RlbmQnLFxuICAna2V5ZG93bicsXG4gICdrZXlwcmVzcycsXG4gICdrZXl1cCcsXG4gICdvcmllbnRhdGlvbmNoYW5nZScsXG4gICd0b3VjaHN0YXJ0JyxcbiAgJ3RvdWNobW92ZScsXG4gICd0b3VjaGVuZCcsXG4gICd0b3VjaGNhbmNlbCcsXG4gICdwb2ludGVyZG93bicsXG4gICdwb2ludGVybW92ZScsXG4gICdwb2ludGVydXAnLFxuICAncG9pbnRlcmxlYXZlJyxcbiAgJ3BvaW50ZXJjYW5jZWwnLFxuICAnZ2VzdHVyZXN0YXJ0JyxcbiAgJ2dlc3R1cmVjaGFuZ2UnLFxuICAnZ2VzdHVyZWVuZCcsXG4gICdmb2N1cycsXG4gICdibHVyJyxcbiAgJ2NoYW5nZScsXG4gICdyZXNldCcsXG4gICdzZWxlY3QnLFxuICAnc3VibWl0JyxcbiAgJ2ZvY3VzaW4nLFxuICAnZm9jdXNvdXQnLFxuICAnbG9hZCcsXG4gICd1bmxvYWQnLFxuICAnYmVmb3JldW5sb2FkJyxcbiAgJ3Jlc2l6ZScsXG4gICdtb3ZlJyxcbiAgJ0RPTUNvbnRlbnRMb2FkZWQnLFxuICAncmVhZHlzdGF0ZWNoYW5nZScsXG4gICdlcnJvcicsXG4gICdhYm9ydCcsXG4gICdzY3JvbGwnXG5dKVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUHJpdmF0ZSBtZXRob2RzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5mdW5jdGlvbiBnZXRVaWRFdmVudChlbGVtZW50LCB1aWQpIHtcbiAgcmV0dXJuICh1aWQgJiYgYCR7dWlkfTo6JHt1aWRFdmVudCsrfWApIHx8IGVsZW1lbnQudWlkRXZlbnQgfHwgdWlkRXZlbnQrK1xufVxuXG5mdW5jdGlvbiBnZXRFdmVudChlbGVtZW50KSB7XG4gIGNvbnN0IHVpZCA9IGdldFVpZEV2ZW50KGVsZW1lbnQpXG5cbiAgZWxlbWVudC51aWRFdmVudCA9IHVpZFxuICBldmVudFJlZ2lzdHJ5W3VpZF0gPSBldmVudFJlZ2lzdHJ5W3VpZF0gfHwge31cblxuICByZXR1cm4gZXZlbnRSZWdpc3RyeVt1aWRdXG59XG5cbmZ1bmN0aW9uIGJvb3RzdHJhcEhhbmRsZXIoZWxlbWVudCwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5kZWxlZ2F0ZVRhcmdldCA9IGVsZW1lbnRcblxuICAgIGlmIChoYW5kbGVyLm9uZU9mZikge1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCBldmVudC50eXBlLCBmbilcbiAgICB9XG5cbiAgICByZXR1cm4gZm4uYXBwbHkoZWxlbWVudCwgW2V2ZW50XSlcbiAgfVxufVxuXG5mdW5jdGlvbiBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBzZWxlY3RvciwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcblxuICAgIGZvciAobGV0IHsgdGFyZ2V0IH0gPSBldmVudDsgdGFyZ2V0ICYmIHRhcmdldCAhPT0gdGhpczsgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGUpIHtcbiAgICAgIGZvciAobGV0IGkgPSBkb21FbGVtZW50cy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgaWYgKGRvbUVsZW1lbnRzW2ldID09PSB0YXJnZXQpIHtcbiAgICAgICAgICBldmVudC5kZWxlZ2F0ZVRhcmdldCA9IHRhcmdldFxuXG4gICAgICAgICAgaWYgKGhhbmRsZXIub25lT2ZmKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9jb25zaXN0ZW50LWRlc3RydWN0dXJpbmdcbiAgICAgICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgZXZlbnQudHlwZSwgc2VsZWN0b3IsIGZuKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmbi5hcHBseSh0YXJnZXQsIFtldmVudF0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUbyBwbGVhc2UgRVNMaW50XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kSGFuZGxlcihldmVudHMsIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3RvciA9IG51bGwpIHtcbiAgY29uc3QgdWlkRXZlbnRMaXN0ID0gT2JqZWN0LmtleXMoZXZlbnRzKVxuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSB1aWRFdmVudExpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBldmVudCA9IGV2ZW50c1t1aWRFdmVudExpc3RbaV1dXG5cbiAgICBpZiAoZXZlbnQub3JpZ2luYWxIYW5kbGVyID09PSBoYW5kbGVyICYmIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvciA9PT0gZGVsZWdhdGlvblNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gZXZlbnRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQYXJhbXMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbikge1xuICBjb25zdCBkZWxlZ2F0aW9uID0gdHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnXG4gIGNvbnN0IG9yaWdpbmFsSGFuZGxlciA9IGRlbGVnYXRpb24gPyBkZWxlZ2F0aW9uRm4gOiBoYW5kbGVyXG5cbiAgbGV0IHR5cGVFdmVudCA9IGdldFR5cGVFdmVudChvcmlnaW5hbFR5cGVFdmVudClcbiAgY29uc3QgaXNOYXRpdmUgPSBuYXRpdmVFdmVudHMuaGFzKHR5cGVFdmVudClcblxuICBpZiAoIWlzTmF0aXZlKSB7XG4gICAgdHlwZUV2ZW50ID0gb3JpZ2luYWxUeXBlRXZlbnRcbiAgfVxuXG4gIHJldHVybiBbZGVsZWdhdGlvbiwgb3JpZ2luYWxIYW5kbGVyLCB0eXBlRXZlbnRdXG59XG5cbmZ1bmN0aW9uIGFkZEhhbmRsZXIoZWxlbWVudCwgb3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbiwgb25lT2ZmKSB7XG4gIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoIWhhbmRsZXIpIHtcbiAgICBoYW5kbGVyID0gZGVsZWdhdGlvbkZuXG4gICAgZGVsZWdhdGlvbkZuID0gbnVsbFxuICB9XG5cbiAgLy8gaW4gY2FzZSBvZiBtb3VzZWVudGVyIG9yIG1vdXNlbGVhdmUgd3JhcCB0aGUgaGFuZGxlciB3aXRoaW4gYSBmdW5jdGlvbiB0aGF0IGNoZWNrcyBmb3IgaXRzIERPTSBwb3NpdGlvblxuICAvLyB0aGlzIHByZXZlbnRzIHRoZSBoYW5kbGVyIGZyb20gYmVpbmcgZGlzcGF0Y2hlZCB0aGUgc2FtZSB3YXkgYXMgbW91c2VvdmVyIG9yIG1vdXNlb3V0IGRvZXNcbiAgaWYgKGN1c3RvbUV2ZW50c1JlZ2V4LnRlc3Qob3JpZ2luYWxUeXBlRXZlbnQpKSB7XG4gICAgY29uc3Qgd3JhcEZuID0gZm4gPT4ge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoIWV2ZW50LnJlbGF0ZWRUYXJnZXQgfHwgKGV2ZW50LnJlbGF0ZWRUYXJnZXQgIT09IGV2ZW50LmRlbGVnYXRlVGFyZ2V0ICYmICFldmVudC5kZWxlZ2F0ZVRhcmdldC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KSkpIHtcbiAgICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZWxlZ2F0aW9uRm4pIHtcbiAgICAgIGRlbGVnYXRpb25GbiA9IHdyYXBGbihkZWxlZ2F0aW9uRm4pXG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZXIgPSB3cmFwRm4oaGFuZGxlcilcbiAgICB9XG4gIH1cblxuICBjb25zdCBbZGVsZWdhdGlvbiwgb3JpZ2luYWxIYW5kbGVyLCB0eXBlRXZlbnRdID0gbm9ybWFsaXplUGFyYW1zKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pXG4gIGNvbnN0IGV2ZW50cyA9IGdldEV2ZW50KGVsZW1lbnQpXG4gIGNvbnN0IGhhbmRsZXJzID0gZXZlbnRzW3R5cGVFdmVudF0gfHwgKGV2ZW50c1t0eXBlRXZlbnRdID0ge30pXG4gIGNvbnN0IHByZXZpb3VzRm4gPSBmaW5kSGFuZGxlcihoYW5kbGVycywgb3JpZ2luYWxIYW5kbGVyLCBkZWxlZ2F0aW9uID8gaGFuZGxlciA6IG51bGwpXG5cbiAgaWYgKHByZXZpb3VzRm4pIHtcbiAgICBwcmV2aW91c0ZuLm9uZU9mZiA9IHByZXZpb3VzRm4ub25lT2ZmICYmIG9uZU9mZlxuXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCB1aWQgPSBnZXRVaWRFdmVudChvcmlnaW5hbEhhbmRsZXIsIG9yaWdpbmFsVHlwZUV2ZW50LnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSlcbiAgY29uc3QgZm4gPSBkZWxlZ2F0aW9uID9cbiAgICBib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pIDpcbiAgICBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXIpXG5cbiAgZm4uZGVsZWdhdGlvblNlbGVjdG9yID0gZGVsZWdhdGlvbiA/IGhhbmRsZXIgOiBudWxsXG4gIGZuLm9yaWdpbmFsSGFuZGxlciA9IG9yaWdpbmFsSGFuZGxlclxuICBmbi5vbmVPZmYgPSBvbmVPZmZcbiAgZm4udWlkRXZlbnQgPSB1aWRcbiAgaGFuZGxlcnNbdWlkXSA9IGZuXG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIGRlbGVnYXRpb24pXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3Rvcikge1xuICBjb25zdCBmbiA9IGZpbmRIYW5kbGVyKGV2ZW50c1t0eXBlRXZlbnRdLCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpXG5cbiAgaWYgKCFmbikge1xuICAgIHJldHVyblxuICB9XG5cbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGVFdmVudCwgZm4sIEJvb2xlYW4oZGVsZWdhdGlvblNlbGVjdG9yKSlcbiAgZGVsZXRlIGV2ZW50c1t0eXBlRXZlbnRdW2ZuLnVpZEV2ZW50XVxufVxuXG5mdW5jdGlvbiByZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIG5hbWVzcGFjZSkge1xuICBjb25zdCBzdG9yZUVsZW1lbnRFdmVudCA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IHt9XG5cbiAgT2JqZWN0LmtleXMoc3RvcmVFbGVtZW50RXZlbnQpLmZvckVhY2goaGFuZGxlcktleSA9PiB7XG4gICAgaWYgKGhhbmRsZXJLZXkuaW5jbHVkZXMobmFtZXNwYWNlKSkge1xuICAgICAgY29uc3QgZXZlbnQgPSBzdG9yZUVsZW1lbnRFdmVudFtoYW5kbGVyS2V5XVxuXG4gICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBldmVudC5vcmlnaW5hbEhhbmRsZXIsIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvcilcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdldFR5cGVFdmVudChldmVudCkge1xuICAvLyBhbGxvdyB0byBnZXQgdGhlIG5hdGl2ZSBldmVudHMgZnJvbSBuYW1lc3BhY2VkIGV2ZW50cyAoJ2NsaWNrLmJzLmJ1dHRvbicgLS0+ICdjbGljaycpXG4gIGV2ZW50ID0gZXZlbnQucmVwbGFjZShzdHJpcE5hbWVSZWdleCwgJycpXG4gIHJldHVybiBjdXN0b21FdmVudHNbZXZlbnRdIHx8IGV2ZW50XG59XG5cbmNvbnN0IEV2ZW50SGFuZGxlciA9IHtcbiAgb24oZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbikge1xuICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GbiwgZmFsc2UpXG4gIH0sXG5cbiAgb25lKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pIHtcbiAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4sIHRydWUpXG4gIH0sXG5cbiAgb2ZmKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pIHtcbiAgICBpZiAodHlwZW9mIG9yaWdpbmFsVHlwZUV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgW2RlbGVnYXRpb24sIG9yaWdpbmFsSGFuZGxlciwgdHlwZUV2ZW50XSA9IG5vcm1hbGl6ZVBhcmFtcyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKVxuICAgIGNvbnN0IGluTmFtZXNwYWNlID0gdHlwZUV2ZW50ICE9PSBvcmlnaW5hbFR5cGVFdmVudFxuICAgIGNvbnN0IGV2ZW50cyA9IGdldEV2ZW50KGVsZW1lbnQpXG4gICAgY29uc3QgaXNOYW1lc3BhY2UgPSBvcmlnaW5hbFR5cGVFdmVudC5zdGFydHNXaXRoKCcuJylcblxuICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxIYW5kbGVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gU2ltcGxlc3QgY2FzZTogaGFuZGxlciBpcyBwYXNzZWQsIHJlbW92ZSB0aGF0IGxpc3RlbmVyIE9OTFkuXG4gICAgICBpZiAoIWV2ZW50cyB8fCAhZXZlbnRzW3R5cGVFdmVudF0pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIG9yaWdpbmFsSGFuZGxlciwgZGVsZWdhdGlvbiA/IGhhbmRsZXIgOiBudWxsKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzTmFtZXNwYWNlKSB7XG4gICAgICBPYmplY3Qua2V5cyhldmVudHMpLmZvckVhY2goZWxlbWVudEV2ZW50ID0+IHtcbiAgICAgICAgcmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50cywgZWxlbWVudEV2ZW50LCBvcmlnaW5hbFR5cGVFdmVudC5zbGljZSgxKSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fVxuICAgIE9iamVjdC5rZXlzKHN0b3JlRWxlbWVudEV2ZW50KS5mb3JFYWNoKGtleUhhbmRsZXJzID0+IHtcbiAgICAgIGNvbnN0IGhhbmRsZXJLZXkgPSBrZXlIYW5kbGVycy5yZXBsYWNlKHN0cmlwVWlkUmVnZXgsICcnKVxuXG4gICAgICBpZiAoIWluTmFtZXNwYWNlIHx8IG9yaWdpbmFsVHlwZUV2ZW50LmluY2x1ZGVzKGhhbmRsZXJLZXkpKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gc3RvcmVFbGVtZW50RXZlbnRba2V5SGFuZGxlcnNdXG5cbiAgICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgZXZlbnQub3JpZ2luYWxIYW5kbGVyLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICB0cmlnZ2VyKGVsZW1lbnQsIGV2ZW50LCBhcmdzKSB7XG4gICAgaWYgKHR5cGVvZiBldmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgJCA9IGdldGpRdWVyeSgpXG4gICAgY29uc3QgdHlwZUV2ZW50ID0gZ2V0VHlwZUV2ZW50KGV2ZW50KVxuICAgIGNvbnN0IGluTmFtZXNwYWNlID0gZXZlbnQgIT09IHR5cGVFdmVudFxuICAgIGNvbnN0IGlzTmF0aXZlID0gbmF0aXZlRXZlbnRzLmhhcyh0eXBlRXZlbnQpXG5cbiAgICBsZXQgalF1ZXJ5RXZlbnRcbiAgICBsZXQgYnViYmxlcyA9IHRydWVcbiAgICBsZXQgbmF0aXZlRGlzcGF0Y2ggPSB0cnVlXG4gICAgbGV0IGRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZVxuICAgIGxldCBldnQgPSBudWxsXG5cbiAgICBpZiAoaW5OYW1lc3BhY2UgJiYgJCkge1xuICAgICAgalF1ZXJ5RXZlbnQgPSAkLkV2ZW50KGV2ZW50LCBhcmdzKVxuXG4gICAgICAkKGVsZW1lbnQpLnRyaWdnZXIoalF1ZXJ5RXZlbnQpXG4gICAgICBidWJibGVzID0gIWpRdWVyeUV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKClcbiAgICAgIG5hdGl2ZURpc3BhdGNoID0gIWpRdWVyeUV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKClcbiAgICAgIGRlZmF1bHRQcmV2ZW50ZWQgPSBqUXVlcnlFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKVxuICAgIH1cblxuICAgIGlmIChpc05hdGl2ZSkge1xuICAgICAgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKVxuICAgICAgZXZ0LmluaXRFdmVudCh0eXBlRXZlbnQsIGJ1YmJsZXMsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChldmVudCwge1xuICAgICAgICBidWJibGVzLFxuICAgICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIG1lcmdlIGN1c3RvbSBpbmZvcm1hdGlvbiBpbiBvdXIgZXZlbnRcbiAgICBpZiAodHlwZW9mIGFyZ3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBPYmplY3Qua2V5cyhhcmdzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldnQsIGtleSwge1xuICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBhcmdzW2tleV1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmIChuYXRpdmVEaXNwYXRjaCkge1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICB9XG5cbiAgICBpZiAoZXZ0LmRlZmF1bHRQcmV2ZW50ZWQgJiYgdHlwZW9mIGpRdWVyeUV2ZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgalF1ZXJ5RXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIHJldHVybiBldnRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEhhbmRsZXJcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogYmFzZS1jb21wb25lbnQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IHtcbiAgZW11bGF0ZVRyYW5zaXRpb25FbmQsXG4gIGV4ZWN1dGUsXG4gIGdldEVsZW1lbnQsXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50XG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgVkVSU0lPTiA9ICc1LjAuMSdcblxuY2xhc3MgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50ID0gZ2V0RWxlbWVudChlbGVtZW50KVxuXG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICAgIERhdGEuc2V0KHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIERhdGEucmVtb3ZlKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVkpXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkVWRU5UX0tFWSlcblxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpLmZvckVhY2gocHJvcGVydHlOYW1lID0+IHtcbiAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IG51bGxcbiAgICB9KVxuICB9XG5cbiAgX3F1ZXVlQ2FsbGJhY2soY2FsbGJhY2ssIGVsZW1lbnQsIGlzQW5pbWF0ZWQgPSB0cnVlKSB7XG4gICAgaWYgKCFpc0FuaW1hdGVkKSB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoZWxlbWVudClcbiAgICBFdmVudEhhbmRsZXIub25lKGVsZW1lbnQsICd0cmFuc2l0aW9uZW5kJywgKCkgPT4gZXhlY3V0ZShjYWxsYmFjaykpXG5cbiAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZChlbGVtZW50LCB0cmFuc2l0aW9uRHVyYXRpb24pXG4gIH1cblxuICAvKiogU3RhdGljICovXG5cbiAgc3RhdGljIGdldEluc3RhbmNlKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRGF0YS5nZXQoZWxlbWVudCwgdGhpcy5EQVRBX0tFWSlcbiAgfVxuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignWW91IGhhdmUgdG8gaW1wbGVtZW50IHRoZSBzdGF0aWMgbWV0aG9kIFwiTkFNRVwiLCBmb3IgZWFjaCBjb21wb25lbnQhJylcbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIGBicy4ke3RoaXMuTkFNRX1gXG4gIH1cblxuICBzdGF0aWMgZ2V0IEVWRU5UX0tFWSgpIHtcbiAgICByZXR1cm4gYC4ke3RoaXMuREFUQV9LRVl9YFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VDb21wb25lbnRcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogYWxlcnQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3Jcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnYWxlcnQnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5hbGVydCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBTRUxFQ1RPUl9ESVNNSVNTID0gJ1tkYXRhLWJzLWRpc21pc3M9XCJhbGVydFwiXSdcblxuY29uc3QgRVZFTlRfQ0xPU0UgPSBgY2xvc2Uke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTE9TRUQgPSBgY2xvc2VkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfQUxFUlQgPSAnYWxlcnQnXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgQWxlcnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgY2xvc2UoZWxlbWVudCkge1xuICAgIGNvbnN0IHJvb3RFbGVtZW50ID0gZWxlbWVudCA/IHRoaXMuX2dldFJvb3RFbGVtZW50KGVsZW1lbnQpIDogdGhpcy5fZWxlbWVudFxuICAgIGNvbnN0IGN1c3RvbUV2ZW50ID0gdGhpcy5fdHJpZ2dlckNsb3NlRXZlbnQocm9vdEVsZW1lbnQpXG5cbiAgICBpZiAoY3VzdG9tRXZlbnQgPT09IG51bGwgfHwgY3VzdG9tRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fcmVtb3ZlRWxlbWVudChyb290RWxlbWVudClcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Um9vdEVsZW1lbnQoZWxlbWVudCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpIHx8IGVsZW1lbnQuY2xvc2VzdChgLiR7Q0xBU1NfTkFNRV9BTEVSVH1gKVxuICB9XG5cbiAgX3RyaWdnZXJDbG9zZUV2ZW50KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRXZlbnRIYW5kbGVyLnRyaWdnZXIoZWxlbWVudCwgRVZFTlRfQ0xPU0UpXG4gIH1cblxuICBfcmVtb3ZlRWxlbWVudChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIGNvbnN0IGlzQW5pbWF0ZWQgPSBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB0aGlzLl9kZXN0cm95RWxlbWVudChlbGVtZW50KSwgZWxlbWVudCwgaXNBbmltYXRlZClcbiAgfVxuXG4gIF9kZXN0cm95RWxlbWVudChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoZWxlbWVudCwgRVZFTlRfQ0xPU0VEKVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gRGF0YS5nZXQodGhpcywgREFUQV9LRVkpXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IEFsZXJ0KHRoaXMpXG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcgPT09ICdjbG9zZScpIHtcbiAgICAgICAgZGF0YVtjb25maWddKHRoaXMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVEaXNtaXNzKGFsZXJ0SW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfVxuXG4gICAgICBhbGVydEluc3RhbmNlLmNsb3NlKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfRElTTUlTUywgQWxlcnQuaGFuZGxlRGlzbWlzcyhuZXcgQWxlcnQoKSkpXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5BbGVydCB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihBbGVydClcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogYnV0dG9uLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgZGVmaW5lSlF1ZXJ5UGx1Z2luIH0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnYnV0dG9uJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuYnV0dG9uJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiYnV0dG9uXCJdJ1xuXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgLy8gVG9nZ2xlIGNsYXNzIGFuZCBzeW5jIHRoZSBgYXJpYS1wcmVzc2VkYCBhdHRyaWJ1dGUgd2l0aCB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBgLnRvZ2dsZSgpYCBtZXRob2RcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9IERhdGEuZ2V0KHRoaXMsIERBVEFfS0VZKVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBCdXR0b24odGhpcylcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZyA9PT0gJ3RvZ2dsZScpIHtcbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGV2ZW50ID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFNFTEVDVE9SX0RBVEFfVE9HR0xFKVxuXG4gIGxldCBkYXRhID0gRGF0YS5nZXQoYnV0dG9uLCBEQVRBX0tFWSlcbiAgaWYgKCFkYXRhKSB7XG4gICAgZGF0YSA9IG5ldyBCdXR0b24oYnV0dG9uKVxuICB9XG5cbiAgZGF0YS50b2dnbGUoKVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLkJ1dHRvbiB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihCdXR0b24pXG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBkb20vbWFuaXB1bGF0b3IuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5mdW5jdGlvbiBub3JtYWxpemVEYXRhKHZhbCkge1xuICBpZiAodmFsID09PSAndHJ1ZScpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKHZhbCA9PT0gJ2ZhbHNlJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKHZhbCA9PT0gTnVtYmVyKHZhbCkudG9TdHJpbmcoKSkge1xuICAgIHJldHVybiBOdW1iZXIodmFsKVxuICB9XG5cbiAgaWYgKHZhbCA9PT0gJycgfHwgdmFsID09PSAnbnVsbCcpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVEYXRhS2V5KGtleSkge1xuICByZXR1cm4ga2V5LnJlcGxhY2UoL1tBLVpdL2csIGNociA9PiBgLSR7Y2hyLnRvTG93ZXJDYXNlKCl9YClcbn1cblxuY29uc3QgTWFuaXB1bGF0b3IgPSB7XG4gIHNldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWAsIHZhbHVlKVxuICB9LFxuXG4gIHJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5KSB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YClcbiAgfSxcblxuICBnZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG5cbiAgICBjb25zdCBhdHRyaWJ1dGVzID0ge31cblxuICAgIE9iamVjdC5rZXlzKGVsZW1lbnQuZGF0YXNldClcbiAgICAgIC5maWx0ZXIoa2V5ID0+IGtleS5zdGFydHNXaXRoKCdicycpKVxuICAgICAgLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgbGV0IHB1cmVLZXkgPSBrZXkucmVwbGFjZSgvXmJzLywgJycpXG4gICAgICAgIHB1cmVLZXkgPSBwdXJlS2V5LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgcHVyZUtleS5zbGljZSgxLCBwdXJlS2V5Lmxlbmd0aClcbiAgICAgICAgYXR0cmlidXRlc1twdXJlS2V5XSA9IG5vcm1hbGl6ZURhdGEoZWxlbWVudC5kYXRhc2V0W2tleV0pXG4gICAgICB9KVxuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZXNcbiAgfSxcblxuICBnZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSkge1xuICAgIHJldHVybiBub3JtYWxpemVEYXRhKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWApKVxuICB9LFxuXG4gIG9mZnNldChlbGVtZW50KSB7XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHJlY3QudG9wICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXG4gICAgICBsZWZ0OiByZWN0LmxlZnQgKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnRcbiAgICB9XG4gIH0sXG5cbiAgcG9zaXRpb24oZWxlbWVudCkge1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgICAgbGVmdDogZWxlbWVudC5vZmZzZXRMZWZ0XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmlwdWxhdG9yXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IGNhcm91c2VsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBpc1JUTCxcbiAgaXNWaXNpYmxlLFxuICByZWZsb3csXG4gIHRyaWdnZXJUcmFuc2l0aW9uRW5kLFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ2Nhcm91c2VsJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuY2Fyb3VzZWwnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgQVJST1dfTEVGVF9LRVkgPSAnQXJyb3dMZWZ0J1xuY29uc3QgQVJST1dfUklHSFRfS0VZID0gJ0Fycm93UmlnaHQnXG5jb25zdCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUID0gNTAwIC8vIFRpbWUgZm9yIG1vdXNlIGNvbXBhdCBldmVudHMgdG8gZmlyZSBhZnRlciB0b3VjaFxuY29uc3QgU1dJUEVfVEhSRVNIT0xEID0gNDBcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgaW50ZXJ2YWw6IDUwMDAsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBzbGlkZTogZmFsc2UsXG4gIHBhdXNlOiAnaG92ZXInLFxuICB3cmFwOiB0cnVlLFxuICB0b3VjaDogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgaW50ZXJ2YWw6ICcobnVtYmVyfGJvb2xlYW4pJyxcbiAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgc2xpZGU6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgcGF1c2U6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgd3JhcDogJ2Jvb2xlYW4nLFxuICB0b3VjaDogJ2Jvb2xlYW4nXG59XG5cbmNvbnN0IE9SREVSX05FWFQgPSAnbmV4dCdcbmNvbnN0IE9SREVSX1BSRVYgPSAncHJldidcbmNvbnN0IERJUkVDVElPTl9MRUZUID0gJ2xlZnQnXG5jb25zdCBESVJFQ1RJT05fUklHSFQgPSAncmlnaHQnXG5cbmNvbnN0IEVWRU5UX1NMSURFID0gYHNsaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0xJRCA9IGBzbGlkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTiA9IGBrZXlkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VFTlRFUiA9IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VMRUFWRSA9IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hTVEFSVCA9IGB0b3VjaHN0YXJ0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hNT1ZFID0gYHRvdWNobW92ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNIRU5EID0gYHRvdWNoZW5kJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUE9JTlRFUkRPV04gPSBgcG9pbnRlcmRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9QT0lOVEVSVVAgPSBgcG9pbnRlcnVwJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRFJBR19TVEFSVCA9IGBkcmFnc3RhcnQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9DQVJPVVNFTCA9ICdjYXJvdXNlbCdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfU0xJREUgPSAnc2xpZGUnXG5jb25zdCBDTEFTU19OQU1FX0VORCA9ICdjYXJvdXNlbC1pdGVtLWVuZCdcbmNvbnN0IENMQVNTX05BTUVfU1RBUlQgPSAnY2Fyb3VzZWwtaXRlbS1zdGFydCdcbmNvbnN0IENMQVNTX05BTUVfTkVYVCA9ICdjYXJvdXNlbC1pdGVtLW5leHQnXG5jb25zdCBDTEFTU19OQU1FX1BSRVYgPSAnY2Fyb3VzZWwtaXRlbS1wcmV2J1xuY29uc3QgQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UID0gJ3BvaW50ZXItZXZlbnQnXG5cbmNvbnN0IFNFTEVDVE9SX0FDVElWRSA9ICcuYWN0aXZlJ1xuY29uc3QgU0VMRUNUT1JfQUNUSVZFX0lURU0gPSAnLmFjdGl2ZS5jYXJvdXNlbC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfSVRFTSA9ICcuY2Fyb3VzZWwtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0lURU1fSU1HID0gJy5jYXJvdXNlbC1pdGVtIGltZydcbmNvbnN0IFNFTEVDVE9SX05FWFRfUFJFViA9ICcuY2Fyb3VzZWwtaXRlbS1uZXh0LCAuY2Fyb3VzZWwtaXRlbS1wcmV2J1xuY29uc3QgU0VMRUNUT1JfSU5ESUNBVE9SUyA9ICcuY2Fyb3VzZWwtaW5kaWNhdG9ycydcbmNvbnN0IFNFTEVDVE9SX0lORElDQVRPUiA9ICdbZGF0YS1icy10YXJnZXRdJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9TTElERSA9ICdbZGF0YS1icy1zbGlkZV0sIFtkYXRhLWJzLXNsaWRlLXRvXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfUklERSA9ICdbZGF0YS1icy1yaWRlPVwiY2Fyb3VzZWxcIl0nXG5cbmNvbnN0IFBPSU5URVJfVFlQRV9UT1VDSCA9ICd0b3VjaCdcbmNvbnN0IFBPSU5URVJfVFlQRV9QRU4gPSAncGVuJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbmNsYXNzIENhcm91c2VsIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9pdGVtcyA9IG51bGxcbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX2lzUGF1c2VkID0gZmFsc2VcbiAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gbnVsbFxuICAgIHRoaXMudG91Y2hTdGFydFggPSAwXG4gICAgdGhpcy50b3VjaERlbHRhWCA9IDBcblxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0lORElDQVRPUlMsIHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fdG91Y2hTdXBwb3J0ZWQgPSAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMFxuICAgIHRoaXMuX3BvaW50ZXJFdmVudCA9IEJvb2xlYW4od2luZG93LlBvaW50ZXJFdmVudClcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgbmV4dCgpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2xpZGluZykge1xuICAgICAgdGhpcy5fc2xpZGUoT1JERVJfTkVYVClcbiAgICB9XG4gIH1cblxuICBuZXh0V2hlblZpc2libGUoKSB7XG4gICAgLy8gRG9uJ3QgY2FsbCBuZXh0IHdoZW4gdGhlIHBhZ2UgaXNuJ3QgdmlzaWJsZVxuICAgIC8vIG9yIHRoZSBjYXJvdXNlbCBvciBpdHMgcGFyZW50IGlzbid0IHZpc2libGVcbiAgICBpZiAoIWRvY3VtZW50LmhpZGRlbiAmJiBpc1Zpc2libGUodGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgfVxuICB9XG5cbiAgcHJldigpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2xpZGluZykge1xuICAgICAgdGhpcy5fc2xpZGUoT1JERVJfUFJFVilcbiAgICB9XG4gIH1cblxuICBwYXVzZShldmVudCkge1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIHRoaXMuX2lzUGF1c2VkID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmIChTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX05FWFRfUFJFViwgdGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQpXG4gICAgICB0aGlzLmN5Y2xlKHRydWUpXG4gICAgfVxuXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgfVxuXG4gIGN5Y2xlKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudCkge1xuICAgICAgdGhpcy5faXNQYXVzZWQgPSBmYWxzZVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcgJiYgdGhpcy5fY29uZmlnLmludGVydmFsICYmICF0aGlzLl9pc1BhdXNlZCkge1xuICAgICAgdGhpcy5fdXBkYXRlSW50ZXJ2YWwoKVxuXG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKFxuICAgICAgICAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID8gdGhpcy5uZXh0V2hlblZpc2libGUgOiB0aGlzLm5leHQpLmJpbmQodGhpcyksXG4gICAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHRvKGluZGV4KSB7XG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fYWN0aXZlRWxlbWVudClcblxuICAgIGlmIChpbmRleCA+IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDEgfHwgaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsICgpID0+IHRoaXMudG8oaW5kZXgpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZUluZGV4ID09PSBpbmRleCkge1xuICAgICAgdGhpcy5wYXVzZSgpXG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG9yZGVyID0gaW5kZXggPiBhY3RpdmVJbmRleCA/XG4gICAgICBPUkRFUl9ORVhUIDpcbiAgICAgIE9SREVSX1BSRVZcblxuICAgIHRoaXMuX3NsaWRlKG9yZGVyLCB0aGlzLl9pdGVtc1tpbmRleF0pXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9oYW5kbGVTd2lwZSgpIHtcbiAgICBjb25zdCBhYnNEZWx0YXggPSBNYXRoLmFicyh0aGlzLnRvdWNoRGVsdGFYKVxuXG4gICAgaWYgKGFic0RlbHRheCA8PSBTV0lQRV9USFJFU0hPTEQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGFic0RlbHRheCAvIHRoaXMudG91Y2hEZWx0YVhcblxuICAgIHRoaXMudG91Y2hEZWx0YVggPSAwXG5cbiAgICBpZiAoIWRpcmVjdGlvbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fc2xpZGUoZGlyZWN0aW9uID4gMCA/IERJUkVDVElPTl9SSUdIVCA6IERJUkVDVElPTl9MRUZUKVxuICB9XG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOLCBldmVudCA9PiB0aGlzLl9rZXlkb3duKGV2ZW50KSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VFTlRFUiwgZXZlbnQgPT4gdGhpcy5wYXVzZShldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VMRUFWRSwgZXZlbnQgPT4gdGhpcy5jeWNsZShldmVudCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy50b3VjaCAmJiB0aGlzLl90b3VjaFN1cHBvcnRlZCkge1xuICAgICAgdGhpcy5fYWRkVG91Y2hFdmVudExpc3RlbmVycygpXG4gICAgfVxuICB9XG5cbiAgX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5fcG9pbnRlckV2ZW50ICYmIChldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1BFTiB8fCBldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1RPVUNIKSkge1xuICAgICAgICB0aGlzLnRvdWNoU3RhcnRYID0gZXZlbnQuY2xpZW50WFxuICAgICAgfSBlbHNlIGlmICghdGhpcy5fcG9pbnRlckV2ZW50KSB7XG4gICAgICAgIHRoaXMudG91Y2hTdGFydFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFhcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBtb3ZlID0gZXZlbnQgPT4ge1xuICAgICAgLy8gZW5zdXJlIHN3aXBpbmcgd2l0aCBvbmUgdG91Y2ggYW5kIG5vdCBwaW5jaGluZ1xuICAgICAgdGhpcy50b3VjaERlbHRhWCA9IGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxID9cbiAgICAgICAgMCA6XG4gICAgICAgIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMudG91Y2hTdGFydFhcbiAgICB9XG5cbiAgICBjb25zdCBlbmQgPSBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5fcG9pbnRlckV2ZW50ICYmIChldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1BFTiB8fCBldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1RPVUNIKSkge1xuICAgICAgICB0aGlzLnRvdWNoRGVsdGFYID0gZXZlbnQuY2xpZW50WCAtIHRoaXMudG91Y2hTdGFydFhcbiAgICAgIH1cblxuICAgICAgdGhpcy5faGFuZGxlU3dpcGUoKVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgICAvLyBJZiBpdCdzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2UsIG1vdXNlZW50ZXIvbGVhdmUgYXJlIGZpcmVkIGFzXG4gICAgICAgIC8vIHBhcnQgb2YgdGhlIG1vdXNlIGNvbXBhdGliaWxpdHkgZXZlbnRzIG9uIGZpcnN0IHRhcCAtIHRoZSBjYXJvdXNlbFxuICAgICAgICAvLyB3b3VsZCBzdG9wIGN5Y2xpbmcgdW50aWwgdXNlciB0YXBwZWQgb3V0IG9mIGl0O1xuICAgICAgICAvLyBoZXJlLCB3ZSBsaXN0ZW4gZm9yIHRvdWNoZW5kLCBleHBsaWNpdGx5IHBhdXNlIHRoZSBjYXJvdXNlbFxuICAgICAgICAvLyAoYXMgaWYgaXQncyB0aGUgc2Vjb25kIHRpbWUgd2UgdGFwIG9uIGl0LCBtb3VzZWVudGVyIGNvbXBhdCBldmVudFxuICAgICAgICAvLyBpcyBOT1QgZmlyZWQpIGFuZCBhZnRlciBhIHRpbWVvdXQgKHRvIGFsbG93IGZvciBtb3VzZSBjb21wYXRpYmlsaXR5XG4gICAgICAgIC8vIGV2ZW50cyB0byBmaXJlKSB3ZSBleHBsaWNpdGx5IHJlc3RhcnQgY3ljbGluZ1xuXG4gICAgICAgIHRoaXMucGF1c2UoKVxuICAgICAgICBpZiAodGhpcy50b3VjaFRpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50b3VjaFRpbWVvdXQpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRvdWNoVGltZW91dCA9IHNldFRpbWVvdXQoZXZlbnQgPT4gdGhpcy5jeWNsZShldmVudCksIFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgKyB0aGlzLl9jb25maWcuaW50ZXJ2YWwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JVEVNX0lNRywgdGhpcy5fZWxlbWVudCkuZm9yRWFjaChpdGVtSW1nID0+IHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbihpdGVtSW1nLCBFVkVOVF9EUkFHX1NUQVJULCBlID0+IGUucHJldmVudERlZmF1bHQoKSlcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1BPSU5URVJET1dOLCBldmVudCA9PiBzdGFydChldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfUE9JTlRFUlVQLCBldmVudCA9PiBlbmQoZXZlbnQpKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9QT0lOVEVSX0VWRU5UKVxuICAgIH0gZWxzZSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hTVEFSVCwgZXZlbnQgPT4gc3RhcnQoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNITU9WRSwgZXZlbnQgPT4gbW92ZShldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hFTkQsIGV2ZW50ID0+IGVuZChldmVudCkpXG4gICAgfVxuICB9XG5cbiAgX2tleWRvd24oZXZlbnQpIHtcbiAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChldmVudC5rZXkgPT09IEFSUk9XX0xFRlRfS0VZKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLl9zbGlkZShESVJFQ1RJT05fUklHSFQpXG4gICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09IEFSUk9XX1JJR0hUX0tFWSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5fc2xpZGUoRElSRUNUSU9OX0xFRlQpXG4gICAgfVxuICB9XG5cbiAgX2dldEl0ZW1JbmRleChlbGVtZW50KSB7XG4gICAgdGhpcy5faXRlbXMgPSBlbGVtZW50ICYmIGVsZW1lbnQucGFyZW50Tm9kZSA/XG4gICAgICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lURU0sIGVsZW1lbnQucGFyZW50Tm9kZSkgOlxuICAgICAgW11cblxuICAgIHJldHVybiB0aGlzLl9pdGVtcy5pbmRleE9mKGVsZW1lbnQpXG4gIH1cblxuICBfZ2V0SXRlbUJ5T3JkZXIob3JkZXIsIGFjdGl2ZUVsZW1lbnQpIHtcbiAgICBjb25zdCBpc05leHQgPSBvcmRlciA9PT0gT1JERVJfTkVYVFxuICAgIGNvbnN0IGlzUHJldiA9IG9yZGVyID09PSBPUkRFUl9QUkVWXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudClcbiAgICBjb25zdCBsYXN0SXRlbUluZGV4ID0gdGhpcy5faXRlbXMubGVuZ3RoIC0gMVxuICAgIGNvbnN0IGlzR29pbmdUb1dyYXAgPSAoaXNQcmV2ICYmIGFjdGl2ZUluZGV4ID09PSAwKSB8fCAoaXNOZXh0ICYmIGFjdGl2ZUluZGV4ID09PSBsYXN0SXRlbUluZGV4KVxuXG4gICAgaWYgKGlzR29pbmdUb1dyYXAgJiYgIXRoaXMuX2NvbmZpZy53cmFwKSB7XG4gICAgICByZXR1cm4gYWN0aXZlRWxlbWVudFxuICAgIH1cblxuICAgIGNvbnN0IGRlbHRhID0gaXNQcmV2ID8gLTEgOiAxXG4gICAgY29uc3QgaXRlbUluZGV4ID0gKGFjdGl2ZUluZGV4ICsgZGVsdGEpICUgdGhpcy5faXRlbXMubGVuZ3RoXG5cbiAgICByZXR1cm4gaXRlbUluZGV4ID09PSAtMSA/XG4gICAgICB0aGlzLl9pdGVtc1t0aGlzLl9pdGVtcy5sZW5ndGggLSAxXSA6XG4gICAgICB0aGlzLl9pdGVtc1tpdGVtSW5kZXhdXG4gIH1cblxuICBfdHJpZ2dlclNsaWRlRXZlbnQocmVsYXRlZFRhcmdldCwgZXZlbnREaXJlY3Rpb25OYW1lKSB7XG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgocmVsYXRlZFRhcmdldClcbiAgICBjb25zdCBmcm9tSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgoU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkVfSVRFTSwgdGhpcy5fZWxlbWVudCkpXG5cbiAgICByZXR1cm4gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJREUsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQsXG4gICAgICBkaXJlY3Rpb246IGV2ZW50RGlyZWN0aW9uTmFtZSxcbiAgICAgIGZyb206IGZyb21JbmRleCxcbiAgICAgIHRvOiB0YXJnZXRJbmRleFxuICAgIH0pXG4gIH1cblxuICBfc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChlbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuX2luZGljYXRvcnNFbGVtZW50KSB7XG4gICAgICBjb25zdCBhY3RpdmVJbmRpY2F0b3IgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRSwgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpXG5cbiAgICAgIGFjdGl2ZUluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgYWN0aXZlSW5kaWNhdG9yLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JylcblxuICAgICAgY29uc3QgaW5kaWNhdG9ycyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSU5ESUNBVE9SLCB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudClcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRpY2F0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChOdW1iZXIucGFyc2VJbnQoaW5kaWNhdG9yc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtc2xpZGUtdG8nKSwgMTApID09PSB0aGlzLl9nZXRJdGVtSW5kZXgoZWxlbWVudCkpIHtcbiAgICAgICAgICBpbmRpY2F0b3JzW2ldLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICAgICAgaW5kaWNhdG9yc1tpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcsICd0cnVlJylcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZUludGVydmFsKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9hY3RpdmVFbGVtZW50IHx8IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpXG5cbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRJbnRlcnZhbCA9IE51bWJlci5wYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1pbnRlcnZhbCcpLCAxMClcblxuICAgIGlmIChlbGVtZW50SW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgPSB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5pbnRlcnZhbFxuICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsID0gZWxlbWVudEludGVydmFsXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgfHwgdGhpcy5fY29uZmlnLmludGVydmFsXG4gICAgfVxuICB9XG5cbiAgX3NsaWRlKGRpcmVjdGlvbk9yT3JkZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBvcmRlciA9IHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoZGlyZWN0aW9uT3JPcmRlcilcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkVfSVRFTSwgdGhpcy5fZWxlbWVudClcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudClcbiAgICBjb25zdCBuZXh0RWxlbWVudCA9IGVsZW1lbnQgfHwgdGhpcy5fZ2V0SXRlbUJ5T3JkZXIob3JkZXIsIGFjdGl2ZUVsZW1lbnQpXG5cbiAgICBjb25zdCBuZXh0RWxlbWVudEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KG5leHRFbGVtZW50KVxuICAgIGNvbnN0IGlzQ3ljbGluZyA9IEJvb2xlYW4odGhpcy5faW50ZXJ2YWwpXG5cbiAgICBjb25zdCBpc05leHQgPSBvcmRlciA9PT0gT1JERVJfTkVYVFxuICAgIGNvbnN0IGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gaXNOZXh0ID8gQ0xBU1NfTkFNRV9TVEFSVCA6IENMQVNTX05BTUVfRU5EXG4gICAgY29uc3Qgb3JkZXJDbGFzc05hbWUgPSBpc05leHQgPyBDTEFTU19OQU1FX05FWFQgOiBDTEFTU19OQU1FX1BSRVZcbiAgICBjb25zdCBldmVudERpcmVjdGlvbk5hbWUgPSB0aGlzLl9vcmRlclRvRGlyZWN0aW9uKG9yZGVyKVxuXG4gICAgaWYgKG5leHRFbGVtZW50ICYmIG5leHRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSkpIHtcbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzbGlkZUV2ZW50ID0gdGhpcy5fdHJpZ2dlclNsaWRlRXZlbnQobmV4dEVsZW1lbnQsIGV2ZW50RGlyZWN0aW9uTmFtZSlcbiAgICBpZiAoc2xpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWFjdGl2ZUVsZW1lbnQgfHwgIW5leHRFbGVtZW50KSB7XG4gICAgICAvLyBTb21lIHdlaXJkbmVzcyBpcyBoYXBwZW5pbmcsIHNvIHdlIGJhaWxcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2xpZGluZyA9IHRydWVcblxuICAgIGlmIChpc0N5Y2xpbmcpIHtcbiAgICAgIHRoaXMucGF1c2UoKVxuICAgIH1cblxuICAgIHRoaXMuX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQobmV4dEVsZW1lbnQpXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG5leHRFbGVtZW50XG5cbiAgICBjb25zdCB0cmlnZ2VyU2xpZEV2ZW50ID0gKCkgPT4ge1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJRCwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBuZXh0RWxlbWVudCxcbiAgICAgICAgZGlyZWN0aW9uOiBldmVudERpcmVjdGlvbk5hbWUsXG4gICAgICAgIGZyb206IGFjdGl2ZUVsZW1lbnRJbmRleCxcbiAgICAgICAgdG86IG5leHRFbGVtZW50SW5kZXhcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0xJREUpKSB7XG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKG9yZGVyQ2xhc3NOYW1lKVxuXG4gICAgICByZWZsb3cobmV4dEVsZW1lbnQpXG5cbiAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChkaXJlY3Rpb25hbENsYXNzTmFtZSlcbiAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoZGlyZWN0aW9uYWxDbGFzc05hbWUsIG9yZGVyQ2xhc3NOYW1lKVxuICAgICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSwgb3JkZXJDbGFzc05hbWUsIGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuXG4gICAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG5cbiAgICAgICAgc2V0VGltZW91dCh0cmlnZ2VyU2xpZEV2ZW50LCAwKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbEJhY2ssIGFjdGl2ZUVsZW1lbnQsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG4gICAgICB0cmlnZ2VyU2xpZEV2ZW50KClcbiAgICB9XG5cbiAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICB9XG4gIH1cblxuICBfZGlyZWN0aW9uVG9PcmRlcihkaXJlY3Rpb24pIHtcbiAgICBpZiAoIVtESVJFQ1RJT05fUklHSFQsIERJUkVDVElPTl9MRUZUXS5pbmNsdWRlcyhkaXJlY3Rpb24pKSB7XG4gICAgICByZXR1cm4gZGlyZWN0aW9uXG4gICAgfVxuXG4gICAgaWYgKGlzUlRMKCkpIHtcbiAgICAgIHJldHVybiBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9MRUZUID8gT1JERVJfUFJFViA6IE9SREVSX05FWFRcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTEVGVCA/IE9SREVSX05FWFQgOiBPUkRFUl9QUkVWXG4gIH1cblxuICBfb3JkZXJUb0RpcmVjdGlvbihvcmRlcikge1xuICAgIGlmICghW09SREVSX05FWFQsIE9SREVSX1BSRVZdLmluY2x1ZGVzKG9yZGVyKSkge1xuICAgICAgcmV0dXJuIG9yZGVyXG4gICAgfVxuXG4gICAgaWYgKGlzUlRMKCkpIHtcbiAgICAgIHJldHVybiBvcmRlciA9PT0gT1JERVJfUFJFViA/IERJUkVDVElPTl9MRUZUIDogRElSRUNUSU9OX1JJR0hUXG4gICAgfVxuXG4gICAgcmV0dXJuIG9yZGVyID09PSBPUkRFUl9QUkVWID8gRElSRUNUSU9OX1JJR0hUIDogRElSRUNUSU9OX0xFRlRcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBjYXJvdXNlbEludGVyZmFjZShlbGVtZW50LCBjb25maWcpIHtcbiAgICBsZXQgZGF0YSA9IERhdGEuZ2V0KGVsZW1lbnQsIERBVEFfS0VZKVxuICAgIGxldCBfY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgICBfY29uZmlnID0ge1xuICAgICAgICAuLi5fY29uZmlnLFxuICAgICAgICAuLi5jb25maWdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhY3Rpb24gPSB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyA/IGNvbmZpZyA6IF9jb25maWcuc2xpZGVcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgZGF0YSA9IG5ldyBDYXJvdXNlbChlbGVtZW50LCBfY29uZmlnKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnbnVtYmVyJykge1xuICAgICAgZGF0YS50byhjb25maWcpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYWN0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhW2FjdGlvbl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7YWN0aW9ufVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVthY3Rpb25dKClcbiAgICB9IGVsc2UgaWYgKF9jb25maWcuaW50ZXJ2YWwgJiYgX2NvbmZpZy5yaWRlKSB7XG4gICAgICBkYXRhLnBhdXNlKClcbiAgICAgIGRhdGEuY3ljbGUoKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBDYXJvdXNlbC5jYXJvdXNlbEludGVyZmFjZSh0aGlzLCBjb25maWcpXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBkYXRhQXBpQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gICAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9DQVJPVVNFTCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRhcmdldCksXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzKVxuICAgIH1cbiAgICBjb25zdCBzbGlkZUluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtc2xpZGUtdG8nKVxuXG4gICAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICAgIGNvbmZpZy5pbnRlcnZhbCA9IGZhbHNlXG4gICAgfVxuXG4gICAgQ2Fyb3VzZWwuY2Fyb3VzZWxJbnRlcmZhY2UodGFyZ2V0LCBjb25maWcpXG5cbiAgICBpZiAoc2xpZGVJbmRleCkge1xuICAgICAgRGF0YS5nZXQodGFyZ2V0LCBEQVRBX0tFWSkudG8oc2xpZGVJbmRleClcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1NMSURFLCBDYXJvdXNlbC5kYXRhQXBpQ2xpY2tIYW5kbGVyKVxuXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGNvbnN0IGNhcm91c2VscyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9SSURFKVxuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjYXJvdXNlbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBDYXJvdXNlbC5jYXJvdXNlbEludGVyZmFjZShjYXJvdXNlbHNbaV0sIERhdGEuZ2V0KGNhcm91c2Vsc1tpXSwgREFUQV9LRVkpKVxuICB9XG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuQ2Fyb3VzZWwgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQ2Fyb3VzZWwpXG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IGNvbGxhcHNlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXRFbGVtZW50LFxuICBnZXRTZWxlY3RvckZyb21FbGVtZW50LFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICByZWZsb3csXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnY29sbGFwc2UnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5jb2xsYXBzZSdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICB0b2dnbGU6IHRydWUsXG4gIHBhcmVudDogJydcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIHRvZ2dsZTogJ2Jvb2xlYW4nLFxuICBwYXJlbnQ6ICcoc3RyaW5nfGVsZW1lbnQpJ1xufVxuXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNFID0gJ2NvbGxhcHNlJ1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTSU5HID0gJ2NvbGxhcHNpbmcnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNFRCA9ICdjb2xsYXBzZWQnXG5cbmNvbnN0IFdJRFRIID0gJ3dpZHRoJ1xuY29uc3QgSEVJR0hUID0gJ2hlaWdodCdcblxuY29uc3QgU0VMRUNUT1JfQUNUSVZFUyA9ICcuc2hvdywgLmNvbGxhcHNpbmcnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIENvbGxhcHNlIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fdHJpZ2dlckFycmF5ID0gU2VsZWN0b3JFbmdpbmUuZmluZChcbiAgICAgIGAke1NFTEVDVE9SX0RBVEFfVE9HR0xFfVtocmVmPVwiIyR7dGhpcy5fZWxlbWVudC5pZH1cIl0sYCArXG4gICAgICBgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRX1bZGF0YS1icy10YXJnZXQ9XCIjJHt0aGlzLl9lbGVtZW50LmlkfVwiXWBcbiAgICApXG5cbiAgICBjb25zdCB0b2dnbGVMaXN0ID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0b2dnbGVMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtID0gdG9nZ2xlTGlzdFtpXVxuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW0pXG4gICAgICBjb25zdCBmaWx0ZXJFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcilcbiAgICAgICAgLmZpbHRlcihmb3VuZEVsZW0gPT4gZm91bmRFbGVtID09PSB0aGlzLl9lbGVtZW50KVxuXG4gICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwgJiYgZmlsdGVyRWxlbWVudC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0b3IgPSBzZWxlY3RvclxuICAgICAgICB0aGlzLl90cmlnZ2VyQXJyYXkucHVzaChlbGVtKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3BhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnQgPyB0aGlzLl9nZXRQYXJlbnQoKSA6IG51bGxcblxuICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX2VsZW1lbnQsIHRoaXMuX3RyaWdnZXJBcnJheSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnRvZ2dsZSkge1xuICAgICAgdGhpcy50b2dnbGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coKVxuICAgIH1cbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlc1xuICAgIGxldCBhY3RpdmVzRGF0YVxuXG4gICAgaWYgKHRoaXMuX3BhcmVudCkge1xuICAgICAgYWN0aXZlcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfQUNUSVZFUywgdGhpcy5fcGFyZW50KVxuICAgICAgICAuZmlsdGVyKGVsZW0gPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnBhcmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1icy1wYXJlbnQnKSA9PT0gdGhpcy5fY29uZmlnLnBhcmVudFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0NPTExBUFNFKVxuICAgICAgICB9KVxuXG4gICAgICBpZiAoYWN0aXZlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYWN0aXZlcyA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHRoaXMuX3NlbGVjdG9yKVxuICAgIGlmIChhY3RpdmVzKSB7XG4gICAgICBjb25zdCB0ZW1wQWN0aXZlRGF0YSA9IGFjdGl2ZXMuZmluZChlbGVtID0+IGNvbnRhaW5lciAhPT0gZWxlbSlcbiAgICAgIGFjdGl2ZXNEYXRhID0gdGVtcEFjdGl2ZURhdGEgPyBEYXRhLmdldCh0ZW1wQWN0aXZlRGF0YSwgREFUQV9LRVkpIDogbnVsbFxuXG4gICAgICBpZiAoYWN0aXZlc0RhdGEgJiYgYWN0aXZlc0RhdGEuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVylcbiAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlcykge1xuICAgICAgYWN0aXZlcy5mb3JFYWNoKGVsZW1BY3RpdmUgPT4ge1xuICAgICAgICBpZiAoY29udGFpbmVyICE9PSBlbGVtQWN0aXZlKSB7XG4gICAgICAgICAgQ29sbGFwc2UuY29sbGFwc2VJbnRlcmZhY2UoZWxlbUFjdGl2ZSwgJ2hpZGUnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhY3RpdmVzRGF0YSkge1xuICAgICAgICAgIERhdGEuc2V0KGVsZW1BY3RpdmUsIERBVEFfS0VZLCBudWxsKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gMFxuXG4gICAgaWYgKHRoaXMuX3RyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKHRydWUpXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRSwgQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuXG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcoZmFsc2UpXG5cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOKVxuICAgIH1cblxuICAgIGNvbnN0IGNhcGl0YWxpemVkRGltZW5zaW9uID0gZGltZW5zaW9uWzBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoMSlcbiAgICBjb25zdCBzY3JvbGxTaXplID0gYHNjcm9sbCR7Y2FwaXRhbGl6ZWREaW1lbnNpb259YFxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50W3Njcm9sbFNpemVdfXB4YFxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8ICF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcbiAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1lbnNpb25dfXB4YFxuXG4gICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBjb25zdCB0cmlnZ2VyQXJyYXlMZW5ndGggPSB0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoXG4gICAgaWYgKHRyaWdnZXJBcnJheUxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJpZ2dlckFycmF5TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdHJpZ2dlciA9IHRoaXMuX3RyaWdnZXJBcnJheVtpXVxuICAgICAgICBjb25zdCBlbGVtID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0cmlnZ2VyKVxuXG4gICAgICAgIGlmIChlbGVtICYmICFlbGVtLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICAgICAgdHJpZ2dlci5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0VEKVxuICAgICAgICAgIHRyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcodHJ1ZSlcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0lORylcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNFKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnXG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0cnVlKVxuICB9XG5cbiAgc2V0VHJhbnNpdGlvbmluZyhpc1RyYW5zaXRpb25pbmcpIHtcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBpc1RyYW5zaXRpb25pbmdcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5jb25maWdcbiAgICB9XG4gICAgY29uZmlnLnRvZ2dsZSA9IEJvb2xlYW4oY29uZmlnLnRvZ2dsZSkgLy8gQ29lcmNlIHN0cmluZyB2YWx1ZXNcbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGltZW5zaW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhXSURUSCkgPyBXSURUSCA6IEhFSUdIVFxuICB9XG5cbiAgX2dldFBhcmVudCgpIHtcbiAgICBsZXQgeyBwYXJlbnQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgcGFyZW50ID0gZ2V0RWxlbWVudChwYXJlbnQpXG5cbiAgICBjb25zdCBzZWxlY3RvciA9IGAke1NFTEVDVE9SX0RBVEFfVE9HR0xFfVtkYXRhLWJzLXBhcmVudD1cIiR7cGFyZW50fVwiXWBcblxuICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHBhcmVudClcbiAgICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudClcblxuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoXG4gICAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgICAgW2VsZW1lbnRdXG4gICAgICAgIClcbiAgICAgIH0pXG5cbiAgICByZXR1cm4gcGFyZW50XG4gIH1cblxuICBfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKGVsZW1lbnQsIHRyaWdnZXJBcnJheSkge1xuICAgIGlmICghZWxlbWVudCB8fCAhdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNPcGVuID0gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgdHJpZ2dlckFycmF5LmZvckVhY2goZWxlbSA9PiB7XG4gICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFRClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNFRClcbiAgICAgIH1cblxuICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBpc09wZW4pXG4gICAgfSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBjb2xsYXBzZUludGVyZmFjZShlbGVtZW50LCBjb25maWcpIHtcbiAgICBsZXQgZGF0YSA9IERhdGEuZ2V0KGVsZW1lbnQsIERBVEFfS0VZKVxuICAgIGNvbnN0IF9jb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudCksXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pXG4gICAgfVxuXG4gICAgaWYgKCFkYXRhICYmIF9jb25maWcudG9nZ2xlICYmIHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnICYmIC9zaG93fGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgX2NvbmZpZy50b2dnbGUgPSBmYWxzZVxuICAgIH1cblxuICAgIGlmICghZGF0YSkge1xuICAgICAgZGF0YSA9IG5ldyBDb2xsYXBzZShlbGVtZW50LCBfY29uZmlnKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgQ29sbGFwc2UuY29sbGFwc2VJbnRlcmZhY2UodGhpcywgY29uZmlnKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIC8vIHByZXZlbnREZWZhdWx0IG9ubHkgZm9yIDxhPiBlbGVtZW50cyAod2hpY2ggY2hhbmdlIHRoZSBVUkwpIG5vdCBpbnNpZGUgdGhlIGNvbGxhcHNpYmxlIGVsZW1lbnRcbiAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQScgfHwgKGV2ZW50LmRlbGVnYXRlVGFyZ2V0ICYmIGV2ZW50LmRlbGVnYXRlVGFyZ2V0LnRhZ05hbWUgPT09ICdBJykpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBjb25zdCB0cmlnZ2VyRGF0YSA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMpXG4gIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKVxuICBjb25zdCBzZWxlY3RvckVsZW1lbnRzID0gU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcilcblxuICBzZWxlY3RvckVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgY29uc3QgZGF0YSA9IERhdGEuZ2V0KGVsZW1lbnQsIERBVEFfS0VZKVxuICAgIGxldCBjb25maWdcbiAgICBpZiAoZGF0YSkge1xuICAgICAgLy8gdXBkYXRlIHBhcmVudCBhdHRyaWJ1dGVcbiAgICAgIGlmIChkYXRhLl9wYXJlbnQgPT09IG51bGwgJiYgdHlwZW9mIHRyaWdnZXJEYXRhLnBhcmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZGF0YS5fY29uZmlnLnBhcmVudCA9IHRyaWdnZXJEYXRhLnBhcmVudFxuICAgICAgICBkYXRhLl9wYXJlbnQgPSBkYXRhLl9nZXRQYXJlbnQoKVxuICAgICAgfVxuXG4gICAgICBjb25maWcgPSAndG9nZ2xlJ1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcgPSB0cmlnZ2VyRGF0YVxuICAgIH1cblxuICAgIENvbGxhcHNlLmNvbGxhcHNlSW50ZXJmYWNlKGVsZW1lbnQsIGNvbmZpZylcbiAgfSlcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5Db2xsYXBzZSB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihDb2xsYXBzZSlcblxuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2VcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogZHJvcGRvd24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgKiBhcyBQb3BwZXIgZnJvbSAnQHBvcHBlcmpzL2NvcmUnXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgaXNEaXNhYmxlZCxcbiAgaXNFbGVtZW50LFxuICBpc1Zpc2libGUsXG4gIGlzUlRMLFxuICBub29wLFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ2Ryb3Bkb3duJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuZHJvcGRvd24nXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnXG5jb25zdCBTUEFDRV9LRVkgPSAnU3BhY2UnXG5jb25zdCBUQUJfS0VZID0gJ1RhYidcbmNvbnN0IEFSUk9XX1VQX0tFWSA9ICdBcnJvd1VwJ1xuY29uc3QgQVJST1dfRE9XTl9LRVkgPSAnQXJyb3dEb3duJ1xuY29uc3QgUklHSFRfTU9VU0VfQlVUVE9OID0gMiAvLyBNb3VzZUV2ZW50LmJ1dHRvbiB2YWx1ZSBmb3IgdGhlIHNlY29uZGFyeSBidXR0b24sIHVzdWFsbHkgdGhlIHJpZ2h0IGJ1dHRvblxuXG5jb25zdCBSRUdFWFBfS0VZRE9XTiA9IG5ldyBSZWdFeHAoYCR7QVJST1dfVVBfS0VZfXwke0FSUk9XX0RPV05fS0VZfXwke0VTQ0FQRV9LRVl9YClcblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0sgPSBgY2xpY2ske0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fREFUQV9BUEkgPSBga2V5ZG93biR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWVVQX0RBVEFfQVBJID0gYGtleXVwJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfRFJPUFVQID0gJ2Ryb3B1cCdcbmNvbnN0IENMQVNTX05BTUVfRFJPUEVORCA9ICdkcm9wZW5kJ1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QU1RBUlQgPSAnZHJvcHN0YXJ0J1xuY29uc3QgQ0xBU1NfTkFNRV9OQVZCQVIgPSAnbmF2YmFyJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiXSdcbmNvbnN0IFNFTEVDVE9SX01FTlUgPSAnLmRyb3Bkb3duLW1lbnUnXG5jb25zdCBTRUxFQ1RPUl9OQVZCQVJfTkFWID0gJy5uYXZiYXItbmF2J1xuY29uc3QgU0VMRUNUT1JfVklTSUJMRV9JVEVNUyA9ICcuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSdcblxuY29uc3QgUExBQ0VNRU5UX1RPUCA9IGlzUlRMKCkgPyAndG9wLWVuZCcgOiAndG9wLXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX1RPUEVORCA9IGlzUlRMKCkgPyAndG9wLXN0YXJ0JyA6ICd0b3AtZW5kJ1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTSA9IGlzUlRMKCkgPyAnYm90dG9tLWVuZCcgOiAnYm90dG9tLXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTUVORCA9IGlzUlRMKCkgPyAnYm90dG9tLXN0YXJ0JyA6ICdib3R0b20tZW5kJ1xuY29uc3QgUExBQ0VNRU5UX1JJR0hUID0gaXNSVEwoKSA/ICdsZWZ0LXN0YXJ0JyA6ICdyaWdodC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9MRUZUID0gaXNSVEwoKSA/ICdyaWdodC1zdGFydCcgOiAnbGVmdC1zdGFydCdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgb2Zmc2V0OiBbMCwgMl0sXG4gIGJvdW5kYXJ5OiAnY2xpcHBpbmdQYXJlbnRzJyxcbiAgcmVmZXJlbmNlOiAndG9nZ2xlJyxcbiAgZGlzcGxheTogJ2R5bmFtaWMnLFxuICBwb3BwZXJDb25maWc6IG51bGwsXG4gIGF1dG9DbG9zZTogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgb2Zmc2V0OiAnKGFycmF5fHN0cmluZ3xmdW5jdGlvbiknLFxuICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICByZWZlcmVuY2U6ICcoc3RyaW5nfGVsZW1lbnR8b2JqZWN0KScsXG4gIGRpc3BsYXk6ICdzdHJpbmcnLFxuICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3R8ZnVuY3Rpb24pJyxcbiAgYXV0b0Nsb3NlOiAnKGJvb2xlYW58c3RyaW5nKSdcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIERyb3Bkb3duIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9tZW51ID0gdGhpcy5fZ2V0TWVudUVsZW1lbnQoKVxuICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKClcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzLl9lbGVtZW50KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnNob3coKVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzLl9lbGVtZW50KSB8fCB0aGlzLl9tZW51LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnQgPSBEcm9wZG93bi5nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywgcmVsYXRlZFRhcmdldClcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gVG90YWxseSBkaXNhYmxlIFBvcHBlciBmb3IgRHJvcGRvd25zIGluIE5hdmJhclxuICAgIGlmICh0aGlzLl9pbk5hdmJhcikge1xuICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LCAncG9wcGVyJywgJ25vbmUnKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBkcm9wZG93bnMgcmVxdWlyZSBQb3BwZXIgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZyknKVxuICAgICAgfVxuXG4gICAgICBsZXQgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdwYXJlbnQnKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBwYXJlbnRcbiAgICAgIH0gZWxzZSBpZiAoaXNFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBnZXRFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fY29uZmlnLnJlZmVyZW5jZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwb3BwZXJDb25maWcgPSB0aGlzLl9nZXRQb3BwZXJDb25maWcoKVxuICAgICAgY29uc3QgaXNEaXNwbGF5U3RhdGljID0gcG9wcGVyQ29uZmlnLm1vZGlmaWVycy5maW5kKG1vZGlmaWVyID0+IG1vZGlmaWVyLm5hbWUgPT09ICdhcHBseVN0eWxlcycgJiYgbW9kaWZpZXIuZW5hYmxlZCA9PT0gZmFsc2UpXG5cbiAgICAgIHRoaXMuX3BvcHBlciA9IFBvcHBlci5jcmVhdGVQb3BwZXIocmVmZXJlbmNlRWxlbWVudCwgdGhpcy5fbWVudSwgcG9wcGVyQ29uZmlnKVxuXG4gICAgICBpZiAoaXNEaXNwbGF5U3RhdGljKSB7XG4gICAgICAgIE1hbmlwdWxhdG9yLnNldERhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSwgJ3BvcHBlcicsICdzdGF0aWMnKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJlxuICAgICAgIXBhcmVudC5jbG9zZXN0KFNFTEVDVE9SX05BVkJBUl9OQVYpKSB7XG4gICAgICBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbilcbiAgICAgICAgLmZvckVhY2goZWxlbSA9PiBFdmVudEhhbmRsZXIub24oZWxlbSwgJ21vdXNlb3ZlcicsIG5vb3ApKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcblxuICAgIHRoaXMuX21lbnUuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKENMQVNTX05BTUVfU0hPVylcbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwgcmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkgfHwgIXRoaXMuX21lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuXG4gICAgdGhpcy5fY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0ssIGV2ZW50ID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMudG9nZ2xlKClcbiAgICB9KVxuICB9XG5cbiAgX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSwgcmVsYXRlZFRhcmdldClcbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbilcbiAgICAgICAgLmZvckVhY2goZWxlbSA9PiBFdmVudEhhbmRsZXIub2ZmKGVsZW0sICdtb3VzZW92ZXInLCBub29wKSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgdGhpcy5fbWVudS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcbiAgICBNYW5pcHVsYXRvci5yZW1vdmVEYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInKVxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTiwgcmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCksXG4gICAgICAuLi5jb25maWdcbiAgICB9XG5cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmZXJlbmNlID09PSAnb2JqZWN0JyAmJiAhaXNFbGVtZW50KGNvbmZpZy5yZWZlcmVuY2UpICYmXG4gICAgICB0eXBlb2YgY29uZmlnLnJlZmVyZW5jZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09ICdmdW5jdGlvbidcbiAgICApIHtcbiAgICAgIC8vIFBvcHBlciB2aXJ0dWFsIGVsZW1lbnRzIHJlcXVpcmUgYSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgbWV0aG9kXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke05BTUUudG9VcHBlckNhc2UoKX06IE9wdGlvbiBcInJlZmVyZW5jZVwiIHByb3ZpZGVkIHR5cGUgXCJvYmplY3RcIiB3aXRob3V0IGEgcmVxdWlyZWQgXCJnZXRCb3VuZGluZ0NsaWVudFJlY3RcIiBtZXRob2QuYClcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0TWVudUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLm5leHQodGhpcy5fZWxlbWVudCwgU0VMRUNUT1JfTUVOVSlbMF1cbiAgfVxuXG4gIF9nZXRQbGFjZW1lbnQoKSB7XG4gICAgY29uc3QgcGFyZW50RHJvcGRvd24gPSB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGVcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRU5EKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9SSUdIVFxuICAgIH1cblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QU1RBUlQpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX0xFRlRcbiAgICB9XG5cbiAgICAvLyBXZSBuZWVkIHRvIHRyaW0gdGhlIHZhbHVlIGJlY2F1c2UgY3VzdG9tIHByb3BlcnRpZXMgY2FuIGFsc28gaW5jbHVkZSBzcGFjZXNcbiAgICBjb25zdCBpc0VuZCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fbWVudSkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1icy1wb3NpdGlvbicpLnRyaW0oKSA9PT0gJ2VuZCdcblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QVVApKSB7XG4gICAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfVE9QRU5EIDogUExBQ0VNRU5UX1RPUFxuICAgIH1cblxuICAgIHJldHVybiBpc0VuZCA/IFBMQUNFTUVOVF9CT1RUT01FTkQgOiBQTEFDRU1FTlRfQk9UVE9NXG4gIH1cblxuICBfZGV0ZWN0TmF2YmFyKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoYC4ke0NMQVNTX05BTUVfTkFWQkFSfWApICE9PSBudWxsXG4gIH1cblxuICBfZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHsgb2Zmc2V0IH0gPSB0aGlzLl9jb25maWdcblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG9mZnNldC5zcGxpdCgnLCcpLm1hcCh2YWwgPT4gTnVtYmVyLnBhcnNlSW50KHZhbCwgMTApKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gcG9wcGVyRGF0YSA9PiBvZmZzZXQocG9wcGVyRGF0YSwgdGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfZ2V0UG9wcGVyQ29uZmlnKCkge1xuICAgIGNvbnN0IGRlZmF1bHRCc1BvcHBlckNvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogdGhpcy5fZ2V0UGxhY2VtZW50KCksXG4gICAgICBtb2RpZmllcnM6IFt7XG4gICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgYm91bmRhcnk6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KClcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIFBvcHBlciBpZiB3ZSBoYXZlIGEgc3RhdGljIGRpc3BsYXlcbiAgICBpZiAodGhpcy5fY29uZmlnLmRpc3BsYXkgPT09ICdzdGF0aWMnKSB7XG4gICAgICBkZWZhdWx0QnNQb3BwZXJDb25maWcubW9kaWZpZXJzID0gW3tcbiAgICAgICAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlZmF1bHRCc1BvcHBlckNvbmZpZyxcbiAgICAgIC4uLih0eXBlb2YgdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcoZGVmYXVsdEJzUG9wcGVyQ29uZmlnKSA6IHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcpXG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdE1lbnVJdGVtKGV2ZW50KSB7XG4gICAgY29uc3QgaXRlbXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMsIHRoaXMuX21lbnUpLmZpbHRlcihpc1Zpc2libGUpXG5cbiAgICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGluZGV4ID0gaXRlbXMuaW5kZXhPZihldmVudC50YXJnZXQpXG5cbiAgICAvLyBVcFxuICAgIGlmIChldmVudC5rZXkgPT09IEFSUk9XX1VQX0tFWSAmJiBpbmRleCA+IDApIHtcbiAgICAgIGluZGV4LS1cbiAgICB9XG5cbiAgICAvLyBEb3duXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gQVJST1dfRE9XTl9LRVkgJiYgaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgLy8gaW5kZXggaXMgLTEgaWYgdGhlIGZpcnN0IGtleWRvd24gaXMgYW4gQXJyb3dVcFxuICAgIGluZGV4ID0gaW5kZXggPT09IC0xID8gMCA6IGluZGV4XG5cbiAgICBpdGVtc1tpbmRleF0uZm9jdXMoKVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGRyb3Bkb3duSW50ZXJmYWNlKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIGxldCBkYXRhID0gRGF0YS5nZXQoZWxlbWVudCwgREFUQV9LRVkpXG4gICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbFxuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBkYXRhID0gbmV3IERyb3Bkb3duKGVsZW1lbnQsIF9jb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBEcm9wZG93bi5kcm9wZG93bkludGVyZmFjZSh0aGlzLCBjb25maWcpXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBjbGVhck1lbnVzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50ICYmIChldmVudC5idXR0b24gPT09IFJJR0hUX01PVVNFX0JVVFRPTiB8fCAoZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgIT09IFRBQl9LRVkpKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9UT0dHTEUpXG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdG9nZ2xlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgY29udGV4dCA9IERhdGEuZ2V0KHRvZ2dsZXNbaV0sIERBVEFfS0VZKVxuICAgICAgaWYgKCFjb250ZXh0IHx8IGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGlmICghY29udGV4dC5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBjb250ZXh0Ll9lbGVtZW50XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKVxuICAgICAgICBjb25zdCBpc01lbnVUYXJnZXQgPSBjb21wb3NlZFBhdGguaW5jbHVkZXMoY29udGV4dC5fbWVudSlcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNvbXBvc2VkUGF0aC5pbmNsdWRlcyhjb250ZXh0Ll9lbGVtZW50KSB8fFxuICAgICAgICAgIChjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSAnaW5zaWRlJyAmJiAhaXNNZW51VGFyZ2V0KSB8fFxuICAgICAgICAgIChjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSAnb3V0c2lkZScgJiYgaXNNZW51VGFyZ2V0KVxuICAgICAgICApIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGFiIG5hdmlnYXRpb24gdGhyb3VnaCB0aGUgZHJvcGRvd24gbWVudSBvciBldmVudHMgZnJvbSBjb250YWluZWQgaW5wdXRzIHNob3VsZG4ndCBjbG9zZSB0aGUgbWVudVxuICAgICAgICBpZiAoY29udGV4dC5fbWVudS5jb250YWlucyhldmVudC50YXJnZXQpICYmICgoZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgPT09IFRBQl9LRVkpIHx8IC9pbnB1dHxzZWxlY3R8b3B0aW9ufHRleHRhcmVhfGZvcm0vaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkpIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0LmNsaWNrRXZlbnQgPSBldmVudFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRQYXJlbnRGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gIH1cblxuICBzdGF0aWMgZGF0YUFwaUtleWRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgLy8gSWYgbm90IGlucHV0L3RleHRhcmVhOlxuICAgIC8vICAtIEFuZCBub3QgYSBrZXkgaW4gUkVHRVhQX0tFWURPV04gPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vIElmIGlucHV0L3RleHRhcmVhOlxuICAgIC8vICAtIElmIHNwYWNlIGtleSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gIC0gSWYga2V5IGlzIG90aGVyIHRoYW4gZXNjYXBlXG4gICAgLy8gICAgLSBJZiBrZXkgaXMgbm90IHVwIG9yIGRvd24gPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vICAgIC0gSWYgdHJpZ2dlciBpbnNpZGUgdGhlIG1lbnUgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSA/XG4gICAgICBldmVudC5rZXkgPT09IFNQQUNFX0tFWSB8fCAoZXZlbnQua2V5ICE9PSBFU0NBUEVfS0VZICYmXG4gICAgICAoKGV2ZW50LmtleSAhPT0gQVJST1dfRE9XTl9LRVkgJiYgZXZlbnQua2V5ICE9PSBBUlJPV19VUF9LRVkpIHx8XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbG9zZXN0KFNFTEVDVE9SX01FTlUpKSkgOlxuICAgICAgIVJFR0VYUF9LRVlET1dOLnRlc3QoZXZlbnQua2V5KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBpZiAoIWlzQWN0aXZlICYmIGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VG9nZ2xlQnV0dG9uID0gKCkgPT4gdGhpcy5tYXRjaGVzKFNFTEVDVE9SX0RBVEFfVE9HR0xFKSA/IHRoaXMgOiBTZWxlY3RvckVuZ2luZS5wcmV2KHRoaXMsIFNFTEVDVE9SX0RBVEFfVE9HR0xFKVswXVxuXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWSkge1xuICAgICAgZ2V0VG9nZ2xlQnV0dG9uKCkuZm9jdXMoKVxuICAgICAgRHJvcGRvd24uY2xlYXJNZW51cygpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWlzQWN0aXZlICYmIChldmVudC5rZXkgPT09IEFSUk9XX1VQX0tFWSB8fCBldmVudC5rZXkgPT09IEFSUk9XX0RPV05fS0VZKSkge1xuICAgICAgZ2V0VG9nZ2xlQnV0dG9uKCkuY2xpY2soKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFpc0FjdGl2ZSB8fCBldmVudC5rZXkgPT09IFNQQUNFX0tFWSkge1xuICAgICAgRHJvcGRvd24uY2xlYXJNZW51cygpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBEcm9wZG93bi5nZXRJbnN0YW5jZShnZXRUb2dnbGVCdXR0b24oKSkuX3NlbGVjdE1lbnVJdGVtKGV2ZW50KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgRHJvcGRvd24uZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJLCBTRUxFQ1RPUl9NRU5VLCBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBEcm9wZG93bi5jbGVhck1lbnVzKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlVUF9EQVRBX0FQSSwgRHJvcGRvd24uY2xlYXJNZW51cylcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBEcm9wZG93bi5kcm9wZG93bkludGVyZmFjZSh0aGlzKVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLkRyb3Bkb3duIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKERyb3Bkb3duKVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiB1dGlsL3Njcm9sbEJhci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4uL2RvbS9tYW5pcHVsYXRvcidcblxuY29uc3QgU0VMRUNUT1JfRklYRURfQ09OVEVOVCA9ICcuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wJ1xuY29uc3QgU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQgPSAnLnN0aWNreS10b3AnXG5cbmNvbnN0IGdldFdpZHRoID0gKCkgPT4ge1xuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L2lubmVyV2lkdGgjdXNhZ2Vfbm90ZXNcbiAgY29uc3QgZG9jdW1lbnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICByZXR1cm4gTWF0aC5hYnMod2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudFdpZHRoKVxufVxuXG5jb25zdCBoaWRlID0gKHdpZHRoID0gZ2V0V2lkdGgoKSkgPT4ge1xuICBfZGlzYWJsZU92ZXJGbG93KClcbiAgLy8gZ2l2ZSBwYWRkaW5nIHRvIGVsZW1lbnQgdG8gYmFsYW5jZXMgdGhlIGhpZGRlbiBzY3JvbGxiYXIgd2lkdGhcbiAgX3NldEVsZW1lbnRBdHRyaWJ1dGVzKCdib2R5JywgJ3BhZGRpbmdSaWdodCcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgKyB3aWR0aClcbiAgLy8gdHJpY2s6IFdlIGFkanVzdCBwb3NpdGl2ZSBwYWRkaW5nUmlnaHQgYW5kIG5lZ2F0aXZlIG1hcmdpblJpZ2h0IHRvIHN0aWNreS10b3AgZWxlbWVudHMsIHRvIGtlZXAgc2hvd24gZnVsbHdpZHRoXG4gIF9zZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9GSVhFRF9DT05URU5ULCAncGFkZGluZ1JpZ2h0JywgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSArIHdpZHRoKVxuICBfc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQsICdtYXJnaW5SaWdodCcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgLSB3aWR0aClcbn1cblxuY29uc3QgX2Rpc2FibGVPdmVyRmxvdyA9ICgpID0+IHtcbiAgY29uc3QgYWN0dWFsVmFsdWUgPSBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93XG4gIGlmIChhY3R1YWxWYWx1ZSkge1xuICAgIE1hbmlwdWxhdG9yLnNldERhdGFBdHRyaWJ1dGUoZG9jdW1lbnQuYm9keSwgJ292ZXJmbG93JywgYWN0dWFsVmFsdWUpXG4gIH1cblxuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbn1cblxuY29uc3QgX3NldEVsZW1lbnRBdHRyaWJ1dGVzID0gKHNlbGVjdG9yLCBzdHlsZVByb3AsIGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gZ2V0V2lkdGgoKVxuICBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yKVxuICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgIT09IGRvY3VtZW50LmJvZHkgJiYgd2luZG93LmlubmVyV2lkdGggPiBlbGVtZW50LmNsaWVudFdpZHRoICsgc2Nyb2xsYmFyV2lkdGgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjdHVhbFZhbHVlID0gZWxlbWVudC5zdHlsZVtzdHlsZVByb3BdXG4gICAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVtzdHlsZVByb3BdXG4gICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcCwgYWN0dWFsVmFsdWUpXG4gICAgICBlbGVtZW50LnN0eWxlW3N0eWxlUHJvcF0gPSBgJHtjYWxsYmFjayhOdW1iZXIucGFyc2VGbG9hdChjYWxjdWxhdGVkVmFsdWUpKX1weGBcbiAgICB9KVxufVxuXG5jb25zdCByZXNldCA9ICgpID0+IHtcbiAgX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoJ2JvZHknLCAnb3ZlcmZsb3cnKVxuICBfcmVzZXRFbGVtZW50QXR0cmlidXRlcygnYm9keScsICdwYWRkaW5nUmlnaHQnKVxuICBfcmVzZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9GSVhFRF9DT05URU5ULCAncGFkZGluZ1JpZ2h0JylcbiAgX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQsICdtYXJnaW5SaWdodCcpXG59XG5cbmNvbnN0IF9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzID0gKHNlbGVjdG9yLCBzdHlsZVByb3ApID0+IHtcbiAgU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcikuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wKVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KHN0eWxlUHJvcClcbiAgICB9IGVsc2Uge1xuICAgICAgTWFuaXB1bGF0b3IucmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3ApXG4gICAgICBlbGVtZW50LnN0eWxlW3N0eWxlUHJvcF0gPSB2YWx1ZVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgaXNCb2R5T3ZlcmZsb3dpbmcgPSAoKSA9PiB7XG4gIHJldHVybiBnZXRXaWR0aCgpID4gMFxufVxuXG5leHBvcnQge1xuICBnZXRXaWR0aCxcbiAgaGlkZSxcbiAgaXNCb2R5T3ZlcmZsb3dpbmcsXG4gIHJlc2V0XG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IHV0aWwvYmFja2Ryb3AuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgeyBlbXVsYXRlVHJhbnNpdGlvbkVuZCwgZXhlY3V0ZSwgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQsIHJlZmxvdywgdHlwZUNoZWNrQ29uZmlnIH0gZnJvbSAnLi9pbmRleCdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgaXNWaXNpYmxlOiB0cnVlLCAvLyBpZiBmYWxzZSwgd2UgdXNlIHRoZSBiYWNrZHJvcCBoZWxwZXIgd2l0aG91dCBhZGRpbmcgYW55IGVsZW1lbnQgdG8gdGhlIGRvbVxuICBpc0FuaW1hdGVkOiBmYWxzZSxcbiAgcm9vdEVsZW1lbnQ6IGRvY3VtZW50LmJvZHksIC8vIGdpdmUgdGhlIGNob2ljZSB0byBwbGFjZSBiYWNrZHJvcCB1bmRlciBkaWZmZXJlbnQgZWxlbWVudHNcbiAgY2xpY2tDYWxsYmFjazogbnVsbFxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgaXNWaXNpYmxlOiAnYm9vbGVhbicsXG4gIGlzQW5pbWF0ZWQ6ICdib29sZWFuJyxcbiAgcm9vdEVsZW1lbnQ6ICdlbGVtZW50JyxcbiAgY2xpY2tDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKSdcbn1cbmNvbnN0IE5BTUUgPSAnYmFja2Ryb3AnXG5jb25zdCBDTEFTU19OQU1FX0JBQ0tEUk9QID0gJ21vZGFsLWJhY2tkcm9wJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuY29uc3QgRVZFTlRfTU9VU0VET1dOID0gYG1vdXNlZG93bi5icy4ke05BTUV9YFxuXG5jbGFzcyBCYWNrZHJvcCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5faXNBcHBlbmRlZCA9IGZhbHNlXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgfVxuXG4gIHNob3coY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5pc1Zpc2libGUpIHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9hcHBlbmQoKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICByZWZsb3codGhpcy5fZ2V0RWxlbWVudCgpKVxuICAgIH1cblxuICAgIHRoaXMuX2dldEVsZW1lbnQoKS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgIHRoaXMuX2VtdWxhdGVBbmltYXRpb24oKCkgPT4ge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICB9KVxuICB9XG5cbiAgaGlkZShjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5fY29uZmlnLmlzVmlzaWJsZSkge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2dldEVsZW1lbnQoKS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIHRoaXMuX2VtdWxhdGVBbmltYXRpb24oKCkgPT4ge1xuICAgICAgdGhpcy5kaXNwb3NlKClcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgfSlcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0RWxlbWVudCgpIHtcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGJhY2tkcm9wLmNsYXNzTmFtZSA9IENMQVNTX05BTUVfQkFDS0RST1BcbiAgICAgIGlmICh0aGlzLl9jb25maWcuaXNBbmltYXRlZCkge1xuICAgICAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudCA9IGJhY2tkcm9wXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cblxuICAgIGNvbmZpZy5yb290RWxlbWVudCA9IGNvbmZpZy5yb290RWxlbWVudCB8fCBkb2N1bWVudC5ib2R5XG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2FwcGVuZCgpIHtcbiAgICBpZiAodGhpcy5faXNBcHBlbmRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnLnJvb3RFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX2dldEVsZW1lbnQoKSlcblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9nZXRFbGVtZW50KCksIEVWRU5UX01PVVNFRE9XTiwgKCkgPT4ge1xuICAgICAgZXhlY3V0ZSh0aGlzLl9jb25maWcuY2xpY2tDYWxsYmFjaylcbiAgICB9KVxuXG4gICAgdGhpcy5faXNBcHBlbmRlZCA9IHRydWVcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0FwcGVuZGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFRE9XTilcblxuICAgIHRoaXMuX2dldEVsZW1lbnQoKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5faXNBcHBlbmRlZCA9IGZhbHNlXG4gIH1cblxuICBfZW11bGF0ZUFuaW1hdGlvbihjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpIHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2dldEVsZW1lbnQoKSlcbiAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2dldEVsZW1lbnQoKSwgJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiBleGVjdXRlKGNhbGxiYWNrKSlcbiAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0aGlzLl9nZXRFbGVtZW50KCksIGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tkcm9wXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IG1vZGFsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBlbXVsYXRlVHJhbnNpdGlvbkVuZCxcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQsXG4gIGlzUlRMLFxuICBpc1Zpc2libGUsXG4gIHJlZmxvdyxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgeyBnZXRXaWR0aCBhcyBnZXRTY3JvbGxCYXJXaWR0aCwgaGlkZSBhcyBzY3JvbGxCYXJIaWRlLCByZXNldCBhcyBzY3JvbGxCYXJSZXNldCB9IGZyb20gJy4vdXRpbC9zY3JvbGxiYXInXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuaW1wb3J0IEJhY2tkcm9wIGZyb20gJy4vdXRpbC9iYWNrZHJvcCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdtb2RhbCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLm1vZGFsJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5jb25zdCBFU0NBUEVfS0VZID0gJ0VzY2FwZSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBmb2N1czogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYmFja2Ryb3A6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgZm9jdXM6ICdib29sZWFuJ1xufVxuXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFX1BSRVZFTlRFRCA9IGBoaWRlUHJldmVudGVkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRk9DVVNJTiA9IGBmb2N1c2luJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUkVTSVpFID0gYHJlc2l6ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RJU01JU1MgPSBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fRElTTUlTUyA9IGBrZXlkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRVVQX0RJU01JU1MgPSBgbW91c2V1cC5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VET1dOX0RJU01JU1MgPSBgbW91c2Vkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9PUEVOID0gJ21vZGFsLW9wZW4nXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9TVEFUSUMgPSAnbW9kYWwtc3RhdGljJ1xuXG5jb25zdCBTRUxFQ1RPUl9ESUFMT0cgPSAnLm1vZGFsLWRpYWxvZydcbmNvbnN0IFNFTEVDVE9SX01PREFMX0JPRFkgPSAnLm1vZGFsLWJvZHknXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfRElTTUlTUyA9ICdbZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIl0nXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBNb2RhbCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9kaWFsb2cgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RJQUxPRywgdGhpcy5fZWxlbWVudClcbiAgICB0aGlzLl9iYWNrZHJvcCA9IHRoaXMuX2luaXRpYWxpemVCYWNrRHJvcCgpXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBzaG93KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBpZiAodGhpcy5faXNTaG93biB8fCB0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc0FuaW1hdGVkKCkpIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0XG4gICAgfSlcblxuICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZVxuXG4gICAgc2Nyb2xsQmFySGlkZSgpXG5cbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9PUEVOKVxuXG4gICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcblxuICAgIHRoaXMuX3NldEVzY2FwZUV2ZW50KClcbiAgICB0aGlzLl9zZXRSZXNpemVFdmVudCgpXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0tfRElTTUlTUywgU0VMRUNUT1JfREFUQV9ESVNNSVNTLCBldmVudCA9PiB0aGlzLmhpZGUoZXZlbnQpKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2RpYWxvZywgRVZFTlRfTU9VU0VET1dOX0RJU01JU1MsICgpID0+IHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VVUF9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLl9zaG93QmFja2Ryb3AoKCkgPT4gdGhpcy5fc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkpXG4gIH1cblxuICBoaWRlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcblxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgY29uc3QgaXNBbmltYXRlZCA9IHRoaXMuX2lzQW5pbWF0ZWQoKVxuXG4gICAgaWYgKGlzQW5pbWF0ZWQpIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpXG4gICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTilcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MpXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9kaWFsb2csIEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTKVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjaygoKSA9PiB0aGlzLl9oaWRlTW9kYWwoKSwgdGhpcy5fZWxlbWVudCwgaXNBbmltYXRlZClcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgW3dpbmRvdywgdGhpcy5fZGlhbG9nXVxuICAgICAgLmZvckVhY2goaHRtbEVsZW1lbnQgPT4gRXZlbnRIYW5kbGVyLm9mZihodG1sRWxlbWVudCwgRVZFTlRfS0VZKSlcblxuICAgIHRoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKVxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuXG4gICAgLyoqXG4gICAgICogYGRvY3VtZW50YCBoYXMgMiBldmVudHMgYEVWRU5UX0ZPQ1VTSU5gIGFuZCBgRVZFTlRfQ0xJQ0tfREFUQV9BUElgXG4gICAgICogRG8gbm90IG1vdmUgYGRvY3VtZW50YCBpbiBgaHRtbEVsZW1lbnRzYCBhcnJheVxuICAgICAqIEl0IHdpbGwgcmVtb3ZlIGBFVkVOVF9DTElDS19EQVRBX0FQSWAgZXZlbnQgdGhhdCBzaG91bGQgcmVtYWluXG4gICAgICovXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTilcbiAgfVxuXG4gIGhhbmRsZVVwZGF0ZSgpIHtcbiAgICB0aGlzLl9hZGp1c3REaWFsb2coKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9pbml0aWFsaXplQmFja0Ryb3AoKSB7XG4gICAgcmV0dXJuIG5ldyBCYWNrZHJvcCh7XG4gICAgICBpc1Zpc2libGU6IEJvb2xlYW4odGhpcy5fY29uZmlnLmJhY2tkcm9wKSwgLy8gJ3N0YXRpYycgb3B0aW9uIHdpbGwgYmUgdHJhbnNsYXRlZCB0byB0cnVlLCBhbmQgYm9vbGVhbnMgd2lsbCBrZWVwIHRoZWlyIHZhbHVlXG4gICAgICBpc0FuaW1hdGVkOiB0aGlzLl9pc0FuaW1hdGVkKClcbiAgICB9KVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCksXG4gICAgICAuLi5jb25maWdcbiAgICB9XG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBjb25zdCBpc0FuaW1hdGVkID0gdGhpcy5faXNBbmltYXRlZCgpXG4gICAgY29uc3QgbW9kYWxCb2R5ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9NT0RBTF9CT0RZLCB0aGlzLl9kaWFsb2cpXG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSB8fCB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAvLyBEb24ndCBtb3ZlIG1vZGFsJ3MgRE9NIHBvc2l0aW9uXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpXG4gICAgdGhpcy5fZWxlbWVudC5zY3JvbGxUb3AgPSAwXG5cbiAgICBpZiAobW9kYWxCb2R5KSB7XG4gICAgICBtb2RhbEJvZHkuc2Nyb2xsVG9wID0gMFxuICAgIH1cblxuICAgIGlmIChpc0FuaW1hdGVkKSB7XG4gICAgICByZWZsb3codGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgdGhpcy5fZW5mb3JjZUZvY3VzKClcbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2l0aW9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldFxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKHRyYW5zaXRpb25Db21wbGV0ZSwgdGhpcy5fZGlhbG9nLCBpc0FuaW1hdGVkKVxuICB9XG5cbiAgX2VuZm9yY2VGb2N1cygpIHtcbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOKSAvLyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGZvY3VzIGxvb3BcbiAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4sIGV2ZW50ID0+IHtcbiAgICAgIGlmIChkb2N1bWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgICAgdGhpcy5fZWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgICAgIXRoaXMuX2VsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgX3NldEVzY2FwZUV2ZW50KCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTl9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQgJiYgZXZlbnQua2V5ID09PSBFU0NBUEVfS0VZKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2NvbmZpZy5rZXlib2FyZCAmJiBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVkpIHtcbiAgICAgICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOX0RJU01JU1MpXG4gICAgfVxuICB9XG5cbiAgX3NldFJlc2l6ZUV2ZW50KCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9SRVNJWkUsICgpID0+IHRoaXMuX2FkanVzdERpYWxvZygpKVxuICAgIH0gZWxzZSB7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKHdpbmRvdywgRVZFTlRfUkVTSVpFKVxuICAgIH1cbiAgfVxuXG4gIF9oaWRlTW9kYWwoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgdGhpcy5fYmFja2Ryb3AuaGlkZSgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9PUEVOKVxuICAgICAgdGhpcy5fcmVzZXRBZGp1c3RtZW50cygpXG4gICAgICBzY3JvbGxCYXJSZXNldCgpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfSlcbiAgfVxuXG4gIF9zaG93QmFja2Ryb3AoY2FsbGJhY2spIHtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0tfRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2spIHtcbiAgICAgICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgdGhpcy5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuX2JhY2tkcm9wLnNob3coY2FsbGJhY2spXG4gIH1cblxuICBfaXNBbmltYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKVxuICB9XG5cbiAgX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKSB7XG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc01vZGFsT3ZlcmZsb3dpbmcgPSB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcblxuICAgIGlmICghaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU1RBVElDKVxuICAgIGNvbnN0IG1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZGlhbG9nKVxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgJ3RyYW5zaXRpb25lbmQnKVxuICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TVEFUSUMpXG4gICAgICBpZiAoIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsICd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZID0gJydcbiAgICAgICAgfSlcbiAgICAgICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudCwgbW9kYWxUcmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICB9XG4gICAgfSlcbiAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50LCBtb2RhbFRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gdGhlIGZvbGxvd2luZyBtZXRob2RzIGFyZSB1c2VkIHRvIGhhbmRsZSBvdmVyZmxvd2luZyBtb2RhbHNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIF9hZGp1c3REaWFsb2coKSB7XG4gICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID0gdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBnZXRTY3JvbGxCYXJXaWR0aCgpXG4gICAgY29uc3QgaXNCb2R5T3ZlcmZsb3dpbmcgPSBzY3JvbGxiYXJXaWR0aCA+IDBcblxuICAgIGlmICgoIWlzQm9keU92ZXJmbG93aW5nICYmIGlzTW9kYWxPdmVyZmxvd2luZyAmJiAhaXNSVEwoKSkgfHwgKGlzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcgJiYgaXNSVEwoKSkpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSBgJHtzY3JvbGxiYXJXaWR0aH1weGBcbiAgICB9XG5cbiAgICBpZiAoKGlzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcgJiYgIWlzUlRMKCkpIHx8ICghaXNCb2R5T3ZlcmZsb3dpbmcgJiYgaXNNb2RhbE92ZXJmbG93aW5nICYmIGlzUlRMKCkpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3Njcm9sbGJhcldpZHRofXB4YFxuICAgIH1cbiAgfVxuXG4gIF9yZXNldEFkanVzdG1lbnRzKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSAnJ1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJydcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnLCByZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gTW9kYWwuZ2V0SW5zdGFuY2UodGhpcykgfHwgbmV3IE1vZGFsKHRoaXMsIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDoge30pXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKHJlbGF0ZWRUYXJnZXQpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBFdmVudEhhbmRsZXIub25lKHRhcmdldCwgRVZFTlRfU0hPVywgc2hvd0V2ZW50ID0+IHtcbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIC8vIG9ubHkgcmVnaXN0ZXIgZm9jdXMgcmVzdG9yZXIgaWYgbW9kYWwgd2lsbCBhY3R1YWxseSBnZXQgc2hvd25cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4sICgpID0+IHtcbiAgICAgIGlmIChpc1Zpc2libGUodGhpcykpIHtcbiAgICAgICAgdGhpcy5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICBjb25zdCBkYXRhID0gTW9kYWwuZ2V0SW5zdGFuY2UodGFyZ2V0KSB8fCBuZXcgTW9kYWwodGFyZ2V0KVxuXG4gIGRhdGEudG9nZ2xlKHRoaXMpXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuTW9kYWwgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oTW9kYWwpXG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IG9mZmNhbnZhcy5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBpc0Rpc2FibGVkLFxuICBpc1Zpc2libGUsXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgeyBoaWRlIGFzIHNjcm9sbEJhckhpZGUsIHJlc2V0IGFzIHNjcm9sbEJhclJlc2V0IH0gZnJvbSAnLi91dGlsL3Njcm9sbGJhcidcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBCYWNrZHJvcCBmcm9tICcuL3V0aWwvYmFja2Ryb3AnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnb2ZmY2FudmFzJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMub2ZmY2FudmFzJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFU0NBUEVfS0VZID0gJ0VzY2FwZSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBzY3JvbGw6IGZhbHNlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBiYWNrZHJvcDogJ2Jvb2xlYW4nLFxuICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICBzY3JvbGw6ICdib29sZWFuJ1xufVxuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IE9QRU5fU0VMRUNUT1IgPSAnLm9mZmNhbnZhcy5zaG93J1xuXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9GT0NVU0lOID0gYGZvY3VzaW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RJU01JU1MgPSBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fRElTTUlTUyA9IGBrZXlkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfRElTTUlTUyA9ICdbZGF0YS1icy1kaXNtaXNzPVwib2ZmY2FudmFzXCJdJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwib2ZmY2FudmFzXCJdJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgT2ZmY2FudmFzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2JhY2tkcm9wID0gdGhpcy5faW5pdGlhbGl6ZUJhY2tEcm9wKClcbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHsgcmVsYXRlZFRhcmdldCB9KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZVxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xuXG4gICAgdGhpcy5fYmFja2Ryb3Auc2hvdygpXG5cbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwpIHtcbiAgICAgIHNjcm9sbEJhckhpZGUoKVxuICAgICAgdGhpcy5fZW5mb3JjZUZvY3VzT25FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJylcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgY29uc3QgY29tcGxldGVDYWxsQmFjayA9ICgpID0+IHtcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOLCB7IHJlbGF0ZWRUYXJnZXQgfSlcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbEJhY2ssIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5faXNTaG93bikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcblxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTilcbiAgICB0aGlzLl9lbGVtZW50LmJsdXIoKVxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fYmFja2Ryb3AuaGlkZSgpXG5cbiAgICBjb25zdCBjb21wbGV0ZUNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJylcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyb2xlJylcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXG5cbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCkge1xuICAgICAgICBzY3JvbGxCYXJSZXNldCgpXG4gICAgICB9XG5cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbGJhY2ssIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHRoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKVxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4pXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCksXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiB7fSlcbiAgICB9XG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2luaXRpYWxpemVCYWNrRHJvcCgpIHtcbiAgICByZXR1cm4gbmV3IEJhY2tkcm9wKHtcbiAgICAgIGlzVmlzaWJsZTogdGhpcy5fY29uZmlnLmJhY2tkcm9wLFxuICAgICAgaXNBbmltYXRlZDogdHJ1ZSxcbiAgICAgIHJvb3RFbGVtZW50OiB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICBjbGlja0NhbGxiYWNrOiAoKSA9PiB0aGlzLmhpZGUoKVxuICAgIH0pXG4gIH1cblxuICBfZW5mb3JjZUZvY3VzT25FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOKSAvLyBndWFyZCBhZ2FpbnN0IGluZmluaXRlIGZvY3VzIGxvb3BcbiAgICBFdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4sIGV2ZW50ID0+IHtcbiAgICAgIGlmIChkb2N1bWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgIGVsZW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAhZWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIGVsZW1lbnQuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gICAgZWxlbWVudC5mb2N1cygpXG4gIH1cblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MsIFNFTEVDVE9SX0RBVEFfRElTTUlTUywgKCkgPT4gdGhpcy5oaWRlKCkpXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTl9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkICYmIGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWSkge1xuICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IERhdGEuZ2V0KHRoaXMsIERBVEFfS0VZKSB8fCBuZXcgT2ZmY2FudmFzKHRoaXMsIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDoge30pXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKHRoaXMpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX0hJRERFTiwgKCkgPT4ge1xuICAgIC8vIGZvY3VzIG9uIHRyaWdnZXIgd2hlbiBpdCBpcyBjbG9zZWRcbiAgICBpZiAoaXNWaXNpYmxlKHRoaXMpKSB7XG4gICAgICB0aGlzLmZvY3VzKClcbiAgICB9XG4gIH0pXG5cbiAgLy8gYXZvaWQgY29uZmxpY3Qgd2hlbiBjbGlja2luZyBhIHRvZ2dsZXIgb2YgYW4gb2ZmY2FudmFzLCB3aGlsZSBhbm90aGVyIGlzIG9wZW5cbiAgY29uc3QgYWxsUmVhZHlPcGVuID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShPUEVOX1NFTEVDVE9SKVxuICBpZiAoYWxsUmVhZHlPcGVuICYmIGFsbFJlYWR5T3BlbiAhPT0gdGFyZ2V0KSB7XG4gICAgT2ZmY2FudmFzLmdldEluc3RhbmNlKGFsbFJlYWR5T3BlbikuaGlkZSgpXG4gIH1cblxuICBjb25zdCBkYXRhID0gRGF0YS5nZXQodGFyZ2V0LCBEQVRBX0tFWSkgfHwgbmV3IE9mZmNhbnZhcyh0YXJnZXQpXG5cbiAgZGF0YS50b2dnbGUodGhpcylcbn0pXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgU2VsZWN0b3JFbmdpbmUuZmluZChPUEVOX1NFTEVDVE9SKS5mb3JFYWNoKGVsID0+IChEYXRhLmdldChlbCwgREFUQV9LRVkpIHx8IG5ldyBPZmZjYW52YXMoZWwpKS5zaG93KCkpXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oT2ZmY2FudmFzKVxuXG5leHBvcnQgZGVmYXVsdCBPZmZjYW52YXNcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogdXRpbC9zYW5pdGl6ZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCB1cmlBdHRycyA9IG5ldyBTZXQoW1xuICAnYmFja2dyb3VuZCcsXG4gICdjaXRlJyxcbiAgJ2hyZWYnLFxuICAnaXRlbXR5cGUnLFxuICAnbG9uZ2Rlc2MnLFxuICAncG9zdGVyJyxcbiAgJ3NyYycsXG4gICd4bGluazpocmVmJ1xuXSlcblxuY29uc3QgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiA9IC9eYXJpYS1bXFx3LV0qJC9pXG5cbi8qKlxuICogQSBwYXR0ZXJuIHRoYXQgcmVjb2duaXplcyBhIGNvbW1vbmx5IHVzZWZ1bCBzdWJzZXQgb2YgVVJMcyB0aGF0IGFyZSBzYWZlLlxuICpcbiAqIFNob3V0b3V0IHRvIEFuZ3VsYXIgNyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNy4yLjQvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAqL1xuY29uc3QgU0FGRV9VUkxfUEFUVEVSTiA9IC9eKD86KD86aHR0cHM/fG1haWx0b3xmdHB8dGVsfGZpbGUpOnxbXiMmLzo/XSooPzpbIy8/XXwkKSkvaVxuXG4vKipcbiAqIEEgcGF0dGVybiB0aGF0IG1hdGNoZXMgc2FmZSBkYXRhIFVSTHMuIE9ubHkgbWF0Y2hlcyBpbWFnZSwgdmlkZW8gYW5kIGF1ZGlvIHR5cGVzLlxuICpcbiAqIFNob3V0b3V0IHRvIEFuZ3VsYXIgNyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNy4yLjQvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAqL1xuY29uc3QgREFUQV9VUkxfUEFUVEVSTiA9IC9eZGF0YTooPzppbWFnZVxcLyg/OmJtcHxnaWZ8anBlZ3xqcGd8cG5nfHRpZmZ8d2VicCl8dmlkZW9cXC8oPzptcGVnfG1wNHxvZ2d8d2VibSl8YXVkaW9cXC8oPzptcDN8b2dhfG9nZ3xvcHVzKSk7YmFzZTY0LFtcXGQrL2Etel0rPSokL2lcblxuY29uc3QgYWxsb3dlZEF0dHJpYnV0ZSA9IChhdHRyLCBhbGxvd2VkQXR0cmlidXRlTGlzdCkgPT4ge1xuICBjb25zdCBhdHRyTmFtZSA9IGF0dHIubm9kZU5hbWUudG9Mb3dlckNhc2UoKVxuXG4gIGlmIChhbGxvd2VkQXR0cmlidXRlTGlzdC5pbmNsdWRlcyhhdHRyTmFtZSkpIHtcbiAgICBpZiAodXJpQXR0cnMuaGFzKGF0dHJOYW1lKSkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4oU0FGRV9VUkxfUEFUVEVSTi50ZXN0KGF0dHIubm9kZVZhbHVlKSB8fCBEQVRBX1VSTF9QQVRURVJOLnRlc3QoYXR0ci5ub2RlVmFsdWUpKVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBjb25zdCByZWdFeHAgPSBhbGxvd2VkQXR0cmlidXRlTGlzdC5maWx0ZXIoYXR0clJlZ2V4ID0+IGF0dHJSZWdleCBpbnN0YW5jZW9mIFJlZ0V4cClcblxuICAvLyBDaGVjayBpZiBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB2YWxpZGF0ZXMgdGhlIGF0dHJpYnV0ZS5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJlZ0V4cC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChyZWdFeHBbaV0udGVzdChhdHRyTmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0QWxsb3dsaXN0ID0ge1xuICAvLyBHbG9iYWwgYXR0cmlidXRlcyBhbGxvd2VkIG9uIGFueSBzdXBwbGllZCBlbGVtZW50IGJlbG93LlxuICAnKic6IFsnY2xhc3MnLCAnZGlyJywgJ2lkJywgJ2xhbmcnLCAncm9sZScsIEFSSUFfQVRUUklCVVRFX1BBVFRFUk5dLFxuICBhOiBbJ3RhcmdldCcsICdocmVmJywgJ3RpdGxlJywgJ3JlbCddLFxuICBhcmVhOiBbXSxcbiAgYjogW10sXG4gIGJyOiBbXSxcbiAgY29sOiBbXSxcbiAgY29kZTogW10sXG4gIGRpdjogW10sXG4gIGVtOiBbXSxcbiAgaHI6IFtdLFxuICBoMTogW10sXG4gIGgyOiBbXSxcbiAgaDM6IFtdLFxuICBoNDogW10sXG4gIGg1OiBbXSxcbiAgaDY6IFtdLFxuICBpOiBbXSxcbiAgaW1nOiBbJ3NyYycsICdzcmNzZXQnLCAnYWx0JywgJ3RpdGxlJywgJ3dpZHRoJywgJ2hlaWdodCddLFxuICBsaTogW10sXG4gIG9sOiBbXSxcbiAgcDogW10sXG4gIHByZTogW10sXG4gIHM6IFtdLFxuICBzbWFsbDogW10sXG4gIHNwYW46IFtdLFxuICBzdWI6IFtdLFxuICBzdXA6IFtdLFxuICBzdHJvbmc6IFtdLFxuICB1OiBbXSxcbiAgdWw6IFtdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZUh0bWwodW5zYWZlSHRtbCwgYWxsb3dMaXN0LCBzYW5pdGl6ZUZuKSB7XG4gIGlmICghdW5zYWZlSHRtbC5sZW5ndGgpIHtcbiAgICByZXR1cm4gdW5zYWZlSHRtbFxuICB9XG5cbiAgaWYgKHNhbml0aXplRm4gJiYgdHlwZW9mIHNhbml0aXplRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gc2FuaXRpemVGbih1bnNhZmVIdG1sKVxuICB9XG5cbiAgY29uc3QgZG9tUGFyc2VyID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKVxuICBjb25zdCBjcmVhdGVkRG9jdW1lbnQgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKHVuc2FmZUh0bWwsICd0ZXh0L2h0bWwnKVxuICBjb25zdCBhbGxvd2xpc3RLZXlzID0gT2JqZWN0LmtleXMoYWxsb3dMaXN0KVxuICBjb25zdCBlbGVtZW50cyA9IFtdLmNvbmNhdCguLi5jcmVhdGVkRG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCcqJykpXG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgZWwgPSBlbGVtZW50c1tpXVxuICAgIGNvbnN0IGVsTmFtZSA9IGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcblxuICAgIGlmICghYWxsb3dsaXN0S2V5cy5pbmNsdWRlcyhlbE5hbWUpKSB7XG4gICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKVxuXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGNvbnN0IGF0dHJpYnV0ZUxpc3QgPSBbXS5jb25jYXQoLi4uZWwuYXR0cmlidXRlcylcbiAgICBjb25zdCBhbGxvd2VkQXR0cmlidXRlcyA9IFtdLmNvbmNhdChhbGxvd0xpc3RbJyonXSB8fCBbXSwgYWxsb3dMaXN0W2VsTmFtZV0gfHwgW10pXG5cbiAgICBhdHRyaWJ1dGVMaXN0LmZvckVhY2goYXR0ciA9PiB7XG4gICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGUoYXR0ciwgYWxsb3dlZEF0dHJpYnV0ZXMpKSB7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyLm5vZGVOYW1lKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gY3JlYXRlZERvY3VtZW50LmJvZHkuaW5uZXJIVE1MXG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IHRvb2x0aXAuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgKiBhcyBQb3BwZXIgZnJvbSAnQHBvcHBlcmpzL2NvcmUnXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZmluZFNoYWRvd1Jvb3QsXG4gIGdldEVsZW1lbnQsXG4gIGdldFVJRCxcbiAgaXNFbGVtZW50LFxuICBpc1JUTCxcbiAgbm9vcCxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCB7XG4gIERlZmF1bHRBbGxvd2xpc3QsXG4gIHNhbml0aXplSHRtbFxufSBmcm9tICcuL3V0aWwvc2FuaXRpemVyJ1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ3Rvb2x0aXAnXG5jb25zdCBEQVRBX0tFWSA9ICdicy50b29sdGlwJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IENMQVNTX1BSRUZJWCA9ICdicy10b29sdGlwJ1xuY29uc3QgQlNDTFNfUFJFRklYX1JFR0VYID0gbmV3IFJlZ0V4cChgKF58XFxcXHMpJHtDTEFTU19QUkVGSVh9XFxcXFMrYCwgJ2cnKVxuY29uc3QgRElTQUxMT1dFRF9BVFRSSUJVVEVTID0gbmV3IFNldChbJ3Nhbml0aXplJywgJ2FsbG93TGlzdCcsICdzYW5pdGl6ZUZuJ10pXG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhbmltYXRpb246ICdib29sZWFuJyxcbiAgdGVtcGxhdGU6ICdzdHJpbmcnLFxuICB0aXRsZTogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknLFxuICB0cmlnZ2VyOiAnc3RyaW5nJyxcbiAgZGVsYXk6ICcobnVtYmVyfG9iamVjdCknLFxuICBodG1sOiAnYm9vbGVhbicsXG4gIHNlbGVjdG9yOiAnKHN0cmluZ3xib29sZWFuKScsXG4gIHBsYWNlbWVudDogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgb2Zmc2V0OiAnKGFycmF5fHN0cmluZ3xmdW5jdGlvbiknLFxuICBjb250YWluZXI6ICcoc3RyaW5nfGVsZW1lbnR8Ym9vbGVhbiknLFxuICBmYWxsYmFja1BsYWNlbWVudHM6ICdhcnJheScsXG4gIGJvdW5kYXJ5OiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIGN1c3RvbUNsYXNzOiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICBzYW5pdGl6ZTogJ2Jvb2xlYW4nLFxuICBzYW5pdGl6ZUZuOiAnKG51bGx8ZnVuY3Rpb24pJyxcbiAgYWxsb3dMaXN0OiAnb2JqZWN0JyxcbiAgcG9wcGVyQ29uZmlnOiAnKG51bGx8b2JqZWN0fGZ1bmN0aW9uKSdcbn1cblxuY29uc3QgQXR0YWNobWVudE1hcCA9IHtcbiAgQVVUTzogJ2F1dG8nLFxuICBUT1A6ICd0b3AnLFxuICBSSUdIVDogaXNSVEwoKSA/ICdsZWZ0JyA6ICdyaWdodCcsXG4gIEJPVFRPTTogJ2JvdHRvbScsXG4gIExFRlQ6IGlzUlRMKCkgPyAncmlnaHQnIDogJ2xlZnQnXG59XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGFuaW1hdGlvbjogdHJ1ZSxcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PicgK1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICc8L2Rpdj4nLFxuICB0cmlnZ2VyOiAnaG92ZXIgZm9jdXMnLFxuICB0aXRsZTogJycsXG4gIGRlbGF5OiAwLFxuICBodG1sOiBmYWxzZSxcbiAgc2VsZWN0b3I6IGZhbHNlLFxuICBwbGFjZW1lbnQ6ICd0b3AnLFxuICBvZmZzZXQ6IFswLCAwXSxcbiAgY29udGFpbmVyOiBmYWxzZSxcbiAgZmFsbGJhY2tQbGFjZW1lbnRzOiBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLFxuICBib3VuZGFyeTogJ2NsaXBwaW5nUGFyZW50cycsXG4gIGN1c3RvbUNsYXNzOiAnJyxcbiAgc2FuaXRpemU6IHRydWUsXG4gIHNhbml0aXplRm46IG51bGwsXG4gIGFsbG93TGlzdDogRGVmYXVsdEFsbG93bGlzdCxcbiAgcG9wcGVyQ29uZmlnOiBudWxsXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBISURFOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTjogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIFNIT1c6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV046IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gIElOU0VSVEVEOiBgaW5zZXJ0ZWQke0VWRU5UX0tFWX1gLFxuICBDTElDSzogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNJTjogYGZvY3VzaW4ke0VWRU5UX0tFWX1gLFxuICBGT0NVU09VVDogYGZvY3Vzb3V0JHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VFTlRFUjogYG1vdXNlZW50ZXIke0VWRU5UX0tFWX1gLFxuICBNT1VTRUxFQVZFOiBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWBcbn1cblxuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX01PREFMID0gJ21vZGFsJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5cbmNvbnN0IEhPVkVSX1NUQVRFX1NIT1cgPSAnc2hvdydcbmNvbnN0IEhPVkVSX1NUQVRFX09VVCA9ICdvdXQnXG5cbmNvbnN0IFNFTEVDVE9SX1RPT0xUSVBfSU5ORVIgPSAnLnRvb2x0aXAtaW5uZXInXG5cbmNvbnN0IFRSSUdHRVJfSE9WRVIgPSAnaG92ZXInXG5jb25zdCBUUklHR0VSX0ZPQ1VTID0gJ2ZvY3VzJ1xuY29uc3QgVFJJR0dFUl9DTElDSyA9ICdjbGljaydcbmNvbnN0IFRSSUdHRVJfTUFOVUFMID0gJ21hbnVhbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIHRvb2x0aXBzIHJlcXVpcmUgUG9wcGVyIChodHRwczovL3BvcHBlci5qcy5vcmcpJylcbiAgICB9XG5cbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgLy8gcHJpdmF0ZVxuICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWVcbiAgICB0aGlzLl90aW1lb3V0ID0gMFxuICAgIHRoaXMuX2hvdmVyU3RhdGUgPSAnJ1xuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSB7fVxuICAgIHRoaXMuX3BvcHBlciA9IG51bGxcblxuICAgIC8vIFByb3RlY3RlZFxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy50aXAgPSBudWxsXG5cbiAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICBzdGF0aWMgZ2V0IEV2ZW50KCkge1xuICAgIHJldHVybiBFdmVudFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlXG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9IGZhbHNlXG4gIH1cblxuICB0b2dnbGVFbmFibGVkKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9ICF0aGlzLl9pc0VuYWJsZWRcbiAgfVxuXG4gIHRvZ2dsZShldmVudCkge1xuICAgIGlmICghdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpXG5cbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2sgPSAhY29udGV4dC5fYWN0aXZlVHJpZ2dlci5jbGlja1xuXG4gICAgICBpZiAoY29udGV4dC5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgIGNvbnRleHQuX2VudGVyKG51bGwsIGNvbnRleHQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0Ll9sZWF2ZShudWxsLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5nZXRUaXBFbGVtZW50KCkuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgICAgdGhpcy5fbGVhdmUobnVsbCwgdGhpcylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VudGVyKG51bGwsIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcblxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudC5jbG9zZXN0KGAuJHtDTEFTU19OQU1FX01PREFMfWApLCAnaGlkZS5icy5tb2RhbCcsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpXG5cbiAgICBpZiAodGhpcy50aXAgJiYgdGhpcy50aXAucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy50aXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnRpcClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgdXNlIHNob3cgb24gdmlzaWJsZSBlbGVtZW50cycpXG4gICAgfVxuXG4gICAgaWYgKCEodGhpcy5pc1dpdGhDb250ZW50KCkgJiYgdGhpcy5faXNFbmFibGVkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XKVxuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBmaW5kU2hhZG93Um9vdCh0aGlzLl9lbGVtZW50KVxuICAgIGNvbnN0IGlzSW5UaGVEb20gPSBzaGFkb3dSb290ID09PSBudWxsID9cbiAgICAgIHRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnModGhpcy5fZWxlbWVudCkgOlxuICAgICAgc2hhZG93Um9vdC5jb250YWlucyh0aGlzLl9lbGVtZW50KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkIHx8ICFpc0luVGhlRG9tKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIGNvbnN0IHRpcElkID0gZ2V0VUlEKHRoaXMuY29uc3RydWN0b3IuTkFNRSlcblxuICAgIHRpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGlwSWQpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCB0aXBJZClcblxuICAgIHRoaXMuc2V0Q29udGVudCgpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgdGlwLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFKVxuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlbWVudCA9IHR5cGVvZiB0aGlzLl9jb25maWcucGxhY2VtZW50ID09PSAnZnVuY3Rpb24nID9cbiAgICAgIHRoaXMuX2NvbmZpZy5wbGFjZW1lbnQuY2FsbCh0aGlzLCB0aXAsIHRoaXMuX2VsZW1lbnQpIDpcbiAgICAgIHRoaXMuX2NvbmZpZy5wbGFjZW1lbnRcblxuICAgIGNvbnN0IGF0dGFjaG1lbnQgPSB0aGlzLl9nZXRBdHRhY2htZW50KHBsYWNlbWVudClcbiAgICB0aGlzLl9hZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudClcblxuICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSB0aGlzLl9jb25maWdcbiAgICBEYXRhLnNldCh0aXAsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpXG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnModGhpcy50aXApKSB7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGlwKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5JTlNFUlRFRClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcG9wcGVyID0gUG9wcGVyLmNyZWF0ZVBvcHBlcih0aGlzLl9lbGVtZW50LCB0aXAsIHRoaXMuX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSlcbiAgICB9XG5cbiAgICB0aXAuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBjb25zdCBjdXN0b21DbGFzcyA9IHR5cGVvZiB0aGlzLl9jb25maWcuY3VzdG9tQ2xhc3MgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9jb25maWcuY3VzdG9tQ2xhc3MoKSA6IHRoaXMuX2NvbmZpZy5jdXN0b21DbGFzc1xuICAgIGlmIChjdXN0b21DbGFzcykge1xuICAgICAgdGlwLmNsYXNzTGlzdC5hZGQoLi4uY3VzdG9tQ2xhc3Muc3BsaXQoJyAnKSlcbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBFdmVudEhhbmRsZXIub24oZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgY29uc3QgcHJldkhvdmVyU3RhdGUgPSB0aGlzLl9ob3ZlclN0YXRlXG5cbiAgICAgIHRoaXMuX2hvdmVyU3RhdGUgPSBudWxsXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LlNIT1dOKVxuXG4gICAgICBpZiAocHJldkhvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX09VVCkge1xuICAgICAgICB0aGlzLl9sZWF2ZShudWxsLCB0aGlzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGlzQW5pbWF0ZWQgPSB0aGlzLnRpcC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKVxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMudGlwLCBpc0FuaW1hdGVkKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX3BvcHBlcikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ob3ZlclN0YXRlICE9PSBIT1ZFUl9TVEFURV9TSE9XICYmIHRpcC5wYXJlbnROb2RlKSB7XG4gICAgICAgIHRpcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRpcClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY2xlYW5UaXBDbGFzcygpXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkhJRERFTilcblxuICAgICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkhJREUpXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pXG4gICAgICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4gRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcCkpXG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0NMSUNLXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0ZPQ1VTXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0hPVkVSXSA9IGZhbHNlXG5cbiAgICBjb25zdCBpc0FuaW1hdGVkID0gdGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSlcbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLnRpcCwgaXNBbmltYXRlZClcbiAgICB0aGlzLl9ob3ZlclN0YXRlID0gJydcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcm90ZWN0ZWRcblxuICBpc1dpdGhDb250ZW50KCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuZ2V0VGl0bGUoKSlcbiAgfVxuXG4gIGdldFRpcEVsZW1lbnQoKSB7XG4gICAgaWYgKHRoaXMudGlwKSB7XG4gICAgICByZXR1cm4gdGhpcy50aXBcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMuX2NvbmZpZy50ZW1wbGF0ZVxuXG4gICAgdGhpcy50aXAgPSBlbGVtZW50LmNoaWxkcmVuWzBdXG4gICAgcmV0dXJuIHRoaXMudGlwXG4gIH1cblxuICBzZXRDb250ZW50KCkge1xuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgdGhpcy5zZXRFbGVtZW50Q29udGVudChTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX1RPT0xUSVBfSU5ORVIsIHRpcCksIHRoaXMuZ2V0VGl0bGUoKSlcbiAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0ZBREUsIENMQVNTX05BTUVfU0hPVylcbiAgfVxuXG4gIHNldEVsZW1lbnRDb250ZW50KGVsZW1lbnQsIGNvbnRlbnQpIHtcbiAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzRWxlbWVudChjb250ZW50KSkge1xuICAgICAgY29udGVudCA9IGdldEVsZW1lbnQoY29udGVudClcblxuICAgICAgLy8gY29udGVudCBpcyBhIERPTSBub2RlIG9yIGEgalF1ZXJ5XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmh0bWwpIHtcbiAgICAgICAgaWYgKGNvbnRlbnQucGFyZW50Tm9kZSAhPT0gZWxlbWVudCkge1xuICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJydcbiAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50LnRleHRDb250ZW50XG4gICAgICB9XG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcuaHRtbCkge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5zYW5pdGl6ZSkge1xuICAgICAgICBjb250ZW50ID0gc2FuaXRpemVIdG1sKGNvbnRlbnQsIHRoaXMuX2NvbmZpZy5hbGxvd0xpc3QsIHRoaXMuX2NvbmZpZy5zYW5pdGl6ZUZuKVxuICAgICAgfVxuXG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnRcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnRcbiAgICB9XG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICBsZXQgdGl0bGUgPSB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpXG5cbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICB0aXRsZSA9IHR5cGVvZiB0aGlzLl9jb25maWcudGl0bGUgPT09ICdmdW5jdGlvbicgP1xuICAgICAgICB0aGlzLl9jb25maWcudGl0bGUuY2FsbCh0aGlzLl9lbGVtZW50KSA6XG4gICAgICAgIHRoaXMuX2NvbmZpZy50aXRsZVxuICAgIH1cblxuICAgIHJldHVybiB0aXRsZVxuICB9XG5cbiAgdXBkYXRlQXR0YWNobWVudChhdHRhY2htZW50KSB7XG4gICAgaWYgKGF0dGFjaG1lbnQgPT09ICdyaWdodCcpIHtcbiAgICAgIHJldHVybiAnZW5kJ1xuICAgIH1cblxuICAgIGlmIChhdHRhY2htZW50ID09PSAnbGVmdCcpIHtcbiAgICAgIHJldHVybiAnc3RhcnQnXG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dGFjaG1lbnRcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfaW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVlcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCBEYXRhLmdldChldmVudC5kZWxlZ2F0ZVRhcmdldCwgZGF0YUtleSlcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGV2ZW50LmRlbGVnYXRlVGFyZ2V0LCB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpKVxuICAgICAgRGF0YS5zZXQoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIGRhdGFLZXksIGNvbnRleHQpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRleHRcbiAgfVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgeyBvZmZzZXQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gb2Zmc2V0LnNwbGl0KCcsJykubWFwKHZhbCA9PiBOdW1iZXIucGFyc2VJbnQodmFsLCAxMCkpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBwb3BwZXJEYXRhID0+IG9mZnNldChwb3BwZXJEYXRhLCB0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRcbiAgfVxuXG4gIF9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkge1xuICAgIGNvbnN0IGRlZmF1bHRCc1BvcHBlckNvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogYXR0YWNobWVudCxcbiAgICAgIG1vZGlmaWVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2ZsaXAnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGZhbGxiYWNrUGxhY2VtZW50czogdGhpcy5fY29uZmlnLmZhbGxiYWNrUGxhY2VtZW50c1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KClcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBib3VuZGFyeTogdGhpcy5fY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2Fycm93JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBlbGVtZW50OiBgLiR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FfS1hcnJvd2BcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnb25DaGFuZ2UnLFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgcGhhc2U6ICdhZnRlcldyaXRlJyxcbiAgICAgICAgICBmbjogZGF0YSA9PiB0aGlzLl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSlcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIG9uRmlyc3RVcGRhdGU6IGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YS5vcHRpb25zLnBsYWNlbWVudCAhPT0gZGF0YS5wbGFjZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5kZWZhdWx0QnNQb3BwZXJDb25maWcsXG4gICAgICAuLi4odHlwZW9mIHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnKGRlZmF1bHRCc1BvcHBlckNvbmZpZykgOiB0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnKVxuICAgIH1cbiAgfVxuXG4gIF9hZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudCkge1xuICAgIHRoaXMuZ2V0VGlwRWxlbWVudCgpLmNsYXNzTGlzdC5hZGQoYCR7Q0xBU1NfUFJFRklYfS0ke3RoaXMudXBkYXRlQXR0YWNobWVudChhdHRhY2htZW50KX1gKVxuICB9XG5cbiAgX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIEF0dGFjaG1lbnRNYXBbcGxhY2VtZW50LnRvVXBwZXJDYXNlKCldXG4gIH1cblxuICBfc2V0TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IHRyaWdnZXJzID0gdGhpcy5fY29uZmlnLnRyaWdnZXIuc3BsaXQoJyAnKVxuXG4gICAgdHJpZ2dlcnMuZm9yRWFjaCh0cmlnZ2VyID0+IHtcbiAgICAgIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkNMSUNLLCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMudG9nZ2xlKGV2ZW50KSlcbiAgICAgIH0gZWxzZSBpZiAodHJpZ2dlciAhPT0gVFJJR0dFUl9NQU5VQUwpIHtcbiAgICAgICAgY29uc3QgZXZlbnRJbiA9IHRyaWdnZXIgPT09IFRSSUdHRVJfSE9WRVIgP1xuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuTU9VU0VFTlRFUiA6XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5GT0NVU0lOXG4gICAgICAgIGNvbnN0IGV2ZW50T3V0ID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUxFQVZFIDpcbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTT1VUXG5cbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIGV2ZW50SW4sIHRoaXMuX2NvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5fZW50ZXIoZXZlbnQpKVxuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgZXZlbnRPdXQsIHRoaXMuX2NvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy5fbGVhdmUoZXZlbnQpKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudC5jbG9zZXN0KGAuJHtDTEFTU19OQU1FX01PREFMfWApLCAnaGlkZS5icy5tb2RhbCcsIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnNlbGVjdG9yKSB7XG4gICAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICAgIC4uLnRoaXMuX2NvbmZpZyxcbiAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgIHNlbGVjdG9yOiAnJ1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9maXhUaXRsZSgpXG4gICAgfVxuICB9XG5cbiAgX2ZpeFRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICBjb25zdCBvcmlnaW5hbFRpdGxlVHlwZSA9IHR5cGVvZiB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScpXG5cbiAgICBpZiAodGl0bGUgfHwgb3JpZ2luYWxUaXRsZVR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1icy1vcmlnaW5hbC10aXRsZScsIHRpdGxlIHx8ICcnKVxuICAgICAgaWYgKHRpdGxlICYmICF0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpICYmICF0aGlzLl9lbGVtZW50LnRleHRDb250ZW50KSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgdGl0bGUpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCd0aXRsZScsICcnKVxuICAgIH1cbiAgfVxuXG4gIF9lbnRlcihldmVudCwgY29udGV4dCkge1xuICAgIGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQsIGNvbnRleHQpXG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbXG4gICAgICAgIGV2ZW50LnR5cGUgPT09ICdmb2N1c2luJyA/IFRSSUdHRVJfRk9DVVMgOiBUUklHR0VSX0hPVkVSXG4gICAgICBdID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmIChjb250ZXh0LmdldFRpcEVsZW1lbnQoKS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSB8fCBjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIT1ZFUl9TVEFURV9TSE9XKSB7XG4gICAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSE9WRVJfU1RBVEVfU0hPV1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpXG5cbiAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSE9WRVJfU1RBVEVfU0hPV1xuXG4gICAgaWYgKCFjb250ZXh0Ll9jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuX2NvbmZpZy5kZWxheS5zaG93KSB7XG4gICAgICBjb250ZXh0LnNob3coKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX1NIT1cpIHtcbiAgICAgICAgY29udGV4dC5zaG93KClcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0Ll9jb25maWcuZGVsYXkuc2hvdylcbiAgfVxuXG4gIF9sZWF2ZShldmVudCwgY29udGV4dCkge1xuICAgIGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQsIGNvbnRleHQpXG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbXG4gICAgICAgIGV2ZW50LnR5cGUgPT09ICdmb2N1c291dCcgPyBUUklHR0VSX0ZPQ1VTIDogVFJJR0dFUl9IT1ZFUlxuICAgICAgXSA9IGNvbnRleHQuX2VsZW1lbnQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldClcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dC5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dClcblxuICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIT1ZFUl9TVEFURV9PVVRcblxuICAgIGlmICghY29udGV4dC5fY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0Ll9jb25maWcuZGVsYXkuaGlkZSkge1xuICAgICAgY29udGV4dC5oaWRlKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIT1ZFUl9TVEFURV9PVVQpIHtcbiAgICAgICAgY29udGV4dC5oaWRlKClcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0Ll9jb25maWcuZGVsYXkuaGlkZSlcbiAgfVxuXG4gIF9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkge1xuICAgIGZvciAoY29uc3QgdHJpZ2dlciBpbiB0aGlzLl9hY3RpdmVUcmlnZ2VyKSB7XG4gICAgICBpZiAodGhpcy5fYWN0aXZlVHJpZ2dlclt0cmlnZ2VyXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25zdCBkYXRhQXR0cmlidXRlcyA9IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpXG5cbiAgICBPYmplY3Qua2V5cyhkYXRhQXR0cmlidXRlcykuZm9yRWFjaChkYXRhQXR0ciA9PiB7XG4gICAgICBpZiAoRElTQUxMT1dFRF9BVFRSSUJVVEVTLmhhcyhkYXRhQXR0cikpIHtcbiAgICAgICAgZGVsZXRlIGRhdGFBdHRyaWJ1dGVzW2RhdGFBdHRyXVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25maWcgPSB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAuLi5kYXRhQXR0cmlidXRlcyxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSlcbiAgICB9XG5cbiAgICBjb25maWcuY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lciA9PT0gZmFsc2UgPyBkb2N1bWVudC5ib2R5IDogZ2V0RWxlbWVudChjb25maWcuY29udGFpbmVyKVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuZGVsYXkgPSB7XG4gICAgICAgIHNob3c6IGNvbmZpZy5kZWxheSxcbiAgICAgICAgaGlkZTogY29uZmlnLmRlbGF5XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGl0bGUgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcudGl0bGUgPSBjb25maWcudGl0bGUudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRlbnQgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcuY29udGVudCA9IGNvbmZpZy5jb250ZW50LnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKVxuXG4gICAgaWYgKGNvbmZpZy5zYW5pdGl6ZSkge1xuICAgICAgY29uZmlnLnRlbXBsYXRlID0gc2FuaXRpemVIdG1sKGNvbmZpZy50ZW1wbGF0ZSwgY29uZmlnLmFsbG93TGlzdCwgY29uZmlnLnNhbml0aXplRm4pXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldERlbGVnYXRlQ29uZmlnKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHt9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9jb25maWcpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtrZXldICE9PSB0aGlzLl9jb25maWdba2V5XSkge1xuICAgICAgICAgIGNvbmZpZ1trZXldID0gdGhpcy5fY29uZmlnW2tleV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9jbGVhblRpcENsYXNzKCkge1xuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgY29uc3QgdGFiQ2xhc3MgPSB0aXAuZ2V0QXR0cmlidXRlKCdjbGFzcycpLm1hdGNoKEJTQ0xTX1BSRUZJWF9SRUdFWClcbiAgICBpZiAodGFiQ2xhc3MgIT09IG51bGwgJiYgdGFiQ2xhc3MubGVuZ3RoID4gMCkge1xuICAgICAgdGFiQ2xhc3MubWFwKHRva2VuID0+IHRva2VuLnRyaW0oKSlcbiAgICAgICAgLmZvckVhY2godENsYXNzID0+IHRpcC5jbGFzc0xpc3QucmVtb3ZlKHRDbGFzcykpXG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShwb3BwZXJEYXRhKSB7XG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gcG9wcGVyRGF0YVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy50aXAgPSBzdGF0ZS5lbGVtZW50cy5wb3BwZXJcbiAgICB0aGlzLl9jbGVhblRpcENsYXNzKClcbiAgICB0aGlzLl9hZGRBdHRhY2htZW50Q2xhc3ModGhpcy5fZ2V0QXR0YWNobWVudChzdGF0ZS5wbGFjZW1lbnQpKVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gRGF0YS5nZXQodGhpcywgREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG5cbiAgICAgIGlmICghZGF0YSAmJiAvZGlzcG9zZXxoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFRvb2x0aXAodGhpcywgX2NvbmZpZylcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuVG9vbHRpcCB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihUb29sdGlwKVxuXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IHBvcG92ZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4gfSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdwb3BvdmVyJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMucG9wb3ZlcidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBDTEFTU19QUkVGSVggPSAnYnMtcG9wb3ZlcidcbmNvbnN0IEJTQ0xTX1BSRUZJWF9SRUdFWCA9IG5ldyBSZWdFeHAoYChefFxcXFxzKSR7Q0xBU1NfUFJFRklYfVxcXFxTK2AsICdnJylcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgLi4uVG9vbHRpcC5EZWZhdWx0LFxuICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gIG9mZnNldDogWzAsIDhdLFxuICB0cmlnZ2VyOiAnY2xpY2snLFxuICBjb250ZW50OiAnJyxcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIHJvbGU9XCJ0b29sdGlwXCI+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicG9wb3Zlci1hcnJvd1wiPjwvZGl2PicgK1xuICAgICAgICAgICAgICAgICc8aDMgY2xhc3M9XCJwb3BvdmVyLWhlYWRlclwiPjwvaDM+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicG9wb3Zlci1ib2R5XCI+PC9kaXY+JyArXG4gICAgICAgICAgICAnPC9kaXY+J1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgLi4uVG9vbHRpcC5EZWZhdWx0VHlwZSxcbiAgY29udGVudDogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBISURFOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTjogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIFNIT1c6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV046IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gIElOU0VSVEVEOiBgaW5zZXJ0ZWQke0VWRU5UX0tFWX1gLFxuICBDTElDSzogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNJTjogYGZvY3VzaW4ke0VWRU5UX0tFWX1gLFxuICBGT0NVU09VVDogYGZvY3Vzb3V0JHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VFTlRFUjogYG1vdXNlZW50ZXIke0VWRU5UX0tFWX1gLFxuICBNT1VTRUxFQVZFOiBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWBcbn1cblxuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuY29uc3QgU0VMRUNUT1JfVElUTEUgPSAnLnBvcG92ZXItaGVhZGVyJ1xuY29uc3QgU0VMRUNUT1JfQ09OVEVOVCA9ICcucG9wb3Zlci1ib2R5J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgUG9wb3ZlciBleHRlbmRzIFRvb2x0aXAge1xuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRXZlbnQoKSB7XG4gICAgcmV0dXJuIEV2ZW50XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgLy8gT3ZlcnJpZGVzXG5cbiAgaXNXaXRoQ29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUaXRsZSgpIHx8IHRoaXMuX2dldENvbnRlbnQoKVxuICB9XG5cbiAgc2V0Q29udGVudCgpIHtcbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuXG4gICAgLy8gd2UgdXNlIGFwcGVuZCBmb3IgaHRtbCBvYmplY3RzIHRvIG1haW50YWluIGpzIGV2ZW50c1xuICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9USVRMRSwgdGlwKSwgdGhpcy5nZXRUaXRsZSgpKVxuICAgIGxldCBjb250ZW50ID0gdGhpcy5fZ2V0Q29udGVudCgpXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb250ZW50ID0gY29udGVudC5jYWxsKHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5zZXRFbGVtZW50Q29udGVudChTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0NPTlRFTlQsIHRpcCksIGNvbnRlbnQpXG5cbiAgICB0aXAuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0ZBREUsIENMQVNTX05BTUVfU0hPVylcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpIHtcbiAgICB0aGlzLmdldFRpcEVsZW1lbnQoKS5jbGFzc0xpc3QuYWRkKGAke0NMQVNTX1BSRUZJWH0tJHt0aGlzLnVwZGF0ZUF0dGFjaG1lbnQoYXR0YWNobWVudCl9YClcbiAgfVxuXG4gIF9nZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1jb250ZW50JykgfHwgdGhpcy5fY29uZmlnLmNvbnRlbnRcbiAgfVxuXG4gIF9jbGVhblRpcENsYXNzKCkge1xuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgY29uc3QgdGFiQ2xhc3MgPSB0aXAuZ2V0QXR0cmlidXRlKCdjbGFzcycpLm1hdGNoKEJTQ0xTX1BSRUZJWF9SRUdFWClcbiAgICBpZiAodGFiQ2xhc3MgIT09IG51bGwgJiYgdGFiQ2xhc3MubGVuZ3RoID4gMCkge1xuICAgICAgdGFiQ2xhc3MubWFwKHRva2VuID0+IHRva2VuLnRyaW0oKSlcbiAgICAgICAgLmZvckVhY2godENsYXNzID0+IHRpcC5jbGFzc0xpc3QucmVtb3ZlKHRDbGFzcykpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gRGF0YS5nZXQodGhpcywgREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBudWxsXG5cbiAgICAgIGlmICghZGF0YSAmJiAvZGlzcG9zZXxoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFBvcG92ZXIodGhpcywgX2NvbmZpZylcbiAgICAgICAgRGF0YS5zZXQodGhpcywgREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLlBvcG92ZXIgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oUG9wb3ZlcilcblxuZXhwb3J0IGRlZmF1bHQgUG9wb3ZlclxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBzY3JvbGxzcHkuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQsXG4gIGdldFVJRCxcbiAgaXNFbGVtZW50LFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnc2Nyb2xsc3B5J1xuY29uc3QgREFUQV9LRVkgPSAnYnMuc2Nyb2xsc3B5J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIG9mZnNldDogMTAsXG4gIG1ldGhvZDogJ2F1dG8nLFxuICB0YXJnZXQ6ICcnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBvZmZzZXQ6ICdudW1iZXInLFxuICBtZXRob2Q6ICdzdHJpbmcnLFxuICB0YXJnZXQ6ICcoc3RyaW5nfGVsZW1lbnQpJ1xufVxuXG5jb25zdCBFVkVOVF9BQ1RJVkFURSA9IGBhY3RpdmF0ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NDUk9MTCA9IGBzY3JvbGwke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fSVRFTSA9ICdkcm9wZG93bi1pdGVtJ1xuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1NQWSA9ICdbZGF0YS1icy1zcHk9XCJzY3JvbGxcIl0nXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCA9ICcubmF2LCAubGlzdC1ncm91cCdcbmNvbnN0IFNFTEVDVE9SX05BVl9MSU5LUyA9ICcubmF2LWxpbmsnXG5jb25zdCBTRUxFQ1RPUl9OQVZfSVRFTVMgPSAnLm5hdi1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfTElTVF9JVEVNUyA9ICcubGlzdC1ncm91cC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV04gPSAnLmRyb3Bkb3duJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJy5kcm9wZG93bi10b2dnbGUnXG5cbmNvbnN0IE1FVEhPRF9PRkZTRVQgPSAnb2Zmc2V0J1xuY29uc3QgTUVUSE9EX1BPU0lUSU9OID0gJ3Bvc2l0aW9uJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgU2Nyb2xsU3B5IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG4gICAgdGhpcy5fc2Nyb2xsRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQudGFnTmFtZSA9PT0gJ0JPRFknID8gd2luZG93IDogdGhpcy5fZWxlbWVudFxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fc2VsZWN0b3IgPSBgJHt0aGlzLl9jb25maWcudGFyZ2V0fSAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7dGhpcy5fY29uZmlnLnRhcmdldH0gJHtTRUxFQ1RPUl9MSVNUX0lURU1TfSwgJHt0aGlzLl9jb25maWcudGFyZ2V0fSAuJHtDTEFTU19OQU1FX0RST1BET1dOX0lURU19YFxuICAgIHRoaXMuX29mZnNldHMgPSBbXVxuICAgIHRoaXMuX3RhcmdldHMgPSBbXVxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGxcbiAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSAwXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fc2Nyb2xsRWxlbWVudCwgRVZFTlRfU0NST0xMLCAoKSA9PiB0aGlzLl9wcm9jZXNzKCkpXG5cbiAgICB0aGlzLnJlZnJlc2goKVxuICAgIHRoaXMuX3Byb2Nlc3MoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IGF1dG9NZXRob2QgPSB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB0aGlzLl9zY3JvbGxFbGVtZW50LndpbmRvdyA/XG4gICAgICBNRVRIT0RfT0ZGU0VUIDpcbiAgICAgIE1FVEhPRF9QT1NJVElPTlxuXG4gICAgY29uc3Qgb2Zmc2V0TWV0aG9kID0gdGhpcy5fY29uZmlnLm1ldGhvZCA9PT0gJ2F1dG8nID9cbiAgICAgIGF1dG9NZXRob2QgOlxuICAgICAgdGhpcy5fY29uZmlnLm1ldGhvZFxuXG4gICAgY29uc3Qgb2Zmc2V0QmFzZSA9IG9mZnNldE1ldGhvZCA9PT0gTUVUSE9EX1BPU0lUSU9OID9cbiAgICAgIHRoaXMuX2dldFNjcm9sbFRvcCgpIDpcbiAgICAgIDBcblxuICAgIHRoaXMuX29mZnNldHMgPSBbXVxuICAgIHRoaXMuX3RhcmdldHMgPSBbXVxuICAgIHRoaXMuX3Njcm9sbEhlaWdodCA9IHRoaXMuX2dldFNjcm9sbEhlaWdodCgpXG5cbiAgICBjb25zdCB0YXJnZXRzID0gU2VsZWN0b3JFbmdpbmUuZmluZCh0aGlzLl9zZWxlY3RvcilcblxuICAgIHRhcmdldHMubWFwKGVsZW1lbnQgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG4gICAgICBjb25zdCB0YXJnZXQgPSB0YXJnZXRTZWxlY3RvciA/IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUodGFyZ2V0U2VsZWN0b3IpIDogbnVsbFxuXG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldEJDUiA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICBpZiAodGFyZ2V0QkNSLndpZHRoIHx8IHRhcmdldEJDUi5oZWlnaHQpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgTWFuaXB1bGF0b3Jbb2Zmc2V0TWV0aG9kXSh0YXJnZXQpLnRvcCArIG9mZnNldEJhc2UsXG4gICAgICAgICAgICB0YXJnZXRTZWxlY3RvclxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH0pXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSlcbiAgICAgIC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICB0aGlzLl9vZmZzZXRzLnB1c2goaXRlbVswXSlcbiAgICAgICAgdGhpcy5fdGFyZ2V0cy5wdXNoKGl0ZW1bMV0pXG4gICAgICB9KVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX3Njcm9sbEVsZW1lbnQsIEVWRU5UX0tFWSlcbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KSxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSlcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50YXJnZXQgIT09ICdzdHJpbmcnICYmIGlzRWxlbWVudChjb25maWcudGFyZ2V0KSkge1xuICAgICAgbGV0IHsgaWQgfSA9IGNvbmZpZy50YXJnZXRcbiAgICAgIGlmICghaWQpIHtcbiAgICAgICAgaWQgPSBnZXRVSUQoTkFNRSlcbiAgICAgICAgY29uZmlnLnRhcmdldC5pZCA9IGlkXG4gICAgICB9XG5cbiAgICAgIGNvbmZpZy50YXJnZXQgPSBgIyR7aWR9YFxuICAgIH1cblxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldFNjcm9sbFRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gd2luZG93ID9cbiAgICAgIHRoaXMuX3Njcm9sbEVsZW1lbnQucGFnZVlPZmZzZXQgOlxuICAgICAgdGhpcy5fc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3BcbiAgfVxuXG4gIF9nZXRTY3JvbGxIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IHx8IE1hdGgubWF4KFxuICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0XG4gICAgKVxuICB9XG5cbiAgX2dldE9mZnNldEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gd2luZG93ID9cbiAgICAgIHdpbmRvdy5pbm5lckhlaWdodCA6XG4gICAgICB0aGlzLl9zY3JvbGxFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICB9XG5cbiAgX3Byb2Nlc3MoKSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5fZ2V0U2Nyb2xsVG9wKCkgKyB0aGlzLl9jb25maWcub2Zmc2V0XG4gICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5fZ2V0U2Nyb2xsSGVpZ2h0KClcbiAgICBjb25zdCBtYXhTY3JvbGwgPSB0aGlzLl9jb25maWcub2Zmc2V0ICsgc2Nyb2xsSGVpZ2h0IC0gdGhpcy5fZ2V0T2Zmc2V0SGVpZ2h0KClcblxuICAgIGlmICh0aGlzLl9zY3JvbGxIZWlnaHQgIT09IHNjcm9sbEhlaWdodCkge1xuICAgICAgdGhpcy5yZWZyZXNoKClcbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsVG9wID49IG1heFNjcm9sbCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5fdGFyZ2V0c1t0aGlzLl90YXJnZXRzLmxlbmd0aCAtIDFdXG5cbiAgICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXQgIT09IHRhcmdldCkge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0YXJnZXQpXG4gICAgICB9XG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXQgJiYgc2Nyb2xsVG9wIDwgdGhpcy5fb2Zmc2V0c1swXSAmJiB0aGlzLl9vZmZzZXRzWzBdID4gMCkge1xuICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbFxuICAgICAgdGhpcy5fY2xlYXIoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuX29mZnNldHMubGVuZ3RoOyBpLS07KSB7XG4gICAgICBjb25zdCBpc0FjdGl2ZVRhcmdldCA9IHRoaXMuX2FjdGl2ZVRhcmdldCAhPT0gdGhpcy5fdGFyZ2V0c1tpXSAmJlxuICAgICAgICAgIHNjcm9sbFRvcCA+PSB0aGlzLl9vZmZzZXRzW2ldICYmXG4gICAgICAgICAgKHR5cGVvZiB0aGlzLl9vZmZzZXRzW2kgKyAxXSA9PT0gJ3VuZGVmaW5lZCcgfHwgc2Nyb2xsVG9wIDwgdGhpcy5fb2Zmc2V0c1tpICsgMV0pXG5cbiAgICAgIGlmIChpc0FjdGl2ZVRhcmdldCkge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0aGlzLl90YXJnZXRzW2ldKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9hY3RpdmF0ZSh0YXJnZXQpIHtcbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSB0YXJnZXRcblxuICAgIHRoaXMuX2NsZWFyKClcblxuICAgIGNvbnN0IHF1ZXJpZXMgPSB0aGlzLl9zZWxlY3Rvci5zcGxpdCgnLCcpXG4gICAgICAubWFwKHNlbGVjdG9yID0+IGAke3NlbGVjdG9yfVtkYXRhLWJzLXRhcmdldD1cIiR7dGFyZ2V0fVwiXSwke3NlbGVjdG9yfVtocmVmPVwiJHt0YXJnZXR9XCJdYClcblxuICAgIGNvbnN0IGxpbmsgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKHF1ZXJpZXMuam9pbignLCcpKVxuXG4gICAgaWYgKGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUERPV05fSVRFTSkpIHtcbiAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFLCBsaW5rLmNsb3Nlc3QoU0VMRUNUT1JfRFJPUERPV04pKVxuICAgICAgICAuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgbGluay5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTZXQgdHJpZ2dlcmVkIGxpbmsgYXMgYWN0aXZlXG4gICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICAgIFNlbGVjdG9yRW5naW5lLnBhcmVudHMobGluaywgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVApXG4gICAgICAgIC5mb3JFYWNoKGxpc3RHcm91cCA9PiB7XG4gICAgICAgICAgLy8gU2V0IHRyaWdnZXJlZCBsaW5rcyBwYXJlbnRzIGFzIGFjdGl2ZVxuICAgICAgICAgIC8vIFdpdGggYm90aCA8dWw+IGFuZCA8bmF2PiBtYXJrdXAgYSBwYXJlbnQgaXMgdGhlIHByZXZpb3VzIHNpYmxpbmcgb2YgYW55IG5hdiBhbmNlc3RvclxuICAgICAgICAgIFNlbGVjdG9yRW5naW5lLnByZXYobGlzdEdyb3VwLCBgJHtTRUxFQ1RPUl9OQVZfTElOS1N9LCAke1NFTEVDVE9SX0xJU1RfSVRFTVN9YClcbiAgICAgICAgICAgIC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKSlcblxuICAgICAgICAgIC8vIEhhbmRsZSBzcGVjaWFsIGNhc2Ugd2hlbiAubmF2LWxpbmsgaXMgaW5zaWRlIC5uYXYtaXRlbVxuICAgICAgICAgIFNlbGVjdG9yRW5naW5lLnByZXYobGlzdEdyb3VwLCBTRUxFQ1RPUl9OQVZfSVRFTVMpXG4gICAgICAgICAgICAuZm9yRWFjaChuYXZJdGVtID0+IHtcbiAgICAgICAgICAgICAgU2VsZWN0b3JFbmdpbmUuY2hpbGRyZW4obmF2SXRlbSwgU0VMRUNUT1JfTkFWX0xJTktTKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fc2Nyb2xsRWxlbWVudCwgRVZFTlRfQUNUSVZBVEUsIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRhcmdldFxuICAgIH0pXG4gIH1cblxuICBfY2xlYXIoKSB7XG4gICAgU2VsZWN0b3JFbmdpbmUuZmluZCh0aGlzLl9zZWxlY3RvcilcbiAgICAgIC5maWx0ZXIobm9kZSA9PiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSkpXG4gICAgICAuZm9yRWFjaChub2RlID0+IG5vZGUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSkpXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFNjcm9sbFNweS5nZXRJbnN0YW5jZSh0aGlzKSB8fCBuZXcgU2Nyb2xsU3B5KHRoaXMsIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDoge30pXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfU1BZKVxuICAgIC5mb3JFYWNoKHNweSA9PiBuZXcgU2Nyb2xsU3B5KHNweSkpXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuU2Nyb2xsU3B5IHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFNjcm9sbFNweSlcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsU3B5XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IHRhYi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgaXNEaXNhYmxlZCxcbiAgcmVmbG93XG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0YWInXG5jb25zdCBEQVRBX0tFWSA9ICdicy50YWInXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fTUVOVSA9ICdkcm9wZG93bi1tZW51J1xuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuY29uc3QgU0VMRUNUT1JfRFJPUERPV04gPSAnLmRyb3Bkb3duJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAgPSAnLm5hdiwgLmxpc3QtZ3JvdXAnXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkUgPSAnLmFjdGl2ZSdcbmNvbnN0IFNFTEVDVE9SX0FDVElWRV9VTCA9ICc6c2NvcGUgPiBsaSA+IC5hY3RpdmUnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJ0YWJcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cImxpc3RcIl0nXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnLmRyb3Bkb3duLXRvZ2dsZSdcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX0FDVElWRV9DSElMRCA9ICc6c2NvcGUgPiAuZHJvcGRvd24tbWVudSAuYWN0aXZlJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgVGFiIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHNob3coKSB7XG4gICAgaWYgKCh0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgJiZcbiAgICAgIHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiZcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQUNUSVZFKSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBwcmV2aW91c1xuICAgIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcy5fZWxlbWVudClcbiAgICBjb25zdCBsaXN0RWxlbWVudCA9IHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUClcblxuICAgIGlmIChsaXN0RWxlbWVudCkge1xuICAgICAgY29uc3QgaXRlbVNlbGVjdG9yID0gbGlzdEVsZW1lbnQubm9kZU5hbWUgPT09ICdVTCcgfHwgbGlzdEVsZW1lbnQubm9kZU5hbWUgPT09ICdPTCcgPyBTRUxFQ1RPUl9BQ1RJVkVfVUwgOiBTRUxFQ1RPUl9BQ1RJVkVcbiAgICAgIHByZXZpb3VzID0gU2VsZWN0b3JFbmdpbmUuZmluZChpdGVtU2VsZWN0b3IsIGxpc3RFbGVtZW50KVxuICAgICAgcHJldmlvdXMgPSBwcmV2aW91c1twcmV2aW91cy5sZW5ndGggLSAxXVxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IHByZXZpb3VzID9cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHByZXZpb3VzLCBFVkVOVF9ISURFLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH0pIDpcbiAgICAgIG51bGxcblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZpb3VzXG4gICAgfSlcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCAoaGlkZUV2ZW50ICE9PSBudWxsICYmIGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZhdGUodGhpcy5fZWxlbWVudCwgbGlzdEVsZW1lbnQpXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHByZXZpb3VzLCBFVkVOVF9ISURERU4sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfSlcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZpb3VzXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHRoaXMuX2FjdGl2YXRlKHRhcmdldCwgdGFyZ2V0LnBhcmVudE5vZGUsIGNvbXBsZXRlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9hY3RpdmF0ZShlbGVtZW50LCBjb250YWluZXIsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYWN0aXZlRWxlbWVudHMgPSBjb250YWluZXIgJiYgKGNvbnRhaW5lci5ub2RlTmFtZSA9PT0gJ1VMJyB8fCBjb250YWluZXIubm9kZU5hbWUgPT09ICdPTCcpID9cbiAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfQUNUSVZFX1VMLCBjb250YWluZXIpIDpcbiAgICAgIFNlbGVjdG9yRW5naW5lLmNoaWxkcmVuKGNvbnRhaW5lciwgU0VMRUNUT1JfQUNUSVZFKVxuXG4gICAgY29uc3QgYWN0aXZlID0gYWN0aXZlRWxlbWVudHNbMF1cbiAgICBjb25zdCBpc1RyYW5zaXRpb25pbmcgPSBjYWxsYmFjayAmJiAoYWN0aXZlICYmIGFjdGl2ZS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKSlcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4gdGhpcy5fdHJhbnNpdGlvbkNvbXBsZXRlKGVsZW1lbnQsIGFjdGl2ZSwgY2FsbGJhY2spXG5cbiAgICBpZiAoYWN0aXZlICYmIGlzVHJhbnNpdGlvbmluZykge1xuICAgICAgYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgZWxlbWVudCwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIF90cmFuc2l0aW9uQ29tcGxldGUoZWxlbWVudCwgYWN0aXZlLCBjYWxsYmFjaykge1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICBjb25zdCBkcm9wZG93bkNoaWxkID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9EUk9QRE9XTl9BQ1RJVkVfQ0hJTEQsIGFjdGl2ZS5wYXJlbnROb2RlKVxuXG4gICAgICBpZiAoZHJvcGRvd25DaGlsZCkge1xuICAgICAgICBkcm9wZG93bkNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICB9XG5cbiAgICAgIGlmIChhY3RpdmUuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICd0YWInKSB7XG4gICAgICAgIGFjdGl2ZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICd0YWInKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHRydWUpXG4gICAgfVxuXG4gICAgcmVmbG93KGVsZW1lbnQpXG5cbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcbiAgICB9XG5cbiAgICBsZXQgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQubm9kZU5hbWUgPT09ICdMSScpIHtcbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXG4gICAgfVxuXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUERPV05fTUVOVSkpIHtcbiAgICAgIGNvbnN0IGRyb3Bkb3duRWxlbWVudCA9IGVsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9EUk9QRE9XTilcblxuICAgICAgaWYgKGRyb3Bkb3duRWxlbWVudCkge1xuICAgICAgICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSwgZHJvcGRvd25FbGVtZW50KVxuICAgICAgICAgIC5mb3JFYWNoKGRyb3Bkb3duID0+IGRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuICAgICAgfVxuXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgfVxuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBEYXRhLmdldCh0aGlzLCBEQVRBX0tFWSkgfHwgbmV3IFRhYih0aGlzKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSBEYXRhLmdldCh0aGlzLCBEQVRBX0tFWSkgfHwgbmV3IFRhYih0aGlzKVxuICBkYXRhLnNob3coKVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLlRhYiB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihUYWIpXG5cbmV4cG9ydCBkZWZhdWx0IFRhYlxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiB0b2FzdC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgcmVmbG93LFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAndG9hc3QnXG5jb25zdCBEQVRBX0tFWSA9ICdicy50b2FzdCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5cbmNvbnN0IEVWRU5UX0NMSUNLX0RJU01JU1MgPSBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFT1ZFUiA9IGBtb3VzZW92ZXIke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRU9VVCA9IGBtb3VzZW91dCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTT1VUID0gYGZvY3Vzb3V0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfSElERSA9ICdoaWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX1NIT1dJTkcgPSAnc2hvd2luZydcblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGFuaW1hdGlvbjogJ2Jvb2xlYW4nLFxuICBhdXRvaGlkZTogJ2Jvb2xlYW4nLFxuICBkZWxheTogJ251bWJlcidcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYW5pbWF0aW9uOiB0cnVlLFxuICBhdXRvaGlkZTogdHJ1ZSxcbiAgZGVsYXk6IDUwMDBcbn1cblxuY29uc3QgU0VMRUNUT1JfREFUQV9ESVNNSVNTID0gJ1tkYXRhLWJzLWRpc21pc3M9XCJ0b2FzdFwiXSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFRvYXN0IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG4gICAgdGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbiA9IGZhbHNlXG4gICAgdGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbiA9IGZhbHNlXG4gICAgdGhpcy5fc2V0TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHNob3coKSB7XG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVylcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY2xlYXJUaW1lb3V0KClcblxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFKVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPV0lORylcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOKVxuXG4gICAgICB0aGlzLl9tYXliZVNjaGVkdWxlSGlkZSgpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfSElERSlcbiAgICByZWZsb3codGhpcy5fZWxlbWVudClcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XSU5HKVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdGhpcy5fY29uZmlnLmFuaW1hdGlvbilcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0hJREUpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0aGlzLl9jb25maWcuYW5pbWF0aW9uKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9jbGVhclRpbWVvdXQoKVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgfVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCksXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pXG4gICAgfVxuXG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZSlcblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9tYXliZVNjaGVkdWxlSGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5hdXRvaGlkZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb24gfHwgdGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9LCB0aGlzLl9jb25maWcuZGVsYXkpXG4gIH1cblxuICBfb25JbnRlcmFjdGlvbihldmVudCwgaXNJbnRlcmFjdGluZykge1xuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSAnbW91c2VvdmVyJzpcbiAgICAgIGNhc2UgJ21vdXNlb3V0JzpcbiAgICAgICAgdGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbiA9IGlzSW50ZXJhY3RpbmdcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2ZvY3VzaW4nOlxuICAgICAgY2FzZSAnZm9jdXNvdXQnOlxuICAgICAgICB0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uID0gaXNJbnRlcmFjdGluZ1xuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpZiAoaXNJbnRlcmFjdGluZykge1xuICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0KClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZXZlbnQucmVsYXRlZFRhcmdldFxuICAgIGlmICh0aGlzLl9lbGVtZW50ID09PSBuZXh0RWxlbWVudCB8fCB0aGlzLl9lbGVtZW50LmNvbnRhaW5zKG5leHRFbGVtZW50KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fbWF5YmVTY2hlZHVsZUhpZGUoKVxuICB9XG5cbiAgX3NldExpc3RlbmVycygpIHtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0tfRElTTUlTUywgU0VMRUNUT1JfREFUQV9ESVNNSVNTLCAoKSA9PiB0aGlzLmhpZGUoKSlcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VPVkVSLCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCB0cnVlKSlcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VPVVQsIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIGZhbHNlKSlcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfRk9DVVNJTiwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgdHJ1ZSkpXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0ZPQ1VTT1VULCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCBmYWxzZSkpXG4gIH1cblxuICBfY2xlYXJUaW1lb3V0KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSBEYXRhLmdldCh0aGlzLCBEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWdcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgVG9hc3QodGhpcywgX2NvbmZpZylcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLlRvYXN0IHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFRvYXN0KVxuXG5leHBvcnQgZGVmYXVsdCBUb2FzdFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBpbmRleC51bWQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgQWxlcnQgZnJvbSAnLi9zcmMvYWxlcnQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vc3JjL2J1dHRvbidcbmltcG9ydCBDYXJvdXNlbCBmcm9tICcuL3NyYy9jYXJvdXNlbCdcbmltcG9ydCBDb2xsYXBzZSBmcm9tICcuL3NyYy9jb2xsYXBzZSdcbmltcG9ydCBEcm9wZG93biBmcm9tICcuL3NyYy9kcm9wZG93bidcbmltcG9ydCBNb2RhbCBmcm9tICcuL3NyYy9tb2RhbCdcbmltcG9ydCBPZmZjYW52YXMgZnJvbSAnLi9zcmMvb2ZmY2FudmFzJ1xuaW1wb3J0IFBvcG92ZXIgZnJvbSAnLi9zcmMvcG9wb3ZlcidcbmltcG9ydCBTY3JvbGxTcHkgZnJvbSAnLi9zcmMvc2Nyb2xsc3B5J1xuaW1wb3J0IFRhYiBmcm9tICcuL3NyYy90YWInXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi9zcmMvdG9hc3QnXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3NyYy90b29sdGlwJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEFsZXJ0LFxuICBCdXR0b24sXG4gIENhcm91c2VsLFxuICBDb2xsYXBzZSxcbiAgRHJvcGRvd24sXG4gIE1vZGFsLFxuICBPZmZjYW52YXMsXG4gIFBvcG92ZXIsXG4gIFNjcm9sbFNweSxcbiAgVGFiLFxuICBUb2FzdCxcbiAgVG9vbHRpcFxufVxuIiwiY29uc3QgZm9ybVByb2ZpbGVDaGFuZ2VQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5mb3JtX19wcm9maWxlLWNoYW5nZS1wYXNzd29yZFwiXHJcbiAgKSxcclxuICBjaGFuZ2VQYXNzd29yZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhbmdlX19wYXNzd29yZC1idG5cIiksXHJcbiAgdG9nZ2xlU2hvd1Bhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaG93X19wYXNzd29yZFwiKSxcclxuICBwYXNzd29yZElucHV0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoYW5nZV9fcGFzc3dvcmQtZmllbGRcIiksXHJcbiAgcGFzc3dvcmRDaGVja2VySW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFzc3dvcmRfX2NoZWNrZXJcIiksXHJcbiAgY2lybGNlQ2hlY2tJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5iaS1jaGVjay1jaXJjbGUtZmlsbFwiKSxcclxuICBsb2FkaW5nU3Bpbm5lckNoYW5nZVBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmNoYW5nZV9fcGFzc3dvcmQtbG9hZGluZy1zcGlubmVyXCJcclxuICApLFxyXG4gIGFsZXJ0Qm94Q2hhbmdlUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFsZXJ0X19jaGFuZ2UtcGFzc3dvcmRcIiksXHJcbiAgYWxlcnRNZXNzYWdlQ2hhbmdlUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgXCIuY2hhbmdlX19wYXNzd29yZC1hbGVydC1tZXNzYWdlXCJcclxuICApO1xyXG5cclxuLyogUGFzc3dvcmQgaW5wdXQgZmllbGQgaW4gYXJyYXkgXHJcbjEuIGlucHV0WzBdID0gQ3VycmVudCBQYXNzd29yZFxyXG4yLiBpbnB1dFsxXSA9IE5ldyBQYXNzd29yZFxyXG4zLiBpbnB1dFsyXSA9IENvbmZpcm0gTmV3IFBhc3N3b3JkXHJcbiAqL1xyXG5cclxuLy90b2dnbGUgc2hvdyBwYXNzd29yZCBmb3IgYWxsIHBhc3N3b3JkIGlucHV0IGZpZWxkXHJcbnRvZ2dsZVNob3dQYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHBhc3N3b3JkSW5wdXRGaWVsZC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCB0eXBlID0gaXRlbS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpID09PSBcInBhc3N3b3JkXCIgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIjtcclxuICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwidHlwZVwiLCB0eXBlKTtcclxuICAgIGlmICh0b2dnbGVTaG93UGFzc3dvcmQuY2hlY2tlZCkge1xyXG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdHlwZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdHlwZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuLy9wYXNzd29yZCBjaGVja2VyIHBhc3dvcmQgbGVuZ3RoIHNob3VsZCBiZSA4IGNoYXJhY3RlcnMgbG9uZ1xyXG5wYXNzd29yZElucHV0RmllbGRbMV0uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHBhc3N3b3JkQ2hlY2tlckluZm9bMF0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICBpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoID49IDgpIHtcclxuICAgIHBhc3N3b3JkQ2hlY2tlckluZm9bMF0uY2xhc3NMaXN0LnJlbW92ZShcInRleHQtZGFuZ2VyXCIpO1xyXG4gICAgcGFzc3dvcmRDaGVja2VySW5mb1swXS5jbGFzc0xpc3QuYWRkKFwidGV4dC1zdWNjZXNzXCIpO1xyXG4gICAgY2lybGNlQ2hlY2tJY29uWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBhc3N3b3JkQ2hlY2tlckluZm9bMF0uY2xhc3NMaXN0LnJlbW92ZShcInRleHQtc3VjY2Vzc1wiKTtcclxuICAgIHBhc3N3b3JkQ2hlY2tlckluZm9bMF0uY2xhc3NMaXN0LmFkZChcInRleHQtZGFuZ2VyXCIpO1xyXG4gICAgY2lybGNlQ2hlY2tJY29uWzBdLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vY29uZmlybSBwYXNzd29yZCB0byBjaGVjayBpZiB0aGlzIGNvbmZpcm0gcGFzc3dvcmQgYXJlIGVxdWFscyB0byBuZXcgcGFzc3dvcmRcclxucGFzc3dvcmRJbnB1dEZpZWxkWzJdLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBwYXNzd29yZENoZWNrZXJJbmZvWzFdLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcblxyXG4gIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gcGFzc3dvcmRJbnB1dEZpZWxkWzFdLnZhbHVlKSB7XHJcbiAgICBwYXNzd29yZENoZWNrZXJJbmZvWzFdLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LWRhbmdlclwiKTtcclxuICAgIHBhc3N3b3JkQ2hlY2tlckluZm9bMV0uY2xhc3NMaXN0LmFkZChcInRleHQtc3VjY2Vzc1wiKTtcclxuICAgIHBhc3N3b3JkQ2hlY2tlckluZm9bMV0uaW5uZXJIVE1MID0gYFBhc3N3b3JkIG1hdGNoZWQuIDxpIGNsYXNzPVwiYmkgYmktY2hlY2stY2lyY2xlLWZpbGwgZl9zaXplLTFcIj48L2k+YDtcclxuICAgIGNoYW5nZVBhc3N3b3JkQnRuLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwYXNzd29yZENoZWNrZXJJbmZvWzFdLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LXN1Y2Nlc3NcIik7XHJcbiAgICBwYXNzd29yZENoZWNrZXJJbmZvWzFdLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWRhbmdlclwiKTtcclxuICAgIHBhc3N3b3JkQ2hlY2tlckluZm9bMV0uaW5uZXJIVE1MID0gYFBhc3N3b3JkIG1hdGNoZWQuYDtcclxuICAgIGNoYW5nZVBhc3N3b3JkQnRuLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy9zdWJtaXQgY2hhbmdlIHBhc3N3b3JkIHJlcXVlc3RcclxuZm9ybVByb2ZpbGVDaGFuZ2VQYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGxvYWRpbmdTcGlubmVyQ2hhbmdlUGFzc3dvcmQuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICBjaGFuZ2VQYXNzd29yZEJ0bi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgY29uc3Qgc2VuZENoYW5nZVBhc3N3b3JkUmVxdWVzdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGNoYW5nZVBhc3N3b3JkVVJMID0gXCIvY2hhbmdlLXBhc3N3b3JkXCI7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAocGFzc3dvcmRJbnB1dEZpZWxkWzFdLnZhbHVlID09PSBwYXNzd29yZElucHV0RmllbGRbMl0udmFsdWUpIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGNoYW5nZVBhc3N3b3JkVVJMLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1vZGU6IFwiY29yc1wiLFxyXG4gICAgICAgICAgY2FjaGU6IFwibm8tY2FjaGVcIixcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgY3VycmVudF9wYXNzd29yZDogcGFzc3dvcmRJbnB1dEZpZWxkWzBdLnZhbHVlLFxyXG4gICAgICAgICAgICBuZXdfcGFzc3dvcmQ6IHBhc3N3b3JkSW5wdXRGaWVsZFsxXS52YWx1ZSxcclxuICAgICAgICAgICAgY29uZmlybV9uZXdfcGFzc3dvcmQ6IHBhc3N3b3JkSW5wdXRGaWVsZFsyXS52YWx1ZSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHNlbmRDaGFuZ2VQYXNzd29yZFJlcXVlc3QoKVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBsb2FkaW5nU3Bpbm5lckNoYW5nZVBhc3N3b3JkLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XHJcbiAgICAgIGlmIChyZXMuZXJyb3IpIHtcclxuICAgICAgICBhbGVydEJveENoYW5nZVBhc3N3b3JkWzFdLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcbiAgICAgICAgYWxlcnRCb3hDaGFuZ2VQYXNzd29yZFsxXS5jbGFzc0xpc3QuYWRkKFwiZXJyb3JfX3NoYWtlXCIpO1xyXG4gICAgICAgIGFsZXJ0TWVzc2FnZUNoYW5nZVBhc3N3b3JkWzFdLnRleHRDb250ZW50ID0gcmVzLmVycm9yX21lc3NhZ2U7XHJcbiAgICAgICAgcGFzc3dvcmRDaGVja2VySW5mby5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIikpO1xyXG4gICAgICAgIHBhc3N3b3JkSW5wdXRGaWVsZC5mb3JFYWNoKChpdGVtKSA9PiAoaXRlbS52YWx1ZSA9IFwiXCIpKTtcclxuICAgICAgICBjaGFuZ2VQYXNzd29yZEJ0bi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBhbGVydEJveENoYW5nZVBhc3N3b3JkWzFdLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XHJcbiAgICAgICAgfSwgNjAwMCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgYWxlcnRCb3hDaGFuZ2VQYXNzd29yZFswXS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xyXG4gICAgICAgIGFsZXJ0TWVzc2FnZUNoYW5nZVBhc3N3b3JkWzBdLnRleHRDb250ZW50ID0gcmVzLnN1Y2Nlc3NfbWVzc2FnZTtcclxuICAgICAgICBwYXNzd29yZENoZWNrZXJJbmZvLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKSk7XHJcbiAgICAgICAgcGFzc3dvcmRJbnB1dEZpZWxkLmZvckVhY2goKGl0ZW0pID0+IChpdGVtLnZhbHVlID0gXCJcIikpO1xyXG4gICAgICAgIGNoYW5nZVBhc3N3b3JkQnRuLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGFsZXJ0Qm94Q2hhbmdlUGFzc3dvcmRbMF0uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcclxuICAgICAgICB9LCA2MDAwKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIH0pO1xyXG59KTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuaW1wb3J0IHJlbmRlckNvbW1lbnRzIGZyb20gXCIuL2ZldGNoLWNvbW1lbnRcIjtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGFzeW5jICgpID0+IHtcclxuICBjb25zdCBidG5Db21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5fX2NvbW1lbnRcIik7XHJcbiAgY29uc3QgY29tbWVudEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX2NvbW1lbnRcIik7XHJcbiAgY29uc3QgbG9hZGluZ1NwaW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmctc3Bpbm5lclwiKTtcclxuICBjb25zdCBzZXNzaW9uVHJpZ2dlckZvY3VzU3RvcmFnZSA9IHNlc3Npb25TdG9yYWdlO1xyXG4gIGNvbnN0IE5FV19DT01NRU5UID0gXCJuZXdfY29tbWVudFwiO1xyXG4gIGNvbnN0IGNvbW1lbnRfYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tbWVudF9fYm9keVwiKTtcclxuXHJcbiAgLy9jb21tZW50IGVuYWJsZSBidXR0b25cclxuXHJcbiAgY29tbWVudEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbG9hZGluZ1NwaW5uZXIuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICAgIHJlbmRlckNvbW1lbnRzO1xyXG5cclxuICAgIGNvbnN0IHBvc3RDb21tZW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL3Bvc3RcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgY29tbWVudF9ib2R5OiB0aW55bWNlLmdldChcImNvbW1lbnRGaWVsZFwiKS5nZXRDb250ZW50KCksXHJcbiAgICAgICAgICBwb3N0X2lkOiBidG5Db21tZW50LmRhdGFzZXQucG9zdElkLFxyXG4gICAgICAgICAgc3ViamVjdF9pZDogYnRuQ29tbWVudC5kYXRhc2V0LnN1YmplY3RJZCxcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcG9zdENvbW1lbnQoKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDb21tZW50IFN1Y2Nlc3NcIiwgcmVzKTtcclxuICAgICAgICB0aW55bWNlLmdldChcImNvbW1lbnRGaWVsZFwiKS5zZXRDb250ZW50KFwiXCIudHJpbSgpKTtcclxuICAgICAgICBzZXNzaW9uVHJpZ2dlckZvY3VzU3RvcmFnZS5zZXRJdGVtKE5FV19DT01NRU5ULCByZXMubmV3X2NvbW1lbnQpO1xyXG5cclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlcy51cmw7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gIH0pO1xyXG5cclxuICAvL2NvbW1lbnQgYXV0b2ZvY3VzXHJcbiAgY29uc3QgZm9jdXNUb05ld0NvbW1lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb21tZW50VG9Gb2N1cyA9IHNlc3Npb25UcmlnZ2VyRm9jdXNTdG9yYWdlLmdldEl0ZW0oTkVXX0NPTU1FTlQpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tbWVudF9ib2R5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIEFycmF5LmZyb20oY29tbWVudF9ib2R5KS5pbmRleE9mKGNvbW1lbnRfYm9keVtpXSk7XHJcbiAgICAgIGNvbnN0IGNvbW1lbnRCb2R5Rm9jdXMgPSBjb21tZW50X2JvZHlbaV0uZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcbiAgICAgIGlmIChjb21tZW50Qm9keUZvY3VzID09PSBjb21tZW50VG9Gb2N1cykge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYCMke2NvbW1lbnRUb0ZvY3VzfWA7IFxyXG4gICAgICAgIGNvbW1lbnRfYm9keVtpXS5jbGFzc0xpc3QuYWRkKFwibmV3X19jb21tZW50XCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgY29tbWVudF9ib2R5W2ldLmNsYXNzTGlzdC5hZGQoXCJmYWRlX19uZXctY29tbWVudFwiKTtcclxuICAgICAgICB9LCA0MDAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2Vzc2lvblRyaWdnZXJGb2N1c1N0b3JhZ2UuY2xlYXIoKTtcclxuICB9O1xyXG4gIGZvY3VzVG9OZXdDb21tZW50KCk7XHJcbn0pO1xyXG4iLCJjb25zdCBjaGVja1NuaXBwZXRDb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgncHJlW2NsYXNzXj1cImxhbmd1YWdlXCJdJyk7XHJcbmNoZWNrU25pcHBldENvZGUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICBjb25zdCBjb3B5Q29kZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgY2hlY2tTbmlwcGV0Q29kZVtpbmRleF0uc3R5bGUuc2V0UHJvcGVydHkoXCJwb3NpdGlvblwiLCBcInJlbGF0aXZlICFpbXBvcnRhbnRcIik7XHJcbiAgY29weUNvZGVCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb3B5X19zbmlwcGV0LWNvZGVcIik7XHJcbiAgY29weUNvZGVCdG4udGV4dENvbnRlbnQgPSBcIkNvcHkgU25pcHBldFwiO1xyXG4gIGNvcHlDb2RlQnRuLmNsYXNzTGlzdC5hZGQoXCJjb3B5X19jb2RlLXNuaXBwZXRcIik7XHJcbiAgaXRlbS5hcHBlbmRDaGlsZChjb3B5Q29kZUJ0bik7XHJcbn0pO1xyXG5cclxuY29uc3QgY29weUNvZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvcHlfX3NuaXBwZXQtY29kZVwiKTtcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgY29weUNvZGUubGVuZ3RoOyBpKyspIHtcclxuICBjb3B5Q29kZVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpbml0aWFsaXplQ29weUNvZGVCdG4oZSwgaSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxpemVDb3B5Q29kZUJ0biA9IChlLCBpKSA9PiB7XHJcbiAgQXJyYXkuZnJvbShjb3B5Q29kZSkuaW5kZXhPZihlLnRhcmdldCk7XHJcbiAgY29weUNvZGVbaV0uc3R5bGUuc2V0UHJvcGVydHkoXCJiYWNrZ3JvdW5kXCIsIFwiIzExOTAwMFwiKTtcclxuICBjb3B5Q29kZVtpXS5zdHlsZS5zZXRQcm9wZXJ0eShcImNvbG9yXCIsIFwiI2ZmZlwiKTtcclxuICBjb3B5Q29kZVtpXS5pbm5lckhUTUwgPSBcIkNvcHkgJmNoZWNrO1wiO1xyXG4gIGxldCBzbmlwcGV0Q29udGVudCA9IGNoZWNrU25pcHBldENvZGVbaV0udGV4dENvbnRlbnQucmVwbGFjZShcIkNvcHkg4pyTXCIsIFwiXCIpO1xyXG5cclxuICBjb25zdCBkdW1teVRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gIGR1bW15VGV4dEFyZWEudmFsdWUgPSBzbmlwcGV0Q29udGVudDtcclxuICBkdW1teVRleHRBcmVhLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gIGR1bW15VGV4dEFyZWEuc3R5bGUubGVmdCA9IFwiLTEwMCVcIjtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGR1bW15VGV4dEFyZWEpO1xyXG4gIGR1bW15VGV4dEFyZWEuc2VsZWN0KCk7XHJcbiAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZHVtbXlUZXh0QXJlYSk7XHJcbn07XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZWxlc3MtZXNjYXBlICovXHJcblxyXG5jb25zdCBidG5TdWJtaXRQb3N0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5fX3N1Ym1pdC1wb3N0XCIpO1xyXG5jb25zdCBmb3JtQ3JlYXRlUG9zdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9fY3JlYXRlLXBvc3RcIik7XHJcblxyXG5mb3JtQ3JlYXRlUG9zdC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgZmV0Y2goXCIvc2VuZC1ub3RpZmljYXRpb25cIiwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRhdGEudXJsO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbn0pO1xyXG4iLCJjb25zdCByZW5kZXJDb21tZW50cyA9ICgpID0+IHtcclxuICBjb25zdCBmZXRjaEFsbENvbW1lbnRGb3JQb3N0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9jb21tZW50c1wiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIGNhY2hlOiBcIm5vLWNhY2hlXCIsXHJcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHtcclxuICAgICAgICAgIGVycm9yX21lc3NhZ2U6IFwiVW5hYmxlZCB0byBmZXRjaCBjb21tZW50LCBQbGVhc2UgcmVmcmVzaCB0aGUgcGFnZVwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZmV0Y2hBbGxDb21tZW50Rm9yUG9zdCgpXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDb21tZW50cztcclxuIiwiaW1wb3J0IGxvZ29JbWFnZSBmcm9tIFwiLi4vYXNzZXRzL2xvZ28vaW5zaWRlci1odWIucG5nXCI7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxvZ29cIik7XHJcbiAgbG9nby5mb3JFYWNoKChpdGVtKSA9PiAoaXRlbS5zcmMgPSBsb2dvSW1hZ2UpKTtcclxufSk7XHJcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgbG9hZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGluZy1jb250YWluZXJcIik7XHJcbiAgY29uc3QgYnRuU2lnbkluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5fX3NpZ24taW5cIik7XHJcbiAgY29uc3QgcmVtZW1iZXJNZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVtZW1iZXItbWVcIik7XHJcbiAgY29uc3QgZm9ybUxvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX19jb250YWluZXItbG9naW5cIik7XHJcblxyXG4gIC8vaW5wdXQgZm9yIGNyZWRlbnRpYWxzIHNhdmUgdG8gc2Vzc2lvbiBzdG9yYWdlXHJcbiAgY29uc3QgaW5wdXRFbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlcl9fZW1haWxcIik7XHJcbiAgY29uc3QgaW5wdXRQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlcl9fcGFzc3dvcmRcIik7XHJcbiAgbGV0IGxvZ2luU3RvcmFnZSA9IGxvY2FsU3RvcmFnZTsgLy8gU2V0IExvY2FsU3RvcmFnZSBmb3IgZW1haWwgb25seSBhbmQgbm90IGlubGN1ZGluZyBwYXNzd29yZCBTdG9yYWdlXHJcblxyXG4gIGxldCB1c2VyX2VtYWlsID0gbG9naW5TdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2VtYWlsXCIpO1xyXG4gIGlucHV0RW1haWwudmFsdWUgPSB1c2VyX2VtYWlsO1xyXG5cclxuICBsZXQgcmVtZW1iZXJNZVN0YXRlID0gbG9naW5TdG9yYWdlLmdldEl0ZW0oXCJyZW1lbWJlcl9tZV9zdGF0ZVwiKTtcclxuICBpZiAocmVtZW1iZXJNZVN0YXRlID09PSBcInRydWVcIikge1xyXG4gICAgcmVtZW1iZXJNZS5jaGVja2VkID0gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVtZW1iZXJNZS5jaGVja2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZW1lbWJlck1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChyZW1lbWJlck1lLmNoZWNrZWQpIHtcclxuICAgICAgbGV0IHNldFJlbWVtYmVyTWUgPSB0cnVlO1xyXG4gICAgICBsb2dpblN0b3JhZ2Uuc2V0SXRlbShcInJlbWVtYmVyX21lX3N0YXRlXCIsIHNldFJlbWVtYmVyTWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHNldFJlbWVtYmVyTWUgPSBmYWxzZTtcclxuICAgICAgbG9naW5TdG9yYWdlLnNldEl0ZW0oXCJyZW1lbWJlcl9tZV9zdGF0ZVwiLCBzZXRSZW1lbWJlck1lKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZm9ybUxvZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxvYWRpbmdDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICAgIGNvbnN0IHNlbmRMb2dpblJlcXVlc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL3NpZ24taW5cIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgICBjYWNoZTogXCJuby1jYWNoZVwiLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICByZW1lbWJlcl9tZTogcmVtZW1iZXJNZS5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgZW1haWw6IGlucHV0RW1haWwudmFsdWUsXHJcbiAgICAgICAgICBwYXNzd29yZDogaW5wdXRQYXNzd29yZC52YWx1ZSxcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA0MDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDw9IDQ5OSkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBzZW5kTG9naW5SZXF1ZXN0KClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLmF1dGhlbnRpY2F0ZV91cmw7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gIH0pO1xyXG5cclxuICBidG5TaWduSW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNvbnN0IGxvZ2luQ3JlZGVudGlhbHMgPSB7XHJcbiAgICAgIHVzZXJfZW1haWw6IGlucHV0RW1haWwudmFsdWUsXHJcbiAgICB9O1xyXG5cclxuICAgIGxvZ2luU3RvcmFnZS5zZXRJdGVtKFwidXNlcl9lbWFpbFwiLCBsb2dpbkNyZWRlbnRpYWxzLnVzZXJfZW1haWwpO1xyXG4gIH0pO1xyXG59KTtcclxuIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBjb25zdCBuYXZUb2dnbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXItdG9nZ2xlclwiKTtcclxuICBjb25zdCBuYXZiYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLi0tbmF2LWxpc3QtY29udGFpbmVyXCIpO1xyXG4gIGxldCBuYXZJc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgaWYgKG5hdlRvZ2dsZXIpIHtcclxuICAgIG5hdlRvZ2dsZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaWYgKCFuYXZJc09wZW4pIHtcclxuICAgICAgICBuYXZUb2dnbGVyLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib3Blbi1uYXZiYXJcIik7XHJcbiAgICAgICAgbmF2SXNPcGVuID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZUb2dnbGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1uYXZiYXJcIik7XHJcbiAgICAgICAgbmF2SXNPcGVuID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsIi8qIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGNoZWNrTmV3UG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvbmV3LXBvc3RcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIGNhY2hlOiBcIm5vLWNhY2hlXCIsXHJcbiAgICAgIGtlZXBhbGl2ZTogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBsZXQgcG9zdExlbmd0aENoZWNrZXIgPSAwOyAvL2ZvciBwb3N0IGxlbmd0aCBjaGVja2VyXHJcbiAgbGV0IGN1cnJlbnRQb3N0TGVuZ3RoID0gMDsgLy9mZXRjaCBvbmUgYW5kIGdldCBjdXJyZW50IHBvc3QgdmFsdWVcclxuXHJcbiAgLy9HZXQgdGhlIGN1cnJlbnQgcG9zdCBsZW5ndGhcclxuICBjaGVja05ld1Bvc3QoKVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjdXJyZW50UG9zdExlbmd0aCA9IHJlcztcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5pbmZvKGVycikpO1xyXG5cclxuICAvL0NoZWNrIGZvciBuZXcgcG9zdFxyXG4gIHNldEludGVydmFsKCgpID0+IHtcclxuICAgIGNoZWNrTmV3UG9zdCgpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBwb3N0TGVuZ3RoQ2hlY2tlciA9IHJlcztcclxuICAgICAgICBpZiAocG9zdExlbmd0aENoZWNrZXIgPiBjdXJyZW50UG9zdExlbmd0aCkge1xyXG4gICAgICAgICAgd2luZG93LmFsZXJ0KFwiTkVXIFBPU1QhXCIpO1xyXG4gICAgICAgICAgY3VycmVudFBvc3RMZW5ndGgrKztcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmluZm8oZXJyKSk7XHJcbiAgfSwgMTAwMDApO1xyXG4gIGNvbnNvbGUubG9nKHBvc3RMZW5ndGhDaGVja2VyKTtcclxuICBjb25zb2xlLmxvZyhjdXJyZW50UG9zdExlbmd0aCk7XHJcbn0pO1xyXG4gKi9cclxuIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBjb25zdCB0b2dnbGVPcHRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBpbl9fcG9zdFwiKTtcclxuICBjb25zdCBvcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9wdGlvbi1jb250YWluZXJcIik7XHJcblxyXG4gIC8vZm9yIGRlbGV0ZSBkaWFsb2dcclxuICBjb25zdCBkZWxldGVPcHRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZV9fb3B0aW9uLWJ0blwiKTtcclxuICBjb25zdCBkZWxldGVEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmN1c3RvbV9fZGVsZXRlLWRpYWxvZ1wiKTtcclxuICBjb25zdCBkZWxldGVEaWFsb2dDYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgXCIuY3VzdG9tX19kaWFsb2ctYnRuLWNhbmNlbFwiXHJcbiAgKTtcclxuICBjb25zdCBkZWxldGVEaWFsb2dDb25maXJtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLmN1c3RvbV9fZGlhbG9nLWJ0bi1jb25maXJtXCJcclxuICApO1xyXG5cclxuICBjb25zdCBwaW5Qb3N0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5waW5fX29wdGlvbi1idG5cIik7XHJcbiAgY29uc3QgdW5QaW5Qb3N0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51bnBpbl9fb3B0aW9uLWJ0blwiKTtcclxuXHJcbiAgLy8gT3B0aW9uIENhcmQgb3BlblxyXG4gIGxldCBvcHRpb25Jc09wZW4gPSBmYWxzZTsgLy8gZm9yIHRvZ2dsZSBvcHRpb25zXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2dnbGVPcHRpb25CdG4ubGVuZ3RoOyBpKyspIHtcclxuICAgIHRvZ2dsZU9wdGlvbkJ0bltpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKCFvcHRpb25Jc09wZW4pIHtcclxuICAgICAgICBvcHRpb25Db250YWluZXJbaV0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICAgICAgICBvcHRpb25Jc09wZW4gPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9wdGlvbkNvbnRhaW5lcltpXS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgICAgIG9wdGlvbklzT3BlbiA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHRvZ2dsZU9wdGlvbnMoZSwgdG9nZ2xlT3B0aW9uQnRuW2ldLmRhdGFzZXQucG9zdElkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9nZ2xlT3B0aW9ucyA9IChlKSA9PiB7XHJcbiAgICBBcnJheS5mcm9tKHRvZ2dsZU9wdGlvbkJ0bikuaW5kZXhPZihlLnRhcmdldCkgKyAxO1xyXG4gIH07XHJcblxyXG4gIC8vT3BlbiBERUxFVEUgZGlhbG9nIC0tIENsb3NlIG9yIENvbmZpcm0gRGVsZXRlXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWxldGVPcHRpb25CdG4ubGVuZ3RoOyBpKyspIHtcclxuICAgIGRlbGV0ZU9wdGlvbkJ0bltpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZGVsZXRlRGlhbG9nW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcbiAgICAgIGRlbGV0ZVBvc3RPcGVuRGlhbG9nKGUpO1xyXG4gICAgfSk7XHJcbiAgICBkZWxldGVEaWFsb2dDYW5jZWxbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGRlbGV0ZURpYWxvZ1tpXS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgICBjbG9zZURpYWxvZyhlKTtcclxuICAgIH0pO1xyXG4gICAgZGVsZXRlRGlhbG9nQ29uZmlybVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgY29uZmlybURlbGV0ZVBvc3QoZSwgZGVsZXRlRGlhbG9nQ29uZmlybVtpXS5kYXRhc2V0LnBvc3RJZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIE9wZW4gZGlhbG9nIGZvciBkZWxldGUgY29uZmlybWF0aW9uXHJcbiAgY29uc3QgZGVsZXRlUG9zdE9wZW5EaWFsb2cgPSAoZSkgPT4ge1xyXG4gICAgQXJyYXkuZnJvbShkZWxldGVPcHRpb25CdG4pLmluZGV4T2YoZS50YXJnZXQpICsgMTtcclxuICB9O1xyXG5cclxuICAvL0NhbmNlbC9DbG9zZSBkaWFsb2cgZGVsZXRlXHJcbiAgY29uc3QgY2xvc2VEaWFsb2cgPSAoZSkgPT4ge1xyXG4gICAgQXJyYXkuZnJvbShkZWxldGVEaWFsb2dDYW5jZWwpLmluZGV4T2YoZS50YXJnZXQpICsgMTtcclxuICB9O1xyXG5cclxuICAvL0RlbGV0ZSBwb3N0L2Fuc3dlclxyXG4gIGNvbnN0IGNvbmZpcm1EZWxldGVQb3N0ID0gKGUsIGRhdGFQb3N0SWQpID0+IHtcclxuICAgIEFycmF5LmZyb20oZGVsZXRlRGlhbG9nQ29uZmlybSkuaW5kZXhPZihlLnRhcmdldCkgKyAxO1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZU9uZVBvc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgVVJMX0RFTEVURV9QT1NUID0gYC9wb3N0LW9wdGlvbnM/cG9zdF9pZD0ke2RhdGFQb3N0SWR9YDtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTF9ERUxFVEVfUE9TVCwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgY2FjaGU6IFwibm8tY2FjaGVcIixcclxuICAgICAgICAgIG1vZGU6IFwiY29yc1wiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgZXJyb3I6IFwiU29tZXRoaW5nIHdlbnQgd3Jvbmcgb24gZGVsZXRpbmcgdGhlIGNvbnRlbnQuXCIsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy9ERUxFVEUgUkVRVUVTVCBQUk9NSVNFXHJcbiAgICBkZWxldGVPbmVQb3N0KClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLnVybDtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgfTtcclxuXHJcbiAgLy9waW4gb3B0aW9ucyBwb3N0IHB1c2hcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBpblBvc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIHBpblBvc3RbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaW5pdGlhbGl6ZVBpblBvc3QoZSwgcGluUG9zdFtpXS5kYXRhc2V0LnBvc3RJZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdW5QaW5Qb3N0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICB1blBpblBvc3RbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaW5pdGlhbGl6ZVVuUGluUG9zdChlLCB1blBpblBvc3RbaV0uZGF0YXNldC5wb3N0SWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL1BpbiBQb3N0XHJcbiAgY29uc3QgaW5pdGlhbGl6ZVBpblBvc3QgPSAoZSwgZGF0YVBvc3RJZCkgPT4ge1xyXG4gICAgQXJyYXkuZnJvbShwaW5Qb3N0KS5pbmRleE9mKGUudGFyZ2V0KSArIDE7XHJcblxyXG4gICAgY29uc3Qgc2V0SXNQaW5Qb3N0ID0gdHJ1ZTtcclxuICAgIHBpbk9wdGlvbkNvbmZpZyhlLCBkYXRhUG9zdElkLCBzZXRJc1BpblBvc3QpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlcy51cmw7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvL1VucGluIHBvc3RcclxuICBjb25zdCBpbml0aWFsaXplVW5QaW5Qb3N0ID0gKGUsIGRhdGFQb3N0SWQpID0+IHtcclxuICAgIEFycmF5LmZyb20odW5QaW5Qb3N0KS5pbmRleE9mKGUudGFyZ2V0KTtcclxuXHJcbiAgICBjb25zdCBzZXRJc1BpblBvc3QgPSBmYWxzZTtcclxuICAgIHBpbk9wdGlvbkNvbmZpZyhlLCBkYXRhUG9zdElkLCBzZXRJc1BpblBvc3QpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlcy51cmw7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwaW5PcHRpb25Db25maWcgPSBhc3luYyAoZSwgZGF0YVBvc3RJZCwgc2V0UGluUG9zdCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgVVJMX1BJTl9QT1NUID0gYC9wb3N0LW9wdGlvbnMvdXBkYXRlP3Bvc3RfaWQ9JHtkYXRhUG9zdElkfWA7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMX1BJTl9QT1NULCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FjaGU6IFwibm8tY2FjaGVcIixcclxuICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHBpbl9wb3N0OiBzZXRQaW5Qb3N0IH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0ge1xyXG4gICAgICAgICAgbWVzc2FnZTogXCJTb21ldGhpbmcgd2VudCB3cm9uZyBvbiBwaW5uaW5nIHRoZSBwb3N0XCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG59KTtcclxuIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9fZGVsZXRlLWFuc3dlclwiKTtcclxuICBjb25zdCBkYXRhUG9zdElkX2RlbGV0ZSA9IGRlbGV0ZUJ1dHRvbi5kYXRhc2V0LnBvc3RJZDtcclxuICBjb25zdCBsb2FkaW5nU3Bpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubG9hZGluZy1zcGlubmVyXCIpO1xyXG5cclxuICAvLyBVcGRhdGUgZm9ybVxyXG4gIGNvbnN0IHVwZGF0ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwZGF0ZV9fZm9ybVwiKTtcclxuICBjb25zdCB1cGRhdGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBkYXRlX190aXRsZVwiKTtcclxuICBjb25zdCB1cGRhdGVUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwZGF0ZV9fdGFnXCIpO1xyXG4gIGNvbnN0IHVwZGF0ZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwZGF0ZV9fYm9keVwiKTtcclxuICBjb25zdCB1cGRhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9fdXBkYXRlLWFuc3dlclwiKTtcclxuICBjb25zdCBkYXRhUG9zdElkX3VwZGF0ZSA9IHVwZGF0ZUJ0bi5kYXRhc2V0LnBvc3RJZDtcclxuXHJcbiAgLy9jbGljayBldmVudCB0byB0cmlnZ2VyIGRlbGV0ZSByZXF1ZXN0XHJcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgLy9zZW5kIERlbGV0ZSBIdHRwIFJlcXVlc3RcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxvYWRpbmdTcGlubmVyLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKSk7XHJcbiAgICBjb25zdCBkZWxldGVPbmVQb3N0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICBgL3Bvc3Qtb3B0aW9ucz9wb3N0X2lkPSR7ZGF0YVBvc3RJZF9kZWxldGV9YCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICBjYWNoZTogXCJuby1jYWNoZVwiLFxyXG4gICAgICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgZXJyb3I6IFwiU29tZXRoaW5nIHdlbnQgd3Jvbmcgb24gZGVsZXRpbmcgdGhlIGNvbnRlbnQuXCIsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy9ERUxFVEUgUkVRVUVTVCBQUk9NSVNFXHJcbiAgICBkZWxldGVPbmVQb3N0KClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLnVybDtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vY2xpY2sgZXZlbnQgdG8gdHJpZ2dlciBwdXQgcmVxdWVzdFxyXG4gIHVwZGF0ZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbG9hZGluZ1NwaW5uZXIuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpKTtcclxuXHJcbiAgICBjb25zdCBwb3N0VXBkYXRlZENvbnRlbnQgPSB7XHJcbiAgICAgIHBvc3RfdGl0bGU6IHVwZGF0ZVRpdGxlLnZhbHVlLFxyXG4gICAgICBwb3N0X3RhZzogdXBkYXRlVGFnLnZhbHVlLFxyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcclxuICAgICAgcG9zdF9ib2R5OiB0aW55bWNlLmdldChcInNoYXJlQW5zd2VyRm9ybVwiKS5nZXRDb250ZW50KCksXHJcbiAgICB9O1xyXG4gICAgY29uc3QgdXBkYXRlT25lUG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgYC9wb3N0LW9wdGlvbnM/cG9zdF9pZD0ke2RhdGFQb3N0SWRfdXBkYXRlfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYWNoZTogXCJuby1jYWNoZVwiLFxyXG4gICAgICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdFVwZGF0ZWRDb250ZW50KSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6XHJcbiAgICAgICAgICAgICAgXCJTb21ldGhpbmcgd2VudCB3cm9uZyB3aGVuIGF0dGVtcHRlZCB0byB1cGRhdGUgdGhlIGFuc3dlci5cIixcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvL1VQREFURSBSRVFVRVNUIFBST01JU0VcclxuICAgIHVwZGF0ZU9uZVBvc3QoKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMudXJsO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICB9KTtcclxufSk7XHJcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgcmVxdWlyZShcIi4vY2hhbmdlLXBhc3N3b3JkXCIpO1xyXG4gIGNvbnN0IGNoYW5nZVBhc3N3b3JkQnRuRHJvcERvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuY2hhbmdlX19wYXNzd29yZC1vcHRpb24taGVhZGVyXCJcclxuICApO1xyXG4gIGNvbnN0IGNoYW5nZVBhc3N3b3JkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmNoYW5nZV9fcGFzc3dvcmQtb3B0aW9uXCJcclxuICApO1xyXG4gIGNvbnN0IGJ0blVwZGF0ZVByb2ZpbGVTZXR0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5idG5fX3VwZGF0ZS1wcm9maWxlLWluZm9cIlxyXG4gICk7IC8vYnRuIHRvIHVwZGF0ZSBpbmZvcm1hdGlvbiBub3QgcGFzc3dvcmRcclxuICBsZXQgaW1hZ2VGaWxlO1xyXG4gIGxldCBpc09wZW4gPSBmYWxzZTtcclxuICBjaGFuZ2VQYXNzd29yZEJ0bkRyb3BEb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBpZiAoIWlzT3Blbikge1xyXG4gICAgICBjaGFuZ2VQYXNzd29yZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcclxuICAgICAgYnRuVXBkYXRlUHJvZmlsZVNldHRpbmdzXHJcbiAgICAgICAgPyBidG5VcGRhdGVQcm9maWxlU2V0dGluZ3MuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxyXG4gICAgICAgIDogXCJcIjtcclxuICAgICAgaXNPcGVuID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNoYW5nZVBhc3N3b3JkQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgICBidG5VcGRhdGVQcm9maWxlU2V0dGluZ3NcclxuICAgICAgICA/IGJ0blVwZGF0ZVByb2ZpbGVTZXR0aW5ncy5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXHJcbiAgICAgICAgOiBcIlwiO1xyXG4gICAgICBpc09wZW4gPSBmYWxzZTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy9QUkVWSUVXIFVQTE9BREVEIEZJTEVTIEFORCBXT1JLTE9BRFNcclxuICBjb25zdCB1cGxvYWRQcm9maWxlSW1nUGlja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLnVwbG9hZF9fcHJvZmlsZS1pbWFnZS1waWNrZXJcIlxyXG4gICk7XHJcbiAgY29uc3QgYWxlcnRQcm9maWxlU2V0dGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIucHJvZmlsZV9fc2V0dGluZ3MtYWxlcnRcIlxyXG4gICk7XHJcbiAgY29uc3QgYWxlcnRUZXh0UHJvZmlsZVNldHRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLnByb2ZpbGVfX3NldHRpbmdzLWFsZXJ0LXRleHRcIlxyXG4gICk7XHJcblxyXG4gIHVwbG9hZFByb2ZpbGVJbWdQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICBjb25zdCBmaWxlID0gdXBsb2FkUHJvZmlsZUltZ1BpY2tlci5maWxlc1swXTtcclxuICAgIGNvbnN0IHVwbG9hZFByb2ZpbGVJbWdQcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIucHJldmlld19fcHJvZmlsZS1pbWFnZVwiXHJcbiAgICApO1xyXG4gICAgY29uc3QgaW1hZ2VSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgIGltYWdlUmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFwibG9hZFwiLFxyXG4gICAgICBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IFNUQU5EQVJEX1NJWkUgPSAzMTQ1NzI4O1xyXG4gICAgICAgICAgaWYgKGZpbGUuc2l6ZSA8IFNUQU5EQVJEX1NJWkUpIHtcclxuICAgICAgICAgICAgdXBsb2FkUHJvZmlsZUltZ1ByZXZpZXcuc3JjID0gaW1hZ2VSZWFkZXIucmVzdWx0O1xyXG4gICAgICAgICAgICBpbWFnZUZpbGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZpbGU7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydFByb2ZpbGVTZXR0aW5ncy5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xyXG4gICAgICAgICAgICBhbGVydFByb2ZpbGVTZXR0aW5ncy5jbGFzc0xpc3QuYWRkKFwiZXJyb3JfX3NoYWtlXCIpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBhbGVydFByb2ZpbGVTZXR0aW5ncy5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgICAgICAgICB9LCA2MDAwKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSBzaXplIGlzIHRvbyBsYXJnZWApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgYWxlcnRUZXh0UHJvZmlsZVNldHRpbmdzLnRleHRDb250ZW50ID0gZXJyLm1lc3NhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWxzZVxyXG4gICAgKTtcclxuICAgIGlmIChmaWxlKSB7XHJcbiAgICAgIGltYWdlUmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vSEFORExFIFVQTE9BRCBGSUxFUywgRlVMTE5BTUUgQU5EIEVNQUlMIENIQU5HRVNcclxuICBjb25zdCBmb3JtUHJvZmlsZVNldHRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX19wcm9maWxlLXNldHRpbmdzXCIpLFxyXG4gICAgcHJvZmlsZVNldHRpbmdzRnVsbG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5wcm9maWxlX19zZXR0aW5ncy1mdWxsbmFtZVwiXHJcbiAgICApLFxyXG4gICAgcHJvZmlsZVNldHRpbmdzRW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3NldHRpbmdzLWVtYWlsXCIpLFxyXG4gICAgbG9hZGluZ1NwaW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmctc3Bpbm5lclwiKSxcclxuICAgIGxvYWRpbmdQcm9maWxlU2V0dGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5sb2FkaW5nX19wcm9maWxlLXNldHRpbmdzXCJcclxuICAgICk7XHJcblxyXG4gIGZvcm1Qcm9maWxlU2V0dGluZ3MuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbG9hZGluZ1NwaW5uZXIuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICAgIGxvYWRpbmdQcm9maWxlU2V0dGluZ3MuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICAgIGJ0blVwZGF0ZVByb2ZpbGVTZXR0aW5ncy5yZW1vdmVBdHRyaWJ1dGUoXCJmb3JcIik7XHJcbiAgICBidG5VcGRhdGVQcm9maWxlU2V0dGluZ3MucmVtb3ZlQXR0cmlidXRlKFwicm9sZVwiKTtcclxuICAgIGNvbnN0IHByb2ZpbGVTZXR0aW5nc0Zvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm1Qcm9maWxlU2V0dGluZ3MpLFxyXG4gICAgICBQUk9GSUxFX0lNQUdFID0gXCJwcm9maWxlX2ltYWdlXCI7XHJcbiAgICBwcm9maWxlU2V0dGluZ3NGb3JtRGF0YS5hcHBlbmQoUFJPRklMRV9JTUFHRSwgaW1hZ2VGaWxlKTtcclxuICAgIHByb2ZpbGVTZXR0aW5nc0Zvcm1EYXRhLmFwcGVuZChcImZ1bGxuYW1lXCIsIHByb2ZpbGVTZXR0aW5nc0Z1bGxuYW1lLnZhbHVlKTtcclxuICAgIHByb2ZpbGVTZXR0aW5nc0Zvcm1EYXRhLmFwcGVuZChcImVtYWlsXCIsIHByb2ZpbGVTZXR0aW5nc0VtYWlsLnZhbHVlKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVQcm9maWxlSW5mb3JtYXRpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IFVQREFURV9JTkZPX1VSTCA9IFwiL3Byb2ZpbGUtaW5mby11cGRhdGVcIjtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUERBVEVfSU5GT19VUkwsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICAgICAgY2FjaGU6IFwibm8tY2FjaGVcIixcclxuICAgICAgICBib2R5OiBwcm9maWxlU2V0dGluZ3NGb3JtRGF0YSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB1cGRhdGVQcm9maWxlSW5mb3JtYXRpb24oKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMudXJsO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICB9KTtcclxufSk7XHJcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgcmVnVXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlZ191c2VyX25hbWVcIik7XHJcbiAgY29uc3QgcmVnVXNlckVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWdfdXNlcl9lbWFpbFwiKTtcclxuICBjb25zdCByZWdVc2VyUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlZ191c2VyX3Bhc3N3b3JkXCIpO1xyXG4gIGNvbnN0IHJlZ1VzZXJDb25maXJtUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIucmVnX3VzZXJfY29uZmlybV9wYXNzd29yZFwiXHJcbiAgKTtcclxuICBjb25zdCBmb3JtUmVnaXN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX2NvbnRhaW5lci1yZWdpc3RlclwiKTtcclxuXHJcbiAgLy9wYXNzd29yZCBhbmQgY29uZmlybSBwYXNzd29yZCBjaGVja2VyXHJcbiAgY29uc3QgcGFzc3dvcmRDaGVja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXNzd29yZF9fY2hlY2tlclwiKTtcclxuICBjb25zdCBjb25maXJtUGFzc3dvcmRDaGVja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmNvbmZpcm1fX3Bhc3N3b3JkLWNoZWNrZXJcIlxyXG4gICk7XHJcbiAgY29uc3QgY2hlY2tJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5iaS1jaGVjay1jaXJjbGUtZmlsbFwiKTtcclxuICBjb25zdCBzaG93UGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3dfX3Bhc3N3b3JkXCIpO1xyXG5cclxuICBjb25zdCBTRVNTSU9OX1NUT1JBR0VfTkFNRSA9IFwicmVnaXN0ZXJfdXNlcl9uYW1lXCIsXHJcbiAgICBTRVNTSU9OX1NUT1JBR0VfRU1BSUwgPSBcInJlZ2lzdGVyX3VzZXJfZW1haWxcIjtcclxuXHJcbiAgbGV0IHJlZ2lzdGVyU2Vzc2lvblN0b3JhZ2UgPSBzZXNzaW9uU3RvcmFnZTtcclxuICBsZXQgcmVjb3ZlckNyZWRlbnRpYWxzID0ge1xyXG4gICAgdXNlcl9uYW1lOiByZWdpc3RlclNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU0VTU0lPTl9TVE9SQUdFX05BTUUpLFxyXG4gICAgdXNlcl9lbWFpbDogcmVnaXN0ZXJTZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFNFU1NJT05fU1RPUkFHRV9FTUFJTCksXHJcbiAgfTtcclxuICByZWdVc2VyTmFtZS52YWx1ZSA9IHJlY292ZXJDcmVkZW50aWFscy51c2VyX25hbWU7XHJcbiAgcmVnVXNlckVtYWlsLnZhbHVlID0gcmVjb3ZlckNyZWRlbnRpYWxzLnVzZXJfZW1haWw7XHJcbiAgcmVnaXN0ZXJTZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xyXG5cclxuICAvL1N0b3JlIHNlc3Npb24gZW1haWwgYW5kIG5hbWUgb24gc2Vzc2lvbiBzdG9yYWdlXHJcbiAgbGV0IGZvckVtYWlsTG9jYWxTdG9yYWdlID0gbG9jYWxTdG9yYWdlO1xyXG4gIGZvcm1SZWdpc3Rlci5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsICgpID0+IHtcclxuICAgIHJlZ2lzdGVyU2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTRVNTSU9OX1NUT1JBR0VfTkFNRSwgcmVnVXNlck5hbWUudmFsdWUpO1xyXG4gICAgcmVnaXN0ZXJTZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFNFU1NJT05fU1RPUkFHRV9FTUFJTCwgcmVnVXNlckVtYWlsLnZhbHVlKTtcclxuICAgIGZvckVtYWlsTG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyX2VtYWlsXCIsIHJlZ1VzZXJFbWFpbC52YWx1ZSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vcGFzc3dvcmQgbGlzdGVuZXJcclxuICByZWdVc2VyUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBwYXNzd29yZENoZWNrZXIuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuXHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoID49IDgpIHtcclxuICAgICAgcGFzc3dvcmRDaGVja2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LWRhbmdlclwiKTtcclxuICAgICAgcGFzc3dvcmRDaGVja2VyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXN1Y2Nlc3NcIik7XHJcbiAgICAgIGNoZWNrSWNvblswXS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGFzc3dvcmRDaGVja2VyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWRhbmdlclwiKTtcclxuICAgICAgcGFzc3dvcmRDaGVja2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LXN1Y2Nlc3NcIik7XHJcbiAgICAgIGNoZWNrSWNvblswXS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvL3Bhc3N3b3JkIGNvbmZpcm0gY2hlY2tlclxyXG4gIHJlZ1VzZXJDb25maXJtUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25maXJtUGFzc3dvcmRDaGVja2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcblxyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSByZWdVc2VyUGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgY29uZmlybVBhc3N3b3JkQ2hlY2tlci5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1kYW5nZXJcIik7XHJcbiAgICAgIGNvbmZpcm1QYXNzd29yZENoZWNrZXIuY2xhc3NMaXN0LmFkZChcInRleHQtc3VjY2Vzc1wiKTtcclxuICAgICAgY29uZmlybVBhc3N3b3JkQ2hlY2tlci5pbm5lckhUTUwgPSBgUGFzc3dvcmQgbWF0Y2hlZC4gPGkgY2xhc3M9XCJiaSBiaS1jaGVjay1jaXJjbGUtZmlsbCBmX3NpemUtMVwiPjwvaT5gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uZmlybVBhc3N3b3JkQ2hlY2tlci5jbGFzc0xpc3QuYWRkKFwidGV4dC1kYW5nZXJcIik7XHJcbiAgICAgIGNvbmZpcm1QYXNzd29yZENoZWNrZXIuY2xhc3NMaXN0LnJlbW92ZShcInRleHQtc3VjY2Vzc1wiKTtcclxuICAgICAgY29uZmlybVBhc3N3b3JkQ2hlY2tlci5pbm5lckhUTUwgPSBgUGFzc3dvcmQgZG8gbm90IG1hdGNoZWQuYDtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy9zaG93IHBhc3N3b3JkIGNoZWNrZXJcclxuICBjb25zdCBwYXNzd29yZEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9cGFzc3dvcmRdXCIpO1xyXG4gIHNob3dQYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBwYXNzd29yZEZpZWxkLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgY29uc3QgdHlwZSA9XHJcbiAgICAgICAgaXRlbS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpID09PSBcInBhc3N3b3JkXCIgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIjtcclxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xyXG4gICAgICBpZiAoc2hvd1Bhc3N3b3JkLmNoZWNrZWQpIHtcclxuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdHlwZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufSk7XHJcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3Qgc3ViamVjdERyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zdWJqZWN0X19kcm9wZG93blwiKTtcclxuICBjb25zdCBzdWJqZWN0RHJvcGRvd25Hcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcIi5zdWJqZWN0X19kcm9wZG93bi1ncm91cFwiXHJcbiAgKTtcclxuICBjb25zdCBzdWJqZWN0RHJvcGRvd25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgXCIuc3ViamVjdF9fZHJvcGRvd24tYnRuXCJcclxuICApO1xyXG4gIGNvbnN0IHN1YmplY3REcm9wZG93bkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZhLWNoZXZyb24tcmlnaHRcIik7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViamVjdERyb3Bkb3duR3JvdXAubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBzdWJqZWN0RHJvcGRvd25PcGVuID0gZmFsc2U7XHJcbiAgICBzdWJqZWN0RHJvcGRvd25CdG5baV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGlmICghc3ViamVjdERyb3Bkb3duT3Blbikge1xyXG4gICAgICAgIHN1YmplY3REcm9wZG93bkdyb3VwW2ldLmNsYXNzTGlzdC5hZGQoXCJzdWJqZWN0X19kcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgIHN1YmplY3REcm9wZG93bltpXS5jbGFzc0xpc3QuYWRkKFwic3ViamVjdF9fZHJvcGRvd24tb3BlblwiKTtcclxuICAgICAgICBzdWJqZWN0RHJvcGRvd25JY29uW2ldLmNsYXNzTGlzdC5hZGQoXCJpY29uLXJvdGF0ZVwiKTtcclxuICAgICAgICBzdWJqZWN0RHJvcGRvd25PcGVuID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdWJqZWN0RHJvcGRvd25Hcm91cFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwic3ViamVjdF9fZHJvcGRvd24tb3BlblwiKTtcclxuICAgICAgICBzdWJqZWN0RHJvcGRvd25baV0uY2xhc3NMaXN0LnJlbW92ZShcInN1YmplY3RfX2Ryb3Bkb3duLW9wZW5cIik7XHJcbiAgICAgICAgc3ViamVjdERyb3Bkb3duSWNvbltpXS5jbGFzc0xpc3QucmVtb3ZlKFwiaWNvbi1yb3RhdGVcIik7XHJcbiAgICAgICAgc3ViamVjdERyb3Bkb3duT3BlbiA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGFycmF5SW5kZXhGaW5kZXIoZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFycmF5SW5kZXhGaW5kZXIgPSAoZSkgPT4ge1xyXG4gICAgQXJyYXkuZnJvbShzdWJqZWN0RHJvcGRvd24pLmluZGV4T2YoZS50YXJnZXQpO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTFkM2YzYjIwZDEyMzlkMTRlYjBlNzM4Yjk2MzkyZjcucG5nXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8qIEpBVkFTQ1JJUFQgKi9cclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXJfX2VtYWlsXCIpKSB7XHJcbiAgcmVxdWlyZShcIi4vanMvbG9naW5cIik7XHJcbn1cclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlZ191c2VyX25hbWVcIikpIHtcclxuICByZXF1aXJlKFwiLi9qcy9yZWdpc3RlclwiKTtcclxufVxyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9fY29tbWVudFwiKSkge1xyXG4gIHJlcXVpcmUoXCIuL2pzL2NvbW1lbnRcIik7XHJcbn1cclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9fZGVsZXRlLWFuc3dlclwiKSkge1xyXG4gIHJlcXVpcmUoXCIuL2pzL29wdGlvbnNfcG9zdFwiKTtcclxufVxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5fX3VwZGF0ZS1hbnN3ZXJcIikpIHtcclxuICByZXF1aXJlKFwiLi9qcy9vcHRpb25zX3Bvc3RcIik7XHJcbn1cclxuXHJcbnJlcXVpcmUoXCIuL2pzL2ltYWdlLWxvYWRcIik7XHJcbnJlcXVpcmUoXCIuL2pzL29wdGlvbl9wb3N0X3RvZ2dsZVwiKTtcclxucmVxdWlyZShcIi4vYm9vdHN0cmFwL2pzL2Jvb3RzdHJhcC5taW5cIik7XHJcbnJlcXVpcmUoXCIuL2pzL25hdmJ1cmdlci5hbmltXCIpO1xyXG5yZXF1aXJlKFwiLi9qcy9zdWJqZWN0X2Ryb3Bkb3duXCIpO1xyXG5yZXF1aXJlKFwiLi9qcy9jb3B5LWNvZGVcIik7XHJcbnJlcXVpcmUoXCIuL2pzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb25fYXBpXCIpO1xyXG5yZXF1aXJlKFwiLi9qcy9wcm9maWxlX3NldHRpbmdzXCIpO1xyXG5yZXF1aXJlKFwiLi9qcy9jcmVhdGUtcG9zdFwiKTtcclxuLy8gcmVxdWlyZShcIi4vanMvdGlueW1jZS5mb3JtXCIpO1xyXG5cclxuLyogU1RZTEUgKi9cclxucmVxdWlyZShcIi4vYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAubWluLmNzc1wiKTtcclxucmVxdWlyZShcIi4vbWFpbi5zY3NzXCIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9