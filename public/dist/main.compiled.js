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
btnSubmitPost.addEventListener("click", e => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvY3JlYXRlUG9wcGVyLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDbGlwcGluZ1JlY3QuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50UmVjdC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldEhUTUxFbGVtZW50U2Nyb2xsLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Tm9kZVNjcm9sbC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFBhcmVudE5vZGUuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRTY3JvbGxQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRWaWV3cG9ydFJlY3QuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3dTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzU2Nyb2xsUGFyZW50LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaXNUYWJsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9saXN0U2Nyb2xsUGFyZW50cy5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZW51bXMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2luZGV4LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9hcnJvdy5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2ZsaXAuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9oaWRlLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9vZmZzZXQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9wb3BwZXJPZmZzZXRzLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9wb3BwZXItbGl0ZS5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvcG9wcGVyLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvY29tcHV0ZU9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2RlYm91bmNlLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9kZXRlY3RPdmVyZmxvdy5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZXhwYW5kVG9IYXNoTWFwLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEFsdEF4aXMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldFZhcmlhdGlvbi5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvbWF0aC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvbWVyZ2VCeU5hbWUuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvb3JkZXJNb2RpZmllcnMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3VuaXF1ZUJ5LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy92YWxpZGF0ZU1vZGlmaWVycy5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvd2l0aGluLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy9kb20vc2VsZWN0b3ItZW5naW5lLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy91dGlsL2luZGV4LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy9kb20vZGF0YS5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvZG9tL2V2ZW50LWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi4vanMvc3JjL2Jhc2UtY29tcG9uZW50LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy9hbGVydC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvYnV0dG9uLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy9kb20vbWFuaXB1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi4vanMvc3JjL2Nhcm91c2VsLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy9jb2xsYXBzZS5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi4vanMvc3JjL3V0aWwvc2Nyb2xsYmFyLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy91dGlsL2JhY2tkcm9wLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvb2ZmY2FudmFzLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy91dGlsL3Nhbml0aXplci5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvcG9wb3Zlci5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvc2Nyb2xsc3B5LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy90YWIuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi4vanMvc3JjL3RvYXN0LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL2luZGV4LnVtZC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL3B1YmxpYy9qcy9jaGFuZ2UtcGFzc3dvcmQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9wdWJsaWMvanMvY29tbWVudC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL3B1YmxpYy9qcy9jb3B5LWNvZGUuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9wdWJsaWMvanMvY3JlYXRlLXBvc3QuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9wdWJsaWMvanMvZmV0Y2gtY29tbWVudC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL3B1YmxpYy9qcy9pbWFnZS1sb2FkLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vcHVibGljL2pzL2xvZ2luLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vcHVibGljL2pzL25hdmJ1cmdlci5hbmltLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vcHVibGljL2pzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb25fYXBpLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vcHVibGljL2pzL29wdGlvbl9wb3N0X3RvZ2dsZS5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL3B1YmxpYy9qcy9vcHRpb25zX3Bvc3QuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9wdWJsaWMvanMvcHJvZmlsZV9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL3B1YmxpYy9qcy9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL3B1YmxpYy9qcy9zdWJqZWN0X2Ryb3Bkb3duLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vcHVibGljL2Fzc2V0cy9sb2dvL2luc2lkZXItaHViLnBuZyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL3B1YmxpYy9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzPzliNjEiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9wdWJsaWMvbWFpbi5zY3NzPzlhODgiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2luc2lkZXItaHViL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2luc2lkZXItaHViL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2luc2lkZXItaHViLy4vcHVibGljL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlbGVjdG9yRW5naW5lIiwiZmluZCIsInNlbGVjdG9yIiwiZWxlbWVudCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY29uY2F0IiwiRWxlbWVudCIsInByb3RvdHlwZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjYWxsIiwiZmluZE9uZSIsInF1ZXJ5U2VsZWN0b3IiLCJjaGlsZHJlbiIsImZpbHRlciIsImNoaWxkIiwibWF0Y2hlcyIsInBhcmVudHMiLCJhbmNlc3RvciIsInBhcmVudE5vZGUiLCJub2RlVHlwZSIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJwdXNoIiwicHJldiIsInByZXZpb3VzIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm5leHQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJnZXRVSUQiLCJwcmVmaXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRFbGVtZW50QnlJZCIsImdldFNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwiaHJlZkF0dHIiLCJpbmNsdWRlcyIsInN0YXJ0c1dpdGgiLCJzcGxpdCIsInRyaW0iLCJnZXRTZWxlY3RvckZyb21FbGVtZW50IiwiZ2V0RWxlbWVudEZyb21TZWxlY3RvciIsImdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvbkRlbGF5Iiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uIiwiTnVtYmVyIiwicGFyc2VGbG9hdCIsImZsb2F0VHJhbnNpdGlvbkRlbGF5IiwidHJpZ2dlclRyYW5zaXRpb25FbmQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJpc0VsZW1lbnQiLCJvYmoiLCJqcXVlcnkiLCJnZXRFbGVtZW50IiwibGVuZ3RoIiwiZW11bGF0ZVRyYW5zaXRpb25FbmQiLCJkdXJhdGlvbiIsImNhbGxlZCIsImVtdWxhdGVkRHVyYXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwibGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsInR5cGVDaGVja0NvbmZpZyIsImNvbXBvbmVudE5hbWUiLCJjb25maWciLCJjb25maWdUeXBlcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJleHBlY3RlZFR5cGVzIiwidmFsdWUiLCJ2YWx1ZVR5cGUiLCJ0b1N0cmluZyIsIm1hdGNoIiwidG9Mb3dlckNhc2UiLCJSZWdFeHAiLCJ0ZXN0IiwiVHlwZUVycm9yIiwidG9VcHBlckNhc2UiLCJpc1Zpc2libGUiLCJzdHlsZSIsImVsZW1lbnRTdHlsZSIsInBhcmVudE5vZGVTdHlsZSIsImRpc3BsYXkiLCJ2aXNpYmlsaXR5IiwiaXNEaXNhYmxlZCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZGlzYWJsZWQiLCJoYXNBdHRyaWJ1dGUiLCJmaW5kU2hhZG93Um9vdCIsImF0dGFjaFNoYWRvdyIsImdldFJvb3ROb2RlIiwicm9vdCIsIlNoYWRvd1Jvb3QiLCJub29wIiwicmVmbG93Iiwib2Zmc2V0SGVpZ2h0IiwiZ2V0alF1ZXJ5IiwialF1ZXJ5IiwiYm9keSIsImlzUlRMIiwiZGlyIiwiZGVmaW5lSlF1ZXJ5UGx1Z2luIiwicGx1Z2luIiwiY2FsbGJhY2siLCIkIiwibmFtZSIsIk5BTUUiLCJKUVVFUllfTk9fQ09ORkxJQ1QiLCJmbiIsImpRdWVyeUludGVyZmFjZSIsIkNvbnN0cnVjdG9yIiwibm9Db25mbGljdCIsInJlYWR5U3RhdGUiLCJleGVjdXRlIiwiZWxlbWVudE1hcCIsIk1hcCIsInNldCIsImtleSIsImluc3RhbmNlIiwiaGFzIiwiaW5zdGFuY2VNYXAiLCJnZXQiLCJzaXplIiwiY29uc29sZSIsImVycm9yIiwiQXJyYXkiLCJmcm9tIiwicmVtb3ZlIiwiZGVsZXRlIiwibmFtZXNwYWNlUmVnZXgiLCJzdHJpcE5hbWVSZWdleCIsInN0cmlwVWlkUmVnZXgiLCJldmVudFJlZ2lzdHJ5IiwidWlkRXZlbnQiLCJjdXN0b21FdmVudHMiLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsImN1c3RvbUV2ZW50c1JlZ2V4IiwibmF0aXZlRXZlbnRzIiwiU2V0IiwiZ2V0VWlkRXZlbnQiLCJ1aWQiLCJnZXRFdmVudCIsImZpbmRIYW5kbGVyIiwiZXZlbnRzIiwiaGFuZGxlciIsImRlbGVnYXRpb25TZWxlY3RvciIsInVpZEV2ZW50TGlzdCIsImkiLCJsZW4iLCJldmVudCIsIm9yaWdpbmFsSGFuZGxlciIsIm5vcm1hbGl6ZVBhcmFtcyIsIm9yaWdpbmFsVHlwZUV2ZW50IiwiZGVsZWdhdGlvbkZuIiwiZGVsZWdhdGlvbiIsInR5cGVFdmVudCIsImdldFR5cGVFdmVudCIsImFkZEhhbmRsZXIiLCJvbmVPZmYiLCJ3cmFwRm4iLCJyZWxhdGVkVGFyZ2V0IiwiZGVsZWdhdGVUYXJnZXQiLCJ0aGlzIiwiaGFuZGxlcnMiLCJwcmV2aW91c0ZuIiwicmVwbGFjZSIsImRvbUVsZW1lbnRzIiwidGFyZ2V0IiwiRXZlbnRIYW5kbGVyIiwib2ZmIiwidHlwZSIsImFwcGx5IiwiYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIiLCJib290c3RyYXBIYW5kbGVyIiwicmVtb3ZlSGFuZGxlciIsIkJvb2xlYW4iLCJvbiIsIm9uZSIsImluTmFtZXNwYWNlIiwiaXNOYW1lc3BhY2UiLCJlbGVtZW50RXZlbnQiLCJuYW1lc3BhY2UiLCJzdG9yZUVsZW1lbnRFdmVudCIsImhhbmRsZXJLZXkiLCJyZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMiLCJzbGljZSIsImtleUhhbmRsZXJzIiwidHJpZ2dlciIsImFyZ3MiLCJpc05hdGl2ZSIsImpRdWVyeUV2ZW50IiwiYnViYmxlcyIsIm5hdGl2ZURpc3BhdGNoIiwiZGVmYXVsdFByZXZlbnRlZCIsImV2dCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsIkN1c3RvbUV2ZW50IiwiY2FuY2VsYWJsZSIsImRlZmluZVByb3BlcnR5IiwicHJldmVudERlZmF1bHQiLCJCYXNlQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJfZWxlbWVudCIsIkRhdGEiLCJEQVRBX0tFWSIsImRpc3Bvc2UiLCJFVkVOVF9LRVkiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwicHJvcGVydHlOYW1lIiwiX3F1ZXVlQ2FsbGJhY2siLCJpc0FuaW1hdGVkIiwiW29iamVjdCBPYmplY3RdIiwiVkVSU0lPTiIsIkVycm9yIiwiQWxlcnQiLCJjbG9zZSIsInJvb3RFbGVtZW50IiwiX2dldFJvb3RFbGVtZW50IiwiY3VzdG9tRXZlbnQiLCJfdHJpZ2dlckNsb3NlRXZlbnQiLCJfcmVtb3ZlRWxlbWVudCIsImNsb3Nlc3QiLCJfZGVzdHJveUVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsImVhY2giLCJkYXRhIiwiYWxlcnRJbnN0YW5jZSIsImhhbmRsZURpc21pc3MiLCJCdXR0b24iLCJ0b2dnbGUiLCJzZXRBdHRyaWJ1dGUiLCJub3JtYWxpemVEYXRhIiwidmFsIiwibm9ybWFsaXplRGF0YUtleSIsImNociIsImJ1dHRvbiIsIk1hbmlwdWxhdG9yIiwic2V0RGF0YUF0dHJpYnV0ZSIsInJlbW92ZURhdGFBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJnZXREYXRhQXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJkYXRhc2V0IiwicHVyZUtleSIsImNoYXJBdCIsImdldERhdGFBdHRyaWJ1dGUiLCJvZmZzZXQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic2Nyb2xsVG9wIiwibGVmdCIsInNjcm9sbExlZnQiLCJwb3NpdGlvbiIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJEZWZhdWx0IiwiaW50ZXJ2YWwiLCJrZXlib2FyZCIsInNsaWRlIiwicGF1c2UiLCJ3cmFwIiwidG91Y2giLCJEZWZhdWx0VHlwZSIsIk9SREVSX05FWFQiLCJPUkRFUl9QUkVWIiwiRElSRUNUSU9OX0xFRlQiLCJESVJFQ1RJT05fUklHSFQiLCJDYXJvdXNlbCIsInN1cGVyIiwiX2l0ZW1zIiwiX2ludGVydmFsIiwiX2FjdGl2ZUVsZW1lbnQiLCJfaXNQYXVzZWQiLCJfaXNTbGlkaW5nIiwidG91Y2hUaW1lb3V0IiwidG91Y2hTdGFydFgiLCJ0b3VjaERlbHRhWCIsIl9jb25maWciLCJfZ2V0Q29uZmlnIiwiX2luZGljYXRvcnNFbGVtZW50IiwiX3RvdWNoU3VwcG9ydGVkIiwibmF2aWdhdG9yIiwibWF4VG91Y2hQb2ludHMiLCJfcG9pbnRlckV2ZW50IiwiUG9pbnRlckV2ZW50IiwiX2FkZEV2ZW50TGlzdGVuZXJzIiwiX3NsaWRlIiwibmV4dFdoZW5WaXNpYmxlIiwiaGlkZGVuIiwiY3ljbGUiLCJjbGVhckludGVydmFsIiwiX3VwZGF0ZUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJ2aXNpYmlsaXR5U3RhdGUiLCJiaW5kIiwidG8iLCJpbmRleCIsImFjdGl2ZUluZGV4IiwiX2dldEl0ZW1JbmRleCIsIm9yZGVyIiwiX2hhbmRsZVN3aXBlIiwiYWJzRGVsdGF4IiwiYWJzIiwiZGlyZWN0aW9uIiwiX2tleWRvd24iLCJfYWRkVG91Y2hFdmVudExpc3RlbmVycyIsInN0YXJ0IiwicG9pbnRlclR5cGUiLCJ0b3VjaGVzIiwiY2xpZW50WCIsIm1vdmUiLCJlbmQiLCJjbGVhclRpbWVvdXQiLCJpdGVtSW1nIiwiZSIsImFkZCIsInRhZ05hbWUiLCJpbmRleE9mIiwiX2dldEl0ZW1CeU9yZGVyIiwiYWN0aXZlRWxlbWVudCIsImlzTmV4dCIsImlzUHJldiIsImxhc3RJdGVtSW5kZXgiLCJpdGVtSW5kZXgiLCJfdHJpZ2dlclNsaWRlRXZlbnQiLCJldmVudERpcmVjdGlvbk5hbWUiLCJ0YXJnZXRJbmRleCIsImZyb21JbmRleCIsIl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50IiwiYWN0aXZlSW5kaWNhdG9yIiwiaW5kaWNhdG9ycyIsInBhcnNlSW50IiwiZWxlbWVudEludGVydmFsIiwiZGVmYXVsdEludGVydmFsIiwiZGlyZWN0aW9uT3JPcmRlciIsIl9kaXJlY3Rpb25Ub09yZGVyIiwiYWN0aXZlRWxlbWVudEluZGV4IiwibmV4dEVsZW1lbnQiLCJuZXh0RWxlbWVudEluZGV4IiwiaXNDeWNsaW5nIiwiZGlyZWN0aW9uYWxDbGFzc05hbWUiLCJvcmRlckNsYXNzTmFtZSIsIl9vcmRlclRvRGlyZWN0aW9uIiwidHJpZ2dlclNsaWRFdmVudCIsImNvbXBsZXRlQ2FsbEJhY2siLCJhY3Rpb24iLCJyaWRlIiwiY2Fyb3VzZWxJbnRlcmZhY2UiLCJzbGlkZUluZGV4IiwiZGF0YUFwaUNsaWNrSGFuZGxlciIsImNhcm91c2VscyIsInBhcmVudCIsIkNvbGxhcHNlIiwiX2lzVHJhbnNpdGlvbmluZyIsIl90cmlnZ2VyQXJyYXkiLCJpZCIsInRvZ2dsZUxpc3QiLCJlbGVtIiwiZmlsdGVyRWxlbWVudCIsImZvdW5kRWxlbSIsIl9zZWxlY3RvciIsIl9wYXJlbnQiLCJfZ2V0UGFyZW50IiwiX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyIsImhpZGUiLCJzaG93IiwiYWN0aXZlcyIsImFjdGl2ZXNEYXRhIiwiY29udGFpbmVyIiwidGVtcEFjdGl2ZURhdGEiLCJlbGVtQWN0aXZlIiwiY29sbGFwc2VJbnRlcmZhY2UiLCJkaW1lbnNpb24iLCJfZ2V0RGltZW5zaW9uIiwic2V0VHJhbnNpdGlvbmluZyIsInNjcm9sbFNpemUiLCJ0cmlnZ2VyQXJyYXlMZW5ndGgiLCJpc1RyYW5zaXRpb25pbmciLCJzZWxlY3RlZCIsInRyaWdnZXJBcnJheSIsImlzT3BlbiIsInRyaWdnZXJEYXRhIiwiUkVHRVhQX0tFWURPV04iLCJQTEFDRU1FTlRfVE9QIiwiUExBQ0VNRU5UX1RPUEVORCIsIlBMQUNFTUVOVF9CT1RUT00iLCJQTEFDRU1FTlRfQk9UVE9NRU5EIiwiUExBQ0VNRU5UX1JJR0hUIiwiUExBQ0VNRU5UX0xFRlQiLCJib3VuZGFyeSIsInJlZmVyZW5jZSIsInBvcHBlckNvbmZpZyIsImF1dG9DbG9zZSIsIkRyb3Bkb3duIiwiX3BvcHBlciIsIl9tZW51IiwiX2dldE1lbnVFbGVtZW50IiwiX2luTmF2YmFyIiwiX2RldGVjdE5hdmJhciIsImdldFBhcmVudEZyb21FbGVtZW50IiwiUG9wcGVyIiwicmVmZXJlbmNlRWxlbWVudCIsIl9nZXRQb3BwZXJDb25maWciLCJpc0Rpc3BsYXlTdGF0aWMiLCJtb2RpZmllcnMiLCJtb2RpZmllciIsImVuYWJsZWQiLCJjcmVhdGVQb3BwZXIiLCJmb2N1cyIsIl9jb21wbGV0ZUhpZGUiLCJkZXN0cm95IiwidXBkYXRlIiwiX2dldFBsYWNlbWVudCIsInBhcmVudERyb3Bkb3duIiwiaXNFbmQiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiX2dldE9mZnNldCIsIm1hcCIsInBvcHBlckRhdGEiLCJkZWZhdWx0QnNQb3BwZXJDb25maWciLCJwbGFjZW1lbnQiLCJvcHRpb25zIiwiX3NlbGVjdE1lbnVJdGVtIiwiaXRlbXMiLCJkcm9wZG93bkludGVyZmFjZSIsInRvZ2dsZXMiLCJjb250ZXh0IiwiY29tcG9zZWRQYXRoIiwiaXNNZW51VGFyZ2V0IiwiY2xpY2tFdmVudCIsImlzQWN0aXZlIiwic3RvcFByb3BhZ2F0aW9uIiwiZ2V0VG9nZ2xlQnV0dG9uIiwiY2xlYXJNZW51cyIsImdldEluc3RhbmNlIiwiY2xpY2siLCJkYXRhQXBpS2V5ZG93bkhhbmRsZXIiLCJnZXRXaWR0aCIsImRvY3VtZW50V2lkdGgiLCJjbGllbnRXaWR0aCIsImlubmVyV2lkdGgiLCJ3aWR0aCIsIl9kaXNhYmxlT3ZlckZsb3ciLCJfc2V0RWxlbWVudEF0dHJpYnV0ZXMiLCJjYWxjdWxhdGVkVmFsdWUiLCJhY3R1YWxWYWx1ZSIsIm92ZXJmbG93Iiwic3R5bGVQcm9wIiwic2Nyb2xsYmFyV2lkdGgiLCJyZXNldCIsIl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzIiwicmVtb3ZlUHJvcGVydHkiLCJjbGlja0NhbGxiYWNrIiwiQmFja2Ryb3AiLCJfaXNBcHBlbmRlZCIsIl9hcHBlbmQiLCJfZ2V0RWxlbWVudCIsIl9lbXVsYXRlQW5pbWF0aW9uIiwiYmFja2Ryb3AiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiIsIk1vZGFsIiwiX2RpYWxvZyIsIl9iYWNrZHJvcCIsIl9pbml0aWFsaXplQmFja0Ryb3AiLCJfaXNTaG93biIsIl9pZ25vcmVCYWNrZHJvcENsaWNrIiwiX2lzQW5pbWF0ZWQiLCJzaG93RXZlbnQiLCJzY3JvbGxCYXJIaWRlIiwiX2FkanVzdERpYWxvZyIsIl9zZXRFc2NhcGVFdmVudCIsIl9zZXRSZXNpemVFdmVudCIsIl9zaG93QmFja2Ryb3AiLCJfc2hvd0VsZW1lbnQiLCJfaGlkZU1vZGFsIiwiaHRtbEVsZW1lbnQiLCJoYW5kbGVVcGRhdGUiLCJtb2RhbEJvZHkiLCJfZW5mb3JjZUZvY3VzIiwiX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24iLCJfcmVzZXRBZGp1c3RtZW50cyIsInNjcm9sbEJhclJlc2V0IiwiY3VycmVudFRhcmdldCIsImlzTW9kYWxPdmVyZmxvd2luZyIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsIm92ZXJmbG93WSIsIm1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uIiwiZ2V0U2Nyb2xsQmFyV2lkdGgiLCJpc0JvZHlPdmVyZmxvd2luZyIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0Iiwic2Nyb2xsIiwiT2ZmY2FudmFzIiwiX2VuZm9yY2VGb2N1c09uRWxlbWVudCIsImJsdXIiLCJ1bmRlZmluZWQiLCJhbGxSZWFkeU9wZW4iLCJlbCIsInVyaUF0dHJzIiwiU0FGRV9VUkxfUEFUVEVSTiIsIkRBVEFfVVJMX1BBVFRFUk4iLCJhbGxvd2VkQXR0cmlidXRlIiwiYXR0ciIsImFsbG93ZWRBdHRyaWJ1dGVMaXN0IiwiYXR0ck5hbWUiLCJub2RlTmFtZSIsIm5vZGVWYWx1ZSIsInJlZ0V4cCIsImF0dHJSZWdleCIsInNhbml0aXplSHRtbCIsInVuc2FmZUh0bWwiLCJhbGxvd0xpc3QiLCJzYW5pdGl6ZUZuIiwiY3JlYXRlZERvY3VtZW50IiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiYWxsb3dsaXN0S2V5cyIsImVsZW1lbnRzIiwiZWxOYW1lIiwiYXR0cmlidXRlTGlzdCIsImFsbG93ZWRBdHRyaWJ1dGVzIiwiaW5uZXJIVE1MIiwiQlNDTFNfUFJFRklYX1JFR0VYIiwiRElTQUxMT1dFRF9BVFRSSUJVVEVTIiwiYW5pbWF0aW9uIiwidGVtcGxhdGUiLCJ0aXRsZSIsImRlbGF5IiwiaHRtbCIsImZhbGxiYWNrUGxhY2VtZW50cyIsImN1c3RvbUNsYXNzIiwic2FuaXRpemUiLCJBdHRhY2htZW50TWFwIiwiQVVUTyIsIlRPUCIsIlJJR0hUIiwiQk9UVE9NIiwiTEVGVCIsIioiLCJhIiwiYXJlYSIsImIiLCJiciIsImNvbCIsImNvZGUiLCJkaXYiLCJlbSIsImhyIiwiaDEiLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2IiwiaW1nIiwibGkiLCJvbCIsInAiLCJwcmUiLCJzIiwic21hbGwiLCJzcGFuIiwic3ViIiwic3VwIiwic3Ryb25nIiwidSIsInVsIiwiSElERSIsIkhJRERFTiIsIlNIT1ciLCJTSE9XTiIsIklOU0VSVEVEIiwiQ0xJQ0siLCJGT0NVU0lOIiwiRk9DVVNPVVQiLCJNT1VTRUVOVEVSIiwiTU9VU0VMRUFWRSIsIlRvb2x0aXAiLCJfaXNFbmFibGVkIiwiX3RpbWVvdXQiLCJfaG92ZXJTdGF0ZSIsIl9hY3RpdmVUcmlnZ2VyIiwidGlwIiwiX3NldExpc3RlbmVycyIsImVuYWJsZSIsImRpc2FibGUiLCJ0b2dnbGVFbmFibGVkIiwiX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldCIsIl9pc1dpdGhBY3RpdmVUcmlnZ2VyIiwiX2VudGVyIiwiX2xlYXZlIiwiZ2V0VGlwRWxlbWVudCIsIl9oaWRlTW9kYWxIYW5kbGVyIiwiaXNXaXRoQ29udGVudCIsInNoYWRvd1Jvb3QiLCJpc0luVGhlRG9tIiwib3duZXJEb2N1bWVudCIsInRpcElkIiwic2V0Q29udGVudCIsImF0dGFjaG1lbnQiLCJfZ2V0QXR0YWNobWVudCIsIl9hZGRBdHRhY2htZW50Q2xhc3MiLCJwcmV2SG92ZXJTdGF0ZSIsIl9jbGVhblRpcENsYXNzIiwiZ2V0VGl0bGUiLCJzZXRFbGVtZW50Q29udGVudCIsImNvbnRlbnQiLCJ0ZXh0Q29udGVudCIsInVwZGF0ZUF0dGFjaG1lbnQiLCJkYXRhS2V5IiwiX2dldERlbGVnYXRlQ29uZmlnIiwicGhhc2UiLCJfaGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlIiwib25GaXJzdFVwZGF0ZSIsImV2ZW50SW4iLCJldmVudE91dCIsIl9maXhUaXRsZSIsIm9yaWdpbmFsVGl0bGVUeXBlIiwiZGF0YUF0dHJpYnV0ZXMiLCJkYXRhQXR0ciIsInRhYkNsYXNzIiwidG9rZW4iLCJ0Q2xhc3MiLCJzdGF0ZSIsInBvcHBlciIsIlBvcG92ZXIiLCJfZ2V0Q29udGVudCIsIm1ldGhvZCIsIlNjcm9sbFNweSIsIl9zY3JvbGxFbGVtZW50IiwiX29mZnNldHMiLCJfdGFyZ2V0cyIsIl9hY3RpdmVUYXJnZXQiLCJfc2Nyb2xsSGVpZ2h0IiwiX3Byb2Nlc3MiLCJyZWZyZXNoIiwiYXV0b01ldGhvZCIsIm9mZnNldE1ldGhvZCIsIm9mZnNldEJhc2UiLCJfZ2V0U2Nyb2xsVG9wIiwiX2dldFNjcm9sbEhlaWdodCIsInRhcmdldFNlbGVjdG9yIiwidGFyZ2V0QkNSIiwiaGVpZ2h0IiwiaXRlbSIsInNvcnQiLCJwYWdlWU9mZnNldCIsIm1heCIsIl9nZXRPZmZzZXRIZWlnaHQiLCJpbm5lckhlaWdodCIsIm1heFNjcm9sbCIsIl9hY3RpdmF0ZSIsIl9jbGVhciIsInF1ZXJpZXMiLCJsaW5rIiwiam9pbiIsImxpc3RHcm91cCIsIm5hdkl0ZW0iLCJub2RlIiwic3B5IiwiVGFiIiwibGlzdEVsZW1lbnQiLCJpdGVtU2VsZWN0b3IiLCJoaWRlRXZlbnQiLCJjb21wbGV0ZSIsImFjdGl2ZSIsIl90cmFuc2l0aW9uQ29tcGxldGUiLCJkcm9wZG93bkNoaWxkIiwiZHJvcGRvd25FbGVtZW50IiwiZHJvcGRvd24iLCJhdXRvaGlkZSIsIlRvYXN0IiwiX2hhc01vdXNlSW50ZXJhY3Rpb24iLCJfaGFzS2V5Ym9hcmRJbnRlcmFjdGlvbiIsIl9jbGVhclRpbWVvdXQiLCJfbWF5YmVTY2hlZHVsZUhpZGUiLCJfb25JbnRlcmFjdGlvbiIsImlzSW50ZXJhY3RpbmciLCJmb3JtUHJvZmlsZUNoYW5nZVBhc3N3b3JkIiwiY2hhbmdlUGFzc3dvcmRCdG4iLCJ0b2dnbGVTaG93UGFzc3dvcmQiLCJwYXNzd29yZElucHV0RmllbGQiLCJwYXNzd29yZENoZWNrZXJJbmZvIiwiY2lybGNlQ2hlY2tJY29uIiwibG9hZGluZ1NwaW5uZXJDaGFuZ2VQYXNzd29yZCIsImFsZXJ0Qm94Q2hhbmdlUGFzc3dvcmQiLCJhbGVydE1lc3NhZ2VDaGFuZ2VQYXNzd29yZCIsImNoZWNrZWQiLCJzZW5kQ2hhbmdlUGFzc3dvcmRSZXF1ZXN0IiwiY2hhbmdlUGFzc3dvcmRVUkwiLCJyZXNwb25zZSIsImZldGNoIiwiaGVhZGVycyIsIm1vZGUiLCJjYWNoZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjdXJyZW50X3Bhc3N3b3JkIiwibmV3X3Bhc3N3b3JkIiwiY29uZmlybV9uZXdfcGFzc3dvcmQiLCJvayIsImpzb24iLCJzdGF0dXMiLCJlcnIiLCJtZXNzYWdlIiwidGhlbiIsInJlcyIsImVycm9yX21lc3NhZ2UiLCJzdWNjZXNzIiwic3VjY2Vzc19tZXNzYWdlIiwiY2F0Y2giLCJidG5Db21tZW50IiwiY29tbWVudEZvcm0iLCJsb2FkaW5nU3Bpbm5lciIsInNlc3Npb25UcmlnZ2VyRm9jdXNTdG9yYWdlIiwic2Vzc2lvblN0b3JhZ2UiLCJORVdfQ09NTUVOVCIsImNvbW1lbnRfYm9keSIsInJlbmRlckNvbW1lbnRzIiwicG9zdENvbW1lbnQiLCJjcmVkZW50aWFscyIsInRpbnltY2UiLCJnZXRDb250ZW50IiwicG9zdF9pZCIsInBvc3RJZCIsInN1YmplY3RfaWQiLCJzdWJqZWN0SWQiLCJsb2ciLCJzZXRJdGVtIiwibmV3X2NvbW1lbnQiLCJsb2NhdGlvbiIsImhyZWYiLCJ1cmwiLCJmb2N1c1RvTmV3Q29tbWVudCIsImNvbW1lbnRUb0ZvY3VzIiwiZ2V0SXRlbSIsImNvbW1lbnRCb2R5Rm9jdXMiLCJoYXNoIiwiY2xlYXIiLCJjaGVja1NuaXBwZXRDb2RlIiwiY29weUNvZGVCdG4iLCJzZXRQcm9wZXJ0eSIsImNvcHlDb2RlIiwiaW5pdGlhbGl6ZUNvcHlDb2RlQnRuIiwic25pcHBldENvbnRlbnQiLCJkdW1teVRleHRBcmVhIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJidG5TdWJtaXRQb3N0IiwiZmV0Y2hBbGxDb21tZW50Rm9yUG9zdCIsImxvZ28iLCJzcmMiLCJsb2dvSW1hZ2UiLCJsb2FkaW5nQ29udGFpbmVyIiwiYnRuU2lnbkluIiwicmVtZW1iZXJNZSIsImZvcm1Mb2dpbiIsImlucHV0RW1haWwiLCJpbnB1dFBhc3N3b3JkIiwibG9naW5TdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwidXNlcl9lbWFpbCIsInJlbWVtYmVyTWVTdGF0ZSIsInNldFJlbWVtYmVyTWUiLCJzZW5kTG9naW5SZXF1ZXN0IiwicmVtZW1iZXJfbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicmVsb2FkIiwiYXV0aGVudGljYXRlX3VybCIsImxvZ2luQ3JlZGVudGlhbHMiLCJuYXZUb2dnbGVyIiwibmF2YmFyQ29udGFpbmVyIiwibmF2SXNPcGVuIiwidG9nZ2xlT3B0aW9uQnRuIiwib3B0aW9uQ29udGFpbmVyIiwiZGVsZXRlT3B0aW9uQnRuIiwiZGVsZXRlRGlhbG9nIiwiZGVsZXRlRGlhbG9nQ2FuY2VsIiwiZGVsZXRlRGlhbG9nQ29uZmlybSIsInBpblBvc3QiLCJ1blBpblBvc3QiLCJvcHRpb25Jc09wZW4iLCJ0b2dnbGVPcHRpb25zIiwiZGVsZXRlUG9zdE9wZW5EaWFsb2ciLCJjbG9zZURpYWxvZyIsImNvbmZpcm1EZWxldGVQb3N0IiwiZGF0YVBvc3RJZCIsImRlbGV0ZU9uZVBvc3QiLCJVUkxfREVMRVRFX1BPU1QiLCJpbml0aWFsaXplUGluUG9zdCIsImluaXRpYWxpemVVblBpblBvc3QiLCJzZXRJc1BpblBvc3QiLCJwaW5PcHRpb25Db25maWciLCJzZXRQaW5Qb3N0IiwiVVJMX1BJTl9QT1NUIiwicGluX3Bvc3QiLCJkZWxldGVCdXR0b24iLCJkYXRhUG9zdElkX2RlbGV0ZSIsInVwZGF0ZUZvcm0iLCJ1cGRhdGVUaXRsZSIsInVwZGF0ZVRhZyIsInVwZGF0ZUJvZHkiLCJ1cGRhdGVCdG4iLCJkYXRhUG9zdElkX3VwZGF0ZSIsInBvc3RVcGRhdGVkQ29udGVudCIsInBvc3RfdGl0bGUiLCJwb3N0X3RhZyIsInBvc3RfYm9keSIsInVwZGF0ZU9uZVBvc3QiLCJyZXF1aXJlIiwiY2hhbmdlUGFzc3dvcmRCdG5Ecm9wRG93biIsImNoYW5nZVBhc3N3b3JkQ29udGFpbmVyIiwiYnRuVXBkYXRlUHJvZmlsZVNldHRpbmdzIiwiaW1hZ2VGaWxlIiwidXBsb2FkUHJvZmlsZUltZ1BpY2tlciIsImFsZXJ0UHJvZmlsZVNldHRpbmdzIiwiYWxlcnRUZXh0UHJvZmlsZVNldHRpbmdzIiwiZmlsZSIsImZpbGVzIiwidXBsb2FkUHJvZmlsZUltZ1ByZXZpZXciLCJpbWFnZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJTVEFOREFSRF9TSVpFIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImZvcm1Qcm9maWxlU2V0dGluZ3MiLCJwcm9maWxlU2V0dGluZ3NGdWxsbmFtZSIsInByb2ZpbGVTZXR0aW5nc0VtYWlsIiwibG9hZGluZ1Byb2ZpbGVTZXR0aW5ncyIsInByb2ZpbGVTZXR0aW5nc0Zvcm1EYXRhIiwiRm9ybURhdGEiLCJQUk9GSUxFX0lNQUdFIiwiYXBwZW5kIiwidXBkYXRlUHJvZmlsZUluZm9ybWF0aW9uIiwiVVBEQVRFX0lORk9fVVJMIiwicmVnVXNlck5hbWUiLCJyZWdVc2VyRW1haWwiLCJyZWdVc2VyUGFzc3dvcmQiLCJyZWdVc2VyQ29uZmlybVBhc3N3b3JkIiwiZm9ybVJlZ2lzdGVyIiwicGFzc3dvcmRDaGVja2VyIiwiY29uZmlybVBhc3N3b3JkQ2hlY2tlciIsImNoZWNrSWNvbiIsInNob3dQYXNzd29yZCIsIlNFU1NJT05fU1RPUkFHRV9OQU1FIiwiU0VTU0lPTl9TVE9SQUdFX0VNQUlMIiwicmVnaXN0ZXJTZXNzaW9uU3RvcmFnZSIsInJlY292ZXJDcmVkZW50aWFscyIsInVzZXJfbmFtZSIsImZvckVtYWlsTG9jYWxTdG9yYWdlIiwicGFzc3dvcmRGaWVsZCIsInN1YmplY3REcm9wZG93biIsInN1YmplY3REcm9wZG93bkdyb3VwIiwic3ViamVjdERyb3Bkb3duQnRuIiwic3ViamVjdERyb3Bkb3duSWNvbiIsInN1YmplY3REcm9wZG93bk9wZW4iLCJhcnJheUluZGV4RmluZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0Q7QUFDTjtBQUNRO0FBQ0o7QUFDRTtBQUNSO0FBQ1o7QUFDa0I7QUFDbEI7QUFDZ0I7QUFDVjtBQUNNO0FBQ0Q7QUFDcEI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxRUFBcUUsYUFBYTtBQUNsRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQix1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0EscUJBQXFCLG1FQUFTLGNBQWMsd0VBQWlCLHlDQUF5Qyx3RUFBaUI7QUFDdkgsa0JBQWtCLHdFQUFpQjtBQUNuQyxVQUFVO0FBQ1Y7O0FBRUEsK0JBQStCLGlFQUFjLENBQUMsOERBQVcsd0RBQXdEOztBQUVqSDtBQUNBO0FBQ0EsU0FBUyxFQUFFO0FBQ1g7O0FBRUEsWUFBWSxJQUFxQztBQUNqRCwwQkFBMEIsMkRBQVE7QUFDbEM7QUFDQTtBQUNBLFdBQVc7QUFDWCxVQUFVLG9FQUFpQjs7QUFFM0IsY0FBYyxtRUFBZ0IsOEJBQThCLDJD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ZmlsZSI6Im1haW4uY29tcGlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0Q29tcG9zaXRlUmVjdCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0Q29tcG9zaXRlUmVjdC5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBsaXN0U2Nyb2xsUGFyZW50cyBmcm9tIFwiLi9kb20tdXRpbHMvbGlzdFNjcm9sbFBhcmVudHMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBvcmRlck1vZGlmaWVycyBmcm9tIFwiLi91dGlscy9vcmRlck1vZGlmaWVycy5qc1wiO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gXCIuL3V0aWxzL2RlYm91bmNlLmpzXCI7XG5pbXBvcnQgdmFsaWRhdGVNb2RpZmllcnMgZnJvbSBcIi4vdXRpbHMvdmFsaWRhdGVNb2RpZmllcnMuanNcIjtcbmltcG9ydCB1bmlxdWVCeSBmcm9tIFwiLi91dGlscy91bmlxdWVCeS5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IG1lcmdlQnlOYW1lIGZyb20gXCIuL3V0aWxzL21lcmdlQnlOYW1lLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgeyBhdXRvIH0gZnJvbSBcIi4vZW51bXMuanNcIjtcbnZhciBJTlZBTElEX0VMRU1FTlRfRVJST1IgPSAnUG9wcGVyOiBJbnZhbGlkIHJlZmVyZW5jZSBvciBwb3BwZXIgYXJndW1lbnQgcHJvdmlkZWQuIFRoZXkgbXVzdCBiZSBlaXRoZXIgYSBET00gZWxlbWVudCBvciB2aXJ0dWFsIGVsZW1lbnQuJztcbnZhciBJTkZJTklURV9MT09QX0VSUk9SID0gJ1BvcHBlcjogQW4gaW5maW5pdGUgbG9vcCBpbiB0aGUgbW9kaWZpZXJzIGN5Y2xlIGhhcyBiZWVuIGRldGVjdGVkISBUaGUgY3ljbGUgaGFzIGJlZW4gaW50ZXJydXB0ZWQgdG8gcHJldmVudCBhIGJyb3dzZXIgY3Jhc2guJztcbnZhciBERUZBVUxUX09QVElPTlMgPSB7XG4gIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gIG1vZGlmaWVyczogW10sXG4gIHN0cmF0ZWd5OiAnYWJzb2x1dGUnXG59O1xuXG5mdW5jdGlvbiBhcmVWYWxpZEVsZW1lbnRzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuICFhcmdzLnNvbWUoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gIShlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9PT0gJ2Z1bmN0aW9uJyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wcGVyR2VuZXJhdG9yKGdlbmVyYXRvck9wdGlvbnMpIHtcbiAgaWYgKGdlbmVyYXRvck9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIGdlbmVyYXRvck9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfZ2VuZXJhdG9yT3B0aW9ucyA9IGdlbmVyYXRvck9wdGlvbnMsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0TW9kaWZpZXJzLFxuICAgICAgZGVmYXVsdE1vZGlmaWVycyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9PT0gdm9pZCAwID8gW10gOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICBkZWZhdWx0T3B0aW9ucyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPT09IHZvaWQgMCA/IERFRkFVTFRfT1BUSU9OUyA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZjI7XG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVQb3BwZXIocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG4gICAgfVxuXG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgIG9yZGVyZWRNb2RpZmllcnM6IFtdLFxuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCBkZWZhdWx0T3B0aW9ucyksXG4gICAgICBtb2RpZmllcnNEYXRhOiB7fSxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlLFxuICAgICAgICBwb3BwZXI6IHBvcHBlclxuICAgICAgfSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH07XG4gICAgdmFyIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB2YXIgaXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB2YXIgaW5zdGFuY2UgPSB7XG4gICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICBzZXRPcHRpb25zOiBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBzdGF0ZS5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIHN0YXRlLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICBzdGF0ZS5zY3JvbGxQYXJlbnRzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogaXNFbGVtZW50KHJlZmVyZW5jZSkgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UpIDogcmVmZXJlbmNlLmNvbnRleHRFbGVtZW50ID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlLmNvbnRleHRFbGVtZW50KSA6IFtdLFxuICAgICAgICAgIHBvcHBlcjogbGlzdFNjcm9sbFBhcmVudHMocG9wcGVyKVxuICAgICAgICB9OyAvLyBPcmRlcnMgdGhlIG1vZGlmaWVycyBiYXNlZCBvbiB0aGVpciBkZXBlbmRlbmNpZXMgYW5kIGBwaGFzZWBcbiAgICAgICAgLy8gcHJvcGVydGllc1xuXG4gICAgICAgIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJNb2RpZmllcnMobWVyZ2VCeU5hbWUoW10uY29uY2F0KGRlZmF1bHRNb2RpZmllcnMsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSkpOyAvLyBTdHJpcCBvdXQgZGlzYWJsZWQgbW9kaWZpZXJzXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgcmV0dXJuIG0uZW5hYmxlZDtcbiAgICAgICAgfSk7IC8vIFZhbGlkYXRlIHRoZSBwcm92aWRlZCBtb2RpZmllcnMgc28gdGhhdCB0aGUgY29uc3VtZXIgd2lsbCBnZXQgd2FybmVkXG4gICAgICAgIC8vIGlmIG9uZSBvZiB0aGUgbW9kaWZpZXJzIGlzIGludmFsaWQgZm9yIGFueSByZWFzb25cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgdmFyIG1vZGlmaWVycyA9IHVuaXF1ZUJ5KFtdLmNvbmNhdChvcmRlcmVkTW9kaWZpZXJzLCBzdGF0ZS5vcHRpb25zLm1vZGlmaWVycyksIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IF9yZWYubmFtZTtcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhbGlkYXRlTW9kaWZpZXJzKG1vZGlmaWVycyk7XG5cbiAgICAgICAgICBpZiAoZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5vcHRpb25zLnBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICAgICAgICAgIHZhciBmbGlwTW9kaWZpZXIgPSBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZpbmQoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgICAgIHZhciBuYW1lID0gX3JlZjIubmFtZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5hbWUgPT09ICdmbGlwJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIWZsaXBNb2RpZmllcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImF1dG9cIiBwbGFjZW1lbnRzIHJlcXVpcmUgdGhlIFwiZmxpcFwiIG1vZGlmaWVyIGJlJywgJ3ByZXNlbnQgYW5kIGVuYWJsZWQgdG8gd29yay4nXS5qb2luKCcgJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUocG9wcGVyKSxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luVG9wLFxuICAgICAgICAgICAgICBtYXJnaW5SaWdodCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpblJpZ2h0LFxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b20gPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5Cb3R0b20sXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5MZWZ0OyAvLyBXZSBubyBsb25nZXIgdGFrZSBpbnRvIGFjY291bnQgYG1hcmdpbnNgIG9uIHRoZSBwb3BwZXIsIGFuZCBpdCBjYW5cbiAgICAgICAgICAvLyBjYXVzZSBidWdzIHdpdGggcG9zaXRpb25pbmcsIHNvIHdlJ2xsIHdhcm4gdGhlIGNvbnN1bWVyXG5cblxuICAgICAgICAgIGlmIChbbWFyZ2luVG9wLCBtYXJnaW5SaWdodCwgbWFyZ2luQm90dG9tLCBtYXJnaW5MZWZ0XS5zb21lKGZ1bmN0aW9uIChtYXJnaW4pIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KG1hcmdpbik7XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihbJ1BvcHBlcjogQ1NTIFwibWFyZ2luXCIgc3R5bGVzIGNhbm5vdCBiZSB1c2VkIHRvIGFwcGx5IHBhZGRpbmcnLCAnYmV0d2VlbiB0aGUgcG9wcGVyIGFuZCBpdHMgcmVmZXJlbmNlIGVsZW1lbnQgb3IgYm91bmRhcnkuJywgJ1RvIHJlcGxpY2F0ZSBtYXJnaW4sIHVzZSB0aGUgYG9mZnNldGAgbW9kaWZpZXIsIGFzIHdlbGwgYXMnLCAndGhlIGBwYWRkaW5nYCBvcHRpb24gaW4gdGhlIGBwcmV2ZW50T3ZlcmZsb3dgIGFuZCBgZmxpcGAnLCAnbW9kaWZpZXJzLiddLmpvaW4oJyAnKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcnVuTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS51cGRhdGUoKTtcbiAgICAgIH0sXG4gICAgICAvLyBTeW5jIHVwZGF0ZSDigJMgaXQgd2lsbCBhbHdheXMgYmUgZXhlY3V0ZWQsIGV2ZW4gaWYgbm90IG5lY2Vzc2FyeS4gVGhpc1xuICAgICAgLy8gaXMgdXNlZnVsIGZvciBsb3cgZnJlcXVlbmN5IHVwZGF0ZXMgd2hlcmUgc3luYyBiZWhhdmlvciBzaW1wbGlmaWVzIHRoZVxuICAgICAgLy8gbG9naWMuXG4gICAgICAvLyBGb3IgaGlnaCBmcmVxdWVuY3kgdXBkYXRlcyAoZS5nLiBgcmVzaXplYCBhbmQgYHNjcm9sbGAgZXZlbnRzKSwgYWx3YXlzXG4gICAgICAvLyBwcmVmZXIgdGhlIGFzeW5jIFBvcHBlciN1cGRhdGUgbWV0aG9kXG4gICAgICBmb3JjZVVwZGF0ZTogZnVuY3Rpb24gZm9yY2VVcGRhdGUoKSB7XG4gICAgICAgIGlmIChpc0Rlc3Ryb3llZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfc3RhdGUkZWxlbWVudHMgPSBzdGF0ZS5lbGVtZW50cyxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IF9zdGF0ZSRlbGVtZW50cy5yZWZlcmVuY2UsXG4gICAgICAgICAgICBwb3BwZXIgPSBfc3RhdGUkZWxlbWVudHMucG9wcGVyOyAvLyBEb24ndCBwcm9jZWVkIGlmIGByZWZlcmVuY2VgIG9yIGBwb3BwZXJgIGFyZSBub3QgdmFsaWQgZWxlbWVudHNcbiAgICAgICAgLy8gYW55bW9yZVxuXG4gICAgICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKElOVkFMSURfRUxFTUVOVF9FUlJPUik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIFN0b3JlIHRoZSByZWZlcmVuY2UgYW5kIHBvcHBlciByZWN0cyB0byBiZSByZWFkIGJ5IG1vZGlmaWVyc1xuXG5cbiAgICAgICAgc3RhdGUucmVjdHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBnZXRDb21wb3NpdGVSZWN0KHJlZmVyZW5jZSwgZ2V0T2Zmc2V0UGFyZW50KHBvcHBlciksIHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCcpLFxuICAgICAgICAgIHBvcHBlcjogZ2V0TGF5b3V0UmVjdChwb3BwZXIpXG4gICAgICAgIH07IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIHJlc2V0IHRoZSBjdXJyZW50IHVwZGF0ZSBjeWNsZS4gVGhlXG4gICAgICAgIC8vIG1vc3QgY29tbW9uIHVzZSBjYXNlIGZvciB0aGlzIGlzIHRoZSBgZmxpcGAgbW9kaWZpZXIgY2hhbmdpbmcgdGhlXG4gICAgICAgIC8vIHBsYWNlbWVudCwgd2hpY2ggdGhlbiBuZWVkcyB0byByZS1ydW4gYWxsIHRoZSBtb2RpZmllcnMsIGJlY2F1c2UgdGhlXG4gICAgICAgIC8vIGxvZ2ljIHdhcyBwcmV2aW91c2x5IHJhbiBmb3IgdGhlIHByZXZpb3VzIHBsYWNlbWVudCBhbmQgaXMgdGhlcmVmb3JlXG4gICAgICAgIC8vIHN0YWxlL2luY29ycmVjdFxuXG4gICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50OyAvLyBPbiBlYWNoIHVwZGF0ZSBjeWNsZSwgdGhlIGBtb2RpZmllcnNEYXRhYCBwcm9wZXJ0eSBmb3IgZWFjaCBtb2RpZmllclxuICAgICAgICAvLyBpcyBmaWxsZWQgd2l0aCB0aGUgaW5pdGlhbCBkYXRhIHNwZWNpZmllZCBieSB0aGUgbW9kaWZpZXIuIFRoaXMgbWVhbnNcbiAgICAgICAgLy8gaXQgZG9lc24ndCBwZXJzaXN0IGFuZCBpcyBmcmVzaCBvbiBlYWNoIHVwZGF0ZS5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHBlcnNpc3RlbnQgZGF0YSwgdXNlIGAke25hbWV9I3BlcnNpc3RlbnRgXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgICAgIHJldHVybiBzdGF0ZS5tb2RpZmllcnNEYXRhW21vZGlmaWVyLm5hbWVdID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kaWZpZXIuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgX19kZWJ1Z19sb29wc19fID0gMDtcblxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBfX2RlYnVnX2xvb3BzX18gKz0gMTtcblxuICAgICAgICAgICAgaWYgKF9fZGVidWdfbG9vcHNfXyA+IDEwMCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKElORklOSVRFX0xPT1BfRVJST1IpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3RhdGUucmVzZXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICBpbmRleCA9IC0xO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZSA9IHN0YXRlLm9yZGVyZWRNb2RpZmllcnNbaW5kZXhdLFxuICAgICAgICAgICAgICBmbiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5mbixcbiAgICAgICAgICAgICAgX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5vcHRpb25zLFxuICAgICAgICAgICAgICBfb3B0aW9ucyA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPT09IHZvaWQgMCA/IHt9IDogX3N0YXRlJG9yZGVyZWRNb2RpZmllMixcbiAgICAgICAgICAgICAgbmFtZSA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5uYW1lO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc3RhdGUgPSBmbih7XG4gICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgICAgb3B0aW9uczogX29wdGlvbnMsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZVxuICAgICAgICAgICAgfSkgfHwgc3RhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gQXN5bmMgYW5kIG9wdGltaXN0aWNhbGx5IG9wdGltaXplZCB1cGRhdGUg4oCTIGl0IHdpbGwgbm90IGJlIGV4ZWN1dGVkIGlmXG4gICAgICAvLyBub3QgbmVjZXNzYXJ5IChkZWJvdW5jZWQgdG8gcnVuIGF0IG1vc3Qgb25jZS1wZXItdGljaylcbiAgICAgIHVwZGF0ZTogZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICBpbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgIHJlc29sdmUoc3RhdGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBpc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihJTlZBTElEX0VMRU1FTlRfRVJST1IpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgaW5zdGFuY2Uuc2V0T3B0aW9ucyhvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgaWYgKCFpc0Rlc3Ryb3llZCAmJiBvcHRpb25zLm9uRmlyc3RVcGRhdGUpIHtcbiAgICAgICAgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9KTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gZXhlY3V0ZSBhcmJpdHJhcnkgY29kZSBiZWZvcmUgdGhlIGZpcnN0XG4gICAgLy8gdXBkYXRlIGN5Y2xlIHJ1bnMuIFRoZXkgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgdXBkYXRlXG4gICAgLy8gY3ljbGUuIFRoaXMgaXMgdXNlZnVsIHdoZW4gYSBtb2RpZmllciBhZGRzIHNvbWUgcGVyc2lzdGVudCBkYXRhIHRoYXRcbiAgICAvLyBvdGhlciBtb2RpZmllcnMgbmVlZCB0byB1c2UsIGJ1dCB0aGUgbW9kaWZpZXIgaXMgcnVuIGFmdGVyIHRoZSBkZXBlbmRlbnRcbiAgICAvLyBvbmUuXG5cbiAgICBmdW5jdGlvbiBydW5Nb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgIHZhciBuYW1lID0gX3JlZjMubmFtZSxcbiAgICAgICAgICAgIF9yZWYzJG9wdGlvbnMgPSBfcmVmMy5vcHRpb25zLFxuICAgICAgICAgICAgb3B0aW9ucyA9IF9yZWYzJG9wdGlvbnMgPT09IHZvaWQgMCA/IHt9IDogX3JlZjMkb3B0aW9ucyxcbiAgICAgICAgICAgIGVmZmVjdCA9IF9yZWYzLmVmZmVjdDtcblxuICAgICAgICBpZiAodHlwZW9mIGVmZmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhciBjbGVhbnVwRm4gPSBlZmZlY3Qoe1xuICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBub29wRm4gPSBmdW5jdGlvbiBub29wRm4oKSB7fTtcblxuICAgICAgICAgIGVmZmVjdENsZWFudXBGbnMucHVzaChjbGVhbnVwRm4gfHwgbm9vcEZuKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgICB9KTtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH07XG59XG5leHBvcnQgdmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3IoKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBkZXRlY3RPdmVyZmxvdyB9OyIsImltcG9ydCB7IGlzU2hhZG93Um9vdCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhaW5zKHBhcmVudCwgY2hpbGQpIHtcbiAgdmFyIHJvb3ROb2RlID0gY2hpbGQuZ2V0Um9vdE5vZGUgJiYgY2hpbGQuZ2V0Um9vdE5vZGUoKTsgLy8gRmlyc3QsIGF0dGVtcHQgd2l0aCBmYXN0ZXIgbmF0aXZlIG1ldGhvZFxuXG4gIGlmIChwYXJlbnQuY29udGFpbnMoY2hpbGQpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gdGhlbiBmYWxsYmFjayB0byBjdXN0b20gaW1wbGVtZW50YXRpb24gd2l0aCBTaGFkb3cgRE9NIHN1cHBvcnRcbiAgZWxzZSBpZiAocm9vdE5vZGUgJiYgaXNTaGFkb3dSb290KHJvb3ROb2RlKSkge1xuICAgICAgdmFyIG5leHQgPSBjaGlsZDtcblxuICAgICAgZG8ge1xuICAgICAgICBpZiAobmV4dCAmJiBwYXJlbnQuaXNTYW1lTm9kZShuZXh0KSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXTogbmVlZCBhIGJldHRlciB3YXkgdG8gaGFuZGxlIHRoaXMuLi5cblxuXG4gICAgICAgIG5leHQgPSBuZXh0LnBhcmVudE5vZGUgfHwgbmV4dC5ob3N0O1xuICAgICAgfSB3aGlsZSAobmV4dCk7XG4gICAgfSAvLyBHaXZlIHVwLCB0aGUgcmVzdWx0IGlzIGZhbHNlXG5cblxuICByZXR1cm4gZmFsc2U7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHQsXG4gICAgdG9wOiByZWN0LnRvcCxcbiAgICByaWdodDogcmVjdC5yaWdodCxcbiAgICBib3R0b206IHJlY3QuYm90dG9tLFxuICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICB4OiByZWN0LmxlZnQsXG4gICAgeTogcmVjdC50b3BcbiAgfTtcbn0iLCJpbXBvcnQgeyB2aWV3cG9ydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldFZpZXdwb3J0UmVjdCBmcm9tIFwiLi9nZXRWaWV3cG9ydFJlY3QuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudFJlY3QgZnJvbSBcIi4vZ2V0RG9jdW1lbnRSZWN0LmpzXCI7XG5pbXBvcnQgbGlzdFNjcm9sbFBhcmVudHMgZnJvbSBcIi4vbGlzdFNjcm9sbFBhcmVudHMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4vZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IHsgaXNFbGVtZW50LCBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBjb250YWlucyBmcm9tIFwiLi9jb250YWlucy5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgcmVjdFRvQ2xpZW50UmVjdCBmcm9tIFwiLi4vdXRpbHMvcmVjdFRvQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IHsgbWF4LCBtaW4gfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuXG5mdW5jdGlvbiBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpO1xuICByZWN0LnRvcCA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRUb3A7XG4gIHJlY3QubGVmdCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50TGVmdDtcbiAgcmVjdC5ib3R0b20gPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnJpZ2h0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgcmVjdC53aWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3QuaGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIHJlY3QueCA9IHJlY3QubGVmdDtcbiAgcmVjdC55ID0gcmVjdC50b3A7XG4gIHJldHVybiByZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCkge1xuICByZXR1cm4gY2xpcHBpbmdQYXJlbnQgPT09IHZpZXdwb3J0ID8gcmVjdFRvQ2xpZW50UmVjdChnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCkpIDogaXNIVE1MRWxlbWVudChjbGlwcGluZ1BhcmVudCkgPyBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChjbGlwcGluZ1BhcmVudCkgOiByZWN0VG9DbGllbnRSZWN0KGdldERvY3VtZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpKTtcbn0gLy8gQSBcImNsaXBwaW5nIHBhcmVudFwiIGlzIGFuIG92ZXJmbG93YWJsZSBjb250YWluZXIgd2l0aCB0aGUgY2hhcmFjdGVyaXN0aWMgb2Zcbi8vIGNsaXBwaW5nIChvciBoaWRpbmcpIG92ZXJmbG93aW5nIGVsZW1lbnRzIHdpdGggYSBwb3NpdGlvbiBkaWZmZXJlbnQgZnJvbVxuLy8gYGluaXRpYWxgXG5cblxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIHtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xuICB2YXIgY2FuRXNjYXBlQ2xpcHBpbmcgPSBbJ2Fic29sdXRlJywgJ2ZpeGVkJ10uaW5kZXhPZihnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uKSA+PSAwO1xuICB2YXIgY2xpcHBlckVsZW1lbnQgPSBjYW5Fc2NhcGVDbGlwcGluZyAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpID8gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIDogZWxlbWVudDtcblxuICBpZiAoIWlzRWxlbWVudChjbGlwcGVyRWxlbWVudCkpIHtcbiAgICByZXR1cm4gW107XG4gIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzE0MTRcblxuXG4gIHJldHVybiBjbGlwcGluZ1BhcmVudHMuZmlsdGVyKGZ1bmN0aW9uIChjbGlwcGluZ1BhcmVudCkge1xuICAgIHJldHVybiBpc0VsZW1lbnQoY2xpcHBpbmdQYXJlbnQpICYmIGNvbnRhaW5zKGNsaXBwaW5nUGFyZW50LCBjbGlwcGVyRWxlbWVudCkgJiYgZ2V0Tm9kZU5hbWUoY2xpcHBpbmdQYXJlbnQpICE9PSAnYm9keSc7XG4gIH0pO1xufSAvLyBHZXRzIHRoZSBtYXhpbXVtIGFyZWEgdGhhdCB0aGUgZWxlbWVudCBpcyB2aXNpYmxlIGluIGR1ZSB0byBhbnkgbnVtYmVyIG9mXG4vLyBjbGlwcGluZyBwYXJlbnRzXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q2xpcHBpbmdSZWN0KGVsZW1lbnQsIGJvdW5kYXJ5LCByb290Qm91bmRhcnkpIHtcbiAgdmFyIG1haW5DbGlwcGluZ1BhcmVudHMgPSBib3VuZGFyeSA9PT0gJ2NsaXBwaW5nUGFyZW50cycgPyBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkgOiBbXS5jb25jYXQoYm91bmRhcnkpO1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gW10uY29uY2F0KG1haW5DbGlwcGluZ1BhcmVudHMsIFtyb290Qm91bmRhcnldKTtcbiAgdmFyIGZpcnN0Q2xpcHBpbmdQYXJlbnQgPSBjbGlwcGluZ1BhcmVudHNbMF07XG4gIHZhciBjbGlwcGluZ1JlY3QgPSBjbGlwcGluZ1BhcmVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2NSZWN0LCBjbGlwcGluZ1BhcmVudCkge1xuICAgIHZhciByZWN0ID0gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQpO1xuICAgIGFjY1JlY3QudG9wID0gbWF4KHJlY3QudG9wLCBhY2NSZWN0LnRvcCk7XG4gICAgYWNjUmVjdC5yaWdodCA9IG1pbihyZWN0LnJpZ2h0LCBhY2NSZWN0LnJpZ2h0KTtcbiAgICBhY2NSZWN0LmJvdHRvbSA9IG1pbihyZWN0LmJvdHRvbSwgYWNjUmVjdC5ib3R0b20pO1xuICAgIGFjY1JlY3QubGVmdCA9IG1heChyZWN0LmxlZnQsIGFjY1JlY3QubGVmdCk7XG4gICAgcmV0dXJuIGFjY1JlY3Q7XG4gIH0sIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGZpcnN0Q2xpcHBpbmdQYXJlbnQpKTtcbiAgY2xpcHBpbmdSZWN0LndpZHRoID0gY2xpcHBpbmdSZWN0LnJpZ2h0IC0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC5oZWlnaHQgPSBjbGlwcGluZ1JlY3QuYm90dG9tIC0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgY2xpcHBpbmdSZWN0LnggPSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LnkgPSBjbGlwcGluZ1JlY3QudG9wO1xuICByZXR1cm4gY2xpcHBpbmdSZWN0O1xufSIsImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZVNjcm9sbCBmcm9tIFwiLi9nZXROb2RlU2Nyb2xsLmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7IC8vIFJldHVybnMgdGhlIGNvbXBvc2l0ZSByZWN0IG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIG9mZnNldFBhcmVudC5cbi8vIENvbXBvc2l0ZSBtZWFucyBpdCB0YWtlcyBpbnRvIGFjY291bnQgdHJhbnNmb3JtcyBhcyB3ZWxsIGFzIGxheW91dC5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29tcG9zaXRlUmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCwgb2Zmc2V0UGFyZW50LCBpc0ZpeGVkKSB7XG4gIGlmIChpc0ZpeGVkID09PSB2b2lkIDApIHtcbiAgICBpc0ZpeGVkID0gZmFsc2U7XG4gIH1cblxuICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50KTtcbiAgdmFyIGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgc2Nyb2xsID0ge1xuICAgIHNjcm9sbExlZnQ6IDAsXG4gICAgc2Nyb2xsVG9wOiAwXG4gIH07XG4gIHZhciBvZmZzZXRzID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgIWlzRml4ZWQpIHtcbiAgICBpZiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSAhPT0gJ2JvZHknIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTA3OFxuICAgIGlzU2Nyb2xsUGFyZW50KGRvY3VtZW50RWxlbWVudCkpIHtcbiAgICAgIHNjcm9sbCA9IGdldE5vZGVTY3JvbGwob2Zmc2V0UGFyZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICBvZmZzZXRzID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCk7XG4gICAgICBvZmZzZXRzLnggKz0gb2Zmc2V0UGFyZW50LmNsaWVudExlZnQ7XG4gICAgICBvZmZzZXRzLnkgKz0gb2Zmc2V0UGFyZW50LmNsaWVudFRvcDtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgb2Zmc2V0cy54ID0gZ2V0V2luZG93U2Nyb2xsQmFyWChkb2N1bWVudEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogcmVjdC5sZWZ0ICsgc2Nyb2xsLnNjcm9sbExlZnQgLSBvZmZzZXRzLngsXG4gICAgeTogcmVjdC50b3AgKyBzY3JvbGwuc2Nyb2xsVG9wIC0gb2Zmc2V0cy55LFxuICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHRcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSB7XG4gIHJldHVybiBnZXRXaW5kb3coZWxlbWVudCkuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbn0iLCJpbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkge1xuICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gIHJldHVybiAoKGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQub3duZXJEb2N1bWVudCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICBlbGVtZW50LmRvY3VtZW50KSB8fCB3aW5kb3cuZG9jdW1lbnQpLmRvY3VtZW50RWxlbWVudDtcbn0iLCJpbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmltcG9ydCB7IG1heCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7IC8vIEdldHMgdGhlIGVudGlyZSBzaXplIG9mIHRoZSBzY3JvbGxhYmxlIGRvY3VtZW50IGFyZWEsIGV2ZW4gZXh0ZW5kaW5nIG91dHNpZGVcbi8vIG9mIHRoZSBgPGh0bWw+YCBhbmQgYDxib2R5PmAgcmVjdCBib3VuZHMgaWYgaG9yaXpvbnRhbGx5IHNjcm9sbGFibGVcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RG9jdW1lbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHdpblNjcm9sbCA9IGdldFdpbmRvd1Njcm9sbChlbGVtZW50KTtcbiAgdmFyIGJvZHkgPSAoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHk7XG4gIHZhciB3aWR0aCA9IG1heChodG1sLnNjcm9sbFdpZHRoLCBodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5zY3JvbGxXaWR0aCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCk7XG4gIHZhciBoZWlnaHQgPSBtYXgoaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0LCBib2R5ID8gYm9keS5zY3JvbGxIZWlnaHQgOiAwLCBib2R5ID8gYm9keS5jbGllbnRIZWlnaHQgOiAwKTtcbiAgdmFyIHggPSAtd2luU2Nyb2xsLnNjcm9sbExlZnQgKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpO1xuICB2YXIgeSA9IC13aW5TY3JvbGwuc2Nyb2xsVG9wO1xuXG4gIGlmIChnZXRDb21wdXRlZFN0eWxlKGJvZHkgfHwgaHRtbCkuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgIHggKz0gbWF4KGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCkgLSB3aWR0aDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHg6IHgsXG4gICAgeTogeVxuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEhUTUxFbGVtZW50U2Nyb2xsKGVsZW1lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBlbGVtZW50LnNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wOiBlbGVtZW50LnNjcm9sbFRvcFxuICB9O1xufSIsImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7IC8vIFJldHVybnMgdGhlIGxheW91dCByZWN0IG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIG9mZnNldFBhcmVudC4gTGF5b3V0XG4vLyBtZWFucyBpdCBkb2Vzbid0IHRha2UgaW50byBhY2NvdW50IHRyYW5zZm9ybXMuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldExheW91dFJlY3QoZWxlbWVudCkge1xuICB2YXIgY2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTsgLy8gVXNlIHRoZSBjbGllbnRSZWN0IHNpemVzIGlmIGl0J3Mgbm90IGJlZW4gdHJhbnNmb3JtZWQuXG4gIC8vIEZpeGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTIyM1xuXG4gIHZhciB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIHZhciBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC53aWR0aCAtIHdpZHRoKSA8PSAxKSB7XG4gICAgd2lkdGggPSBjbGllbnRSZWN0LndpZHRoO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3QuaGVpZ2h0IC0gaGVpZ2h0KSA8PSAxKSB7XG4gICAgaGVpZ2h0ID0gY2xpZW50UmVjdC5oZWlnaHQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IGVsZW1lbnQub2Zmc2V0TGVmdCxcbiAgICB5OiBlbGVtZW50Lm9mZnNldFRvcCxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHRcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXROb2RlTmFtZShlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50ID8gKGVsZW1lbnQubm9kZU5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xufSIsImltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRIVE1MRWxlbWVudFNjcm9sbCBmcm9tIFwiLi9nZXRIVE1MRWxlbWVudFNjcm9sbC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Tm9kZVNjcm9sbChub2RlKSB7XG4gIGlmIChub2RlID09PSBnZXRXaW5kb3cobm9kZSkgfHwgIWlzSFRNTEVsZW1lbnQobm9kZSkpIHtcbiAgICByZXR1cm4gZ2V0V2luZG93U2Nyb2xsKG5vZGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZXRIVE1MRWxlbWVudFNjcm9sbChub2RlKTtcbiAgfVxufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgaXNUYWJsZUVsZW1lbnQgZnJvbSBcIi4vaXNUYWJsZUVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcblxuZnVuY3Rpb24gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzgzN1xuICBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG59IC8vIGAub2Zmc2V0UGFyZW50YCByZXBvcnRzIGBudWxsYCBmb3IgZml4ZWQgZWxlbWVudHMsIHdoaWxlIGFic29sdXRlIGVsZW1lbnRzXG4vLyByZXR1cm4gdGhlIGNvbnRhaW5pbmcgYmxvY2tcblxuXG5mdW5jdGlvbiBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkge1xuICB2YXIgaXNGaXJlZm94ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSAhPT0gLTE7XG4gIHZhciBpc0lFID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50JykgIT09IC0xO1xuXG4gIGlmIChpc0lFICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAvLyBJbiBJRSA5LCAxMCBhbmQgMTEgZml4ZWQgZWxlbWVudHMgY29udGFpbmluZyBibG9jayBpcyBhbHdheXMgZXN0YWJsaXNoZWQgYnkgdGhlIHZpZXdwb3J0XG4gICAgdmFyIGVsZW1lbnRDc3MgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG4gICAgaWYgKGVsZW1lbnRDc3MucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG5cbiAgd2hpbGUgKGlzSFRNTEVsZW1lbnQoY3VycmVudE5vZGUpICYmIFsnaHRtbCcsICdib2R5J10uaW5kZXhPZihnZXROb2RlTmFtZShjdXJyZW50Tm9kZSkpIDwgMCkge1xuICAgIHZhciBjc3MgPSBnZXRDb21wdXRlZFN0eWxlKGN1cnJlbnROb2RlKTsgLy8gVGhpcyBpcyBub24tZXhoYXVzdGl2ZSBidXQgY292ZXJzIHRoZSBtb3N0IGNvbW1vbiBDU1MgcHJvcGVydGllcyB0aGF0XG4gICAgLy8gY3JlYXRlIGEgY29udGFpbmluZyBibG9jay5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQ29udGFpbmluZ19ibG9jayNpZGVudGlmeWluZ190aGVfY29udGFpbmluZ19ibG9ja1xuXG4gICAgaWYgKGNzcy50cmFuc2Zvcm0gIT09ICdub25lJyB8fCBjc3MucGVyc3BlY3RpdmUgIT09ICdub25lJyB8fCBjc3MuY29udGFpbiA9PT0gJ3BhaW50JyB8fCBbJ3RyYW5zZm9ybScsICdwZXJzcGVjdGl2ZSddLmluZGV4T2YoY3NzLndpbGxDaGFuZ2UpICE9PSAtMSB8fCBpc0ZpcmVmb3ggJiYgY3NzLndpbGxDaGFuZ2UgPT09ICdmaWx0ZXInIHx8IGlzRmlyZWZveCAmJiBjc3MuZmlsdGVyICYmIGNzcy5maWx0ZXIgIT09ICdub25lJykge1xuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59IC8vIEdldHMgdGhlIGNsb3Nlc3QgYW5jZXN0b3IgcG9zaXRpb25lZCBlbGVtZW50LiBIYW5kbGVzIHNvbWUgZWRnZSBjYXNlcyxcbi8vIHN1Y2ggYXMgdGFibGUgYW5jZXN0b3JzIGFuZCBjcm9zcyBicm93c2VyIGJ1Z3MuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgdmFyIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCk7XG5cbiAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiBpc1RhYmxlRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG4gIH1cblxuICBpZiAob2Zmc2V0UGFyZW50ICYmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnaHRtbCcgfHwgZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2JvZHknICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHx8IHdpbmRvdztcbn0iLCJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgeyBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIHtcbiAgaWYgKGdldE5vZGVOYW1lKGVsZW1lbnQpID09PSAnaHRtbCcpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiAoLy8gdGhpcyBpcyBhIHF1aWNrZXIgKGJ1dCBsZXNzIHR5cGUgc2FmZSkgd2F5IHRvIHNhdmUgcXVpdGUgc29tZSBieXRlcyBmcm9tIHRoZSBidW5kbGVcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dXG4gICAgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgZWxlbWVudC5hc3NpZ25lZFNsb3QgfHwgLy8gc3RlcCBpbnRvIHRoZSBzaGFkb3cgRE9NIG9mIHRoZSBwYXJlbnQgb2YgYSBzbG90dGVkIG5vZGVcbiAgICBlbGVtZW50LnBhcmVudE5vZGUgfHwgKCAvLyBET00gRWxlbWVudCBkZXRlY3RlZFxuICAgIGlzU2hhZG93Um9vdChlbGVtZW50KSA/IGVsZW1lbnQuaG9zdCA6IG51bGwpIHx8IC8vIFNoYWRvd1Jvb3QgZGV0ZWN0ZWRcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogSFRNTEVsZW1lbnQgaXMgYSBOb2RlXG4gICAgZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIC8vIGZhbGxiYWNrXG5cbiAgKTtcbn0iLCJpbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChub2RlKSB7XG4gIGlmIChbJ2h0bWwnLCAnYm9keScsICcjZG9jdW1lbnQnXS5pbmRleE9mKGdldE5vZGVOYW1lKG5vZGUpKSA+PSAwKSB7XG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICAgIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQuYm9keTtcbiAgfVxuXG4gIGlmIChpc0hUTUxFbGVtZW50KG5vZGUpICYmIGlzU2Nyb2xsUGFyZW50KG5vZGUpKSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICByZXR1cm4gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUobm9kZSkpO1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB2aXN1YWxWaWV3cG9ydCA9IHdpbi52aXN1YWxWaWV3cG9ydDtcbiAgdmFyIHdpZHRoID0gaHRtbC5jbGllbnRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGh0bWwuY2xpZW50SGVpZ2h0O1xuICB2YXIgeCA9IDA7XG4gIHZhciB5ID0gMDsgLy8gTkI6IFRoaXMgaXNuJ3Qgc3VwcG9ydGVkIG9uIGlPUyA8PSAxMi4gSWYgdGhlIGtleWJvYXJkIGlzIG9wZW4sIHRoZSBwb3BwZXJcbiAgLy8gY2FuIGJlIG9ic2N1cmVkIHVuZGVybmVhdGggaXQuXG4gIC8vIEFsc28sIGBodG1sLmNsaWVudEhlaWdodGAgYWRkcyB0aGUgYm90dG9tIGJhciBoZWlnaHQgaW4gU2FmYXJpIGlPUywgZXZlblxuICAvLyBpZiBpdCBpc24ndCBvcGVuLCBzbyBpZiB0aGlzIGlzbid0IGF2YWlsYWJsZSwgdGhlIHBvcHBlciB3aWxsIGJlIGRldGVjdGVkXG4gIC8vIHRvIG92ZXJmbG93IHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbiB0b28gZWFybHkuXG5cbiAgaWYgKHZpc3VhbFZpZXdwb3J0KSB7XG4gICAgd2lkdGggPSB2aXN1YWxWaWV3cG9ydC53aWR0aDtcbiAgICBoZWlnaHQgPSB2aXN1YWxWaWV3cG9ydC5oZWlnaHQ7IC8vIFVzZXMgTGF5b3V0IFZpZXdwb3J0IChsaWtlIENocm9tZTsgU2FmYXJpIGRvZXMgbm90IGN1cnJlbnRseSlcbiAgICAvLyBJbiBDaHJvbWUsIGl0IHJldHVybnMgYSB2YWx1ZSB2ZXJ5IGNsb3NlIHRvIDAgKCsvLSkgYnV0IGNvbnRhaW5zIHJvdW5kaW5nXG4gICAgLy8gZXJyb3JzIGR1ZSB0byBmbG9hdGluZyBwb2ludCBudW1iZXJzLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIHByZWNpc2lvbi5cbiAgICAvLyBTYWZhcmkgcmV0dXJucyBhIG51bWJlciA8PSAwLCB1c3VhbGx5IDwgLTEgd2hlbiBwaW5jaC16b29tZWRcbiAgICAvLyBGZWF0dXJlIGRldGVjdGlvbiBmYWlscyBpbiBtb2JpbGUgZW11bGF0aW9uIG1vZGUgaW4gQ2hyb21lLlxuICAgIC8vIE1hdGguYWJzKHdpbi5pbm5lcldpZHRoIC8gdmlzdWFsVmlld3BvcnQuc2NhbGUgLSB2aXN1YWxWaWV3cG9ydC53aWR0aCkgPFxuICAgIC8vIDAuMDAxXG4gICAgLy8gRmFsbGJhY2sgaGVyZTogXCJOb3QgU2FmYXJpXCIgdXNlckFnZW50XG5cbiAgICBpZiAoIS9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgIHggPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0O1xuICAgICAgeSA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSxcbiAgICB5OiB5XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93KG5vZGUpIHtcbiAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICBpZiAobm9kZS50b1N0cmluZygpICE9PSAnW29iamVjdCBXaW5kb3ddJykge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50O1xuICAgIHJldHVybiBvd25lckRvY3VtZW50ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cgOiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsKG5vZGUpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhub2RlKTtcbiAgdmFyIHNjcm9sbExlZnQgPSB3aW4ucGFnZVhPZmZzZXQ7XG4gIHZhciBzY3JvbGxUb3AgPSB3aW4ucGFnZVlPZmZzZXQ7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IHNjcm9sbFRvcFxuICB9O1xufSIsImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCkge1xuICAvLyBJZiA8aHRtbD4gaGFzIGEgQ1NTIHdpZHRoIGdyZWF0ZXIgdGhhbiB0aGUgdmlld3BvcnQsIHRoZW4gdGhpcyB3aWxsIGJlXG4gIC8vIGluY29ycmVjdCBmb3IgUlRMLlxuICAvLyBQb3BwZXIgMSBpcyBicm9rZW4gaW4gdGhpcyBjYXNlIGFuZCBuZXZlciBoYWQgYSBidWcgcmVwb3J0IHNvIGxldCdzIGFzc3VtZVxuICAvLyBpdCdzIG5vdCBhbiBpc3N1ZS4gSSBkb24ndCB0aGluayBhbnlvbmUgZXZlciBzcGVjaWZpZXMgd2lkdGggb24gPGh0bWw+XG4gIC8vIGFueXdheS5cbiAgLy8gQnJvd3NlcnMgd2hlcmUgdGhlIGxlZnQgc2Nyb2xsYmFyIGRvZXNuJ3QgY2F1c2UgYW4gaXNzdWUgcmVwb3J0IGAwYCBmb3JcbiAgLy8gdGhpcyAoZS5nLiBFZGdlIDIwMTksIElFMTEsIFNhZmFyaSlcbiAgcmV0dXJuIGdldEJvdW5kaW5nQ2xpZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpLmxlZnQgKyBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCkuc2Nyb2xsTGVmdDtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuXG5mdW5jdGlvbiBpc0VsZW1lbnQobm9kZSkge1xuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5FbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQobm9kZSkge1xuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5IVE1MRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNTaGFkb3dSb290KG5vZGUpIHtcbiAgLy8gSUUgMTEgaGFzIG5vIFNoYWRvd1Jvb3RcbiAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLlNoYWRvd1Jvb3Q7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdDtcbn1cblxuZXhwb3J0IHsgaXNFbGVtZW50LCBpc0hUTUxFbGVtZW50LCBpc1NoYWRvd1Jvb3QgfTsiLCJpbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1Njcm9sbFBhcmVudChlbGVtZW50KSB7XG4gIC8vIEZpcmVmb3ggd2FudHMgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcbiAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSxcbiAgICAgIG92ZXJmbG93ID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3csXG4gICAgICBvdmVyZmxvd1ggPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1gsXG4gICAgICBvdmVyZmxvd1kgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1k7XG5cbiAgcmV0dXJuIC9hdXRvfHNjcm9sbHxvdmVybGF5fGhpZGRlbi8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCk7XG59IiwiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RhYmxlRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBbJ3RhYmxlJywgJ3RkJywgJ3RoJ10uaW5kZXhPZihnZXROb2RlTmFtZShlbGVtZW50KSkgPj0gMDtcbn0iLCJpbXBvcnQgZ2V0U2Nyb2xsUGFyZW50IGZyb20gXCIuL2dldFNjcm9sbFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiO1xuLypcbmdpdmVuIGEgRE9NIGVsZW1lbnQsIHJldHVybiB0aGUgbGlzdCBvZiBhbGwgc2Nyb2xsIHBhcmVudHMsIHVwIHRoZSBsaXN0IG9mIGFuY2Vzb3JzXG51bnRpbCB3ZSBnZXQgdG8gdGhlIHRvcCB3aW5kb3cgb2JqZWN0LiBUaGlzIGxpc3QgaXMgd2hhdCB3ZSBhdHRhY2ggc2Nyb2xsIGxpc3RlbmVyc1xudG8sIGJlY2F1c2UgaWYgYW55IG9mIHRoZXNlIHBhcmVudCBlbGVtZW50cyBzY3JvbGwsIHdlJ2xsIG5lZWQgdG8gcmUtY2FsY3VsYXRlIHRoZVxucmVmZXJlbmNlIGVsZW1lbnQncyBwb3NpdGlvbi5cbiovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RTY3JvbGxQYXJlbnRzKGVsZW1lbnQsIGxpc3QpIHtcbiAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICBpZiAobGlzdCA9PT0gdm9pZCAwKSB7XG4gICAgbGlzdCA9IFtdO1xuICB9XG5cbiAgdmFyIHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChlbGVtZW50KTtcbiAgdmFyIGlzQm9keSA9IHNjcm9sbFBhcmVudCA9PT0gKChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keSk7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coc2Nyb2xsUGFyZW50KTtcbiAgdmFyIHRhcmdldCA9IGlzQm9keSA/IFt3aW5dLmNvbmNhdCh3aW4udmlzdWFsVmlld3BvcnQgfHwgW10sIGlzU2Nyb2xsUGFyZW50KHNjcm9sbFBhcmVudCkgPyBzY3JvbGxQYXJlbnQgOiBbXSkgOiBzY3JvbGxQYXJlbnQ7XG4gIHZhciB1cGRhdGVkTGlzdCA9IGxpc3QuY29uY2F0KHRhcmdldCk7XG4gIHJldHVybiBpc0JvZHkgPyB1cGRhdGVkTGlzdCA6IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBpc0JvZHkgdGVsbHMgdXMgdGFyZ2V0IHdpbGwgYmUgYW4gSFRNTEVsZW1lbnQgaGVyZVxuICB1cGRhdGVkTGlzdC5jb25jYXQobGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZSh0YXJnZXQpKSk7XG59IiwiZXhwb3J0IHZhciB0b3AgPSAndG9wJztcbmV4cG9ydCB2YXIgYm90dG9tID0gJ2JvdHRvbSc7XG5leHBvcnQgdmFyIHJpZ2h0ID0gJ3JpZ2h0JztcbmV4cG9ydCB2YXIgbGVmdCA9ICdsZWZ0JztcbmV4cG9ydCB2YXIgYXV0byA9ICdhdXRvJztcbmV4cG9ydCB2YXIgYmFzZVBsYWNlbWVudHMgPSBbdG9wLCBib3R0b20sIHJpZ2h0LCBsZWZ0XTtcbmV4cG9ydCB2YXIgc3RhcnQgPSAnc3RhcnQnO1xuZXhwb3J0IHZhciBlbmQgPSAnZW5kJztcbmV4cG9ydCB2YXIgY2xpcHBpbmdQYXJlbnRzID0gJ2NsaXBwaW5nUGFyZW50cyc7XG5leHBvcnQgdmFyIHZpZXdwb3J0ID0gJ3ZpZXdwb3J0JztcbmV4cG9ydCB2YXIgcG9wcGVyID0gJ3BvcHBlcic7XG5leHBvcnQgdmFyIHJlZmVyZW5jZSA9ICdyZWZlcmVuY2UnO1xuZXhwb3J0IHZhciB2YXJpYXRpb25QbGFjZW1lbnRzID0gLyojX19QVVJFX18qL2Jhc2VQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIGFjYy5jb25jYXQoW3BsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG59LCBbXSk7XG5leHBvcnQgdmFyIHBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovW10uY29uY2F0KGJhc2VQbGFjZW1lbnRzLCBbYXV0b10pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIGFjYy5jb25jYXQoW3BsYWNlbWVudCwgcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTsgLy8gbW9kaWZpZXJzIHRoYXQgbmVlZCB0byByZWFkIHRoZSBET01cblxuZXhwb3J0IHZhciBiZWZvcmVSZWFkID0gJ2JlZm9yZVJlYWQnO1xuZXhwb3J0IHZhciByZWFkID0gJ3JlYWQnO1xuZXhwb3J0IHZhciBhZnRlclJlYWQgPSAnYWZ0ZXJSZWFkJzsgLy8gcHVyZS1sb2dpYyBtb2RpZmllcnNcblxuZXhwb3J0IHZhciBiZWZvcmVNYWluID0gJ2JlZm9yZU1haW4nO1xuZXhwb3J0IHZhciBtYWluID0gJ21haW4nO1xuZXhwb3J0IHZhciBhZnRlck1haW4gPSAnYWZ0ZXJNYWluJzsgLy8gbW9kaWZpZXIgd2l0aCB0aGUgcHVycG9zZSB0byB3cml0ZSB0byB0aGUgRE9NIChvciB3cml0ZSBpbnRvIGEgZnJhbWV3b3JrIHN0YXRlKVxuXG5leHBvcnQgdmFyIGJlZm9yZVdyaXRlID0gJ2JlZm9yZVdyaXRlJztcbmV4cG9ydCB2YXIgd3JpdGUgPSAnd3JpdGUnO1xuZXhwb3J0IHZhciBhZnRlcldyaXRlID0gJ2FmdGVyV3JpdGUnO1xuZXhwb3J0IHZhciBtb2RpZmllclBoYXNlcyA9IFtiZWZvcmVSZWFkLCByZWFkLCBhZnRlclJlYWQsIGJlZm9yZU1haW4sIG1haW4sIGFmdGVyTWFpbiwgYmVmb3JlV3JpdGUsIHdyaXRlLCBhZnRlcldyaXRlXTsiLCJleHBvcnQgKiBmcm9tIFwiLi9lbnVtcy5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vbW9kaWZpZXJzL2luZGV4LmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgcG9wcGVyR2VuZXJhdG9yLCBkZXRlY3RPdmVyZmxvdywgY3JlYXRlUG9wcGVyIGFzIGNyZWF0ZVBvcHBlckJhc2UgfSBmcm9tIFwiLi9jcmVhdGVQb3BwZXIuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIgfSBmcm9tIFwiLi9wb3BwZXIuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIgYXMgY3JlYXRlUG9wcGVyTGl0ZSB9IGZyb20gXCIuL3BvcHBlci1saXRlLmpzXCI7IiwiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjsgLy8gVGhpcyBtb2RpZmllciB0YWtlcyB0aGUgc3R5bGVzIHByZXBhcmVkIGJ5IHRoZSBgY29tcHV0ZVN0eWxlc2AgbW9kaWZpZXJcbi8vIGFuZCBhcHBsaWVzIHRoZW0gdG8gdGhlIEhUTUxFbGVtZW50cyBzdWNoIGFzIHBvcHBlciBhbmQgYXJyb3dcblxuZnVuY3Rpb24gYXBwbHlTdHlsZXMoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBzdHlsZSA9IHN0YXRlLnN0eWxlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBGbG93IGRvZXNuJ3Qgc3VwcG9ydCB0byBleHRlbmQgdGhpcyBwcm9wZXJ0eSwgYnV0IGl0J3MgdGhlIG1vc3RcbiAgICAvLyBlZmZlY3RpdmUgd2F5IHRvIGFwcGx5IHN0eWxlcyB0byBhbiBIVE1MRWxlbWVudFxuICAgIC8vICRGbG93Rml4TWVbY2Fubm90LXdyaXRlXVxuXG5cbiAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuXG4gICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUgPT09IHRydWUgPyAnJyA6IHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZTtcbiAgdmFyIGluaXRpYWxTdHlsZXMgPSB7XG4gICAgcG9wcGVyOiB7XG4gICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgIGxlZnQ6ICcwJyxcbiAgICAgIHRvcDogJzAnLFxuICAgICAgbWFyZ2luOiAnMCdcbiAgICB9LFxuICAgIGFycm93OiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgIH0sXG4gICAgcmVmZXJlbmNlOiB7fVxuICB9O1xuICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLnBvcHBlci5zdHlsZSwgaW5pdGlhbFN0eWxlcy5wb3BwZXIpO1xuICBzdGF0ZS5zdHlsZXMgPSBpbml0aWFsU3R5bGVzO1xuXG4gIGlmIChzdGF0ZS5lbGVtZW50cy5hcnJvdykge1xuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMuYXJyb3cuc3R5bGUsIGluaXRpYWxTdHlsZXMuYXJyb3cpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTtcbiAgICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICAgIHZhciBzdHlsZVByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhzdGF0ZS5zdHlsZXMuaGFzT3duUHJvcGVydHkobmFtZSkgPyBzdGF0ZS5zdHlsZXNbbmFtZV0gOiBpbml0aWFsU3R5bGVzW25hbWVdKTsgLy8gU2V0IGFsbCB2YWx1ZXMgdG8gYW4gZW1wdHkgc3RyaW5nIHRvIHVuc2V0IHRoZW1cblxuICAgICAgdmFyIHN0eWxlID0gc3R5bGVQcm9wZXJ0aWVzLnJlZHVjZShmdW5jdGlvbiAoc3R5bGUsIHByb3BlcnR5KSB7XG4gICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9ICcnO1xuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICB9LCB7fSk7IC8vIGFycm93IGlzIG9wdGlvbmFsICsgdmlydHVhbCBlbGVtZW50c1xuXG4gICAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46IGFwcGx5U3R5bGVzLFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgcmVxdWlyZXM6IFsnY29tcHV0ZVN0eWxlcyddXG59OyIsImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBjb250YWlucyBmcm9tIFwiLi4vZG9tLXV0aWxzL2NvbnRhaW5zLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB3aXRoaW4gZnJvbSBcIi4uL3V0aWxzL3dpdGhpbi5qc1wiO1xuaW1wb3J0IG1lcmdlUGFkZGluZ09iamVjdCBmcm9tIFwiLi4vdXRpbHMvbWVyZ2VQYWRkaW5nT2JqZWN0LmpzXCI7XG5pbXBvcnQgZXhwYW5kVG9IYXNoTWFwIGZyb20gXCIuLi91dGlscy9leHBhbmRUb0hhc2hNYXAuanNcIjtcbmltcG9ydCB7IGxlZnQsIHJpZ2h0LCBiYXNlUGxhY2VtZW50cywgdG9wLCBib3R0b20gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgdG9QYWRkaW5nT2JqZWN0ID0gZnVuY3Rpb24gdG9QYWRkaW5nT2JqZWN0KHBhZGRpbmcsIHN0YXRlKSB7XG4gIHBhZGRpbmcgPSB0eXBlb2YgcGFkZGluZyA9PT0gJ2Z1bmN0aW9uJyA/IHBhZGRpbmcoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiBwYWRkaW5nO1xuICByZXR1cm4gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbn07XG5cbmZ1bmN0aW9uIGFycm93KF9yZWYpIHtcbiAgdmFyIF9zdGF0ZSRtb2RpZmllcnNEYXRhJDtcblxuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgYXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgdmFyIGlzVmVydGljYWwgPSBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgaWYgKCFhcnJvd0VsZW1lbnQgfHwgIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcGFkZGluZ09iamVjdCA9IHRvUGFkZGluZ09iamVjdChvcHRpb25zLnBhZGRpbmcsIHN0YXRlKTtcbiAgdmFyIGFycm93UmVjdCA9IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KTtcbiAgdmFyIG1pblByb3AgPSBheGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICB2YXIgbWF4UHJvcCA9IGF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICB2YXIgZW5kRGlmZiA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtsZW5dICsgc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdIC0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnBvcHBlcltsZW5dO1xuICB2YXIgc3RhcnREaWZmID0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXTtcbiAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGFycm93RWxlbWVudCk7XG4gIHZhciBjbGllbnRTaXplID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBheGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRIZWlnaHQgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoIHx8IDAgOiAwO1xuICB2YXIgY2VudGVyVG9SZWZlcmVuY2UgPSBlbmREaWZmIC8gMiAtIHN0YXJ0RGlmZiAvIDI7IC8vIE1ha2Ugc3VyZSB0aGUgYXJyb3cgZG9lc24ndCBvdmVyZmxvdyB0aGUgcG9wcGVyIGlmIHRoZSBjZW50ZXIgcG9pbnQgaXNcbiAgLy8gb3V0c2lkZSBvZiB0aGUgcG9wcGVyIGJvdW5kc1xuXG4gIHZhciBtaW4gPSBwYWRkaW5nT2JqZWN0W21pblByb3BdO1xuICB2YXIgbWF4ID0gY2xpZW50U2l6ZSAtIGFycm93UmVjdFtsZW5dIC0gcGFkZGluZ09iamVjdFttYXhQcm9wXTtcbiAgdmFyIGNlbnRlciA9IGNsaWVudFNpemUgLyAyIC0gYXJyb3dSZWN0W2xlbl0gLyAyICsgY2VudGVyVG9SZWZlcmVuY2U7XG4gIHZhciBvZmZzZXQgPSB3aXRoaW4obWluLCBjZW50ZXIsIG1heCk7IC8vIFByZXZlbnRzIGJyZWFraW5nIHN5bnRheCBoaWdobGlnaHRpbmcuLi5cblxuICB2YXIgYXhpc1Byb3AgPSBheGlzO1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gKF9zdGF0ZSRtb2RpZmllcnNEYXRhJCA9IHt9LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSRbYXhpc1Byb3BdID0gb2Zmc2V0LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQuY2VudGVyT2Zmc2V0ID0gb2Zmc2V0IC0gY2VudGVyLCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQpO1xufVxuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQsXG4gICAgICBhcnJvd0VsZW1lbnQgPSBfb3B0aW9ucyRlbGVtZW50ID09PSB2b2lkIDAgPyAnW2RhdGEtcG9wcGVyLWFycm93XScgOiBfb3B0aW9ucyRlbGVtZW50O1xuXG4gIGlmIChhcnJvd0VsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfSAvLyBDU1Mgc2VsZWN0b3JcblxuXG4gIGlmICh0eXBlb2YgYXJyb3dFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICBpZiAoIWFycm93RWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoYXJyb3dFbGVtZW50KSkge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhcnJvd1wiIGVsZW1lbnQgbXVzdCBiZSBhbiBIVE1MRWxlbWVudCAobm90IGFuIFNWR0VsZW1lbnQpLicsICdUbyB1c2UgYW4gU1ZHIGFycm93LCB3cmFwIGl0IGluIGFuIEhUTUxFbGVtZW50IHRoYXQgd2lsbCBiZSB1c2VkIGFzJywgJ3RoZSBhcnJvdy4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29udGFpbnMoc3RhdGUuZWxlbWVudHMucG9wcGVyLCBhcnJvd0VsZW1lbnQpKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhcnJvd1wiIG1vZGlmaWVyXFwncyBgZWxlbWVudGAgbXVzdCBiZSBhIGNoaWxkIG9mIHRoZSBwb3BwZXInLCAnZWxlbWVudC4nXS5qb2luKCcgJykpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIHN0YXRlLmVsZW1lbnRzLmFycm93ID0gYXJyb3dFbGVtZW50O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYXJyb3cnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogYXJyb3csXG4gIGVmZmVjdDogZWZmZWN0LFxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J11cbn07IiwiaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgYm90dG9tIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyByb3VuZCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHVuc2V0U2lkZXMgPSB7XG4gIHRvcDogJ2F1dG8nLFxuICByaWdodDogJ2F1dG8nLFxuICBib3R0b206ICdhdXRvJyxcbiAgbGVmdDogJ2F1dG8nXG59OyAvLyBSb3VuZCB0aGUgb2Zmc2V0cyB0byB0aGUgbmVhcmVzdCBzdWl0YWJsZSBzdWJwaXhlbCBiYXNlZCBvbiB0aGUgRFBSLlxuLy8gWm9vbWluZyBjYW4gY2hhbmdlIHRoZSBEUFIsIGJ1dCBpdCBzZWVtcyB0byByZXBvcnQgYSB2YWx1ZSB0aGF0IHdpbGxcbi8vIGNsZWFubHkgZGl2aWRlIHRoZSB2YWx1ZXMgaW50byB0aGUgYXBwcm9wcmlhdGUgc3VicGl4ZWxzLlxuXG5mdW5jdGlvbiByb3VuZE9mZnNldHNCeURQUihfcmVmKSB7XG4gIHZhciB4ID0gX3JlZi54LFxuICAgICAgeSA9IF9yZWYueTtcbiAgdmFyIHdpbiA9IHdpbmRvdztcbiAgdmFyIGRwciA9IHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gIHJldHVybiB7XG4gICAgeDogcm91bmQocm91bmQoeCAqIGRwcikgLyBkcHIpIHx8IDAsXG4gICAgeTogcm91bmQocm91bmQoeSAqIGRwcikgLyBkcHIpIHx8IDBcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcFRvU3R5bGVzKF9yZWYyKSB7XG4gIHZhciBfT2JqZWN0JGFzc2lnbjI7XG5cbiAgdmFyIHBvcHBlciA9IF9yZWYyLnBvcHBlcixcbiAgICAgIHBvcHBlclJlY3QgPSBfcmVmMi5wb3BwZXJSZWN0LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZjIucGxhY2VtZW50LFxuICAgICAgb2Zmc2V0cyA9IF9yZWYyLm9mZnNldHMsXG4gICAgICBwb3NpdGlvbiA9IF9yZWYyLnBvc2l0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX3JlZjIuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgYWRhcHRpdmUgPSBfcmVmMi5hZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9yZWYyLnJvdW5kT2Zmc2V0cztcblxuICB2YXIgX3JlZjMgPSByb3VuZE9mZnNldHMgPT09IHRydWUgPyByb3VuZE9mZnNldHNCeURQUihvZmZzZXRzKSA6IHR5cGVvZiByb3VuZE9mZnNldHMgPT09ICdmdW5jdGlvbicgPyByb3VuZE9mZnNldHMob2Zmc2V0cykgOiBvZmZzZXRzLFxuICAgICAgX3JlZjMkeCA9IF9yZWYzLngsXG4gICAgICB4ID0gX3JlZjMkeCA9PT0gdm9pZCAwID8gMCA6IF9yZWYzJHgsXG4gICAgICBfcmVmMyR5ID0gX3JlZjMueSxcbiAgICAgIHkgPSBfcmVmMyR5ID09PSB2b2lkIDAgPyAwIDogX3JlZjMkeTtcblxuICB2YXIgaGFzWCA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3gnKTtcbiAgdmFyIGhhc1kgPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd5Jyk7XG4gIHZhciBzaWRlWCA9IGxlZnQ7XG4gIHZhciBzaWRlWSA9IHRvcDtcbiAgdmFyIHdpbiA9IHdpbmRvdztcblxuICBpZiAoYWRhcHRpdmUpIHtcbiAgICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KHBvcHBlcik7XG4gICAgdmFyIGhlaWdodFByb3AgPSAnY2xpZW50SGVpZ2h0JztcbiAgICB2YXIgd2lkdGhQcm9wID0gJ2NsaWVudFdpZHRoJztcblxuICAgIGlmIChvZmZzZXRQYXJlbnQgPT09IGdldFdpbmRvdyhwb3BwZXIpKSB7XG4gICAgICBvZmZzZXRQYXJlbnQgPSBnZXREb2N1bWVudEVsZW1lbnQocG9wcGVyKTtcblxuICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiAhPT0gJ3N0YXRpYycpIHtcbiAgICAgICAgaGVpZ2h0UHJvcCA9ICdzY3JvbGxIZWlnaHQnO1xuICAgICAgICB3aWR0aFByb3AgPSAnc2Nyb2xsV2lkdGgnO1xuICAgICAgfVxuICAgIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FzdF06IGZvcmNlIHR5cGUgcmVmaW5lbWVudCwgd2UgY29tcGFyZSBvZmZzZXRQYXJlbnQgd2l0aCB3aW5kb3cgYWJvdmUsIGJ1dCBGbG93IGRvZXNuJ3QgZGV0ZWN0IGl0XG5cblxuICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudDtcblxuICAgIGlmIChwbGFjZW1lbnQgPT09IHRvcCkge1xuICAgICAgc2lkZVkgPSBib3R0b207IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuXG4gICAgICB5IC09IG9mZnNldFBhcmVudFtoZWlnaHRQcm9wXSAtIHBvcHBlclJlY3QuaGVpZ2h0O1xuICAgICAgeSAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gbGVmdCkge1xuICAgICAgc2lkZVggPSByaWdodDsgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG5cbiAgICAgIHggLT0gb2Zmc2V0UGFyZW50W3dpZHRoUHJvcF0gLSBwb3BwZXJSZWN0LndpZHRoO1xuICAgICAgeCAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbW1vblN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICB9LCBhZGFwdGl2ZSAmJiB1bnNldFNpZGVzKTtcblxuICBpZiAoZ3B1QWNjZWxlcmF0aW9uKSB7XG4gICAgdmFyIF9PYmplY3QkYXNzaWduO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduID0ge30sIF9PYmplY3QkYXNzaWduW3NpZGVZXSA9IGhhc1kgPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ25bc2lkZVhdID0gaGFzWCA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbi50cmFuc2Zvcm0gPSAod2luLmRldmljZVBpeGVsUmF0aW8gfHwgMSkgPCAyID8gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIiA6IFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweCwgMClcIiwgX09iamVjdCRhc3NpZ24pKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbjIgPSB7fSwgX09iamVjdCRhc3NpZ24yW3NpZGVZXSA9IGhhc1kgPyB5ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMltzaWRlWF0gPSBoYXNYID8geCArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjIudHJhbnNmb3JtID0gJycsIF9PYmplY3QkYXNzaWduMikpO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlU3R5bGVzKF9yZWY0KSB7XG4gIHZhciBzdGF0ZSA9IF9yZWY0LnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWY0Lm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPSBvcHRpb25zLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGdwdUFjY2VsZXJhdCxcbiAgICAgIF9vcHRpb25zJGFkYXB0aXZlID0gb3B0aW9ucy5hZGFwdGl2ZSxcbiAgICAgIGFkYXB0aXZlID0gX29wdGlvbnMkYWRhcHRpdmUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhZGFwdGl2ZSxcbiAgICAgIF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9IG9wdGlvbnMucm91bmRPZmZzZXRzLFxuICAgICAgcm91bmRPZmZzZXRzID0gX29wdGlvbnMkcm91bmRPZmZzZXRzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcm91bmRPZmZzZXRzO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB2YXIgdHJhbnNpdGlvblByb3BlcnR5ID0gZ2V0Q29tcHV0ZWRTdHlsZShzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLnRyYW5zaXRpb25Qcm9wZXJ0eSB8fCAnJztcblxuICAgIGlmIChhZGFwdGl2ZSAmJiBbJ3RyYW5zZm9ybScsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXS5zb21lKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuIHRyYW5zaXRpb25Qcm9wZXJ0eS5pbmRleE9mKHByb3BlcnR5KSA+PSAwO1xuICAgIH0pKSB7XG4gICAgICBjb25zb2xlLndhcm4oWydQb3BwZXI6IERldGVjdGVkIENTUyB0cmFuc2l0aW9ucyBvbiBhdCBsZWFzdCBvbmUgb2YgdGhlIGZvbGxvd2luZycsICdDU1MgcHJvcGVydGllczogXCJ0cmFuc2Zvcm1cIiwgXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIi4nLCAnXFxuXFxuJywgJ0Rpc2FibGUgdGhlIFwiY29tcHV0ZVN0eWxlc1wiIG1vZGlmaWVyXFwncyBgYWRhcHRpdmVgIG9wdGlvbiB0byBhbGxvdycsICdmb3Igc21vb3RoIHRyYW5zaXRpb25zLCBvciByZW1vdmUgdGhlc2UgcHJvcGVydGllcyBmcm9tIHRoZSBDU1MnLCAndHJhbnNpdGlvbiBkZWNsYXJhdGlvbiBvbiB0aGUgcG9wcGVyIGVsZW1lbnQgaWYgb25seSB0cmFuc2l0aW9uaW5nJywgJ29wYWNpdHkgb3IgYmFja2dyb3VuZC1jb2xvciBmb3IgZXhhbXBsZS4nLCAnXFxuXFxuJywgJ1dlIHJlY29tbWVuZCB1c2luZyB0aGUgcG9wcGVyIGVsZW1lbnQgYXMgYSB3cmFwcGVyIGFyb3VuZCBhbiBpbm5lcicsICdlbGVtZW50IHRoYXQgY2FuIGhhdmUgYW55IENTUyBwcm9wZXJ0eSB0cmFuc2l0aW9uZWQgZm9yIGFuaW1hdGlvbnMuJ10uam9pbignICcpKTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29tbW9uU3R5bGVzID0ge1xuICAgIHBsYWNlbWVudDogZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpLFxuICAgIHBvcHBlcjogc3RhdGUuZWxlbWVudHMucG9wcGVyLFxuICAgIHBvcHBlclJlY3Q6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBncHVBY2NlbGVyYXRpb246IGdwdUFjY2VsZXJhdGlvblxuICB9O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMucG9wcGVyLCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgYWRhcHRpdmU6IGFkYXB0aXZlLFxuICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3cgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5hcnJvdyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5hcnJvdywgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93LFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBhZGFwdGl2ZTogZmFsc2UsXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgIH0pKSk7XG4gIH1cblxuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXBsYWNlbWVudCc6IHN0YXRlLnBsYWNlbWVudFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2NvbXB1dGVTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ2JlZm9yZVdyaXRlJyxcbiAgZm46IGNvbXB1dGVTdHlsZXMsXG4gIGRhdGE6IHt9XG59OyIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRXaW5kb3cuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgcGFzc2l2ZSA9IHtcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRzY3JvbGwgPSBvcHRpb25zLnNjcm9sbCxcbiAgICAgIHNjcm9sbCA9IF9vcHRpb25zJHNjcm9sbCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHNjcm9sbCxcbiAgICAgIF9vcHRpb25zJHJlc2l6ZSA9IG9wdGlvbnMucmVzaXplLFxuICAgICAgcmVzaXplID0gX29wdGlvbnMkcmVzaXplID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcmVzaXplO1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KHN0YXRlLmVsZW1lbnRzLnBvcHBlcik7XG4gIHZhciBzY3JvbGxQYXJlbnRzID0gW10uY29uY2F0KHN0YXRlLnNjcm9sbFBhcmVudHMucmVmZXJlbmNlLCBzdGF0ZS5zY3JvbGxQYXJlbnRzLnBvcHBlcik7XG5cbiAgaWYgKHNjcm9sbCkge1xuICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICBzY3JvbGxQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChyZXNpemUpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgICAgc2Nyb2xsUGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVzaXplKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdldmVudExpc3RlbmVycycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogZnVuY3Rpb24gZm4oKSB7fSxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIGRhdGE6IHt9XG59OyIsImltcG9ydCBnZXRPcHBvc2l0ZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgY29tcHV0ZUF1dG9QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2NvbXB1dGVBdXRvUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyBib3R0b20sIHRvcCwgc3RhcnQsIHJpZ2h0LCBsZWZ0LCBhdXRvIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuLi91dGlscy9nZXRWYXJpYXRpb24uanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5mdW5jdGlvbiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwbGFjZW1lbnQpIHtcbiAgaWYgKGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA9PT0gYXV0bykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBvcHBvc2l0ZVBsYWNlbWVudCA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHJldHVybiBbZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQocGxhY2VtZW50KSwgb3Bwb3NpdGVQbGFjZW1lbnQsIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KG9wcG9zaXRlUGxhY2VtZW50KV07XG59XG5cbmZ1bmN0aW9uIGZsaXAoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFsdEF4aXMsXG4gICAgICBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgPSBvcHRpb25zLmZhbGxiYWNrUGxhY2VtZW50cyxcbiAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcsXG4gICAgICBib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBvcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJGZsaXBWYXJpYXRpbyA9IG9wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zJGZsaXBWYXJpYXRpbyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGZsaXBWYXJpYXRpbyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyA9IG9wdGlvbnMuYWxsb3dlZEF1dG9QbGFjZW1lbnRzO1xuICB2YXIgcHJlZmVycmVkUGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpO1xuICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gYmFzZVBsYWNlbWVudCA9PT0gcHJlZmVycmVkUGxhY2VtZW50O1xuICB2YXIgZmFsbGJhY2tQbGFjZW1lbnRzID0gc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzIHx8IChpc0Jhc2VQbGFjZW1lbnQgfHwgIWZsaXBWYXJpYXRpb25zID8gW2dldE9wcG9zaXRlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCldIDogZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocHJlZmVycmVkUGxhY2VtZW50KSk7XG4gIHZhciBwbGFjZW1lbnRzID0gW3ByZWZlcnJlZFBsYWNlbWVudF0uY29uY2F0KGZhbGxiYWNrUGxhY2VtZW50cykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA9PT0gYXV0byA/IGNvbXB1dGVBdXRvUGxhY2VtZW50KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZyxcbiAgICAgIGZsaXBWYXJpYXRpb25zOiBmbGlwVmFyaWF0aW9ucyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50czogYWxsb3dlZEF1dG9QbGFjZW1lbnRzXG4gICAgfSkgOiBwbGFjZW1lbnQpO1xuICB9LCBbXSk7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIGNoZWNrc01hcCA9IG5ldyBNYXAoKTtcbiAgdmFyIG1ha2VGYWxsYmFja0NoZWNrcyA9IHRydWU7XG4gIHZhciBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzWzBdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGxhY2VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwbGFjZW1lbnQgPSBwbGFjZW1lbnRzW2ldO1xuXG4gICAgdmFyIF9iYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuXG4gICAgdmFyIGlzU3RhcnRWYXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gc3RhcnQ7XG4gICAgdmFyIGlzVmVydGljYWwgPSBbdG9wLCBib3R0b21dLmluZGV4T2YoX2Jhc2VQbGFjZW1lbnQpID49IDA7XG4gICAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG4gICAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgfSk7XG4gICAgdmFyIG1haW5WYXJpYXRpb25TaWRlID0gaXNWZXJ0aWNhbCA/IGlzU3RhcnRWYXJpYXRpb24gPyByaWdodCA6IGxlZnQgOiBpc1N0YXJ0VmFyaWF0aW9uID8gYm90dG9tIDogdG9wO1xuXG4gICAgaWYgKHJlZmVyZW5jZVJlY3RbbGVuXSA+IHBvcHBlclJlY3RbbGVuXSkge1xuICAgICAgbWFpblZhcmlhdGlvblNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluVmFyaWF0aW9uU2lkZSk7XG4gICAgfVxuXG4gICAgdmFyIGFsdFZhcmlhdGlvblNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluVmFyaWF0aW9uU2lkZSk7XG4gICAgdmFyIGNoZWNrcyA9IFtdO1xuXG4gICAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W19iYXNlUGxhY2VtZW50XSA8PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1ttYWluVmFyaWF0aW9uU2lkZV0gPD0gMCwgb3ZlcmZsb3dbYWx0VmFyaWF0aW9uU2lkZV0gPD0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrcy5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgIHJldHVybiBjaGVjaztcbiAgICB9KSkge1xuICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgICAgbWFrZUZhbGxiYWNrQ2hlY2tzID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjaGVja3NNYXAuc2V0KHBsYWNlbWVudCwgY2hlY2tzKTtcbiAgfVxuXG4gIGlmIChtYWtlRmFsbGJhY2tDaGVja3MpIHtcbiAgICAvLyBgMmAgbWF5IGJlIGRlc2lyZWQgaW4gc29tZSBjYXNlcyDigJMgcmVzZWFyY2ggbGF0ZXJcbiAgICB2YXIgbnVtYmVyT2ZDaGVja3MgPSBmbGlwVmFyaWF0aW9ucyA/IDMgOiAxO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoX2kpIHtcbiAgICAgIHZhciBmaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50cy5maW5kKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICAgICAgdmFyIGNoZWNrcyA9IGNoZWNrc01hcC5nZXQocGxhY2VtZW50KTtcblxuICAgICAgICBpZiAoY2hlY2tzKSB7XG4gICAgICAgICAgcmV0dXJuIGNoZWNrcy5zbGljZSgwLCBfaSkuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZml0dGluZ1BsYWNlbWVudCkge1xuICAgICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBmaXR0aW5nUGxhY2VtZW50O1xuICAgICAgICByZXR1cm4gXCJicmVha1wiO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmb3IgKHZhciBfaSA9IG51bWJlck9mQ2hlY2tzOyBfaSA+IDA7IF9pLS0pIHtcbiAgICAgIHZhciBfcmV0ID0gX2xvb3AoX2kpO1xuXG4gICAgICBpZiAoX3JldCA9PT0gXCJicmVha1wiKSBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhdGUucGxhY2VtZW50ICE9PSBmaXJzdEZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwID0gdHJ1ZTtcbiAgICBzdGF0ZS5wbGFjZW1lbnQgPSBmaXJzdEZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgc3RhdGUucmVzZXQgPSB0cnVlO1xuICB9XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdmbGlwJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IGZsaXAsXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J10sXG4gIGRhdGE6IHtcbiAgICBfc2tpcDogZmFsc2VcbiAgfVxufTsiLCJpbXBvcnQgeyB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcblxuZnVuY3Rpb24gZ2V0U2lkZU9mZnNldHMob3ZlcmZsb3csIHJlY3QsIHByZXZlbnRlZE9mZnNldHMpIHtcbiAgaWYgKHByZXZlbnRlZE9mZnNldHMgPT09IHZvaWQgMCkge1xuICAgIHByZXZlbnRlZE9mZnNldHMgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRvcDogb3ZlcmZsb3cudG9wIC0gcmVjdC5oZWlnaHQgLSBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgcmlnaHQ6IG92ZXJmbG93LnJpZ2h0IC0gcmVjdC53aWR0aCArIHByZXZlbnRlZE9mZnNldHMueCxcbiAgICBib3R0b206IG92ZXJmbG93LmJvdHRvbSAtIHJlY3QuaGVpZ2h0ICsgcHJldmVudGVkT2Zmc2V0cy55LFxuICAgIGxlZnQ6IG92ZXJmbG93LmxlZnQgLSByZWN0LndpZHRoIC0gcHJldmVudGVkT2Zmc2V0cy54XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChvdmVyZmxvdykge1xuICByZXR1cm4gW3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdF0uc29tZShmdW5jdGlvbiAoc2lkZSkge1xuICAgIHJldHVybiBvdmVyZmxvd1tzaWRlXSA+PSAwO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGlkZShfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBwcmV2ZW50ZWRPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wcmV2ZW50T3ZlcmZsb3c7XG4gIHZhciByZWZlcmVuY2VPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgZWxlbWVudENvbnRleHQ6ICdyZWZlcmVuY2UnXG4gIH0pO1xuICB2YXIgcG9wcGVyQWx0T3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGFsdEJvdW5kYXJ5OiB0cnVlXG4gIH0pO1xuICB2YXIgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocmVmZXJlbmNlT3ZlcmZsb3csIHJlZmVyZW5jZVJlY3QpO1xuICB2YXIgcG9wcGVyRXNjYXBlT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHBvcHBlckFsdE92ZXJmbG93LCBwb3BwZXJSZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKTtcbiAgdmFyIGlzUmVmZXJlbmNlSGlkZGVuID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyk7XG4gIHZhciBoYXNQb3BwZXJFc2NhcGVkID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHBvcHBlckVzY2FwZU9mZnNldHMpO1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0ge1xuICAgIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0czogcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzLFxuICAgIHBvcHBlckVzY2FwZU9mZnNldHM6IHBvcHBlckVzY2FwZU9mZnNldHMsXG4gICAgaXNSZWZlcmVuY2VIaWRkZW46IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgIGhhc1BvcHBlckVzY2FwZWQ6IGhhc1BvcHBlckVzY2FwZWRcbiAgfTtcbiAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICdkYXRhLXBvcHBlci1yZWZlcmVuY2UtaGlkZGVuJzogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgJ2RhdGEtcG9wcGVyLWVzY2FwZWQnOiBoYXNQb3BwZXJFc2NhcGVkXG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnaGlkZScsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J10sXG4gIGZuOiBoaWRlXG59OyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgYXBwbHlTdHlsZXMgfSBmcm9tIFwiLi9hcHBseVN0eWxlcy5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhcnJvdyB9IGZyb20gXCIuL2Fycm93LmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbXB1dGVTdHlsZXMgfSBmcm9tIFwiLi9jb21wdXRlU3R5bGVzLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGV2ZW50TGlzdGVuZXJzIH0gZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnMuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmxpcCB9IGZyb20gXCIuL2ZsaXAuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaGlkZSB9IGZyb20gXCIuL2hpZGUuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgb2Zmc2V0IH0gZnJvbSBcIi4vb2Zmc2V0LmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHBvcHBlck9mZnNldHMgfSBmcm9tIFwiLi9wb3BwZXJPZmZzZXRzLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHByZXZlbnRPdmVyZmxvdyB9IGZyb20gXCIuL3ByZXZlbnRPdmVyZmxvdy5qc1wiOyIsImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBwbGFjZW1lbnRzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCByZWN0cywgb2Zmc2V0KSB7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICB2YXIgaW52ZXJ0RGlzdGFuY2UgPSBbbGVmdCwgdG9wXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyAtMSA6IDE7XG5cbiAgdmFyIF9yZWYgPSB0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gb2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgfSkpIDogb2Zmc2V0LFxuICAgICAgc2tpZGRpbmcgPSBfcmVmWzBdLFxuICAgICAgZGlzdGFuY2UgPSBfcmVmWzFdO1xuXG4gIHNraWRkaW5nID0gc2tpZGRpbmcgfHwgMDtcbiAgZGlzdGFuY2UgPSAoZGlzdGFuY2UgfHwgMCkgKiBpbnZlcnREaXN0YW5jZTtcbiAgcmV0dXJuIFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8ge1xuICAgIHg6IGRpc3RhbmNlLFxuICAgIHk6IHNraWRkaW5nXG4gIH0gOiB7XG4gICAgeDogc2tpZGRpbmcsXG4gICAgeTogZGlzdGFuY2VcbiAgfTtcbn1cblxuZnVuY3Rpb24gb2Zmc2V0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZjIubmFtZTtcbiAgdmFyIF9vcHRpb25zJG9mZnNldCA9IG9wdGlvbnMub2Zmc2V0LFxuICAgICAgb2Zmc2V0ID0gX29wdGlvbnMkb2Zmc2V0ID09PSB2b2lkIDAgPyBbMCwgMF0gOiBfb3B0aW9ucyRvZmZzZXQ7XG4gIHZhciBkYXRhID0gcGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgYWNjW3BsYWNlbWVudF0gPSBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHN0YXRlLnJlY3RzLCBvZmZzZXQpO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgdmFyIF9kYXRhJHN0YXRlJHBsYWNlbWVudCA9IGRhdGFbc3RhdGUucGxhY2VtZW50XSxcbiAgICAgIHggPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueCxcbiAgICAgIHkgPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzICE9IG51bGwpIHtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueCArPSB4O1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy55ICs9IHk7XG4gIH1cblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ29mZnNldCcsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgZm46IG9mZnNldFxufTsiLCJpbXBvcnQgY29tcHV0ZU9mZnNldHMgZnJvbSBcIi4uL3V0aWxzL2NvbXB1dGVPZmZzZXRzLmpzXCI7XG5cbmZ1bmN0aW9uIHBvcHBlck9mZnNldHMoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgLy8gT2Zmc2V0cyBhcmUgdGhlIGFjdHVhbCBwb3NpdGlvbiB0aGUgcG9wcGVyIG5lZWRzIHRvIGhhdmUgdG8gYmVcbiAgLy8gcHJvcGVybHkgcG9zaXRpb25lZCBuZWFyIGl0cyByZWZlcmVuY2UgZWxlbWVudFxuICAvLyBUaGlzIGlzIHRoZSBtb3N0IGJhc2ljIHBsYWNlbWVudCwgYW5kIHdpbGwgYmUgYWRqdXN0ZWQgYnlcbiAgLy8gdGhlIG1vZGlmaWVycyBpbiB0aGUgbmV4dCBzdGVwXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiBzdGF0ZS5yZWN0cy5yZWZlcmVuY2UsXG4gICAgZWxlbWVudDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncG9wcGVyT2Zmc2V0cycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAncmVhZCcsXG4gIGZuOiBwb3BwZXJPZmZzZXRzLFxuICBkYXRhOiB7fVxufTsiLCJpbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHN0YXJ0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0QWx0QXhpcyBmcm9tIFwiLi4vdXRpbHMvZ2V0QWx0QXhpcy5qc1wiO1xuaW1wb3J0IHdpdGhpbiBmcm9tIFwiLi4vdXRpbHMvd2l0aGluLmpzXCI7XG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4uL3V0aWxzL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IGdldEZyZXNoU2lkZU9iamVjdCBmcm9tIFwiLi4vdXRpbHMvZ2V0RnJlc2hTaWRlT2JqZWN0LmpzXCI7XG5pbXBvcnQgeyBtYXggYXMgbWF0aE1heCwgbWluIGFzIG1hdGhNaW4gfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuXG5mdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEF4aXMsXG4gICAgICBib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBvcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcsXG4gICAgICBfb3B0aW9ucyR0ZXRoZXIgPSBvcHRpb25zLnRldGhlcixcbiAgICAgIHRldGhlciA9IF9vcHRpb25zJHRldGhlciA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHRldGhlcixcbiAgICAgIF9vcHRpb25zJHRldGhlck9mZnNldCA9IG9wdGlvbnMudGV0aGVyT2Zmc2V0LFxuICAgICAgdGV0aGVyT2Zmc2V0ID0gX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkdGV0aGVyT2Zmc2V0O1xuICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeVxuICB9KTtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24oc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIGlzQmFzZVBsYWNlbWVudCA9ICF2YXJpYXRpb247XG4gIHZhciBtYWluQXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgdmFyIGFsdEF4aXMgPSBnZXRBbHRBeGlzKG1haW5BeGlzKTtcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIHRldGhlck9mZnNldFZhbHVlID0gdHlwZW9mIHRldGhlck9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IHRldGhlck9mZnNldChPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pKSA6IHRldGhlck9mZnNldDtcbiAgdmFyIGRhdGEgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgaWYgKCFwb3BwZXJPZmZzZXRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNoZWNrTWFpbkF4aXMgfHwgY2hlY2tBbHRBeGlzKSB7XG4gICAgdmFyIG1haW5TaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gICAgdmFyIGFsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gICAgdmFyIG9mZnNldCA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdO1xuICAgIHZhciBtaW4gPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSArIG92ZXJmbG93W21haW5TaWRlXTtcbiAgICB2YXIgbWF4ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gLSBvdmVyZmxvd1thbHRTaWRlXTtcbiAgICB2YXIgYWRkaXRpdmUgPSB0ZXRoZXIgPyAtcG9wcGVyUmVjdFtsZW5dIC8gMiA6IDA7XG4gICAgdmFyIG1pbkxlbiA9IHZhcmlhdGlvbiA9PT0gc3RhcnQgPyByZWZlcmVuY2VSZWN0W2xlbl0gOiBwb3BwZXJSZWN0W2xlbl07XG4gICAgdmFyIG1heExlbiA9IHZhcmlhdGlvbiA9PT0gc3RhcnQgPyAtcG9wcGVyUmVjdFtsZW5dIDogLXJlZmVyZW5jZVJlY3RbbGVuXTsgLy8gV2UgbmVlZCB0byBpbmNsdWRlIHRoZSBhcnJvdyBpbiB0aGUgY2FsY3VsYXRpb24gc28gdGhlIGFycm93IGRvZXNuJ3QgZ29cbiAgICAvLyBvdXRzaWRlIHRoZSByZWZlcmVuY2UgYm91bmRzXG5cbiAgICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gICAgdmFyIGFycm93UmVjdCA9IHRldGhlciAmJiBhcnJvd0VsZW1lbnQgPyBnZXRMYXlvdXRSZWN0KGFycm93RWxlbWVudCkgOiB7XG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMFxuICAgIH07XG4gICAgdmFyIGFycm93UGFkZGluZ09iamVjdCA9IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXSA/IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXS5wYWRkaW5nIDogZ2V0RnJlc2hTaWRlT2JqZWN0KCk7XG4gICAgdmFyIGFycm93UGFkZGluZ01pbiA9IGFycm93UGFkZGluZ09iamVjdFttYWluU2lkZV07XG4gICAgdmFyIGFycm93UGFkZGluZ01heCA9IGFycm93UGFkZGluZ09iamVjdFthbHRTaWRlXTsgLy8gSWYgdGhlIHJlZmVyZW5jZSBsZW5ndGggaXMgc21hbGxlciB0aGFuIHRoZSBhcnJvdyBsZW5ndGgsIHdlIGRvbid0IHdhbnRcbiAgICAvLyB0byBpbmNsdWRlIGl0cyBmdWxsIHNpemUgaW4gdGhlIGNhbGN1bGF0aW9uLiBJZiB0aGUgcmVmZXJlbmNlIGlzIHNtYWxsXG4gICAgLy8gYW5kIG5lYXIgdGhlIGVkZ2Ugb2YgYSBib3VuZGFyeSwgdGhlIHBvcHBlciBjYW4gb3ZlcmZsb3cgZXZlbiBpZiB0aGVcbiAgICAvLyByZWZlcmVuY2UgaXMgbm90IG92ZXJmbG93aW5nIGFzIHdlbGwgKGUuZy4gdmlydHVhbCBlbGVtZW50cyB3aXRoIG5vXG4gICAgLy8gd2lkdGggb3IgaGVpZ2h0KVxuXG4gICAgdmFyIGFycm93TGVuID0gd2l0aGluKDAsIHJlZmVyZW5jZVJlY3RbbGVuXSwgYXJyb3dSZWN0W2xlbl0pO1xuICAgIHZhciBtaW5PZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyByZWZlcmVuY2VSZWN0W2xlbl0gLyAyIC0gYWRkaXRpdmUgLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIHRldGhlck9mZnNldFZhbHVlIDogbWluTGVuIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSB0ZXRoZXJPZmZzZXRWYWx1ZTtcbiAgICB2YXIgbWF4T2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gLXJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgKyBhZGRpdGl2ZSArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgdGV0aGVyT2Zmc2V0VmFsdWUgOiBtYXhMZW4gKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIHRldGhlck9mZnNldFZhbHVlO1xuICAgIHZhciBhcnJvd09mZnNldFBhcmVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93ICYmIGdldE9mZnNldFBhcmVudChzdGF0ZS5lbGVtZW50cy5hcnJvdyk7XG4gICAgdmFyIGNsaWVudE9mZnNldCA9IGFycm93T2Zmc2V0UGFyZW50ID8gbWFpbkF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFRvcCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50TGVmdCB8fCAwIDogMDtcbiAgICB2YXIgb2Zmc2V0TW9kaWZpZXJWYWx1ZSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0ID8gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXRbc3RhdGUucGxhY2VtZW50XVttYWluQXhpc10gOiAwO1xuICAgIHZhciB0ZXRoZXJNaW4gPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSArIG1pbk9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWUgLSBjbGllbnRPZmZzZXQ7XG4gICAgdmFyIHRldGhlck1heCA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdICsgbWF4T2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZTtcblxuICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICB2YXIgcHJldmVudGVkT2Zmc2V0ID0gd2l0aGluKHRldGhlciA/IG1hdGhNaW4obWluLCB0ZXRoZXJNaW4pIDogbWluLCBvZmZzZXQsIHRldGhlciA/IG1hdGhNYXgobWF4LCB0ZXRoZXJNYXgpIDogbWF4KTtcbiAgICAgIHBvcHBlck9mZnNldHNbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0O1xuICAgICAgZGF0YVttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQgLSBvZmZzZXQ7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgICAgdmFyIF9tYWluU2lkZSA9IG1haW5BeGlzID09PSAneCcgPyB0b3AgOiBsZWZ0O1xuXG4gICAgICB2YXIgX2FsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gYm90dG9tIDogcmlnaHQ7XG5cbiAgICAgIHZhciBfb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1thbHRBeGlzXTtcblxuICAgICAgdmFyIF9taW4gPSBfb2Zmc2V0ICsgb3ZlcmZsb3dbX21haW5TaWRlXTtcblxuICAgICAgdmFyIF9tYXggPSBfb2Zmc2V0IC0gb3ZlcmZsb3dbX2FsdFNpZGVdO1xuXG4gICAgICB2YXIgX3ByZXZlbnRlZE9mZnNldCA9IHdpdGhpbih0ZXRoZXIgPyBtYXRoTWluKF9taW4sIHRldGhlck1pbikgOiBfbWluLCBfb2Zmc2V0LCB0ZXRoZXIgPyBtYXRoTWF4KF9tYXgsIHRldGhlck1heCkgOiBfbWF4KTtcblxuICAgICAgcG9wcGVyT2Zmc2V0c1thbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQ7XG4gICAgICBkYXRhW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldCAtIF9vZmZzZXQ7XG4gICAgfVxuICB9XG5cbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogcHJldmVudE92ZXJmbG93LFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddXG59OyIsImltcG9ydCB7IHBvcHBlckdlbmVyYXRvciwgZGV0ZWN0T3ZlcmZsb3cgfSBmcm9tIFwiLi9jcmVhdGVQb3BwZXIuanNcIjtcbmltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9tb2RpZmllcnMvZXZlbnRMaXN0ZW5lcnMuanNcIjtcbmltcG9ydCBwb3BwZXJPZmZzZXRzIGZyb20gXCIuL21vZGlmaWVycy9wb3BwZXJPZmZzZXRzLmpzXCI7XG5pbXBvcnQgY29tcHV0ZVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvY29tcHV0ZVN0eWxlcy5qc1wiO1xuaW1wb3J0IGFwcGx5U3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9hcHBseVN0eWxlcy5qc1wiO1xudmFyIGRlZmF1bHRNb2RpZmllcnMgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMsIGNvbXB1dGVTdHlsZXMsIGFwcGx5U3R5bGVzXTtcbnZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKHtcbiAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVyc1xufSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyLCBwb3BwZXJHZW5lcmF0b3IsIGRlZmF1bHRNb2RpZmllcnMsIGRldGVjdE92ZXJmbG93IH07IiwiaW1wb3J0IHsgcG9wcGVyR2VuZXJhdG9yLCBkZXRlY3RPdmVyZmxvdyB9IGZyb20gXCIuL2NyZWF0ZVBvcHBlci5qc1wiO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qc1wiO1xuaW1wb3J0IHBvcHBlck9mZnNldHMgZnJvbSBcIi4vbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanNcIjtcbmltcG9ydCBjb21wdXRlU3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzXCI7XG5pbXBvcnQgYXBwbHlTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2FwcGx5U3R5bGVzLmpzXCI7XG5pbXBvcnQgb2Zmc2V0IGZyb20gXCIuL21vZGlmaWVycy9vZmZzZXQuanNcIjtcbmltcG9ydCBmbGlwIGZyb20gXCIuL21vZGlmaWVycy9mbGlwLmpzXCI7XG5pbXBvcnQgcHJldmVudE92ZXJmbG93IGZyb20gXCIuL21vZGlmaWVycy9wcmV2ZW50T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBhcnJvdyBmcm9tIFwiLi9tb2RpZmllcnMvYXJyb3cuanNcIjtcbmltcG9ydCBoaWRlIGZyb20gXCIuL21vZGlmaWVycy9oaWRlLmpzXCI7XG52YXIgZGVmYXVsdE1vZGlmaWVycyA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cywgY29tcHV0ZVN0eWxlcywgYXBwbHlTdHlsZXMsIG9mZnNldCwgZmxpcCwgcHJldmVudE92ZXJmbG93LCBhcnJvdywgaGlkZV07XG52YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG4gIGRlZmF1bHRNb2RpZmllcnM6IGRlZmF1bHRNb2RpZmllcnNcbn0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciwgcG9wcGVyR2VuZXJhdG9yLCBkZWZhdWx0TW9kaWZpZXJzLCBkZXRlY3RPdmVyZmxvdyB9OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciBhcyBjcmVhdGVQb3BwZXJMaXRlIH0gZnJvbSBcIi4vcG9wcGVyLWxpdGUuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgKiBmcm9tIFwiLi9tb2RpZmllcnMvaW5kZXguanNcIjsiLCJpbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IHsgdmFyaWF0aW9uUGxhY2VtZW50cywgYmFzZVBsYWNlbWVudHMsIHBsYWNlbWVudHMgYXMgYWxsUGxhY2VtZW50cyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPSBfb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPT09IHZvaWQgMCA/IGFsbFBsYWNlbWVudHMgOiBfb3B0aW9ucyRhbGxvd2VkQXV0b1A7XG4gIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KTtcbiAgdmFyIHBsYWNlbWVudHMgPSB2YXJpYXRpb24gPyBmbGlwVmFyaWF0aW9ucyA/IHZhcmlhdGlvblBsYWNlbWVudHMgOiB2YXJpYXRpb25QbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSB2YXJpYXRpb247XG4gIH0pIDogYmFzZVBsYWNlbWVudHM7XG4gIHZhciBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWxsb3dlZEF1dG9QbGFjZW1lbnRzLmluZGV4T2YocGxhY2VtZW50KSA+PSAwO1xuICB9KTtcblxuICBpZiAoYWxsb3dlZFBsYWNlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogVGhlIGBhbGxvd2VkQXV0b1BsYWNlbWVudHNgIG9wdGlvbiBkaWQgbm90IGFsbG93IGFueScsICdwbGFjZW1lbnRzLiBFbnN1cmUgdGhlIGBwbGFjZW1lbnRgIG9wdGlvbiBtYXRjaGVzIHRoZSB2YXJpYXRpb24nLCAnb2YgdGhlIGFsbG93ZWQgcGxhY2VtZW50cy4nLCAnRm9yIGV4YW1wbGUsIFwiYXV0b1wiIGNhbm5vdCBiZSB1c2VkIHRvIGFsbG93IFwiYm90dG9tLXN0YXJ0XCIuJywgJ1VzZSBcImF1dG8tc3RhcnRcIiBpbnN0ZWFkLiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdOiBGbG93IHNlZW1zIHRvIGhhdmUgcHJvYmxlbXMgd2l0aCB0d28gYXJyYXkgdW5pb25zLi4uXG5cblxuICB2YXIgb3ZlcmZsb3dzID0gYWxsb3dlZFBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgfSlbZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpXTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvdmVyZmxvd3MpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dzW2FdIC0gb3ZlcmZsb3dzW2JdO1xuICB9KTtcbn0iLCJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCwgc3RhcnQsIGVuZCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZU9mZnNldHMoX3JlZikge1xuICB2YXIgcmVmZXJlbmNlID0gX3JlZi5yZWZlcmVuY2UsXG4gICAgICBlbGVtZW50ID0gX3JlZi5lbGVtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50ID8gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIDogbnVsbDtcbiAgdmFyIHZhcmlhdGlvbiA9IHBsYWNlbWVudCA/IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIDogbnVsbDtcbiAgdmFyIGNvbW1vblggPSByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCAvIDIgLSBlbGVtZW50LndpZHRoIC8gMjtcbiAgdmFyIGNvbW1vblkgPSByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHQgLyAyIC0gZWxlbWVudC5oZWlnaHQgLyAyO1xuICB2YXIgb2Zmc2V0cztcblxuICBzd2l0Y2ggKGJhc2VQbGFjZW1lbnQpIHtcbiAgICBjYXNlIHRvcDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55IC0gZWxlbWVudC5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgYm90dG9tOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHJpZ2h0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgbGVmdDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54IC0gZWxlbWVudC53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54LFxuICAgICAgICB5OiByZWZlcmVuY2UueVxuICAgICAgfTtcbiAgfVxuXG4gIHZhciBtYWluQXhpcyA9IGJhc2VQbGFjZW1lbnQgPyBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCkgOiBudWxsO1xuXG4gIGlmIChtYWluQXhpcyAhPSBudWxsKSB7XG4gICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICBzd2l0Y2ggKHZhcmlhdGlvbikge1xuICAgICAgY2FzZSBzdGFydDpcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSAtIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgZW5kOlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdICsgKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0cztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZShmbikge1xuICB2YXIgcGVuZGluZztcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXBlbmRpbmcpIHtcbiAgICAgIHBlbmRpbmcgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwZW5kaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHJlc29sdmUoZm4oKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBlbmRpbmc7XG4gIH07XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldENsaXBwaW5nUmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldENsaXBwaW5nUmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGNvbXB1dGVPZmZzZXRzIGZyb20gXCIuL2NvbXB1dGVPZmZzZXRzLmpzXCI7XG5pbXBvcnQgcmVjdFRvQ2xpZW50UmVjdCBmcm9tIFwiLi9yZWN0VG9DbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgeyBjbGlwcGluZ1BhcmVudHMsIHJlZmVyZW5jZSwgcG9wcGVyLCBib3R0b20sIHRvcCwgcmlnaHQsIGJhc2VQbGFjZW1lbnRzLCB2aWV3cG9ydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4uL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgbWVyZ2VQYWRkaW5nT2JqZWN0IGZyb20gXCIuL21lcmdlUGFkZGluZ09iamVjdC5qc1wiO1xuaW1wb3J0IGV4cGFuZFRvSGFzaE1hcCBmcm9tIFwiLi9leHBhbmRUb0hhc2hNYXAuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIF9vcHRpb25zJHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gc3RhdGUucGxhY2VtZW50IDogX29wdGlvbnMkcGxhY2VtZW50LFxuICAgICAgX29wdGlvbnMkYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMkYm91bmRhcnkgPT09IHZvaWQgMCA/IGNsaXBwaW5nUGFyZW50cyA6IF9vcHRpb25zJGJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyB2aWV3cG9ydCA6IF9vcHRpb25zJHJvb3RCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJGVsZW1lbnRDb250ZSA9IF9vcHRpb25zLmVsZW1lbnRDb250ZXh0LFxuICAgICAgZWxlbWVudENvbnRleHQgPSBfb3B0aW9ucyRlbGVtZW50Q29udGUgPT09IHZvaWQgMCA/IHBvcHBlciA6IF9vcHRpb25zJGVsZW1lbnRDb250ZSxcbiAgICAgIF9vcHRpb25zJGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IF9vcHRpb25zJGFsdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMkcGFkZGluZyA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHBhZGRpbmc7XG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbiAgdmFyIGFsdENvbnRleHQgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcmVmZXJlbmNlIDogcG9wcGVyO1xuICB2YXIgcmVmZXJlbmNlRWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbYWx0Qm91bmRhcnkgPyBhbHRDb250ZXh0IDogZWxlbWVudENvbnRleHRdO1xuICB2YXIgY2xpcHBpbmdDbGllbnRSZWN0ID0gZ2V0Q2xpcHBpbmdSZWN0KGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQgOiBlbGVtZW50LmNvbnRleHRFbGVtZW50IHx8IGdldERvY3VtZW50RWxlbWVudChzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5KTtcbiAgdmFyIHJlZmVyZW5jZUNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QocmVmZXJlbmNlRWxlbWVudCk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlQ2xpZW50UmVjdCxcbiAgICBlbGVtZW50OiBwb3BwZXJSZWN0LFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pO1xuICB2YXIgcG9wcGVyQ2xpZW50UmVjdCA9IHJlY3RUb0NsaWVudFJlY3QoT2JqZWN0LmFzc2lnbih7fSwgcG9wcGVyUmVjdCwgcG9wcGVyT2Zmc2V0cykpO1xuICB2YXIgZWxlbWVudENsaWVudFJlY3QgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcG9wcGVyQ2xpZW50UmVjdCA6IHJlZmVyZW5jZUNsaWVudFJlY3Q7IC8vIHBvc2l0aXZlID0gb3ZlcmZsb3dpbmcgdGhlIGNsaXBwaW5nIHJlY3RcbiAgLy8gMCBvciBuZWdhdGl2ZSA9IHdpdGhpbiB0aGUgY2xpcHBpbmcgcmVjdFxuXG4gIHZhciBvdmVyZmxvd09mZnNldHMgPSB7XG4gICAgdG9wOiBjbGlwcGluZ0NsaWVudFJlY3QudG9wIC0gZWxlbWVudENsaWVudFJlY3QudG9wICsgcGFkZGluZ09iamVjdC50b3AsXG4gICAgYm90dG9tOiBlbGVtZW50Q2xpZW50UmVjdC5ib3R0b20gLSBjbGlwcGluZ0NsaWVudFJlY3QuYm90dG9tICsgcGFkZGluZ09iamVjdC5ib3R0b20sXG4gICAgbGVmdDogY2xpcHBpbmdDbGllbnRSZWN0LmxlZnQgLSBlbGVtZW50Q2xpZW50UmVjdC5sZWZ0ICsgcGFkZGluZ09iamVjdC5sZWZ0LFxuICAgIHJpZ2h0OiBlbGVtZW50Q2xpZW50UmVjdC5yaWdodCAtIGNsaXBwaW5nQ2xpZW50UmVjdC5yaWdodCArIHBhZGRpbmdPYmplY3QucmlnaHRcbiAgfTtcbiAgdmFyIG9mZnNldERhdGEgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldDsgLy8gT2Zmc2V0cyBjYW4gYmUgYXBwbGllZCBvbmx5IHRvIHRoZSBwb3BwZXIgZWxlbWVudFxuXG4gIGlmIChlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyICYmIG9mZnNldERhdGEpIHtcbiAgICB2YXIgb2Zmc2V0ID0gb2Zmc2V0RGF0YVtwbGFjZW1lbnRdO1xuICAgIE9iamVjdC5rZXlzKG92ZXJmbG93T2Zmc2V0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbXVsdGlwbHkgPSBbcmlnaHQsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAxIDogLTE7XG4gICAgICB2YXIgYXhpcyA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAneScgOiAneCc7XG4gICAgICBvdmVyZmxvd09mZnNldHNba2V5XSArPSBvZmZzZXRbYXhpc10gKiBtdWx0aXBseTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBvdmVyZmxvd09mZnNldHM7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhwYW5kVG9IYXNoTWFwKHZhbHVlLCBrZXlzKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAoaGFzaE1hcCwga2V5KSB7XG4gICAgaGFzaE1hcFtrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIGhhc2hNYXA7XG4gIH0sIHt9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoc3RyKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBbXS5jb25jYXQoYXJncykucmVkdWNlKGZ1bmN0aW9uIChwLCBjKSB7XG4gICAgcmV0dXJuIHAucmVwbGFjZSgvJXMvLCBjKTtcbiAgfSwgc3RyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBbHRBeGlzKGF4aXMpIHtcbiAgcmV0dXJuIGF4aXMgPT09ICd4JyA/ICd5JyA6ICd4Jztcbn0iLCJpbXBvcnQgeyBhdXRvIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RnJlc2hTaWRlT2JqZWN0KCkge1xuICByZXR1cm4ge1xuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMFxuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSA+PSAwID8gJ3gnIDogJ3knO1xufSIsInZhciBoYXNoID0ge1xuICBsZWZ0OiAncmlnaHQnLFxuICByaWdodDogJ2xlZnQnLFxuICBib3R0b206ICd0b3AnLFxuICB0b3A6ICdib3R0b20nXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufSIsInZhciBoYXNoID0ge1xuICBzdGFydDogJ2VuZCcsXG4gIGVuZDogJ3N0YXJ0J1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcbn0iLCJleHBvcnQgdmFyIG1heCA9IE1hdGgubWF4O1xuZXhwb3J0IHZhciBtaW4gPSBNYXRoLm1pbjtcbmV4cG9ydCB2YXIgcm91bmQgPSBNYXRoLnJvdW5kOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlQnlOYW1lKG1vZGlmaWVycykge1xuICB2YXIgbWVyZ2VkID0gbW9kaWZpZXJzLnJlZHVjZShmdW5jdGlvbiAobWVyZ2VkLCBjdXJyZW50KSB7XG4gICAgdmFyIGV4aXN0aW5nID0gbWVyZ2VkW2N1cnJlbnQubmFtZV07XG4gICAgbWVyZ2VkW2N1cnJlbnQubmFtZV0gPSBleGlzdGluZyA/IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLCBjdXJyZW50LCB7XG4gICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5vcHRpb25zLCBjdXJyZW50Lm9wdGlvbnMpLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcuZGF0YSwgY3VycmVudC5kYXRhKVxuICAgIH0pIDogY3VycmVudDtcbiAgICByZXR1cm4gbWVyZ2VkO1xuICB9LCB7fSk7IC8vIElFMTEgZG9lcyBub3Qgc3VwcG9ydCBPYmplY3QudmFsdWVzXG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKG1lcmdlZCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gbWVyZ2VkW2tleV07XG4gIH0pO1xufSIsImltcG9ydCBnZXRGcmVzaFNpZGVPYmplY3QgZnJvbSBcIi4vZ2V0RnJlc2hTaWRlT2JqZWN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZVBhZGRpbmdPYmplY3QocGFkZGluZ09iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZ2V0RnJlc2hTaWRlT2JqZWN0KCksIHBhZGRpbmdPYmplY3QpO1xufSIsImltcG9ydCB7IG1vZGlmaWVyUGhhc2VzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7IC8vIHNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDk4NzUyNTVcblxuZnVuY3Rpb24gb3JkZXIobW9kaWZpZXJzKSB7XG4gIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gIHZhciB2aXNpdGVkID0gbmV3IFNldCgpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIG1hcC5zZXQobW9kaWZpZXIubmFtZSwgbW9kaWZpZXIpO1xuICB9KTsgLy8gT24gdmlzaXRpbmcgb2JqZWN0LCBjaGVjayBmb3IgaXRzIGRlcGVuZGVuY2llcyBhbmQgdmlzaXQgdGhlbSByZWN1cnNpdmVseVxuXG4gIGZ1bmN0aW9uIHNvcnQobW9kaWZpZXIpIHtcbiAgICB2aXNpdGVkLmFkZChtb2RpZmllci5uYW1lKTtcbiAgICB2YXIgcmVxdWlyZXMgPSBbXS5jb25jYXQobW9kaWZpZXIucmVxdWlyZXMgfHwgW10sIG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMgfHwgW10pO1xuICAgIHJlcXVpcmVzLmZvckVhY2goZnVuY3Rpb24gKGRlcCkge1xuICAgICAgaWYgKCF2aXNpdGVkLmhhcyhkZXApKSB7XG4gICAgICAgIHZhciBkZXBNb2RpZmllciA9IG1hcC5nZXQoZGVwKTtcblxuICAgICAgICBpZiAoZGVwTW9kaWZpZXIpIHtcbiAgICAgICAgICBzb3J0KGRlcE1vZGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJlc3VsdC5wdXNoKG1vZGlmaWVyKTtcbiAgfVxuXG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIGlmICghdmlzaXRlZC5oYXMobW9kaWZpZXIubmFtZSkpIHtcbiAgICAgIC8vIGNoZWNrIGZvciB2aXNpdGVkIG9iamVjdFxuICAgICAgc29ydChtb2RpZmllcik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3JkZXJNb2RpZmllcnMobW9kaWZpZXJzKSB7XG4gIC8vIG9yZGVyIGJhc2VkIG9uIGRlcGVuZGVuY2llc1xuICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyKG1vZGlmaWVycyk7IC8vIG9yZGVyIGJhc2VkIG9uIHBoYXNlXG5cbiAgcmV0dXJuIG1vZGlmaWVyUGhhc2VzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwaGFzZSkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgcmV0dXJuIG1vZGlmaWVyLnBoYXNlID09PSBwaGFzZTtcbiAgICB9KSk7XG4gIH0sIFtdKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWN0VG9DbGllbnRSZWN0KHJlY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJlY3QsIHtcbiAgICBsZWZ0OiByZWN0LngsXG4gICAgdG9wOiByZWN0LnksXG4gICAgcmlnaHQ6IHJlY3QueCArIHJlY3Qud2lkdGgsXG4gICAgYm90dG9tOiByZWN0LnkgKyByZWN0LmhlaWdodFxuICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmlxdWVCeShhcnIsIGZuKSB7XG4gIHZhciBpZGVudGlmaWVycyA9IG5ldyBTZXQoKTtcbiAgcmV0dXJuIGFyci5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB2YXIgaWRlbnRpZmllciA9IGZuKGl0ZW0pO1xuXG4gICAgaWYgKCFpZGVudGlmaWVycy5oYXMoaWRlbnRpZmllcikpIHtcbiAgICAgIGlkZW50aWZpZXJzLmFkZChpZGVudGlmaWVyKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59IiwiaW1wb3J0IGZvcm1hdCBmcm9tIFwiLi9mb3JtYXQuanNcIjtcbmltcG9ydCB7IG1vZGlmaWVyUGhhc2VzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG52YXIgSU5WQUxJRF9NT0RJRklFUl9FUlJPUiA9ICdQb3BwZXI6IG1vZGlmaWVyIFwiJXNcIiBwcm92aWRlZCBhbiBpbnZhbGlkICVzIHByb3BlcnR5LCBleHBlY3RlZCAlcyBidXQgZ290ICVzJztcbnZhciBNSVNTSU5HX0RFUEVOREVOQ1lfRVJST1IgPSAnUG9wcGVyOiBtb2RpZmllciBcIiVzXCIgcmVxdWlyZXMgXCIlc1wiLCBidXQgXCIlc1wiIG1vZGlmaWVyIGlzIG5vdCBhdmFpbGFibGUnO1xudmFyIFZBTElEX1BST1BFUlRJRVMgPSBbJ25hbWUnLCAnZW5hYmxlZCcsICdwaGFzZScsICdmbicsICdlZmZlY3QnLCAncmVxdWlyZXMnLCAnb3B0aW9ucyddO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVNb2RpZmllcnMobW9kaWZpZXJzKSB7XG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIE9iamVjdC5rZXlzKG1vZGlmaWVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgJ25hbWUnOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIubmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIFN0cmluZyhtb2RpZmllci5uYW1lKSwgJ1wibmFtZVwiJywgJ1wic3RyaW5nXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5uYW1lKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZW5hYmxlZCc6XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllci5lbmFibGVkICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcImVuYWJsZWRcIicsICdcImJvb2xlYW5cIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLmVuYWJsZWQpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAncGhhc2UnOlxuICAgICAgICAgIGlmIChtb2RpZmllclBoYXNlcy5pbmRleE9mKG1vZGlmaWVyLnBoYXNlKSA8IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcInBoYXNlXCInLCBcImVpdGhlciBcIiArIG1vZGlmaWVyUGhhc2VzLmpvaW4oJywgJyksIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLnBoYXNlKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZm4nOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIuZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcImZuXCInLCAnXCJmdW5jdGlvblwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIuZm4pICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdlZmZlY3QnOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIuZWZmZWN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJlZmZlY3RcIicsICdcImZ1bmN0aW9uXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5mbikgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JlcXVpcmVzJzpcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobW9kaWZpZXIucmVxdWlyZXMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJyZXF1aXJlc1wiJywgJ1wiYXJyYXlcIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLnJlcXVpcmVzKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmVxdWlyZXNJZkV4aXN0cyc6XG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJyZXF1aXJlc0lmRXhpc3RzXCInLCAnXCJhcnJheVwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cykgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ29wdGlvbnMnOlxuICAgICAgICBjYXNlICdkYXRhJzpcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQb3BwZXJKUzogYW4gaW52YWxpZCBwcm9wZXJ0eSBoYXMgYmVlbiBwcm92aWRlZCB0byB0aGUgXFxcIlwiICsgbW9kaWZpZXIubmFtZSArIFwiXFxcIiBtb2RpZmllciwgdmFsaWQgcHJvcGVydGllcyBhcmUgXCIgKyBWQUxJRF9QUk9QRVJUSUVTLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgcmV0dXJuIFwiXFxcIlwiICsgcyArIFwiXFxcIlwiO1xuICAgICAgICAgIH0pLmpvaW4oJywgJykgKyBcIjsgYnV0IFxcXCJcIiArIGtleSArIFwiXFxcIiB3YXMgcHJvdmlkZWQuXCIpO1xuICAgICAgfVxuXG4gICAgICBtb2RpZmllci5yZXF1aXJlcyAmJiBtb2RpZmllci5yZXF1aXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChyZXF1aXJlbWVudCkge1xuICAgICAgICBpZiAobW9kaWZpZXJzLmZpbmQoZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICAgIHJldHVybiBtb2QubmFtZSA9PT0gcmVxdWlyZW1lbnQ7XG4gICAgICAgIH0pID09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChNSVNTSU5HX0RFUEVOREVOQ1lfRVJST1IsIFN0cmluZyhtb2RpZmllci5uYW1lKSwgcmVxdWlyZW1lbnQsIHJlcXVpcmVtZW50KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn0iLCJpbXBvcnQgeyBtYXggYXMgbWF0aE1heCwgbWluIGFzIG1hdGhNaW4gfSBmcm9tIFwiLi9tYXRoLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoaW4obWluLCB2YWx1ZSwgbWF4KSB7XG4gIHJldHVybiBtYXRoTWF4KG1pbiwgbWF0aE1pbih2YWx1ZSwgbWF4KSk7XG59IiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBkb20vc2VsZWN0b3ItZW5naW5lLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTk9ERV9URVhUID0gM1xuXG5jb25zdCBTZWxlY3RvckVuZ2luZSA9IHtcbiAgZmluZChzZWxlY3RvciwgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIHJldHVybiBbXS5jb25jYXQoLi4uRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvckFsbC5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKSlcbiAgfSxcblxuICBmaW5kT25lKHNlbGVjdG9yLCBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgcmV0dXJuIEVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3IuY2FsbChlbGVtZW50LCBzZWxlY3RvcilcbiAgfSxcblxuICBjaGlsZHJlbihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBbXS5jb25jYXQoLi4uZWxlbWVudC5jaGlsZHJlbilcbiAgICAgIC5maWx0ZXIoY2hpbGQgPT4gY2hpbGQubWF0Y2hlcyhzZWxlY3RvcikpXG4gIH0sXG5cbiAgcGFyZW50cyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGNvbnN0IHBhcmVudHMgPSBbXVxuXG4gICAgbGV0IGFuY2VzdG9yID0gZWxlbWVudC5wYXJlbnROb2RlXG5cbiAgICB3aGlsZSAoYW5jZXN0b3IgJiYgYW5jZXN0b3Iubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmIGFuY2VzdG9yLm5vZGVUeXBlICE9PSBOT0RFX1RFWFQpIHtcbiAgICAgIGlmIChhbmNlc3Rvci5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBwYXJlbnRzLnB1c2goYW5jZXN0b3IpXG4gICAgICB9XG5cbiAgICAgIGFuY2VzdG9yID0gYW5jZXN0b3IucGFyZW50Tm9kZVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRzXG4gIH0sXG5cbiAgcHJldihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGxldCBwcmV2aW91cyA9IGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZ1xuXG4gICAgd2hpbGUgKHByZXZpb3VzKSB7XG4gICAgICBpZiAocHJldmlvdXMubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIFtwcmV2aW91c11cbiAgICAgIH1cblxuICAgICAgcHJldmlvdXMgPSBwcmV2aW91cy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH0sXG5cbiAgbmV4dChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGxldCBuZXh0ID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmdcblxuICAgIHdoaWxlIChuZXh0KSB7XG4gICAgICBpZiAobmV4dC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gW25leHRdXG4gICAgICB9XG5cbiAgICAgIG5leHQgPSBuZXh0Lm5leHRFbGVtZW50U2libGluZ1xuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdG9yRW5naW5lXG4iLCJpbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiB1dGlsL2luZGV4LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTUFYX1VJRCA9IDEwMDAwMDBcbmNvbnN0IE1JTExJU0VDT05EU19NVUxUSVBMSUVSID0gMTAwMFxuY29uc3QgVFJBTlNJVElPTl9FTkQgPSAndHJhbnNpdGlvbmVuZCdcblxuLy8gU2hvdXRvdXQgQW5ndXNDcm9sbCAoaHR0cHM6Ly9nb28uZ2wvcHh3UUdwKVxuY29uc3QgdG9UeXBlID0gb2JqID0+IHtcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBgJHtvYmp9YFxuICB9XG5cbiAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwob2JqKS5tYXRjaCgvXFxzKFthLXpdKykvaSlbMV0udG9Mb3dlckNhc2UoKVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQdWJsaWMgVXRpbCBBcGlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgZ2V0VUlEID0gcHJlZml4ID0+IHtcbiAgZG8ge1xuICAgIHByZWZpeCArPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNQVhfVUlEKVxuICB9IHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXgpKVxuXG4gIHJldHVybiBwcmVmaXhcbn1cblxuY29uc3QgZ2V0U2VsZWN0b3IgPSBlbGVtZW50ID0+IHtcbiAgbGV0IHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0JylcblxuICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnIycpIHtcbiAgICBsZXQgaHJlZkF0dHIgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpXG5cbiAgICAvLyBUaGUgb25seSB2YWxpZCBjb250ZW50IHRoYXQgY291bGQgZG91YmxlIGFzIGEgc2VsZWN0b3IgYXJlIElEcyBvciBjbGFzc2VzLFxuICAgIC8vIHNvIGV2ZXJ5dGhpbmcgc3RhcnRpbmcgd2l0aCBgI2Agb3IgYC5gLiBJZiBhIFwicmVhbFwiIFVSTCBpcyB1c2VkIGFzIHRoZSBzZWxlY3RvcixcbiAgICAvLyBgZG9jdW1lbnQucXVlcnlTZWxlY3RvcmAgd2lsbCByaWdodGZ1bGx5IGNvbXBsYWluIGl0IGlzIGludmFsaWQuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMzIyNzNcbiAgICBpZiAoIWhyZWZBdHRyIHx8ICghaHJlZkF0dHIuaW5jbHVkZXMoJyMnKSAmJiAhaHJlZkF0dHIuc3RhcnRzV2l0aCgnLicpKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBKdXN0IGluIGNhc2Ugc29tZSBDTVMgcHV0cyBvdXQgYSBmdWxsIFVSTCB3aXRoIHRoZSBhbmNob3IgYXBwZW5kZWRcbiAgICBpZiAoaHJlZkF0dHIuaW5jbHVkZXMoJyMnKSAmJiAhaHJlZkF0dHIuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICBocmVmQXR0ciA9IGAjJHtocmVmQXR0ci5zcGxpdCgnIycpWzFdfWBcbiAgICB9XG5cbiAgICBzZWxlY3RvciA9IGhyZWZBdHRyICYmIGhyZWZBdHRyICE9PSAnIycgPyBocmVmQXR0ci50cmltKCkgOiBudWxsXG4gIH1cblxuICByZXR1cm4gc2VsZWN0b3Jcbn1cblxuY29uc3QgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCA9IGVsZW1lbnQgPT4ge1xuICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgaWYgKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBudWxsXG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5jb25zdCBnZXRFbGVtZW50RnJvbVNlbGVjdG9yID0gZWxlbWVudCA9PiB7XG4gIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudClcblxuICByZXR1cm4gc2VsZWN0b3IgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6IG51bGxcbn1cblxuY29uc3QgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIC8vIEdldCB0cmFuc2l0aW9uLWR1cmF0aW9uIG9mIHRoZSBlbGVtZW50XG4gIGxldCB7IHRyYW5zaXRpb25EdXJhdGlvbiwgdHJhbnNpdGlvbkRlbGF5IH0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVxuXG4gIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uID0gTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICBjb25zdCBmbG9hdFRyYW5zaXRpb25EZWxheSA9IE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSlcblxuICAvLyBSZXR1cm4gMCBpZiBlbGVtZW50IG9yIHRyYW5zaXRpb24gZHVyYXRpb24gaXMgbm90IGZvdW5kXG4gIGlmICghZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gJiYgIWZsb2F0VHJhbnNpdGlvbkRlbGF5KSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIC8vIElmIG11bHRpcGxlIGR1cmF0aW9ucyBhcmUgZGVmaW5lZCwgdGFrZSB0aGUgZmlyc3RcbiAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uLnNwbGl0KCcsJylbMF1cbiAgdHJhbnNpdGlvbkRlbGF5ID0gdHJhbnNpdGlvbkRlbGF5LnNwbGl0KCcsJylbMF1cblxuICByZXR1cm4gKE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKyBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpKSAqIE1JTExJU0VDT05EU19NVUxUSVBMSUVSXG59XG5cbmNvbnN0IHRyaWdnZXJUcmFuc2l0aW9uRW5kID0gZWxlbWVudCA9PiB7XG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoVFJBTlNJVElPTl9FTkQpKVxufVxuXG5jb25zdCBpc0VsZW1lbnQgPSBvYmogPT4ge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmouanF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIG9iaiA9IG9ialswXVxuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiBvYmoubm9kZVR5cGUgIT09ICd1bmRlZmluZWQnXG59XG5cbmNvbnN0IGdldEVsZW1lbnQgPSBvYmogPT4ge1xuICBpZiAoaXNFbGVtZW50KG9iaikpIHsgLy8gaXQncyBhIGpRdWVyeSBvYmplY3Qgb3IgYSBub2RlIGVsZW1lbnRcbiAgICByZXR1cm4gb2JqLmpxdWVyeSA/IG9ialswXSA6IG9ialxuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnICYmIG9iai5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUob2JqKVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuY29uc3QgZW11bGF0ZVRyYW5zaXRpb25FbmQgPSAoZWxlbWVudCwgZHVyYXRpb24pID0+IHtcbiAgbGV0IGNhbGxlZCA9IGZhbHNlXG4gIGNvbnN0IGR1cmF0aW9uUGFkZGluZyA9IDVcbiAgY29uc3QgZW11bGF0ZWREdXJhdGlvbiA9IGR1cmF0aW9uICsgZHVyYXRpb25QYWRkaW5nXG5cbiAgZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgY2FsbGVkID0gdHJ1ZVxuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgbGlzdGVuZXIpXG4gIH1cblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoVFJBTlNJVElPTl9FTkQsIGxpc3RlbmVyKVxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgdHJpZ2dlclRyYW5zaXRpb25FbmQoZWxlbWVudClcbiAgICB9XG4gIH0sIGVtdWxhdGVkRHVyYXRpb24pXG59XG5cbmNvbnN0IHR5cGVDaGVja0NvbmZpZyA9IChjb21wb25lbnROYW1lLCBjb25maWcsIGNvbmZpZ1R5cGVzKSA9PiB7XG4gIE9iamVjdC5rZXlzKGNvbmZpZ1R5cGVzKS5mb3JFYWNoKHByb3BlcnR5ID0+IHtcbiAgICBjb25zdCBleHBlY3RlZFR5cGVzID0gY29uZmlnVHlwZXNbcHJvcGVydHldXG4gICAgY29uc3QgdmFsdWUgPSBjb25maWdbcHJvcGVydHldXG4gICAgY29uc3QgdmFsdWVUeXBlID0gdmFsdWUgJiYgaXNFbGVtZW50KHZhbHVlKSA/ICdlbGVtZW50JyA6IHRvVHlwZSh2YWx1ZSlcblxuICAgIGlmICghbmV3IFJlZ0V4cChleHBlY3RlZFR5cGVzKS50ZXN0KHZhbHVlVHlwZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgIGAke2NvbXBvbmVudE5hbWUudG9VcHBlckNhc2UoKX06IE9wdGlvbiBcIiR7cHJvcGVydHl9XCIgcHJvdmlkZWQgdHlwZSBcIiR7dmFsdWVUeXBlfVwiIGJ1dCBleHBlY3RlZCB0eXBlIFwiJHtleHBlY3RlZFR5cGVzfVwiLmBcbiAgICAgIClcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGlzVmlzaWJsZSA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmIChlbGVtZW50LnN0eWxlICYmIGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUuc3R5bGUpIHtcbiAgICBjb25zdCBlbGVtZW50U3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpXG4gICAgY29uc3QgcGFyZW50Tm9kZVN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LnBhcmVudE5vZGUpXG5cbiAgICByZXR1cm4gZWxlbWVudFN0eWxlLmRpc3BsYXkgIT09ICdub25lJyAmJlxuICAgICAgcGFyZW50Tm9kZVN0eWxlLmRpc3BsYXkgIT09ICdub25lJyAmJlxuICAgICAgZWxlbWVudFN0eWxlLnZpc2liaWxpdHkgIT09ICdoaWRkZW4nXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuY29uc3QgaXNEaXNhYmxlZCA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWVsZW1lbnQgfHwgZWxlbWVudC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmICh0eXBlb2YgZWxlbWVudC5kaXNhYmxlZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZWxlbWVudC5kaXNhYmxlZFxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpICYmIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpICE9PSAnZmFsc2UnXG59XG5cbmNvbnN0IGZpbmRTaGFkb3dSb290ID0gZWxlbWVudCA9PiB7XG4gIGlmICghZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmF0dGFjaFNoYWRvdykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBDYW4gZmluZCB0aGUgc2hhZG93IHJvb3Qgb3RoZXJ3aXNlIGl0J2xsIHJldHVybiB0aGUgZG9jdW1lbnRcbiAgaWYgKHR5cGVvZiBlbGVtZW50LmdldFJvb3ROb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3Qgcm9vdCA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKVxuICAgIHJldHVybiByb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IHJvb3QgOiBudWxsXG4gIH1cblxuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG5cbiAgLy8gd2hlbiB3ZSBkb24ndCBmaW5kIGEgc2hhZG93IHJvb3RcbiAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIGZpbmRTaGFkb3dSb290KGVsZW1lbnQucGFyZW50Tm9kZSlcbn1cblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmNvbnN0IHJlZmxvdyA9IGVsZW1lbnQgPT4gZWxlbWVudC5vZmZzZXRIZWlnaHRcblxuY29uc3QgZ2V0alF1ZXJ5ID0gKCkgPT4ge1xuICBjb25zdCB7IGpRdWVyeSB9ID0gd2luZG93XG5cbiAgaWYgKGpRdWVyeSAmJiAhZG9jdW1lbnQuYm9keS5oYXNBdHRyaWJ1dGUoJ2RhdGEtYnMtbm8tanF1ZXJ5JykpIHtcbiAgICByZXR1cm4galF1ZXJ5XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5jb25zdCBvbkRPTUNvbnRlbnRMb2FkZWQgPSBjYWxsYmFjayA9PiB7XG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2FsbGJhY2spXG4gIH0gZWxzZSB7XG4gICAgY2FsbGJhY2soKVxuICB9XG59XG5cbmNvbnN0IGlzUlRMID0gKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpciA9PT0gJ3J0bCdcblxuY29uc3QgZGVmaW5lSlF1ZXJ5UGx1Z2luID0gcGx1Z2luID0+IHtcbiAgb25ET01Db250ZW50TG9hZGVkKCgpID0+IHtcbiAgICBjb25zdCAkID0gZ2V0alF1ZXJ5KClcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoJCkge1xuICAgICAgY29uc3QgbmFtZSA9IHBsdWdpbi5OQU1FXG4gICAgICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW25hbWVdXG4gICAgICAkLmZuW25hbWVdID0gcGx1Z2luLmpRdWVyeUludGVyZmFjZVxuICAgICAgJC5mbltuYW1lXS5Db25zdHJ1Y3RvciA9IHBsdWdpblxuICAgICAgJC5mbltuYW1lXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAgICAgICAkLmZuW25hbWVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgICAgIHJldHVybiBwbHVnaW4ualF1ZXJ5SW50ZXJmYWNlXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBleGVjdXRlID0gY2FsbGJhY2sgPT4ge1xuICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2soKVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIGdldEVsZW1lbnQsXG4gIGdldFVJRCxcbiAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCxcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQsXG4gIHRyaWdnZXJUcmFuc2l0aW9uRW5kLFxuICBpc0VsZW1lbnQsXG4gIGVtdWxhdGVUcmFuc2l0aW9uRW5kLFxuICB0eXBlQ2hlY2tDb25maWcsXG4gIGlzVmlzaWJsZSxcbiAgaXNEaXNhYmxlZCxcbiAgZmluZFNoYWRvd1Jvb3QsXG4gIG5vb3AsXG4gIHJlZmxvdyxcbiAgZ2V0alF1ZXJ5LFxuICBvbkRPTUNvbnRlbnRMb2FkZWQsXG4gIGlzUlRMLFxuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGV4ZWN1dGVcbn1cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogZG9tL2RhdGEuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBlbGVtZW50TWFwID0gbmV3IE1hcCgpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0KGVsZW1lbnQsIGtleSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoIWVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICBlbGVtZW50TWFwLnNldChlbGVtZW50LCBuZXcgTWFwKCkpXG4gICAgfVxuXG4gICAgY29uc3QgaW5zdGFuY2VNYXAgPSBlbGVtZW50TWFwLmdldChlbGVtZW50KVxuXG4gICAgLy8gbWFrZSBpdCBjbGVhciB3ZSBvbmx5IHdhbnQgb25lIGluc3RhbmNlIHBlciBlbGVtZW50XG4gICAgLy8gY2FuIGJlIHJlbW92ZWQgbGF0ZXIgd2hlbiBtdWx0aXBsZSBrZXkvaW5zdGFuY2VzIGFyZSBmaW5lIHRvIGJlIHVzZWRcbiAgICBpZiAoIWluc3RhbmNlTWFwLmhhcyhrZXkpICYmIGluc3RhbmNlTWFwLnNpemUgIT09IDApIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKGBCb290c3RyYXAgZG9lc24ndCBhbGxvdyBtb3JlIHRoYW4gb25lIGluc3RhbmNlIHBlciBlbGVtZW50LiBCb3VuZCBpbnN0YW5jZTogJHtBcnJheS5mcm9tKGluc3RhbmNlTWFwLmtleXMoKSlbMF19LmApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpbnN0YW5jZU1hcC5zZXQoa2V5LCBpbnN0YW5jZSlcbiAgfSxcblxuICBnZXQoZWxlbWVudCwga2V5KSB7XG4gICAgaWYgKGVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm4gZWxlbWVudE1hcC5nZXQoZWxlbWVudCkuZ2V0KGtleSkgfHwgbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH0sXG5cbiAgcmVtb3ZlKGVsZW1lbnQsIGtleSkge1xuICAgIGlmICghZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlTWFwID0gZWxlbWVudE1hcC5nZXQoZWxlbWVudClcblxuICAgIGluc3RhbmNlTWFwLmRlbGV0ZShrZXkpXG5cbiAgICAvLyBmcmVlIHVwIGVsZW1lbnQgcmVmZXJlbmNlcyBpZiB0aGVyZSBhcmUgbm8gaW5zdGFuY2VzIGxlZnQgZm9yIGFuIGVsZW1lbnRcbiAgICBpZiAoaW5zdGFuY2VNYXAuc2l6ZSA9PT0gMCkge1xuICAgICAgZWxlbWVudE1hcC5kZWxldGUoZWxlbWVudClcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogZG9tL2V2ZW50LWhhbmRsZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBnZXRqUXVlcnkgfSBmcm9tICcuLi91dGlsL2luZGV4J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBuYW1lc3BhY2VSZWdleCA9IC9bXi5dKig/PVxcLi4qKVxcLnwuKi9cbmNvbnN0IHN0cmlwTmFtZVJlZ2V4ID0gL1xcLi4qL1xuY29uc3Qgc3RyaXBVaWRSZWdleCA9IC86OlxcZCskL1xuY29uc3QgZXZlbnRSZWdpc3RyeSA9IHt9IC8vIEV2ZW50cyBzdG9yYWdlXG5sZXQgdWlkRXZlbnQgPSAxXG5jb25zdCBjdXN0b21FdmVudHMgPSB7XG4gIG1vdXNlZW50ZXI6ICdtb3VzZW92ZXInLFxuICBtb3VzZWxlYXZlOiAnbW91c2VvdXQnXG59XG5jb25zdCBjdXN0b21FdmVudHNSZWdleCA9IC9eKG1vdXNlZW50ZXJ8bW91c2VsZWF2ZSkvaVxuY29uc3QgbmF0aXZlRXZlbnRzID0gbmV3IFNldChbXG4gICdjbGljaycsXG4gICdkYmxjbGljaycsXG4gICdtb3VzZXVwJyxcbiAgJ21vdXNlZG93bicsXG4gICdjb250ZXh0bWVudScsXG4gICdtb3VzZXdoZWVsJyxcbiAgJ0RPTU1vdXNlU2Nyb2xsJyxcbiAgJ21vdXNlb3ZlcicsXG4gICdtb3VzZW91dCcsXG4gICdtb3VzZW1vdmUnLFxuICAnc2VsZWN0c3RhcnQnLFxuICAnc2VsZWN0ZW5kJyxcbiAgJ2tleWRvd24nLFxuICAna2V5cHJlc3MnLFxuICAna2V5dXAnLFxuICAnb3JpZW50YXRpb25jaGFuZ2UnLFxuICAndG91Y2hzdGFydCcsXG4gICd0b3VjaG1vdmUnLFxuICAndG91Y2hlbmQnLFxuICAndG91Y2hjYW5jZWwnLFxuICAncG9pbnRlcmRvd24nLFxuICAncG9pbnRlcm1vdmUnLFxuICAncG9pbnRlcnVwJyxcbiAgJ3BvaW50ZXJsZWF2ZScsXG4gICdwb2ludGVyY2FuY2VsJyxcbiAgJ2dlc3R1cmVzdGFydCcsXG4gICdnZXN0dXJlY2hhbmdlJyxcbiAgJ2dlc3R1cmVlbmQnLFxuICAnZm9jdXMnLFxuICAnYmx1cicsXG4gICdjaGFuZ2UnLFxuICAncmVzZXQnLFxuICAnc2VsZWN0JyxcbiAgJ3N1Ym1pdCcsXG4gICdmb2N1c2luJyxcbiAgJ2ZvY3Vzb3V0JyxcbiAgJ2xvYWQnLFxuICAndW5sb2FkJyxcbiAgJ2JlZm9yZXVubG9hZCcsXG4gICdyZXNpemUnLFxuICAnbW92ZScsXG4gICdET01Db250ZW50TG9hZGVkJyxcbiAgJ3JlYWR5c3RhdGVjaGFuZ2UnLFxuICAnZXJyb3InLFxuICAnYWJvcnQnLFxuICAnc2Nyb2xsJ1xuXSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFByaXZhdGUgbWV0aG9kc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuZnVuY3Rpb24gZ2V0VWlkRXZlbnQoZWxlbWVudCwgdWlkKSB7XG4gIHJldHVybiAodWlkICYmIGAke3VpZH06OiR7dWlkRXZlbnQrK31gKSB8fCBlbGVtZW50LnVpZEV2ZW50IHx8IHVpZEV2ZW50Kytcbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnQoZWxlbWVudCkge1xuICBjb25zdCB1aWQgPSBnZXRVaWRFdmVudChlbGVtZW50KVxuXG4gIGVsZW1lbnQudWlkRXZlbnQgPSB1aWRcbiAgZXZlbnRSZWdpc3RyeVt1aWRdID0gZXZlbnRSZWdpc3RyeVt1aWRdIHx8IHt9XG5cbiAgcmV0dXJuIGV2ZW50UmVnaXN0cnlbdWlkXVxufVxuXG5mdW5jdGlvbiBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQuZGVsZWdhdGVUYXJnZXQgPSBlbGVtZW50XG5cbiAgICBpZiAoaGFuZGxlci5vbmVPZmYpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgZXZlbnQudHlwZSwgZm4pXG4gICAgfVxuXG4gICAgcmV0dXJuIGZuLmFwcGx5KGVsZW1lbnQsIFtldmVudF0pXG4gIH1cbn1cblxuZnVuY3Rpb24gYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIoZWxlbWVudCwgc2VsZWN0b3IsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG5cbiAgICBmb3IgKGxldCB7IHRhcmdldCB9ID0gZXZlbnQ7IHRhcmdldCAmJiB0YXJnZXQgIT09IHRoaXM7IHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlKSB7XG4gICAgICBmb3IgKGxldCBpID0gZG9tRWxlbWVudHMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgIGlmIChkb21FbGVtZW50c1tpXSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgZXZlbnQuZGVsZWdhdGVUYXJnZXQgPSB0YXJnZXRcblxuICAgICAgICAgIGlmIChoYW5kbGVyLm9uZU9mZikge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vY29uc2lzdGVudC1kZXN0cnVjdHVyaW5nXG4gICAgICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsIGV2ZW50LnR5cGUsIHNlbGVjdG9yLCBmbilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZm4uYXBwbHkodGFyZ2V0LCBbZXZlbnRdKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVG8gcGxlYXNlIEVTTGludFxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEhhbmRsZXIoZXZlbnRzLCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IgPSBudWxsKSB7XG4gIGNvbnN0IHVpZEV2ZW50TGlzdCA9IE9iamVjdC5rZXlzKGV2ZW50cylcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gdWlkRXZlbnRMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgZXZlbnQgPSBldmVudHNbdWlkRXZlbnRMaXN0W2ldXVxuXG4gICAgaWYgKGV2ZW50Lm9yaWdpbmFsSGFuZGxlciA9PT0gaGFuZGxlciAmJiBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IgPT09IGRlbGVnYXRpb25TZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIGV2ZW50XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUGFyYW1zKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pIHtcbiAgY29uc3QgZGVsZWdhdGlvbiA9IHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJ1xuICBjb25zdCBvcmlnaW5hbEhhbmRsZXIgPSBkZWxlZ2F0aW9uID8gZGVsZWdhdGlvbkZuIDogaGFuZGxlclxuXG4gIGxldCB0eXBlRXZlbnQgPSBnZXRUeXBlRXZlbnQob3JpZ2luYWxUeXBlRXZlbnQpXG4gIGNvbnN0IGlzTmF0aXZlID0gbmF0aXZlRXZlbnRzLmhhcyh0eXBlRXZlbnQpXG5cbiAgaWYgKCFpc05hdGl2ZSkge1xuICAgIHR5cGVFdmVudCA9IG9yaWdpbmFsVHlwZUV2ZW50XG4gIH1cblxuICByZXR1cm4gW2RlbGVnYXRpb24sIG9yaWdpbmFsSGFuZGxlciwgdHlwZUV2ZW50XVxufVxuXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4sIG9uZU9mZikge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsVHlwZUV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKCFoYW5kbGVyKSB7XG4gICAgaGFuZGxlciA9IGRlbGVnYXRpb25GblxuICAgIGRlbGVnYXRpb25GbiA9IG51bGxcbiAgfVxuXG4gIC8vIGluIGNhc2Ugb2YgbW91c2VlbnRlciBvciBtb3VzZWxlYXZlIHdyYXAgdGhlIGhhbmRsZXIgd2l0aGluIGEgZnVuY3Rpb24gdGhhdCBjaGVja3MgZm9yIGl0cyBET00gcG9zaXRpb25cbiAgLy8gdGhpcyBwcmV2ZW50cyB0aGUgaGFuZGxlciBmcm9tIGJlaW5nIGRpc3BhdGNoZWQgdGhlIHNhbWUgd2F5IGFzIG1vdXNlb3ZlciBvciBtb3VzZW91dCBkb2VzXG4gIGlmIChjdXN0b21FdmVudHNSZWdleC50ZXN0KG9yaWdpbmFsVHlwZUV2ZW50KSkge1xuICAgIGNvbnN0IHdyYXBGbiA9IGZuID0+IHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0IHx8IChldmVudC5yZWxhdGVkVGFyZ2V0ICE9PSBldmVudC5kZWxlZ2F0ZVRhcmdldCAmJiAhZXZlbnQuZGVsZWdhdGVUYXJnZXQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpKSB7XG4gICAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGVsZWdhdGlvbkZuKSB7XG4gICAgICBkZWxlZ2F0aW9uRm4gPSB3cmFwRm4oZGVsZWdhdGlvbkZuKVxuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVyID0gd3JhcEZuKGhhbmRsZXIpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgW2RlbGVnYXRpb24sIG9yaWdpbmFsSGFuZGxlciwgdHlwZUV2ZW50XSA9IG5vcm1hbGl6ZVBhcmFtcyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKVxuICBjb25zdCBldmVudHMgPSBnZXRFdmVudChlbGVtZW50KVxuICBjb25zdCBoYW5kbGVycyA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IChldmVudHNbdHlwZUV2ZW50XSA9IHt9KVxuICBjb25zdCBwcmV2aW91c0ZuID0gZmluZEhhbmRsZXIoaGFuZGxlcnMsIG9yaWdpbmFsSGFuZGxlciwgZGVsZWdhdGlvbiA/IGhhbmRsZXIgOiBudWxsKVxuXG4gIGlmIChwcmV2aW91c0ZuKSB7XG4gICAgcHJldmlvdXNGbi5vbmVPZmYgPSBwcmV2aW91c0ZuLm9uZU9mZiAmJiBvbmVPZmZcblxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgdWlkID0gZ2V0VWlkRXZlbnQob3JpZ2luYWxIYW5kbGVyLCBvcmlnaW5hbFR5cGVFdmVudC5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJykpXG4gIGNvbnN0IGZuID0gZGVsZWdhdGlvbiA/XG4gICAgYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIoZWxlbWVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKSA6XG4gICAgYm9vdHN0cmFwSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyKVxuXG4gIGZuLmRlbGVnYXRpb25TZWxlY3RvciA9IGRlbGVnYXRpb24gPyBoYW5kbGVyIDogbnVsbFxuICBmbi5vcmlnaW5hbEhhbmRsZXIgPSBvcmlnaW5hbEhhbmRsZXJcbiAgZm4ub25lT2ZmID0gb25lT2ZmXG4gIGZuLnVpZEV2ZW50ID0gdWlkXG4gIGhhbmRsZXJzW3VpZF0gPSBmblxuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlRXZlbnQsIGZuLCBkZWxlZ2F0aW9uKVxufVxuXG5mdW5jdGlvbiByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpIHtcbiAgY29uc3QgZm4gPSBmaW5kSGFuZGxlcihldmVudHNbdHlwZUV2ZW50XSwgaGFuZGxlciwgZGVsZWdhdGlvblNlbGVjdG9yKVxuXG4gIGlmICghZm4pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlRXZlbnQsIGZuLCBCb29sZWFuKGRlbGVnYXRpb25TZWxlY3RvcikpXG4gIGRlbGV0ZSBldmVudHNbdHlwZUV2ZW50XVtmbi51aWRFdmVudF1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBuYW1lc3BhY2UpIHtcbiAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fVxuXG4gIE9iamVjdC5rZXlzKHN0b3JlRWxlbWVudEV2ZW50KS5mb3JFYWNoKGhhbmRsZXJLZXkgPT4ge1xuICAgIGlmIChoYW5kbGVyS2V5LmluY2x1ZGVzKG5hbWVzcGFjZSkpIHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gc3RvcmVFbGVtZW50RXZlbnRbaGFuZGxlcktleV1cblxuICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgZXZlbnQub3JpZ2luYWxIYW5kbGVyLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBnZXRUeXBlRXZlbnQoZXZlbnQpIHtcbiAgLy8gYWxsb3cgdG8gZ2V0IHRoZSBuYXRpdmUgZXZlbnRzIGZyb20gbmFtZXNwYWNlZCBldmVudHMgKCdjbGljay5icy5idXR0b24nIC0tPiAnY2xpY2snKVxuICBldmVudCA9IGV2ZW50LnJlcGxhY2Uoc3RyaXBOYW1lUmVnZXgsICcnKVxuICByZXR1cm4gY3VzdG9tRXZlbnRzW2V2ZW50XSB8fCBldmVudFxufVxuXG5jb25zdCBFdmVudEhhbmRsZXIgPSB7XG4gIG9uKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pIHtcbiAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4sIGZhbHNlKVxuICB9LFxuXG4gIG9uZShlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKSB7XG4gICAgYWRkSGFuZGxlcihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuLCB0cnVlKVxuICB9LFxuXG4gIG9mZihlbGVtZW50LCBvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKSB7XG4gICAgaWYgKHR5cGVvZiBvcmlnaW5hbFR5cGVFdmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IFtkZWxlZ2F0aW9uLCBvcmlnaW5hbEhhbmRsZXIsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbXMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GbilcbiAgICBjb25zdCBpbk5hbWVzcGFjZSA9IHR5cGVFdmVudCAhPT0gb3JpZ2luYWxUeXBlRXZlbnRcbiAgICBjb25zdCBldmVudHMgPSBnZXRFdmVudChlbGVtZW50KVxuICAgIGNvbnN0IGlzTmFtZXNwYWNlID0gb3JpZ2luYWxUeXBlRXZlbnQuc3RhcnRzV2l0aCgnLicpXG5cbiAgICBpZiAodHlwZW9mIG9yaWdpbmFsSGFuZGxlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFNpbXBsZXN0IGNhc2U6IGhhbmRsZXIgaXMgcGFzc2VkLCByZW1vdmUgdGhhdCBsaXN0ZW5lciBPTkxZLlxuICAgICAgaWYgKCFldmVudHMgfHwgIWV2ZW50c1t0eXBlRXZlbnRdKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBvcmlnaW5hbEhhbmRsZXIsIGRlbGVnYXRpb24gPyBoYW5kbGVyIDogbnVsbClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc05hbWVzcGFjZSkge1xuICAgICAgT2JqZWN0LmtleXMoZXZlbnRzKS5mb3JFYWNoKGVsZW1lbnRFdmVudCA9PiB7XG4gICAgICAgIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIGVsZW1lbnRFdmVudCwgb3JpZ2luYWxUeXBlRXZlbnQuc2xpY2UoMSkpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHN0b3JlRWxlbWVudEV2ZW50ID0gZXZlbnRzW3R5cGVFdmVudF0gfHwge31cbiAgICBPYmplY3Qua2V5cyhzdG9yZUVsZW1lbnRFdmVudCkuZm9yRWFjaChrZXlIYW5kbGVycyA9PiB7XG4gICAgICBjb25zdCBoYW5kbGVyS2V5ID0ga2V5SGFuZGxlcnMucmVwbGFjZShzdHJpcFVpZFJlZ2V4LCAnJylcblxuICAgICAgaWYgKCFpbk5hbWVzcGFjZSB8fCBvcmlnaW5hbFR5cGVFdmVudC5pbmNsdWRlcyhoYW5kbGVyS2V5KSkge1xuICAgICAgICBjb25zdCBldmVudCA9IHN0b3JlRWxlbWVudEV2ZW50W2tleUhhbmRsZXJzXVxuXG4gICAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50Lm9yaWdpbmFsSGFuZGxlciwgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgdHJpZ2dlcihlbGVtZW50LCBldmVudCwgYXJncykge1xuICAgIGlmICh0eXBlb2YgZXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0ICQgPSBnZXRqUXVlcnkoKVxuICAgIGNvbnN0IHR5cGVFdmVudCA9IGdldFR5cGVFdmVudChldmVudClcbiAgICBjb25zdCBpbk5hbWVzcGFjZSA9IGV2ZW50ICE9PSB0eXBlRXZlbnRcbiAgICBjb25zdCBpc05hdGl2ZSA9IG5hdGl2ZUV2ZW50cy5oYXModHlwZUV2ZW50KVxuXG4gICAgbGV0IGpRdWVyeUV2ZW50XG4gICAgbGV0IGJ1YmJsZXMgPSB0cnVlXG4gICAgbGV0IG5hdGl2ZURpc3BhdGNoID0gdHJ1ZVxuICAgIGxldCBkZWZhdWx0UHJldmVudGVkID0gZmFsc2VcbiAgICBsZXQgZXZ0ID0gbnVsbFxuXG4gICAgaWYgKGluTmFtZXNwYWNlICYmICQpIHtcbiAgICAgIGpRdWVyeUV2ZW50ID0gJC5FdmVudChldmVudCwgYXJncylcblxuICAgICAgJChlbGVtZW50KS50cmlnZ2VyKGpRdWVyeUV2ZW50KVxuICAgICAgYnViYmxlcyA9ICFqUXVlcnlFdmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpXG4gICAgICBuYXRpdmVEaXNwYXRjaCA9ICFqUXVlcnlFdmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpXG4gICAgICBkZWZhdWx0UHJldmVudGVkID0galF1ZXJ5RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKClcbiAgICB9XG5cbiAgICBpZiAoaXNOYXRpdmUpIHtcbiAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJylcbiAgICAgIGV2dC5pbml0RXZlbnQodHlwZUV2ZW50LCBidWJibGVzLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnQsIHtcbiAgICAgICAgYnViYmxlcyxcbiAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBtZXJnZSBjdXN0b20gaW5mb3JtYXRpb24gaW4gb3VyIGV2ZW50XG4gICAgaWYgKHR5cGVvZiBhcmdzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgT2JqZWN0LmtleXMoYXJncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZ0LCBrZXksIHtcbiAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJnc1trZXldXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAobmF0aXZlRGlzcGF0Y2gpIHtcbiAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldnQpXG4gICAgfVxuXG4gICAgaWYgKGV2dC5kZWZhdWx0UHJldmVudGVkICYmIHR5cGVvZiBqUXVlcnlFdmVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGpRdWVyeUV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICByZXR1cm4gZXZ0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRIYW5kbGVyXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IGJhc2UtY29tcG9uZW50LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCB7XG4gIGVtdWxhdGVUcmFuc2l0aW9uRW5kLFxuICBleGVjdXRlLFxuICBnZXRFbGVtZW50LFxuICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudFxufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IFZFUlNJT04gPSAnNS4wLjEnXG5cbmNsYXNzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgZWxlbWVudCA9IGdldEVsZW1lbnQoZWxlbWVudClcblxuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICBEYXRhLnNldCh0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBEYXRhLnJlbW92ZSh0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZKVxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FVkVOVF9LRVkpXG5cbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKS5mb3JFYWNoKHByb3BlcnR5TmFtZSA9PiB7XG4gICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBudWxsXG4gICAgfSlcbiAgfVxuXG4gIF9xdWV1ZUNhbGxiYWNrKGNhbGxiYWNrLCBlbGVtZW50LCBpc0FuaW1hdGVkID0gdHJ1ZSkge1xuICAgIGlmICghaXNBbmltYXRlZCkge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGVsZW1lbnQpXG4gICAgRXZlbnRIYW5kbGVyLm9uZShlbGVtZW50LCAndHJhbnNpdGlvbmVuZCcsICgpID0+IGV4ZWN1dGUoY2FsbGJhY2spKVxuXG4gICAgZW11bGF0ZVRyYW5zaXRpb25FbmQoZWxlbWVudCwgdHJhbnNpdGlvbkR1cmF0aW9uKVxuICB9XG5cbiAgLyoqIFN0YXRpYyAqL1xuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIERhdGEuZ2V0KGVsZW1lbnQsIHRoaXMuREFUQV9LRVkpXG4gIH1cblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBoYXZlIHRvIGltcGxlbWVudCB0aGUgc3RhdGljIG1ldGhvZCBcIk5BTUVcIiwgZm9yIGVhY2ggY29tcG9uZW50IScpXG4gIH1cblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBgYnMuJHt0aGlzLk5BTUV9YFxuICB9XG5cbiAgc3RhdGljIGdldCBFVkVOVF9LRVkoKSB7XG4gICAgcmV0dXJuIGAuJHt0aGlzLkRBVEFfS0VZfWBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlQ29tcG9uZW50XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IGFsZXJ0LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ2FsZXJ0J1xuY29uc3QgREFUQV9LRVkgPSAnYnMuYWxlcnQnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgU0VMRUNUT1JfRElTTUlTUyA9ICdbZGF0YS1icy1kaXNtaXNzPVwiYWxlcnRcIl0nXG5cbmNvbnN0IEVWRU5UX0NMT1NFID0gYGNsb3NlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xPU0VEID0gYGNsb3NlZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0FMRVJUID0gJ2FsZXJ0J1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIEFsZXJ0IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIGNsb3NlKGVsZW1lbnQpIHtcbiAgICBjb25zdCByb290RWxlbWVudCA9IGVsZW1lbnQgPyB0aGlzLl9nZXRSb290RWxlbWVudChlbGVtZW50KSA6IHRoaXMuX2VsZW1lbnRcbiAgICBjb25zdCBjdXN0b21FdmVudCA9IHRoaXMuX3RyaWdnZXJDbG9zZUV2ZW50KHJvb3RFbGVtZW50KVxuXG4gICAgaWYgKGN1c3RvbUV2ZW50ID09PSBudWxsIHx8IGN1c3RvbUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX3JlbW92ZUVsZW1lbnQocm9vdEVsZW1lbnQpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldFJvb3RFbGVtZW50KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSB8fCBlbGVtZW50LmNsb3Nlc3QoYC4ke0NMQVNTX05BTUVfQUxFUlR9YClcbiAgfVxuXG4gIF90cmlnZ2VyQ2xvc2VFdmVudChlbGVtZW50KSB7XG4gICAgcmV0dXJuIEV2ZW50SGFuZGxlci50cmlnZ2VyKGVsZW1lbnQsIEVWRU5UX0NMT1NFKVxuICB9XG5cbiAgX3JlbW92ZUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBjb25zdCBpc0FuaW1hdGVkID0gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKVxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4gdGhpcy5fZGVzdHJveUVsZW1lbnQoZWxlbWVudCksIGVsZW1lbnQsIGlzQW5pbWF0ZWQpXG4gIH1cblxuICBfZGVzdHJveUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KVxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKGVsZW1lbnQsIEVWRU5UX0NMT1NFRClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9IERhdGEuZ2V0KHRoaXMsIERBVEFfS0VZKVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBBbGVydCh0aGlzKVxuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnID09PSAnY2xvc2UnKSB7XG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgaGFuZGxlRGlzbWlzcyhhbGVydEluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH1cblxuICAgICAgYWxlcnRJbnN0YW5jZS5jbG9zZSh0aGlzKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RJU01JU1MsIEFsZXJ0LmhhbmRsZURpc21pc3MobmV3IEFsZXJ0KCkpKVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuQWxlcnQgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQWxlcnQpXG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IGJ1dHRvbi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiB9IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ2J1dHRvbidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmJ1dHRvbidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cImJ1dHRvblwiXSdcblxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKCkge1xuICAgIC8vIFRvZ2dsZSBjbGFzcyBhbmQgc3luYyB0aGUgYGFyaWEtcHJlc3NlZGAgYXR0cmlidXRlIHdpdGggdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgYC50b2dnbGUoKWAgbWV0aG9kXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0FDVElWRSkpXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSBEYXRhLmdldCh0aGlzLCBEQVRBX0tFWSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQnV0dG9uKHRoaXMpXG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcgPT09ICd0b2dnbGUnKSB7XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBldmVudCA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQuY2xvc2VzdChTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcblxuICBsZXQgZGF0YSA9IERhdGEuZ2V0KGJ1dHRvbiwgREFUQV9LRVkpXG4gIGlmICghZGF0YSkge1xuICAgIGRhdGEgPSBuZXcgQnV0dG9uKGJ1dHRvbilcbiAgfVxuXG4gIGRhdGEudG9nZ2xlKClcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5CdXR0b24gdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQnV0dG9uKVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogZG9tL21hbmlwdWxhdG9yLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplRGF0YSh2YWwpIHtcbiAgaWYgKHZhbCA9PT0gJ3RydWUnKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmICh2YWwgPT09ICdmYWxzZScpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh2YWwgPT09IE51bWJlcih2YWwpLnRvU3RyaW5nKCkpIHtcbiAgICByZXR1cm4gTnVtYmVyKHZhbClcbiAgfVxuXG4gIGlmICh2YWwgPT09ICcnIHx8IHZhbCA9PT0gJ251bGwnKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplRGF0YUtleShrZXkpIHtcbiAgcmV0dXJuIGtleS5yZXBsYWNlKC9bQS1aXS9nLCBjaHIgPT4gYC0ke2Noci50b0xvd2VyQ2FzZSgpfWApXG59XG5cbmNvbnN0IE1hbmlwdWxhdG9yID0ge1xuICBzZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSwgdmFsdWUpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gLCB2YWx1ZSlcbiAgfSxcblxuICByZW1vdmVEYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSkge1xuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWApXG4gIH0sXG5cbiAgZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfVxuXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhlbGVtZW50LmRhdGFzZXQpXG4gICAgICAuZmlsdGVyKGtleSA9PiBrZXkuc3RhcnRzV2l0aCgnYnMnKSlcbiAgICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGxldCBwdXJlS2V5ID0ga2V5LnJlcGxhY2UoL15icy8sICcnKVxuICAgICAgICBwdXJlS2V5ID0gcHVyZUtleS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHB1cmVLZXkuc2xpY2UoMSwgcHVyZUtleS5sZW5ndGgpXG4gICAgICAgIGF0dHJpYnV0ZXNbcHVyZUtleV0gPSBub3JtYWxpemVEYXRhKGVsZW1lbnQuZGF0YXNldFtrZXldKVxuICAgICAgfSlcblxuICAgIHJldHVybiBhdHRyaWJ1dGVzXG4gIH0sXG5cbiAgZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXkpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplRGF0YShlbGVtZW50LmdldEF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gKSlcbiAgfSxcblxuICBvZmZzZXQoZWxlbWVudCkge1xuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiByZWN0LnRvcCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLFxuICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0XG4gICAgfVxuICB9LFxuXG4gIHBvc2l0aW9uKGVsZW1lbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiBlbGVtZW50Lm9mZnNldFRvcCxcbiAgICAgIGxlZnQ6IGVsZW1lbnQub2Zmc2V0TGVmdFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYW5pcHVsYXRvclxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBjYXJvdXNlbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgaXNSVEwsXG4gIGlzVmlzaWJsZSxcbiAgcmVmbG93LFxuICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdjYXJvdXNlbCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmNhcm91c2VsJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEFSUk9XX0xFRlRfS0VZID0gJ0Fycm93TGVmdCdcbmNvbnN0IEFSUk9XX1JJR0hUX0tFWSA9ICdBcnJvd1JpZ2h0J1xuY29uc3QgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCA9IDUwMCAvLyBUaW1lIGZvciBtb3VzZSBjb21wYXQgZXZlbnRzIHRvIGZpcmUgYWZ0ZXIgdG91Y2hcbmNvbnN0IFNXSVBFX1RIUkVTSE9MRCA9IDQwXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGludGVydmFsOiA1MDAwLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgc2xpZGU6IGZhbHNlLFxuICBwYXVzZTogJ2hvdmVyJyxcbiAgd3JhcDogdHJ1ZSxcbiAgdG91Y2g6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGludGVydmFsOiAnKG51bWJlcnxib29sZWFuKScsXG4gIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gIHNsaWRlOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIHBhdXNlOiAnKHN0cmluZ3xib29sZWFuKScsXG4gIHdyYXA6ICdib29sZWFuJyxcbiAgdG91Y2g6ICdib29sZWFuJ1xufVxuXG5jb25zdCBPUkRFUl9ORVhUID0gJ25leHQnXG5jb25zdCBPUkRFUl9QUkVWID0gJ3ByZXYnXG5jb25zdCBESVJFQ1RJT05fTEVGVCA9ICdsZWZ0J1xuY29uc3QgRElSRUNUSU9OX1JJR0hUID0gJ3JpZ2h0J1xuXG5jb25zdCBFVkVOVF9TTElERSA9IGBzbGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NMSUQgPSBgc2xpZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV04gPSBga2V5ZG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFRU5URVIgPSBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFTEVBVkUgPSBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNIU1RBUlQgPSBgdG91Y2hzdGFydCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNITU9WRSA9IGB0b3VjaG1vdmUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9UT1VDSEVORCA9IGB0b3VjaGVuZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1BPSU5URVJET1dOID0gYHBvaW50ZXJkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUE9JTlRFUlVQID0gYHBvaW50ZXJ1cCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0RSQUdfU1RBUlQgPSBgZHJhZ3N0YXJ0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfQ0FST1VTRUwgPSAnY2Fyb3VzZWwnXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5jb25zdCBDTEFTU19OQU1FX1NMSURFID0gJ3NsaWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9FTkQgPSAnY2Fyb3VzZWwtaXRlbS1lbmQnXG5jb25zdCBDTEFTU19OQU1FX1NUQVJUID0gJ2Nhcm91c2VsLWl0ZW0tc3RhcnQnXG5jb25zdCBDTEFTU19OQU1FX05FWFQgPSAnY2Fyb3VzZWwtaXRlbS1uZXh0J1xuY29uc3QgQ0xBU1NfTkFNRV9QUkVWID0gJ2Nhcm91c2VsLWl0ZW0tcHJldidcbmNvbnN0IENMQVNTX05BTUVfUE9JTlRFUl9FVkVOVCA9ICdwb2ludGVyLWV2ZW50J1xuXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkUgPSAnLmFjdGl2ZSdcbmNvbnN0IFNFTEVDVE9SX0FDVElWRV9JVEVNID0gJy5hY3RpdmUuY2Fyb3VzZWwtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0lURU0gPSAnLmNhcm91c2VsLWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9JVEVNX0lNRyA9ICcuY2Fyb3VzZWwtaXRlbSBpbWcnXG5jb25zdCBTRUxFQ1RPUl9ORVhUX1BSRVYgPSAnLmNhcm91c2VsLWl0ZW0tbmV4dCwgLmNhcm91c2VsLWl0ZW0tcHJldidcbmNvbnN0IFNFTEVDVE9SX0lORElDQVRPUlMgPSAnLmNhcm91c2VsLWluZGljYXRvcnMnXG5jb25zdCBTRUxFQ1RPUl9JTkRJQ0FUT1IgPSAnW2RhdGEtYnMtdGFyZ2V0XSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfU0xJREUgPSAnW2RhdGEtYnMtc2xpZGVdLCBbZGF0YS1icy1zbGlkZS10b10nXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1JJREUgPSAnW2RhdGEtYnMtcmlkZT1cImNhcm91c2VsXCJdJ1xuXG5jb25zdCBQT0lOVEVSX1RZUEVfVE9VQ0ggPSAndG91Y2gnXG5jb25zdCBQT0lOVEVSX1RZUEVfUEVOID0gJ3BlbidcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5jbGFzcyBDYXJvdXNlbCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgdGhpcy5faXRlbXMgPSBudWxsXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9pc1BhdXNlZCA9IGZhbHNlXG4gICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcbiAgICB0aGlzLnRvdWNoVGltZW91dCA9IG51bGxcbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gMFxuICAgIHRoaXMudG91Y2hEZWx0YVggPSAwXG5cbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2luZGljYXRvcnNFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9JTkRJQ0FUT1JTLCB0aGlzLl9lbGVtZW50KVxuICAgIHRoaXMuX3RvdWNoU3VwcG9ydGVkID0gJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDBcbiAgICB0aGlzLl9wb2ludGVyRXZlbnQgPSBCb29sZWFuKHdpbmRvdy5Qb2ludGVyRXZlbnQpXG5cbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIG5leHQoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHRoaXMuX3NsaWRlKE9SREVSX05FWFQpXG4gICAgfVxuICB9XG5cbiAgbmV4dFdoZW5WaXNpYmxlKCkge1xuICAgIC8vIERvbid0IGNhbGwgbmV4dCB3aGVuIHRoZSBwYWdlIGlzbid0IHZpc2libGVcbiAgICAvLyBvciB0aGUgY2Fyb3VzZWwgb3IgaXRzIHBhcmVudCBpc24ndCB2aXNpYmxlXG4gICAgaWYgKCFkb2N1bWVudC5oaWRkZW4gJiYgaXNWaXNpYmxlKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgIH1cbiAgfVxuXG4gIHByZXYoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHRoaXMuX3NsaWRlKE9SREVSX1BSRVYpXG4gICAgfVxuICB9XG5cbiAgcGF1c2UoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICB0aGlzLl9pc1BhdXNlZCA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAoU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9ORVhUX1BSRVYsIHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50KVxuICAgICAgdGhpcy5jeWNsZSh0cnVlKVxuICAgIH1cblxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gIH1cblxuICBjeWNsZShldmVudCkge1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIHRoaXMuX2lzUGF1c2VkID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW50ZXJ2YWwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnICYmIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCAmJiAhdGhpcy5faXNQYXVzZWQpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUludGVydmFsKClcblxuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA/IHRoaXMubmV4dFdoZW5WaXNpYmxlIDogdGhpcy5uZXh0KS5iaW5kKHRoaXMpLFxuICAgICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWxcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICB0byhpbmRleCkge1xuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRV9JVEVNLCB0aGlzLl9lbGVtZW50KVxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHRoaXMuX2FjdGl2ZUVsZW1lbnQpXG5cbiAgICBpZiAoaW5kZXggPiB0aGlzLl9pdGVtcy5sZW5ndGggLSAxIHx8IGluZGV4IDwgMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9TTElELCAoKSA9PiB0aGlzLnRvKGluZGV4KSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChhY3RpdmVJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgIHRoaXMucGF1c2UoKVxuICAgICAgdGhpcy5jeWNsZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBvcmRlciA9IGluZGV4ID4gYWN0aXZlSW5kZXggP1xuICAgICAgT1JERVJfTkVYVCA6XG4gICAgICBPUkRFUl9QUkVWXG5cbiAgICB0aGlzLl9zbGlkZShvcmRlciwgdGhpcy5faXRlbXNbaW5kZXhdKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfaGFuZGxlU3dpcGUoKSB7XG4gICAgY29uc3QgYWJzRGVsdGF4ID0gTWF0aC5hYnModGhpcy50b3VjaERlbHRhWClcblxuICAgIGlmIChhYnNEZWx0YXggPD0gU1dJUEVfVEhSRVNIT0xEKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBhYnNEZWx0YXggLyB0aGlzLnRvdWNoRGVsdGFYXG5cbiAgICB0aGlzLnRvdWNoRGVsdGFYID0gMFxuXG4gICAgaWYgKCFkaXJlY3Rpb24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX3NsaWRlKGRpcmVjdGlvbiA+IDAgPyBESVJFQ1RJT05fUklHSFQgOiBESVJFQ1RJT05fTEVGVClcbiAgfVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTiwgZXZlbnQgPT4gdGhpcy5fa2V5ZG93bihldmVudCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFRU5URVIsIGV2ZW50ID0+IHRoaXMucGF1c2UoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFTEVBVkUsIGV2ZW50ID0+IHRoaXMuY3ljbGUoZXZlbnQpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG91Y2ggJiYgdGhpcy5fdG91Y2hTdXBwb3J0ZWQpIHtcbiAgICAgIHRoaXMuX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cbiAgfVxuXG4gIF9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudCAmJiAoZXZlbnQucG9pbnRlclR5cGUgPT09IFBPSU5URVJfVFlQRV9QRU4gfHwgZXZlbnQucG9pbnRlclR5cGUgPT09IFBPSU5URVJfVFlQRV9UT1VDSCkpIHtcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0WCA9IGV2ZW50LmNsaWVudFhcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX3BvaW50ZXJFdmVudCkge1xuICAgICAgICB0aGlzLnRvdWNoU3RhcnRYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbW92ZSA9IGV2ZW50ID0+IHtcbiAgICAgIC8vIGVuc3VyZSBzd2lwaW5nIHdpdGggb25lIHRvdWNoIGFuZCBub3QgcGluY2hpbmdcbiAgICAgIHRoaXMudG91Y2hEZWx0YVggPSBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSA/XG4gICAgICAgIDAgOlxuICAgICAgICBldmVudC50b3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLnRvdWNoU3RhcnRYXG4gICAgfVxuXG4gICAgY29uc3QgZW5kID0gZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudCAmJiAoZXZlbnQucG9pbnRlclR5cGUgPT09IFBPSU5URVJfVFlQRV9QRU4gfHwgZXZlbnQucG9pbnRlclR5cGUgPT09IFBPSU5URVJfVFlQRV9UT1VDSCkpIHtcbiAgICAgICAgdGhpcy50b3VjaERlbHRhWCA9IGV2ZW50LmNsaWVudFggLSB0aGlzLnRvdWNoU3RhcnRYXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2hhbmRsZVN3aXBlKClcbiAgICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgICAgLy8gSWYgaXQncyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlLCBtb3VzZWVudGVyL2xlYXZlIGFyZSBmaXJlZCBhc1xuICAgICAgICAvLyBwYXJ0IG9mIHRoZSBtb3VzZSBjb21wYXRpYmlsaXR5IGV2ZW50cyBvbiBmaXJzdCB0YXAgLSB0aGUgY2Fyb3VzZWxcbiAgICAgICAgLy8gd291bGQgc3RvcCBjeWNsaW5nIHVudGlsIHVzZXIgdGFwcGVkIG91dCBvZiBpdDtcbiAgICAgICAgLy8gaGVyZSwgd2UgbGlzdGVuIGZvciB0b3VjaGVuZCwgZXhwbGljaXRseSBwYXVzZSB0aGUgY2Fyb3VzZWxcbiAgICAgICAgLy8gKGFzIGlmIGl0J3MgdGhlIHNlY29uZCB0aW1lIHdlIHRhcCBvbiBpdCwgbW91c2VlbnRlciBjb21wYXQgZXZlbnRcbiAgICAgICAgLy8gaXMgTk9UIGZpcmVkKSBhbmQgYWZ0ZXIgYSB0aW1lb3V0ICh0byBhbGxvdyBmb3IgbW91c2UgY29tcGF0aWJpbGl0eVxuICAgICAgICAvLyBldmVudHMgdG8gZmlyZSkgd2UgZXhwbGljaXRseSByZXN0YXJ0IGN5Y2xpbmdcblxuICAgICAgICB0aGlzLnBhdXNlKClcbiAgICAgICAgaWYgKHRoaXMudG91Y2hUaW1lb3V0KSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG91Y2hUaW1lb3V0KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50b3VjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KGV2ZW50ID0+IHRoaXMuY3ljbGUoZXZlbnQpLCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUICsgdGhpcy5fY29uZmlnLmludGVydmFsKVxuICAgICAgfVxuICAgIH1cblxuICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSVRFTV9JTUcsIHRoaXMuX2VsZW1lbnQpLmZvckVhY2goaXRlbUltZyA9PiB7XG4gICAgICBFdmVudEhhbmRsZXIub24oaXRlbUltZywgRVZFTlRfRFJBR19TVEFSVCwgZSA9PiBlLnByZXZlbnREZWZhdWx0KCkpXG4gICAgfSlcblxuICAgIGlmICh0aGlzLl9wb2ludGVyRXZlbnQpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9QT0lOVEVSRE9XTiwgZXZlbnQgPT4gc3RhcnQoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1BPSU5URVJVUCwgZXZlbnQgPT4gZW5kKGV2ZW50KSlcblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfUE9JTlRFUl9FVkVOVClcbiAgICB9IGVsc2Uge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNIU1RBUlQsIGV2ZW50ID0+IHN0YXJ0KGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSE1PVkUsIGV2ZW50ID0+IG1vdmUoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNIRU5ELCBldmVudCA9PiBlbmQoZXZlbnQpKVxuICAgIH1cbiAgfVxuXG4gIF9rZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSBBUlJPV19MRUZUX0tFWSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5fc2xpZGUoRElSRUNUSU9OX1JJR0hUKVxuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSBBUlJPV19SSUdIVF9LRVkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuX3NsaWRlKERJUkVDVElPTl9MRUZUKVxuICAgIH1cbiAgfVxuXG4gIF9nZXRJdGVtSW5kZXgoZWxlbWVudCkge1xuICAgIHRoaXMuX2l0ZW1zID0gZWxlbWVudCAmJiBlbGVtZW50LnBhcmVudE5vZGUgP1xuICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JVEVNLCBlbGVtZW50LnBhcmVudE5vZGUpIDpcbiAgICAgIFtdXG5cbiAgICByZXR1cm4gdGhpcy5faXRlbXMuaW5kZXhPZihlbGVtZW50KVxuICB9XG5cbiAgX2dldEl0ZW1CeU9yZGVyKG9yZGVyLCBhY3RpdmVFbGVtZW50KSB7XG4gICAgY29uc3QgaXNOZXh0ID0gb3JkZXIgPT09IE9SREVSX05FWFRcbiAgICBjb25zdCBpc1ByZXYgPSBvcmRlciA9PT0gT1JERVJfUFJFVlxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KGFjdGl2ZUVsZW1lbnQpXG4gICAgY29uc3QgbGFzdEl0ZW1JbmRleCA9IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDFcbiAgICBjb25zdCBpc0dvaW5nVG9XcmFwID0gKGlzUHJldiAmJiBhY3RpdmVJbmRleCA9PT0gMCkgfHwgKGlzTmV4dCAmJiBhY3RpdmVJbmRleCA9PT0gbGFzdEl0ZW1JbmRleClcblxuICAgIGlmIChpc0dvaW5nVG9XcmFwICYmICF0aGlzLl9jb25maWcud3JhcCkge1xuICAgICAgcmV0dXJuIGFjdGl2ZUVsZW1lbnRcbiAgICB9XG5cbiAgICBjb25zdCBkZWx0YSA9IGlzUHJldiA/IC0xIDogMVxuICAgIGNvbnN0IGl0ZW1JbmRleCA9IChhY3RpdmVJbmRleCArIGRlbHRhKSAlIHRoaXMuX2l0ZW1zLmxlbmd0aFxuXG4gICAgcmV0dXJuIGl0ZW1JbmRleCA9PT0gLTEgP1xuICAgICAgdGhpcy5faXRlbXNbdGhpcy5faXRlbXMubGVuZ3RoIC0gMV0gOlxuICAgICAgdGhpcy5faXRlbXNbaXRlbUluZGV4XVxuICB9XG5cbiAgX3RyaWdnZXJTbGlkZUV2ZW50KHJlbGF0ZWRUYXJnZXQsIGV2ZW50RGlyZWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHJlbGF0ZWRUYXJnZXQpXG4gICAgY29uc3QgZnJvbUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpKVxuXG4gICAgcmV0dXJuIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSURFLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0LFxuICAgICAgZGlyZWN0aW9uOiBldmVudERpcmVjdGlvbk5hbWUsXG4gICAgICBmcm9tOiBmcm9tSW5kZXgsXG4gICAgICB0bzogdGFyZ2V0SW5kZXhcbiAgICB9KVxuICB9XG5cbiAgX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQoZWxlbWVudCkge1xuICAgIGlmICh0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCkge1xuICAgICAgY29uc3QgYWN0aXZlSW5kaWNhdG9yID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkUsIHRoaXMuX2luZGljYXRvcnNFbGVtZW50KVxuXG4gICAgICBhY3RpdmVJbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIGFjdGl2ZUluZGljYXRvci5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpXG5cbiAgICAgIGNvbnN0IGluZGljYXRvcnMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lORElDQVRPUiwgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kaWNhdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoTnVtYmVyLnBhcnNlSW50KGluZGljYXRvcnNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXNsaWRlLXRvJyksIDEwKSA9PT0gdGhpcy5fZ2V0SXRlbUluZGV4KGVsZW1lbnQpKSB7XG4gICAgICAgICAgaW5kaWNhdG9yc1tpXS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgICAgIGluZGljYXRvcnNbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnLCAndHJ1ZScpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF91cGRhdGVJbnRlcnZhbCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fYWN0aXZlRWxlbWVudCB8fCBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRV9JVEVNLCB0aGlzLl9lbGVtZW50KVxuXG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50SW50ZXJ2YWwgPSBOdW1iZXIucGFyc2VJbnQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtaW50ZXJ2YWwnKSwgMTApXG5cbiAgICBpZiAoZWxlbWVudEludGVydmFsKSB7XG4gICAgICB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsID0gdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuaW50ZXJ2YWxcbiAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IGVsZW1lbnRJbnRlcnZhbFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWwgPSB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5pbnRlcnZhbFxuICAgIH1cbiAgfVxuXG4gIF9zbGlkZShkaXJlY3Rpb25Pck9yZGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3Qgb3JkZXIgPSB0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbk9yT3JkZXIpXG4gICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpXG4gICAgY29uc3QgYWN0aXZlRWxlbWVudEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KGFjdGl2ZUVsZW1lbnQpXG4gICAgY29uc3QgbmV4dEVsZW1lbnQgPSBlbGVtZW50IHx8IHRoaXMuX2dldEl0ZW1CeU9yZGVyKG9yZGVyLCBhY3RpdmVFbGVtZW50KVxuXG4gICAgY29uc3QgbmV4dEVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChuZXh0RWxlbWVudClcbiAgICBjb25zdCBpc0N5Y2xpbmcgPSBCb29sZWFuKHRoaXMuX2ludGVydmFsKVxuXG4gICAgY29uc3QgaXNOZXh0ID0gb3JkZXIgPT09IE9SREVSX05FWFRcbiAgICBjb25zdCBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IGlzTmV4dCA/IENMQVNTX05BTUVfU1RBUlQgOiBDTEFTU19OQU1FX0VORFxuICAgIGNvbnN0IG9yZGVyQ2xhc3NOYW1lID0gaXNOZXh0ID8gQ0xBU1NfTkFNRV9ORVhUIDogQ0xBU1NfTkFNRV9QUkVWXG4gICAgY29uc3QgZXZlbnREaXJlY3Rpb25OYW1lID0gdGhpcy5fb3JkZXJUb0RpcmVjdGlvbihvcmRlcilcblxuICAgIGlmIChuZXh0RWxlbWVudCAmJiBuZXh0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUpKSB7XG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2xpZGVFdmVudCA9IHRoaXMuX3RyaWdnZXJTbGlkZUV2ZW50KG5leHRFbGVtZW50LCBldmVudERpcmVjdGlvbk5hbWUpXG4gICAgaWYgKHNsaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFhY3RpdmVFbGVtZW50IHx8ICFuZXh0RWxlbWVudCkge1xuICAgICAgLy8gU29tZSB3ZWlyZG5lc3MgaXMgaGFwcGVuaW5nLCBzbyB3ZSBiYWlsXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1NsaWRpbmcgPSB0cnVlXG5cbiAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICB0aGlzLnBhdXNlKClcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KG5leHRFbGVtZW50KVxuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBuZXh0RWxlbWVudFxuXG4gICAgY29uc3QgdHJpZ2dlclNsaWRFdmVudCA9ICgpID0+IHtcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogbmV4dEVsZW1lbnQsXG4gICAgICAgIGRpcmVjdGlvbjogZXZlbnREaXJlY3Rpb25OYW1lLFxuICAgICAgICBmcm9tOiBhY3RpdmVFbGVtZW50SW5kZXgsXG4gICAgICAgIHRvOiBuZXh0RWxlbWVudEluZGV4XG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NMSURFKSkge1xuICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChvcmRlckNsYXNzTmFtZSlcblxuICAgICAgcmVmbG93KG5leHRFbGVtZW50KVxuXG4gICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuXG4gICAgICBjb25zdCBjb21wbGV0ZUNhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGRpcmVjdGlvbmFsQ2xhc3NOYW1lLCBvcmRlckNsYXNzTmFtZSlcbiAgICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUsIG9yZGVyQ2xhc3NOYW1lLCBkaXJlY3Rpb25hbENsYXNzTmFtZSlcblxuICAgICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuXG4gICAgICAgIHNldFRpbWVvdXQodHJpZ2dlclNsaWRFdmVudCwgMClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxCYWNrLCBhY3RpdmVFbGVtZW50LCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgICAgdHJpZ2dlclNsaWRFdmVudCgpXG4gICAgfVxuXG4gICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgdGhpcy5jeWNsZSgpXG4gICAgfVxuICB9XG5cbiAgX2RpcmVjdGlvblRvT3JkZXIoZGlyZWN0aW9uKSB7XG4gICAgaWYgKCFbRElSRUNUSU9OX1JJR0hULCBESVJFQ1RJT05fTEVGVF0uaW5jbHVkZXMoZGlyZWN0aW9uKSkge1xuICAgICAgcmV0dXJuIGRpcmVjdGlvblxuICAgIH1cblxuICAgIGlmIChpc1JUTCgpKSB7XG4gICAgICByZXR1cm4gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTEVGVCA/IE9SREVSX1BSRVYgOiBPUkRFUl9ORVhUXG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX0xFRlQgPyBPUkRFUl9ORVhUIDogT1JERVJfUFJFVlxuICB9XG5cbiAgX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpIHtcbiAgICBpZiAoIVtPUkRFUl9ORVhULCBPUkRFUl9QUkVWXS5pbmNsdWRlcyhvcmRlcikpIHtcbiAgICAgIHJldHVybiBvcmRlclxuICAgIH1cblxuICAgIGlmIChpc1JUTCgpKSB7XG4gICAgICByZXR1cm4gb3JkZXIgPT09IE9SREVSX1BSRVYgPyBESVJFQ1RJT05fTEVGVCA6IERJUkVDVElPTl9SSUdIVFxuICAgIH1cblxuICAgIHJldHVybiBvcmRlciA9PT0gT1JERVJfUFJFViA/IERJUkVDVElPTl9SSUdIVCA6IERJUkVDVElPTl9MRUZUXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgY2Fyb3VzZWxJbnRlcmZhY2UoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgbGV0IGRhdGEgPSBEYXRhLmdldChlbGVtZW50LCBEQVRBX0tFWSlcbiAgICBsZXQgX2NvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgX2NvbmZpZyA9IHtcbiAgICAgICAgLi4uX2NvbmZpZyxcbiAgICAgICAgLi4uY29uZmlnXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aW9uID0gdHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgPyBjb25maWcgOiBfY29uZmlnLnNsaWRlXG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIGRhdGEgPSBuZXcgQ2Fyb3VzZWwoZWxlbWVudCwgX2NvbmZpZylcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGRhdGEudG8oY29uZmlnKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YVthY3Rpb25dID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2FjdGlvbn1cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbYWN0aW9uXSgpXG4gICAgfSBlbHNlIGlmIChfY29uZmlnLmludGVydmFsICYmIF9jb25maWcucmlkZSkge1xuICAgICAgZGF0YS5wYXVzZSgpXG4gICAgICBkYXRhLmN5Y2xlKClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgQ2Fyb3VzZWwuY2Fyb3VzZWxJbnRlcmZhY2UodGhpcywgY29uZmlnKVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgZGF0YUFwaUNsaWNrSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcylcblxuICAgIGlmICghdGFyZ2V0IHx8ICF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQ0FST1VTRUwpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0YXJnZXQpLFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcylcbiAgICB9XG4gICAgY29uc3Qgc2xpZGVJbmRleCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXNsaWRlLXRvJylcblxuICAgIGlmIChzbGlkZUluZGV4KSB7XG4gICAgICBjb25maWcuaW50ZXJ2YWwgPSBmYWxzZVxuICAgIH1cblxuICAgIENhcm91c2VsLmNhcm91c2VsSW50ZXJmYWNlKHRhcmdldCwgY29uZmlnKVxuXG4gICAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICAgIERhdGEuZ2V0KHRhcmdldCwgREFUQV9LRVkpLnRvKHNsaWRlSW5kZXgpXG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9TTElERSwgQ2Fyb3VzZWwuZGF0YUFwaUNsaWNrSGFuZGxlcilcblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBjb25zdCBjYXJvdXNlbHMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfUklERSlcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2Fyb3VzZWxzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgQ2Fyb3VzZWwuY2Fyb3VzZWxJbnRlcmZhY2UoY2Fyb3VzZWxzW2ldLCBEYXRhLmdldChjYXJvdXNlbHNbaV0sIERBVEFfS0VZKSlcbiAgfVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLkNhcm91c2VsIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKENhcm91c2VsKVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBjb2xsYXBzZS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCxcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgcmVmbG93LFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ2NvbGxhcHNlJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuY29sbGFwc2UnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgdG9nZ2xlOiB0cnVlLFxuICBwYXJlbnQ6ICcnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICB0b2dnbGU6ICdib29sZWFuJyxcbiAgcGFyZW50OiAnKHN0cmluZ3xlbGVtZW50KSdcbn1cblxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTRSA9ICdjb2xsYXBzZSdcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0lORyA9ICdjb2xsYXBzaW5nJ1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTRUQgPSAnY29sbGFwc2VkJ1xuXG5jb25zdCBXSURUSCA9ICd3aWR0aCdcbmNvbnN0IEhFSUdIVCA9ICdoZWlnaHQnXG5cbmNvbnN0IFNFTEVDVE9SX0FDVElWRVMgPSAnLnNob3csIC5jb2xsYXBzaW5nJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIl0nXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBDb2xsYXBzZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX3RyaWdnZXJBcnJheSA9IFNlbGVjdG9yRW5naW5lLmZpbmQoXG4gICAgICBgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRX1baHJlZj1cIiMke3RoaXMuX2VsZW1lbnQuaWR9XCJdLGAgK1xuICAgICAgYCR7U0VMRUNUT1JfREFUQV9UT0dHTEV9W2RhdGEtYnMtdGFyZ2V0PVwiIyR7dGhpcy5fZWxlbWVudC5pZH1cIl1gXG4gICAgKVxuXG4gICAgY29uc3QgdG9nZ2xlTGlzdCA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9UT0dHTEUpXG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdG9nZ2xlTGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgZWxlbSA9IHRvZ2dsZUxpc3RbaV1cbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtKVxuICAgICAgY29uc3QgZmlsdGVyRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpXG4gICAgICAgIC5maWx0ZXIoZm91bmRFbGVtID0+IGZvdW5kRWxlbSA9PT0gdGhpcy5fZWxlbWVudClcblxuICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsICYmIGZpbHRlckVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdG9yID0gc2VsZWN0b3JcbiAgICAgICAgdGhpcy5fdHJpZ2dlckFycmF5LnB1c2goZWxlbSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9jb25maWcucGFyZW50ID8gdGhpcy5fZ2V0UGFyZW50KCkgOiBudWxsXG5cbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLl9lbGVtZW50LCB0aGlzLl90cmlnZ2VyQXJyYXkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy50b2dnbGUpIHtcbiAgICAgIHRoaXMudG9nZ2xlKClcbiAgICB9XG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KClcbiAgICB9XG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGFjdGl2ZXNcbiAgICBsZXQgYWN0aXZlc0RhdGFcblxuICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcbiAgICAgIGFjdGl2ZXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0FDVElWRVMsIHRoaXMuX3BhcmVudClcbiAgICAgICAgLmZpbHRlcihlbGVtID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5wYXJlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtcGFyZW50JykgPT09IHRoaXMuX2NvbmZpZy5wYXJlbnRcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICAgICAgfSlcblxuICAgICAgaWYgKGFjdGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGFjdGl2ZXMgPSBudWxsXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbmVyID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZSh0aGlzLl9zZWxlY3RvcilcbiAgICBpZiAoYWN0aXZlcykge1xuICAgICAgY29uc3QgdGVtcEFjdGl2ZURhdGEgPSBhY3RpdmVzLmZpbmQoZWxlbSA9PiBjb250YWluZXIgIT09IGVsZW0pXG4gICAgICBhY3RpdmVzRGF0YSA9IHRlbXBBY3RpdmVEYXRhID8gRGF0YS5nZXQodGVtcEFjdGl2ZURhdGEsIERBVEFfS0VZKSA6IG51bGxcblxuICAgICAgaWYgKGFjdGl2ZXNEYXRhICYmIGFjdGl2ZXNEYXRhLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1cpXG4gICAgaWYgKHN0YXJ0RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZXMpIHtcbiAgICAgIGFjdGl2ZXMuZm9yRWFjaChlbGVtQWN0aXZlID0+IHtcbiAgICAgICAgaWYgKGNvbnRhaW5lciAhPT0gZWxlbUFjdGl2ZSkge1xuICAgICAgICAgIENvbGxhcHNlLmNvbGxhcHNlSW50ZXJmYWNlKGVsZW1BY3RpdmUsICdoaWRlJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYWN0aXZlc0RhdGEpIHtcbiAgICAgICAgICBEYXRhLnNldChlbGVtQWN0aXZlLCBEQVRBX0tFWSwgbnVsbClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0lORylcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IDBcblxuICAgIGlmICh0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICB0aGlzLl90cmlnZ2VyQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0VEKVxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UsIENMQVNTX05BTUVfU0hPVylcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcblxuICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKVxuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTilcbiAgICB9XG5cbiAgICBjb25zdCBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXG4gICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWBcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXX1weGBcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCAhdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpXG4gICAgaWYgKHN0YXJ0RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKClcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbZGltZW5zaW9uXX1weGBcblxuICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0lORylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRSwgQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgY29uc3QgdHJpZ2dlckFycmF5TGVuZ3RoID0gdGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aFxuICAgIGlmICh0cmlnZ2VyQXJyYXlMZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyaWdnZXJBcnJheUxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRyaWdnZXIgPSB0aGlzLl90cmlnZ2VyQXJyYXlbaV1cbiAgICAgICAgY29uc3QgZWxlbSA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodHJpZ2dlcilcblxuICAgICAgICBpZiAoZWxlbSAmJiAhZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgICAgIHRyaWdnZXIuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNFRClcbiAgICAgICAgICB0cmlnZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKHRydWUpXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyhmYWxzZSlcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdHJ1ZSlcbiAgfVxuXG4gIHNldFRyYW5zaXRpb25pbmcoaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gaXNUcmFuc2l0aW9uaW5nXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuICAgIGNvbmZpZy50b2dnbGUgPSBCb29sZWFuKGNvbmZpZy50b2dnbGUpIC8vIENvZXJjZSBzdHJpbmcgdmFsdWVzXG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldERpbWVuc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoV0lEVEgpID8gV0lEVEggOiBIRUlHSFRcbiAgfVxuXG4gIF9nZXRQYXJlbnQoKSB7XG4gICAgbGV0IHsgcGFyZW50IH0gPSB0aGlzLl9jb25maWdcblxuICAgIHBhcmVudCA9IGdldEVsZW1lbnQocGFyZW50KVxuXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRX1bZGF0YS1icy1wYXJlbnQ9XCIke3BhcmVudH1cIl1gXG5cbiAgICBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yLCBwYXJlbnQpXG4gICAgICAuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFxuICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgIFtlbGVtZW50XVxuICAgICAgICApXG4gICAgICB9KVxuXG4gICAgcmV0dXJuIHBhcmVudFxuICB9XG5cbiAgX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhlbGVtZW50LCB0cmlnZ2VyQXJyYXkpIHtcbiAgICBpZiAoIWVsZW1lbnQgfHwgIXRyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzT3BlbiA9IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVylcblxuICAgIHRyaWdnZXJBcnJheS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpXG4gICAgICB9XG5cbiAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuICAgIH0pXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgY29sbGFwc2VJbnRlcmZhY2UoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgbGV0IGRhdGEgPSBEYXRhLmdldChlbGVtZW50LCBEQVRBX0tFWSlcbiAgICBjb25zdCBfY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpLFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cblxuICAgIGlmICghZGF0YSAmJiBfY29uZmlnLnRvZ2dsZSAmJiB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgIF9jb25maWcudG9nZ2xlID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIGRhdGEgPSBuZXcgQ29sbGFwc2UoZWxlbWVudCwgX2NvbmZpZylcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIENvbGxhcHNlLmNvbGxhcHNlSW50ZXJmYWNlKHRoaXMsIGNvbmZpZylcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAvLyBwcmV2ZW50RGVmYXVsdCBvbmx5IGZvciA8YT4gZWxlbWVudHMgKHdoaWNoIGNoYW5nZSB0aGUgVVJMKSBub3QgaW5zaWRlIHRoZSBjb2xsYXBzaWJsZSBlbGVtZW50XG4gIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0EnIHx8IChldmVudC5kZWxlZ2F0ZVRhcmdldCAmJiBldmVudC5kZWxlZ2F0ZVRhcmdldC50YWdOYW1lID09PSAnQScpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY29uc3QgdHJpZ2dlckRhdGEgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzKVxuICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcylcbiAgY29uc3Qgc2VsZWN0b3JFbGVtZW50cyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpXG5cbiAgc2VsZWN0b3JFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBEYXRhLmdldChlbGVtZW50LCBEQVRBX0tFWSlcbiAgICBsZXQgY29uZmlnXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIC8vIHVwZGF0ZSBwYXJlbnQgYXR0cmlidXRlXG4gICAgICBpZiAoZGF0YS5fcGFyZW50ID09PSBudWxsICYmIHR5cGVvZiB0cmlnZ2VyRGF0YS5wYXJlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGRhdGEuX2NvbmZpZy5wYXJlbnQgPSB0cmlnZ2VyRGF0YS5wYXJlbnRcbiAgICAgICAgZGF0YS5fcGFyZW50ID0gZGF0YS5fZ2V0UGFyZW50KClcbiAgICAgIH1cblxuICAgICAgY29uZmlnID0gJ3RvZ2dsZSdcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnID0gdHJpZ2dlckRhdGFcbiAgICB9XG5cbiAgICBDb2xsYXBzZS5jb2xsYXBzZUludGVyZmFjZShlbGVtZW50LCBjb25maWcpXG4gIH0pXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuQ29sbGFwc2UgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQ29sbGFwc2UpXG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNlXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IGRyb3Bkb3duLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICogYXMgUG9wcGVyIGZyb20gJ0Bwb3BwZXJqcy9jb3JlJ1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnQsXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGlzRGlzYWJsZWQsXG4gIGlzRWxlbWVudCxcbiAgaXNWaXNpYmxlLFxuICBpc1JUTCxcbiAgbm9vcCxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdkcm9wZG93bidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmRyb3Bkb3duJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVTQ0FQRV9LRVkgPSAnRXNjYXBlJ1xuY29uc3QgU1BBQ0VfS0VZID0gJ1NwYWNlJ1xuY29uc3QgVEFCX0tFWSA9ICdUYWInXG5jb25zdCBBUlJPV19VUF9LRVkgPSAnQXJyb3dVcCdcbmNvbnN0IEFSUk9XX0RPV05fS0VZID0gJ0Fycm93RG93bidcbmNvbnN0IFJJR0hUX01PVVNFX0JVVFRPTiA9IDIgLy8gTW91c2VFdmVudC5idXR0b24gdmFsdWUgZm9yIHRoZSBzZWNvbmRhcnkgYnV0dG9uLCB1c3VhbGx5IHRoZSByaWdodCBidXR0b25cblxuY29uc3QgUkVHRVhQX0tFWURPV04gPSBuZXcgUmVnRXhwKGAke0FSUk9XX1VQX0tFWX18JHtBUlJPV19ET1dOX0tFWX18JHtFU0NBUEVfS0VZfWApXG5cbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLID0gYGNsaWNrJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJID0gYGtleWRvd24ke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlVUF9EQVRBX0FQSSA9IGBrZXl1cCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX0RST1BVUCA9ICdkcm9wdXAnXG5jb25zdCBDTEFTU19OQU1FX0RST1BFTkQgPSAnZHJvcGVuZCdcbmNvbnN0IENMQVNTX05BTUVfRFJPUFNUQVJUID0gJ2Ryb3BzdGFydCdcbmNvbnN0IENMQVNTX05BTUVfTkFWQkFSID0gJ25hdmJhcidcblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIl0nXG5jb25zdCBTRUxFQ1RPUl9NRU5VID0gJy5kcm9wZG93bi1tZW51J1xuY29uc3QgU0VMRUNUT1JfTkFWQkFSX05BViA9ICcubmF2YmFyLW5hdidcbmNvbnN0IFNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMgPSAnLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCknXG5cbmNvbnN0IFBMQUNFTUVOVF9UT1AgPSBpc1JUTCgpID8gJ3RvcC1lbmQnIDogJ3RvcC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9UT1BFTkQgPSBpc1JUTCgpID8gJ3RvcC1zdGFydCcgOiAndG9wLWVuZCdcbmNvbnN0IFBMQUNFTUVOVF9CT1RUT00gPSBpc1JUTCgpID8gJ2JvdHRvbS1lbmQnIDogJ2JvdHRvbS1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9CT1RUT01FTkQgPSBpc1JUTCgpID8gJ2JvdHRvbS1zdGFydCcgOiAnYm90dG9tLWVuZCdcbmNvbnN0IFBMQUNFTUVOVF9SSUdIVCA9IGlzUlRMKCkgPyAnbGVmdC1zdGFydCcgOiAncmlnaHQtc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfTEVGVCA9IGlzUlRMKCkgPyAncmlnaHQtc3RhcnQnIDogJ2xlZnQtc3RhcnQnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIG9mZnNldDogWzAsIDJdLFxuICBib3VuZGFyeTogJ2NsaXBwaW5nUGFyZW50cycsXG4gIHJlZmVyZW5jZTogJ3RvZ2dsZScsXG4gIGRpc3BsYXk6ICdkeW5hbWljJyxcbiAgcG9wcGVyQ29uZmlnOiBudWxsLFxuICBhdXRvQ2xvc2U6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIG9mZnNldDogJyhhcnJheXxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgcmVmZXJlbmNlOiAnKHN0cmluZ3xlbGVtZW50fG9iamVjdCknLFxuICBkaXNwbGF5OiAnc3RyaW5nJyxcbiAgcG9wcGVyQ29uZmlnOiAnKG51bGx8b2JqZWN0fGZ1bmN0aW9uKScsXG4gIGF1dG9DbG9zZTogJyhib29sZWFufHN0cmluZyknXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBEcm9wZG93biBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fbWVudSA9IHRoaXMuX2dldE1lbnVFbGVtZW50KClcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG5cbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICB0aGlzLmhpZGUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5zaG93KClcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkgfHwgdGhpcy5fbWVudS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50ID0gRHJvcGRvd24uZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHJlbGF0ZWRUYXJnZXQpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIFRvdGFsbHkgZGlzYWJsZSBQb3BwZXIgZm9yIERyb3Bkb3ducyBpbiBOYXZiYXJcbiAgICBpZiAodGhpcy5faW5OYXZiYXIpIHtcbiAgICAgIE1hbmlwdWxhdG9yLnNldERhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSwgJ3BvcHBlcicsICdub25lJylcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgZHJvcGRvd25zIHJlcXVpcmUgUG9wcGVyIChodHRwczovL3BvcHBlci5qcy5vcmcpJylcbiAgICAgIH1cblxuICAgICAgbGV0IHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAncGFyZW50Jykge1xuICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gcGFyZW50XG4gICAgICB9IGVsc2UgaWYgKGlzRWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKSkge1xuICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gZ2V0RWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VcbiAgICAgIH1cblxuICAgICAgY29uc3QgcG9wcGVyQ29uZmlnID0gdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKClcbiAgICAgIGNvbnN0IGlzRGlzcGxheVN0YXRpYyA9IHBvcHBlckNvbmZpZy5tb2RpZmllcnMuZmluZChtb2RpZmllciA9PiBtb2RpZmllci5uYW1lID09PSAnYXBwbHlTdHlsZXMnICYmIG1vZGlmaWVyLmVuYWJsZWQgPT09IGZhbHNlKVxuXG4gICAgICB0aGlzLl9wb3BwZXIgPSBQb3BwZXIuY3JlYXRlUG9wcGVyKHJlZmVyZW5jZUVsZW1lbnQsIHRoaXMuX21lbnUsIHBvcHBlckNvbmZpZylcblxuICAgICAgaWYgKGlzRGlzcGxheVN0YXRpYykge1xuICAgICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInLCAnc3RhdGljJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcbiAgICAgICFwYXJlbnQuY2xvc2VzdChTRUxFQ1RPUl9OQVZCQVJfTkFWKSkge1xuICAgICAgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pXG4gICAgICAgIC5mb3JFYWNoKGVsZW0gPT4gRXZlbnRIYW5kbGVyLm9uKGVsZW0sICdtb3VzZW92ZXInLCBub29wKSlcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC50b2dnbGUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX1NIT1cpXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmIChpc0Rpc2FibGVkKHRoaXMuX2VsZW1lbnQpIHx8ICF0aGlzLl9tZW51LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cblxuICAgIHRoaXMuX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKVxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci51cGRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLLCBldmVudCA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgfSlcbiAgfVxuXG4gIF9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldCkge1xuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUsIHJlbGF0ZWRUYXJnZXQpXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pXG4gICAgICAgIC5mb3JFYWNoKGVsZW0gPT4gRXZlbnRIYW5kbGVyLm9mZihlbGVtLCAnbW91c2VvdmVyJywgbm9vcCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIHRoaXMuX21lbnUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXG4gICAgTWFuaXB1bGF0b3IucmVtb3ZlRGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LCAncG9wcGVyJylcbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4sIHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCxcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpLFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuXG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZSlcblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZmVyZW5jZSA9PT0gJ29iamVjdCcgJiYgIWlzRWxlbWVudChjb25maWcucmVmZXJlbmNlKSAmJlxuICAgICAgdHlwZW9mIGNvbmZpZy5yZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSAnZnVuY3Rpb24nXG4gICAgKSB7XG4gICAgICAvLyBQb3BwZXIgdmlydHVhbCBlbGVtZW50cyByZXF1aXJlIGEgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG1ldGhvZFxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtOQU1FLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gXCJyZWZlcmVuY2VcIiBwcm92aWRlZCB0eXBlIFwib2JqZWN0XCIgd2l0aG91dCBhIHJlcXVpcmVkIFwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0XCIgbWV0aG9kLmApXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldE1lbnVFbGVtZW50KCkge1xuICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5uZXh0KHRoaXMuX2VsZW1lbnQsIFNFTEVDVE9SX01FTlUpWzBdXG4gIH1cblxuICBfZ2V0UGxhY2VtZW50KCkge1xuICAgIGNvbnN0IHBhcmVudERyb3Bkb3duID0gdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlXG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUEVORCkpIHtcbiAgICAgIHJldHVybiBQTEFDRU1FTlRfUklHSFRcbiAgICB9XG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUFNUQVJUKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9MRUZUXG4gICAgfVxuXG4gICAgLy8gV2UgbmVlZCB0byB0cmltIHRoZSB2YWx1ZSBiZWNhdXNlIGN1c3RvbSBwcm9wZXJ0aWVzIGNhbiBhbHNvIGluY2x1ZGUgc3BhY2VzXG4gICAgY29uc3QgaXNFbmQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX21lbnUpLmdldFByb3BlcnR5VmFsdWUoJy0tYnMtcG9zaXRpb24nKS50cmltKCkgPT09ICdlbmQnXG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUFVQKSkge1xuICAgICAgcmV0dXJuIGlzRW5kID8gUExBQ0VNRU5UX1RPUEVORCA6IFBMQUNFTUVOVF9UT1BcbiAgICB9XG5cbiAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfQk9UVE9NRU5EIDogUExBQ0VNRU5UX0JPVFRPTVxuICB9XG5cbiAgX2RldGVjdE5hdmJhcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbG9zZXN0KGAuJHtDTEFTU19OQU1FX05BVkJBUn1gKSAhPT0gbnVsbFxuICB9XG5cbiAgX2dldE9mZnNldCgpIHtcbiAgICBjb25zdCB7IG9mZnNldCB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBvZmZzZXQuc3BsaXQoJywnKS5tYXAodmFsID0+IE51bWJlci5wYXJzZUludCh2YWwsIDEwKSlcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHBvcHBlckRhdGEgPT4gb2Zmc2V0KHBvcHBlckRhdGEsIHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldFxuICB9XG5cbiAgX2dldFBvcHBlckNvbmZpZygpIHtcbiAgICBjb25zdCBkZWZhdWx0QnNQb3BwZXJDb25maWcgPSB7XG4gICAgICBwbGFjZW1lbnQ6IHRoaXMuX2dldFBsYWNlbWVudCgpLFxuICAgICAgbW9kaWZpZXJzOiBbe1xuICAgICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIGJvdW5kYXJ5OiB0aGlzLl9jb25maWcuYm91bmRhcnlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpXG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSBQb3BwZXIgaWYgd2UgaGF2ZSBhIHN0YXRpYyBkaXNwbGF5XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5kaXNwbGF5ID09PSAnc3RhdGljJykge1xuICAgICAgZGVmYXVsdEJzUG9wcGVyQ29uZmlnLm1vZGlmaWVycyA9IFt7XG4gICAgICAgIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9XVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5kZWZhdWx0QnNQb3BwZXJDb25maWcsXG4gICAgICAuLi4odHlwZW9mIHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnKGRlZmF1bHRCc1BvcHBlckNvbmZpZykgOiB0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnKVxuICAgIH1cbiAgfVxuXG4gIF9zZWxlY3RNZW51SXRlbShldmVudCkge1xuICAgIGNvbnN0IGl0ZW1zID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9WSVNJQkxFX0lURU1TLCB0aGlzLl9tZW51KS5maWx0ZXIoaXNWaXNpYmxlKVxuXG4gICAgaWYgKCFpdGVtcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBpbmRleCA9IGl0ZW1zLmluZGV4T2YoZXZlbnQudGFyZ2V0KVxuXG4gICAgLy8gVXBcbiAgICBpZiAoZXZlbnQua2V5ID09PSBBUlJPV19VUF9LRVkgJiYgaW5kZXggPiAwKSB7XG4gICAgICBpbmRleC0tXG4gICAgfVxuXG4gICAgLy8gRG93blxuICAgIGlmIChldmVudC5rZXkgPT09IEFSUk9XX0RPV05fS0VZICYmIGluZGV4IDwgaXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIC8vIGluZGV4IGlzIC0xIGlmIHRoZSBmaXJzdCBrZXlkb3duIGlzIGFuIEFycm93VXBcbiAgICBpbmRleCA9IGluZGV4ID09PSAtMSA/IDAgOiBpbmRleFxuXG4gICAgaXRlbXNbaW5kZXhdLmZvY3VzKClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBkcm9wZG93bkludGVyZmFjZShlbGVtZW50LCBjb25maWcpIHtcbiAgICBsZXQgZGF0YSA9IERhdGEuZ2V0KGVsZW1lbnQsIERBVEFfS0VZKVxuICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGxcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgZGF0YSA9IG5ldyBEcm9wZG93bihlbGVtZW50LCBfY29uZmlnKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgRHJvcGRvd24uZHJvcGRvd25JbnRlcmZhY2UodGhpcywgY29uZmlnKVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgY2xlYXJNZW51cyhldmVudCkge1xuICAgIGlmIChldmVudCAmJiAoZXZlbnQuYnV0dG9uID09PSBSSUdIVF9NT1VTRV9CVVRUT04gfHwgKGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQua2V5ICE9PSBUQUJfS0VZKSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFKVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRvZ2dsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBEYXRhLmdldCh0b2dnbGVzW2ldLCBEQVRBX0tFWSlcbiAgICAgIGlmICghY29udGV4dCB8fCBjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSBmYWxzZSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbnRleHQuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogY29udGV4dC5fZWxlbWVudFxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgY29tcG9zZWRQYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKClcbiAgICAgICAgY29uc3QgaXNNZW51VGFyZ2V0ID0gY29tcG9zZWRQYXRoLmluY2x1ZGVzKGNvbnRleHQuX21lbnUpXG4gICAgICAgIGlmIChcbiAgICAgICAgICBjb21wb3NlZFBhdGguaW5jbHVkZXMoY29udGV4dC5fZWxlbWVudCkgfHxcbiAgICAgICAgICAoY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gJ2luc2lkZScgJiYgIWlzTWVudVRhcmdldCkgfHxcbiAgICAgICAgICAoY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gJ291dHNpZGUnICYmIGlzTWVudVRhcmdldClcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRhYiBuYXZpZ2F0aW9uIHRocm91Z2ggdGhlIGRyb3Bkb3duIG1lbnUgb3IgZXZlbnRzIGZyb20gY29udGFpbmVkIGlucHV0cyBzaG91bGRuJ3QgY2xvc2UgdGhlIG1lbnVcbiAgICAgICAgaWYgKGNvbnRleHQuX21lbnUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAoKGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQua2V5ID09PSBUQUJfS0VZKSB8fCAvaW5wdXR8c2VsZWN0fG9wdGlvbnx0ZXh0YXJlYXxmb3JtL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldC5jbGlja0V2ZW50ID0gZXZlbnRcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb250ZXh0Ll9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0UGFyZW50RnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpIHx8IGVsZW1lbnQucGFyZW50Tm9kZVxuICB9XG5cbiAgc3RhdGljIGRhdGFBcGlLZXlkb3duSGFuZGxlcihldmVudCkge1xuICAgIC8vIElmIG5vdCBpbnB1dC90ZXh0YXJlYTpcbiAgICAvLyAgLSBBbmQgbm90IGEga2V5IGluIFJFR0VYUF9LRVlET1dOID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyBJZiBpbnB1dC90ZXh0YXJlYTpcbiAgICAvLyAgLSBJZiBzcGFjZSBrZXkgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vICAtIElmIGtleSBpcyBvdGhlciB0aGFuIGVzY2FwZVxuICAgIC8vICAgIC0gSWYga2V5IGlzIG5vdCB1cCBvciBkb3duID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyAgICAtIElmIHRyaWdnZXIgaW5zaWRlIHRoZSBtZW51ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkgP1xuICAgICAgZXZlbnQua2V5ID09PSBTUEFDRV9LRVkgfHwgKGV2ZW50LmtleSAhPT0gRVNDQVBFX0tFWSAmJlxuICAgICAgKChldmVudC5rZXkgIT09IEFSUk9XX0RPV05fS0VZICYmIGV2ZW50LmtleSAhPT0gQVJST1dfVVBfS0VZKSB8fFxuICAgICAgICBldmVudC50YXJnZXQuY2xvc2VzdChTRUxFQ1RPUl9NRU5VKSkpIDpcbiAgICAgICFSRUdFWFBfS0VZRE9XTi50ZXN0KGV2ZW50LmtleSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgaWYgKCFpc0FjdGl2ZSAmJiBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGdldFRvZ2dsZUJ1dHRvbiA9ICgpID0+IHRoaXMubWF0Y2hlcyhTRUxFQ1RPUl9EQVRBX1RPR0dMRSkgPyB0aGlzIDogU2VsZWN0b3JFbmdpbmUucHJldih0aGlzLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSlbMF1cblxuICAgIGlmIChldmVudC5rZXkgPT09IEVTQ0FQRV9LRVkpIHtcbiAgICAgIGdldFRvZ2dsZUJ1dHRvbigpLmZvY3VzKClcbiAgICAgIERyb3Bkb3duLmNsZWFyTWVudXMoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFpc0FjdGl2ZSAmJiAoZXZlbnQua2V5ID09PSBBUlJPV19VUF9LRVkgfHwgZXZlbnQua2V5ID09PSBBUlJPV19ET1dOX0tFWSkpIHtcbiAgICAgIGdldFRvZ2dsZUJ1dHRvbigpLmNsaWNrKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghaXNBY3RpdmUgfHwgZXZlbnQua2V5ID09PSBTUEFDRV9LRVkpIHtcbiAgICAgIERyb3Bkb3duLmNsZWFyTWVudXMoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgRHJvcGRvd24uZ2V0SW5zdGFuY2UoZ2V0VG9nZ2xlQnV0dG9uKCkpLl9zZWxlY3RNZW51SXRlbShldmVudClcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIERyb3Bkb3duLmRhdGFBcGlLZXlkb3duSGFuZGxlcilcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfTUVOVSwgRHJvcGRvd24uZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgRHJvcGRvd24uY2xlYXJNZW51cylcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZVVBfREFUQV9BUEksIERyb3Bkb3duLmNsZWFyTWVudXMpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgRHJvcGRvd24uZHJvcGRvd25JbnRlcmZhY2UodGhpcylcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5Ecm9wZG93biB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihEcm9wZG93bilcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogdXRpbC9zY3JvbGxCYXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuLi9kb20vbWFuaXB1bGF0b3InXG5cbmNvbnN0IFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQgPSAnLmZpeGVkLXRvcCwgLmZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkLCAuc3RpY2t5LXRvcCdcbmNvbnN0IFNFTEVDVE9SX1NUSUNLWV9DT05URU5UID0gJy5zdGlja3ktdG9wJ1xuXG5jb25zdCBnZXRXaWR0aCA9ICgpID0+IHtcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9pbm5lcldpZHRoI3VzYWdlX25vdGVzXG4gIGNvbnN0IGRvY3VtZW50V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgcmV0dXJuIE1hdGguYWJzKHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnRXaWR0aClcbn1cblxuY29uc3QgaGlkZSA9ICh3aWR0aCA9IGdldFdpZHRoKCkpID0+IHtcbiAgX2Rpc2FibGVPdmVyRmxvdygpXG4gIC8vIGdpdmUgcGFkZGluZyB0byBlbGVtZW50IHRvIGJhbGFuY2VzIHRoZSBoaWRkZW4gc2Nyb2xsYmFyIHdpZHRoXG4gIF9zZXRFbGVtZW50QXR0cmlidXRlcygnYm9keScsICdwYWRkaW5nUmlnaHQnLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlICsgd2lkdGgpXG4gIC8vIHRyaWNrOiBXZSBhZGp1c3QgcG9zaXRpdmUgcGFkZGluZ1JpZ2h0IGFuZCBuZWdhdGl2ZSBtYXJnaW5SaWdodCB0byBzdGlja3ktdG9wIGVsZW1lbnRzLCB0byBrZWVwIHNob3duIGZ1bGx3aWR0aFxuICBfc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgJ3BhZGRpbmdSaWdodCcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgKyB3aWR0aClcbiAgX3NldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX1NUSUNLWV9DT05URU5ULCAnbWFyZ2luUmlnaHQnLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlIC0gd2lkdGgpXG59XG5cbmNvbnN0IF9kaXNhYmxlT3ZlckZsb3cgPSAoKSA9PiB7XG4gIGNvbnN0IGFjdHVhbFZhbHVlID0gZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1xuICBpZiAoYWN0dWFsVmFsdWUpIHtcbiAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKGRvY3VtZW50LmJvZHksICdvdmVyZmxvdycsIGFjdHVhbFZhbHVlKVxuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG59XG5cbmNvbnN0IF9zZXRFbGVtZW50QXR0cmlidXRlcyA9IChzZWxlY3Rvciwgc3R5bGVQcm9wLCBjYWxsYmFjaykgPT4ge1xuICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IGdldFdpZHRoKClcbiAgU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcilcbiAgICAuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGlmIChlbGVtZW50ICE9PSBkb2N1bWVudC5ib2R5ICYmIHdpbmRvdy5pbm5lcldpZHRoID4gZWxlbWVudC5jbGllbnRXaWR0aCArIHNjcm9sbGJhcldpZHRoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBhY3R1YWxWYWx1ZSA9IGVsZW1lbnQuc3R5bGVbc3R5bGVQcm9wXVxuICAgICAgY29uc3QgY2FsY3VsYXRlZFZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbc3R5bGVQcm9wXVxuICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3AsIGFjdHVhbFZhbHVlKVxuICAgICAgZWxlbWVudC5zdHlsZVtzdHlsZVByb3BdID0gYCR7Y2FsbGJhY2soTnVtYmVyLnBhcnNlRmxvYXQoY2FsY3VsYXRlZFZhbHVlKSl9cHhgXG4gICAgfSlcbn1cblxuY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gIF9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKCdib2R5JywgJ292ZXJmbG93JylcbiAgX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoJ2JvZHknLCAncGFkZGluZ1JpZ2h0JylcbiAgX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgJ3BhZGRpbmdSaWdodCcpXG4gIF9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX1NUSUNLWV9DT05URU5ULCAnbWFyZ2luUmlnaHQnKVxufVxuXG5jb25zdCBfcmVzZXRFbGVtZW50QXR0cmlidXRlcyA9IChzZWxlY3Rvciwgc3R5bGVQcm9wKSA9PiB7XG4gIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcClcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShzdHlsZVByb3ApXG4gICAgfSBlbHNlIHtcbiAgICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wKVxuICAgICAgZWxlbWVudC5zdHlsZVtzdHlsZVByb3BdID0gdmFsdWVcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGlzQm9keU92ZXJmbG93aW5nID0gKCkgPT4ge1xuICByZXR1cm4gZ2V0V2lkdGgoKSA+IDBcbn1cblxuZXhwb3J0IHtcbiAgZ2V0V2lkdGgsXG4gIGhpZGUsXG4gIGlzQm9keU92ZXJmbG93aW5nLFxuICByZXNldFxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiB1dGlsL2JhY2tkcm9wLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IHsgZW11bGF0ZVRyYW5zaXRpb25FbmQsIGV4ZWN1dGUsIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50LCByZWZsb3csIHR5cGVDaGVja0NvbmZpZyB9IGZyb20gJy4vaW5kZXgnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGlzVmlzaWJsZTogdHJ1ZSwgLy8gaWYgZmFsc2UsIHdlIHVzZSB0aGUgYmFja2Ryb3AgaGVscGVyIHdpdGhvdXQgYWRkaW5nIGFueSBlbGVtZW50IHRvIHRoZSBkb21cbiAgaXNBbmltYXRlZDogZmFsc2UsXG4gIHJvb3RFbGVtZW50OiBkb2N1bWVudC5ib2R5LCAvLyBnaXZlIHRoZSBjaG9pY2UgdG8gcGxhY2UgYmFja2Ryb3AgdW5kZXIgZGlmZmVyZW50IGVsZW1lbnRzXG4gIGNsaWNrQ2FsbGJhY2s6IG51bGxcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGlzVmlzaWJsZTogJ2Jvb2xlYW4nLFxuICBpc0FuaW1hdGVkOiAnYm9vbGVhbicsXG4gIHJvb3RFbGVtZW50OiAnZWxlbWVudCcsXG4gIGNsaWNrQ2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknXG59XG5jb25zdCBOQU1FID0gJ2JhY2tkcm9wJ1xuY29uc3QgQ0xBU1NfTkFNRV9CQUNLRFJPUCA9ICdtb2RhbC1iYWNrZHJvcCdcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5cbmNvbnN0IEVWRU5UX01PVVNFRE9XTiA9IGBtb3VzZWRvd24uYnMuJHtOQU1FfWBcblxuY2xhc3MgQmFja2Ryb3Age1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2lzQXBwZW5kZWQgPSBmYWxzZVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gIH1cblxuICBzaG93KGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuaXNWaXNpYmxlKSB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fYXBwZW5kKClcblxuICAgIGlmICh0aGlzLl9jb25maWcuaXNBbmltYXRlZCkge1xuICAgICAgcmVmbG93KHRoaXMuX2dldEVsZW1lbnQoKSlcbiAgICB9XG5cbiAgICB0aGlzLl9nZXRFbGVtZW50KCkuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICB0aGlzLl9lbXVsYXRlQW5pbWF0aW9uKCgpID0+IHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgfSlcbiAgfVxuXG4gIGhpZGUoY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5pc1Zpc2libGUpIHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9nZXRFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICB0aGlzLl9lbXVsYXRlQW5pbWF0aW9uKCgpID0+IHtcbiAgICAgIHRoaXMuZGlzcG9zZSgpXG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgIH0pXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldEVsZW1lbnQoKSB7XG4gICAgaWYgKCF0aGlzLl9lbGVtZW50KSB7XG4gICAgICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBiYWNrZHJvcC5jbGFzc05hbWUgPSBDTEFTU19OQU1FX0JBQ0tEUk9QXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpIHtcbiAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBiYWNrZHJvcFxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50XG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiB7fSlcbiAgICB9XG5cbiAgICBjb25maWcucm9vdEVsZW1lbnQgPSBjb25maWcucm9vdEVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keVxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9hcHBlbmQoKSB7XG4gICAgaWYgKHRoaXMuX2lzQXBwZW5kZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2NvbmZpZy5yb290RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9nZXRFbGVtZW50KCkpXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZ2V0RWxlbWVudCgpLCBFVkVOVF9NT1VTRURPV04sICgpID0+IHtcbiAgICAgIGV4ZWN1dGUodGhpcy5fY29uZmlnLmNsaWNrQ2FsbGJhY2spXG4gICAgfSlcblxuICAgIHRoaXMuX2lzQXBwZW5kZWQgPSB0cnVlXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGlmICghdGhpcy5faXNBcHBlbmRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRURPV04pXG5cbiAgICB0aGlzLl9nZXRFbGVtZW50KCkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLl9lbGVtZW50KVxuICAgIHRoaXMuX2lzQXBwZW5kZWQgPSBmYWxzZVxuICB9XG5cbiAgX2VtdWxhdGVBbmltYXRpb24oY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9nZXRFbGVtZW50KCkpXG4gICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9nZXRFbGVtZW50KCksICd0cmFuc2l0aW9uZW5kJywgKCkgPT4gZXhlY3V0ZShjYWxsYmFjaykpXG4gICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fZ2V0RWxlbWVudCgpLCBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZHJvcFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBtb2RhbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZW11bGF0ZVRyYW5zaXRpb25FbmQsXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50LFxuICBpc1JUTCxcbiAgaXNWaXNpYmxlLFxuICByZWZsb3csXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IHsgZ2V0V2lkdGggYXMgZ2V0U2Nyb2xsQmFyV2lkdGgsIGhpZGUgYXMgc2Nyb2xsQmFySGlkZSwgcmVzZXQgYXMgc2Nyb2xsQmFyUmVzZXQgfSBmcm9tICcuL3V0aWwvc2Nyb2xsYmFyJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcbmltcG9ydCBCYWNrZHJvcCBmcm9tICcuL3V0aWwvYmFja2Ryb3AnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnbW9kYWwnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5tb2RhbCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGJhY2tkcm9wOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgZm9jdXM6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGJhY2tkcm9wOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gIGZvY3VzOiAnYm9vbGVhbidcbn1cblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERV9QUkVWRU5URUQgPSBgaGlkZVByZXZlbnRlZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1JFU0laRSA9IGByZXNpemUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19ESVNNSVNTID0gYGNsaWNrLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RJU01JU1MgPSBga2V5ZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VVUF9ESVNNSVNTID0gYG1vdXNldXAuZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTID0gYG1vdXNlZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfT1BFTiA9ICdtb2RhbC1vcGVuJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfU1RBVElDID0gJ21vZGFsLXN0YXRpYydcblxuY29uc3QgU0VMRUNUT1JfRElBTE9HID0gJy5tb2RhbC1kaWFsb2cnXG5jb25zdCBTRUxFQ1RPUl9NT0RBTF9CT0RZID0gJy5tb2RhbC1ib2R5J1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwibW9kYWxcIl0nXG5jb25zdCBTRUxFQ1RPUl9EQVRBX0RJU01JU1MgPSAnW2RhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCJdJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudClcblxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fZGlhbG9nID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9ESUFMT0csIHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fYmFja2Ryb3AgPSB0aGlzLl9pbml0aWFsaXplQmFja0Ryb3AoKVxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNBbmltYXRlZCgpKSB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywge1xuICAgICAgcmVsYXRlZFRhcmdldFxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5faXNTaG93biB8fCBzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IHRydWVcblxuICAgIHNjcm9sbEJhckhpZGUoKVxuXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfT1BFTilcblxuICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG5cbiAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpXG4gICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MsIFNFTEVDVE9SX0RBVEFfRElTTUlTUywgZXZlbnQgPT4gdGhpcy5oaWRlKGV2ZW50KSlcblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9kaWFsb2csIEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTLCAoKSA9PiB7XG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFVVBfRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzLl9lbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5fc2hvd0JhY2tkcm9wKCgpID0+IHRoaXMuX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpKVxuICB9XG5cbiAgaGlkZShldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmICghdGhpcy5faXNTaG93biB8fCB0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIGNvbnN0IGlzQW5pbWF0ZWQgPSB0aGlzLl9pc0FuaW1hdGVkKClcblxuICAgIGlmIChpc0FuaW1hdGVkKSB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0RXNjYXBlRXZlbnQoKVxuICAgIHRoaXMuX3NldFJlc2l6ZUV2ZW50KClcblxuICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4pXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTElDS19ESVNNSVNTKVxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZGlhbG9nLCBFVkVOVF9NT1VTRURPV05fRElTTUlTUylcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4gdGhpcy5faGlkZU1vZGFsKCksIHRoaXMuX2VsZW1lbnQsIGlzQW5pbWF0ZWQpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIFt3aW5kb3csIHRoaXMuX2RpYWxvZ11cbiAgICAgIC5mb3JFYWNoKGh0bWxFbGVtZW50ID0+IEV2ZW50SGFuZGxlci5vZmYoaHRtbEVsZW1lbnQsIEVWRU5UX0tFWSkpXG5cbiAgICB0aGlzLl9iYWNrZHJvcC5kaXNwb3NlKClcbiAgICBzdXBlci5kaXNwb3NlKClcblxuICAgIC8qKlxuICAgICAqIGBkb2N1bWVudGAgaGFzIDIgZXZlbnRzIGBFVkVOVF9GT0NVU0lOYCBhbmQgYEVWRU5UX0NMSUNLX0RBVEFfQVBJYFxuICAgICAqIERvIG5vdCBtb3ZlIGBkb2N1bWVudGAgaW4gYGh0bWxFbGVtZW50c2AgYXJyYXlcbiAgICAgKiBJdCB3aWxsIHJlbW92ZSBgRVZFTlRfQ0xJQ0tfREFUQV9BUElgIGV2ZW50IHRoYXQgc2hvdWxkIHJlbWFpblxuICAgICAqL1xuICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4pXG4gIH1cblxuICBoYW5kbGVVcGRhdGUoKSB7XG4gICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfaW5pdGlhbGl6ZUJhY2tEcm9wKCkge1xuICAgIHJldHVybiBuZXcgQmFja2Ryb3Aoe1xuICAgICAgaXNWaXNpYmxlOiBCb29sZWFuKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCksIC8vICdzdGF0aWMnIG9wdGlvbiB3aWxsIGJlIHRyYW5zbGF0ZWQgdG8gdHJ1ZSwgYW5kIGJvb2xlYW5zIHdpbGwga2VlcCB0aGVpciB2YWx1ZVxuICAgICAgaXNBbmltYXRlZDogdGhpcy5faXNBbmltYXRlZCgpXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpLFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSB7XG4gICAgY29uc3QgaXNBbmltYXRlZCA9IHRoaXMuX2lzQW5pbWF0ZWQoKVxuICAgIGNvbnN0IG1vZGFsQm9keSA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfTU9EQUxfQk9EWSwgdGhpcy5fZGlhbG9nKVxuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgfHwgdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgLy8gRG9uJ3QgbW92ZSBtb2RhbCdzIERPTSBwb3NpdGlvblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKVxuICAgIHRoaXMuX2VsZW1lbnQuc2Nyb2xsVG9wID0gMFxuXG4gICAgaWYgKG1vZGFsQm9keSkge1xuICAgICAgbW9kYWxCb2R5LnNjcm9sbFRvcCA9IDBcbiAgICB9XG5cbiAgICBpZiAoaXNBbmltYXRlZCkge1xuICAgICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcbiAgICAgIHRoaXMuX2VuZm9yY2VGb2N1cygpXG4gICAgfVxuXG4gICAgY29uc3QgdHJhbnNpdGlvbkNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayh0cmFuc2l0aW9uQ29tcGxldGUsIHRoaXMuX2RpYWxvZywgaXNBbmltYXRlZClcbiAgfVxuXG4gIF9lbmZvcmNlRm9jdXMoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTikgLy8gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBmb2N1cyBsb29wXG4gICAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOLCBldmVudCA9PiB7XG4gICAgICBpZiAoZG9jdW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAgIHRoaXMuX2VsZW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAgICF0aGlzLl9lbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIF9zZXRFc2NhcGVFdmVudCgpIHtcbiAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV05fRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkICYmIGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLl9jb25maWcua2V5Ym9hcmQgJiYgZXZlbnQua2V5ID09PSBFU0NBUEVfS0VZKSB7XG4gICAgICAgICAgdGhpcy5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTl9ESVNNSVNTKVxuICAgIH1cbiAgfVxuXG4gIF9zZXRSZXNpemVFdmVudCgpIHtcbiAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfUkVTSVpFLCAoKSA9PiB0aGlzLl9hZGp1c3REaWFsb2coKSlcbiAgICB9IGVsc2Uge1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZih3aW5kb3csIEVWRU5UX1JFU0laRSlcbiAgICB9XG4gIH1cblxuICBfaGlkZU1vZGFsKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnKVxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyb2xlJylcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgIHRoaXMuX2JhY2tkcm9wLmhpZGUoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfT1BFTilcbiAgICAgIHRoaXMuX3Jlc2V0QWRqdXN0bWVudHMoKVxuICAgICAgc2Nyb2xsQmFyUmVzZXQoKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH0pXG4gIH1cblxuICBfc2hvd0JhY2tkcm9wKGNhbGxiYWNrKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrKSB7XG4gICAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLl9iYWNrZHJvcC5zaG93KGNhbGxiYWNrKVxuICB9XG5cbiAgX2lzQW5pbWF0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSlcbiAgfVxuXG4gIF90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKCkge1xuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREVfUFJFVkVOVEVEKVxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID0gdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cbiAgICBpZiAoIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJ1xuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NUQVRJQylcbiAgICBjb25zdCBtb2RhbFRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2RpYWxvZylcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsICd0cmFuc2l0aW9uZW5kJylcbiAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsICd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU1RBVElDKVxuICAgICAgaWYgKCFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCAndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICcnXG4gICAgICAgIH0pXG4gICAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQsIG1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgfVxuICAgIH0pXG4gICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudCwgbW9kYWxUcmFuc2l0aW9uRHVyYXRpb24pXG4gICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHRoZSBmb2xsb3dpbmcgbWV0aG9kcyBhcmUgdXNlZCB0byBoYW5kbGUgb3ZlcmZsb3dpbmcgbW9kYWxzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBfYWRqdXN0RGlhbG9nKCkge1xuICAgIGNvbnN0IGlzTW9kYWxPdmVyZmxvd2luZyA9IHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gZ2V0U2Nyb2xsQmFyV2lkdGgoKVxuICAgIGNvbnN0IGlzQm9keU92ZXJmbG93aW5nID0gc2Nyb2xsYmFyV2lkdGggPiAwXG5cbiAgICBpZiAoKCFpc0JvZHlPdmVyZmxvd2luZyAmJiBpc01vZGFsT3ZlcmZsb3dpbmcgJiYgIWlzUlRMKCkpIHx8IChpc0JvZHlPdmVyZmxvd2luZyAmJiAhaXNNb2RhbE92ZXJmbG93aW5nICYmIGlzUlRMKCkpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gYCR7c2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgfVxuXG4gICAgaWYgKChpc0JvZHlPdmVyZmxvd2luZyAmJiAhaXNNb2RhbE92ZXJmbG93aW5nICYmICFpc1JUTCgpKSB8fCAoIWlzQm9keU92ZXJmbG93aW5nICYmIGlzTW9kYWxPdmVyZmxvd2luZyAmJiBpc1JUTCgpKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHtzY3JvbGxiYXJXaWR0aH1weGBcbiAgICB9XG4gIH1cblxuICBfcmVzZXRBZGp1c3RtZW50cygpIHtcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gJydcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZywgcmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IE1vZGFsLmdldEluc3RhbmNlKHRoaXMpIHx8IG5ldyBNb2RhbCh0aGlzLCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IHt9KVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXShyZWxhdGVkVGFyZ2V0KVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcylcblxuICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX1NIT1csIHNob3dFdmVudCA9PiB7XG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAvLyBvbmx5IHJlZ2lzdGVyIGZvY3VzIHJlc3RvcmVyIGlmIG1vZGFsIHdpbGwgYWN0dWFsbHkgZ2V0IHNob3duXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub25lKHRhcmdldCwgRVZFTlRfSElEREVOLCAoKSA9PiB7XG4gICAgICBpZiAoaXNWaXNpYmxlKHRoaXMpKSB7XG4gICAgICAgIHRoaXMuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3QgZGF0YSA9IE1vZGFsLmdldEluc3RhbmNlKHRhcmdldCkgfHwgbmV3IE1vZGFsKHRhcmdldClcblxuICBkYXRhLnRvZ2dsZSh0aGlzKVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLk1vZGFsIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKE1vZGFsKVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBvZmZjYW52YXMuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgaXNEaXNhYmxlZCxcbiAgaXNWaXNpYmxlLFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IHsgaGlkZSBhcyBzY3JvbGxCYXJIaWRlLCByZXNldCBhcyBzY3JvbGxCYXJSZXNldCB9IGZyb20gJy4vdXRpbC9zY3JvbGxiYXInXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnLi91dGlsL2JhY2tkcm9wJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ29mZmNhbnZhcydcbmNvbnN0IERBVEFfS0VZID0gJ2JzLm9mZmNhbnZhcydcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGJhY2tkcm9wOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgc2Nyb2xsOiBmYWxzZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYmFja2Ryb3A6ICdib29sZWFuJyxcbiAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgc2Nyb2xsOiAnYm9vbGVhbidcbn1cblxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBPUEVOX1NFTEVDVE9SID0gJy5vZmZjYW52YXMuc2hvdydcblxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRk9DVVNJTiA9IGBmb2N1c2luJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19ESVNNSVNTID0gYGNsaWNrLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RJU01JU1MgPSBga2V5ZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX0RJU01JU1MgPSAnW2RhdGEtYnMtZGlzbWlzcz1cIm9mZmNhbnZhc1wiXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cIm9mZmNhbnZhc1wiXSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIE9mZmNhbnZhcyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9iYWNrZHJvcCA9IHRoaXMuX2luaXRpYWxpemVCYWNrRHJvcCgpXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XLCB7IHJlbGF0ZWRUYXJnZXQgfSlcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IHRydWVcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcblxuICAgIHRoaXMuX2JhY2tkcm9wLnNob3coKVxuXG4gICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsKSB7XG4gICAgICBzY3JvbGxCYXJIaWRlKClcbiAgICAgIHRoaXMuX2VuZm9yY2VGb2N1c09uRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgIGNvbnN0IGNvbXBsZXRlQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwgeyByZWxhdGVkVGFyZ2V0IH0pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxCYWNrLCB0aGlzLl9lbGVtZW50LCB0cnVlKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2hvd24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4pXG4gICAgdGhpcy5fZWxlbWVudC5ibHVyKClcbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2JhY2tkcm9wLmhpZGUoKVxuXG4gICAgY29uc3QgY29tcGxldGVDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuXG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwpIHtcbiAgICAgICAgc2Nyb2xsQmFyUmVzZXQoKVxuICAgICAgfVxuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxiYWNrLCB0aGlzLl9lbGVtZW50LCB0cnVlKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9iYWNrZHJvcC5kaXNwb3NlKClcbiAgICBzdXBlci5kaXNwb3NlKClcbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpLFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDoge30pXG4gICAgfVxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9pbml0aWFsaXplQmFja0Ryb3AoKSB7XG4gICAgcmV0dXJuIG5ldyBCYWNrZHJvcCh7XG4gICAgICBpc1Zpc2libGU6IHRoaXMuX2NvbmZpZy5iYWNrZHJvcCxcbiAgICAgIGlzQW5pbWF0ZWQ6IHRydWUsXG4gICAgICByb290RWxlbWVudDogdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgY2xpY2tDYWxsYmFjazogKCkgPT4gdGhpcy5oaWRlKClcbiAgICB9KVxuICB9XG5cbiAgX2VuZm9yY2VGb2N1c09uRWxlbWVudChlbGVtZW50KSB7XG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTikgLy8gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBmb2N1cyBsb29wXG4gICAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOLCBldmVudCA9PiB7XG4gICAgICBpZiAoZG9jdW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgICBlbGVtZW50ICE9PSBldmVudC50YXJnZXQgJiZcbiAgICAgICAgIWVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICBlbGVtZW50LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICAgIGVsZW1lbnQuZm9jdXMoKVxuICB9XG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTElDS19ESVNNSVNTLCBTRUxFQ1RPUl9EQVRBX0RJU01JU1MsICgpID0+IHRoaXMuaGlkZSgpKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV05fRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCAmJiBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVkpIHtcbiAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBEYXRhLmdldCh0aGlzLCBEQVRBX0tFWSkgfHwgbmV3IE9mZmNhbnZhcyh0aGlzLCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IHt9KVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcylcblxuICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4sICgpID0+IHtcbiAgICAvLyBmb2N1cyBvbiB0cmlnZ2VyIHdoZW4gaXQgaXMgY2xvc2VkXG4gICAgaWYgKGlzVmlzaWJsZSh0aGlzKSkge1xuICAgICAgdGhpcy5mb2N1cygpXG4gICAgfVxuICB9KVxuXG4gIC8vIGF2b2lkIGNvbmZsaWN0IHdoZW4gY2xpY2tpbmcgYSB0b2dnbGVyIG9mIGFuIG9mZmNhbnZhcywgd2hpbGUgYW5vdGhlciBpcyBvcGVuXG4gIGNvbnN0IGFsbFJlYWR5T3BlbiA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoT1BFTl9TRUxFQ1RPUilcbiAgaWYgKGFsbFJlYWR5T3BlbiAmJiBhbGxSZWFkeU9wZW4gIT09IHRhcmdldCkge1xuICAgIE9mZmNhbnZhcy5nZXRJbnN0YW5jZShhbGxSZWFkeU9wZW4pLmhpZGUoKVxuICB9XG5cbiAgY29uc3QgZGF0YSA9IERhdGEuZ2V0KHRhcmdldCwgREFUQV9LRVkpIHx8IG5ldyBPZmZjYW52YXModGFyZ2V0KVxuXG4gIGRhdGEudG9nZ2xlKHRoaXMpXG59KVxuXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIFNlbGVjdG9yRW5naW5lLmZpbmQoT1BFTl9TRUxFQ1RPUikuZm9yRWFjaChlbCA9PiAoRGF0YS5nZXQoZWwsIERBVEFfS0VZKSB8fCBuZXcgT2ZmY2FudmFzKGVsKSkuc2hvdygpKVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKE9mZmNhbnZhcylcblxuZXhwb3J0IGRlZmF1bHQgT2ZmY2FudmFzXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IHV0aWwvc2FuaXRpemVyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgdXJpQXR0cnMgPSBuZXcgU2V0KFtcbiAgJ2JhY2tncm91bmQnLFxuICAnY2l0ZScsXG4gICdocmVmJyxcbiAgJ2l0ZW10eXBlJyxcbiAgJ2xvbmdkZXNjJyxcbiAgJ3Bvc3RlcicsXG4gICdzcmMnLFxuICAneGxpbms6aHJlZidcbl0pXG5cbmNvbnN0IEFSSUFfQVRUUklCVVRFX1BBVFRFUk4gPSAvXmFyaWEtW1xcdy1dKiQvaVxuXG4vKipcbiAqIEEgcGF0dGVybiB0aGF0IHJlY29nbml6ZXMgYSBjb21tb25seSB1c2VmdWwgc3Vic2V0IG9mIFVSTHMgdGhhdCBhcmUgc2FmZS5cbiAqXG4gKiBTaG91dG91dCB0byBBbmd1bGFyIDcgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzcuMi40L3BhY2thZ2VzL2NvcmUvc3JjL3Nhbml0aXphdGlvbi91cmxfc2FuaXRpemVyLnRzXG4gKi9cbmNvbnN0IFNBRkVfVVJMX1BBVFRFUk4gPSAvXig/Oig/Omh0dHBzP3xtYWlsdG98ZnRwfHRlbHxmaWxlKTp8W14jJi86P10qKD86WyMvP118JCkpL2lcblxuLyoqXG4gKiBBIHBhdHRlcm4gdGhhdCBtYXRjaGVzIHNhZmUgZGF0YSBVUkxzLiBPbmx5IG1hdGNoZXMgaW1hZ2UsIHZpZGVvIGFuZCBhdWRpbyB0eXBlcy5cbiAqXG4gKiBTaG91dG91dCB0byBBbmd1bGFyIDcgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzcuMi40L3BhY2thZ2VzL2NvcmUvc3JjL3Nhbml0aXphdGlvbi91cmxfc2FuaXRpemVyLnRzXG4gKi9cbmNvbnN0IERBVEFfVVJMX1BBVFRFUk4gPSAvXmRhdGE6KD86aW1hZ2VcXC8oPzpibXB8Z2lmfGpwZWd8anBnfHBuZ3x0aWZmfHdlYnApfHZpZGVvXFwvKD86bXBlZ3xtcDR8b2dnfHdlYm0pfGF1ZGlvXFwvKD86bXAzfG9nYXxvZ2d8b3B1cykpO2Jhc2U2NCxbXFxkKy9hLXpdKz0qJC9pXG5cbmNvbnN0IGFsbG93ZWRBdHRyaWJ1dGUgPSAoYXR0ciwgYWxsb3dlZEF0dHJpYnV0ZUxpc3QpID0+IHtcbiAgY29uc3QgYXR0ck5hbWUgPSBhdHRyLm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcblxuICBpZiAoYWxsb3dlZEF0dHJpYnV0ZUxpc3QuaW5jbHVkZXMoYXR0ck5hbWUpKSB7XG4gICAgaWYgKHVyaUF0dHJzLmhhcyhhdHRyTmFtZSkpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKFNBRkVfVVJMX1BBVFRFUk4udGVzdChhdHRyLm5vZGVWYWx1ZSkgfHwgREFUQV9VUkxfUEFUVEVSTi50ZXN0KGF0dHIubm9kZVZhbHVlKSlcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgY29uc3QgcmVnRXhwID0gYWxsb3dlZEF0dHJpYnV0ZUxpc3QuZmlsdGVyKGF0dHJSZWdleCA9PiBhdHRyUmVnZXggaW5zdGFuY2VvZiBSZWdFeHApXG5cbiAgLy8gQ2hlY2sgaWYgYSByZWd1bGFyIGV4cHJlc3Npb24gdmFsaWRhdGVzIHRoZSBhdHRyaWJ1dGUuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZWdFeHAubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAocmVnRXhwW2ldLnRlc3QoYXR0ck5hbWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdEFsbG93bGlzdCA9IHtcbiAgLy8gR2xvYmFsIGF0dHJpYnV0ZXMgYWxsb3dlZCBvbiBhbnkgc3VwcGxpZWQgZWxlbWVudCBiZWxvdy5cbiAgJyonOiBbJ2NsYXNzJywgJ2RpcicsICdpZCcsICdsYW5nJywgJ3JvbGUnLCBBUklBX0FUVFJJQlVURV9QQVRURVJOXSxcbiAgYTogWyd0YXJnZXQnLCAnaHJlZicsICd0aXRsZScsICdyZWwnXSxcbiAgYXJlYTogW10sXG4gIGI6IFtdLFxuICBicjogW10sXG4gIGNvbDogW10sXG4gIGNvZGU6IFtdLFxuICBkaXY6IFtdLFxuICBlbTogW10sXG4gIGhyOiBbXSxcbiAgaDE6IFtdLFxuICBoMjogW10sXG4gIGgzOiBbXSxcbiAgaDQ6IFtdLFxuICBoNTogW10sXG4gIGg2OiBbXSxcbiAgaTogW10sXG4gIGltZzogWydzcmMnLCAnc3Jjc2V0JywgJ2FsdCcsICd0aXRsZScsICd3aWR0aCcsICdoZWlnaHQnXSxcbiAgbGk6IFtdLFxuICBvbDogW10sXG4gIHA6IFtdLFxuICBwcmU6IFtdLFxuICBzOiBbXSxcbiAgc21hbGw6IFtdLFxuICBzcGFuOiBbXSxcbiAgc3ViOiBbXSxcbiAgc3VwOiBbXSxcbiAgc3Ryb25nOiBbXSxcbiAgdTogW10sXG4gIHVsOiBbXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVIdG1sKHVuc2FmZUh0bWwsIGFsbG93TGlzdCwgc2FuaXRpemVGbikge1xuICBpZiAoIXVuc2FmZUh0bWwubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHVuc2FmZUh0bWxcbiAgfVxuXG4gIGlmIChzYW5pdGl6ZUZuICYmIHR5cGVvZiBzYW5pdGl6ZUZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHNhbml0aXplRm4odW5zYWZlSHRtbClcbiAgfVxuXG4gIGNvbnN0IGRvbVBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKClcbiAgY29uc3QgY3JlYXRlZERvY3VtZW50ID0gZG9tUGFyc2VyLnBhcnNlRnJvbVN0cmluZyh1bnNhZmVIdG1sLCAndGV4dC9odG1sJylcbiAgY29uc3QgYWxsb3dsaXN0S2V5cyA9IE9iamVjdC5rZXlzKGFsbG93TGlzdClcbiAgY29uc3QgZWxlbWVudHMgPSBbXS5jb25jYXQoLi4uY3JlYXRlZERvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnKicpKVxuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGVsID0gZWxlbWVudHNbaV1cbiAgICBjb25zdCBlbE5hbWUgPSBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAoIWFsbG93bGlzdEtleXMuaW5jbHVkZXMoZWxOYW1lKSkge1xuICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbClcblxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBjb25zdCBhdHRyaWJ1dGVMaXN0ID0gW10uY29uY2F0KC4uLmVsLmF0dHJpYnV0ZXMpXG4gICAgY29uc3QgYWxsb3dlZEF0dHJpYnV0ZXMgPSBbXS5jb25jYXQoYWxsb3dMaXN0WycqJ10gfHwgW10sIGFsbG93TGlzdFtlbE5hbWVdIHx8IFtdKVxuXG4gICAgYXR0cmlidXRlTGlzdC5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgaWYgKCFhbGxvd2VkQXR0cmlidXRlKGF0dHIsIGFsbG93ZWRBdHRyaWJ1dGVzKSkge1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoYXR0ci5ub2RlTmFtZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZWREb2N1bWVudC5ib2R5LmlubmVySFRNTFxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiB0b29sdGlwLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICogYXMgUG9wcGVyIGZyb20gJ0Bwb3BwZXJqcy9jb3JlJ1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGZpbmRTaGFkb3dSb290LFxuICBnZXRFbGVtZW50LFxuICBnZXRVSUQsXG4gIGlzRWxlbWVudCxcbiAgaXNSVEwsXG4gIG5vb3AsXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQge1xuICBEZWZhdWx0QWxsb3dsaXN0LFxuICBzYW5pdGl6ZUh0bWxcbn0gZnJvbSAnLi91dGlsL3Nhbml0aXplcidcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0b29sdGlwJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMudG9vbHRpcCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBDTEFTU19QUkVGSVggPSAnYnMtdG9vbHRpcCdcbmNvbnN0IEJTQ0xTX1BSRUZJWF9SRUdFWCA9IG5ldyBSZWdFeHAoYChefFxcXFxzKSR7Q0xBU1NfUFJFRklYfVxcXFxTK2AsICdnJylcbmNvbnN0IERJU0FMTE9XRURfQVRUUklCVVRFUyA9IG5ldyBTZXQoWydzYW5pdGl6ZScsICdhbGxvd0xpc3QnLCAnc2FuaXRpemVGbiddKVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYW5pbWF0aW9uOiAnYm9vbGVhbicsXG4gIHRlbXBsYXRlOiAnc3RyaW5nJyxcbiAgdGl0bGU6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJyxcbiAgdHJpZ2dlcjogJ3N0cmluZycsXG4gIGRlbGF5OiAnKG51bWJlcnxvYmplY3QpJyxcbiAgaHRtbDogJ2Jvb2xlYW4nLFxuICBzZWxlY3RvcjogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICBwbGFjZW1lbnQ6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gIG9mZnNldDogJyhhcnJheXxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgY29udGFpbmVyOiAnKHN0cmluZ3xlbGVtZW50fGJvb2xlYW4pJyxcbiAgZmFsbGJhY2tQbGFjZW1lbnRzOiAnYXJyYXknLFxuICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICBjdXN0b21DbGFzczogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgc2FuaXRpemU6ICdib29sZWFuJyxcbiAgc2FuaXRpemVGbjogJyhudWxsfGZ1bmN0aW9uKScsXG4gIGFsbG93TGlzdDogJ29iamVjdCcsXG4gIHBvcHBlckNvbmZpZzogJyhudWxsfG9iamVjdHxmdW5jdGlvbiknXG59XG5cbmNvbnN0IEF0dGFjaG1lbnRNYXAgPSB7XG4gIEFVVE86ICdhdXRvJyxcbiAgVE9QOiAndG9wJyxcbiAgUklHSFQ6IGlzUlRMKCkgPyAnbGVmdCcgOiAncmlnaHQnLFxuICBCT1RUT006ICdib3R0b20nLFxuICBMRUZUOiBpc1JUTCgpID8gJ3JpZ2h0JyA6ICdsZWZ0J1xufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbmltYXRpb246IHRydWUsXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPicgK1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+JyArXG4gICAgICAgICAgICAnPC9kaXY+JyxcbiAgdHJpZ2dlcjogJ2hvdmVyIGZvY3VzJyxcbiAgdGl0bGU6ICcnLFxuICBkZWxheTogMCxcbiAgaHRtbDogZmFsc2UsXG4gIHNlbGVjdG9yOiBmYWxzZSxcbiAgcGxhY2VtZW50OiAndG9wJyxcbiAgb2Zmc2V0OiBbMCwgMF0sXG4gIGNvbnRhaW5lcjogZmFsc2UsXG4gIGZhbGxiYWNrUGxhY2VtZW50czogWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXSxcbiAgYm91bmRhcnk6ICdjbGlwcGluZ1BhcmVudHMnLFxuICBjdXN0b21DbGFzczogJycsXG4gIHNhbml0aXplOiB0cnVlLFxuICBzYW5pdGl6ZUZuOiBudWxsLFxuICBhbGxvd0xpc3Q6IERlZmF1bHRBbGxvd2xpc3QsXG4gIHBvcHBlckNvbmZpZzogbnVsbFxufVxuXG5jb25zdCBFdmVudCA9IHtcbiAgSElERTogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU46IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICBTSE9XOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBJTlNFUlRFRDogYGluc2VydGVkJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0s6IGBjbGljayR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTSU46IGBmb2N1c2luJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNPVVQ6IGBmb2N1c291dCR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFRU5URVI6IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VMRUFWRTogYG1vdXNlbGVhdmUke0VWRU5UX0tFWX1gXG59XG5cbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9NT0RBTCA9ICdtb2RhbCdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG5jb25zdCBIT1ZFUl9TVEFURV9TSE9XID0gJ3Nob3cnXG5jb25zdCBIT1ZFUl9TVEFURV9PVVQgPSAnb3V0J1xuXG5jb25zdCBTRUxFQ1RPUl9UT09MVElQX0lOTkVSID0gJy50b29sdGlwLWlubmVyJ1xuXG5jb25zdCBUUklHR0VSX0hPVkVSID0gJ2hvdmVyJ1xuY29uc3QgVFJJR0dFUl9GT0NVUyA9ICdmb2N1cydcbmNvbnN0IFRSSUdHRVJfQ0xJQ0sgPSAnY2xpY2snXG5jb25zdCBUUklHR0VSX01BTlVBTCA9ICdtYW51YWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBUb29sdGlwIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyB0b29sdGlwcyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKScpXG4gICAgfVxuXG4gICAgc3VwZXIoZWxlbWVudClcblxuICAgIC8vIHByaXZhdGVcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlXG4gICAgdGhpcy5fdGltZW91dCA9IDBcbiAgICB0aGlzLl9ob3ZlclN0YXRlID0gJydcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyID0ge31cbiAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG5cbiAgICAvLyBQcm90ZWN0ZWRcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMudGlwID0gbnVsbFxuXG4gICAgdGhpcy5fc2V0TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgc3RhdGljIGdldCBFdmVudCgpIHtcbiAgICByZXR1cm4gRXZlbnRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZVxuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSBmYWxzZVxuICB9XG5cbiAgdG9nZ2xlRW5hYmxlZCgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSAhdGhpcy5faXNFbmFibGVkXG4gIH1cblxuICB0b2dnbGUoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KVxuXG4gICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyLmNsaWNrID0gIWNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2tcblxuICAgICAgaWYgKGNvbnRleHQuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICBjb250ZXh0Ll9lbnRlcihudWxsLCBjb250ZXh0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5fbGVhdmUobnVsbCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZ2V0VGlwRWxlbWVudCgpLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICAgIHRoaXMuX2xlYXZlKG51bGwsIHRoaXMpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbnRlcihudWxsLCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQuY2xvc2VzdChgLiR7Q0xBU1NfTkFNRV9NT0RBTH1gKSwgJ2hpZGUuYnMubW9kYWwnLCB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKVxuXG4gICAgaWYgKHRoaXMudGlwICYmIHRoaXMudGlwLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMudGlwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy50aXApXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHVzZSBzaG93IG9uIHZpc2libGUgZWxlbWVudHMnKVxuICAgIH1cblxuICAgIGlmICghKHRoaXMuaXNXaXRoQ29udGVudCgpICYmIHRoaXMuX2lzRW5hYmxlZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuU0hPVylcbiAgICBjb25zdCBzaGFkb3dSb290ID0gZmluZFNoYWRvd1Jvb3QodGhpcy5fZWxlbWVudClcbiAgICBjb25zdCBpc0luVGhlRG9tID0gc2hhZG93Um9vdCA9PT0gbnVsbCA/XG4gICAgICB0aGlzLl9lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKHRoaXMuX2VsZW1lbnQpIDpcbiAgICAgIHNoYWRvd1Jvb3QuY29udGFpbnModGhpcy5fZWxlbWVudClcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCAhaXNJblRoZURvbSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICBjb25zdCB0aXBJZCA9IGdldFVJRCh0aGlzLmNvbnN0cnVjdG9yLk5BTUUpXG5cbiAgICB0aXAuc2V0QXR0cmlidXRlKCdpZCcsIHRpcElkKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgdGlwSWQpXG5cbiAgICB0aGlzLnNldENvbnRlbnQoKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIHRpcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSlcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZW1lbnQgPSB0eXBlb2YgdGhpcy5fY29uZmlnLnBsYWNlbWVudCA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICB0aGlzLl9jb25maWcucGxhY2VtZW50LmNhbGwodGhpcywgdGlwLCB0aGlzLl9lbGVtZW50KSA6XG4gICAgICB0aGlzLl9jb25maWcucGxhY2VtZW50XG5cbiAgICBjb25zdCBhdHRhY2htZW50ID0gdGhpcy5fZ2V0QXR0YWNobWVudChwbGFjZW1lbnQpXG4gICAgdGhpcy5fYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpXG5cbiAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gdGhpcy5fY29uZmlnXG4gICAgRGF0YS5zZXQodGlwLCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKVxuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKHRoaXMudGlwKSkge1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpcClcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSU5TRVJURUQpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BvcHBlciA9IFBvcHBlci5jcmVhdGVQb3BwZXIodGhpcy5fZWxlbWVudCwgdGlwLCB0aGlzLl9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkpXG4gICAgfVxuXG4gICAgdGlwLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgY29uc3QgY3VzdG9tQ2xhc3MgPSB0eXBlb2YgdGhpcy5fY29uZmlnLmN1c3RvbUNsYXNzID09PSAnZnVuY3Rpb24nID8gdGhpcy5fY29uZmlnLmN1c3RvbUNsYXNzKCkgOiB0aGlzLl9jb25maWcuY3VzdG9tQ2xhc3NcbiAgICBpZiAoY3VzdG9tQ2xhc3MpIHtcbiAgICAgIHRpcC5jbGFzc0xpc3QuYWRkKC4uLmN1c3RvbUNsYXNzLnNwbGl0KCcgJykpXG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHByZXZIb3ZlclN0YXRlID0gdGhpcy5faG92ZXJTdGF0ZVxuXG4gICAgICB0aGlzLl9ob3ZlclN0YXRlID0gbnVsbFxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XTilcblxuICAgICAgaWYgKHByZXZIb3ZlclN0YXRlID09PSBIT1ZFUl9TVEFURV9PVVQpIHtcbiAgICAgICAgdGhpcy5fbGVhdmUobnVsbCwgdGhpcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpc0FuaW1hdGVkID0gdGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSlcbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLnRpcCwgaXNBbmltYXRlZClcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5faG92ZXJTdGF0ZSAhPT0gSE9WRVJfU1RBVEVfU0hPVyAmJiB0aXAucGFyZW50Tm9kZSkge1xuICAgICAgICB0aXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aXApXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NsZWFuVGlwQ2xhc3MoKVxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5ISURERU4pXG5cbiAgICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgICAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5ISURFKVxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKVxuICAgICAgICAuZm9yRWFjaChlbGVtZW50ID0+IEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApKVxuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9DTElDS10gPSBmYWxzZVxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9GT0NVU10gPSBmYWxzZVxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9IT1ZFUl0gPSBmYWxzZVxuXG4gICAgY29uc3QgaXNBbmltYXRlZCA9IHRoaXMudGlwLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy50aXAsIGlzQW5pbWF0ZWQpXG4gICAgdGhpcy5faG92ZXJTdGF0ZSA9ICcnXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJvdGVjdGVkXG5cbiAgaXNXaXRoQ29udGVudCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLmdldFRpdGxlKCkpXG4gIH1cblxuICBnZXRUaXBFbGVtZW50KCkge1xuICAgIGlmICh0aGlzLnRpcCkge1xuICAgICAgcmV0dXJuIHRoaXMudGlwXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLl9jb25maWcudGVtcGxhdGVcblxuICAgIHRoaXMudGlwID0gZWxlbWVudC5jaGlsZHJlblswXVxuICAgIHJldHVybiB0aGlzLnRpcFxuICB9XG5cbiAgc2V0Q29udGVudCgpIHtcbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9UT09MVElQX0lOTkVSLCB0aXApLCB0aGlzLmdldFRpdGxlKCkpXG4gICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9GQURFLCBDTEFTU19OQU1FX1NIT1cpXG4gIH1cblxuICBzZXRFbGVtZW50Q29udGVudChlbGVtZW50LCBjb250ZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc0VsZW1lbnQoY29udGVudCkpIHtcbiAgICAgIGNvbnRlbnQgPSBnZXRFbGVtZW50KGNvbnRlbnQpXG5cbiAgICAgIC8vIGNvbnRlbnQgaXMgYSBET00gbm9kZSBvciBhIGpRdWVyeVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5odG1sKSB7XG4gICAgICAgIGlmIChjb250ZW50LnBhcmVudE5vZGUgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudC50ZXh0Q29udGVudFxuICAgICAgfVxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmh0bWwpIHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuc2FuaXRpemUpIHtcbiAgICAgICAgY29udGVudCA9IHNhbml0aXplSHRtbChjb250ZW50LCB0aGlzLl9jb25maWcuYWxsb3dMaXN0LCB0aGlzLl9jb25maWcuc2FuaXRpemVGbilcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50XG4gICAgfVxuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgbGV0IHRpdGxlID0gdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnKVxuXG4gICAgaWYgKCF0aXRsZSkge1xuICAgICAgdGl0bGUgPSB0eXBlb2YgdGhpcy5fY29uZmlnLnRpdGxlID09PSAnZnVuY3Rpb24nID9cbiAgICAgICAgdGhpcy5fY29uZmlnLnRpdGxlLmNhbGwodGhpcy5fZWxlbWVudCkgOlxuICAgICAgICB0aGlzLl9jb25maWcudGl0bGVcbiAgICB9XG5cbiAgICByZXR1cm4gdGl0bGVcbiAgfVxuXG4gIHVwZGF0ZUF0dGFjaG1lbnQoYXR0YWNobWVudCkge1xuICAgIGlmIChhdHRhY2htZW50ID09PSAncmlnaHQnKSB7XG4gICAgICByZXR1cm4gJ2VuZCdcbiAgICB9XG5cbiAgICBpZiAoYXR0YWNobWVudCA9PT0gJ2xlZnQnKSB7XG4gICAgICByZXR1cm4gJ3N0YXJ0J1xuICAgIH1cblxuICAgIHJldHVybiBhdHRhY2htZW50XG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZXG4gICAgY29udGV4dCA9IGNvbnRleHQgfHwgRGF0YS5nZXQoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIGRhdGFLZXkpXG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihldmVudC5kZWxlZ2F0ZVRhcmdldCwgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKSlcbiAgICAgIERhdGEuc2V0KGV2ZW50LmRlbGVnYXRlVGFyZ2V0LCBkYXRhS2V5LCBjb250ZXh0KVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0XG4gIH1cblxuICBfZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHsgb2Zmc2V0IH0gPSB0aGlzLl9jb25maWdcblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG9mZnNldC5zcGxpdCgnLCcpLm1hcCh2YWwgPT4gTnVtYmVyLnBhcnNlSW50KHZhbCwgMTApKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gcG9wcGVyRGF0YSA9PiBvZmZzZXQocG9wcGVyRGF0YSwgdGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpIHtcbiAgICBjb25zdCBkZWZhdWx0QnNQb3BwZXJDb25maWcgPSB7XG4gICAgICBwbGFjZW1lbnQ6IGF0dGFjaG1lbnQsXG4gICAgICBtb2RpZmllcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdmbGlwJyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBmYWxsYmFja1BsYWNlbWVudHM6IHRoaXMuX2NvbmZpZy5mYWxsYmFja1BsYWNlbWVudHNcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgYm91bmRhcnk6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdhcnJvdycsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgZWxlbWVudDogYC4ke3RoaXMuY29uc3RydWN0b3IuTkFNRX0tYXJyb3dgXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ29uQ2hhbmdlJyxcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgIHBoYXNlOiAnYWZ0ZXJXcml0ZScsXG4gICAgICAgICAgZm46IGRhdGEgPT4gdGhpcy5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKGRhdGEpXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBvbkZpcnN0VXBkYXRlOiBkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEub3B0aW9ucy5wbGFjZW1lbnQgIT09IGRhdGEucGxhY2VtZW50KSB7XG4gICAgICAgICAgdGhpcy5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKGRhdGEpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZGVmYXVsdEJzUG9wcGVyQ29uZmlnLFxuICAgICAgLi4uKHR5cGVvZiB0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnID09PSAnZnVuY3Rpb24nID8gdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyhkZWZhdWx0QnNQb3BwZXJDb25maWcpIDogdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZylcbiAgICB9XG4gIH1cblxuICBfYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpIHtcbiAgICB0aGlzLmdldFRpcEVsZW1lbnQoKS5jbGFzc0xpc3QuYWRkKGAke0NMQVNTX1BSRUZJWH0tJHt0aGlzLnVwZGF0ZUF0dGFjaG1lbnQoYXR0YWNobWVudCl9YClcbiAgfVxuXG4gIF9nZXRBdHRhY2htZW50KHBsYWNlbWVudCkge1xuICAgIHJldHVybiBBdHRhY2htZW50TWFwW3BsYWNlbWVudC50b1VwcGVyQ2FzZSgpXVxuICB9XG5cbiAgX3NldExpc3RlbmVycygpIHtcbiAgICBjb25zdCB0cmlnZ2VycyA9IHRoaXMuX2NvbmZpZy50cmlnZ2VyLnNwbGl0KCcgJylcblxuICAgIHRyaWdnZXJzLmZvckVhY2godHJpZ2dlciA9PiB7XG4gICAgICBpZiAodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5DTElDSywgdGhpcy5fY29uZmlnLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLnRvZ2dsZShldmVudCkpXG4gICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgIT09IFRSSUdHRVJfTUFOVUFMKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50SW4gPSB0cmlnZ2VyID09PSBUUklHR0VSX0hPVkVSID9cbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFRU5URVIgOlxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuRk9DVVNJTlxuICAgICAgICBjb25zdCBldmVudE91dCA9IHRyaWdnZXIgPT09IFRSSUdHRVJfSE9WRVIgP1xuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuTU9VU0VMRUFWRSA6XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5GT0NVU09VVFxuXG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBldmVudEluLCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMuX2VudGVyKGV2ZW50KSlcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIGV2ZW50T3V0LCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMuX2xlYXZlKGV2ZW50KSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5faGlkZU1vZGFsSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQuY2xvc2VzdChgLiR7Q0xBU1NfTkFNRV9NT0RBTH1gKSwgJ2hpZGUuYnMubW9kYWwnLCB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5zZWxlY3Rvcikge1xuICAgICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgICAuLi50aGlzLl9jb25maWcsXG4gICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICBzZWxlY3RvcjogJydcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZml4VGl0bGUoKVxuICAgIH1cbiAgfVxuXG4gIF9maXhUaXRsZSgpIHtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgY29uc3Qgb3JpZ2luYWxUaXRsZVR5cGUgPSB0eXBlb2YgdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnKVxuXG4gICAgaWYgKHRpdGxlIHx8IG9yaWdpbmFsVGl0bGVUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnLCB0aXRsZSB8fCAnJylcbiAgICAgIGlmICh0aXRsZSAmJiAhdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSAmJiAhdGhpcy5fZWxlbWVudC50ZXh0Q29udGVudCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRpdGxlKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnJylcbiAgICB9XG4gIH1cblxuICBfZW50ZXIoZXZlbnQsIGNvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50LCBjb250ZXh0KVxuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW1xuICAgICAgICBldmVudC50eXBlID09PSAnZm9jdXNpbicgPyBUUklHR0VSX0ZPQ1VTIDogVFJJR0dFUl9IT1ZFUlxuICAgICAgXSA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dC5nZXRUaXBFbGVtZW50KCkuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykgfHwgY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSE9WRVJfU1RBVEVfU0hPVykge1xuICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhPVkVSX1NUQVRFX1NIT1dcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNsZWFyVGltZW91dChjb250ZXh0Ll90aW1lb3V0KVxuXG4gICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhPVkVSX1NUQVRFX1NIT1dcblxuICAgIGlmICghY29udGV4dC5fY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0Ll9jb25maWcuZGVsYXkuc2hvdykge1xuICAgICAgY29udGV4dC5zaG93KClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIT1ZFUl9TVEFURV9TSE9XKSB7XG4gICAgICAgIGNvbnRleHQuc2hvdygpXG4gICAgICB9XG4gICAgfSwgY29udGV4dC5fY29uZmlnLmRlbGF5LnNob3cpXG4gIH1cblxuICBfbGVhdmUoZXZlbnQsIGNvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50LCBjb250ZXh0KVxuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW1xuICAgICAgICBldmVudC50eXBlID09PSAnZm9jdXNvdXQnID8gVFJJR0dFUl9GT0NVUyA6IFRSSUdHRVJfSE9WRVJcbiAgICAgIF0gPSBjb250ZXh0Ll9lbGVtZW50LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpXG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpXG5cbiAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSE9WRVJfU1RBVEVfT1VUXG5cbiAgICBpZiAoIWNvbnRleHQuX2NvbmZpZy5kZWxheSB8fCAhY29udGV4dC5fY29uZmlnLmRlbGF5LmhpZGUpIHtcbiAgICAgIGNvbnRleHQuaGlkZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb250ZXh0Ll90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSE9WRVJfU1RBVEVfT1VUKSB7XG4gICAgICAgIGNvbnRleHQuaGlkZSgpXG4gICAgICB9XG4gICAgfSwgY29udGV4dC5fY29uZmlnLmRlbGF5LmhpZGUpXG4gIH1cblxuICBfaXNXaXRoQWN0aXZlVHJpZ2dlcigpIHtcbiAgICBmb3IgKGNvbnN0IHRyaWdnZXIgaW4gdGhpcy5fYWN0aXZlVHJpZ2dlcikge1xuICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRyaWdnZXJbdHJpZ2dlcl0pIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uc3QgZGF0YUF0dHJpYnV0ZXMgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KVxuXG4gICAgT2JqZWN0LmtleXMoZGF0YUF0dHJpYnV0ZXMpLmZvckVhY2goZGF0YUF0dHIgPT4ge1xuICAgICAgaWYgKERJU0FMTE9XRURfQVRUUklCVVRFUy5oYXMoZGF0YUF0dHIpKSB7XG4gICAgICAgIGRlbGV0ZSBkYXRhQXR0cmlidXRlc1tkYXRhQXR0cl1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uZmlnID0ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgLi4uZGF0YUF0dHJpYnV0ZXMsXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pXG4gICAgfVxuXG4gICAgY29uZmlnLmNvbnRhaW5lciA9IGNvbmZpZy5jb250YWluZXIgPT09IGZhbHNlID8gZG9jdW1lbnQuYm9keSA6IGdldEVsZW1lbnQoY29uZmlnLmNvbnRhaW5lcilcblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmRlbGF5ID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLmRlbGF5ID0ge1xuICAgICAgICBzaG93OiBjb25maWcuZGVsYXksXG4gICAgICAgIGhpZGU6IGNvbmZpZy5kZWxheVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnRpdGxlID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLnRpdGxlID0gY29uZmlnLnRpdGxlLnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5jb250ZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLmNvbnRlbnQgPSBjb25maWcuY29udGVudC50b1N0cmluZygpXG4gICAgfVxuXG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZSlcblxuICAgIGlmIChjb25maWcuc2FuaXRpemUpIHtcbiAgICAgIGNvbmZpZy50ZW1wbGF0ZSA9IHNhbml0aXplSHRtbChjb25maWcudGVtcGxhdGUsIGNvbmZpZy5hbGxvd0xpc3QsIGNvbmZpZy5zYW5pdGl6ZUZuKVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXREZWxlZ2F0ZUNvbmZpZygpIHtcbiAgICBjb25zdCBjb25maWcgPSB7fVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZykge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fY29uZmlnKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRba2V5XSAhPT0gdGhpcy5fY29uZmlnW2tleV0pIHtcbiAgICAgICAgICBjb25maWdba2V5XSA9IHRoaXMuX2NvbmZpZ1trZXldXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfY2xlYW5UaXBDbGFzcygpIHtcbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIGNvbnN0IHRhYkNsYXNzID0gdGlwLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5tYXRjaChCU0NMU19QUkVGSVhfUkVHRVgpXG4gICAgaWYgKHRhYkNsYXNzICE9PSBudWxsICYmIHRhYkNsYXNzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRhYkNsYXNzLm1hcCh0b2tlbiA9PiB0b2tlbi50cmltKCkpXG4gICAgICAgIC5mb3JFYWNoKHRDbGFzcyA9PiB0aXAuY2xhc3NMaXN0LnJlbW92ZSh0Q2xhc3MpKVxuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UocG9wcGVyRGF0YSkge1xuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHBvcHBlckRhdGFcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMudGlwID0gc3RhdGUuZWxlbWVudHMucG9wcGVyXG4gICAgdGhpcy5fY2xlYW5UaXBDbGFzcygpXG4gICAgdGhpcy5fYWRkQXR0YWNobWVudENsYXNzKHRoaXMuX2dldEF0dGFjaG1lbnQoc3RhdGUucGxhY2VtZW50KSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9IERhdGEuZ2V0KHRoaXMsIERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZ1xuXG4gICAgICBpZiAoIWRhdGEgJiYgL2Rpc3Bvc2V8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBUb29sdGlwKHRoaXMsIF9jb25maWcpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLlRvb2x0aXAgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oVG9vbHRpcClcblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBwb3BvdmVyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgZGVmaW5lSlF1ZXJ5UGx1Z2luIH0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAncG9wb3ZlcidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnBvcG92ZXInXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgQ0xBU1NfUFJFRklYID0gJ2JzLXBvcG92ZXInXG5jb25zdCBCU0NMU19QUkVGSVhfUkVHRVggPSBuZXcgUmVnRXhwKGAoXnxcXFxccykke0NMQVNTX1BSRUZJWH1cXFxcUytgLCAnZycpXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIC4uLlRvb2x0aXAuRGVmYXVsdCxcbiAgcGxhY2VtZW50OiAncmlnaHQnLFxuICBvZmZzZXQ6IFswLCA4XSxcbiAgdHJpZ2dlcjogJ2NsaWNrJyxcbiAgY29udGVudDogJycsXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInBvcG92ZXJcIiByb2xlPVwidG9vbHRpcFwiPicgK1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInBvcG92ZXItYXJyb3dcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAnPGgzIGNsYXNzPVwicG9wb3Zlci1oZWFkZXJcIj48L2gzPicgK1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInBvcG92ZXItYm9keVwiPjwvZGl2PicgK1xuICAgICAgICAgICAgJzwvZGl2Pidcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIC4uLlRvb2x0aXAuRGVmYXVsdFR5cGUsXG4gIGNvbnRlbnQ6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJ1xufVxuXG5jb25zdCBFdmVudCA9IHtcbiAgSElERTogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU46IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICBTSE9XOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBJTlNFUlRFRDogYGluc2VydGVkJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0s6IGBjbGljayR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTSU46IGBmb2N1c2luJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNPVVQ6IGBmb2N1c291dCR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFRU5URVI6IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VMRUFWRTogYG1vdXNlbGVhdmUke0VWRU5UX0tFWX1gXG59XG5cbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5cbmNvbnN0IFNFTEVDVE9SX1RJVExFID0gJy5wb3BvdmVyLWhlYWRlcidcbmNvbnN0IFNFTEVDVE9SX0NPTlRFTlQgPSAnLnBvcG92ZXItYm9keSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBUb29sdGlwIHtcbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICBzdGF0aWMgZ2V0IEV2ZW50KCkge1xuICAgIHJldHVybiBFdmVudFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIC8vIE92ZXJyaWRlc1xuXG4gIGlzV2l0aENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGl0bGUoKSB8fCB0aGlzLl9nZXRDb250ZW50KClcbiAgfVxuXG4gIHNldENvbnRlbnQoKSB7XG4gICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcblxuICAgIC8vIHdlIHVzZSBhcHBlbmQgZm9yIGh0bWwgb2JqZWN0cyB0byBtYWludGFpbiBqcyBldmVudHNcbiAgICB0aGlzLnNldEVsZW1lbnRDb250ZW50KFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfVElUTEUsIHRpcCksIHRoaXMuZ2V0VGl0bGUoKSlcbiAgICBsZXQgY29udGVudCA9IHRoaXMuX2dldENvbnRlbnQoKVxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29udGVudCA9IGNvbnRlbnQuY2FsbCh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9DT05URU5ULCB0aXApLCBjb250ZW50KVxuXG4gICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9GQURFLCBDTEFTU19OQU1FX1NIT1cpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2FkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KSB7XG4gICAgdGhpcy5nZXRUaXBFbGVtZW50KCkuY2xhc3NMaXN0LmFkZChgJHtDTEFTU19QUkVGSVh9LSR7dGhpcy51cGRhdGVBdHRhY2htZW50KGF0dGFjaG1lbnQpfWApXG4gIH1cblxuICBfZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtY29udGVudCcpIHx8IHRoaXMuX2NvbmZpZy5jb250ZW50XG4gIH1cblxuICBfY2xlYW5UaXBDbGFzcygpIHtcbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIGNvbnN0IHRhYkNsYXNzID0gdGlwLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5tYXRjaChCU0NMU19QUkVGSVhfUkVHRVgpXG4gICAgaWYgKHRhYkNsYXNzICE9PSBudWxsICYmIHRhYkNsYXNzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRhYkNsYXNzLm1hcCh0b2tlbiA9PiB0b2tlbi50cmltKCkpXG4gICAgICAgIC5mb3JFYWNoKHRDbGFzcyA9PiB0aXAuY2xhc3NMaXN0LnJlbW92ZSh0Q2xhc3MpKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9IERhdGEuZ2V0KHRoaXMsIERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbFxuXG4gICAgICBpZiAoIWRhdGEgJiYgL2Rpc3Bvc2V8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBQb3BvdmVyKHRoaXMsIF9jb25maWcpXG4gICAgICAgIERhdGEuc2V0KHRoaXMsIERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5Qb3BvdmVyIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFBvcG92ZXIpXG5cbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXJcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogc2Nyb2xsc3B5LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXRTZWxlY3RvckZyb21FbGVtZW50LFxuICBnZXRVSUQsXG4gIGlzRWxlbWVudCxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ3Njcm9sbHNweSdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnNjcm9sbHNweSdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBvZmZzZXQ6IDEwLFxuICBtZXRob2Q6ICdhdXRvJyxcbiAgdGFyZ2V0OiAnJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgb2Zmc2V0OiAnbnVtYmVyJyxcbiAgbWV0aG9kOiAnc3RyaW5nJyxcbiAgdGFyZ2V0OiAnKHN0cmluZ3xlbGVtZW50KSdcbn1cblxuY29uc3QgRVZFTlRfQUNUSVZBVEUgPSBgYWN0aXZhdGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TQ1JPTEwgPSBgc2Nyb2xsJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0RST1BET1dOX0lURU0gPSAnZHJvcGRvd24taXRlbSdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcblxuY29uc3QgU0VMRUNUT1JfREFUQV9TUFkgPSAnW2RhdGEtYnMtc3B5PVwic2Nyb2xsXCJdJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAgPSAnLm5hdiwgLmxpc3QtZ3JvdXAnXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElOS1MgPSAnLm5hdi1saW5rJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0lURU1TID0gJy5uYXYtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0xJU1RfSVRFTVMgPSAnLmxpc3QtZ3JvdXAtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOID0gJy5kcm9wZG93bidcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9ICcuZHJvcGRvd24tdG9nZ2xlJ1xuXG5jb25zdCBNRVRIT0RfT0ZGU0VUID0gJ29mZnNldCdcbmNvbnN0IE1FVEhPRF9QT1NJVElPTiA9ICdwb3NpdGlvbidcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFNjcm9sbFNweSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuICAgIHRoaXMuX3Njcm9sbEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnRhZ05hbWUgPT09ICdCT0RZJyA/IHdpbmRvdyA6IHRoaXMuX2VsZW1lbnRcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX3NlbGVjdG9yID0gYCR7dGhpcy5fY29uZmlnLnRhcmdldH0gJHtTRUxFQ1RPUl9OQVZfTElOS1N9LCAke3RoaXMuX2NvbmZpZy50YXJnZXR9ICR7U0VMRUNUT1JfTElTVF9JVEVNU30sICR7dGhpcy5fY29uZmlnLnRhcmdldH0gLiR7Q0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNfWBcbiAgICB0aGlzLl9vZmZzZXRzID0gW11cbiAgICB0aGlzLl90YXJnZXRzID0gW11cbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsXG4gICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ID0gMFxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX3Njcm9sbEVsZW1lbnQsIEVWRU5UX1NDUk9MTCwgKCkgPT4gdGhpcy5fcHJvY2VzcygpKVxuXG4gICAgdGhpcy5yZWZyZXNoKClcbiAgICB0aGlzLl9wcm9jZXNzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCBhdXRvTWV0aG9kID0gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gdGhpcy5fc2Nyb2xsRWxlbWVudC53aW5kb3cgP1xuICAgICAgTUVUSE9EX09GRlNFVCA6XG4gICAgICBNRVRIT0RfUE9TSVRJT05cblxuICAgIGNvbnN0IG9mZnNldE1ldGhvZCA9IHRoaXMuX2NvbmZpZy5tZXRob2QgPT09ICdhdXRvJyA/XG4gICAgICBhdXRvTWV0aG9kIDpcbiAgICAgIHRoaXMuX2NvbmZpZy5tZXRob2RcblxuICAgIGNvbnN0IG9mZnNldEJhc2UgPSBvZmZzZXRNZXRob2QgPT09IE1FVEhPRF9QT1NJVElPTiA/XG4gICAgICB0aGlzLl9nZXRTY3JvbGxUb3AoKSA6XG4gICAgICAwXG5cbiAgICB0aGlzLl9vZmZzZXRzID0gW11cbiAgICB0aGlzLl90YXJnZXRzID0gW11cbiAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSB0aGlzLl9nZXRTY3JvbGxIZWlnaHQoKVxuXG4gICAgY29uc3QgdGFyZ2V0cyA9IFNlbGVjdG9yRW5naW5lLmZpbmQodGhpcy5fc2VsZWN0b3IpXG5cbiAgICB0YXJnZXRzLm1hcChlbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldFNlbGVjdG9yID0gZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuICAgICAgY29uc3QgdGFyZ2V0ID0gdGFyZ2V0U2VsZWN0b3IgPyBTZWxlY3RvckVuZ2luZS5maW5kT25lKHRhcmdldFNlbGVjdG9yKSA6IG51bGxcblxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICBjb25zdCB0YXJnZXRCQ1IgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgaWYgKHRhcmdldEJDUi53aWR0aCB8fCB0YXJnZXRCQ1IuaGVpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIE1hbmlwdWxhdG9yW29mZnNldE1ldGhvZF0odGFyZ2V0KS50b3AgKyBvZmZzZXRCYXNlLFxuICAgICAgICAgICAgdGFyZ2V0U2VsZWN0b3JcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9KVxuICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYVswXSAtIGJbMF0pXG4gICAgICAuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgdGhpcy5fb2Zmc2V0cy5wdXNoKGl0ZW1bMF0pXG4gICAgICAgIHRoaXMuX3RhcmdldHMucHVzaChpdGVtWzFdKVxuICAgICAgfSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9zY3JvbGxFbGVtZW50LCBFVkVOVF9LRVkpXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCksXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGFyZ2V0ICE9PSAnc3RyaW5nJyAmJiBpc0VsZW1lbnQoY29uZmlnLnRhcmdldCkpIHtcbiAgICAgIGxldCB7IGlkIH0gPSBjb25maWcudGFyZ2V0XG4gICAgICBpZiAoIWlkKSB7XG4gICAgICAgIGlkID0gZ2V0VUlEKE5BTUUpXG4gICAgICAgIGNvbmZpZy50YXJnZXQuaWQgPSBpZFxuICAgICAgfVxuXG4gICAgICBjb25maWcudGFyZ2V0ID0gYCMke2lkfWBcbiAgICB9XG5cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXRTY3JvbGxUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHdpbmRvdyA/XG4gICAgICB0aGlzLl9zY3JvbGxFbGVtZW50LnBhZ2VZT2Zmc2V0IDpcbiAgICAgIHRoaXMuX3Njcm9sbEVsZW1lbnQuc2Nyb2xsVG9wXG4gIH1cblxuICBfZ2V0U2Nyb2xsSGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50LnNjcm9sbEhlaWdodCB8fCBNYXRoLm1heChcbiAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodFxuICAgIClcbiAgfVxuXG4gIF9nZXRPZmZzZXRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHdpbmRvdyA/XG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgOlxuICAgICAgdGhpcy5fc2Nyb2xsRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcbiAgfVxuXG4gIF9wcm9jZXNzKCkge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuX2dldFNjcm9sbFRvcCgpICsgdGhpcy5fY29uZmlnLm9mZnNldFxuICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IHRoaXMuX2dldFNjcm9sbEhlaWdodCgpXG4gICAgY29uc3QgbWF4U2Nyb2xsID0gdGhpcy5fY29uZmlnLm9mZnNldCArIHNjcm9sbEhlaWdodCAtIHRoaXMuX2dldE9mZnNldEhlaWdodCgpXG5cbiAgICBpZiAodGhpcy5fc2Nyb2xsSGVpZ2h0ICE9PSBzY3JvbGxIZWlnaHQpIHtcbiAgICAgIHRoaXMucmVmcmVzaCgpXG4gICAgfVxuXG4gICAgaWYgKHNjcm9sbFRvcCA+PSBtYXhTY3JvbGwpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuX3RhcmdldHNbdGhpcy5fdGFyZ2V0cy5sZW5ndGggLSAxXVxuXG4gICAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ICE9PSB0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZhdGUodGFyZ2V0KVxuICAgICAgfVxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ICYmIHNjcm9sbFRvcCA8IHRoaXMuX29mZnNldHNbMF0gJiYgdGhpcy5fb2Zmc2V0c1swXSA+IDApIHtcbiAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGxcbiAgICAgIHRoaXMuX2NsZWFyKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSB0aGlzLl9vZmZzZXRzLmxlbmd0aDsgaS0tOykge1xuICAgICAgY29uc3QgaXNBY3RpdmVUYXJnZXQgPSB0aGlzLl9hY3RpdmVUYXJnZXQgIT09IHRoaXMuX3RhcmdldHNbaV0gJiZcbiAgICAgICAgICBzY3JvbGxUb3AgPj0gdGhpcy5fb2Zmc2V0c1tpXSAmJlxuICAgICAgICAgICh0eXBlb2YgdGhpcy5fb2Zmc2V0c1tpICsgMV0gPT09ICd1bmRlZmluZWQnIHx8IHNjcm9sbFRvcCA8IHRoaXMuX29mZnNldHNbaSArIDFdKVxuXG4gICAgICBpZiAoaXNBY3RpdmVUYXJnZXQpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZhdGUodGhpcy5fdGFyZ2V0c1tpXSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfYWN0aXZhdGUodGFyZ2V0KSB7XG4gICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gdGFyZ2V0XG5cbiAgICB0aGlzLl9jbGVhcigpXG5cbiAgICBjb25zdCBxdWVyaWVzID0gdGhpcy5fc2VsZWN0b3Iuc3BsaXQoJywnKVxuICAgICAgLm1hcChzZWxlY3RvciA9PiBgJHtzZWxlY3Rvcn1bZGF0YS1icy10YXJnZXQ9XCIke3RhcmdldH1cIl0sJHtzZWxlY3Rvcn1baHJlZj1cIiR7dGFyZ2V0fVwiXWApXG5cbiAgICBjb25zdCBsaW5rID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShxdWVyaWVzLmpvaW4oJywnKSlcblxuICAgIGlmIChsaW5rLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BET1dOX0lURU0pKSB7XG4gICAgICBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSwgbGluay5jbG9zZXN0KFNFTEVDVE9SX0RST1BET1dOKSlcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2V0IHRyaWdnZXJlZCBsaW5rIGFzIGFjdGl2ZVxuICAgICAgbGluay5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICBTZWxlY3RvckVuZ2luZS5wYXJlbnRzKGxpbmssIFNFTEVDVE9SX05BVl9MSVNUX0dST1VQKVxuICAgICAgICAuZm9yRWFjaChsaXN0R3JvdXAgPT4ge1xuICAgICAgICAgIC8vIFNldCB0cmlnZ2VyZWQgbGlua3MgcGFyZW50cyBhcyBhY3RpdmVcbiAgICAgICAgICAvLyBXaXRoIGJvdGggPHVsPiBhbmQgPG5hdj4gbWFya3VwIGEgcGFyZW50IGlzIHRoZSBwcmV2aW91cyBzaWJsaW5nIG9mIGFueSBuYXYgYW5jZXN0b3JcbiAgICAgICAgICBTZWxlY3RvckVuZ2luZS5wcmV2KGxpc3RHcm91cCwgYCR7U0VMRUNUT1JfTkFWX0xJTktTfSwgJHtTRUxFQ1RPUl9MSVNUX0lURU1TfWApXG4gICAgICAgICAgICAuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSkpXG5cbiAgICAgICAgICAvLyBIYW5kbGUgc3BlY2lhbCBjYXNlIHdoZW4gLm5hdi1saW5rIGlzIGluc2lkZSAubmF2LWl0ZW1cbiAgICAgICAgICBTZWxlY3RvckVuZ2luZS5wcmV2KGxpc3RHcm91cCwgU0VMRUNUT1JfTkFWX0lURU1TKVxuICAgICAgICAgICAgLmZvckVhY2gobmF2SXRlbSA9PiB7XG4gICAgICAgICAgICAgIFNlbGVjdG9yRW5naW5lLmNoaWxkcmVuKG5hdkl0ZW0sIFNFTEVDVE9SX05BVl9MSU5LUylcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX3Njcm9sbEVsZW1lbnQsIEVWRU5UX0FDVElWQVRFLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0YXJnZXRcbiAgICB9KVxuICB9XG5cbiAgX2NsZWFyKCkge1xuICAgIFNlbGVjdG9yRW5naW5lLmZpbmQodGhpcy5fc2VsZWN0b3IpXG4gICAgICAuZmlsdGVyKG5vZGUgPT4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuICAgICAgLmZvckVhY2gobm9kZSA9PiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBTY3JvbGxTcHkuZ2V0SW5zdGFuY2UodGhpcykgfHwgbmV3IFNjcm9sbFNweSh0aGlzLCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IHt9KVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1NQWSlcbiAgICAuZm9yRWFjaChzcHkgPT4gbmV3IFNjcm9sbFNweShzcHkpKVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLlNjcm9sbFNweSB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihTY3JvbGxTcHkpXG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFNweVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiB0YWIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGlzRGlzYWJsZWQsXG4gIHJlZmxvd1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAndGFiJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMudGFiJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0RST1BET1dOX01FTlUgPSAnZHJvcGRvd24tbWVudSdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5cbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOID0gJy5kcm9wZG93bidcbmNvbnN0IFNFTEVDVE9SX05BVl9MSVNUX0dST1VQID0gJy5uYXYsIC5saXN0LWdyb3VwJ1xuY29uc3QgU0VMRUNUT1JfQUNUSVZFID0gJy5hY3RpdmUnXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkVfVUwgPSAnOnNjb3BlID4gbGkgPiAuYWN0aXZlJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwidGFiXCJdLCBbZGF0YS1icy10b2dnbGU9XCJwaWxsXCJdLCBbZGF0YS1icy10b2dnbGU9XCJsaXN0XCJdJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJy5kcm9wZG93bi10b2dnbGUnXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9BQ1RJVkVfQ0hJTEQgPSAnOnNjb3BlID4gLmRyb3Bkb3duLW1lbnUgLmFjdGl2ZSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFRhYiBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBzaG93KCkge1xuICAgIGlmICgodGhpcy5fZWxlbWVudC5wYXJlbnROb2RlICYmXG4gICAgICB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgcHJldmlvdXNcbiAgICBjb25zdCB0YXJnZXQgPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMuX2VsZW1lbnQpXG4gICAgY29uc3QgbGlzdEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVApXG5cbiAgICBpZiAobGlzdEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGl0ZW1TZWxlY3RvciA9IGxpc3RFbGVtZW50Lm5vZGVOYW1lID09PSAnVUwnIHx8IGxpc3RFbGVtZW50Lm5vZGVOYW1lID09PSAnT0wnID8gU0VMRUNUT1JfQUNUSVZFX1VMIDogU0VMRUNUT1JfQUNUSVZFXG4gICAgICBwcmV2aW91cyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoaXRlbVNlbGVjdG9yLCBsaXN0RWxlbWVudClcbiAgICAgIHByZXZpb3VzID0gcHJldmlvdXNbcHJldmlvdXMubGVuZ3RoIC0gMV1cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBwcmV2aW91cyA/XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihwcmV2aW91cywgRVZFTlRfSElERSwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgICB9KSA6XG4gICAgICBudWxsXG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2aW91c1xuICAgIH0pXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgfHwgKGhpZGVFdmVudCAhPT0gbnVsbCAmJiBoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2YXRlKHRoaXMuX2VsZW1lbnQsIGxpc3RFbGVtZW50KVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihwcmV2aW91cywgRVZFTlRfSElEREVOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH0pXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2aW91c1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICB0aGlzLl9hY3RpdmF0ZSh0YXJnZXQsIHRhcmdldC5wYXJlbnROb2RlLCBjb21wbGV0ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfYWN0aXZhdGUoZWxlbWVudCwgY29udGFpbmVyLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnRzID0gY29udGFpbmVyICYmIChjb250YWluZXIubm9kZU5hbWUgPT09ICdVTCcgfHwgY29udGFpbmVyLm5vZGVOYW1lID09PSAnT0wnKSA/XG4gICAgICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0FDVElWRV9VTCwgY29udGFpbmVyKSA6XG4gICAgICBTZWxlY3RvckVuZ2luZS5jaGlsZHJlbihjb250YWluZXIsIFNFTEVDVE9SX0FDVElWRSlcblxuICAgIGNvbnN0IGFjdGl2ZSA9IGFjdGl2ZUVsZW1lbnRzWzBdXG4gICAgY29uc3QgaXNUcmFuc2l0aW9uaW5nID0gY2FsbGJhY2sgJiYgKGFjdGl2ZSAmJiBhY3RpdmUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHRoaXMuX3RyYW5zaXRpb25Db21wbGV0ZShlbGVtZW50LCBhY3RpdmUsIGNhbGxiYWNrKVxuXG4gICAgaWYgKGFjdGl2ZSAmJiBpc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIGVsZW1lbnQsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICBfdHJhbnNpdGlvbkNvbXBsZXRlKGVsZW1lbnQsIGFjdGl2ZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBhY3RpdmUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgY29uc3QgZHJvcGRvd25DaGlsZCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfRFJPUERPV05fQUNUSVZFX0NISUxELCBhY3RpdmUucGFyZW50Tm9kZSlcblxuICAgICAgaWYgKGRyb3Bkb3duQ2hpbGQpIHtcbiAgICAgICAgZHJvcGRvd25DaGlsZC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlLmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAndGFiJykge1xuICAgICAgICBhY3RpdmUuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAndGFiJykge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKVxuICAgIH1cblxuICAgIHJlZmxvdyhlbGVtZW50KVxuXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgfVxuXG4gICAgbGV0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50Lm5vZGVOYW1lID09PSAnTEknKSB7XG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZVxuICAgIH1cblxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BET1dOX01FTlUpKSB7XG4gICAgICBjb25zdCBkcm9wZG93bkVsZW1lbnQgPSBlbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfRFJPUERPV04pXG5cbiAgICAgIGlmIChkcm9wZG93bkVsZW1lbnQpIHtcbiAgICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUsIGRyb3Bkb3duRWxlbWVudClcbiAgICAgICAgICAuZm9yRWFjaChkcm9wZG93biA9PiBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgIH1cblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gRGF0YS5nZXQodGhpcywgREFUQV9LRVkpIHx8IG5ldyBUYWIodGhpcylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBkYXRhID0gRGF0YS5nZXQodGhpcywgREFUQV9LRVkpIHx8IG5ldyBUYWIodGhpcylcbiAgZGF0YS5zaG93KClcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5UYWIgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oVGFiKVxuXG5leHBvcnQgZGVmYXVsdCBUYWJcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogdG9hc3QuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIHJlZmxvdyxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ3RvYXN0J1xuY29uc3QgREFUQV9LRVkgPSAnYnMudG9hc3QnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuXG5jb25zdCBFVkVOVF9DTElDS19ESVNNSVNTID0gYGNsaWNrLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRU9WRVIgPSBgbW91c2VvdmVyJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VPVVQgPSBgbW91c2VvdXQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9GT0NVU0lOID0gYGZvY3VzaW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9GT0NVU09VVCA9IGBmb2N1c291dCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX0hJREUgPSAnaGlkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XSU5HID0gJ3Nob3dpbmcnXG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhbmltYXRpb246ICdib29sZWFuJyxcbiAgYXV0b2hpZGU6ICdib29sZWFuJyxcbiAgZGVsYXk6ICdudW1iZXInXG59XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGFuaW1hdGlvbjogdHJ1ZSxcbiAgYXV0b2hpZGU6IHRydWUsXG4gIGRlbGF5OiA1MDAwXG59XG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfRElTTUlTUyA9ICdbZGF0YS1icy1kaXNtaXNzPVwidG9hc3RcIl0nXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBUb2FzdCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl90aW1lb3V0ID0gbnVsbFxuICAgIHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb24gPSBmYWxzZVxuICAgIHRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb24gPSBmYWxzZVxuICAgIHRoaXMuX3NldExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBzaG93KCkge1xuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1cpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2NsZWFyVGltZW91dCgpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSlcbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1dJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTilcblxuICAgICAgdGhpcy5fbWF5YmVTY2hlZHVsZUhpZGUoKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0hJREUpXG4gICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPV0lORylcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2NvbmZpZy5hbmltYXRpb24pXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcblxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9ISURFKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdGhpcy5fY29uZmlnLmFuaW1hdGlvbilcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy5fY2xlYXJUaW1lb3V0KClcblxuICAgIGlmICh0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIH1cblxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpLFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cblxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpXG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfbWF5YmVTY2hlZHVsZUhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuYXV0b2hpZGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9oYXNNb3VzZUludGVyYWN0aW9uIHx8IHRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfSwgdGhpcy5fY29uZmlnLmRlbGF5KVxuICB9XG5cbiAgX29uSW50ZXJhY3Rpb24oZXZlbnQsIGlzSW50ZXJhY3RpbmcpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgIGNhc2UgJ21vdXNlb3Zlcic6XG4gICAgICBjYXNlICdtb3VzZW91dCc6XG4gICAgICAgIHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb24gPSBpc0ludGVyYWN0aW5nXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdmb2N1c2luJzpcbiAgICAgIGNhc2UgJ2ZvY3Vzb3V0JzpcbiAgICAgICAgdGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbiA9IGlzSW50ZXJhY3RpbmdcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaWYgKGlzSW50ZXJhY3RpbmcpIHtcbiAgICAgIHRoaXMuX2NsZWFyVGltZW91dCgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBuZXh0RWxlbWVudCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXRcbiAgICBpZiAodGhpcy5fZWxlbWVudCA9PT0gbmV4dEVsZW1lbnQgfHwgdGhpcy5fZWxlbWVudC5jb250YWlucyhuZXh0RWxlbWVudCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX21heWJlU2NoZWR1bGVIaWRlKClcbiAgfVxuXG4gIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MsIFNFTEVDVE9SX0RBVEFfRElTTUlTUywgKCkgPT4gdGhpcy5oaWRlKCkpXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFT1ZFUiwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgdHJ1ZSkpXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFT1VULCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCBmYWxzZSkpXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0ZPQ1VTSU4sIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIHRydWUpKVxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9GT0NVU09VVCwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgZmFsc2UpKVxuICB9XG5cbiAgX2NsZWFyVGltZW91dCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcbiAgICB0aGlzLl90aW1lb3V0ID0gbnVsbFxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gRGF0YS5nZXQodGhpcywgREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFRvYXN0KHRoaXMsIF9jb25maWcpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5Ub2FzdCB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihUb2FzdClcblxuZXhwb3J0IGRlZmF1bHQgVG9hc3RcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogaW5kZXgudW1kLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEFsZXJ0IGZyb20gJy4vc3JjL2FsZXJ0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL3NyYy9idXR0b24nXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9zcmMvY2Fyb3VzZWwnXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnLi9zcmMvY29sbGFwc2UnXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9zcmMvZHJvcGRvd24nXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9zcmMvbW9kYWwnXG5pbXBvcnQgT2ZmY2FudmFzIGZyb20gJy4vc3JjL29mZmNhbnZhcydcbmltcG9ydCBQb3BvdmVyIGZyb20gJy4vc3JjL3BvcG92ZXInXG5pbXBvcnQgU2Nyb2xsU3B5IGZyb20gJy4vc3JjL3Njcm9sbHNweSdcbmltcG9ydCBUYWIgZnJvbSAnLi9zcmMvdGFiJ1xuaW1wb3J0IFRvYXN0IGZyb20gJy4vc3JjL3RvYXN0J1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi9zcmMvdG9vbHRpcCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBBbGVydCxcbiAgQnV0dG9uLFxuICBDYXJvdXNlbCxcbiAgQ29sbGFwc2UsXG4gIERyb3Bkb3duLFxuICBNb2RhbCxcbiAgT2ZmY2FudmFzLFxuICBQb3BvdmVyLFxuICBTY3JvbGxTcHksXG4gIFRhYixcbiAgVG9hc3QsXG4gIFRvb2x0aXBcbn1cbiIsImNvbnN0IGZvcm1Qcm9maWxlQ2hhbmdlUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuZm9ybV9fcHJvZmlsZS1jaGFuZ2UtcGFzc3dvcmRcIlxyXG4gICksXHJcbiAgY2hhbmdlUGFzc3dvcmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYW5nZV9fcGFzc3dvcmQtYnRuXCIpLFxyXG4gIHRvZ2dsZVNob3dQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hvd19fcGFzc3dvcmRcIiksXHJcbiAgcGFzc3dvcmRJbnB1dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGFuZ2VfX3Bhc3N3b3JkLWZpZWxkXCIpLFxyXG4gIHBhc3N3b3JkQ2hlY2tlckluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBhc3N3b3JkX19jaGVja2VyXCIpLFxyXG4gIGNpcmxjZUNoZWNrSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmktY2hlY2stY2lyY2xlLWZpbGxcIiksXHJcbiAgbG9hZGluZ1NwaW5uZXJDaGFuZ2VQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5jaGFuZ2VfX3Bhc3N3b3JkLWxvYWRpbmctc3Bpbm5lclwiXHJcbiAgKSxcclxuICBhbGVydEJveENoYW5nZVBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hbGVydF9fY2hhbmdlLXBhc3N3b3JkXCIpLFxyXG4gIGFsZXJ0TWVzc2FnZUNoYW5nZVBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLmNoYW5nZV9fcGFzc3dvcmQtYWxlcnQtbWVzc2FnZVwiXHJcbiAgKTtcclxuXHJcbi8qIFBhc3N3b3JkIGlucHV0IGZpZWxkIGluIGFycmF5IFxyXG4xLiBpbnB1dFswXSA9IEN1cnJlbnQgUGFzc3dvcmRcclxuMi4gaW5wdXRbMV0gPSBOZXcgUGFzc3dvcmRcclxuMy4gaW5wdXRbMl0gPSBDb25maXJtIE5ldyBQYXNzd29yZFxyXG4gKi9cclxuXHJcbi8vdG9nZ2xlIHNob3cgcGFzc3dvcmQgZm9yIGFsbCBwYXNzd29yZCBpbnB1dCBmaWVsZFxyXG50b2dnbGVTaG93UGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBwYXNzd29yZElucHV0RmllbGQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgdHlwZSA9IGl0ZW0uZ2V0QXR0cmlidXRlKFwidHlwZVwiKSA9PT0gXCJwYXNzd29yZFwiID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCI7XHJcbiAgICBpdGVtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdHlwZSk7XHJcbiAgICBpZiAodG9nZ2xlU2hvd1Bhc3N3b3JkLmNoZWNrZWQpIHtcclxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbi8vcGFzc3dvcmQgY2hlY2tlciBwYXN3b3JkIGxlbmd0aCBzaG91bGQgYmUgOCBjaGFyYWN0ZXJzIGxvbmdcclxucGFzc3dvcmRJbnB1dEZpZWxkWzFdLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBwYXNzd29yZENoZWNrZXJJbmZvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcbiAgaWYgKGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA+PSA4KSB7XHJcbiAgICBwYXNzd29yZENoZWNrZXJJbmZvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LWRhbmdlclwiKTtcclxuICAgIHBhc3N3b3JkQ2hlY2tlckluZm9bMF0uY2xhc3NMaXN0LmFkZChcInRleHQtc3VjY2Vzc1wiKTtcclxuICAgIGNpcmxjZUNoZWNrSWNvblswXS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwYXNzd29yZENoZWNrZXJJbmZvWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LXN1Y2Nlc3NcIik7XHJcbiAgICBwYXNzd29yZENoZWNrZXJJbmZvWzBdLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWRhbmdlclwiKTtcclxuICAgIGNpcmxjZUNoZWNrSWNvblswXS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vL2NvbmZpcm0gcGFzc3dvcmQgdG8gY2hlY2sgaWYgdGhpcyBjb25maXJtIHBhc3N3b3JkIGFyZSBlcXVhbHMgdG8gbmV3IHBhc3N3b3JkXHJcbnBhc3N3b3JkSW5wdXRGaWVsZFsyXS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgcGFzc3dvcmRDaGVja2VySW5mb1sxXS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xyXG5cclxuICBpZiAoZS50YXJnZXQudmFsdWUgPT09IHBhc3N3b3JkSW5wdXRGaWVsZFsxXS52YWx1ZSkge1xyXG4gICAgcGFzc3dvcmRDaGVja2VySW5mb1sxXS5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1kYW5nZXJcIik7XHJcbiAgICBwYXNzd29yZENoZWNrZXJJbmZvWzFdLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXN1Y2Nlc3NcIik7XHJcbiAgICBwYXNzd29yZENoZWNrZXJJbmZvWzFdLmlubmVySFRNTCA9IGBQYXNzd29yZCBtYXRjaGVkLiA8aSBjbGFzcz1cImJpIGJpLWNoZWNrLWNpcmNsZS1maWxsIGZfc2l6ZS0xXCI+PC9pPmA7XHJcbiAgICBjaGFuZ2VQYXNzd29yZEJ0bi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcGFzc3dvcmRDaGVja2VySW5mb1sxXS5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1zdWNjZXNzXCIpO1xyXG4gICAgcGFzc3dvcmRDaGVja2VySW5mb1sxXS5jbGFzc0xpc3QuYWRkKFwidGV4dC1kYW5nZXJcIik7XHJcbiAgICBwYXNzd29yZENoZWNrZXJJbmZvWzFdLmlubmVySFRNTCA9IGBQYXNzd29yZCBtYXRjaGVkLmA7XHJcbiAgICBjaGFuZ2VQYXNzd29yZEJ0bi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vc3VibWl0IGNoYW5nZSBwYXNzd29yZCByZXF1ZXN0XHJcbmZvcm1Qcm9maWxlQ2hhbmdlUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBsb2FkaW5nU3Bpbm5lckNoYW5nZVBhc3N3b3JkLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcbiAgY2hhbmdlUGFzc3dvcmRCdG4uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gIGNvbnN0IHNlbmRDaGFuZ2VQYXNzd29yZFJlcXVlc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBjaGFuZ2VQYXNzd29yZFVSTCA9IFwiL2NoYW5nZS1wYXNzd29yZFwiO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKHBhc3N3b3JkSW5wdXRGaWVsZFsxXS52YWx1ZSA9PT0gcGFzc3dvcmRJbnB1dEZpZWxkWzJdLnZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjaGFuZ2VQYXNzd29yZFVSTCwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgICAgIGNhY2hlOiBcIm5vLWNhY2hlXCIsXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGN1cnJlbnRfcGFzc3dvcmQ6IHBhc3N3b3JkSW5wdXRGaWVsZFswXS52YWx1ZSxcclxuICAgICAgICAgICAgbmV3X3Bhc3N3b3JkOiBwYXNzd29yZElucHV0RmllbGRbMV0udmFsdWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1fbmV3X3Bhc3N3b3JkOiBwYXNzd29yZElucHV0RmllbGRbMl0udmFsdWUsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBzZW5kQ2hhbmdlUGFzc3dvcmRSZXF1ZXN0KClcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgbG9hZGluZ1NwaW5uZXJDaGFuZ2VQYXNzd29yZC5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgICBpZiAocmVzLmVycm9yKSB7XHJcbiAgICAgICAgYWxlcnRCb3hDaGFuZ2VQYXNzd29yZFsxXS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xyXG4gICAgICAgIGFsZXJ0Qm94Q2hhbmdlUGFzc3dvcmRbMV0uY2xhc3NMaXN0LmFkZChcImVycm9yX19zaGFrZVwiKTtcclxuICAgICAgICBhbGVydE1lc3NhZ2VDaGFuZ2VQYXNzd29yZFsxXS50ZXh0Q29udGVudCA9IHJlcy5lcnJvcl9tZXNzYWdlO1xyXG4gICAgICAgIHBhc3N3b3JkQ2hlY2tlckluZm8uZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpKTtcclxuICAgICAgICBwYXNzd29yZElucHV0RmllbGQuZm9yRWFjaCgoaXRlbSkgPT4gKGl0ZW0udmFsdWUgPSBcIlwiKSk7XHJcbiAgICAgICAgY2hhbmdlUGFzc3dvcmRCdG4uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgYWxlcnRCb3hDaGFuZ2VQYXNzd29yZFsxXS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgICAgIH0sIDYwMDApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgIGFsZXJ0Qm94Q2hhbmdlUGFzc3dvcmRbMF0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICAgICAgICBhbGVydE1lc3NhZ2VDaGFuZ2VQYXNzd29yZFswXS50ZXh0Q29udGVudCA9IHJlcy5zdWNjZXNzX21lc3NhZ2U7XHJcbiAgICAgICAgcGFzc3dvcmRDaGVja2VySW5mby5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIikpO1xyXG4gICAgICAgIHBhc3N3b3JkSW5wdXRGaWVsZC5mb3JFYWNoKChpdGVtKSA9PiAoaXRlbS52YWx1ZSA9IFwiXCIpKTtcclxuICAgICAgICBjaGFuZ2VQYXNzd29yZEJ0bi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBhbGVydEJveENoYW5nZVBhc3N3b3JkWzBdLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XHJcbiAgICAgICAgfSwgNjAwMCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB9KTtcclxufSk7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbmltcG9ydCByZW5kZXJDb21tZW50cyBmcm9tIFwiLi9mZXRjaC1jb21tZW50XCI7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgYnRuQ29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuX19jb21tZW50XCIpO1xyXG4gIGNvbnN0IGNvbW1lbnRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX19jb21tZW50XCIpO1xyXG4gIGNvbnN0IGxvYWRpbmdTcGlubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkaW5nLXNwaW5uZXJcIik7XHJcbiAgY29uc3Qgc2Vzc2lvblRyaWdnZXJGb2N1c1N0b3JhZ2UgPSBzZXNzaW9uU3RvcmFnZTtcclxuICBjb25zdCBORVdfQ09NTUVOVCA9IFwibmV3X2NvbW1lbnRcIjtcclxuICBjb25zdCBjb21tZW50X2JvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbW1lbnRfX2JvZHlcIik7XHJcblxyXG4gIC8vY29tbWVudCBlbmFibGUgYnV0dG9uXHJcblxyXG4gIGNvbW1lbnRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxvYWRpbmdTcGlubmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcbiAgICByZW5kZXJDb21tZW50cztcclxuXHJcbiAgICBjb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9wb3N0XCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGNvbW1lbnRfYm9keTogdGlueW1jZS5nZXQoXCJjb21tZW50RmllbGRcIikuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgcG9zdF9pZDogYnRuQ29tbWVudC5kYXRhc2V0LnBvc3RJZCxcclxuICAgICAgICAgIHN1YmplY3RfaWQ6IGJ0bkNvbW1lbnQuZGF0YXNldC5zdWJqZWN0SWQsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHBvc3RDb21tZW50KClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29tbWVudCBTdWNjZXNzXCIsIHJlcyk7XHJcbiAgICAgICAgdGlueW1jZS5nZXQoXCJjb21tZW50RmllbGRcIikuc2V0Q29udGVudChcIlwiLnRyaW0oKSk7XHJcbiAgICAgICAgc2Vzc2lvblRyaWdnZXJGb2N1c1N0b3JhZ2Uuc2V0SXRlbShORVdfQ09NTUVOVCwgcmVzLm5ld19jb21tZW50KTtcclxuXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMudXJsO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICB9KTtcclxuXHJcbiAgLy9jb21tZW50IGF1dG9mb2N1c1xyXG4gIGNvbnN0IGZvY3VzVG9OZXdDb21tZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29tbWVudFRvRm9jdXMgPSBzZXNzaW9uVHJpZ2dlckZvY3VzU3RvcmFnZS5nZXRJdGVtKE5FV19DT01NRU5UKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbW1lbnRfYm9keS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBBcnJheS5mcm9tKGNvbW1lbnRfYm9keSkuaW5kZXhPZihjb21tZW50X2JvZHlbaV0pO1xyXG4gICAgICBjb25zdCBjb21tZW50Qm9keUZvY3VzID0gY29tbWVudF9ib2R5W2ldLmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG4gICAgICBpZiAoY29tbWVudEJvZHlGb2N1cyA9PT0gY29tbWVudFRvRm9jdXMpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGAjJHtjb21tZW50VG9Gb2N1c31gOyBcclxuICAgICAgICBjb21tZW50X2JvZHlbaV0uY2xhc3NMaXN0LmFkZChcIm5ld19fY29tbWVudFwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGNvbW1lbnRfYm9keVtpXS5jbGFzc0xpc3QuYWRkKFwiZmFkZV9fbmV3LWNvbW1lbnRcIik7XHJcbiAgICAgICAgfSwgNDAwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNlc3Npb25UcmlnZ2VyRm9jdXNTdG9yYWdlLmNsZWFyKCk7XHJcbiAgfTtcclxuICBmb2N1c1RvTmV3Q29tbWVudCgpO1xyXG59KTtcclxuIiwiY29uc3QgY2hlY2tTbmlwcGV0Q29kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZVtjbGFzc149XCJsYW5ndWFnZVwiXScpO1xyXG5jaGVja1NuaXBwZXRDb2RlLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgY29uc3QgY29weUNvZGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNoZWNrU25pcHBldENvZGVbaW5kZXhdLnN0eWxlLnNldFByb3BlcnR5KFwicG9zaXRpb25cIiwgXCJyZWxhdGl2ZSAhaW1wb3J0YW50XCIpO1xyXG4gIGNvcHlDb2RlQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29weV9fc25pcHBldC1jb2RlXCIpO1xyXG4gIGNvcHlDb2RlQnRuLnRleHRDb250ZW50ID0gXCJDb3B5IFNuaXBwZXRcIjtcclxuICBjb3B5Q29kZUJ0bi5jbGFzc0xpc3QuYWRkKFwiY29weV9fY29kZS1zbmlwcGV0XCIpO1xyXG4gIGl0ZW0uYXBwZW5kQ2hpbGQoY29weUNvZGVCdG4pO1xyXG59KTtcclxuXHJcbmNvbnN0IGNvcHlDb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb3B5X19zbmlwcGV0LWNvZGVcIik7XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IGNvcHlDb2RlLmxlbmd0aDsgaSsrKSB7XHJcbiAgY29weUNvZGVbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaW5pdGlhbGl6ZUNvcHlDb2RlQnRuKGUsIGkpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsaXplQ29weUNvZGVCdG4gPSAoZSwgaSkgPT4ge1xyXG4gIEFycmF5LmZyb20oY29weUNvZGUpLmluZGV4T2YoZS50YXJnZXQpO1xyXG4gIGNvcHlDb2RlW2ldLnN0eWxlLnNldFByb3BlcnR5KFwiYmFja2dyb3VuZFwiLCBcIiMxMTkwMDBcIik7XHJcbiAgY29weUNvZGVbaV0uc3R5bGUuc2V0UHJvcGVydHkoXCJjb2xvclwiLCBcIiNmZmZcIik7XHJcbiAgY29weUNvZGVbaV0uaW5uZXJIVE1MID0gXCJDb3B5ICZjaGVjaztcIjtcclxuICBsZXQgc25pcHBldENvbnRlbnQgPSBjaGVja1NuaXBwZXRDb2RlW2ldLnRleHRDb250ZW50LnJlcGxhY2UoXCJDb3B5IOKck1wiLCBcIlwiKTtcclxuXHJcbiAgY29uc3QgZHVtbXlUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICBkdW1teVRleHRBcmVhLnZhbHVlID0gc25pcHBldENvbnRlbnQ7XHJcbiAgZHVtbXlUZXh0QXJlYS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICBkdW1teVRleHRBcmVhLnN0eWxlLmxlZnQgPSBcIi0xMDAlXCI7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkdW1teVRleHRBcmVhKTtcclxuICBkdW1teVRleHRBcmVhLnNlbGVjdCgpO1xyXG4gIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGR1bW15VGV4dEFyZWEpO1xyXG59O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2VsZXNzLWVzY2FwZSAqL1xyXG5cclxuY29uc3QgYnRuU3VibWl0UG9zdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuX19zdWJtaXQtcG9zdFwiKTtcclxuXHJcbmJ0blN1Ym1pdFBvc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgZmV0Y2goXCIvc2VuZC1ub3RpZmljYXRpb25cIiwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRhdGEudXJsO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbn0pO1xyXG4iLCJjb25zdCByZW5kZXJDb21tZW50cyA9ICgpID0+IHtcclxuICBjb25zdCBmZXRjaEFsbENvbW1lbnRGb3JQb3N0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9jb21tZW50c1wiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIGNhY2hlOiBcIm5vLWNhY2hlXCIsXHJcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHtcclxuICAgICAgICAgIGVycm9yX21lc3NhZ2U6IFwiVW5hYmxlZCB0byBmZXRjaCBjb21tZW50LCBQbGVhc2UgcmVmcmVzaCB0aGUgcGFnZVwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZmV0Y2hBbGxDb21tZW50Rm9yUG9zdCgpXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDb21tZW50cztcclxuIiwiaW1wb3J0IGxvZ29JbWFnZSBmcm9tIFwiLi4vYXNzZXRzL2xvZ28vaW5zaWRlci1odWIucG5nXCI7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxvZ29cIik7XHJcbiAgbG9nby5mb3JFYWNoKChpdGVtKSA9PiAoaXRlbS5zcmMgPSBsb2dvSW1hZ2UpKTtcclxufSk7XHJcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgbG9hZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGluZy1jb250YWluZXJcIik7XHJcbiAgY29uc3QgYnRuU2lnbkluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5fX3NpZ24taW5cIik7XHJcbiAgY29uc3QgcmVtZW1iZXJNZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVtZW1iZXItbWVcIik7XHJcbiAgY29uc3QgZm9ybUxvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX19jb250YWluZXItbG9naW5cIik7XHJcblxyXG4gIC8vaW5wdXQgZm9yIGNyZWRlbnRpYWxzIHNhdmUgdG8gc2Vzc2lvbiBzdG9yYWdlXHJcbiAgY29uc3QgaW5wdXRFbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlcl9fZW1haWxcIik7XHJcbiAgY29uc3QgaW5wdXRQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlcl9fcGFzc3dvcmRcIik7XHJcbiAgbGV0IGxvZ2luU3RvcmFnZSA9IGxvY2FsU3RvcmFnZTsgLy8gU2V0IExvY2FsU3RvcmFnZSBmb3IgZW1haWwgb25seSBhbmQgbm90IGlubGN1ZGluZyBwYXNzd29yZCBTdG9yYWdlXHJcblxyXG4gIGxldCB1c2VyX2VtYWlsID0gbG9naW5TdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2VtYWlsXCIpO1xyXG4gIGlucHV0RW1haWwudmFsdWUgPSB1c2VyX2VtYWlsO1xyXG5cclxuICBsZXQgcmVtZW1iZXJNZVN0YXRlID0gbG9naW5TdG9yYWdlLmdldEl0ZW0oXCJyZW1lbWJlcl9tZV9zdGF0ZVwiKTtcclxuICBpZiAocmVtZW1iZXJNZVN0YXRlID09PSBcInRydWVcIikge1xyXG4gICAgcmVtZW1iZXJNZS5jaGVja2VkID0gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVtZW1iZXJNZS5jaGVja2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZW1lbWJlck1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChyZW1lbWJlck1lLmNoZWNrZWQpIHtcclxuICAgICAgbGV0IHNldFJlbWVtYmVyTWUgPSB0cnVlO1xyXG4gICAgICBsb2dpblN0b3JhZ2Uuc2V0SXRlbShcInJlbWVtYmVyX21lX3N0YXRlXCIsIHNldFJlbWVtYmVyTWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHNldFJlbWVtYmVyTWUgPSBmYWxzZTtcclxuICAgICAgbG9naW5TdG9yYWdlLnNldEl0ZW0oXCJyZW1lbWJlcl9tZV9zdGF0ZVwiLCBzZXRSZW1lbWJlck1lKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZm9ybUxvZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxvYWRpbmdDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICAgIGNvbnN0IHNlbmRMb2dpblJlcXVlc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL3NpZ24taW5cIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgICBjYWNoZTogXCJuby1jYWNoZVwiLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICByZW1lbWJlcl9tZTogcmVtZW1iZXJNZS5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgZW1haWw6IGlucHV0RW1haWwudmFsdWUsXHJcbiAgICAgICAgICBwYXNzd29yZDogaW5wdXRQYXNzd29yZC52YWx1ZSxcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA0MDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDw9IDQ5OSkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBzZW5kTG9naW5SZXF1ZXN0KClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLmF1dGhlbnRpY2F0ZV91cmw7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gIH0pO1xyXG5cclxuICBidG5TaWduSW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNvbnN0IGxvZ2luQ3JlZGVudGlhbHMgPSB7XHJcbiAgICAgIHVzZXJfZW1haWw6IGlucHV0RW1haWwudmFsdWUsXHJcbiAgICB9O1xyXG5cclxuICAgIGxvZ2luU3RvcmFnZS5zZXRJdGVtKFwidXNlcl9lbWFpbFwiLCBsb2dpbkNyZWRlbnRpYWxzLnVzZXJfZW1haWwpO1xyXG4gIH0pO1xyXG59KTtcclxuIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBjb25zdCBuYXZUb2dnbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXItdG9nZ2xlclwiKTtcclxuICBjb25zdCBuYXZiYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLi0tbmF2LWxpc3QtY29udGFpbmVyXCIpO1xyXG4gIGxldCBuYXZJc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgaWYgKG5hdlRvZ2dsZXIpIHtcclxuICAgIG5hdlRvZ2dsZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaWYgKCFuYXZJc09wZW4pIHtcclxuICAgICAgICBuYXZUb2dnbGVyLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib3Blbi1uYXZiYXJcIik7XHJcbiAgICAgICAgbmF2SXNPcGVuID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZUb2dnbGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1uYXZiYXJcIik7XHJcbiAgICAgICAgbmF2SXNPcGVuID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsIi8qIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGNoZWNrTmV3UG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvbmV3LXBvc3RcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIGNhY2hlOiBcIm5vLWNhY2hlXCIsXHJcbiAgICAgIGtlZXBhbGl2ZTogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBsZXQgcG9zdExlbmd0aENoZWNrZXIgPSAwOyAvL2ZvciBwb3N0IGxlbmd0aCBjaGVja2VyXHJcbiAgbGV0IGN1cnJlbnRQb3N0TGVuZ3RoID0gMDsgLy9mZXRjaCBvbmUgYW5kIGdldCBjdXJyZW50IHBvc3QgdmFsdWVcclxuXHJcbiAgLy9HZXQgdGhlIGN1cnJlbnQgcG9zdCBsZW5ndGhcclxuICBjaGVja05ld1Bvc3QoKVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjdXJyZW50UG9zdExlbmd0aCA9IHJlcztcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5pbmZvKGVycikpO1xyXG5cclxuICAvL0NoZWNrIGZvciBuZXcgcG9zdFxyXG4gIHNldEludGVydmFsKCgpID0+IHtcclxuICAgIGNoZWNrTmV3UG9zdCgpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBwb3N0TGVuZ3RoQ2hlY2tlciA9IHJlcztcclxuICAgICAgICBpZiAocG9zdExlbmd0aENoZWNrZXIgPiBjdXJyZW50UG9zdExlbmd0aCkge1xyXG4gICAgICAgICAgd2luZG93LmFsZXJ0KFwiTkVXIFBPU1QhXCIpO1xyXG4gICAgICAgICAgY3VycmVudFBvc3RMZW5ndGgrKztcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmluZm8oZXJyKSk7XHJcbiAgfSwgMTAwMDApO1xyXG4gIGNvbnNvbGUubG9nKHBvc3RMZW5ndGhDaGVja2VyKTtcclxuICBjb25zb2xlLmxvZyhjdXJyZW50UG9zdExlbmd0aCk7XHJcbn0pO1xyXG4gKi9cclxuIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBjb25zdCB0b2dnbGVPcHRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBpbl9fcG9zdFwiKTtcclxuICBjb25zdCBvcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9wdGlvbi1jb250YWluZXJcIik7XHJcblxyXG4gIC8vZm9yIGRlbGV0ZSBkaWFsb2dcclxuICBjb25zdCBkZWxldGVPcHRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZV9fb3B0aW9uLWJ0blwiKTtcclxuICBjb25zdCBkZWxldGVEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmN1c3RvbV9fZGVsZXRlLWRpYWxvZ1wiKTtcclxuICBjb25zdCBkZWxldGVEaWFsb2dDYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgXCIuY3VzdG9tX19kaWFsb2ctYnRuLWNhbmNlbFwiXHJcbiAgKTtcclxuICBjb25zdCBkZWxldGVEaWFsb2dDb25maXJtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLmN1c3RvbV9fZGlhbG9nLWJ0bi1jb25maXJtXCJcclxuICApO1xyXG5cclxuICBjb25zdCBwaW5Qb3N0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5waW5fX29wdGlvbi1idG5cIik7XHJcbiAgY29uc3QgdW5QaW5Qb3N0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi51bnBpbl9fb3B0aW9uLWJ0blwiKTtcclxuXHJcbiAgLy8gT3B0aW9uIENhcmQgb3BlblxyXG4gIGxldCBvcHRpb25Jc09wZW4gPSBmYWxzZTsgLy8gZm9yIHRvZ2dsZSBvcHRpb25zXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2dnbGVPcHRpb25CdG4ubGVuZ3RoOyBpKyspIHtcclxuICAgIHRvZ2dsZU9wdGlvbkJ0bltpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKCFvcHRpb25Jc09wZW4pIHtcclxuICAgICAgICBvcHRpb25Db250YWluZXJbaV0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICAgICAgICBvcHRpb25Jc09wZW4gPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9wdGlvbkNvbnRhaW5lcltpXS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgICAgIG9wdGlvbklzT3BlbiA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHRvZ2dsZU9wdGlvbnMoZSwgdG9nZ2xlT3B0aW9uQnRuW2ldLmRhdGFzZXQucG9zdElkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9nZ2xlT3B0aW9ucyA9IChlKSA9PiB7XHJcbiAgICBBcnJheS5mcm9tKHRvZ2dsZU9wdGlvbkJ0bikuaW5kZXhPZihlLnRhcmdldCkgKyAxO1xyXG4gIH07XHJcblxyXG4gIC8vT3BlbiBERUxFVEUgZGlhbG9nIC0tIENsb3NlIG9yIENvbmZpcm0gRGVsZXRlXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWxldGVPcHRpb25CdG4ubGVuZ3RoOyBpKyspIHtcclxuICAgIGRlbGV0ZU9wdGlvbkJ0bltpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZGVsZXRlRGlhbG9nW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcbiAgICAgIGRlbGV0ZVBvc3RPcGVuRGlhbG9nKGUpO1xyXG4gICAgfSk7XHJcbiAgICBkZWxldGVEaWFsb2dDYW5jZWxbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGRlbGV0ZURpYWxvZ1tpXS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgICBjbG9zZURpYWxvZyhlKTtcclxuICAgIH0pO1xyXG4gICAgZGVsZXRlRGlhbG9nQ29uZmlybVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgY29uZmlybURlbGV0ZVBvc3QoZSwgZGVsZXRlRGlhbG9nQ29uZmlybVtpXS5kYXRhc2V0LnBvc3RJZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIE9wZW4gZGlhbG9nIGZvciBkZWxldGUgY29uZmlybWF0aW9uXHJcbiAgY29uc3QgZGVsZXRlUG9zdE9wZW5EaWFsb2cgPSAoZSkgPT4ge1xyXG4gICAgQXJyYXkuZnJvbShkZWxldGVPcHRpb25CdG4pLmluZGV4T2YoZS50YXJnZXQpICsgMTtcclxuICB9O1xyXG5cclxuICAvL0NhbmNlbC9DbG9zZSBkaWFsb2cgZGVsZXRlXHJcbiAgY29uc3QgY2xvc2VEaWFsb2cgPSAoZSkgPT4ge1xyXG4gICAgQXJyYXkuZnJvbShkZWxldGVEaWFsb2dDYW5jZWwpLmluZGV4T2YoZS50YXJnZXQpICsgMTtcclxuICB9O1xyXG5cclxuICAvL0RlbGV0ZSBwb3N0L2Fuc3dlclxyXG4gIGNvbnN0IGNvbmZpcm1EZWxldGVQb3N0ID0gKGUsIGRhdGFQb3N0SWQpID0+IHtcclxuICAgIEFycmF5LmZyb20oZGVsZXRlRGlhbG9nQ29uZmlybSkuaW5kZXhPZihlLnRhcmdldCkgKyAxO1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZU9uZVBvc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgVVJMX0RFTEVURV9QT1NUID0gYC9wb3N0LW9wdGlvbnM/cG9zdF9pZD0ke2RhdGFQb3N0SWR9YDtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTF9ERUxFVEVfUE9TVCwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgY2FjaGU6IFwibm8tY2FjaGVcIixcclxuICAgICAgICAgIG1vZGU6IFwiY29yc1wiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgZXJyb3I6IFwiU29tZXRoaW5nIHdlbnQgd3Jvbmcgb24gZGVsZXRpbmcgdGhlIGNvbnRlbnQuXCIsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy9ERUxFVEUgUkVRVUVTVCBQUk9NSVNFXHJcbiAgICBkZWxldGVPbmVQb3N0KClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLnVybDtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgfTtcclxuXHJcbiAgLy9waW4gb3B0aW9ucyBwb3N0IHB1c2hcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBpblBvc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIHBpblBvc3RbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaW5pdGlhbGl6ZVBpblBvc3QoZSwgcGluUG9zdFtpXS5kYXRhc2V0LnBvc3RJZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdW5QaW5Qb3N0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICB1blBpblBvc3RbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaW5pdGlhbGl6ZVVuUGluUG9zdChlLCB1blBpblBvc3RbaV0uZGF0YXNldC5wb3N0SWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL1BpbiBQb3N0XHJcbiAgY29uc3QgaW5pdGlhbGl6ZVBpblBvc3QgPSAoZSwgZGF0YVBvc3RJZCkgPT4ge1xyXG4gICAgQXJyYXkuZnJvbShwaW5Qb3N0KS5pbmRleE9mKGUudGFyZ2V0KSArIDE7XHJcblxyXG4gICAgY29uc3Qgc2V0SXNQaW5Qb3N0ID0gdHJ1ZTtcclxuICAgIHBpbk9wdGlvbkNvbmZpZyhlLCBkYXRhUG9zdElkLCBzZXRJc1BpblBvc3QpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlcy51cmw7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvL1VucGluIHBvc3RcclxuICBjb25zdCBpbml0aWFsaXplVW5QaW5Qb3N0ID0gKGUsIGRhdGFQb3N0SWQpID0+IHtcclxuICAgIEFycmF5LmZyb20odW5QaW5Qb3N0KS5pbmRleE9mKGUudGFyZ2V0KTtcclxuXHJcbiAgICBjb25zdCBzZXRJc1BpblBvc3QgPSBmYWxzZTtcclxuICAgIHBpbk9wdGlvbkNvbmZpZyhlLCBkYXRhUG9zdElkLCBzZXRJc1BpblBvc3QpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlcy51cmw7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwaW5PcHRpb25Db25maWcgPSBhc3luYyAoZSwgZGF0YVBvc3RJZCwgc2V0UGluUG9zdCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgVVJMX1BJTl9QT1NUID0gYC9wb3N0LW9wdGlvbnMvdXBkYXRlP3Bvc3RfaWQ9JHtkYXRhUG9zdElkfWA7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMX1BJTl9QT1NULCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FjaGU6IFwibm8tY2FjaGVcIixcclxuICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHBpbl9wb3N0OiBzZXRQaW5Qb3N0IH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0ge1xyXG4gICAgICAgICAgbWVzc2FnZTogXCJTb21ldGhpbmcgd2VudCB3cm9uZyBvbiBwaW5uaW5nIHRoZSBwb3N0XCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG59KTtcclxuIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9fZGVsZXRlLWFuc3dlclwiKTtcclxuICBjb25zdCBkYXRhUG9zdElkX2RlbGV0ZSA9IGRlbGV0ZUJ1dHRvbi5kYXRhc2V0LnBvc3RJZDtcclxuICBjb25zdCBsb2FkaW5nU3Bpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubG9hZGluZy1zcGlubmVyXCIpO1xyXG5cclxuICAvLyBVcGRhdGUgZm9ybVxyXG4gIGNvbnN0IHVwZGF0ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwZGF0ZV9fZm9ybVwiKTtcclxuICBjb25zdCB1cGRhdGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBkYXRlX190aXRsZVwiKTtcclxuICBjb25zdCB1cGRhdGVUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwZGF0ZV9fdGFnXCIpO1xyXG4gIGNvbnN0IHVwZGF0ZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwZGF0ZV9fYm9keVwiKTtcclxuICBjb25zdCB1cGRhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9fdXBkYXRlLWFuc3dlclwiKTtcclxuICBjb25zdCBkYXRhUG9zdElkX3VwZGF0ZSA9IHVwZGF0ZUJ0bi5kYXRhc2V0LnBvc3RJZDtcclxuXHJcbiAgLy9jbGljayBldmVudCB0byB0cmlnZ2VyIGRlbGV0ZSByZXF1ZXN0XHJcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgLy9zZW5kIERlbGV0ZSBIdHRwIFJlcXVlc3RcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxvYWRpbmdTcGlubmVyLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKSk7XHJcbiAgICBjb25zdCBkZWxldGVPbmVQb3N0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICBgL3Bvc3Qtb3B0aW9ucz9wb3N0X2lkPSR7ZGF0YVBvc3RJZF9kZWxldGV9YCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICBjYWNoZTogXCJuby1jYWNoZVwiLFxyXG4gICAgICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgZXJyb3I6IFwiU29tZXRoaW5nIHdlbnQgd3Jvbmcgb24gZGVsZXRpbmcgdGhlIGNvbnRlbnQuXCIsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy9ERUxFVEUgUkVRVUVTVCBQUk9NSVNFXHJcbiAgICBkZWxldGVPbmVQb3N0KClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLnVybDtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vY2xpY2sgZXZlbnQgdG8gdHJpZ2dlciBwdXQgcmVxdWVzdFxyXG4gIHVwZGF0ZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbG9hZGluZ1NwaW5uZXIuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpKTtcclxuXHJcbiAgICBjb25zdCBwb3N0VXBkYXRlZENvbnRlbnQgPSB7XHJcbiAgICAgIHBvc3RfdGl0bGU6IHVwZGF0ZVRpdGxlLnZhbHVlLFxyXG4gICAgICBwb3N0X3RhZzogdXBkYXRlVGFnLnZhbHVlLFxyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcclxuICAgICAgcG9zdF9ib2R5OiB0aW55bWNlLmdldChcInNoYXJlQW5zd2VyRm9ybVwiKS5nZXRDb250ZW50KCksXHJcbiAgICB9O1xyXG4gICAgY29uc3QgdXBkYXRlT25lUG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgYC9wb3N0LW9wdGlvbnM/cG9zdF9pZD0ke2RhdGFQb3N0SWRfdXBkYXRlfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYWNoZTogXCJuby1jYWNoZVwiLFxyXG4gICAgICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdFVwZGF0ZWRDb250ZW50KSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6XHJcbiAgICAgICAgICAgICAgXCJTb21ldGhpbmcgd2VudCB3cm9uZyB3aGVuIGF0dGVtcHRlZCB0byB1cGRhdGUgdGhlIGFuc3dlci5cIixcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvL1VQREFURSBSRVFVRVNUIFBST01JU0VcclxuICAgIHVwZGF0ZU9uZVBvc3QoKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMudXJsO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICB9KTtcclxufSk7XHJcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgcmVxdWlyZShcIi4vY2hhbmdlLXBhc3N3b3JkXCIpO1xyXG4gIGNvbnN0IGNoYW5nZVBhc3N3b3JkQnRuRHJvcERvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuY2hhbmdlX19wYXNzd29yZC1vcHRpb24taGVhZGVyXCJcclxuICApO1xyXG4gIGNvbnN0IGNoYW5nZVBhc3N3b3JkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmNoYW5nZV9fcGFzc3dvcmQtb3B0aW9uXCJcclxuICApO1xyXG4gIGNvbnN0IGJ0blVwZGF0ZVByb2ZpbGVTZXR0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5idG5fX3VwZGF0ZS1wcm9maWxlLWluZm9cIlxyXG4gICk7IC8vYnRuIHRvIHVwZGF0ZSBpbmZvcm1hdGlvbiBub3QgcGFzc3dvcmRcclxuICBsZXQgaW1hZ2VGaWxlO1xyXG4gIGxldCBpc09wZW4gPSBmYWxzZTtcclxuICBjaGFuZ2VQYXNzd29yZEJ0bkRyb3BEb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBpZiAoIWlzT3Blbikge1xyXG4gICAgICBjaGFuZ2VQYXNzd29yZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcclxuICAgICAgYnRuVXBkYXRlUHJvZmlsZVNldHRpbmdzXHJcbiAgICAgICAgPyBidG5VcGRhdGVQcm9maWxlU2V0dGluZ3MuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxyXG4gICAgICAgIDogXCJcIjtcclxuICAgICAgaXNPcGVuID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNoYW5nZVBhc3N3b3JkQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgICBidG5VcGRhdGVQcm9maWxlU2V0dGluZ3NcclxuICAgICAgICA/IGJ0blVwZGF0ZVByb2ZpbGVTZXR0aW5ncy5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXHJcbiAgICAgICAgOiBcIlwiO1xyXG4gICAgICBpc09wZW4gPSBmYWxzZTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy9QUkVWSUVXIFVQTE9BREVEIEZJTEVTIEFORCBXT1JLTE9BRFNcclxuICBjb25zdCB1cGxvYWRQcm9maWxlSW1nUGlja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLnVwbG9hZF9fcHJvZmlsZS1pbWFnZS1waWNrZXJcIlxyXG4gICk7XHJcbiAgY29uc3QgYWxlcnRQcm9maWxlU2V0dGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIucHJvZmlsZV9fc2V0dGluZ3MtYWxlcnRcIlxyXG4gICk7XHJcbiAgY29uc3QgYWxlcnRUZXh0UHJvZmlsZVNldHRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLnByb2ZpbGVfX3NldHRpbmdzLWFsZXJ0LXRleHRcIlxyXG4gICk7XHJcblxyXG4gIHVwbG9hZFByb2ZpbGVJbWdQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICBjb25zdCBmaWxlID0gdXBsb2FkUHJvZmlsZUltZ1BpY2tlci5maWxlc1swXTtcclxuICAgIGNvbnN0IHVwbG9hZFByb2ZpbGVJbWdQcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIucHJldmlld19fcHJvZmlsZS1pbWFnZVwiXHJcbiAgICApO1xyXG4gICAgY29uc3QgaW1hZ2VSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgIGltYWdlUmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFwibG9hZFwiLFxyXG4gICAgICBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IFNUQU5EQVJEX1NJWkUgPSAzMTQ1NzI4O1xyXG4gICAgICAgICAgaWYgKGZpbGUuc2l6ZSA8IFNUQU5EQVJEX1NJWkUpIHtcclxuICAgICAgICAgICAgdXBsb2FkUHJvZmlsZUltZ1ByZXZpZXcuc3JjID0gaW1hZ2VSZWFkZXIucmVzdWx0O1xyXG4gICAgICAgICAgICBpbWFnZUZpbGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZpbGU7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydFByb2ZpbGVTZXR0aW5ncy5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xyXG4gICAgICAgICAgICBhbGVydFByb2ZpbGVTZXR0aW5ncy5jbGFzc0xpc3QuYWRkKFwiZXJyb3JfX3NoYWtlXCIpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBhbGVydFByb2ZpbGVTZXR0aW5ncy5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgICAgICAgICB9LCA2MDAwKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSBzaXplIGlzIHRvbyBsYXJnZWApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgYWxlcnRUZXh0UHJvZmlsZVNldHRpbmdzLnRleHRDb250ZW50ID0gZXJyLm1lc3NhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWxzZVxyXG4gICAgKTtcclxuICAgIGlmIChmaWxlKSB7XHJcbiAgICAgIGltYWdlUmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vSEFORExFIFVQTE9BRCBGSUxFUywgRlVMTE5BTUUgQU5EIEVNQUlMIENIQU5HRVNcclxuICBjb25zdCBmb3JtUHJvZmlsZVNldHRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX19wcm9maWxlLXNldHRpbmdzXCIpLFxyXG4gICAgcHJvZmlsZVNldHRpbmdzRnVsbG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5wcm9maWxlX19zZXR0aW5ncy1mdWxsbmFtZVwiXHJcbiAgICApLFxyXG4gICAgcHJvZmlsZVNldHRpbmdzRW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3NldHRpbmdzLWVtYWlsXCIpLFxyXG4gICAgbG9hZGluZ1NwaW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmctc3Bpbm5lclwiKSxcclxuICAgIGxvYWRpbmdQcm9maWxlU2V0dGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5sb2FkaW5nX19wcm9maWxlLXNldHRpbmdzXCJcclxuICAgICk7XHJcblxyXG4gIGZvcm1Qcm9maWxlU2V0dGluZ3MuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbG9hZGluZ1NwaW5uZXIuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICAgIGxvYWRpbmdQcm9maWxlU2V0dGluZ3MuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICAgIGJ0blVwZGF0ZVByb2ZpbGVTZXR0aW5ncy5yZW1vdmVBdHRyaWJ1dGUoXCJmb3JcIik7XHJcbiAgICBidG5VcGRhdGVQcm9maWxlU2V0dGluZ3MucmVtb3ZlQXR0cmlidXRlKFwicm9sZVwiKTtcclxuICAgIGNvbnN0IHByb2ZpbGVTZXR0aW5nc0Zvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm1Qcm9maWxlU2V0dGluZ3MpLFxyXG4gICAgICBQUk9GSUxFX0lNQUdFID0gXCJwcm9maWxlX2ltYWdlXCI7XHJcbiAgICBwcm9maWxlU2V0dGluZ3NGb3JtRGF0YS5hcHBlbmQoUFJPRklMRV9JTUFHRSwgaW1hZ2VGaWxlKTtcclxuICAgIHByb2ZpbGVTZXR0aW5nc0Zvcm1EYXRhLmFwcGVuZChcImZ1bGxuYW1lXCIsIHByb2ZpbGVTZXR0aW5nc0Z1bGxuYW1lLnZhbHVlKTtcclxuICAgIHByb2ZpbGVTZXR0aW5nc0Zvcm1EYXRhLmFwcGVuZChcImVtYWlsXCIsIHByb2ZpbGVTZXR0aW5nc0VtYWlsLnZhbHVlKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVQcm9maWxlSW5mb3JtYXRpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IFVQREFURV9JTkZPX1VSTCA9IFwiL3Byb2ZpbGUtaW5mby11cGRhdGVcIjtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUERBVEVfSU5GT19VUkwsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICAgICAgY2FjaGU6IFwibm8tY2FjaGVcIixcclxuICAgICAgICBib2R5OiBwcm9maWxlU2V0dGluZ3NGb3JtRGF0YSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB1cGRhdGVQcm9maWxlSW5mb3JtYXRpb24oKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMudXJsO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICB9KTtcclxufSk7XHJcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgcmVnVXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlZ191c2VyX25hbWVcIik7XHJcbiAgY29uc3QgcmVnVXNlckVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWdfdXNlcl9lbWFpbFwiKTtcclxuICBjb25zdCByZWdVc2VyUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlZ191c2VyX3Bhc3N3b3JkXCIpO1xyXG4gIGNvbnN0IHJlZ1VzZXJDb25maXJtUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIucmVnX3VzZXJfY29uZmlybV9wYXNzd29yZFwiXHJcbiAgKTtcclxuICBjb25zdCBmb3JtUmVnaXN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX2NvbnRhaW5lci1yZWdpc3RlclwiKTtcclxuXHJcbiAgLy9wYXNzd29yZCBhbmQgY29uZmlybSBwYXNzd29yZCBjaGVja2VyXHJcbiAgY29uc3QgcGFzc3dvcmRDaGVja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXNzd29yZF9fY2hlY2tlclwiKTtcclxuICBjb25zdCBjb25maXJtUGFzc3dvcmRDaGVja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmNvbmZpcm1fX3Bhc3N3b3JkLWNoZWNrZXJcIlxyXG4gICk7XHJcbiAgY29uc3QgY2hlY2tJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5iaS1jaGVjay1jaXJjbGUtZmlsbFwiKTtcclxuICBjb25zdCBzaG93UGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3dfX3Bhc3N3b3JkXCIpO1xyXG5cclxuICBjb25zdCBTRVNTSU9OX1NUT1JBR0VfTkFNRSA9IFwicmVnaXN0ZXJfdXNlcl9uYW1lXCIsXHJcbiAgICBTRVNTSU9OX1NUT1JBR0VfRU1BSUwgPSBcInJlZ2lzdGVyX3VzZXJfZW1haWxcIjtcclxuXHJcbiAgbGV0IHJlZ2lzdGVyU2Vzc2lvblN0b3JhZ2UgPSBzZXNzaW9uU3RvcmFnZTtcclxuICBsZXQgcmVjb3ZlckNyZWRlbnRpYWxzID0ge1xyXG4gICAgdXNlcl9uYW1lOiByZWdpc3RlclNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU0VTU0lPTl9TVE9SQUdFX05BTUUpLFxyXG4gICAgdXNlcl9lbWFpbDogcmVnaXN0ZXJTZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFNFU1NJT05fU1RPUkFHRV9FTUFJTCksXHJcbiAgfTtcclxuICByZWdVc2VyTmFtZS52YWx1ZSA9IHJlY292ZXJDcmVkZW50aWFscy51c2VyX25hbWU7XHJcbiAgcmVnVXNlckVtYWlsLnZhbHVlID0gcmVjb3ZlckNyZWRlbnRpYWxzLnVzZXJfZW1haWw7XHJcbiAgcmVnaXN0ZXJTZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xyXG5cclxuICAvL1N0b3JlIHNlc3Npb24gZW1haWwgYW5kIG5hbWUgb24gc2Vzc2lvbiBzdG9yYWdlXHJcbiAgbGV0IGZvckVtYWlsTG9jYWxTdG9yYWdlID0gbG9jYWxTdG9yYWdlO1xyXG4gIGZvcm1SZWdpc3Rlci5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsICgpID0+IHtcclxuICAgIHJlZ2lzdGVyU2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTRVNTSU9OX1NUT1JBR0VfTkFNRSwgcmVnVXNlck5hbWUudmFsdWUpO1xyXG4gICAgcmVnaXN0ZXJTZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFNFU1NJT05fU1RPUkFHRV9FTUFJTCwgcmVnVXNlckVtYWlsLnZhbHVlKTtcclxuICAgIGZvckVtYWlsTG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyX2VtYWlsXCIsIHJlZ1VzZXJFbWFpbC52YWx1ZSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vcGFzc3dvcmQgbGlzdGVuZXJcclxuICByZWdVc2VyUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBwYXNzd29yZENoZWNrZXIuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuXHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoID49IDgpIHtcclxuICAgICAgcGFzc3dvcmRDaGVja2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LWRhbmdlclwiKTtcclxuICAgICAgcGFzc3dvcmRDaGVja2VyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXN1Y2Nlc3NcIik7XHJcbiAgICAgIGNoZWNrSWNvblswXS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGFzc3dvcmRDaGVja2VyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWRhbmdlclwiKTtcclxuICAgICAgcGFzc3dvcmRDaGVja2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LXN1Y2Nlc3NcIik7XHJcbiAgICAgIGNoZWNrSWNvblswXS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvL3Bhc3N3b3JkIGNvbmZpcm0gY2hlY2tlclxyXG4gIHJlZ1VzZXJDb25maXJtUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25maXJtUGFzc3dvcmRDaGVja2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcblxyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSByZWdVc2VyUGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgY29uZmlybVBhc3N3b3JkQ2hlY2tlci5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1kYW5nZXJcIik7XHJcbiAgICAgIGNvbmZpcm1QYXNzd29yZENoZWNrZXIuY2xhc3NMaXN0LmFkZChcInRleHQtc3VjY2Vzc1wiKTtcclxuICAgICAgY29uZmlybVBhc3N3b3JkQ2hlY2tlci5pbm5lckhUTUwgPSBgUGFzc3dvcmQgbWF0Y2hlZC4gPGkgY2xhc3M9XCJiaSBiaS1jaGVjay1jaXJjbGUtZmlsbCBmX3NpemUtMVwiPjwvaT5gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uZmlybVBhc3N3b3JkQ2hlY2tlci5jbGFzc0xpc3QuYWRkKFwidGV4dC1kYW5nZXJcIik7XHJcbiAgICAgIGNvbmZpcm1QYXNzd29yZENoZWNrZXIuY2xhc3NMaXN0LnJlbW92ZShcInRleHQtc3VjY2Vzc1wiKTtcclxuICAgICAgY29uZmlybVBhc3N3b3JkQ2hlY2tlci5pbm5lckhUTUwgPSBgUGFzc3dvcmQgZG8gbm90IG1hdGNoZWQuYDtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy9zaG93IHBhc3N3b3JkIGNoZWNrZXJcclxuICBjb25zdCBwYXNzd29yZEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9cGFzc3dvcmRdXCIpO1xyXG4gIHNob3dQYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBwYXNzd29yZEZpZWxkLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgY29uc3QgdHlwZSA9XHJcbiAgICAgICAgaXRlbS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpID09PSBcInBhc3N3b3JkXCIgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIjtcclxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xyXG4gICAgICBpZiAoc2hvd1Bhc3N3b3JkLmNoZWNrZWQpIHtcclxuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdHlwZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufSk7XHJcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3Qgc3ViamVjdERyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zdWJqZWN0X19kcm9wZG93blwiKTtcclxuICBjb25zdCBzdWJqZWN0RHJvcGRvd25Hcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcIi5zdWJqZWN0X19kcm9wZG93bi1ncm91cFwiXHJcbiAgKTtcclxuICBjb25zdCBzdWJqZWN0RHJvcGRvd25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgXCIuc3ViamVjdF9fZHJvcGRvd24tYnRuXCJcclxuICApO1xyXG4gIGNvbnN0IHN1YmplY3REcm9wZG93bkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZhLWNoZXZyb24tcmlnaHRcIik7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViamVjdERyb3Bkb3duR3JvdXAubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBzdWJqZWN0RHJvcGRvd25PcGVuID0gZmFsc2U7XHJcbiAgICBzdWJqZWN0RHJvcGRvd25CdG5baV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGlmICghc3ViamVjdERyb3Bkb3duT3Blbikge1xyXG4gICAgICAgIHN1YmplY3REcm9wZG93bkdyb3VwW2ldLmNsYXNzTGlzdC5hZGQoXCJzdWJqZWN0X19kcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgIHN1YmplY3REcm9wZG93bltpXS5jbGFzc0xpc3QuYWRkKFwic3ViamVjdF9fZHJvcGRvd24tb3BlblwiKTtcclxuICAgICAgICBzdWJqZWN0RHJvcGRvd25JY29uW2ldLmNsYXNzTGlzdC5hZGQoXCJpY29uLXJvdGF0ZVwiKTtcclxuICAgICAgICBzdWJqZWN0RHJvcGRvd25PcGVuID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdWJqZWN0RHJvcGRvd25Hcm91cFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwic3ViamVjdF9fZHJvcGRvd24tb3BlblwiKTtcclxuICAgICAgICBzdWJqZWN0RHJvcGRvd25baV0uY2xhc3NMaXN0LnJlbW92ZShcInN1YmplY3RfX2Ryb3Bkb3duLW9wZW5cIik7XHJcbiAgICAgICAgc3ViamVjdERyb3Bkb3duSWNvbltpXS5jbGFzc0xpc3QucmVtb3ZlKFwiaWNvbi1yb3RhdGVcIik7XHJcbiAgICAgICAgc3ViamVjdERyb3Bkb3duT3BlbiA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGFycmF5SW5kZXhGaW5kZXIoZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFycmF5SW5kZXhGaW5kZXIgPSAoZSkgPT4ge1xyXG4gICAgQXJyYXkuZnJvbShzdWJqZWN0RHJvcGRvd24pLmluZGV4T2YoZS50YXJnZXQpO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTFkM2YzYjIwZDEyMzlkMTRlYjBlNzM4Yjk2MzkyZjcucG5nXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8qIEpBVkFTQ1JJUFQgKi9cclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXJfX2VtYWlsXCIpKSB7XHJcbiAgcmVxdWlyZShcIi4vanMvbG9naW5cIik7XHJcbn1cclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlZ191c2VyX25hbWVcIikpIHtcclxuICByZXF1aXJlKFwiLi9qcy9yZWdpc3RlclwiKTtcclxufVxyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9fY29tbWVudFwiKSkge1xyXG4gIHJlcXVpcmUoXCIuL2pzL2NvbW1lbnRcIik7XHJcbn1cclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bl9fZGVsZXRlLWFuc3dlclwiKSkge1xyXG4gIHJlcXVpcmUoXCIuL2pzL29wdGlvbnNfcG9zdFwiKTtcclxufVxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5fX3VwZGF0ZS1hbnN3ZXJcIikpIHtcclxuICByZXF1aXJlKFwiLi9qcy9vcHRpb25zX3Bvc3RcIik7XHJcbn1cclxuXHJcbnJlcXVpcmUoXCIuL2pzL2ltYWdlLWxvYWRcIik7XHJcbnJlcXVpcmUoXCIuL2pzL29wdGlvbl9wb3N0X3RvZ2dsZVwiKTtcclxucmVxdWlyZShcIi4vYm9vdHN0cmFwL2pzL2Jvb3RzdHJhcC5taW5cIik7XHJcbnJlcXVpcmUoXCIuL2pzL25hdmJ1cmdlci5hbmltXCIpO1xyXG5yZXF1aXJlKFwiLi9qcy9zdWJqZWN0X2Ryb3Bkb3duXCIpO1xyXG5yZXF1aXJlKFwiLi9qcy9jb3B5LWNvZGVcIik7XHJcbnJlcXVpcmUoXCIuL2pzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb25fYXBpXCIpO1xyXG5yZXF1aXJlKFwiLi9qcy9wcm9maWxlX3NldHRpbmdzXCIpO1xyXG5yZXF1aXJlKFwiLi9qcy9jcmVhdGUtcG9zdFwiKTtcclxuLy8gcmVxdWlyZShcIi4vanMvdGlueW1jZS5mb3JtXCIpO1xyXG5cclxuLyogU1RZTEUgKi9cclxucmVxdWlyZShcIi4vYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAubWluLmNzc1wiKTtcclxucmVxdWlyZShcIi4vbWFpbi5zY3NzXCIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9