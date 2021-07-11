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

  deleteButton.addEventListener("click", () => {
    //send Delete Http Request
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

    if (e.target.value.length > 8) {
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
__webpack_require__(/*! ./js/image-load */ "./public/js/image-load.js");

__webpack_require__(/*! ./js/login */ "./public/js/login.js");

__webpack_require__(/*! ./js/register */ "./public/js/register.js");

__webpack_require__(/*! ./js/option_post_toggle */ "./public/js/option_post_toggle.js");

__webpack_require__(/*! ./bootstrap/js/bootstrap.min */ "./public/bootstrap/js/bootstrap.min.js");

__webpack_require__(/*! ./js/navburger.anim */ "./public/js/navburger.anim.js");

__webpack_require__(/*! ./js/subject_dropdown */ "./public/js/subject_dropdown.js");

__webpack_require__(/*! ./js/options_post */ "./public/js/options_post.js");

__webpack_require__(/*! ./js/copy-code */ "./public/js/copy-code.js");

__webpack_require__(/*! ./js/comment */ "./public/js/comment.js");

__webpack_require__(/*! ./js/notification/notification_api */ "./public/js/notification/notification_api.js"); // require("./js/tinymce.form");

/* STYLE */


__webpack_require__(/*! ./bootstrap/css/bootstrap.min.css */ "./public/bootstrap/css/bootstrap.min.css");

__webpack_require__(/*! ./main.scss */ "./public/main.scss");
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvY3JlYXRlUG9wcGVyLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDbGlwcGluZ1JlY3QuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50UmVjdC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldEhUTUxFbGVtZW50U2Nyb2xsLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Tm9kZVNjcm9sbC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFBhcmVudE5vZGUuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRTY3JvbGxQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRWaWV3cG9ydFJlY3QuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3dTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzU2Nyb2xsUGFyZW50LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaXNUYWJsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9saXN0U2Nyb2xsUGFyZW50cy5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZW51bXMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2luZGV4LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9hcnJvdy5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2ZsaXAuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9oaWRlLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9vZmZzZXQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9wb3BwZXJPZmZzZXRzLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9wb3BwZXItbGl0ZS5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvcG9wcGVyLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvY29tcHV0ZU9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2RlYm91bmNlLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9kZXRlY3RPdmVyZmxvdy5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZXhwYW5kVG9IYXNoTWFwLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEFsdEF4aXMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldFZhcmlhdGlvbi5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvbWF0aC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvbWVyZ2VCeU5hbWUuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvb3JkZXJNb2RpZmllcnMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3VuaXF1ZUJ5LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy92YWxpZGF0ZU1vZGlmaWVycy5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvd2l0aGluLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy9kb20vc2VsZWN0b3ItZW5naW5lLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy91dGlsL2luZGV4LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy9kb20vZGF0YS5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvZG9tL2V2ZW50LWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi4vanMvc3JjL2Jhc2UtY29tcG9uZW50LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy9hbGVydC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvYnV0dG9uLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy9kb20vbWFuaXB1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi4vanMvc3JjL2Nhcm91c2VsLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy9jb2xsYXBzZS5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi4vanMvc3JjL3V0aWwvc2Nyb2xsYmFyLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy91dGlsL2JhY2tkcm9wLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvb2ZmY2FudmFzLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy91dGlsL3Nhbml0aXplci5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvcG9wb3Zlci5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvc2Nyb2xsc3B5LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy90YWIuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi4vanMvc3JjL3RvYXN0LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL2luZGV4LnVtZC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL3B1YmxpYy9qcy9jb21tZW50LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vcHVibGljL2pzL2NvcHktY29kZS5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL3B1YmxpYy9qcy9mZXRjaC1jb21tZW50LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vcHVibGljL2pzL2ltYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9wdWJsaWMvanMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9wdWJsaWMvanMvbmF2YnVyZ2VyLmFuaW0uanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9wdWJsaWMvanMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbl9hcGkuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9wdWJsaWMvanMvb3B0aW9uX3Bvc3RfdG9nZ2xlLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vcHVibGljL2pzL29wdGlvbnNfcG9zdC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL3B1YmxpYy9qcy9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL3B1YmxpYy9qcy9zdWJqZWN0X2Ryb3Bkb3duLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vcHVibGljL2Fzc2V0cy9sb2dvL2luc2lkZXItaHViLnBuZyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL3B1YmxpYy9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzPzliNjEiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9wdWJsaWMvbWFpbi5zY3NzPzlhODgiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2luc2lkZXItaHViL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2luc2lkZXItaHViL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2luc2lkZXItaHViLy4vcHVibGljL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlbGVjdG9yRW5naW5lIiwiZmluZCIsInNlbGVjdG9yIiwiZWxlbWVudCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY29uY2F0IiwiRWxlbWVudCIsInByb3RvdHlwZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjYWxsIiwiZmluZE9uZSIsInF1ZXJ5U2VsZWN0b3IiLCJjaGlsZHJlbiIsImZpbHRlciIsImNoaWxkIiwibWF0Y2hlcyIsInBhcmVudHMiLCJhbmNlc3RvciIsInBhcmVudE5vZGUiLCJub2RlVHlwZSIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJwdXNoIiwicHJldiIsInByZXZpb3VzIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm5leHQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJnZXRVSUQiLCJwcmVmaXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRFbGVtZW50QnlJZCIsImdldFNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwiaHJlZkF0dHIiLCJpbmNsdWRlcyIsInN0YXJ0c1dpdGgiLCJzcGxpdCIsInRyaW0iLCJnZXRTZWxlY3RvckZyb21FbGVtZW50IiwiZ2V0RWxlbWVudEZyb21TZWxlY3RvciIsImdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvbkRlbGF5Iiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uIiwiTnVtYmVyIiwicGFyc2VGbG9hdCIsImZsb2F0VHJhbnNpdGlvbkRlbGF5IiwidHJpZ2dlclRyYW5zaXRpb25FbmQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJpc0VsZW1lbnQiLCJvYmoiLCJqcXVlcnkiLCJnZXRFbGVtZW50IiwibGVuZ3RoIiwiZW11bGF0ZVRyYW5zaXRpb25FbmQiLCJkdXJhdGlvbiIsImNhbGxlZCIsImVtdWxhdGVkRHVyYXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwibGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsInR5cGVDaGVja0NvbmZpZyIsImNvbXBvbmVudE5hbWUiLCJjb25maWciLCJjb25maWdUeXBlcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJleHBlY3RlZFR5cGVzIiwidmFsdWUiLCJ2YWx1ZVR5cGUiLCJ0b1N0cmluZyIsIm1hdGNoIiwidG9Mb3dlckNhc2UiLCJSZWdFeHAiLCJ0ZXN0IiwiVHlwZUVycm9yIiwidG9VcHBlckNhc2UiLCJpc1Zpc2libGUiLCJzdHlsZSIsImVsZW1lbnRTdHlsZSIsInBhcmVudE5vZGVTdHlsZSIsImRpc3BsYXkiLCJ2aXNpYmlsaXR5IiwiaXNEaXNhYmxlZCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZGlzYWJsZWQiLCJoYXNBdHRyaWJ1dGUiLCJmaW5kU2hhZG93Um9vdCIsImF0dGFjaFNoYWRvdyIsImdldFJvb3ROb2RlIiwicm9vdCIsIlNoYWRvd1Jvb3QiLCJub29wIiwicmVmbG93Iiwib2Zmc2V0SGVpZ2h0IiwiZ2V0alF1ZXJ5IiwialF1ZXJ5IiwiYm9keSIsImlzUlRMIiwiZGlyIiwiZGVmaW5lSlF1ZXJ5UGx1Z2luIiwicGx1Z2luIiwiY2FsbGJhY2siLCIkIiwibmFtZSIsIk5BTUUiLCJKUVVFUllfTk9fQ09ORkxJQ1QiLCJmbiIsImpRdWVyeUludGVyZmFjZSIsIkNvbnN0cnVjdG9yIiwibm9Db25mbGljdCIsInJlYWR5U3RhdGUiLCJleGVjdXRlIiwiZWxlbWVudE1hcCIsIk1hcCIsInNldCIsImtleSIsImluc3RhbmNlIiwiaGFzIiwiaW5zdGFuY2VNYXAiLCJnZXQiLCJzaXplIiwiY29uc29sZSIsImVycm9yIiwiQXJyYXkiLCJmcm9tIiwicmVtb3ZlIiwiZGVsZXRlIiwibmFtZXNwYWNlUmVnZXgiLCJzdHJpcE5hbWVSZWdleCIsInN0cmlwVWlkUmVnZXgiLCJldmVudFJlZ2lzdHJ5IiwidWlkRXZlbnQiLCJjdXN0b21FdmVudHMiLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsImN1c3RvbUV2ZW50c1JlZ2V4IiwibmF0aXZlRXZlbnRzIiwiU2V0IiwiZ2V0VWlkRXZlbnQiLCJ1aWQiLCJnZXRFdmVudCIsImZpbmRIYW5kbGVyIiwiZXZlbnRzIiwiaGFuZGxlciIsImRlbGVnYXRpb25TZWxlY3RvciIsInVpZEV2ZW50TGlzdCIsImkiLCJsZW4iLCJldmVudCIsIm9yaWdpbmFsSGFuZGxlciIsIm5vcm1hbGl6ZVBhcmFtcyIsIm9yaWdpbmFsVHlwZUV2ZW50IiwiZGVsZWdhdGlvbkZuIiwiZGVsZWdhdGlvbiIsInR5cGVFdmVudCIsImdldFR5cGVFdmVudCIsImFkZEhhbmRsZXIiLCJvbmVPZmYiLCJ3cmFwRm4iLCJyZWxhdGVkVGFyZ2V0IiwiZGVsZWdhdGVUYXJnZXQiLCJ0aGlzIiwiaGFuZGxlcnMiLCJwcmV2aW91c0ZuIiwicmVwbGFjZSIsImRvbUVsZW1lbnRzIiwidGFyZ2V0IiwiRXZlbnRIYW5kbGVyIiwib2ZmIiwidHlwZSIsImFwcGx5IiwiYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIiLCJib290c3RyYXBIYW5kbGVyIiwicmVtb3ZlSGFuZGxlciIsIkJvb2xlYW4iLCJvbiIsIm9uZSIsImluTmFtZXNwYWNlIiwiaXNOYW1lc3BhY2UiLCJlbGVtZW50RXZlbnQiLCJuYW1lc3BhY2UiLCJzdG9yZUVsZW1lbnRFdmVudCIsImhhbmRsZXJLZXkiLCJyZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMiLCJzbGljZSIsImtleUhhbmRsZXJzIiwidHJpZ2dlciIsImFyZ3MiLCJpc05hdGl2ZSIsImpRdWVyeUV2ZW50IiwiYnViYmxlcyIsIm5hdGl2ZURpc3BhdGNoIiwiZGVmYXVsdFByZXZlbnRlZCIsImV2dCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsIkN1c3RvbUV2ZW50IiwiY2FuY2VsYWJsZSIsImRlZmluZVByb3BlcnR5IiwicHJldmVudERlZmF1bHQiLCJCYXNlQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJfZWxlbWVudCIsIkRhdGEiLCJEQVRBX0tFWSIsImRpc3Bvc2UiLCJFVkVOVF9LRVkiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwicHJvcGVydHlOYW1lIiwiX3F1ZXVlQ2FsbGJhY2siLCJpc0FuaW1hdGVkIiwiW29iamVjdCBPYmplY3RdIiwiVkVSU0lPTiIsIkVycm9yIiwiQWxlcnQiLCJjbG9zZSIsInJvb3RFbGVtZW50IiwiX2dldFJvb3RFbGVtZW50IiwiY3VzdG9tRXZlbnQiLCJfdHJpZ2dlckNsb3NlRXZlbnQiLCJfcmVtb3ZlRWxlbWVudCIsImNsb3Nlc3QiLCJfZGVzdHJveUVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsImVhY2giLCJkYXRhIiwiYWxlcnRJbnN0YW5jZSIsImhhbmRsZURpc21pc3MiLCJCdXR0b24iLCJ0b2dnbGUiLCJzZXRBdHRyaWJ1dGUiLCJub3JtYWxpemVEYXRhIiwidmFsIiwibm9ybWFsaXplRGF0YUtleSIsImNociIsImJ1dHRvbiIsIk1hbmlwdWxhdG9yIiwic2V0RGF0YUF0dHJpYnV0ZSIsInJlbW92ZURhdGFBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJnZXREYXRhQXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJkYXRhc2V0IiwicHVyZUtleSIsImNoYXJBdCIsImdldERhdGFBdHRyaWJ1dGUiLCJvZmZzZXQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic2Nyb2xsVG9wIiwibGVmdCIsInNjcm9sbExlZnQiLCJwb3NpdGlvbiIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJEZWZhdWx0IiwiaW50ZXJ2YWwiLCJrZXlib2FyZCIsInNsaWRlIiwicGF1c2UiLCJ3cmFwIiwidG91Y2giLCJEZWZhdWx0VHlwZSIsIk9SREVSX05FWFQiLCJPUkRFUl9QUkVWIiwiRElSRUNUSU9OX0xFRlQiLCJESVJFQ1RJT05fUklHSFQiLCJDYXJvdXNlbCIsInN1cGVyIiwiX2l0ZW1zIiwiX2ludGVydmFsIiwiX2FjdGl2ZUVsZW1lbnQiLCJfaXNQYXVzZWQiLCJfaXNTbGlkaW5nIiwidG91Y2hUaW1lb3V0IiwidG91Y2hTdGFydFgiLCJ0b3VjaERlbHRhWCIsIl9jb25maWciLCJfZ2V0Q29uZmlnIiwiX2luZGljYXRvcnNFbGVtZW50IiwiX3RvdWNoU3VwcG9ydGVkIiwibmF2aWdhdG9yIiwibWF4VG91Y2hQb2ludHMiLCJfcG9pbnRlckV2ZW50IiwiUG9pbnRlckV2ZW50IiwiX2FkZEV2ZW50TGlzdGVuZXJzIiwiX3NsaWRlIiwibmV4dFdoZW5WaXNpYmxlIiwiaGlkZGVuIiwiY3ljbGUiLCJjbGVhckludGVydmFsIiwiX3VwZGF0ZUludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJ2aXNpYmlsaXR5U3RhdGUiLCJiaW5kIiwidG8iLCJpbmRleCIsImFjdGl2ZUluZGV4IiwiX2dldEl0ZW1JbmRleCIsIm9yZGVyIiwiX2hhbmRsZVN3aXBlIiwiYWJzRGVsdGF4IiwiYWJzIiwiZGlyZWN0aW9uIiwiX2tleWRvd24iLCJfYWRkVG91Y2hFdmVudExpc3RlbmVycyIsInN0YXJ0IiwicG9pbnRlclR5cGUiLCJ0b3VjaGVzIiwiY2xpZW50WCIsIm1vdmUiLCJlbmQiLCJjbGVhclRpbWVvdXQiLCJpdGVtSW1nIiwiZSIsImFkZCIsInRhZ05hbWUiLCJpbmRleE9mIiwiX2dldEl0ZW1CeU9yZGVyIiwiYWN0aXZlRWxlbWVudCIsImlzTmV4dCIsImlzUHJldiIsImxhc3RJdGVtSW5kZXgiLCJpdGVtSW5kZXgiLCJfdHJpZ2dlclNsaWRlRXZlbnQiLCJldmVudERpcmVjdGlvbk5hbWUiLCJ0YXJnZXRJbmRleCIsImZyb21JbmRleCIsIl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50IiwiYWN0aXZlSW5kaWNhdG9yIiwiaW5kaWNhdG9ycyIsInBhcnNlSW50IiwiZWxlbWVudEludGVydmFsIiwiZGVmYXVsdEludGVydmFsIiwiZGlyZWN0aW9uT3JPcmRlciIsIl9kaXJlY3Rpb25Ub09yZGVyIiwiYWN0aXZlRWxlbWVudEluZGV4IiwibmV4dEVsZW1lbnQiLCJuZXh0RWxlbWVudEluZGV4IiwiaXNDeWNsaW5nIiwiZGlyZWN0aW9uYWxDbGFzc05hbWUiLCJvcmRlckNsYXNzTmFtZSIsIl9vcmRlclRvRGlyZWN0aW9uIiwidHJpZ2dlclNsaWRFdmVudCIsImNvbXBsZXRlQ2FsbEJhY2siLCJhY3Rpb24iLCJyaWRlIiwiY2Fyb3VzZWxJbnRlcmZhY2UiLCJzbGlkZUluZGV4IiwiZGF0YUFwaUNsaWNrSGFuZGxlciIsImNhcm91c2VscyIsInBhcmVudCIsIkNvbGxhcHNlIiwiX2lzVHJhbnNpdGlvbmluZyIsIl90cmlnZ2VyQXJyYXkiLCJpZCIsInRvZ2dsZUxpc3QiLCJlbGVtIiwiZmlsdGVyRWxlbWVudCIsImZvdW5kRWxlbSIsIl9zZWxlY3RvciIsIl9wYXJlbnQiLCJfZ2V0UGFyZW50IiwiX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyIsImhpZGUiLCJzaG93IiwiYWN0aXZlcyIsImFjdGl2ZXNEYXRhIiwiY29udGFpbmVyIiwidGVtcEFjdGl2ZURhdGEiLCJlbGVtQWN0aXZlIiwiY29sbGFwc2VJbnRlcmZhY2UiLCJkaW1lbnNpb24iLCJfZ2V0RGltZW5zaW9uIiwic2V0VHJhbnNpdGlvbmluZyIsInNjcm9sbFNpemUiLCJ0cmlnZ2VyQXJyYXlMZW5ndGgiLCJpc1RyYW5zaXRpb25pbmciLCJzZWxlY3RlZCIsInRyaWdnZXJBcnJheSIsImlzT3BlbiIsInRyaWdnZXJEYXRhIiwiUkVHRVhQX0tFWURPV04iLCJQTEFDRU1FTlRfVE9QIiwiUExBQ0VNRU5UX1RPUEVORCIsIlBMQUNFTUVOVF9CT1RUT00iLCJQTEFDRU1FTlRfQk9UVE9NRU5EIiwiUExBQ0VNRU5UX1JJR0hUIiwiUExBQ0VNRU5UX0xFRlQiLCJib3VuZGFyeSIsInJlZmVyZW5jZSIsInBvcHBlckNvbmZpZyIsImF1dG9DbG9zZSIsIkRyb3Bkb3duIiwiX3BvcHBlciIsIl9tZW51IiwiX2dldE1lbnVFbGVtZW50IiwiX2luTmF2YmFyIiwiX2RldGVjdE5hdmJhciIsImdldFBhcmVudEZyb21FbGVtZW50IiwiUG9wcGVyIiwicmVmZXJlbmNlRWxlbWVudCIsIl9nZXRQb3BwZXJDb25maWciLCJpc0Rpc3BsYXlTdGF0aWMiLCJtb2RpZmllcnMiLCJtb2RpZmllciIsImVuYWJsZWQiLCJjcmVhdGVQb3BwZXIiLCJmb2N1cyIsIl9jb21wbGV0ZUhpZGUiLCJkZXN0cm95IiwidXBkYXRlIiwiX2dldFBsYWNlbWVudCIsInBhcmVudERyb3Bkb3duIiwiaXNFbmQiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiX2dldE9mZnNldCIsIm1hcCIsInBvcHBlckRhdGEiLCJkZWZhdWx0QnNQb3BwZXJDb25maWciLCJwbGFjZW1lbnQiLCJvcHRpb25zIiwiX3NlbGVjdE1lbnVJdGVtIiwiaXRlbXMiLCJkcm9wZG93bkludGVyZmFjZSIsInRvZ2dsZXMiLCJjb250ZXh0IiwiY29tcG9zZWRQYXRoIiwiaXNNZW51VGFyZ2V0IiwiY2xpY2tFdmVudCIsImlzQWN0aXZlIiwic3RvcFByb3BhZ2F0aW9uIiwiZ2V0VG9nZ2xlQnV0dG9uIiwiY2xlYXJNZW51cyIsImdldEluc3RhbmNlIiwiY2xpY2siLCJkYXRhQXBpS2V5ZG93bkhhbmRsZXIiLCJnZXRXaWR0aCIsImRvY3VtZW50V2lkdGgiLCJjbGllbnRXaWR0aCIsImlubmVyV2lkdGgiLCJ3aWR0aCIsIl9kaXNhYmxlT3ZlckZsb3ciLCJfc2V0RWxlbWVudEF0dHJpYnV0ZXMiLCJjYWxjdWxhdGVkVmFsdWUiLCJhY3R1YWxWYWx1ZSIsIm92ZXJmbG93Iiwic3R5bGVQcm9wIiwic2Nyb2xsYmFyV2lkdGgiLCJyZXNldCIsIl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzIiwicmVtb3ZlUHJvcGVydHkiLCJjbGlja0NhbGxiYWNrIiwiQmFja2Ryb3AiLCJfaXNBcHBlbmRlZCIsIl9hcHBlbmQiLCJfZ2V0RWxlbWVudCIsIl9lbXVsYXRlQW5pbWF0aW9uIiwiYmFja2Ryb3AiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiIsIk1vZGFsIiwiX2RpYWxvZyIsIl9iYWNrZHJvcCIsIl9pbml0aWFsaXplQmFja0Ryb3AiLCJfaXNTaG93biIsIl9pZ25vcmVCYWNrZHJvcENsaWNrIiwiX2lzQW5pbWF0ZWQiLCJzaG93RXZlbnQiLCJzY3JvbGxCYXJIaWRlIiwiX2FkanVzdERpYWxvZyIsIl9zZXRFc2NhcGVFdmVudCIsIl9zZXRSZXNpemVFdmVudCIsIl9zaG93QmFja2Ryb3AiLCJfc2hvd0VsZW1lbnQiLCJfaGlkZU1vZGFsIiwiaHRtbEVsZW1lbnQiLCJoYW5kbGVVcGRhdGUiLCJtb2RhbEJvZHkiLCJfZW5mb3JjZUZvY3VzIiwiX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24iLCJfcmVzZXRBZGp1c3RtZW50cyIsInNjcm9sbEJhclJlc2V0IiwiY3VycmVudFRhcmdldCIsImlzTW9kYWxPdmVyZmxvd2luZyIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsIm92ZXJmbG93WSIsIm1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uIiwiZ2V0U2Nyb2xsQmFyV2lkdGgiLCJpc0JvZHlPdmVyZmxvd2luZyIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0Iiwic2Nyb2xsIiwiT2ZmY2FudmFzIiwiX2VuZm9yY2VGb2N1c09uRWxlbWVudCIsImJsdXIiLCJ1bmRlZmluZWQiLCJhbGxSZWFkeU9wZW4iLCJlbCIsInVyaUF0dHJzIiwiU0FGRV9VUkxfUEFUVEVSTiIsIkRBVEFfVVJMX1BBVFRFUk4iLCJhbGxvd2VkQXR0cmlidXRlIiwiYXR0ciIsImFsbG93ZWRBdHRyaWJ1dGVMaXN0IiwiYXR0ck5hbWUiLCJub2RlTmFtZSIsIm5vZGVWYWx1ZSIsInJlZ0V4cCIsImF0dHJSZWdleCIsInNhbml0aXplSHRtbCIsInVuc2FmZUh0bWwiLCJhbGxvd0xpc3QiLCJzYW5pdGl6ZUZuIiwiY3JlYXRlZERvY3VtZW50IiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiYWxsb3dsaXN0S2V5cyIsImVsZW1lbnRzIiwiZWxOYW1lIiwiYXR0cmlidXRlTGlzdCIsImFsbG93ZWRBdHRyaWJ1dGVzIiwiaW5uZXJIVE1MIiwiQlNDTFNfUFJFRklYX1JFR0VYIiwiRElTQUxMT1dFRF9BVFRSSUJVVEVTIiwiYW5pbWF0aW9uIiwidGVtcGxhdGUiLCJ0aXRsZSIsImRlbGF5IiwiaHRtbCIsImZhbGxiYWNrUGxhY2VtZW50cyIsImN1c3RvbUNsYXNzIiwic2FuaXRpemUiLCJBdHRhY2htZW50TWFwIiwiQVVUTyIsIlRPUCIsIlJJR0hUIiwiQk9UVE9NIiwiTEVGVCIsIioiLCJhIiwiYXJlYSIsImIiLCJiciIsImNvbCIsImNvZGUiLCJkaXYiLCJlbSIsImhyIiwiaDEiLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2IiwiaW1nIiwibGkiLCJvbCIsInAiLCJwcmUiLCJzIiwic21hbGwiLCJzcGFuIiwic3ViIiwic3VwIiwic3Ryb25nIiwidSIsInVsIiwiSElERSIsIkhJRERFTiIsIlNIT1ciLCJTSE9XTiIsIklOU0VSVEVEIiwiQ0xJQ0siLCJGT0NVU0lOIiwiRk9DVVNPVVQiLCJNT1VTRUVOVEVSIiwiTU9VU0VMRUFWRSIsIlRvb2x0aXAiLCJfaXNFbmFibGVkIiwiX3RpbWVvdXQiLCJfaG92ZXJTdGF0ZSIsIl9hY3RpdmVUcmlnZ2VyIiwidGlwIiwiX3NldExpc3RlbmVycyIsImVuYWJsZSIsImRpc2FibGUiLCJ0b2dnbGVFbmFibGVkIiwiX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldCIsIl9pc1dpdGhBY3RpdmVUcmlnZ2VyIiwiX2VudGVyIiwiX2xlYXZlIiwiZ2V0VGlwRWxlbWVudCIsIl9oaWRlTW9kYWxIYW5kbGVyIiwiaXNXaXRoQ29udGVudCIsInNoYWRvd1Jvb3QiLCJpc0luVGhlRG9tIiwib3duZXJEb2N1bWVudCIsInRpcElkIiwic2V0Q29udGVudCIsImF0dGFjaG1lbnQiLCJfZ2V0QXR0YWNobWVudCIsIl9hZGRBdHRhY2htZW50Q2xhc3MiLCJwcmV2SG92ZXJTdGF0ZSIsIl9jbGVhblRpcENsYXNzIiwiZ2V0VGl0bGUiLCJzZXRFbGVtZW50Q29udGVudCIsImNvbnRlbnQiLCJ0ZXh0Q29udGVudCIsInVwZGF0ZUF0dGFjaG1lbnQiLCJkYXRhS2V5IiwiX2dldERlbGVnYXRlQ29uZmlnIiwicGhhc2UiLCJfaGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlIiwib25GaXJzdFVwZGF0ZSIsImV2ZW50SW4iLCJldmVudE91dCIsIl9maXhUaXRsZSIsIm9yaWdpbmFsVGl0bGVUeXBlIiwiZGF0YUF0dHJpYnV0ZXMiLCJkYXRhQXR0ciIsInRhYkNsYXNzIiwidG9rZW4iLCJ0Q2xhc3MiLCJzdGF0ZSIsInBvcHBlciIsIlBvcG92ZXIiLCJfZ2V0Q29udGVudCIsIm1ldGhvZCIsIlNjcm9sbFNweSIsIl9zY3JvbGxFbGVtZW50IiwiX29mZnNldHMiLCJfdGFyZ2V0cyIsIl9hY3RpdmVUYXJnZXQiLCJfc2Nyb2xsSGVpZ2h0IiwiX3Byb2Nlc3MiLCJyZWZyZXNoIiwiYXV0b01ldGhvZCIsIm9mZnNldE1ldGhvZCIsIm9mZnNldEJhc2UiLCJfZ2V0U2Nyb2xsVG9wIiwiX2dldFNjcm9sbEhlaWdodCIsInRhcmdldFNlbGVjdG9yIiwidGFyZ2V0QkNSIiwiaGVpZ2h0IiwiaXRlbSIsInNvcnQiLCJwYWdlWU9mZnNldCIsIm1heCIsIl9nZXRPZmZzZXRIZWlnaHQiLCJpbm5lckhlaWdodCIsIm1heFNjcm9sbCIsIl9hY3RpdmF0ZSIsIl9jbGVhciIsInF1ZXJpZXMiLCJsaW5rIiwiam9pbiIsImxpc3RHcm91cCIsIm5hdkl0ZW0iLCJub2RlIiwic3B5IiwiVGFiIiwibGlzdEVsZW1lbnQiLCJpdGVtU2VsZWN0b3IiLCJoaWRlRXZlbnQiLCJjb21wbGV0ZSIsImFjdGl2ZSIsIl90cmFuc2l0aW9uQ29tcGxldGUiLCJkcm9wZG93bkNoaWxkIiwiZHJvcGRvd25FbGVtZW50IiwiZHJvcGRvd24iLCJhdXRvaGlkZSIsIlRvYXN0IiwiX2hhc01vdXNlSW50ZXJhY3Rpb24iLCJfaGFzS2V5Ym9hcmRJbnRlcmFjdGlvbiIsIl9jbGVhclRpbWVvdXQiLCJfbWF5YmVTY2hlZHVsZUhpZGUiLCJfb25JbnRlcmFjdGlvbiIsImlzSW50ZXJhY3RpbmciLCJidG5Db21tZW50IiwiY29tbWVudEZvcm0iLCJsb2FkaW5nU3Bpbm5lciIsInNlc3Npb25UcmlnZ2VyRm9jdXNTdG9yYWdlIiwic2Vzc2lvblN0b3JhZ2UiLCJORVdfQ09NTUVOVCIsImNvbW1lbnRfYm9keSIsInJlbmRlckNvbW1lbnRzIiwicG9zdENvbW1lbnQiLCJyZXNwb25zZSIsImZldGNoIiwiaGVhZGVycyIsIm1vZGUiLCJjcmVkZW50aWFscyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aW55bWNlIiwiZ2V0Q29udGVudCIsInBvc3RfaWQiLCJwb3N0SWQiLCJzdWJqZWN0X2lkIiwic3ViamVjdElkIiwib2siLCJqc29uIiwidGhlbiIsInJlcyIsImxvZyIsInNldEl0ZW0iLCJuZXdfY29tbWVudCIsImxvY2F0aW9uIiwiaHJlZiIsInVybCIsImNhdGNoIiwiZXJyIiwiZm9jdXNUb05ld0NvbW1lbnQiLCJjb21tZW50VG9Gb2N1cyIsImdldEl0ZW0iLCJjb21tZW50Qm9keUZvY3VzIiwiaGFzaCIsImNsZWFyIiwiY2hlY2tTbmlwcGV0Q29kZSIsImNvcHlDb2RlQnRuIiwic2V0UHJvcGVydHkiLCJjb3B5Q29kZSIsImluaXRpYWxpemVDb3B5Q29kZUJ0biIsInNuaXBwZXRDb250ZW50IiwiZHVtbXlUZXh0QXJlYSIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwiZmV0Y2hBbGxDb21tZW50Rm9yUG9zdCIsImNhY2hlIiwibWVzc2FnZSIsImVycm9yX21lc3NhZ2UiLCJsb2dvIiwic3JjIiwibG9nb0ltYWdlIiwibG9hZGluZ0NvbnRhaW5lciIsImJ0blNpZ25JbiIsInJlbWVtYmVyTWUiLCJmb3JtTG9naW4iLCJpbnB1dEVtYWlsIiwiaW5wdXRQYXNzd29yZCIsImxvZ2luU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsInVzZXJfZW1haWwiLCJyZW1lbWJlck1lU3RhdGUiLCJjaGVja2VkIiwic2V0UmVtZW1iZXJNZSIsInNlbmRMb2dpblJlcXVlc3QiLCJyZW1lbWJlcl9tZSIsImVtYWlsIiwicGFzc3dvcmQiLCJzdGF0dXMiLCJyZWxvYWQiLCJhdXRoZW50aWNhdGVfdXJsIiwibG9naW5DcmVkZW50aWFscyIsIm5hdlRvZ2dsZXIiLCJuYXZiYXJDb250YWluZXIiLCJuYXZJc09wZW4iLCJ0b2dnbGVPcHRpb25CdG4iLCJvcHRpb25Db250YWluZXIiLCJkZWxldGVPcHRpb25CdG4iLCJkZWxldGVEaWFsb2ciLCJkZWxldGVEaWFsb2dDYW5jZWwiLCJkZWxldGVEaWFsb2dDb25maXJtIiwicGluUG9zdCIsInVuUGluUG9zdCIsIm9wdGlvbklzT3BlbiIsInRvZ2dsZU9wdGlvbnMiLCJkZWxldGVQb3N0T3BlbkRpYWxvZyIsImNsb3NlRGlhbG9nIiwiY29uZmlybURlbGV0ZVBvc3QiLCJkYXRhUG9zdElkIiwiZGVsZXRlT25lUG9zdCIsIlVSTF9ERUxFVEVfUE9TVCIsImluaXRpYWxpemVQaW5Qb3N0IiwiaW5pdGlhbGl6ZVVuUGluUG9zdCIsInNldElzUGluUG9zdCIsInBpbk9wdGlvbkNvbmZpZyIsInNldFBpblBvc3QiLCJVUkxfUElOX1BPU1QiLCJwaW5fcG9zdCIsImRlbGV0ZUJ1dHRvbiIsImRhdGFQb3N0SWRfZGVsZXRlIiwidXBkYXRlRm9ybSIsInVwZGF0ZVRpdGxlIiwidXBkYXRlVGFnIiwidXBkYXRlQm9keSIsInVwZGF0ZUJ0biIsImRhdGFQb3N0SWRfdXBkYXRlIiwicG9zdFVwZGF0ZWRDb250ZW50IiwicG9zdF90aXRsZSIsInBvc3RfdGFnIiwicG9zdF9ib2R5IiwidXBkYXRlT25lUG9zdCIsInJlZ1VzZXJOYW1lIiwicmVnVXNlckVtYWlsIiwicmVnVXNlclBhc3N3b3JkIiwicmVnVXNlckNvbmZpcm1QYXNzd29yZCIsImZvcm1SZWdpc3RlciIsInBhc3N3b3JkQ2hlY2tlciIsImNvbmZpcm1QYXNzd29yZENoZWNrZXIiLCJjaGVja0ljb24iLCJzaG93UGFzc3dvcmQiLCJTRVNTSU9OX1NUT1JBR0VfTkFNRSIsIlNFU1NJT05fU1RPUkFHRV9FTUFJTCIsInJlZ2lzdGVyU2Vzc2lvblN0b3JhZ2UiLCJyZWNvdmVyQ3JlZGVudGlhbHMiLCJ1c2VyX25hbWUiLCJmb3JFbWFpbExvY2FsU3RvcmFnZSIsInBhc3N3b3JkRmllbGQiLCJzdWJqZWN0RHJvcGRvd24iLCJzdWJqZWN0RHJvcGRvd25Hcm91cCIsInN1YmplY3REcm9wZG93bkJ0biIsInN1YmplY3REcm9wZG93bkljb24iLCJzdWJqZWN0RHJvcGRvd25PcGVuIiwiYXJyYXlJbmRleEZpbmRlciIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErRDtBQUNOO0FBQ1E7QUFDSjtBQUNFO0FBQ1I7QUFDWjtBQUNrQjtBQUNsQjtBQUNnQjtBQUNWO0FBQ007QUFDRDtBQUNwQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFFQUFxRSxhQUFhO0FBQ2xGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1Asb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQSxxQkFBcUIsbUVBQVMsY0FBYyx3RUFBaUIseUNBQXlDLHdFQUFpQjtBQUN2SCxrQkFBa0Isd0VBQWlCO0FBQ25DLFVBQVU7QUFDVjs7QUFFQSwrQkFBK0IsaUVBQWMsQ0FBQyw4REFBVyx3REFBd0Q7O0FBRWpIO0FBQ0E7QUFDQSxTQUFTLEVBQUU7QUFDWDs7QUFFQSxZQUFZLElBQXFDO0FBQ2pELDBCQUEwQiwyREFBUTtBQUNsQztBQUNBO0FBQ0EsV0FBVztBQUNYLFVBQVUsb0VBQWlCOztBQUUzQixjQUFjLG1FQUFnQiw4QkFBOEIsMkNBQUk7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0MsdUVBQWdCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDs7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V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7Ozs7Ozs7O0FDZkE7QUFDQWlwQixtQkFBTyxDQUFDLGtEQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsd0NBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyw4Q0FBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLGtFQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsNEVBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQywwREFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLDhEQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsc0RBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyxnREFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLDRDQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsd0ZBQUQsQ0FBUCxDLENBQ0E7O0FBRUE7OztBQUNBQSxtQkFBTyxDQUFDLG1GQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsdUNBQUQsQ0FBUCxDIiwiZmlsZSI6Im1haW4uY29tcGlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0Q29tcG9zaXRlUmVjdCBmcm9tIFwiLi9kb20tdXRpbHMvZ2V0Q29tcG9zaXRlUmVjdC5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBsaXN0U2Nyb2xsUGFyZW50cyBmcm9tIFwiLi9kb20tdXRpbHMvbGlzdFNjcm9sbFBhcmVudHMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBvcmRlck1vZGlmaWVycyBmcm9tIFwiLi91dGlscy9vcmRlck1vZGlmaWVycy5qc1wiO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gXCIuL3V0aWxzL2RlYm91bmNlLmpzXCI7XG5pbXBvcnQgdmFsaWRhdGVNb2RpZmllcnMgZnJvbSBcIi4vdXRpbHMvdmFsaWRhdGVNb2RpZmllcnMuanNcIjtcbmltcG9ydCB1bmlxdWVCeSBmcm9tIFwiLi91dGlscy91bmlxdWVCeS5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IG1lcmdlQnlOYW1lIGZyb20gXCIuL3V0aWxzL21lcmdlQnlOYW1lLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgeyBhdXRvIH0gZnJvbSBcIi4vZW51bXMuanNcIjtcbnZhciBJTlZBTElEX0VMRU1FTlRfRVJST1IgPSAnUG9wcGVyOiBJbnZhbGlkIHJlZmVyZW5jZSBvciBwb3BwZXIgYXJndW1lbnQgcHJvdmlkZWQuIFRoZXkgbXVzdCBiZSBlaXRoZXIgYSBET00gZWxlbWVudCBvciB2aXJ0dWFsIGVsZW1lbnQuJztcbnZhciBJTkZJTklURV9MT09QX0VSUk9SID0gJ1BvcHBlcjogQW4gaW5maW5pdGUgbG9vcCBpbiB0aGUgbW9kaWZpZXJzIGN5Y2xlIGhhcyBiZWVuIGRldGVjdGVkISBUaGUgY3ljbGUgaGFzIGJlZW4gaW50ZXJydXB0ZWQgdG8gcHJldmVudCBhIGJyb3dzZXIgY3Jhc2guJztcbnZhciBERUZBVUxUX09QVElPTlMgPSB7XG4gIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gIG1vZGlmaWVyczogW10sXG4gIHN0cmF0ZWd5OiAnYWJzb2x1dGUnXG59O1xuXG5mdW5jdGlvbiBhcmVWYWxpZEVsZW1lbnRzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuICFhcmdzLnNvbWUoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gIShlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9PT0gJ2Z1bmN0aW9uJyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wcGVyR2VuZXJhdG9yKGdlbmVyYXRvck9wdGlvbnMpIHtcbiAgaWYgKGdlbmVyYXRvck9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIGdlbmVyYXRvck9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfZ2VuZXJhdG9yT3B0aW9ucyA9IGdlbmVyYXRvck9wdGlvbnMsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0TW9kaWZpZXJzLFxuICAgICAgZGVmYXVsdE1vZGlmaWVycyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9PT0gdm9pZCAwID8gW10gOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICBkZWZhdWx0T3B0aW9ucyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPT09IHZvaWQgMCA/IERFRkFVTFRfT1BUSU9OUyA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZjI7XG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVQb3BwZXIocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG4gICAgfVxuXG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgIG9yZGVyZWRNb2RpZmllcnM6IFtdLFxuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCBkZWZhdWx0T3B0aW9ucyksXG4gICAgICBtb2RpZmllcnNEYXRhOiB7fSxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlLFxuICAgICAgICBwb3BwZXI6IHBvcHBlclxuICAgICAgfSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH07XG4gICAgdmFyIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB2YXIgaXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB2YXIgaW5zdGFuY2UgPSB7XG4gICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICBzZXRPcHRpb25zOiBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBzdGF0ZS5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIHN0YXRlLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICBzdGF0ZS5zY3JvbGxQYXJlbnRzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogaXNFbGVtZW50KHJlZmVyZW5jZSkgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UpIDogcmVmZXJlbmNlLmNvbnRleHRFbGVtZW50ID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlLmNvbnRleHRFbGVtZW50KSA6IFtdLFxuICAgICAgICAgIHBvcHBlcjogbGlzdFNjcm9sbFBhcmVudHMocG9wcGVyKVxuICAgICAgICB9OyAvLyBPcmRlcnMgdGhlIG1vZGlmaWVycyBiYXNlZCBvbiB0aGVpciBkZXBlbmRlbmNpZXMgYW5kIGBwaGFzZWBcbiAgICAgICAgLy8gcHJvcGVydGllc1xuXG4gICAgICAgIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJNb2RpZmllcnMobWVyZ2VCeU5hbWUoW10uY29uY2F0KGRlZmF1bHRNb2RpZmllcnMsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSkpOyAvLyBTdHJpcCBvdXQgZGlzYWJsZWQgbW9kaWZpZXJzXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgcmV0dXJuIG0uZW5hYmxlZDtcbiAgICAgICAgfSk7IC8vIFZhbGlkYXRlIHRoZSBwcm92aWRlZCBtb2RpZmllcnMgc28gdGhhdCB0aGUgY29uc3VtZXIgd2lsbCBnZXQgd2FybmVkXG4gICAgICAgIC8vIGlmIG9uZSBvZiB0aGUgbW9kaWZpZXJzIGlzIGludmFsaWQgZm9yIGFueSByZWFzb25cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgdmFyIG1vZGlmaWVycyA9IHVuaXF1ZUJ5KFtdLmNvbmNhdChvcmRlcmVkTW9kaWZpZXJzLCBzdGF0ZS5vcHRpb25zLm1vZGlmaWVycyksIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IF9yZWYubmFtZTtcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhbGlkYXRlTW9kaWZpZXJzKG1vZGlmaWVycyk7XG5cbiAgICAgICAgICBpZiAoZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5vcHRpb25zLnBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICAgICAgICAgIHZhciBmbGlwTW9kaWZpZXIgPSBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZpbmQoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgICAgIHZhciBuYW1lID0gX3JlZjIubmFtZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5hbWUgPT09ICdmbGlwJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIWZsaXBNb2RpZmllcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImF1dG9cIiBwbGFjZW1lbnRzIHJlcXVpcmUgdGhlIFwiZmxpcFwiIG1vZGlmaWVyIGJlJywgJ3ByZXNlbnQgYW5kIGVuYWJsZWQgdG8gd29yay4nXS5qb2luKCcgJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUocG9wcGVyKSxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luVG9wLFxuICAgICAgICAgICAgICBtYXJnaW5SaWdodCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpblJpZ2h0LFxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b20gPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5Cb3R0b20sXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5MZWZ0OyAvLyBXZSBubyBsb25nZXIgdGFrZSBpbnRvIGFjY291bnQgYG1hcmdpbnNgIG9uIHRoZSBwb3BwZXIsIGFuZCBpdCBjYW5cbiAgICAgICAgICAvLyBjYXVzZSBidWdzIHdpdGggcG9zaXRpb25pbmcsIHNvIHdlJ2xsIHdhcm4gdGhlIGNvbnN1bWVyXG5cblxuICAgICAgICAgIGlmIChbbWFyZ2luVG9wLCBtYXJnaW5SaWdodCwgbWFyZ2luQm90dG9tLCBtYXJnaW5MZWZ0XS5zb21lKGZ1bmN0aW9uIChtYXJnaW4pIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KG1hcmdpbik7XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihbJ1BvcHBlcjogQ1NTIFwibWFyZ2luXCIgc3R5bGVzIGNhbm5vdCBiZSB1c2VkIHRvIGFwcGx5IHBhZGRpbmcnLCAnYmV0d2VlbiB0aGUgcG9wcGVyIGFuZCBpdHMgcmVmZXJlbmNlIGVsZW1lbnQgb3IgYm91bmRhcnkuJywgJ1RvIHJlcGxpY2F0ZSBtYXJnaW4sIHVzZSB0aGUgYG9mZnNldGAgbW9kaWZpZXIsIGFzIHdlbGwgYXMnLCAndGhlIGBwYWRkaW5nYCBvcHRpb24gaW4gdGhlIGBwcmV2ZW50T3ZlcmZsb3dgIGFuZCBgZmxpcGAnLCAnbW9kaWZpZXJzLiddLmpvaW4oJyAnKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcnVuTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS51cGRhdGUoKTtcbiAgICAgIH0sXG4gICAgICAvLyBTeW5jIHVwZGF0ZSDigJMgaXQgd2lsbCBhbHdheXMgYmUgZXhlY3V0ZWQsIGV2ZW4gaWYgbm90IG5lY2Vzc2FyeS4gVGhpc1xuICAgICAgLy8gaXMgdXNlZnVsIGZvciBsb3cgZnJlcXVlbmN5IHVwZGF0ZXMgd2hlcmUgc3luYyBiZWhhdmlvciBzaW1wbGlmaWVzIHRoZVxuICAgICAgLy8gbG9naWMuXG4gICAgICAvLyBGb3IgaGlnaCBmcmVxdWVuY3kgdXBkYXRlcyAoZS5nLiBgcmVzaXplYCBhbmQgYHNjcm9sbGAgZXZlbnRzKSwgYWx3YXlzXG4gICAgICAvLyBwcmVmZXIgdGhlIGFzeW5jIFBvcHBlciN1cGRhdGUgbWV0aG9kXG4gICAgICBmb3JjZVVwZGF0ZTogZnVuY3Rpb24gZm9yY2VVcGRhdGUoKSB7XG4gICAgICAgIGlmIChpc0Rlc3Ryb3llZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfc3RhdGUkZWxlbWVudHMgPSBzdGF0ZS5lbGVtZW50cyxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IF9zdGF0ZSRlbGVtZW50cy5yZWZlcmVuY2UsXG4gICAgICAgICAgICBwb3BwZXIgPSBfc3RhdGUkZWxlbWVudHMucG9wcGVyOyAvLyBEb24ndCBwcm9jZWVkIGlmIGByZWZlcmVuY2VgIG9yIGBwb3BwZXJgIGFyZSBub3QgdmFsaWQgZWxlbWVudHNcbiAgICAgICAgLy8gYW55bW9yZVxuXG4gICAgICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKElOVkFMSURfRUxFTUVOVF9FUlJPUik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIFN0b3JlIHRoZSByZWZlcmVuY2UgYW5kIHBvcHBlciByZWN0cyB0byBiZSByZWFkIGJ5IG1vZGlmaWVyc1xuXG5cbiAgICAgICAgc3RhdGUucmVjdHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBnZXRDb21wb3NpdGVSZWN0KHJlZmVyZW5jZSwgZ2V0T2Zmc2V0UGFyZW50KHBvcHBlciksIHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCcpLFxuICAgICAgICAgIHBvcHBlcjogZ2V0TGF5b3V0UmVjdChwb3BwZXIpXG4gICAgICAgIH07IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIHJlc2V0IHRoZSBjdXJyZW50IHVwZGF0ZSBjeWNsZS4gVGhlXG4gICAgICAgIC8vIG1vc3QgY29tbW9uIHVzZSBjYXNlIGZvciB0aGlzIGlzIHRoZSBgZmxpcGAgbW9kaWZpZXIgY2hhbmdpbmcgdGhlXG4gICAgICAgIC8vIHBsYWNlbWVudCwgd2hpY2ggdGhlbiBuZWVkcyB0byByZS1ydW4gYWxsIHRoZSBtb2RpZmllcnMsIGJlY2F1c2UgdGhlXG4gICAgICAgIC8vIGxvZ2ljIHdhcyBwcmV2aW91c2x5IHJhbiBmb3IgdGhlIHByZXZpb3VzIHBsYWNlbWVudCBhbmQgaXMgdGhlcmVmb3JlXG4gICAgICAgIC8vIHN0YWxlL2luY29ycmVjdFxuXG4gICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50OyAvLyBPbiBlYWNoIHVwZGF0ZSBjeWNsZSwgdGhlIGBtb2RpZmllcnNEYXRhYCBwcm9wZXJ0eSBmb3IgZWFjaCBtb2RpZmllclxuICAgICAgICAvLyBpcyBmaWxsZWQgd2l0aCB0aGUgaW5pdGlhbCBkYXRhIHNwZWNpZmllZCBieSB0aGUgbW9kaWZpZXIuIFRoaXMgbWVhbnNcbiAgICAgICAgLy8gaXQgZG9lc24ndCBwZXJzaXN0IGFuZCBpcyBmcmVzaCBvbiBlYWNoIHVwZGF0ZS5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHBlcnNpc3RlbnQgZGF0YSwgdXNlIGAke25hbWV9I3BlcnNpc3RlbnRgXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgICAgIHJldHVybiBzdGF0ZS5tb2RpZmllcnNEYXRhW21vZGlmaWVyLm5hbWVdID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kaWZpZXIuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgX19kZWJ1Z19sb29wc19fID0gMDtcblxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBfX2RlYnVnX2xvb3BzX18gKz0gMTtcblxuICAgICAgICAgICAgaWYgKF9fZGVidWdfbG9vcHNfXyA+IDEwMCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKElORklOSVRFX0xPT1BfRVJST1IpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3RhdGUucmVzZXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICBpbmRleCA9IC0xO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZSA9IHN0YXRlLm9yZGVyZWRNb2RpZmllcnNbaW5kZXhdLFxuICAgICAgICAgICAgICBmbiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5mbixcbiAgICAgICAgICAgICAgX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5vcHRpb25zLFxuICAgICAgICAgICAgICBfb3B0aW9ucyA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPT09IHZvaWQgMCA/IHt9IDogX3N0YXRlJG9yZGVyZWRNb2RpZmllMixcbiAgICAgICAgICAgICAgbmFtZSA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5uYW1lO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc3RhdGUgPSBmbih7XG4gICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgICAgb3B0aW9uczogX29wdGlvbnMsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZVxuICAgICAgICAgICAgfSkgfHwgc3RhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gQXN5bmMgYW5kIG9wdGltaXN0aWNhbGx5IG9wdGltaXplZCB1cGRhdGUg4oCTIGl0IHdpbGwgbm90IGJlIGV4ZWN1dGVkIGlmXG4gICAgICAvLyBub3QgbmVjZXNzYXJ5IChkZWJvdW5jZWQgdG8gcnVuIGF0IG1vc3Qgb25jZS1wZXItdGljaylcbiAgICAgIHVwZGF0ZTogZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICBpbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgIHJlc29sdmUoc3RhdGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBpc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihJTlZBTElEX0VMRU1FTlRfRVJST1IpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgaW5zdGFuY2Uuc2V0T3B0aW9ucyhvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgaWYgKCFpc0Rlc3Ryb3llZCAmJiBvcHRpb25zLm9uRmlyc3RVcGRhdGUpIHtcbiAgICAgICAgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9KTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gZXhlY3V0ZSBhcmJpdHJhcnkgY29kZSBiZWZvcmUgdGhlIGZpcnN0XG4gICAgLy8gdXBkYXRlIGN5Y2xlIHJ1bnMuIFRoZXkgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgdXBkYXRlXG4gICAgLy8gY3ljbGUuIFRoaXMgaXMgdXNlZnVsIHdoZW4gYSBtb2RpZmllciBhZGRzIHNvbWUgcGVyc2lzdGVudCBkYXRhIHRoYXRcbiAgICAvLyBvdGhlciBtb2RpZmllcnMgbmVlZCB0byB1c2UsIGJ1dCB0aGUgbW9kaWZpZXIgaXMgcnVuIGFmdGVyIHRoZSBkZXBlbmRlbnRcbiAgICAvLyBvbmUuXG5cbiAgICBmdW5jdGlvbiBydW5Nb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgIHZhciBuYW1lID0gX3JlZjMubmFtZSxcbiAgICAgICAgICAgIF9yZWYzJG9wdGlvbnMgPSBfcmVmMy5vcHRpb25zLFxuICAgICAgICAgICAgb3B0aW9ucyA9IF9yZWYzJG9wdGlvbnMgPT09IHZvaWQgMCA/IHt9IDogX3JlZjMkb3B0aW9ucyxcbiAgICAgICAgICAgIGVmZmVjdCA9IF9yZWYzLmVmZmVjdDtcblxuICAgICAgICBpZiAodHlwZW9mIGVmZmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhciBjbGVhbnVwRm4gPSBlZmZlY3Qoe1xuICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBub29wRm4gPSBmdW5jdGlvbiBub29wRm4oKSB7fTtcblxuICAgICAgICAgIGVmZmVjdENsZWFudXBGbnMucHVzaChjbGVhbnVwRm4gfHwgbm9vcEZuKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgICB9KTtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH07XG59XG5leHBvcnQgdmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3IoKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBkZXRlY3RPdmVyZmxvdyB9OyIsImltcG9ydCB7IGlzU2hhZG93Um9vdCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhaW5zKHBhcmVudCwgY2hpbGQpIHtcbiAgdmFyIHJvb3ROb2RlID0gY2hpbGQuZ2V0Um9vdE5vZGUgJiYgY2hpbGQuZ2V0Um9vdE5vZGUoKTsgLy8gRmlyc3QsIGF0dGVtcHQgd2l0aCBmYXN0ZXIgbmF0aXZlIG1ldGhvZFxuXG4gIGlmIChwYXJlbnQuY29udGFpbnMoY2hpbGQpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gdGhlbiBmYWxsYmFjayB0byBjdXN0b20gaW1wbGVtZW50YXRpb24gd2l0aCBTaGFkb3cgRE9NIHN1cHBvcnRcbiAgZWxzZSBpZiAocm9vdE5vZGUgJiYgaXNTaGFkb3dSb290KHJvb3ROb2RlKSkge1xuICAgICAgdmFyIG5leHQgPSBjaGlsZDtcblxuICAgICAgZG8ge1xuICAgICAgICBpZiAobmV4dCAmJiBwYXJlbnQuaXNTYW1lTm9kZShuZXh0KSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXTogbmVlZCBhIGJldHRlciB3YXkgdG8gaGFuZGxlIHRoaXMuLi5cblxuXG4gICAgICAgIG5leHQgPSBuZXh0LnBhcmVudE5vZGUgfHwgbmV4dC5ob3N0O1xuICAgICAgfSB3aGlsZSAobmV4dCk7XG4gICAgfSAvLyBHaXZlIHVwLCB0aGUgcmVzdWx0IGlzIGZhbHNlXG5cblxuICByZXR1cm4gZmFsc2U7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHQsXG4gICAgdG9wOiByZWN0LnRvcCxcbiAgICByaWdodDogcmVjdC5yaWdodCxcbiAgICBib3R0b206IHJlY3QuYm90dG9tLFxuICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICB4OiByZWN0LmxlZnQsXG4gICAgeTogcmVjdC50b3BcbiAgfTtcbn0iLCJpbXBvcnQgeyB2aWV3cG9ydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldFZpZXdwb3J0UmVjdCBmcm9tIFwiLi9nZXRWaWV3cG9ydFJlY3QuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudFJlY3QgZnJvbSBcIi4vZ2V0RG9jdW1lbnRSZWN0LmpzXCI7XG5pbXBvcnQgbGlzdFNjcm9sbFBhcmVudHMgZnJvbSBcIi4vbGlzdFNjcm9sbFBhcmVudHMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4vZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IHsgaXNFbGVtZW50LCBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBjb250YWlucyBmcm9tIFwiLi9jb250YWlucy5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgcmVjdFRvQ2xpZW50UmVjdCBmcm9tIFwiLi4vdXRpbHMvcmVjdFRvQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IHsgbWF4LCBtaW4gfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuXG5mdW5jdGlvbiBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpO1xuICByZWN0LnRvcCA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRUb3A7XG4gIHJlY3QubGVmdCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50TGVmdDtcbiAgcmVjdC5ib3R0b20gPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnJpZ2h0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgcmVjdC53aWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3QuaGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIHJlY3QueCA9IHJlY3QubGVmdDtcbiAgcmVjdC55ID0gcmVjdC50b3A7XG4gIHJldHVybiByZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCkge1xuICByZXR1cm4gY2xpcHBpbmdQYXJlbnQgPT09IHZpZXdwb3J0ID8gcmVjdFRvQ2xpZW50UmVjdChnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCkpIDogaXNIVE1MRWxlbWVudChjbGlwcGluZ1BhcmVudCkgPyBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChjbGlwcGluZ1BhcmVudCkgOiByZWN0VG9DbGllbnRSZWN0KGdldERvY3VtZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpKTtcbn0gLy8gQSBcImNsaXBwaW5nIHBhcmVudFwiIGlzIGFuIG92ZXJmbG93YWJsZSBjb250YWluZXIgd2l0aCB0aGUgY2hhcmFjdGVyaXN0aWMgb2Zcbi8vIGNsaXBwaW5nIChvciBoaWRpbmcpIG92ZXJmbG93aW5nIGVsZW1lbnRzIHdpdGggYSBwb3NpdGlvbiBkaWZmZXJlbnQgZnJvbVxuLy8gYGluaXRpYWxgXG5cblxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIHtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xuICB2YXIgY2FuRXNjYXBlQ2xpcHBpbmcgPSBbJ2Fic29sdXRlJywgJ2ZpeGVkJ10uaW5kZXhPZihnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uKSA+PSAwO1xuICB2YXIgY2xpcHBlckVsZW1lbnQgPSBjYW5Fc2NhcGVDbGlwcGluZyAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpID8gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIDogZWxlbWVudDtcblxuICBpZiAoIWlzRWxlbWVudChjbGlwcGVyRWxlbWVudCkpIHtcbiAgICByZXR1cm4gW107XG4gIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzE0MTRcblxuXG4gIHJldHVybiBjbGlwcGluZ1BhcmVudHMuZmlsdGVyKGZ1bmN0aW9uIChjbGlwcGluZ1BhcmVudCkge1xuICAgIHJldHVybiBpc0VsZW1lbnQoY2xpcHBpbmdQYXJlbnQpICYmIGNvbnRhaW5zKGNsaXBwaW5nUGFyZW50LCBjbGlwcGVyRWxlbWVudCkgJiYgZ2V0Tm9kZU5hbWUoY2xpcHBpbmdQYXJlbnQpICE9PSAnYm9keSc7XG4gIH0pO1xufSAvLyBHZXRzIHRoZSBtYXhpbXVtIGFyZWEgdGhhdCB0aGUgZWxlbWVudCBpcyB2aXNpYmxlIGluIGR1ZSB0byBhbnkgbnVtYmVyIG9mXG4vLyBjbGlwcGluZyBwYXJlbnRzXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q2xpcHBpbmdSZWN0KGVsZW1lbnQsIGJvdW5kYXJ5LCByb290Qm91bmRhcnkpIHtcbiAgdmFyIG1haW5DbGlwcGluZ1BhcmVudHMgPSBib3VuZGFyeSA9PT0gJ2NsaXBwaW5nUGFyZW50cycgPyBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkgOiBbXS5jb25jYXQoYm91bmRhcnkpO1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gW10uY29uY2F0KG1haW5DbGlwcGluZ1BhcmVudHMsIFtyb290Qm91bmRhcnldKTtcbiAgdmFyIGZpcnN0Q2xpcHBpbmdQYXJlbnQgPSBjbGlwcGluZ1BhcmVudHNbMF07XG4gIHZhciBjbGlwcGluZ1JlY3QgPSBjbGlwcGluZ1BhcmVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2NSZWN0LCBjbGlwcGluZ1BhcmVudCkge1xuICAgIHZhciByZWN0ID0gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQpO1xuICAgIGFjY1JlY3QudG9wID0gbWF4KHJlY3QudG9wLCBhY2NSZWN0LnRvcCk7XG4gICAgYWNjUmVjdC5yaWdodCA9IG1pbihyZWN0LnJpZ2h0LCBhY2NSZWN0LnJpZ2h0KTtcbiAgICBhY2NSZWN0LmJvdHRvbSA9IG1pbihyZWN0LmJvdHRvbSwgYWNjUmVjdC5ib3R0b20pO1xuICAgIGFjY1JlY3QubGVmdCA9IG1heChyZWN0LmxlZnQsIGFjY1JlY3QubGVmdCk7XG4gICAgcmV0dXJuIGFjY1JlY3Q7XG4gIH0sIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGZpcnN0Q2xpcHBpbmdQYXJlbnQpKTtcbiAgY2xpcHBpbmdSZWN0LndpZHRoID0gY2xpcHBpbmdSZWN0LnJpZ2h0IC0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC5oZWlnaHQgPSBjbGlwcGluZ1JlY3QuYm90dG9tIC0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgY2xpcHBpbmdSZWN0LnggPSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LnkgPSBjbGlwcGluZ1JlY3QudG9wO1xuICByZXR1cm4gY2xpcHBpbmdSZWN0O1xufSIsImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZVNjcm9sbCBmcm9tIFwiLi9nZXROb2RlU2Nyb2xsLmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7IC8vIFJldHVybnMgdGhlIGNvbXBvc2l0ZSByZWN0IG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIG9mZnNldFBhcmVudC5cbi8vIENvbXBvc2l0ZSBtZWFucyBpdCB0YWtlcyBpbnRvIGFjY291bnQgdHJhbnNmb3JtcyBhcyB3ZWxsIGFzIGxheW91dC5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29tcG9zaXRlUmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCwgb2Zmc2V0UGFyZW50LCBpc0ZpeGVkKSB7XG4gIGlmIChpc0ZpeGVkID09PSB2b2lkIDApIHtcbiAgICBpc0ZpeGVkID0gZmFsc2U7XG4gIH1cblxuICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50KTtcbiAgdmFyIGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgc2Nyb2xsID0ge1xuICAgIHNjcm9sbExlZnQ6IDAsXG4gICAgc2Nyb2xsVG9wOiAwXG4gIH07XG4gIHZhciBvZmZzZXRzID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgIWlzRml4ZWQpIHtcbiAgICBpZiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSAhPT0gJ2JvZHknIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTA3OFxuICAgIGlzU2Nyb2xsUGFyZW50KGRvY3VtZW50RWxlbWVudCkpIHtcbiAgICAgIHNjcm9sbCA9IGdldE5vZGVTY3JvbGwob2Zmc2V0UGFyZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICBvZmZzZXRzID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCk7XG4gICAgICBvZmZzZXRzLnggKz0gb2Zmc2V0UGFyZW50LmNsaWVudExlZnQ7XG4gICAgICBvZmZzZXRzLnkgKz0gb2Zmc2V0UGFyZW50LmNsaWVudFRvcDtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgb2Zmc2V0cy54ID0gZ2V0V2luZG93U2Nyb2xsQmFyWChkb2N1bWVudEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogcmVjdC5sZWZ0ICsgc2Nyb2xsLnNjcm9sbExlZnQgLSBvZmZzZXRzLngsXG4gICAgeTogcmVjdC50b3AgKyBzY3JvbGwuc2Nyb2xsVG9wIC0gb2Zmc2V0cy55LFxuICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHRcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSB7XG4gIHJldHVybiBnZXRXaW5kb3coZWxlbWVudCkuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbn0iLCJpbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkge1xuICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gIHJldHVybiAoKGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQub3duZXJEb2N1bWVudCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICBlbGVtZW50LmRvY3VtZW50KSB8fCB3aW5kb3cuZG9jdW1lbnQpLmRvY3VtZW50RWxlbWVudDtcbn0iLCJpbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmltcG9ydCB7IG1heCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7IC8vIEdldHMgdGhlIGVudGlyZSBzaXplIG9mIHRoZSBzY3JvbGxhYmxlIGRvY3VtZW50IGFyZWEsIGV2ZW4gZXh0ZW5kaW5nIG91dHNpZGVcbi8vIG9mIHRoZSBgPGh0bWw+YCBhbmQgYDxib2R5PmAgcmVjdCBib3VuZHMgaWYgaG9yaXpvbnRhbGx5IHNjcm9sbGFibGVcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RG9jdW1lbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHdpblNjcm9sbCA9IGdldFdpbmRvd1Njcm9sbChlbGVtZW50KTtcbiAgdmFyIGJvZHkgPSAoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHk7XG4gIHZhciB3aWR0aCA9IG1heChodG1sLnNjcm9sbFdpZHRoLCBodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5zY3JvbGxXaWR0aCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCk7XG4gIHZhciBoZWlnaHQgPSBtYXgoaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0LCBib2R5ID8gYm9keS5zY3JvbGxIZWlnaHQgOiAwLCBib2R5ID8gYm9keS5jbGllbnRIZWlnaHQgOiAwKTtcbiAgdmFyIHggPSAtd2luU2Nyb2xsLnNjcm9sbExlZnQgKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpO1xuICB2YXIgeSA9IC13aW5TY3JvbGwuc2Nyb2xsVG9wO1xuXG4gIGlmIChnZXRDb21wdXRlZFN0eWxlKGJvZHkgfHwgaHRtbCkuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgIHggKz0gbWF4KGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCkgLSB3aWR0aDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHg6IHgsXG4gICAgeTogeVxuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEhUTUxFbGVtZW50U2Nyb2xsKGVsZW1lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBlbGVtZW50LnNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wOiBlbGVtZW50LnNjcm9sbFRvcFxuICB9O1xufSIsImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7IC8vIFJldHVybnMgdGhlIGxheW91dCByZWN0IG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gaXRzIG9mZnNldFBhcmVudC4gTGF5b3V0XG4vLyBtZWFucyBpdCBkb2Vzbid0IHRha2UgaW50byBhY2NvdW50IHRyYW5zZm9ybXMuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldExheW91dFJlY3QoZWxlbWVudCkge1xuICB2YXIgY2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTsgLy8gVXNlIHRoZSBjbGllbnRSZWN0IHNpemVzIGlmIGl0J3Mgbm90IGJlZW4gdHJhbnNmb3JtZWQuXG4gIC8vIEZpeGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTIyM1xuXG4gIHZhciB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIHZhciBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC53aWR0aCAtIHdpZHRoKSA8PSAxKSB7XG4gICAgd2lkdGggPSBjbGllbnRSZWN0LndpZHRoO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3QuaGVpZ2h0IC0gaGVpZ2h0KSA8PSAxKSB7XG4gICAgaGVpZ2h0ID0gY2xpZW50UmVjdC5oZWlnaHQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IGVsZW1lbnQub2Zmc2V0TGVmdCxcbiAgICB5OiBlbGVtZW50Lm9mZnNldFRvcCxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHRcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXROb2RlTmFtZShlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50ID8gKGVsZW1lbnQubm9kZU5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xufSIsImltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRIVE1MRWxlbWVudFNjcm9sbCBmcm9tIFwiLi9nZXRIVE1MRWxlbWVudFNjcm9sbC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Tm9kZVNjcm9sbChub2RlKSB7XG4gIGlmIChub2RlID09PSBnZXRXaW5kb3cobm9kZSkgfHwgIWlzSFRNTEVsZW1lbnQobm9kZSkpIHtcbiAgICByZXR1cm4gZ2V0V2luZG93U2Nyb2xsKG5vZGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZXRIVE1MRWxlbWVudFNjcm9sbChub2RlKTtcbiAgfVxufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgaXNUYWJsZUVsZW1lbnQgZnJvbSBcIi4vaXNUYWJsZUVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcblxuZnVuY3Rpb24gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzgzN1xuICBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG59IC8vIGAub2Zmc2V0UGFyZW50YCByZXBvcnRzIGBudWxsYCBmb3IgZml4ZWQgZWxlbWVudHMsIHdoaWxlIGFic29sdXRlIGVsZW1lbnRzXG4vLyByZXR1cm4gdGhlIGNvbnRhaW5pbmcgYmxvY2tcblxuXG5mdW5jdGlvbiBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkge1xuICB2YXIgaXNGaXJlZm94ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSAhPT0gLTE7XG4gIHZhciBpc0lFID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50JykgIT09IC0xO1xuXG4gIGlmIChpc0lFICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAvLyBJbiBJRSA5LCAxMCBhbmQgMTEgZml4ZWQgZWxlbWVudHMgY29udGFpbmluZyBibG9jayBpcyBhbHdheXMgZXN0YWJsaXNoZWQgYnkgdGhlIHZpZXdwb3J0XG4gICAgdmFyIGVsZW1lbnRDc3MgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG4gICAgaWYgKGVsZW1lbnRDc3MucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG5cbiAgd2hpbGUgKGlzSFRNTEVsZW1lbnQoY3VycmVudE5vZGUpICYmIFsnaHRtbCcsICdib2R5J10uaW5kZXhPZihnZXROb2RlTmFtZShjdXJyZW50Tm9kZSkpIDwgMCkge1xuICAgIHZhciBjc3MgPSBnZXRDb21wdXRlZFN0eWxlKGN1cnJlbnROb2RlKTsgLy8gVGhpcyBpcyBub24tZXhoYXVzdGl2ZSBidXQgY292ZXJzIHRoZSBtb3N0IGNvbW1vbiBDU1MgcHJvcGVydGllcyB0aGF0XG4gICAgLy8gY3JlYXRlIGEgY29udGFpbmluZyBibG9jay5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQ29udGFpbmluZ19ibG9jayNpZGVudGlmeWluZ190aGVfY29udGFpbmluZ19ibG9ja1xuXG4gICAgaWYgKGNzcy50cmFuc2Zvcm0gIT09ICdub25lJyB8fCBjc3MucGVyc3BlY3RpdmUgIT09ICdub25lJyB8fCBjc3MuY29udGFpbiA9PT0gJ3BhaW50JyB8fCBbJ3RyYW5zZm9ybScsICdwZXJzcGVjdGl2ZSddLmluZGV4T2YoY3NzLndpbGxDaGFuZ2UpICE9PSAtMSB8fCBpc0ZpcmVmb3ggJiYgY3NzLndpbGxDaGFuZ2UgPT09ICdmaWx0ZXInIHx8IGlzRmlyZWZveCAmJiBjc3MuZmlsdGVyICYmIGNzcy5maWx0ZXIgIT09ICdub25lJykge1xuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59IC8vIEdldHMgdGhlIGNsb3Nlc3QgYW5jZXN0b3IgcG9zaXRpb25lZCBlbGVtZW50LiBIYW5kbGVzIHNvbWUgZWRnZSBjYXNlcyxcbi8vIHN1Y2ggYXMgdGFibGUgYW5jZXN0b3JzIGFuZCBjcm9zcyBicm93c2VyIGJ1Z3MuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgdmFyIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCk7XG5cbiAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiBpc1RhYmxlRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG4gIH1cblxuICBpZiAob2Zmc2V0UGFyZW50ICYmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnaHRtbCcgfHwgZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2JvZHknICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHx8IHdpbmRvdztcbn0iLCJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgeyBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIHtcbiAgaWYgKGdldE5vZGVOYW1lKGVsZW1lbnQpID09PSAnaHRtbCcpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiAoLy8gdGhpcyBpcyBhIHF1aWNrZXIgKGJ1dCBsZXNzIHR5cGUgc2FmZSkgd2F5IHRvIHNhdmUgcXVpdGUgc29tZSBieXRlcyBmcm9tIHRoZSBidW5kbGVcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dXG4gICAgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgZWxlbWVudC5hc3NpZ25lZFNsb3QgfHwgLy8gc3RlcCBpbnRvIHRoZSBzaGFkb3cgRE9NIG9mIHRoZSBwYXJlbnQgb2YgYSBzbG90dGVkIG5vZGVcbiAgICBlbGVtZW50LnBhcmVudE5vZGUgfHwgKCAvLyBET00gRWxlbWVudCBkZXRlY3RlZFxuICAgIGlzU2hhZG93Um9vdChlbGVtZW50KSA/IGVsZW1lbnQuaG9zdCA6IG51bGwpIHx8IC8vIFNoYWRvd1Jvb3QgZGV0ZWN0ZWRcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogSFRNTEVsZW1lbnQgaXMgYSBOb2RlXG4gICAgZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIC8vIGZhbGxiYWNrXG5cbiAgKTtcbn0iLCJpbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChub2RlKSB7XG4gIGlmIChbJ2h0bWwnLCAnYm9keScsICcjZG9jdW1lbnQnXS5pbmRleE9mKGdldE5vZGVOYW1lKG5vZGUpKSA+PSAwKSB7XG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICAgIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQuYm9keTtcbiAgfVxuXG4gIGlmIChpc0hUTUxFbGVtZW50KG5vZGUpICYmIGlzU2Nyb2xsUGFyZW50KG5vZGUpKSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICByZXR1cm4gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUobm9kZSkpO1xufSIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB2aXN1YWxWaWV3cG9ydCA9IHdpbi52aXN1YWxWaWV3cG9ydDtcbiAgdmFyIHdpZHRoID0gaHRtbC5jbGllbnRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGh0bWwuY2xpZW50SGVpZ2h0O1xuICB2YXIgeCA9IDA7XG4gIHZhciB5ID0gMDsgLy8gTkI6IFRoaXMgaXNuJ3Qgc3VwcG9ydGVkIG9uIGlPUyA8PSAxMi4gSWYgdGhlIGtleWJvYXJkIGlzIG9wZW4sIHRoZSBwb3BwZXJcbiAgLy8gY2FuIGJlIG9ic2N1cmVkIHVuZGVybmVhdGggaXQuXG4gIC8vIEFsc28sIGBodG1sLmNsaWVudEhlaWdodGAgYWRkcyB0aGUgYm90dG9tIGJhciBoZWlnaHQgaW4gU2FmYXJpIGlPUywgZXZlblxuICAvLyBpZiBpdCBpc24ndCBvcGVuLCBzbyBpZiB0aGlzIGlzbid0IGF2YWlsYWJsZSwgdGhlIHBvcHBlciB3aWxsIGJlIGRldGVjdGVkXG4gIC8vIHRvIG92ZXJmbG93IHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbiB0b28gZWFybHkuXG5cbiAgaWYgKHZpc3VhbFZpZXdwb3J0KSB7XG4gICAgd2lkdGggPSB2aXN1YWxWaWV3cG9ydC53aWR0aDtcbiAgICBoZWlnaHQgPSB2aXN1YWxWaWV3cG9ydC5oZWlnaHQ7IC8vIFVzZXMgTGF5b3V0IFZpZXdwb3J0IChsaWtlIENocm9tZTsgU2FmYXJpIGRvZXMgbm90IGN1cnJlbnRseSlcbiAgICAvLyBJbiBDaHJvbWUsIGl0IHJldHVybnMgYSB2YWx1ZSB2ZXJ5IGNsb3NlIHRvIDAgKCsvLSkgYnV0IGNvbnRhaW5zIHJvdW5kaW5nXG4gICAgLy8gZXJyb3JzIGR1ZSB0byBmbG9hdGluZyBwb2ludCBudW1iZXJzLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIHByZWNpc2lvbi5cbiAgICAvLyBTYWZhcmkgcmV0dXJucyBhIG51bWJlciA8PSAwLCB1c3VhbGx5IDwgLTEgd2hlbiBwaW5jaC16b29tZWRcbiAgICAvLyBGZWF0dXJlIGRldGVjdGlvbiBmYWlscyBpbiBtb2JpbGUgZW11bGF0aW9uIG1vZGUgaW4gQ2hyb21lLlxuICAgIC8vIE1hdGguYWJzKHdpbi5pbm5lcldpZHRoIC8gdmlzdWFsVmlld3BvcnQuc2NhbGUgLSB2aXN1YWxWaWV3cG9ydC53aWR0aCkgPFxuICAgIC8vIDAuMDAxXG4gICAgLy8gRmFsbGJhY2sgaGVyZTogXCJOb3QgU2FmYXJpXCIgdXNlckFnZW50XG5cbiAgICBpZiAoIS9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgIHggPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0O1xuICAgICAgeSA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSxcbiAgICB5OiB5XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93KG5vZGUpIHtcbiAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICBpZiAobm9kZS50b1N0cmluZygpICE9PSAnW29iamVjdCBXaW5kb3ddJykge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50O1xuICAgIHJldHVybiBvd25lckRvY3VtZW50ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cgOiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsKG5vZGUpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhub2RlKTtcbiAgdmFyIHNjcm9sbExlZnQgPSB3aW4ucGFnZVhPZmZzZXQ7XG4gIHZhciBzY3JvbGxUb3AgPSB3aW4ucGFnZVlPZmZzZXQ7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IHNjcm9sbFRvcFxuICB9O1xufSIsImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCkge1xuICAvLyBJZiA8aHRtbD4gaGFzIGEgQ1NTIHdpZHRoIGdyZWF0ZXIgdGhhbiB0aGUgdmlld3BvcnQsIHRoZW4gdGhpcyB3aWxsIGJlXG4gIC8vIGluY29ycmVjdCBmb3IgUlRMLlxuICAvLyBQb3BwZXIgMSBpcyBicm9rZW4gaW4gdGhpcyBjYXNlIGFuZCBuZXZlciBoYWQgYSBidWcgcmVwb3J0IHNvIGxldCdzIGFzc3VtZVxuICAvLyBpdCdzIG5vdCBhbiBpc3N1ZS4gSSBkb24ndCB0aGluayBhbnlvbmUgZXZlciBzcGVjaWZpZXMgd2lkdGggb24gPGh0bWw+XG4gIC8vIGFueXdheS5cbiAgLy8gQnJvd3NlcnMgd2hlcmUgdGhlIGxlZnQgc2Nyb2xsYmFyIGRvZXNuJ3QgY2F1c2UgYW4gaXNzdWUgcmVwb3J0IGAwYCBmb3JcbiAgLy8gdGhpcyAoZS5nLiBFZGdlIDIwMTksIElFMTEsIFNhZmFyaSlcbiAgcmV0dXJuIGdldEJvdW5kaW5nQ2xpZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpLmxlZnQgKyBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCkuc2Nyb2xsTGVmdDtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuXG5mdW5jdGlvbiBpc0VsZW1lbnQobm9kZSkge1xuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5FbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQobm9kZSkge1xuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5IVE1MRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNTaGFkb3dSb290KG5vZGUpIHtcbiAgLy8gSUUgMTEgaGFzIG5vIFNoYWRvd1Jvb3RcbiAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLlNoYWRvd1Jvb3Q7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdDtcbn1cblxuZXhwb3J0IHsgaXNFbGVtZW50LCBpc0hUTUxFbGVtZW50LCBpc1NoYWRvd1Jvb3QgfTsiLCJpbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1Njcm9sbFBhcmVudChlbGVtZW50KSB7XG4gIC8vIEZpcmVmb3ggd2FudHMgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcbiAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSxcbiAgICAgIG92ZXJmbG93ID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3csXG4gICAgICBvdmVyZmxvd1ggPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1gsXG4gICAgICBvdmVyZmxvd1kgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1k7XG5cbiAgcmV0dXJuIC9hdXRvfHNjcm9sbHxvdmVybGF5fGhpZGRlbi8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCk7XG59IiwiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RhYmxlRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBbJ3RhYmxlJywgJ3RkJywgJ3RoJ10uaW5kZXhPZihnZXROb2RlTmFtZShlbGVtZW50KSkgPj0gMDtcbn0iLCJpbXBvcnQgZ2V0U2Nyb2xsUGFyZW50IGZyb20gXCIuL2dldFNjcm9sbFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiO1xuLypcbmdpdmVuIGEgRE9NIGVsZW1lbnQsIHJldHVybiB0aGUgbGlzdCBvZiBhbGwgc2Nyb2xsIHBhcmVudHMsIHVwIHRoZSBsaXN0IG9mIGFuY2Vzb3JzXG51bnRpbCB3ZSBnZXQgdG8gdGhlIHRvcCB3aW5kb3cgb2JqZWN0LiBUaGlzIGxpc3QgaXMgd2hhdCB3ZSBhdHRhY2ggc2Nyb2xsIGxpc3RlbmVyc1xudG8sIGJlY2F1c2UgaWYgYW55IG9mIHRoZXNlIHBhcmVudCBlbGVtZW50cyBzY3JvbGwsIHdlJ2xsIG5lZWQgdG8gcmUtY2FsY3VsYXRlIHRoZVxucmVmZXJlbmNlIGVsZW1lbnQncyBwb3NpdGlvbi5cbiovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RTY3JvbGxQYXJlbnRzKGVsZW1lbnQsIGxpc3QpIHtcbiAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICBpZiAobGlzdCA9PT0gdm9pZCAwKSB7XG4gICAgbGlzdCA9IFtdO1xuICB9XG5cbiAgdmFyIHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChlbGVtZW50KTtcbiAgdmFyIGlzQm9keSA9IHNjcm9sbFBhcmVudCA9PT0gKChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keSk7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coc2Nyb2xsUGFyZW50KTtcbiAgdmFyIHRhcmdldCA9IGlzQm9keSA/IFt3aW5dLmNvbmNhdCh3aW4udmlzdWFsVmlld3BvcnQgfHwgW10sIGlzU2Nyb2xsUGFyZW50KHNjcm9sbFBhcmVudCkgPyBzY3JvbGxQYXJlbnQgOiBbXSkgOiBzY3JvbGxQYXJlbnQ7XG4gIHZhciB1cGRhdGVkTGlzdCA9IGxpc3QuY29uY2F0KHRhcmdldCk7XG4gIHJldHVybiBpc0JvZHkgPyB1cGRhdGVkTGlzdCA6IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBpc0JvZHkgdGVsbHMgdXMgdGFyZ2V0IHdpbGwgYmUgYW4gSFRNTEVsZW1lbnQgaGVyZVxuICB1cGRhdGVkTGlzdC5jb25jYXQobGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZSh0YXJnZXQpKSk7XG59IiwiZXhwb3J0IHZhciB0b3AgPSAndG9wJztcbmV4cG9ydCB2YXIgYm90dG9tID0gJ2JvdHRvbSc7XG5leHBvcnQgdmFyIHJpZ2h0ID0gJ3JpZ2h0JztcbmV4cG9ydCB2YXIgbGVmdCA9ICdsZWZ0JztcbmV4cG9ydCB2YXIgYXV0byA9ICdhdXRvJztcbmV4cG9ydCB2YXIgYmFzZVBsYWNlbWVudHMgPSBbdG9wLCBib3R0b20sIHJpZ2h0LCBsZWZ0XTtcbmV4cG9ydCB2YXIgc3RhcnQgPSAnc3RhcnQnO1xuZXhwb3J0IHZhciBlbmQgPSAnZW5kJztcbmV4cG9ydCB2YXIgY2xpcHBpbmdQYXJlbnRzID0gJ2NsaXBwaW5nUGFyZW50cyc7XG5leHBvcnQgdmFyIHZpZXdwb3J0ID0gJ3ZpZXdwb3J0JztcbmV4cG9ydCB2YXIgcG9wcGVyID0gJ3BvcHBlcic7XG5leHBvcnQgdmFyIHJlZmVyZW5jZSA9ICdyZWZlcmVuY2UnO1xuZXhwb3J0IHZhciB2YXJpYXRpb25QbGFjZW1lbnRzID0gLyojX19QVVJFX18qL2Jhc2VQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIGFjYy5jb25jYXQoW3BsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG59LCBbXSk7XG5leHBvcnQgdmFyIHBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovW10uY29uY2F0KGJhc2VQbGFjZW1lbnRzLCBbYXV0b10pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIGFjYy5jb25jYXQoW3BsYWNlbWVudCwgcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTsgLy8gbW9kaWZpZXJzIHRoYXQgbmVlZCB0byByZWFkIHRoZSBET01cblxuZXhwb3J0IHZhciBiZWZvcmVSZWFkID0gJ2JlZm9yZVJlYWQnO1xuZXhwb3J0IHZhciByZWFkID0gJ3JlYWQnO1xuZXhwb3J0IHZhciBhZnRlclJlYWQgPSAnYWZ0ZXJSZWFkJzsgLy8gcHVyZS1sb2dpYyBtb2RpZmllcnNcblxuZXhwb3J0IHZhciBiZWZvcmVNYWluID0gJ2JlZm9yZU1haW4nO1xuZXhwb3J0IHZhciBtYWluID0gJ21haW4nO1xuZXhwb3J0IHZhciBhZnRlck1haW4gPSAnYWZ0ZXJNYWluJzsgLy8gbW9kaWZpZXIgd2l0aCB0aGUgcHVycG9zZSB0byB3cml0ZSB0byB0aGUgRE9NIChvciB3cml0ZSBpbnRvIGEgZnJhbWV3b3JrIHN0YXRlKVxuXG5leHBvcnQgdmFyIGJlZm9yZVdyaXRlID0gJ2JlZm9yZVdyaXRlJztcbmV4cG9ydCB2YXIgd3JpdGUgPSAnd3JpdGUnO1xuZXhwb3J0IHZhciBhZnRlcldyaXRlID0gJ2FmdGVyV3JpdGUnO1xuZXhwb3J0IHZhciBtb2RpZmllclBoYXNlcyA9IFtiZWZvcmVSZWFkLCByZWFkLCBhZnRlclJlYWQsIGJlZm9yZU1haW4sIG1haW4sIGFmdGVyTWFpbiwgYmVmb3JlV3JpdGUsIHdyaXRlLCBhZnRlcldyaXRlXTsiLCJleHBvcnQgKiBmcm9tIFwiLi9lbnVtcy5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vbW9kaWZpZXJzL2luZGV4LmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgcG9wcGVyR2VuZXJhdG9yLCBkZXRlY3RPdmVyZmxvdywgY3JlYXRlUG9wcGVyIGFzIGNyZWF0ZVBvcHBlckJhc2UgfSBmcm9tIFwiLi9jcmVhdGVQb3BwZXIuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIgfSBmcm9tIFwiLi9wb3BwZXIuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIgYXMgY3JlYXRlUG9wcGVyTGl0ZSB9IGZyb20gXCIuL3BvcHBlci1saXRlLmpzXCI7IiwiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjsgLy8gVGhpcyBtb2RpZmllciB0YWtlcyB0aGUgc3R5bGVzIHByZXBhcmVkIGJ5IHRoZSBgY29tcHV0ZVN0eWxlc2AgbW9kaWZpZXJcbi8vIGFuZCBhcHBsaWVzIHRoZW0gdG8gdGhlIEhUTUxFbGVtZW50cyBzdWNoIGFzIHBvcHBlciBhbmQgYXJyb3dcblxuZnVuY3Rpb24gYXBwbHlTdHlsZXMoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBzdHlsZSA9IHN0YXRlLnN0eWxlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBGbG93IGRvZXNuJ3Qgc3VwcG9ydCB0byBleHRlbmQgdGhpcyBwcm9wZXJ0eSwgYnV0IGl0J3MgdGhlIG1vc3RcbiAgICAvLyBlZmZlY3RpdmUgd2F5IHRvIGFwcGx5IHN0eWxlcyB0byBhbiBIVE1MRWxlbWVudFxuICAgIC8vICRGbG93Rml4TWVbY2Fubm90LXdyaXRlXVxuXG5cbiAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuXG4gICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUgPT09IHRydWUgPyAnJyA6IHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZTtcbiAgdmFyIGluaXRpYWxTdHlsZXMgPSB7XG4gICAgcG9wcGVyOiB7XG4gICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgIGxlZnQ6ICcwJyxcbiAgICAgIHRvcDogJzAnLFxuICAgICAgbWFyZ2luOiAnMCdcbiAgICB9LFxuICAgIGFycm93OiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgIH0sXG4gICAgcmVmZXJlbmNlOiB7fVxuICB9O1xuICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLnBvcHBlci5zdHlsZSwgaW5pdGlhbFN0eWxlcy5wb3BwZXIpO1xuICBzdGF0ZS5zdHlsZXMgPSBpbml0aWFsU3R5bGVzO1xuXG4gIGlmIChzdGF0ZS5lbGVtZW50cy5hcnJvdykge1xuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMuYXJyb3cuc3R5bGUsIGluaXRpYWxTdHlsZXMuYXJyb3cpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTtcbiAgICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICAgIHZhciBzdHlsZVByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhzdGF0ZS5zdHlsZXMuaGFzT3duUHJvcGVydHkobmFtZSkgPyBzdGF0ZS5zdHlsZXNbbmFtZV0gOiBpbml0aWFsU3R5bGVzW25hbWVdKTsgLy8gU2V0IGFsbCB2YWx1ZXMgdG8gYW4gZW1wdHkgc3RyaW5nIHRvIHVuc2V0IHRoZW1cblxuICAgICAgdmFyIHN0eWxlID0gc3R5bGVQcm9wZXJ0aWVzLnJlZHVjZShmdW5jdGlvbiAoc3R5bGUsIHByb3BlcnR5KSB7XG4gICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9ICcnO1xuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICB9LCB7fSk7IC8vIGFycm93IGlzIG9wdGlvbmFsICsgdmlydHVhbCBlbGVtZW50c1xuXG4gICAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46IGFwcGx5U3R5bGVzLFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgcmVxdWlyZXM6IFsnY29tcHV0ZVN0eWxlcyddXG59OyIsImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBjb250YWlucyBmcm9tIFwiLi4vZG9tLXV0aWxzL2NvbnRhaW5zLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB3aXRoaW4gZnJvbSBcIi4uL3V0aWxzL3dpdGhpbi5qc1wiO1xuaW1wb3J0IG1lcmdlUGFkZGluZ09iamVjdCBmcm9tIFwiLi4vdXRpbHMvbWVyZ2VQYWRkaW5nT2JqZWN0LmpzXCI7XG5pbXBvcnQgZXhwYW5kVG9IYXNoTWFwIGZyb20gXCIuLi91dGlscy9leHBhbmRUb0hhc2hNYXAuanNcIjtcbmltcG9ydCB7IGxlZnQsIHJpZ2h0LCBiYXNlUGxhY2VtZW50cywgdG9wLCBib3R0b20gfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgdG9QYWRkaW5nT2JqZWN0ID0gZnVuY3Rpb24gdG9QYWRkaW5nT2JqZWN0KHBhZGRpbmcsIHN0YXRlKSB7XG4gIHBhZGRpbmcgPSB0eXBlb2YgcGFkZGluZyA9PT0gJ2Z1bmN0aW9uJyA/IHBhZGRpbmcoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiBwYWRkaW5nO1xuICByZXR1cm4gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbn07XG5cbmZ1bmN0aW9uIGFycm93KF9yZWYpIHtcbiAgdmFyIF9zdGF0ZSRtb2RpZmllcnNEYXRhJDtcblxuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgYXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgdmFyIGlzVmVydGljYWwgPSBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgaWYgKCFhcnJvd0VsZW1lbnQgfHwgIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcGFkZGluZ09iamVjdCA9IHRvUGFkZGluZ09iamVjdChvcHRpb25zLnBhZGRpbmcsIHN0YXRlKTtcbiAgdmFyIGFycm93UmVjdCA9IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KTtcbiAgdmFyIG1pblByb3AgPSBheGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICB2YXIgbWF4UHJvcCA9IGF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICB2YXIgZW5kRGlmZiA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtsZW5dICsgc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdIC0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnBvcHBlcltsZW5dO1xuICB2YXIgc3RhcnREaWZmID0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXTtcbiAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGFycm93RWxlbWVudCk7XG4gIHZhciBjbGllbnRTaXplID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBheGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRIZWlnaHQgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoIHx8IDAgOiAwO1xuICB2YXIgY2VudGVyVG9SZWZlcmVuY2UgPSBlbmREaWZmIC8gMiAtIHN0YXJ0RGlmZiAvIDI7IC8vIE1ha2Ugc3VyZSB0aGUgYXJyb3cgZG9lc24ndCBvdmVyZmxvdyB0aGUgcG9wcGVyIGlmIHRoZSBjZW50ZXIgcG9pbnQgaXNcbiAgLy8gb3V0c2lkZSBvZiB0aGUgcG9wcGVyIGJvdW5kc1xuXG4gIHZhciBtaW4gPSBwYWRkaW5nT2JqZWN0W21pblByb3BdO1xuICB2YXIgbWF4ID0gY2xpZW50U2l6ZSAtIGFycm93UmVjdFtsZW5dIC0gcGFkZGluZ09iamVjdFttYXhQcm9wXTtcbiAgdmFyIGNlbnRlciA9IGNsaWVudFNpemUgLyAyIC0gYXJyb3dSZWN0W2xlbl0gLyAyICsgY2VudGVyVG9SZWZlcmVuY2U7XG4gIHZhciBvZmZzZXQgPSB3aXRoaW4obWluLCBjZW50ZXIsIG1heCk7IC8vIFByZXZlbnRzIGJyZWFraW5nIHN5bnRheCBoaWdobGlnaHRpbmcuLi5cblxuICB2YXIgYXhpc1Byb3AgPSBheGlzO1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gKF9zdGF0ZSRtb2RpZmllcnNEYXRhJCA9IHt9LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSRbYXhpc1Byb3BdID0gb2Zmc2V0LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQuY2VudGVyT2Zmc2V0ID0gb2Zmc2V0IC0gY2VudGVyLCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQpO1xufVxuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQsXG4gICAgICBhcnJvd0VsZW1lbnQgPSBfb3B0aW9ucyRlbGVtZW50ID09PSB2b2lkIDAgPyAnW2RhdGEtcG9wcGVyLWFycm93XScgOiBfb3B0aW9ucyRlbGVtZW50O1xuXG4gIGlmIChhcnJvd0VsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfSAvLyBDU1Mgc2VsZWN0b3JcblxuXG4gIGlmICh0eXBlb2YgYXJyb3dFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICBpZiAoIWFycm93RWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoYXJyb3dFbGVtZW50KSkge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhcnJvd1wiIGVsZW1lbnQgbXVzdCBiZSBhbiBIVE1MRWxlbWVudCAobm90IGFuIFNWR0VsZW1lbnQpLicsICdUbyB1c2UgYW4gU1ZHIGFycm93LCB3cmFwIGl0IGluIGFuIEhUTUxFbGVtZW50IHRoYXQgd2lsbCBiZSB1c2VkIGFzJywgJ3RoZSBhcnJvdy4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29udGFpbnMoc3RhdGUuZWxlbWVudHMucG9wcGVyLCBhcnJvd0VsZW1lbnQpKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhcnJvd1wiIG1vZGlmaWVyXFwncyBgZWxlbWVudGAgbXVzdCBiZSBhIGNoaWxkIG9mIHRoZSBwb3BwZXInLCAnZWxlbWVudC4nXS5qb2luKCcgJykpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIHN0YXRlLmVsZW1lbnRzLmFycm93ID0gYXJyb3dFbGVtZW50O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnYXJyb3cnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogYXJyb3csXG4gIGVmZmVjdDogZWZmZWN0LFxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J11cbn07IiwiaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgYm90dG9tIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyByb3VuZCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHVuc2V0U2lkZXMgPSB7XG4gIHRvcDogJ2F1dG8nLFxuICByaWdodDogJ2F1dG8nLFxuICBib3R0b206ICdhdXRvJyxcbiAgbGVmdDogJ2F1dG8nXG59OyAvLyBSb3VuZCB0aGUgb2Zmc2V0cyB0byB0aGUgbmVhcmVzdCBzdWl0YWJsZSBzdWJwaXhlbCBiYXNlZCBvbiB0aGUgRFBSLlxuLy8gWm9vbWluZyBjYW4gY2hhbmdlIHRoZSBEUFIsIGJ1dCBpdCBzZWVtcyB0byByZXBvcnQgYSB2YWx1ZSB0aGF0IHdpbGxcbi8vIGNsZWFubHkgZGl2aWRlIHRoZSB2YWx1ZXMgaW50byB0aGUgYXBwcm9wcmlhdGUgc3VicGl4ZWxzLlxuXG5mdW5jdGlvbiByb3VuZE9mZnNldHNCeURQUihfcmVmKSB7XG4gIHZhciB4ID0gX3JlZi54LFxuICAgICAgeSA9IF9yZWYueTtcbiAgdmFyIHdpbiA9IHdpbmRvdztcbiAgdmFyIGRwciA9IHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gIHJldHVybiB7XG4gICAgeDogcm91bmQocm91bmQoeCAqIGRwcikgLyBkcHIpIHx8IDAsXG4gICAgeTogcm91bmQocm91bmQoeSAqIGRwcikgLyBkcHIpIHx8IDBcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcFRvU3R5bGVzKF9yZWYyKSB7XG4gIHZhciBfT2JqZWN0JGFzc2lnbjI7XG5cbiAgdmFyIHBvcHBlciA9IF9yZWYyLnBvcHBlcixcbiAgICAgIHBvcHBlclJlY3QgPSBfcmVmMi5wb3BwZXJSZWN0LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZjIucGxhY2VtZW50LFxuICAgICAgb2Zmc2V0cyA9IF9yZWYyLm9mZnNldHMsXG4gICAgICBwb3NpdGlvbiA9IF9yZWYyLnBvc2l0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX3JlZjIuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgYWRhcHRpdmUgPSBfcmVmMi5hZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9yZWYyLnJvdW5kT2Zmc2V0cztcblxuICB2YXIgX3JlZjMgPSByb3VuZE9mZnNldHMgPT09IHRydWUgPyByb3VuZE9mZnNldHNCeURQUihvZmZzZXRzKSA6IHR5cGVvZiByb3VuZE9mZnNldHMgPT09ICdmdW5jdGlvbicgPyByb3VuZE9mZnNldHMob2Zmc2V0cykgOiBvZmZzZXRzLFxuICAgICAgX3JlZjMkeCA9IF9yZWYzLngsXG4gICAgICB4ID0gX3JlZjMkeCA9PT0gdm9pZCAwID8gMCA6IF9yZWYzJHgsXG4gICAgICBfcmVmMyR5ID0gX3JlZjMueSxcbiAgICAgIHkgPSBfcmVmMyR5ID09PSB2b2lkIDAgPyAwIDogX3JlZjMkeTtcblxuICB2YXIgaGFzWCA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3gnKTtcbiAgdmFyIGhhc1kgPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd5Jyk7XG4gIHZhciBzaWRlWCA9IGxlZnQ7XG4gIHZhciBzaWRlWSA9IHRvcDtcbiAgdmFyIHdpbiA9IHdpbmRvdztcblxuICBpZiAoYWRhcHRpdmUpIHtcbiAgICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KHBvcHBlcik7XG4gICAgdmFyIGhlaWdodFByb3AgPSAnY2xpZW50SGVpZ2h0JztcbiAgICB2YXIgd2lkdGhQcm9wID0gJ2NsaWVudFdpZHRoJztcblxuICAgIGlmIChvZmZzZXRQYXJlbnQgPT09IGdldFdpbmRvdyhwb3BwZXIpKSB7XG4gICAgICBvZmZzZXRQYXJlbnQgPSBnZXREb2N1bWVudEVsZW1lbnQocG9wcGVyKTtcblxuICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiAhPT0gJ3N0YXRpYycpIHtcbiAgICAgICAgaGVpZ2h0UHJvcCA9ICdzY3JvbGxIZWlnaHQnO1xuICAgICAgICB3aWR0aFByb3AgPSAnc2Nyb2xsV2lkdGgnO1xuICAgICAgfVxuICAgIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FzdF06IGZvcmNlIHR5cGUgcmVmaW5lbWVudCwgd2UgY29tcGFyZSBvZmZzZXRQYXJlbnQgd2l0aCB3aW5kb3cgYWJvdmUsIGJ1dCBGbG93IGRvZXNuJ3QgZGV0ZWN0IGl0XG5cblxuICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudDtcblxuICAgIGlmIChwbGFjZW1lbnQgPT09IHRvcCkge1xuICAgICAgc2lkZVkgPSBib3R0b207IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuXG4gICAgICB5IC09IG9mZnNldFBhcmVudFtoZWlnaHRQcm9wXSAtIHBvcHBlclJlY3QuaGVpZ2h0O1xuICAgICAgeSAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gbGVmdCkge1xuICAgICAgc2lkZVggPSByaWdodDsgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG5cbiAgICAgIHggLT0gb2Zmc2V0UGFyZW50W3dpZHRoUHJvcF0gLSBwb3BwZXJSZWN0LndpZHRoO1xuICAgICAgeCAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbW1vblN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICB9LCBhZGFwdGl2ZSAmJiB1bnNldFNpZGVzKTtcblxuICBpZiAoZ3B1QWNjZWxlcmF0aW9uKSB7XG4gICAgdmFyIF9PYmplY3QkYXNzaWduO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduID0ge30sIF9PYmplY3QkYXNzaWduW3NpZGVZXSA9IGhhc1kgPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ25bc2lkZVhdID0gaGFzWCA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbi50cmFuc2Zvcm0gPSAod2luLmRldmljZVBpeGVsUmF0aW8gfHwgMSkgPCAyID8gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIiA6IFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweCwgMClcIiwgX09iamVjdCRhc3NpZ24pKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbjIgPSB7fSwgX09iamVjdCRhc3NpZ24yW3NpZGVZXSA9IGhhc1kgPyB5ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMltzaWRlWF0gPSBoYXNYID8geCArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjIudHJhbnNmb3JtID0gJycsIF9PYmplY3QkYXNzaWduMikpO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlU3R5bGVzKF9yZWY0KSB7XG4gIHZhciBzdGF0ZSA9IF9yZWY0LnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWY0Lm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPSBvcHRpb25zLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGdwdUFjY2VsZXJhdCxcbiAgICAgIF9vcHRpb25zJGFkYXB0aXZlID0gb3B0aW9ucy5hZGFwdGl2ZSxcbiAgICAgIGFkYXB0aXZlID0gX29wdGlvbnMkYWRhcHRpdmUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhZGFwdGl2ZSxcbiAgICAgIF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9IG9wdGlvbnMucm91bmRPZmZzZXRzLFxuICAgICAgcm91bmRPZmZzZXRzID0gX29wdGlvbnMkcm91bmRPZmZzZXRzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcm91bmRPZmZzZXRzO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB2YXIgdHJhbnNpdGlvblByb3BlcnR5ID0gZ2V0Q29tcHV0ZWRTdHlsZShzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLnRyYW5zaXRpb25Qcm9wZXJ0eSB8fCAnJztcblxuICAgIGlmIChhZGFwdGl2ZSAmJiBbJ3RyYW5zZm9ybScsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXS5zb21lKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuIHRyYW5zaXRpb25Qcm9wZXJ0eS5pbmRleE9mKHByb3BlcnR5KSA+PSAwO1xuICAgIH0pKSB7XG4gICAgICBjb25zb2xlLndhcm4oWydQb3BwZXI6IERldGVjdGVkIENTUyB0cmFuc2l0aW9ucyBvbiBhdCBsZWFzdCBvbmUgb2YgdGhlIGZvbGxvd2luZycsICdDU1MgcHJvcGVydGllczogXCJ0cmFuc2Zvcm1cIiwgXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIi4nLCAnXFxuXFxuJywgJ0Rpc2FibGUgdGhlIFwiY29tcHV0ZVN0eWxlc1wiIG1vZGlmaWVyXFwncyBgYWRhcHRpdmVgIG9wdGlvbiB0byBhbGxvdycsICdmb3Igc21vb3RoIHRyYW5zaXRpb25zLCBvciByZW1vdmUgdGhlc2UgcHJvcGVydGllcyBmcm9tIHRoZSBDU1MnLCAndHJhbnNpdGlvbiBkZWNsYXJhdGlvbiBvbiB0aGUgcG9wcGVyIGVsZW1lbnQgaWYgb25seSB0cmFuc2l0aW9uaW5nJywgJ29wYWNpdHkgb3IgYmFja2dyb3VuZC1jb2xvciBmb3IgZXhhbXBsZS4nLCAnXFxuXFxuJywgJ1dlIHJlY29tbWVuZCB1c2luZyB0aGUgcG9wcGVyIGVsZW1lbnQgYXMgYSB3cmFwcGVyIGFyb3VuZCBhbiBpbm5lcicsICdlbGVtZW50IHRoYXQgY2FuIGhhdmUgYW55IENTUyBwcm9wZXJ0eSB0cmFuc2l0aW9uZWQgZm9yIGFuaW1hdGlvbnMuJ10uam9pbignICcpKTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29tbW9uU3R5bGVzID0ge1xuICAgIHBsYWNlbWVudDogZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpLFxuICAgIHBvcHBlcjogc3RhdGUuZWxlbWVudHMucG9wcGVyLFxuICAgIHBvcHBlclJlY3Q6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBncHVBY2NlbGVyYXRpb246IGdwdUFjY2VsZXJhdGlvblxuICB9O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMucG9wcGVyLCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgYWRhcHRpdmU6IGFkYXB0aXZlLFxuICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3cgIT0gbnVsbCkge1xuICAgIHN0YXRlLnN0eWxlcy5hcnJvdyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5hcnJvdywgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93LFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBhZGFwdGl2ZTogZmFsc2UsXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgIH0pKSk7XG4gIH1cblxuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXBsYWNlbWVudCc6IHN0YXRlLnBsYWNlbWVudFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2NvbXB1dGVTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ2JlZm9yZVdyaXRlJyxcbiAgZm46IGNvbXB1dGVTdHlsZXMsXG4gIGRhdGE6IHt9XG59OyIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRXaW5kb3cuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgcGFzc2l2ZSA9IHtcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRzY3JvbGwgPSBvcHRpb25zLnNjcm9sbCxcbiAgICAgIHNjcm9sbCA9IF9vcHRpb25zJHNjcm9sbCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHNjcm9sbCxcbiAgICAgIF9vcHRpb25zJHJlc2l6ZSA9IG9wdGlvbnMucmVzaXplLFxuICAgICAgcmVzaXplID0gX29wdGlvbnMkcmVzaXplID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcmVzaXplO1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KHN0YXRlLmVsZW1lbnRzLnBvcHBlcik7XG4gIHZhciBzY3JvbGxQYXJlbnRzID0gW10uY29uY2F0KHN0YXRlLnNjcm9sbFBhcmVudHMucmVmZXJlbmNlLCBzdGF0ZS5zY3JvbGxQYXJlbnRzLnBvcHBlcik7XG5cbiAgaWYgKHNjcm9sbCkge1xuICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICBzY3JvbGxQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChyZXNpemUpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgICAgc2Nyb2xsUGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVzaXplKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdldmVudExpc3RlbmVycycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogZnVuY3Rpb24gZm4oKSB7fSxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIGRhdGE6IHt9XG59OyIsImltcG9ydCBnZXRPcHBvc2l0ZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgY29tcHV0ZUF1dG9QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2NvbXB1dGVBdXRvUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyBib3R0b20sIHRvcCwgc3RhcnQsIHJpZ2h0LCBsZWZ0LCBhdXRvIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuLi91dGlscy9nZXRWYXJpYXRpb24uanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5mdW5jdGlvbiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwbGFjZW1lbnQpIHtcbiAgaWYgKGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA9PT0gYXV0bykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBvcHBvc2l0ZVBsYWNlbWVudCA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHJldHVybiBbZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQocGxhY2VtZW50KSwgb3Bwb3NpdGVQbGFjZW1lbnQsIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KG9wcG9zaXRlUGxhY2VtZW50KV07XG59XG5cbmZ1bmN0aW9uIGZsaXAoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFsdEF4aXMsXG4gICAgICBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgPSBvcHRpb25zLmZhbGxiYWNrUGxhY2VtZW50cyxcbiAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcsXG4gICAgICBib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBvcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJGZsaXBWYXJpYXRpbyA9IG9wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zJGZsaXBWYXJpYXRpbyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGZsaXBWYXJpYXRpbyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyA9IG9wdGlvbnMuYWxsb3dlZEF1dG9QbGFjZW1lbnRzO1xuICB2YXIgcHJlZmVycmVkUGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpO1xuICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gYmFzZVBsYWNlbWVudCA9PT0gcHJlZmVycmVkUGxhY2VtZW50O1xuICB2YXIgZmFsbGJhY2tQbGFjZW1lbnRzID0gc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzIHx8IChpc0Jhc2VQbGFjZW1lbnQgfHwgIWZsaXBWYXJpYXRpb25zID8gW2dldE9wcG9zaXRlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCldIDogZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocHJlZmVycmVkUGxhY2VtZW50KSk7XG4gIHZhciBwbGFjZW1lbnRzID0gW3ByZWZlcnJlZFBsYWNlbWVudF0uY29uY2F0KGZhbGxiYWNrUGxhY2VtZW50cykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA9PT0gYXV0byA/IGNvbXB1dGVBdXRvUGxhY2VtZW50KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZyxcbiAgICAgIGZsaXBWYXJpYXRpb25zOiBmbGlwVmFyaWF0aW9ucyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50czogYWxsb3dlZEF1dG9QbGFjZW1lbnRzXG4gICAgfSkgOiBwbGFjZW1lbnQpO1xuICB9LCBbXSk7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIGNoZWNrc01hcCA9IG5ldyBNYXAoKTtcbiAgdmFyIG1ha2VGYWxsYmFja0NoZWNrcyA9IHRydWU7XG4gIHZhciBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzWzBdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGxhY2VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwbGFjZW1lbnQgPSBwbGFjZW1lbnRzW2ldO1xuXG4gICAgdmFyIF9iYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuXG4gICAgdmFyIGlzU3RhcnRWYXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gc3RhcnQ7XG4gICAgdmFyIGlzVmVydGljYWwgPSBbdG9wLCBib3R0b21dLmluZGV4T2YoX2Jhc2VQbGFjZW1lbnQpID49IDA7XG4gICAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG4gICAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgfSk7XG4gICAgdmFyIG1haW5WYXJpYXRpb25TaWRlID0gaXNWZXJ0aWNhbCA/IGlzU3RhcnRWYXJpYXRpb24gPyByaWdodCA6IGxlZnQgOiBpc1N0YXJ0VmFyaWF0aW9uID8gYm90dG9tIDogdG9wO1xuXG4gICAgaWYgKHJlZmVyZW5jZVJlY3RbbGVuXSA+IHBvcHBlclJlY3RbbGVuXSkge1xuICAgICAgbWFpblZhcmlhdGlvblNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluVmFyaWF0aW9uU2lkZSk7XG4gICAgfVxuXG4gICAgdmFyIGFsdFZhcmlhdGlvblNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluVmFyaWF0aW9uU2lkZSk7XG4gICAgdmFyIGNoZWNrcyA9IFtdO1xuXG4gICAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W19iYXNlUGxhY2VtZW50XSA8PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1ttYWluVmFyaWF0aW9uU2lkZV0gPD0gMCwgb3ZlcmZsb3dbYWx0VmFyaWF0aW9uU2lkZV0gPD0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrcy5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgIHJldHVybiBjaGVjaztcbiAgICB9KSkge1xuICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgICAgbWFrZUZhbGxiYWNrQ2hlY2tzID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjaGVja3NNYXAuc2V0KHBsYWNlbWVudCwgY2hlY2tzKTtcbiAgfVxuXG4gIGlmIChtYWtlRmFsbGJhY2tDaGVja3MpIHtcbiAgICAvLyBgMmAgbWF5IGJlIGRlc2lyZWQgaW4gc29tZSBjYXNlcyDigJMgcmVzZWFyY2ggbGF0ZXJcbiAgICB2YXIgbnVtYmVyT2ZDaGVja3MgPSBmbGlwVmFyaWF0aW9ucyA/IDMgOiAxO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoX2kpIHtcbiAgICAgIHZhciBmaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50cy5maW5kKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICAgICAgdmFyIGNoZWNrcyA9IGNoZWNrc01hcC5nZXQocGxhY2VtZW50KTtcblxuICAgICAgICBpZiAoY2hlY2tzKSB7XG4gICAgICAgICAgcmV0dXJuIGNoZWNrcy5zbGljZSgwLCBfaSkuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZml0dGluZ1BsYWNlbWVudCkge1xuICAgICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBmaXR0aW5nUGxhY2VtZW50O1xuICAgICAgICByZXR1cm4gXCJicmVha1wiO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmb3IgKHZhciBfaSA9IG51bWJlck9mQ2hlY2tzOyBfaSA+IDA7IF9pLS0pIHtcbiAgICAgIHZhciBfcmV0ID0gX2xvb3AoX2kpO1xuXG4gICAgICBpZiAoX3JldCA9PT0gXCJicmVha1wiKSBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhdGUucGxhY2VtZW50ICE9PSBmaXJzdEZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwID0gdHJ1ZTtcbiAgICBzdGF0ZS5wbGFjZW1lbnQgPSBmaXJzdEZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgc3RhdGUucmVzZXQgPSB0cnVlO1xuICB9XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdmbGlwJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IGZsaXAsXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J10sXG4gIGRhdGE6IHtcbiAgICBfc2tpcDogZmFsc2VcbiAgfVxufTsiLCJpbXBvcnQgeyB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcblxuZnVuY3Rpb24gZ2V0U2lkZU9mZnNldHMob3ZlcmZsb3csIHJlY3QsIHByZXZlbnRlZE9mZnNldHMpIHtcbiAgaWYgKHByZXZlbnRlZE9mZnNldHMgPT09IHZvaWQgMCkge1xuICAgIHByZXZlbnRlZE9mZnNldHMgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRvcDogb3ZlcmZsb3cudG9wIC0gcmVjdC5oZWlnaHQgLSBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgcmlnaHQ6IG92ZXJmbG93LnJpZ2h0IC0gcmVjdC53aWR0aCArIHByZXZlbnRlZE9mZnNldHMueCxcbiAgICBib3R0b206IG92ZXJmbG93LmJvdHRvbSAtIHJlY3QuaGVpZ2h0ICsgcHJldmVudGVkT2Zmc2V0cy55LFxuICAgIGxlZnQ6IG92ZXJmbG93LmxlZnQgLSByZWN0LndpZHRoIC0gcHJldmVudGVkT2Zmc2V0cy54XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChvdmVyZmxvdykge1xuICByZXR1cm4gW3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdF0uc29tZShmdW5jdGlvbiAoc2lkZSkge1xuICAgIHJldHVybiBvdmVyZmxvd1tzaWRlXSA+PSAwO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGlkZShfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBwcmV2ZW50ZWRPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wcmV2ZW50T3ZlcmZsb3c7XG4gIHZhciByZWZlcmVuY2VPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgZWxlbWVudENvbnRleHQ6ICdyZWZlcmVuY2UnXG4gIH0pO1xuICB2YXIgcG9wcGVyQWx0T3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGFsdEJvdW5kYXJ5OiB0cnVlXG4gIH0pO1xuICB2YXIgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocmVmZXJlbmNlT3ZlcmZsb3csIHJlZmVyZW5jZVJlY3QpO1xuICB2YXIgcG9wcGVyRXNjYXBlT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHBvcHBlckFsdE92ZXJmbG93LCBwb3BwZXJSZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKTtcbiAgdmFyIGlzUmVmZXJlbmNlSGlkZGVuID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyk7XG4gIHZhciBoYXNQb3BwZXJFc2NhcGVkID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHBvcHBlckVzY2FwZU9mZnNldHMpO1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0ge1xuICAgIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0czogcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzLFxuICAgIHBvcHBlckVzY2FwZU9mZnNldHM6IHBvcHBlckVzY2FwZU9mZnNldHMsXG4gICAgaXNSZWZlcmVuY2VIaWRkZW46IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgIGhhc1BvcHBlckVzY2FwZWQ6IGhhc1BvcHBlckVzY2FwZWRcbiAgfTtcbiAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICdkYXRhLXBvcHBlci1yZWZlcmVuY2UtaGlkZGVuJzogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgJ2RhdGEtcG9wcGVyLWVzY2FwZWQnOiBoYXNQb3BwZXJFc2NhcGVkXG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnaGlkZScsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J10sXG4gIGZuOiBoaWRlXG59OyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgYXBwbHlTdHlsZXMgfSBmcm9tIFwiLi9hcHBseVN0eWxlcy5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhcnJvdyB9IGZyb20gXCIuL2Fycm93LmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbXB1dGVTdHlsZXMgfSBmcm9tIFwiLi9jb21wdXRlU3R5bGVzLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGV2ZW50TGlzdGVuZXJzIH0gZnJvbSBcIi4vZXZlbnRMaXN0ZW5lcnMuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmxpcCB9IGZyb20gXCIuL2ZsaXAuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaGlkZSB9IGZyb20gXCIuL2hpZGUuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgb2Zmc2V0IH0gZnJvbSBcIi4vb2Zmc2V0LmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHBvcHBlck9mZnNldHMgfSBmcm9tIFwiLi9wb3BwZXJPZmZzZXRzLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHByZXZlbnRPdmVyZmxvdyB9IGZyb20gXCIuL3ByZXZlbnRPdmVyZmxvdy5qc1wiOyIsImltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBwbGFjZW1lbnRzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCByZWN0cywgb2Zmc2V0KSB7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICB2YXIgaW52ZXJ0RGlzdGFuY2UgPSBbbGVmdCwgdG9wXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyAtMSA6IDE7XG5cbiAgdmFyIF9yZWYgPSB0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gb2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgfSkpIDogb2Zmc2V0LFxuICAgICAgc2tpZGRpbmcgPSBfcmVmWzBdLFxuICAgICAgZGlzdGFuY2UgPSBfcmVmWzFdO1xuXG4gIHNraWRkaW5nID0gc2tpZGRpbmcgfHwgMDtcbiAgZGlzdGFuY2UgPSAoZGlzdGFuY2UgfHwgMCkgKiBpbnZlcnREaXN0YW5jZTtcbiAgcmV0dXJuIFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8ge1xuICAgIHg6IGRpc3RhbmNlLFxuICAgIHk6IHNraWRkaW5nXG4gIH0gOiB7XG4gICAgeDogc2tpZGRpbmcsXG4gICAgeTogZGlzdGFuY2VcbiAgfTtcbn1cblxuZnVuY3Rpb24gb2Zmc2V0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZjIubmFtZTtcbiAgdmFyIF9vcHRpb25zJG9mZnNldCA9IG9wdGlvbnMub2Zmc2V0LFxuICAgICAgb2Zmc2V0ID0gX29wdGlvbnMkb2Zmc2V0ID09PSB2b2lkIDAgPyBbMCwgMF0gOiBfb3B0aW9ucyRvZmZzZXQ7XG4gIHZhciBkYXRhID0gcGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgYWNjW3BsYWNlbWVudF0gPSBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHN0YXRlLnJlY3RzLCBvZmZzZXQpO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgdmFyIF9kYXRhJHN0YXRlJHBsYWNlbWVudCA9IGRhdGFbc3RhdGUucGxhY2VtZW50XSxcbiAgICAgIHggPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueCxcbiAgICAgIHkgPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzICE9IG51bGwpIHtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueCArPSB4O1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy55ICs9IHk7XG4gIH1cblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ29mZnNldCcsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgZm46IG9mZnNldFxufTsiLCJpbXBvcnQgY29tcHV0ZU9mZnNldHMgZnJvbSBcIi4uL3V0aWxzL2NvbXB1dGVPZmZzZXRzLmpzXCI7XG5cbmZ1bmN0aW9uIHBvcHBlck9mZnNldHMoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgLy8gT2Zmc2V0cyBhcmUgdGhlIGFjdHVhbCBwb3NpdGlvbiB0aGUgcG9wcGVyIG5lZWRzIHRvIGhhdmUgdG8gYmVcbiAgLy8gcHJvcGVybHkgcG9zaXRpb25lZCBuZWFyIGl0cyByZWZlcmVuY2UgZWxlbWVudFxuICAvLyBUaGlzIGlzIHRoZSBtb3N0IGJhc2ljIHBsYWNlbWVudCwgYW5kIHdpbGwgYmUgYWRqdXN0ZWQgYnlcbiAgLy8gdGhlIG1vZGlmaWVycyBpbiB0aGUgbmV4dCBzdGVwXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiBzdGF0ZS5yZWN0cy5yZWZlcmVuY2UsXG4gICAgZWxlbWVudDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncG9wcGVyT2Zmc2V0cycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAncmVhZCcsXG4gIGZuOiBwb3BwZXJPZmZzZXRzLFxuICBkYXRhOiB7fVxufTsiLCJpbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHN0YXJ0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0QWx0QXhpcyBmcm9tIFwiLi4vdXRpbHMvZ2V0QWx0QXhpcy5qc1wiO1xuaW1wb3J0IHdpdGhpbiBmcm9tIFwiLi4vdXRpbHMvd2l0aGluLmpzXCI7XG5pbXBvcnQgZ2V0TGF5b3V0UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSBcIi4uL3V0aWxzL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IGdldEZyZXNoU2lkZU9iamVjdCBmcm9tIFwiLi4vdXRpbHMvZ2V0RnJlc2hTaWRlT2JqZWN0LmpzXCI7XG5pbXBvcnQgeyBtYXggYXMgbWF0aE1heCwgbWluIGFzIG1hdGhNaW4gfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiO1xuXG5mdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEF4aXMsXG4gICAgICBib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBvcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcsXG4gICAgICBfb3B0aW9ucyR0ZXRoZXIgPSBvcHRpb25zLnRldGhlcixcbiAgICAgIHRldGhlciA9IF9vcHRpb25zJHRldGhlciA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHRldGhlcixcbiAgICAgIF9vcHRpb25zJHRldGhlck9mZnNldCA9IG9wdGlvbnMudGV0aGVyT2Zmc2V0LFxuICAgICAgdGV0aGVyT2Zmc2V0ID0gX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkdGV0aGVyT2Zmc2V0O1xuICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeVxuICB9KTtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24oc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIGlzQmFzZVBsYWNlbWVudCA9ICF2YXJpYXRpb247XG4gIHZhciBtYWluQXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgdmFyIGFsdEF4aXMgPSBnZXRBbHRBeGlzKG1haW5BeGlzKTtcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIHRldGhlck9mZnNldFZhbHVlID0gdHlwZW9mIHRldGhlck9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IHRldGhlck9mZnNldChPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pKSA6IHRldGhlck9mZnNldDtcbiAgdmFyIGRhdGEgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgaWYgKCFwb3BwZXJPZmZzZXRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNoZWNrTWFpbkF4aXMgfHwgY2hlY2tBbHRBeGlzKSB7XG4gICAgdmFyIG1haW5TaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gICAgdmFyIGFsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gICAgdmFyIG9mZnNldCA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdO1xuICAgIHZhciBtaW4gPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSArIG92ZXJmbG93W21haW5TaWRlXTtcbiAgICB2YXIgbWF4ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gLSBvdmVyZmxvd1thbHRTaWRlXTtcbiAgICB2YXIgYWRkaXRpdmUgPSB0ZXRoZXIgPyAtcG9wcGVyUmVjdFtsZW5dIC8gMiA6IDA7XG4gICAgdmFyIG1pbkxlbiA9IHZhcmlhdGlvbiA9PT0gc3RhcnQgPyByZWZlcmVuY2VSZWN0W2xlbl0gOiBwb3BwZXJSZWN0W2xlbl07XG4gICAgdmFyIG1heExlbiA9IHZhcmlhdGlvbiA9PT0gc3RhcnQgPyAtcG9wcGVyUmVjdFtsZW5dIDogLXJlZmVyZW5jZVJlY3RbbGVuXTsgLy8gV2UgbmVlZCB0byBpbmNsdWRlIHRoZSBhcnJvdyBpbiB0aGUgY2FsY3VsYXRpb24gc28gdGhlIGFycm93IGRvZXNuJ3QgZ29cbiAgICAvLyBvdXRzaWRlIHRoZSByZWZlcmVuY2UgYm91bmRzXG5cbiAgICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gICAgdmFyIGFycm93UmVjdCA9IHRldGhlciAmJiBhcnJvd0VsZW1lbnQgPyBnZXRMYXlvdXRSZWN0KGFycm93RWxlbWVudCkgOiB7XG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMFxuICAgIH07XG4gICAgdmFyIGFycm93UGFkZGluZ09iamVjdCA9IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXSA/IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXS5wYWRkaW5nIDogZ2V0RnJlc2hTaWRlT2JqZWN0KCk7XG4gICAgdmFyIGFycm93UGFkZGluZ01pbiA9IGFycm93UGFkZGluZ09iamVjdFttYWluU2lkZV07XG4gICAgdmFyIGFycm93UGFkZGluZ01heCA9IGFycm93UGFkZGluZ09iamVjdFthbHRTaWRlXTsgLy8gSWYgdGhlIHJlZmVyZW5jZSBsZW5ndGggaXMgc21hbGxlciB0aGFuIHRoZSBhcnJvdyBsZW5ndGgsIHdlIGRvbid0IHdhbnRcbiAgICAvLyB0byBpbmNsdWRlIGl0cyBmdWxsIHNpemUgaW4gdGhlIGNhbGN1bGF0aW9uLiBJZiB0aGUgcmVmZXJlbmNlIGlzIHNtYWxsXG4gICAgLy8gYW5kIG5lYXIgdGhlIGVkZ2Ugb2YgYSBib3VuZGFyeSwgdGhlIHBvcHBlciBjYW4gb3ZlcmZsb3cgZXZlbiBpZiB0aGVcbiAgICAvLyByZWZlcmVuY2UgaXMgbm90IG92ZXJmbG93aW5nIGFzIHdlbGwgKGUuZy4gdmlydHVhbCBlbGVtZW50cyB3aXRoIG5vXG4gICAgLy8gd2lkdGggb3IgaGVpZ2h0KVxuXG4gICAgdmFyIGFycm93TGVuID0gd2l0aGluKDAsIHJlZmVyZW5jZVJlY3RbbGVuXSwgYXJyb3dSZWN0W2xlbl0pO1xuICAgIHZhciBtaW5PZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyByZWZlcmVuY2VSZWN0W2xlbl0gLyAyIC0gYWRkaXRpdmUgLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIHRldGhlck9mZnNldFZhbHVlIDogbWluTGVuIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSB0ZXRoZXJPZmZzZXRWYWx1ZTtcbiAgICB2YXIgbWF4T2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gLXJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgKyBhZGRpdGl2ZSArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgdGV0aGVyT2Zmc2V0VmFsdWUgOiBtYXhMZW4gKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIHRldGhlck9mZnNldFZhbHVlO1xuICAgIHZhciBhcnJvd09mZnNldFBhcmVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93ICYmIGdldE9mZnNldFBhcmVudChzdGF0ZS5lbGVtZW50cy5hcnJvdyk7XG4gICAgdmFyIGNsaWVudE9mZnNldCA9IGFycm93T2Zmc2V0UGFyZW50ID8gbWFpbkF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFRvcCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50TGVmdCB8fCAwIDogMDtcbiAgICB2YXIgb2Zmc2V0TW9kaWZpZXJWYWx1ZSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0ID8gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXRbc3RhdGUucGxhY2VtZW50XVttYWluQXhpc10gOiAwO1xuICAgIHZhciB0ZXRoZXJNaW4gPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSArIG1pbk9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWUgLSBjbGllbnRPZmZzZXQ7XG4gICAgdmFyIHRldGhlck1heCA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdICsgbWF4T2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZTtcblxuICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICB2YXIgcHJldmVudGVkT2Zmc2V0ID0gd2l0aGluKHRldGhlciA/IG1hdGhNaW4obWluLCB0ZXRoZXJNaW4pIDogbWluLCBvZmZzZXQsIHRldGhlciA/IG1hdGhNYXgobWF4LCB0ZXRoZXJNYXgpIDogbWF4KTtcbiAgICAgIHBvcHBlck9mZnNldHNbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0O1xuICAgICAgZGF0YVttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQgLSBvZmZzZXQ7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgICAgdmFyIF9tYWluU2lkZSA9IG1haW5BeGlzID09PSAneCcgPyB0b3AgOiBsZWZ0O1xuXG4gICAgICB2YXIgX2FsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gYm90dG9tIDogcmlnaHQ7XG5cbiAgICAgIHZhciBfb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1thbHRBeGlzXTtcblxuICAgICAgdmFyIF9taW4gPSBfb2Zmc2V0ICsgb3ZlcmZsb3dbX21haW5TaWRlXTtcblxuICAgICAgdmFyIF9tYXggPSBfb2Zmc2V0IC0gb3ZlcmZsb3dbX2FsdFNpZGVdO1xuXG4gICAgICB2YXIgX3ByZXZlbnRlZE9mZnNldCA9IHdpdGhpbih0ZXRoZXIgPyBtYXRoTWluKF9taW4sIHRldGhlck1pbikgOiBfbWluLCBfb2Zmc2V0LCB0ZXRoZXIgPyBtYXRoTWF4KF9tYXgsIHRldGhlck1heCkgOiBfbWF4KTtcblxuICAgICAgcG9wcGVyT2Zmc2V0c1thbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQ7XG4gICAgICBkYXRhW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldCAtIF9vZmZzZXQ7XG4gICAgfVxuICB9XG5cbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogcHJldmVudE92ZXJmbG93LFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddXG59OyIsImltcG9ydCB7IHBvcHBlckdlbmVyYXRvciwgZGV0ZWN0T3ZlcmZsb3cgfSBmcm9tIFwiLi9jcmVhdGVQb3BwZXIuanNcIjtcbmltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9tb2RpZmllcnMvZXZlbnRMaXN0ZW5lcnMuanNcIjtcbmltcG9ydCBwb3BwZXJPZmZzZXRzIGZyb20gXCIuL21vZGlmaWVycy9wb3BwZXJPZmZzZXRzLmpzXCI7XG5pbXBvcnQgY29tcHV0ZVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvY29tcHV0ZVN0eWxlcy5qc1wiO1xuaW1wb3J0IGFwcGx5U3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9hcHBseVN0eWxlcy5qc1wiO1xudmFyIGRlZmF1bHRNb2RpZmllcnMgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMsIGNvbXB1dGVTdHlsZXMsIGFwcGx5U3R5bGVzXTtcbnZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKHtcbiAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVyc1xufSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyLCBwb3BwZXJHZW5lcmF0b3IsIGRlZmF1bHRNb2RpZmllcnMsIGRldGVjdE92ZXJmbG93IH07IiwiaW1wb3J0IHsgcG9wcGVyR2VuZXJhdG9yLCBkZXRlY3RPdmVyZmxvdyB9IGZyb20gXCIuL2NyZWF0ZVBvcHBlci5qc1wiO1xuaW1wb3J0IGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qc1wiO1xuaW1wb3J0IHBvcHBlck9mZnNldHMgZnJvbSBcIi4vbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanNcIjtcbmltcG9ydCBjb21wdXRlU3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9jb21wdXRlU3R5bGVzLmpzXCI7XG5pbXBvcnQgYXBwbHlTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2FwcGx5U3R5bGVzLmpzXCI7XG5pbXBvcnQgb2Zmc2V0IGZyb20gXCIuL21vZGlmaWVycy9vZmZzZXQuanNcIjtcbmltcG9ydCBmbGlwIGZyb20gXCIuL21vZGlmaWVycy9mbGlwLmpzXCI7XG5pbXBvcnQgcHJldmVudE92ZXJmbG93IGZyb20gXCIuL21vZGlmaWVycy9wcmV2ZW50T3ZlcmZsb3cuanNcIjtcbmltcG9ydCBhcnJvdyBmcm9tIFwiLi9tb2RpZmllcnMvYXJyb3cuanNcIjtcbmltcG9ydCBoaWRlIGZyb20gXCIuL21vZGlmaWVycy9oaWRlLmpzXCI7XG52YXIgZGVmYXVsdE1vZGlmaWVycyA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cywgY29tcHV0ZVN0eWxlcywgYXBwbHlTdHlsZXMsIG9mZnNldCwgZmxpcCwgcHJldmVudE92ZXJmbG93LCBhcnJvdywgaGlkZV07XG52YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG4gIGRlZmF1bHRNb2RpZmllcnM6IGRlZmF1bHRNb2RpZmllcnNcbn0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciwgcG9wcGVyR2VuZXJhdG9yLCBkZWZhdWx0TW9kaWZpZXJzLCBkZXRlY3RPdmVyZmxvdyB9OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciBhcyBjcmVhdGVQb3BwZXJMaXRlIH0gZnJvbSBcIi4vcG9wcGVyLWxpdGUuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgKiBmcm9tIFwiLi9tb2RpZmllcnMvaW5kZXguanNcIjsiLCJpbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IHsgdmFyaWF0aW9uUGxhY2VtZW50cywgYmFzZVBsYWNlbWVudHMsIHBsYWNlbWVudHMgYXMgYWxsUGxhY2VtZW50cyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPSBfb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPT09IHZvaWQgMCA/IGFsbFBsYWNlbWVudHMgOiBfb3B0aW9ucyRhbGxvd2VkQXV0b1A7XG4gIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KTtcbiAgdmFyIHBsYWNlbWVudHMgPSB2YXJpYXRpb24gPyBmbGlwVmFyaWF0aW9ucyA/IHZhcmlhdGlvblBsYWNlbWVudHMgOiB2YXJpYXRpb25QbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSB2YXJpYXRpb247XG4gIH0pIDogYmFzZVBsYWNlbWVudHM7XG4gIHZhciBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWxsb3dlZEF1dG9QbGFjZW1lbnRzLmluZGV4T2YocGxhY2VtZW50KSA+PSAwO1xuICB9KTtcblxuICBpZiAoYWxsb3dlZFBsYWNlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogVGhlIGBhbGxvd2VkQXV0b1BsYWNlbWVudHNgIG9wdGlvbiBkaWQgbm90IGFsbG93IGFueScsICdwbGFjZW1lbnRzLiBFbnN1cmUgdGhlIGBwbGFjZW1lbnRgIG9wdGlvbiBtYXRjaGVzIHRoZSB2YXJpYXRpb24nLCAnb2YgdGhlIGFsbG93ZWQgcGxhY2VtZW50cy4nLCAnRm9yIGV4YW1wbGUsIFwiYXV0b1wiIGNhbm5vdCBiZSB1c2VkIHRvIGFsbG93IFwiYm90dG9tLXN0YXJ0XCIuJywgJ1VzZSBcImF1dG8tc3RhcnRcIiBpbnN0ZWFkLiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdOiBGbG93IHNlZW1zIHRvIGhhdmUgcHJvYmxlbXMgd2l0aCB0d28gYXJyYXkgdW5pb25zLi4uXG5cblxuICB2YXIgb3ZlcmZsb3dzID0gYWxsb3dlZFBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgfSlbZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpXTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvdmVyZmxvd3MpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dzW2FdIC0gb3ZlcmZsb3dzW2JdO1xuICB9KTtcbn0iLCJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuL2dldFZhcmlhdGlvbi5qc1wiO1xuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCwgc3RhcnQsIGVuZCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZU9mZnNldHMoX3JlZikge1xuICB2YXIgcmVmZXJlbmNlID0gX3JlZi5yZWZlcmVuY2UsXG4gICAgICBlbGVtZW50ID0gX3JlZi5lbGVtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50ID8gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIDogbnVsbDtcbiAgdmFyIHZhcmlhdGlvbiA9IHBsYWNlbWVudCA/IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIDogbnVsbDtcbiAgdmFyIGNvbW1vblggPSByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCAvIDIgLSBlbGVtZW50LndpZHRoIC8gMjtcbiAgdmFyIGNvbW1vblkgPSByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHQgLyAyIC0gZWxlbWVudC5oZWlnaHQgLyAyO1xuICB2YXIgb2Zmc2V0cztcblxuICBzd2l0Y2ggKGJhc2VQbGFjZW1lbnQpIHtcbiAgICBjYXNlIHRvcDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55IC0gZWxlbWVudC5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgYm90dG9tOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHJpZ2h0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgbGVmdDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54IC0gZWxlbWVudC53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54LFxuICAgICAgICB5OiByZWZlcmVuY2UueVxuICAgICAgfTtcbiAgfVxuXG4gIHZhciBtYWluQXhpcyA9IGJhc2VQbGFjZW1lbnQgPyBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCkgOiBudWxsO1xuXG4gIGlmIChtYWluQXhpcyAhPSBudWxsKSB7XG4gICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICBzd2l0Y2ggKHZhcmlhdGlvbikge1xuICAgICAgY2FzZSBzdGFydDpcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSAtIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgZW5kOlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdICsgKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0cztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZShmbikge1xuICB2YXIgcGVuZGluZztcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXBlbmRpbmcpIHtcbiAgICAgIHBlbmRpbmcgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwZW5kaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHJlc29sdmUoZm4oKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBlbmRpbmc7XG4gIH07XG59IiwiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldENsaXBwaW5nUmVjdCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldENsaXBwaW5nUmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGNvbXB1dGVPZmZzZXRzIGZyb20gXCIuL2NvbXB1dGVPZmZzZXRzLmpzXCI7XG5pbXBvcnQgcmVjdFRvQ2xpZW50UmVjdCBmcm9tIFwiLi9yZWN0VG9DbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgeyBjbGlwcGluZ1BhcmVudHMsIHJlZmVyZW5jZSwgcG9wcGVyLCBib3R0b20sIHRvcCwgcmlnaHQsIGJhc2VQbGFjZW1lbnRzLCB2aWV3cG9ydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4uL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgbWVyZ2VQYWRkaW5nT2JqZWN0IGZyb20gXCIuL21lcmdlUGFkZGluZ09iamVjdC5qc1wiO1xuaW1wb3J0IGV4cGFuZFRvSGFzaE1hcCBmcm9tIFwiLi9leHBhbmRUb0hhc2hNYXAuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIF9vcHRpb25zJHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gc3RhdGUucGxhY2VtZW50IDogX29wdGlvbnMkcGxhY2VtZW50LFxuICAgICAgX29wdGlvbnMkYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMkYm91bmRhcnkgPT09IHZvaWQgMCA/IGNsaXBwaW5nUGFyZW50cyA6IF9vcHRpb25zJGJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyB2aWV3cG9ydCA6IF9vcHRpb25zJHJvb3RCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJGVsZW1lbnRDb250ZSA9IF9vcHRpb25zLmVsZW1lbnRDb250ZXh0LFxuICAgICAgZWxlbWVudENvbnRleHQgPSBfb3B0aW9ucyRlbGVtZW50Q29udGUgPT09IHZvaWQgMCA/IHBvcHBlciA6IF9vcHRpb25zJGVsZW1lbnRDb250ZSxcbiAgICAgIF9vcHRpb25zJGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IF9vcHRpb25zJGFsdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMkcGFkZGluZyA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHBhZGRpbmc7XG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbiAgdmFyIGFsdENvbnRleHQgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcmVmZXJlbmNlIDogcG9wcGVyO1xuICB2YXIgcmVmZXJlbmNlRWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbYWx0Qm91bmRhcnkgPyBhbHRDb250ZXh0IDogZWxlbWVudENvbnRleHRdO1xuICB2YXIgY2xpcHBpbmdDbGllbnRSZWN0ID0gZ2V0Q2xpcHBpbmdSZWN0KGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQgOiBlbGVtZW50LmNvbnRleHRFbGVtZW50IHx8IGdldERvY3VtZW50RWxlbWVudChzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5KTtcbiAgdmFyIHJlZmVyZW5jZUNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QocmVmZXJlbmNlRWxlbWVudCk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlQ2xpZW50UmVjdCxcbiAgICBlbGVtZW50OiBwb3BwZXJSZWN0LFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pO1xuICB2YXIgcG9wcGVyQ2xpZW50UmVjdCA9IHJlY3RUb0NsaWVudFJlY3QoT2JqZWN0LmFzc2lnbih7fSwgcG9wcGVyUmVjdCwgcG9wcGVyT2Zmc2V0cykpO1xuICB2YXIgZWxlbWVudENsaWVudFJlY3QgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcG9wcGVyQ2xpZW50UmVjdCA6IHJlZmVyZW5jZUNsaWVudFJlY3Q7IC8vIHBvc2l0aXZlID0gb3ZlcmZsb3dpbmcgdGhlIGNsaXBwaW5nIHJlY3RcbiAgLy8gMCBvciBuZWdhdGl2ZSA9IHdpdGhpbiB0aGUgY2xpcHBpbmcgcmVjdFxuXG4gIHZhciBvdmVyZmxvd09mZnNldHMgPSB7XG4gICAgdG9wOiBjbGlwcGluZ0NsaWVudFJlY3QudG9wIC0gZWxlbWVudENsaWVudFJlY3QudG9wICsgcGFkZGluZ09iamVjdC50b3AsXG4gICAgYm90dG9tOiBlbGVtZW50Q2xpZW50UmVjdC5ib3R0b20gLSBjbGlwcGluZ0NsaWVudFJlY3QuYm90dG9tICsgcGFkZGluZ09iamVjdC5ib3R0b20sXG4gICAgbGVmdDogY2xpcHBpbmdDbGllbnRSZWN0LmxlZnQgLSBlbGVtZW50Q2xpZW50UmVjdC5sZWZ0ICsgcGFkZGluZ09iamVjdC5sZWZ0LFxuICAgIHJpZ2h0OiBlbGVtZW50Q2xpZW50UmVjdC5yaWdodCAtIGNsaXBwaW5nQ2xpZW50UmVjdC5yaWdodCArIHBhZGRpbmdPYmplY3QucmlnaHRcbiAgfTtcbiAgdmFyIG9mZnNldERhdGEgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldDsgLy8gT2Zmc2V0cyBjYW4gYmUgYXBwbGllZCBvbmx5IHRvIHRoZSBwb3BwZXIgZWxlbWVudFxuXG4gIGlmIChlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyICYmIG9mZnNldERhdGEpIHtcbiAgICB2YXIgb2Zmc2V0ID0gb2Zmc2V0RGF0YVtwbGFjZW1lbnRdO1xuICAgIE9iamVjdC5rZXlzKG92ZXJmbG93T2Zmc2V0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbXVsdGlwbHkgPSBbcmlnaHQsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAxIDogLTE7XG4gICAgICB2YXIgYXhpcyA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAneScgOiAneCc7XG4gICAgICBvdmVyZmxvd09mZnNldHNba2V5XSArPSBvZmZzZXRbYXhpc10gKiBtdWx0aXBseTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBvdmVyZmxvd09mZnNldHM7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhwYW5kVG9IYXNoTWFwKHZhbHVlLCBrZXlzKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAoaGFzaE1hcCwga2V5KSB7XG4gICAgaGFzaE1hcFtrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIGhhc2hNYXA7XG4gIH0sIHt9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoc3RyKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBbXS5jb25jYXQoYXJncykucmVkdWNlKGZ1bmN0aW9uIChwLCBjKSB7XG4gICAgcmV0dXJuIHAucmVwbGFjZSgvJXMvLCBjKTtcbiAgfSwgc3RyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBbHRBeGlzKGF4aXMpIHtcbiAgcmV0dXJuIGF4aXMgPT09ICd4JyA/ICd5JyA6ICd4Jztcbn0iLCJpbXBvcnQgeyBhdXRvIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RnJlc2hTaWRlT2JqZWN0KCkge1xuICByZXR1cm4ge1xuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMFxuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSA+PSAwID8gJ3gnIDogJ3knO1xufSIsInZhciBoYXNoID0ge1xuICBsZWZ0OiAncmlnaHQnLFxuICByaWdodDogJ2xlZnQnLFxuICBib3R0b206ICd0b3AnLFxuICB0b3A6ICdib3R0b20nXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufSIsInZhciBoYXNoID0ge1xuICBzdGFydDogJ2VuZCcsXG4gIGVuZDogJ3N0YXJ0J1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcbn0iLCJleHBvcnQgdmFyIG1heCA9IE1hdGgubWF4O1xuZXhwb3J0IHZhciBtaW4gPSBNYXRoLm1pbjtcbmV4cG9ydCB2YXIgcm91bmQgPSBNYXRoLnJvdW5kOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlQnlOYW1lKG1vZGlmaWVycykge1xuICB2YXIgbWVyZ2VkID0gbW9kaWZpZXJzLnJlZHVjZShmdW5jdGlvbiAobWVyZ2VkLCBjdXJyZW50KSB7XG4gICAgdmFyIGV4aXN0aW5nID0gbWVyZ2VkW2N1cnJlbnQubmFtZV07XG4gICAgbWVyZ2VkW2N1cnJlbnQubmFtZV0gPSBleGlzdGluZyA/IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLCBjdXJyZW50LCB7XG4gICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5vcHRpb25zLCBjdXJyZW50Lm9wdGlvbnMpLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcuZGF0YSwgY3VycmVudC5kYXRhKVxuICAgIH0pIDogY3VycmVudDtcbiAgICByZXR1cm4gbWVyZ2VkO1xuICB9LCB7fSk7IC8vIElFMTEgZG9lcyBub3Qgc3VwcG9ydCBPYmplY3QudmFsdWVzXG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKG1lcmdlZCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gbWVyZ2VkW2tleV07XG4gIH0pO1xufSIsImltcG9ydCBnZXRGcmVzaFNpZGVPYmplY3QgZnJvbSBcIi4vZ2V0RnJlc2hTaWRlT2JqZWN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZVBhZGRpbmdPYmplY3QocGFkZGluZ09iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZ2V0RnJlc2hTaWRlT2JqZWN0KCksIHBhZGRpbmdPYmplY3QpO1xufSIsImltcG9ydCB7IG1vZGlmaWVyUGhhc2VzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7IC8vIHNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDk4NzUyNTVcblxuZnVuY3Rpb24gb3JkZXIobW9kaWZpZXJzKSB7XG4gIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gIHZhciB2aXNpdGVkID0gbmV3IFNldCgpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIG1hcC5zZXQobW9kaWZpZXIubmFtZSwgbW9kaWZpZXIpO1xuICB9KTsgLy8gT24gdmlzaXRpbmcgb2JqZWN0LCBjaGVjayBmb3IgaXRzIGRlcGVuZGVuY2llcyBhbmQgdmlzaXQgdGhlbSByZWN1cnNpdmVseVxuXG4gIGZ1bmN0aW9uIHNvcnQobW9kaWZpZXIpIHtcbiAgICB2aXNpdGVkLmFkZChtb2RpZmllci5uYW1lKTtcbiAgICB2YXIgcmVxdWlyZXMgPSBbXS5jb25jYXQobW9kaWZpZXIucmVxdWlyZXMgfHwgW10sIG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMgfHwgW10pO1xuICAgIHJlcXVpcmVzLmZvckVhY2goZnVuY3Rpb24gKGRlcCkge1xuICAgICAgaWYgKCF2aXNpdGVkLmhhcyhkZXApKSB7XG4gICAgICAgIHZhciBkZXBNb2RpZmllciA9IG1hcC5nZXQoZGVwKTtcblxuICAgICAgICBpZiAoZGVwTW9kaWZpZXIpIHtcbiAgICAgICAgICBzb3J0KGRlcE1vZGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJlc3VsdC5wdXNoKG1vZGlmaWVyKTtcbiAgfVxuXG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIGlmICghdmlzaXRlZC5oYXMobW9kaWZpZXIubmFtZSkpIHtcbiAgICAgIC8vIGNoZWNrIGZvciB2aXNpdGVkIG9iamVjdFxuICAgICAgc29ydChtb2RpZmllcik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3JkZXJNb2RpZmllcnMobW9kaWZpZXJzKSB7XG4gIC8vIG9yZGVyIGJhc2VkIG9uIGRlcGVuZGVuY2llc1xuICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyKG1vZGlmaWVycyk7IC8vIG9yZGVyIGJhc2VkIG9uIHBoYXNlXG5cbiAgcmV0dXJuIG1vZGlmaWVyUGhhc2VzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwaGFzZSkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgcmV0dXJuIG1vZGlmaWVyLnBoYXNlID09PSBwaGFzZTtcbiAgICB9KSk7XG4gIH0sIFtdKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWN0VG9DbGllbnRSZWN0KHJlY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJlY3QsIHtcbiAgICBsZWZ0OiByZWN0LngsXG4gICAgdG9wOiByZWN0LnksXG4gICAgcmlnaHQ6IHJlY3QueCArIHJlY3Qud2lkdGgsXG4gICAgYm90dG9tOiByZWN0LnkgKyByZWN0LmhlaWdodFxuICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmlxdWVCeShhcnIsIGZuKSB7XG4gIHZhciBpZGVudGlmaWVycyA9IG5ldyBTZXQoKTtcbiAgcmV0dXJuIGFyci5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB2YXIgaWRlbnRpZmllciA9IGZuKGl0ZW0pO1xuXG4gICAgaWYgKCFpZGVudGlmaWVycy5oYXMoaWRlbnRpZmllcikpIHtcbiAgICAgIGlkZW50aWZpZXJzLmFkZChpZGVudGlmaWVyKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59IiwiaW1wb3J0IGZvcm1hdCBmcm9tIFwiLi9mb3JtYXQuanNcIjtcbmltcG9ydCB7IG1vZGlmaWVyUGhhc2VzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG52YXIgSU5WQUxJRF9NT0RJRklFUl9FUlJPUiA9ICdQb3BwZXI6IG1vZGlmaWVyIFwiJXNcIiBwcm92aWRlZCBhbiBpbnZhbGlkICVzIHByb3BlcnR5LCBleHBlY3RlZCAlcyBidXQgZ290ICVzJztcbnZhciBNSVNTSU5HX0RFUEVOREVOQ1lfRVJST1IgPSAnUG9wcGVyOiBtb2RpZmllciBcIiVzXCIgcmVxdWlyZXMgXCIlc1wiLCBidXQgXCIlc1wiIG1vZGlmaWVyIGlzIG5vdCBhdmFpbGFibGUnO1xudmFyIFZBTElEX1BST1BFUlRJRVMgPSBbJ25hbWUnLCAnZW5hYmxlZCcsICdwaGFzZScsICdmbicsICdlZmZlY3QnLCAncmVxdWlyZXMnLCAnb3B0aW9ucyddO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVNb2RpZmllcnMobW9kaWZpZXJzKSB7XG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIE9iamVjdC5rZXlzKG1vZGlmaWVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgJ25hbWUnOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIubmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIFN0cmluZyhtb2RpZmllci5uYW1lKSwgJ1wibmFtZVwiJywgJ1wic3RyaW5nXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5uYW1lKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZW5hYmxlZCc6XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllci5lbmFibGVkICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcImVuYWJsZWRcIicsICdcImJvb2xlYW5cIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLmVuYWJsZWQpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAncGhhc2UnOlxuICAgICAgICAgIGlmIChtb2RpZmllclBoYXNlcy5pbmRleE9mKG1vZGlmaWVyLnBoYXNlKSA8IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcInBoYXNlXCInLCBcImVpdGhlciBcIiArIG1vZGlmaWVyUGhhc2VzLmpvaW4oJywgJyksIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLnBoYXNlKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZm4nOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIuZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcImZuXCInLCAnXCJmdW5jdGlvblwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIuZm4pICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdlZmZlY3QnOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIuZWZmZWN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJlZmZlY3RcIicsICdcImZ1bmN0aW9uXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5mbikgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JlcXVpcmVzJzpcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobW9kaWZpZXIucmVxdWlyZXMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJyZXF1aXJlc1wiJywgJ1wiYXJyYXlcIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLnJlcXVpcmVzKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmVxdWlyZXNJZkV4aXN0cyc6XG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJyZXF1aXJlc0lmRXhpc3RzXCInLCAnXCJhcnJheVwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cykgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ29wdGlvbnMnOlxuICAgICAgICBjYXNlICdkYXRhJzpcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQb3BwZXJKUzogYW4gaW52YWxpZCBwcm9wZXJ0eSBoYXMgYmVlbiBwcm92aWRlZCB0byB0aGUgXFxcIlwiICsgbW9kaWZpZXIubmFtZSArIFwiXFxcIiBtb2RpZmllciwgdmFsaWQgcHJvcGVydGllcyBhcmUgXCIgKyBWQUxJRF9QUk9QRVJUSUVTLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgcmV0dXJuIFwiXFxcIlwiICsgcyArIFwiXFxcIlwiO1xuICAgICAgICAgIH0pLmpvaW4oJywgJykgKyBcIjsgYnV0IFxcXCJcIiArIGtleSArIFwiXFxcIiB3YXMgcHJvdmlkZWQuXCIpO1xuICAgICAgfVxuXG4gICAgICBtb2RpZmllci5yZXF1aXJlcyAmJiBtb2RpZmllci5yZXF1aXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChyZXF1aXJlbWVudCkge1xuICAgICAgICBpZiAobW9kaWZpZXJzLmZpbmQoZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICAgIHJldHVybiBtb2QubmFtZSA9PT0gcmVxdWlyZW1lbnQ7XG4gICAgICAgIH0pID09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChNSVNTSU5HX0RFUEVOREVOQ1lfRVJST1IsIFN0cmluZyhtb2RpZmllci5uYW1lKSwgcmVxdWlyZW1lbnQsIHJlcXVpcmVtZW50KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn0iLCJpbXBvcnQgeyBtYXggYXMgbWF0aE1heCwgbWluIGFzIG1hdGhNaW4gfSBmcm9tIFwiLi9tYXRoLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoaW4obWluLCB2YWx1ZSwgbWF4KSB7XG4gIHJldHVybiBtYXRoTWF4KG1pbiwgbWF0aE1pbih2YWx1ZSwgbWF4KSk7XG59IiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBkb20vc2VsZWN0b3ItZW5naW5lLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTk9ERV9URVhUID0gM1xuXG5jb25zdCBTZWxlY3RvckVuZ2luZSA9IHtcbiAgZmluZChzZWxlY3RvciwgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIHJldHVybiBbXS5jb25jYXQoLi4uRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3RvckFsbC5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKSlcbiAgfSxcblxuICBmaW5kT25lKHNlbGVjdG9yLCBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgcmV0dXJuIEVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3IuY2FsbChlbGVtZW50LCBzZWxlY3RvcilcbiAgfSxcblxuICBjaGlsZHJlbihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBbXS5jb25jYXQoLi4uZWxlbWVudC5jaGlsZHJlbilcbiAgICAgIC5maWx0ZXIoY2hpbGQgPT4gY2hpbGQubWF0Y2hlcyhzZWxlY3RvcikpXG4gIH0sXG5cbiAgcGFyZW50cyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGNvbnN0IHBhcmVudHMgPSBbXVxuXG4gICAgbGV0IGFuY2VzdG9yID0gZWxlbWVudC5wYXJlbnROb2RlXG5cbiAgICB3aGlsZSAoYW5jZXN0b3IgJiYgYW5jZXN0b3Iubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmIGFuY2VzdG9yLm5vZGVUeXBlICE9PSBOT0RFX1RFWFQpIHtcbiAgICAgIGlmIChhbmNlc3Rvci5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBwYXJlbnRzLnB1c2goYW5jZXN0b3IpXG4gICAgICB9XG5cbiAgICAgIGFuY2VzdG9yID0gYW5jZXN0b3IucGFyZW50Tm9kZVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRzXG4gIH0sXG5cbiAgcHJldihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGxldCBwcmV2aW91cyA9IGVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZ1xuXG4gICAgd2hpbGUgKHByZXZpb3VzKSB7XG4gICAgICBpZiAocHJldmlvdXMubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIFtwcmV2aW91c11cbiAgICAgIH1cblxuICAgICAgcHJldmlvdXMgPSBwcmV2aW91cy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH0sXG5cbiAgbmV4dChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGxldCBuZXh0ID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmdcblxuICAgIHdoaWxlIChuZXh0KSB7XG4gICAgICBpZiAobmV4dC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gW25leHRdXG4gICAgICB9XG5cbiAgICAgIG5leHQgPSBuZXh0Lm5leHRFbGVtZW50U2libGluZ1xuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdG9yRW5naW5lXG4iLCJpbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiB1dGlsL2luZGV4LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTUFYX1VJRCA9IDEwMDAwMDBcbmNvbnN0IE1JTExJU0VDT05EU19NVUxUSVBMSUVSID0gMTAwMFxuY29uc3QgVFJBTlNJVElPTl9FTkQgPSAndHJhbnNpdGlvbmVuZCdcblxuLy8gU2hvdXRvdXQgQW5ndXNDcm9sbCAoaHR0cHM6Ly9nb28uZ2wvcHh3UUdwKVxuY29uc3QgdG9UeXBlID0gb2JqID0+IHtcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBgJHtvYmp9YFxuICB9XG5cbiAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwob2JqKS5tYXRjaCgvXFxzKFthLXpdKykvaSlbMV0udG9Mb3dlckNhc2UoKVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQdWJsaWMgVXRpbCBBcGlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgZ2V0VUlEID0gcHJlZml4ID0+IHtcbiAgZG8ge1xuICAgIHByZWZpeCArPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNQVhfVUlEKVxuICB9IHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXgpKVxuXG4gIHJldHVybiBwcmVmaXhcbn1cblxuY29uc3QgZ2V0U2VsZWN0b3IgPSBlbGVtZW50ID0+IHtcbiAgbGV0IHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtdGFyZ2V0JylcblxuICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnIycpIHtcbiAgICBsZXQgaHJlZkF0dHIgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpXG5cbiAgICAvLyBUaGUgb25seSB2YWxpZCBjb250ZW50IHRoYXQgY291bGQgZG91YmxlIGFzIGEgc2VsZWN0b3IgYXJlIElEcyBvciBjbGFzc2VzLFxuICAgIC8vIHNvIGV2ZXJ5dGhpbmcgc3RhcnRpbmcgd2l0aCBgI2Agb3IgYC5gLiBJZiBhIFwicmVhbFwiIFVSTCBpcyB1c2VkIGFzIHRoZSBzZWxlY3RvcixcbiAgICAvLyBgZG9jdW1lbnQucXVlcnlTZWxlY3RvcmAgd2lsbCByaWdodGZ1bGx5IGNvbXBsYWluIGl0IGlzIGludmFsaWQuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMzIyNzNcbiAgICBpZiAoIWhyZWZBdHRyIHx8ICghaHJlZkF0dHIuaW5jbHVkZXMoJyMnKSAmJiAhaHJlZkF0dHIuc3RhcnRzV2l0aCgnLicpKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBKdXN0IGluIGNhc2Ugc29tZSBDTVMgcHV0cyBvdXQgYSBmdWxsIFVSTCB3aXRoIHRoZSBhbmNob3IgYXBwZW5kZWRcbiAgICBpZiAoaHJlZkF0dHIuaW5jbHVkZXMoJyMnKSAmJiAhaHJlZkF0dHIuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICBocmVmQXR0ciA9IGAjJHtocmVmQXR0ci5zcGxpdCgnIycpWzFdfWBcbiAgICB9XG5cbiAgICBzZWxlY3RvciA9IGhyZWZBdHRyICYmIGhyZWZBdHRyICE9PSAnIycgPyBocmVmQXR0ci50cmltKCkgOiBudWxsXG4gIH1cblxuICByZXR1cm4gc2VsZWN0b3Jcbn1cblxuY29uc3QgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCA9IGVsZW1lbnQgPT4ge1xuICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgaWYgKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBudWxsXG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5jb25zdCBnZXRFbGVtZW50RnJvbVNlbGVjdG9yID0gZWxlbWVudCA9PiB7XG4gIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudClcblxuICByZXR1cm4gc2VsZWN0b3IgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6IG51bGxcbn1cblxuY29uc3QgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIC8vIEdldCB0cmFuc2l0aW9uLWR1cmF0aW9uIG9mIHRoZSBlbGVtZW50XG4gIGxldCB7IHRyYW5zaXRpb25EdXJhdGlvbiwgdHJhbnNpdGlvbkRlbGF5IH0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVxuXG4gIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uID0gTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICBjb25zdCBmbG9hdFRyYW5zaXRpb25EZWxheSA9IE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSlcblxuICAvLyBSZXR1cm4gMCBpZiBlbGVtZW50IG9yIHRyYW5zaXRpb24gZHVyYXRpb24gaXMgbm90IGZvdW5kXG4gIGlmICghZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gJiYgIWZsb2F0VHJhbnNpdGlvbkRlbGF5KSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIC8vIElmIG11bHRpcGxlIGR1cmF0aW9ucyBhcmUgZGVmaW5lZCwgdGFrZSB0aGUgZmlyc3RcbiAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uLnNwbGl0KCcsJylbMF1cbiAgdHJhbnNpdGlvbkRlbGF5ID0gdHJhbnNpdGlvbkRlbGF5LnNwbGl0KCcsJylbMF1cblxuICByZXR1cm4gKE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKyBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpKSAqIE1JTExJU0VDT05EU19NVUxUSVBMSUVSXG59XG5cbmNvbnN0IHRyaWdnZXJUcmFuc2l0aW9uRW5kID0gZWxlbWVudCA9PiB7XG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoVFJBTlNJVElPTl9FTkQpKVxufVxuXG5jb25zdCBpc0VsZW1lbnQgPSBvYmogPT4ge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmouanF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIG9iaiA9IG9ialswXVxuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiBvYmoubm9kZVR5cGUgIT09ICd1bmRlZmluZWQnXG59XG5cbmNvbnN0IGdldEVsZW1lbnQgPSBvYmogPT4ge1xuICBpZiAoaXNFbGVtZW50KG9iaikpIHsgLy8gaXQncyBhIGpRdWVyeSBvYmplY3Qgb3IgYSBub2RlIGVsZW1lbnRcbiAgICByZXR1cm4gb2JqLmpxdWVyeSA/IG9ialswXSA6IG9ialxuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnICYmIG9iai5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUob2JqKVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuY29uc3QgZW11bGF0ZVRyYW5zaXRpb25FbmQgPSAoZWxlbWVudCwgZHVyYXRpb24pID0+IHtcbiAgbGV0IGNhbGxlZCA9IGZhbHNlXG4gIGNvbnN0IGR1cmF0aW9uUGFkZGluZyA9IDVcbiAgY29uc3QgZW11bGF0ZWREdXJhdGlvbiA9IGR1cmF0aW9uICsgZHVyYXRpb25QYWRkaW5nXG5cbiAgZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgY2FsbGVkID0gdHJ1ZVxuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihUUkFOU0lUSU9OX0VORCwgbGlzdGVuZXIpXG4gIH1cblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoVFJBTlNJVElPTl9FTkQsIGxpc3RlbmVyKVxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgdHJpZ2dlclRyYW5zaXRpb25FbmQoZWxlbWVudClcbiAgICB9XG4gIH0sIGVtdWxhdGVkRHVyYXRpb24pXG59XG5cbmNvbnN0IHR5cGVDaGVja0NvbmZpZyA9IChjb21wb25lbnROYW1lLCBjb25maWcsIGNvbmZpZ1R5cGVzKSA9PiB7XG4gIE9iamVjdC5rZXlzKGNvbmZpZ1R5cGVzKS5mb3JFYWNoKHByb3BlcnR5ID0+IHtcbiAgICBjb25zdCBleHBlY3RlZFR5cGVzID0gY29uZmlnVHlwZXNbcHJvcGVydHldXG4gICAgY29uc3QgdmFsdWUgPSBjb25maWdbcHJvcGVydHldXG4gICAgY29uc3QgdmFsdWVUeXBlID0gdmFsdWUgJiYgaXNFbGVtZW50KHZhbHVlKSA/ICdlbGVtZW50JyA6IHRvVHlwZSh2YWx1ZSlcblxuICAgIGlmICghbmV3IFJlZ0V4cChleHBlY3RlZFR5cGVzKS50ZXN0KHZhbHVlVHlwZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgIGAke2NvbXBvbmVudE5hbWUudG9VcHBlckNhc2UoKX06IE9wdGlvbiBcIiR7cHJvcGVydHl9XCIgcHJvdmlkZWQgdHlwZSBcIiR7dmFsdWVUeXBlfVwiIGJ1dCBleHBlY3RlZCB0eXBlIFwiJHtleHBlY3RlZFR5cGVzfVwiLmBcbiAgICAgIClcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGlzVmlzaWJsZSA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmIChlbGVtZW50LnN0eWxlICYmIGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUuc3R5bGUpIHtcbiAgICBjb25zdCBlbGVtZW50U3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpXG4gICAgY29uc3QgcGFyZW50Tm9kZVN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LnBhcmVudE5vZGUpXG5cbiAgICByZXR1cm4gZWxlbWVudFN0eWxlLmRpc3BsYXkgIT09ICdub25lJyAmJlxuICAgICAgcGFyZW50Tm9kZVN0eWxlLmRpc3BsYXkgIT09ICdub25lJyAmJlxuICAgICAgZWxlbWVudFN0eWxlLnZpc2liaWxpdHkgIT09ICdoaWRkZW4nXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuY29uc3QgaXNEaXNhYmxlZCA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWVsZW1lbnQgfHwgZWxlbWVudC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmICh0eXBlb2YgZWxlbWVudC5kaXNhYmxlZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZWxlbWVudC5kaXNhYmxlZFxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpICYmIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpICE9PSAnZmFsc2UnXG59XG5cbmNvbnN0IGZpbmRTaGFkb3dSb290ID0gZWxlbWVudCA9PiB7XG4gIGlmICghZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmF0dGFjaFNoYWRvdykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBDYW4gZmluZCB0aGUgc2hhZG93IHJvb3Qgb3RoZXJ3aXNlIGl0J2xsIHJldHVybiB0aGUgZG9jdW1lbnRcbiAgaWYgKHR5cGVvZiBlbGVtZW50LmdldFJvb3ROb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3Qgcm9vdCA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKVxuICAgIHJldHVybiByb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IHJvb3QgOiBudWxsXG4gIH1cblxuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG5cbiAgLy8gd2hlbiB3ZSBkb24ndCBmaW5kIGEgc2hhZG93IHJvb3RcbiAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIGZpbmRTaGFkb3dSb290KGVsZW1lbnQucGFyZW50Tm9kZSlcbn1cblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbmNvbnN0IHJlZmxvdyA9IGVsZW1lbnQgPT4gZWxlbWVudC5vZmZzZXRIZWlnaHRcblxuY29uc3QgZ2V0alF1ZXJ5ID0gKCkgPT4ge1xuICBjb25zdCB7IGpRdWVyeSB9ID0gd2luZG93XG5cbiAgaWYgKGpRdWVyeSAmJiAhZG9jdW1lbnQuYm9keS5oYXNBdHRyaWJ1dGUoJ2RhdGEtYnMtbm8tanF1ZXJ5JykpIHtcbiAgICByZXR1cm4galF1ZXJ5XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5jb25zdCBvbkRPTUNvbnRlbnRMb2FkZWQgPSBjYWxsYmFjayA9PiB7XG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2FsbGJhY2spXG4gIH0gZWxzZSB7XG4gICAgY2FsbGJhY2soKVxuICB9XG59XG5cbmNvbnN0IGlzUlRMID0gKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpciA9PT0gJ3J0bCdcblxuY29uc3QgZGVmaW5lSlF1ZXJ5UGx1Z2luID0gcGx1Z2luID0+IHtcbiAgb25ET01Db250ZW50TG9hZGVkKCgpID0+IHtcbiAgICBjb25zdCAkID0gZ2V0alF1ZXJ5KClcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoJCkge1xuICAgICAgY29uc3QgbmFtZSA9IHBsdWdpbi5OQU1FXG4gICAgICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW25hbWVdXG4gICAgICAkLmZuW25hbWVdID0gcGx1Z2luLmpRdWVyeUludGVyZmFjZVxuICAgICAgJC5mbltuYW1lXS5Db25zdHJ1Y3RvciA9IHBsdWdpblxuICAgICAgJC5mbltuYW1lXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAgICAgICAkLmZuW25hbWVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgICAgIHJldHVybiBwbHVnaW4ualF1ZXJ5SW50ZXJmYWNlXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBleGVjdXRlID0gY2FsbGJhY2sgPT4ge1xuICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2soKVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIGdldEVsZW1lbnQsXG4gIGdldFVJRCxcbiAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCxcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQsXG4gIHRyaWdnZXJUcmFuc2l0aW9uRW5kLFxuICBpc0VsZW1lbnQsXG4gIGVtdWxhdGVUcmFuc2l0aW9uRW5kLFxuICB0eXBlQ2hlY2tDb25maWcsXG4gIGlzVmlzaWJsZSxcbiAgaXNEaXNhYmxlZCxcbiAgZmluZFNoYWRvd1Jvb3QsXG4gIG5vb3AsXG4gIHJlZmxvdyxcbiAgZ2V0alF1ZXJ5LFxuICBvbkRPTUNvbnRlbnRMb2FkZWQsXG4gIGlzUlRMLFxuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGV4ZWN1dGVcbn1cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogZG9tL2RhdGEuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBlbGVtZW50TWFwID0gbmV3IE1hcCgpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0KGVsZW1lbnQsIGtleSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoIWVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICBlbGVtZW50TWFwLnNldChlbGVtZW50LCBuZXcgTWFwKCkpXG4gICAgfVxuXG4gICAgY29uc3QgaW5zdGFuY2VNYXAgPSBlbGVtZW50TWFwLmdldChlbGVtZW50KVxuXG4gICAgLy8gbWFrZSBpdCBjbGVhciB3ZSBvbmx5IHdhbnQgb25lIGluc3RhbmNlIHBlciBlbGVtZW50XG4gICAgLy8gY2FuIGJlIHJlbW92ZWQgbGF0ZXIgd2hlbiBtdWx0aXBsZSBrZXkvaW5zdGFuY2VzIGFyZSBmaW5lIHRvIGJlIHVzZWRcbiAgICBpZiAoIWluc3RhbmNlTWFwLmhhcyhrZXkpICYmIGluc3RhbmNlTWFwLnNpemUgIT09IDApIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKGBCb290c3RyYXAgZG9lc24ndCBhbGxvdyBtb3JlIHRoYW4gb25lIGluc3RhbmNlIHBlciBlbGVtZW50LiBCb3VuZCBpbnN0YW5jZTogJHtBcnJheS5mcm9tKGluc3RhbmNlTWFwLmtleXMoKSlbMF19LmApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpbnN0YW5jZU1hcC5zZXQoa2V5LCBpbnN0YW5jZSlcbiAgfSxcblxuICBnZXQoZWxlbWVudCwga2V5KSB7XG4gICAgaWYgKGVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm4gZWxlbWVudE1hcC5nZXQoZWxlbWVudCkuZ2V0KGtleSkgfHwgbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH0sXG5cbiAgcmVtb3ZlKGVsZW1lbnQsIGtleSkge1xuICAgIGlmICghZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlTWFwID0gZWxlbWVudE1hcC5nZXQoZWxlbWVudClcblxuICAgIGluc3RhbmNlTWFwLmRlbGV0ZShrZXkpXG5cbiAgICAvLyBmcmVlIHVwIGVsZW1lbnQgcmVmZXJlbmNlcyBpZiB0aGVyZSBhcmUgbm8gaW5zdGFuY2VzIGxlZnQgZm9yIGFuIGVsZW1lbnRcbiAgICBpZiAoaW5zdGFuY2VNYXAuc2l6ZSA9PT0gMCkge1xuICAgICAgZWxlbWVudE1hcC5kZWxldGUoZWxlbWVudClcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogZG9tL2V2ZW50LWhhbmRsZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBnZXRqUXVlcnkgfSBmcm9tICcuLi91dGlsL2luZGV4J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBuYW1lc3BhY2VSZWdleCA9IC9bXi5dKig/PVxcLi4qKVxcLnwuKi9cbmNvbnN0IHN0cmlwTmFtZVJlZ2V4ID0gL1xcLi4qL1xuY29uc3Qgc3RyaXBVaWRSZWdleCA9IC86OlxcZCskL1xuY29uc3QgZXZlbnRSZWdpc3RyeSA9IHt9IC8vIEV2ZW50cyBzdG9yYWdlXG5sZXQgdWlkRXZlbnQgPSAxXG5jb25zdCBjdXN0b21FdmVudHMgPSB7XG4gIG1vdXNlZW50ZXI6ICdtb3VzZW92ZXInLFxuICBtb3VzZWxlYXZlOiAnbW91c2VvdXQnXG59XG5jb25zdCBjdXN0b21FdmVudHNSZWdleCA9IC9eKG1vdXNlZW50ZXJ8bW91c2VsZWF2ZSkvaVxuY29uc3QgbmF0aXZlRXZlbnRzID0gbmV3IFNldChbXG4gICdjbGljaycsXG4gICdkYmxjbGljaycsXG4gICdtb3VzZXVwJyxcbiAgJ21vdXNlZG93bicsXG4gICdjb250ZXh0bWVudScsXG4gICdtb3VzZXdoZWVsJyxcbiAgJ0RPTU1vdXNlU2Nyb2xsJyxcbiAgJ21vdXNlb3ZlcicsXG4gICdtb3VzZW91dCcsXG4gICdtb3VzZW1vdmUnLFxuICAnc2VsZWN0c3RhcnQnLFxuICAnc2VsZWN0ZW5kJyxcbiAgJ2tleWRvd24nLFxuICAna2V5cHJlc3MnLFxuICAna2V5dXAnLFxuICAnb3JpZW50YXRpb25jaGFuZ2UnLFxuICAndG91Y2hzdGFydCcsXG4gICd0b3VjaG1vdmUnLFxuICAndG91Y2hlbmQnLFxuICAndG91Y2hjYW5jZWwnLFxuICAncG9pbnRlcmRvd24nLFxuICAncG9pbnRlcm1vdmUnLFxuICAncG9pbnRlcnVwJyxcbiAgJ3BvaW50ZXJsZWF2ZScsXG4gICdwb2ludGVyY2FuY2VsJyxcbiAgJ2dlc3R1cmVzdGFydCcsXG4gICdnZXN0dXJlY2hhbmdlJyxcbiAgJ2dlc3R1cmVlbmQnLFxuICAnZm9jdXMnLFxuICAnYmx1cicsXG4gICdjaGFuZ2UnLFxuICAncmVzZXQnLFxuICAnc2VsZWN0JyxcbiAgJ3N1Ym1pdCcsXG4gICdmb2N1c2luJyxcbiAgJ2ZvY3Vzb3V0JyxcbiAgJ2xvYWQnLFxuICAndW5sb2FkJyxcbiAgJ2JlZm9yZXVubG9hZCcsXG4gICdyZXNpemUnLFxuICAnbW92ZScsXG4gICdET01Db250ZW50TG9hZGVkJyxcbiAgJ3JlYWR5c3RhdGVjaGFuZ2UnLFxuICAnZXJyb3InLFxuICAnYWJvcnQnLFxuICAnc2Nyb2xsJ1xuXSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFByaXZhdGUgbWV0aG9kc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuZnVuY3Rpb24gZ2V0VWlkRXZlbnQoZWxlbWVudCwgdWlkKSB7XG4gIHJldHVybiAodWlkICYmIGAke3VpZH06OiR7dWlkRXZlbnQrK31gKSB8fCBlbGVtZW50LnVpZEV2ZW50IHx8IHVpZEV2ZW50Kytcbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnQoZWxlbWVudCkge1xuICBjb25zdCB1aWQgPSBnZXRVaWRFdmVudChlbGVtZW50KVxuXG4gIGVsZW1lbnQudWlkRXZlbnQgPSB1aWRcbiAgZXZlbnRSZWdpc3RyeVt1aWRdID0gZXZlbnRSZWdpc3RyeVt1aWRdIHx8IHt9XG5cbiAgcmV0dXJuIGV2ZW50UmVnaXN0cnlbdWlkXVxufVxuXG5mdW5jdGlvbiBib290c3RyYXBIYW5kbGVyKGVsZW1lbnQsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQuZGVsZWdhdGVUYXJnZXQgPSBlbGVtZW50XG5cbiAgICBpZiAoaGFuZGxlci5vbmVPZmYpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgZXZlbnQudHlwZSwgZm4pXG4gICAgfVxuXG4gICAgcmV0dXJuIGZuLmFwcGx5KGVsZW1lbnQsIFtldmVudF0pXG4gIH1cbn1cblxuZnVuY3Rpb24gYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIoZWxlbWVudCwgc2VsZWN0b3IsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG5cbiAgICBmb3IgKGxldCB7IHRhcmdldCB9ID0gZXZlbnQ7IHRhcmdldCAmJiB0YXJnZXQgIT09IHRoaXM7IHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlKSB7XG4gICAgICBmb3IgKGxldCBpID0gZG9tRWxlbWVudHMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgIGlmIChkb21FbGVtZW50c1tpXSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgZXZlbnQuZGVsZWdhdGVUYXJnZXQgPSB0YXJnZXRcblxuICAgICAgICAgIGlmIChoYW5kbGVyLm9uZU9mZikge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vY29uc2lzdGVudC1kZXN0cnVjdHVyaW5nXG4gICAgICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsIGV2ZW50LnR5cGUsIHNlbGVjdG9yLCBmbilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZm4uYXBwbHkodGFyZ2V0LCBbZXZlbnRdKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVG8gcGxlYXNlIEVTTGludFxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEhhbmRsZXIoZXZlbnRzLCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IgPSBudWxsKSB7XG4gIGNvbnN0IHVpZEV2ZW50TGlzdCA9IE9iamVjdC5rZXlzKGV2ZW50cylcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gdWlkRXZlbnRMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgZXZlbnQgPSBldmVudHNbdWlkRXZlbnRMaXN0W2ldXVxuXG4gICAgaWYgKGV2ZW50Lm9yaWdpbmFsSGFuZGxlciA9PT0gaGFuZGxlciAmJiBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IgPT09IGRlbGVnYXRpb25TZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIGV2ZW50XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUGFyYW1zKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pIHtcbiAgY29uc3QgZGVsZWdhdGlvbiA9IHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJ1xuICBjb25zdCBvcmlnaW5hbEhhbmRsZXIgPSBkZWxlZ2F0aW9uID8gZGVsZWdhdGlvbkZuIDogaGFuZGxlclxuXG4gIGxldCB0eXBlRXZlbnQgPSBnZXRUeXBlRXZlbnQob3JpZ2luYWxUeXBlRXZlbnQpXG4gIGNvbnN0IGlzTmF0aXZlID0gbmF0aXZlRXZlbnRzLmhhcyh0eXBlRXZlbnQpXG5cbiAgaWYgKCFpc05hdGl2ZSkge1xuICAgIHR5cGVFdmVudCA9IG9yaWdpbmFsVHlwZUV2ZW50XG4gIH1cblxuICByZXR1cm4gW2RlbGVnYXRpb24sIG9yaWdpbmFsSGFuZGxlciwgdHlwZUV2ZW50XVxufVxuXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4sIG9uZU9mZikge1xuICBpZiAodHlwZW9mIG9yaWdpbmFsVHlwZUV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKCFoYW5kbGVyKSB7XG4gICAgaGFuZGxlciA9IGRlbGVnYXRpb25GblxuICAgIGRlbGVnYXRpb25GbiA9IG51bGxcbiAgfVxuXG4gIC8vIGluIGNhc2Ugb2YgbW91c2VlbnRlciBvciBtb3VzZWxlYXZlIHdyYXAgdGhlIGhhbmRsZXIgd2l0aGluIGEgZnVuY3Rpb24gdGhhdCBjaGVja3MgZm9yIGl0cyBET00gcG9zaXRpb25cbiAgLy8gdGhpcyBwcmV2ZW50cyB0aGUgaGFuZGxlciBmcm9tIGJlaW5nIGRpc3BhdGNoZWQgdGhlIHNhbWUgd2F5IGFzIG1vdXNlb3ZlciBvciBtb3VzZW91dCBkb2VzXG4gIGlmIChjdXN0b21FdmVudHNSZWdleC50ZXN0KG9yaWdpbmFsVHlwZUV2ZW50KSkge1xuICAgIGNvbnN0IHdyYXBGbiA9IGZuID0+IHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0IHx8IChldmVudC5yZWxhdGVkVGFyZ2V0ICE9PSBldmVudC5kZWxlZ2F0ZVRhcmdldCAmJiAhZXZlbnQuZGVsZWdhdGVUYXJnZXQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpKSB7XG4gICAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGVsZWdhdGlvbkZuKSB7XG4gICAgICBkZWxlZ2F0aW9uRm4gPSB3cmFwRm4oZGVsZWdhdGlvbkZuKVxuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVyID0gd3JhcEZuKGhhbmRsZXIpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgW2RlbGVnYXRpb24sIG9yaWdpbmFsSGFuZGxlciwgdHlwZUV2ZW50XSA9IG5vcm1hbGl6ZVBhcmFtcyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKVxuICBjb25zdCBldmVudHMgPSBnZXRFdmVudChlbGVtZW50KVxuICBjb25zdCBoYW5kbGVycyA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IChldmVudHNbdHlwZUV2ZW50XSA9IHt9KVxuICBjb25zdCBwcmV2aW91c0ZuID0gZmluZEhhbmRsZXIoaGFuZGxlcnMsIG9yaWdpbmFsSGFuZGxlciwgZGVsZWdhdGlvbiA/IGhhbmRsZXIgOiBudWxsKVxuXG4gIGlmIChwcmV2aW91c0ZuKSB7XG4gICAgcHJldmlvdXNGbi5vbmVPZmYgPSBwcmV2aW91c0ZuLm9uZU9mZiAmJiBvbmVPZmZcblxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgdWlkID0gZ2V0VWlkRXZlbnQob3JpZ2luYWxIYW5kbGVyLCBvcmlnaW5hbFR5cGVFdmVudC5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJykpXG4gIGNvbnN0IGZuID0gZGVsZWdhdGlvbiA/XG4gICAgYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIoZWxlbWVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKSA6XG4gICAgYm9vdHN0cmFwSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyKVxuXG4gIGZuLmRlbGVnYXRpb25TZWxlY3RvciA9IGRlbGVnYXRpb24gPyBoYW5kbGVyIDogbnVsbFxuICBmbi5vcmlnaW5hbEhhbmRsZXIgPSBvcmlnaW5hbEhhbmRsZXJcbiAgZm4ub25lT2ZmID0gb25lT2ZmXG4gIGZuLnVpZEV2ZW50ID0gdWlkXG4gIGhhbmRsZXJzW3VpZF0gPSBmblxuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlRXZlbnQsIGZuLCBkZWxlZ2F0aW9uKVxufVxuXG5mdW5jdGlvbiByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uU2VsZWN0b3IpIHtcbiAgY29uc3QgZm4gPSBmaW5kSGFuZGxlcihldmVudHNbdHlwZUV2ZW50XSwgaGFuZGxlciwgZGVsZWdhdGlvblNlbGVjdG9yKVxuXG4gIGlmICghZm4pIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlRXZlbnQsIGZuLCBCb29sZWFuKGRlbGVnYXRpb25TZWxlY3RvcikpXG4gIGRlbGV0ZSBldmVudHNbdHlwZUV2ZW50XVtmbi51aWRFdmVudF1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBuYW1lc3BhY2UpIHtcbiAgY29uc3Qgc3RvcmVFbGVtZW50RXZlbnQgPSBldmVudHNbdHlwZUV2ZW50XSB8fCB7fVxuXG4gIE9iamVjdC5rZXlzKHN0b3JlRWxlbWVudEV2ZW50KS5mb3JFYWNoKGhhbmRsZXJLZXkgPT4ge1xuICAgIGlmIChoYW5kbGVyS2V5LmluY2x1ZGVzKG5hbWVzcGFjZSkpIHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gc3RvcmVFbGVtZW50RXZlbnRbaGFuZGxlcktleV1cblxuICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgZXZlbnQub3JpZ2luYWxIYW5kbGVyLCBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IpXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBnZXRUeXBlRXZlbnQoZXZlbnQpIHtcbiAgLy8gYWxsb3cgdG8gZ2V0IHRoZSBuYXRpdmUgZXZlbnRzIGZyb20gbmFtZXNwYWNlZCBldmVudHMgKCdjbGljay5icy5idXR0b24nIC0tPiAnY2xpY2snKVxuICBldmVudCA9IGV2ZW50LnJlcGxhY2Uoc3RyaXBOYW1lUmVnZXgsICcnKVxuICByZXR1cm4gY3VzdG9tRXZlbnRzW2V2ZW50XSB8fCBldmVudFxufVxuXG5jb25zdCBFdmVudEhhbmRsZXIgPSB7XG4gIG9uKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pIHtcbiAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4sIGZhbHNlKVxuICB9LFxuXG4gIG9uZShlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKSB7XG4gICAgYWRkSGFuZGxlcihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuLCB0cnVlKVxuICB9LFxuXG4gIG9mZihlbGVtZW50LCBvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKSB7XG4gICAgaWYgKHR5cGVvZiBvcmlnaW5hbFR5cGVFdmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IFtkZWxlZ2F0aW9uLCBvcmlnaW5hbEhhbmRsZXIsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbXMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GbilcbiAgICBjb25zdCBpbk5hbWVzcGFjZSA9IHR5cGVFdmVudCAhPT0gb3JpZ2luYWxUeXBlRXZlbnRcbiAgICBjb25zdCBldmVudHMgPSBnZXRFdmVudChlbGVtZW50KVxuICAgIGNvbnN0IGlzTmFtZXNwYWNlID0gb3JpZ2luYWxUeXBlRXZlbnQuc3RhcnRzV2l0aCgnLicpXG5cbiAgICBpZiAodHlwZW9mIG9yaWdpbmFsSGFuZGxlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFNpbXBsZXN0IGNhc2U6IGhhbmRsZXIgaXMgcGFzc2VkLCByZW1vdmUgdGhhdCBsaXN0ZW5lciBPTkxZLlxuICAgICAgaWYgKCFldmVudHMgfHwgIWV2ZW50c1t0eXBlRXZlbnRdKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBvcmlnaW5hbEhhbmRsZXIsIGRlbGVnYXRpb24gPyBoYW5kbGVyIDogbnVsbClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc05hbWVzcGFjZSkge1xuICAgICAgT2JqZWN0LmtleXMoZXZlbnRzKS5mb3JFYWNoKGVsZW1lbnRFdmVudCA9PiB7XG4gICAgICAgIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIGVsZW1lbnRFdmVudCwgb3JpZ2luYWxUeXBlRXZlbnQuc2xpY2UoMSkpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHN0b3JlRWxlbWVudEV2ZW50ID0gZXZlbnRzW3R5cGVFdmVudF0gfHwge31cbiAgICBPYmplY3Qua2V5cyhzdG9yZUVsZW1lbnRFdmVudCkuZm9yRWFjaChrZXlIYW5kbGVycyA9PiB7XG4gICAgICBjb25zdCBoYW5kbGVyS2V5ID0ga2V5SGFuZGxlcnMucmVwbGFjZShzdHJpcFVpZFJlZ2V4LCAnJylcblxuICAgICAgaWYgKCFpbk5hbWVzcGFjZSB8fCBvcmlnaW5hbFR5cGVFdmVudC5pbmNsdWRlcyhoYW5kbGVyS2V5KSkge1xuICAgICAgICBjb25zdCBldmVudCA9IHN0b3JlRWxlbWVudEV2ZW50W2tleUhhbmRsZXJzXVxuXG4gICAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50Lm9yaWdpbmFsSGFuZGxlciwgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG5cbiAgdHJpZ2dlcihlbGVtZW50LCBldmVudCwgYXJncykge1xuICAgIGlmICh0eXBlb2YgZXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0ICQgPSBnZXRqUXVlcnkoKVxuICAgIGNvbnN0IHR5cGVFdmVudCA9IGdldFR5cGVFdmVudChldmVudClcbiAgICBjb25zdCBpbk5hbWVzcGFjZSA9IGV2ZW50ICE9PSB0eXBlRXZlbnRcbiAgICBjb25zdCBpc05hdGl2ZSA9IG5hdGl2ZUV2ZW50cy5oYXModHlwZUV2ZW50KVxuXG4gICAgbGV0IGpRdWVyeUV2ZW50XG4gICAgbGV0IGJ1YmJsZXMgPSB0cnVlXG4gICAgbGV0IG5hdGl2ZURpc3BhdGNoID0gdHJ1ZVxuICAgIGxldCBkZWZhdWx0UHJldmVudGVkID0gZmFsc2VcbiAgICBsZXQgZXZ0ID0gbnVsbFxuXG4gICAgaWYgKGluTmFtZXNwYWNlICYmICQpIHtcbiAgICAgIGpRdWVyeUV2ZW50ID0gJC5FdmVudChldmVudCwgYXJncylcblxuICAgICAgJChlbGVtZW50KS50cmlnZ2VyKGpRdWVyeUV2ZW50KVxuICAgICAgYnViYmxlcyA9ICFqUXVlcnlFdmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpXG4gICAgICBuYXRpdmVEaXNwYXRjaCA9ICFqUXVlcnlFdmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpXG4gICAgICBkZWZhdWx0UHJldmVudGVkID0galF1ZXJ5RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKClcbiAgICB9XG5cbiAgICBpZiAoaXNOYXRpdmUpIHtcbiAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJylcbiAgICAgIGV2dC5pbml0RXZlbnQodHlwZUV2ZW50LCBidWJibGVzLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnQsIHtcbiAgICAgICAgYnViYmxlcyxcbiAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBtZXJnZSBjdXN0b20gaW5mb3JtYXRpb24gaW4gb3VyIGV2ZW50XG4gICAgaWYgKHR5cGVvZiBhcmdzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgT2JqZWN0LmtleXMoYXJncykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZ0LCBrZXksIHtcbiAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJnc1trZXldXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAobmF0aXZlRGlzcGF0Y2gpIHtcbiAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldnQpXG4gICAgfVxuXG4gICAgaWYgKGV2dC5kZWZhdWx0UHJldmVudGVkICYmIHR5cGVvZiBqUXVlcnlFdmVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGpRdWVyeUV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICByZXR1cm4gZXZ0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRIYW5kbGVyXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IGJhc2UtY29tcG9uZW50LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCB7XG4gIGVtdWxhdGVUcmFuc2l0aW9uRW5kLFxuICBleGVjdXRlLFxuICBnZXRFbGVtZW50LFxuICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudFxufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IFZFUlNJT04gPSAnNS4wLjEnXG5cbmNsYXNzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgZWxlbWVudCA9IGdldEVsZW1lbnQoZWxlbWVudClcblxuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICBEYXRhLnNldCh0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBEYXRhLnJlbW92ZSh0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZKVxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FVkVOVF9LRVkpXG5cbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKS5mb3JFYWNoKHByb3BlcnR5TmFtZSA9PiB7XG4gICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBudWxsXG4gICAgfSlcbiAgfVxuXG4gIF9xdWV1ZUNhbGxiYWNrKGNhbGxiYWNrLCBlbGVtZW50LCBpc0FuaW1hdGVkID0gdHJ1ZSkge1xuICAgIGlmICghaXNBbmltYXRlZCkge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGVsZW1lbnQpXG4gICAgRXZlbnRIYW5kbGVyLm9uZShlbGVtZW50LCAndHJhbnNpdGlvbmVuZCcsICgpID0+IGV4ZWN1dGUoY2FsbGJhY2spKVxuXG4gICAgZW11bGF0ZVRyYW5zaXRpb25FbmQoZWxlbWVudCwgdHJhbnNpdGlvbkR1cmF0aW9uKVxuICB9XG5cbiAgLyoqIFN0YXRpYyAqL1xuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIERhdGEuZ2V0KGVsZW1lbnQsIHRoaXMuREFUQV9LRVkpXG4gIH1cblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBoYXZlIHRvIGltcGxlbWVudCB0aGUgc3RhdGljIG1ldGhvZCBcIk5BTUVcIiwgZm9yIGVhY2ggY29tcG9uZW50IScpXG4gIH1cblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBgYnMuJHt0aGlzLk5BTUV9YFxuICB9XG5cbiAgc3RhdGljIGdldCBFVkVOVF9LRVkoKSB7XG4gICAgcmV0dXJuIGAuJHt0aGlzLkRBVEFfS0VZfWBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlQ29tcG9uZW50XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IGFsZXJ0LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ2FsZXJ0J1xuY29uc3QgREFUQV9LRVkgPSAnYnMuYWxlcnQnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgU0VMRUNUT1JfRElTTUlTUyA9ICdbZGF0YS1icy1kaXNtaXNzPVwiYWxlcnRcIl0nXG5cbmNvbnN0IEVWRU5UX0NMT1NFID0gYGNsb3NlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xPU0VEID0gYGNsb3NlZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0FMRVJUID0gJ2FsZXJ0J1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIEFsZXJ0IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIGNsb3NlKGVsZW1lbnQpIHtcbiAgICBjb25zdCByb290RWxlbWVudCA9IGVsZW1lbnQgPyB0aGlzLl9nZXRSb290RWxlbWVudChlbGVtZW50KSA6IHRoaXMuX2VsZW1lbnRcbiAgICBjb25zdCBjdXN0b21FdmVudCA9IHRoaXMuX3RyaWdnZXJDbG9zZUV2ZW50KHJvb3RFbGVtZW50KVxuXG4gICAgaWYgKGN1c3RvbUV2ZW50ID09PSBudWxsIHx8IGN1c3RvbUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX3JlbW92ZUVsZW1lbnQocm9vdEVsZW1lbnQpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldFJvb3RFbGVtZW50KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSB8fCBlbGVtZW50LmNsb3Nlc3QoYC4ke0NMQVNTX05BTUVfQUxFUlR9YClcbiAgfVxuXG4gIF90cmlnZ2VyQ2xvc2VFdmVudChlbGVtZW50KSB7XG4gICAgcmV0dXJuIEV2ZW50SGFuZGxlci50cmlnZ2VyKGVsZW1lbnQsIEVWRU5UX0NMT1NFKVxuICB9XG5cbiAgX3JlbW92ZUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBjb25zdCBpc0FuaW1hdGVkID0gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKVxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4gdGhpcy5fZGVzdHJveUVsZW1lbnQoZWxlbWVudCksIGVsZW1lbnQsIGlzQW5pbWF0ZWQpXG4gIH1cblxuICBfZGVzdHJveUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KVxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKGVsZW1lbnQsIEVWRU5UX0NMT1NFRClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9IERhdGEuZ2V0KHRoaXMsIERBVEFfS0VZKVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBBbGVydCh0aGlzKVxuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnID09PSAnY2xvc2UnKSB7XG4gICAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgaGFuZGxlRGlzbWlzcyhhbGVydEluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH1cblxuICAgICAgYWxlcnRJbnN0YW5jZS5jbG9zZSh0aGlzKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RJU01JU1MsIEFsZXJ0LmhhbmRsZURpc21pc3MobmV3IEFsZXJ0KCkpKVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuQWxlcnQgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQWxlcnQpXG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IGJ1dHRvbi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiB9IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ2J1dHRvbidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmJ1dHRvbidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cImJ1dHRvblwiXSdcblxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKCkge1xuICAgIC8vIFRvZ2dsZSBjbGFzcyBhbmQgc3luYyB0aGUgYGFyaWEtcHJlc3NlZGAgYXR0cmlidXRlIHdpdGggdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgYC50b2dnbGUoKWAgbWV0aG9kXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0FDVElWRSkpXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSBEYXRhLmdldCh0aGlzLCBEQVRBX0tFWSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQnV0dG9uKHRoaXMpXG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcgPT09ICd0b2dnbGUnKSB7XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBldmVudCA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQuY2xvc2VzdChTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcblxuICBsZXQgZGF0YSA9IERhdGEuZ2V0KGJ1dHRvbiwgREFUQV9LRVkpXG4gIGlmICghZGF0YSkge1xuICAgIGRhdGEgPSBuZXcgQnV0dG9uKGJ1dHRvbilcbiAgfVxuXG4gIGRhdGEudG9nZ2xlKClcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5CdXR0b24gdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQnV0dG9uKVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogZG9tL21hbmlwdWxhdG9yLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplRGF0YSh2YWwpIHtcbiAgaWYgKHZhbCA9PT0gJ3RydWUnKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmICh2YWwgPT09ICdmYWxzZScpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh2YWwgPT09IE51bWJlcih2YWwpLnRvU3RyaW5nKCkpIHtcbiAgICByZXR1cm4gTnVtYmVyKHZhbClcbiAgfVxuXG4gIGlmICh2YWwgPT09ICcnIHx8IHZhbCA9PT0gJ251bGwnKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplRGF0YUtleShrZXkpIHtcbiAgcmV0dXJuIGtleS5yZXBsYWNlKC9bQS1aXS9nLCBjaHIgPT4gYC0ke2Noci50b0xvd2VyQ2FzZSgpfWApXG59XG5cbmNvbnN0IE1hbmlwdWxhdG9yID0ge1xuICBzZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSwgdmFsdWUpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gLCB2YWx1ZSlcbiAgfSxcblxuICByZW1vdmVEYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSkge1xuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWApXG4gIH0sXG5cbiAgZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfVxuXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhlbGVtZW50LmRhdGFzZXQpXG4gICAgICAuZmlsdGVyKGtleSA9PiBrZXkuc3RhcnRzV2l0aCgnYnMnKSlcbiAgICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGxldCBwdXJlS2V5ID0ga2V5LnJlcGxhY2UoL15icy8sICcnKVxuICAgICAgICBwdXJlS2V5ID0gcHVyZUtleS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHB1cmVLZXkuc2xpY2UoMSwgcHVyZUtleS5sZW5ndGgpXG4gICAgICAgIGF0dHJpYnV0ZXNbcHVyZUtleV0gPSBub3JtYWxpemVEYXRhKGVsZW1lbnQuZGF0YXNldFtrZXldKVxuICAgICAgfSlcblxuICAgIHJldHVybiBhdHRyaWJ1dGVzXG4gIH0sXG5cbiAgZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXkpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplRGF0YShlbGVtZW50LmdldEF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gKSlcbiAgfSxcblxuICBvZmZzZXQoZWxlbWVudCkge1xuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiByZWN0LnRvcCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLFxuICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0XG4gICAgfVxuICB9LFxuXG4gIHBvc2l0aW9uKGVsZW1lbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiBlbGVtZW50Lm9mZnNldFRvcCxcbiAgICAgIGxlZnQ6IGVsZW1lbnQub2Zmc2V0TGVmdFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYW5pcHVsYXRvclxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBjYXJvdXNlbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgaXNSVEwsXG4gIGlzVmlzaWJsZSxcbiAgcmVmbG93LFxuICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdjYXJvdXNlbCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmNhcm91c2VsJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEFSUk9XX0xFRlRfS0VZID0gJ0Fycm93TGVmdCdcbmNvbnN0IEFSUk9XX1JJR0hUX0tFWSA9ICdBcnJvd1JpZ2h0J1xuY29uc3QgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCA9IDUwMCAvLyBUaW1lIGZvciBtb3VzZSBjb21wYXQgZXZlbnRzIHRvIGZpcmUgYWZ0ZXIgdG91Y2hcbmNvbnN0IFNXSVBFX1RIUkVTSE9MRCA9IDQwXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGludGVydmFsOiA1MDAwLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgc2xpZGU6IGZhbHNlLFxuICBwYXVzZTogJ2hvdmVyJyxcbiAgd3JhcDogdHJ1ZSxcbiAgdG91Y2g6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGludGVydmFsOiAnKG51bWJlcnxib29sZWFuKScsXG4gIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gIHNsaWRlOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIHBhdXNlOiAnKHN0cmluZ3xib29sZWFuKScsXG4gIHdyYXA6ICdib29sZWFuJyxcbiAgdG91Y2g6ICdib29sZWFuJ1xufVxuXG5jb25zdCBPUkRFUl9ORVhUID0gJ25leHQnXG5jb25zdCBPUkRFUl9QUkVWID0gJ3ByZXYnXG5jb25zdCBESVJFQ1RJT05fTEVGVCA9ICdsZWZ0J1xuY29uc3QgRElSRUNUSU9OX1JJR0hUID0gJ3JpZ2h0J1xuXG5jb25zdCBFVkVOVF9TTElERSA9IGBzbGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NMSUQgPSBgc2xpZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV04gPSBga2V5ZG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFRU5URVIgPSBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFTEVBVkUgPSBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNIU1RBUlQgPSBgdG91Y2hzdGFydCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNITU9WRSA9IGB0b3VjaG1vdmUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9UT1VDSEVORCA9IGB0b3VjaGVuZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1BPSU5URVJET1dOID0gYHBvaW50ZXJkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUE9JTlRFUlVQID0gYHBvaW50ZXJ1cCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0RSQUdfU1RBUlQgPSBgZHJhZ3N0YXJ0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfQ0FST1VTRUwgPSAnY2Fyb3VzZWwnXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5jb25zdCBDTEFTU19OQU1FX1NMSURFID0gJ3NsaWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9FTkQgPSAnY2Fyb3VzZWwtaXRlbS1lbmQnXG5jb25zdCBDTEFTU19OQU1FX1NUQVJUID0gJ2Nhcm91c2VsLWl0ZW0tc3RhcnQnXG5jb25zdCBDTEFTU19OQU1FX05FWFQgPSAnY2Fyb3VzZWwtaXRlbS1uZXh0J1xuY29uc3QgQ0xBU1NfTkFNRV9QUkVWID0gJ2Nhcm91c2VsLWl0ZW0tcHJldidcbmNvbnN0IENMQVNTX05BTUVfUE9JTlRFUl9FVkVOVCA9ICdwb2ludGVyLWV2ZW50J1xuXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkUgPSAnLmFjdGl2ZSdcbmNvbnN0IFNFTEVDVE9SX0FDVElWRV9JVEVNID0gJy5hY3RpdmUuY2Fyb3VzZWwtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0lURU0gPSAnLmNhcm91c2VsLWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9JVEVNX0lNRyA9ICcuY2Fyb3VzZWwtaXRlbSBpbWcnXG5jb25zdCBTRUxFQ1RPUl9ORVhUX1BSRVYgPSAnLmNhcm91c2VsLWl0ZW0tbmV4dCwgLmNhcm91c2VsLWl0ZW0tcHJldidcbmNvbnN0IFNFTEVDVE9SX0lORElDQVRPUlMgPSAnLmNhcm91c2VsLWluZGljYXRvcnMnXG5jb25zdCBTRUxFQ1RPUl9JTkRJQ0FUT1IgPSAnW2RhdGEtYnMtdGFyZ2V0XSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfU0xJREUgPSAnW2RhdGEtYnMtc2xpZGVdLCBbZGF0YS1icy1zbGlkZS10b10nXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1JJREUgPSAnW2RhdGEtYnMtcmlkZT1cImNhcm91c2VsXCJdJ1xuXG5jb25zdCBQT0lOVEVSX1RZUEVfVE9VQ0ggPSAndG91Y2gnXG5jb25zdCBQT0lOVEVSX1RZUEVfUEVOID0gJ3BlbidcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5jbGFzcyBDYXJvdXNlbCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgdGhpcy5faXRlbXMgPSBudWxsXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9pc1BhdXNlZCA9IGZhbHNlXG4gICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcbiAgICB0aGlzLnRvdWNoVGltZW91dCA9IG51bGxcbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gMFxuICAgIHRoaXMudG91Y2hEZWx0YVggPSAwXG5cbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2luZGljYXRvcnNFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9JTkRJQ0FUT1JTLCB0aGlzLl9lbGVtZW50KVxuICAgIHRoaXMuX3RvdWNoU3VwcG9ydGVkID0gJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDBcbiAgICB0aGlzLl9wb2ludGVyRXZlbnQgPSBCb29sZWFuKHdpbmRvdy5Qb2ludGVyRXZlbnQpXG5cbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIG5leHQoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHRoaXMuX3NsaWRlKE9SREVSX05FWFQpXG4gICAgfVxuICB9XG5cbiAgbmV4dFdoZW5WaXNpYmxlKCkge1xuICAgIC8vIERvbid0IGNhbGwgbmV4dCB3aGVuIHRoZSBwYWdlIGlzbid0IHZpc2libGVcbiAgICAvLyBvciB0aGUgY2Fyb3VzZWwgb3IgaXRzIHBhcmVudCBpc24ndCB2aXNpYmxlXG4gICAgaWYgKCFkb2N1bWVudC5oaWRkZW4gJiYgaXNWaXNpYmxlKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgIH1cbiAgfVxuXG4gIHByZXYoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHRoaXMuX3NsaWRlKE9SREVSX1BSRVYpXG4gICAgfVxuICB9XG5cbiAgcGF1c2UoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICB0aGlzLl9pc1BhdXNlZCA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAoU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9ORVhUX1BSRVYsIHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50KVxuICAgICAgdGhpcy5jeWNsZSh0cnVlKVxuICAgIH1cblxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gIH1cblxuICBjeWNsZShldmVudCkge1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIHRoaXMuX2lzUGF1c2VkID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW50ZXJ2YWwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpXG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnICYmIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCAmJiAhdGhpcy5faXNQYXVzZWQpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUludGVydmFsKClcblxuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA/IHRoaXMubmV4dFdoZW5WaXNpYmxlIDogdGhpcy5uZXh0KS5iaW5kKHRoaXMpLFxuICAgICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWxcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICB0byhpbmRleCkge1xuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRV9JVEVNLCB0aGlzLl9lbGVtZW50KVxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHRoaXMuX2FjdGl2ZUVsZW1lbnQpXG5cbiAgICBpZiAoaW5kZXggPiB0aGlzLl9pdGVtcy5sZW5ndGggLSAxIHx8IGluZGV4IDwgMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9TTElELCAoKSA9PiB0aGlzLnRvKGluZGV4KSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChhY3RpdmVJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgIHRoaXMucGF1c2UoKVxuICAgICAgdGhpcy5jeWNsZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBvcmRlciA9IGluZGV4ID4gYWN0aXZlSW5kZXggP1xuICAgICAgT1JERVJfTkVYVCA6XG4gICAgICBPUkRFUl9QUkVWXG5cbiAgICB0aGlzLl9zbGlkZShvcmRlciwgdGhpcy5faXRlbXNbaW5kZXhdKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfaGFuZGxlU3dpcGUoKSB7XG4gICAgY29uc3QgYWJzRGVsdGF4ID0gTWF0aC5hYnModGhpcy50b3VjaERlbHRhWClcblxuICAgIGlmIChhYnNEZWx0YXggPD0gU1dJUEVfVEhSRVNIT0xEKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBhYnNEZWx0YXggLyB0aGlzLnRvdWNoRGVsdGFYXG5cbiAgICB0aGlzLnRvdWNoRGVsdGFYID0gMFxuXG4gICAgaWYgKCFkaXJlY3Rpb24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX3NsaWRlKGRpcmVjdGlvbiA+IDAgPyBESVJFQ1RJT05fUklHSFQgOiBESVJFQ1RJT05fTEVGVClcbiAgfVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTiwgZXZlbnQgPT4gdGhpcy5fa2V5ZG93bihldmVudCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFRU5URVIsIGV2ZW50ID0+IHRoaXMucGF1c2UoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFTEVBVkUsIGV2ZW50ID0+IHRoaXMuY3ljbGUoZXZlbnQpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG91Y2ggJiYgdGhpcy5fdG91Y2hTdXBwb3J0ZWQpIHtcbiAgICAgIHRoaXMuX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cbiAgfVxuXG4gIF9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudCAmJiAoZXZlbnQucG9pbnRlclR5cGUgPT09IFBPSU5URVJfVFlQRV9QRU4gfHwgZXZlbnQucG9pbnRlclR5cGUgPT09IFBPSU5URVJfVFlQRV9UT1VDSCkpIHtcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0WCA9IGV2ZW50LmNsaWVudFhcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX3BvaW50ZXJFdmVudCkge1xuICAgICAgICB0aGlzLnRvdWNoU3RhcnRYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbW92ZSA9IGV2ZW50ID0+IHtcbiAgICAgIC8vIGVuc3VyZSBzd2lwaW5nIHdpdGggb25lIHRvdWNoIGFuZCBub3QgcGluY2hpbmdcbiAgICAgIHRoaXMudG91Y2hEZWx0YVggPSBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSA/XG4gICAgICAgIDAgOlxuICAgICAgICBldmVudC50b3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLnRvdWNoU3RhcnRYXG4gICAgfVxuXG4gICAgY29uc3QgZW5kID0gZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudCAmJiAoZXZlbnQucG9pbnRlclR5cGUgPT09IFBPSU5URVJfVFlQRV9QRU4gfHwgZXZlbnQucG9pbnRlclR5cGUgPT09IFBPSU5URVJfVFlQRV9UT1VDSCkpIHtcbiAgICAgICAgdGhpcy50b3VjaERlbHRhWCA9IGV2ZW50LmNsaWVudFggLSB0aGlzLnRvdWNoU3RhcnRYXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2hhbmRsZVN3aXBlKClcbiAgICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgICAgLy8gSWYgaXQncyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlLCBtb3VzZWVudGVyL2xlYXZlIGFyZSBmaXJlZCBhc1xuICAgICAgICAvLyBwYXJ0IG9mIHRoZSBtb3VzZSBjb21wYXRpYmlsaXR5IGV2ZW50cyBvbiBmaXJzdCB0YXAgLSB0aGUgY2Fyb3VzZWxcbiAgICAgICAgLy8gd291bGQgc3RvcCBjeWNsaW5nIHVudGlsIHVzZXIgdGFwcGVkIG91dCBvZiBpdDtcbiAgICAgICAgLy8gaGVyZSwgd2UgbGlzdGVuIGZvciB0b3VjaGVuZCwgZXhwbGljaXRseSBwYXVzZSB0aGUgY2Fyb3VzZWxcbiAgICAgICAgLy8gKGFzIGlmIGl0J3MgdGhlIHNlY29uZCB0aW1lIHdlIHRhcCBvbiBpdCwgbW91c2VlbnRlciBjb21wYXQgZXZlbnRcbiAgICAgICAgLy8gaXMgTk9UIGZpcmVkKSBhbmQgYWZ0ZXIgYSB0aW1lb3V0ICh0byBhbGxvdyBmb3IgbW91c2UgY29tcGF0aWJpbGl0eVxuICAgICAgICAvLyBldmVudHMgdG8gZmlyZSkgd2UgZXhwbGljaXRseSByZXN0YXJ0IGN5Y2xpbmdcblxuICAgICAgICB0aGlzLnBhdXNlKClcbiAgICAgICAgaWYgKHRoaXMudG91Y2hUaW1lb3V0KSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG91Y2hUaW1lb3V0KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50b3VjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KGV2ZW50ID0+IHRoaXMuY3ljbGUoZXZlbnQpLCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUICsgdGhpcy5fY29uZmlnLmludGVydmFsKVxuICAgICAgfVxuICAgIH1cblxuICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSVRFTV9JTUcsIHRoaXMuX2VsZW1lbnQpLmZvckVhY2goaXRlbUltZyA9PiB7XG4gICAgICBFdmVudEhhbmRsZXIub24oaXRlbUltZywgRVZFTlRfRFJBR19TVEFSVCwgZSA9PiBlLnByZXZlbnREZWZhdWx0KCkpXG4gICAgfSlcblxuICAgIGlmICh0aGlzLl9wb2ludGVyRXZlbnQpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9QT0lOVEVSRE9XTiwgZXZlbnQgPT4gc3RhcnQoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1BPSU5URVJVUCwgZXZlbnQgPT4gZW5kKGV2ZW50KSlcblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfUE9JTlRFUl9FVkVOVClcbiAgICB9IGVsc2Uge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNIU1RBUlQsIGV2ZW50ID0+IHN0YXJ0KGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSE1PVkUsIGV2ZW50ID0+IG1vdmUoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNIRU5ELCBldmVudCA9PiBlbmQoZXZlbnQpKVxuICAgIH1cbiAgfVxuXG4gIF9rZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSBBUlJPV19MRUZUX0tFWSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5fc2xpZGUoRElSRUNUSU9OX1JJR0hUKVxuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSBBUlJPV19SSUdIVF9LRVkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuX3NsaWRlKERJUkVDVElPTl9MRUZUKVxuICAgIH1cbiAgfVxuXG4gIF9nZXRJdGVtSW5kZXgoZWxlbWVudCkge1xuICAgIHRoaXMuX2l0ZW1zID0gZWxlbWVudCAmJiBlbGVtZW50LnBhcmVudE5vZGUgP1xuICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JVEVNLCBlbGVtZW50LnBhcmVudE5vZGUpIDpcbiAgICAgIFtdXG5cbiAgICByZXR1cm4gdGhpcy5faXRlbXMuaW5kZXhPZihlbGVtZW50KVxuICB9XG5cbiAgX2dldEl0ZW1CeU9yZGVyKG9yZGVyLCBhY3RpdmVFbGVtZW50KSB7XG4gICAgY29uc3QgaXNOZXh0ID0gb3JkZXIgPT09IE9SREVSX05FWFRcbiAgICBjb25zdCBpc1ByZXYgPSBvcmRlciA9PT0gT1JERVJfUFJFVlxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KGFjdGl2ZUVsZW1lbnQpXG4gICAgY29uc3QgbGFzdEl0ZW1JbmRleCA9IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDFcbiAgICBjb25zdCBpc0dvaW5nVG9XcmFwID0gKGlzUHJldiAmJiBhY3RpdmVJbmRleCA9PT0gMCkgfHwgKGlzTmV4dCAmJiBhY3RpdmVJbmRleCA9PT0gbGFzdEl0ZW1JbmRleClcblxuICAgIGlmIChpc0dvaW5nVG9XcmFwICYmICF0aGlzLl9jb25maWcud3JhcCkge1xuICAgICAgcmV0dXJuIGFjdGl2ZUVsZW1lbnRcbiAgICB9XG5cbiAgICBjb25zdCBkZWx0YSA9IGlzUHJldiA/IC0xIDogMVxuICAgIGNvbnN0IGl0ZW1JbmRleCA9IChhY3RpdmVJbmRleCArIGRlbHRhKSAlIHRoaXMuX2l0ZW1zLmxlbmd0aFxuXG4gICAgcmV0dXJuIGl0ZW1JbmRleCA9PT0gLTEgP1xuICAgICAgdGhpcy5faXRlbXNbdGhpcy5faXRlbXMubGVuZ3RoIC0gMV0gOlxuICAgICAgdGhpcy5faXRlbXNbaXRlbUluZGV4XVxuICB9XG5cbiAgX3RyaWdnZXJTbGlkZUV2ZW50KHJlbGF0ZWRUYXJnZXQsIGV2ZW50RGlyZWN0aW9uTmFtZSkge1xuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHJlbGF0ZWRUYXJnZXQpXG4gICAgY29uc3QgZnJvbUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpKVxuXG4gICAgcmV0dXJuIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSURFLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0LFxuICAgICAgZGlyZWN0aW9uOiBldmVudERpcmVjdGlvbk5hbWUsXG4gICAgICBmcm9tOiBmcm9tSW5kZXgsXG4gICAgICB0bzogdGFyZ2V0SW5kZXhcbiAgICB9KVxuICB9XG5cbiAgX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQoZWxlbWVudCkge1xuICAgIGlmICh0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCkge1xuICAgICAgY29uc3QgYWN0aXZlSW5kaWNhdG9yID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkUsIHRoaXMuX2luZGljYXRvcnNFbGVtZW50KVxuXG4gICAgICBhY3RpdmVJbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIGFjdGl2ZUluZGljYXRvci5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpXG5cbiAgICAgIGNvbnN0IGluZGljYXRvcnMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lORElDQVRPUiwgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kaWNhdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoTnVtYmVyLnBhcnNlSW50KGluZGljYXRvcnNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXNsaWRlLXRvJyksIDEwKSA9PT0gdGhpcy5fZ2V0SXRlbUluZGV4KGVsZW1lbnQpKSB7XG4gICAgICAgICAgaW5kaWNhdG9yc1tpXS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgICAgIGluZGljYXRvcnNbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnLCAndHJ1ZScpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF91cGRhdGVJbnRlcnZhbCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fYWN0aXZlRWxlbWVudCB8fCBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRV9JVEVNLCB0aGlzLl9lbGVtZW50KVxuXG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50SW50ZXJ2YWwgPSBOdW1iZXIucGFyc2VJbnQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtaW50ZXJ2YWwnKSwgMTApXG5cbiAgICBpZiAoZWxlbWVudEludGVydmFsKSB7XG4gICAgICB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsID0gdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuaW50ZXJ2YWxcbiAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IGVsZW1lbnRJbnRlcnZhbFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWwgPSB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5pbnRlcnZhbFxuICAgIH1cbiAgfVxuXG4gIF9zbGlkZShkaXJlY3Rpb25Pck9yZGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3Qgb3JkZXIgPSB0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbk9yT3JkZXIpXG4gICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpXG4gICAgY29uc3QgYWN0aXZlRWxlbWVudEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KGFjdGl2ZUVsZW1lbnQpXG4gICAgY29uc3QgbmV4dEVsZW1lbnQgPSBlbGVtZW50IHx8IHRoaXMuX2dldEl0ZW1CeU9yZGVyKG9yZGVyLCBhY3RpdmVFbGVtZW50KVxuXG4gICAgY29uc3QgbmV4dEVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChuZXh0RWxlbWVudClcbiAgICBjb25zdCBpc0N5Y2xpbmcgPSBCb29sZWFuKHRoaXMuX2ludGVydmFsKVxuXG4gICAgY29uc3QgaXNOZXh0ID0gb3JkZXIgPT09IE9SREVSX05FWFRcbiAgICBjb25zdCBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IGlzTmV4dCA/IENMQVNTX05BTUVfU1RBUlQgOiBDTEFTU19OQU1FX0VORFxuICAgIGNvbnN0IG9yZGVyQ2xhc3NOYW1lID0gaXNOZXh0ID8gQ0xBU1NfTkFNRV9ORVhUIDogQ0xBU1NfTkFNRV9QUkVWXG4gICAgY29uc3QgZXZlbnREaXJlY3Rpb25OYW1lID0gdGhpcy5fb3JkZXJUb0RpcmVjdGlvbihvcmRlcilcblxuICAgIGlmIChuZXh0RWxlbWVudCAmJiBuZXh0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUpKSB7XG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2xpZGVFdmVudCA9IHRoaXMuX3RyaWdnZXJTbGlkZUV2ZW50KG5leHRFbGVtZW50LCBldmVudERpcmVjdGlvbk5hbWUpXG4gICAgaWYgKHNsaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFhY3RpdmVFbGVtZW50IHx8ICFuZXh0RWxlbWVudCkge1xuICAgICAgLy8gU29tZSB3ZWlyZG5lc3MgaXMgaGFwcGVuaW5nLCBzbyB3ZSBiYWlsXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1NsaWRpbmcgPSB0cnVlXG5cbiAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICB0aGlzLnBhdXNlKClcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KG5leHRFbGVtZW50KVxuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBuZXh0RWxlbWVudFxuXG4gICAgY29uc3QgdHJpZ2dlclNsaWRFdmVudCA9ICgpID0+IHtcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogbmV4dEVsZW1lbnQsXG4gICAgICAgIGRpcmVjdGlvbjogZXZlbnREaXJlY3Rpb25OYW1lLFxuICAgICAgICBmcm9tOiBhY3RpdmVFbGVtZW50SW5kZXgsXG4gICAgICAgIHRvOiBuZXh0RWxlbWVudEluZGV4XG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NMSURFKSkge1xuICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChvcmRlckNsYXNzTmFtZSlcblxuICAgICAgcmVmbG93KG5leHRFbGVtZW50KVxuXG4gICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuXG4gICAgICBjb25zdCBjb21wbGV0ZUNhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGRpcmVjdGlvbmFsQ2xhc3NOYW1lLCBvcmRlckNsYXNzTmFtZSlcbiAgICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUsIG9yZGVyQ2xhc3NOYW1lLCBkaXJlY3Rpb25hbENsYXNzTmFtZSlcblxuICAgICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuXG4gICAgICAgIHNldFRpbWVvdXQodHJpZ2dlclNsaWRFdmVudCwgMClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxCYWNrLCBhY3RpdmVFbGVtZW50LCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgICAgdHJpZ2dlclNsaWRFdmVudCgpXG4gICAgfVxuXG4gICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgdGhpcy5jeWNsZSgpXG4gICAgfVxuICB9XG5cbiAgX2RpcmVjdGlvblRvT3JkZXIoZGlyZWN0aW9uKSB7XG4gICAgaWYgKCFbRElSRUNUSU9OX1JJR0hULCBESVJFQ1RJT05fTEVGVF0uaW5jbHVkZXMoZGlyZWN0aW9uKSkge1xuICAgICAgcmV0dXJuIGRpcmVjdGlvblxuICAgIH1cblxuICAgIGlmIChpc1JUTCgpKSB7XG4gICAgICByZXR1cm4gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTEVGVCA/IE9SREVSX1BSRVYgOiBPUkRFUl9ORVhUXG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX0xFRlQgPyBPUkRFUl9ORVhUIDogT1JERVJfUFJFVlxuICB9XG5cbiAgX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpIHtcbiAgICBpZiAoIVtPUkRFUl9ORVhULCBPUkRFUl9QUkVWXS5pbmNsdWRlcyhvcmRlcikpIHtcbiAgICAgIHJldHVybiBvcmRlclxuICAgIH1cblxuICAgIGlmIChpc1JUTCgpKSB7XG4gICAgICByZXR1cm4gb3JkZXIgPT09IE9SREVSX1BSRVYgPyBESVJFQ1RJT05fTEVGVCA6IERJUkVDVElPTl9SSUdIVFxuICAgIH1cblxuICAgIHJldHVybiBvcmRlciA9PT0gT1JERVJfUFJFViA/IERJUkVDVElPTl9SSUdIVCA6IERJUkVDVElPTl9MRUZUXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgY2Fyb3VzZWxJbnRlcmZhY2UoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgbGV0IGRhdGEgPSBEYXRhLmdldChlbGVtZW50LCBEQVRBX0tFWSlcbiAgICBsZXQgX2NvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgX2NvbmZpZyA9IHtcbiAgICAgICAgLi4uX2NvbmZpZyxcbiAgICAgICAgLi4uY29uZmlnXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aW9uID0gdHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgPyBjb25maWcgOiBfY29uZmlnLnNsaWRlXG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIGRhdGEgPSBuZXcgQ2Fyb3VzZWwoZWxlbWVudCwgX2NvbmZpZylcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGRhdGEudG8oY29uZmlnKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YVthY3Rpb25dID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2FjdGlvbn1cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbYWN0aW9uXSgpXG4gICAgfSBlbHNlIGlmIChfY29uZmlnLmludGVydmFsICYmIF9jb25maWcucmlkZSkge1xuICAgICAgZGF0YS5wYXVzZSgpXG4gICAgICBkYXRhLmN5Y2xlKClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgQ2Fyb3VzZWwuY2Fyb3VzZWxJbnRlcmZhY2UodGhpcywgY29uZmlnKVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgZGF0YUFwaUNsaWNrSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcylcblxuICAgIGlmICghdGFyZ2V0IHx8ICF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQ0FST1VTRUwpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0YXJnZXQpLFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcylcbiAgICB9XG4gICAgY29uc3Qgc2xpZGVJbmRleCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXNsaWRlLXRvJylcblxuICAgIGlmIChzbGlkZUluZGV4KSB7XG4gICAgICBjb25maWcuaW50ZXJ2YWwgPSBmYWxzZVxuICAgIH1cblxuICAgIENhcm91c2VsLmNhcm91c2VsSW50ZXJmYWNlKHRhcmdldCwgY29uZmlnKVxuXG4gICAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICAgIERhdGEuZ2V0KHRhcmdldCwgREFUQV9LRVkpLnRvKHNsaWRlSW5kZXgpXG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9TTElERSwgQ2Fyb3VzZWwuZGF0YUFwaUNsaWNrSGFuZGxlcilcblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBjb25zdCBjYXJvdXNlbHMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfUklERSlcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2Fyb3VzZWxzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgQ2Fyb3VzZWwuY2Fyb3VzZWxJbnRlcmZhY2UoY2Fyb3VzZWxzW2ldLCBEYXRhLmdldChjYXJvdXNlbHNbaV0sIERBVEFfS0VZKSlcbiAgfVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLkNhcm91c2VsIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKENhcm91c2VsKVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBjb2xsYXBzZS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCxcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgcmVmbG93LFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ2NvbGxhcHNlJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuY29sbGFwc2UnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgdG9nZ2xlOiB0cnVlLFxuICBwYXJlbnQ6ICcnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICB0b2dnbGU6ICdib29sZWFuJyxcbiAgcGFyZW50OiAnKHN0cmluZ3xlbGVtZW50KSdcbn1cblxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTRSA9ICdjb2xsYXBzZSdcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0lORyA9ICdjb2xsYXBzaW5nJ1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTRUQgPSAnY29sbGFwc2VkJ1xuXG5jb25zdCBXSURUSCA9ICd3aWR0aCdcbmNvbnN0IEhFSUdIVCA9ICdoZWlnaHQnXG5cbmNvbnN0IFNFTEVDVE9SX0FDVElWRVMgPSAnLnNob3csIC5jb2xsYXBzaW5nJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIl0nXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBDb2xsYXBzZSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX3RyaWdnZXJBcnJheSA9IFNlbGVjdG9yRW5naW5lLmZpbmQoXG4gICAgICBgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRX1baHJlZj1cIiMke3RoaXMuX2VsZW1lbnQuaWR9XCJdLGAgK1xuICAgICAgYCR7U0VMRUNUT1JfREFUQV9UT0dHTEV9W2RhdGEtYnMtdGFyZ2V0PVwiIyR7dGhpcy5fZWxlbWVudC5pZH1cIl1gXG4gICAgKVxuXG4gICAgY29uc3QgdG9nZ2xlTGlzdCA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9UT0dHTEUpXG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdG9nZ2xlTGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgZWxlbSA9IHRvZ2dsZUxpc3RbaV1cbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtKVxuICAgICAgY29uc3QgZmlsdGVyRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpXG4gICAgICAgIC5maWx0ZXIoZm91bmRFbGVtID0+IGZvdW5kRWxlbSA9PT0gdGhpcy5fZWxlbWVudClcblxuICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsICYmIGZpbHRlckVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdG9yID0gc2VsZWN0b3JcbiAgICAgICAgdGhpcy5fdHJpZ2dlckFycmF5LnB1c2goZWxlbSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9wYXJlbnQgPSB0aGlzLl9jb25maWcucGFyZW50ID8gdGhpcy5fZ2V0UGFyZW50KCkgOiBudWxsXG5cbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5wYXJlbnQpIHtcbiAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLl9lbGVtZW50LCB0aGlzLl90cmlnZ2VyQXJyYXkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy50b2dnbGUpIHtcbiAgICAgIHRoaXMudG9nZ2xlKClcbiAgICB9XG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KClcbiAgICB9XG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGFjdGl2ZXNcbiAgICBsZXQgYWN0aXZlc0RhdGFcblxuICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcbiAgICAgIGFjdGl2ZXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0FDVElWRVMsIHRoaXMuX3BhcmVudClcbiAgICAgICAgLmZpbHRlcihlbGVtID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5wYXJlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtcGFyZW50JykgPT09IHRoaXMuX2NvbmZpZy5wYXJlbnRcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICAgICAgfSlcblxuICAgICAgaWYgKGFjdGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGFjdGl2ZXMgPSBudWxsXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbmVyID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZSh0aGlzLl9zZWxlY3RvcilcbiAgICBpZiAoYWN0aXZlcykge1xuICAgICAgY29uc3QgdGVtcEFjdGl2ZURhdGEgPSBhY3RpdmVzLmZpbmQoZWxlbSA9PiBjb250YWluZXIgIT09IGVsZW0pXG4gICAgICBhY3RpdmVzRGF0YSA9IHRlbXBBY3RpdmVEYXRhID8gRGF0YS5nZXQodGVtcEFjdGl2ZURhdGEsIERBVEFfS0VZKSA6IG51bGxcblxuICAgICAgaWYgKGFjdGl2ZXNEYXRhICYmIGFjdGl2ZXNEYXRhLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1cpXG4gICAgaWYgKHN0YXJ0RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZXMpIHtcbiAgICAgIGFjdGl2ZXMuZm9yRWFjaChlbGVtQWN0aXZlID0+IHtcbiAgICAgICAgaWYgKGNvbnRhaW5lciAhPT0gZWxlbUFjdGl2ZSkge1xuICAgICAgICAgIENvbGxhcHNlLmNvbGxhcHNlSW50ZXJmYWNlKGVsZW1BY3RpdmUsICdoaWRlJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYWN0aXZlc0RhdGEpIHtcbiAgICAgICAgICBEYXRhLnNldChlbGVtQWN0aXZlLCBEQVRBX0tFWSwgbnVsbClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0lORylcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IDBcblxuICAgIGlmICh0aGlzLl90cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICB0aGlzLl90cmlnZ2VyQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0VEKVxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UsIENMQVNTX05BTUVfU0hPVylcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcblxuICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKVxuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTilcbiAgICB9XG5cbiAgICBjb25zdCBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXG4gICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWBcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXX1weGBcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCAhdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpXG4gICAgaWYgKHN0YXJ0RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKClcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbZGltZW5zaW9uXX1weGBcblxuICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0lORylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRSwgQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgY29uc3QgdHJpZ2dlckFycmF5TGVuZ3RoID0gdGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aFxuICAgIGlmICh0cmlnZ2VyQXJyYXlMZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyaWdnZXJBcnJheUxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRyaWdnZXIgPSB0aGlzLl90cmlnZ2VyQXJyYXlbaV1cbiAgICAgICAgY29uc3QgZWxlbSA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodHJpZ2dlcilcblxuICAgICAgICBpZiAoZWxlbSAmJiAhZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgICAgIHRyaWdnZXIuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNFRClcbiAgICAgICAgICB0cmlnZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKHRydWUpXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyhmYWxzZSlcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdHJ1ZSlcbiAgfVxuXG4gIHNldFRyYW5zaXRpb25pbmcoaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gaXNUcmFuc2l0aW9uaW5nXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuICAgIGNvbmZpZy50b2dnbGUgPSBCb29sZWFuKGNvbmZpZy50b2dnbGUpIC8vIENvZXJjZSBzdHJpbmcgdmFsdWVzXG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldERpbWVuc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoV0lEVEgpID8gV0lEVEggOiBIRUlHSFRcbiAgfVxuXG4gIF9nZXRQYXJlbnQoKSB7XG4gICAgbGV0IHsgcGFyZW50IH0gPSB0aGlzLl9jb25maWdcblxuICAgIHBhcmVudCA9IGdldEVsZW1lbnQocGFyZW50KVxuXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRX1bZGF0YS1icy1wYXJlbnQ9XCIke3BhcmVudH1cIl1gXG5cbiAgICBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yLCBwYXJlbnQpXG4gICAgICAuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFxuICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgIFtlbGVtZW50XVxuICAgICAgICApXG4gICAgICB9KVxuXG4gICAgcmV0dXJuIHBhcmVudFxuICB9XG5cbiAgX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhlbGVtZW50LCB0cmlnZ2VyQXJyYXkpIHtcbiAgICBpZiAoIWVsZW1lbnQgfHwgIXRyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzT3BlbiA9IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVylcblxuICAgIHRyaWdnZXJBcnJheS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpXG4gICAgICB9XG5cbiAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuICAgIH0pXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgY29sbGFwc2VJbnRlcmZhY2UoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgbGV0IGRhdGEgPSBEYXRhLmdldChlbGVtZW50LCBEQVRBX0tFWSlcbiAgICBjb25zdCBfY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpLFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cblxuICAgIGlmICghZGF0YSAmJiBfY29uZmlnLnRvZ2dsZSAmJiB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgIF9jb25maWcudG9nZ2xlID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIGRhdGEgPSBuZXcgQ29sbGFwc2UoZWxlbWVudCwgX2NvbmZpZylcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIENvbGxhcHNlLmNvbGxhcHNlSW50ZXJmYWNlKHRoaXMsIGNvbmZpZylcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAvLyBwcmV2ZW50RGVmYXVsdCBvbmx5IGZvciA8YT4gZWxlbWVudHMgKHdoaWNoIGNoYW5nZSB0aGUgVVJMKSBub3QgaW5zaWRlIHRoZSBjb2xsYXBzaWJsZSBlbGVtZW50XG4gIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0EnIHx8IChldmVudC5kZWxlZ2F0ZVRhcmdldCAmJiBldmVudC5kZWxlZ2F0ZVRhcmdldC50YWdOYW1lID09PSAnQScpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY29uc3QgdHJpZ2dlckRhdGEgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzKVxuICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcylcbiAgY29uc3Qgc2VsZWN0b3JFbGVtZW50cyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpXG5cbiAgc2VsZWN0b3JFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBEYXRhLmdldChlbGVtZW50LCBEQVRBX0tFWSlcbiAgICBsZXQgY29uZmlnXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIC8vIHVwZGF0ZSBwYXJlbnQgYXR0cmlidXRlXG4gICAgICBpZiAoZGF0YS5fcGFyZW50ID09PSBudWxsICYmIHR5cGVvZiB0cmlnZ2VyRGF0YS5wYXJlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGRhdGEuX2NvbmZpZy5wYXJlbnQgPSB0cmlnZ2VyRGF0YS5wYXJlbnRcbiAgICAgICAgZGF0YS5fcGFyZW50ID0gZGF0YS5fZ2V0UGFyZW50KClcbiAgICAgIH1cblxuICAgICAgY29uZmlnID0gJ3RvZ2dsZSdcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnID0gdHJpZ2dlckRhdGFcbiAgICB9XG5cbiAgICBDb2xsYXBzZS5jb2xsYXBzZUludGVyZmFjZShlbGVtZW50LCBjb25maWcpXG4gIH0pXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuQ29sbGFwc2UgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQ29sbGFwc2UpXG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNlXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IGRyb3Bkb3duLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICogYXMgUG9wcGVyIGZyb20gJ0Bwb3BwZXJqcy9jb3JlJ1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnQsXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGlzRGlzYWJsZWQsXG4gIGlzRWxlbWVudCxcbiAgaXNWaXNpYmxlLFxuICBpc1JUTCxcbiAgbm9vcCxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdkcm9wZG93bidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmRyb3Bkb3duJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVTQ0FQRV9LRVkgPSAnRXNjYXBlJ1xuY29uc3QgU1BBQ0VfS0VZID0gJ1NwYWNlJ1xuY29uc3QgVEFCX0tFWSA9ICdUYWInXG5jb25zdCBBUlJPV19VUF9LRVkgPSAnQXJyb3dVcCdcbmNvbnN0IEFSUk9XX0RPV05fS0VZID0gJ0Fycm93RG93bidcbmNvbnN0IFJJR0hUX01PVVNFX0JVVFRPTiA9IDIgLy8gTW91c2VFdmVudC5idXR0b24gdmFsdWUgZm9yIHRoZSBzZWNvbmRhcnkgYnV0dG9uLCB1c3VhbGx5IHRoZSByaWdodCBidXR0b25cblxuY29uc3QgUkVHRVhQX0tFWURPV04gPSBuZXcgUmVnRXhwKGAke0FSUk9XX1VQX0tFWX18JHtBUlJPV19ET1dOX0tFWX18JHtFU0NBUEVfS0VZfWApXG5cbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLID0gYGNsaWNrJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJID0gYGtleWRvd24ke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlVUF9EQVRBX0FQSSA9IGBrZXl1cCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX0RST1BVUCA9ICdkcm9wdXAnXG5jb25zdCBDTEFTU19OQU1FX0RST1BFTkQgPSAnZHJvcGVuZCdcbmNvbnN0IENMQVNTX05BTUVfRFJPUFNUQVJUID0gJ2Ryb3BzdGFydCdcbmNvbnN0IENMQVNTX05BTUVfTkFWQkFSID0gJ25hdmJhcidcblxuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIl0nXG5jb25zdCBTRUxFQ1RPUl9NRU5VID0gJy5kcm9wZG93bi1tZW51J1xuY29uc3QgU0VMRUNUT1JfTkFWQkFSX05BViA9ICcubmF2YmFyLW5hdidcbmNvbnN0IFNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMgPSAnLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCknXG5cbmNvbnN0IFBMQUNFTUVOVF9UT1AgPSBpc1JUTCgpID8gJ3RvcC1lbmQnIDogJ3RvcC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9UT1BFTkQgPSBpc1JUTCgpID8gJ3RvcC1zdGFydCcgOiAndG9wLWVuZCdcbmNvbnN0IFBMQUNFTUVOVF9CT1RUT00gPSBpc1JUTCgpID8gJ2JvdHRvbS1lbmQnIDogJ2JvdHRvbS1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9CT1RUT01FTkQgPSBpc1JUTCgpID8gJ2JvdHRvbS1zdGFydCcgOiAnYm90dG9tLWVuZCdcbmNvbnN0IFBMQUNFTUVOVF9SSUdIVCA9IGlzUlRMKCkgPyAnbGVmdC1zdGFydCcgOiAncmlnaHQtc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfTEVGVCA9IGlzUlRMKCkgPyAncmlnaHQtc3RhcnQnIDogJ2xlZnQtc3RhcnQnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIG9mZnNldDogWzAsIDJdLFxuICBib3VuZGFyeTogJ2NsaXBwaW5nUGFyZW50cycsXG4gIHJlZmVyZW5jZTogJ3RvZ2dsZScsXG4gIGRpc3BsYXk6ICdkeW5hbWljJyxcbiAgcG9wcGVyQ29uZmlnOiBudWxsLFxuICBhdXRvQ2xvc2U6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIG9mZnNldDogJyhhcnJheXxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgcmVmZXJlbmNlOiAnKHN0cmluZ3xlbGVtZW50fG9iamVjdCknLFxuICBkaXNwbGF5OiAnc3RyaW5nJyxcbiAgcG9wcGVyQ29uZmlnOiAnKG51bGx8b2JqZWN0fGZ1bmN0aW9uKScsXG4gIGF1dG9DbG9zZTogJyhib29sZWFufHN0cmluZyknXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBEcm9wZG93biBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fbWVudSA9IHRoaXMuX2dldE1lbnVFbGVtZW50KClcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG5cbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICB0aGlzLmhpZGUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5zaG93KClcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcy5fZWxlbWVudCkgfHwgdGhpcy5fbWVudS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50ID0gRHJvcGRvd24uZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHJlbGF0ZWRUYXJnZXQpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIFRvdGFsbHkgZGlzYWJsZSBQb3BwZXIgZm9yIERyb3Bkb3ducyBpbiBOYXZiYXJcbiAgICBpZiAodGhpcy5faW5OYXZiYXIpIHtcbiAgICAgIE1hbmlwdWxhdG9yLnNldERhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSwgJ3BvcHBlcicsICdub25lJylcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgZHJvcGRvd25zIHJlcXVpcmUgUG9wcGVyIChodHRwczovL3BvcHBlci5qcy5vcmcpJylcbiAgICAgIH1cblxuICAgICAgbGV0IHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAncGFyZW50Jykge1xuICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gcGFyZW50XG4gICAgICB9IGVsc2UgaWYgKGlzRWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKSkge1xuICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gZ2V0RWxlbWVudCh0aGlzLl9jb25maWcucmVmZXJlbmNlKVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VcbiAgICAgIH1cblxuICAgICAgY29uc3QgcG9wcGVyQ29uZmlnID0gdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKClcbiAgICAgIGNvbnN0IGlzRGlzcGxheVN0YXRpYyA9IHBvcHBlckNvbmZpZy5tb2RpZmllcnMuZmluZChtb2RpZmllciA9PiBtb2RpZmllci5uYW1lID09PSAnYXBwbHlTdHlsZXMnICYmIG1vZGlmaWVyLmVuYWJsZWQgPT09IGZhbHNlKVxuXG4gICAgICB0aGlzLl9wb3BwZXIgPSBQb3BwZXIuY3JlYXRlUG9wcGVyKHJlZmVyZW5jZUVsZW1lbnQsIHRoaXMuX21lbnUsIHBvcHBlckNvbmZpZylcblxuICAgICAgaWYgKGlzRGlzcGxheVN0YXRpYykge1xuICAgICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInLCAnc3RhdGljJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcbiAgICAgICFwYXJlbnQuY2xvc2VzdChTRUxFQ1RPUl9OQVZCQVJfTkFWKSkge1xuICAgICAgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pXG4gICAgICAgIC5mb3JFYWNoKGVsZW0gPT4gRXZlbnRIYW5kbGVyLm9uKGVsZW0sICdtb3VzZW92ZXInLCBub29wKSlcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC50b2dnbGUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX1NIT1cpXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmIChpc0Rpc2FibGVkKHRoaXMuX2VsZW1lbnQpIHx8ICF0aGlzLl9tZW51LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cblxuICAgIHRoaXMuX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKVxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci51cGRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLLCBldmVudCA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgfSlcbiAgfVxuXG4gIF9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldCkge1xuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUsIHJlbGF0ZWRUYXJnZXQpXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pXG4gICAgICAgIC5mb3JFYWNoKGVsZW0gPT4gRXZlbnRIYW5kbGVyLm9mZihlbGVtLCAnbW91c2VvdmVyJywgbm9vcCkpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIHRoaXMuX21lbnUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXG4gICAgTWFuaXB1bGF0b3IucmVtb3ZlRGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LCAncG9wcGVyJylcbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4sIHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCxcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpLFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuXG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZSlcblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZmVyZW5jZSA9PT0gJ29iamVjdCcgJiYgIWlzRWxlbWVudChjb25maWcucmVmZXJlbmNlKSAmJlxuICAgICAgdHlwZW9mIGNvbmZpZy5yZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSAnZnVuY3Rpb24nXG4gICAgKSB7XG4gICAgICAvLyBQb3BwZXIgdmlydHVhbCBlbGVtZW50cyByZXF1aXJlIGEgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG1ldGhvZFxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtOQU1FLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gXCJyZWZlcmVuY2VcIiBwcm92aWRlZCB0eXBlIFwib2JqZWN0XCIgd2l0aG91dCBhIHJlcXVpcmVkIFwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0XCIgbWV0aG9kLmApXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldE1lbnVFbGVtZW50KCkge1xuICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5uZXh0KHRoaXMuX2VsZW1lbnQsIFNFTEVDVE9SX01FTlUpWzBdXG4gIH1cblxuICBfZ2V0UGxhY2VtZW50KCkge1xuICAgIGNvbnN0IHBhcmVudERyb3Bkb3duID0gdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlXG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUEVORCkpIHtcbiAgICAgIHJldHVybiBQTEFDRU1FTlRfUklHSFRcbiAgICB9XG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUFNUQVJUKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9MRUZUXG4gICAgfVxuXG4gICAgLy8gV2UgbmVlZCB0byB0cmltIHRoZSB2YWx1ZSBiZWNhdXNlIGN1c3RvbSBwcm9wZXJ0aWVzIGNhbiBhbHNvIGluY2x1ZGUgc3BhY2VzXG4gICAgY29uc3QgaXNFbmQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX21lbnUpLmdldFByb3BlcnR5VmFsdWUoJy0tYnMtcG9zaXRpb24nKS50cmltKCkgPT09ICdlbmQnXG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUFVQKSkge1xuICAgICAgcmV0dXJuIGlzRW5kID8gUExBQ0VNRU5UX1RPUEVORCA6IFBMQUNFTUVOVF9UT1BcbiAgICB9XG5cbiAgICByZXR1cm4gaXNFbmQgPyBQTEFDRU1FTlRfQk9UVE9NRU5EIDogUExBQ0VNRU5UX0JPVFRPTVxuICB9XG5cbiAgX2RldGVjdE5hdmJhcigpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbG9zZXN0KGAuJHtDTEFTU19OQU1FX05BVkJBUn1gKSAhPT0gbnVsbFxuICB9XG5cbiAgX2dldE9mZnNldCgpIHtcbiAgICBjb25zdCB7IG9mZnNldCB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBvZmZzZXQuc3BsaXQoJywnKS5tYXAodmFsID0+IE51bWJlci5wYXJzZUludCh2YWwsIDEwKSlcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHBvcHBlckRhdGEgPT4gb2Zmc2V0KHBvcHBlckRhdGEsIHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldFxuICB9XG5cbiAgX2dldFBvcHBlckNvbmZpZygpIHtcbiAgICBjb25zdCBkZWZhdWx0QnNQb3BwZXJDb25maWcgPSB7XG4gICAgICBwbGFjZW1lbnQ6IHRoaXMuX2dldFBsYWNlbWVudCgpLFxuICAgICAgbW9kaWZpZXJzOiBbe1xuICAgICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIGJvdW5kYXJ5OiB0aGlzLl9jb25maWcuYm91bmRhcnlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpXG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSBQb3BwZXIgaWYgd2UgaGF2ZSBhIHN0YXRpYyBkaXNwbGF5XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5kaXNwbGF5ID09PSAnc3RhdGljJykge1xuICAgICAgZGVmYXVsdEJzUG9wcGVyQ29uZmlnLm1vZGlmaWVycyA9IFt7XG4gICAgICAgIG5hbWU6ICdhcHBseVN0eWxlcycsXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9XVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5kZWZhdWx0QnNQb3BwZXJDb25maWcsXG4gICAgICAuLi4odHlwZW9mIHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnKGRlZmF1bHRCc1BvcHBlckNvbmZpZykgOiB0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnKVxuICAgIH1cbiAgfVxuXG4gIF9zZWxlY3RNZW51SXRlbShldmVudCkge1xuICAgIGNvbnN0IGl0ZW1zID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9WSVNJQkxFX0lURU1TLCB0aGlzLl9tZW51KS5maWx0ZXIoaXNWaXNpYmxlKVxuXG4gICAgaWYgKCFpdGVtcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBpbmRleCA9IGl0ZW1zLmluZGV4T2YoZXZlbnQudGFyZ2V0KVxuXG4gICAgLy8gVXBcbiAgICBpZiAoZXZlbnQua2V5ID09PSBBUlJPV19VUF9LRVkgJiYgaW5kZXggPiAwKSB7XG4gICAgICBpbmRleC0tXG4gICAgfVxuXG4gICAgLy8gRG93blxuICAgIGlmIChldmVudC5rZXkgPT09IEFSUk9XX0RPV05fS0VZICYmIGluZGV4IDwgaXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIC8vIGluZGV4IGlzIC0xIGlmIHRoZSBmaXJzdCBrZXlkb3duIGlzIGFuIEFycm93VXBcbiAgICBpbmRleCA9IGluZGV4ID09PSAtMSA/IDAgOiBpbmRleFxuXG4gICAgaXRlbXNbaW5kZXhdLmZvY3VzKClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBkcm9wZG93bkludGVyZmFjZShlbGVtZW50LCBjb25maWcpIHtcbiAgICBsZXQgZGF0YSA9IERhdGEuZ2V0KGVsZW1lbnQsIERBVEFfS0VZKVxuICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGxcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgZGF0YSA9IG5ldyBEcm9wZG93bihlbGVtZW50LCBfY29uZmlnKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgRHJvcGRvd24uZHJvcGRvd25JbnRlcmZhY2UodGhpcywgY29uZmlnKVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgY2xlYXJNZW51cyhldmVudCkge1xuICAgIGlmIChldmVudCAmJiAoZXZlbnQuYnV0dG9uID09PSBSSUdIVF9NT1VTRV9CVVRUT04gfHwgKGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQua2V5ICE9PSBUQUJfS0VZKSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFKVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRvZ2dsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBEYXRhLmdldCh0b2dnbGVzW2ldLCBEQVRBX0tFWSlcbiAgICAgIGlmICghY29udGV4dCB8fCBjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSBmYWxzZSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbnRleHQuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogY29udGV4dC5fZWxlbWVudFxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgY29tcG9zZWRQYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKClcbiAgICAgICAgY29uc3QgaXNNZW51VGFyZ2V0ID0gY29tcG9zZWRQYXRoLmluY2x1ZGVzKGNvbnRleHQuX21lbnUpXG4gICAgICAgIGlmIChcbiAgICAgICAgICBjb21wb3NlZFBhdGguaW5jbHVkZXMoY29udGV4dC5fZWxlbWVudCkgfHxcbiAgICAgICAgICAoY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gJ2luc2lkZScgJiYgIWlzTWVudVRhcmdldCkgfHxcbiAgICAgICAgICAoY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gJ291dHNpZGUnICYmIGlzTWVudVRhcmdldClcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRhYiBuYXZpZ2F0aW9uIHRocm91Z2ggdGhlIGRyb3Bkb3duIG1lbnUgb3IgZXZlbnRzIGZyb20gY29udGFpbmVkIGlucHV0cyBzaG91bGRuJ3QgY2xvc2UgdGhlIG1lbnVcbiAgICAgICAgaWYgKGNvbnRleHQuX21lbnUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAoKGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQua2V5ID09PSBUQUJfS0VZKSB8fCAvaW5wdXR8c2VsZWN0fG9wdGlvbnx0ZXh0YXJlYXxmb3JtL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgcmVsYXRlZFRhcmdldC5jbGlja0V2ZW50ID0gZXZlbnRcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb250ZXh0Ll9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0UGFyZW50RnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpIHx8IGVsZW1lbnQucGFyZW50Tm9kZVxuICB9XG5cbiAgc3RhdGljIGRhdGFBcGlLZXlkb3duSGFuZGxlcihldmVudCkge1xuICAgIC8vIElmIG5vdCBpbnB1dC90ZXh0YXJlYTpcbiAgICAvLyAgLSBBbmQgbm90IGEga2V5IGluIFJFR0VYUF9LRVlET1dOID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyBJZiBpbnB1dC90ZXh0YXJlYTpcbiAgICAvLyAgLSBJZiBzcGFjZSBrZXkgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vICAtIElmIGtleSBpcyBvdGhlciB0aGFuIGVzY2FwZVxuICAgIC8vICAgIC0gSWYga2V5IGlzIG5vdCB1cCBvciBkb3duID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyAgICAtIElmIHRyaWdnZXIgaW5zaWRlIHRoZSBtZW51ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkgP1xuICAgICAgZXZlbnQua2V5ID09PSBTUEFDRV9LRVkgfHwgKGV2ZW50LmtleSAhPT0gRVNDQVBFX0tFWSAmJlxuICAgICAgKChldmVudC5rZXkgIT09IEFSUk9XX0RPV05fS0VZICYmIGV2ZW50LmtleSAhPT0gQVJST1dfVVBfS0VZKSB8fFxuICAgICAgICBldmVudC50YXJnZXQuY2xvc2VzdChTRUxFQ1RPUl9NRU5VKSkpIDpcbiAgICAgICFSRUdFWFBfS0VZRE9XTi50ZXN0KGV2ZW50LmtleSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgaWYgKCFpc0FjdGl2ZSAmJiBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGdldFRvZ2dsZUJ1dHRvbiA9ICgpID0+IHRoaXMubWF0Y2hlcyhTRUxFQ1RPUl9EQVRBX1RPR0dMRSkgPyB0aGlzIDogU2VsZWN0b3JFbmdpbmUucHJldih0aGlzLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSlbMF1cblxuICAgIGlmIChldmVudC5rZXkgPT09IEVTQ0FQRV9LRVkpIHtcbiAgICAgIGdldFRvZ2dsZUJ1dHRvbigpLmZvY3VzKClcbiAgICAgIERyb3Bkb3duLmNsZWFyTWVudXMoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFpc0FjdGl2ZSAmJiAoZXZlbnQua2V5ID09PSBBUlJPV19VUF9LRVkgfHwgZXZlbnQua2V5ID09PSBBUlJPV19ET1dOX0tFWSkpIHtcbiAgICAgIGdldFRvZ2dsZUJ1dHRvbigpLmNsaWNrKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghaXNBY3RpdmUgfHwgZXZlbnQua2V5ID09PSBTUEFDRV9LRVkpIHtcbiAgICAgIERyb3Bkb3duLmNsZWFyTWVudXMoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgRHJvcGRvd24uZ2V0SW5zdGFuY2UoZ2V0VG9nZ2xlQnV0dG9uKCkpLl9zZWxlY3RNZW51SXRlbShldmVudClcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIERyb3Bkb3duLmRhdGFBcGlLZXlkb3duSGFuZGxlcilcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSwgU0VMRUNUT1JfTUVOVSwgRHJvcGRvd24uZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgRHJvcGRvd24uY2xlYXJNZW51cylcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfS0VZVVBfREFUQV9BUEksIERyb3Bkb3duLmNsZWFyTWVudXMpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgRHJvcGRvd24uZHJvcGRvd25JbnRlcmZhY2UodGhpcylcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5Ecm9wZG93biB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihEcm9wZG93bilcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogdXRpbC9zY3JvbGxCYXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuLi9kb20vbWFuaXB1bGF0b3InXG5cbmNvbnN0IFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQgPSAnLmZpeGVkLXRvcCwgLmZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkLCAuc3RpY2t5LXRvcCdcbmNvbnN0IFNFTEVDVE9SX1NUSUNLWV9DT05URU5UID0gJy5zdGlja3ktdG9wJ1xuXG5jb25zdCBnZXRXaWR0aCA9ICgpID0+IHtcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9pbm5lcldpZHRoI3VzYWdlX25vdGVzXG4gIGNvbnN0IGRvY3VtZW50V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgcmV0dXJuIE1hdGguYWJzKHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnRXaWR0aClcbn1cblxuY29uc3QgaGlkZSA9ICh3aWR0aCA9IGdldFdpZHRoKCkpID0+IHtcbiAgX2Rpc2FibGVPdmVyRmxvdygpXG4gIC8vIGdpdmUgcGFkZGluZyB0byBlbGVtZW50IHRvIGJhbGFuY2VzIHRoZSBoaWRkZW4gc2Nyb2xsYmFyIHdpZHRoXG4gIF9zZXRFbGVtZW50QXR0cmlidXRlcygnYm9keScsICdwYWRkaW5nUmlnaHQnLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlICsgd2lkdGgpXG4gIC8vIHRyaWNrOiBXZSBhZGp1c3QgcG9zaXRpdmUgcGFkZGluZ1JpZ2h0IGFuZCBuZWdhdGl2ZSBtYXJnaW5SaWdodCB0byBzdGlja3ktdG9wIGVsZW1lbnRzLCB0byBrZWVwIHNob3duIGZ1bGx3aWR0aFxuICBfc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgJ3BhZGRpbmdSaWdodCcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgKyB3aWR0aClcbiAgX3NldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX1NUSUNLWV9DT05URU5ULCAnbWFyZ2luUmlnaHQnLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlIC0gd2lkdGgpXG59XG5cbmNvbnN0IF9kaXNhYmxlT3ZlckZsb3cgPSAoKSA9PiB7XG4gIGNvbnN0IGFjdHVhbFZhbHVlID0gZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1xuICBpZiAoYWN0dWFsVmFsdWUpIHtcbiAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKGRvY3VtZW50LmJvZHksICdvdmVyZmxvdycsIGFjdHVhbFZhbHVlKVxuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG59XG5cbmNvbnN0IF9zZXRFbGVtZW50QXR0cmlidXRlcyA9IChzZWxlY3Rvciwgc3R5bGVQcm9wLCBjYWxsYmFjaykgPT4ge1xuICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IGdldFdpZHRoKClcbiAgU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvcilcbiAgICAuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGlmIChlbGVtZW50ICE9PSBkb2N1bWVudC5ib2R5ICYmIHdpbmRvdy5pbm5lcldpZHRoID4gZWxlbWVudC5jbGllbnRXaWR0aCArIHNjcm9sbGJhcldpZHRoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBhY3R1YWxWYWx1ZSA9IGVsZW1lbnQuc3R5bGVbc3R5bGVQcm9wXVxuICAgICAgY29uc3QgY2FsY3VsYXRlZFZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbc3R5bGVQcm9wXVxuICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3AsIGFjdHVhbFZhbHVlKVxuICAgICAgZWxlbWVudC5zdHlsZVtzdHlsZVByb3BdID0gYCR7Y2FsbGJhY2soTnVtYmVyLnBhcnNlRmxvYXQoY2FsY3VsYXRlZFZhbHVlKSl9cHhgXG4gICAgfSlcbn1cblxuY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gIF9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKCdib2R5JywgJ292ZXJmbG93JylcbiAgX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoJ2JvZHknLCAncGFkZGluZ1JpZ2h0JylcbiAgX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgJ3BhZGRpbmdSaWdodCcpXG4gIF9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX1NUSUNLWV9DT05URU5ULCAnbWFyZ2luUmlnaHQnKVxufVxuXG5jb25zdCBfcmVzZXRFbGVtZW50QXR0cmlidXRlcyA9IChzZWxlY3Rvciwgc3R5bGVQcm9wKSA9PiB7XG4gIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcClcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShzdHlsZVByb3ApXG4gICAgfSBlbHNlIHtcbiAgICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wKVxuICAgICAgZWxlbWVudC5zdHlsZVtzdHlsZVByb3BdID0gdmFsdWVcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGlzQm9keU92ZXJmbG93aW5nID0gKCkgPT4ge1xuICByZXR1cm4gZ2V0V2lkdGgoKSA+IDBcbn1cblxuZXhwb3J0IHtcbiAgZ2V0V2lkdGgsXG4gIGhpZGUsXG4gIGlzQm9keU92ZXJmbG93aW5nLFxuICByZXNldFxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiB1dGlsL2JhY2tkcm9wLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IHsgZW11bGF0ZVRyYW5zaXRpb25FbmQsIGV4ZWN1dGUsIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50LCByZWZsb3csIHR5cGVDaGVja0NvbmZpZyB9IGZyb20gJy4vaW5kZXgnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGlzVmlzaWJsZTogdHJ1ZSwgLy8gaWYgZmFsc2UsIHdlIHVzZSB0aGUgYmFja2Ryb3AgaGVscGVyIHdpdGhvdXQgYWRkaW5nIGFueSBlbGVtZW50IHRvIHRoZSBkb21cbiAgaXNBbmltYXRlZDogZmFsc2UsXG4gIHJvb3RFbGVtZW50OiBkb2N1bWVudC5ib2R5LCAvLyBnaXZlIHRoZSBjaG9pY2UgdG8gcGxhY2UgYmFja2Ryb3AgdW5kZXIgZGlmZmVyZW50IGVsZW1lbnRzXG4gIGNsaWNrQ2FsbGJhY2s6IG51bGxcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGlzVmlzaWJsZTogJ2Jvb2xlYW4nLFxuICBpc0FuaW1hdGVkOiAnYm9vbGVhbicsXG4gIHJvb3RFbGVtZW50OiAnZWxlbWVudCcsXG4gIGNsaWNrQ2FsbGJhY2s6ICcoZnVuY3Rpb258bnVsbCknXG59XG5jb25zdCBOQU1FID0gJ2JhY2tkcm9wJ1xuY29uc3QgQ0xBU1NfTkFNRV9CQUNLRFJPUCA9ICdtb2RhbC1iYWNrZHJvcCdcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5cbmNvbnN0IEVWRU5UX01PVVNFRE9XTiA9IGBtb3VzZWRvd24uYnMuJHtOQU1FfWBcblxuY2xhc3MgQmFja2Ryb3Age1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2lzQXBwZW5kZWQgPSBmYWxzZVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gIH1cblxuICBzaG93KGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuaXNWaXNpYmxlKSB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fYXBwZW5kKClcblxuICAgIGlmICh0aGlzLl9jb25maWcuaXNBbmltYXRlZCkge1xuICAgICAgcmVmbG93KHRoaXMuX2dldEVsZW1lbnQoKSlcbiAgICB9XG5cbiAgICB0aGlzLl9nZXRFbGVtZW50KCkuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICB0aGlzLl9lbXVsYXRlQW5pbWF0aW9uKCgpID0+IHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgfSlcbiAgfVxuXG4gIGhpZGUoY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5pc1Zpc2libGUpIHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9nZXRFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG5cbiAgICB0aGlzLl9lbXVsYXRlQW5pbWF0aW9uKCgpID0+IHtcbiAgICAgIHRoaXMuZGlzcG9zZSgpXG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgIH0pXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldEVsZW1lbnQoKSB7XG4gICAgaWYgKCF0aGlzLl9lbGVtZW50KSB7XG4gICAgICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBiYWNrZHJvcC5jbGFzc05hbWUgPSBDTEFTU19OQU1FX0JBQ0tEUk9QXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpIHtcbiAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBiYWNrZHJvcFxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50XG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiB7fSlcbiAgICB9XG5cbiAgICBjb25maWcucm9vdEVsZW1lbnQgPSBjb25maWcucm9vdEVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keVxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9hcHBlbmQoKSB7XG4gICAgaWYgKHRoaXMuX2lzQXBwZW5kZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2NvbmZpZy5yb290RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9nZXRFbGVtZW50KCkpXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZ2V0RWxlbWVudCgpLCBFVkVOVF9NT1VTRURPV04sICgpID0+IHtcbiAgICAgIGV4ZWN1dGUodGhpcy5fY29uZmlnLmNsaWNrQ2FsbGJhY2spXG4gICAgfSlcblxuICAgIHRoaXMuX2lzQXBwZW5kZWQgPSB0cnVlXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGlmICghdGhpcy5faXNBcHBlbmRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRURPV04pXG5cbiAgICB0aGlzLl9nZXRFbGVtZW50KCkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLl9lbGVtZW50KVxuICAgIHRoaXMuX2lzQXBwZW5kZWQgPSBmYWxzZVxuICB9XG5cbiAgX2VtdWxhdGVBbmltYXRpb24oY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9nZXRFbGVtZW50KCkpXG4gICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9nZXRFbGVtZW50KCksICd0cmFuc2l0aW9uZW5kJywgKCkgPT4gZXhlY3V0ZShjYWxsYmFjaykpXG4gICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fZ2V0RWxlbWVudCgpLCBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZHJvcFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBtb2RhbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZW11bGF0ZVRyYW5zaXRpb25FbmQsXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50LFxuICBpc1JUTCxcbiAgaXNWaXNpYmxlLFxuICByZWZsb3csXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IHsgZ2V0V2lkdGggYXMgZ2V0U2Nyb2xsQmFyV2lkdGgsIGhpZGUgYXMgc2Nyb2xsQmFySGlkZSwgcmVzZXQgYXMgc2Nyb2xsQmFyUmVzZXQgfSBmcm9tICcuL3V0aWwvc2Nyb2xsYmFyJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcbmltcG9ydCBCYWNrZHJvcCBmcm9tICcuL3V0aWwvYmFja2Ryb3AnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnbW9kYWwnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5tb2RhbCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGJhY2tkcm9wOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgZm9jdXM6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGJhY2tkcm9wOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gIGZvY3VzOiAnYm9vbGVhbidcbn1cblxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERV9QUkVWRU5URUQgPSBgaGlkZVByZXZlbnRlZCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1JFU0laRSA9IGByZXNpemUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19ESVNNSVNTID0gYGNsaWNrLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RJU01JU1MgPSBga2V5ZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VVUF9ESVNNSVNTID0gYG1vdXNldXAuZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTID0gYG1vdXNlZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfT1BFTiA9ICdtb2RhbC1vcGVuJ1xuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfU1RBVElDID0gJ21vZGFsLXN0YXRpYydcblxuY29uc3QgU0VMRUNUT1JfRElBTE9HID0gJy5tb2RhbC1kaWFsb2cnXG5jb25zdCBTRUxFQ1RPUl9NT0RBTF9CT0RZID0gJy5tb2RhbC1ib2R5J1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwibW9kYWxcIl0nXG5jb25zdCBTRUxFQ1RPUl9EQVRBX0RJU01JU1MgPSAnW2RhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCJdJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudClcblxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fZGlhbG9nID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9ESUFMT0csIHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fYmFja2Ryb3AgPSB0aGlzLl9pbml0aWFsaXplQmFja0Ryb3AoKVxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgc2hvdyhyZWxhdGVkVGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNBbmltYXRlZCgpKSB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywge1xuICAgICAgcmVsYXRlZFRhcmdldFxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5faXNTaG93biB8fCBzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IHRydWVcblxuICAgIHNjcm9sbEJhckhpZGUoKVxuXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfT1BFTilcblxuICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG5cbiAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpXG4gICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MsIFNFTEVDVE9SX0RBVEFfRElTTUlTUywgZXZlbnQgPT4gdGhpcy5oaWRlKGV2ZW50KSlcblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9kaWFsb2csIEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTLCAoKSA9PiB7XG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFVVBfRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzLl9lbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5fc2hvd0JhY2tkcm9wKCgpID0+IHRoaXMuX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpKVxuICB9XG5cbiAgaGlkZShldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmICghdGhpcy5faXNTaG93biB8fCB0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIGNvbnN0IGlzQW5pbWF0ZWQgPSB0aGlzLl9pc0FuaW1hdGVkKClcblxuICAgIGlmIChpc0FuaW1hdGVkKSB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0RXNjYXBlRXZlbnQoKVxuICAgIHRoaXMuX3NldFJlc2l6ZUV2ZW50KClcblxuICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4pXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTElDS19ESVNNSVNTKVxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZGlhbG9nLCBFVkVOVF9NT1VTRURPV05fRElTTUlTUylcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soKCkgPT4gdGhpcy5faGlkZU1vZGFsKCksIHRoaXMuX2VsZW1lbnQsIGlzQW5pbWF0ZWQpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIFt3aW5kb3csIHRoaXMuX2RpYWxvZ11cbiAgICAgIC5mb3JFYWNoKGh0bWxFbGVtZW50ID0+IEV2ZW50SGFuZGxlci5vZmYoaHRtbEVsZW1lbnQsIEVWRU5UX0tFWSkpXG5cbiAgICB0aGlzLl9iYWNrZHJvcC5kaXNwb3NlKClcbiAgICBzdXBlci5kaXNwb3NlKClcblxuICAgIC8qKlxuICAgICAqIGBkb2N1bWVudGAgaGFzIDIgZXZlbnRzIGBFVkVOVF9GT0NVU0lOYCBhbmQgYEVWRU5UX0NMSUNLX0RBVEFfQVBJYFxuICAgICAqIERvIG5vdCBtb3ZlIGBkb2N1bWVudGAgaW4gYGh0bWxFbGVtZW50c2AgYXJyYXlcbiAgICAgKiBJdCB3aWxsIHJlbW92ZSBgRVZFTlRfQ0xJQ0tfREFUQV9BUElgIGV2ZW50IHRoYXQgc2hvdWxkIHJlbWFpblxuICAgICAqL1xuICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4pXG4gIH1cblxuICBoYW5kbGVVcGRhdGUoKSB7XG4gICAgdGhpcy5fYWRqdXN0RGlhbG9nKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfaW5pdGlhbGl6ZUJhY2tEcm9wKCkge1xuICAgIHJldHVybiBuZXcgQmFja2Ryb3Aoe1xuICAgICAgaXNWaXNpYmxlOiBCb29sZWFuKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCksIC8vICdzdGF0aWMnIG9wdGlvbiB3aWxsIGJlIHRyYW5zbGF0ZWQgdG8gdHJ1ZSwgYW5kIGJvb2xlYW5zIHdpbGwga2VlcCB0aGVpciB2YWx1ZVxuICAgICAgaXNBbmltYXRlZDogdGhpcy5faXNBbmltYXRlZCgpXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpLFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSB7XG4gICAgY29uc3QgaXNBbmltYXRlZCA9IHRoaXMuX2lzQW5pbWF0ZWQoKVxuICAgIGNvbnN0IG1vZGFsQm9keSA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfTU9EQUxfQk9EWSwgdGhpcy5fZGlhbG9nKVxuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgfHwgdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgLy8gRG9uJ3QgbW92ZSBtb2RhbCdzIERPTSBwb3NpdGlvblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKVxuICAgIHRoaXMuX2VsZW1lbnQuc2Nyb2xsVG9wID0gMFxuXG4gICAgaWYgKG1vZGFsQm9keSkge1xuICAgICAgbW9kYWxCb2R5LnNjcm9sbFRvcCA9IDBcbiAgICB9XG5cbiAgICBpZiAoaXNBbmltYXRlZCkge1xuICAgICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcbiAgICAgIHRoaXMuX2VuZm9yY2VGb2N1cygpXG4gICAgfVxuXG4gICAgY29uc3QgdHJhbnNpdGlvbkNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayh0cmFuc2l0aW9uQ29tcGxldGUsIHRoaXMuX2RpYWxvZywgaXNBbmltYXRlZClcbiAgfVxuXG4gIF9lbmZvcmNlRm9jdXMoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTikgLy8gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBmb2N1cyBsb29wXG4gICAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOLCBldmVudCA9PiB7XG4gICAgICBpZiAoZG9jdW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAgIHRoaXMuX2VsZW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAgICF0aGlzLl9lbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIF9zZXRFc2NhcGVFdmVudCgpIHtcbiAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV05fRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkICYmIGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLl9jb25maWcua2V5Ym9hcmQgJiYgZXZlbnQua2V5ID09PSBFU0NBUEVfS0VZKSB7XG4gICAgICAgICAgdGhpcy5fdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTl9ESVNNSVNTKVxuICAgIH1cbiAgfVxuXG4gIF9zZXRSZXNpemVFdmVudCgpIHtcbiAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfUkVTSVpFLCAoKSA9PiB0aGlzLl9hZGp1c3REaWFsb2coKSlcbiAgICB9IGVsc2Uge1xuICAgICAgRXZlbnRIYW5kbGVyLm9mZih3aW5kb3csIEVWRU5UX1JFU0laRSlcbiAgICB9XG4gIH1cblxuICBfaGlkZU1vZGFsKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnKVxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyb2xlJylcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgIHRoaXMuX2JhY2tkcm9wLmhpZGUoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfT1BFTilcbiAgICAgIHRoaXMuX3Jlc2V0QWRqdXN0bWVudHMoKVxuICAgICAgc2Nyb2xsQmFyUmVzZXQoKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH0pXG4gIH1cblxuICBfc2hvd0JhY2tkcm9wKGNhbGxiYWNrKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrKSB7XG4gICAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLl9iYWNrZHJvcC5zaG93KGNhbGxiYWNrKVxuICB9XG5cbiAgX2lzQW5pbWF0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSlcbiAgfVxuXG4gIF90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKCkge1xuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREVfUFJFVkVOVEVEKVxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID0gdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cbiAgICBpZiAoIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJ1xuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NUQVRJQylcbiAgICBjb25zdCBtb2RhbFRyYW5zaXRpb25EdXJhdGlvbiA9IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2RpYWxvZylcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsICd0cmFuc2l0aW9uZW5kJylcbiAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsICd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU1RBVElDKVxuICAgICAgaWYgKCFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCAndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLm92ZXJmbG93WSA9ICcnXG4gICAgICAgIH0pXG4gICAgICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQsIG1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgfVxuICAgIH0pXG4gICAgZW11bGF0ZVRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudCwgbW9kYWxUcmFuc2l0aW9uRHVyYXRpb24pXG4gICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHRoZSBmb2xsb3dpbmcgbWV0aG9kcyBhcmUgdXNlZCB0byBoYW5kbGUgb3ZlcmZsb3dpbmcgbW9kYWxzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBfYWRqdXN0RGlhbG9nKCkge1xuICAgIGNvbnN0IGlzTW9kYWxPdmVyZmxvd2luZyA9IHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gZ2V0U2Nyb2xsQmFyV2lkdGgoKVxuICAgIGNvbnN0IGlzQm9keU92ZXJmbG93aW5nID0gc2Nyb2xsYmFyV2lkdGggPiAwXG5cbiAgICBpZiAoKCFpc0JvZHlPdmVyZmxvd2luZyAmJiBpc01vZGFsT3ZlcmZsb3dpbmcgJiYgIWlzUlRMKCkpIHx8IChpc0JvZHlPdmVyZmxvd2luZyAmJiAhaXNNb2RhbE92ZXJmbG93aW5nICYmIGlzUlRMKCkpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gYCR7c2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgfVxuXG4gICAgaWYgKChpc0JvZHlPdmVyZmxvd2luZyAmJiAhaXNNb2RhbE92ZXJmbG93aW5nICYmICFpc1JUTCgpKSB8fCAoIWlzQm9keU92ZXJmbG93aW5nICYmIGlzTW9kYWxPdmVyZmxvd2luZyAmJiBpc1JUTCgpKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHtzY3JvbGxiYXJXaWR0aH1weGBcbiAgICB9XG4gIH1cblxuICBfcmVzZXRBZGp1c3RtZW50cygpIHtcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gJydcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZywgcmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IE1vZGFsLmdldEluc3RhbmNlKHRoaXMpIHx8IG5ldyBNb2RhbCh0aGlzLCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IHt9KVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXShyZWxhdGVkVGFyZ2V0KVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcylcblxuICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX1NIT1csIHNob3dFdmVudCA9PiB7XG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAvLyBvbmx5IHJlZ2lzdGVyIGZvY3VzIHJlc3RvcmVyIGlmIG1vZGFsIHdpbGwgYWN0dWFsbHkgZ2V0IHNob3duXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub25lKHRhcmdldCwgRVZFTlRfSElEREVOLCAoKSA9PiB7XG4gICAgICBpZiAoaXNWaXNpYmxlKHRoaXMpKSB7XG4gICAgICAgIHRoaXMuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3QgZGF0YSA9IE1vZGFsLmdldEluc3RhbmNlKHRhcmdldCkgfHwgbmV3IE1vZGFsKHRhcmdldClcblxuICBkYXRhLnRvZ2dsZSh0aGlzKVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLk1vZGFsIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKE1vZGFsKVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBvZmZjYW52YXMuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvcixcbiAgaXNEaXNhYmxlZCxcbiAgaXNWaXNpYmxlLFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IHsgaGlkZSBhcyBzY3JvbGxCYXJIaWRlLCByZXNldCBhcyBzY3JvbGxCYXJSZXNldCB9IGZyb20gJy4vdXRpbC9zY3JvbGxiYXInXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnLi91dGlsL2JhY2tkcm9wJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ29mZmNhbnZhcydcbmNvbnN0IERBVEFfS0VZID0gJ2JzLm9mZmNhbnZhcydcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGJhY2tkcm9wOiB0cnVlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgc2Nyb2xsOiBmYWxzZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYmFja2Ryb3A6ICdib29sZWFuJyxcbiAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgc2Nyb2xsOiAnYm9vbGVhbidcbn1cblxuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBPUEVOX1NFTEVDVE9SID0gJy5vZmZjYW52YXMuc2hvdydcblxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRk9DVVNJTiA9IGBmb2N1c2luJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19ESVNNSVNTID0gYGNsaWNrLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RJU01JU1MgPSBga2V5ZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX0RJU01JU1MgPSAnW2RhdGEtYnMtZGlzbWlzcz1cIm9mZmNhbnZhc1wiXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cIm9mZmNhbnZhc1wiXSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIE9mZmNhbnZhcyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9iYWNrZHJvcCA9IHRoaXMuX2luaXRpYWxpemVCYWNrRHJvcCgpXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XLCB7IHJlbGF0ZWRUYXJnZXQgfSlcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTaG93biA9IHRydWVcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcblxuICAgIHRoaXMuX2JhY2tkcm9wLnNob3coKVxuXG4gICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsKSB7XG4gICAgICBzY3JvbGxCYXJIaWRlKClcbiAgICAgIHRoaXMuX2VuZm9yY2VGb2N1c09uRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgIGNvbnN0IGNvbXBsZXRlQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwgeyByZWxhdGVkVGFyZ2V0IH0pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxCYWNrLCB0aGlzLl9lbGVtZW50LCB0cnVlKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2hvd24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4pXG4gICAgdGhpcy5fZWxlbWVudC5ibHVyKClcbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2JhY2tkcm9wLmhpZGUoKVxuXG4gICAgY29uc3QgY29tcGxldGVDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuXG4gICAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwpIHtcbiAgICAgICAgc2Nyb2xsQmFyUmVzZXQoKVxuICAgICAgfVxuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxiYWNrLCB0aGlzLl9lbGVtZW50LCB0cnVlKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9iYWNrZHJvcC5kaXNwb3NlKClcbiAgICBzdXBlci5kaXNwb3NlKClcbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpLFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDoge30pXG4gICAgfVxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9pbml0aWFsaXplQmFja0Ryb3AoKSB7XG4gICAgcmV0dXJuIG5ldyBCYWNrZHJvcCh7XG4gICAgICBpc1Zpc2libGU6IHRoaXMuX2NvbmZpZy5iYWNrZHJvcCxcbiAgICAgIGlzQW5pbWF0ZWQ6IHRydWUsXG4gICAgICByb290RWxlbWVudDogdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgY2xpY2tDYWxsYmFjazogKCkgPT4gdGhpcy5oaWRlKClcbiAgICB9KVxuICB9XG5cbiAgX2VuZm9yY2VGb2N1c09uRWxlbWVudChlbGVtZW50KSB7XG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTikgLy8gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBmb2N1cyBsb29wXG4gICAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOLCBldmVudCA9PiB7XG4gICAgICBpZiAoZG9jdW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgICBlbGVtZW50ICE9PSBldmVudC50YXJnZXQgJiZcbiAgICAgICAgIWVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICBlbGVtZW50LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICAgIGVsZW1lbnQuZm9jdXMoKVxuICB9XG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTElDS19ESVNNSVNTLCBTRUxFQ1RPUl9EQVRBX0RJU01JU1MsICgpID0+IHRoaXMuaGlkZSgpKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV05fRElTTUlTUywgZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCAmJiBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVkpIHtcbiAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBEYXRhLmdldCh0aGlzLCBEQVRBX0tFWSkgfHwgbmV3IE9mZmNhbnZhcyh0aGlzLCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IHt9KVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcylcblxuICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9ISURERU4sICgpID0+IHtcbiAgICAvLyBmb2N1cyBvbiB0cmlnZ2VyIHdoZW4gaXQgaXMgY2xvc2VkXG4gICAgaWYgKGlzVmlzaWJsZSh0aGlzKSkge1xuICAgICAgdGhpcy5mb2N1cygpXG4gICAgfVxuICB9KVxuXG4gIC8vIGF2b2lkIGNvbmZsaWN0IHdoZW4gY2xpY2tpbmcgYSB0b2dnbGVyIG9mIGFuIG9mZmNhbnZhcywgd2hpbGUgYW5vdGhlciBpcyBvcGVuXG4gIGNvbnN0IGFsbFJlYWR5T3BlbiA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoT1BFTl9TRUxFQ1RPUilcbiAgaWYgKGFsbFJlYWR5T3BlbiAmJiBhbGxSZWFkeU9wZW4gIT09IHRhcmdldCkge1xuICAgIE9mZmNhbnZhcy5nZXRJbnN0YW5jZShhbGxSZWFkeU9wZW4pLmhpZGUoKVxuICB9XG5cbiAgY29uc3QgZGF0YSA9IERhdGEuZ2V0KHRhcmdldCwgREFUQV9LRVkpIHx8IG5ldyBPZmZjYW52YXModGFyZ2V0KVxuXG4gIGRhdGEudG9nZ2xlKHRoaXMpXG59KVxuXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIFNlbGVjdG9yRW5naW5lLmZpbmQoT1BFTl9TRUxFQ1RPUikuZm9yRWFjaChlbCA9PiAoRGF0YS5nZXQoZWwsIERBVEFfS0VZKSB8fCBuZXcgT2ZmY2FudmFzKGVsKSkuc2hvdygpKVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKE9mZmNhbnZhcylcblxuZXhwb3J0IGRlZmF1bHQgT2ZmY2FudmFzXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IHV0aWwvc2FuaXRpemVyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgdXJpQXR0cnMgPSBuZXcgU2V0KFtcbiAgJ2JhY2tncm91bmQnLFxuICAnY2l0ZScsXG4gICdocmVmJyxcbiAgJ2l0ZW10eXBlJyxcbiAgJ2xvbmdkZXNjJyxcbiAgJ3Bvc3RlcicsXG4gICdzcmMnLFxuICAneGxpbms6aHJlZidcbl0pXG5cbmNvbnN0IEFSSUFfQVRUUklCVVRFX1BBVFRFUk4gPSAvXmFyaWEtW1xcdy1dKiQvaVxuXG4vKipcbiAqIEEgcGF0dGVybiB0aGF0IHJlY29nbml6ZXMgYSBjb21tb25seSB1c2VmdWwgc3Vic2V0IG9mIFVSTHMgdGhhdCBhcmUgc2FmZS5cbiAqXG4gKiBTaG91dG91dCB0byBBbmd1bGFyIDcgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzcuMi40L3BhY2thZ2VzL2NvcmUvc3JjL3Nhbml0aXphdGlvbi91cmxfc2FuaXRpemVyLnRzXG4gKi9cbmNvbnN0IFNBRkVfVVJMX1BBVFRFUk4gPSAvXig/Oig/Omh0dHBzP3xtYWlsdG98ZnRwfHRlbHxmaWxlKTp8W14jJi86P10qKD86WyMvP118JCkpL2lcblxuLyoqXG4gKiBBIHBhdHRlcm4gdGhhdCBtYXRjaGVzIHNhZmUgZGF0YSBVUkxzLiBPbmx5IG1hdGNoZXMgaW1hZ2UsIHZpZGVvIGFuZCBhdWRpbyB0eXBlcy5cbiAqXG4gKiBTaG91dG91dCB0byBBbmd1bGFyIDcgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzcuMi40L3BhY2thZ2VzL2NvcmUvc3JjL3Nhbml0aXphdGlvbi91cmxfc2FuaXRpemVyLnRzXG4gKi9cbmNvbnN0IERBVEFfVVJMX1BBVFRFUk4gPSAvXmRhdGE6KD86aW1hZ2VcXC8oPzpibXB8Z2lmfGpwZWd8anBnfHBuZ3x0aWZmfHdlYnApfHZpZGVvXFwvKD86bXBlZ3xtcDR8b2dnfHdlYm0pfGF1ZGlvXFwvKD86bXAzfG9nYXxvZ2d8b3B1cykpO2Jhc2U2NCxbXFxkKy9hLXpdKz0qJC9pXG5cbmNvbnN0IGFsbG93ZWRBdHRyaWJ1dGUgPSAoYXR0ciwgYWxsb3dlZEF0dHJpYnV0ZUxpc3QpID0+IHtcbiAgY29uc3QgYXR0ck5hbWUgPSBhdHRyLm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcblxuICBpZiAoYWxsb3dlZEF0dHJpYnV0ZUxpc3QuaW5jbHVkZXMoYXR0ck5hbWUpKSB7XG4gICAgaWYgKHVyaUF0dHJzLmhhcyhhdHRyTmFtZSkpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKFNBRkVfVVJMX1BBVFRFUk4udGVzdChhdHRyLm5vZGVWYWx1ZSkgfHwgREFUQV9VUkxfUEFUVEVSTi50ZXN0KGF0dHIubm9kZVZhbHVlKSlcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgY29uc3QgcmVnRXhwID0gYWxsb3dlZEF0dHJpYnV0ZUxpc3QuZmlsdGVyKGF0dHJSZWdleCA9PiBhdHRyUmVnZXggaW5zdGFuY2VvZiBSZWdFeHApXG5cbiAgLy8gQ2hlY2sgaWYgYSByZWd1bGFyIGV4cHJlc3Npb24gdmFsaWRhdGVzIHRoZSBhdHRyaWJ1dGUuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZWdFeHAubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAocmVnRXhwW2ldLnRlc3QoYXR0ck5hbWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdEFsbG93bGlzdCA9IHtcbiAgLy8gR2xvYmFsIGF0dHJpYnV0ZXMgYWxsb3dlZCBvbiBhbnkgc3VwcGxpZWQgZWxlbWVudCBiZWxvdy5cbiAgJyonOiBbJ2NsYXNzJywgJ2RpcicsICdpZCcsICdsYW5nJywgJ3JvbGUnLCBBUklBX0FUVFJJQlVURV9QQVRURVJOXSxcbiAgYTogWyd0YXJnZXQnLCAnaHJlZicsICd0aXRsZScsICdyZWwnXSxcbiAgYXJlYTogW10sXG4gIGI6IFtdLFxuICBicjogW10sXG4gIGNvbDogW10sXG4gIGNvZGU6IFtdLFxuICBkaXY6IFtdLFxuICBlbTogW10sXG4gIGhyOiBbXSxcbiAgaDE6IFtdLFxuICBoMjogW10sXG4gIGgzOiBbXSxcbiAgaDQ6IFtdLFxuICBoNTogW10sXG4gIGg2OiBbXSxcbiAgaTogW10sXG4gIGltZzogWydzcmMnLCAnc3Jjc2V0JywgJ2FsdCcsICd0aXRsZScsICd3aWR0aCcsICdoZWlnaHQnXSxcbiAgbGk6IFtdLFxuICBvbDogW10sXG4gIHA6IFtdLFxuICBwcmU6IFtdLFxuICBzOiBbXSxcbiAgc21hbGw6IFtdLFxuICBzcGFuOiBbXSxcbiAgc3ViOiBbXSxcbiAgc3VwOiBbXSxcbiAgc3Ryb25nOiBbXSxcbiAgdTogW10sXG4gIHVsOiBbXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVIdG1sKHVuc2FmZUh0bWwsIGFsbG93TGlzdCwgc2FuaXRpemVGbikge1xuICBpZiAoIXVuc2FmZUh0bWwubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHVuc2FmZUh0bWxcbiAgfVxuXG4gIGlmIChzYW5pdGl6ZUZuICYmIHR5cGVvZiBzYW5pdGl6ZUZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHNhbml0aXplRm4odW5zYWZlSHRtbClcbiAgfVxuXG4gIGNvbnN0IGRvbVBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKClcbiAgY29uc3QgY3JlYXRlZERvY3VtZW50ID0gZG9tUGFyc2VyLnBhcnNlRnJvbVN0cmluZyh1bnNhZmVIdG1sLCAndGV4dC9odG1sJylcbiAgY29uc3QgYWxsb3dsaXN0S2V5cyA9IE9iamVjdC5rZXlzKGFsbG93TGlzdClcbiAgY29uc3QgZWxlbWVudHMgPSBbXS5jb25jYXQoLi4uY3JlYXRlZERvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnKicpKVxuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGVsID0gZWxlbWVudHNbaV1cbiAgICBjb25zdCBlbE5hbWUgPSBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAoIWFsbG93bGlzdEtleXMuaW5jbHVkZXMoZWxOYW1lKSkge1xuICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbClcblxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBjb25zdCBhdHRyaWJ1dGVMaXN0ID0gW10uY29uY2F0KC4uLmVsLmF0dHJpYnV0ZXMpXG4gICAgY29uc3QgYWxsb3dlZEF0dHJpYnV0ZXMgPSBbXS5jb25jYXQoYWxsb3dMaXN0WycqJ10gfHwgW10sIGFsbG93TGlzdFtlbE5hbWVdIHx8IFtdKVxuXG4gICAgYXR0cmlidXRlTGlzdC5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgaWYgKCFhbGxvd2VkQXR0cmlidXRlKGF0dHIsIGFsbG93ZWRBdHRyaWJ1dGVzKSkge1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoYXR0ci5ub2RlTmFtZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZWREb2N1bWVudC5ib2R5LmlubmVySFRNTFxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiB0b29sdGlwLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICogYXMgUG9wcGVyIGZyb20gJ0Bwb3BwZXJqcy9jb3JlJ1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGZpbmRTaGFkb3dSb290LFxuICBnZXRFbGVtZW50LFxuICBnZXRVSUQsXG4gIGlzRWxlbWVudCxcbiAgaXNSVEwsXG4gIG5vb3AsXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQge1xuICBEZWZhdWx0QWxsb3dsaXN0LFxuICBzYW5pdGl6ZUh0bWxcbn0gZnJvbSAnLi91dGlsL3Nhbml0aXplcidcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0b29sdGlwJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMudG9vbHRpcCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBDTEFTU19QUkVGSVggPSAnYnMtdG9vbHRpcCdcbmNvbnN0IEJTQ0xTX1BSRUZJWF9SRUdFWCA9IG5ldyBSZWdFeHAoYChefFxcXFxzKSR7Q0xBU1NfUFJFRklYfVxcXFxTK2AsICdnJylcbmNvbnN0IERJU0FMTE9XRURfQVRUUklCVVRFUyA9IG5ldyBTZXQoWydzYW5pdGl6ZScsICdhbGxvd0xpc3QnLCAnc2FuaXRpemVGbiddKVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYW5pbWF0aW9uOiAnYm9vbGVhbicsXG4gIHRlbXBsYXRlOiAnc3RyaW5nJyxcbiAgdGl0bGU6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJyxcbiAgdHJpZ2dlcjogJ3N0cmluZycsXG4gIGRlbGF5OiAnKG51bWJlcnxvYmplY3QpJyxcbiAgaHRtbDogJ2Jvb2xlYW4nLFxuICBzZWxlY3RvcjogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICBwbGFjZW1lbnQ6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gIG9mZnNldDogJyhhcnJheXxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgY29udGFpbmVyOiAnKHN0cmluZ3xlbGVtZW50fGJvb2xlYW4pJyxcbiAgZmFsbGJhY2tQbGFjZW1lbnRzOiAnYXJyYXknLFxuICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICBjdXN0b21DbGFzczogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgc2FuaXRpemU6ICdib29sZWFuJyxcbiAgc2FuaXRpemVGbjogJyhudWxsfGZ1bmN0aW9uKScsXG4gIGFsbG93TGlzdDogJ29iamVjdCcsXG4gIHBvcHBlckNvbmZpZzogJyhudWxsfG9iamVjdHxmdW5jdGlvbiknXG59XG5cbmNvbnN0IEF0dGFjaG1lbnRNYXAgPSB7XG4gIEFVVE86ICdhdXRvJyxcbiAgVE9QOiAndG9wJyxcbiAgUklHSFQ6IGlzUlRMKCkgPyAnbGVmdCcgOiAncmlnaHQnLFxuICBCT1RUT006ICdib3R0b20nLFxuICBMRUZUOiBpc1JUTCgpID8gJ3JpZ2h0JyA6ICdsZWZ0J1xufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbmltYXRpb246IHRydWUsXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPicgK1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+JyArXG4gICAgICAgICAgICAnPC9kaXY+JyxcbiAgdHJpZ2dlcjogJ2hvdmVyIGZvY3VzJyxcbiAgdGl0bGU6ICcnLFxuICBkZWxheTogMCxcbiAgaHRtbDogZmFsc2UsXG4gIHNlbGVjdG9yOiBmYWxzZSxcbiAgcGxhY2VtZW50OiAndG9wJyxcbiAgb2Zmc2V0OiBbMCwgMF0sXG4gIGNvbnRhaW5lcjogZmFsc2UsXG4gIGZhbGxiYWNrUGxhY2VtZW50czogWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXSxcbiAgYm91bmRhcnk6ICdjbGlwcGluZ1BhcmVudHMnLFxuICBjdXN0b21DbGFzczogJycsXG4gIHNhbml0aXplOiB0cnVlLFxuICBzYW5pdGl6ZUZuOiBudWxsLFxuICBhbGxvd0xpc3Q6IERlZmF1bHRBbGxvd2xpc3QsXG4gIHBvcHBlckNvbmZpZzogbnVsbFxufVxuXG5jb25zdCBFdmVudCA9IHtcbiAgSElERTogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU46IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICBTSE9XOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBJTlNFUlRFRDogYGluc2VydGVkJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0s6IGBjbGljayR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTSU46IGBmb2N1c2luJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNPVVQ6IGBmb2N1c291dCR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFRU5URVI6IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VMRUFWRTogYG1vdXNlbGVhdmUke0VWRU5UX0tFWX1gXG59XG5cbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9NT0RBTCA9ICdtb2RhbCdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG5jb25zdCBIT1ZFUl9TVEFURV9TSE9XID0gJ3Nob3cnXG5jb25zdCBIT1ZFUl9TVEFURV9PVVQgPSAnb3V0J1xuXG5jb25zdCBTRUxFQ1RPUl9UT09MVElQX0lOTkVSID0gJy50b29sdGlwLWlubmVyJ1xuXG5jb25zdCBUUklHR0VSX0hPVkVSID0gJ2hvdmVyJ1xuY29uc3QgVFJJR0dFUl9GT0NVUyA9ICdmb2N1cydcbmNvbnN0IFRSSUdHRVJfQ0xJQ0sgPSAnY2xpY2snXG5jb25zdCBUUklHR0VSX01BTlVBTCA9ICdtYW51YWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBUb29sdGlwIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyB0b29sdGlwcyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKScpXG4gICAgfVxuXG4gICAgc3VwZXIoZWxlbWVudClcblxuICAgIC8vIHByaXZhdGVcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlXG4gICAgdGhpcy5fdGltZW91dCA9IDBcbiAgICB0aGlzLl9ob3ZlclN0YXRlID0gJydcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyID0ge31cbiAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG5cbiAgICAvLyBQcm90ZWN0ZWRcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMudGlwID0gbnVsbFxuXG4gICAgdGhpcy5fc2V0TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgc3RhdGljIGdldCBFdmVudCgpIHtcbiAgICByZXR1cm4gRXZlbnRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZVxuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSBmYWxzZVxuICB9XG5cbiAgdG9nZ2xlRW5hYmxlZCgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSAhdGhpcy5faXNFbmFibGVkXG4gIH1cblxuICB0b2dnbGUoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KVxuXG4gICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyLmNsaWNrID0gIWNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2tcblxuICAgICAgaWYgKGNvbnRleHQuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICBjb250ZXh0Ll9lbnRlcihudWxsLCBjb250ZXh0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5fbGVhdmUobnVsbCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZ2V0VGlwRWxlbWVudCgpLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICAgIHRoaXMuX2xlYXZlKG51bGwsIHRoaXMpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbnRlcihudWxsLCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQuY2xvc2VzdChgLiR7Q0xBU1NfTkFNRV9NT0RBTH1gKSwgJ2hpZGUuYnMubW9kYWwnLCB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKVxuXG4gICAgaWYgKHRoaXMudGlwICYmIHRoaXMudGlwLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMudGlwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy50aXApXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHVzZSBzaG93IG9uIHZpc2libGUgZWxlbWVudHMnKVxuICAgIH1cblxuICAgIGlmICghKHRoaXMuaXNXaXRoQ29udGVudCgpICYmIHRoaXMuX2lzRW5hYmxlZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuU0hPVylcbiAgICBjb25zdCBzaGFkb3dSb290ID0gZmluZFNoYWRvd1Jvb3QodGhpcy5fZWxlbWVudClcbiAgICBjb25zdCBpc0luVGhlRG9tID0gc2hhZG93Um9vdCA9PT0gbnVsbCA/XG4gICAgICB0aGlzLl9lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKHRoaXMuX2VsZW1lbnQpIDpcbiAgICAgIHNoYWRvd1Jvb3QuY29udGFpbnModGhpcy5fZWxlbWVudClcblxuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCAhaXNJblRoZURvbSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICBjb25zdCB0aXBJZCA9IGdldFVJRCh0aGlzLmNvbnN0cnVjdG9yLk5BTUUpXG5cbiAgICB0aXAuc2V0QXR0cmlidXRlKCdpZCcsIHRpcElkKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgdGlwSWQpXG5cbiAgICB0aGlzLnNldENvbnRlbnQoKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIHRpcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSlcbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZW1lbnQgPSB0eXBlb2YgdGhpcy5fY29uZmlnLnBsYWNlbWVudCA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICB0aGlzLl9jb25maWcucGxhY2VtZW50LmNhbGwodGhpcywgdGlwLCB0aGlzLl9lbGVtZW50KSA6XG4gICAgICB0aGlzLl9jb25maWcucGxhY2VtZW50XG5cbiAgICBjb25zdCBhdHRhY2htZW50ID0gdGhpcy5fZ2V0QXR0YWNobWVudChwbGFjZW1lbnQpXG4gICAgdGhpcy5fYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpXG5cbiAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gdGhpcy5fY29uZmlnXG4gICAgRGF0YS5zZXQodGlwLCB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKVxuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKHRoaXMudGlwKSkge1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpcClcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSU5TRVJURUQpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BvcHBlciA9IFBvcHBlci5jcmVhdGVQb3BwZXIodGhpcy5fZWxlbWVudCwgdGlwLCB0aGlzLl9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkpXG4gICAgfVxuXG4gICAgdGlwLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgY29uc3QgY3VzdG9tQ2xhc3MgPSB0eXBlb2YgdGhpcy5fY29uZmlnLmN1c3RvbUNsYXNzID09PSAnZnVuY3Rpb24nID8gdGhpcy5fY29uZmlnLmN1c3RvbUNsYXNzKCkgOiB0aGlzLl9jb25maWcuY3VzdG9tQ2xhc3NcbiAgICBpZiAoY3VzdG9tQ2xhc3MpIHtcbiAgICAgIHRpcC5jbGFzc0xpc3QuYWRkKC4uLmN1c3RvbUNsYXNzLnNwbGl0KCcgJykpXG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHByZXZIb3ZlclN0YXRlID0gdGhpcy5faG92ZXJTdGF0ZVxuXG4gICAgICB0aGlzLl9ob3ZlclN0YXRlID0gbnVsbFxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XTilcblxuICAgICAgaWYgKHByZXZIb3ZlclN0YXRlID09PSBIT1ZFUl9TVEFURV9PVVQpIHtcbiAgICAgICAgdGhpcy5fbGVhdmUobnVsbCwgdGhpcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpc0FuaW1hdGVkID0gdGhpcy50aXAuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSlcbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLnRpcCwgaXNBbmltYXRlZClcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5faG92ZXJTdGF0ZSAhPT0gSE9WRVJfU1RBVEVfU0hPVyAmJiB0aXAucGFyZW50Tm9kZSkge1xuICAgICAgICB0aXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aXApXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NsZWFuVGlwQ2xhc3MoKVxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5ISURERU4pXG5cbiAgICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgICAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5ISURFKVxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKVxuICAgICAgICAuZm9yRWFjaChlbGVtZW50ID0+IEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApKVxuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9DTElDS10gPSBmYWxzZVxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9GT0NVU10gPSBmYWxzZVxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXJbVFJJR0dFUl9IT1ZFUl0gPSBmYWxzZVxuXG4gICAgY29uc3QgaXNBbmltYXRlZCA9IHRoaXMudGlwLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy50aXAsIGlzQW5pbWF0ZWQpXG4gICAgdGhpcy5faG92ZXJTdGF0ZSA9ICcnXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcG9wcGVyLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJvdGVjdGVkXG5cbiAgaXNXaXRoQ29udGVudCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLmdldFRpdGxlKCkpXG4gIH1cblxuICBnZXRUaXBFbGVtZW50KCkge1xuICAgIGlmICh0aGlzLnRpcCkge1xuICAgICAgcmV0dXJuIHRoaXMudGlwXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLl9jb25maWcudGVtcGxhdGVcblxuICAgIHRoaXMudGlwID0gZWxlbWVudC5jaGlsZHJlblswXVxuICAgIHJldHVybiB0aGlzLnRpcFxuICB9XG5cbiAgc2V0Q29udGVudCgpIHtcbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9UT09MVElQX0lOTkVSLCB0aXApLCB0aGlzLmdldFRpdGxlKCkpXG4gICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9GQURFLCBDTEFTU19OQU1FX1NIT1cpXG4gIH1cblxuICBzZXRFbGVtZW50Q29udGVudChlbGVtZW50LCBjb250ZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc0VsZW1lbnQoY29udGVudCkpIHtcbiAgICAgIGNvbnRlbnQgPSBnZXRFbGVtZW50KGNvbnRlbnQpXG5cbiAgICAgIC8vIGNvbnRlbnQgaXMgYSBET00gbm9kZSBvciBhIGpRdWVyeVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5odG1sKSB7XG4gICAgICAgIGlmIChjb250ZW50LnBhcmVudE5vZGUgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudC50ZXh0Q29udGVudFxuICAgICAgfVxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmh0bWwpIHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuc2FuaXRpemUpIHtcbiAgICAgICAgY29udGVudCA9IHNhbml0aXplSHRtbChjb250ZW50LCB0aGlzLl9jb25maWcuYWxsb3dMaXN0LCB0aGlzLl9jb25maWcuc2FuaXRpemVGbilcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50XG4gICAgfVxuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgbGV0IHRpdGxlID0gdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnKVxuXG4gICAgaWYgKCF0aXRsZSkge1xuICAgICAgdGl0bGUgPSB0eXBlb2YgdGhpcy5fY29uZmlnLnRpdGxlID09PSAnZnVuY3Rpb24nID9cbiAgICAgICAgdGhpcy5fY29uZmlnLnRpdGxlLmNhbGwodGhpcy5fZWxlbWVudCkgOlxuICAgICAgICB0aGlzLl9jb25maWcudGl0bGVcbiAgICB9XG5cbiAgICByZXR1cm4gdGl0bGVcbiAgfVxuXG4gIHVwZGF0ZUF0dGFjaG1lbnQoYXR0YWNobWVudCkge1xuICAgIGlmIChhdHRhY2htZW50ID09PSAncmlnaHQnKSB7XG4gICAgICByZXR1cm4gJ2VuZCdcbiAgICB9XG5cbiAgICBpZiAoYXR0YWNobWVudCA9PT0gJ2xlZnQnKSB7XG4gICAgICByZXR1cm4gJ3N0YXJ0J1xuICAgIH1cblxuICAgIHJldHVybiBhdHRhY2htZW50XG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZXG4gICAgY29udGV4dCA9IGNvbnRleHQgfHwgRGF0YS5nZXQoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIGRhdGFLZXkpXG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihldmVudC5kZWxlZ2F0ZVRhcmdldCwgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKSlcbiAgICAgIERhdGEuc2V0KGV2ZW50LmRlbGVnYXRlVGFyZ2V0LCBkYXRhS2V5LCBjb250ZXh0KVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0XG4gIH1cblxuICBfZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHsgb2Zmc2V0IH0gPSB0aGlzLl9jb25maWdcblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG9mZnNldC5zcGxpdCgnLCcpLm1hcCh2YWwgPT4gTnVtYmVyLnBhcnNlSW50KHZhbCwgMTApKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gcG9wcGVyRGF0YSA9PiBvZmZzZXQocG9wcGVyRGF0YSwgdGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpIHtcbiAgICBjb25zdCBkZWZhdWx0QnNQb3BwZXJDb25maWcgPSB7XG4gICAgICBwbGFjZW1lbnQ6IGF0dGFjaG1lbnQsXG4gICAgICBtb2RpZmllcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdmbGlwJyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBmYWxsYmFja1BsYWNlbWVudHM6IHRoaXMuX2NvbmZpZy5mYWxsYmFja1BsYWNlbWVudHNcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgYm91bmRhcnk6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdhcnJvdycsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgZWxlbWVudDogYC4ke3RoaXMuY29uc3RydWN0b3IuTkFNRX0tYXJyb3dgXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ29uQ2hhbmdlJyxcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgIHBoYXNlOiAnYWZ0ZXJXcml0ZScsXG4gICAgICAgICAgZm46IGRhdGEgPT4gdGhpcy5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKGRhdGEpXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBvbkZpcnN0VXBkYXRlOiBkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEub3B0aW9ucy5wbGFjZW1lbnQgIT09IGRhdGEucGxhY2VtZW50KSB7XG4gICAgICAgICAgdGhpcy5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKGRhdGEpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZGVmYXVsdEJzUG9wcGVyQ29uZmlnLFxuICAgICAgLi4uKHR5cGVvZiB0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnID09PSAnZnVuY3Rpb24nID8gdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyhkZWZhdWx0QnNQb3BwZXJDb25maWcpIDogdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZylcbiAgICB9XG4gIH1cblxuICBfYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpIHtcbiAgICB0aGlzLmdldFRpcEVsZW1lbnQoKS5jbGFzc0xpc3QuYWRkKGAke0NMQVNTX1BSRUZJWH0tJHt0aGlzLnVwZGF0ZUF0dGFjaG1lbnQoYXR0YWNobWVudCl9YClcbiAgfVxuXG4gIF9nZXRBdHRhY2htZW50KHBsYWNlbWVudCkge1xuICAgIHJldHVybiBBdHRhY2htZW50TWFwW3BsYWNlbWVudC50b1VwcGVyQ2FzZSgpXVxuICB9XG5cbiAgX3NldExpc3RlbmVycygpIHtcbiAgICBjb25zdCB0cmlnZ2VycyA9IHRoaXMuX2NvbmZpZy50cmlnZ2VyLnNwbGl0KCcgJylcblxuICAgIHRyaWdnZXJzLmZvckVhY2godHJpZ2dlciA9PiB7XG4gICAgICBpZiAodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5DTElDSywgdGhpcy5fY29uZmlnLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLnRvZ2dsZShldmVudCkpXG4gICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgIT09IFRSSUdHRVJfTUFOVUFMKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50SW4gPSB0cmlnZ2VyID09PSBUUklHR0VSX0hPVkVSID9cbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFRU5URVIgOlxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuRk9DVVNJTlxuICAgICAgICBjb25zdCBldmVudE91dCA9IHRyaWdnZXIgPT09IFRSSUdHRVJfSE9WRVIgP1xuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuTU9VU0VMRUFWRSA6XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5GT0NVU09VVFxuXG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBldmVudEluLCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMuX2VudGVyKGV2ZW50KSlcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIGV2ZW50T3V0LCB0aGlzLl9jb25maWcuc2VsZWN0b3IsIGV2ZW50ID0+IHRoaXMuX2xlYXZlKGV2ZW50KSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5faGlkZU1vZGFsSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQuY2xvc2VzdChgLiR7Q0xBU1NfTkFNRV9NT0RBTH1gKSwgJ2hpZGUuYnMubW9kYWwnLCB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5zZWxlY3Rvcikge1xuICAgICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgICAuLi50aGlzLl9jb25maWcsXG4gICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICBzZWxlY3RvcjogJydcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZml4VGl0bGUoKVxuICAgIH1cbiAgfVxuXG4gIF9maXhUaXRsZSgpIHtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgY29uc3Qgb3JpZ2luYWxUaXRsZVR5cGUgPSB0eXBlb2YgdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnKVxuXG4gICAgaWYgKHRpdGxlIHx8IG9yaWdpbmFsVGl0bGVUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnLCB0aXRsZSB8fCAnJylcbiAgICAgIGlmICh0aXRsZSAmJiAhdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSAmJiAhdGhpcy5fZWxlbWVudC50ZXh0Q29udGVudCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRpdGxlKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnJylcbiAgICB9XG4gIH1cblxuICBfZW50ZXIoZXZlbnQsIGNvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50LCBjb250ZXh0KVxuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW1xuICAgICAgICBldmVudC50eXBlID09PSAnZm9jdXNpbicgPyBUUklHR0VSX0ZPQ1VTIDogVFJJR0dFUl9IT1ZFUlxuICAgICAgXSA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dC5nZXRUaXBFbGVtZW50KCkuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykgfHwgY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSE9WRVJfU1RBVEVfU0hPVykge1xuICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhPVkVSX1NUQVRFX1NIT1dcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNsZWFyVGltZW91dChjb250ZXh0Ll90aW1lb3V0KVxuXG4gICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhPVkVSX1NUQVRFX1NIT1dcblxuICAgIGlmICghY29udGV4dC5fY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0Ll9jb25maWcuZGVsYXkuc2hvdykge1xuICAgICAgY29udGV4dC5zaG93KClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIT1ZFUl9TVEFURV9TSE9XKSB7XG4gICAgICAgIGNvbnRleHQuc2hvdygpXG4gICAgICB9XG4gICAgfSwgY29udGV4dC5fY29uZmlnLmRlbGF5LnNob3cpXG4gIH1cblxuICBfbGVhdmUoZXZlbnQsIGNvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gdGhpcy5faW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50LCBjb250ZXh0KVxuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW1xuICAgICAgICBldmVudC50eXBlID09PSAnZm9jdXNvdXQnID8gVFJJR0dFUl9GT0NVUyA6IFRSSUdHRVJfSE9WRVJcbiAgICAgIF0gPSBjb250ZXh0Ll9lbGVtZW50LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpXG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpXG5cbiAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSE9WRVJfU1RBVEVfT1VUXG5cbiAgICBpZiAoIWNvbnRleHQuX2NvbmZpZy5kZWxheSB8fCAhY29udGV4dC5fY29uZmlnLmRlbGF5LmhpZGUpIHtcbiAgICAgIGNvbnRleHQuaGlkZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb250ZXh0Ll90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSE9WRVJfU1RBVEVfT1VUKSB7XG4gICAgICAgIGNvbnRleHQuaGlkZSgpXG4gICAgICB9XG4gICAgfSwgY29udGV4dC5fY29uZmlnLmRlbGF5LmhpZGUpXG4gIH1cblxuICBfaXNXaXRoQWN0aXZlVHJpZ2dlcigpIHtcbiAgICBmb3IgKGNvbnN0IHRyaWdnZXIgaW4gdGhpcy5fYWN0aXZlVHJpZ2dlcikge1xuICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRyaWdnZXJbdHJpZ2dlcl0pIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uc3QgZGF0YUF0dHJpYnV0ZXMgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KVxuXG4gICAgT2JqZWN0LmtleXMoZGF0YUF0dHJpYnV0ZXMpLmZvckVhY2goZGF0YUF0dHIgPT4ge1xuICAgICAgaWYgKERJU0FMTE9XRURfQVRUUklCVVRFUy5oYXMoZGF0YUF0dHIpKSB7XG4gICAgICAgIGRlbGV0ZSBkYXRhQXR0cmlidXRlc1tkYXRhQXR0cl1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uZmlnID0ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgLi4uZGF0YUF0dHJpYnV0ZXMsXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pXG4gICAgfVxuXG4gICAgY29uZmlnLmNvbnRhaW5lciA9IGNvbmZpZy5jb250YWluZXIgPT09IGZhbHNlID8gZG9jdW1lbnQuYm9keSA6IGdldEVsZW1lbnQoY29uZmlnLmNvbnRhaW5lcilcblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmRlbGF5ID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLmRlbGF5ID0ge1xuICAgICAgICBzaG93OiBjb25maWcuZGVsYXksXG4gICAgICAgIGhpZGU6IGNvbmZpZy5kZWxheVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnRpdGxlID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLnRpdGxlID0gY29uZmlnLnRpdGxlLnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5jb250ZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLmNvbnRlbnQgPSBjb25maWcuY29udGVudC50b1N0cmluZygpXG4gICAgfVxuXG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZSlcblxuICAgIGlmIChjb25maWcuc2FuaXRpemUpIHtcbiAgICAgIGNvbmZpZy50ZW1wbGF0ZSA9IHNhbml0aXplSHRtbChjb25maWcudGVtcGxhdGUsIGNvbmZpZy5hbGxvd0xpc3QsIGNvbmZpZy5zYW5pdGl6ZUZuKVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXREZWxlZ2F0ZUNvbmZpZygpIHtcbiAgICBjb25zdCBjb25maWcgPSB7fVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZykge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fY29uZmlnKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRba2V5XSAhPT0gdGhpcy5fY29uZmlnW2tleV0pIHtcbiAgICAgICAgICBjb25maWdba2V5XSA9IHRoaXMuX2NvbmZpZ1trZXldXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfY2xlYW5UaXBDbGFzcygpIHtcbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIGNvbnN0IHRhYkNsYXNzID0gdGlwLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5tYXRjaChCU0NMU19QUkVGSVhfUkVHRVgpXG4gICAgaWYgKHRhYkNsYXNzICE9PSBudWxsICYmIHRhYkNsYXNzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRhYkNsYXNzLm1hcCh0b2tlbiA9PiB0b2tlbi50cmltKCkpXG4gICAgICAgIC5mb3JFYWNoKHRDbGFzcyA9PiB0aXAuY2xhc3NMaXN0LnJlbW92ZSh0Q2xhc3MpKVxuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UocG9wcGVyRGF0YSkge1xuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHBvcHBlckRhdGFcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMudGlwID0gc3RhdGUuZWxlbWVudHMucG9wcGVyXG4gICAgdGhpcy5fY2xlYW5UaXBDbGFzcygpXG4gICAgdGhpcy5fYWRkQXR0YWNobWVudENsYXNzKHRoaXMuX2dldEF0dGFjaG1lbnQoc3RhdGUucGxhY2VtZW50KSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9IERhdGEuZ2V0KHRoaXMsIERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZ1xuXG4gICAgICBpZiAoIWRhdGEgJiYgL2Rpc3Bvc2V8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBUb29sdGlwKHRoaXMsIF9jb25maWcpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLlRvb2x0aXAgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oVG9vbHRpcClcblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBwb3BvdmVyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgZGVmaW5lSlF1ZXJ5UGx1Z2luIH0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAncG9wb3ZlcidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnBvcG92ZXInXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgQ0xBU1NfUFJFRklYID0gJ2JzLXBvcG92ZXInXG5jb25zdCBCU0NMU19QUkVGSVhfUkVHRVggPSBuZXcgUmVnRXhwKGAoXnxcXFxccykke0NMQVNTX1BSRUZJWH1cXFxcUytgLCAnZycpXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIC4uLlRvb2x0aXAuRGVmYXVsdCxcbiAgcGxhY2VtZW50OiAncmlnaHQnLFxuICBvZmZzZXQ6IFswLCA4XSxcbiAgdHJpZ2dlcjogJ2NsaWNrJyxcbiAgY29udGVudDogJycsXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInBvcG92ZXJcIiByb2xlPVwidG9vbHRpcFwiPicgK1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInBvcG92ZXItYXJyb3dcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAnPGgzIGNsYXNzPVwicG9wb3Zlci1oZWFkZXJcIj48L2gzPicgK1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInBvcG92ZXItYm9keVwiPjwvZGl2PicgK1xuICAgICAgICAgICAgJzwvZGl2Pidcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIC4uLlRvb2x0aXAuRGVmYXVsdFR5cGUsXG4gIGNvbnRlbnQ6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJ1xufVxuXG5jb25zdCBFdmVudCA9IHtcbiAgSElERTogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU46IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICBTSE9XOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBJTlNFUlRFRDogYGluc2VydGVkJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0s6IGBjbGljayR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTSU46IGBmb2N1c2luJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNPVVQ6IGBmb2N1c291dCR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFRU5URVI6IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VMRUFWRTogYG1vdXNlbGVhdmUke0VWRU5UX0tFWX1gXG59XG5cbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5cbmNvbnN0IFNFTEVDVE9SX1RJVExFID0gJy5wb3BvdmVyLWhlYWRlcidcbmNvbnN0IFNFTEVDVE9SX0NPTlRFTlQgPSAnLnBvcG92ZXItYm9keSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBUb29sdGlwIHtcbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICBzdGF0aWMgZ2V0IEV2ZW50KCkge1xuICAgIHJldHVybiBFdmVudFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIC8vIE92ZXJyaWRlc1xuXG4gIGlzV2l0aENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGl0bGUoKSB8fCB0aGlzLl9nZXRDb250ZW50KClcbiAgfVxuXG4gIHNldENvbnRlbnQoKSB7XG4gICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcblxuICAgIC8vIHdlIHVzZSBhcHBlbmQgZm9yIGh0bWwgb2JqZWN0cyB0byBtYWludGFpbiBqcyBldmVudHNcbiAgICB0aGlzLnNldEVsZW1lbnRDb250ZW50KFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfVElUTEUsIHRpcCksIHRoaXMuZ2V0VGl0bGUoKSlcbiAgICBsZXQgY29udGVudCA9IHRoaXMuX2dldENvbnRlbnQoKVxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29udGVudCA9IGNvbnRlbnQuY2FsbCh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9DT05URU5ULCB0aXApLCBjb250ZW50KVxuXG4gICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9GQURFLCBDTEFTU19OQU1FX1NIT1cpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2FkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KSB7XG4gICAgdGhpcy5nZXRUaXBFbGVtZW50KCkuY2xhc3NMaXN0LmFkZChgJHtDTEFTU19QUkVGSVh9LSR7dGhpcy51cGRhdGVBdHRhY2htZW50KGF0dGFjaG1lbnQpfWApXG4gIH1cblxuICBfZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtY29udGVudCcpIHx8IHRoaXMuX2NvbmZpZy5jb250ZW50XG4gIH1cblxuICBfY2xlYW5UaXBDbGFzcygpIHtcbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIGNvbnN0IHRhYkNsYXNzID0gdGlwLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5tYXRjaChCU0NMU19QUkVGSVhfUkVHRVgpXG4gICAgaWYgKHRhYkNsYXNzICE9PSBudWxsICYmIHRhYkNsYXNzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRhYkNsYXNzLm1hcCh0b2tlbiA9PiB0b2tlbi50cmltKCkpXG4gICAgICAgIC5mb3JFYWNoKHRDbGFzcyA9PiB0aXAuY2xhc3NMaXN0LnJlbW92ZSh0Q2xhc3MpKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9IERhdGEuZ2V0KHRoaXMsIERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbFxuXG4gICAgICBpZiAoIWRhdGEgJiYgL2Rpc3Bvc2V8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBQb3BvdmVyKHRoaXMsIF9jb25maWcpXG4gICAgICAgIERhdGEuc2V0KHRoaXMsIERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5Qb3BvdmVyIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFBvcG92ZXIpXG5cbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXJcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogc2Nyb2xsc3B5LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXRTZWxlY3RvckZyb21FbGVtZW50LFxuICBnZXRVSUQsXG4gIGlzRWxlbWVudCxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuL2RvbS9tYW5pcHVsYXRvcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ3Njcm9sbHNweSdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnNjcm9sbHNweSdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBvZmZzZXQ6IDEwLFxuICBtZXRob2Q6ICdhdXRvJyxcbiAgdGFyZ2V0OiAnJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgb2Zmc2V0OiAnbnVtYmVyJyxcbiAgbWV0aG9kOiAnc3RyaW5nJyxcbiAgdGFyZ2V0OiAnKHN0cmluZ3xlbGVtZW50KSdcbn1cblxuY29uc3QgRVZFTlRfQUNUSVZBVEUgPSBgYWN0aXZhdGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TQ1JPTEwgPSBgc2Nyb2xsJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0RST1BET1dOX0lURU0gPSAnZHJvcGRvd24taXRlbSdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcblxuY29uc3QgU0VMRUNUT1JfREFUQV9TUFkgPSAnW2RhdGEtYnMtc3B5PVwic2Nyb2xsXCJdJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAgPSAnLm5hdiwgLmxpc3QtZ3JvdXAnXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElOS1MgPSAnLm5hdi1saW5rJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0lURU1TID0gJy5uYXYtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0xJU1RfSVRFTVMgPSAnLmxpc3QtZ3JvdXAtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOID0gJy5kcm9wZG93bidcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9ICcuZHJvcGRvd24tdG9nZ2xlJ1xuXG5jb25zdCBNRVRIT0RfT0ZGU0VUID0gJ29mZnNldCdcbmNvbnN0IE1FVEhPRF9QT1NJVElPTiA9ICdwb3NpdGlvbidcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFNjcm9sbFNweSBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuICAgIHRoaXMuX3Njcm9sbEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnRhZ05hbWUgPT09ICdCT0RZJyA/IHdpbmRvdyA6IHRoaXMuX2VsZW1lbnRcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX3NlbGVjdG9yID0gYCR7dGhpcy5fY29uZmlnLnRhcmdldH0gJHtTRUxFQ1RPUl9OQVZfTElOS1N9LCAke3RoaXMuX2NvbmZpZy50YXJnZXR9ICR7U0VMRUNUT1JfTElTVF9JVEVNU30sICR7dGhpcy5fY29uZmlnLnRhcmdldH0gLiR7Q0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNfWBcbiAgICB0aGlzLl9vZmZzZXRzID0gW11cbiAgICB0aGlzLl90YXJnZXRzID0gW11cbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsXG4gICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ID0gMFxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX3Njcm9sbEVsZW1lbnQsIEVWRU5UX1NDUk9MTCwgKCkgPT4gdGhpcy5fcHJvY2VzcygpKVxuXG4gICAgdGhpcy5yZWZyZXNoKClcbiAgICB0aGlzLl9wcm9jZXNzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCBhdXRvTWV0aG9kID0gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gdGhpcy5fc2Nyb2xsRWxlbWVudC53aW5kb3cgP1xuICAgICAgTUVUSE9EX09GRlNFVCA6XG4gICAgICBNRVRIT0RfUE9TSVRJT05cblxuICAgIGNvbnN0IG9mZnNldE1ldGhvZCA9IHRoaXMuX2NvbmZpZy5tZXRob2QgPT09ICdhdXRvJyA/XG4gICAgICBhdXRvTWV0aG9kIDpcbiAgICAgIHRoaXMuX2NvbmZpZy5tZXRob2RcblxuICAgIGNvbnN0IG9mZnNldEJhc2UgPSBvZmZzZXRNZXRob2QgPT09IE1FVEhPRF9QT1NJVElPTiA/XG4gICAgICB0aGlzLl9nZXRTY3JvbGxUb3AoKSA6XG4gICAgICAwXG5cbiAgICB0aGlzLl9vZmZzZXRzID0gW11cbiAgICB0aGlzLl90YXJnZXRzID0gW11cbiAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSB0aGlzLl9nZXRTY3JvbGxIZWlnaHQoKVxuXG4gICAgY29uc3QgdGFyZ2V0cyA9IFNlbGVjdG9yRW5naW5lLmZpbmQodGhpcy5fc2VsZWN0b3IpXG5cbiAgICB0YXJnZXRzLm1hcChlbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldFNlbGVjdG9yID0gZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuICAgICAgY29uc3QgdGFyZ2V0ID0gdGFyZ2V0U2VsZWN0b3IgPyBTZWxlY3RvckVuZ2luZS5maW5kT25lKHRhcmdldFNlbGVjdG9yKSA6IG51bGxcblxuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICBjb25zdCB0YXJnZXRCQ1IgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgaWYgKHRhcmdldEJDUi53aWR0aCB8fCB0YXJnZXRCQ1IuaGVpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIE1hbmlwdWxhdG9yW29mZnNldE1ldGhvZF0odGFyZ2V0KS50b3AgKyBvZmZzZXRCYXNlLFxuICAgICAgICAgICAgdGFyZ2V0U2VsZWN0b3JcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9KVxuICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYVswXSAtIGJbMF0pXG4gICAgICAuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgdGhpcy5fb2Zmc2V0cy5wdXNoKGl0ZW1bMF0pXG4gICAgICAgIHRoaXMuX3RhcmdldHMucHVzaChpdGVtWzFdKVxuICAgICAgfSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9zY3JvbGxFbGVtZW50LCBFVkVOVF9LRVkpXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCksXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGFyZ2V0ICE9PSAnc3RyaW5nJyAmJiBpc0VsZW1lbnQoY29uZmlnLnRhcmdldCkpIHtcbiAgICAgIGxldCB7IGlkIH0gPSBjb25maWcudGFyZ2V0XG4gICAgICBpZiAoIWlkKSB7XG4gICAgICAgIGlkID0gZ2V0VUlEKE5BTUUpXG4gICAgICAgIGNvbmZpZy50YXJnZXQuaWQgPSBpZFxuICAgICAgfVxuXG4gICAgICBjb25maWcudGFyZ2V0ID0gYCMke2lkfWBcbiAgICB9XG5cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXRTY3JvbGxUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHdpbmRvdyA/XG4gICAgICB0aGlzLl9zY3JvbGxFbGVtZW50LnBhZ2VZT2Zmc2V0IDpcbiAgICAgIHRoaXMuX3Njcm9sbEVsZW1lbnQuc2Nyb2xsVG9wXG4gIH1cblxuICBfZ2V0U2Nyb2xsSGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50LnNjcm9sbEhlaWdodCB8fCBNYXRoLm1heChcbiAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodFxuICAgIClcbiAgfVxuXG4gIF9nZXRPZmZzZXRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHdpbmRvdyA/XG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgOlxuICAgICAgdGhpcy5fc2Nyb2xsRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcbiAgfVxuXG4gIF9wcm9jZXNzKCkge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuX2dldFNjcm9sbFRvcCgpICsgdGhpcy5fY29uZmlnLm9mZnNldFxuICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IHRoaXMuX2dldFNjcm9sbEhlaWdodCgpXG4gICAgY29uc3QgbWF4U2Nyb2xsID0gdGhpcy5fY29uZmlnLm9mZnNldCArIHNjcm9sbEhlaWdodCAtIHRoaXMuX2dldE9mZnNldEhlaWdodCgpXG5cbiAgICBpZiAodGhpcy5fc2Nyb2xsSGVpZ2h0ICE9PSBzY3JvbGxIZWlnaHQpIHtcbiAgICAgIHRoaXMucmVmcmVzaCgpXG4gICAgfVxuXG4gICAgaWYgKHNjcm9sbFRvcCA+PSBtYXhTY3JvbGwpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuX3RhcmdldHNbdGhpcy5fdGFyZ2V0cy5sZW5ndGggLSAxXVxuXG4gICAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ICE9PSB0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZhdGUodGFyZ2V0KVxuICAgICAgfVxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ICYmIHNjcm9sbFRvcCA8IHRoaXMuX29mZnNldHNbMF0gJiYgdGhpcy5fb2Zmc2V0c1swXSA+IDApIHtcbiAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGxcbiAgICAgIHRoaXMuX2NsZWFyKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSB0aGlzLl9vZmZzZXRzLmxlbmd0aDsgaS0tOykge1xuICAgICAgY29uc3QgaXNBY3RpdmVUYXJnZXQgPSB0aGlzLl9hY3RpdmVUYXJnZXQgIT09IHRoaXMuX3RhcmdldHNbaV0gJiZcbiAgICAgICAgICBzY3JvbGxUb3AgPj0gdGhpcy5fb2Zmc2V0c1tpXSAmJlxuICAgICAgICAgICh0eXBlb2YgdGhpcy5fb2Zmc2V0c1tpICsgMV0gPT09ICd1bmRlZmluZWQnIHx8IHNjcm9sbFRvcCA8IHRoaXMuX29mZnNldHNbaSArIDFdKVxuXG4gICAgICBpZiAoaXNBY3RpdmVUYXJnZXQpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZhdGUodGhpcy5fdGFyZ2V0c1tpXSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfYWN0aXZhdGUodGFyZ2V0KSB7XG4gICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gdGFyZ2V0XG5cbiAgICB0aGlzLl9jbGVhcigpXG5cbiAgICBjb25zdCBxdWVyaWVzID0gdGhpcy5fc2VsZWN0b3Iuc3BsaXQoJywnKVxuICAgICAgLm1hcChzZWxlY3RvciA9PiBgJHtzZWxlY3Rvcn1bZGF0YS1icy10YXJnZXQ9XCIke3RhcmdldH1cIl0sJHtzZWxlY3Rvcn1baHJlZj1cIiR7dGFyZ2V0fVwiXWApXG5cbiAgICBjb25zdCBsaW5rID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShxdWVyaWVzLmpvaW4oJywnKSlcblxuICAgIGlmIChsaW5rLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BET1dOX0lURU0pKSB7XG4gICAgICBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSwgbGluay5jbG9zZXN0KFNFTEVDVE9SX0RST1BET1dOKSlcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2V0IHRyaWdnZXJlZCBsaW5rIGFzIGFjdGl2ZVxuICAgICAgbGluay5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICBTZWxlY3RvckVuZ2luZS5wYXJlbnRzKGxpbmssIFNFTEVDVE9SX05BVl9MSVNUX0dST1VQKVxuICAgICAgICAuZm9yRWFjaChsaXN0R3JvdXAgPT4ge1xuICAgICAgICAgIC8vIFNldCB0cmlnZ2VyZWQgbGlua3MgcGFyZW50cyBhcyBhY3RpdmVcbiAgICAgICAgICAvLyBXaXRoIGJvdGggPHVsPiBhbmQgPG5hdj4gbWFya3VwIGEgcGFyZW50IGlzIHRoZSBwcmV2aW91cyBzaWJsaW5nIG9mIGFueSBuYXYgYW5jZXN0b3JcbiAgICAgICAgICBTZWxlY3RvckVuZ2luZS5wcmV2KGxpc3RHcm91cCwgYCR7U0VMRUNUT1JfTkFWX0xJTktTfSwgJHtTRUxFQ1RPUl9MSVNUX0lURU1TfWApXG4gICAgICAgICAgICAuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSkpXG5cbiAgICAgICAgICAvLyBIYW5kbGUgc3BlY2lhbCBjYXNlIHdoZW4gLm5hdi1saW5rIGlzIGluc2lkZSAubmF2LWl0ZW1cbiAgICAgICAgICBTZWxlY3RvckVuZ2luZS5wcmV2KGxpc3RHcm91cCwgU0VMRUNUT1JfTkFWX0lURU1TKVxuICAgICAgICAgICAgLmZvckVhY2gobmF2SXRlbSA9PiB7XG4gICAgICAgICAgICAgIFNlbGVjdG9yRW5naW5lLmNoaWxkcmVuKG5hdkl0ZW0sIFNFTEVDVE9SX05BVl9MSU5LUylcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX3Njcm9sbEVsZW1lbnQsIEVWRU5UX0FDVElWQVRFLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0YXJnZXRcbiAgICB9KVxuICB9XG5cbiAgX2NsZWFyKCkge1xuICAgIFNlbGVjdG9yRW5naW5lLmZpbmQodGhpcy5fc2VsZWN0b3IpXG4gICAgICAuZmlsdGVyKG5vZGUgPT4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuICAgICAgLmZvckVhY2gobm9kZSA9PiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBTY3JvbGxTcHkuZ2V0SW5zdGFuY2UodGhpcykgfHwgbmV3IFNjcm9sbFNweSh0aGlzLCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IHt9KVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1NQWSlcbiAgICAuZm9yRWFjaChzcHkgPT4gbmV3IFNjcm9sbFNweShzcHkpKVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLlNjcm9sbFNweSB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihTY3JvbGxTcHkpXG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFNweVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiB0YWIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGlzRGlzYWJsZWQsXG4gIHJlZmxvd1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAndGFiJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMudGFiJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0RST1BET1dOX01FTlUgPSAnZHJvcGRvd24tbWVudSdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5cbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOID0gJy5kcm9wZG93bidcbmNvbnN0IFNFTEVDVE9SX05BVl9MSVNUX0dST1VQID0gJy5uYXYsIC5saXN0LWdyb3VwJ1xuY29uc3QgU0VMRUNUT1JfQUNUSVZFID0gJy5hY3RpdmUnXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkVfVUwgPSAnOnNjb3BlID4gbGkgPiAuYWN0aXZlJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwidGFiXCJdLCBbZGF0YS1icy10b2dnbGU9XCJwaWxsXCJdLCBbZGF0YS1icy10b2dnbGU9XCJsaXN0XCJdJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFID0gJy5kcm9wZG93bi10b2dnbGUnXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9BQ1RJVkVfQ0hJTEQgPSAnOnNjb3BlID4gLmRyb3Bkb3duLW1lbnUgLmFjdGl2ZSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFRhYiBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBzaG93KCkge1xuICAgIGlmICgodGhpcy5fZWxlbWVudC5wYXJlbnROb2RlICYmXG4gICAgICB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgcHJldmlvdXNcbiAgICBjb25zdCB0YXJnZXQgPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMuX2VsZW1lbnQpXG4gICAgY29uc3QgbGlzdEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVApXG5cbiAgICBpZiAobGlzdEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGl0ZW1TZWxlY3RvciA9IGxpc3RFbGVtZW50Lm5vZGVOYW1lID09PSAnVUwnIHx8IGxpc3RFbGVtZW50Lm5vZGVOYW1lID09PSAnT0wnID8gU0VMRUNUT1JfQUNUSVZFX1VMIDogU0VMRUNUT1JfQUNUSVZFXG4gICAgICBwcmV2aW91cyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoaXRlbVNlbGVjdG9yLCBsaXN0RWxlbWVudClcbiAgICAgIHByZXZpb3VzID0gcHJldmlvdXNbcHJldmlvdXMubGVuZ3RoIC0gMV1cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBwcmV2aW91cyA/XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihwcmV2aW91cywgRVZFTlRfSElERSwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgICB9KSA6XG4gICAgICBudWxsXG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2aW91c1xuICAgIH0pXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgfHwgKGhpZGVFdmVudCAhPT0gbnVsbCAmJiBoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2YXRlKHRoaXMuX2VsZW1lbnQsIGxpc3RFbGVtZW50KVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihwcmV2aW91cywgRVZFTlRfSElEREVOLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICAgIH0pXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2aW91c1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICB0aGlzLl9hY3RpdmF0ZSh0YXJnZXQsIHRhcmdldC5wYXJlbnROb2RlLCBjb21wbGV0ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfYWN0aXZhdGUoZWxlbWVudCwgY29udGFpbmVyLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnRzID0gY29udGFpbmVyICYmIChjb250YWluZXIubm9kZU5hbWUgPT09ICdVTCcgfHwgY29udGFpbmVyLm5vZGVOYW1lID09PSAnT0wnKSA/XG4gICAgICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0FDVElWRV9VTCwgY29udGFpbmVyKSA6XG4gICAgICBTZWxlY3RvckVuZ2luZS5jaGlsZHJlbihjb250YWluZXIsIFNFTEVDVE9SX0FDVElWRSlcblxuICAgIGNvbnN0IGFjdGl2ZSA9IGFjdGl2ZUVsZW1lbnRzWzBdXG4gICAgY29uc3QgaXNUcmFuc2l0aW9uaW5nID0gY2FsbGJhY2sgJiYgKGFjdGl2ZSAmJiBhY3RpdmUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHRoaXMuX3RyYW5zaXRpb25Db21wbGV0ZShlbGVtZW50LCBhY3RpdmUsIGNhbGxiYWNrKVxuXG4gICAgaWYgKGFjdGl2ZSAmJiBpc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIGFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIGVsZW1lbnQsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICBfdHJhbnNpdGlvbkNvbXBsZXRlKGVsZW1lbnQsIGFjdGl2ZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBhY3RpdmUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgY29uc3QgZHJvcGRvd25DaGlsZCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfRFJPUERPV05fQUNUSVZFX0NISUxELCBhY3RpdmUucGFyZW50Tm9kZSlcblxuICAgICAgaWYgKGRyb3Bkb3duQ2hpbGQpIHtcbiAgICAgICAgZHJvcGRvd25DaGlsZC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlLmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAndGFiJykge1xuICAgICAgICBhY3RpdmUuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAndGFiJykge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKVxuICAgIH1cblxuICAgIHJlZmxvdyhlbGVtZW50KVxuXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgfVxuXG4gICAgbGV0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50Lm5vZGVOYW1lID09PSAnTEknKSB7XG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZVxuICAgIH1cblxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BET1dOX01FTlUpKSB7XG4gICAgICBjb25zdCBkcm9wZG93bkVsZW1lbnQgPSBlbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfRFJPUERPV04pXG5cbiAgICAgIGlmIChkcm9wZG93bkVsZW1lbnQpIHtcbiAgICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUsIGRyb3Bkb3duRWxlbWVudClcbiAgICAgICAgICAuZm9yRWFjaChkcm9wZG93biA9PiBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgIH1cblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gRGF0YS5nZXQodGhpcywgREFUQV9LRVkpIHx8IG5ldyBUYWIodGhpcylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBkYXRhID0gRGF0YS5nZXQodGhpcywgREFUQV9LRVkpIHx8IG5ldyBUYWIodGhpcylcbiAgZGF0YS5zaG93KClcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5UYWIgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oVGFiKVxuXG5leHBvcnQgZGVmYXVsdCBUYWJcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogdG9hc3QuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIHJlZmxvdyxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ3RvYXN0J1xuY29uc3QgREFUQV9LRVkgPSAnYnMudG9hc3QnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuXG5jb25zdCBFVkVOVF9DTElDS19ESVNNSVNTID0gYGNsaWNrLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRU9WRVIgPSBgbW91c2VvdmVyJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VPVVQgPSBgbW91c2VvdXQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9GT0NVU0lOID0gYGZvY3VzaW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9GT0NVU09VVCA9IGBmb2N1c291dCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX0hJREUgPSAnaGlkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XSU5HID0gJ3Nob3dpbmcnXG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhbmltYXRpb246ICdib29sZWFuJyxcbiAgYXV0b2hpZGU6ICdib29sZWFuJyxcbiAgZGVsYXk6ICdudW1iZXInXG59XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGFuaW1hdGlvbjogdHJ1ZSxcbiAgYXV0b2hpZGU6IHRydWUsXG4gIGRlbGF5OiA1MDAwXG59XG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfRElTTUlTUyA9ICdbZGF0YS1icy1kaXNtaXNzPVwidG9hc3RcIl0nXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBUb2FzdCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50KVxuXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl90aW1lb3V0ID0gbnVsbFxuICAgIHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb24gPSBmYWxzZVxuICAgIHRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb24gPSBmYWxzZVxuICAgIHRoaXMuX3NldExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBzaG93KCkge1xuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1cpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2NsZWFyVGltZW91dCgpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmFuaW1hdGlvbikge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSlcbiAgICB9XG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1dJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTilcblxuICAgICAgdGhpcy5fbWF5YmVTY2hlZHVsZUhpZGUoKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0hJREUpXG4gICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPV0lORylcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2NvbmZpZy5hbmltYXRpb24pXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcblxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9ISURFKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy5fZWxlbWVudCwgdGhpcy5fY29uZmlnLmFuaW1hdGlvbilcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy5fY2xlYXJUaW1lb3V0KClcblxuICAgIGlmICh0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIH1cblxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpLFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cblxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpXG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfbWF5YmVTY2hlZHVsZUhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuYXV0b2hpZGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9oYXNNb3VzZUludGVyYWN0aW9uIHx8IHRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfSwgdGhpcy5fY29uZmlnLmRlbGF5KVxuICB9XG5cbiAgX29uSW50ZXJhY3Rpb24oZXZlbnQsIGlzSW50ZXJhY3RpbmcpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgIGNhc2UgJ21vdXNlb3Zlcic6XG4gICAgICBjYXNlICdtb3VzZW91dCc6XG4gICAgICAgIHRoaXMuX2hhc01vdXNlSW50ZXJhY3Rpb24gPSBpc0ludGVyYWN0aW5nXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdmb2N1c2luJzpcbiAgICAgIGNhc2UgJ2ZvY3Vzb3V0JzpcbiAgICAgICAgdGhpcy5faGFzS2V5Ym9hcmRJbnRlcmFjdGlvbiA9IGlzSW50ZXJhY3RpbmdcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaWYgKGlzSW50ZXJhY3RpbmcpIHtcbiAgICAgIHRoaXMuX2NsZWFyVGltZW91dCgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBuZXh0RWxlbWVudCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXRcbiAgICBpZiAodGhpcy5fZWxlbWVudCA9PT0gbmV4dEVsZW1lbnQgfHwgdGhpcy5fZWxlbWVudC5jb250YWlucyhuZXh0RWxlbWVudCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX21heWJlU2NoZWR1bGVIaWRlKClcbiAgfVxuXG4gIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0NMSUNLX0RJU01JU1MsIFNFTEVDVE9SX0RBVEFfRElTTUlTUywgKCkgPT4gdGhpcy5oaWRlKCkpXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFT1ZFUiwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgdHJ1ZSkpXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFT1VULCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCBmYWxzZSkpXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0ZPQ1VTSU4sIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIHRydWUpKVxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9GT0NVU09VVCwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgZmFsc2UpKVxuICB9XG5cbiAgX2NsZWFyVGltZW91dCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcbiAgICB0aGlzLl90aW1lb3V0ID0gbnVsbFxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gRGF0YS5nZXQodGhpcywgREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFRvYXN0KHRoaXMsIF9jb25maWcpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5Ub2FzdCB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihUb2FzdClcblxuZXhwb3J0IGRlZmF1bHQgVG9hc3RcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogaW5kZXgudW1kLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEFsZXJ0IGZyb20gJy4vc3JjL2FsZXJ0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL3NyYy9idXR0b24nXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi9zcmMvY2Fyb3VzZWwnXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnLi9zcmMvY29sbGFwc2UnXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9zcmMvZHJvcGRvd24nXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9zcmMvbW9kYWwnXG5pbXBvcnQgT2ZmY2FudmFzIGZyb20gJy4vc3JjL29mZmNhbnZhcydcbmltcG9ydCBQb3BvdmVyIGZyb20gJy4vc3JjL3BvcG92ZXInXG5pbXBvcnQgU2Nyb2xsU3B5IGZyb20gJy4vc3JjL3Njcm9sbHNweSdcbmltcG9ydCBUYWIgZnJvbSAnLi9zcmMvdGFiJ1xuaW1wb3J0IFRvYXN0IGZyb20gJy4vc3JjL3RvYXN0J1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi9zcmMvdG9vbHRpcCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBBbGVydCxcbiAgQnV0dG9uLFxuICBDYXJvdXNlbCxcbiAgQ29sbGFwc2UsXG4gIERyb3Bkb3duLFxuICBNb2RhbCxcbiAgT2ZmY2FudmFzLFxuICBQb3BvdmVyLFxuICBTY3JvbGxTcHksXG4gIFRhYixcbiAgVG9hc3QsXG4gIFRvb2x0aXBcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbmltcG9ydCByZW5kZXJDb21tZW50cyBmcm9tIFwiLi9mZXRjaC1jb21tZW50XCI7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgYnRuQ29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuX19jb21tZW50XCIpO1xyXG4gIGNvbnN0IGNvbW1lbnRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX19jb21tZW50XCIpO1xyXG4gIGNvbnN0IGxvYWRpbmdTcGlubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkaW5nLXNwaW5uZXJcIik7XHJcbiAgY29uc3Qgc2Vzc2lvblRyaWdnZXJGb2N1c1N0b3JhZ2UgPSBzZXNzaW9uU3RvcmFnZTtcclxuICBjb25zdCBORVdfQ09NTUVOVCA9IFwibmV3X2NvbW1lbnRcIjtcclxuICBjb25zdCBjb21tZW50X2JvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbW1lbnRfX2JvZHlcIik7XHJcblxyXG4gIC8vY29tbWVudCBlbmFibGUgYnV0dG9uXHJcblxyXG4gIGNvbW1lbnRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxvYWRpbmdTcGlubmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcbiAgICByZW5kZXJDb21tZW50cztcclxuXHJcbiAgICBjb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9wb3N0XCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGNvbW1lbnRfYm9keTogdGlueW1jZS5nZXQoXCJjb21tZW50RmllbGRcIikuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgcG9zdF9pZDogYnRuQ29tbWVudC5kYXRhc2V0LnBvc3RJZCxcclxuICAgICAgICAgIHN1YmplY3RfaWQ6IGJ0bkNvbW1lbnQuZGF0YXNldC5zdWJqZWN0SWQsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHBvc3RDb21tZW50KClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29tbWVudCBTdWNjZXNzXCIsIHJlcyk7XHJcbiAgICAgICAgdGlueW1jZS5nZXQoXCJjb21tZW50RmllbGRcIikuc2V0Q29udGVudChcIlwiLnRyaW0oKSk7XHJcbiAgICAgICAgc2Vzc2lvblRyaWdnZXJGb2N1c1N0b3JhZ2Uuc2V0SXRlbShORVdfQ09NTUVOVCwgcmVzLm5ld19jb21tZW50KTtcclxuXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMudXJsO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICB9KTtcclxuXHJcbiAgLy9jb21tZW50IGF1dG9mb2N1c1xyXG4gIGNvbnN0IGZvY3VzVG9OZXdDb21tZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29tbWVudFRvRm9jdXMgPSBzZXNzaW9uVHJpZ2dlckZvY3VzU3RvcmFnZS5nZXRJdGVtKE5FV19DT01NRU5UKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbW1lbnRfYm9keS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBBcnJheS5mcm9tKGNvbW1lbnRfYm9keSkuaW5kZXhPZihjb21tZW50X2JvZHlbaV0pO1xyXG4gICAgICBjb25zdCBjb21tZW50Qm9keUZvY3VzID0gY29tbWVudF9ib2R5W2ldLmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG4gICAgICBpZiAoY29tbWVudEJvZHlGb2N1cyA9PT0gY29tbWVudFRvRm9jdXMpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGAjJHtjb21tZW50VG9Gb2N1c31gOyBcclxuICAgICAgICBjb21tZW50X2JvZHlbaV0uY2xhc3NMaXN0LmFkZChcIm5ld19fY29tbWVudFwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGNvbW1lbnRfYm9keVtpXS5jbGFzc0xpc3QuYWRkKFwiZmFkZV9fbmV3LWNvbW1lbnRcIik7XHJcbiAgICAgICAgfSwgNDAwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNlc3Npb25UcmlnZ2VyRm9jdXNTdG9yYWdlLmNsZWFyKCk7XHJcbiAgfTtcclxuICBmb2N1c1RvTmV3Q29tbWVudCgpO1xyXG59KTtcclxuIiwiY29uc3QgY2hlY2tTbmlwcGV0Q29kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZVtjbGFzc149XCJsYW5ndWFnZVwiXScpO1xyXG5jaGVja1NuaXBwZXRDb2RlLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgY29uc3QgY29weUNvZGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNoZWNrU25pcHBldENvZGVbaW5kZXhdLnN0eWxlLnNldFByb3BlcnR5KFwicG9zaXRpb25cIiwgXCJyZWxhdGl2ZSAhaW1wb3J0YW50XCIpO1xyXG4gIGNvcHlDb2RlQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29weV9fc25pcHBldC1jb2RlXCIpO1xyXG4gIGNvcHlDb2RlQnRuLnRleHRDb250ZW50ID0gXCJDb3B5IFNuaXBwZXRcIjtcclxuICBjb3B5Q29kZUJ0bi5jbGFzc0xpc3QuYWRkKFwiY29weV9fY29kZS1zbmlwcGV0XCIpO1xyXG4gIGl0ZW0uYXBwZW5kQ2hpbGQoY29weUNvZGVCdG4pO1xyXG59KTtcclxuXHJcbmNvbnN0IGNvcHlDb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb3B5X19zbmlwcGV0LWNvZGVcIik7XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IGNvcHlDb2RlLmxlbmd0aDsgaSsrKSB7XHJcbiAgY29weUNvZGVbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaW5pdGlhbGl6ZUNvcHlDb2RlQnRuKGUsIGkpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsaXplQ29weUNvZGVCdG4gPSAoZSwgaSkgPT4ge1xyXG4gIEFycmF5LmZyb20oY29weUNvZGUpLmluZGV4T2YoZS50YXJnZXQpO1xyXG4gIGNvcHlDb2RlW2ldLnN0eWxlLnNldFByb3BlcnR5KFwiYmFja2dyb3VuZFwiLCBcIiMxMTkwMDBcIik7XHJcbiAgY29weUNvZGVbaV0uc3R5bGUuc2V0UHJvcGVydHkoXCJjb2xvclwiLCBcIiNmZmZcIik7XHJcbiAgY29weUNvZGVbaV0uaW5uZXJIVE1MID0gXCJDb3B5ICZjaGVjaztcIjtcclxuICBsZXQgc25pcHBldENvbnRlbnQgPSBjaGVja1NuaXBwZXRDb2RlW2ldLnRleHRDb250ZW50LnJlcGxhY2UoXCJDb3B5IOKck1wiLCBcIlwiKTtcclxuXHJcbiAgY29uc3QgZHVtbXlUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICBkdW1teVRleHRBcmVhLnZhbHVlID0gc25pcHBldENvbnRlbnQ7XHJcbiAgZHVtbXlUZXh0QXJlYS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICBkdW1teVRleHRBcmVhLnN0eWxlLmxlZnQgPSBcIi0xMDAlXCI7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkdW1teVRleHRBcmVhKTtcclxuICBkdW1teVRleHRBcmVhLnNlbGVjdCgpO1xyXG4gIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGR1bW15VGV4dEFyZWEpO1xyXG59O1xyXG4iLCJjb25zdCByZW5kZXJDb21tZW50cyA9ICgpID0+IHtcclxuICBjb25zdCBmZXRjaEFsbENvbW1lbnRGb3JQb3N0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9jb21tZW50c1wiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIGNhY2hlOiBcIm5vLWNhY2hlXCIsXHJcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHtcclxuICAgICAgICAgIGVycm9yX21lc3NhZ2U6IFwiVW5hYmxlZCB0byBmZXRjaCBjb21tZW50LCBQbGVhc2UgcmVmcmVzaCB0aGUgcGFnZVwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZmV0Y2hBbGxDb21tZW50Rm9yUG9zdCgpXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDb21tZW50cztcclxuIiwiaW1wb3J0IGxvZ29JbWFnZSBmcm9tIFwiLi4vYXNzZXRzL2xvZ28vaW5zaWRlci1odWIucG5nXCI7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxvZ29cIik7XHJcbiAgbG9nby5mb3JFYWNoKChpdGVtKSA9PiAoaXRlbS5zcmMgPSBsb2dvSW1hZ2UpKTtcclxufSk7XHJcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgbG9hZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGluZy1jb250YWluZXJcIik7XHJcbiAgY29uc3QgYnRuU2lnbkluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5fX3NpZ24taW5cIik7XHJcbiAgY29uc3QgcmVtZW1iZXJNZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVtZW1iZXItbWVcIik7XHJcbiAgY29uc3QgZm9ybUxvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX19jb250YWluZXItbG9naW5cIik7XHJcblxyXG4gIC8vaW5wdXQgZm9yIGNyZWRlbnRpYWxzIHNhdmUgdG8gc2Vzc2lvbiBzdG9yYWdlXHJcbiAgY29uc3QgaW5wdXRFbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlcl9fZW1haWxcIik7XHJcbiAgY29uc3QgaW5wdXRQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlcl9fcGFzc3dvcmRcIik7XHJcbiAgbGV0IGxvZ2luU3RvcmFnZSA9IGxvY2FsU3RvcmFnZTsgLy8gU2V0IExvY2FsU3RvcmFnZSBmb3IgZW1haWwgb25seSBhbmQgbm90IGlubGN1ZGluZyBwYXNzd29yZCBTdG9yYWdlXHJcblxyXG4gIGxldCB1c2VyX2VtYWlsID0gbG9naW5TdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2VtYWlsXCIpO1xyXG4gIGlucHV0RW1haWwudmFsdWUgPSB1c2VyX2VtYWlsO1xyXG5cclxuICBsZXQgcmVtZW1iZXJNZVN0YXRlID0gbG9naW5TdG9yYWdlLmdldEl0ZW0oXCJyZW1lbWJlcl9tZV9zdGF0ZVwiKTtcclxuICBpZiAocmVtZW1iZXJNZVN0YXRlID09PSBcInRydWVcIikge1xyXG4gICAgcmVtZW1iZXJNZS5jaGVja2VkID0gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVtZW1iZXJNZS5jaGVja2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZW1lbWJlck1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChyZW1lbWJlck1lLmNoZWNrZWQpIHtcclxuICAgICAgbGV0IHNldFJlbWVtYmVyTWUgPSB0cnVlO1xyXG4gICAgICBsb2dpblN0b3JhZ2Uuc2V0SXRlbShcInJlbWVtYmVyX21lX3N0YXRlXCIsIHNldFJlbWVtYmVyTWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHNldFJlbWVtYmVyTWUgPSBmYWxzZTtcclxuICAgICAgbG9naW5TdG9yYWdlLnNldEl0ZW0oXCJyZW1lbWJlcl9tZV9zdGF0ZVwiLCBzZXRSZW1lbWJlck1lKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZm9ybUxvZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxvYWRpbmdDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICAgIGNvbnN0IHNlbmRMb2dpblJlcXVlc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL3NpZ24taW5cIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgICBjYWNoZTogXCJuby1jYWNoZVwiLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICByZW1lbWJlcl9tZTogcmVtZW1iZXJNZS5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgZW1haWw6IGlucHV0RW1haWwudmFsdWUsXHJcbiAgICAgICAgICBwYXNzd29yZDogaW5wdXRQYXNzd29yZC52YWx1ZSxcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA0MDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDw9IDQ5OSkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBzZW5kTG9naW5SZXF1ZXN0KClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLmF1dGhlbnRpY2F0ZV91cmw7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gIH0pO1xyXG5cclxuICBidG5TaWduSW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNvbnN0IGxvZ2luQ3JlZGVudGlhbHMgPSB7XHJcbiAgICAgIHVzZXJfZW1haWw6IGlucHV0RW1haWwudmFsdWUsXHJcbiAgICB9O1xyXG5cclxuICAgIGxvZ2luU3RvcmFnZS5zZXRJdGVtKFwidXNlcl9lbWFpbFwiLCBsb2dpbkNyZWRlbnRpYWxzLnVzZXJfZW1haWwpO1xyXG4gIH0pO1xyXG59KTtcclxuIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBjb25zdCBuYXZUb2dnbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXItdG9nZ2xlclwiKTtcclxuICBjb25zdCBuYXZiYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLi0tbmF2LWxpc3QtY29udGFpbmVyXCIpO1xyXG4gIGxldCBuYXZJc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgaWYgKG5hdlRvZ2dsZXIpIHtcclxuICAgIG5hdlRvZ2dsZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaWYgKCFuYXZJc09wZW4pIHtcclxuICAgICAgICBuYXZUb2dnbGVyLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib3Blbi1uYXZiYXJcIik7XHJcbiAgICAgICAgbmF2SXNPcGVuID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZUb2dnbGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1uYXZiYXJcIik7XHJcbiAgICAgICAgbmF2SXNPcGVuID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsIi8qIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgY2hlY2tOZXdQb3N0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9uZXctcG9zdFwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgY2FjaGU6IFwibm8tY2FjaGVcIixcclxuICAgICAga2VlcGFsaXZlOiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGxldCBwb3N0TGVuZ3RoQ2hlY2tlciA9IDA7IC8vZm9yIHBvc3QgbGVuZ3RoIGNoZWNrZXJcclxuICBsZXQgY3VycmVudFBvc3RMZW5ndGggPSAwOyAvL2ZldGNoIG9uZSBhbmQgZ2V0IGN1cnJlbnQgcG9zdCB2YWx1ZVxyXG5cclxuICAvL0dldCB0aGUgY3VycmVudCBwb3N0IGxlbmd0aFxyXG4gIGNoZWNrTmV3UG9zdCgpXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGN1cnJlbnRQb3N0TGVuZ3RoID0gcmVzO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmluZm8oZXJyKSk7XHJcblxyXG4gIC8vQ2hlY2sgZm9yIG5ldyBwb3N0XHJcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgY2hlY2tOZXdQb3N0KClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHBvc3RMZW5ndGhDaGVja2VyID0gcmVzO1xyXG4gICAgICAgIGlmIChwb3N0TGVuZ3RoQ2hlY2tlciA+IGN1cnJlbnRQb3N0TGVuZ3RoKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJORVcgUE9TVCFcIik7XHJcbiAgICAgICAgICBjdXJyZW50UG9zdExlbmd0aCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuaW5mbyhlcnIpKTtcclxuICB9LCAxMDAwMCk7XHJcbiAgY29uc29sZS5sb2cocG9zdExlbmd0aENoZWNrZXIpO1xyXG4gIGNvbnNvbGUubG9nKGN1cnJlbnRQb3N0TGVuZ3RoKTtcclxufSk7XHJcbiAqLyIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgdG9nZ2xlT3B0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5waW5fX3Bvc3RcIik7XHJcbiAgY29uc3Qgb3B0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vcHRpb24tY29udGFpbmVyXCIpO1xyXG5cclxuICAvL2ZvciBkZWxldGUgZGlhbG9nXHJcbiAgY29uc3QgZGVsZXRlT3B0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGVfX29wdGlvbi1idG5cIik7XHJcbiAgY29uc3QgZGVsZXRlRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jdXN0b21fX2RlbGV0ZS1kaWFsb2dcIik7XHJcbiAgY29uc3QgZGVsZXRlRGlhbG9nQ2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLmN1c3RvbV9fZGlhbG9nLWJ0bi1jYW5jZWxcIlxyXG4gICk7XHJcbiAgY29uc3QgZGVsZXRlRGlhbG9nQ29uZmlybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcIi5jdXN0b21fX2RpYWxvZy1idG4tY29uZmlybVwiXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgcGluUG9zdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGluX19vcHRpb24tYnRuXCIpO1xyXG4gIGNvbnN0IHVuUGluUG9zdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudW5waW5fX29wdGlvbi1idG5cIik7XHJcblxyXG4gIC8vIE9wdGlvbiBDYXJkIG9wZW5cclxuICBsZXQgb3B0aW9uSXNPcGVuID0gZmFsc2U7IC8vIGZvciB0b2dnbGUgb3B0aW9uc1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9nZ2xlT3B0aW9uQnRuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB0b2dnbGVPcHRpb25CdG5baV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGlmICghb3B0aW9uSXNPcGVuKSB7XHJcbiAgICAgICAgb3B0aW9uQ29udGFpbmVyW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcbiAgICAgICAgb3B0aW9uSXNPcGVuID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvcHRpb25Db250YWluZXJbaV0uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcclxuICAgICAgICBvcHRpb25Jc09wZW4gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICB0b2dnbGVPcHRpb25zKGUsIHRvZ2dsZU9wdGlvbkJ0bltpXS5kYXRhc2V0LnBvc3RJZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRvZ2dsZU9wdGlvbnMgPSAoZSkgPT4ge1xyXG4gICAgQXJyYXkuZnJvbSh0b2dnbGVPcHRpb25CdG4pLmluZGV4T2YoZS50YXJnZXQpICsgMTtcclxuICB9O1xyXG5cclxuICAvL09wZW4gREVMRVRFIGRpYWxvZyAtLSBDbG9zZSBvciBDb25maXJtIERlbGV0ZVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsZXRlT3B0aW9uQnRuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBkZWxldGVPcHRpb25CdG5baV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGRlbGV0ZURpYWxvZ1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xyXG4gICAgICBkZWxldGVQb3N0T3BlbkRpYWxvZyhlKTtcclxuICAgIH0pO1xyXG4gICAgZGVsZXRlRGlhbG9nQ2FuY2VsW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBkZWxldGVEaWFsb2dbaV0uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcclxuICAgICAgY2xvc2VEaWFsb2coZSk7XHJcbiAgICB9KTtcclxuICAgIGRlbGV0ZURpYWxvZ0NvbmZpcm1baV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGNvbmZpcm1EZWxldGVQb3N0KGUsIGRlbGV0ZURpYWxvZ0NvbmZpcm1baV0uZGF0YXNldC5wb3N0SWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBPcGVuIGRpYWxvZyBmb3IgZGVsZXRlIGNvbmZpcm1hdGlvblxyXG4gIGNvbnN0IGRlbGV0ZVBvc3RPcGVuRGlhbG9nID0gKGUpID0+IHtcclxuICAgIEFycmF5LmZyb20oZGVsZXRlT3B0aW9uQnRuKS5pbmRleE9mKGUudGFyZ2V0KSArIDE7XHJcbiAgfTtcclxuXHJcbiAgLy9DYW5jZWwvQ2xvc2UgZGlhbG9nIGRlbGV0ZVxyXG4gIGNvbnN0IGNsb3NlRGlhbG9nID0gKGUpID0+IHtcclxuICAgIEFycmF5LmZyb20oZGVsZXRlRGlhbG9nQ2FuY2VsKS5pbmRleE9mKGUudGFyZ2V0KSArIDE7XHJcbiAgfTtcclxuXHJcbiAgLy9EZWxldGUgcG9zdC9hbnN3ZXJcclxuICBjb25zdCBjb25maXJtRGVsZXRlUG9zdCA9IChlLCBkYXRhUG9zdElkKSA9PiB7XHJcbiAgICBBcnJheS5mcm9tKGRlbGV0ZURpYWxvZ0NvbmZpcm0pLmluZGV4T2YoZS50YXJnZXQpICsgMTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVPbmVQb3N0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IFVSTF9ERUxFVEVfUE9TVCA9IGAvcG9zdC1vcHRpb25zP3Bvc3RfaWQ9JHtkYXRhUG9zdElkfWA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkxfREVMRVRFX1BPU1QsIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICAgIGNhY2hlOiBcIm5vLWNhY2hlXCIsXHJcbiAgICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgIGVycm9yOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nIG9uIGRlbGV0aW5nIHRoZSBjb250ZW50LlwiLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vREVMRVRFIFJFUVVFU1QgUFJPTUlTRVxyXG4gICAgZGVsZXRlT25lUG9zdCgpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlcy51cmw7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gIH07XHJcblxyXG4gIC8vcGluIG9wdGlvbnMgcG9zdCBwdXNoXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwaW5Qb3N0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBwaW5Qb3N0W2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGluaXRpYWxpemVQaW5Qb3N0KGUsIHBpblBvc3RbaV0uZGF0YXNldC5wb3N0SWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHVuUGluUG9zdC5sZW5ndGg7IGkrKykge1xyXG4gICAgdW5QaW5Qb3N0W2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGluaXRpYWxpemVVblBpblBvc3QoZSwgdW5QaW5Qb3N0W2ldLmRhdGFzZXQucG9zdElkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy9QaW4gUG9zdFxyXG4gIGNvbnN0IGluaXRpYWxpemVQaW5Qb3N0ID0gKGUsIGRhdGFQb3N0SWQpID0+IHtcclxuICAgIEFycmF5LmZyb20ocGluUG9zdCkuaW5kZXhPZihlLnRhcmdldCkgKyAxO1xyXG5cclxuICAgIGNvbnN0IHNldElzUGluUG9zdCA9IHRydWU7XHJcbiAgICBwaW5PcHRpb25Db25maWcoZSwgZGF0YVBvc3RJZCwgc2V0SXNQaW5Qb3N0KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMudXJsO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy9VbnBpbiBwb3N0XHJcbiAgY29uc3QgaW5pdGlhbGl6ZVVuUGluUG9zdCA9IChlLCBkYXRhUG9zdElkKSA9PiB7XHJcbiAgICBBcnJheS5mcm9tKHVuUGluUG9zdCkuaW5kZXhPZihlLnRhcmdldCk7XHJcblxyXG4gICAgY29uc3Qgc2V0SXNQaW5Qb3N0ID0gZmFsc2U7XHJcbiAgICBwaW5PcHRpb25Db25maWcoZSwgZGF0YVBvc3RJZCwgc2V0SXNQaW5Qb3N0KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMudXJsO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGluT3B0aW9uQ29uZmlnID0gYXN5bmMgKGUsIGRhdGFQb3N0SWQsIHNldFBpblBvc3QpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IFVSTF9QSU5fUE9TVCA9IGAvcG9zdC1vcHRpb25zL3VwZGF0ZT9wb3N0X2lkPSR7ZGF0YVBvc3RJZH1gO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTF9QSU5fUE9TVCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhY2hlOiBcIm5vLWNhY2hlXCIsXHJcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwaW5fcG9zdDogc2V0UGluUG9zdCB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHtcclxuICAgICAgICAgIG1lc3NhZ2U6IFwiU29tZXRoaW5nIHdlbnQgd3Jvbmcgb24gcGlubmluZyB0aGUgcG9zdFwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxufSk7XHJcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5fX2RlbGV0ZS1hbnN3ZXJcIik7XHJcbiAgY29uc3QgZGF0YVBvc3RJZF9kZWxldGUgPSBkZWxldGVCdXR0b24uZGF0YXNldC5wb3N0SWQ7XHJcbiAgY29uc3QgbG9hZGluZ1NwaW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxvYWRpbmctc3Bpbm5lclwiKTtcclxuXHJcbiAgLy8gVXBkYXRlIGZvcm1cclxuICBjb25zdCB1cGRhdGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGRhdGVfX2Zvcm1cIik7XHJcbiAgY29uc3QgdXBkYXRlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwZGF0ZV9fdGl0bGVcIik7XHJcbiAgY29uc3QgdXBkYXRlVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGRhdGVfX3RhZ1wiKTtcclxuICBjb25zdCB1cGRhdGVCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGRhdGVfX2JvZHlcIik7XHJcbiAgY29uc3QgdXBkYXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5fX3VwZGF0ZS1hbnN3ZXJcIik7XHJcbiAgY29uc3QgZGF0YVBvc3RJZF91cGRhdGUgPSB1cGRhdGVCdG4uZGF0YXNldC5wb3N0SWQ7XHJcblxyXG4gIC8vY2xpY2sgZXZlbnQgdG8gdHJpZ2dlciBkZWxldGUgcmVxdWVzdFxyXG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgLy9zZW5kIERlbGV0ZSBIdHRwIFJlcXVlc3RcclxuICAgIGxvYWRpbmdTcGlubmVyLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKSk7XHJcbiAgICBjb25zdCBkZWxldGVPbmVQb3N0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICBgL3Bvc3Qtb3B0aW9ucz9wb3N0X2lkPSR7ZGF0YVBvc3RJZF9kZWxldGV9YCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICBjYWNoZTogXCJuby1jYWNoZVwiLFxyXG4gICAgICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgZXJyb3I6IFwiU29tZXRoaW5nIHdlbnQgd3Jvbmcgb24gZGVsZXRpbmcgdGhlIGNvbnRlbnQuXCIsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy9ERUxFVEUgUkVRVUVTVCBQUk9NSVNFXHJcbiAgICBkZWxldGVPbmVQb3N0KClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLnVybDtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vY2xpY2sgZXZlbnQgdG8gdHJpZ2dlciBwdXQgcmVxdWVzdFxyXG4gIHVwZGF0ZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbG9hZGluZ1NwaW5uZXIuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpKTtcclxuXHJcbiAgICBjb25zdCBwb3N0VXBkYXRlZENvbnRlbnQgPSB7XHJcbiAgICAgIHBvc3RfdGl0bGU6IHVwZGF0ZVRpdGxlLnZhbHVlLFxyXG4gICAgICBwb3N0X3RhZzogdXBkYXRlVGFnLnZhbHVlLFxyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcclxuICAgICAgcG9zdF9ib2R5OiB0aW55bWNlLmdldChcInNoYXJlQW5zd2VyRm9ybVwiKS5nZXRDb250ZW50KCksXHJcbiAgICB9O1xyXG4gICAgY29uc3QgdXBkYXRlT25lUG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgYC9wb3N0LW9wdGlvbnM/cG9zdF9pZD0ke2RhdGFQb3N0SWRfdXBkYXRlfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYWNoZTogXCJuby1jYWNoZVwiLFxyXG4gICAgICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdFVwZGF0ZWRDb250ZW50KSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6XHJcbiAgICAgICAgICAgICAgXCJTb21ldGhpbmcgd2VudCB3cm9uZyB3aGVuIGF0dGVtcHRlZCB0byB1cGRhdGUgdGhlIGFuc3dlci5cIixcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvL1VQREFURSBSRVFVRVNUIFBST01JU0VcclxuICAgIHVwZGF0ZU9uZVBvc3QoKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMudXJsO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICB9KTtcclxufSk7XHJcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgcmVnVXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlZ191c2VyX25hbWVcIik7XHJcbiAgY29uc3QgcmVnVXNlckVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWdfdXNlcl9lbWFpbFwiKTtcclxuICBjb25zdCByZWdVc2VyUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlZ191c2VyX3Bhc3N3b3JkXCIpO1xyXG4gIGNvbnN0IHJlZ1VzZXJDb25maXJtUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIucmVnX3VzZXJfY29uZmlybV9wYXNzd29yZFwiXHJcbiAgKTtcclxuICBjb25zdCBmb3JtUmVnaXN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX2NvbnRhaW5lci1yZWdpc3RlclwiKTtcclxuXHJcbiAgLy9wYXNzd29yZCBhbmQgY29uZmlybSBwYXNzd29yZCBjaGVja2VyXHJcbiAgY29uc3QgcGFzc3dvcmRDaGVja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXNzd29yZF9fY2hlY2tlclwiKTtcclxuICBjb25zdCBjb25maXJtUGFzc3dvcmRDaGVja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmNvbmZpcm1fX3Bhc3N3b3JkLWNoZWNrZXJcIlxyXG4gICk7XHJcbiAgY29uc3QgY2hlY2tJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5iaS1jaGVjay1jaXJjbGUtZmlsbFwiKTtcclxuICBjb25zdCBzaG93UGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3dfX3Bhc3N3b3JkXCIpO1xyXG5cclxuICBjb25zdCBTRVNTSU9OX1NUT1JBR0VfTkFNRSA9IFwicmVnaXN0ZXJfdXNlcl9uYW1lXCIsXHJcbiAgICBTRVNTSU9OX1NUT1JBR0VfRU1BSUwgPSBcInJlZ2lzdGVyX3VzZXJfZW1haWxcIjtcclxuXHJcbiAgbGV0IHJlZ2lzdGVyU2Vzc2lvblN0b3JhZ2UgPSBzZXNzaW9uU3RvcmFnZTtcclxuICBsZXQgcmVjb3ZlckNyZWRlbnRpYWxzID0ge1xyXG4gICAgdXNlcl9uYW1lOiByZWdpc3RlclNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU0VTU0lPTl9TVE9SQUdFX05BTUUpLFxyXG4gICAgdXNlcl9lbWFpbDogcmVnaXN0ZXJTZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFNFU1NJT05fU1RPUkFHRV9FTUFJTCksXHJcbiAgfTtcclxuICByZWdVc2VyTmFtZS52YWx1ZSA9IHJlY292ZXJDcmVkZW50aWFscy51c2VyX25hbWU7XHJcbiAgcmVnVXNlckVtYWlsLnZhbHVlID0gcmVjb3ZlckNyZWRlbnRpYWxzLnVzZXJfZW1haWw7XHJcbiAgcmVnaXN0ZXJTZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xyXG5cclxuICAvL1N0b3JlIHNlc3Npb24gZW1haWwgYW5kIG5hbWUgb24gc2Vzc2lvbiBzdG9yYWdlXHJcbiAgbGV0IGZvckVtYWlsTG9jYWxTdG9yYWdlID0gbG9jYWxTdG9yYWdlO1xyXG4gIGZvcm1SZWdpc3Rlci5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsICgpID0+IHtcclxuICAgIHJlZ2lzdGVyU2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTRVNTSU9OX1NUT1JBR0VfTkFNRSwgcmVnVXNlck5hbWUudmFsdWUpO1xyXG4gICAgcmVnaXN0ZXJTZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFNFU1NJT05fU1RPUkFHRV9FTUFJTCwgcmVnVXNlckVtYWlsLnZhbHVlKTtcclxuICAgIGZvckVtYWlsTG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyX2VtYWlsXCIsIHJlZ1VzZXJFbWFpbC52YWx1ZSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vcGFzc3dvcmQgbGlzdGVuZXJcclxuICByZWdVc2VyUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBwYXNzd29yZENoZWNrZXIuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuXHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoID4gOCkge1xyXG4gICAgICBwYXNzd29yZENoZWNrZXIuY2xhc3NMaXN0LnJlbW92ZShcInRleHQtZGFuZ2VyXCIpO1xyXG4gICAgICBwYXNzd29yZENoZWNrZXIuY2xhc3NMaXN0LmFkZChcInRleHQtc3VjY2Vzc1wiKTtcclxuICAgICAgY2hlY2tJY29uWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwYXNzd29yZENoZWNrZXIuY2xhc3NMaXN0LmFkZChcInRleHQtZGFuZ2VyXCIpO1xyXG4gICAgICBwYXNzd29yZENoZWNrZXIuY2xhc3NMaXN0LnJlbW92ZShcInRleHQtc3VjY2Vzc1wiKTtcclxuICAgICAgY2hlY2tJY29uWzBdLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vcGFzc3dvcmQgY29uZmlybSBjaGVja2VyXHJcbiAgcmVnVXNlckNvbmZpcm1QYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbmZpcm1QYXNzd29yZENoZWNrZXIuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuXHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IHJlZ1VzZXJQYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICBjb25maXJtUGFzc3dvcmRDaGVja2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LWRhbmdlclwiKTtcclxuICAgICAgY29uZmlybVBhc3N3b3JkQ2hlY2tlci5jbGFzc0xpc3QuYWRkKFwidGV4dC1zdWNjZXNzXCIpO1xyXG4gICAgICBjb25maXJtUGFzc3dvcmRDaGVja2VyLmlubmVySFRNTCA9IGBQYXNzd29yZCBtYXRjaGVkLiA8aSBjbGFzcz1cImJpIGJpLWNoZWNrLWNpcmNsZS1maWxsIGZfc2l6ZS0xXCI+PC9pPmA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25maXJtUGFzc3dvcmRDaGVja2VyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWRhbmdlclwiKTtcclxuICAgICAgY29uZmlybVBhc3N3b3JkQ2hlY2tlci5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1zdWNjZXNzXCIpO1xyXG4gICAgICBjb25maXJtUGFzc3dvcmRDaGVja2VyLmlubmVySFRNTCA9IGBQYXNzd29yZCBkbyBub3QgbWF0Y2hlZC5gO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvL3Nob3cgcGFzc3dvcmQgY2hlY2tlclxyXG4gIGNvbnN0IHBhc3N3b3JkRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbdHlwZT1wYXNzd29yZF1cIik7XHJcbiAgc2hvd1Bhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHBhc3N3b3JkRmllbGQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBjb25zdCB0eXBlID1cclxuICAgICAgICBpdGVtLmdldEF0dHJpYnV0ZShcInR5cGVcIikgPT09IFwicGFzc3dvcmRcIiA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwiO1xyXG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdHlwZSk7XHJcbiAgICAgIGlmIChzaG93UGFzc3dvcmQuY2hlY2tlZCkge1xyXG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwidHlwZVwiLCB0eXBlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdHlwZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KTtcclxuIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBjb25zdCBzdWJqZWN0RHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN1YmplY3RfX2Ryb3Bkb3duXCIpO1xyXG4gIGNvbnN0IHN1YmplY3REcm9wZG93bkdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLnN1YmplY3RfX2Ryb3Bkb3duLWdyb3VwXCJcclxuICApO1xyXG4gIGNvbnN0IHN1YmplY3REcm9wZG93bkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcIi5zdWJqZWN0X19kcm9wZG93bi1idG5cIlxyXG4gICk7XHJcbiAgY29uc3Qgc3ViamVjdERyb3Bkb3duSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmEtY2hldnJvbi1yaWdodFwiKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJqZWN0RHJvcGRvd25Hcm91cC5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IHN1YmplY3REcm9wZG93bk9wZW4gPSBmYWxzZTtcclxuICAgIHN1YmplY3REcm9wZG93bkJ0bltpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKCFzdWJqZWN0RHJvcGRvd25PcGVuKSB7XHJcbiAgICAgICAgc3ViamVjdERyb3Bkb3duR3JvdXBbaV0uY2xhc3NMaXN0LmFkZChcInN1YmplY3RfX2Ryb3Bkb3duLW9wZW5cIik7XHJcbiAgICAgICAgc3ViamVjdERyb3Bkb3duW2ldLmNsYXNzTGlzdC5hZGQoXCJzdWJqZWN0X19kcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgIHN1YmplY3REcm9wZG93bkljb25baV0uY2xhc3NMaXN0LmFkZChcImljb24tcm90YXRlXCIpO1xyXG4gICAgICAgIHN1YmplY3REcm9wZG93bk9wZW4gPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN1YmplY3REcm9wZG93bkdyb3VwW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJzdWJqZWN0X19kcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgIHN1YmplY3REcm9wZG93bltpXS5jbGFzc0xpc3QucmVtb3ZlKFwic3ViamVjdF9fZHJvcGRvd24tb3BlblwiKTtcclxuICAgICAgICBzdWJqZWN0RHJvcGRvd25JY29uW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJpY29uLXJvdGF0ZVwiKTtcclxuICAgICAgICBzdWJqZWN0RHJvcGRvd25PcGVuID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgYXJyYXlJbmRleEZpbmRlcihlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYXJyYXlJbmRleEZpbmRlciA9IChlKSA9PiB7XHJcbiAgICBBcnJheS5mcm9tKHN1YmplY3REcm9wZG93bikuaW5kZXhPZihlLnRhcmdldCk7XHJcbiAgfTtcclxufSk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxMWQzZjNiMjBkMTIzOWQxNGViMGU3MzhiOTYzOTJmNy5wbmdcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLyogSkFWQVNDUklQVCAqL1xyXG5yZXF1aXJlKFwiLi9qcy9pbWFnZS1sb2FkXCIpO1xyXG5yZXF1aXJlKFwiLi9qcy9sb2dpblwiKTtcclxucmVxdWlyZShcIi4vanMvcmVnaXN0ZXJcIik7XHJcbnJlcXVpcmUoXCIuL2pzL29wdGlvbl9wb3N0X3RvZ2dsZVwiKTtcclxucmVxdWlyZShcIi4vYm9vdHN0cmFwL2pzL2Jvb3RzdHJhcC5taW5cIik7XHJcbnJlcXVpcmUoXCIuL2pzL25hdmJ1cmdlci5hbmltXCIpO1xyXG5yZXF1aXJlKFwiLi9qcy9zdWJqZWN0X2Ryb3Bkb3duXCIpO1xyXG5yZXF1aXJlKFwiLi9qcy9vcHRpb25zX3Bvc3RcIik7XHJcbnJlcXVpcmUoXCIuL2pzL2NvcHktY29kZVwiKTtcclxucmVxdWlyZShcIi4vanMvY29tbWVudFwiKTtcclxucmVxdWlyZShcIi4vanMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbl9hcGlcIik7XHJcbi8vIHJlcXVpcmUoXCIuL2pzL3RpbnltY2UuZm9ybVwiKTtcclxuXHJcbi8qIFNUWUxFICovXHJcbnJlcXVpcmUoXCIuL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIik7XHJcbnJlcXVpcmUoXCIuL21haW4uc2Nzc1wiKTtcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9