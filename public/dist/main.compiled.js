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

/***/ "./public/js/change-email.js":
/*!***********************************!*\
  !*** ./public/js/change-email.js ***!
  \***********************************/
/***/ (function() {

//send email change request
const profileSettingsEmail = document.querySelector(".profile__settings-email");
const loadingEmailSpinner = document.querySelector(".change__email-loading-spinner");
const formChangeEmail = document.querySelector(".form__update-email");
const alertChangeEmail = document.querySelectorAll(".alert__change-email");
const alertChangeEmailMessage = document.querySelectorAll(".change__email-alert-message");
formChangeEmail.addEventListener("submit", e => {
  e.preventDefault();
  loadingEmailSpinner.classList.remove("d-none");

  const sendChangeEmailRequest = async () => {
    const response = await fetch("/change-email", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors",
      cache: "no-cache",
      body: JSON.stringify({
        email: profileSettingsEmail.value
      })
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else if (response.status === 409) {
      const data = response.json();
      return data;
    } else {
      return;
    }
  };

  sendChangeEmailRequest().then(res => {
    if (res.success === 1) {
      alertChangeEmail[0].classList.remove("d-none");
      alertChangeEmailMessage[0].innerHTML = res.success_message;
      loadingEmailSpinner.classList.add("d-none");
      setTimeout(() => {
        alertChangeEmail[0].classList.add("d-none");
      }, 5000);
    }

    if (res.error === 1) {
      alertChangeEmail[1].classList.remove("d-none");
      alertChangeEmailMessage[1].innerHTML = res.error_message;
      loadingEmailSpinner.classList.add("d-none");
      setTimeout(() => {
        alertChangeEmail[1].classList.add("d-none");
      }, 5000);
    }
  }).catch(err => console.error(err));
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

  if (e.target.value === passwordInputField[1].value && e.target.value.length >= 8) {
    passwordCheckerInfo[1].classList.remove("text-danger");
    passwordCheckerInfo[1].classList.add("text-success");
    passwordCheckerInfo[1].innerHTML = `Password matched. <i class="bi bi-check-circle-fill f_size-1"></i>`;
    changePasswordBtn.removeAttribute("disabled");
  } else {
    passwordCheckerInfo[1].classList.remove("text-success");
    passwordCheckerInfo[1].classList.add("text-danger");
    passwordCheckerInfo[1].innerHTML = e.target.value >= 8 ? `Password matched` : `Password should be at least 8 characters long.`;
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

/***/ "./public/js/forgot-password.js":
/*!**************************************!*\
  !*** ./public/js/forgot-password.js ***!
  \**************************************/
/***/ (function() {

window.addEventListener("DOMContentLoaded", () => {
  const formForgotPassword = document.querySelector(".form__forgot-password"),
        recoverEmail = document.querySelector(".recover__email"),
        loadingSpinner = document.querySelector(".loading__spinner-forgot-password"),
        btnSubmitPasswordReset = document.querySelector(".btn__password-reset"),
        passwordResetMessage = document.querySelector(".password__reset-message"),
        passwordResetLoading = document.querySelector(".loading-circle-other"),
        passwordResetSuccess = document.querySelector(".email__success-icon"),
        passwordResetError = document.querySelector(".email__error-icon"),
        passwordResetDialogBtnClose = document.querySelector(".btn-close");
  formForgotPassword.addEventListener("submit", e => {
    e.preventDefault();
    loadingSpinner.classList.remove("d-none");
    let btnConfig = [["type", "button"], ["data-bs-toggle", "modal"], ["data-bs-target", "dialogForgotPasswordAlert"]];
    btnSubmitPasswordReset.setAttribute(btnConfig[0][0], "button");
    btnSubmitPasswordReset.setAttribute(btnConfig[1][0], "modal");
    btnSubmitPasswordReset.setAttribute(btnConfig[2][0], "#dialogForgotPasswordAlert");
    btnSubmitPasswordReset.click();

    const sendRecoverAccountRequest = async () => {
      try {
        const response = await fetch("/forgot-password", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          mode: "cors",
          cache: "no-cache",
          body: JSON.stringify({
            recovery_email: recoverEmail.value
          })
        }); // const total = response.headers.get("")

        if (response.ok) {
          const data = await response.json();
          return data;
        } else if (response.status === 401) {
          const data = await response.json();
          return data;
        }
      } catch (err) {
        console.error(err);
      }
    };

    sendRecoverAccountRequest().then(res => {
      loadingSpinner.classList.add("d-none");

      for (let i in btnConfig) {
        btnSubmitPasswordReset.removeAttribute(btnConfig[i][0]);
      }

      if (res.error === 1) {
        passwordResetLoading.classList.add("d-none");
        passwordResetError.classList.remove("d-none");
        passwordResetMessage.classList.replace("text-black-50", "text-danger");
        passwordResetMessage.textContent = res.error_message;
      }

      if (res.success === 1) {
        passwordResetLoading.classList.add("d-none");
        passwordResetSuccess.classList.remove("d-none");
        passwordResetMessage.classList.replace("text-black-50", "text-success");
        passwordResetMessage.textContent = res.success_message;
      }

      passwordResetDialogBtnClose.addEventListener("click", () => {
        passwordResetLoading.classList.remove("d-none");
        passwordResetSuccess.classList.add("d-none");
        passwordResetError.classList.add("d-none");
        passwordResetMessage.classList.remove("text-danger");
        passwordResetMessage.classList.remove("text-success");
        passwordResetMessage.classList.add("text-black-50");
        passwordResetMessage.textContent = "Sending password reset request, Please Wait";
      });
    }).catch(err => console.error(err));
  });
});

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
  if (document.querySelector(".show__password")) {
    __webpack_require__(/*! ./change-password */ "./public/js/change-password.js");
  }

  __webpack_require__(/*! ./change-email */ "./public/js/change-email.js");

  const profileInformationBtnDropDown = document.querySelectorAll(".dropdown__profile-info-option-toggler");
  const changePasswordContainer = document.querySelector(".change__password-option");
  const changeEmailContainer = document.querySelector(".change__email-option");
  const btnUpdateProfileSettings = document.querySelector(".btn__update-profile-info"); //btn to update information not password

  let imageFile;
  let isOpen = false; //for Email option dropdown

  profileInformationBtnDropDown[0].addEventListener("click", () => {
    if (!isOpen) {
      changeEmailContainer.classList.add("open");
      btnUpdateProfileSettings ? btnUpdateProfileSettings.classList.add("d-none") : "";
      isOpen = true;
    } else {
      changeEmailContainer.classList.remove("open");
      btnUpdateProfileSettings ? btnUpdateProfileSettings.classList.remove("d-none") : "";
      isOpen = false;
    }
  }); //for Password Options Dropdown

  profileInformationBtnDropDown[1].addEventListener("click", () => {
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

/***/ "./public/js/reset-password.js":
/*!*************************************!*\
  !*** ./public/js/reset-password.js ***!
  \*************************************/
/***/ (function() {

const loadingSpinner = document.querySelector(".password_reset__loading"),
      formResetPassword = document.querySelector(".form__reset-password"),
      passwordResetInputField = document.querySelectorAll(`input[type="password"]`),
      passwordToggleView = document.querySelector(`input[type="checkbox"]`),
      passwordResetBtn = document.querySelector(".btn__password-reset");
fetch("/q", {
  method: "GET"
}).then(res => res.json()).then(data => {
  if (data) {
    loadingSpinner.classList.add("d-none");
  }
}).catch(err => console.error(err));
passwordToggleView.addEventListener("change", e => {
  e.preventDefault();

  if (passwordToggleView.checked) {
    passwordResetInputField.forEach(item => {
      item.setAttribute("type", "text");
    });
  } else {
    passwordResetInputField.forEach(item => {
      item.setAttribute("type", "password");
    });
  }
});

const el_password_checker = () => {
  const text_checker = document.createElement("p");
  text_checker.innerHTML = `Password should be at least 8 characters long.`;
  text_checker.classList.add("reset__password-checker");
  text_checker.classList.add("d-none");
  text_checker.classList.add("text-danger");
  text_checker.classList.add("fw_600");
  text_checker.classList.add("f_size-3");
  return text_checker;
}; //Append Password Checker


passwordResetInputField[0].parentNode.insertBefore(el_password_checker(), passwordResetInputField[0].nextSibling);
passwordResetInputField[1].parentNode.insertBefore(el_password_checker(), passwordResetInputField[1].nextSibling);
const passwordChecker = document.querySelectorAll(".reset__password-checker");
passwordResetInputField[0].addEventListener("input", e => {
  e.preventDefault();
  passwordChecker[0].classList.remove("d-none");

  if (e.target.value.length >= 8) {
    passwordChecker[0].classList.remove("text-danger");
    passwordChecker[0].classList.add("text-success");
    passwordChecker[0].innerHTML = `Password should be at least 8 characters long. <i class="bi bi-check-circle-fill f_size-1"></i>`;
  } else {
    passwordChecker[0].classList.remove("text-success");
    passwordChecker[0].classList.add("text-danger");
    passwordChecker[0].innerHTML = `Password should be at least 8 characters long.`;
  }
});
passwordResetInputField[1].addEventListener("input", e => {
  e.preventDefault();
  passwordChecker[1].classList.remove("d-none");

  if (e.target.value === passwordResetInputField[0].value && e.target.value.length >= 8) {
    passwordChecker[1].classList.remove("text-danger");
    passwordChecker[1].classList.add("text-success");
    passwordChecker[1].innerHTML = `Password matched. <i class="bi bi-check-circle-fill f_size-1"></i>`;
    passwordResetBtn.removeAttribute("disabled");
  } else {
    passwordChecker[1].classList.remove("text-success");
    passwordChecker[1].classList.add("text-danger");
    passwordChecker[1].innerHTML = e.target.value === passwordResetInputField[0].value ? `Password should be at least 8 characters long.` : `Password do not matched.`;
    passwordResetBtn.setAttribute("disabled", "true");
  }
}); //toggle alert box

let passwordResetBtnConfig = [["type", "button"], ["data-bs-toggle", "modal"], ["data-bs-target", "dialogPasswordReset"]];
const passwordResetStatusIcon = document.querySelectorAll(".password__reset-status-icon"),
      passwordResetStatusMessage = document.querySelector(".password__reset-message"),
      passwordResetLoading = document.querySelector(".password__reset-loading");
formResetPassword.addEventListener("submit", e => {
  e.preventDefault();
  passwordResetBtn.setAttribute(passwordResetBtnConfig[0][0], "button");
  passwordResetBtn.setAttribute(passwordResetBtnConfig[1][0], "modal");
  passwordResetBtn.setAttribute(passwordResetBtnConfig[2][0], "#dialogResetPasswordAlert");
  passwordResetBtn.click();

  if (passwordResetInputField[0].value === passwordResetInputField[1].value) {
    const sendResetPasswordRequest = async () => {
      try {
        var urlParams = window.location.search;
        var getQuery = urlParams.split("?")[1];
        var params = getQuery.split("&");
        const url = "/reset-password";
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          mode: "cors",
          cache: "no-cache",
          body: JSON.stringify({
            new_password: passwordResetInputField[0].value,
            confirm_new_password: passwordResetInputField[1].value,
            prt: params[0].replace("prt=", ""),
            prs: params[1].replace("prs=", "")
          })
        });

        if (response.ok) {
          const data = response.json();
          return data;
        } else if (response.status === 226) {
          const data = response.json();
          return data;
        } else if (response.status === 409) {
          const data = response.json();
          return data;
        } else {
          return;
        }
      } catch (err) {
        console.error(err);
      }
    };

    sendResetPasswordRequest().then(res => {
      if (res.success === 1) {
        passwordResetLoading.classList.add("d-none");
        passwordResetStatusIcon[0].classList.remove("d-none");
        passwordResetStatusMessage.innerHTML = res.success_message;
      }

      if (res.error === 1) {
        passwordResetLoading.classList.add("d-none");
        passwordResetStatusIcon[1].classList.remove("d-none");
        passwordResetStatusMessage.innerHTML = res.error_message;
      }
    }).catch(err => console.error(err));
  } else {
    passwordChecker[1].classList.remove("text-success");
    passwordChecker[1].classList.add("text-danger");
    passwordChecker[1].innerHTML = e.target.value === passwordResetInputField[0].value ? `Password should be at least 8 characters long.` : `Password do not matched.`;
    passwordResetBtn.setAttribute("disabled", "true");
  }
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

if (document.querySelector(".password_reset__loading")) {
  __webpack_require__(/*! ./js/reset-password */ "./public/js/reset-password.js");
}

__webpack_require__(/*! ./js/forgot-password */ "./public/js/forgot-password.js");

__webpack_require__(/*! ./js/image-load */ "./public/js/image-load.js");

__webpack_require__(/*! ./js/option_post_toggle */ "./public/js/option_post_toggle.js");

__webpack_require__(/*! ./bootstrap/js/bootstrap.min */ "./public/bootstrap/js/bootstrap.min.js");

__webpack_require__(/*! ./js/navburger.anim */ "./public/js/navburger.anim.js");

__webpack_require__(/*! ./js/subject_dropdown */ "./public/js/subject_dropdown.js");

__webpack_require__(/*! ./js/copy-code */ "./public/js/copy-code.js");

__webpack_require__(/*! ./js/notification/notification_api */ "./public/js/notification/notification_api.js");

__webpack_require__(/*! ./js/profile_settings */ "./public/js/profile_settings.js");

__webpack_require__(/*! ./js/create-post */ "./public/js/create-post.js");
/* STYLE */


__webpack_require__(/*! ./bootstrap/css/bootstrap.min.css */ "./public/bootstrap/css/bootstrap.min.css");

__webpack_require__(/*! ./main.scss */ "./public/main.scss");
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvY3JlYXRlUG9wcGVyLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDbGlwcGluZ1JlY3QuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZS5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50UmVjdC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldEhUTUxFbGVtZW50U2Nyb2xsLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0Tm9kZVNjcm9sbC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFBhcmVudE5vZGUuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRTY3JvbGxQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRWaWV3cG9ydFJlY3QuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3dTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzU2Nyb2xsUGFyZW50LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaXNUYWJsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9saXN0U2Nyb2xsUGFyZW50cy5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZW51bXMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2luZGV4LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9hcnJvdy5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2ZsaXAuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9oaWRlLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9vZmZzZXQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9wb3BwZXJPZmZzZXRzLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9wb3BwZXItbGl0ZS5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvcG9wcGVyLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvY29tcHV0ZU9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2RlYm91bmNlLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9kZXRlY3RPdmVyZmxvdy5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZXhwYW5kVG9IYXNoTWFwLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEFsdEF4aXMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldFZhcmlhdGlvbi5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvbWF0aC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvbWVyZ2VCeU5hbWUuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvb3JkZXJNb2RpZmllcnMuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3VuaXF1ZUJ5LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy92YWxpZGF0ZU1vZGlmaWVycy5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvd2l0aGluLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy9kb20vc2VsZWN0b3ItZW5naW5lLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy91dGlsL2luZGV4LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy9kb20vZGF0YS5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvZG9tL2V2ZW50LWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi4vanMvc3JjL2Jhc2UtY29tcG9uZW50LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy9hbGVydC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvYnV0dG9uLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy9kb20vbWFuaXB1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi4vanMvc3JjL2Nhcm91c2VsLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy9jb2xsYXBzZS5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi4vanMvc3JjL3V0aWwvc2Nyb2xsYmFyLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy91dGlsL2JhY2tkcm9wLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvb2ZmY2FudmFzLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy91dGlsL3Nhbml0aXplci5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvcG9wb3Zlci5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uLi9qcy9zcmMvc2Nyb2xsc3B5LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL3NyYy90YWIuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi4vanMvc3JjL3RvYXN0LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4uL2pzL2luZGV4LnVtZC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL3B1YmxpYy9qcy9jaGFuZ2UtZW1haWwuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9wdWJsaWMvanMvY2hhbmdlLXBhc3N3b3JkLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vcHVibGljL2pzL2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9wdWJsaWMvanMvY29weS1jb2RlLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vcHVibGljL2pzL2NyZWF0ZS1wb3N0LmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vcHVibGljL2pzL2ZldGNoLWNvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9wdWJsaWMvanMvZm9yZ290LXBhc3N3b3JkLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vcHVibGljL2pzL2ltYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9wdWJsaWMvanMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9wdWJsaWMvanMvbmF2YnVyZ2VyLmFuaW0uanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9wdWJsaWMvanMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbl9hcGkuanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9wdWJsaWMvanMvb3B0aW9uX3Bvc3RfdG9nZ2xlLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vcHVibGljL2pzL29wdGlvbnNfcG9zdC5qcyIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL3B1YmxpYy9qcy9wcm9maWxlX3NldHRpbmdzLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vcHVibGljL2pzL3JlZ2lzdGVyLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vcHVibGljL2pzL3Jlc2V0LXBhc3N3b3JkLmpzIiwid2VicGFjazovL2luc2lkZXItaHViLy4vcHVibGljL2pzL3N1YmplY3RfZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9wdWJsaWMvYXNzZXRzL2xvZ28vaW5zaWRlci1odWIucG5nIiwid2VicGFjazovL2luc2lkZXItaHViLy4vcHVibGljL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLm1pbi5jc3M/OWI2MSIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi8uL3B1YmxpYy9tYWluLnNjc3M/OWE4OCIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9pbnNpZGVyLWh1Yi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2luc2lkZXItaHViL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vaW5zaWRlci1odWIvLi9wdWJsaWMvaW5kZXguanMiXSwibmFtZXMiOlsiU2VsZWN0b3JFbmdpbmUiLCJmaW5kIiwic2VsZWN0b3IiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjb25jYXQiLCJFbGVtZW50IiwicHJvdG90eXBlIiwicXVlcnlTZWxlY3RvckFsbCIsImNhbGwiLCJmaW5kT25lIiwicXVlcnlTZWxlY3RvciIsImNoaWxkcmVuIiwiZmlsdGVyIiwiY2hpbGQiLCJtYXRjaGVzIiwicGFyZW50cyIsImFuY2VzdG9yIiwicGFyZW50Tm9kZSIsIm5vZGVUeXBlIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsInB1c2giLCJwcmV2IiwicHJldmlvdXMiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibmV4dCIsIm5leHRFbGVtZW50U2libGluZyIsImdldFVJRCIsInByZWZpeCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdldEVsZW1lbnRCeUlkIiwiZ2V0U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJocmVmQXR0ciIsImluY2x1ZGVzIiwic3RhcnRzV2l0aCIsInNwbGl0IiwidHJpbSIsImdldFNlbGVjdG9yRnJvbUVsZW1lbnQiLCJnZXRFbGVtZW50RnJvbVNlbGVjdG9yIiwiZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uRGVsYXkiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24iLCJOdW1iZXIiLCJwYXJzZUZsb2F0IiwiZmxvYXRUcmFuc2l0aW9uRGVsYXkiLCJ0cmlnZ2VyVHJhbnNpdGlvbkVuZCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsImlzRWxlbWVudCIsIm9iaiIsImpxdWVyeSIsImdldEVsZW1lbnQiLCJsZW5ndGgiLCJlbXVsYXRlVHJhbnNpdGlvbkVuZCIsImR1cmF0aW9uIiwiY2FsbGVkIiwiZW11bGF0ZWREdXJhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJsaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwidHlwZUNoZWNrQ29uZmlnIiwiY29tcG9uZW50TmFtZSIsImNvbmZpZyIsImNvbmZpZ1R5cGVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJwcm9wZXJ0eSIsImV4cGVjdGVkVHlwZXMiLCJ2YWx1ZSIsInZhbHVlVHlwZSIsInRvU3RyaW5nIiwibWF0Y2giLCJ0b0xvd2VyQ2FzZSIsIlJlZ0V4cCIsInRlc3QiLCJUeXBlRXJyb3IiLCJ0b1VwcGVyQ2FzZSIsImlzVmlzaWJsZSIsInN0eWxlIiwiZWxlbWVudFN0eWxlIiwicGFyZW50Tm9kZVN0eWxlIiwiZGlzcGxheSIsInZpc2liaWxpdHkiLCJpc0Rpc2FibGVkIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJkaXNhYmxlZCIsImhhc0F0dHJpYnV0ZSIsImZpbmRTaGFkb3dSb290IiwiYXR0YWNoU2hhZG93IiwiZ2V0Um9vdE5vZGUiLCJyb290IiwiU2hhZG93Um9vdCIsIm5vb3AiLCJyZWZsb3ciLCJvZmZzZXRIZWlnaHQiLCJnZXRqUXVlcnkiLCJqUXVlcnkiLCJib2R5IiwiaXNSVEwiLCJkaXIiLCJkZWZpbmVKUXVlcnlQbHVnaW4iLCJwbHVnaW4iLCJjYWxsYmFjayIsIiQiLCJuYW1lIiwiTkFNRSIsIkpRVUVSWV9OT19DT05GTElDVCIsImZuIiwialF1ZXJ5SW50ZXJmYWNlIiwiQ29uc3RydWN0b3IiLCJub0NvbmZsaWN0IiwicmVhZHlTdGF0ZSIsImV4ZWN1dGUiLCJlbGVtZW50TWFwIiwiTWFwIiwic2V0Iiwia2V5IiwiaW5zdGFuY2UiLCJoYXMiLCJpbnN0YW5jZU1hcCIsImdldCIsInNpemUiLCJjb25zb2xlIiwiZXJyb3IiLCJBcnJheSIsImZyb20iLCJyZW1vdmUiLCJkZWxldGUiLCJuYW1lc3BhY2VSZWdleCIsInN0cmlwTmFtZVJlZ2V4Iiwic3RyaXBVaWRSZWdleCIsImV2ZW50UmVnaXN0cnkiLCJ1aWRFdmVudCIsImN1c3RvbUV2ZW50cyIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwiY3VzdG9tRXZlbnRzUmVnZXgiLCJuYXRpdmVFdmVudHMiLCJTZXQiLCJnZXRVaWRFdmVudCIsInVpZCIsImdldEV2ZW50IiwiZmluZEhhbmRsZXIiLCJldmVudHMiLCJoYW5kbGVyIiwiZGVsZWdhdGlvblNlbGVjdG9yIiwidWlkRXZlbnRMaXN0IiwiaSIsImxlbiIsImV2ZW50Iiwib3JpZ2luYWxIYW5kbGVyIiwibm9ybWFsaXplUGFyYW1zIiwib3JpZ2luYWxUeXBlRXZlbnQiLCJkZWxlZ2F0aW9uRm4iLCJkZWxlZ2F0aW9uIiwidHlwZUV2ZW50IiwiZ2V0VHlwZUV2ZW50IiwiYWRkSGFuZGxlciIsIm9uZU9mZiIsIndyYXBGbiIsInJlbGF0ZWRUYXJnZXQiLCJkZWxlZ2F0ZVRhcmdldCIsInRoaXMiLCJoYW5kbGVycyIsInByZXZpb3VzRm4iLCJyZXBsYWNlIiwiZG9tRWxlbWVudHMiLCJ0YXJnZXQiLCJFdmVudEhhbmRsZXIiLCJvZmYiLCJ0eXBlIiwiYXBwbHkiLCJib290c3RyYXBEZWxlZ2F0aW9uSGFuZGxlciIsImJvb3RzdHJhcEhhbmRsZXIiLCJyZW1vdmVIYW5kbGVyIiwiQm9vbGVhbiIsIm9uIiwib25lIiwiaW5OYW1lc3BhY2UiLCJpc05hbWVzcGFjZSIsImVsZW1lbnRFdmVudCIsIm5hbWVzcGFjZSIsInN0b3JlRWxlbWVudEV2ZW50IiwiaGFuZGxlcktleSIsInJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyIsInNsaWNlIiwia2V5SGFuZGxlcnMiLCJ0cmlnZ2VyIiwiYXJncyIsImlzTmF0aXZlIiwialF1ZXJ5RXZlbnQiLCJidWJibGVzIiwibmF0aXZlRGlzcGF0Y2giLCJkZWZhdWx0UHJldmVudGVkIiwiZXZ0IiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCIsImlzRGVmYXVsdFByZXZlbnRlZCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJjYW5jZWxhYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJwcmV2ZW50RGVmYXVsdCIsIkJhc2VDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsIl9lbGVtZW50IiwiRGF0YSIsIkRBVEFfS0VZIiwiZGlzcG9zZSIsIkVWRU5UX0tFWSIsImdldE93blByb3BlcnR5TmFtZXMiLCJwcm9wZXJ0eU5hbWUiLCJfcXVldWVDYWxsYmFjayIsImlzQW5pbWF0ZWQiLCJbb2JqZWN0IE9iamVjdF0iLCJWRVJTSU9OIiwiRXJyb3IiLCJBbGVydCIsImNsb3NlIiwicm9vdEVsZW1lbnQiLCJfZ2V0Um9vdEVsZW1lbnQiLCJjdXN0b21FdmVudCIsIl90cmlnZ2VyQ2xvc2VFdmVudCIsIl9yZW1vdmVFbGVtZW50IiwiY2xvc2VzdCIsIl9kZXN0cm95RWxlbWVudCIsInJlbW92ZUNoaWxkIiwiZWFjaCIsImRhdGEiLCJhbGVydEluc3RhbmNlIiwiaGFuZGxlRGlzbWlzcyIsIkJ1dHRvbiIsInRvZ2dsZSIsInNldEF0dHJpYnV0ZSIsIm5vcm1hbGl6ZURhdGEiLCJ2YWwiLCJub3JtYWxpemVEYXRhS2V5IiwiY2hyIiwiYnV0dG9uIiwiTWFuaXB1bGF0b3IiLCJzZXREYXRhQXR0cmlidXRlIiwicmVtb3ZlRGF0YUF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImdldERhdGFBdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsImRhdGFzZXQiLCJwdXJlS2V5IiwiY2hhckF0IiwiZ2V0RGF0YUF0dHJpYnV0ZSIsIm9mZnNldCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJzY3JvbGxUb3AiLCJsZWZ0Iiwic2Nyb2xsTGVmdCIsInBvc2l0aW9uIiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsIkRlZmF1bHQiLCJpbnRlcnZhbCIsImtleWJvYXJkIiwic2xpZGUiLCJwYXVzZSIsIndyYXAiLCJ0b3VjaCIsIkRlZmF1bHRUeXBlIiwiT1JERVJfTkVYVCIsIk9SREVSX1BSRVYiLCJESVJFQ1RJT05fTEVGVCIsIkRJUkVDVElPTl9SSUdIVCIsIkNhcm91c2VsIiwic3VwZXIiLCJfaXRlbXMiLCJfaW50ZXJ2YWwiLCJfYWN0aXZlRWxlbWVudCIsIl9pc1BhdXNlZCIsIl9pc1NsaWRpbmciLCJ0b3VjaFRpbWVvdXQiLCJ0b3VjaFN0YXJ0WCIsInRvdWNoRGVsdGFYIiwiX2NvbmZpZyIsIl9nZXRDb25maWciLCJfaW5kaWNhdG9yc0VsZW1lbnQiLCJfdG91Y2hTdXBwb3J0ZWQiLCJuYXZpZ2F0b3IiLCJtYXhUb3VjaFBvaW50cyIsIl9wb2ludGVyRXZlbnQiLCJQb2ludGVyRXZlbnQiLCJfYWRkRXZlbnRMaXN0ZW5lcnMiLCJfc2xpZGUiLCJuZXh0V2hlblZpc2libGUiLCJoaWRkZW4iLCJjeWNsZSIsImNsZWFySW50ZXJ2YWwiLCJfdXBkYXRlSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInZpc2liaWxpdHlTdGF0ZSIsImJpbmQiLCJ0byIsImluZGV4IiwiYWN0aXZlSW5kZXgiLCJfZ2V0SXRlbUluZGV4Iiwib3JkZXIiLCJfaGFuZGxlU3dpcGUiLCJhYnNEZWx0YXgiLCJhYnMiLCJkaXJlY3Rpb24iLCJfa2V5ZG93biIsIl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzIiwic3RhcnQiLCJwb2ludGVyVHlwZSIsInRvdWNoZXMiLCJjbGllbnRYIiwibW92ZSIsImVuZCIsImNsZWFyVGltZW91dCIsIml0ZW1JbWciLCJlIiwiYWRkIiwidGFnTmFtZSIsImluZGV4T2YiLCJfZ2V0SXRlbUJ5T3JkZXIiLCJhY3RpdmVFbGVtZW50IiwiaXNOZXh0IiwiaXNQcmV2IiwibGFzdEl0ZW1JbmRleCIsIml0ZW1JbmRleCIsIl90cmlnZ2VyU2xpZGVFdmVudCIsImV2ZW50RGlyZWN0aW9uTmFtZSIsInRhcmdldEluZGV4IiwiZnJvbUluZGV4IiwiX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQiLCJhY3RpdmVJbmRpY2F0b3IiLCJpbmRpY2F0b3JzIiwicGFyc2VJbnQiLCJlbGVtZW50SW50ZXJ2YWwiLCJkZWZhdWx0SW50ZXJ2YWwiLCJkaXJlY3Rpb25Pck9yZGVyIiwiX2RpcmVjdGlvblRvT3JkZXIiLCJhY3RpdmVFbGVtZW50SW5kZXgiLCJuZXh0RWxlbWVudCIsIm5leHRFbGVtZW50SW5kZXgiLCJpc0N5Y2xpbmciLCJkaXJlY3Rpb25hbENsYXNzTmFtZSIsIm9yZGVyQ2xhc3NOYW1lIiwiX29yZGVyVG9EaXJlY3Rpb24iLCJ0cmlnZ2VyU2xpZEV2ZW50IiwiY29tcGxldGVDYWxsQmFjayIsImFjdGlvbiIsInJpZGUiLCJjYXJvdXNlbEludGVyZmFjZSIsInNsaWRlSW5kZXgiLCJkYXRhQXBpQ2xpY2tIYW5kbGVyIiwiY2Fyb3VzZWxzIiwicGFyZW50IiwiQ29sbGFwc2UiLCJfaXNUcmFuc2l0aW9uaW5nIiwiX3RyaWdnZXJBcnJheSIsImlkIiwidG9nZ2xlTGlzdCIsImVsZW0iLCJmaWx0ZXJFbGVtZW50IiwiZm91bmRFbGVtIiwiX3NlbGVjdG9yIiwiX3BhcmVudCIsIl9nZXRQYXJlbnQiLCJfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzIiwiaGlkZSIsInNob3ciLCJhY3RpdmVzIiwiYWN0aXZlc0RhdGEiLCJjb250YWluZXIiLCJ0ZW1wQWN0aXZlRGF0YSIsImVsZW1BY3RpdmUiLCJjb2xsYXBzZUludGVyZmFjZSIsImRpbWVuc2lvbiIsIl9nZXREaW1lbnNpb24iLCJzZXRUcmFuc2l0aW9uaW5nIiwic2Nyb2xsU2l6ZSIsInRyaWdnZXJBcnJheUxlbmd0aCIsImlzVHJhbnNpdGlvbmluZyIsInNlbGVjdGVkIiwidHJpZ2dlckFycmF5IiwiaXNPcGVuIiwidHJpZ2dlckRhdGEiLCJSRUdFWFBfS0VZRE9XTiIsIlBMQUNFTUVOVF9UT1AiLCJQTEFDRU1FTlRfVE9QRU5EIiwiUExBQ0VNRU5UX0JPVFRPTSIsIlBMQUNFTUVOVF9CT1RUT01FTkQiLCJQTEFDRU1FTlRfUklHSFQiLCJQTEFDRU1FTlRfTEVGVCIsImJvdW5kYXJ5IiwicmVmZXJlbmNlIiwicG9wcGVyQ29uZmlnIiwiYXV0b0Nsb3NlIiwiRHJvcGRvd24iLCJfcG9wcGVyIiwiX21lbnUiLCJfZ2V0TWVudUVsZW1lbnQiLCJfaW5OYXZiYXIiLCJfZGV0ZWN0TmF2YmFyIiwiZ2V0UGFyZW50RnJvbUVsZW1lbnQiLCJQb3BwZXIiLCJyZWZlcmVuY2VFbGVtZW50IiwiX2dldFBvcHBlckNvbmZpZyIsImlzRGlzcGxheVN0YXRpYyIsIm1vZGlmaWVycyIsIm1vZGlmaWVyIiwiZW5hYmxlZCIsImNyZWF0ZVBvcHBlciIsImZvY3VzIiwiX2NvbXBsZXRlSGlkZSIsImRlc3Ryb3kiLCJ1cGRhdGUiLCJfZ2V0UGxhY2VtZW50IiwicGFyZW50RHJvcGRvd24iLCJpc0VuZCIsImdldFByb3BlcnR5VmFsdWUiLCJfZ2V0T2Zmc2V0IiwibWFwIiwicG9wcGVyRGF0YSIsImRlZmF1bHRCc1BvcHBlckNvbmZpZyIsInBsYWNlbWVudCIsIm9wdGlvbnMiLCJfc2VsZWN0TWVudUl0ZW0iLCJpdGVtcyIsImRyb3Bkb3duSW50ZXJmYWNlIiwidG9nZ2xlcyIsImNvbnRleHQiLCJjb21wb3NlZFBhdGgiLCJpc01lbnVUYXJnZXQiLCJjbGlja0V2ZW50IiwiaXNBY3RpdmUiLCJzdG9wUHJvcGFnYXRpb24iLCJnZXRUb2dnbGVCdXR0b24iLCJjbGVhck1lbnVzIiwiZ2V0SW5zdGFuY2UiLCJjbGljayIsImRhdGFBcGlLZXlkb3duSGFuZGxlciIsImdldFdpZHRoIiwiZG9jdW1lbnRXaWR0aCIsImNsaWVudFdpZHRoIiwiaW5uZXJXaWR0aCIsIndpZHRoIiwiX2Rpc2FibGVPdmVyRmxvdyIsIl9zZXRFbGVtZW50QXR0cmlidXRlcyIsImNhbGN1bGF0ZWRWYWx1ZSIsImFjdHVhbFZhbHVlIiwib3ZlcmZsb3ciLCJzdHlsZVByb3AiLCJzY3JvbGxiYXJXaWR0aCIsInJlc2V0IiwiX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMiLCJyZW1vdmVQcm9wZXJ0eSIsImNsaWNrQ2FsbGJhY2siLCJCYWNrZHJvcCIsIl9pc0FwcGVuZGVkIiwiX2FwcGVuZCIsIl9nZXRFbGVtZW50IiwiX2VtdWxhdGVBbmltYXRpb24iLCJiYWNrZHJvcCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uIiwiTW9kYWwiLCJfZGlhbG9nIiwiX2JhY2tkcm9wIiwiX2luaXRpYWxpemVCYWNrRHJvcCIsIl9pc1Nob3duIiwiX2lnbm9yZUJhY2tkcm9wQ2xpY2siLCJfaXNBbmltYXRlZCIsInNob3dFdmVudCIsInNjcm9sbEJhckhpZGUiLCJfYWRqdXN0RGlhbG9nIiwiX3NldEVzY2FwZUV2ZW50IiwiX3NldFJlc2l6ZUV2ZW50IiwiX3Nob3dCYWNrZHJvcCIsIl9zaG93RWxlbWVudCIsIl9oaWRlTW9kYWwiLCJodG1sRWxlbWVudCIsImhhbmRsZVVwZGF0ZSIsIm1vZGFsQm9keSIsIl9lbmZvcmNlRm9jdXMiLCJfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbiIsIl9yZXNldEFkanVzdG1lbnRzIiwic2Nyb2xsQmFyUmVzZXQiLCJjdXJyZW50VGFyZ2V0IiwiaXNNb2RhbE92ZXJmbG93aW5nIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwib3ZlcmZsb3dZIiwibW9kYWxUcmFuc2l0aW9uRHVyYXRpb24iLCJnZXRTY3JvbGxCYXJXaWR0aCIsImlzQm9keU92ZXJmbG93aW5nIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJzY3JvbGwiLCJPZmZjYW52YXMiLCJfZW5mb3JjZUZvY3VzT25FbGVtZW50IiwiYmx1ciIsInVuZGVmaW5lZCIsImFsbFJlYWR5T3BlbiIsImVsIiwidXJpQXR0cnMiLCJTQUZFX1VSTF9QQVRURVJOIiwiREFUQV9VUkxfUEFUVEVSTiIsImFsbG93ZWRBdHRyaWJ1dGUiLCJhdHRyIiwiYWxsb3dlZEF0dHJpYnV0ZUxpc3QiLCJhdHRyTmFtZSIsIm5vZGVOYW1lIiwibm9kZVZhbHVlIiwicmVnRXhwIiwiYXR0clJlZ2V4Iiwic2FuaXRpemVIdG1sIiwidW5zYWZlSHRtbCIsImFsbG93TGlzdCIsInNhbml0aXplRm4iLCJjcmVhdGVkRG9jdW1lbnQiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJhbGxvd2xpc3RLZXlzIiwiZWxlbWVudHMiLCJlbE5hbWUiLCJhdHRyaWJ1dGVMaXN0IiwiYWxsb3dlZEF0dHJpYnV0ZXMiLCJpbm5lckhUTUwiLCJCU0NMU19QUkVGSVhfUkVHRVgiLCJESVNBTExPV0VEX0FUVFJJQlVURVMiLCJhbmltYXRpb24iLCJ0ZW1wbGF0ZSIsInRpdGxlIiwiZGVsYXkiLCJodG1sIiwiZmFsbGJhY2tQbGFjZW1lbnRzIiwiY3VzdG9tQ2xhc3MiLCJzYW5pdGl6ZSIsIkF0dGFjaG1lbnRNYXAiLCJBVVRPIiwiVE9QIiwiUklHSFQiLCJCT1RUT00iLCJMRUZUIiwiKiIsImEiLCJhcmVhIiwiYiIsImJyIiwiY29sIiwiY29kZSIsImRpdiIsImVtIiwiaHIiLCJoMSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJpbWciLCJsaSIsIm9sIiwicCIsInByZSIsInMiLCJzbWFsbCIsInNwYW4iLCJzdWIiLCJzdXAiLCJzdHJvbmciLCJ1IiwidWwiLCJISURFIiwiSElEREVOIiwiU0hPVyIsIlNIT1dOIiwiSU5TRVJURUQiLCJDTElDSyIsIkZPQ1VTSU4iLCJGT0NVU09VVCIsIk1PVVNFRU5URVIiLCJNT1VTRUxFQVZFIiwiVG9vbHRpcCIsIl9pc0VuYWJsZWQiLCJfdGltZW91dCIsIl9ob3ZlclN0YXRlIiwiX2FjdGl2ZVRyaWdnZXIiLCJ0aXAiLCJfc2V0TGlzdGVuZXJzIiwiZW5hYmxlIiwiZGlzYWJsZSIsInRvZ2dsZUVuYWJsZWQiLCJfaW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0IiwiX2lzV2l0aEFjdGl2ZVRyaWdnZXIiLCJfZW50ZXIiLCJfbGVhdmUiLCJnZXRUaXBFbGVtZW50IiwiX2hpZGVNb2RhbEhhbmRsZXIiLCJpc1dpdGhDb250ZW50Iiwic2hhZG93Um9vdCIsImlzSW5UaGVEb20iLCJvd25lckRvY3VtZW50IiwidGlwSWQiLCJzZXRDb250ZW50IiwiYXR0YWNobWVudCIsIl9nZXRBdHRhY2htZW50IiwiX2FkZEF0dGFjaG1lbnRDbGFzcyIsInByZXZIb3ZlclN0YXRlIiwiX2NsZWFuVGlwQ2xhc3MiLCJnZXRUaXRsZSIsInNldEVsZW1lbnRDb250ZW50IiwiY29udGVudCIsInRleHRDb250ZW50IiwidXBkYXRlQXR0YWNobWVudCIsImRhdGFLZXkiLCJfZ2V0RGVsZWdhdGVDb25maWciLCJwaGFzZSIsIl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UiLCJvbkZpcnN0VXBkYXRlIiwiZXZlbnRJbiIsImV2ZW50T3V0IiwiX2ZpeFRpdGxlIiwib3JpZ2luYWxUaXRsZVR5cGUiLCJkYXRhQXR0cmlidXRlcyIsImRhdGFBdHRyIiwidGFiQ2xhc3MiLCJ0b2tlbiIsInRDbGFzcyIsInN0YXRlIiwicG9wcGVyIiwiUG9wb3ZlciIsIl9nZXRDb250ZW50IiwibWV0aG9kIiwiU2Nyb2xsU3B5IiwiX3Njcm9sbEVsZW1lbnQiLCJfb2Zmc2V0cyIsIl90YXJnZXRzIiwiX2FjdGl2ZVRhcmdldCIsIl9zY3JvbGxIZWlnaHQiLCJfcHJvY2VzcyIsInJlZnJlc2giLCJhdXRvTWV0aG9kIiwib2Zmc2V0TWV0aG9kIiwib2Zmc2V0QmFzZSIsIl9nZXRTY3JvbGxUb3AiLCJfZ2V0U2Nyb2xsSGVpZ2h0IiwidGFyZ2V0U2VsZWN0b3IiLCJ0YXJnZXRCQ1IiLCJoZWlnaHQiLCJpdGVtIiwic29ydCIsInBhZ2VZT2Zmc2V0IiwibWF4IiwiX2dldE9mZnNldEhlaWdodCIsImlubmVySGVpZ2h0IiwibWF4U2Nyb2xsIiwiX2FjdGl2YXRlIiwiX2NsZWFyIiwicXVlcmllcyIsImxpbmsiLCJqb2luIiwibGlzdEdyb3VwIiwibmF2SXRlbSIsIm5vZGUiLCJzcHkiLCJUYWIiLCJsaXN0RWxlbWVudCIsIml0ZW1TZWxlY3RvciIsImhpZGVFdmVudCIsImNvbXBsZXRlIiwiYWN0aXZlIiwiX3RyYW5zaXRpb25Db21wbGV0ZSIsImRyb3Bkb3duQ2hpbGQiLCJkcm9wZG93bkVsZW1lbnQiLCJkcm9wZG93biIsImF1dG9oaWRlIiwiVG9hc3QiLCJfaGFzTW91c2VJbnRlcmFjdGlvbiIsIl9oYXNLZXlib2FyZEludGVyYWN0aW9uIiwiX2NsZWFyVGltZW91dCIsIl9tYXliZVNjaGVkdWxlSGlkZSIsIl9vbkludGVyYWN0aW9uIiwiaXNJbnRlcmFjdGluZyIsInByb2ZpbGVTZXR0aW5nc0VtYWlsIiwibG9hZGluZ0VtYWlsU3Bpbm5lciIsImZvcm1DaGFuZ2VFbWFpbCIsImFsZXJ0Q2hhbmdlRW1haWwiLCJhbGVydENoYW5nZUVtYWlsTWVzc2FnZSIsInNlbmRDaGFuZ2VFbWFpbFJlcXVlc3QiLCJyZXNwb25zZSIsImZldGNoIiwiaGVhZGVycyIsIm1vZGUiLCJjYWNoZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWFpbCIsIm9rIiwianNvbiIsInN0YXR1cyIsInRoZW4iLCJyZXMiLCJzdWNjZXNzIiwic3VjY2Vzc19tZXNzYWdlIiwiZXJyb3JfbWVzc2FnZSIsImNhdGNoIiwiZXJyIiwiZm9ybVByb2ZpbGVDaGFuZ2VQYXNzd29yZCIsImNoYW5nZVBhc3N3b3JkQnRuIiwidG9nZ2xlU2hvd1Bhc3N3b3JkIiwicGFzc3dvcmRJbnB1dEZpZWxkIiwicGFzc3dvcmRDaGVja2VySW5mbyIsImNpcmxjZUNoZWNrSWNvbiIsImxvYWRpbmdTcGlubmVyQ2hhbmdlUGFzc3dvcmQiLCJhbGVydEJveENoYW5nZVBhc3N3b3JkIiwiYWxlcnRNZXNzYWdlQ2hhbmdlUGFzc3dvcmQiLCJjaGVja2VkIiwic2VuZENoYW5nZVBhc3N3b3JkUmVxdWVzdCIsImNoYW5nZVBhc3N3b3JkVVJMIiwiY3VycmVudF9wYXNzd29yZCIsIm5ld19wYXNzd29yZCIsImNvbmZpcm1fbmV3X3Bhc3N3b3JkIiwibWVzc2FnZSIsImJ0bkNvbW1lbnQiLCJjb21tZW50Rm9ybSIsImxvYWRpbmdTcGlubmVyIiwic2Vzc2lvblRyaWdnZXJGb2N1c1N0b3JhZ2UiLCJzZXNzaW9uU3RvcmFnZSIsIk5FV19DT01NRU5UIiwiY29tbWVudF9ib2R5IiwicmVuZGVyQ29tbWVudHMiLCJwb3N0Q29tbWVudCIsImNyZWRlbnRpYWxzIiwidGlueW1jZSIsImdldENvbnRlbnQiLCJwb3N0X2lkIiwicG9zdElkIiwic3ViamVjdF9pZCIsInN1YmplY3RJZCIsImxvZyIsInNldEl0ZW0iLCJuZXdfY29tbWVudCIsImxvY2F0aW9uIiwiaHJlZiIsInVybCIsImZvY3VzVG9OZXdDb21tZW50IiwiY29tbWVudFRvRm9jdXMiLCJnZXRJdGVtIiwiY29tbWVudEJvZHlGb2N1cyIsImhhc2giLCJjbGVhciIsImNoZWNrU25pcHBldENvZGUiLCJjb3B5Q29kZUJ0biIsInNldFByb3BlcnR5IiwiY29weUNvZGUiLCJpbml0aWFsaXplQ29weUNvZGVCdG4iLCJzbmlwcGV0Q29udGVudCIsImR1bW15VGV4dEFyZWEiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsImJ0blN1Ym1pdFBvc3QiLCJmb3JtQ3JlYXRlUG9zdCIsImZldGNoQWxsQ29tbWVudEZvclBvc3QiLCJmb3JtRm9yZ290UGFzc3dvcmQiLCJyZWNvdmVyRW1haWwiLCJidG5TdWJtaXRQYXNzd29yZFJlc2V0IiwicGFzc3dvcmRSZXNldE1lc3NhZ2UiLCJwYXNzd29yZFJlc2V0TG9hZGluZyIsInBhc3N3b3JkUmVzZXRTdWNjZXNzIiwicGFzc3dvcmRSZXNldEVycm9yIiwicGFzc3dvcmRSZXNldERpYWxvZ0J0bkNsb3NlIiwiYnRuQ29uZmlnIiwic2VuZFJlY292ZXJBY2NvdW50UmVxdWVzdCIsInJlY292ZXJ5X2VtYWlsIiwibG9nbyIsInNyYyIsImxvZ29JbWFnZSIsImxvYWRpbmdDb250YWluZXIiLCJidG5TaWduSW4iLCJyZW1lbWJlck1lIiwiZm9ybUxvZ2luIiwiaW5wdXRFbWFpbCIsImlucHV0UGFzc3dvcmQiLCJsb2dpblN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJ1c2VyX2VtYWlsIiwicmVtZW1iZXJNZVN0YXRlIiwic2V0UmVtZW1iZXJNZSIsInNlbmRMb2dpblJlcXVlc3QiLCJyZW1lbWJlcl9tZSIsInBhc3N3b3JkIiwicmVsb2FkIiwiYXV0aGVudGljYXRlX3VybCIsImxvZ2luQ3JlZGVudGlhbHMiLCJuYXZUb2dnbGVyIiwibmF2YmFyQ29udGFpbmVyIiwibmF2SXNPcGVuIiwidG9nZ2xlT3B0aW9uQnRuIiwib3B0aW9uQ29udGFpbmVyIiwiZGVsZXRlT3B0aW9uQnRuIiwiZGVsZXRlRGlhbG9nIiwiZGVsZXRlRGlhbG9nQ2FuY2VsIiwiZGVsZXRlRGlhbG9nQ29uZmlybSIsInBpblBvc3QiLCJ1blBpblBvc3QiLCJvcHRpb25Jc09wZW4iLCJ0b2dnbGVPcHRpb25zIiwiZGVsZXRlUG9zdE9wZW5EaWFsb2ciLCJjbG9zZURpYWxvZyIsImNvbmZpcm1EZWxldGVQb3N0IiwiZGF0YVBvc3RJZCIsImRlbGV0ZU9uZVBvc3QiLCJVUkxfREVMRVRFX1BPU1QiLCJpbml0aWFsaXplUGluUG9zdCIsImluaXRpYWxpemVVblBpblBvc3QiLCJzZXRJc1BpblBvc3QiLCJwaW5PcHRpb25Db25maWciLCJzZXRQaW5Qb3N0IiwiVVJMX1BJTl9QT1NUIiwicGluX3Bvc3QiLCJkZWxldGVCdXR0b24iLCJkYXRhUG9zdElkX2RlbGV0ZSIsInVwZGF0ZUZvcm0iLCJ1cGRhdGVUaXRsZSIsInVwZGF0ZVRhZyIsInVwZGF0ZUJvZHkiLCJ1cGRhdGVCdG4iLCJkYXRhUG9zdElkX3VwZGF0ZSIsInBvc3RVcGRhdGVkQ29udGVudCIsInBvc3RfdGl0bGUiLCJwb3N0X3RhZyIsInBvc3RfYm9keSIsInVwZGF0ZU9uZVBvc3QiLCJyZXF1aXJlIiwicHJvZmlsZUluZm9ybWF0aW9uQnRuRHJvcERvd24iLCJjaGFuZ2VQYXNzd29yZENvbnRhaW5lciIsImNoYW5nZUVtYWlsQ29udGFpbmVyIiwiYnRuVXBkYXRlUHJvZmlsZVNldHRpbmdzIiwiaW1hZ2VGaWxlIiwidXBsb2FkUHJvZmlsZUltZ1BpY2tlciIsImFsZXJ0UHJvZmlsZVNldHRpbmdzIiwiYWxlcnRUZXh0UHJvZmlsZVNldHRpbmdzIiwiZmlsZSIsImZpbGVzIiwidXBsb2FkUHJvZmlsZUltZ1ByZXZpZXciLCJpbWFnZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJTVEFOREFSRF9TSVpFIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImZvcm1Qcm9maWxlU2V0dGluZ3MiLCJwcm9maWxlU2V0dGluZ3NGdWxsbmFtZSIsImxvYWRpbmdQcm9maWxlU2V0dGluZ3MiLCJwcm9maWxlU2V0dGluZ3NGb3JtRGF0YSIsIkZvcm1EYXRhIiwiUFJPRklMRV9JTUFHRSIsImFwcGVuZCIsInVwZGF0ZVByb2ZpbGVJbmZvcm1hdGlvbiIsIlVQREFURV9JTkZPX1VSTCIsInJlZ1VzZXJOYW1lIiwicmVnVXNlckVtYWlsIiwicmVnVXNlclBhc3N3b3JkIiwicmVnVXNlckNvbmZpcm1QYXNzd29yZCIsImZvcm1SZWdpc3RlciIsInBhc3N3b3JkQ2hlY2tlciIsImNvbmZpcm1QYXNzd29yZENoZWNrZXIiLCJjaGVja0ljb24iLCJzaG93UGFzc3dvcmQiLCJTRVNTSU9OX1NUT1JBR0VfTkFNRSIsIlNFU1NJT05fU1RPUkFHRV9FTUFJTCIsInJlZ2lzdGVyU2Vzc2lvblN0b3JhZ2UiLCJyZWNvdmVyQ3JlZGVudGlhbHMiLCJ1c2VyX25hbWUiLCJmb3JFbWFpbExvY2FsU3RvcmFnZSIsInBhc3N3b3JkRmllbGQiLCJmb3JtUmVzZXRQYXNzd29yZCIsInBhc3N3b3JkUmVzZXRJbnB1dEZpZWxkIiwicGFzc3dvcmRUb2dnbGVWaWV3IiwicGFzc3dvcmRSZXNldEJ0biIsImVsX3Bhc3N3b3JkX2NoZWNrZXIiLCJ0ZXh0X2NoZWNrZXIiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsInBhc3N3b3JkUmVzZXRCdG5Db25maWciLCJwYXNzd29yZFJlc2V0U3RhdHVzSWNvbiIsInBhc3N3b3JkUmVzZXRTdGF0dXNNZXNzYWdlIiwic2VuZFJlc2V0UGFzc3dvcmRSZXF1ZXN0IiwidXJsUGFyYW1zIiwic2VhcmNoIiwiZ2V0UXVlcnkiLCJwYXJhbXMiLCJwcnQiLCJwcnMiLCJzdWJqZWN0RHJvcGRvd24iLCJzdWJqZWN0RHJvcGRvd25Hcm91cCIsInN1YmplY3REcm9wZG93bkJ0biIsInN1YmplY3REcm9wZG93bkljb24iLCJzdWJqZWN0RHJvcGRvd25PcGVuIiwiYXJyYXlJbmRleEZpbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStEO0FBQ047QUFDUTtBQUNKO0FBQ0U7QUFDUjtBQUNaO0FBQ2tCO0FBQ2xCO0FBQ2dCO0FBQ1Y7QUFDTTtBQUNEO0FBQ3BCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUVBQXFFLGFBQWE7QUFDbEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBLHFCQUFxQixtRUFBUyxjQUFjLHdFQUFpQix5Q0FBeUMsd0VBQWlCO0FBQ3ZILGtCQUFrQix3RUFBaUI7QUFDbkMsVUFBVTtBQUNWOztBQUVBLCtCQUErQixpRUFBYyxDQUFDLDhEQUFXLHdEQUF3RDs7QUFFakg7QUFDQTtBQUNBLFNBQVMsRUFBRTtBQUNYOztBQUVBLFlBQVksSUFBcUM7QUFDakQsMEJBQTBCLDJEQUFRO0FBQ2xDO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsVUFBVSxvRUFBaUI7O0FBRTNCLGNBQWMsbUVBQWdCLDhCQUE4QiwyQ0FBSTtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUVi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QUFDdERvMEIscUJBQU8sQ0FBQywwREFBRCxDQUFQO0FBQ0Q7O0FBRURBLG1CQUFPLENBQUMsNERBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyxrREFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLGtFQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsNEVBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQywwREFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLDhEQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsZ0RBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyx3RkFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLDhEQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsb0RBQUQsQ0FBUDtBQUVBOzs7QUFDQUEsbUJBQU8sQ0FBQyxtRkFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLHVDQUFELENBQVAsQyIsImZpbGUiOiJtYWluLmNvbXBpbGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldENvbXBvc2l0ZVJlY3QgZnJvbSBcIi4vZG9tLXV0aWxzL2dldENvbXBvc2l0ZVJlY3QuanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgbGlzdFNjcm9sbFBhcmVudHMgZnJvbSBcIi4vZG9tLXV0aWxzL2xpc3RTY3JvbGxQYXJlbnRzLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgb3JkZXJNb2RpZmllcnMgZnJvbSBcIi4vdXRpbHMvb3JkZXJNb2RpZmllcnMuanNcIjtcbmltcG9ydCBkZWJvdW5jZSBmcm9tIFwiLi91dGlscy9kZWJvdW5jZS5qc1wiO1xuaW1wb3J0IHZhbGlkYXRlTW9kaWZpZXJzIGZyb20gXCIuL3V0aWxzL3ZhbGlkYXRlTW9kaWZpZXJzLmpzXCI7XG5pbXBvcnQgdW5pcXVlQnkgZnJvbSBcIi4vdXRpbHMvdW5pcXVlQnkuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBtZXJnZUJ5TmFtZSBmcm9tIFwiLi91dGlscy9tZXJnZUJ5TmFtZS5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IHsgYXV0byB9IGZyb20gXCIuL2VudW1zLmpzXCI7XG52YXIgSU5WQUxJRF9FTEVNRU5UX0VSUk9SID0gJ1BvcHBlcjogSW52YWxpZCByZWZlcmVuY2Ugb3IgcG9wcGVyIGFyZ3VtZW50IHByb3ZpZGVkLiBUaGV5IG11c3QgYmUgZWl0aGVyIGEgRE9NIGVsZW1lbnQgb3IgdmlydHVhbCBlbGVtZW50Lic7XG52YXIgSU5GSU5JVEVfTE9PUF9FUlJPUiA9ICdQb3BwZXI6IEFuIGluZmluaXRlIGxvb3AgaW4gdGhlIG1vZGlmaWVycyBjeWNsZSBoYXMgYmVlbiBkZXRlY3RlZCEgVGhlIGN5Y2xlIGhhcyBiZWVuIGludGVycnVwdGVkIHRvIHByZXZlbnQgYSBicm93c2VyIGNyYXNoLic7XG52YXIgREVGQVVMVF9PUFRJT05TID0ge1xuICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICBtb2RpZmllcnM6IFtdLFxuICBzdHJhdGVneTogJ2Fic29sdXRlJ1xufTtcblxuZnVuY3Rpb24gYXJlVmFsaWRFbGVtZW50cygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiAhYXJncy5zb21lKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuICEoZWxlbWVudCAmJiB0eXBlb2YgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPT09ICdmdW5jdGlvbicpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHBlckdlbmVyYXRvcihnZW5lcmF0b3JPcHRpb25zKSB7XG4gIGlmIChnZW5lcmF0b3JPcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBnZW5lcmF0b3JPcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX2dlbmVyYXRvck9wdGlvbnMgPSBnZW5lcmF0b3JPcHRpb25zLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE1vZGlmaWVycyxcbiAgICAgIGRlZmF1bHRNb2RpZmllcnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPT09IHZvaWQgMCA/IFtdIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRPcHRpb25zLFxuICAgICAgZGVmYXVsdE9wdGlvbnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID09PSB2b2lkIDAgPyBERUZBVUxUX09QVElPTlMgOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyO1xuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlUG9wcGVyKHJlZmVyZW5jZSwgcG9wcGVyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuICAgIH1cblxuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICBvcmRlcmVkTW9kaWZpZXJzOiBbXSxcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgZGVmYXVsdE9wdGlvbnMpLFxuICAgICAgbW9kaWZpZXJzRGF0YToge30sXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICByZWZlcmVuY2U6IHJlZmVyZW5jZSxcbiAgICAgICAgcG9wcGVyOiBwb3BwZXJcbiAgICAgIH0sXG4gICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9O1xuICAgIHZhciBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgdmFyIGlzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdmFyIGluc3RhbmNlID0ge1xuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgc2V0T3B0aW9uczogZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgc3RhdGUub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBzdGF0ZS5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgc3RhdGUuc2Nyb2xsUGFyZW50cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGlzRWxlbWVudChyZWZlcmVuY2UpID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlKSA6IHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCkgOiBbXSxcbiAgICAgICAgICBwb3BwZXI6IGxpc3RTY3JvbGxQYXJlbnRzKHBvcHBlcilcbiAgICAgICAgfTsgLy8gT3JkZXJzIHRoZSBtb2RpZmllcnMgYmFzZWQgb24gdGhlaXIgZGVwZW5kZW5jaWVzIGFuZCBgcGhhc2VgXG4gICAgICAgIC8vIHByb3BlcnRpZXNcblxuICAgICAgICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyTW9kaWZpZXJzKG1lcmdlQnlOYW1lKFtdLmNvbmNhdChkZWZhdWx0TW9kaWZpZXJzLCBzdGF0ZS5vcHRpb25zLm1vZGlmaWVycykpKTsgLy8gU3RyaXAgb3V0IGRpc2FibGVkIG1vZGlmaWVyc1xuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobSkge1xuICAgICAgICAgIHJldHVybiBtLmVuYWJsZWQ7XG4gICAgICAgIH0pOyAvLyBWYWxpZGF0ZSB0aGUgcHJvdmlkZWQgbW9kaWZpZXJzIHNvIHRoYXQgdGhlIGNvbnN1bWVyIHdpbGwgZ2V0IHdhcm5lZFxuICAgICAgICAvLyBpZiBvbmUgb2YgdGhlIG1vZGlmaWVycyBpcyBpbnZhbGlkIGZvciBhbnkgcmVhc29uXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgIHZhciBtb2RpZmllcnMgPSB1bmlxdWVCeShbXS5jb25jYXQob3JkZXJlZE1vZGlmaWVycywgc3RhdGUub3B0aW9ucy5tb2RpZmllcnMpLCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBfcmVmLm5hbWU7XG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YWxpZGF0ZU1vZGlmaWVycyhtb2RpZmllcnMpO1xuXG4gICAgICAgICAgaWYgKGdldEJhc2VQbGFjZW1lbnQoc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgICAgICAgICB2YXIgZmxpcE1vZGlmaWVyID0gc3RhdGUub3JkZXJlZE1vZGlmaWVycy5maW5kKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICAgICAgICB2YXIgbmFtZSA9IF9yZWYyLm5hbWU7XG4gICAgICAgICAgICAgIHJldHVybiBuYW1lID09PSAnZmxpcCc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFmbGlwTW9kaWZpZXIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhdXRvXCIgcGxhY2VtZW50cyByZXF1aXJlIHRoZSBcImZsaXBcIiBtb2RpZmllciBiZScsICdwcmVzZW50IGFuZCBlbmFibGVkIHRvIHdvcmsuJ10uam9pbignICcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHBvcHBlciksXG4gICAgICAgICAgICAgIG1hcmdpblRvcCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpblRvcCxcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5SaWdodCxcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luQm90dG9tLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0ID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luTGVmdDsgLy8gV2Ugbm8gbG9uZ2VyIHRha2UgaW50byBhY2NvdW50IGBtYXJnaW5zYCBvbiB0aGUgcG9wcGVyLCBhbmQgaXQgY2FuXG4gICAgICAgICAgLy8gY2F1c2UgYnVncyB3aXRoIHBvc2l0aW9uaW5nLCBzbyB3ZSdsbCB3YXJuIHRoZSBjb25zdW1lclxuXG5cbiAgICAgICAgICBpZiAoW21hcmdpblRvcCwgbWFyZ2luUmlnaHQsIG1hcmdpbkJvdHRvbSwgbWFyZ2luTGVmdF0uc29tZShmdW5jdGlvbiAobWFyZ2luKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChtYXJnaW4pO1xuICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oWydQb3BwZXI6IENTUyBcIm1hcmdpblwiIHN0eWxlcyBjYW5ub3QgYmUgdXNlZCB0byBhcHBseSBwYWRkaW5nJywgJ2JldHdlZW4gdGhlIHBvcHBlciBhbmQgaXRzIHJlZmVyZW5jZSBlbGVtZW50IG9yIGJvdW5kYXJ5LicsICdUbyByZXBsaWNhdGUgbWFyZ2luLCB1c2UgdGhlIGBvZmZzZXRgIG1vZGlmaWVyLCBhcyB3ZWxsIGFzJywgJ3RoZSBgcGFkZGluZ2Agb3B0aW9uIGluIHRoZSBgcHJldmVudE92ZXJmbG93YCBhbmQgYGZsaXBgJywgJ21vZGlmaWVycy4nXS5qb2luKCcgJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJ1bk1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UudXBkYXRlKCk7XG4gICAgICB9LFxuICAgICAgLy8gU3luYyB1cGRhdGUg4oCTIGl0IHdpbGwgYWx3YXlzIGJlIGV4ZWN1dGVkLCBldmVuIGlmIG5vdCBuZWNlc3NhcnkuIFRoaXNcbiAgICAgIC8vIGlzIHVzZWZ1bCBmb3IgbG93IGZyZXF1ZW5jeSB1cGRhdGVzIHdoZXJlIHN5bmMgYmVoYXZpb3Igc2ltcGxpZmllcyB0aGVcbiAgICAgIC8vIGxvZ2ljLlxuICAgICAgLy8gRm9yIGhpZ2ggZnJlcXVlbmN5IHVwZGF0ZXMgKGUuZy4gYHJlc2l6ZWAgYW5kIGBzY3JvbGxgIGV2ZW50cyksIGFsd2F5c1xuICAgICAgLy8gcHJlZmVyIHRoZSBhc3luYyBQb3BwZXIjdXBkYXRlIG1ldGhvZFxuICAgICAgZm9yY2VVcGRhdGU6IGZ1bmN0aW9uIGZvcmNlVXBkYXRlKCkge1xuICAgICAgICBpZiAoaXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3N0YXRlJGVsZW1lbnRzID0gc3RhdGUuZWxlbWVudHMsXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBfc3RhdGUkZWxlbWVudHMucmVmZXJlbmNlLFxuICAgICAgICAgICAgcG9wcGVyID0gX3N0YXRlJGVsZW1lbnRzLnBvcHBlcjsgLy8gRG9uJ3QgcHJvY2VlZCBpZiBgcmVmZXJlbmNlYCBvciBgcG9wcGVyYCBhcmUgbm90IHZhbGlkIGVsZW1lbnRzXG4gICAgICAgIC8vIGFueW1vcmVcblxuICAgICAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihJTlZBTElEX0VMRU1FTlRfRVJST1IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBTdG9yZSB0aGUgcmVmZXJlbmNlIGFuZCBwb3BwZXIgcmVjdHMgdG8gYmUgcmVhZCBieSBtb2RpZmllcnNcblxuXG4gICAgICAgIHN0YXRlLnJlY3RzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogZ2V0Q29tcG9zaXRlUmVjdChyZWZlcmVuY2UsIGdldE9mZnNldFBhcmVudChwb3BwZXIpLCBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnKSxcbiAgICAgICAgICBwb3BwZXI6IGdldExheW91dFJlY3QocG9wcGVyKVxuICAgICAgICB9OyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byByZXNldCB0aGUgY3VycmVudCB1cGRhdGUgY3ljbGUuIFRoZVxuICAgICAgICAvLyBtb3N0IGNvbW1vbiB1c2UgY2FzZSBmb3IgdGhpcyBpcyB0aGUgYGZsaXBgIG1vZGlmaWVyIGNoYW5naW5nIHRoZVxuICAgICAgICAvLyBwbGFjZW1lbnQsIHdoaWNoIHRoZW4gbmVlZHMgdG8gcmUtcnVuIGFsbCB0aGUgbW9kaWZpZXJzLCBiZWNhdXNlIHRoZVxuICAgICAgICAvLyBsb2dpYyB3YXMgcHJldmlvdXNseSByYW4gZm9yIHRoZSBwcmV2aW91cyBwbGFjZW1lbnQgYW5kIGlzIHRoZXJlZm9yZVxuICAgICAgICAvLyBzdGFsZS9pbmNvcnJlY3RcblxuICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5wbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDsgLy8gT24gZWFjaCB1cGRhdGUgY3ljbGUsIHRoZSBgbW9kaWZpZXJzRGF0YWAgcHJvcGVydHkgZm9yIGVhY2ggbW9kaWZpZXJcbiAgICAgICAgLy8gaXMgZmlsbGVkIHdpdGggdGhlIGluaXRpYWwgZGF0YSBzcGVjaWZpZWQgYnkgdGhlIG1vZGlmaWVyLiBUaGlzIG1lYW5zXG4gICAgICAgIC8vIGl0IGRvZXNuJ3QgcGVyc2lzdCBhbmQgaXMgZnJlc2ggb24gZWFjaCB1cGRhdGUuXG4gICAgICAgIC8vIFRvIGVuc3VyZSBwZXJzaXN0ZW50IGRhdGEsIHVzZSBgJHtuYW1lfSNwZXJzaXN0ZW50YFxuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGUubW9kaWZpZXJzRGF0YVttb2RpZmllci5uYW1lXSA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGlmaWVyLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIF9fZGVidWdfbG9vcHNfXyA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHN0YXRlLm9yZGVyZWRNb2RpZmllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgX19kZWJ1Z19sb29wc19fICs9IDE7XG5cbiAgICAgICAgICAgIGlmIChfX2RlYnVnX2xvb3BzX18gPiAxMDApIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihJTkZJTklURV9MT09QX0VSUk9SKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHN0YXRlLnJlc2V0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICAgICAgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfc3RhdGUkb3JkZXJlZE1vZGlmaWUgPSBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzW2luZGV4XSxcbiAgICAgICAgICAgICAgZm4gPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUuZm4sXG4gICAgICAgICAgICAgIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUub3B0aW9ucyxcbiAgICAgICAgICAgICAgX29wdGlvbnMgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID09PSB2b2lkIDAgPyB7fSA6IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIsXG4gICAgICAgICAgICAgIG5hbWUgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUubmFtZTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHN0YXRlID0gZm4oe1xuICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IF9vcHRpb25zLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2VcbiAgICAgICAgICAgIH0pIHx8IHN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIEFzeW5jIGFuZCBvcHRpbWlzdGljYWxseSBvcHRpbWl6ZWQgdXBkYXRlIOKAkyBpdCB3aWxsIG5vdCBiZSBleGVjdXRlZCBpZlxuICAgICAgLy8gbm90IG5lY2Vzc2FyeSAoZGVib3VuY2VkIHRvIHJ1biBhdCBtb3N0IG9uY2UtcGVyLXRpY2spXG4gICAgICB1cGRhdGU6IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICByZXNvbHZlKHN0YXRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgaXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoSU5WQUxJRF9FTEVNRU5UX0VSUk9SKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIGluc3RhbmNlLnNldE9wdGlvbnMob3B0aW9ucykudGhlbihmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIGlmICghaXNEZXN0cm95ZWQgJiYgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKSB7XG4gICAgICAgIG9wdGlvbnMub25GaXJzdFVwZGF0ZShzdGF0ZSk7XG4gICAgICB9XG4gICAgfSk7IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgYmVmb3JlIHRoZSBmaXJzdFxuICAgIC8vIHVwZGF0ZSBjeWNsZSBydW5zLiBUaGV5IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIHVwZGF0ZVxuICAgIC8vIGN5Y2xlLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGEgbW9kaWZpZXIgYWRkcyBzb21lIHBlcnNpc3RlbnQgZGF0YSB0aGF0XG4gICAgLy8gb3RoZXIgbW9kaWZpZXJzIG5lZWQgdG8gdXNlLCBidXQgdGhlIG1vZGlmaWVyIGlzIHJ1biBhZnRlciB0aGUgZGVwZW5kZW50XG4gICAgLy8gb25lLlxuXG4gICAgZnVuY3Rpb24gcnVuTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgICB2YXIgbmFtZSA9IF9yZWYzLm5hbWUsXG4gICAgICAgICAgICBfcmVmMyRvcHRpb25zID0gX3JlZjMub3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvbnMgPSBfcmVmMyRvcHRpb25zID09PSB2b2lkIDAgPyB7fSA6IF9yZWYzJG9wdGlvbnMsXG4gICAgICAgICAgICBlZmZlY3QgPSBfcmVmMy5lZmZlY3Q7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBlZmZlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YXIgY2xlYW51cEZuID0gZWZmZWN0KHtcbiAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgbm9vcEZuID0gZnVuY3Rpb24gbm9vcEZuKCkge307XG5cbiAgICAgICAgICBlZmZlY3RDbGVhbnVwRm5zLnB1c2goY2xlYW51cEZuIHx8IG5vb3BGbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiBmbigpO1xuICAgICAgfSk7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xufVxuZXhwb3J0IHZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgZGV0ZWN0T3ZlcmZsb3cgfTsiLCJpbXBvcnQgeyBpc1NoYWRvd1Jvb3QgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWlucyhwYXJlbnQsIGNoaWxkKSB7XG4gIHZhciByb290Tm9kZSA9IGNoaWxkLmdldFJvb3ROb2RlICYmIGNoaWxkLmdldFJvb3ROb2RlKCk7IC8vIEZpcnN0LCBhdHRlbXB0IHdpdGggZmFzdGVyIG5hdGl2ZSBtZXRob2RcblxuICBpZiAocGFyZW50LmNvbnRhaW5zKGNoaWxkKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIHRoZW4gZmFsbGJhY2sgdG8gY3VzdG9tIGltcGxlbWVudGF0aW9uIHdpdGggU2hhZG93IERPTSBzdXBwb3J0XG4gIGVsc2UgaWYgKHJvb3ROb2RlICYmIGlzU2hhZG93Um9vdChyb290Tm9kZSkpIHtcbiAgICAgIHZhciBuZXh0ID0gY2hpbGQ7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKG5leHQgJiYgcGFyZW50LmlzU2FtZU5vZGUobmV4dCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ106IG5lZWQgYSBiZXR0ZXIgd2F5IHRvIGhhbmRsZSB0aGlzLi4uXG5cblxuICAgICAgICBuZXh0ID0gbmV4dC5wYXJlbnROb2RlIHx8IG5leHQuaG9zdDtcbiAgICAgIH0gd2hpbGUgKG5leHQpO1xuICAgIH0gLy8gR2l2ZSB1cCwgdGhlIHJlc3VsdCBpcyBmYWxzZVxuXG5cbiAgcmV0dXJuIGZhbHNlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuICAgIHRvcDogcmVjdC50b3AsXG4gICAgcmlnaHQ6IHJlY3QucmlnaHQsXG4gICAgYm90dG9tOiByZWN0LmJvdHRvbSxcbiAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgeDogcmVjdC5sZWZ0LFxuICAgIHk6IHJlY3QudG9wXG4gIH07XG59IiwiaW1wb3J0IHsgdmlld3BvcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBnZXRWaWV3cG9ydFJlY3QgZnJvbSBcIi4vZ2V0Vmlld3BvcnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRSZWN0IGZyb20gXCIuL2dldERvY3VtZW50UmVjdC5qc1wiO1xuaW1wb3J0IGxpc3RTY3JvbGxQYXJlbnRzIGZyb20gXCIuL2xpc3RTY3JvbGxQYXJlbnRzLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgY29udGFpbnMgZnJvbSBcIi4vY29udGFpbnMuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHJlY3RUb0NsaWVudFJlY3QgZnJvbSBcIi4uL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCB7IG1heCwgbWluIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcblxuZnVuY3Rpb24gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTtcbiAgcmVjdC50b3AgPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50VG9wO1xuICByZWN0LmxlZnQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG4gIHJlY3QuYm90dG9tID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC5yaWdodCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3Qud2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LmhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnggPSByZWN0LmxlZnQ7XG4gIHJlY3QueSA9IHJlY3QudG9wO1xuICByZXR1cm4gcmVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50ID09PSB2aWV3cG9ydCA/IHJlY3RUb0NsaWVudFJlY3QoZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQpKSA6IGlzSFRNTEVsZW1lbnQoY2xpcHBpbmdQYXJlbnQpID8gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoY2xpcHBpbmdQYXJlbnQpIDogcmVjdFRvQ2xpZW50UmVjdChnZXREb2N1bWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKSk7XG59IC8vIEEgXCJjbGlwcGluZyBwYXJlbnRcIiBpcyBhbiBvdmVyZmxvd2FibGUgY29udGFpbmVyIHdpdGggdGhlIGNoYXJhY3RlcmlzdGljIG9mXG4vLyBjbGlwcGluZyAob3IgaGlkaW5nKSBvdmVyZmxvd2luZyBlbGVtZW50cyB3aXRoIGEgcG9zaXRpb24gZGlmZmVyZW50IGZyb21cbi8vIGBpbml0aWFsYFxuXG5cbmZ1bmN0aW9uIGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSB7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSBsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcbiAgdmFyIGNhbkVzY2FwZUNsaXBwaW5nID0gWydhYnNvbHV0ZScsICdmaXhlZCddLmluZGV4T2YoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbikgPj0gMDtcbiAgdmFyIGNsaXBwZXJFbGVtZW50ID0gY2FuRXNjYXBlQ2xpcHBpbmcgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSA/IGdldE9mZnNldFBhcmVudChlbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgaWYgKCFpc0VsZW1lbnQoY2xpcHBlckVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy8xNDE0XG5cblxuICByZXR1cm4gY2xpcHBpbmdQYXJlbnRzLmZpbHRlcihmdW5jdGlvbiAoY2xpcHBpbmdQYXJlbnQpIHtcbiAgICByZXR1cm4gaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSAmJiBjb250YWlucyhjbGlwcGluZ1BhcmVudCwgY2xpcHBlckVsZW1lbnQpICYmIGdldE5vZGVOYW1lKGNsaXBwaW5nUGFyZW50KSAhPT0gJ2JvZHknO1xuICB9KTtcbn0gLy8gR2V0cyB0aGUgbWF4aW11bSBhcmVhIHRoYXQgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZSBpbiBkdWUgdG8gYW55IG51bWJlciBvZlxuLy8gY2xpcHBpbmcgcGFyZW50c1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENsaXBwaW5nUmVjdChlbGVtZW50LCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5KSB7XG4gIHZhciBtYWluQ2xpcHBpbmdQYXJlbnRzID0gYm91bmRhcnkgPT09ICdjbGlwcGluZ1BhcmVudHMnID8gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIDogW10uY29uY2F0KGJvdW5kYXJ5KTtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IFtdLmNvbmNhdChtYWluQ2xpcHBpbmdQYXJlbnRzLCBbcm9vdEJvdW5kYXJ5XSk7XG4gIHZhciBmaXJzdENsaXBwaW5nUGFyZW50ID0gY2xpcHBpbmdQYXJlbnRzWzBdO1xuICB2YXIgY2xpcHBpbmdSZWN0ID0gY2xpcHBpbmdQYXJlbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjUmVjdCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgICB2YXIgcmVjdCA9IGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50KTtcbiAgICBhY2NSZWN0LnRvcCA9IG1heChyZWN0LnRvcCwgYWNjUmVjdC50b3ApO1xuICAgIGFjY1JlY3QucmlnaHQgPSBtaW4ocmVjdC5yaWdodCwgYWNjUmVjdC5yaWdodCk7XG4gICAgYWNjUmVjdC5ib3R0b20gPSBtaW4ocmVjdC5ib3R0b20sIGFjY1JlY3QuYm90dG9tKTtcbiAgICBhY2NSZWN0LmxlZnQgPSBtYXgocmVjdC5sZWZ0LCBhY2NSZWN0LmxlZnQpO1xuICAgIHJldHVybiBhY2NSZWN0O1xuICB9LCBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBmaXJzdENsaXBwaW5nUGFyZW50KSk7XG4gIGNsaXBwaW5nUmVjdC53aWR0aCA9IGNsaXBwaW5nUmVjdC5yaWdodCAtIGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QuaGVpZ2h0ID0gY2xpcHBpbmdSZWN0LmJvdHRvbSAtIGNsaXBwaW5nUmVjdC50b3A7XG4gIGNsaXBwaW5nUmVjdC54ID0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC55ID0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgcmV0dXJuIGNsaXBwaW5nUmVjdDtcbn0iLCJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldE5vZGVTY3JvbGwgZnJvbSBcIi4vZ2V0Tm9kZVNjcm9sbC5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiOyAvLyBSZXR1cm5zIHRoZSBjb21wb3NpdGUgcmVjdCBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBvZmZzZXRQYXJlbnQuXG4vLyBDb21wb3NpdGUgbWVhbnMgaXQgdGFrZXMgaW50byBhY2NvdW50IHRyYW5zZm9ybXMgYXMgd2VsbCBhcyBsYXlvdXQuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbXBvc2l0ZVJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudCwgaXNGaXhlZCkge1xuICBpZiAoaXNGaXhlZCA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50RWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCk7XG4gIHZhciBpc09mZnNldFBhcmVudEFuRWxlbWVudCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICB2YXIgb2Zmc2V0cyA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgfHwgIWlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ICYmICFpc0ZpeGVkKSB7XG4gICAgaWYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgIT09ICdib2R5JyB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEwNzhcbiAgICBpc1Njcm9sbFBhcmVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgb2Zmc2V0cyA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQpO1xuICAgICAgb2Zmc2V0cy54ICs9IG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgb2Zmc2V0cy55ICs9IG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IHJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gb2Zmc2V0cy54LFxuICAgIHk6IHJlY3QudG9wICsgc2Nyb2xsLnNjcm9sbFRvcCAtIG9mZnNldHMueSxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gIH07XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59IiwiaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICByZXR1cm4gKChpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50Lm93bmVyRG9jdW1lbnQgOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgZWxlbWVudC5kb2N1bWVudCkgfHwgd2luZG93LmRvY3VtZW50KS5kb2N1bWVudEVsZW1lbnQ7XG59IiwiaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5pbXBvcnQgeyBtYXggfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiOyAvLyBHZXRzIHRoZSBlbnRpcmUgc2l6ZSBvZiB0aGUgc2Nyb2xsYWJsZSBkb2N1bWVudCBhcmVhLCBldmVuIGV4dGVuZGluZyBvdXRzaWRlXG4vLyBvZiB0aGUgYDxodG1sPmAgYW5kIGA8Ym9keT5gIHJlY3QgYm91bmRzIGlmIGhvcml6b250YWxseSBzY3JvbGxhYmxlXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvY3VtZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB3aW5TY3JvbGwgPSBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCk7XG4gIHZhciBib2R5ID0gKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5O1xuICB2YXIgd2lkdGggPSBtYXgoaHRtbC5zY3JvbGxXaWR0aCwgaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuc2Nyb2xsV2lkdGggOiAwLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApO1xuICB2YXIgaGVpZ2h0ID0gbWF4KGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLmNsaWVudEhlaWdodCwgYm9keSA/IGJvZHkuc2Nyb2xsSGVpZ2h0IDogMCwgYm9keSA/IGJvZHkuY2xpZW50SGVpZ2h0IDogMCk7XG4gIHZhciB4ID0gLXdpblNjcm9sbC5zY3JvbGxMZWZ0ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KTtcbiAgdmFyIHkgPSAtd2luU2Nyb2xsLnNjcm9sbFRvcDtcblxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShib2R5IHx8IGh0bWwpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICB4ICs9IG1heChodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApIC0gd2lkdGg7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRIVE1MRWxlbWVudFNjcm9sbChlbGVtZW50KSB7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogZWxlbWVudC5zY3JvbGxUb3BcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiOyAvLyBSZXR1cm5zIHRoZSBsYXlvdXQgcmVjdCBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBvZmZzZXRQYXJlbnQuIExheW91dFxuLy8gbWVhbnMgaXQgZG9lc24ndCB0YWtlIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRMYXlvdXRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIGNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCk7IC8vIFVzZSB0aGUgY2xpZW50UmVjdCBzaXplcyBpZiBpdCdzIG5vdCBiZWVuIHRyYW5zZm9ybWVkLlxuICAvLyBGaXhlcyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEyMjNcblxuICB2YXIgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICB2YXIgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3Qud2lkdGggLSB3aWR0aCkgPD0gMSkge1xuICAgIHdpZHRoID0gY2xpZW50UmVjdC53aWR0aDtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LmhlaWdodCAtIGhlaWdodCkgPD0gMSkge1xuICAgIGhlaWdodCA9IGNsaWVudFJlY3QuaGVpZ2h0O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBlbGVtZW50Lm9mZnNldExlZnQsXG4gICAgeTogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Tm9kZU5hbWUoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudCA/IChlbGVtZW50Lm5vZGVOYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpIDogbnVsbDtcbn0iLCJpbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0SFRNTEVsZW1lbnRTY3JvbGwgZnJvbSBcIi4vZ2V0SFRNTEVsZW1lbnRTY3JvbGwuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE5vZGVTY3JvbGwobm9kZSkge1xuICBpZiAobm9kZSA9PT0gZ2V0V2luZG93KG5vZGUpIHx8ICFpc0hUTUxFbGVtZW50KG5vZGUpKSB7XG4gICAgcmV0dXJuIGdldFdpbmRvd1Njcm9sbChub2RlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0SFRNTEVsZW1lbnRTY3JvbGwobm9kZSk7XG4gIH1cbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IGlzVGFibGVFbGVtZW50IGZyb20gXCIuL2lzVGFibGVFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5cbmZ1bmN0aW9uIGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy84MzdcbiAgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xufSAvLyBgLm9mZnNldFBhcmVudGAgcmVwb3J0cyBgbnVsbGAgZm9yIGZpeGVkIGVsZW1lbnRzLCB3aGlsZSBhYnNvbHV0ZSBlbGVtZW50c1xuLy8gcmV0dXJuIHRoZSBjb250YWluaW5nIGJsb2NrXG5cblxuZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHtcbiAgdmFyIGlzRmlyZWZveCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgIT09IC0xO1xuICB2YXIgaXNJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudCcpICE9PSAtMTtcblxuICBpZiAoaXNJRSAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgLy8gSW4gSUUgOSwgMTAgYW5kIDExIGZpeGVkIGVsZW1lbnRzIGNvbnRhaW5pbmcgYmxvY2sgaXMgYWx3YXlzIGVzdGFibGlzaGVkIGJ5IHRoZSB2aWV3cG9ydFxuICAgIHZhciBlbGVtZW50Q3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcblxuICAgIGlmIChlbGVtZW50Q3NzLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICB2YXIgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuXG4gIHdoaWxlIChpc0hUTUxFbGVtZW50KGN1cnJlbnROb2RlKSAmJiBbJ2h0bWwnLCAnYm9keSddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoY3VycmVudE5vZGUpKSA8IDApIHtcbiAgICB2YXIgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50Tm9kZSk7IC8vIFRoaXMgaXMgbm9uLWV4aGF1c3RpdmUgYnV0IGNvdmVycyB0aGUgbW9zdCBjb21tb24gQ1NTIHByb3BlcnRpZXMgdGhhdFxuICAgIC8vIGNyZWF0ZSBhIGNvbnRhaW5pbmcgYmxvY2suXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcblxuICAgIGlmIChjc3MudHJhbnNmb3JtICE9PSAnbm9uZScgfHwgY3NzLnBlcnNwZWN0aXZlICE9PSAnbm9uZScgfHwgY3NzLmNvbnRhaW4gPT09ICdwYWludCcgfHwgWyd0cmFuc2Zvcm0nLCAncGVyc3BlY3RpdmUnXS5pbmRleE9mKGNzcy53aWxsQ2hhbmdlKSAhPT0gLTEgfHwgaXNGaXJlZm94ICYmIGNzcy53aWxsQ2hhbmdlID09PSAnZmlsdGVyJyB8fCBpc0ZpcmVmb3ggJiYgY3NzLmZpbHRlciAmJiBjc3MuZmlsdGVyICE9PSAnbm9uZScpIHtcbiAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufSAvLyBHZXRzIHRoZSBjbG9zZXN0IGFuY2VzdG9yIHBvc2l0aW9uZWQgZWxlbWVudC4gSGFuZGxlcyBzb21lIGVkZ2UgY2FzZXMsXG4vLyBzdWNoIGFzIHRhYmxlIGFuY2VzdG9ycyBhbmQgY3Jvc3MgYnJvd3NlciBidWdzLlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuXG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgaXNUYWJsZUVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xuICB9XG5cbiAgaWYgKG9mZnNldFBhcmVudCAmJiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2h0bWwnIHx8IGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdib2R5JyAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB8fCB3aW5kb3c7XG59IiwiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IHsgaXNTaGFkb3dSb290IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSB7XG4gIGlmIChnZXROb2RlTmFtZShlbGVtZW50KSA9PT0gJ2h0bWwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gKC8vIHRoaXMgaXMgYSBxdWlja2VyIChidXQgbGVzcyB0eXBlIHNhZmUpIHdheSB0byBzYXZlIHF1aXRlIHNvbWUgYnl0ZXMgZnJvbSB0aGUgYnVuZGxlXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXVxuICAgIC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgIGVsZW1lbnQuYXNzaWduZWRTbG90IHx8IC8vIHN0ZXAgaW50byB0aGUgc2hhZG93IERPTSBvZiB0aGUgcGFyZW50IG9mIGEgc2xvdHRlZCBub2RlXG4gICAgZWxlbWVudC5wYXJlbnROb2RlIHx8ICggLy8gRE9NIEVsZW1lbnQgZGV0ZWN0ZWRcbiAgICBpc1NoYWRvd1Jvb3QoZWxlbWVudCkgPyBlbGVtZW50Lmhvc3QgOiBudWxsKSB8fCAvLyBTaGFkb3dSb290IGRldGVjdGVkXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IEhUTUxFbGVtZW50IGlzIGEgTm9kZVxuICAgIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSAvLyBmYWxsYmFja1xuXG4gICk7XG59IiwiaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQobm9kZSkge1xuICBpZiAoWydodG1sJywgJ2JvZHknLCAnI2RvY3VtZW50J10uaW5kZXhPZihnZXROb2RlTmFtZShub2RlKSkgPj0gMCkge1xuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XG4gIH1cblxuICBpZiAoaXNIVE1MRWxlbWVudChub2RlKSAmJiBpc1Njcm9sbFBhcmVudChub2RlKSkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKG5vZGUpKTtcbn0iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZpZXdwb3J0UmVjdChlbGVtZW50KSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgdmlzdWFsVmlld3BvcnQgPSB3aW4udmlzdWFsVmlld3BvcnQ7XG4gIHZhciB3aWR0aCA9IGh0bWwuY2xpZW50V2lkdGg7XG4gIHZhciBoZWlnaHQgPSBodG1sLmNsaWVudEhlaWdodDtcbiAgdmFyIHggPSAwO1xuICB2YXIgeSA9IDA7IC8vIE5COiBUaGlzIGlzbid0IHN1cHBvcnRlZCBvbiBpT1MgPD0gMTIuIElmIHRoZSBrZXlib2FyZCBpcyBvcGVuLCB0aGUgcG9wcGVyXG4gIC8vIGNhbiBiZSBvYnNjdXJlZCB1bmRlcm5lYXRoIGl0LlxuICAvLyBBbHNvLCBgaHRtbC5jbGllbnRIZWlnaHRgIGFkZHMgdGhlIGJvdHRvbSBiYXIgaGVpZ2h0IGluIFNhZmFyaSBpT1MsIGV2ZW5cbiAgLy8gaWYgaXQgaXNuJ3Qgb3Blbiwgc28gaWYgdGhpcyBpc24ndCBhdmFpbGFibGUsIHRoZSBwb3BwZXIgd2lsbCBiZSBkZXRlY3RlZFxuICAvLyB0byBvdmVyZmxvdyB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4gdG9vIGVhcmx5LlxuXG4gIGlmICh2aXN1YWxWaWV3cG9ydCkge1xuICAgIHdpZHRoID0gdmlzdWFsVmlld3BvcnQud2lkdGg7XG4gICAgaGVpZ2h0ID0gdmlzdWFsVmlld3BvcnQuaGVpZ2h0OyAvLyBVc2VzIExheW91dCBWaWV3cG9ydCAobGlrZSBDaHJvbWU7IFNhZmFyaSBkb2VzIG5vdCBjdXJyZW50bHkpXG4gICAgLy8gSW4gQ2hyb21lLCBpdCByZXR1cm5zIGEgdmFsdWUgdmVyeSBjbG9zZSB0byAwICgrLy0pIGJ1dCBjb250YWlucyByb3VuZGluZ1xuICAgIC8vIGVycm9ycyBkdWUgdG8gZmxvYXRpbmcgcG9pbnQgbnVtYmVycywgc28gd2UgbmVlZCB0byBjaGVjayBwcmVjaXNpb24uXG4gICAgLy8gU2FmYXJpIHJldHVybnMgYSBudW1iZXIgPD0gMCwgdXN1YWxseSA8IC0xIHdoZW4gcGluY2gtem9vbWVkXG4gICAgLy8gRmVhdHVyZSBkZXRlY3Rpb24gZmFpbHMgaW4gbW9iaWxlIGVtdWxhdGlvbiBtb2RlIGluIENocm9tZS5cbiAgICAvLyBNYXRoLmFicyh3aW4uaW5uZXJXaWR0aCAvIHZpc3VhbFZpZXdwb3J0LnNjYWxlIC0gdmlzdWFsVmlld3BvcnQud2lkdGgpIDxcbiAgICAvLyAwLjAwMVxuICAgIC8vIEZhbGxiYWNrIGhlcmU6IFwiTm90IFNhZmFyaVwiIHVzZXJBZ2VudFxuXG4gICAgaWYgKCEvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICB4ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdDtcbiAgICAgIHkgPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3A7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgeDogeCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCksXG4gICAgeTogeVxuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gIGlmIChub2RlID09IG51bGwpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgaWYgKG5vZGUudG9TdHJpbmcoKSAhPT0gJ1tvYmplY3QgV2luZG93XScpIHtcbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93IDogd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbChub2RlKSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3cobm9kZSk7XG4gIHZhciBzY3JvbGxMZWZ0ID0gd2luLnBhZ2VYT2Zmc2V0O1xuICB2YXIgc2Nyb2xsVG9wID0gd2luLnBhZ2VZT2Zmc2V0O1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IHNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wOiBzY3JvbGxUb3BcbiAgfTtcbn0iLCJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpIHtcbiAgLy8gSWYgPGh0bWw+IGhhcyBhIENTUyB3aWR0aCBncmVhdGVyIHRoYW4gdGhlIHZpZXdwb3J0LCB0aGVuIHRoaXMgd2lsbCBiZVxuICAvLyBpbmNvcnJlY3QgZm9yIFJUTC5cbiAgLy8gUG9wcGVyIDEgaXMgYnJva2VuIGluIHRoaXMgY2FzZSBhbmQgbmV2ZXIgaGFkIGEgYnVnIHJlcG9ydCBzbyBsZXQncyBhc3N1bWVcbiAgLy8gaXQncyBub3QgYW4gaXNzdWUuIEkgZG9uJ3QgdGhpbmsgYW55b25lIGV2ZXIgc3BlY2lmaWVzIHdpZHRoIG9uIDxodG1sPlxuICAvLyBhbnl3YXkuXG4gIC8vIEJyb3dzZXJzIHdoZXJlIHRoZSBsZWZ0IHNjcm9sbGJhciBkb2Vzbid0IGNhdXNlIGFuIGlzc3VlIHJlcG9ydCBgMGAgZm9yXG4gIC8vIHRoaXMgKGUuZy4gRWRnZSAyMDE5LCBJRTExLCBTYWZhcmkpXG4gIHJldHVybiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKS5sZWZ0ICsgZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpLnNjcm9sbExlZnQ7XG59IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcblxuZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc0hUTUxFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuSFRNTEVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzU2hhZG93Um9vdChub2RlKSB7XG4gIC8vIElFIDExIGhhcyBubyBTaGFkb3dSb290XG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5TaGFkb3dSb290O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q7XG59XG5cbmV4cG9ydCB7IGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCwgaXNTaGFkb3dSb290IH07IiwiaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICAvLyBGaXJlZm94IHdhbnRzIHVzIHRvIGNoZWNrIGAteGAgYW5kIGAteWAgdmFyaWF0aW9ucyBhcyB3ZWxsXG4gIHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCksXG4gICAgICBvdmVyZmxvdyA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93LFxuICAgICAgb3ZlcmZsb3dYID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dYLFxuICAgICAgb3ZlcmZsb3dZID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dZO1xuXG4gIHJldHVybiAvYXV0b3xzY3JvbGx8b3ZlcmxheXxoaWRkZW4vLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpO1xufSIsImltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUYWJsZUVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gWyd0YWJsZScsICd0ZCcsICd0aCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoZWxlbWVudCkpID49IDA7XG59IiwiaW1wb3J0IGdldFNjcm9sbFBhcmVudCBmcm9tIFwiLi9nZXRTY3JvbGxQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjtcbi8qXG5naXZlbiBhIERPTSBlbGVtZW50LCByZXR1cm4gdGhlIGxpc3Qgb2YgYWxsIHNjcm9sbCBwYXJlbnRzLCB1cCB0aGUgbGlzdCBvZiBhbmNlc29yc1xudW50aWwgd2UgZ2V0IHRvIHRoZSB0b3Agd2luZG93IG9iamVjdC4gVGhpcyBsaXN0IGlzIHdoYXQgd2UgYXR0YWNoIHNjcm9sbCBsaXN0ZW5lcnNcbnRvLCBiZWNhdXNlIGlmIGFueSBvZiB0aGVzZSBwYXJlbnQgZWxlbWVudHMgc2Nyb2xsLCB3ZSdsbCBuZWVkIHRvIHJlLWNhbGN1bGF0ZSB0aGVcbnJlZmVyZW5jZSBlbGVtZW50J3MgcG9zaXRpb24uXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0U2Nyb2xsUGFyZW50cyhlbGVtZW50LCBsaXN0KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgaWYgKGxpc3QgPT09IHZvaWQgMCkge1xuICAgIGxpc3QgPSBbXTtcbiAgfVxuXG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCk7XG4gIHZhciBpc0JvZHkgPSBzY3JvbGxQYXJlbnQgPT09ICgoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHkpO1xuICB2YXIgd2luID0gZ2V0V2luZG93KHNjcm9sbFBhcmVudCk7XG4gIHZhciB0YXJnZXQgPSBpc0JvZHkgPyBbd2luXS5jb25jYXQod2luLnZpc3VhbFZpZXdwb3J0IHx8IFtdLCBpc1Njcm9sbFBhcmVudChzY3JvbGxQYXJlbnQpID8gc2Nyb2xsUGFyZW50IDogW10pIDogc2Nyb2xsUGFyZW50O1xuICB2YXIgdXBkYXRlZExpc3QgPSBsaXN0LmNvbmNhdCh0YXJnZXQpO1xuICByZXR1cm4gaXNCb2R5ID8gdXBkYXRlZExpc3QgOiAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogaXNCb2R5IHRlbGxzIHVzIHRhcmdldCB3aWxsIGJlIGFuIEhUTUxFbGVtZW50IGhlcmVcbiAgdXBkYXRlZExpc3QuY29uY2F0KGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUodGFyZ2V0KSkpO1xufSIsImV4cG9ydCB2YXIgdG9wID0gJ3RvcCc7XG5leHBvcnQgdmFyIGJvdHRvbSA9ICdib3R0b20nO1xuZXhwb3J0IHZhciByaWdodCA9ICdyaWdodCc7XG5leHBvcnQgdmFyIGxlZnQgPSAnbGVmdCc7XG5leHBvcnQgdmFyIGF1dG8gPSAnYXV0byc7XG5leHBvcnQgdmFyIGJhc2VQbGFjZW1lbnRzID0gW3RvcCwgYm90dG9tLCByaWdodCwgbGVmdF07XG5leHBvcnQgdmFyIHN0YXJ0ID0gJ3N0YXJ0JztcbmV4cG9ydCB2YXIgZW5kID0gJ2VuZCc7XG5leHBvcnQgdmFyIGNsaXBwaW5nUGFyZW50cyA9ICdjbGlwcGluZ1BhcmVudHMnO1xuZXhwb3J0IHZhciB2aWV3cG9ydCA9ICd2aWV3cG9ydCc7XG5leHBvcnQgdmFyIHBvcHBlciA9ICdwb3BwZXInO1xuZXhwb3J0IHZhciByZWZlcmVuY2UgPSAncmVmZXJlbmNlJztcbmV4cG9ydCB2YXIgdmFyaWF0aW9uUGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9iYXNlUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pO1xuZXhwb3J0IHZhciBwbGFjZW1lbnRzID0gLyojX19QVVJFX18qL1tdLmNvbmNhdChiYXNlUGxhY2VtZW50cywgW2F1dG9dKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQsIHBsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG59LCBbXSk7IC8vIG1vZGlmaWVycyB0aGF0IG5lZWQgdG8gcmVhZCB0aGUgRE9NXG5cbmV4cG9ydCB2YXIgYmVmb3JlUmVhZCA9ICdiZWZvcmVSZWFkJztcbmV4cG9ydCB2YXIgcmVhZCA9ICdyZWFkJztcbmV4cG9ydCB2YXIgYWZ0ZXJSZWFkID0gJ2FmdGVyUmVhZCc7IC8vIHB1cmUtbG9naWMgbW9kaWZpZXJzXG5cbmV4cG9ydCB2YXIgYmVmb3JlTWFpbiA9ICdiZWZvcmVNYWluJztcbmV4cG9ydCB2YXIgbWFpbiA9ICdtYWluJztcbmV4cG9ydCB2YXIgYWZ0ZXJNYWluID0gJ2FmdGVyTWFpbic7IC8vIG1vZGlmaWVyIHdpdGggdGhlIHB1cnBvc2UgdG8gd3JpdGUgdG8gdGhlIERPTSAob3Igd3JpdGUgaW50byBhIGZyYW1ld29yayBzdGF0ZSlcblxuZXhwb3J0IHZhciBiZWZvcmVXcml0ZSA9ICdiZWZvcmVXcml0ZSc7XG5leHBvcnQgdmFyIHdyaXRlID0gJ3dyaXRlJztcbmV4cG9ydCB2YXIgYWZ0ZXJXcml0ZSA9ICdhZnRlcldyaXRlJztcbmV4cG9ydCB2YXIgbW9kaWZpZXJQaGFzZXMgPSBbYmVmb3JlUmVhZCwgcmVhZCwgYWZ0ZXJSZWFkLCBiZWZvcmVNYWluLCBtYWluLCBhZnRlck1haW4sIGJlZm9yZVdyaXRlLCB3cml0ZSwgYWZ0ZXJXcml0ZV07IiwiZXhwb3J0ICogZnJvbSBcIi4vZW51bXMuanNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL21vZGlmaWVycy9pbmRleC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IHBvcHBlckdlbmVyYXRvciwgZGV0ZWN0T3ZlcmZsb3csIGNyZWF0ZVBvcHBlciBhcyBjcmVhdGVQb3BwZXJCYXNlIH0gZnJvbSBcIi4vY3JlYXRlUG9wcGVyLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyIH0gZnJvbSBcIi4vcG9wcGVyLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IHsgY3JlYXRlUG9wcGVyIGFzIGNyZWF0ZVBvcHBlckxpdGUgfSBmcm9tIFwiLi9wb3BwZXItbGl0ZS5qc1wiOyIsImltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4uL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7IC8vIFRoaXMgbW9kaWZpZXIgdGFrZXMgdGhlIHN0eWxlcyBwcmVwYXJlZCBieSB0aGUgYGNvbXB1dGVTdHlsZXNgIG1vZGlmaWVyXG4vLyBhbmQgYXBwbGllcyB0aGVtIHRvIHRoZSBIVE1MRWxlbWVudHMgc3VjaCBhcyBwb3BwZXIgYW5kIGFycm93XG5cbmZ1bmN0aW9uIGFwcGx5U3R5bGVzKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZTtcbiAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgc3R5bGUgPSBzdGF0ZS5zdHlsZXNbbmFtZV0gfHwge307XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbbmFtZV07IC8vIGFycm93IGlzIG9wdGlvbmFsICsgdmlydHVhbCBlbGVtZW50c1xuXG4gICAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8ICFnZXROb2RlTmFtZShlbGVtZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gRmxvdyBkb2Vzbid0IHN1cHBvcnQgdG8gZXh0ZW5kIHRoaXMgcHJvcGVydHksIGJ1dCBpdCdzIHRoZSBtb3N0XG4gICAgLy8gZWZmZWN0aXZlIHdheSB0byBhcHBseSBzdHlsZXMgdG8gYW4gSFRNTEVsZW1lbnRcbiAgICAvLyAkRmxvd0ZpeE1lW2Nhbm5vdC13cml0ZV1cblxuXG4gICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIHZhbHVlID0gYXR0cmlidXRlc1tuYW1lXTtcblxuICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlID09PSB0cnVlID8gJycgOiB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGU7XG4gIHZhciBpbml0aWFsU3R5bGVzID0ge1xuICAgIHBvcHBlcjoge1xuICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICBsZWZ0OiAnMCcsXG4gICAgICB0b3A6ICcwJyxcbiAgICAgIG1hcmdpbjogJzAnXG4gICAgfSxcbiAgICBhcnJvdzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9LFxuICAgIHJlZmVyZW5jZToge31cbiAgfTtcbiAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5wb3BwZXIuc3R5bGUsIGluaXRpYWxTdHlsZXMucG9wcGVyKTtcbiAgc3RhdGUuc3R5bGVzID0gaW5pdGlhbFN0eWxlcztcblxuICBpZiAoc3RhdGUuZWxlbWVudHMuYXJyb3cpIHtcbiAgICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLmFycm93LnN0eWxlLCBpbml0aWFsU3R5bGVzLmFycm93KTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbbmFtZV07XG4gICAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgICB2YXIgc3R5bGVQcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMoc3RhdGUuc3R5bGVzLmhhc093blByb3BlcnR5KG5hbWUpID8gc3RhdGUuc3R5bGVzW25hbWVdIDogaW5pdGlhbFN0eWxlc1tuYW1lXSk7IC8vIFNldCBhbGwgdmFsdWVzIHRvIGFuIGVtcHR5IHN0cmluZyB0byB1bnNldCB0aGVtXG5cbiAgICAgIHZhciBzdHlsZSA9IHN0eWxlUHJvcGVydGllcy5yZWR1Y2UoZnVuY3Rpb24gKHN0eWxlLCBwcm9wZXJ0eSkge1xuICAgICAgICBzdHlsZVtwcm9wZXJ0eV0gPSAnJztcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgfSwge30pOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgICAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8ICFnZXROb2RlTmFtZShlbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICd3cml0ZScsXG4gIGZuOiBhcHBseVN0eWxlcyxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIHJlcXVpcmVzOiBbJ2NvbXB1dGVTdHlsZXMnXVxufTsiLCJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgY29udGFpbnMgZnJvbSBcIi4uL2RvbS11dGlscy9jb250YWlucy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgd2l0aGluIGZyb20gXCIuLi91dGlscy93aXRoaW4uanNcIjtcbmltcG9ydCBtZXJnZVBhZGRpbmdPYmplY3QgZnJvbSBcIi4uL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qc1wiO1xuaW1wb3J0IGV4cGFuZFRvSGFzaE1hcCBmcm9tIFwiLi4vdXRpbHMvZXhwYW5kVG9IYXNoTWFwLmpzXCI7XG5pbXBvcnQgeyBsZWZ0LCByaWdodCwgYmFzZVBsYWNlbWVudHMsIHRvcCwgYm90dG9tIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4uL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHRvUGFkZGluZ09iamVjdCA9IGZ1bmN0aW9uIHRvUGFkZGluZ09iamVjdChwYWRkaW5nLCBzdGF0ZSkge1xuICBwYWRkaW5nID0gdHlwZW9mIHBhZGRpbmcgPT09ICdmdW5jdGlvbicgPyBwYWRkaW5nKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogcGFkZGluZztcbiAgcmV0dXJuIG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG59O1xuXG5mdW5jdGlvbiBhcnJvdyhfcmVmKSB7XG4gIHZhciBfc3RhdGUkbW9kaWZpZXJzRGF0YSQ7XG5cbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIGF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBpc1ZlcnRpY2FsID0gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDA7XG4gIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gIGlmICghYXJyb3dFbGVtZW50IHx8ICFwb3BwZXJPZmZzZXRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHBhZGRpbmdPYmplY3QgPSB0b1BhZGRpbmdPYmplY3Qob3B0aW9ucy5wYWRkaW5nLCBzdGF0ZSk7XG4gIHZhciBhcnJvd1JlY3QgPSBnZXRMYXlvdXRSZWN0KGFycm93RWxlbWVudCk7XG4gIHZhciBtaW5Qcm9wID0gYXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgdmFyIG1heFByb3AgPSBheGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgdmFyIGVuZERpZmYgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbbGVuXSArIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXSAtIHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5wb3BwZXJbbGVuXTtcbiAgdmFyIHN0YXJ0RGlmZiA9IHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc107XG4gIHZhciBhcnJvd09mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChhcnJvd0VsZW1lbnQpO1xuICB2YXIgY2xpZW50U2l6ZSA9IGFycm93T2Zmc2V0UGFyZW50ID8gYXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0IHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRXaWR0aCB8fCAwIDogMDtcbiAgdmFyIGNlbnRlclRvUmVmZXJlbmNlID0gZW5kRGlmZiAvIDIgLSBzdGFydERpZmYgLyAyOyAvLyBNYWtlIHN1cmUgdGhlIGFycm93IGRvZXNuJ3Qgb3ZlcmZsb3cgdGhlIHBvcHBlciBpZiB0aGUgY2VudGVyIHBvaW50IGlzXG4gIC8vIG91dHNpZGUgb2YgdGhlIHBvcHBlciBib3VuZHNcblxuICB2YXIgbWluID0gcGFkZGluZ09iamVjdFttaW5Qcm9wXTtcbiAgdmFyIG1heCA9IGNsaWVudFNpemUgLSBhcnJvd1JlY3RbbGVuXSAtIHBhZGRpbmdPYmplY3RbbWF4UHJvcF07XG4gIHZhciBjZW50ZXIgPSBjbGllbnRTaXplIC8gMiAtIGFycm93UmVjdFtsZW5dIC8gMiArIGNlbnRlclRvUmVmZXJlbmNlO1xuICB2YXIgb2Zmc2V0ID0gd2l0aGluKG1pbiwgY2VudGVyLCBtYXgpOyAvLyBQcmV2ZW50cyBicmVha2luZyBzeW50YXggaGlnaGxpZ2h0aW5nLi4uXG5cbiAgdmFyIGF4aXNQcm9wID0gYXhpcztcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IChfc3RhdGUkbW9kaWZpZXJzRGF0YSQgPSB7fSwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkW2F4aXNQcm9wXSA9IG9mZnNldCwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkLmNlbnRlck9mZnNldCA9IG9mZnNldCAtIGNlbnRlciwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkKTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRlbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50LFxuICAgICAgYXJyb3dFbGVtZW50ID0gX29wdGlvbnMkZWxlbWVudCA9PT0gdm9pZCAwID8gJ1tkYXRhLXBvcHBlci1hcnJvd10nIDogX29wdGlvbnMkZWxlbWVudDtcblxuICBpZiAoYXJyb3dFbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gQ1NTIHNlbGVjdG9yXG5cblxuICBpZiAodHlwZW9mIGFycm93RWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5wb3BwZXIucXVlcnlTZWxlY3RvcihhcnJvd0VsZW1lbnQpO1xuXG4gICAgaWYgKCFhcnJvd0VsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKCFpc0hUTUxFbGVtZW50KGFycm93RWxlbWVudCkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFwiYXJyb3dcIiBlbGVtZW50IG11c3QgYmUgYW4gSFRNTEVsZW1lbnQgKG5vdCBhbiBTVkdFbGVtZW50KS4nLCAnVG8gdXNlIGFuIFNWRyBhcnJvdywgd3JhcCBpdCBpbiBhbiBIVE1MRWxlbWVudCB0aGF0IHdpbGwgYmUgdXNlZCBhcycsICd0aGUgYXJyb3cuJ10uam9pbignICcpKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbnRhaW5zKHN0YXRlLmVsZW1lbnRzLnBvcHBlciwgYXJyb3dFbGVtZW50KSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFwiYXJyb3dcIiBtb2RpZmllclxcJ3MgYGVsZW1lbnRgIG11c3QgYmUgYSBjaGlsZCBvZiB0aGUgcG9wcGVyJywgJ2VsZW1lbnQuJ10uam9pbignICcpKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBzdGF0ZS5lbGVtZW50cy5hcnJvdyA9IGFycm93RWxlbWVudDtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2Fycm93JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IGFycm93LFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddXG59OyIsImltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50RWxlbWVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgcm91bmQgfSBmcm9tIFwiLi4vdXRpbHMvbWF0aC5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciB1bnNldFNpZGVzID0ge1xuICB0b3A6ICdhdXRvJyxcbiAgcmlnaHQ6ICdhdXRvJyxcbiAgYm90dG9tOiAnYXV0bycsXG4gIGxlZnQ6ICdhdXRvJ1xufTsgLy8gUm91bmQgdGhlIG9mZnNldHMgdG8gdGhlIG5lYXJlc3Qgc3VpdGFibGUgc3VicGl4ZWwgYmFzZWQgb24gdGhlIERQUi5cbi8vIFpvb21pbmcgY2FuIGNoYW5nZSB0aGUgRFBSLCBidXQgaXQgc2VlbXMgdG8gcmVwb3J0IGEgdmFsdWUgdGhhdCB3aWxsXG4vLyBjbGVhbmx5IGRpdmlkZSB0aGUgdmFsdWVzIGludG8gdGhlIGFwcHJvcHJpYXRlIHN1YnBpeGVscy5cblxuZnVuY3Rpb24gcm91bmRPZmZzZXRzQnlEUFIoX3JlZikge1xuICB2YXIgeCA9IF9yZWYueCxcbiAgICAgIHkgPSBfcmVmLnk7XG4gIHZhciB3aW4gPSB3aW5kb3c7XG4gIHZhciBkcHIgPSB3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICByZXR1cm4ge1xuICAgIHg6IHJvdW5kKHJvdW5kKHggKiBkcHIpIC8gZHByKSB8fCAwLFxuICAgIHk6IHJvdW5kKHJvdW5kKHkgKiBkcHIpIC8gZHByKSB8fCAwXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBUb1N0eWxlcyhfcmVmMikge1xuICB2YXIgX09iamVjdCRhc3NpZ24yO1xuXG4gIHZhciBwb3BwZXIgPSBfcmVmMi5wb3BwZXIsXG4gICAgICBwb3BwZXJSZWN0ID0gX3JlZjIucG9wcGVyUmVjdCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYyLnBsYWNlbWVudCxcbiAgICAgIG9mZnNldHMgPSBfcmVmMi5vZmZzZXRzLFxuICAgICAgcG9zaXRpb24gPSBfcmVmMi5wb3NpdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9yZWYyLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGFkYXB0aXZlID0gX3JlZjIuYWRhcHRpdmUsXG4gICAgICByb3VuZE9mZnNldHMgPSBfcmVmMi5yb3VuZE9mZnNldHM7XG5cbiAgdmFyIF9yZWYzID0gcm91bmRPZmZzZXRzID09PSB0cnVlID8gcm91bmRPZmZzZXRzQnlEUFIob2Zmc2V0cykgOiB0eXBlb2Ygcm91bmRPZmZzZXRzID09PSAnZnVuY3Rpb24nID8gcm91bmRPZmZzZXRzKG9mZnNldHMpIDogb2Zmc2V0cyxcbiAgICAgIF9yZWYzJHggPSBfcmVmMy54LFxuICAgICAgeCA9IF9yZWYzJHggPT09IHZvaWQgMCA/IDAgOiBfcmVmMyR4LFxuICAgICAgX3JlZjMkeSA9IF9yZWYzLnksXG4gICAgICB5ID0gX3JlZjMkeSA9PT0gdm9pZCAwID8gMCA6IF9yZWYzJHk7XG5cbiAgdmFyIGhhc1ggPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd4Jyk7XG4gIHZhciBoYXNZID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneScpO1xuICB2YXIgc2lkZVggPSBsZWZ0O1xuICB2YXIgc2lkZVkgPSB0b3A7XG4gIHZhciB3aW4gPSB3aW5kb3c7XG5cbiAgaWYgKGFkYXB0aXZlKSB7XG4gICAgdmFyIG9mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChwb3BwZXIpO1xuICAgIHZhciBoZWlnaHRQcm9wID0gJ2NsaWVudEhlaWdodCc7XG4gICAgdmFyIHdpZHRoUHJvcCA9ICdjbGllbnRXaWR0aCc7XG5cbiAgICBpZiAob2Zmc2V0UGFyZW50ID09PSBnZXRXaW5kb3cocG9wcGVyKSkge1xuICAgICAgb2Zmc2V0UGFyZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KHBvcHBlcik7XG5cbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gIT09ICdzdGF0aWMnKSB7XG4gICAgICAgIGhlaWdodFByb3AgPSAnc2Nyb2xsSGVpZ2h0JztcbiAgICAgICAgd2lkdGhQcm9wID0gJ3Njcm9sbFdpZHRoJztcbiAgICAgIH1cbiAgICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhc3RdOiBmb3JjZSB0eXBlIHJlZmluZW1lbnQsIHdlIGNvbXBhcmUgb2Zmc2V0UGFyZW50IHdpdGggd2luZG93IGFib3ZlLCBidXQgRmxvdyBkb2Vzbid0IGRldGVjdCBpdFxuXG5cbiAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQ7XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSB0b3ApIHtcbiAgICAgIHNpZGVZID0gYm90dG9tOyAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cblxuICAgICAgeSAtPSBvZmZzZXRQYXJlbnRbaGVpZ2h0UHJvcF0gLSBwb3BwZXJSZWN0LmhlaWdodDtcbiAgICAgIHkgKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgIH1cblxuICAgIGlmIChwbGFjZW1lbnQgPT09IGxlZnQpIHtcbiAgICAgIHNpZGVYID0gcmlnaHQ7IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuXG4gICAgICB4IC09IG9mZnNldFBhcmVudFt3aWR0aFByb3BdIC0gcG9wcGVyUmVjdC53aWR0aDtcbiAgICAgIHggKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb21tb25TdHlsZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBwb3NpdGlvbjogcG9zaXRpb25cbiAgfSwgYWRhcHRpdmUgJiYgdW5zZXRTaWRlcyk7XG5cbiAgaWYgKGdwdUFjY2VsZXJhdGlvbikge1xuICAgIHZhciBfT2JqZWN0JGFzc2lnbjtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbiA9IHt9LCBfT2JqZWN0JGFzc2lnbltzaWRlWV0gPSBoYXNZID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduW3NpZGVYXSA9IGhhc1ggPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ24udHJhbnNmb3JtID0gKHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpIDwgMiA/IFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpXCIgOiBcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgsIDApXCIsIF9PYmplY3QkYXNzaWduKSk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24yID0ge30sIF9PYmplY3QkYXNzaWduMltzaWRlWV0gPSBoYXNZID8geSArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjJbc2lkZVhdID0gaGFzWCA/IHggKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yLnRyYW5zZm9ybSA9ICcnLCBfT2JqZWN0JGFzc2lnbjIpKTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZVN0eWxlcyhfcmVmNCkge1xuICB2YXIgc3RhdGUgPSBfcmVmNC5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmNC5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID0gb3B0aW9ucy5ncHVBY2NlbGVyYXRpb24sXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRncHVBY2NlbGVyYXQsXG4gICAgICBfb3B0aW9ucyRhZGFwdGl2ZSA9IG9wdGlvbnMuYWRhcHRpdmUsXG4gICAgICBhZGFwdGl2ZSA9IF9vcHRpb25zJGFkYXB0aXZlID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWRhcHRpdmUsXG4gICAgICBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPSBvcHRpb25zLnJvdW5kT2Zmc2V0cyxcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJvdW5kT2Zmc2V0cztcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdmFyIHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldENvbXB1dGVkU3R5bGUoc3RhdGUuZWxlbWVudHMucG9wcGVyKS50cmFuc2l0aW9uUHJvcGVydHkgfHwgJyc7XG5cbiAgICBpZiAoYWRhcHRpdmUgJiYgWyd0cmFuc2Zvcm0nLCAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10uc29tZShmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgIHJldHVybiB0cmFuc2l0aW9uUHJvcGVydHkuaW5kZXhPZihwcm9wZXJ0eSkgPj0gMDtcbiAgICB9KSkge1xuICAgICAgY29uc29sZS53YXJuKFsnUG9wcGVyOiBEZXRlY3RlZCBDU1MgdHJhbnNpdGlvbnMgb24gYXQgbGVhc3Qgb25lIG9mIHRoZSBmb2xsb3dpbmcnLCAnQ1NTIHByb3BlcnRpZXM6IFwidHJhbnNmb3JtXCIsIFwidG9wXCIsIFwicmlnaHRcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIuJywgJ1xcblxcbicsICdEaXNhYmxlIHRoZSBcImNvbXB1dGVTdHlsZXNcIiBtb2RpZmllclxcJ3MgYGFkYXB0aXZlYCBvcHRpb24gdG8gYWxsb3cnLCAnZm9yIHNtb290aCB0cmFuc2l0aW9ucywgb3IgcmVtb3ZlIHRoZXNlIHByb3BlcnRpZXMgZnJvbSB0aGUgQ1NTJywgJ3RyYW5zaXRpb24gZGVjbGFyYXRpb24gb24gdGhlIHBvcHBlciBlbGVtZW50IGlmIG9ubHkgdHJhbnNpdGlvbmluZycsICdvcGFjaXR5IG9yIGJhY2tncm91bmQtY29sb3IgZm9yIGV4YW1wbGUuJywgJ1xcblxcbicsICdXZSByZWNvbW1lbmQgdXNpbmcgdGhlIHBvcHBlciBlbGVtZW50IGFzIGEgd3JhcHBlciBhcm91bmQgYW4gaW5uZXInLCAnZWxlbWVudCB0aGF0IGNhbiBoYXZlIGFueSBDU1MgcHJvcGVydHkgdHJhbnNpdGlvbmVkIGZvciBhbmltYXRpb25zLiddLmpvaW4oJyAnKSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbW1vblN0eWxlcyA9IHtcbiAgICBwbGFjZW1lbnQ6IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KSxcbiAgICBwb3BwZXI6IHN0YXRlLmVsZW1lbnRzLnBvcHBlcixcbiAgICBwb3BwZXJSZWN0OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgZ3B1QWNjZWxlcmF0aW9uOiBncHVBY2NlbGVyYXRpb25cbiAgfTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLnBvcHBlciwgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMsXG4gICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgIGFkYXB0aXZlOiBhZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgfSkpKTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93ICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMuYXJyb3cgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMuYXJyb3csIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYWRhcHRpdmU6IGZhbHNlLFxuICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG5cbiAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICdkYXRhLXBvcHBlci1wbGFjZW1lbnQnOiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdjb21wdXRlU3R5bGVzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdiZWZvcmVXcml0ZScsXG4gIGZuOiBjb21wdXRlU3R5bGVzLFxuICBkYXRhOiB7fVxufTsiLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0V2luZG93LmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIHBhc3NpdmUgPSB7XG4gIHBhc3NpdmU6IHRydWVcbn07XG5cbmZ1bmN0aW9uIGVmZmVjdChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2UsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwsXG4gICAgICBzY3JvbGwgPSBfb3B0aW9ucyRzY3JvbGwgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRzY3JvbGwsXG4gICAgICBfb3B0aW9ucyRyZXNpemUgPSBvcHRpb25zLnJlc2l6ZSxcbiAgICAgIHJlc2l6ZSA9IF9vcHRpb25zJHJlc2l6ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJlc2l6ZTtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIpO1xuICB2YXIgc2Nyb2xsUGFyZW50cyA9IFtdLmNvbmNhdChzdGF0ZS5zY3JvbGxQYXJlbnRzLnJlZmVyZW5jZSwgc3RhdGUuc2Nyb2xsUGFyZW50cy5wb3BwZXIpO1xuXG4gIGlmIChzY3JvbGwpIHtcbiAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgc2Nyb2xsUGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAocmVzaXplKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICAgIHNjcm9sbFBhcmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlc2l6ZSkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfVxuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnZXZlbnRMaXN0ZW5lcnMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46IGZ1bmN0aW9uIGZuKCkge30sXG4gIGVmZmVjdDogZWZmZWN0LFxuICBkYXRhOiB7fVxufTsiLCJpbXBvcnQgZ2V0T3Bwb3NpdGVQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVBdXRvUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgYm90dG9tLCB0b3AsIHN0YXJ0LCByaWdodCwgbGVmdCwgYXV0byB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZnVuY3Rpb24gZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocGxhY2VtZW50KSB7XG4gIGlmIChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgb3Bwb3NpdGVQbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICByZXR1cm4gW2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCksIG9wcG9zaXRlUGxhY2VtZW50LCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChvcHBvc2l0ZVBsYWNlbWVudCldO1xufVxuXG5mdW5jdGlvbiBmbGlwKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzID0gb3B0aW9ucy5mYWxsYmFja1BsYWNlbWVudHMsXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPSBvcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRmbGlwVmFyaWF0aW8sXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBvcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cztcbiAgdmFyIHByZWZlcnJlZFBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KTtcbiAgdmFyIGlzQmFzZVBsYWNlbWVudCA9IGJhc2VQbGFjZW1lbnQgPT09IHByZWZlcnJlZFBsYWNlbWVudDtcbiAgdmFyIGZhbGxiYWNrUGxhY2VtZW50cyA9IHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyB8fCAoaXNCYXNlUGxhY2VtZW50IHx8ICFmbGlwVmFyaWF0aW9ucyA/IFtnZXRPcHBvc2l0ZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpXSA6IGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHByZWZlcnJlZFBsYWNlbWVudCkpO1xuICB2YXIgcGxhY2VtZW50cyA9IFtwcmVmZXJyZWRQbGFjZW1lbnRdLmNvbmNhdChmYWxsYmFja1BsYWNlbWVudHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8gPyBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9uczogZmxpcFZhcmlhdGlvbnMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHM6IGFsbG93ZWRBdXRvUGxhY2VtZW50c1xuICAgIH0pIDogcGxhY2VtZW50KTtcbiAgfSwgW10pO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBjaGVja3NNYXAgPSBuZXcgTWFwKCk7XG4gIHZhciBtYWtlRmFsbGJhY2tDaGVja3MgPSB0cnVlO1xuICB2YXIgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50c1swXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBsYWNlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGxhY2VtZW50ID0gcGxhY2VtZW50c1tpXTtcblxuICAgIHZhciBfYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcblxuICAgIHZhciBpc1N0YXJ0VmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHN0YXJ0O1xuICAgIHZhciBpc1ZlcnRpY2FsID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKF9iYXNlUGxhY2VtZW50KSA+PSAwO1xuICAgIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuICAgIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pO1xuICAgIHZhciBtYWluVmFyaWF0aW9uU2lkZSA9IGlzVmVydGljYWwgPyBpc1N0YXJ0VmFyaWF0aW9uID8gcmlnaHQgOiBsZWZ0IDogaXNTdGFydFZhcmlhdGlvbiA/IGJvdHRvbSA6IHRvcDtcblxuICAgIGlmIChyZWZlcmVuY2VSZWN0W2xlbl0gPiBwb3BwZXJSZWN0W2xlbl0pIHtcbiAgICAgIG1haW5WYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIH1cblxuICAgIHZhciBhbHRWYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIHZhciBjaGVja3MgPSBbXTtcblxuICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1tfYmFzZVBsYWNlbWVudF0gPD0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbbWFpblZhcmlhdGlvblNpZGVdIDw9IDAsIG92ZXJmbG93W2FsdFZhcmlhdGlvblNpZGVdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja3MuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICByZXR1cm4gY2hlY2s7XG4gICAgfSkpIHtcbiAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICAgIG1ha2VGYWxsYmFja0NoZWNrcyA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2hlY2tzTWFwLnNldChwbGFjZW1lbnQsIGNoZWNrcyk7XG4gIH1cblxuICBpZiAobWFrZUZhbGxiYWNrQ2hlY2tzKSB7XG4gICAgLy8gYDJgIG1heSBiZSBkZXNpcmVkIGluIHNvbWUgY2FzZXMg4oCTIHJlc2VhcmNoIGxhdGVyXG4gICAgdmFyIG51bWJlck9mQ2hlY2tzID0gZmxpcFZhcmlhdGlvbnMgPyAzIDogMTtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKF9pKSB7XG4gICAgICB2YXIgZml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHMuZmluZChmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgICAgIHZhciBjaGVja3MgPSBjaGVja3NNYXAuZ2V0KHBsYWNlbWVudCk7XG5cbiAgICAgICAgaWYgKGNoZWNrcykge1xuICAgICAgICAgIHJldHVybiBjaGVja3Muc2xpY2UoMCwgX2kpLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gZml0dGluZ1BsYWNlbWVudDtcbiAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9yICh2YXIgX2kgPSBudW1iZXJPZkNoZWNrczsgX2kgPiAwOyBfaS0tKSB7XG4gICAgICB2YXIgX3JldCA9IF9sb29wKF9pKTtcblxuICAgICAgaWYgKF9yZXQgPT09IFwiYnJlYWtcIikgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLnBsYWNlbWVudCAhPT0gZmlyc3RGaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCA9IHRydWU7XG4gICAgc3RhdGUucGxhY2VtZW50ID0gZmlyc3RGaXR0aW5nUGxhY2VtZW50O1xuICAgIHN0YXRlLnJlc2V0ID0gdHJ1ZTtcbiAgfVxufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnZmxpcCcsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBmbGlwLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddLFxuICBkYXRhOiB7XG4gICAgX3NraXA6IGZhbHNlXG4gIH1cbn07IiwiaW1wb3J0IHsgdG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5cbmZ1bmN0aW9uIGdldFNpZGVPZmZzZXRzKG92ZXJmbG93LCByZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKSB7XG4gIGlmIChwcmV2ZW50ZWRPZmZzZXRzID09PSB2b2lkIDApIHtcbiAgICBwcmV2ZW50ZWRPZmZzZXRzID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0b3A6IG92ZXJmbG93LnRvcCAtIHJlY3QuaGVpZ2h0IC0gcHJldmVudGVkT2Zmc2V0cy55LFxuICAgIHJpZ2h0OiBvdmVyZmxvdy5yaWdodCAtIHJlY3Qud2lkdGggKyBwcmV2ZW50ZWRPZmZzZXRzLngsXG4gICAgYm90dG9tOiBvdmVyZmxvdy5ib3R0b20gLSByZWN0LmhlaWdodCArIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICBsZWZ0OiBvdmVyZmxvdy5sZWZ0IC0gcmVjdC53aWR0aCAtIHByZXZlbnRlZE9mZnNldHMueFxuICB9O1xufVxuXG5mdW5jdGlvbiBpc0FueVNpZGVGdWxseUNsaXBwZWQob3ZlcmZsb3cpIHtcbiAgcmV0dXJuIFt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRdLnNvbWUoZnVuY3Rpb24gKHNpZGUpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dbc2lkZV0gPj0gMDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhpZGUoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgcHJldmVudGVkT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucHJldmVudE92ZXJmbG93O1xuICB2YXIgcmVmZXJlbmNlT3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGVsZW1lbnRDb250ZXh0OiAncmVmZXJlbmNlJ1xuICB9KTtcbiAgdmFyIHBvcHBlckFsdE92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBhbHRCb3VuZGFyeTogdHJ1ZVxuICB9KTtcbiAgdmFyIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHJlZmVyZW5jZU92ZXJmbG93LCByZWZlcmVuY2VSZWN0KTtcbiAgdmFyIHBvcHBlckVzY2FwZU9mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhwb3BwZXJBbHRPdmVyZmxvdywgcG9wcGVyUmVjdCwgcHJldmVudGVkT2Zmc2V0cyk7XG4gIHZhciBpc1JlZmVyZW5jZUhpZGRlbiA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChyZWZlcmVuY2VDbGlwcGluZ09mZnNldHMpO1xuICB2YXIgaGFzUG9wcGVyRXNjYXBlZCA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChwb3BwZXJFc2NhcGVPZmZzZXRzKTtcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IHtcbiAgICByZWZlcmVuY2VDbGlwcGluZ09mZnNldHM6IHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyxcbiAgICBwb3BwZXJFc2NhcGVPZmZzZXRzOiBwb3BwZXJFc2NhcGVPZmZzZXRzLFxuICAgIGlzUmVmZXJlbmNlSGlkZGVuOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICBoYXNQb3BwZXJFc2NhcGVkOiBoYXNQb3BwZXJFc2NhcGVkXG4gIH07XG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAnZGF0YS1wb3BwZXItcmVmZXJlbmNlLWhpZGRlbic6IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgICdkYXRhLXBvcHBlci1lc2NhcGVkJzogaGFzUG9wcGVyRXNjYXBlZFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2hpZGUnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddLFxuICBmbjogaGlkZVxufTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGFwcGx5U3R5bGVzIH0gZnJvbSBcIi4vYXBwbHlTdHlsZXMuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXJyb3cgfSBmcm9tIFwiLi9hcnJvdy5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21wdXRlU3R5bGVzIH0gZnJvbSBcIi4vY29tcHV0ZVN0eWxlcy5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBldmVudExpc3RlbmVycyB9IGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGZsaXAgfSBmcm9tIFwiLi9mbGlwLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGhpZGUgfSBmcm9tIFwiLi9oaWRlLmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG9mZnNldCB9IGZyb20gXCIuL29mZnNldC5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwb3BwZXJPZmZzZXRzIH0gZnJvbSBcIi4vcG9wcGVyT2Zmc2V0cy5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwcmV2ZW50T3ZlcmZsb3cgfSBmcm9tIFwiLi9wcmV2ZW50T3ZlcmZsb3cuanNcIjsiLCJpbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgcGxhY2VtZW50cyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgcmVjdHMsIG9mZnNldCkge1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgdmFyIGludmVydERpc3RhbmNlID0gW2xlZnQsIHRvcF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8gLTEgOiAxO1xuXG4gIHZhciBfcmVmID0gdHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IG9mZnNldChPYmplY3QuYXNzaWduKHt9LCByZWN0cywge1xuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pKSA6IG9mZnNldCxcbiAgICAgIHNraWRkaW5nID0gX3JlZlswXSxcbiAgICAgIGRpc3RhbmNlID0gX3JlZlsxXTtcblxuICBza2lkZGluZyA9IHNraWRkaW5nIHx8IDA7XG4gIGRpc3RhbmNlID0gKGRpc3RhbmNlIHx8IDApICogaW52ZXJ0RGlzdGFuY2U7XG4gIHJldHVybiBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IHtcbiAgICB4OiBkaXN0YW5jZSxcbiAgICB5OiBza2lkZGluZ1xuICB9IDoge1xuICAgIHg6IHNraWRkaW5nLFxuICAgIHk6IGRpc3RhbmNlXG4gIH07XG59XG5cbmZ1bmN0aW9uIG9mZnNldChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYyLm5hbWU7XG4gIHZhciBfb3B0aW9ucyRvZmZzZXQgPSBvcHRpb25zLm9mZnNldCxcbiAgICAgIG9mZnNldCA9IF9vcHRpb25zJG9mZnNldCA9PT0gdm9pZCAwID8gWzAsIDBdIDogX29wdGlvbnMkb2Zmc2V0O1xuICB2YXIgZGF0YSA9IHBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCBzdGF0ZS5yZWN0cywgb2Zmc2V0KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHZhciBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQgPSBkYXRhW3N0YXRlLnBsYWNlbWVudF0sXG4gICAgICB4ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50LngsXG4gICAgICB5ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50Lnk7XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnggKz0geDtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueSArPSB5O1xuICB9XG5cbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdvZmZzZXQnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gIGZuOiBvZmZzZXRcbn07IiwiaW1wb3J0IGNvbXB1dGVPZmZzZXRzIGZyb20gXCIuLi91dGlscy9jb21wdXRlT2Zmc2V0cy5qc1wiO1xuXG5mdW5jdGlvbiBwb3BwZXJPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIC8vIE9mZnNldHMgYXJlIHRoZSBhY3R1YWwgcG9zaXRpb24gdGhlIHBvcHBlciBuZWVkcyB0byBoYXZlIHRvIGJlXG4gIC8vIHByb3Blcmx5IHBvc2l0aW9uZWQgbmVhciBpdHMgcmVmZXJlbmNlIGVsZW1lbnRcbiAgLy8gVGhpcyBpcyB0aGUgbW9zdCBiYXNpYyBwbGFjZW1lbnQsIGFuZCB3aWxsIGJlIGFkanVzdGVkIGJ5XG4gIC8vIHRoZSBtb2RpZmllcnMgaW4gdGhlIG5leHQgc3RlcFxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogc3RhdGUucmVjdHMucmVmZXJlbmNlLFxuICAgIGVsZW1lbnQ6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3BvcHBlck9mZnNldHMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3JlYWQnLFxuICBmbjogcG9wcGVyT2Zmc2V0cyxcbiAgZGF0YToge31cbn07IiwiaW1wb3J0IHsgdG9wLCBsZWZ0LCByaWdodCwgYm90dG9tLCBzdGFydCB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldEFsdEF4aXMgZnJvbSBcIi4uL3V0aWxzL2dldEFsdEF4aXMuanNcIjtcbmltcG9ydCB3aXRoaW4gZnJvbSBcIi4uL3V0aWxzL3dpdGhpbi5qc1wiO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuLi91dGlscy9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCBnZXRGcmVzaFNpZGVPYmplY3QgZnJvbSBcIi4uL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdC5qc1wiO1xuaW1wb3J0IHsgbWF4IGFzIG1hdGhNYXgsIG1pbiBhcyBtYXRoTWluIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcblxuZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgX29wdGlvbnMkdGV0aGVyID0gb3B0aW9ucy50ZXRoZXIsXG4gICAgICB0ZXRoZXIgPSBfb3B0aW9ucyR0ZXRoZXIgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyR0ZXRoZXIsXG4gICAgICBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPSBvcHRpb25zLnRldGhlck9mZnNldCxcbiAgICAgIHRldGhlck9mZnNldCA9IF9vcHRpb25zJHRldGhlck9mZnNldCA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHRldGhlck9mZnNldDtcbiAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgcGFkZGluZzogcGFkZGluZyxcbiAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnlcbiAgfSk7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSAhdmFyaWF0aW9uO1xuICB2YXIgbWFpbkF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBhbHRBeGlzID0gZ2V0QWx0QXhpcyhtYWluQXhpcyk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciB0ZXRoZXJPZmZzZXRWYWx1ZSA9IHR5cGVvZiB0ZXRoZXJPZmZzZXQgPT09ICdmdW5jdGlvbicgPyB0ZXRoZXJPZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiB0ZXRoZXJPZmZzZXQ7XG4gIHZhciBkYXRhID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIGlmICghcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjaGVja01haW5BeGlzIHx8IGNoZWNrQWx0QXhpcykge1xuICAgIHZhciBtYWluU2lkZSA9IG1haW5BeGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICAgIHZhciBhbHRTaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgIHZhciBvZmZzZXQgPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXTtcbiAgICB2YXIgbWluID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gKyBvdmVyZmxvd1ttYWluU2lkZV07XG4gICAgdmFyIG1heCA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdIC0gb3ZlcmZsb3dbYWx0U2lkZV07XG4gICAgdmFyIGFkZGl0aXZlID0gdGV0aGVyID8gLXBvcHBlclJlY3RbbGVuXSAvIDIgOiAwO1xuICAgIHZhciBtaW5MZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gcmVmZXJlbmNlUmVjdFtsZW5dIDogcG9wcGVyUmVjdFtsZW5dO1xuICAgIHZhciBtYXhMZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gLXBvcHBlclJlY3RbbGVuXSA6IC1yZWZlcmVuY2VSZWN0W2xlbl07IC8vIFdlIG5lZWQgdG8gaW5jbHVkZSB0aGUgYXJyb3cgaW4gdGhlIGNhbGN1bGF0aW9uIHNvIHRoZSBhcnJvdyBkb2Vzbid0IGdvXG4gICAgLy8gb3V0c2lkZSB0aGUgcmVmZXJlbmNlIGJvdW5kc1xuXG4gICAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICAgIHZhciBhcnJvd1JlY3QgPSB0ZXRoZXIgJiYgYXJyb3dFbGVtZW50ID8gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpIDoge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDBcbiAgICB9O1xuICAgIHZhciBhcnJvd1BhZGRpbmdPYmplY3QgPSBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10gPyBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10ucGFkZGluZyA6IGdldEZyZXNoU2lkZU9iamVjdCgpO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNaW4gPSBhcnJvd1BhZGRpbmdPYmplY3RbbWFpblNpZGVdO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNYXggPSBhcnJvd1BhZGRpbmdPYmplY3RbYWx0U2lkZV07IC8vIElmIHRoZSByZWZlcmVuY2UgbGVuZ3RoIGlzIHNtYWxsZXIgdGhhbiB0aGUgYXJyb3cgbGVuZ3RoLCB3ZSBkb24ndCB3YW50XG4gICAgLy8gdG8gaW5jbHVkZSBpdHMgZnVsbCBzaXplIGluIHRoZSBjYWxjdWxhdGlvbi4gSWYgdGhlIHJlZmVyZW5jZSBpcyBzbWFsbFxuICAgIC8vIGFuZCBuZWFyIHRoZSBlZGdlIG9mIGEgYm91bmRhcnksIHRoZSBwb3BwZXIgY2FuIG92ZXJmbG93IGV2ZW4gaWYgdGhlXG4gICAgLy8gcmVmZXJlbmNlIGlzIG5vdCBvdmVyZmxvd2luZyBhcyB3ZWxsIChlLmcuIHZpcnR1YWwgZWxlbWVudHMgd2l0aCBub1xuICAgIC8vIHdpZHRoIG9yIGhlaWdodClcblxuICAgIHZhciBhcnJvd0xlbiA9IHdpdGhpbigwLCByZWZlcmVuY2VSZWN0W2xlbl0sIGFycm93UmVjdFtsZW5dKTtcbiAgICB2YXIgbWluT2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiAtIGFkZGl0aXZlIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSB0ZXRoZXJPZmZzZXRWYWx1ZSA6IG1pbkxlbiAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gdGV0aGVyT2Zmc2V0VmFsdWU7XG4gICAgdmFyIG1heE9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IC1yZWZlcmVuY2VSZWN0W2xlbl0gLyAyICsgYWRkaXRpdmUgKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIHRldGhlck9mZnNldFZhbHVlIDogbWF4TGVuICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyB0ZXRoZXJPZmZzZXRWYWx1ZTtcbiAgICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdyAmJiBnZXRPZmZzZXRQYXJlbnQoc3RhdGUuZWxlbWVudHMuYXJyb3cpO1xuICAgIHZhciBjbGllbnRPZmZzZXQgPSBhcnJvd09mZnNldFBhcmVudCA/IG1haW5BeGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRUb3AgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudExlZnQgfHwgMCA6IDA7XG4gICAgdmFyIG9mZnNldE1vZGlmaWVyVmFsdWUgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldCA/IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0W3N0YXRlLnBsYWNlbWVudF1bbWFpbkF4aXNdIDogMDtcbiAgICB2YXIgdGV0aGVyTWluID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gKyBtaW5PZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlIC0gY2xpZW50T2Zmc2V0O1xuICAgIHZhciB0ZXRoZXJNYXggPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSArIG1heE9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWU7XG5cbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgdmFyIHByZXZlbnRlZE9mZnNldCA9IHdpdGhpbih0ZXRoZXIgPyBtYXRoTWluKG1pbiwgdGV0aGVyTWluKSA6IG1pbiwgb2Zmc2V0LCB0ZXRoZXIgPyBtYXRoTWF4KG1heCwgdGV0aGVyTWF4KSA6IG1heCk7XG4gICAgICBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldDtcbiAgICAgIGRhdGFbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0IC0gb2Zmc2V0O1xuICAgIH1cblxuICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgIHZhciBfbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gdG9wIDogbGVmdDtcblxuICAgICAgdmFyIF9hbHRTaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IGJvdHRvbSA6IHJpZ2h0O1xuXG4gICAgICB2YXIgX29mZnNldCA9IHBvcHBlck9mZnNldHNbYWx0QXhpc107XG5cbiAgICAgIHZhciBfbWluID0gX29mZnNldCArIG92ZXJmbG93W19tYWluU2lkZV07XG5cbiAgICAgIHZhciBfbWF4ID0gX29mZnNldCAtIG92ZXJmbG93W19hbHRTaWRlXTtcblxuICAgICAgdmFyIF9wcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4odGV0aGVyID8gbWF0aE1pbihfbWluLCB0ZXRoZXJNaW4pIDogX21pbiwgX29mZnNldCwgdGV0aGVyID8gbWF0aE1heChfbWF4LCB0ZXRoZXJNYXgpIDogX21heCk7XG5cbiAgICAgIHBvcHBlck9mZnNldHNbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0O1xuICAgICAgZGF0YVthbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQgLSBfb2Zmc2V0O1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IHByZXZlbnRPdmVyZmxvdyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXVxufTsiLCJpbXBvcnQgeyBwb3BwZXJHZW5lcmF0b3IsIGRldGVjdE92ZXJmbG93IH0gZnJvbSBcIi4vY3JlYXRlUG9wcGVyLmpzXCI7XG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vbW9kaWZpZXJzL2V2ZW50TGlzdGVuZXJzLmpzXCI7XG5pbXBvcnQgcG9wcGVyT2Zmc2V0cyBmcm9tIFwiLi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cy5qc1wiO1xuaW1wb3J0IGNvbXB1dGVTdHlsZXMgZnJvbSBcIi4vbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanNcIjtcbmltcG9ydCBhcHBseVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvYXBwbHlTdHlsZXMuanNcIjtcbnZhciBkZWZhdWx0TW9kaWZpZXJzID0gW2V2ZW50TGlzdGVuZXJzLCBwb3BwZXJPZmZzZXRzLCBjb21wdXRlU3R5bGVzLCBhcHBseVN0eWxlc107XG52YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG4gIGRlZmF1bHRNb2RpZmllcnM6IGRlZmF1bHRNb2RpZmllcnNcbn0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciwgcG9wcGVyR2VuZXJhdG9yLCBkZWZhdWx0TW9kaWZpZXJzLCBkZXRlY3RPdmVyZmxvdyB9OyIsImltcG9ydCB7IHBvcHBlckdlbmVyYXRvciwgZGV0ZWN0T3ZlcmZsb3cgfSBmcm9tIFwiLi9jcmVhdGVQb3BwZXIuanNcIjtcbmltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9tb2RpZmllcnMvZXZlbnRMaXN0ZW5lcnMuanNcIjtcbmltcG9ydCBwb3BwZXJPZmZzZXRzIGZyb20gXCIuL21vZGlmaWVycy9wb3BwZXJPZmZzZXRzLmpzXCI7XG5pbXBvcnQgY29tcHV0ZVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvY29tcHV0ZVN0eWxlcy5qc1wiO1xuaW1wb3J0IGFwcGx5U3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9hcHBseVN0eWxlcy5qc1wiO1xuaW1wb3J0IG9mZnNldCBmcm9tIFwiLi9tb2RpZmllcnMvb2Zmc2V0LmpzXCI7XG5pbXBvcnQgZmxpcCBmcm9tIFwiLi9tb2RpZmllcnMvZmxpcC5qc1wiO1xuaW1wb3J0IHByZXZlbnRPdmVyZmxvdyBmcm9tIFwiLi9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgYXJyb3cgZnJvbSBcIi4vbW9kaWZpZXJzL2Fycm93LmpzXCI7XG5pbXBvcnQgaGlkZSBmcm9tIFwiLi9tb2RpZmllcnMvaGlkZS5qc1wiO1xudmFyIGRlZmF1bHRNb2RpZmllcnMgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMsIGNvbXB1dGVTdHlsZXMsIGFwcGx5U3R5bGVzLCBvZmZzZXQsIGZsaXAsIHByZXZlbnRPdmVyZmxvdywgYXJyb3csIGhpZGVdO1xudmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3Ioe1xuICBkZWZhdWx0TW9kaWZpZXJzOiBkZWZhdWx0TW9kaWZpZXJzXG59KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIsIHBvcHBlckdlbmVyYXRvciwgZGVmYXVsdE1vZGlmaWVycywgZGV0ZWN0T3ZlcmZsb3cgfTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIgYXMgY3JlYXRlUG9wcGVyTGl0ZSB9IGZyb20gXCIuL3BvcHBlci1saXRlLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0ICogZnJvbSBcIi4vbW9kaWZpZXJzL2luZGV4LmpzXCI7IiwiaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCB7IHZhcmlhdGlvblBsYWNlbWVudHMsIGJhc2VQbGFjZW1lbnRzLCBwbGFjZW1lbnRzIGFzIGFsbFBsYWNlbWVudHMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgX29wdGlvbnMkYWxsb3dlZEF1dG9QID0gX29wdGlvbnMuYWxsb3dlZEF1dG9QbGFjZW1lbnRzLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gX29wdGlvbnMkYWxsb3dlZEF1dG9QID09PSB2b2lkIDAgPyBhbGxQbGFjZW1lbnRzIDogX29wdGlvbnMkYWxsb3dlZEF1dG9QO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCk7XG4gIHZhciBwbGFjZW1lbnRzID0gdmFyaWF0aW9uID8gZmxpcFZhcmlhdGlvbnMgPyB2YXJpYXRpb25QbGFjZW1lbnRzIDogdmFyaWF0aW9uUGxhY2VtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHJldHVybiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gdmFyaWF0aW9uO1xuICB9KSA6IGJhc2VQbGFjZW1lbnRzO1xuICB2YXIgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFsbG93ZWRBdXRvUGxhY2VtZW50cy5pbmRleE9mKHBsYWNlbWVudCkgPj0gMDtcbiAgfSk7XG5cbiAgaWYgKGFsbG93ZWRQbGFjZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cztcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFRoZSBgYWxsb3dlZEF1dG9QbGFjZW1lbnRzYCBvcHRpb24gZGlkIG5vdCBhbGxvdyBhbnknLCAncGxhY2VtZW50cy4gRW5zdXJlIHRoZSBgcGxhY2VtZW50YCBvcHRpb24gbWF0Y2hlcyB0aGUgdmFyaWF0aW9uJywgJ29mIHRoZSBhbGxvd2VkIHBsYWNlbWVudHMuJywgJ0ZvciBleGFtcGxlLCBcImF1dG9cIiBjYW5ub3QgYmUgdXNlZCB0byBhbGxvdyBcImJvdHRvbS1zdGFydFwiLicsICdVc2UgXCJhdXRvLXN0YXJ0XCIgaW5zdGVhZC4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXTogRmxvdyBzZWVtcyB0byBoYXZlIHByb2JsZW1zIHdpdGggdHdvIGFycmF5IHVuaW9ucy4uLlxuXG5cbiAgdmFyIG92ZXJmbG93cyA9IGFsbG93ZWRQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pW2dldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KV07XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICByZXR1cm4gT2JqZWN0LmtleXMob3ZlcmZsb3dzKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93c1thXSAtIG92ZXJmbG93c1tiXTtcbiAgfSk7XG59IiwiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4vZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQsIHN0YXJ0LCBlbmQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHJlZmVyZW5jZSA9IF9yZWYucmVmZXJlbmNlLFxuICAgICAgZWxlbWVudCA9IF9yZWYuZWxlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudCA/IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA6IG51bGw7XG4gIHZhciB2YXJpYXRpb24gPSBwbGFjZW1lbnQgPyBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA6IG51bGw7XG4gIHZhciBjb21tb25YID0gcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGggLyAyIC0gZWxlbWVudC53aWR0aCAvIDI7XG4gIHZhciBjb21tb25ZID0gcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0IC8gMiAtIGVsZW1lbnQuaGVpZ2h0IC8gMjtcbiAgdmFyIG9mZnNldHM7XG5cbiAgc3dpdGNoIChiYXNlUGxhY2VtZW50KSB7XG4gICAgY2FzZSB0b3A6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSAtIGVsZW1lbnQuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGJvdHRvbTpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSByaWdodDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGxlZnQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCAtIGVsZW1lbnQud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnlcbiAgICAgIH07XG4gIH1cblxuICB2YXIgbWFpbkF4aXMgPSBiYXNlUGxhY2VtZW50ID8gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpIDogbnVsbDtcblxuICBpZiAobWFpbkF4aXMgIT0gbnVsbCkge1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgc3dpdGNoICh2YXJpYXRpb24pIHtcbiAgICAgIGNhc2Ugc3RhcnQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gLSAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIGVuZDpcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSArIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9mZnNldHM7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZm4pIHtcbiAgdmFyIHBlbmRpbmc7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFwZW5kaW5nKSB7XG4gICAgICBwZW5kaW5nID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcGVuZGluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICByZXNvbHZlKGZuKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwZW5kaW5nO1xuICB9O1xufSIsImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXRDbGlwcGluZ1JlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRDbGlwcGluZ1JlY3QuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBjb21wdXRlT2Zmc2V0cyBmcm9tIFwiLi9jb21wdXRlT2Zmc2V0cy5qc1wiO1xuaW1wb3J0IHJlY3RUb0NsaWVudFJlY3QgZnJvbSBcIi4vcmVjdFRvQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IHsgY2xpcHBpbmdQYXJlbnRzLCByZWZlcmVuY2UsIHBvcHBlciwgYm90dG9tLCB0b3AsIHJpZ2h0LCBiYXNlUGxhY2VtZW50cywgdmlld3BvcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IG1lcmdlUGFkZGluZ09iamVjdCBmcm9tIFwiLi9tZXJnZVBhZGRpbmdPYmplY3QuanNcIjtcbmltcG9ydCBleHBhbmRUb0hhc2hNYXAgZnJvbSBcIi4vZXhwYW5kVG9IYXNoTWFwLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBfb3B0aW9ucyRwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucyRwbGFjZW1lbnQgPT09IHZvaWQgMCA/IHN0YXRlLnBsYWNlbWVudCA6IF9vcHRpb25zJHBsYWNlbWVudCxcbiAgICAgIF9vcHRpb25zJGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zJGJvdW5kYXJ5ID09PSB2b2lkIDAgPyBjbGlwcGluZ1BhcmVudHMgOiBfb3B0aW9ucyRib3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9PT0gdm9pZCAwID8gdmlld3BvcnQgOiBfb3B0aW9ucyRyb290Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRlbGVtZW50Q29udGUgPSBfb3B0aW9ucy5lbGVtZW50Q29udGV4dCxcbiAgICAgIGVsZW1lbnRDb250ZXh0ID0gX29wdGlvbnMkZWxlbWVudENvbnRlID09PSB2b2lkIDAgPyBwb3BwZXIgOiBfb3B0aW9ucyRlbGVtZW50Q29udGUsXG4gICAgICBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9IF9vcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zJHBhZGRpbmcgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyRwYWRkaW5nO1xuICB2YXIgcGFkZGluZ09iamVjdCA9IG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG4gIHZhciBhbHRDb250ZXh0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHJlZmVyZW5jZSA6IHBvcHBlcjtcbiAgdmFyIHJlZmVyZW5jZUVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW2FsdEJvdW5kYXJ5ID8gYWx0Q29udGV4dCA6IGVsZW1lbnRDb250ZXh0XTtcbiAgdmFyIGNsaXBwaW5nQ2xpZW50UmVjdCA9IGdldENsaXBwaW5nUmVjdChpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50IDogZWxlbWVudC5jb250ZXh0RWxlbWVudCB8fCBnZXREb2N1bWVudEVsZW1lbnQoc3RhdGUuZWxlbWVudHMucG9wcGVyKSwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSk7XG4gIHZhciByZWZlcmVuY2VDbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHJlZmVyZW5jZUVsZW1lbnQpO1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICByZWZlcmVuY2U6IHJlZmVyZW5jZUNsaWVudFJlY3QsXG4gICAgZWxlbWVudDogcG9wcGVyUmVjdCxcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KTtcbiAgdmFyIHBvcHBlckNsaWVudFJlY3QgPSByZWN0VG9DbGllbnRSZWN0KE9iamVjdC5hc3NpZ24oe30sIHBvcHBlclJlY3QsIHBvcHBlck9mZnNldHMpKTtcbiAgdmFyIGVsZW1lbnRDbGllbnRSZWN0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHBvcHBlckNsaWVudFJlY3QgOiByZWZlcmVuY2VDbGllbnRSZWN0OyAvLyBwb3NpdGl2ZSA9IG92ZXJmbG93aW5nIHRoZSBjbGlwcGluZyByZWN0XG4gIC8vIDAgb3IgbmVnYXRpdmUgPSB3aXRoaW4gdGhlIGNsaXBwaW5nIHJlY3RcblxuICB2YXIgb3ZlcmZsb3dPZmZzZXRzID0ge1xuICAgIHRvcDogY2xpcHBpbmdDbGllbnRSZWN0LnRvcCAtIGVsZW1lbnRDbGllbnRSZWN0LnRvcCArIHBhZGRpbmdPYmplY3QudG9wLFxuICAgIGJvdHRvbTogZWxlbWVudENsaWVudFJlY3QuYm90dG9tIC0gY2xpcHBpbmdDbGllbnRSZWN0LmJvdHRvbSArIHBhZGRpbmdPYmplY3QuYm90dG9tLFxuICAgIGxlZnQ6IGNsaXBwaW5nQ2xpZW50UmVjdC5sZWZ0IC0gZWxlbWVudENsaWVudFJlY3QubGVmdCArIHBhZGRpbmdPYmplY3QubGVmdCxcbiAgICByaWdodDogZWxlbWVudENsaWVudFJlY3QucmlnaHQgLSBjbGlwcGluZ0NsaWVudFJlY3QucmlnaHQgKyBwYWRkaW5nT2JqZWN0LnJpZ2h0XG4gIH07XG4gIHZhciBvZmZzZXREYXRhID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQ7IC8vIE9mZnNldHMgY2FuIGJlIGFwcGxpZWQgb25seSB0byB0aGUgcG9wcGVyIGVsZW1lbnRcblxuICBpZiAoZWxlbWVudENvbnRleHQgPT09IHBvcHBlciAmJiBvZmZzZXREYXRhKSB7XG4gICAgdmFyIG9mZnNldCA9IG9mZnNldERhdGFbcGxhY2VtZW50XTtcbiAgICBPYmplY3Qua2V5cyhvdmVyZmxvd09mZnNldHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG11bHRpcGx5ID0gW3JpZ2h0LCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gMSA6IC0xO1xuICAgICAgdmFyIGF4aXMgPSBbdG9wLCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gJ3knIDogJ3gnO1xuICAgICAgb3ZlcmZsb3dPZmZzZXRzW2tleV0gKz0gb2Zmc2V0W2F4aXNdICogbXVsdGlwbHk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gb3ZlcmZsb3dPZmZzZXRzO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4cGFuZFRvSGFzaE1hcCh2YWx1ZSwga2V5cykge1xuICByZXR1cm4ga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGhhc2hNYXAsIGtleSkge1xuICAgIGhhc2hNYXBba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiBoYXNoTWFwO1xuICB9LCB7fSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KHN0cikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gW10uY29uY2F0KGFyZ3MpLnJlZHVjZShmdW5jdGlvbiAocCwgYykge1xuICAgIHJldHVybiBwLnJlcGxhY2UoLyVzLywgYyk7XG4gIH0sIHN0cik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QWx0QXhpcyhheGlzKSB7XG4gIHJldHVybiBheGlzID09PSAneCcgPyAneScgOiAneCc7XG59IiwiaW1wb3J0IHsgYXV0byB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEZyZXNoU2lkZU9iamVjdCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDBcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgPj0gMCA/ICd4JyA6ICd5Jztcbn0iLCJ2YXIgaGFzaCA9IHtcbiAgbGVmdDogJ3JpZ2h0JyxcbiAgcmlnaHQ6ICdsZWZ0JyxcbiAgYm90dG9tOiAndG9wJyxcbiAgdG9wOiAnYm90dG9tJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn0iLCJ2YXIgaGFzaCA9IHtcbiAgc3RhcnQ6ICdlbmQnLFxuICBlbmQ6ICdzdGFydCdcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9zdGFydHxlbmQvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG59IiwiZXhwb3J0IHZhciBtYXggPSBNYXRoLm1heDtcbmV4cG9ydCB2YXIgbWluID0gTWF0aC5taW47XG5leHBvcnQgdmFyIHJvdW5kID0gTWF0aC5yb3VuZDsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZUJ5TmFtZShtb2RpZmllcnMpIHtcbiAgdmFyIG1lcmdlZCA9IG1vZGlmaWVycy5yZWR1Y2UoZnVuY3Rpb24gKG1lcmdlZCwgY3VycmVudCkge1xuICAgIHZhciBleGlzdGluZyA9IG1lcmdlZFtjdXJyZW50Lm5hbWVdO1xuICAgIG1lcmdlZFtjdXJyZW50Lm5hbWVdID0gZXhpc3RpbmcgPyBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZywgY3VycmVudCwge1xuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3Rpbmcub3B0aW9ucywgY3VycmVudC5vcHRpb25zKSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLmRhdGEsIGN1cnJlbnQuZGF0YSlcbiAgICB9KSA6IGN1cnJlbnQ7XG4gICAgcmV0dXJuIG1lcmdlZDtcbiAgfSwge30pOyAvLyBJRTExIGRvZXMgbm90IHN1cHBvcnQgT2JqZWN0LnZhbHVlc1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyhtZXJnZWQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIG1lcmdlZFtrZXldO1xuICB9KTtcbn0iLCJpbXBvcnQgZ2V0RnJlc2hTaWRlT2JqZWN0IGZyb20gXCIuL2dldEZyZXNoU2lkZU9iamVjdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VQYWRkaW5nT2JqZWN0KHBhZGRpbmdPYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGdldEZyZXNoU2lkZU9iamVjdCgpLCBwYWRkaW5nT2JqZWN0KTtcbn0iLCJpbXBvcnQgeyBtb2RpZmllclBoYXNlcyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiOyAvLyBzb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ5ODc1MjU1XG5cbmZ1bmN0aW9uIG9yZGVyKG1vZGlmaWVycykge1xuICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuICB2YXIgdmlzaXRlZCA9IG5ldyBTZXQoKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBtYXAuc2V0KG1vZGlmaWVyLm5hbWUsIG1vZGlmaWVyKTtcbiAgfSk7IC8vIE9uIHZpc2l0aW5nIG9iamVjdCwgY2hlY2sgZm9yIGl0cyBkZXBlbmRlbmNpZXMgYW5kIHZpc2l0IHRoZW0gcmVjdXJzaXZlbHlcblxuICBmdW5jdGlvbiBzb3J0KG1vZGlmaWVyKSB7XG4gICAgdmlzaXRlZC5hZGQobW9kaWZpZXIubmFtZSk7XG4gICAgdmFyIHJlcXVpcmVzID0gW10uY29uY2F0KG1vZGlmaWVyLnJlcXVpcmVzIHx8IFtdLCBtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzIHx8IFtdKTtcbiAgICByZXF1aXJlcy5mb3JFYWNoKGZ1bmN0aW9uIChkZXApIHtcbiAgICAgIGlmICghdmlzaXRlZC5oYXMoZGVwKSkge1xuICAgICAgICB2YXIgZGVwTW9kaWZpZXIgPSBtYXAuZ2V0KGRlcCk7XG5cbiAgICAgICAgaWYgKGRlcE1vZGlmaWVyKSB7XG4gICAgICAgICAgc29ydChkZXBNb2RpZmllcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXN1bHQucHVzaChtb2RpZmllcik7XG4gIH1cblxuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBpZiAoIXZpc2l0ZWQuaGFzKG1vZGlmaWVyLm5hbWUpKSB7XG4gICAgICAvLyBjaGVjayBmb3IgdmlzaXRlZCBvYmplY3RcbiAgICAgIHNvcnQobW9kaWZpZXIpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9yZGVyTW9kaWZpZXJzKG1vZGlmaWVycykge1xuICAvLyBvcmRlciBiYXNlZCBvbiBkZXBlbmRlbmNpZXNcbiAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcihtb2RpZmllcnMpOyAvLyBvcmRlciBiYXNlZCBvbiBwaGFzZVxuXG4gIHJldHVybiBtb2RpZmllclBoYXNlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGhhc2UpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgIHJldHVybiBtb2RpZmllci5waGFzZSA9PT0gcGhhc2U7XG4gICAgfSkpO1xuICB9LCBbXSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVjdFRvQ2xpZW50UmVjdChyZWN0KSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByZWN0LCB7XG4gICAgbGVmdDogcmVjdC54LFxuICAgIHRvcDogcmVjdC55LFxuICAgIHJpZ2h0OiByZWN0LnggKyByZWN0LndpZHRoLFxuICAgIGJvdHRvbTogcmVjdC55ICsgcmVjdC5oZWlnaHRcbiAgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdW5pcXVlQnkoYXJyLCBmbikge1xuICB2YXIgaWRlbnRpZmllcnMgPSBuZXcgU2V0KCk7XG4gIHJldHVybiBhcnIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBmbihpdGVtKTtcblxuICAgIGlmICghaWRlbnRpZmllcnMuaGFzKGlkZW50aWZpZXIpKSB7XG4gICAgICBpZGVudGlmaWVycy5hZGQoaWRlbnRpZmllcik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufSIsImltcG9ydCBmb3JtYXQgZnJvbSBcIi4vZm9ybWF0LmpzXCI7XG5pbXBvcnQgeyBtb2RpZmllclBoYXNlcyB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xudmFyIElOVkFMSURfTU9ESUZJRVJfRVJST1IgPSAnUG9wcGVyOiBtb2RpZmllciBcIiVzXCIgcHJvdmlkZWQgYW4gaW52YWxpZCAlcyBwcm9wZXJ0eSwgZXhwZWN0ZWQgJXMgYnV0IGdvdCAlcyc7XG52YXIgTUlTU0lOR19ERVBFTkRFTkNZX0VSUk9SID0gJ1BvcHBlcjogbW9kaWZpZXIgXCIlc1wiIHJlcXVpcmVzIFwiJXNcIiwgYnV0IFwiJXNcIiBtb2RpZmllciBpcyBub3QgYXZhaWxhYmxlJztcbnZhciBWQUxJRF9QUk9QRVJUSUVTID0gWyduYW1lJywgJ2VuYWJsZWQnLCAncGhhc2UnLCAnZm4nLCAnZWZmZWN0JywgJ3JlcXVpcmVzJywgJ29wdGlvbnMnXTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlTW9kaWZpZXJzKG1vZGlmaWVycykge1xuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBPYmplY3Qua2V5cyhtb2RpZmllcikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICduYW1lJzpcbiAgICAgICAgICBpZiAodHlwZW9mIG1vZGlmaWVyLm5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBTdHJpbmcobW9kaWZpZXIubmFtZSksICdcIm5hbWVcIicsICdcInN0cmluZ1wiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIubmFtZSkgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2VuYWJsZWQnOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIuZW5hYmxlZCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJlbmFibGVkXCInLCAnXCJib29sZWFuXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5lbmFibGVkKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ3BoYXNlJzpcbiAgICAgICAgICBpZiAobW9kaWZpZXJQaGFzZXMuaW5kZXhPZihtb2RpZmllci5waGFzZSkgPCAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJwaGFzZVwiJywgXCJlaXRoZXIgXCIgKyBtb2RpZmllclBoYXNlcy5qb2luKCcsICcpLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5waGFzZSkgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2ZuJzpcbiAgICAgICAgICBpZiAodHlwZW9mIG1vZGlmaWVyLmZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGZvcm1hdChJTlZBTElEX01PRElGSUVSX0VSUk9SLCBtb2RpZmllci5uYW1lLCAnXCJmblwiJywgJ1wiZnVuY3Rpb25cIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLmZuKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZWZmZWN0JzpcbiAgICAgICAgICBpZiAodHlwZW9mIG1vZGlmaWVyLmVmZmVjdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wiZWZmZWN0XCInLCAnXCJmdW5jdGlvblwiJywgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIuZm4pICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdyZXF1aXJlcyc6XG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZGlmaWVyLnJlcXVpcmVzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wicmVxdWlyZXNcIicsICdcImFycmF5XCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5yZXF1aXJlcykgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JlcXVpcmVzSWZFeGlzdHMnOlxuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wicmVxdWlyZXNJZkV4aXN0c1wiJywgJ1wiYXJyYXlcIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdvcHRpb25zJzpcbiAgICAgICAgY2FzZSAnZGF0YSc6XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUG9wcGVySlM6IGFuIGludmFsaWQgcHJvcGVydHkgaGFzIGJlZW4gcHJvdmlkZWQgdG8gdGhlIFxcXCJcIiArIG1vZGlmaWVyLm5hbWUgKyBcIlxcXCIgbW9kaWZpZXIsIHZhbGlkIHByb3BlcnRpZXMgYXJlIFwiICsgVkFMSURfUFJPUEVSVElFUy5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlxcXCJcIiArIHMgKyBcIlxcXCJcIjtcbiAgICAgICAgICB9KS5qb2luKCcsICcpICsgXCI7IGJ1dCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgd2FzIHByb3ZpZGVkLlwiKTtcbiAgICAgIH1cblxuICAgICAgbW9kaWZpZXIucmVxdWlyZXMgJiYgbW9kaWZpZXIucmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAocmVxdWlyZW1lbnQpIHtcbiAgICAgICAgaWYgKG1vZGlmaWVycy5maW5kKGZ1bmN0aW9uIChtb2QpIHtcbiAgICAgICAgICByZXR1cm4gbW9kLm5hbWUgPT09IHJlcXVpcmVtZW50O1xuICAgICAgICB9KSA9PSBudWxsKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoTUlTU0lOR19ERVBFTkRFTkNZX0VSUk9SLCBTdHJpbmcobW9kaWZpZXIubmFtZSksIHJlcXVpcmVtZW50LCByZXF1aXJlbWVudCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59IiwiaW1wb3J0IHsgbWF4IGFzIG1hdGhNYXgsIG1pbiBhcyBtYXRoTWluIH0gZnJvbSBcIi4vbWF0aC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aGluKG1pbiwgdmFsdWUsIG1heCkge1xuICByZXR1cm4gbWF0aE1heChtaW4sIG1hdGhNaW4odmFsdWUsIG1heCkpO1xufSIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogZG9tL3NlbGVjdG9yLWVuZ2luZS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5PREVfVEVYVCA9IDNcblxuY29uc3QgU2VsZWN0b3JFbmdpbmUgPSB7XG4gIGZpbmQoc2VsZWN0b3IsIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLkVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGwuY2FsbChlbGVtZW50LCBzZWxlY3RvcikpXG4gIH0sXG5cbiAgZmluZE9uZShzZWxlY3RvciwgZWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpXG4gIH0sXG5cbiAgY2hpbGRyZW4oZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KC4uLmVsZW1lbnQuY2hpbGRyZW4pXG4gICAgICAuZmlsdGVyKGNoaWxkID0+IGNoaWxkLm1hdGNoZXMoc2VsZWN0b3IpKVxuICB9LFxuXG4gIHBhcmVudHMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBjb25zdCBwYXJlbnRzID0gW11cblxuICAgIGxldCBhbmNlc3RvciA9IGVsZW1lbnQucGFyZW50Tm9kZVxuXG4gICAgd2hpbGUgKGFuY2VzdG9yICYmIGFuY2VzdG9yLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSAmJiBhbmNlc3Rvci5ub2RlVHlwZSAhPT0gTk9ERV9URVhUKSB7XG4gICAgICBpZiAoYW5jZXN0b3IubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKGFuY2VzdG9yKVxuICAgICAgfVxuXG4gICAgICBhbmNlc3RvciA9IGFuY2VzdG9yLnBhcmVudE5vZGVcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50c1xuICB9LFxuXG4gIHByZXYoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBsZXQgcHJldmlvdXMgPSBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmdcblxuICAgIHdoaWxlIChwcmV2aW91cykge1xuICAgICAgaWYgKHByZXZpb3VzLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBbcHJldmlvdXNdXG4gICAgICB9XG5cbiAgICAgIHByZXZpb3VzID0gcHJldmlvdXMucHJldmlvdXNFbGVtZW50U2libGluZ1xuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9LFxuXG4gIG5leHQoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBsZXQgbmV4dCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nXG5cbiAgICB3aGlsZSAobmV4dCkge1xuICAgICAgaWYgKG5leHQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIFtuZXh0XVxuICAgICAgfVxuXG4gICAgICBuZXh0ID0gbmV4dC5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICB9XG5cbiAgICByZXR1cm4gW11cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RvckVuZ2luZVxuIiwiaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4uL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogdXRpbC9pbmRleC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE1BWF9VSUQgPSAxMDAwMDAwXG5jb25zdCBNSUxMSVNFQ09ORFNfTVVMVElQTElFUiA9IDEwMDBcbmNvbnN0IFRSQU5TSVRJT05fRU5EID0gJ3RyYW5zaXRpb25lbmQnXG5cbi8vIFNob3V0b3V0IEFuZ3VzQ3JvbGwgKGh0dHBzOi8vZ29vLmdsL3B4d1FHcClcbmNvbnN0IHRvVHlwZSA9IG9iaiA9PiB7XG4gIGlmIChvYmogPT09IG51bGwgfHwgb2JqID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYCR7b2JqfWBcbiAgfVxuXG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKG9iaikubWF0Y2goL1xccyhbYS16XSspL2kpWzFdLnRvTG93ZXJDYXNlKClcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUHVibGljIFV0aWwgQXBpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IGdldFVJRCA9IHByZWZpeCA9PiB7XG4gIGRvIHtcbiAgICBwcmVmaXggKz0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTUFYX1VJRClcbiAgfSB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4KSlcblxuICByZXR1cm4gcHJlZml4XG59XG5cbmNvbnN0IGdldFNlbGVjdG9yID0gZWxlbWVudCA9PiB7XG4gIGxldCBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXRhcmdldCcpXG5cbiAgaWYgKCFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gJyMnKSB7XG4gICAgbGV0IGhyZWZBdHRyID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuXG4gICAgLy8gVGhlIG9ubHkgdmFsaWQgY29udGVudCB0aGF0IGNvdWxkIGRvdWJsZSBhcyBhIHNlbGVjdG9yIGFyZSBJRHMgb3IgY2xhc3NlcyxcbiAgICAvLyBzbyBldmVyeXRoaW5nIHN0YXJ0aW5nIHdpdGggYCNgIG9yIGAuYC4gSWYgYSBcInJlYWxcIiBVUkwgaXMgdXNlZCBhcyB0aGUgc2VsZWN0b3IsXG4gICAgLy8gYGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JgIHdpbGwgcmlnaHRmdWxseSBjb21wbGFpbiBpdCBpcyBpbnZhbGlkLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzMyMjczXG4gICAgaWYgKCFocmVmQXR0ciB8fCAoIWhyZWZBdHRyLmluY2x1ZGVzKCcjJykgJiYgIWhyZWZBdHRyLnN0YXJ0c1dpdGgoJy4nKSkpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLy8gSnVzdCBpbiBjYXNlIHNvbWUgQ01TIHB1dHMgb3V0IGEgZnVsbCBVUkwgd2l0aCB0aGUgYW5jaG9yIGFwcGVuZGVkXG4gICAgaWYgKGhyZWZBdHRyLmluY2x1ZGVzKCcjJykgJiYgIWhyZWZBdHRyLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgaHJlZkF0dHIgPSBgIyR7aHJlZkF0dHIuc3BsaXQoJyMnKVsxXX1gXG4gICAgfVxuXG4gICAgc2VsZWN0b3IgPSBocmVmQXR0ciAmJiBocmVmQXR0ciAhPT0gJyMnID8gaHJlZkF0dHIudHJpbSgpIDogbnVsbFxuICB9XG5cbiAgcmV0dXJuIHNlbGVjdG9yXG59XG5cbmNvbnN0IGdldFNlbGVjdG9yRnJvbUVsZW1lbnQgPSBlbGVtZW50ID0+IHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvcihlbGVtZW50KVxuXG4gIGlmIChzZWxlY3Rvcikge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogbnVsbFxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuY29uc3QgZ2V0RWxlbWVudEZyb21TZWxlY3RvciA9IGVsZW1lbnQgPT4ge1xuICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgcmV0dXJuIHNlbGVjdG9yID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBudWxsXG59XG5cbmNvbnN0IGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50ID0gZWxlbWVudCA9PiB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICAvLyBHZXQgdHJhbnNpdGlvbi1kdXJhdGlvbiBvZiB0aGUgZWxlbWVudFxuICBsZXQgeyB0cmFuc2l0aW9uRHVyYXRpb24sIHRyYW5zaXRpb25EZWxheSB9ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClcblxuICBjb25zdCBmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiA9IE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbilcbiAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRGVsYXkgPSBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpXG5cbiAgLy8gUmV0dXJuIDAgaWYgZWxlbWVudCBvciB0cmFuc2l0aW9uIGR1cmF0aW9uIGlzIG5vdCBmb3VuZFxuICBpZiAoIWZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uICYmICFmbG9hdFRyYW5zaXRpb25EZWxheSkge1xuICAgIHJldHVybiAwXG4gIH1cblxuICAvLyBJZiBtdWx0aXBsZSBkdXJhdGlvbnMgYXJlIGRlZmluZWQsIHRha2UgdGhlIGZpcnN0XG4gIHRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbi5zcGxpdCgnLCcpWzBdXG4gIHRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb25EZWxheS5zcGxpdCgnLCcpWzBdXG5cbiAgcmV0dXJuIChOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pICsgTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KSkgKiBNSUxMSVNFQ09ORFNfTVVMVElQTElFUlxufVxuXG5jb25zdCB0cmlnZ2VyVHJhbnNpdGlvbkVuZCA9IGVsZW1lbnQgPT4ge1xuICBlbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFRSQU5TSVRJT05fRU5EKSlcbn1cblxuY29uc3QgaXNFbGVtZW50ID0gb2JqID0+IHtcbiAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqLmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBvYmogPSBvYmpbMF1cbiAgfVxuXG4gIHJldHVybiB0eXBlb2Ygb2JqLm5vZGVUeXBlICE9PSAndW5kZWZpbmVkJ1xufVxuXG5jb25zdCBnZXRFbGVtZW50ID0gb2JqID0+IHtcbiAgaWYgKGlzRWxlbWVudChvYmopKSB7IC8vIGl0J3MgYSBqUXVlcnkgb2JqZWN0IG9yIGEgbm9kZSBlbGVtZW50XG4gICAgcmV0dXJuIG9iai5qcXVlcnkgPyBvYmpbMF0gOiBvYmpcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyAmJiBvYmoubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kT25lKG9iailcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmNvbnN0IGVtdWxhdGVUcmFuc2l0aW9uRW5kID0gKGVsZW1lbnQsIGR1cmF0aW9uKSA9PiB7XG4gIGxldCBjYWxsZWQgPSBmYWxzZVxuICBjb25zdCBkdXJhdGlvblBhZGRpbmcgPSA1XG4gIGNvbnN0IGVtdWxhdGVkRHVyYXRpb24gPSBkdXJhdGlvbiArIGR1cmF0aW9uUGFkZGluZ1xuXG4gIGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgIGNhbGxlZCA9IHRydWVcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoVFJBTlNJVElPTl9FTkQsIGxpc3RlbmVyKVxuICB9XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFRSQU5TSVRJT05fRU5ELCBsaXN0ZW5lcilcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKGVsZW1lbnQpXG4gICAgfVxuICB9LCBlbXVsYXRlZER1cmF0aW9uKVxufVxuXG5jb25zdCB0eXBlQ2hlY2tDb25maWcgPSAoY29tcG9uZW50TmFtZSwgY29uZmlnLCBjb25maWdUeXBlcykgPT4ge1xuICBPYmplY3Qua2V5cyhjb25maWdUeXBlcykuZm9yRWFjaChwcm9wZXJ0eSA9PiB7XG4gICAgY29uc3QgZXhwZWN0ZWRUeXBlcyA9IGNvbmZpZ1R5cGVzW3Byb3BlcnR5XVxuICAgIGNvbnN0IHZhbHVlID0gY29uZmlnW3Byb3BlcnR5XVxuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlICYmIGlzRWxlbWVudCh2YWx1ZSkgPyAnZWxlbWVudCcgOiB0b1R5cGUodmFsdWUpXG5cbiAgICBpZiAoIW5ldyBSZWdFeHAoZXhwZWN0ZWRUeXBlcykudGVzdCh2YWx1ZVR5cGUpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICBgJHtjb21wb25lbnROYW1lLnRvVXBwZXJDYXNlKCl9OiBPcHRpb24gXCIke3Byb3BlcnR5fVwiIHByb3ZpZGVkIHR5cGUgXCIke3ZhbHVlVHlwZX1cIiBidXQgZXhwZWN0ZWQgdHlwZSBcIiR7ZXhwZWN0ZWRUeXBlc31cIi5gXG4gICAgICApXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBpc1Zpc2libGUgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAoZWxlbWVudC5zdHlsZSAmJiBlbGVtZW50LnBhcmVudE5vZGUgJiYgZWxlbWVudC5wYXJlbnROb2RlLnN0eWxlKSB7XG4gICAgY29uc3QgZWxlbWVudFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVxuICAgIGNvbnN0IHBhcmVudE5vZGVTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudC5wYXJlbnROb2RlKVxuXG4gICAgcmV0dXJuIGVsZW1lbnRTdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgJiZcbiAgICAgIHBhcmVudE5vZGVTdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgJiZcbiAgICAgIGVsZW1lbnRTdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJ1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmNvbnN0IGlzRGlzYWJsZWQgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAodHlwZW9mIGVsZW1lbnQuZGlzYWJsZWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZGlzYWJsZWRcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSAhPT0gJ2ZhbHNlJ1xufVxuXG5jb25zdCBmaW5kU2hhZG93Um9vdCA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRhY2hTaGFkb3cpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLy8gQ2FuIGZpbmQgdGhlIHNoYWRvdyByb290IG90aGVyd2lzZSBpdCdsbCByZXR1cm4gdGhlIGRvY3VtZW50XG4gIGlmICh0eXBlb2YgZWxlbWVudC5nZXRSb290Tm9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHJvb3QgPSBlbGVtZW50LmdldFJvb3ROb2RlKClcbiAgICByZXR1cm4gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyByb290IDogbnVsbFxuICB9XG5cbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgfVxuXG4gIC8vIHdoZW4gd2UgZG9uJ3QgZmluZCBhIHNoYWRvdyByb290XG4gIGlmICghZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiBmaW5kU2hhZG93Um9vdChlbGVtZW50LnBhcmVudE5vZGUpXG59XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5jb25zdCByZWZsb3cgPSBlbGVtZW50ID0+IGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG5cbmNvbnN0IGdldGpRdWVyeSA9ICgpID0+IHtcbiAgY29uc3QgeyBqUXVlcnkgfSA9IHdpbmRvd1xuXG4gIGlmIChqUXVlcnkgJiYgIWRvY3VtZW50LmJvZHkuaGFzQXR0cmlidXRlKCdkYXRhLWJzLW5vLWpxdWVyeScpKSB7XG4gICAgcmV0dXJuIGpRdWVyeVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuY29uc3Qgb25ET01Db250ZW50TG9hZGVkID0gY2FsbGJhY2sgPT4ge1xuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNhbGxiYWNrKVxuICB9IGVsc2Uge1xuICAgIGNhbGxiYWNrKClcbiAgfVxufVxuXG5jb25zdCBpc1JUTCA9ICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kaXIgPT09ICdydGwnXG5cbmNvbnN0IGRlZmluZUpRdWVyeVBsdWdpbiA9IHBsdWdpbiA9PiB7XG4gIG9uRE9NQ29udGVudExvYWRlZCgoKSA9PiB7XG4gICAgY29uc3QgJCA9IGdldGpRdWVyeSgpXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCQpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBwbHVnaW4uTkFNRVxuICAgICAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltuYW1lXVxuICAgICAgJC5mbltuYW1lXSA9IHBsdWdpbi5qUXVlcnlJbnRlcmZhY2VcbiAgICAgICQuZm5bbmFtZV0uQ29uc3RydWN0b3IgPSBwbHVnaW5cbiAgICAgICQuZm5bbmFtZV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgICAgICAgJC5mbltuYW1lXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgICAgICByZXR1cm4gcGx1Z2luLmpRdWVyeUludGVyZmFjZVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgZXhlY3V0ZSA9IGNhbGxiYWNrID0+IHtcbiAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrKClcbiAgfVxufVxuXG5leHBvcnQge1xuICBnZXRFbGVtZW50LFxuICBnZXRVSUQsXG4gIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQsXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50LFxuICB0cmlnZ2VyVHJhbnNpdGlvbkVuZCxcbiAgaXNFbGVtZW50LFxuICBlbXVsYXRlVHJhbnNpdGlvbkVuZCxcbiAgdHlwZUNoZWNrQ29uZmlnLFxuICBpc1Zpc2libGUsXG4gIGlzRGlzYWJsZWQsXG4gIGZpbmRTaGFkb3dSb290LFxuICBub29wLFxuICByZWZsb3csXG4gIGdldGpRdWVyeSxcbiAgb25ET01Db250ZW50TG9hZGVkLFxuICBpc1JUTCxcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBleGVjdXRlXG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IGRvbS9kYXRhLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgZWxlbWVudE1hcCA9IG5ldyBNYXAoKVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNldChlbGVtZW50LCBrZXksIGluc3RhbmNlKSB7XG4gICAgaWYgKCFlbGVtZW50TWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgZWxlbWVudE1hcC5zZXQoZWxlbWVudCwgbmV3IE1hcCgpKVxuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlTWFwID0gZWxlbWVudE1hcC5nZXQoZWxlbWVudClcblxuICAgIC8vIG1ha2UgaXQgY2xlYXIgd2Ugb25seSB3YW50IG9uZSBpbnN0YW5jZSBwZXIgZWxlbWVudFxuICAgIC8vIGNhbiBiZSByZW1vdmVkIGxhdGVyIHdoZW4gbXVsdGlwbGUga2V5L2luc3RhbmNlcyBhcmUgZmluZSB0byBiZSB1c2VkXG4gICAgaWYgKCFpbnN0YW5jZU1hcC5oYXMoa2V5KSAmJiBpbnN0YW5jZU1hcC5zaXplICE9PSAwKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcihgQm9vdHN0cmFwIGRvZXNuJ3QgYWxsb3cgbW9yZSB0aGFuIG9uZSBpbnN0YW5jZSBwZXIgZWxlbWVudC4gQm91bmQgaW5zdGFuY2U6ICR7QXJyYXkuZnJvbShpbnN0YW5jZU1hcC5rZXlzKCkpWzBdfS5gKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaW5zdGFuY2VNYXAuc2V0KGtleSwgaW5zdGFuY2UpXG4gIH0sXG5cbiAgZ2V0KGVsZW1lbnQsIGtleSkge1xuICAgIGlmIChlbGVtZW50TWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgcmV0dXJuIGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpLmdldChrZXkpIHx8IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9LFxuXG4gIHJlbW92ZShlbGVtZW50LCBrZXkpIHtcbiAgICBpZiAoIWVsZW1lbnRNYXAuaGFzKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpbnN0YW5jZU1hcCA9IGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpXG5cbiAgICBpbnN0YW5jZU1hcC5kZWxldGUoa2V5KVxuXG4gICAgLy8gZnJlZSB1cCBlbGVtZW50IHJlZmVyZW5jZXMgaWYgdGhlcmUgYXJlIG5vIGluc3RhbmNlcyBsZWZ0IGZvciBhbiBlbGVtZW50XG4gICAgaWYgKGluc3RhbmNlTWFwLnNpemUgPT09IDApIHtcbiAgICAgIGVsZW1lbnRNYXAuZGVsZXRlKGVsZW1lbnQpXG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IGRvbS9ldmVudC1oYW5kbGVyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHsgZ2V0alF1ZXJ5IH0gZnJvbSAnLi4vdXRpbC9pbmRleCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgbmFtZXNwYWNlUmVnZXggPSAvW14uXSooPz1cXC4uKilcXC58LiovXG5jb25zdCBzdHJpcE5hbWVSZWdleCA9IC9cXC4uKi9cbmNvbnN0IHN0cmlwVWlkUmVnZXggPSAvOjpcXGQrJC9cbmNvbnN0IGV2ZW50UmVnaXN0cnkgPSB7fSAvLyBFdmVudHMgc3RvcmFnZVxubGV0IHVpZEV2ZW50ID0gMVxuY29uc3QgY3VzdG9tRXZlbnRzID0ge1xuICBtb3VzZWVudGVyOiAnbW91c2VvdmVyJyxcbiAgbW91c2VsZWF2ZTogJ21vdXNlb3V0J1xufVxuY29uc3QgY3VzdG9tRXZlbnRzUmVnZXggPSAvXihtb3VzZWVudGVyfG1vdXNlbGVhdmUpL2lcbmNvbnN0IG5hdGl2ZUV2ZW50cyA9IG5ldyBTZXQoW1xuICAnY2xpY2snLFxuICAnZGJsY2xpY2snLFxuICAnbW91c2V1cCcsXG4gICdtb3VzZWRvd24nLFxuICAnY29udGV4dG1lbnUnLFxuICAnbW91c2V3aGVlbCcsXG4gICdET01Nb3VzZVNjcm9sbCcsXG4gICdtb3VzZW92ZXInLFxuICAnbW91c2VvdXQnLFxuICAnbW91c2Vtb3ZlJyxcbiAgJ3NlbGVjdHN0YXJ0JyxcbiAgJ3NlbGVjdGVuZCcsXG4gICdrZXlkb3duJyxcbiAgJ2tleXByZXNzJyxcbiAgJ2tleXVwJyxcbiAgJ29yaWVudGF0aW9uY2hhbmdlJyxcbiAgJ3RvdWNoc3RhcnQnLFxuICAndG91Y2htb3ZlJyxcbiAgJ3RvdWNoZW5kJyxcbiAgJ3RvdWNoY2FuY2VsJyxcbiAgJ3BvaW50ZXJkb3duJyxcbiAgJ3BvaW50ZXJtb3ZlJyxcbiAgJ3BvaW50ZXJ1cCcsXG4gICdwb2ludGVybGVhdmUnLFxuICAncG9pbnRlcmNhbmNlbCcsXG4gICdnZXN0dXJlc3RhcnQnLFxuICAnZ2VzdHVyZWNoYW5nZScsXG4gICdnZXN0dXJlZW5kJyxcbiAgJ2ZvY3VzJyxcbiAgJ2JsdXInLFxuICAnY2hhbmdlJyxcbiAgJ3Jlc2V0JyxcbiAgJ3NlbGVjdCcsXG4gICdzdWJtaXQnLFxuICAnZm9jdXNpbicsXG4gICdmb2N1c291dCcsXG4gICdsb2FkJyxcbiAgJ3VubG9hZCcsXG4gICdiZWZvcmV1bmxvYWQnLFxuICAncmVzaXplJyxcbiAgJ21vdmUnLFxuICAnRE9NQ29udGVudExvYWRlZCcsXG4gICdyZWFkeXN0YXRlY2hhbmdlJyxcbiAgJ2Vycm9yJyxcbiAgJ2Fib3J0JyxcbiAgJ3Njcm9sbCdcbl0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQcml2YXRlIG1ldGhvZHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmZ1bmN0aW9uIGdldFVpZEV2ZW50KGVsZW1lbnQsIHVpZCkge1xuICByZXR1cm4gKHVpZCAmJiBgJHt1aWR9Ojoke3VpZEV2ZW50Kyt9YCkgfHwgZWxlbWVudC51aWRFdmVudCB8fCB1aWRFdmVudCsrXG59XG5cbmZ1bmN0aW9uIGdldEV2ZW50KGVsZW1lbnQpIHtcbiAgY29uc3QgdWlkID0gZ2V0VWlkRXZlbnQoZWxlbWVudClcblxuICBlbGVtZW50LnVpZEV2ZW50ID0gdWlkXG4gIGV2ZW50UmVnaXN0cnlbdWlkXSA9IGV2ZW50UmVnaXN0cnlbdWlkXSB8fCB7fVxuXG4gIHJldHVybiBldmVudFJlZ2lzdHJ5W3VpZF1cbn1cblxuZnVuY3Rpb24gYm9vdHN0cmFwSGFuZGxlcihlbGVtZW50LCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LmRlbGVnYXRlVGFyZ2V0ID0gZWxlbWVudFxuXG4gICAgaWYgKGhhbmRsZXIub25lT2ZmKSB7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsIGV2ZW50LnR5cGUsIGZuKVxuICAgIH1cblxuICAgIHJldHVybiBmbi5hcHBseShlbGVtZW50LCBbZXZlbnRdKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyKGVsZW1lbnQsIHNlbGVjdG9yLCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuXG4gICAgZm9yIChsZXQgeyB0YXJnZXQgfSA9IGV2ZW50OyB0YXJnZXQgJiYgdGFyZ2V0ICE9PSB0aGlzOyB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZSkge1xuICAgICAgZm9yIChsZXQgaSA9IGRvbUVsZW1lbnRzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICBpZiAoZG9tRWxlbWVudHNbaV0gPT09IHRhcmdldCkge1xuICAgICAgICAgIGV2ZW50LmRlbGVnYXRlVGFyZ2V0ID0gdGFyZ2V0XG5cbiAgICAgICAgICBpZiAoaGFuZGxlci5vbmVPZmYpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL2NvbnNpc3RlbnQtZGVzdHJ1Y3R1cmluZ1xuICAgICAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCBldmVudC50eXBlLCBzZWxlY3RvciwgZm4pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRhcmdldCwgW2V2ZW50XSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRvIHBsZWFzZSBFU0xpbnRcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRIYW5kbGVyKGV2ZW50cywgaGFuZGxlciwgZGVsZWdhdGlvblNlbGVjdG9yID0gbnVsbCkge1xuICBjb25zdCB1aWRFdmVudExpc3QgPSBPYmplY3Qua2V5cyhldmVudHMpXG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHVpZEV2ZW50TGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzW3VpZEV2ZW50TGlzdFtpXV1cblxuICAgIGlmIChldmVudC5vcmlnaW5hbEhhbmRsZXIgPT09IGhhbmRsZXIgJiYgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yID09PSBkZWxlZ2F0aW9uU2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiBldmVudFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBhcmFtcyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKSB7XG4gIGNvbnN0IGRlbGVnYXRpb24gPSB0eXBlb2YgaGFuZGxlciA9PT0gJ3N0cmluZydcbiAgY29uc3Qgb3JpZ2luYWxIYW5kbGVyID0gZGVsZWdhdGlvbiA/IGRlbGVnYXRpb25GbiA6IGhhbmRsZXJcblxuICBsZXQgdHlwZUV2ZW50ID0gZ2V0VHlwZUV2ZW50KG9yaWdpbmFsVHlwZUV2ZW50KVxuICBjb25zdCBpc05hdGl2ZSA9IG5hdGl2ZUV2ZW50cy5oYXModHlwZUV2ZW50KVxuXG4gIGlmICghaXNOYXRpdmUpIHtcbiAgICB0eXBlRXZlbnQgPSBvcmlnaW5hbFR5cGVFdmVudFxuICB9XG5cbiAgcmV0dXJuIFtkZWxlZ2F0aW9uLCBvcmlnaW5hbEhhbmRsZXIsIHR5cGVFdmVudF1cbn1cblxuZnVuY3Rpb24gYWRkSGFuZGxlcihlbGVtZW50LCBvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuLCBvbmVPZmYpIHtcbiAgaWYgKHR5cGVvZiBvcmlnaW5hbFR5cGVFdmVudCAhPT0gJ3N0cmluZycgfHwgIWVsZW1lbnQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICghaGFuZGxlcikge1xuICAgIGhhbmRsZXIgPSBkZWxlZ2F0aW9uRm5cbiAgICBkZWxlZ2F0aW9uRm4gPSBudWxsXG4gIH1cblxuICAvLyBpbiBjYXNlIG9mIG1vdXNlZW50ZXIgb3IgbW91c2VsZWF2ZSB3cmFwIHRoZSBoYW5kbGVyIHdpdGhpbiBhIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIGZvciBpdHMgRE9NIHBvc2l0aW9uXG4gIC8vIHRoaXMgcHJldmVudHMgdGhlIGhhbmRsZXIgZnJvbSBiZWluZyBkaXNwYXRjaGVkIHRoZSBzYW1lIHdheSBhcyBtb3VzZW92ZXIgb3IgbW91c2VvdXQgZG9lc1xuICBpZiAoY3VzdG9tRXZlbnRzUmVnZXgudGVzdChvcmlnaW5hbFR5cGVFdmVudCkpIHtcbiAgICBjb25zdCB3cmFwRm4gPSBmbiA9PiB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICghZXZlbnQucmVsYXRlZFRhcmdldCB8fCAoZXZlbnQucmVsYXRlZFRhcmdldCAhPT0gZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgIWV2ZW50LmRlbGVnYXRlVGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpKSkge1xuICAgICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRlbGVnYXRpb25Gbikge1xuICAgICAgZGVsZWdhdGlvbkZuID0gd3JhcEZuKGRlbGVnYXRpb25GbilcbiAgICB9IGVsc2Uge1xuICAgICAgaGFuZGxlciA9IHdyYXBGbihoYW5kbGVyKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IFtkZWxlZ2F0aW9uLCBvcmlnaW5hbEhhbmRsZXIsIHR5cGVFdmVudF0gPSBub3JtYWxpemVQYXJhbXMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GbilcbiAgY29uc3QgZXZlbnRzID0gZ2V0RXZlbnQoZWxlbWVudClcbiAgY29uc3QgaGFuZGxlcnMgPSBldmVudHNbdHlwZUV2ZW50XSB8fCAoZXZlbnRzW3R5cGVFdmVudF0gPSB7fSlcbiAgY29uc3QgcHJldmlvdXNGbiA9IGZpbmRIYW5kbGVyKGhhbmRsZXJzLCBvcmlnaW5hbEhhbmRsZXIsIGRlbGVnYXRpb24gPyBoYW5kbGVyIDogbnVsbClcblxuICBpZiAocHJldmlvdXNGbikge1xuICAgIHByZXZpb3VzRm4ub25lT2ZmID0gcHJldmlvdXNGbi5vbmVPZmYgJiYgb25lT2ZmXG5cbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHVpZCA9IGdldFVpZEV2ZW50KG9yaWdpbmFsSGFuZGxlciwgb3JpZ2luYWxUeXBlRXZlbnQucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpKVxuICBjb25zdCBmbiA9IGRlbGVnYXRpb24gP1xuICAgIGJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GbikgOlxuICAgIGJvb3RzdHJhcEhhbmRsZXIoZWxlbWVudCwgaGFuZGxlcilcblxuICBmbi5kZWxlZ2F0aW9uU2VsZWN0b3IgPSBkZWxlZ2F0aW9uID8gaGFuZGxlciA6IG51bGxcbiAgZm4ub3JpZ2luYWxIYW5kbGVyID0gb3JpZ2luYWxIYW5kbGVyXG4gIGZuLm9uZU9mZiA9IG9uZU9mZlxuICBmbi51aWRFdmVudCA9IHVpZFxuICBoYW5kbGVyc1t1aWRdID0gZm5cblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgZGVsZWdhdGlvbilcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvblNlbGVjdG9yKSB7XG4gIGNvbnN0IGZuID0gZmluZEhhbmRsZXIoZXZlbnRzW3R5cGVFdmVudF0sIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3RvcilcblxuICBpZiAoIWZuKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgQm9vbGVhbihkZWxlZ2F0aW9uU2VsZWN0b3IpKVxuICBkZWxldGUgZXZlbnRzW3R5cGVFdmVudF1bZm4udWlkRXZlbnRdXG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgbmFtZXNwYWNlKSB7XG4gIGNvbnN0IHN0b3JlRWxlbWVudEV2ZW50ID0gZXZlbnRzW3R5cGVFdmVudF0gfHwge31cblxuICBPYmplY3Qua2V5cyhzdG9yZUVsZW1lbnRFdmVudCkuZm9yRWFjaChoYW5kbGVyS2V5ID0+IHtcbiAgICBpZiAoaGFuZGxlcktleS5pbmNsdWRlcyhuYW1lc3BhY2UpKSB7XG4gICAgICBjb25zdCBldmVudCA9IHN0b3JlRWxlbWVudEV2ZW50W2hhbmRsZXJLZXldXG5cbiAgICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgZXZlbnRzLCB0eXBlRXZlbnQsIGV2ZW50Lm9yaWdpbmFsSGFuZGxlciwgZXZlbnQuZGVsZWdhdGlvblNlbGVjdG9yKVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0VHlwZUV2ZW50KGV2ZW50KSB7XG4gIC8vIGFsbG93IHRvIGdldCB0aGUgbmF0aXZlIGV2ZW50cyBmcm9tIG5hbWVzcGFjZWQgZXZlbnRzICgnY2xpY2suYnMuYnV0dG9uJyAtLT4gJ2NsaWNrJylcbiAgZXZlbnQgPSBldmVudC5yZXBsYWNlKHN0cmlwTmFtZVJlZ2V4LCAnJylcbiAgcmV0dXJuIGN1c3RvbUV2ZW50c1tldmVudF0gfHwgZXZlbnRcbn1cblxuY29uc3QgRXZlbnRIYW5kbGVyID0ge1xuICBvbihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuKSB7XG4gICAgYWRkSGFuZGxlcihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZuLCBmYWxzZSlcbiAgfSxcblxuICBvbmUoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbikge1xuICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GbiwgdHJ1ZSlcbiAgfSxcblxuICBvZmYoZWxlbWVudCwgb3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25Gbikge1xuICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBbZGVsZWdhdGlvbiwgb3JpZ2luYWxIYW5kbGVyLCB0eXBlRXZlbnRdID0gbm9ybWFsaXplUGFyYW1zKG9yaWdpbmFsVHlwZUV2ZW50LCBoYW5kbGVyLCBkZWxlZ2F0aW9uRm4pXG4gICAgY29uc3QgaW5OYW1lc3BhY2UgPSB0eXBlRXZlbnQgIT09IG9yaWdpbmFsVHlwZUV2ZW50XG4gICAgY29uc3QgZXZlbnRzID0gZ2V0RXZlbnQoZWxlbWVudClcbiAgICBjb25zdCBpc05hbWVzcGFjZSA9IG9yaWdpbmFsVHlwZUV2ZW50LnN0YXJ0c1dpdGgoJy4nKVxuXG4gICAgaWYgKHR5cGVvZiBvcmlnaW5hbEhhbmRsZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBTaW1wbGVzdCBjYXNlOiBoYW5kbGVyIGlzIHBhc3NlZCwgcmVtb3ZlIHRoYXQgbGlzdGVuZXIgT05MWS5cbiAgICAgIGlmICghZXZlbnRzIHx8ICFldmVudHNbdHlwZUV2ZW50XSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgb3JpZ2luYWxIYW5kbGVyLCBkZWxlZ2F0aW9uID8gaGFuZGxlciA6IG51bGwpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaXNOYW1lc3BhY2UpIHtcbiAgICAgIE9iamVjdC5rZXlzKGV2ZW50cykuZm9yRWFjaChlbGVtZW50RXZlbnQgPT4ge1xuICAgICAgICByZW1vdmVOYW1lc3BhY2VkSGFuZGxlcnMoZWxlbWVudCwgZXZlbnRzLCBlbGVtZW50RXZlbnQsIG9yaWdpbmFsVHlwZUV2ZW50LnNsaWNlKDEpKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBzdG9yZUVsZW1lbnRFdmVudCA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IHt9XG4gICAgT2JqZWN0LmtleXMoc3RvcmVFbGVtZW50RXZlbnQpLmZvckVhY2goa2V5SGFuZGxlcnMgPT4ge1xuICAgICAgY29uc3QgaGFuZGxlcktleSA9IGtleUhhbmRsZXJzLnJlcGxhY2Uoc3RyaXBVaWRSZWdleCwgJycpXG5cbiAgICAgIGlmICghaW5OYW1lc3BhY2UgfHwgb3JpZ2luYWxUeXBlRXZlbnQuaW5jbHVkZXMoaGFuZGxlcktleSkpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBzdG9yZUVsZW1lbnRFdmVudFtrZXlIYW5kbGVyc11cblxuICAgICAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIGV2ZW50cywgdHlwZUV2ZW50LCBldmVudC5vcmlnaW5hbEhhbmRsZXIsIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvcilcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIHRyaWdnZXIoZWxlbWVudCwgZXZlbnQsIGFyZ3MpIHtcbiAgICBpZiAodHlwZW9mIGV2ZW50ICE9PSAnc3RyaW5nJyB8fCAhZWxlbWVudCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCAkID0gZ2V0alF1ZXJ5KClcbiAgICBjb25zdCB0eXBlRXZlbnQgPSBnZXRUeXBlRXZlbnQoZXZlbnQpXG4gICAgY29uc3QgaW5OYW1lc3BhY2UgPSBldmVudCAhPT0gdHlwZUV2ZW50XG4gICAgY29uc3QgaXNOYXRpdmUgPSBuYXRpdmVFdmVudHMuaGFzKHR5cGVFdmVudClcblxuICAgIGxldCBqUXVlcnlFdmVudFxuICAgIGxldCBidWJibGVzID0gdHJ1ZVxuICAgIGxldCBuYXRpdmVEaXNwYXRjaCA9IHRydWVcbiAgICBsZXQgZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlXG4gICAgbGV0IGV2dCA9IG51bGxcblxuICAgIGlmIChpbk5hbWVzcGFjZSAmJiAkKSB7XG4gICAgICBqUXVlcnlFdmVudCA9ICQuRXZlbnQoZXZlbnQsIGFyZ3MpXG5cbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcihqUXVlcnlFdmVudClcbiAgICAgIGJ1YmJsZXMgPSAhalF1ZXJ5RXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKVxuICAgICAgbmF0aXZlRGlzcGF0Y2ggPSAhalF1ZXJ5RXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKVxuICAgICAgZGVmYXVsdFByZXZlbnRlZCA9IGpRdWVyeUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpXG4gICAgfVxuXG4gICAgaWYgKGlzTmF0aXZlKSB7XG4gICAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpXG4gICAgICBldnQuaW5pdEV2ZW50KHR5cGVFdmVudCwgYnViYmxlcywgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50LCB7XG4gICAgICAgIGJ1YmJsZXMsXG4gICAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gbWVyZ2UgY3VzdG9tIGluZm9ybWF0aW9uIGluIG91ciBldmVudFxuICAgIGlmICh0eXBlb2YgYXJncyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKGFyZ3MpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV2dCwga2V5LCB7XG4gICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIGFyZ3Nba2V5XVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgaWYgKG5hdGl2ZURpc3BhdGNoKSB7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZ0KVxuICAgIH1cblxuICAgIGlmIChldnQuZGVmYXVsdFByZXZlbnRlZCAmJiB0eXBlb2YgalF1ZXJ5RXZlbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBqUXVlcnlFdmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgcmV0dXJuIGV2dFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50SGFuZGxlclxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBiYXNlLWNvbXBvbmVudC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQge1xuICBlbXVsYXRlVHJhbnNpdGlvbkVuZCxcbiAgZXhlY3V0ZSxcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnRcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBWRVJTSU9OID0gJzUuMC4xJ1xuXG5jbGFzcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIGVsZW1lbnQgPSBnZXRFbGVtZW50KGVsZW1lbnQpXG5cbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgRGF0YS5zZXQodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSwgdGhpcylcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgRGF0YS5yZW1vdmUodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSlcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRVZFTlRfS0VZKVxuXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykuZm9yRWFjaChwcm9wZXJ0eU5hbWUgPT4ge1xuICAgICAgdGhpc1twcm9wZXJ0eU5hbWVdID0gbnVsbFxuICAgIH0pXG4gIH1cblxuICBfcXVldWVDYWxsYmFjayhjYWxsYmFjaywgZWxlbWVudCwgaXNBbmltYXRlZCA9IHRydWUpIHtcbiAgICBpZiAoIWlzQW5pbWF0ZWQpIHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChlbGVtZW50KVxuICAgIEV2ZW50SGFuZGxlci5vbmUoZWxlbWVudCwgJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiBleGVjdXRlKGNhbGxiYWNrKSlcblxuICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKGVsZW1lbnQsIHRyYW5zaXRpb25EdXJhdGlvbilcbiAgfVxuXG4gIC8qKiBTdGF0aWMgKi9cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoZWxlbWVudCkge1xuICAgIHJldHVybiBEYXRhLmdldChlbGVtZW50LCB0aGlzLkRBVEFfS0VZKVxuICB9XG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgaGF2ZSB0byBpbXBsZW1lbnQgdGhlIHN0YXRpYyBtZXRob2QgXCJOQU1FXCIsIGZvciBlYWNoIGNvbXBvbmVudCEnKVxuICB9XG5cbiAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICByZXR1cm4gYGJzLiR7dGhpcy5OQU1FfWBcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRVZFTlRfS0VZKCkge1xuICAgIHJldHVybiBgLiR7dGhpcy5EQVRBX0tFWX1gXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUNvbXBvbmVudFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBhbGVydC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0RWxlbWVudEZyb21TZWxlY3RvclxufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdhbGVydCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmFsZXJ0J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IFNFTEVDVE9SX0RJU01JU1MgPSAnW2RhdGEtYnMtZGlzbWlzcz1cImFsZXJ0XCJdJ1xuXG5jb25zdCBFVkVOVF9DTE9TRSA9IGBjbG9zZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMT1NFRCA9IGBjbG9zZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9BTEVSVCA9ICdhbGVydCdcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBBbGVydCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBjbG9zZShlbGVtZW50KSB7XG4gICAgY29uc3Qgcm9vdEVsZW1lbnQgPSBlbGVtZW50ID8gdGhpcy5fZ2V0Um9vdEVsZW1lbnQoZWxlbWVudCkgOiB0aGlzLl9lbGVtZW50XG4gICAgY29uc3QgY3VzdG9tRXZlbnQgPSB0aGlzLl90cmlnZ2VyQ2xvc2VFdmVudChyb290RWxlbWVudClcblxuICAgIGlmIChjdXN0b21FdmVudCA9PT0gbnVsbCB8fCBjdXN0b21FdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9yZW1vdmVFbGVtZW50KHJvb3RFbGVtZW50KVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRSb290RWxlbWVudChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IoZWxlbWVudCkgfHwgZWxlbWVudC5jbG9zZXN0KGAuJHtDTEFTU19OQU1FX0FMRVJUfWApXG4gIH1cblxuICBfdHJpZ2dlckNsb3NlRXZlbnQoZWxlbWVudCkge1xuICAgIHJldHVybiBFdmVudEhhbmRsZXIudHJpZ2dlcihlbGVtZW50LCBFVkVOVF9DTE9TRSlcbiAgfVxuXG4gIF9yZW1vdmVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgY29uc3QgaXNBbmltYXRlZCA9IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSlcbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHRoaXMuX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQpLCBlbGVtZW50LCBpc0FuaW1hdGVkKVxuICB9XG5cbiAgX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudClcbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihlbGVtZW50LCBFVkVOVF9DTE9TRUQpXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSBEYXRhLmdldCh0aGlzLCBEQVRBX0tFWSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQWxlcnQodGhpcylcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZyA9PT0gJ2Nsb3NlJykge1xuICAgICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGhhbmRsZURpc21pc3MoYWxlcnRJbnN0YW5jZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9XG5cbiAgICAgIGFsZXJ0SW5zdGFuY2UuY2xvc2UodGhpcylcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9ESVNNSVNTLCBBbGVydC5oYW5kbGVEaXNtaXNzKG5ldyBBbGVydCgpKSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLkFsZXJ0IHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKEFsZXJ0KVxuXG5leHBvcnQgZGVmYXVsdCBBbGVydFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBidXR0b24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBkZWZpbmVKUXVlcnlQbHVnaW4gfSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdidXR0b24nXG5jb25zdCBEQVRBX0tFWSA9ICdicy5idXR0b24nXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJidXR0b25cIl0nXG5cbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZSgpIHtcbiAgICAvLyBUb2dnbGUgY2xhc3MgYW5kIHN5bmMgdGhlIGBhcmlhLXByZXNzZWRgIGF0dHJpYnV0ZSB3aXRoIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGAudG9nZ2xlKClgIG1ldGhvZFxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gRGF0YS5nZXQodGhpcywgREFUQV9LRVkpXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IEJ1dHRvbih0aGlzKVxuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnID09PSAndG9nZ2xlJykge1xuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZXZlbnQgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgY29uc3QgYnV0dG9uID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoU0VMRUNUT1JfREFUQV9UT0dHTEUpXG5cbiAgbGV0IGRhdGEgPSBEYXRhLmdldChidXR0b24sIERBVEFfS0VZKVxuICBpZiAoIWRhdGEpIHtcbiAgICBkYXRhID0gbmV3IEJ1dHRvbihidXR0b24pXG4gIH1cblxuICBkYXRhLnRvZ2dsZSgpXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuQnV0dG9uIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKEJ1dHRvbilcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IGRvbS9tYW5pcHVsYXRvci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZURhdGEodmFsKSB7XG4gIGlmICh2YWwgPT09ICd0cnVlJykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBpZiAodmFsID09PSAnZmFsc2UnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAodmFsID09PSBOdW1iZXIodmFsKS50b1N0cmluZygpKSB7XG4gICAgcmV0dXJuIE51bWJlcih2YWwpXG4gIH1cblxuICBpZiAodmFsID09PSAnJyB8fCB2YWwgPT09ICdudWxsJykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZURhdGFLZXkoa2V5KSB7XG4gIHJldHVybiBrZXkucmVwbGFjZSgvW0EtWl0vZywgY2hyID0+IGAtJHtjaHIudG9Mb3dlckNhc2UoKX1gKVxufVxuXG5jb25zdCBNYW5pcHVsYXRvciA9IHtcbiAgc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXksIHZhbHVlKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCwgdmFsdWUpXG4gIH0sXG5cbiAgcmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXkpIHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gKVxuICB9LFxuXG4gIGdldERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cblxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZWxlbWVudC5kYXRhc2V0KVxuICAgICAgLmZpbHRlcihrZXkgPT4ga2V5LnN0YXJ0c1dpdGgoJ2JzJykpXG4gICAgICAuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBsZXQgcHVyZUtleSA9IGtleS5yZXBsYWNlKC9eYnMvLCAnJylcbiAgICAgICAgcHVyZUtleSA9IHB1cmVLZXkuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBwdXJlS2V5LnNsaWNlKDEsIHB1cmVLZXkubGVuZ3RoKVxuICAgICAgICBhdHRyaWJ1dGVzW3B1cmVLZXldID0gbm9ybWFsaXplRGF0YShlbGVtZW50LmRhdGFzZXRba2V5XSlcbiAgICAgIH0pXG5cbiAgICByZXR1cm4gYXR0cmlidXRlc1xuICB9LFxuXG4gIGdldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwga2V5KSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZURhdGEoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCkpXG4gIH0sXG5cbiAgb2Zmc2V0KGVsZW1lbnQpIHtcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogcmVjdC50b3AgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxcbiAgICAgIGxlZnQ6IHJlY3QubGVmdCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdFxuICAgIH1cbiAgfSxcblxuICBwb3NpdGlvbihlbGVtZW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgICBsZWZ0OiBlbGVtZW50Lm9mZnNldExlZnRcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFuaXB1bGF0b3JcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogY2Fyb3VzZWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGlzUlRMLFxuICBpc1Zpc2libGUsXG4gIHJlZmxvdyxcbiAgdHJpZ2dlclRyYW5zaXRpb25FbmQsXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnY2Fyb3VzZWwnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5jYXJvdXNlbCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBBUlJPV19MRUZUX0tFWSA9ICdBcnJvd0xlZnQnXG5jb25zdCBBUlJPV19SSUdIVF9LRVkgPSAnQXJyb3dSaWdodCdcbmNvbnN0IFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgPSA1MDAgLy8gVGltZSBmb3IgbW91c2UgY29tcGF0IGV2ZW50cyB0byBmaXJlIGFmdGVyIHRvdWNoXG5jb25zdCBTV0lQRV9USFJFU0hPTEQgPSA0MFxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBpbnRlcnZhbDogNTAwMCxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIHNsaWRlOiBmYWxzZSxcbiAgcGF1c2U6ICdob3ZlcicsXG4gIHdyYXA6IHRydWUsXG4gIHRvdWNoOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBpbnRlcnZhbDogJyhudW1iZXJ8Ym9vbGVhbiknLFxuICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICBzbGlkZTogJyhib29sZWFufHN0cmluZyknLFxuICBwYXVzZTogJyhzdHJpbmd8Ym9vbGVhbiknLFxuICB3cmFwOiAnYm9vbGVhbicsXG4gIHRvdWNoOiAnYm9vbGVhbidcbn1cblxuY29uc3QgT1JERVJfTkVYVCA9ICduZXh0J1xuY29uc3QgT1JERVJfUFJFViA9ICdwcmV2J1xuY29uc3QgRElSRUNUSU9OX0xFRlQgPSAnbGVmdCdcbmNvbnN0IERJUkVDVElPTl9SSUdIVCA9ICdyaWdodCdcblxuY29uc3QgRVZFTlRfU0xJREUgPSBgc2xpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TTElEID0gYHNsaWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOID0gYGtleWRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRUVOVEVSID0gYG1vdXNlZW50ZXIke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRUxFQVZFID0gYG1vdXNlbGVhdmUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9UT1VDSFNUQVJUID0gYHRvdWNoc3RhcnQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9UT1VDSE1PVkUgPSBgdG91Y2htb3ZlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hFTkQgPSBgdG91Y2hlbmQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9QT0lOVEVSRE9XTiA9IGBwb2ludGVyZG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1BPSU5URVJVUCA9IGBwb2ludGVydXAke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9EUkFHX1NUQVJUID0gYGRyYWdzdGFydCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0NBUk9VU0VMID0gJ2Nhcm91c2VsJ1xuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TTElERSA9ICdzbGlkZSdcbmNvbnN0IENMQVNTX05BTUVfRU5EID0gJ2Nhcm91c2VsLWl0ZW0tZW5kJ1xuY29uc3QgQ0xBU1NfTkFNRV9TVEFSVCA9ICdjYXJvdXNlbC1pdGVtLXN0YXJ0J1xuY29uc3QgQ0xBU1NfTkFNRV9ORVhUID0gJ2Nhcm91c2VsLWl0ZW0tbmV4dCdcbmNvbnN0IENMQVNTX05BTUVfUFJFViA9ICdjYXJvdXNlbC1pdGVtLXByZXYnXG5jb25zdCBDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQgPSAncG9pbnRlci1ldmVudCdcblxuY29uc3QgU0VMRUNUT1JfQUNUSVZFID0gJy5hY3RpdmUnXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkVfSVRFTSA9ICcuYWN0aXZlLmNhcm91c2VsLWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9JVEVNID0gJy5jYXJvdXNlbC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfSVRFTV9JTUcgPSAnLmNhcm91c2VsLWl0ZW0gaW1nJ1xuY29uc3QgU0VMRUNUT1JfTkVYVF9QUkVWID0gJy5jYXJvdXNlbC1pdGVtLW5leHQsIC5jYXJvdXNlbC1pdGVtLXByZXYnXG5jb25zdCBTRUxFQ1RPUl9JTkRJQ0FUT1JTID0gJy5jYXJvdXNlbC1pbmRpY2F0b3JzJ1xuY29uc3QgU0VMRUNUT1JfSU5ESUNBVE9SID0gJ1tkYXRhLWJzLXRhcmdldF0nXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1NMSURFID0gJ1tkYXRhLWJzLXNsaWRlXSwgW2RhdGEtYnMtc2xpZGUtdG9dJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9SSURFID0gJ1tkYXRhLWJzLXJpZGU9XCJjYXJvdXNlbFwiXSdcblxuY29uc3QgUE9JTlRFUl9UWVBFX1RPVUNIID0gJ3RvdWNoJ1xuY29uc3QgUE9JTlRFUl9UWVBFX1BFTiA9ICdwZW4nXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuY2xhc3MgQ2Fyb3VzZWwgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudClcblxuICAgIHRoaXMuX2l0ZW1zID0gbnVsbFxuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5faXNQYXVzZWQgPSBmYWxzZVxuICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG4gICAgdGhpcy50b3VjaFRpbWVvdXQgPSBudWxsXG4gICAgdGhpcy50b3VjaFN0YXJ0WCA9IDBcbiAgICB0aGlzLnRvdWNoRGVsdGFYID0gMFxuXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfSU5ESUNBVE9SUywgdGhpcy5fZWxlbWVudClcbiAgICB0aGlzLl90b3VjaFN1cHBvcnRlZCA9ICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwXG4gICAgdGhpcy5fcG9pbnRlckV2ZW50ID0gQm9vbGVhbih3aW5kb3cuUG9pbnRlckV2ZW50KVxuXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBuZXh0KCkge1xuICAgIGlmICghdGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICB0aGlzLl9zbGlkZShPUkRFUl9ORVhUKVxuICAgIH1cbiAgfVxuXG4gIG5leHRXaGVuVmlzaWJsZSgpIHtcbiAgICAvLyBEb24ndCBjYWxsIG5leHQgd2hlbiB0aGUgcGFnZSBpc24ndCB2aXNpYmxlXG4gICAgLy8gb3IgdGhlIGNhcm91c2VsIG9yIGl0cyBwYXJlbnQgaXNuJ3QgdmlzaWJsZVxuICAgIGlmICghZG9jdW1lbnQuaGlkZGVuICYmIGlzVmlzaWJsZSh0aGlzLl9lbGVtZW50KSkge1xuICAgICAgdGhpcy5uZXh0KClcbiAgICB9XG4gIH1cblxuICBwcmV2KCkge1xuICAgIGlmICghdGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICB0aGlzLl9zbGlkZShPUkRFUl9QUkVWKVxuICAgIH1cbiAgfVxuXG4gIHBhdXNlKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudCkge1xuICAgICAgdGhpcy5faXNQYXVzZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfTkVYVF9QUkVWLCB0aGlzLl9lbGVtZW50KSkge1xuICAgICAgdHJpZ2dlclRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudClcbiAgICAgIHRoaXMuY3ljbGUodHJ1ZSlcbiAgICB9XG5cbiAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKVxuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICB9XG5cbiAgY3ljbGUoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICB0aGlzLl9pc1BhdXNlZCA9IGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2ludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKVxuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZyAmJiB0aGlzLl9jb25maWcuaW50ZXJ2YWwgJiYgIXRoaXMuX2lzUGF1c2VkKSB7XG4gICAgICB0aGlzLl91cGRhdGVJbnRlcnZhbCgpXG5cbiAgICAgIHRoaXMuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoXG4gICAgICAgIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPyB0aGlzLm5leHRXaGVuVmlzaWJsZSA6IHRoaXMubmV4dCkuYmluZCh0aGlzKSxcbiAgICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgdG8oaW5kZXgpIHtcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkVfSVRFTSwgdGhpcy5fZWxlbWVudClcbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleCh0aGlzLl9hY3RpdmVFbGVtZW50KVxuXG4gICAgaWYgKGluZGV4ID4gdGhpcy5faXRlbXMubGVuZ3RoIC0gMSB8fCBpbmRleCA8IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJRCwgKCkgPT4gdGhpcy50byhpbmRleCkpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlSW5kZXggPT09IGluZGV4KSB7XG4gICAgICB0aGlzLnBhdXNlKClcbiAgICAgIHRoaXMuY3ljbGUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgb3JkZXIgPSBpbmRleCA+IGFjdGl2ZUluZGV4ID9cbiAgICAgIE9SREVSX05FWFQgOlxuICAgICAgT1JERVJfUFJFVlxuXG4gICAgdGhpcy5fc2xpZGUob3JkZXIsIHRoaXMuX2l0ZW1zW2luZGV4XSlcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5jb25maWdcbiAgICB9XG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2hhbmRsZVN3aXBlKCkge1xuICAgIGNvbnN0IGFic0RlbHRheCA9IE1hdGguYWJzKHRoaXMudG91Y2hEZWx0YVgpXG5cbiAgICBpZiAoYWJzRGVsdGF4IDw9IFNXSVBFX1RIUkVTSE9MRCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGlyZWN0aW9uID0gYWJzRGVsdGF4IC8gdGhpcy50b3VjaERlbHRhWFxuXG4gICAgdGhpcy50b3VjaERlbHRhWCA9IDBcblxuICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9zbGlkZShkaXJlY3Rpb24gPiAwID8gRElSRUNUSU9OX1JJR0hUIDogRElSRUNUSU9OX0xFRlQpXG4gIH1cblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV04sIGV2ZW50ID0+IHRoaXMuX2tleWRvd24oZXZlbnQpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRUVOVEVSLCBldmVudCA9PiB0aGlzLnBhdXNlKGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRUxFQVZFLCBldmVudCA9PiB0aGlzLmN5Y2xlKGV2ZW50KSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnRvdWNoICYmIHRoaXMuX3RvdWNoU3VwcG9ydGVkKSB7XG4gICAgICB0aGlzLl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG4gIH1cblxuICBfYWRkVG91Y2hFdmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCBzdGFydCA9IGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLl9wb2ludGVyRXZlbnQgJiYgKGV2ZW50LnBvaW50ZXJUeXBlID09PSBQT0lOVEVSX1RZUEVfUEVOIHx8IGV2ZW50LnBvaW50ZXJUeXBlID09PSBQT0lOVEVSX1RZUEVfVE9VQ0gpKSB7XG4gICAgICAgIHRoaXMudG91Y2hTdGFydFggPSBldmVudC5jbGllbnRYXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLl9wb2ludGVyRXZlbnQpIHtcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0WCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1vdmUgPSBldmVudCA9PiB7XG4gICAgICAvLyBlbnN1cmUgc3dpcGluZyB3aXRoIG9uZSB0b3VjaCBhbmQgbm90IHBpbmNoaW5nXG4gICAgICB0aGlzLnRvdWNoRGVsdGFYID0gZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA+IDEgP1xuICAgICAgICAwIDpcbiAgICAgICAgZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIC0gdGhpcy50b3VjaFN0YXJ0WFxuICAgIH1cblxuICAgIGNvbnN0IGVuZCA9IGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLl9wb2ludGVyRXZlbnQgJiYgKGV2ZW50LnBvaW50ZXJUeXBlID09PSBQT0lOVEVSX1RZUEVfUEVOIHx8IGV2ZW50LnBvaW50ZXJUeXBlID09PSBQT0lOVEVSX1RZUEVfVE9VQ0gpKSB7XG4gICAgICAgIHRoaXMudG91Y2hEZWx0YVggPSBldmVudC5jbGllbnRYIC0gdGhpcy50b3VjaFN0YXJ0WFxuICAgICAgfVxuXG4gICAgICB0aGlzLl9oYW5kbGVTd2lwZSgpXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICAgIC8vIElmIGl0J3MgYSB0b3VjaC1lbmFibGVkIGRldmljZSwgbW91c2VlbnRlci9sZWF2ZSBhcmUgZmlyZWQgYXNcbiAgICAgICAgLy8gcGFydCBvZiB0aGUgbW91c2UgY29tcGF0aWJpbGl0eSBldmVudHMgb24gZmlyc3QgdGFwIC0gdGhlIGNhcm91c2VsXG4gICAgICAgIC8vIHdvdWxkIHN0b3AgY3ljbGluZyB1bnRpbCB1c2VyIHRhcHBlZCBvdXQgb2YgaXQ7XG4gICAgICAgIC8vIGhlcmUsIHdlIGxpc3RlbiBmb3IgdG91Y2hlbmQsIGV4cGxpY2l0bHkgcGF1c2UgdGhlIGNhcm91c2VsXG4gICAgICAgIC8vIChhcyBpZiBpdCdzIHRoZSBzZWNvbmQgdGltZSB3ZSB0YXAgb24gaXQsIG1vdXNlZW50ZXIgY29tcGF0IGV2ZW50XG4gICAgICAgIC8vIGlzIE5PVCBmaXJlZCkgYW5kIGFmdGVyIGEgdGltZW91dCAodG8gYWxsb3cgZm9yIG1vdXNlIGNvbXBhdGliaWxpdHlcbiAgICAgICAgLy8gZXZlbnRzIHRvIGZpcmUpIHdlIGV4cGxpY2l0bHkgcmVzdGFydCBjeWNsaW5nXG5cbiAgICAgICAgdGhpcy5wYXVzZSgpXG4gICAgICAgIGlmICh0aGlzLnRvdWNoVGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRvdWNoVGltZW91dClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gc2V0VGltZW91dChldmVudCA9PiB0aGlzLmN5Y2xlKGV2ZW50KSwgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCArIHRoaXMuX2NvbmZpZy5pbnRlcnZhbClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lURU1fSU1HLCB0aGlzLl9lbGVtZW50KS5mb3JFYWNoKGl0ZW1JbWcgPT4ge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKGl0ZW1JbWcsIEVWRU5UX0RSQUdfU1RBUlQsIGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5fcG9pbnRlckV2ZW50KSB7XG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfUE9JTlRFUkRPV04sIGV2ZW50ID0+IHN0YXJ0KGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9QT0lOVEVSVVAsIGV2ZW50ID0+IGVuZChldmVudCkpXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQpXG4gICAgfSBlbHNlIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSFNUQVJULCBldmVudCA9PiBzdGFydChldmVudCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfVE9VQ0hNT1ZFLCBldmVudCA9PiBtb3ZlKGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSEVORCwgZXZlbnQgPT4gZW5kKGV2ZW50KSlcbiAgICB9XG4gIH1cblxuICBfa2V5ZG93bihldmVudCkge1xuICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gQVJST1dfTEVGVF9LRVkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuX3NsaWRlKERJUkVDVElPTl9SSUdIVClcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gQVJST1dfUklHSFRfS0VZKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLl9zbGlkZShESVJFQ1RJT05fTEVGVClcbiAgICB9XG4gIH1cblxuICBfZ2V0SXRlbUluZGV4KGVsZW1lbnQpIHtcbiAgICB0aGlzLl9pdGVtcyA9IGVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnROb2RlID9cbiAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSVRFTSwgZWxlbWVudC5wYXJlbnROb2RlKSA6XG4gICAgICBbXVxuXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmluZGV4T2YoZWxlbWVudClcbiAgfVxuXG4gIF9nZXRJdGVtQnlPcmRlcihvcmRlciwgYWN0aXZlRWxlbWVudCkge1xuICAgIGNvbnN0IGlzTmV4dCA9IG9yZGVyID09PSBPUkRFUl9ORVhUXG4gICAgY29uc3QgaXNQcmV2ID0gb3JkZXIgPT09IE9SREVSX1BSRVZcbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChhY3RpdmVFbGVtZW50KVxuICAgIGNvbnN0IGxhc3RJdGVtSW5kZXggPSB0aGlzLl9pdGVtcy5sZW5ndGggLSAxXG4gICAgY29uc3QgaXNHb2luZ1RvV3JhcCA9IChpc1ByZXYgJiYgYWN0aXZlSW5kZXggPT09IDApIHx8IChpc05leHQgJiYgYWN0aXZlSW5kZXggPT09IGxhc3RJdGVtSW5kZXgpXG5cbiAgICBpZiAoaXNHb2luZ1RvV3JhcCAmJiAhdGhpcy5fY29uZmlnLndyYXApIHtcbiAgICAgIHJldHVybiBhY3RpdmVFbGVtZW50XG4gICAgfVxuXG4gICAgY29uc3QgZGVsdGEgPSBpc1ByZXYgPyAtMSA6IDFcbiAgICBjb25zdCBpdGVtSW5kZXggPSAoYWN0aXZlSW5kZXggKyBkZWx0YSkgJSB0aGlzLl9pdGVtcy5sZW5ndGhcblxuICAgIHJldHVybiBpdGVtSW5kZXggPT09IC0xID9cbiAgICAgIHRoaXMuX2l0ZW1zW3RoaXMuX2l0ZW1zLmxlbmd0aCAtIDFdIDpcbiAgICAgIHRoaXMuX2l0ZW1zW2l0ZW1JbmRleF1cbiAgfVxuXG4gIF90cmlnZ2VyU2xpZGVFdmVudChyZWxhdGVkVGFyZ2V0LCBldmVudERpcmVjdGlvbk5hbWUpIHtcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChyZWxhdGVkVGFyZ2V0KVxuICAgIGNvbnN0IGZyb21JbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRV9JVEVNLCB0aGlzLl9lbGVtZW50KSlcblxuICAgIHJldHVybiBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TTElERSwge1xuICAgICAgcmVsYXRlZFRhcmdldCxcbiAgICAgIGRpcmVjdGlvbjogZXZlbnREaXJlY3Rpb25OYW1lLFxuICAgICAgZnJvbTogZnJvbUluZGV4LFxuICAgICAgdG86IHRhcmdldEluZGV4XG4gICAgfSlcbiAgfVxuXG4gIF9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGFjdGl2ZUluZGljYXRvciA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFLCB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudClcblxuICAgICAgYWN0aXZlSW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICBhY3RpdmVJbmRpY2F0b3IucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKVxuXG4gICAgICBjb25zdCBpbmRpY2F0b3JzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JTkRJQ0FUT1IsIHRoaXMuX2luZGljYXRvcnNFbGVtZW50KVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGljYXRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKE51bWJlci5wYXJzZUludChpbmRpY2F0b3JzW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1icy1zbGlkZS10bycpLCAxMCkgPT09IHRoaXMuX2dldEl0ZW1JbmRleChlbGVtZW50KSkge1xuICAgICAgICAgIGluZGljYXRvcnNbaV0uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgICAgICBpbmRpY2F0b3JzW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JywgJ3RydWUnKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfdXBkYXRlSW50ZXJ2YWwoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2FjdGl2ZUVsZW1lbnQgfHwgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9BQ1RJVkVfSVRFTSwgdGhpcy5fZWxlbWVudClcblxuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudEludGVydmFsID0gTnVtYmVyLnBhcnNlSW50KGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLWludGVydmFsJyksIDEwKVxuXG4gICAgaWYgKGVsZW1lbnRJbnRlcnZhbCkge1xuICAgICAgdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbCA9IHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgfHwgdGhpcy5fY29uZmlnLmludGVydmFsXG4gICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWwgPSBlbGVtZW50SW50ZXJ2YWxcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsID0gdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuaW50ZXJ2YWxcbiAgICB9XG4gIH1cblxuICBfc2xpZGUoZGlyZWN0aW9uT3JPcmRlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IG9yZGVyID0gdGhpcy5fZGlyZWN0aW9uVG9PcmRlcihkaXJlY3Rpb25Pck9yZGVyKVxuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRV9JVEVNLCB0aGlzLl9lbGVtZW50KVxuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChhY3RpdmVFbGVtZW50KVxuICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZWxlbWVudCB8fCB0aGlzLl9nZXRJdGVtQnlPcmRlcihvcmRlciwgYWN0aXZlRWxlbWVudClcblxuICAgIGNvbnN0IG5leHRFbGVtZW50SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgobmV4dEVsZW1lbnQpXG4gICAgY29uc3QgaXNDeWNsaW5nID0gQm9vbGVhbih0aGlzLl9pbnRlcnZhbClcblxuICAgIGNvbnN0IGlzTmV4dCA9IG9yZGVyID09PSBPUkRFUl9ORVhUXG4gICAgY29uc3QgZGlyZWN0aW9uYWxDbGFzc05hbWUgPSBpc05leHQgPyBDTEFTU19OQU1FX1NUQVJUIDogQ0xBU1NfTkFNRV9FTkRcbiAgICBjb25zdCBvcmRlckNsYXNzTmFtZSA9IGlzTmV4dCA/IENMQVNTX05BTUVfTkVYVCA6IENMQVNTX05BTUVfUFJFVlxuICAgIGNvbnN0IGV2ZW50RGlyZWN0aW9uTmFtZSA9IHRoaXMuX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpXG5cbiAgICBpZiAobmV4dEVsZW1lbnQgJiYgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQUNUSVZFKSkge1xuICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNsaWRlRXZlbnQgPSB0aGlzLl90cmlnZ2VyU2xpZGVFdmVudChuZXh0RWxlbWVudCwgZXZlbnREaXJlY3Rpb25OYW1lKVxuICAgIGlmIChzbGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghYWN0aXZlRWxlbWVudCB8fCAhbmV4dEVsZW1lbnQpIHtcbiAgICAgIC8vIFNvbWUgd2VpcmRuZXNzIGlzIGhhcHBlbmluZywgc28gd2UgYmFpbFxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTbGlkaW5nID0gdHJ1ZVxuXG4gICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgdGhpcy5wYXVzZSgpXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChuZXh0RWxlbWVudClcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gbmV4dEVsZW1lbnRcblxuICAgIGNvbnN0IHRyaWdnZXJTbGlkRXZlbnQgPSAoKSA9PiB7XG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TTElELCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IG5leHRFbGVtZW50LFxuICAgICAgICBkaXJlY3Rpb246IGV2ZW50RGlyZWN0aW9uTmFtZSxcbiAgICAgICAgZnJvbTogYWN0aXZlRWxlbWVudEluZGV4LFxuICAgICAgICB0bzogbmV4dEVsZW1lbnRJbmRleFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TTElERSkpIHtcbiAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQob3JkZXJDbGFzc05hbWUpXG5cbiAgICAgIHJlZmxvdyhuZXh0RWxlbWVudClcblxuICAgICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChkaXJlY3Rpb25hbENsYXNzTmFtZSlcblxuICAgICAgY29uc3QgY29tcGxldGVDYWxsQmFjayA9ICgpID0+IHtcbiAgICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShkaXJlY3Rpb25hbENsYXNzTmFtZSwgb3JkZXJDbGFzc05hbWUpXG4gICAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICAgICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFLCBvcmRlckNsYXNzTmFtZSwgZGlyZWN0aW9uYWxDbGFzc05hbWUpXG5cbiAgICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcblxuICAgICAgICBzZXRUaW1lb3V0KHRyaWdnZXJTbGlkRXZlbnQsIDApXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsQmFjaywgYWN0aXZlRWxlbWVudCwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcbiAgICAgIHRyaWdnZXJTbGlkRXZlbnQoKVxuICAgIH1cblxuICAgIGlmIChpc0N5Y2xpbmcpIHtcbiAgICAgIHRoaXMuY3ljbGUoKVxuICAgIH1cbiAgfVxuXG4gIF9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbikge1xuICAgIGlmICghW0RJUkVDVElPTl9SSUdIVCwgRElSRUNUSU9OX0xFRlRdLmluY2x1ZGVzKGRpcmVjdGlvbikpIHtcbiAgICAgIHJldHVybiBkaXJlY3Rpb25cbiAgICB9XG5cbiAgICBpZiAoaXNSVEwoKSkge1xuICAgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX0xFRlQgPyBPUkRFUl9QUkVWIDogT1JERVJfTkVYVFxuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rpb24gPT09IERJUkVDVElPTl9MRUZUID8gT1JERVJfTkVYVCA6IE9SREVSX1BSRVZcbiAgfVxuXG4gIF9vcmRlclRvRGlyZWN0aW9uKG9yZGVyKSB7XG4gICAgaWYgKCFbT1JERVJfTkVYVCwgT1JERVJfUFJFVl0uaW5jbHVkZXMob3JkZXIpKSB7XG4gICAgICByZXR1cm4gb3JkZXJcbiAgICB9XG5cbiAgICBpZiAoaXNSVEwoKSkge1xuICAgICAgcmV0dXJuIG9yZGVyID09PSBPUkRFUl9QUkVWID8gRElSRUNUSU9OX0xFRlQgOiBESVJFQ1RJT05fUklHSFRcbiAgICB9XG5cbiAgICByZXR1cm4gb3JkZXIgPT09IE9SREVSX1BSRVYgPyBESVJFQ1RJT05fUklHSFQgOiBESVJFQ1RJT05fTEVGVFxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGNhcm91c2VsSW50ZXJmYWNlKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIGxldCBkYXRhID0gRGF0YS5nZXQoZWxlbWVudCwgREFUQV9LRVkpXG4gICAgbGV0IF9jb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXMoZWxlbWVudClcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIF9jb25maWcgPSB7XG4gICAgICAgIC4uLl9jb25maWcsXG4gICAgICAgIC4uLmNvbmZpZ1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFjdGlvbiA9IHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnID8gY29uZmlnIDogX2NvbmZpZy5zbGlkZVxuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBkYXRhID0gbmV3IENhcm91c2VsKGVsZW1lbnQsIF9jb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdudW1iZXInKSB7XG4gICAgICBkYXRhLnRvKGNvbmZpZylcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodHlwZW9mIGRhdGFbYWN0aW9uXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHthY3Rpb259XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2FjdGlvbl0oKVxuICAgIH0gZWxzZSBpZiAoX2NvbmZpZy5pbnRlcnZhbCAmJiBfY29uZmlnLnJpZGUpIHtcbiAgICAgIGRhdGEucGF1c2UoKVxuICAgICAgZGF0YS5jeWNsZSgpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIENhcm91c2VsLmNhcm91c2VsSW50ZXJmYWNlKHRoaXMsIGNvbmZpZylcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGRhdGFBcGlDbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpXG5cbiAgICBpZiAoIXRhcmdldCB8fCAhdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0NBUk9VU0VMKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgLi4uTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGFyZ2V0KSxcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMpXG4gICAgfVxuICAgIGNvbnN0IHNsaWRlSW5kZXggPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1icy1zbGlkZS10bycpXG5cbiAgICBpZiAoc2xpZGVJbmRleCkge1xuICAgICAgY29uZmlnLmludGVydmFsID0gZmFsc2VcbiAgICB9XG5cbiAgICBDYXJvdXNlbC5jYXJvdXNlbEludGVyZmFjZSh0YXJnZXQsIGNvbmZpZylcblxuICAgIGlmIChzbGlkZUluZGV4KSB7XG4gICAgICBEYXRhLmdldCh0YXJnZXQsIERBVEFfS0VZKS50byhzbGlkZUluZGV4KVxuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfU0xJREUsIENhcm91c2VsLmRhdGFBcGlDbGlja0hhbmRsZXIpXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgY29uc3QgY2Fyb3VzZWxzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1JJREUpXG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNhcm91c2Vscy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIENhcm91c2VsLmNhcm91c2VsSW50ZXJmYWNlKGNhcm91c2Vsc1tpXSwgRGF0YS5nZXQoY2Fyb3VzZWxzW2ldLCBEQVRBX0tFWSkpXG4gIH1cbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5DYXJvdXNlbCB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihDYXJvdXNlbClcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogY29sbGFwc2UuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnQsXG4gIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQsXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIHJlZmxvdyxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdjb2xsYXBzZSdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmNvbGxhcHNlJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIHRvZ2dsZTogdHJ1ZSxcbiAgcGFyZW50OiAnJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgdG9nZ2xlOiAnYm9vbGVhbicsXG4gIHBhcmVudDogJyhzdHJpbmd8ZWxlbWVudCknXG59XG5cbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0UgPSAnY29sbGFwc2UnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNJTkcgPSAnY29sbGFwc2luZydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0VEID0gJ2NvbGxhcHNlZCdcblxuY29uc3QgV0lEVEggPSAnd2lkdGgnXG5jb25zdCBIRUlHSFQgPSAnaGVpZ2h0J1xuXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkVTID0gJy5zaG93LCAuY29sbGFwc2luZydcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJdJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgQ29sbGFwc2UgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudClcblxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl90cmlnZ2VyQXJyYXkgPSBTZWxlY3RvckVuZ2luZS5maW5kKFxuICAgICAgYCR7U0VMRUNUT1JfREFUQV9UT0dHTEV9W2hyZWY9XCIjJHt0aGlzLl9lbGVtZW50LmlkfVwiXSxgICtcbiAgICAgIGAke1NFTEVDVE9SX0RBVEFfVE9HR0xFfVtkYXRhLWJzLXRhcmdldD1cIiMke3RoaXMuX2VsZW1lbnQuaWR9XCJdYFxuICAgIClcblxuICAgIGNvbnN0IHRvZ2dsZUxpc3QgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFKVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRvZ2dsZUxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IGVsZW0gPSB0b2dnbGVMaXN0W2ldXG4gICAgICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbSlcbiAgICAgIGNvbnN0IGZpbHRlckVsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yKVxuICAgICAgICAuZmlsdGVyKGZvdW5kRWxlbSA9PiBmb3VuZEVsZW0gPT09IHRoaXMuX2VsZW1lbnQpXG5cbiAgICAgIGlmIChzZWxlY3RvciAhPT0gbnVsbCAmJiBmaWx0ZXJFbGVtZW50Lmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9zZWxlY3RvciA9IHNlbGVjdG9yXG4gICAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5wdXNoKGVsZW0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudCA/IHRoaXMuX2dldFBhcmVudCgpIDogbnVsbFxuXG4gICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy5fZWxlbWVudCwgdGhpcy5fdHJpZ2dlckFycmF5KVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG9nZ2xlKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdygpXG4gICAgfVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBhY3RpdmVzXG4gICAgbGV0IGFjdGl2ZXNEYXRhXG5cbiAgICBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICBhY3RpdmVzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9BQ1RJVkVTLCB0aGlzLl9wYXJlbnQpXG4gICAgICAgIC5maWx0ZXIoZWxlbSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucGFyZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWJzLXBhcmVudCcpID09PSB0aGlzLl9jb25maWcucGFyZW50XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgICAgIH0pXG5cbiAgICAgIGlmIChhY3RpdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBhY3RpdmVzID0gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUodGhpcy5fc2VsZWN0b3IpXG4gICAgaWYgKGFjdGl2ZXMpIHtcbiAgICAgIGNvbnN0IHRlbXBBY3RpdmVEYXRhID0gYWN0aXZlcy5maW5kKGVsZW0gPT4gY29udGFpbmVyICE9PSBlbGVtKVxuICAgICAgYWN0aXZlc0RhdGEgPSB0ZW1wQWN0aXZlRGF0YSA/IERhdGEuZ2V0KHRlbXBBY3RpdmVEYXRhLCBEQVRBX0tFWSkgOiBudWxsXG5cbiAgICAgIGlmIChhY3RpdmVzRGF0YSAmJiBhY3RpdmVzRGF0YS5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XKVxuICAgIGlmIChzdGFydEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChhY3RpdmVzKSB7XG4gICAgICBhY3RpdmVzLmZvckVhY2goZWxlbUFjdGl2ZSA9PiB7XG4gICAgICAgIGlmIChjb250YWluZXIgIT09IGVsZW1BY3RpdmUpIHtcbiAgICAgICAgICBDb2xsYXBzZS5jb2xsYXBzZUludGVyZmFjZShlbGVtQWN0aXZlLCAnaGlkZScpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFjdGl2ZXNEYXRhKSB7XG4gICAgICAgICAgRGF0YS5zZXQoZWxlbUFjdGl2ZSwgREFUQV9LRVksIG51bGwpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKClcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNJTkcpXG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAwXG5cbiAgICBpZiAodGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgdGhpcy5fdHJpZ2dlckFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFRClcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcodHJ1ZSlcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0lORylcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9ICcnXG5cbiAgICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyhmYWxzZSlcblxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04pXG4gICAgfVxuXG4gICAgY29uc3QgY2FwaXRhbGl6ZWREaW1lbnNpb24gPSBkaW1lbnNpb25bMF0udG9VcHBlckNhc2UoKSArIGRpbWVuc2lvbi5zbGljZSgxKVxuICAgIGNvbnN0IHNjcm9sbFNpemUgPSBgc2Nyb2xsJHtjYXBpdGFsaXplZERpbWVuc2lvbn1gXG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnRbc2Nyb2xsU2l6ZV19cHhgXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgIXRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuICAgIGlmIChzdGFydEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpbWVuc2lvbl19cHhgXG5cbiAgICByZWZsb3codGhpcy5fZWxlbWVudClcblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0UsIENMQVNTX05BTUVfU0hPVylcblxuICAgIGNvbnN0IHRyaWdnZXJBcnJheUxlbmd0aCA9IHRoaXMuX3RyaWdnZXJBcnJheS5sZW5ndGhcbiAgICBpZiAodHJpZ2dlckFycmF5TGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmlnZ2VyQXJyYXlMZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0cmlnZ2VyID0gdGhpcy5fdHJpZ2dlckFycmF5W2ldXG4gICAgICAgIGNvbnN0IGVsZW0gPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRyaWdnZXIpXG5cbiAgICAgICAgaWYgKGVsZW0gJiYgIWVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgICAgICB0cmlnZ2VyLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRUQpXG4gICAgICAgICAgdHJpZ2dlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcoZmFsc2UpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gIH1cblxuICBzZXRUcmFuc2l0aW9uaW5nKGlzVHJhbnNpdGlvbmluZykge1xuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGlzVHJhbnNpdGlvbmluZ1xuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cbiAgICBjb25maWcudG9nZ2xlID0gQm9vbGVhbihjb25maWcudG9nZ2xlKSAvLyBDb2VyY2Ugc3RyaW5nIHZhbHVlc1xuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXREaW1lbnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFdJRFRIKSA/IFdJRFRIIDogSEVJR0hUXG4gIH1cblxuICBfZ2V0UGFyZW50KCkge1xuICAgIGxldCB7IHBhcmVudCB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBwYXJlbnQgPSBnZXRFbGVtZW50KHBhcmVudClcblxuICAgIGNvbnN0IHNlbGVjdG9yID0gYCR7U0VMRUNUT1JfREFUQV9UT0dHTEV9W2RhdGEtYnMtcGFyZW50PVwiJHtwYXJlbnR9XCJdYFxuXG4gICAgU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvciwgcGFyZW50KVxuICAgICAgLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KVxuXG4gICAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhcbiAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICBbZWxlbWVudF1cbiAgICAgICAgKVxuICAgICAgfSlcblxuICAgIHJldHVybiBwYXJlbnRcbiAgfVxuXG4gIF9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoZWxlbWVudCwgdHJpZ2dlckFycmF5KSB7XG4gICAgaWYgKCFlbGVtZW50IHx8ICF0cmlnZ2VyQXJyYXkubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc09wZW4gPSBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG5cbiAgICB0cmlnZ2VyQXJyYXkuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQ09MTEFQU0VEKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0VEKVxuICAgICAgfVxuXG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGlzT3BlbilcbiAgICB9KVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGNvbGxhcHNlSW50ZXJmYWNlKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIGxldCBkYXRhID0gRGF0YS5nZXQoZWxlbWVudCwgREFUQV9LRVkpXG4gICAgY29uc3QgX2NvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyhlbGVtZW50KSxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSlcbiAgICB9XG5cbiAgICBpZiAoIWRhdGEgJiYgX2NvbmZpZy50b2dnbGUgJiYgdHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgJiYgL3Nob3d8aGlkZS8udGVzdChjb25maWcpKSB7XG4gICAgICBfY29uZmlnLnRvZ2dsZSA9IGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBkYXRhID0gbmV3IENvbGxhcHNlKGVsZW1lbnQsIF9jb25maWcpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBDb2xsYXBzZS5jb2xsYXBzZUludGVyZmFjZSh0aGlzLCBjb25maWcpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gcHJldmVudERlZmF1bHQgb25seSBmb3IgPGE+IGVsZW1lbnRzICh3aGljaCBjaGFuZ2UgdGhlIFVSTCkgbm90IGluc2lkZSB0aGUgY29sbGFwc2libGUgZWxlbWVudFxuICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdBJyB8fCAoZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgZXZlbnQuZGVsZWdhdGVUYXJnZXQudGFnTmFtZSA9PT0gJ0EnKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNvbnN0IHRyaWdnZXJEYXRhID0gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcylcbiAgY29uc3Qgc2VsZWN0b3IgPSBnZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMpXG4gIGNvbnN0IHNlbGVjdG9yRWxlbWVudHMgPSBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yKVxuXG4gIHNlbGVjdG9yRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBjb25zdCBkYXRhID0gRGF0YS5nZXQoZWxlbWVudCwgREFUQV9LRVkpXG4gICAgbGV0IGNvbmZpZ1xuICAgIGlmIChkYXRhKSB7XG4gICAgICAvLyB1cGRhdGUgcGFyZW50IGF0dHJpYnV0ZVxuICAgICAgaWYgKGRhdGEuX3BhcmVudCA9PT0gbnVsbCAmJiB0eXBlb2YgdHJpZ2dlckRhdGEucGFyZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBkYXRhLl9jb25maWcucGFyZW50ID0gdHJpZ2dlckRhdGEucGFyZW50XG4gICAgICAgIGRhdGEuX3BhcmVudCA9IGRhdGEuX2dldFBhcmVudCgpXG4gICAgICB9XG5cbiAgICAgIGNvbmZpZyA9ICd0b2dnbGUnXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZyA9IHRyaWdnZXJEYXRhXG4gICAgfVxuXG4gICAgQ29sbGFwc2UuY29sbGFwc2VJbnRlcmZhY2UoZWxlbWVudCwgY29uZmlnKVxuICB9KVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhZGQgLkNvbGxhcHNlIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKENvbGxhcHNlKVxuXG5leHBvcnQgZGVmYXVsdCBDb2xsYXBzZVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiBkcm9wZG93bi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAqIGFzIFBvcHBlciBmcm9tICdAcG9wcGVyanMvY29yZSdcblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXRFbGVtZW50LFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBpc0Rpc2FibGVkLFxuICBpc0VsZW1lbnQsXG4gIGlzVmlzaWJsZSxcbiAgaXNSVEwsXG4gIG5vb3AsXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAnZHJvcGRvd24nXG5jb25zdCBEQVRBX0tFWSA9ICdicy5kcm9wZG93bidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBFU0NBUEVfS0VZID0gJ0VzY2FwZSdcbmNvbnN0IFNQQUNFX0tFWSA9ICdTcGFjZSdcbmNvbnN0IFRBQl9LRVkgPSAnVGFiJ1xuY29uc3QgQVJST1dfVVBfS0VZID0gJ0Fycm93VXAnXG5jb25zdCBBUlJPV19ET1dOX0tFWSA9ICdBcnJvd0Rvd24nXG5jb25zdCBSSUdIVF9NT1VTRV9CVVRUT04gPSAyIC8vIE1vdXNlRXZlbnQuYnV0dG9uIHZhbHVlIGZvciB0aGUgc2Vjb25kYXJ5IGJ1dHRvbiwgdXN1YWxseSB0aGUgcmlnaHQgYnV0dG9uXG5cbmNvbnN0IFJFR0VYUF9LRVlET1dOID0gbmV3IFJlZ0V4cChgJHtBUlJPV19VUF9LRVl9fCR7QVJST1dfRE9XTl9LRVl9fCR7RVNDQVBFX0tFWX1gKVxuXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDSyA9IGBjbGljayR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTl9EQVRBX0FQSSA9IGBrZXlkb3duJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfS0VZVVBfREFUQV9BUEkgPSBga2V5dXAke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QVVAgPSAnZHJvcHVwJ1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QRU5EID0gJ2Ryb3BlbmQnXG5jb25zdCBDTEFTU19OQU1FX0RST1BTVEFSVCA9ICdkcm9wc3RhcnQnXG5jb25zdCBDTEFTU19OQU1FX05BVkJBUiA9ICduYXZiYXInXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCJdJ1xuY29uc3QgU0VMRUNUT1JfTUVOVSA9ICcuZHJvcGRvd24tbWVudSdcbmNvbnN0IFNFTEVDVE9SX05BVkJBUl9OQVYgPSAnLm5hdmJhci1uYXYnXG5jb25zdCBTRUxFQ1RPUl9WSVNJQkxFX0lURU1TID0gJy5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJ1xuXG5jb25zdCBQTEFDRU1FTlRfVE9QID0gaXNSVEwoKSA/ICd0b3AtZW5kJyA6ICd0b3Atc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfVE9QRU5EID0gaXNSVEwoKSA/ICd0b3Atc3RhcnQnIDogJ3RvcC1lbmQnXG5jb25zdCBQTEFDRU1FTlRfQk9UVE9NID0gaXNSVEwoKSA/ICdib3R0b20tZW5kJyA6ICdib3R0b20tc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfQk9UVE9NRU5EID0gaXNSVEwoKSA/ICdib3R0b20tc3RhcnQnIDogJ2JvdHRvbS1lbmQnXG5jb25zdCBQTEFDRU1FTlRfUklHSFQgPSBpc1JUTCgpID8gJ2xlZnQtc3RhcnQnIDogJ3JpZ2h0LXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX0xFRlQgPSBpc1JUTCgpID8gJ3JpZ2h0LXN0YXJ0JyA6ICdsZWZ0LXN0YXJ0J1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBvZmZzZXQ6IFswLCAyXSxcbiAgYm91bmRhcnk6ICdjbGlwcGluZ1BhcmVudHMnLFxuICByZWZlcmVuY2U6ICd0b2dnbGUnLFxuICBkaXNwbGF5OiAnZHluYW1pYycsXG4gIHBvcHBlckNvbmZpZzogbnVsbCxcbiAgYXV0b0Nsb3NlOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBvZmZzZXQ6ICcoYXJyYXl8c3RyaW5nfGZ1bmN0aW9uKScsXG4gIGJvdW5kYXJ5OiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIHJlZmVyZW5jZTogJyhzdHJpbmd8ZWxlbWVudHxvYmplY3QpJyxcbiAgZGlzcGxheTogJ3N0cmluZycsXG4gIHBvcHBlckNvbmZpZzogJyhudWxsfG9iamVjdHxmdW5jdGlvbiknLFxuICBhdXRvQ2xvc2U6ICcoYm9vbGVhbnxzdHJpbmcpJ1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudClcblxuICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX21lbnUgPSB0aGlzLl9nZXRNZW51RWxlbWVudCgpXG4gICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKVxuXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmIChpc0Rpc2FibGVkKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVylcblxuICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuc2hvdygpXG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmIChpc0Rpc2FibGVkKHRoaXMuX2VsZW1lbnQpIHx8IHRoaXMuX21lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudCA9IERyb3Bkb3duLmdldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG4gICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XLCByZWxhdGVkVGFyZ2V0KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBUb3RhbGx5IGRpc2FibGUgUG9wcGVyIGZvciBEcm9wZG93bnMgaW4gTmF2YmFyXG4gICAgaWYgKHRoaXMuX2luTmF2YmFyKSB7XG4gICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKHRoaXMuX21lbnUsICdwb3BwZXInLCAnbm9uZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIGRyb3Bkb3ducyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKScpXG4gICAgICB9XG5cbiAgICAgIGxldCByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fZWxlbWVudFxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ3BhcmVudCcpIHtcbiAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHBhcmVudFxuICAgICAgfSBlbHNlIGlmIChpc0VsZW1lbnQodGhpcy5fY29uZmlnLnJlZmVyZW5jZSkpIHtcbiAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IGdldEVsZW1lbnQodGhpcy5fY29uZmlnLnJlZmVyZW5jZSlcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9jb25maWcucmVmZXJlbmNlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBvcHBlckNvbmZpZyA9IHRoaXMuX2dldFBvcHBlckNvbmZpZygpXG4gICAgICBjb25zdCBpc0Rpc3BsYXlTdGF0aWMgPSBwb3BwZXJDb25maWcubW9kaWZpZXJzLmZpbmQobW9kaWZpZXIgPT4gbW9kaWZpZXIubmFtZSA9PT0gJ2FwcGx5U3R5bGVzJyAmJiBtb2RpZmllci5lbmFibGVkID09PSBmYWxzZSlcblxuICAgICAgdGhpcy5fcG9wcGVyID0gUG9wcGVyLmNyZWF0ZVBvcHBlcihyZWZlcmVuY2VFbGVtZW50LCB0aGlzLl9tZW51LCBwb3BwZXJDb25maWcpXG5cbiAgICAgIGlmIChpc0Rpc3BsYXlTdGF0aWMpIHtcbiAgICAgICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LCAncG9wcGVyJywgJ3N0YXRpYycpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmXG4gICAgICAhcGFyZW50LmNsb3Nlc3QoU0VMRUNUT1JfTkFWQkFSX05BVikpIHtcbiAgICAgIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKVxuICAgICAgICAuZm9yRWFjaChlbGVtID0+IEV2ZW50SGFuZGxlci5vbihlbGVtLCAnbW91c2VvdmVyJywgbm9vcCkpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuXG4gICAgdGhpcy5fbWVudS5jbGFzc0xpc3QudG9nZ2xlKENMQVNTX05BTUVfU0hPVylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOLCByZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzLl9lbGVtZW50KSB8fCAhdGhpcy5fbWVudS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9XG5cbiAgICB0aGlzLl9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKClcbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIudXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTElDSywgZXZlbnQgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy50b2dnbGUoKVxuICAgIH0pXG4gIH1cblxuICBfY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFLCByZWxhdGVkVGFyZ2V0KVxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKVxuICAgICAgICAuZm9yRWFjaChlbGVtID0+IEV2ZW50SGFuZGxlci5vZmYoZWxlbSwgJ21vdXNlb3ZlcicsIG5vb3ApKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICB0aGlzLl9tZW51LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxuICAgIE1hbmlwdWxhdG9yLnJlbW92ZURhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSwgJ3BvcHBlcicpXG4gICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOLCByZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KSxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cblxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpXG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWZlcmVuY2UgPT09ICdvYmplY3QnICYmICFpc0VsZW1lbnQoY29uZmlnLnJlZmVyZW5jZSkgJiZcbiAgICAgIHR5cGVvZiBjb25maWcucmVmZXJlbmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gJ2Z1bmN0aW9uJ1xuICAgICkge1xuICAgICAgLy8gUG9wcGVyIHZpcnR1YWwgZWxlbWVudHMgcmVxdWlyZSBhIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBtZXRob2RcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7TkFNRS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwicmVmZXJlbmNlXCIgcHJvdmlkZWQgdHlwZSBcIm9iamVjdFwiIHdpdGhvdXQgYSByZXF1aXJlZCBcImdldEJvdW5kaW5nQ2xpZW50UmVjdFwiIG1ldGhvZC5gKVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXRNZW51RWxlbWVudCgpIHtcbiAgICByZXR1cm4gU2VsZWN0b3JFbmdpbmUubmV4dCh0aGlzLl9lbGVtZW50LCBTRUxFQ1RPUl9NRU5VKVswXVxuICB9XG5cbiAgX2dldFBsYWNlbWVudCgpIHtcbiAgICBjb25zdCBwYXJlbnREcm9wZG93biA9IHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZVxuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BFTkQpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX1JJR0hUXG4gICAgfVxuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BTVEFSVCkpIHtcbiAgICAgIHJldHVybiBQTEFDRU1FTlRfTEVGVFxuICAgIH1cblxuICAgIC8vIFdlIG5lZWQgdG8gdHJpbSB0aGUgdmFsdWUgYmVjYXVzZSBjdXN0b20gcHJvcGVydGllcyBjYW4gYWxzbyBpbmNsdWRlIHNwYWNlc1xuICAgIGNvbnN0IGlzRW5kID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9tZW51KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWJzLXBvc2l0aW9uJykudHJpbSgpID09PSAnZW5kJ1xuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BVUCkpIHtcbiAgICAgIHJldHVybiBpc0VuZCA/IFBMQUNFTUVOVF9UT1BFTkQgOiBQTEFDRU1FTlRfVE9QXG4gICAgfVxuXG4gICAgcmV0dXJuIGlzRW5kID8gUExBQ0VNRU5UX0JPVFRPTUVORCA6IFBMQUNFTUVOVF9CT1RUT01cbiAgfVxuXG4gIF9kZXRlY3ROYXZiYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xvc2VzdChgLiR7Q0xBU1NfTkFNRV9OQVZCQVJ9YCkgIT09IG51bGxcbiAgfVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgeyBvZmZzZXQgfSA9IHRoaXMuX2NvbmZpZ1xuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gb2Zmc2V0LnNwbGl0KCcsJykubWFwKHZhbCA9PiBOdW1iZXIucGFyc2VJbnQodmFsLCAxMCkpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBwb3BwZXJEYXRhID0+IG9mZnNldChwb3BwZXJEYXRhLCB0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRcbiAgfVxuXG4gIF9nZXRQb3BwZXJDb25maWcoKSB7XG4gICAgY29uc3QgZGVmYXVsdEJzUG9wcGVyQ29uZmlnID0ge1xuICAgICAgcGxhY2VtZW50OiB0aGlzLl9nZXRQbGFjZW1lbnQoKSxcbiAgICAgIG1vZGlmaWVyczogW3tcbiAgICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBib3VuZGFyeTogdGhpcy5fY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKVxuICAgICAgICB9XG4gICAgICB9XVxuICAgIH1cblxuICAgIC8vIERpc2FibGUgUG9wcGVyIGlmIHdlIGhhdmUgYSBzdGF0aWMgZGlzcGxheVxuICAgIGlmICh0aGlzLl9jb25maWcuZGlzcGxheSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIGRlZmF1bHRCc1BvcHBlckNvbmZpZy5tb2RpZmllcnMgPSBbe1xuICAgICAgICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgfV1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZGVmYXVsdEJzUG9wcGVyQ29uZmlnLFxuICAgICAgLi4uKHR5cGVvZiB0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnID09PSAnZnVuY3Rpb24nID8gdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyhkZWZhdWx0QnNQb3BwZXJDb25maWcpIDogdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZylcbiAgICB9XG4gIH1cblxuICBfc2VsZWN0TWVudUl0ZW0oZXZlbnQpIHtcbiAgICBjb25zdCBpdGVtcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfVklTSUJMRV9JVEVNUywgdGhpcy5fbWVudSkuZmlsdGVyKGlzVmlzaWJsZSlcblxuICAgIGlmICghaXRlbXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgaW5kZXggPSBpdGVtcy5pbmRleE9mKGV2ZW50LnRhcmdldClcblxuICAgIC8vIFVwXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gQVJST1dfVVBfS0VZICYmIGluZGV4ID4gMCkge1xuICAgICAgaW5kZXgtLVxuICAgIH1cblxuICAgIC8vIERvd25cbiAgICBpZiAoZXZlbnQua2V5ID09PSBBUlJPV19ET1dOX0tFWSAmJiBpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICAvLyBpbmRleCBpcyAtMSBpZiB0aGUgZmlyc3Qga2V5ZG93biBpcyBhbiBBcnJvd1VwXG4gICAgaW5kZXggPSBpbmRleCA9PT0gLTEgPyAwIDogaW5kZXhcblxuICAgIGl0ZW1zW2luZGV4XS5mb2N1cygpXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgZHJvcGRvd25JbnRlcmZhY2UoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgbGV0IGRhdGEgPSBEYXRhLmdldChlbGVtZW50LCBEQVRBX0tFWSlcbiAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBudWxsXG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIGRhdGEgPSBuZXcgRHJvcGRvd24oZWxlbWVudCwgX2NvbmZpZylcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIERyb3Bkb3duLmRyb3Bkb3duSW50ZXJmYWNlKHRoaXMsIGNvbmZpZylcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGNsZWFyTWVudXMoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQgJiYgKGV2ZW50LmJ1dHRvbiA9PT0gUklHSFRfTU9VU0VfQlVUVE9OIHx8IChldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LmtleSAhPT0gVEFCX0tFWSkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0b2dnbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gRGF0YS5nZXQodG9nZ2xlc1tpXSwgREFUQV9LRVkpXG4gICAgICBpZiAoIWNvbnRleHQgfHwgY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKCFjb250ZXh0Ll9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IGNvbnRleHQuX2VsZW1lbnRcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpXG4gICAgICAgIGNvbnN0IGlzTWVudVRhcmdldCA9IGNvbXBvc2VkUGF0aC5pbmNsdWRlcyhjb250ZXh0Ll9tZW51KVxuICAgICAgICBpZiAoXG4gICAgICAgICAgY29tcG9zZWRQYXRoLmluY2x1ZGVzKGNvbnRleHQuX2VsZW1lbnQpIHx8XG4gICAgICAgICAgKGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09ICdpbnNpZGUnICYmICFpc01lbnVUYXJnZXQpIHx8XG4gICAgICAgICAgKGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09ICdvdXRzaWRlJyAmJiBpc01lbnVUYXJnZXQpXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBUYWIgbmF2aWdhdGlvbiB0aHJvdWdoIHRoZSBkcm9wZG93biBtZW51IG9yIGV2ZW50cyBmcm9tIGNvbnRhaW5lZCBpbnB1dHMgc2hvdWxkbid0IGNsb3NlIHRoZSBtZW51XG4gICAgICAgIGlmIChjb250ZXh0Ll9tZW51LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgKChldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LmtleSA9PT0gVEFCX0tFWSkgfHwgL2lucHV0fHNlbGVjdHxvcHRpb258dGV4dGFyZWF8Zm9ybS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXQuY2xpY2tFdmVudCA9IGV2ZW50XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29udGV4dC5fY29tcGxldGVIaWRlKHJlbGF0ZWRUYXJnZXQpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldFBhcmVudEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgfVxuXG4gIHN0YXRpYyBkYXRhQXBpS2V5ZG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICAvLyBJZiBub3QgaW5wdXQvdGV4dGFyZWE6XG4gICAgLy8gIC0gQW5kIG5vdCBhIGtleSBpbiBSRUdFWFBfS0VZRE9XTiA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gSWYgaW5wdXQvdGV4dGFyZWE6XG4gICAgLy8gIC0gSWYgc3BhY2Uga2V5ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyAgLSBJZiBrZXkgaXMgb3RoZXIgdGhhbiBlc2NhcGVcbiAgICAvLyAgICAtIElmIGtleSBpcyBub3QgdXAgb3IgZG93biA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gICAgLSBJZiB0cmlnZ2VyIGluc2lkZSB0aGUgbWVudSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpID9cbiAgICAgIGV2ZW50LmtleSA9PT0gU1BBQ0VfS0VZIHx8IChldmVudC5rZXkgIT09IEVTQ0FQRV9LRVkgJiZcbiAgICAgICgoZXZlbnQua2V5ICE9PSBBUlJPV19ET1dOX0tFWSAmJiBldmVudC5rZXkgIT09IEFSUk9XX1VQX0tFWSkgfHxcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoU0VMRUNUT1JfTUVOVSkpKSA6XG4gICAgICAhUkVHRVhQX0tFWURPV04udGVzdChldmVudC5rZXkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVylcblxuICAgIGlmICghaXNBY3RpdmUgJiYgZXZlbnQua2V5ID09PSBFU0NBUEVfS0VZKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBnZXRUb2dnbGVCdXR0b24gPSAoKSA9PiB0aGlzLm1hdGNoZXMoU0VMRUNUT1JfREFUQV9UT0dHTEUpID8gdGhpcyA6IFNlbGVjdG9yRW5naW5lLnByZXYodGhpcywgU0VMRUNUT1JfREFUQV9UT0dHTEUpWzBdXG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSBFU0NBUEVfS0VZKSB7XG4gICAgICBnZXRUb2dnbGVCdXR0b24oKS5mb2N1cygpXG4gICAgICBEcm9wZG93bi5jbGVhck1lbnVzKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghaXNBY3RpdmUgJiYgKGV2ZW50LmtleSA9PT0gQVJST1dfVVBfS0VZIHx8IGV2ZW50LmtleSA9PT0gQVJST1dfRE9XTl9LRVkpKSB7XG4gICAgICBnZXRUb2dnbGVCdXR0b24oKS5jbGljaygpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWlzQWN0aXZlIHx8IGV2ZW50LmtleSA9PT0gU1BBQ0VfS0VZKSB7XG4gICAgICBEcm9wZG93bi5jbGVhck1lbnVzKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIERyb3Bkb3duLmdldEluc3RhbmNlKGdldFRvZ2dsZUJ1dHRvbigpKS5fc2VsZWN0TWVudUl0ZW0oZXZlbnQpXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX01FTlUsIERyb3Bkb3duLmRhdGFBcGlLZXlkb3duSGFuZGxlcilcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIERyb3Bkb3duLmNsZWFyTWVudXMpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0tFWVVQX0RBVEFfQVBJLCBEcm9wZG93bi5jbGVhck1lbnVzKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIERyb3Bkb3duLmRyb3Bkb3duSW50ZXJmYWNlKHRoaXMpXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuRHJvcGRvd24gdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oRHJvcGRvd24pXG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IHV0aWwvc2Nyb2xsQmFyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4uL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi4vZG9tL21hbmlwdWxhdG9yJ1xuXG5jb25zdCBTRUxFQ1RPUl9GSVhFRF9DT05URU5UID0gJy5maXhlZC10b3AsIC5maXhlZC1ib3R0b20sIC5pcy1maXhlZCwgLnN0aWNreS10b3AnXG5jb25zdCBTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCA9ICcuc3RpY2t5LXRvcCdcblxuY29uc3QgZ2V0V2lkdGggPSAoKSA9PiB7XG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvaW5uZXJXaWR0aCN1c2FnZV9ub3Rlc1xuICBjb25zdCBkb2N1bWVudFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gIHJldHVybiBNYXRoLmFicyh3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50V2lkdGgpXG59XG5cbmNvbnN0IGhpZGUgPSAod2lkdGggPSBnZXRXaWR0aCgpKSA9PiB7XG4gIF9kaXNhYmxlT3ZlckZsb3coKVxuICAvLyBnaXZlIHBhZGRpbmcgdG8gZWxlbWVudCB0byBiYWxhbmNlcyB0aGUgaGlkZGVuIHNjcm9sbGJhciB3aWR0aFxuICBfc2V0RWxlbWVudEF0dHJpYnV0ZXMoJ2JvZHknLCAncGFkZGluZ1JpZ2h0JywgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSArIHdpZHRoKVxuICAvLyB0cmljazogV2UgYWRqdXN0IHBvc2l0aXZlIHBhZGRpbmdSaWdodCBhbmQgbmVnYXRpdmUgbWFyZ2luUmlnaHQgdG8gc3RpY2t5LXRvcCBlbGVtZW50cywgdG8ga2VlcCBzaG93biBmdWxsd2lkdGhcbiAgX3NldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQsICdwYWRkaW5nUmlnaHQnLCBjYWxjdWxhdGVkVmFsdWUgPT4gY2FsY3VsYXRlZFZhbHVlICsgd2lkdGgpXG4gIF9zZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCwgJ21hcmdpblJpZ2h0JywgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSAtIHdpZHRoKVxufVxuXG5jb25zdCBfZGlzYWJsZU92ZXJGbG93ID0gKCkgPT4ge1xuICBjb25zdCBhY3R1YWxWYWx1ZSA9IGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dcbiAgaWYgKGFjdHVhbFZhbHVlKSB7XG4gICAgTWFuaXB1bGF0b3Iuc2V0RGF0YUF0dHJpYnV0ZShkb2N1bWVudC5ib2R5LCAnb3ZlcmZsb3cnLCBhY3R1YWxWYWx1ZSlcbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xufVxuXG5jb25zdCBfc2V0RWxlbWVudEF0dHJpYnV0ZXMgPSAoc2VsZWN0b3IsIHN0eWxlUHJvcCwgY2FsbGJhY2spID0+IHtcbiAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBnZXRXaWR0aCgpXG4gIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpXG4gICAgLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBpZiAoZWxlbWVudCAhPT0gZG9jdW1lbnQuYm9keSAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IGVsZW1lbnQuY2xpZW50V2lkdGggKyBzY3JvbGxiYXJXaWR0aCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgYWN0dWFsVmFsdWUgPSBlbGVtZW50LnN0eWxlW3N0eWxlUHJvcF1cbiAgICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW3N0eWxlUHJvcF1cbiAgICAgIE1hbmlwdWxhdG9yLnNldERhdGFBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wLCBhY3R1YWxWYWx1ZSlcbiAgICAgIGVsZW1lbnQuc3R5bGVbc3R5bGVQcm9wXSA9IGAke2NhbGxiYWNrKE51bWJlci5wYXJzZUZsb2F0KGNhbGN1bGF0ZWRWYWx1ZSkpfXB4YFxuICAgIH0pXG59XG5cbmNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICBfcmVzZXRFbGVtZW50QXR0cmlidXRlcygnYm9keScsICdvdmVyZmxvdycpXG4gIF9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKCdib2R5JywgJ3BhZGRpbmdSaWdodCcpXG4gIF9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX0ZJWEVEX0NPTlRFTlQsICdwYWRkaW5nUmlnaHQnKVxuICBfcmVzZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9TVElDS1lfQ09OVEVOVCwgJ21hcmdpblJpZ2h0Jylcbn1cblxuY29uc3QgX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMgPSAoc2VsZWN0b3IsIHN0eWxlUHJvcCkgPT4ge1xuICBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3ApXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoc3R5bGVQcm9wKVxuICAgIH0gZWxzZSB7XG4gICAgICBNYW5pcHVsYXRvci5yZW1vdmVEYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcClcbiAgICAgIGVsZW1lbnQuc3R5bGVbc3R5bGVQcm9wXSA9IHZhbHVlXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBpc0JvZHlPdmVyZmxvd2luZyA9ICgpID0+IHtcbiAgcmV0dXJuIGdldFdpZHRoKCkgPiAwXG59XG5cbmV4cG9ydCB7XG4gIGdldFdpZHRoLFxuICBoaWRlLFxuICBpc0JvZHlPdmVyZmxvd2luZyxcbiAgcmVzZXRcbn1cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogdXRpbC9iYWNrZHJvcC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCB7IGVtdWxhdGVUcmFuc2l0aW9uRW5kLCBleGVjdXRlLCBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCwgcmVmbG93LCB0eXBlQ2hlY2tDb25maWcgfSBmcm9tICcuL2luZGV4J1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBpc1Zpc2libGU6IHRydWUsIC8vIGlmIGZhbHNlLCB3ZSB1c2UgdGhlIGJhY2tkcm9wIGhlbHBlciB3aXRob3V0IGFkZGluZyBhbnkgZWxlbWVudCB0byB0aGUgZG9tXG4gIGlzQW5pbWF0ZWQ6IGZhbHNlLFxuICByb290RWxlbWVudDogZG9jdW1lbnQuYm9keSwgLy8gZ2l2ZSB0aGUgY2hvaWNlIHRvIHBsYWNlIGJhY2tkcm9wIHVuZGVyIGRpZmZlcmVudCBlbGVtZW50c1xuICBjbGlja0NhbGxiYWNrOiBudWxsXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBpc1Zpc2libGU6ICdib29sZWFuJyxcbiAgaXNBbmltYXRlZDogJ2Jvb2xlYW4nLFxuICByb290RWxlbWVudDogJ2VsZW1lbnQnLFxuICBjbGlja0NhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJ1xufVxuY29uc3QgTkFNRSA9ICdiYWNrZHJvcCdcbmNvbnN0IENMQVNTX05BTUVfQkFDS0RST1AgPSAnbW9kYWwtYmFja2Ryb3AnXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG5jb25zdCBFVkVOVF9NT1VTRURPV04gPSBgbW91c2Vkb3duLmJzLiR7TkFNRX1gXG5cbmNsYXNzIEJhY2tkcm9wIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9pc0FwcGVuZGVkID0gZmFsc2VcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICB9XG5cbiAgc2hvdyhjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5fY29uZmlnLmlzVmlzaWJsZSkge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2FwcGVuZCgpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpIHtcbiAgICAgIHJlZmxvdyh0aGlzLl9nZXRFbGVtZW50KCkpXG4gICAgfVxuXG4gICAgdGhpcy5fZ2V0RWxlbWVudCgpLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgdGhpcy5fZW11bGF0ZUFuaW1hdGlvbigoKSA9PiB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgIH0pXG4gIH1cblxuICBoaWRlKGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuaXNWaXNpYmxlKSB7XG4gICAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZ2V0RWxlbWVudCgpLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgdGhpcy5fZW11bGF0ZUFuaW1hdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLmRpc3Bvc2UoKVxuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICB9KVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRFbGVtZW50KCkge1xuICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xuICAgICAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgYmFja2Ryb3AuY2xhc3NOYW1lID0gQ0xBU1NfTkFNRV9CQUNLRFJPUFxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50ID0gYmFja2Ryb3BcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudFxuICB9XG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDoge30pXG4gICAgfVxuXG4gICAgY29uZmlnLnJvb3RFbGVtZW50ID0gY29uZmlnLnJvb3RFbGVtZW50IHx8IGRvY3VtZW50LmJvZHlcbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfYXBwZW5kKCkge1xuICAgIGlmICh0aGlzLl9pc0FwcGVuZGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcucm9vdEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5fZ2V0RWxlbWVudCgpKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2dldEVsZW1lbnQoKSwgRVZFTlRfTU9VU0VET1dOLCAoKSA9PiB7XG4gICAgICBleGVjdXRlKHRoaXMuX2NvbmZpZy5jbGlja0NhbGxiYWNrKVxuICAgIH0pXG5cbiAgICB0aGlzLl9pc0FwcGVuZGVkID0gdHJ1ZVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQXBwZW5kZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VET1dOKVxuXG4gICAgdGhpcy5fZ2V0RWxlbWVudCgpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5fZWxlbWVudClcbiAgICB0aGlzLl9pc0FwcGVuZGVkID0gZmFsc2VcbiAgfVxuXG4gIF9lbXVsYXRlQW5pbWF0aW9uKGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuaXNBbmltYXRlZCkge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZ2V0RWxlbWVudCgpKVxuICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZ2V0RWxlbWVudCgpLCAndHJhbnNpdGlvbmVuZCcsICgpID0+IGV4ZWN1dGUoY2FsbGJhY2spKVxuICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRoaXMuX2dldEVsZW1lbnQoKSwgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2Ryb3BcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogbW9kYWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGVtdWxhdGVUcmFuc2l0aW9uRW5kLFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCxcbiAgaXNSVEwsXG4gIGlzVmlzaWJsZSxcbiAgcmVmbG93LFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCB7IGdldFdpZHRoIGFzIGdldFNjcm9sbEJhcldpZHRoLCBoaWRlIGFzIHNjcm9sbEJhckhpZGUsIHJlc2V0IGFzIHNjcm9sbEJhclJlc2V0IH0gZnJvbSAnLi91dGlsL3Njcm9sbGJhcidcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnLi91dGlsL2JhY2tkcm9wJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ21vZGFsJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMubW9kYWwnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcbmNvbnN0IEVTQ0FQRV9LRVkgPSAnRXNjYXBlJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBiYWNrZHJvcDogdHJ1ZSxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIGZvY3VzOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBiYWNrZHJvcDogJyhib29sZWFufHN0cmluZyknLFxuICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICBmb2N1czogJ2Jvb2xlYW4nXG59XG5cbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREVfUFJFVkVOVEVEID0gYGhpZGVQcmV2ZW50ZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9GT0NVU0lOID0gYGZvY3VzaW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9SRVNJWkUgPSBgcmVzaXplJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfRElTTUlTUyA9IGBjbGljay5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTl9ESVNNSVNTID0gYGtleWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFVVBfRElTTUlTUyA9IGBtb3VzZXVwLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRURPV05fRElTTUlTUyA9IGBtb3VzZWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX09QRU4gPSAnbW9kYWwtb3BlbidcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX1NUQVRJQyA9ICdtb2RhbC1zdGF0aWMnXG5cbmNvbnN0IFNFTEVDVE9SX0RJQUxPRyA9ICcubW9kYWwtZGlhbG9nJ1xuY29uc3QgU0VMRUNUT1JfTU9EQUxfQk9EWSA9ICcubW9kYWwtYm9keSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCJdJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9ESVNNSVNTID0gJ1tkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiXSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIE1vZGFsIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2RpYWxvZyA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfRElBTE9HLCB0aGlzLl9lbGVtZW50KVxuICAgIHRoaXMuX2JhY2tkcm9wID0gdGhpcy5faW5pdGlhbGl6ZUJhY2tEcm9wKClcbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gZmFsc2VcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzQW5pbWF0ZWQoKSkge1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1csIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlXG5cbiAgICBzY3JvbGxCYXJIaWRlKClcblxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX09QRU4pXG5cbiAgICB0aGlzLl9hZGp1c3REaWFsb2coKVxuXG4gICAgdGhpcy5fc2V0RXNjYXBlRXZlbnQoKVxuICAgIHRoaXMuX3NldFJlc2l6ZUV2ZW50KClcblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTElDS19ESVNNSVNTLCBTRUxFQ1RPUl9EQVRBX0RJU01JU1MsIGV2ZW50ID0+IHRoaXMuaGlkZShldmVudCkpXG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZGlhbG9nLCBFVkVOVF9NT1VTRURPV05fRElTTUlTUywgKCkgPT4ge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRVVQX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5fZWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuX3Nob3dCYWNrZHJvcCgoKSA9PiB0aGlzLl9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSlcbiAgfVxuXG4gIGhpZGUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2lzU2hvd24gfHwgdGhpcy5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICBjb25zdCBpc0FuaW1hdGVkID0gdGhpcy5faXNBbmltYXRlZCgpXG5cbiAgICBpZiAoaXNBbmltYXRlZCkge1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZVxuICAgIH1cblxuICAgIHRoaXMuX3NldEVzY2FwZUV2ZW50KClcbiAgICB0aGlzLl9zZXRSZXNpemVFdmVudCgpXG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOKVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0tfRElTTUlTUylcbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2RpYWxvZywgRVZFTlRfTU9VU0VET1dOX0RJU01JU1MpXG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKCgpID0+IHRoaXMuX2hpZGVNb2RhbCgpLCB0aGlzLl9lbGVtZW50LCBpc0FuaW1hdGVkKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBbd2luZG93LCB0aGlzLl9kaWFsb2ddXG4gICAgICAuZm9yRWFjaChodG1sRWxlbWVudCA9PiBFdmVudEhhbmRsZXIub2ZmKGh0bWxFbGVtZW50LCBFVkVOVF9LRVkpKVxuXG4gICAgdGhpcy5fYmFja2Ryb3AuZGlzcG9zZSgpXG4gICAgc3VwZXIuZGlzcG9zZSgpXG5cbiAgICAvKipcbiAgICAgKiBgZG9jdW1lbnRgIGhhcyAyIGV2ZW50cyBgRVZFTlRfRk9DVVNJTmAgYW5kIGBFVkVOVF9DTElDS19EQVRBX0FQSWBcbiAgICAgKiBEbyBub3QgbW92ZSBgZG9jdW1lbnRgIGluIGBodG1sRWxlbWVudHNgIGFycmF5XG4gICAgICogSXQgd2lsbCByZW1vdmUgYEVWRU5UX0NMSUNLX0RBVEFfQVBJYCBldmVudCB0aGF0IHNob3VsZCByZW1haW5cbiAgICAgKi9cbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOKVxuICB9XG5cbiAgaGFuZGxlVXBkYXRlKCkge1xuICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2luaXRpYWxpemVCYWNrRHJvcCgpIHtcbiAgICByZXR1cm4gbmV3IEJhY2tkcm9wKHtcbiAgICAgIGlzVmlzaWJsZTogQm9vbGVhbih0aGlzLl9jb25maWcuYmFja2Ryb3ApLCAvLyAnc3RhdGljJyBvcHRpb24gd2lsbCBiZSB0cmFuc2xhdGVkIHRvIHRydWUsIGFuZCBib29sZWFucyB3aWxsIGtlZXAgdGhlaXIgdmFsdWVcbiAgICAgIGlzQW5pbWF0ZWQ6IHRoaXMuX2lzQW5pbWF0ZWQoKVxuICAgIH0pXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KSxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkge1xuICAgIGNvbnN0IGlzQW5pbWF0ZWQgPSB0aGlzLl9pc0FuaW1hdGVkKClcbiAgICBjb25zdCBtb2RhbEJvZHkgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX01PREFMX0JPRFksIHRoaXMuX2RpYWxvZylcblxuICAgIGlmICghdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlIHx8IHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgIC8vIERvbid0IG1vdmUgbW9kYWwncyBET00gcG9zaXRpb25cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJylcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJylcbiAgICB0aGlzLl9lbGVtZW50LnNjcm9sbFRvcCA9IDBcblxuICAgIGlmIChtb2RhbEJvZHkpIHtcbiAgICAgIG1vZGFsQm9keS5zY3JvbGxUb3AgPSAwXG4gICAgfVxuXG4gICAgaWYgKGlzQW5pbWF0ZWQpIHtcbiAgICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICB0aGlzLl9lbmZvcmNlRm9jdXMoKVxuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zaXRpb25Db21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0XG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2sodHJhbnNpdGlvbkNvbXBsZXRlLCB0aGlzLl9kaWFsb2csIGlzQW5pbWF0ZWQpXG4gIH1cblxuICBfZW5mb3JjZUZvY3VzKCkge1xuICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4pIC8vIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgZm9jdXMgbG9vcFxuICAgIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTiwgZXZlbnQgPT4ge1xuICAgICAgaWYgKGRvY3VtZW50ICE9PSBldmVudC50YXJnZXQgJiZcbiAgICAgICAgICB0aGlzLl9lbGVtZW50ICE9PSBldmVudC50YXJnZXQgJiZcbiAgICAgICAgICAhdGhpcy5fZWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBfc2V0RXNjYXBlRXZlbnQoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCAmJiBldmVudC5rZXkgPT09IEVTQ0FQRV9LRVkpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5fY29uZmlnLmtleWJvYXJkICYmIGV2ZW50LmtleSA9PT0gRVNDQVBFX0tFWSkge1xuICAgICAgICAgIHRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV05fRElTTUlTUylcbiAgICB9XG4gIH1cblxuICBfc2V0UmVzaXplRXZlbnQoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX1JFU0laRSwgKCkgPT4gdGhpcy5fYWRqdXN0RGlhbG9nKCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYod2luZG93LCBFVkVOVF9SRVNJWkUpXG4gICAgfVxuICB9XG5cbiAgX2hpZGVNb2RhbCgpIHtcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJylcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl9iYWNrZHJvcC5oaWRlKCgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX09QRU4pXG4gICAgICB0aGlzLl9yZXNldEFkanVzdG1lbnRzKClcbiAgICAgIHNjcm9sbEJhclJlc2V0KClcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTilcbiAgICB9KVxuICB9XG5cbiAgX3Nob3dCYWNrZHJvcChjYWxsYmFjaykge1xuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTElDS19ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICBpZiAodGhpcy5faWdub3JlQmFja2Ryb3BDbGljaykge1xuICAgICAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gZmFsc2VcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3AgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5fYmFja2Ryb3Auc2hvdyhjYWxsYmFjaylcbiAgfVxuXG4gIF9pc0FuaW1hdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpXG4gIH1cblxuICBfdHJpZ2dlckJhY2tkcm9wVHJhbnNpdGlvbigpIHtcbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFX1BSRVZFTlRFRClcbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzTW9kYWxPdmVyZmxvd2luZyA9IHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuXG4gICAgaWYgKCFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbidcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TVEFUSUMpXG4gICAgY29uc3QgbW9kYWxUcmFuc2l0aW9uRHVyYXRpb24gPSBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9kaWFsb2cpXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCAndHJhbnNpdGlvbmVuZCcpXG4gICAgRXZlbnRIYW5kbGVyLm9uZSh0aGlzLl9lbGVtZW50LCAndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NUQVRJQylcbiAgICAgIGlmICghaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5vdmVyZmxvd1kgPSAnJ1xuICAgICAgICB9KVxuICAgICAgICBlbXVsYXRlVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50LCBtb2RhbFRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgIH1cbiAgICB9KVxuICAgIGVtdWxhdGVUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQsIG1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB0aGUgZm9sbG93aW5nIG1ldGhvZHMgYXJlIHVzZWQgdG8gaGFuZGxlIG92ZXJmbG93aW5nIG1vZGFsc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgX2FkanVzdERpYWxvZygpIHtcbiAgICBjb25zdCBpc01vZGFsT3ZlcmZsb3dpbmcgPSB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IGdldFNjcm9sbEJhcldpZHRoKClcbiAgICBjb25zdCBpc0JvZHlPdmVyZmxvd2luZyA9IHNjcm9sbGJhcldpZHRoID4gMFxuXG4gICAgaWYgKCghaXNCb2R5T3ZlcmZsb3dpbmcgJiYgaXNNb2RhbE92ZXJmbG93aW5nICYmICFpc1JUTCgpKSB8fCAoaXNCb2R5T3ZlcmZsb3dpbmcgJiYgIWlzTW9kYWxPdmVyZmxvd2luZyAmJiBpc1JUTCgpKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9IGAke3Njcm9sbGJhcldpZHRofXB4YFxuICAgIH1cblxuICAgIGlmICgoaXNCb2R5T3ZlcmZsb3dpbmcgJiYgIWlzTW9kYWxPdmVyZmxvd2luZyAmJiAhaXNSVEwoKSkgfHwgKCFpc0JvZHlPdmVyZmxvd2luZyAmJiBpc01vZGFsT3ZlcmZsb3dpbmcgJiYgaXNSVEwoKSkpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7c2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgfVxuICB9XG5cbiAgX3Jlc2V0QWRqdXN0bWVudHMoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9ICcnXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJ1xuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcsIHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBNb2RhbC5nZXRJbnN0YW5jZSh0aGlzKSB8fCBuZXcgTW9kYWwodGhpcywgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiB7fSlcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10ocmVsYXRlZFRhcmdldClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBjb25zdCB0YXJnZXQgPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpXG5cbiAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIEV2ZW50SGFuZGxlci5vbmUodGFyZ2V0LCBFVkVOVF9TSE9XLCBzaG93RXZlbnQgPT4ge1xuICAgIGlmIChzaG93RXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgLy8gb25seSByZWdpc3RlciBmb2N1cyByZXN0b3JlciBpZiBtb2RhbCB3aWxsIGFjdHVhbGx5IGdldCBzaG93blxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX0hJRERFTiwgKCkgPT4ge1xuICAgICAgaWYgKGlzVmlzaWJsZSh0aGlzKSkge1xuICAgICAgICB0aGlzLmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IGRhdGEgPSBNb2RhbC5nZXRJbnN0YW5jZSh0YXJnZXQpIHx8IG5ldyBNb2RhbCh0YXJnZXQpXG5cbiAgZGF0YS50b2dnbGUodGhpcylcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5Nb2RhbCB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihNb2RhbClcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogb2ZmY2FudmFzLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnRGcm9tU2VsZWN0b3IsXG4gIGlzRGlzYWJsZWQsXG4gIGlzVmlzaWJsZSxcbiAgdHlwZUNoZWNrQ29uZmlnXG59IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCB7IGhpZGUgYXMgc2Nyb2xsQmFySGlkZSwgcmVzZXQgYXMgc2Nyb2xsQmFyUmVzZXQgfSBmcm9tICcuL3V0aWwvc2Nyb2xsYmFyJ1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IEJhY2tkcm9wIGZyb20gJy4vdXRpbC9iYWNrZHJvcCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdvZmZjYW52YXMnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5vZmZjYW52YXMnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVTQ0FQRV9LRVkgPSAnRXNjYXBlJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBiYWNrZHJvcDogdHJ1ZSxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIHNjcm9sbDogZmFsc2Vcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGJhY2tkcm9wOiAnYm9vbGVhbicsXG4gIGtleWJvYXJkOiAnYm9vbGVhbicsXG4gIHNjcm9sbDogJ2Jvb2xlYW4nXG59XG5cbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgT1BFTl9TRUxFQ1RPUiA9ICcub2ZmY2FudmFzLnNob3cnXG5cbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTSU4gPSBgZm9jdXNpbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfRElTTUlTUyA9IGBjbGljay5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTl9ESVNNSVNTID0gYGtleWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWBcblxuY29uc3QgU0VMRUNUT1JfREFUQV9ESVNNSVNTID0gJ1tkYXRhLWJzLWRpc21pc3M9XCJvZmZjYW52YXNcIl0nXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJvZmZjYW52YXNcIl0nXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBPZmZjYW52YXMgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudClcblxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgdGhpcy5fYmFja2Ryb3AgPSB0aGlzLl9pbml0aWFsaXplQmFja0Ryb3AoKVxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBzaG93KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywgeyByZWxhdGVkVGFyZ2V0IH0pXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG5cbiAgICB0aGlzLl9iYWNrZHJvcC5zaG93KClcblxuICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCkge1xuICAgICAgc2Nyb2xsQmFySGlkZSgpXG4gICAgICB0aGlzLl9lbmZvcmNlRm9jdXNPbkVsZW1lbnQodGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBjb25zdCBjb21wbGV0ZUNhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHsgcmVsYXRlZFRhcmdldCB9KVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsQmFjaywgdGhpcy5fZWxlbWVudCwgdHJ1ZSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1Nob3duKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFKVxuXG4gICAgaWYgKGhpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9GT0NVU0lOKVxuICAgIHRoaXMuX2VsZW1lbnQuYmx1cigpXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICB0aGlzLl9iYWNrZHJvcC5oaWRlKClcblxuICAgIGNvbnN0IGNvbXBsZXRlQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKVxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnKVxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKVxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcblxuICAgICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsKSB7XG4gICAgICAgIHNjcm9sbEJhclJlc2V0KClcbiAgICAgIH1cblxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElEREVOKVxuICAgIH1cblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGVDYWxsYmFjaywgdGhpcy5fZWxlbWVudCwgdHJ1ZSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgdGhpcy5fYmFja2Ryb3AuZGlzcG9zZSgpXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gICAgRXZlbnRIYW5kbGVyLm9mZihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTilcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KSxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfaW5pdGlhbGl6ZUJhY2tEcm9wKCkge1xuICAgIHJldHVybiBuZXcgQmFja2Ryb3Aoe1xuICAgICAgaXNWaXNpYmxlOiB0aGlzLl9jb25maWcuYmFja2Ryb3AsXG4gICAgICBpc0FuaW1hdGVkOiB0cnVlLFxuICAgICAgcm9vdEVsZW1lbnQ6IHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgIGNsaWNrQ2FsbGJhY2s6ICgpID0+IHRoaXMuaGlkZSgpXG4gICAgfSlcbiAgfVxuXG4gIF9lbmZvcmNlRm9jdXNPbkVsZW1lbnQoZWxlbWVudCkge1xuICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4pIC8vIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgZm9jdXMgbG9vcFxuICAgIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTiwgZXZlbnQgPT4ge1xuICAgICAgaWYgKGRvY3VtZW50ICE9PSBldmVudC50YXJnZXQgJiZcbiAgICAgICAgZWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgICFlbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgZWxlbWVudC5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgICBlbGVtZW50LmZvY3VzKClcbiAgfVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfQ0xJQ0tfRElTTUlTUywgU0VMRUNUT1JfREFUQV9ESVNNSVNTLCAoKSA9PiB0aGlzLmhpZGUoKSlcblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVlET1dOX0RJU01JU1MsIGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQgJiYgZXZlbnQua2V5ID09PSBFU0NBUEVfS0VZKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gRGF0YS5nZXQodGhpcywgREFUQV9LRVkpIHx8IG5ldyBPZmZjYW52YXModGhpcywgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiB7fSlcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICBjb25zdCB0YXJnZXQgPSBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpXG5cbiAgaWYgKFsnQScsICdBUkVBJ10uaW5jbHVkZXModGhpcy50YWdOYW1lKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGlmIChpc0Rpc2FibGVkKHRoaXMpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBFdmVudEhhbmRsZXIub25lKHRhcmdldCwgRVZFTlRfSElEREVOLCAoKSA9PiB7XG4gICAgLy8gZm9jdXMgb24gdHJpZ2dlciB3aGVuIGl0IGlzIGNsb3NlZFxuICAgIGlmIChpc1Zpc2libGUodGhpcykpIHtcbiAgICAgIHRoaXMuZm9jdXMoKVxuICAgIH1cbiAgfSlcblxuICAvLyBhdm9pZCBjb25mbGljdCB3aGVuIGNsaWNraW5nIGEgdG9nZ2xlciBvZiBhbiBvZmZjYW52YXMsIHdoaWxlIGFub3RoZXIgaXMgb3BlblxuICBjb25zdCBhbGxSZWFkeU9wZW4gPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKE9QRU5fU0VMRUNUT1IpXG4gIGlmIChhbGxSZWFkeU9wZW4gJiYgYWxsUmVhZHlPcGVuICE9PSB0YXJnZXQpIHtcbiAgICBPZmZjYW52YXMuZ2V0SW5zdGFuY2UoYWxsUmVhZHlPcGVuKS5oaWRlKClcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSBEYXRhLmdldCh0YXJnZXQsIERBVEFfS0VZKSB8fCBuZXcgT2ZmY2FudmFzKHRhcmdldClcblxuICBkYXRhLnRvZ2dsZSh0aGlzKVxufSlcblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBTZWxlY3RvckVuZ2luZS5maW5kKE9QRU5fU0VMRUNUT1IpLmZvckVhY2goZWwgPT4gKERhdGEuZ2V0KGVsLCBEQVRBX0tFWSkgfHwgbmV3IE9mZmNhbnZhcyhlbCkpLnNob3coKSlcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihPZmZjYW52YXMpXG5cbmV4cG9ydCBkZWZhdWx0IE9mZmNhbnZhc1xuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NS4wLjEpOiB1dGlsL3Nhbml0aXplci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IHVyaUF0dHJzID0gbmV3IFNldChbXG4gICdiYWNrZ3JvdW5kJyxcbiAgJ2NpdGUnLFxuICAnaHJlZicsXG4gICdpdGVtdHlwZScsXG4gICdsb25nZGVzYycsXG4gICdwb3N0ZXInLFxuICAnc3JjJyxcbiAgJ3hsaW5rOmhyZWYnXG5dKVxuXG5jb25zdCBBUklBX0FUVFJJQlVURV9QQVRURVJOID0gL15hcmlhLVtcXHctXSokL2lcblxuLyoqXG4gKiBBIHBhdHRlcm4gdGhhdCByZWNvZ25pemVzIGEgY29tbW9ubHkgdXNlZnVsIHN1YnNldCBvZiBVUkxzIHRoYXQgYXJlIHNhZmUuXG4gKlxuICogU2hvdXRvdXQgdG8gQW5ndWxhciA3IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi83LjIuNC9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplci50c1xuICovXG5jb25zdCBTQUZFX1VSTF9QQVRURVJOID0gL14oPzooPzpodHRwcz98bWFpbHRvfGZ0cHx0ZWx8ZmlsZSk6fFteIyYvOj9dKig/OlsjLz9dfCQpKS9pXG5cbi8qKlxuICogQSBwYXR0ZXJuIHRoYXQgbWF0Y2hlcyBzYWZlIGRhdGEgVVJMcy4gT25seSBtYXRjaGVzIGltYWdlLCB2aWRlbyBhbmQgYXVkaW8gdHlwZXMuXG4gKlxuICogU2hvdXRvdXQgdG8gQW5ndWxhciA3IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi83LjIuNC9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplci50c1xuICovXG5jb25zdCBEQVRBX1VSTF9QQVRURVJOID0gL15kYXRhOig/OmltYWdlXFwvKD86Ym1wfGdpZnxqcGVnfGpwZ3xwbmd8dGlmZnx3ZWJwKXx2aWRlb1xcLyg/Om1wZWd8bXA0fG9nZ3x3ZWJtKXxhdWRpb1xcLyg/Om1wM3xvZ2F8b2dnfG9wdXMpKTtiYXNlNjQsW1xcZCsvYS16XSs9KiQvaVxuXG5jb25zdCBhbGxvd2VkQXR0cmlidXRlID0gKGF0dHIsIGFsbG93ZWRBdHRyaWJ1dGVMaXN0KSA9PiB7XG4gIGNvbnN0IGF0dHJOYW1lID0gYXR0ci5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXG5cbiAgaWYgKGFsbG93ZWRBdHRyaWJ1dGVMaXN0LmluY2x1ZGVzKGF0dHJOYW1lKSkge1xuICAgIGlmICh1cmlBdHRycy5oYXMoYXR0ck5hbWUpKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbihTQUZFX1VSTF9QQVRURVJOLnRlc3QoYXR0ci5ub2RlVmFsdWUpIHx8IERBVEFfVVJMX1BBVFRFUk4udGVzdChhdHRyLm5vZGVWYWx1ZSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGNvbnN0IHJlZ0V4cCA9IGFsbG93ZWRBdHRyaWJ1dGVMaXN0LmZpbHRlcihhdHRyUmVnZXggPT4gYXR0clJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwKVxuXG4gIC8vIENoZWNrIGlmIGEgcmVndWxhciBleHByZXNzaW9uIHZhbGlkYXRlcyB0aGUgYXR0cmlidXRlLlxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmVnRXhwLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKHJlZ0V4cFtpXS50ZXN0KGF0dHJOYW1lKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGNvbnN0IERlZmF1bHRBbGxvd2xpc3QgPSB7XG4gIC8vIEdsb2JhbCBhdHRyaWJ1dGVzIGFsbG93ZWQgb24gYW55IHN1cHBsaWVkIGVsZW1lbnQgYmVsb3cuXG4gICcqJzogWydjbGFzcycsICdkaXInLCAnaWQnLCAnbGFuZycsICdyb2xlJywgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTl0sXG4gIGE6IFsndGFyZ2V0JywgJ2hyZWYnLCAndGl0bGUnLCAncmVsJ10sXG4gIGFyZWE6IFtdLFxuICBiOiBbXSxcbiAgYnI6IFtdLFxuICBjb2w6IFtdLFxuICBjb2RlOiBbXSxcbiAgZGl2OiBbXSxcbiAgZW06IFtdLFxuICBocjogW10sXG4gIGgxOiBbXSxcbiAgaDI6IFtdLFxuICBoMzogW10sXG4gIGg0OiBbXSxcbiAgaDU6IFtdLFxuICBoNjogW10sXG4gIGk6IFtdLFxuICBpbWc6IFsnc3JjJywgJ3NyY3NldCcsICdhbHQnLCAndGl0bGUnLCAnd2lkdGgnLCAnaGVpZ2h0J10sXG4gIGxpOiBbXSxcbiAgb2w6IFtdLFxuICBwOiBbXSxcbiAgcHJlOiBbXSxcbiAgczogW10sXG4gIHNtYWxsOiBbXSxcbiAgc3BhbjogW10sXG4gIHN1YjogW10sXG4gIHN1cDogW10sXG4gIHN0cm9uZzogW10sXG4gIHU6IFtdLFxuICB1bDogW11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplSHRtbCh1bnNhZmVIdG1sLCBhbGxvd0xpc3QsIHNhbml0aXplRm4pIHtcbiAgaWYgKCF1bnNhZmVIdG1sLmxlbmd0aCkge1xuICAgIHJldHVybiB1bnNhZmVIdG1sXG4gIH1cblxuICBpZiAoc2FuaXRpemVGbiAmJiB0eXBlb2Ygc2FuaXRpemVGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBzYW5pdGl6ZUZuKHVuc2FmZUh0bWwpXG4gIH1cblxuICBjb25zdCBkb21QYXJzZXIgPSBuZXcgd2luZG93LkRPTVBhcnNlcigpXG4gIGNvbnN0IGNyZWF0ZWREb2N1bWVudCA9IGRvbVBhcnNlci5wYXJzZUZyb21TdHJpbmcodW5zYWZlSHRtbCwgJ3RleHQvaHRtbCcpXG4gIGNvbnN0IGFsbG93bGlzdEtleXMgPSBPYmplY3Qua2V5cyhhbGxvd0xpc3QpXG4gIGNvbnN0IGVsZW1lbnRzID0gW10uY29uY2F0KC4uLmNyZWF0ZWREb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSlcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBlbCA9IGVsZW1lbnRzW2ldXG4gICAgY29uc3QgZWxOYW1lID0gZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKVxuXG4gICAgaWYgKCFhbGxvd2xpc3RLZXlzLmluY2x1ZGVzKGVsTmFtZSkpIHtcbiAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpXG5cbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3QgYXR0cmlidXRlTGlzdCA9IFtdLmNvbmNhdCguLi5lbC5hdHRyaWJ1dGVzKVxuICAgIGNvbnN0IGFsbG93ZWRBdHRyaWJ1dGVzID0gW10uY29uY2F0KGFsbG93TGlzdFsnKiddIHx8IFtdLCBhbGxvd0xpc3RbZWxOYW1lXSB8fCBbXSlcblxuICAgIGF0dHJpYnV0ZUxpc3QuZm9yRWFjaChhdHRyID0+IHtcbiAgICAgIGlmICghYWxsb3dlZEF0dHJpYnV0ZShhdHRyLCBhbGxvd2VkQXR0cmlidXRlcykpIHtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKGF0dHIubm9kZU5hbWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVkRG9jdW1lbnQuYm9keS5pbm5lckhUTUxcbn1cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogdG9vbHRpcC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAqIGFzIFBvcHBlciBmcm9tICdAcG9wcGVyanMvY29yZSdcblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBmaW5kU2hhZG93Um9vdCxcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0VUlELFxuICBpc0VsZW1lbnQsXG4gIGlzUlRMLFxuICBub29wLFxuICB0eXBlQ2hlY2tDb25maWdcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IHtcbiAgRGVmYXVsdEFsbG93bGlzdCxcbiAgc2FuaXRpemVIdG1sXG59IGZyb20gJy4vdXRpbC9zYW5pdGl6ZXInXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4vZG9tL3NlbGVjdG9yLWVuZ2luZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgPSAndG9vbHRpcCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnRvb2x0aXAnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgQ0xBU1NfUFJFRklYID0gJ2JzLXRvb2x0aXAnXG5jb25zdCBCU0NMU19QUkVGSVhfUkVHRVggPSBuZXcgUmVnRXhwKGAoXnxcXFxccykke0NMQVNTX1BSRUZJWH1cXFxcUytgLCAnZycpXG5jb25zdCBESVNBTExPV0VEX0FUVFJJQlVURVMgPSBuZXcgU2V0KFsnc2FuaXRpemUnLCAnYWxsb3dMaXN0JywgJ3Nhbml0aXplRm4nXSlcblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGFuaW1hdGlvbjogJ2Jvb2xlYW4nLFxuICB0ZW1wbGF0ZTogJ3N0cmluZycsXG4gIHRpdGxlOiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKScsXG4gIHRyaWdnZXI6ICdzdHJpbmcnLFxuICBkZWxheTogJyhudW1iZXJ8b2JqZWN0KScsXG4gIGh0bWw6ICdib29sZWFuJyxcbiAgc2VsZWN0b3I6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgcGxhY2VtZW50OiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICBvZmZzZXQ6ICcoYXJyYXl8c3RyaW5nfGZ1bmN0aW9uKScsXG4gIGNvbnRhaW5lcjogJyhzdHJpbmd8ZWxlbWVudHxib29sZWFuKScsXG4gIGZhbGxiYWNrUGxhY2VtZW50czogJ2FycmF5JyxcbiAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgY3VzdG9tQ2xhc3M6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gIHNhbml0aXplOiAnYm9vbGVhbicsXG4gIHNhbml0aXplRm46ICcobnVsbHxmdW5jdGlvbiknLFxuICBhbGxvd0xpc3Q6ICdvYmplY3QnLFxuICBwb3BwZXJDb25maWc6ICcobnVsbHxvYmplY3R8ZnVuY3Rpb24pJ1xufVxuXG5jb25zdCBBdHRhY2htZW50TWFwID0ge1xuICBBVVRPOiAnYXV0bycsXG4gIFRPUDogJ3RvcCcsXG4gIFJJR0hUOiBpc1JUTCgpID8gJ2xlZnQnIDogJ3JpZ2h0JyxcbiAgQk9UVE9NOiAnYm90dG9tJyxcbiAgTEVGVDogaXNSVEwoKSA/ICdyaWdodCcgOiAnbGVmdCdcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYW5pbWF0aW9uOiB0cnVlLFxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj4nICtcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PicgK1xuICAgICAgICAgICAgJzwvZGl2PicsXG4gIHRyaWdnZXI6ICdob3ZlciBmb2N1cycsXG4gIHRpdGxlOiAnJyxcbiAgZGVsYXk6IDAsXG4gIGh0bWw6IGZhbHNlLFxuICBzZWxlY3RvcjogZmFsc2UsXG4gIHBsYWNlbWVudDogJ3RvcCcsXG4gIG9mZnNldDogWzAsIDBdLFxuICBjb250YWluZXI6IGZhbHNlLFxuICBmYWxsYmFja1BsYWNlbWVudHM6IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10sXG4gIGJvdW5kYXJ5OiAnY2xpcHBpbmdQYXJlbnRzJyxcbiAgY3VzdG9tQ2xhc3M6ICcnLFxuICBzYW5pdGl6ZTogdHJ1ZSxcbiAgc2FuaXRpemVGbjogbnVsbCxcbiAgYWxsb3dMaXN0OiBEZWZhdWx0QWxsb3dsaXN0LFxuICBwb3BwZXJDb25maWc6IG51bGxcbn1cblxuY29uc3QgRXZlbnQgPSB7XG4gIEhJREU6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgSElEREVOOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgU0hPVzogYHNob3cke0VWRU5UX0tFWX1gLFxuICBTSE9XTjogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgSU5TRVJURUQ6IGBpbnNlcnRlZCR7RVZFTlRfS0VZfWAsXG4gIENMSUNLOiBgY2xpY2ske0VWRU5UX0tFWX1gLFxuICBGT0NVU0lOOiBgZm9jdXNpbiR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTT1VUOiBgZm9jdXNvdXQke0VWRU5UX0tFWX1gLFxuICBNT1VTRUVOVEVSOiBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFTEVBVkU6IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxufVxuXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfTU9EQUwgPSAnbW9kYWwnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcblxuY29uc3QgSE9WRVJfU1RBVEVfU0hPVyA9ICdzaG93J1xuY29uc3QgSE9WRVJfU1RBVEVfT1VUID0gJ291dCdcblxuY29uc3QgU0VMRUNUT1JfVE9PTFRJUF9JTk5FUiA9ICcudG9vbHRpcC1pbm5lcidcblxuY29uc3QgVFJJR0dFUl9IT1ZFUiA9ICdob3ZlcidcbmNvbnN0IFRSSUdHRVJfRk9DVVMgPSAnZm9jdXMnXG5jb25zdCBUUklHR0VSX0NMSUNLID0gJ2NsaWNrJ1xuY29uc3QgVFJJR0dFUl9NQU5VQUwgPSAnbWFudWFsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgVG9vbHRpcCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgdG9vbHRpcHMgcmVxdWlyZSBQb3BwZXIgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZyknKVxuICAgIH1cblxuICAgIHN1cGVyKGVsZW1lbnQpXG5cbiAgICAvLyBwcml2YXRlXG4gICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZVxuICAgIHRoaXMuX3RpbWVvdXQgPSAwXG4gICAgdGhpcy5faG92ZXJTdGF0ZSA9ICcnXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlciA9IHt9XG4gICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuXG4gICAgLy8gUHJvdGVjdGVkXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLnRpcCA9IG51bGxcblxuICAgIHRoaXMuX3NldExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRXZlbnQoKSB7XG4gICAgcmV0dXJuIEV2ZW50XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWVcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gZmFsc2VcbiAgfVxuXG4gIHRvZ2dsZUVuYWJsZWQoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gIXRoaXMuX2lzRW5hYmxlZFxuICB9XG5cbiAgdG9nZ2xlKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChldmVudCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudClcblxuICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlci5jbGljayA9ICFjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyLmNsaWNrXG5cbiAgICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgY29udGV4dC5fZW50ZXIobnVsbCwgY29udGV4dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuX2xlYXZlKG51bGwsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmdldFRpcEVsZW1lbnQoKS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgICB0aGlzLl9sZWF2ZShudWxsLCB0aGlzKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5fZW50ZXIobnVsbCwgdGhpcylcbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LmNsb3Nlc3QoYC4ke0NMQVNTX05BTUVfTU9EQUx9YCksICdoaWRlLmJzLm1vZGFsJywgdGhpcy5faGlkZU1vZGFsSGFuZGxlcilcblxuICAgIGlmICh0aGlzLnRpcCAmJiB0aGlzLnRpcC5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLnRpcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMudGlwKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICB9XG5cbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSB1c2Ugc2hvdyBvbiB2aXNpYmxlIGVsZW1lbnRzJylcbiAgICB9XG5cbiAgICBpZiAoISh0aGlzLmlzV2l0aENvbnRlbnQoKSAmJiB0aGlzLl9pc0VuYWJsZWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LlNIT1cpXG4gICAgY29uc3Qgc2hhZG93Um9vdCA9IGZpbmRTaGFkb3dSb290KHRoaXMuX2VsZW1lbnQpXG4gICAgY29uc3QgaXNJblRoZURvbSA9IHNoYWRvd1Jvb3QgPT09IG51bGwgP1xuICAgICAgdGhpcy5fZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyh0aGlzLl9lbGVtZW50KSA6XG4gICAgICBzaGFkb3dSb290LmNvbnRhaW5zKHRoaXMuX2VsZW1lbnQpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgfHwgIWlzSW5UaGVEb20pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgY29uc3QgdGlwSWQgPSBnZXRVSUQodGhpcy5jb25zdHJ1Y3Rvci5OQU1FKVxuXG4gICAgdGlwLnNldEF0dHJpYnV0ZSgnaWQnLCB0aXBJZClcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHRpcElkKVxuXG4gICAgdGhpcy5zZXRDb250ZW50KClcblxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICB0aXAuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpXG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VtZW50ID0gdHlwZW9mIHRoaXMuX2NvbmZpZy5wbGFjZW1lbnQgPT09ICdmdW5jdGlvbicgP1xuICAgICAgdGhpcy5fY29uZmlnLnBsYWNlbWVudC5jYWxsKHRoaXMsIHRpcCwgdGhpcy5fZWxlbWVudCkgOlxuICAgICAgdGhpcy5fY29uZmlnLnBsYWNlbWVudFxuXG4gICAgY29uc3QgYXR0YWNobWVudCA9IHRoaXMuX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KVxuICAgIHRoaXMuX2FkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KVxuXG4gICAgY29uc3QgeyBjb250YWluZXIgfSA9IHRoaXMuX2NvbmZpZ1xuICAgIERhdGEuc2V0KHRpcCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSwgdGhpcylcblxuICAgIGlmICghdGhpcy5fZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyh0aGlzLnRpcCkpIHtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXApXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LklOU0VSVEVEKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci51cGRhdGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wb3BwZXIgPSBQb3BwZXIuY3JlYXRlUG9wcGVyKHRoaXMuX2VsZW1lbnQsIHRpcCwgdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpKVxuICAgIH1cblxuICAgIHRpcC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgIGNvbnN0IGN1c3RvbUNsYXNzID0gdHlwZW9mIHRoaXMuX2NvbmZpZy5jdXN0b21DbGFzcyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX2NvbmZpZy5jdXN0b21DbGFzcygpIDogdGhpcy5fY29uZmlnLmN1c3RvbUNsYXNzXG4gICAgaWYgKGN1c3RvbUNsYXNzKSB7XG4gICAgICB0aXAuY2xhc3NMaXN0LmFkZCguLi5jdXN0b21DbGFzcy5zcGxpdCgnICcpKVxuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBwcmV2SG92ZXJTdGF0ZSA9IHRoaXMuX2hvdmVyU3RhdGVcblxuICAgICAgdGhpcy5faG92ZXJTdGF0ZSA9IG51bGxcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuU0hPV04pXG5cbiAgICAgIGlmIChwcmV2SG92ZXJTdGF0ZSA9PT0gSE9WRVJfU1RBVEVfT1VUKSB7XG4gICAgICAgIHRoaXMuX2xlYXZlKG51bGwsIHRoaXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaXNBbmltYXRlZCA9IHRoaXMudGlwLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy50aXAsIGlzQW5pbWF0ZWQpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5fcG9wcGVyKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2hvdmVyU3RhdGUgIT09IEhPVkVSX1NUQVRFX1NIT1cgJiYgdGlwLnBhcmVudE5vZGUpIHtcbiAgICAgICAgdGlwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGlwKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9jbGVhblRpcENsYXNzKClcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JylcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSElEREVOKVxuXG4gICAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSElERSlcbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRpcC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbilcbiAgICAgICAgLmZvckVhY2goZWxlbWVudCA9PiBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKSlcbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfQ0xJQ0tdID0gZmFsc2VcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfRk9DVVNdID0gZmFsc2VcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfSE9WRVJdID0gZmFsc2VcblxuICAgIGNvbnN0IGlzQW5pbWF0ZWQgPSB0aGlzLnRpcC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKVxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMudGlwLCBpc0FuaW1hdGVkKVxuICAgIHRoaXMuX2hvdmVyU3RhdGUgPSAnJ1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3BvcHBlci51cGRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByb3RlY3RlZFxuXG4gIGlzV2l0aENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5nZXRUaXRsZSgpKVxuICB9XG5cbiAgZ2V0VGlwRWxlbWVudCgpIHtcbiAgICBpZiAodGhpcy50aXApIHtcbiAgICAgIHJldHVybiB0aGlzLnRpcFxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5fY29uZmlnLnRlbXBsYXRlXG5cbiAgICB0aGlzLnRpcCA9IGVsZW1lbnQuY2hpbGRyZW5bMF1cbiAgICByZXR1cm4gdGhpcy50aXBcbiAgfVxuXG4gIHNldENvbnRlbnQoKSB7XG4gICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICB0aGlzLnNldEVsZW1lbnRDb250ZW50KFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfVE9PTFRJUF9JTk5FUiwgdGlwKSwgdGhpcy5nZXRUaXRsZSgpKVxuICAgIHRpcC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfRkFERSwgQ0xBU1NfTkFNRV9TSE9XKVxuICB9XG5cbiAgc2V0RWxlbWVudENvbnRlbnQoZWxlbWVudCwgY29udGVudCkge1xuICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaXNFbGVtZW50KGNvbnRlbnQpKSB7XG4gICAgICBjb250ZW50ID0gZ2V0RWxlbWVudChjb250ZW50KVxuXG4gICAgICAvLyBjb250ZW50IGlzIGEgRE9NIG5vZGUgb3IgYSBqUXVlcnlcbiAgICAgIGlmICh0aGlzLl9jb25maWcuaHRtbCkge1xuICAgICAgICBpZiAoY29udGVudC5wYXJlbnROb2RlICE9PSBlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQudGV4dENvbnRlbnRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5odG1sKSB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLnNhbml0aXplKSB7XG4gICAgICAgIGNvbnRlbnQgPSBzYW5pdGl6ZUh0bWwoY29udGVudCwgdGhpcy5fY29uZmlnLmFsbG93TGlzdCwgdGhpcy5fY29uZmlnLnNhbml0aXplRm4pXG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudFxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudFxuICAgIH1cbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIGxldCB0aXRsZSA9IHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJylcblxuICAgIGlmICghdGl0bGUpIHtcbiAgICAgIHRpdGxlID0gdHlwZW9mIHRoaXMuX2NvbmZpZy50aXRsZSA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICAgIHRoaXMuX2NvbmZpZy50aXRsZS5jYWxsKHRoaXMuX2VsZW1lbnQpIDpcbiAgICAgICAgdGhpcy5fY29uZmlnLnRpdGxlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRpdGxlXG4gIH1cblxuICB1cGRhdGVBdHRhY2htZW50KGF0dGFjaG1lbnQpIHtcbiAgICBpZiAoYXR0YWNobWVudCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgcmV0dXJuICdlbmQnXG4gICAgfVxuXG4gICAgaWYgKGF0dGFjaG1lbnQgPT09ICdsZWZ0Jykge1xuICAgICAgcmV0dXJuICdzdGFydCdcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0YWNobWVudFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWVxuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IERhdGEuZ2V0KGV2ZW50LmRlbGVnYXRlVGFyZ2V0LCBkYXRhS2V5KVxuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoZXZlbnQuZGVsZWdhdGVUYXJnZXQsIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKCkpXG4gICAgICBEYXRhLnNldChldmVudC5kZWxlZ2F0ZVRhcmdldCwgZGF0YUtleSwgY29udGV4dClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGV4dFxuICB9XG5cbiAgX2dldE9mZnNldCgpIHtcbiAgICBjb25zdCB7IG9mZnNldCB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBvZmZzZXQuc3BsaXQoJywnKS5tYXAodmFsID0+IE51bWJlci5wYXJzZUludCh2YWwsIDEwKSlcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHBvcHBlckRhdGEgPT4gb2Zmc2V0KHBvcHBlckRhdGEsIHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldFxuICB9XG5cbiAgX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSB7XG4gICAgY29uc3QgZGVmYXVsdEJzUG9wcGVyQ29uZmlnID0ge1xuICAgICAgcGxhY2VtZW50OiBhdHRhY2htZW50LFxuICAgICAgbW9kaWZpZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnZmxpcCcsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgZmFsbGJhY2tQbGFjZW1lbnRzOiB0aGlzLl9jb25maWcuZmFsbGJhY2tQbGFjZW1lbnRzXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGJvdW5kYXJ5OiB0aGlzLl9jb25maWcuYm91bmRhcnlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnYXJyb3cnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGAuJHt0aGlzLmNvbnN0cnVjdG9yLk5BTUV9LWFycm93YFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdvbkNoYW5nZScsXG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBwaGFzZTogJ2FmdGVyV3JpdGUnLFxuICAgICAgICAgIGZuOiBkYXRhID0+IHRoaXMuX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShkYXRhKVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgb25GaXJzdFVwZGF0ZTogZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhLm9wdGlvbnMucGxhY2VtZW50ICE9PSBkYXRhLnBsYWNlbWVudCkge1xuICAgICAgICAgIHRoaXMuX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShkYXRhKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlZmF1bHRCc1BvcHBlckNvbmZpZyxcbiAgICAgIC4uLih0eXBlb2YgdGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcoZGVmYXVsdEJzUG9wcGVyQ29uZmlnKSA6IHRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWcpXG4gICAgfVxuICB9XG5cbiAgX2FkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KSB7XG4gICAgdGhpcy5nZXRUaXBFbGVtZW50KCkuY2xhc3NMaXN0LmFkZChgJHtDTEFTU19QUkVGSVh9LSR7dGhpcy51cGRhdGVBdHRhY2htZW50KGF0dGFjaG1lbnQpfWApXG4gIH1cblxuICBfZ2V0QXR0YWNobWVudChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gQXR0YWNobWVudE1hcFtwbGFjZW1lbnQudG9VcHBlckNhc2UoKV1cbiAgfVxuXG4gIF9zZXRMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgdHJpZ2dlcnMgPSB0aGlzLl9jb25maWcudHJpZ2dlci5zcGxpdCgnICcpXG5cbiAgICB0cmlnZ2Vycy5mb3JFYWNoKHRyaWdnZXIgPT4ge1xuICAgICAgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuQ0xJQ0ssIHRoaXMuX2NvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4gdGhpcy50b2dnbGUoZXZlbnQpKVxuICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9PSBUUklHR0VSX01BTlVBTCkge1xuICAgICAgICBjb25zdCBldmVudEluID0gdHJpZ2dlciA9PT0gVFJJR0dFUl9IT1ZFUiA/XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUVOVEVSIDpcbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTSU5cbiAgICAgICAgY29uc3QgZXZlbnRPdXQgPSB0cmlnZ2VyID09PSBUUklHR0VSX0hPVkVSID9cbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFTEVBVkUgOlxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuRk9DVVNPVVRcblxuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgZXZlbnRJbiwgdGhpcy5fY29uZmlnLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLl9lbnRlcihldmVudCkpXG4gICAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBldmVudE91dCwgdGhpcy5fY29uZmlnLnNlbGVjdG9yLCBldmVudCA9PiB0aGlzLl9sZWF2ZShldmVudCkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fZWxlbWVudCkge1xuICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LmNsb3Nlc3QoYC4ke0NMQVNTX05BTUVfTU9EQUx9YCksICdoaWRlLmJzLm1vZGFsJywgdGhpcy5faGlkZU1vZGFsSGFuZGxlcilcblxuICAgIGlmICh0aGlzLl9jb25maWcuc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgICAgLi4udGhpcy5fY29uZmlnLFxuICAgICAgICB0cmlnZ2VyOiAnbWFudWFsJyxcbiAgICAgICAgc2VsZWN0b3I6ICcnXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ZpeFRpdGxlKClcbiAgICB9XG4gIH1cblxuICBfZml4VGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgIGNvbnN0IG9yaWdpbmFsVGl0bGVUeXBlID0gdHlwZW9mIHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJylcblxuICAgIGlmICh0aXRsZSB8fCBvcmlnaW5hbFRpdGxlVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJywgdGl0bGUgfHwgJycpXG4gICAgICBpZiAodGl0bGUgJiYgIXRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgJiYgIXRoaXMuX2VsZW1lbnQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aXRsZSlcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJycpXG4gICAgfVxuICB9XG5cbiAgX2VudGVyKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgY29udGV4dCA9IHRoaXMuX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudCwgY29udGV4dClcblxuICAgIGlmIChldmVudCkge1xuICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltcbiAgICAgICAgZXZlbnQudHlwZSA9PT0gJ2ZvY3VzaW4nID8gVFJJR0dFUl9GT0NVUyA6IFRSSUdHRVJfSE9WRVJcbiAgICAgIF0gPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQuZ2V0VGlwRWxlbWVudCgpLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpIHx8IGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX1NIT1cpIHtcbiAgICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIT1ZFUl9TVEFURV9TSE9XXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dClcblxuICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIT1ZFUl9TVEFURV9TSE9XXG5cbiAgICBpZiAoIWNvbnRleHQuX2NvbmZpZy5kZWxheSB8fCAhY29udGV4dC5fY29uZmlnLmRlbGF5LnNob3cpIHtcbiAgICAgIGNvbnRleHQuc2hvdygpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb250ZXh0Ll90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoY29udGV4dC5faG92ZXJTdGF0ZSA9PT0gSE9WRVJfU1RBVEVfU0hPVykge1xuICAgICAgICBjb250ZXh0LnNob3coKVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQuX2NvbmZpZy5kZWxheS5zaG93KVxuICB9XG5cbiAgX2xlYXZlKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgY29udGV4dCA9IHRoaXMuX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudCwgY29udGV4dClcblxuICAgIGlmIChldmVudCkge1xuICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltcbiAgICAgICAgZXZlbnQudHlwZSA9PT0gJ2ZvY3Vzb3V0JyA/IFRSSUdHRVJfRk9DVVMgOiBUUklHR0VSX0hPVkVSXG4gICAgICBdID0gY29udGV4dC5fZWxlbWVudC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KVxuICAgIH1cblxuICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNsZWFyVGltZW91dChjb250ZXh0Ll90aW1lb3V0KVxuXG4gICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhPVkVSX1NUQVRFX09VVFxuXG4gICAgaWYgKCFjb250ZXh0Ll9jb25maWcuZGVsYXkgfHwgIWNvbnRleHQuX2NvbmZpZy5kZWxheS5oaWRlKSB7XG4gICAgICBjb250ZXh0LmhpZGUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX09VVCkge1xuICAgICAgICBjb250ZXh0LmhpZGUoKVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQuX2NvbmZpZy5kZWxheS5oaWRlKVxuICB9XG5cbiAgX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSB7XG4gICAgZm9yIChjb25zdCB0cmlnZ2VyIGluIHRoaXMuX2FjdGl2ZVRyaWdnZXIpIHtcbiAgICAgIGlmICh0aGlzLl9hY3RpdmVUcmlnZ2VyW3RyaWdnZXJdKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbnN0IGRhdGFBdHRyaWJ1dGVzID0gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZXModGhpcy5fZWxlbWVudClcblxuICAgIE9iamVjdC5rZXlzKGRhdGFBdHRyaWJ1dGVzKS5mb3JFYWNoKGRhdGFBdHRyID0+IHtcbiAgICAgIGlmIChESVNBTExPV0VEX0FUVFJJQlVURVMuaGFzKGRhdGFBdHRyKSkge1xuICAgICAgICBkZWxldGUgZGF0YUF0dHJpYnV0ZXNbZGF0YUF0dHJdXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCxcbiAgICAgIC4uLmRhdGFBdHRyaWJ1dGVzLFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cblxuICAgIGNvbmZpZy5jb250YWluZXIgPSBjb25maWcuY29udGFpbmVyID09PSBmYWxzZSA/IGRvY3VtZW50LmJvZHkgOiBnZXRFbGVtZW50KGNvbmZpZy5jb250YWluZXIpXG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy5kZWxheSA9IHtcbiAgICAgICAgc2hvdzogY29uZmlnLmRlbGF5LFxuICAgICAgICBoaWRlOiBjb25maWcuZGVsYXlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50aXRsZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy50aXRsZSA9IGNvbmZpZy50aXRsZS50b1N0cmluZygpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuY29udGVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy5jb250ZW50ID0gY29uZmlnLmNvbnRlbnQudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIHR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGUpXG5cbiAgICBpZiAoY29uZmlnLnNhbml0aXplKSB7XG4gICAgICBjb25maWcudGVtcGxhdGUgPSBzYW5pdGl6ZUh0bWwoY29uZmlnLnRlbXBsYXRlLCBjb25maWcuYWxsb3dMaXN0LCBjb25maWcuc2FuaXRpemVGbilcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGVsZWdhdGVDb25maWcoKSB7XG4gICAgY29uc3QgY29uZmlnID0ge31cblxuICAgIGlmICh0aGlzLl9jb25maWcpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX2NvbmZpZykge1xuICAgICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0W2tleV0gIT09IHRoaXMuX2NvbmZpZ1trZXldKSB7XG4gICAgICAgICAgY29uZmlnW2tleV0gPSB0aGlzLl9jb25maWdba2V5XVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2NsZWFuVGlwQ2xhc3MoKSB7XG4gICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICBjb25zdCB0YWJDbGFzcyA9IHRpcC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykubWF0Y2goQlNDTFNfUFJFRklYX1JFR0VYKVxuICAgIGlmICh0YWJDbGFzcyAhPT0gbnVsbCAmJiB0YWJDbGFzcy5sZW5ndGggPiAwKSB7XG4gICAgICB0YWJDbGFzcy5tYXAodG9rZW4gPT4gdG9rZW4udHJpbSgpKVxuICAgICAgICAuZm9yRWFjaCh0Q2xhc3MgPT4gdGlwLmNsYXNzTGlzdC5yZW1vdmUodENsYXNzKSlcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKHBvcHBlckRhdGEpIHtcbiAgICBjb25zdCB7IHN0YXRlIH0gPSBwb3BwZXJEYXRhXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnRpcCA9IHN0YXRlLmVsZW1lbnRzLnBvcHBlclxuICAgIHRoaXMuX2NsZWFuVGlwQ2xhc3MoKVxuICAgIHRoaXMuX2FkZEF0dGFjaG1lbnRDbGFzcyh0aGlzLl9nZXRBdHRhY2htZW50KHN0YXRlLnBsYWNlbWVudCkpXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSBEYXRhLmdldCh0aGlzLCBEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWdcblxuICAgICAgaWYgKCFkYXRhICYmIC9kaXNwb3NlfGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgVG9vbHRpcCh0aGlzLCBfY29uZmlnKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5Ub29sdGlwIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFRvb2x0aXApXG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXBcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogcG9wb3Zlci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGRlZmluZUpRdWVyeVBsdWdpbiB9IGZyb20gJy4vdXRpbC9pbmRleCdcbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ3BvcG92ZXInXG5jb25zdCBEQVRBX0tFWSA9ICdicy5wb3BvdmVyJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IENMQVNTX1BSRUZJWCA9ICdicy1wb3BvdmVyJ1xuY29uc3QgQlNDTFNfUFJFRklYX1JFR0VYID0gbmV3IFJlZ0V4cChgKF58XFxcXHMpJHtDTEFTU19QUkVGSVh9XFxcXFMrYCwgJ2cnKVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICAuLi5Ub29sdGlwLkRlZmF1bHQsXG4gIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgb2Zmc2V0OiBbMCwgOF0sXG4gIHRyaWdnZXI6ICdjbGljaycsXG4gIGNvbnRlbnQ6ICcnLFxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJwb3BvdmVyXCIgcm9sZT1cInRvb2x0aXBcIj4nICtcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWFycm93XCI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICAgJzxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PC9oMz4nICtcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWJvZHlcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICc8L2Rpdj4nXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICAuLi5Ub29sdGlwLkRlZmF1bHRUeXBlLFxuICBjb250ZW50OiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKSdcbn1cblxuY29uc3QgRXZlbnQgPSB7XG4gIEhJREU6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgSElEREVOOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgU0hPVzogYHNob3cke0VWRU5UX0tFWX1gLFxuICBTSE9XTjogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgSU5TRVJURUQ6IGBpbnNlcnRlZCR7RVZFTlRfS0VZfWAsXG4gIENMSUNLOiBgY2xpY2ske0VWRU5UX0tFWX1gLFxuICBGT0NVU0lOOiBgZm9jdXNpbiR7RVZFTlRfS0VZfWAsXG4gIEZPQ1VTT1VUOiBgZm9jdXNvdXQke0VWRU5UX0tFWX1gLFxuICBNT1VTRUVOVEVSOiBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFTEVBVkU6IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxufVxuXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG5jb25zdCBTRUxFQ1RPUl9USVRMRSA9ICcucG9wb3Zlci1oZWFkZXInXG5jb25zdCBTRUxFQ1RPUl9DT05URU5UID0gJy5wb3BvdmVyLWJvZHknXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBQb3BvdmVyIGV4dGVuZHMgVG9vbHRpcCB7XG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgc3RhdGljIGdldCBFdmVudCgpIHtcbiAgICByZXR1cm4gRXZlbnRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICAvLyBPdmVycmlkZXNcblxuICBpc1dpdGhDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldFRpdGxlKCkgfHwgdGhpcy5fZ2V0Q29udGVudCgpXG4gIH1cblxuICBzZXRDb250ZW50KCkge1xuICAgIGNvbnN0IHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG5cbiAgICAvLyB3ZSB1c2UgYXBwZW5kIGZvciBodG1sIG9iamVjdHMgdG8gbWFpbnRhaW4ganMgZXZlbnRzXG4gICAgdGhpcy5zZXRFbGVtZW50Q29udGVudChTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX1RJVExFLCB0aXApLCB0aGlzLmdldFRpdGxlKCkpXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLl9nZXRDb250ZW50KClcbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnRlbnQgPSBjb250ZW50LmNhbGwodGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLnNldEVsZW1lbnRDb250ZW50KFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQ09OVEVOVCwgdGlwKSwgY29udGVudClcblxuICAgIHRpcC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfRkFERSwgQ0xBU1NfTkFNRV9TSE9XKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9hZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudCkge1xuICAgIHRoaXMuZ2V0VGlwRWxlbWVudCgpLmNsYXNzTGlzdC5hZGQoYCR7Q0xBU1NfUFJFRklYfS0ke3RoaXMudXBkYXRlQXR0YWNobWVudChhdHRhY2htZW50KX1gKVxuICB9XG5cbiAgX2dldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLWNvbnRlbnQnKSB8fCB0aGlzLl9jb25maWcuY29udGVudFxuICB9XG5cbiAgX2NsZWFuVGlwQ2xhc3MoKSB7XG4gICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICBjb25zdCB0YWJDbGFzcyA9IHRpcC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykubWF0Y2goQlNDTFNfUFJFRklYX1JFR0VYKVxuICAgIGlmICh0YWJDbGFzcyAhPT0gbnVsbCAmJiB0YWJDbGFzcy5sZW5ndGggPiAwKSB7XG4gICAgICB0YWJDbGFzcy5tYXAodG9rZW4gPT4gdG9rZW4udHJpbSgpKVxuICAgICAgICAuZm9yRWFjaCh0Q2xhc3MgPT4gdGlwLmNsYXNzTGlzdC5yZW1vdmUodENsYXNzKSlcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSBEYXRhLmdldCh0aGlzLCBEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGxcblxuICAgICAgaWYgKCFkYXRhICYmIC9kaXNwb3NlfGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgUG9wb3Zlcih0aGlzLCBfY29uZmlnKVxuICAgICAgICBEYXRhLnNldCh0aGlzLCBEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuUG9wb3ZlciB0byBqUXVlcnkgb25seSBpZiBqUXVlcnkgaXMgcHJlc2VudFxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihQb3BvdmVyKVxuXG5leHBvcnQgZGVmYXVsdCBQb3BvdmVyXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IHNjcm9sbHNweS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIGRlZmluZUpRdWVyeVBsdWdpbixcbiAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCxcbiAgZ2V0VUlELFxuICBpc0VsZW1lbnQsXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXInXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3InXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICdzY3JvbGxzcHknXG5jb25zdCBEQVRBX0tFWSA9ICdicy5zY3JvbGxzcHknXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgb2Zmc2V0OiAxMCxcbiAgbWV0aG9kOiAnYXV0bycsXG4gIHRhcmdldDogJydcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIG9mZnNldDogJ251bWJlcicsXG4gIG1ldGhvZDogJ3N0cmluZycsXG4gIHRhcmdldDogJyhzdHJpbmd8ZWxlbWVudCknXG59XG5cbmNvbnN0IEVWRU5UX0FDVElWQVRFID0gYGFjdGl2YXRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0NST0xMID0gYHNjcm9sbCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNID0gJ2Ryb3Bkb3duLWl0ZW0nXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfU1BZID0gJ1tkYXRhLWJzLXNweT1cInNjcm9sbFwiXSdcbmNvbnN0IFNFTEVDVE9SX05BVl9MSVNUX0dST1VQID0gJy5uYXYsIC5saXN0LWdyb3VwJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0xJTktTID0gJy5uYXYtbGluaydcbmNvbnN0IFNFTEVDVE9SX05BVl9JVEVNUyA9ICcubmF2LWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9MSVNUX0lURU1TID0gJy5saXN0LWdyb3VwLWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTiA9ICcuZHJvcGRvd24nXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnLmRyb3Bkb3duLXRvZ2dsZSdcblxuY29uc3QgTUVUSE9EX09GRlNFVCA9ICdvZmZzZXQnXG5jb25zdCBNRVRIT0RfUE9TSVRJT04gPSAncG9zaXRpb24nXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBTY3JvbGxTcHkgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudClcbiAgICB0aGlzLl9zY3JvbGxFbGVtZW50ID0gdGhpcy5fZWxlbWVudC50YWdOYW1lID09PSAnQk9EWScgPyB3aW5kb3cgOiB0aGlzLl9lbGVtZW50XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9zZWxlY3RvciA9IGAke3RoaXMuX2NvbmZpZy50YXJnZXR9ICR7U0VMRUNUT1JfTkFWX0xJTktTfSwgJHt0aGlzLl9jb25maWcudGFyZ2V0fSAke1NFTEVDVE9SX0xJU1RfSVRFTVN9LCAke3RoaXMuX2NvbmZpZy50YXJnZXR9IC4ke0NMQVNTX05BTUVfRFJPUERPV05fSVRFTX1gXG4gICAgdGhpcy5fb2Zmc2V0cyA9IFtdXG4gICAgdGhpcy5fdGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbFxuICAgIHRoaXMuX3Njcm9sbEhlaWdodCA9IDBcblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9zY3JvbGxFbGVtZW50LCBFVkVOVF9TQ1JPTEwsICgpID0+IHRoaXMuX3Byb2Nlc3MoKSlcblxuICAgIHRoaXMucmVmcmVzaCgpXG4gICAgdGhpcy5fcHJvY2VzcygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgYXV0b01ldGhvZCA9IHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHRoaXMuX3Njcm9sbEVsZW1lbnQud2luZG93ID9cbiAgICAgIE1FVEhPRF9PRkZTRVQgOlxuICAgICAgTUVUSE9EX1BPU0lUSU9OXG5cbiAgICBjb25zdCBvZmZzZXRNZXRob2QgPSB0aGlzLl9jb25maWcubWV0aG9kID09PSAnYXV0bycgP1xuICAgICAgYXV0b01ldGhvZCA6XG4gICAgICB0aGlzLl9jb25maWcubWV0aG9kXG5cbiAgICBjb25zdCBvZmZzZXRCYXNlID0gb2Zmc2V0TWV0aG9kID09PSBNRVRIT0RfUE9TSVRJT04gP1xuICAgICAgdGhpcy5fZ2V0U2Nyb2xsVG9wKCkgOlxuICAgICAgMFxuXG4gICAgdGhpcy5fb2Zmc2V0cyA9IFtdXG4gICAgdGhpcy5fdGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ID0gdGhpcy5fZ2V0U2Nyb2xsSGVpZ2h0KClcblxuICAgIGNvbnN0IHRhcmdldHMgPSBTZWxlY3RvckVuZ2luZS5maW5kKHRoaXMuX3NlbGVjdG9yKVxuXG4gICAgdGFyZ2V0cy5tYXAoZWxlbWVudCA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRTZWxlY3RvciA9IGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudClcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRhcmdldFNlbGVjdG9yID8gU2VsZWN0b3JFbmdpbmUuZmluZE9uZSh0YXJnZXRTZWxlY3RvcikgOiBudWxsXG5cbiAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0QkNSID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIGlmICh0YXJnZXRCQ1Iud2lkdGggfHwgdGFyZ2V0QkNSLmhlaWdodCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBNYW5pcHVsYXRvcltvZmZzZXRNZXRob2RdKHRhcmdldCkudG9wICsgb2Zmc2V0QmFzZSxcbiAgICAgICAgICAgIHRhcmdldFNlbGVjdG9yXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsXG4gICAgfSlcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKVxuICAgICAgLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIHRoaXMuX29mZnNldHMucHVzaChpdGVtWzBdKVxuICAgICAgICB0aGlzLl90YXJnZXRzLnB1c2goaXRlbVsxXSlcbiAgICAgIH0pXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIEV2ZW50SGFuZGxlci5vZmYodGhpcy5fc2Nyb2xsRWxlbWVudCwgRVZFTlRfS0VZKVxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLk1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQpLFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9KVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnRhcmdldCAhPT0gJ3N0cmluZycgJiYgaXNFbGVtZW50KGNvbmZpZy50YXJnZXQpKSB7XG4gICAgICBsZXQgeyBpZCB9ID0gY29uZmlnLnRhcmdldFxuICAgICAgaWYgKCFpZCkge1xuICAgICAgICBpZCA9IGdldFVJRChOQU1FKVxuICAgICAgICBjb25maWcudGFyZ2V0LmlkID0gaWRcbiAgICAgIH1cblxuICAgICAgY29uZmlnLnRhcmdldCA9IGAjJHtpZH1gXG4gICAgfVxuXG4gICAgdHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0U2Nyb2xsVG9wKCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB3aW5kb3cgP1xuICAgICAgdGhpcy5fc2Nyb2xsRWxlbWVudC5wYWdlWU9mZnNldCA6XG4gICAgICB0aGlzLl9zY3JvbGxFbGVtZW50LnNjcm9sbFRvcFxuICB9XG5cbiAgX2dldFNjcm9sbEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRWxlbWVudC5zY3JvbGxIZWlnaHQgfHwgTWF0aC5tYXgoXG4gICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCxcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHRcbiAgICApXG4gIH1cblxuICBfZ2V0T2Zmc2V0SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB3aW5kb3cgP1xuICAgICAgd2luZG93LmlubmVySGVpZ2h0IDpcbiAgICAgIHRoaXMuX3Njcm9sbEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gIH1cblxuICBfcHJvY2VzcygpIHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLl9nZXRTY3JvbGxUb3AoKSArIHRoaXMuX2NvbmZpZy5vZmZzZXRcbiAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSB0aGlzLl9nZXRTY3JvbGxIZWlnaHQoKVxuICAgIGNvbnN0IG1heFNjcm9sbCA9IHRoaXMuX2NvbmZpZy5vZmZzZXQgKyBzY3JvbGxIZWlnaHQgLSB0aGlzLl9nZXRPZmZzZXRIZWlnaHQoKVxuXG4gICAgaWYgKHRoaXMuX3Njcm9sbEhlaWdodCAhPT0gc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICB0aGlzLnJlZnJlc2goKVxuICAgIH1cblxuICAgIGlmIChzY3JvbGxUb3AgPj0gbWF4U2Nyb2xsKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLl90YXJnZXRzW3RoaXMuX3RhcmdldHMubGVuZ3RoIC0gMV1cblxuICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuX2FjdGl2YXRlKHRhcmdldClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCAmJiBzY3JvbGxUb3AgPCB0aGlzLl9vZmZzZXRzWzBdICYmIHRoaXMuX29mZnNldHNbMF0gPiAwKSB7XG4gICAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsXG4gICAgICB0aGlzLl9jbGVhcigpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gdGhpcy5fb2Zmc2V0cy5sZW5ndGg7IGktLTspIHtcbiAgICAgIGNvbnN0IGlzQWN0aXZlVGFyZ2V0ID0gdGhpcy5fYWN0aXZlVGFyZ2V0ICE9PSB0aGlzLl90YXJnZXRzW2ldICYmXG4gICAgICAgICAgc2Nyb2xsVG9wID49IHRoaXMuX29mZnNldHNbaV0gJiZcbiAgICAgICAgICAodHlwZW9mIHRoaXMuX29mZnNldHNbaSArIDFdID09PSAndW5kZWZpbmVkJyB8fCBzY3JvbGxUb3AgPCB0aGlzLl9vZmZzZXRzW2kgKyAxXSlcblxuICAgICAgaWYgKGlzQWN0aXZlVGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuX2FjdGl2YXRlKHRoaXMuX3RhcmdldHNbaV0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2FjdGl2YXRlKHRhcmdldCkge1xuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IHRhcmdldFxuXG4gICAgdGhpcy5fY2xlYXIoKVxuXG4gICAgY29uc3QgcXVlcmllcyA9IHRoaXMuX3NlbGVjdG9yLnNwbGl0KCcsJylcbiAgICAgIC5tYXAoc2VsZWN0b3IgPT4gYCR7c2VsZWN0b3J9W2RhdGEtYnMtdGFyZ2V0PVwiJHt0YXJnZXR9XCJdLCR7c2VsZWN0b3J9W2hyZWY9XCIke3RhcmdldH1cIl1gKVxuXG4gICAgY29uc3QgbGluayA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUocXVlcmllcy5qb2luKCcsJykpXG5cbiAgICBpZiAobGluay5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNKSkge1xuICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUsIGxpbmsuY2xvc2VzdChTRUxFQ1RPUl9EUk9QRE9XTikpXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNldCB0cmlnZ2VyZWQgbGluayBhcyBhY3RpdmVcbiAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgU2VsZWN0b3JFbmdpbmUucGFyZW50cyhsaW5rLCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUClcbiAgICAgICAgLmZvckVhY2gobGlzdEdyb3VwID0+IHtcbiAgICAgICAgICAvLyBTZXQgdHJpZ2dlcmVkIGxpbmtzIHBhcmVudHMgYXMgYWN0aXZlXG4gICAgICAgICAgLy8gV2l0aCBib3RoIDx1bD4gYW5kIDxuYXY+IG1hcmt1cCBhIHBhcmVudCBpcyB0aGUgcHJldmlvdXMgc2libGluZyBvZiBhbnkgbmF2IGFuY2VzdG9yXG4gICAgICAgICAgU2VsZWN0b3JFbmdpbmUucHJldihsaXN0R3JvdXAsIGAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7U0VMRUNUT1JfTElTVF9JVEVNU31gKVxuICAgICAgICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuXG4gICAgICAgICAgLy8gSGFuZGxlIHNwZWNpYWwgY2FzZSB3aGVuIC5uYXYtbGluayBpcyBpbnNpZGUgLm5hdi1pdGVtXG4gICAgICAgICAgU2VsZWN0b3JFbmdpbmUucHJldihsaXN0R3JvdXAsIFNFTEVDVE9SX05BVl9JVEVNUylcbiAgICAgICAgICAgIC5mb3JFYWNoKG5hdkl0ZW0gPT4ge1xuICAgICAgICAgICAgICBTZWxlY3RvckVuZ2luZS5jaGlsZHJlbihuYXZJdGVtLCBTRUxFQ1RPUl9OQVZfTElOS1MpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9zY3JvbGxFbGVtZW50LCBFVkVOVF9BQ1RJVkFURSwge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGFyZ2V0XG4gICAgfSlcbiAgfVxuXG4gIF9jbGVhcigpIHtcbiAgICBTZWxlY3RvckVuZ2luZS5maW5kKHRoaXMuX3NlbGVjdG9yKVxuICAgICAgLmZpbHRlcihub2RlID0+IG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgICAgIC5mb3JFYWNoKG5vZGUgPT4gbm9kZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKSlcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gU2Nyb2xsU3B5LmdldEluc3RhbmNlKHRoaXMpIHx8IG5ldyBTY3JvbGxTcHkodGhpcywgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiB7fSlcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9TUFkpXG4gICAgLmZvckVhY2goc3B5ID0+IG5ldyBTY3JvbGxTcHkoc3B5KSlcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYWRkIC5TY3JvbGxTcHkgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oU2Nyb2xsU3B5KVxuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxTcHlcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjUuMC4xKTogdGFiLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yLFxuICBpc0Rpc2FibGVkLFxuICByZWZsb3dcbn0gZnJvbSAnLi91dGlsL2luZGV4J1xuaW1wb3J0IERhdGEgZnJvbSAnLi9kb20vZGF0YSdcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlcidcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUnXG5pbXBvcnQgQmFzZUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtY29tcG9uZW50J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FID0gJ3RhYidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnRhYidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9EUk9QRE9XTl9NRU5VID0gJ2Ryb3Bkb3duLW1lbnUnXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTiA9ICcuZHJvcGRvd24nXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCA9ICcubmF2LCAubGlzdC1ncm91cCdcbmNvbnN0IFNFTEVDVE9SX0FDVElWRSA9ICcuYWN0aXZlJ1xuY29uc3QgU0VMRUNUT1JfQUNUSVZFX1VMID0gJzpzY29wZSA+IGxpID4gLmFjdGl2ZSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cInRhYlwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwicGlsbFwiXSwgW2RhdGEtYnMtdG9nZ2xlPVwibGlzdFwiXSdcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9ICcuZHJvcGRvd24tdG9nZ2xlJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fQUNUSVZFX0NISUxEID0gJzpzY29wZSA+IC5kcm9wZG93bi1tZW51IC5hY3RpdmUnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBUYWIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgc2hvdygpIHtcbiAgICBpZiAoKHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSAmJlxuICAgICAgdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSAmJlxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUpKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHByZXZpb3VzXG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzLl9lbGVtZW50KVxuICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX05BVl9MSVNUX0dST1VQKVxuXG4gICAgaWYgKGxpc3RFbGVtZW50KSB7XG4gICAgICBjb25zdCBpdGVtU2VsZWN0b3IgPSBsaXN0RWxlbWVudC5ub2RlTmFtZSA9PT0gJ1VMJyB8fCBsaXN0RWxlbWVudC5ub2RlTmFtZSA9PT0gJ09MJyA/IFNFTEVDVE9SX0FDVElWRV9VTCA6IFNFTEVDVE9SX0FDVElWRVxuICAgICAgcHJldmlvdXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKGl0ZW1TZWxlY3RvciwgbGlzdEVsZW1lbnQpXG4gICAgICBwcmV2aW91cyA9IHByZXZpb3VzW3ByZXZpb3VzLmxlbmd0aCAtIDFdXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gcHJldmlvdXMgP1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIocHJldmlvdXMsIEVWRU5UX0hJREUsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfSkgOlxuICAgICAgbnVsbFxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywge1xuICAgICAgcmVsYXRlZFRhcmdldDogcHJldmlvdXNcbiAgICB9KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkIHx8IChoaWRlRXZlbnQgIT09IG51bGwgJiYgaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmF0ZSh0aGlzLl9lbGVtZW50LCBsaXN0RWxlbWVudClcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIocHJldmlvdXMsIEVWRU5UX0hJRERFTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgICB9KVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogcHJldmlvdXNcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgdGhpcy5fYWN0aXZhdGUodGFyZ2V0LCB0YXJnZXQucGFyZW50Tm9kZSwgY29tcGxldGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2FjdGl2YXRlKGVsZW1lbnQsIGNvbnRhaW5lciwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50cyA9IGNvbnRhaW5lciAmJiAoY29udGFpbmVyLm5vZGVOYW1lID09PSAnVUwnIHx8IGNvbnRhaW5lci5ub2RlTmFtZSA9PT0gJ09MJykgP1xuICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9BQ1RJVkVfVUwsIGNvbnRhaW5lcikgOlxuICAgICAgU2VsZWN0b3JFbmdpbmUuY2hpbGRyZW4oY29udGFpbmVyLCBTRUxFQ1RPUl9BQ1RJVkUpXG5cbiAgICBjb25zdCBhY3RpdmUgPSBhY3RpdmVFbGVtZW50c1swXVxuICAgIGNvbnN0IGlzVHJhbnNpdGlvbmluZyA9IGNhbGxiYWNrICYmIChhY3RpdmUgJiYgYWN0aXZlLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpKVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB0aGlzLl90cmFuc2l0aW9uQ29tcGxldGUoZWxlbWVudCwgYWN0aXZlLCBjYWxsYmFjaylcblxuICAgIGlmIChhY3RpdmUgJiYgaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICBhY3RpdmUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCBlbGVtZW50LCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgX3RyYW5zaXRpb25Db21wbGV0ZShlbGVtZW50LCBhY3RpdmUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgYWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICAgIGNvbnN0IGRyb3Bkb3duQ2hpbGQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0RST1BET1dOX0FDVElWRV9DSElMRCwgYWN0aXZlLnBhcmVudE5vZGUpXG5cbiAgICAgIGlmIChkcm9wZG93bkNoaWxkKSB7XG4gICAgICAgIGRyb3Bkb3duQ2hpbGQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGl2ZS5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ3RhYicpIHtcbiAgICAgICAgYWN0aXZlLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIGZhbHNlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ3RhYicpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSlcbiAgICB9XG5cbiAgICByZWZsb3coZWxlbWVudClcblxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIH1cblxuICAgIGxldCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICBpZiAocGFyZW50ICYmIHBhcmVudC5ub2RlTmFtZSA9PT0gJ0xJJykge1xuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGVcbiAgICB9XG5cbiAgICBpZiAocGFyZW50ICYmIHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRE9XTl9NRU5VKSkge1xuICAgICAgY29uc3QgZHJvcGRvd25FbGVtZW50ID0gZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX0RST1BET1dOKVxuXG4gICAgICBpZiAoZHJvcGRvd25FbGVtZW50KSB7XG4gICAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFLCBkcm9wZG93bkVsZW1lbnQpXG4gICAgICAgICAgLmZvckVhY2goZHJvcGRvd24gPT4gZHJvcGRvd24uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSkpXG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICB9XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IERhdGEuZ2V0KHRoaXMsIERBVEFfS0VZKSB8fCBuZXcgVGFiKHRoaXMpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgZGF0YSA9IERhdGEuZ2V0KHRoaXMsIERBVEFfS0VZKSB8fCBuZXcgVGFiKHRoaXMpXG4gIGRhdGEuc2hvdygpXG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuVGFiIHRvIGpRdWVyeSBvbmx5IGlmIGpRdWVyeSBpcyBwcmVzZW50XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFRhYilcblxuZXhwb3J0IGRlZmF1bHQgVGFiXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IHRvYXN0LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICByZWZsb3csXG4gIHR5cGVDaGVja0NvbmZpZ1xufSBmcm9tICcuL3V0aWwvaW5kZXgnXG5pbXBvcnQgRGF0YSBmcm9tICcuL2RvbS9kYXRhJ1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL2RvbS9ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4vZG9tL21hbmlwdWxhdG9yJ1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSA9ICd0b2FzdCdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnRvYXN0J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcblxuY29uc3QgRVZFTlRfQ0xJQ0tfRElTTUlTUyA9IGBjbGljay5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VPVkVSID0gYG1vdXNlb3ZlciR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFT1VUID0gYG1vdXNlb3V0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRk9DVVNJTiA9IGBmb2N1c2luJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRk9DVVNPVVQgPSBgZm9jdXNvdXQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9ISURFID0gJ2hpZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfU0hPV0lORyA9ICdzaG93aW5nJ1xuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYW5pbWF0aW9uOiAnYm9vbGVhbicsXG4gIGF1dG9oaWRlOiAnYm9vbGVhbicsXG4gIGRlbGF5OiAnbnVtYmVyJ1xufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbmltYXRpb246IHRydWUsXG4gIGF1dG9oaWRlOiB0cnVlLFxuICBkZWxheTogNTAwMFxufVxuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX0RJU01JU1MgPSAnW2RhdGEtYnMtZGlzbWlzcz1cInRvYXN0XCJdJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgVG9hc3QgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudClcblxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fdGltZW91dCA9IG51bGxcbiAgICB0aGlzLl9oYXNNb3VzZUludGVyYWN0aW9uID0gZmFsc2VcbiAgICB0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uID0gZmFsc2VcbiAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgc2hvdygpIHtcbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XKVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9jbGVhclRpbWVvdXQoKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpXG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPV04pXG5cbiAgICAgIHRoaXMuX21heWJlU2NoZWR1bGVIaWRlKClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9ISURFKVxuICAgIHJlZmxvdyh0aGlzLl9lbGVtZW50KVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1dJTkcpXG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLl9lbGVtZW50LCB0aGlzLl9jb25maWcuYW5pbWF0aW9uKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfSElERSlcbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2NvbmZpZy5hbmltYXRpb24pXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHRoaXMuX2NsZWFyVGltZW91dCgpXG5cbiAgICBpZiAodGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICB9XG5cbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5NYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KSxcbiAgICAgIC4uLih0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fSlcbiAgICB9XG5cbiAgICB0eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX21heWJlU2NoZWR1bGVIaWRlKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnLmF1dG9oaWRlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faGFzTW91c2VJbnRlcmFjdGlvbiB8fCB0aGlzLl9oYXNLZXlib2FyZEludGVyYWN0aW9uKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH0sIHRoaXMuX2NvbmZpZy5kZWxheSlcbiAgfVxuXG4gIF9vbkludGVyYWN0aW9uKGV2ZW50LCBpc0ludGVyYWN0aW5nKSB7XG4gICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICBjYXNlICdtb3VzZW92ZXInOlxuICAgICAgY2FzZSAnbW91c2VvdXQnOlxuICAgICAgICB0aGlzLl9oYXNNb3VzZUludGVyYWN0aW9uID0gaXNJbnRlcmFjdGluZ1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnZm9jdXNpbic6XG4gICAgICBjYXNlICdmb2N1c291dCc6XG4gICAgICAgIHRoaXMuX2hhc0tleWJvYXJkSW50ZXJhY3Rpb24gPSBpc0ludGVyYWN0aW5nXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIGlmIChpc0ludGVyYWN0aW5nKSB7XG4gICAgICB0aGlzLl9jbGVhclRpbWVvdXQoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgbmV4dEVsZW1lbnQgPSBldmVudC5yZWxhdGVkVGFyZ2V0XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQgPT09IG5leHRFbGVtZW50IHx8IHRoaXMuX2VsZW1lbnQuY29udGFpbnMobmV4dEVsZW1lbnQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9tYXliZVNjaGVkdWxlSGlkZSgpXG4gIH1cblxuICBfc2V0TGlzdGVuZXJzKCkge1xuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9DTElDS19ESVNNSVNTLCBTRUxFQ1RPUl9EQVRBX0RJU01JU1MsICgpID0+IHRoaXMuaGlkZSgpKVxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRU9WRVIsIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIHRydWUpKVxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRU9VVCwgZXZlbnQgPT4gdGhpcy5fb25JbnRlcmFjdGlvbihldmVudCwgZmFsc2UpKVxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9GT0NVU0lOLCBldmVudCA9PiB0aGlzLl9vbkludGVyYWN0aW9uKGV2ZW50LCB0cnVlKSlcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfRk9DVVNPVVQsIGV2ZW50ID0+IHRoaXMuX29uSW50ZXJhY3Rpb24oZXZlbnQsIGZhbHNlKSlcbiAgfVxuXG4gIF9jbGVhclRpbWVvdXQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpXG4gICAgdGhpcy5fdGltZW91dCA9IG51bGxcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9IERhdGEuZ2V0KHRoaXMsIERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZ1xuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBUb2FzdCh0aGlzLCBfY29uZmlnKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVtjb25maWddKHRoaXMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFkZCAuVG9hc3QgdG8galF1ZXJ5IG9ubHkgaWYgalF1ZXJ5IGlzIHByZXNlbnRcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oVG9hc3QpXG5cbmV4cG9ydCBkZWZhdWx0IFRvYXN0XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY1LjAuMSk6IGluZGV4LnVtZC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBBbGVydCBmcm9tICcuL3NyYy9hbGVydCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9zcmMvYnV0dG9uJ1xuaW1wb3J0IENhcm91c2VsIGZyb20gJy4vc3JjL2Nhcm91c2VsJ1xuaW1wb3J0IENvbGxhcHNlIGZyb20gJy4vc3JjL2NvbGxhcHNlJ1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vc3JjL2Ryb3Bkb3duJ1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vc3JjL21vZGFsJ1xuaW1wb3J0IE9mZmNhbnZhcyBmcm9tICcuL3NyYy9vZmZjYW52YXMnXG5pbXBvcnQgUG9wb3ZlciBmcm9tICcuL3NyYy9wb3BvdmVyJ1xuaW1wb3J0IFNjcm9sbFNweSBmcm9tICcuL3NyYy9zY3JvbGxzcHknXG5pbXBvcnQgVGFiIGZyb20gJy4vc3JjL3RhYidcbmltcG9ydCBUb2FzdCBmcm9tICcuL3NyYy90b2FzdCdcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vc3JjL3Rvb2x0aXAnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgQWxlcnQsXG4gIEJ1dHRvbixcbiAgQ2Fyb3VzZWwsXG4gIENvbGxhcHNlLFxuICBEcm9wZG93bixcbiAgTW9kYWwsXG4gIE9mZmNhbnZhcyxcbiAgUG9wb3ZlcixcbiAgU2Nyb2xsU3B5LFxuICBUYWIsXG4gIFRvYXN0LFxuICBUb29sdGlwXG59XG4iLCIvL3NlbmQgZW1haWwgY2hhbmdlIHJlcXVlc3RcclxuY29uc3QgcHJvZmlsZVNldHRpbmdzRW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3NldHRpbmdzLWVtYWlsXCIpO1xyXG5jb25zdCBsb2FkaW5nRW1haWxTcGlubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIi5jaGFuZ2VfX2VtYWlsLWxvYWRpbmctc3Bpbm5lclwiXHJcbik7XHJcbmNvbnN0IGZvcm1DaGFuZ2VFbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9fdXBkYXRlLWVtYWlsXCIpO1xyXG5jb25zdCBhbGVydENoYW5nZUVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hbGVydF9fY2hhbmdlLWVtYWlsXCIpO1xyXG5jb25zdCBhbGVydENoYW5nZUVtYWlsTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgXCIuY2hhbmdlX19lbWFpbC1hbGVydC1tZXNzYWdlXCJcclxuKTtcclxuZm9ybUNoYW5nZUVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbG9hZGluZ0VtYWlsU3Bpbm5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xyXG4gIGNvbnN0IHNlbmRDaGFuZ2VFbWFpbFJlcXVlc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2NoYW5nZS1lbWFpbFwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgY2FjaGU6IFwibm8tY2FjaGVcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbDogcHJvZmlsZVNldHRpbmdzRW1haWwudmFsdWUgfSksXHJcbiAgICB9KTtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDkpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfTtcclxuICBzZW5kQ2hhbmdlRW1haWxSZXF1ZXN0KClcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgaWYgKHJlcy5zdWNjZXNzID09PSAxKSB7XHJcbiAgICAgICAgYWxlcnRDaGFuZ2VFbWFpbFswXS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xyXG4gICAgICAgIGFsZXJ0Q2hhbmdlRW1haWxNZXNzYWdlWzBdLmlubmVySFRNTCA9IHJlcy5zdWNjZXNzX21lc3NhZ2U7XHJcbiAgICAgICAgbG9hZGluZ0VtYWlsU3Bpbm5lci5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgYWxlcnRDaGFuZ2VFbWFpbFswXS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyZXMuZXJyb3IgPT09IDEpIHtcclxuICAgICAgICBhbGVydENoYW5nZUVtYWlsWzFdLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcbiAgICAgICAgYWxlcnRDaGFuZ2VFbWFpbE1lc3NhZ2VbMV0uaW5uZXJIVE1MID0gcmVzLmVycm9yX21lc3NhZ2U7XHJcbiAgICAgICAgbG9hZGluZ0VtYWlsU3Bpbm5lci5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgYWxlcnRDaGFuZ2VFbWFpbFsxXS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbn0pO1xyXG4iLCJjb25zdCBmb3JtUHJvZmlsZUNoYW5nZVBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmZvcm1fX3Byb2ZpbGUtY2hhbmdlLXBhc3N3b3JkXCJcclxuICApLFxyXG4gIGNoYW5nZVBhc3N3b3JkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGFuZ2VfX3Bhc3N3b3JkLWJ0blwiKSxcclxuICB0b2dnbGVTaG93UGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3dfX3Bhc3N3b3JkXCIpLFxyXG4gIHBhc3N3b3JkSW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hhbmdlX19wYXNzd29yZC1maWVsZFwiKSxcclxuICBwYXNzd29yZENoZWNrZXJJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wYXNzd29yZF9fY2hlY2tlclwiKSxcclxuICBjaXJsY2VDaGVja0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJpLWNoZWNrLWNpcmNsZS1maWxsXCIpLFxyXG4gIGxvYWRpbmdTcGlubmVyQ2hhbmdlUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuY2hhbmdlX19wYXNzd29yZC1sb2FkaW5nLXNwaW5uZXJcIlxyXG4gICksXHJcbiAgYWxlcnRCb3hDaGFuZ2VQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWxlcnRfX2NoYW5nZS1wYXNzd29yZFwiKSxcclxuICBhbGVydE1lc3NhZ2VDaGFuZ2VQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcIi5jaGFuZ2VfX3Bhc3N3b3JkLWFsZXJ0LW1lc3NhZ2VcIlxyXG4gICk7XHJcblxyXG4vKiBQYXNzd29yZCBpbnB1dCBmaWVsZCBpbiBhcnJheSBcclxuMS4gaW5wdXRbMF0gPSBDdXJyZW50IFBhc3N3b3JkXHJcbjIuIGlucHV0WzFdID0gTmV3IFBhc3N3b3JkXHJcbjMuIGlucHV0WzJdID0gQ29uZmlybSBOZXcgUGFzc3dvcmRcclxuICovXHJcblxyXG4vL3RvZ2dsZSBzaG93IHBhc3N3b3JkIGZvciBhbGwgcGFzc3dvcmQgaW5wdXQgZmllbGRcclxudG9nZ2xlU2hvd1Bhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgcGFzc3dvcmRJbnB1dEZpZWxkLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IHR5cGUgPSBpdGVtLmdldEF0dHJpYnV0ZShcInR5cGVcIikgPT09IFwicGFzc3dvcmRcIiA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwiO1xyXG4gICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xyXG4gICAgaWYgKHRvZ2dsZVNob3dQYXNzd29yZC5jaGVja2VkKSB7XHJcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwidHlwZVwiLCB0eXBlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwidHlwZVwiLCB0eXBlKTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcblxyXG4vL3Bhc3N3b3JkIGNoZWNrZXIgcGFzd29yZCBsZW5ndGggc2hvdWxkIGJlIDggY2hhcmFjdGVycyBsb25nXHJcbnBhc3N3b3JkSW5wdXRGaWVsZFsxXS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgcGFzc3dvcmRDaGVja2VySW5mb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xyXG4gIGlmIChlLnRhcmdldC52YWx1ZS5sZW5ndGggPj0gOCkge1xyXG4gICAgcGFzc3dvcmRDaGVja2VySW5mb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1kYW5nZXJcIik7XHJcbiAgICBwYXNzd29yZENoZWNrZXJJbmZvWzBdLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXN1Y2Nlc3NcIik7XHJcbiAgICBjaXJsY2VDaGVja0ljb25bMF0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcGFzc3dvcmRDaGVja2VySW5mb1swXS5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1zdWNjZXNzXCIpO1xyXG4gICAgcGFzc3dvcmRDaGVja2VySW5mb1swXS5jbGFzc0xpc3QuYWRkKFwidGV4dC1kYW5nZXJcIik7XHJcbiAgICBjaXJsY2VDaGVja0ljb25bMF0uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy9jb25maXJtIHBhc3N3b3JkIHRvIGNoZWNrIGlmIHRoaXMgY29uZmlybSBwYXNzd29yZCBhcmUgZXF1YWxzIHRvIG5ldyBwYXNzd29yZFxyXG5wYXNzd29yZElucHV0RmllbGRbMl0uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHBhc3N3b3JkQ2hlY2tlckluZm9bMV0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuXHJcbiAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBwYXNzd29yZElucHV0RmllbGRbMV0udmFsdWUgJiYgZS50YXJnZXQudmFsdWUubGVuZ3RoID49IDgpIHtcclxuICAgIHBhc3N3b3JkQ2hlY2tlckluZm9bMV0uY2xhc3NMaXN0LnJlbW92ZShcInRleHQtZGFuZ2VyXCIpO1xyXG4gICAgcGFzc3dvcmRDaGVja2VySW5mb1sxXS5jbGFzc0xpc3QuYWRkKFwidGV4dC1zdWNjZXNzXCIpO1xyXG4gICAgcGFzc3dvcmRDaGVja2VySW5mb1sxXS5pbm5lckhUTUwgPSBgUGFzc3dvcmQgbWF0Y2hlZC4gPGkgY2xhc3M9XCJiaSBiaS1jaGVjay1jaXJjbGUtZmlsbCBmX3NpemUtMVwiPjwvaT5gO1xyXG4gICAgY2hhbmdlUGFzc3dvcmRCdG4ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIFxyXG4gICAgcGFzc3dvcmRDaGVja2VySW5mb1sxXS5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1zdWNjZXNzXCIpO1xyXG4gICAgcGFzc3dvcmRDaGVja2VySW5mb1sxXS5jbGFzc0xpc3QuYWRkKFwidGV4dC1kYW5nZXJcIik7XHJcbiAgICBwYXNzd29yZENoZWNrZXJJbmZvWzFdLmlubmVySFRNTCA9IGUudGFyZ2V0LnZhbHVlID49IDggPyBgUGFzc3dvcmQgbWF0Y2hlZGAgOiBgUGFzc3dvcmQgc2hvdWxkIGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycyBsb25nLmA7XHJcbiAgICBjaGFuZ2VQYXNzd29yZEJ0bi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vc3VibWl0IGNoYW5nZSBwYXNzd29yZCByZXF1ZXN0XHJcbmZvcm1Qcm9maWxlQ2hhbmdlUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBsb2FkaW5nU3Bpbm5lckNoYW5nZVBhc3N3b3JkLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcbiAgY2hhbmdlUGFzc3dvcmRCdG4uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gIGNvbnN0IHNlbmRDaGFuZ2VQYXNzd29yZFJlcXVlc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBjaGFuZ2VQYXNzd29yZFVSTCA9IFwiL2NoYW5nZS1wYXNzd29yZFwiO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKHBhc3N3b3JkSW5wdXRGaWVsZFsxXS52YWx1ZSA9PT0gcGFzc3dvcmRJbnB1dEZpZWxkWzJdLnZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjaGFuZ2VQYXNzd29yZFVSTCwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgICAgIGNhY2hlOiBcIm5vLWNhY2hlXCIsXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGN1cnJlbnRfcGFzc3dvcmQ6IHBhc3N3b3JkSW5wdXRGaWVsZFswXS52YWx1ZSxcclxuICAgICAgICAgICAgbmV3X3Bhc3N3b3JkOiBwYXNzd29yZElucHV0RmllbGRbMV0udmFsdWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1fbmV3X3Bhc3N3b3JkOiBwYXNzd29yZElucHV0RmllbGRbMl0udmFsdWUsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBzZW5kQ2hhbmdlUGFzc3dvcmRSZXF1ZXN0KClcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgbG9hZGluZ1NwaW5uZXJDaGFuZ2VQYXNzd29yZC5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgICBpZiAocmVzLmVycm9yKSB7XHJcbiAgICAgICAgYWxlcnRCb3hDaGFuZ2VQYXNzd29yZFsxXS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xyXG4gICAgICAgIGFsZXJ0Qm94Q2hhbmdlUGFzc3dvcmRbMV0uY2xhc3NMaXN0LmFkZChcImVycm9yX19zaGFrZVwiKTtcclxuICAgICAgICBhbGVydE1lc3NhZ2VDaGFuZ2VQYXNzd29yZFsxXS50ZXh0Q29udGVudCA9IHJlcy5lcnJvcl9tZXNzYWdlO1xyXG4gICAgICAgIHBhc3N3b3JkQ2hlY2tlckluZm8uZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpKTtcclxuICAgICAgICBwYXNzd29yZElucHV0RmllbGQuZm9yRWFjaCgoaXRlbSkgPT4gKGl0ZW0udmFsdWUgPSBcIlwiKSk7XHJcbiAgICAgICAgY2hhbmdlUGFzc3dvcmRCdG4uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgYWxlcnRCb3hDaGFuZ2VQYXNzd29yZFsxXS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgICAgIH0sIDYwMDApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgIGFsZXJ0Qm94Q2hhbmdlUGFzc3dvcmRbMF0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICAgICAgICBhbGVydE1lc3NhZ2VDaGFuZ2VQYXNzd29yZFswXS50ZXh0Q29udGVudCA9IHJlcy5zdWNjZXNzX21lc3NhZ2U7XHJcbiAgICAgICAgcGFzc3dvcmRDaGVja2VySW5mby5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIikpO1xyXG4gICAgICAgIHBhc3N3b3JkSW5wdXRGaWVsZC5mb3JFYWNoKChpdGVtKSA9PiAoaXRlbS52YWx1ZSA9IFwiXCIpKTtcclxuICAgICAgICBjaGFuZ2VQYXNzd29yZEJ0bi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBhbGVydEJveENoYW5nZVBhc3N3b3JkWzBdLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XHJcbiAgICAgICAgfSwgNjAwMCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB9KTtcclxufSk7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbmltcG9ydCByZW5kZXJDb21tZW50cyBmcm9tIFwiLi9mZXRjaC1jb21tZW50XCI7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgYnRuQ29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuX19jb21tZW50XCIpO1xyXG4gIGNvbnN0IGNvbW1lbnRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX19jb21tZW50XCIpO1xyXG4gIGNvbnN0IGxvYWRpbmdTcGlubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkaW5nLXNwaW5uZXJcIik7XHJcbiAgY29uc3Qgc2Vzc2lvblRyaWdnZXJGb2N1c1N0b3JhZ2UgPSBzZXNzaW9uU3RvcmFnZTtcclxuICBjb25zdCBORVdfQ09NTUVOVCA9IFwibmV3X2NvbW1lbnRcIjtcclxuICBjb25zdCBjb21tZW50X2JvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbW1lbnRfX2JvZHlcIik7XHJcblxyXG4gIC8vY29tbWVudCBlbmFibGUgYnV0dG9uXHJcblxyXG4gIGNvbW1lbnRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxvYWRpbmdTcGlubmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcbiAgICByZW5kZXJDb21tZW50cztcclxuXHJcbiAgICBjb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9wb3N0XCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGNvbW1lbnRfYm9keTogdGlueW1jZS5nZXQoXCJjb21tZW50RmllbGRcIikuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgcG9zdF9pZDogYnRuQ29tbWVudC5kYXRhc2V0LnBvc3RJZCxcclxuICAgICAgICAgIHN1YmplY3RfaWQ6IGJ0bkNvbW1lbnQuZGF0YXNldC5zdWJqZWN0SWQsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHBvc3RDb21tZW50KClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29tbWVudCBTdWNjZXNzXCIsIHJlcyk7XHJcbiAgICAgICAgdGlueW1jZS5nZXQoXCJjb21tZW50RmllbGRcIikuc2V0Q29udGVudChcIlwiLnRyaW0oKSk7XHJcbiAgICAgICAgc2Vzc2lvblRyaWdnZXJGb2N1c1N0b3JhZ2Uuc2V0SXRlbShORVdfQ09NTUVOVCwgcmVzLm5ld19jb21tZW50KTtcclxuXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMudXJsO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICB9KTtcclxuXHJcbiAgLy9jb21tZW50IGF1dG9mb2N1c1xyXG4gIGNvbnN0IGZvY3VzVG9OZXdDb21tZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29tbWVudFRvRm9jdXMgPSBzZXNzaW9uVHJpZ2dlckZvY3VzU3RvcmFnZS5nZXRJdGVtKE5FV19DT01NRU5UKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbW1lbnRfYm9keS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBBcnJheS5mcm9tKGNvbW1lbnRfYm9keSkuaW5kZXhPZihjb21tZW50X2JvZHlbaV0pO1xyXG4gICAgICBjb25zdCBjb21tZW50Qm9keUZvY3VzID0gY29tbWVudF9ib2R5W2ldLmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG4gICAgICBpZiAoY29tbWVudEJvZHlGb2N1cyA9PT0gY29tbWVudFRvRm9jdXMpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGAjJHtjb21tZW50VG9Gb2N1c31gOyBcclxuICAgICAgICBjb21tZW50X2JvZHlbaV0uY2xhc3NMaXN0LmFkZChcIm5ld19fY29tbWVudFwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGNvbW1lbnRfYm9keVtpXS5jbGFzc0xpc3QuYWRkKFwiZmFkZV9fbmV3LWNvbW1lbnRcIik7XHJcbiAgICAgICAgfSwgNDAwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNlc3Npb25UcmlnZ2VyRm9jdXNTdG9yYWdlLmNsZWFyKCk7XHJcbiAgfTtcclxuICBmb2N1c1RvTmV3Q29tbWVudCgpO1xyXG59KTtcclxuIiwiY29uc3QgY2hlY2tTbmlwcGV0Q29kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZVtjbGFzc149XCJsYW5ndWFnZVwiXScpO1xyXG5jaGVja1NuaXBwZXRDb2RlLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgY29uc3QgY29weUNvZGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNoZWNrU25pcHBldENvZGVbaW5kZXhdLnN0eWxlLnNldFByb3BlcnR5KFwicG9zaXRpb25cIiwgXCJyZWxhdGl2ZSAhaW1wb3J0YW50XCIpO1xyXG4gIGNvcHlDb2RlQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29weV9fc25pcHBldC1jb2RlXCIpO1xyXG4gIGNvcHlDb2RlQnRuLnRleHRDb250ZW50ID0gXCJDb3B5IFNuaXBwZXRcIjtcclxuICBjb3B5Q29kZUJ0bi5jbGFzc0xpc3QuYWRkKFwiY29weV9fY29kZS1zbmlwcGV0XCIpO1xyXG4gIGl0ZW0uYXBwZW5kQ2hpbGQoY29weUNvZGVCdG4pO1xyXG59KTtcclxuXHJcbmNvbnN0IGNvcHlDb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb3B5X19zbmlwcGV0LWNvZGVcIik7XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IGNvcHlDb2RlLmxlbmd0aDsgaSsrKSB7XHJcbiAgY29weUNvZGVbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaW5pdGlhbGl6ZUNvcHlDb2RlQnRuKGUsIGkpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsaXplQ29weUNvZGVCdG4gPSAoZSwgaSkgPT4ge1xyXG4gIEFycmF5LmZyb20oY29weUNvZGUpLmluZGV4T2YoZS50YXJnZXQpO1xyXG4gIGNvcHlDb2RlW2ldLnN0eWxlLnNldFByb3BlcnR5KFwiYmFja2dyb3VuZFwiLCBcIiMxMTkwMDBcIik7XHJcbiAgY29weUNvZGVbaV0uc3R5bGUuc2V0UHJvcGVydHkoXCJjb2xvclwiLCBcIiNmZmZcIik7XHJcbiAgY29weUNvZGVbaV0uaW5uZXJIVE1MID0gXCJDb3B5ICZjaGVjaztcIjtcclxuICBsZXQgc25pcHBldENvbnRlbnQgPSBjaGVja1NuaXBwZXRDb2RlW2ldLnRleHRDb250ZW50LnJlcGxhY2UoXCJDb3B5IOKck1wiLCBcIlwiKTtcclxuXHJcbiAgY29uc3QgZHVtbXlUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICBkdW1teVRleHRBcmVhLnZhbHVlID0gc25pcHBldENvbnRlbnQ7XHJcbiAgZHVtbXlUZXh0QXJlYS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICBkdW1teVRleHRBcmVhLnN0eWxlLmxlZnQgPSBcIi0xMDAlXCI7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkdW1teVRleHRBcmVhKTtcclxuICBkdW1teVRleHRBcmVhLnNlbGVjdCgpO1xyXG4gIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGR1bW15VGV4dEFyZWEpO1xyXG59O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2VsZXNzLWVzY2FwZSAqL1xyXG5cclxuY29uc3QgYnRuU3VibWl0UG9zdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuX19zdWJtaXQtcG9zdFwiKTtcclxuY29uc3QgZm9ybUNyZWF0ZVBvc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX2NyZWF0ZS1wb3N0XCIpO1xyXG5cclxuZm9ybUNyZWF0ZVBvc3QuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gIGZldGNoKFwiL3NlbmQtbm90aWZpY2F0aW9uXCIsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkYXRhLnVybDtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG59KTtcclxuIiwiY29uc3QgcmVuZGVyQ29tbWVudHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgZmV0Y2hBbGxDb21tZW50Rm9yUG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvY29tbWVudHNcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICBjYWNoZTogXCJuby1jYWNoZVwiLFxyXG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB7XHJcbiAgICAgICAgICBlcnJvcl9tZXNzYWdlOiBcIlVuYWJsZWQgdG8gZmV0Y2ggY29tbWVudCwgUGxlYXNlIHJlZnJlc2ggdGhlIHBhZ2VcIixcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZldGNoQWxsQ29tbWVudEZvclBvc3QoKVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQ29tbWVudHM7XHJcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgZm9ybUZvcmdvdFBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX19mb3Jnb3QtcGFzc3dvcmRcIiksXHJcbiAgICByZWNvdmVyRW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlY292ZXJfX2VtYWlsXCIpLFxyXG4gICAgbG9hZGluZ1NwaW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5sb2FkaW5nX19zcGlubmVyLWZvcmdvdC1wYXNzd29yZFwiXHJcbiAgICApLFxyXG4gICAgYnRuU3VibWl0UGFzc3dvcmRSZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuX19wYXNzd29yZC1yZXNldFwiKSxcclxuICAgIHBhc3N3b3JkUmVzZXRNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXNzd29yZF9fcmVzZXQtbWVzc2FnZVwiKSxcclxuICAgIHBhc3N3b3JkUmVzZXRMb2FkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkaW5nLWNpcmNsZS1vdGhlclwiKSxcclxuICAgIHBhc3N3b3JkUmVzZXRTdWNjZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbWFpbF9fc3VjY2Vzcy1pY29uXCIpLFxyXG4gICAgcGFzc3dvcmRSZXNldEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbWFpbF9fZXJyb3ItaWNvblwiKSxcclxuICAgIHBhc3N3b3JkUmVzZXREaWFsb2dCdG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNsb3NlXCIpO1xyXG5cclxuICBmb3JtRm9yZ290UGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbG9hZGluZ1NwaW5uZXIuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICAgIGxldCBidG5Db25maWcgPSBbXHJcbiAgICAgIFtcInR5cGVcIiwgXCJidXR0b25cIl0sXHJcbiAgICAgIFtcImRhdGEtYnMtdG9nZ2xlXCIsIFwibW9kYWxcIl0sXHJcbiAgICAgIFtcImRhdGEtYnMtdGFyZ2V0XCIsIFwiZGlhbG9nRm9yZ290UGFzc3dvcmRBbGVydFwiXSxcclxuICAgIF07XHJcbiAgICBidG5TdWJtaXRQYXNzd29yZFJlc2V0LnNldEF0dHJpYnV0ZShidG5Db25maWdbMF1bMF0sIFwiYnV0dG9uXCIpO1xyXG4gICAgYnRuU3VibWl0UGFzc3dvcmRSZXNldC5zZXRBdHRyaWJ1dGUoYnRuQ29uZmlnWzFdWzBdLCBcIm1vZGFsXCIpO1xyXG4gICAgYnRuU3VibWl0UGFzc3dvcmRSZXNldC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgIGJ0bkNvbmZpZ1syXVswXSxcclxuICAgICAgXCIjZGlhbG9nRm9yZ290UGFzc3dvcmRBbGVydFwiXHJcbiAgICApO1xyXG4gICAgYnRuU3VibWl0UGFzc3dvcmRSZXNldC5jbGljaygpO1xyXG4gICAgY29uc3Qgc2VuZFJlY292ZXJBY2NvdW50UmVxdWVzdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2ZvcmdvdC1wYXNzd29yZFwiLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgICAgIGNhY2hlOiBcIm5vLWNhY2hlXCIsXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHJlY292ZXJ5X2VtYWlsOiByZWNvdmVyRW1haWwudmFsdWUgfSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gY29uc3QgdG90YWwgPSByZXNwb25zZS5oZWFkZXJzLmdldChcIlwiKVxyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHNlbmRSZWNvdmVyQWNjb3VudFJlcXVlc3QoKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgbG9hZGluZ1NwaW5uZXIuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcclxuICAgICAgICBmb3IgKGxldCBpIGluIGJ0bkNvbmZpZykge1xyXG4gICAgICAgICAgYnRuU3VibWl0UGFzc3dvcmRSZXNldC5yZW1vdmVBdHRyaWJ1dGUoYnRuQ29uZmlnW2ldWzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlcy5lcnJvciA9PT0gMSkge1xyXG4gICAgICAgICAgcGFzc3dvcmRSZXNldExvYWRpbmcuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcclxuICAgICAgICAgIHBhc3N3b3JkUmVzZXRFcnJvci5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xyXG4gICAgICAgICAgcGFzc3dvcmRSZXNldE1lc3NhZ2UuY2xhc3NMaXN0LnJlcGxhY2UoXHJcbiAgICAgICAgICAgIFwidGV4dC1ibGFjay01MFwiLFxyXG4gICAgICAgICAgICBcInRleHQtZGFuZ2VyXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBwYXNzd29yZFJlc2V0TWVzc2FnZS50ZXh0Q29udGVudCA9IHJlcy5lcnJvcl9tZXNzYWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVzLnN1Y2Nlc3MgPT09IDEpIHtcclxuICAgICAgICAgIHBhc3N3b3JkUmVzZXRMb2FkaW5nLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XHJcbiAgICAgICAgICBwYXNzd29yZFJlc2V0U3VjY2Vzcy5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xyXG4gICAgICAgICAgcGFzc3dvcmRSZXNldE1lc3NhZ2UuY2xhc3NMaXN0LnJlcGxhY2UoXHJcbiAgICAgICAgICAgIFwidGV4dC1ibGFjay01MFwiLFxyXG4gICAgICAgICAgICBcInRleHQtc3VjY2Vzc1wiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgcGFzc3dvcmRSZXNldE1lc3NhZ2UudGV4dENvbnRlbnQgPSByZXMuc3VjY2Vzc19tZXNzYWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXNzd29yZFJlc2V0RGlhbG9nQnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgIHBhc3N3b3JkUmVzZXRMb2FkaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcbiAgICAgICAgICBwYXNzd29yZFJlc2V0U3VjY2Vzcy5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgICAgICAgcGFzc3dvcmRSZXNldEVycm9yLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XHJcbiAgICAgICAgICBwYXNzd29yZFJlc2V0TWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1kYW5nZXJcIik7XHJcbiAgICAgICAgICBwYXNzd29yZFJlc2V0TWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1zdWNjZXNzXCIpO1xyXG4gICAgICAgICAgcGFzc3dvcmRSZXNldE1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInRleHQtYmxhY2stNTBcIik7XHJcbiAgICAgICAgICBwYXNzd29yZFJlc2V0TWVzc2FnZS50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgICAgIFwiU2VuZGluZyBwYXNzd29yZCByZXNldCByZXF1ZXN0LCBQbGVhc2UgV2FpdFwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICB9KTtcclxufSk7XHJcbiIsImltcG9ydCBsb2dvSW1hZ2UgZnJvbSBcIi4uL2Fzc2V0cy9sb2dvL2luc2lkZXItaHViLnBuZ1wiO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sb2dvXCIpO1xyXG4gIGxvZ28uZm9yRWFjaCgoaXRlbSkgPT4gKGl0ZW0uc3JjID0gbG9nb0ltYWdlKSk7XHJcbn0pO1xyXG4iLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IGxvYWRpbmdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmctY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IGJ0blNpZ25JbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuX19zaWduLWluXCIpO1xyXG4gIGNvbnN0IHJlbWVtYmVyTWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlbWVtYmVyLW1lXCIpO1xyXG4gIGNvbnN0IGZvcm1Mb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9fY29udGFpbmVyLWxvZ2luXCIpO1xyXG5cclxuICAvL2lucHV0IGZvciBjcmVkZW50aWFscyBzYXZlIHRvIHNlc3Npb24gc3RvcmFnZVxyXG4gIGNvbnN0IGlucHV0RW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXJfX2VtYWlsXCIpO1xyXG4gIGNvbnN0IGlucHV0UGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXJfX3Bhc3N3b3JkXCIpO1xyXG4gIGxldCBsb2dpblN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2U7IC8vIFNldCBMb2NhbFN0b3JhZ2UgZm9yIGVtYWlsIG9ubHkgYW5kIG5vdCBpbmxjdWRpbmcgcGFzc3dvcmQgU3RvcmFnZVxyXG5cclxuICBsZXQgdXNlcl9lbWFpbCA9IGxvZ2luU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9lbWFpbFwiKTtcclxuICBpbnB1dEVtYWlsLnZhbHVlID0gdXNlcl9lbWFpbDtcclxuXHJcbiAgbGV0IHJlbWVtYmVyTWVTdGF0ZSA9IGxvZ2luU3RvcmFnZS5nZXRJdGVtKFwicmVtZW1iZXJfbWVfc3RhdGVcIik7XHJcbiAgaWYgKHJlbWVtYmVyTWVTdGF0ZSA9PT0gXCJ0cnVlXCIpIHtcclxuICAgIHJlbWVtYmVyTWUuY2hlY2tlZCA9IHRydWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlbWVtYmVyTWUuY2hlY2tlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmVtZW1iZXJNZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAocmVtZW1iZXJNZS5jaGVja2VkKSB7XHJcbiAgICAgIGxldCBzZXRSZW1lbWJlck1lID0gdHJ1ZTtcclxuICAgICAgbG9naW5TdG9yYWdlLnNldEl0ZW0oXCJyZW1lbWJlcl9tZV9zdGF0ZVwiLCBzZXRSZW1lbWJlck1lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBzZXRSZW1lbWJlck1lID0gZmFsc2U7XHJcbiAgICAgIGxvZ2luU3RvcmFnZS5zZXRJdGVtKFwicmVtZW1iZXJfbWVfc3RhdGVcIiwgc2V0UmVtZW1iZXJNZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGZvcm1Mb2dpbi5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsb2FkaW5nQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcbiAgICBjb25zdCBzZW5kTG9naW5SZXF1ZXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9zaWduLWluXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICAgICAgY2FjaGU6IFwibm8tY2FjaGVcIixcclxuICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgcmVtZW1iZXJfbWU6IHJlbWVtYmVyTWUuY2hlY2tlZCA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgIGVtYWlsOiBpbnB1dEVtYWlsLnZhbHVlLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IGlucHV0UGFzc3dvcmQudmFsdWUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gNDAwICYmIHJlc3BvbnNlLnN0YXR1cyA8PSA0OTkpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgc2VuZExvZ2luUmVxdWVzdCgpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlcy5hdXRoZW50aWNhdGVfdXJsO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICB9KTtcclxuXHJcbiAgYnRuU2lnbkluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjb25zdCBsb2dpbkNyZWRlbnRpYWxzID0ge1xyXG4gICAgICB1c2VyX2VtYWlsOiBpbnB1dEVtYWlsLnZhbHVlLFxyXG4gICAgfTtcclxuXHJcbiAgICBsb2dpblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJfZW1haWxcIiwgbG9naW5DcmVkZW50aWFscy51c2VyX2VtYWlsKTtcclxuICB9KTtcclxufSk7XHJcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgbmF2VG9nZ2xlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyLXRvZ2dsZXJcIik7XHJcbiAgY29uc3QgbmF2YmFyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi4tLW5hdi1saXN0LWNvbnRhaW5lclwiKTtcclxuICBsZXQgbmF2SXNPcGVuID0gZmFsc2U7XHJcblxyXG4gIGlmIChuYXZUb2dnbGVyKSB7XHJcbiAgICBuYXZUb2dnbGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGlmICghbmF2SXNPcGVuKSB7XHJcbiAgICAgICAgbmF2VG9nZ2xlci5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm9wZW4tbmF2YmFyXCIpO1xyXG4gICAgICAgIG5hdklzT3BlbiA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2VG9nZ2xlci5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tbmF2YmFyXCIpO1xyXG4gICAgICAgIG5hdklzT3BlbiA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCIvKiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG5cclxuICBjb25zdCBjaGVja05ld1Bvc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL25ldy1wb3N0XCIsIHtcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICBjYWNoZTogXCJuby1jYWNoZVwiLFxyXG4gICAgICBrZWVwYWxpdmU6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbGV0IHBvc3RMZW5ndGhDaGVja2VyID0gMDsgLy9mb3IgcG9zdCBsZW5ndGggY2hlY2tlclxyXG4gIGxldCBjdXJyZW50UG9zdExlbmd0aCA9IDA7IC8vZmV0Y2ggb25lIGFuZCBnZXQgY3VycmVudCBwb3N0IHZhbHVlXHJcblxyXG4gIC8vR2V0IHRoZSBjdXJyZW50IHBvc3QgbGVuZ3RoXHJcbiAgY2hlY2tOZXdQb3N0KClcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgY3VycmVudFBvc3RMZW5ndGggPSByZXM7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuaW5mbyhlcnIpKTtcclxuXHJcbiAgLy9DaGVjayBmb3IgbmV3IHBvc3RcclxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBjaGVja05ld1Bvc3QoKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgcG9zdExlbmd0aENoZWNrZXIgPSByZXM7XHJcbiAgICAgICAgaWYgKHBvc3RMZW5ndGhDaGVja2VyID4gY3VycmVudFBvc3RMZW5ndGgpIHtcclxuICAgICAgICAgIHdpbmRvdy5hbGVydChcIk5FVyBQT1NUIVwiKTtcclxuICAgICAgICAgIGN1cnJlbnRQb3N0TGVuZ3RoKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5pbmZvKGVycikpO1xyXG4gIH0sIDEwMDAwKTtcclxuICBjb25zb2xlLmxvZyhwb3N0TGVuZ3RoQ2hlY2tlcik7XHJcbiAgY29uc29sZS5sb2coY3VycmVudFBvc3RMZW5ndGgpO1xyXG59KTtcclxuICovXHJcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgdG9nZ2xlT3B0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5waW5fX3Bvc3RcIik7XHJcbiAgY29uc3Qgb3B0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vcHRpb24tY29udGFpbmVyXCIpO1xyXG5cclxuICAvL2ZvciBkZWxldGUgZGlhbG9nXHJcbiAgY29uc3QgZGVsZXRlT3B0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGVfX29wdGlvbi1idG5cIik7XHJcbiAgY29uc3QgZGVsZXRlRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jdXN0b21fX2RlbGV0ZS1kaWFsb2dcIik7XHJcbiAgY29uc3QgZGVsZXRlRGlhbG9nQ2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLmN1c3RvbV9fZGlhbG9nLWJ0bi1jYW5jZWxcIlxyXG4gICk7XHJcbiAgY29uc3QgZGVsZXRlRGlhbG9nQ29uZmlybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcIi5jdXN0b21fX2RpYWxvZy1idG4tY29uZmlybVwiXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgcGluUG9zdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGluX19vcHRpb24tYnRuXCIpO1xyXG4gIGNvbnN0IHVuUGluUG9zdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudW5waW5fX29wdGlvbi1idG5cIik7XHJcblxyXG4gIC8vIE9wdGlvbiBDYXJkIG9wZW5cclxuICBsZXQgb3B0aW9uSXNPcGVuID0gZmFsc2U7IC8vIGZvciB0b2dnbGUgb3B0aW9uc1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9nZ2xlT3B0aW9uQnRuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB0b2dnbGVPcHRpb25CdG5baV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGlmICghb3B0aW9uSXNPcGVuKSB7XHJcbiAgICAgICAgb3B0aW9uQ29udGFpbmVyW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcbiAgICAgICAgb3B0aW9uSXNPcGVuID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvcHRpb25Db250YWluZXJbaV0uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcclxuICAgICAgICBvcHRpb25Jc09wZW4gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICB0b2dnbGVPcHRpb25zKGUsIHRvZ2dsZU9wdGlvbkJ0bltpXS5kYXRhc2V0LnBvc3RJZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRvZ2dsZU9wdGlvbnMgPSAoZSkgPT4ge1xyXG4gICAgQXJyYXkuZnJvbSh0b2dnbGVPcHRpb25CdG4pLmluZGV4T2YoZS50YXJnZXQpICsgMTtcclxuICB9O1xyXG5cclxuICAvL09wZW4gREVMRVRFIGRpYWxvZyAtLSBDbG9zZSBvciBDb25maXJtIERlbGV0ZVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsZXRlT3B0aW9uQnRuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBkZWxldGVPcHRpb25CdG5baV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGRlbGV0ZURpYWxvZ1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xyXG4gICAgICBkZWxldGVQb3N0T3BlbkRpYWxvZyhlKTtcclxuICAgIH0pO1xyXG4gICAgZGVsZXRlRGlhbG9nQ2FuY2VsW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBkZWxldGVEaWFsb2dbaV0uY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcclxuICAgICAgY2xvc2VEaWFsb2coZSk7XHJcbiAgICB9KTtcclxuICAgIGRlbGV0ZURpYWxvZ0NvbmZpcm1baV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGNvbmZpcm1EZWxldGVQb3N0KGUsIGRlbGV0ZURpYWxvZ0NvbmZpcm1baV0uZGF0YXNldC5wb3N0SWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBPcGVuIGRpYWxvZyBmb3IgZGVsZXRlIGNvbmZpcm1hdGlvblxyXG4gIGNvbnN0IGRlbGV0ZVBvc3RPcGVuRGlhbG9nID0gKGUpID0+IHtcclxuICAgIEFycmF5LmZyb20oZGVsZXRlT3B0aW9uQnRuKS5pbmRleE9mKGUudGFyZ2V0KSArIDE7XHJcbiAgfTtcclxuXHJcbiAgLy9DYW5jZWwvQ2xvc2UgZGlhbG9nIGRlbGV0ZVxyXG4gIGNvbnN0IGNsb3NlRGlhbG9nID0gKGUpID0+IHtcclxuICAgIEFycmF5LmZyb20oZGVsZXRlRGlhbG9nQ2FuY2VsKS5pbmRleE9mKGUudGFyZ2V0KSArIDE7XHJcbiAgfTtcclxuXHJcbiAgLy9EZWxldGUgcG9zdC9hbnN3ZXJcclxuICBjb25zdCBjb25maXJtRGVsZXRlUG9zdCA9IChlLCBkYXRhUG9zdElkKSA9PiB7XHJcbiAgICBBcnJheS5mcm9tKGRlbGV0ZURpYWxvZ0NvbmZpcm0pLmluZGV4T2YoZS50YXJnZXQpICsgMTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVPbmVQb3N0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IFVSTF9ERUxFVEVfUE9TVCA9IGAvcG9zdC1vcHRpb25zP3Bvc3RfaWQ9JHtkYXRhUG9zdElkfWA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkxfREVMRVRFX1BPU1QsIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICAgIGNhY2hlOiBcIm5vLWNhY2hlXCIsXHJcbiAgICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgIGVycm9yOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nIG9uIGRlbGV0aW5nIHRoZSBjb250ZW50LlwiLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vREVMRVRFIFJFUVVFU1QgUFJPTUlTRVxyXG4gICAgZGVsZXRlT25lUG9zdCgpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlcy51cmw7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gIH07XHJcblxyXG4gIC8vcGluIG9wdGlvbnMgcG9zdCBwdXNoXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwaW5Qb3N0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBwaW5Qb3N0W2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGluaXRpYWxpemVQaW5Qb3N0KGUsIHBpblBvc3RbaV0uZGF0YXNldC5wb3N0SWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHVuUGluUG9zdC5sZW5ndGg7IGkrKykge1xyXG4gICAgdW5QaW5Qb3N0W2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGluaXRpYWxpemVVblBpblBvc3QoZSwgdW5QaW5Qb3N0W2ldLmRhdGFzZXQucG9zdElkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy9QaW4gUG9zdFxyXG4gIGNvbnN0IGluaXRpYWxpemVQaW5Qb3N0ID0gKGUsIGRhdGFQb3N0SWQpID0+IHtcclxuICAgIEFycmF5LmZyb20ocGluUG9zdCkuaW5kZXhPZihlLnRhcmdldCkgKyAxO1xyXG5cclxuICAgIGNvbnN0IHNldElzUGluUG9zdCA9IHRydWU7XHJcbiAgICBwaW5PcHRpb25Db25maWcoZSwgZGF0YVBvc3RJZCwgc2V0SXNQaW5Qb3N0KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMudXJsO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy9VbnBpbiBwb3N0XHJcbiAgY29uc3QgaW5pdGlhbGl6ZVVuUGluUG9zdCA9IChlLCBkYXRhUG9zdElkKSA9PiB7XHJcbiAgICBBcnJheS5mcm9tKHVuUGluUG9zdCkuaW5kZXhPZihlLnRhcmdldCk7XHJcblxyXG4gICAgY29uc3Qgc2V0SXNQaW5Qb3N0ID0gZmFsc2U7XHJcbiAgICBwaW5PcHRpb25Db25maWcoZSwgZGF0YVBvc3RJZCwgc2V0SXNQaW5Qb3N0KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMudXJsO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGluT3B0aW9uQ29uZmlnID0gYXN5bmMgKGUsIGRhdGFQb3N0SWQsIHNldFBpblBvc3QpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IFVSTF9QSU5fUE9TVCA9IGAvcG9zdC1vcHRpb25zL3VwZGF0ZT9wb3N0X2lkPSR7ZGF0YVBvc3RJZH1gO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTF9QSU5fUE9TVCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhY2hlOiBcIm5vLWNhY2hlXCIsXHJcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwaW5fcG9zdDogc2V0UGluUG9zdCB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHtcclxuICAgICAgICAgIG1lc3NhZ2U6IFwiU29tZXRoaW5nIHdlbnQgd3Jvbmcgb24gcGlubmluZyB0aGUgcG9zdFwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxufSk7XHJcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5fX2RlbGV0ZS1hbnN3ZXJcIik7XHJcbiAgY29uc3QgZGF0YVBvc3RJZF9kZWxldGUgPSBkZWxldGVCdXR0b24uZGF0YXNldC5wb3N0SWQ7XHJcbiAgY29uc3QgbG9hZGluZ1NwaW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxvYWRpbmctc3Bpbm5lclwiKTtcclxuXHJcbiAgLy8gVXBkYXRlIGZvcm1cclxuICBjb25zdCB1cGRhdGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGRhdGVfX2Zvcm1cIik7XHJcbiAgY29uc3QgdXBkYXRlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwZGF0ZV9fdGl0bGVcIik7XHJcbiAgY29uc3QgdXBkYXRlVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGRhdGVfX3RhZ1wiKTtcclxuICBjb25zdCB1cGRhdGVCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cGRhdGVfX2JvZHlcIik7XHJcbiAgY29uc3QgdXBkYXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5fX3VwZGF0ZS1hbnN3ZXJcIik7XHJcbiAgY29uc3QgZGF0YVBvc3RJZF91cGRhdGUgPSB1cGRhdGVCdG4uZGF0YXNldC5wb3N0SWQ7XHJcblxyXG4gIC8vY2xpY2sgZXZlbnQgdG8gdHJpZ2dlciBkZWxldGUgcmVxdWVzdFxyXG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIC8vc2VuZCBEZWxldGUgSHR0cCBSZXF1ZXN0XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsb2FkaW5nU3Bpbm5lci5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIikpO1xyXG4gICAgY29uc3QgZGVsZXRlT25lUG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgYC9wb3N0LW9wdGlvbnM/cG9zdF9pZD0ke2RhdGFQb3N0SWRfZGVsZXRlfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgY2FjaGU6IFwibm8tY2FjaGVcIixcclxuICAgICAgICAgICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgIGVycm9yOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nIG9uIGRlbGV0aW5nIHRoZSBjb250ZW50LlwiLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vREVMRVRFIFJFUVVFU1QgUFJPTUlTRVxyXG4gICAgZGVsZXRlT25lUG9zdCgpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlcy51cmw7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gIH0pO1xyXG5cclxuICAvL2NsaWNrIGV2ZW50IHRvIHRyaWdnZXIgcHV0IHJlcXVlc3RcclxuICB1cGRhdGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxvYWRpbmdTcGlubmVyLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKSk7XHJcblxyXG4gICAgY29uc3QgcG9zdFVwZGF0ZWRDb250ZW50ID0ge1xyXG4gICAgICBwb3N0X3RpdGxlOiB1cGRhdGVUaXRsZS52YWx1ZSxcclxuICAgICAgcG9zdF90YWc6IHVwZGF0ZVRhZy52YWx1ZSxcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXHJcbiAgICAgIHBvc3RfYm9keTogdGlueW1jZS5nZXQoXCJzaGFyZUFuc3dlckZvcm1cIikuZ2V0Q29udGVudCgpLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHVwZGF0ZU9uZVBvc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIGAvcG9zdC1vcHRpb25zP3Bvc3RfaWQ9JHtkYXRhUG9zdElkX3VwZGF0ZX1gLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FjaGU6IFwibm8tY2FjaGVcIixcclxuICAgICAgICAgICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3RVcGRhdGVkQ29udGVudCksXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBtZXNzYWdlID0ge1xyXG4gICAgICAgICAgICBtZXNzYWdlOlxyXG4gICAgICAgICAgICAgIFwiU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hlbiBhdHRlbXB0ZWQgdG8gdXBkYXRlIHRoZSBhbnN3ZXIuXCIsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy9VUERBVEUgUkVRVUVTVCBQUk9NSVNFXHJcbiAgICB1cGRhdGVPbmVQb3N0KClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLnVybDtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3dfX3Bhc3N3b3JkXCIpKSB7XHJcbiAgICByZXF1aXJlKFwiLi9jaGFuZ2UtcGFzc3dvcmRcIik7XHJcbiAgfVxyXG4gIHJlcXVpcmUoXCIuL2NoYW5nZS1lbWFpbFwiKTtcclxuICBjb25zdCBwcm9maWxlSW5mb3JtYXRpb25CdG5Ecm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcIi5kcm9wZG93bl9fcHJvZmlsZS1pbmZvLW9wdGlvbi10b2dnbGVyXCJcclxuICApO1xyXG4gIGNvbnN0IGNoYW5nZVBhc3N3b3JkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmNoYW5nZV9fcGFzc3dvcmQtb3B0aW9uXCJcclxuICApO1xyXG4gIGNvbnN0IGNoYW5nZUVtYWlsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGFuZ2VfX2VtYWlsLW9wdGlvblwiKTtcclxuICBjb25zdCBidG5VcGRhdGVQcm9maWxlU2V0dGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuYnRuX191cGRhdGUtcHJvZmlsZS1pbmZvXCJcclxuICApOyAvL2J0biB0byB1cGRhdGUgaW5mb3JtYXRpb24gbm90IHBhc3N3b3JkXHJcbiAgbGV0IGltYWdlRmlsZTtcclxuICBsZXQgaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gIC8vZm9yIEVtYWlsIG9wdGlvbiBkcm9wZG93blxyXG4gIHByb2ZpbGVJbmZvcm1hdGlvbkJ0bkRyb3BEb3duWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBpZiAoIWlzT3Blbikge1xyXG4gICAgICBjaGFuZ2VFbWFpbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcclxuICAgICAgYnRuVXBkYXRlUHJvZmlsZVNldHRpbmdzXHJcbiAgICAgICAgPyBidG5VcGRhdGVQcm9maWxlU2V0dGluZ3MuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxyXG4gICAgICAgIDogXCJcIjtcclxuICAgICAgaXNPcGVuID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNoYW5nZUVtYWlsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgICBidG5VcGRhdGVQcm9maWxlU2V0dGluZ3NcclxuICAgICAgICA/IGJ0blVwZGF0ZVByb2ZpbGVTZXR0aW5ncy5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXHJcbiAgICAgICAgOiBcIlwiO1xyXG4gICAgICBpc09wZW4gPSBmYWxzZTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy9mb3IgUGFzc3dvcmQgT3B0aW9ucyBEcm9wZG93blxyXG4gIHByb2ZpbGVJbmZvcm1hdGlvbkJ0bkRyb3BEb3duWzFdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBpZiAoIWlzT3Blbikge1xyXG4gICAgICBjaGFuZ2VQYXNzd29yZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcclxuICAgICAgYnRuVXBkYXRlUHJvZmlsZVNldHRpbmdzXHJcbiAgICAgICAgPyBidG5VcGRhdGVQcm9maWxlU2V0dGluZ3MuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxyXG4gICAgICAgIDogXCJcIjtcclxuICAgICAgaXNPcGVuID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNoYW5nZVBhc3N3b3JkQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgICBidG5VcGRhdGVQcm9maWxlU2V0dGluZ3NcclxuICAgICAgICA/IGJ0blVwZGF0ZVByb2ZpbGVTZXR0aW5ncy5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXHJcbiAgICAgICAgOiBcIlwiO1xyXG4gICAgICBpc09wZW4gPSBmYWxzZTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy9QUkVWSUVXIFVQTE9BREVEIEZJTEVTIEFORCBXT1JLTE9BRFNcclxuICBjb25zdCB1cGxvYWRQcm9maWxlSW1nUGlja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLnVwbG9hZF9fcHJvZmlsZS1pbWFnZS1waWNrZXJcIlxyXG4gICk7XHJcbiAgY29uc3QgYWxlcnRQcm9maWxlU2V0dGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIucHJvZmlsZV9fc2V0dGluZ3MtYWxlcnRcIlxyXG4gICk7XHJcbiAgY29uc3QgYWxlcnRUZXh0UHJvZmlsZVNldHRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLnByb2ZpbGVfX3NldHRpbmdzLWFsZXJ0LXRleHRcIlxyXG4gICk7XHJcblxyXG4gIHVwbG9hZFByb2ZpbGVJbWdQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICBjb25zdCBmaWxlID0gdXBsb2FkUHJvZmlsZUltZ1BpY2tlci5maWxlc1swXTtcclxuICAgIGNvbnN0IHVwbG9hZFByb2ZpbGVJbWdQcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIucHJldmlld19fcHJvZmlsZS1pbWFnZVwiXHJcbiAgICApO1xyXG4gICAgY29uc3QgaW1hZ2VSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgIGltYWdlUmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFwibG9hZFwiLFxyXG4gICAgICBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IFNUQU5EQVJEX1NJWkUgPSAzMTQ1NzI4O1xyXG4gICAgICAgICAgaWYgKGZpbGUuc2l6ZSA8IFNUQU5EQVJEX1NJWkUpIHtcclxuICAgICAgICAgICAgdXBsb2FkUHJvZmlsZUltZ1ByZXZpZXcuc3JjID0gaW1hZ2VSZWFkZXIucmVzdWx0O1xyXG4gICAgICAgICAgICBpbWFnZUZpbGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZpbGU7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydFByb2ZpbGVTZXR0aW5ncy5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xyXG4gICAgICAgICAgICBhbGVydFByb2ZpbGVTZXR0aW5ncy5jbGFzc0xpc3QuYWRkKFwiZXJyb3JfX3NoYWtlXCIpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBhbGVydFByb2ZpbGVTZXR0aW5ncy5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgICAgICAgICB9LCA2MDAwKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSBzaXplIGlzIHRvbyBsYXJnZWApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgYWxlcnRUZXh0UHJvZmlsZVNldHRpbmdzLnRleHRDb250ZW50ID0gZXJyLm1lc3NhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWxzZVxyXG4gICAgKTtcclxuICAgIGlmIChmaWxlKSB7XHJcbiAgICAgIGltYWdlUmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vSEFORExFIFVQTE9BRCBGSUxFUywgRlVMTE5BTUUgQU5EIEVNQUlMIENIQU5HRVNcclxuICBjb25zdCBmb3JtUHJvZmlsZVNldHRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtX19wcm9maWxlLXNldHRpbmdzXCIpLFxyXG4gICAgcHJvZmlsZVNldHRpbmdzRnVsbG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5wcm9maWxlX19zZXR0aW5ncy1mdWxsbmFtZVwiXHJcbiAgICApLFxyXG4gICAgbG9hZGluZ1NwaW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmctc3Bpbm5lclwiKSxcclxuICAgIGxvYWRpbmdQcm9maWxlU2V0dGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5sb2FkaW5nX19wcm9maWxlLXNldHRpbmdzXCJcclxuICAgICk7XHJcblxyXG4gIGZvcm1Qcm9maWxlU2V0dGluZ3MuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbG9hZGluZ1NwaW5uZXIuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICAgIGxvYWRpbmdQcm9maWxlU2V0dGluZ3MuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICAgIGJ0blVwZGF0ZVByb2ZpbGVTZXR0aW5ncy5yZW1vdmVBdHRyaWJ1dGUoXCJmb3JcIik7XHJcbiAgICBidG5VcGRhdGVQcm9maWxlU2V0dGluZ3MucmVtb3ZlQXR0cmlidXRlKFwicm9sZVwiKTtcclxuICAgIGNvbnN0IHByb2ZpbGVTZXR0aW5nc0Zvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm1Qcm9maWxlU2V0dGluZ3MpLFxyXG4gICAgICBQUk9GSUxFX0lNQUdFID0gXCJwcm9maWxlX2ltYWdlXCI7XHJcbiAgICBwcm9maWxlU2V0dGluZ3NGb3JtRGF0YS5hcHBlbmQoUFJPRklMRV9JTUFHRSwgaW1hZ2VGaWxlKTtcclxuICAgIHByb2ZpbGVTZXR0aW5nc0Zvcm1EYXRhLmFwcGVuZChcImZ1bGxuYW1lXCIsIHByb2ZpbGVTZXR0aW5nc0Z1bGxuYW1lLnZhbHVlKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVQcm9maWxlSW5mb3JtYXRpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IFVQREFURV9JTkZPX1VSTCA9IFwiL3Byb2ZpbGUtaW5mby11cGRhdGVcIjtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUERBVEVfSU5GT19VUkwsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICAgICAgY2FjaGU6IFwibm8tY2FjaGVcIixcclxuICAgICAgICBib2R5OiBwcm9maWxlU2V0dGluZ3NGb3JtRGF0YSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB1cGRhdGVQcm9maWxlSW5mb3JtYXRpb24oKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMudXJsO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICB9KTtcclxufSk7XHJcbiIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgcmVnVXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlZ191c2VyX25hbWVcIik7XHJcbiAgY29uc3QgcmVnVXNlckVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWdfdXNlcl9lbWFpbFwiKTtcclxuICBjb25zdCByZWdVc2VyUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlZ191c2VyX3Bhc3N3b3JkXCIpO1xyXG4gIGNvbnN0IHJlZ1VzZXJDb25maXJtUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIucmVnX3VzZXJfY29uZmlybV9wYXNzd29yZFwiXHJcbiAgKTtcclxuICBjb25zdCBmb3JtUmVnaXN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX2NvbnRhaW5lci1yZWdpc3RlclwiKTtcclxuXHJcbiAgLy9wYXNzd29yZCBhbmQgY29uZmlybSBwYXNzd29yZCBjaGVja2VyXHJcbiAgY29uc3QgcGFzc3dvcmRDaGVja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXNzd29yZF9fY2hlY2tlclwiKTtcclxuICBjb25zdCBjb25maXJtUGFzc3dvcmRDaGVja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmNvbmZpcm1fX3Bhc3N3b3JkLWNoZWNrZXJcIlxyXG4gICk7XHJcbiAgY29uc3QgY2hlY2tJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5iaS1jaGVjay1jaXJjbGUtZmlsbFwiKTtcclxuICBjb25zdCBzaG93UGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3dfX3Bhc3N3b3JkXCIpO1xyXG5cclxuICBjb25zdCBTRVNTSU9OX1NUT1JBR0VfTkFNRSA9IFwicmVnaXN0ZXJfdXNlcl9uYW1lXCIsXHJcbiAgICBTRVNTSU9OX1NUT1JBR0VfRU1BSUwgPSBcInJlZ2lzdGVyX3VzZXJfZW1haWxcIjtcclxuXHJcbiAgbGV0IHJlZ2lzdGVyU2Vzc2lvblN0b3JhZ2UgPSBzZXNzaW9uU3RvcmFnZTtcclxuICBsZXQgcmVjb3ZlckNyZWRlbnRpYWxzID0ge1xyXG4gICAgdXNlcl9uYW1lOiByZWdpc3RlclNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU0VTU0lPTl9TVE9SQUdFX05BTUUpLFxyXG4gICAgdXNlcl9lbWFpbDogcmVnaXN0ZXJTZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFNFU1NJT05fU1RPUkFHRV9FTUFJTCksXHJcbiAgfTtcclxuICByZWdVc2VyTmFtZS52YWx1ZSA9IHJlY292ZXJDcmVkZW50aWFscy51c2VyX25hbWU7XHJcbiAgcmVnVXNlckVtYWlsLnZhbHVlID0gcmVjb3ZlckNyZWRlbnRpYWxzLnVzZXJfZW1haWw7XHJcbiAgcmVnaXN0ZXJTZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xyXG5cclxuICAvL1N0b3JlIHNlc3Npb24gZW1haWwgYW5kIG5hbWUgb24gc2Vzc2lvbiBzdG9yYWdlXHJcbiAgbGV0IGZvckVtYWlsTG9jYWxTdG9yYWdlID0gbG9jYWxTdG9yYWdlO1xyXG4gIGZvcm1SZWdpc3Rlci5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsICgpID0+IHtcclxuICAgIHJlZ2lzdGVyU2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTRVNTSU9OX1NUT1JBR0VfTkFNRSwgcmVnVXNlck5hbWUudmFsdWUpO1xyXG4gICAgcmVnaXN0ZXJTZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFNFU1NJT05fU1RPUkFHRV9FTUFJTCwgcmVnVXNlckVtYWlsLnZhbHVlKTtcclxuICAgIGZvckVtYWlsTG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyX2VtYWlsXCIsIHJlZ1VzZXJFbWFpbC52YWx1ZSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vcGFzc3dvcmQgbGlzdGVuZXJcclxuICByZWdVc2VyUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBwYXNzd29yZENoZWNrZXIuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuXHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoID49IDgpIHtcclxuICAgICAgcGFzc3dvcmRDaGVja2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LWRhbmdlclwiKTtcclxuICAgICAgcGFzc3dvcmRDaGVja2VyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXN1Y2Nlc3NcIik7XHJcbiAgICAgIGNoZWNrSWNvblswXS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGFzc3dvcmRDaGVja2VyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWRhbmdlclwiKTtcclxuICAgICAgcGFzc3dvcmRDaGVja2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZXh0LXN1Y2Nlc3NcIik7XHJcbiAgICAgIGNoZWNrSWNvblswXS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvL3Bhc3N3b3JkIGNvbmZpcm0gY2hlY2tlclxyXG4gIHJlZ1VzZXJDb25maXJtUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25maXJtUGFzc3dvcmRDaGVja2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcblxyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSByZWdVc2VyUGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgY29uZmlybVBhc3N3b3JkQ2hlY2tlci5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1kYW5nZXJcIik7XHJcbiAgICAgIGNvbmZpcm1QYXNzd29yZENoZWNrZXIuY2xhc3NMaXN0LmFkZChcInRleHQtc3VjY2Vzc1wiKTtcclxuICAgICAgY29uZmlybVBhc3N3b3JkQ2hlY2tlci5pbm5lckhUTUwgPSBgUGFzc3dvcmQgbWF0Y2hlZC4gPGkgY2xhc3M9XCJiaSBiaS1jaGVjay1jaXJjbGUtZmlsbCBmX3NpemUtMVwiPjwvaT5gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uZmlybVBhc3N3b3JkQ2hlY2tlci5jbGFzc0xpc3QuYWRkKFwidGV4dC1kYW5nZXJcIik7XHJcbiAgICAgIGNvbmZpcm1QYXNzd29yZENoZWNrZXIuY2xhc3NMaXN0LnJlbW92ZShcInRleHQtc3VjY2Vzc1wiKTtcclxuICAgICAgY29uZmlybVBhc3N3b3JkQ2hlY2tlci5pbm5lckhUTUwgPSBgUGFzc3dvcmQgZG8gbm90IG1hdGNoZWQuYDtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy9zaG93IHBhc3N3b3JkIGNoZWNrZXJcclxuICBjb25zdCBwYXNzd29yZEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9cGFzc3dvcmRdXCIpO1xyXG4gIHNob3dQYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBwYXNzd29yZEZpZWxkLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgY29uc3QgdHlwZSA9XHJcbiAgICAgICAgaXRlbS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpID09PSBcInBhc3N3b3JkXCIgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIjtcclxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xyXG4gICAgICBpZiAoc2hvd1Bhc3N3b3JkLmNoZWNrZWQpIHtcclxuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdHlwZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufSk7XHJcbiIsImNvbnN0IGxvYWRpbmdTcGlubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXNzd29yZF9yZXNldF9fbG9hZGluZ1wiKSxcclxuICBmb3JtUmVzZXRQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9fcmVzZXQtcGFzc3dvcmRcIiksXHJcbiAgcGFzc3dvcmRSZXNldElucHV0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl1gKSxcclxuICBwYXNzd29yZFRvZ2dsZVZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl1gKSxcclxuICBwYXNzd29yZFJlc2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5fX3Bhc3N3b3JkLXJlc2V0XCIpO1xyXG5mZXRjaChcIi9xXCIsIHsgbWV0aG9kOiBcIkdFVFwiIH0pXHJcbiAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgbG9hZGluZ1NwaW5uZXIuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcclxuICAgIH1cclxuICB9KVxyXG4gIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG5cclxucGFzc3dvcmRUb2dnbGVWaWV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGlmIChwYXNzd29yZFRvZ2dsZVZpZXcuY2hlY2tlZCkge1xyXG4gICAgcGFzc3dvcmRSZXNldElucHV0RmllbGQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBhc3N3b3JkUmVzZXRJbnB1dEZpZWxkLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicGFzc3dvcmRcIik7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgZWxfcGFzc3dvcmRfY2hlY2tlciA9ICgpID0+IHtcclxuICBjb25zdCB0ZXh0X2NoZWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICB0ZXh0X2NoZWNrZXIuaW5uZXJIVE1MID0gYFBhc3N3b3JkIHNob3VsZCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMgbG9uZy5gO1xyXG4gIHRleHRfY2hlY2tlci5jbGFzc0xpc3QuYWRkKFwicmVzZXRfX3Bhc3N3b3JkLWNoZWNrZXJcIik7XHJcbiAgdGV4dF9jaGVja2VyLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XHJcbiAgdGV4dF9jaGVja2VyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWRhbmdlclwiKTtcclxuICB0ZXh0X2NoZWNrZXIuY2xhc3NMaXN0LmFkZChcImZ3XzYwMFwiKTtcclxuICB0ZXh0X2NoZWNrZXIuY2xhc3NMaXN0LmFkZChcImZfc2l6ZS0zXCIpO1xyXG4gIHJldHVybiB0ZXh0X2NoZWNrZXI7XHJcbn07XHJcblxyXG4vL0FwcGVuZCBQYXNzd29yZCBDaGVja2VyXHJcbnBhc3N3b3JkUmVzZXRJbnB1dEZpZWxkWzBdLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKFxyXG4gIGVsX3Bhc3N3b3JkX2NoZWNrZXIoKSxcclxuICBwYXNzd29yZFJlc2V0SW5wdXRGaWVsZFswXS5uZXh0U2libGluZ1xyXG4pO1xyXG5wYXNzd29yZFJlc2V0SW5wdXRGaWVsZFsxXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcclxuICBlbF9wYXNzd29yZF9jaGVja2VyKCksXHJcbiAgcGFzc3dvcmRSZXNldElucHV0RmllbGRbMV0ubmV4dFNpYmxpbmdcclxuKTtcclxuXHJcbmNvbnN0IHBhc3N3b3JkQ2hlY2tlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVzZXRfX3Bhc3N3b3JkLWNoZWNrZXJcIik7XHJcbnBhc3N3b3JkUmVzZXRJbnB1dEZpZWxkWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBwYXNzd29yZENoZWNrZXJbMF0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICBpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoID49IDgpIHtcclxuICAgIHBhc3N3b3JkQ2hlY2tlclswXS5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1kYW5nZXJcIik7XHJcbiAgICBwYXNzd29yZENoZWNrZXJbMF0uY2xhc3NMaXN0LmFkZChcInRleHQtc3VjY2Vzc1wiKTtcclxuICAgIHBhc3N3b3JkQ2hlY2tlclswXS5pbm5lckhUTUwgPSBgUGFzc3dvcmQgc2hvdWxkIGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycyBsb25nLiA8aSBjbGFzcz1cImJpIGJpLWNoZWNrLWNpcmNsZS1maWxsIGZfc2l6ZS0xXCI+PC9pPmA7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBhc3N3b3JkQ2hlY2tlclswXS5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1zdWNjZXNzXCIpO1xyXG4gICAgcGFzc3dvcmRDaGVja2VyWzBdLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWRhbmdlclwiKTtcclxuICAgIHBhc3N3b3JkQ2hlY2tlclswXS5pbm5lckhUTUwgPSBgUGFzc3dvcmQgc2hvdWxkIGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycyBsb25nLmA7XHJcbiAgfVxyXG59KTtcclxuXHJcbnBhc3N3b3JkUmVzZXRJbnB1dEZpZWxkWzFdLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBwYXNzd29yZENoZWNrZXJbMV0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICBpZiAoXHJcbiAgICBlLnRhcmdldC52YWx1ZSA9PT0gcGFzc3dvcmRSZXNldElucHV0RmllbGRbMF0udmFsdWUgJiZcclxuICAgIGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA+PSA4XHJcbiAgKSB7XHJcbiAgICBwYXNzd29yZENoZWNrZXJbMV0uY2xhc3NMaXN0LnJlbW92ZShcInRleHQtZGFuZ2VyXCIpO1xyXG4gICAgcGFzc3dvcmRDaGVja2VyWzFdLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXN1Y2Nlc3NcIik7XHJcbiAgICBwYXNzd29yZENoZWNrZXJbMV0uaW5uZXJIVE1MID0gYFBhc3N3b3JkIG1hdGNoZWQuIDxpIGNsYXNzPVwiYmkgYmktY2hlY2stY2lyY2xlLWZpbGwgZl9zaXplLTFcIj48L2k+YDtcclxuICAgIHBhc3N3b3JkUmVzZXRCdG4ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBhc3N3b3JkQ2hlY2tlclsxXS5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1zdWNjZXNzXCIpO1xyXG4gICAgcGFzc3dvcmRDaGVja2VyWzFdLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWRhbmdlclwiKTtcclxuICAgIHBhc3N3b3JkQ2hlY2tlclsxXS5pbm5lckhUTUwgPVxyXG4gICAgICBlLnRhcmdldC52YWx1ZSA9PT0gcGFzc3dvcmRSZXNldElucHV0RmllbGRbMF0udmFsdWVcclxuICAgICAgICA/IGBQYXNzd29yZCBzaG91bGQgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzIGxvbmcuYFxyXG4gICAgICAgIDogYFBhc3N3b3JkIGRvIG5vdCBtYXRjaGVkLmA7XHJcbiAgICBwYXNzd29yZFJlc2V0QnRuLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy90b2dnbGUgYWxlcnQgYm94XHJcbmxldCBwYXNzd29yZFJlc2V0QnRuQ29uZmlnID0gW1xyXG4gIFtcInR5cGVcIiwgXCJidXR0b25cIl0sXHJcbiAgW1wiZGF0YS1icy10b2dnbGVcIiwgXCJtb2RhbFwiXSxcclxuICBbXCJkYXRhLWJzLXRhcmdldFwiLCBcImRpYWxvZ1Bhc3N3b3JkUmVzZXRcIl0sXHJcbl07XHJcbmNvbnN0IHBhc3N3b3JkUmVzZXRTdGF0dXNJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLnBhc3N3b3JkX19yZXNldC1zdGF0dXMtaWNvblwiXHJcbiAgKSxcclxuICBwYXNzd29yZFJlc2V0U3RhdHVzTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIi5wYXNzd29yZF9fcmVzZXQtbWVzc2FnZVwiXHJcbiAgKSxcclxuICBwYXNzd29yZFJlc2V0TG9hZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFzc3dvcmRfX3Jlc2V0LWxvYWRpbmdcIik7XHJcbmZvcm1SZXNldFBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgcGFzc3dvcmRSZXNldEJ0bi5zZXRBdHRyaWJ1dGUocGFzc3dvcmRSZXNldEJ0bkNvbmZpZ1swXVswXSwgXCJidXR0b25cIik7XHJcbiAgcGFzc3dvcmRSZXNldEJ0bi5zZXRBdHRyaWJ1dGUocGFzc3dvcmRSZXNldEJ0bkNvbmZpZ1sxXVswXSwgXCJtb2RhbFwiKTtcclxuICBwYXNzd29yZFJlc2V0QnRuLnNldEF0dHJpYnV0ZShcclxuICAgIHBhc3N3b3JkUmVzZXRCdG5Db25maWdbMl1bMF0sXHJcbiAgICBcIiNkaWFsb2dSZXNldFBhc3N3b3JkQWxlcnRcIlxyXG4gICk7XHJcbiAgcGFzc3dvcmRSZXNldEJ0bi5jbGljaygpO1xyXG4gIGlmIChwYXNzd29yZFJlc2V0SW5wdXRGaWVsZFswXS52YWx1ZSA9PT0gcGFzc3dvcmRSZXNldElucHV0RmllbGRbMV0udmFsdWUpIHtcclxuICAgIGNvbnN0IHNlbmRSZXNldFBhc3N3b3JkUmVxdWVzdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB2YXIgdXJsUGFyYW1zID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICAgICAgICB2YXIgZ2V0UXVlcnkgPSB1cmxQYXJhbXMuc3BsaXQoXCI/XCIpWzFdO1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBnZXRRdWVyeS5zcGxpdChcIiZcIik7XHJcbiAgICAgICAgY29uc3QgdXJsID0gXCIvcmVzZXQtcGFzc3dvcmRcIjtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgICAgIGNhY2hlOiBcIm5vLWNhY2hlXCIsXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIG5ld19wYXNzd29yZDogcGFzc3dvcmRSZXNldElucHV0RmllbGRbMF0udmFsdWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1fbmV3X3Bhc3N3b3JkOiBwYXNzd29yZFJlc2V0SW5wdXRGaWVsZFsxXS52YWx1ZSxcclxuICAgICAgICAgICAgcHJ0OiBwYXJhbXNbMF0ucmVwbGFjZShcInBydD1cIiwgXCJcIiksXHJcbiAgICAgICAgICAgIHByczogcGFyYW1zWzFdLnJlcGxhY2UoXCJwcnM9XCIsIFwiXCIpLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIyNikge1xyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDkpIHtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgc2VuZFJlc2V0UGFzc3dvcmRSZXF1ZXN0KClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuc3VjY2VzcyA9PT0gMSkge1xyXG4gICAgICAgICAgcGFzc3dvcmRSZXNldExvYWRpbmcuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcclxuICAgICAgICAgIHBhc3N3b3JkUmVzZXRTdGF0dXNJY29uWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcbiAgICAgICAgICBwYXNzd29yZFJlc2V0U3RhdHVzTWVzc2FnZS5pbm5lckhUTUwgPSByZXMuc3VjY2Vzc19tZXNzYWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVzLmVycm9yID09PSAxKSB7XHJcbiAgICAgICAgICBwYXNzd29yZFJlc2V0TG9hZGluZy5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xyXG4gICAgICAgICAgcGFzc3dvcmRSZXNldFN0YXR1c0ljb25bMV0uY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICAgICAgICAgIHBhc3N3b3JkUmVzZXRTdGF0dXNNZXNzYWdlLmlubmVySFRNTCA9IHJlcy5lcnJvcl9tZXNzYWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBhc3N3b3JkQ2hlY2tlclsxXS5jbGFzc0xpc3QucmVtb3ZlKFwidGV4dC1zdWNjZXNzXCIpO1xyXG4gICAgcGFzc3dvcmRDaGVja2VyWzFdLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWRhbmdlclwiKTtcclxuICAgIHBhc3N3b3JkQ2hlY2tlclsxXS5pbm5lckhUTUwgPVxyXG4gICAgICBlLnRhcmdldC52YWx1ZSA9PT0gcGFzc3dvcmRSZXNldElucHV0RmllbGRbMF0udmFsdWVcclxuICAgICAgICA/IGBQYXNzd29yZCBzaG91bGQgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzIGxvbmcuYFxyXG4gICAgICAgIDogYFBhc3N3b3JkIGRvIG5vdCBtYXRjaGVkLmA7XHJcbiAgICBwYXNzd29yZFJlc2V0QnRuLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcclxuICB9XHJcbn0pO1xyXG4iLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IHN1YmplY3REcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3ViamVjdF9fZHJvcGRvd25cIik7XHJcbiAgY29uc3Qgc3ViamVjdERyb3Bkb3duR3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgXCIuc3ViamVjdF9fZHJvcGRvd24tZ3JvdXBcIlxyXG4gICk7XHJcbiAgY29uc3Qgc3ViamVjdERyb3Bkb3duQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgIFwiLnN1YmplY3RfX2Ryb3Bkb3duLWJ0blwiXHJcbiAgKTtcclxuICBjb25zdCBzdWJqZWN0RHJvcGRvd25JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mYS1jaGV2cm9uLXJpZ2h0XCIpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YmplY3REcm9wZG93bkdyb3VwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsZXQgc3ViamVjdERyb3Bkb3duT3BlbiA9IGZhbHNlO1xyXG4gICAgc3ViamVjdERyb3Bkb3duQnRuW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoIXN1YmplY3REcm9wZG93bk9wZW4pIHtcclxuICAgICAgICBzdWJqZWN0RHJvcGRvd25Hcm91cFtpXS5jbGFzc0xpc3QuYWRkKFwic3ViamVjdF9fZHJvcGRvd24tb3BlblwiKTtcclxuICAgICAgICBzdWJqZWN0RHJvcGRvd25baV0uY2xhc3NMaXN0LmFkZChcInN1YmplY3RfX2Ryb3Bkb3duLW9wZW5cIik7XHJcbiAgICAgICAgc3ViamVjdERyb3Bkb3duSWNvbltpXS5jbGFzc0xpc3QuYWRkKFwiaWNvbi1yb3RhdGVcIik7XHJcbiAgICAgICAgc3ViamVjdERyb3Bkb3duT3BlbiA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3ViamVjdERyb3Bkb3duR3JvdXBbaV0uY2xhc3NMaXN0LnJlbW92ZShcInN1YmplY3RfX2Ryb3Bkb3duLW9wZW5cIik7XHJcbiAgICAgICAgc3ViamVjdERyb3Bkb3duW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJzdWJqZWN0X19kcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgIHN1YmplY3REcm9wZG93bkljb25baV0uY2xhc3NMaXN0LnJlbW92ZShcImljb24tcm90YXRlXCIpO1xyXG4gICAgICAgIHN1YmplY3REcm9wZG93bk9wZW4gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBhcnJheUluZGV4RmluZGVyKGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBhcnJheUluZGV4RmluZGVyID0gKGUpID0+IHtcclxuICAgIEFycmF5LmZyb20oc3ViamVjdERyb3Bkb3duKS5pbmRleE9mKGUudGFyZ2V0KTtcclxuICB9O1xyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjExZDNmM2IyMGQxMjM5ZDE0ZWIwZTczOGI5NjM5MmY3LnBuZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvKiBKQVZBU0NSSVBUICovXHJcblxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VyX19lbWFpbFwiKSkge1xyXG4gIHJlcXVpcmUoXCIuL2pzL2xvZ2luXCIpO1xyXG59XHJcblxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWdfdXNlcl9uYW1lXCIpKSB7XHJcbiAgcmVxdWlyZShcIi4vanMvcmVnaXN0ZXJcIik7XHJcbn1cclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX2NvbW1lbnRcIikpIHtcclxuICByZXF1aXJlKFwiLi9qcy9jb21tZW50XCIpO1xyXG59XHJcblxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5fX2RlbGV0ZS1hbnN3ZXJcIikpIHtcclxuICByZXF1aXJlKFwiLi9qcy9vcHRpb25zX3Bvc3RcIik7XHJcbn1cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuX191cGRhdGUtYW5zd2VyXCIpKSB7XHJcbiAgcmVxdWlyZShcIi4vanMvb3B0aW9uc19wb3N0XCIpO1xyXG59XHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhc3N3b3JkX3Jlc2V0X19sb2FkaW5nXCIpKSB7XHJcbiAgcmVxdWlyZShcIi4vanMvcmVzZXQtcGFzc3dvcmRcIik7XHJcbn1cclxuXHJcbnJlcXVpcmUoXCIuL2pzL2ZvcmdvdC1wYXNzd29yZFwiKTtcclxucmVxdWlyZShcIi4vanMvaW1hZ2UtbG9hZFwiKTtcclxucmVxdWlyZShcIi4vanMvb3B0aW9uX3Bvc3RfdG9nZ2xlXCIpO1xyXG5yZXF1aXJlKFwiLi9ib290c3RyYXAvanMvYm9vdHN0cmFwLm1pblwiKTtcclxucmVxdWlyZShcIi4vanMvbmF2YnVyZ2VyLmFuaW1cIik7XHJcbnJlcXVpcmUoXCIuL2pzL3N1YmplY3RfZHJvcGRvd25cIik7XHJcbnJlcXVpcmUoXCIuL2pzL2NvcHktY29kZVwiKTtcclxucmVxdWlyZShcIi4vanMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbl9hcGlcIik7XHJcbnJlcXVpcmUoXCIuL2pzL3Byb2ZpbGVfc2V0dGluZ3NcIik7XHJcbnJlcXVpcmUoXCIuL2pzL2NyZWF0ZS1wb3N0XCIpO1xyXG5cclxuLyogU1RZTEUgKi9cclxucmVxdWlyZShcIi4vYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAubWluLmNzc1wiKTtcclxucmVxdWlyZShcIi4vbWFpbi5zY3NzXCIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9