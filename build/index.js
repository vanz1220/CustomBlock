/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");





/**
 * Internal dependencies
 */
//import Edit from './edit';
//import save from './save';

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('create-block/ibl-block', {
  attributes: {
    wpSite: {
      type: 'string'
    },
    clientID: {
      type: 'string'
    },
    clientSecret: {
      type: 'string'
    },
    bg_color: {
      type: 'string',
      default: '#000000'
    },
    text_color: {
      type: 'string',
      default: '#ffffff'
    }
  },
  edit: function (props) {
    function updateSite(event) {
      props.setAttributes({
        wpSite: event.target.value
      });
    }

    function updateclientID(event) {
      props.setAttributes({
        clientID: event.target.value
      });
    }

    function updateclientSecret(event) {
      props.setAttributes({
        clientSecret: event.target.value
      });
    } // const [ className, setClassName ] = useState( '' );
    // const [ clientID, setClientID ] = useState( '' );
    // const [ clientSecret, setClientSecret ] = useState( '' );


    function onChangeTextColor(event) {
      props.setAttributes({
        text_color: event
      });
    }

    function onChangeBGColor(event) {
      props.setAttributes({
        bg_color: event
      });
    }

    return React.createElement("div", null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "IBL Custom Block"
    }, React.createElement("label", null, "Wordpress Site ", /*#__PURE__*/React.createElement("span", {
      class: "acf-required"
    }, "*")), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: props.attributes.wpSite,
      onChange: updateSite,
      placeholder: 'Enter Wordpress Site Url...'
    }), React.createElement("br", null), React.createElement("label", null, "OAuth2 API credentials:"), React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
      class: "indentlabel"
    }, "Client ID: ", /*#__PURE__*/React.createElement("span", {
      class: "acf-required"
    }, "*")), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: props.attributes.clientID,
      onChange: updateclientID,
      placeholder: 'Enter Client ID...'
    }), React.createElement("br", null), React.createElement("label", {
      class: "indentlabel"
    }, "Client Secret: ", /*#__PURE__*/React.createElement("span", {
      class: "acf-required"
    }, "*")), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: props.attributes.clientSecret,
      onChange: updateclientSecret,
      placeholder: 'Enter Client Secret...'
    })))), React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Button Background Color"
    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPalette // Element Tag for Gutenberg standard colour selector
    , {
      onChange: onChangeBGColor // onChange event callback

    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Button Text Color"
    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
      onChange: onChangeTextColor // onChange event callback

    })))), /*#__PURE__*/React.createElement("div", {
      class: "ibl-block"
    }, /*#__PURE__*/React.createElement("label", null, "Wordpress Site ", /*#__PURE__*/React.createElement("span", {
      class: "acf-required"
    }, "*")), /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: "Enter Wordpress Site Url...",
      value: props.attributes.wpSite,
      onChange: updateSite
    }), /*#__PURE__*/React.createElement("label", null, "OAuth2 API credentials:"), /*#__PURE__*/React.createElement("label", {
      class: "indentlabel"
    }, "Client ID: ", /*#__PURE__*/React.createElement("span", {
      class: "acf-required"
    }, "*")), /*#__PURE__*/React.createElement("input", {
      class: "indentInput",
      type: "text",
      placeholder: "Enter Client ID...",
      value: props.attributes.clientID,
      onChange: updateclientID
    }), /*#__PURE__*/React.createElement("label", {
      class: "indentlabel"
    }, "Client Secret: ", /*#__PURE__*/React.createElement("span", {
      class: "acf-required"
    }, "*")), /*#__PURE__*/React.createElement("input", {
      class: "indentInput",
      type: "text",
      placeholder: "Enter Client Secret...",
      value: props.attributes.clientSecret,
      onChange: updateclientSecret
    }), /*#__PURE__*/React.createElement("button", {
      class: "btnSend",
      style: {
        backgroundColor: props.attributes.bg_color,
        color: props.attributes.text_color
      }
    }, "Send")));
  },
  save: function (props) {
    return React.createElement("div", {
      class: "ibl-block2"
    }, /*#__PURE__*/React.createElement("label", null, "Wordpress Site ", /*#__PURE__*/React.createElement("span", {
      class: "acf-required"
    }, "*")), /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: "Enter Wordpress Site Url...",
      value: props.attributes.wpSite
    }), /*#__PURE__*/React.createElement("label", null, "OAuth2 API credentials:"), /*#__PURE__*/React.createElement("label", {
      class: "indentlabel"
    }, "Client ID: ", /*#__PURE__*/React.createElement("span", {
      class: "acf-required"
    }, "*")), /*#__PURE__*/React.createElement("input", {
      class: "indentInput",
      type: "text",
      placeholder: "Enter Client ID...",
      value: props.attributes.clientID
    }), /*#__PURE__*/React.createElement("label", {
      class: "indentlabel"
    }, "Client Secret: ", /*#__PURE__*/React.createElement("span", {
      class: "acf-required"
    }, "*")), /*#__PURE__*/React.createElement("input", {
      class: "indentInput",
      type: "text",
      placeholder: "Enter Client Secret...",
      value: props.attributes.clientSecret
    }), /*#__PURE__*/React.createElement("button", {
      class: "btnSend",
      style: {
        backgroundColor: props.attributes.bg_color,
        color: props.attributes.text_color
      }
    }, "Send"));
  }
});

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkibl_block"] = self["webpackChunkibl_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map