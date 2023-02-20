/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/block-slider/edit.jsx":
/*!******************************************!*\
  !*** ./src/blocks/block-slider/edit.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/block-slider/editor.scss");





function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    autoplay,
    loop,
    autoplayDuration,
    slidesPerView
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: "Slides per view",
    value: slidesPerView,
    onChange: value => setAttributes({
      slidesPerView: value
    }),
    min: 1,
    max: 10
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: "Loop",
    checked: loop,
    onChange: () => setAttributes({
      loop: !loop
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: "Autoplay",
    checked: autoplay,
    onChange: () => setAttributes({
      autoplay: !autoplay
    })
  }), autoplay && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: "Autoplay duration",
    value: autoplayDuration,
    onChange: value => setAttributes({
      autoplayDuration: value
    }),
    min: 100,
    max: 10000
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    allowedBlocks: ["spawn/slide"],
    orientation: "horizontal",
    template: [["spawn/slide", {}]]
  })));
}

/***/ }),

/***/ "./src/blocks/block-slider/index.jsx":
/*!*******************************************!*\
  !*** ./src/blocks/block-slider/index.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/block-slider/edit.jsx");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/block-slider/save.jsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/block-slider/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/block-slider/style.scss");
/* harmony import */ var _assets_images_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/icon.svg */ "./src/assets/images/icon.svg");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  icon: _assets_images_icon_svg__WEBPACK_IMPORTED_MODULE_5__.ReactComponent
});

/***/ }),

/***/ "./src/blocks/block-slider/save.jsx":
/*!******************************************!*\
  !*** ./src/blocks/block-slider/save.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



function save(props) {
  const {
    attributes
  } = props;
  const {
    loop,
    autoplay,
    autoplayDuration,
    slidesPerView
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: "swiper"
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
    "data-loop": loop,
    "data-autoplay": autoplay,
    "data-autoplayDuration": autoplayDuration,
    "data-slidesPerView": slidesPerView
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "swiper-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)));
}

/***/ }),

/***/ "./src/blocks/block-slider/editor.scss":
/*!*********************************************!*\
  !*** ./src/blocks/block-slider/editor.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/block-slider/style.scss":
/*!********************************************!*\
  !*** ./src/blocks/block-slider/style.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/images/icon.svg":
/*!************************************!*\
  !*** ./src/assets/images/icon.svg ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReactComponent": function() { return /* binding */ SvgIcon; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _rect, _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgIcon = function SvgIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _rect || (_rect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: 7.714,
    y: 8.02,
    width: 2.857,
    height: 3.01,
    rx: 0.5
  })), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M2 2.625C2 2.28 2.28 2 2.625 2h2.232v3.01H2V2.625ZM2 5.01h2.857v3.01H2V5.01zM2 8.02h2.857v2.385c0 .346-.28.625-.625.625H2.625A.625.625 0 0 1 2 10.405V8.02zM4.857 2h2.857v3.01H4.857V2ZM7.714 2h2.232c.346 0 .625.28.625.625v1.76c0 .345-.28.625-.625.625H7.715V2zM7.714 14.023c0-.345.28-.625.625-.625h1.608c.345 0 .625.28.625.625v2.385H7.714v-2.385zM7.714 16.409h2.858v3.01H7.714v-3.01zM7.714 19.419h2.858v2.385c0 .345-.28.625-.625.625H7.714v-3.01zM4.857 19.419h2.857v3.01H4.857v-3.01zM2 19.419h2.857v3.01H2.625A.625.625 0 0 1 2 21.804V19.42zM2 17.034c0-.345.28-.625.625-.625h1.607c.345 0 .625.28.625.625v2.385H2v-2.385zM13.429 2.625c0-.345.28-.625.625-.625h1.607c.345 0 .625.28.625.625V5.01H13.43V2.625zM13.429 5.01h2.857v3.01H13.43V5.01zM13.429 8.02h2.857v3.01h-2.232a.625.625 0 0 1-.625-.625V8.02zM16.286 8.02h2.857v3.01h-2.857V8.02zM16.286 5.01h2.232c.345 0 .625.28.625.625V8.02h-2.857V5.01zM19.143 8.02h2.232c.345 0 .625.28.625.625v1.76c0 .346-.28.625-.625.625h-2.232V8.02zM13.429 14.023c0-.345.28-.625.625-.625h1.607c.345 0 .625.28.625.625v2.385H13.43v-2.385zM13.429 16.409h2.857v3.01H13.43v-3.01zM13.429 19.419h2.857v2.385c0 .345-.28.625-.625.625h-1.607a.625.625 0 0 1-.625-.625V19.42zM19.143 14.023c0-.345.28-.625.625-.625h1.607c.345 0 .625.28.625.625v2.385h-2.857v-2.385zM19.143 16.409H22v3.01h-2.857v-3.01zM19.143 19.419H22v2.385c0 .345-.28.625-.625.625h-1.607a.625.625 0 0 1-.625-.625v-2.385z"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjcuNzE0NCIgeT0iOC4wMjAzIiB3aWR0aD0iMi44NTcyIiBoZWlnaHQ9IjMuMDEwMSIgcng9Ii41Ii8+CjxwYXRoIGQ9Ik0yIDIuNjI1QzIgMi4yNzk4MiAyLjI3OTgyIDIgMi42MjUgMkg0Ljg1NzE1VjUuMDEwMTRIMlYyLjYyNVoiLz4KPHBhdGggZD0ibTIgNS4wMTAxaDIuODU3Mmw2ZS01IDMuMDEwMmgtMi44NTcxbC03ZS01IC0zLjAxMDJ6Ii8+CjxwYXRoIGQ9Im0yLjAwMDEgOC4wMjAzaDIuODU3MXYyLjM4NTFjMCAwLjM0NTItMC4yNzk4MiAwLjYyNS0wLjYyNSAwLjYyNWgtMS42MDcxYy0wLjM0NTE4IDAtMC42MjUtMC4yNzk4LTAuNjI1LTAuNjI1di0yLjM4NTF6Ii8+CjxwYXRoIGQ9Ik00Ljg1NzE1IDJINy43MTQ0MVY1LjAxMDE0SDQuODU3MTVWMloiLz4KPHBhdGggZD0ibTcuNzE0NCAyaDIuMjMyMWMwLjM0NTE3IDAgMC42MjQ5NyAwLjI3OTgyIDAuNjI0OTcgMC42MjV2MS43NjAxYzAgMC4zNDUxOC0wLjI3OTggMC42MjUwMS0wLjYyNDk3IDAuNjI1MDFoLTIuMjMyMXYtMy4wMTAxeiIvPgo8cGF0aCBkPSJtNy43MTQ0IDE0LjAyM2MwLTAuMzQ1MSAwLjI3OTgzLTAuNjI1IDAuNjI1MDEtMC42MjVoMS42MDcxYzAuMzQ1MjEgMCAwLjYyNTAxIDAuMjc5OSAwLjYyNTAxIDAuNjI1djIuMzg1MmgtMi44NTcydi0yLjM4NTJ6Ii8+CjxwYXRoIGQ9Im03LjcxNDQgMTYuNDA5aDIuODU3MnYzLjAxMDJoLTIuODU3MnYtMy4wMTAyeiIvPgo8cGF0aCBkPSJtNy43MTQ0IDE5LjQxOWgyLjg1NzJ2Mi4zODVjMCAwLjM0NTItMC4yNzk4IDAuNjI1LTAuNjI1MDEgMC42MjVoLTIuMjMyMnYtMy4wMXoiLz4KPHBhdGggZD0ibTQuODU3MyAxOS40MTkgMi44NTcxIDFlLTR2My4wMWgtMi44NTcxdi0zLjAxMDF6Ii8+CjxwYXRoIGQ9Im0yLjAwMDEgMTkuNDE5IDIuODU3Mi0xZS00djMuMDEwMWwtMi4yMzIyIDFlLTRjLTAuMzQ1MTggMC0wLjYyNS0wLjI3OTgtMC42MjUtMC42MjV2LTIuMzg1MXoiLz4KPHBhdGggZD0ibTIuMDAwMSAxNy4wMzRjMC0wLjM0NTEgMC4yNzk4Mi0wLjYyNSAwLjYyNS0wLjYyNWgxLjYwNzJjMC4zNDUxOCAwIDAuNjI1IDAuMjc5OSAwLjYyNSAwLjYyNWw1ZS01IDIuMzg1MS0yLjg1NzIgMWUtNHYtMi4zODUyeiIvPgo8cGF0aCBkPSJtMTMuNDI5IDIuNjI1YzAtMC4zNDUxOCAwLjI3OTgtMC42MjUgMC42MjUtMC42MjVoMS42MDcxYzAuMzQ1MiAwIDAuNjI1IDAuMjc5ODIgMC42MjUgMC42MjV2Mi4zODUxaC0yLjg1NzF2LTIuMzg1MXoiLz4KPHBhdGggZD0ibTEzLjQyOSA1LjAxMDFoMi44NTcxbDFlLTQgMy4wMTAyaC0yLjg1NzJ2LTMuMDEwMnoiLz4KPHBhdGggZD0ibTEzLjQyOSA4LjAyMDNoMi44NTcydjMuMDEwMWgtMi4yMzIyYy0wLjM0NTIgMC0wLjYyNS0wLjI3OTgtMC42MjUtMC42MjV2LTIuMzg1MXoiLz4KPHBhdGggZD0ibTE2LjI4NiA4LjAyMDMgMi44NTcxLTEuMWUtNHYzLjAxMDJoLTIuODU3MXYtMy4wMTAxeiIvPgo8cGF0aCBkPSJtMTYuMjg2IDUuMDEwMSAyLjIzMjIgMS4yZS00YzAuMzQ1MiAwIDAuNjI1IDAuMjc5ODMgMC42MjUgMC42MjV2Mi4zODVsLTIuODU3MSAxLjFlLTQgLTFlLTQgLTMuMDEwMnoiLz4KPHBhdGggZD0ibTE5LjE0MyA4LjAyMDJoMi4yMzIzYzAuMzQ1MiAwIDAuNjI1IDAuMjc5ODIgMC42MjUgMC42MjV2MS43NjAyYzAgMC4zNDUxLTAuMjc5OCAwLjYyNS0wLjYyNSAwLjYyNWgtMi4yMzIzdi0zLjAxMDJ6Ii8+CjxwYXRoIGQ9Im0xMy40MjkgMTQuMDIzYzAtMC4zNDUxIDAuMjc5OC0wLjYyNSAwLjYyNS0wLjYyNWgxLjYwNzFjMC4zNDUyIDAgMC42MjUgMC4yNzk5IDAuNjI1IDAuNjI1djIuMzg1MmgtMi44NTcxdi0yLjM4NTJ6Ii8+CjxwYXRoIGQ9Im0xMy40MjkgMTYuNDA5aDIuODU3MWwxZS00IDMuMDEwMmgtMi44NTcydi0zLjAxMDJ6Ii8+CjxwYXRoIGQ9Im0xMy40MjkgMTkuNDE5aDIuODU3MnYyLjM4NTFjMCAwLjM0NTItMC4yNzk5IDAuNjI1LTAuNjI1IDAuNjI1aC0xLjYwNzJjLTAuMzQ1MiAwLTAuNjI1LTAuMjc5OC0wLjYyNS0wLjYyNXYtMi4zODUxeiIvPgo8cGF0aCBkPSJtMTkuMTQzIDE0LjAyM2MwLTAuMzQ1MSAwLjI3OTgtMC42MjUgMC42MjUtMC42MjVoMS42MDcxYzAuMzQ1MiAwIDAuNjI1IDAuMjc5OSAwLjYyNSAwLjYyNXYyLjM4NTJoLTIuODU3MXYtMi4zODUyeiIvPgo8cGF0aCBkPSJtMTkuMTQzIDE2LjQwOWgyLjg1NzF2My4wMTAyaC0yLjg1NzF2LTMuMDEwMnoiLz4KPHBhdGggZD0ibTE5LjE0MyAxOS40MTloMi44NTcxdjIuMzg1YzAgMC4zNDUyLTAuMjc5OCAwLjYyNS0wLjYyNSAwLjYyNWgtMS42MDcxYy0wLjM0NTIgMC0wLjYyNS0wLjI3OTgtMC42MjUtMC42MjV2LTIuMzg1eiIvPgo8L3N2Zz4K");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

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

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./src/blocks/block-slider/block.json":
/*!********************************************!*\
  !*** ./src/blocks/block-slider/block.json ***!
  \********************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"spawn/slider","version":"0.1.0","title":"Slider","category":"spawn","description":"Slider block","attributes":{"slidesPerView":{"type":"integer","default":3},"loop":{"type":"boolean","default":true},"autoplay":{"type":"boolean","default":true},"autoplayDuration":{"type":"integer","default":3000}},"supports":{"html":false},"textdomain":"spawn-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./front.js"}');

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
/******/ 			"blocks/block-slider/index": 0,
/******/ 			"blocks/block-slider/style-index": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkspawn_blocks"] = self["webpackChunkspawn_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/block-slider/style-index"], function() { return __webpack_require__("./src/blocks/block-slider/index.jsx"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map