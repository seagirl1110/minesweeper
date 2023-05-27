/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \***********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/image/boom.jpg */ \"./src/assets/image/boom.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/image/flag.jpg */ \"./src/assets/image/flag.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  background-color: #cfe2fd;\\n}\\n\\n.game-wrapper {\\n  display: grid;\\n  grid-template-columns: 8fr 4fr;\\n  grid-template-rows: 50px 50px 1fr;\\n  grid-template-areas: \\\"level range\\\" \\\"counter btn\\\" \\\"field field\\\";\\n  max-width: 1300px;\\n  margin: 10px auto;\\n  padding: 0 20px;\\n  gap: 10px;\\n}\\n@media (max-width: 779px) {\\n  .game-wrapper {\\n    grid-template-rows: 80px 50px 1fr;\\n  }\\n}\\n@media (max-width: 558px) {\\n  .game-wrapper {\\n    grid-template-rows: 125px 50px 1fr;\\n  }\\n}\\n\\n.level {\\n  grid-area: level;\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: center;\\n  gap: 10px;\\n  padding: 0 15px;\\n}\\n.level__btn {\\n  font-weight: 700;\\n  color: #fefefe;\\n  background-color: #9065e7;\\n  outline: none;\\n  border: none;\\n  border-radius: 10px;\\n  cursor: pointer;\\n  padding: 10px 30px;\\n}\\n.level__btn:hover {\\n  background-color: #a180e3;\\n}\\n.level__btn--select {\\n  background-color: #68568b;\\n}\\n\\n.range-wrapper {\\n  grid-area: range;\\n  display: flex;\\n  align-items: center;\\n  gap: 10px;\\n}\\n\\n.counter {\\n  grid-area: counter;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  padding: 0 15px;\\n  margin-right: auto;\\n}\\n.counter__item {\\n  display: flex;\\n  gap: 10px;\\n}\\n.counter__text {\\n  color: #5003ff;\\n}\\n.counter__num {\\n  color: #e52589;\\n}\\n\\n.btn-reload {\\n  grid-area: btn;\\n  font-weight: 700;\\n  color: #9d00d8;\\n  background-color: #e1dde9;\\n  outline: none;\\n  border: 2px solid #ceabd9;\\n  border-radius: 10px;\\n  cursor: pointer;\\n  padding: 0 30px;\\n  margin-left: auto;\\n}\\n.btn-reload:hover {\\n  background-color: #eee5ff;\\n}\\n.btn-reload:active {\\n  box-shadow: 1px 1px 10px #ceabd9;\\n}\\n\\n.field {\\n  grid-area: field;\\n  display: flex;\\n  flex-wrap: wrap;\\n  position: relative;\\n  margin: 10px auto 0;\\n}\\n.field--10 {\\n  width: 400px;\\n  height: 400px;\\n}\\n@media (min-width: 550px) {\\n  .field--10 {\\n    width: 500px;\\n    height: 500px;\\n  }\\n}\\n@media (min-width: 750px) {\\n  .field--10 {\\n    width: 700px;\\n    height: 700px;\\n  }\\n}\\n.field--15 {\\n  width: 375px;\\n  height: 375px;\\n}\\n@media (min-width: 575px) {\\n  .field--15 {\\n    width: 525px;\\n    height: 525px;\\n  }\\n}\\n@media (min-width: 800px) {\\n  .field--15 {\\n    width: 750px;\\n    height: 750px;\\n  }\\n}\\n@media (min-width: 950px) {\\n  .field--15 {\\n    width: 900px;\\n    height: 900px;\\n  }\\n}\\n.field--25 {\\n  width: 375px;\\n  height: 375px;\\n}\\n@media (min-width: 550px) {\\n  .field--25 {\\n    width: 500px;\\n    height: 500px;\\n  }\\n}\\n@media (min-width: 800px) {\\n  .field--25 {\\n    width: 750px;\\n    height: 750px;\\n  }\\n}\\n@media (min-width: 1300px) {\\n  .field--25 {\\n    width: 1250px;\\n    height: 1250px;\\n  }\\n}\\n\\n.field-item {\\n  border: 1px solid #ccd3da;\\n  background-color: #ada4be;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  font-weight: 700;\\n}\\n.field--10 .field-item {\\n  width: 40px;\\n  height: 40px;\\n}\\n@media (min-width: 550px) {\\n  .field--10 .field-item {\\n    width: 50px;\\n    height: 50px;\\n  }\\n}\\n@media (min-width: 750px) {\\n  .field--10 .field-item {\\n    width: 70px;\\n    height: 70px;\\n  }\\n}\\n.field--15 .field-item {\\n  width: 25px;\\n  height: 25px;\\n}\\n@media (min-width: 575px) {\\n  .field--15 .field-item {\\n    width: 35px;\\n    height: 35px;\\n  }\\n}\\n@media (min-width: 800px) {\\n  .field--15 .field-item {\\n    width: 50px;\\n    height: 50px;\\n  }\\n}\\n@media (min-width: 950px) {\\n  .field--15 .field-item {\\n    width: 60px;\\n    height: 60px;\\n  }\\n}\\n.field--25 .field-item {\\n  width: 15px;\\n  height: 15px;\\n}\\n@media (min-width: 550px) {\\n  .field--25 .field-item {\\n    width: 20px;\\n    height: 20px;\\n  }\\n}\\n@media (min-width: 800px) {\\n  .field--25 .field-item {\\n    width: 30px;\\n    height: 30px;\\n  }\\n}\\n@media (min-width: 1300px) {\\n  .field--25 .field-item {\\n    width: 50px;\\n    height: 50px;\\n  }\\n}\\n.field-item__text {\\n  display: none;\\n}\\n.field-item--open {\\n  background-color: #bbb6c0;\\n  pointer-events: none;\\n}\\n.field-item--open .field-item__text {\\n  display: block;\\n}\\n.field-item--open[value=mine] {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n}\\n.field-item--open[value=\\\"1\\\"] {\\n  color: #314c63;\\n}\\n.field-item--open[value=\\\"2\\\"] {\\n  color: #fae000;\\n}\\n.field-item--open[value=\\\"3\\\"] {\\n  color: #47fa00;\\n}\\n.field-item--open[value=\\\"4\\\"] {\\n  color: #a400ff;\\n}\\n.field-item--open[value=\\\"5\\\"] {\\n  color: #0004fa;\\n}\\n.field-item--open[value=\\\"6\\\"] {\\n  color: #fa7900;\\n}\\n.field-item--open[value=\\\"7\\\"] {\\n  color: #fa00d9;\\n}\\n.field-item--open[value=\\\"8\\\"] {\\n  color: #e61717;\\n}\\n.field-item:not(.field__item--open):hover {\\n  background-color: #c6badc;\\n  cursor: pointer;\\n}\\n.field-item--flag {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-size: cover;\\n}\\n\\n.result {\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  background-color: rgba(207, 226, 253, 0.5);\\n  color: #5500f3;\\n  font-weight: 700;\\n  font-size: 30px;\\n  display: none;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.result__text {\\n  padding: 30px 50px;\\n  box-shadow: 0px 0px 10px #5500f3;\\n}\\n.result--open {\\n  display: flex;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://minesweeper/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://minesweeper/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\r\n\r\nconst body = document.body;\r\n\r\nconst game = document.createElement('div');\r\ngame.classList.add('game-wrapper');\r\nbody.appendChild(game);\r\n\r\nlet fieldSize = 10;\r\nconst level = document.createElement('div');\r\nlevel.classList.add('level');\r\nconst levels = [\r\n  { name: 'easy', size: 10 },\r\n  { name: 'medium', size: 15 },\r\n  { name: 'hard', size: 25 },\r\n];\r\nconst btns = levels.map((item) => {\r\n  const { name, size } = item;\r\n  const btn = document.createElement('button');\r\n  btn.classList.add('level__btn');\r\n  btn.innerText = `${name}: ${size}x${size}`;\r\n  btn.addEventListener('click', () => {\r\n    fieldSize = size;\r\n    startNewGame();\r\n    const btnSelect = document.querySelector('.level__btn--select');\r\n    if (btnSelect) {\r\n      btnSelect.classList.remove('level__btn--select');\r\n    }\r\n    btn.classList.add('level__btn--select');\r\n    field.innerHTML = '';\r\n    field.className = `field field--${size}`;\r\n    items = [];\r\n    setItems();\r\n    field.append(...items, result);\r\n  });\r\n  return btn;\r\n});\r\nlevel.append(...btns);\r\ngame.appendChild(level);\r\n\r\nconst rangeWrapper = document.createElement('div');\r\nrangeWrapper.classList.add('range-wrapper');\r\ngame.appendChild(rangeWrapper);\r\nconst range = document.createElement('input');\r\nrange.setAttribute('type', 'range');\r\nrange.setAttribute('min', '10');\r\nrange.setAttribute('max', '99');\r\nrange.setAttribute('value', '10');\r\nrange.classList.add('range');\r\nconst value = document.createElement('div');\r\nvalue.innerText = `${range.value} mines`;\r\nrange.addEventListener('input', () => {\r\n  value.innerText = `${range.value} mines`;\r\n  mineCounterNum.innerText = range.value;\r\n});\r\nrangeWrapper.appendChild(range);\r\nrangeWrapper.appendChild(value);\r\n\r\nconst counter = document.createElement('div');\r\ncounter.classList.add('counter');\r\ngame.appendChild(counter);\r\nconst mineCounter = document.createElement('div');\r\nmineCounter.classList.add('counter__item');\r\nconst mineCounterText = document.createElement('div');\r\nmineCounterText.classList.add('counter__text');\r\nmineCounterText.innerText = 'Mines remaining:';\r\nconst mineCounterNum = document.createElement('div');\r\nmineCounterNum.classList.add('counter__num');\r\nmineCounterNum.innerText = range.value;\r\nmineCounter.append(mineCounterText, mineCounterNum);\r\nconst flagCounter = document.createElement('div');\r\nflagCounter.classList.add('counter__item');\r\nconst flagCounterText = document.createElement('div');\r\nflagCounterText.classList.add('counter__text');\r\nflagCounterText.innerText = 'Used flags:';\r\nconst flagCounterNum = document.createElement('div');\r\nflagCounterNum.classList.add('counter__num');\r\nflagCounterNum.innerText = 0;\r\nflagCounter.append(flagCounterText, flagCounterNum);\r\ncounter.append(mineCounter, flagCounter);\r\n\r\nconst btnReload = document.createElement('button');\r\nbtnReload.classList.add('btn-reload');\r\nbtnReload.innerText = 'new game';\r\nbtnReload.addEventListener('click', startNewGame);\r\ngame.appendChild(btnReload);\r\n\r\nconst field = document.createElement('div');\r\nfield.className = 'field field--10';\r\ngame.appendChild(field);\r\n\r\nconst result = document.createElement('div');\r\nresult.classList.add('result');\r\nfield.appendChild(result);\r\nconst resultText = document.createElement('div');\r\nresultText.classList.add('result__text');\r\nresult.appendChild(resultText);\r\n\r\nlet mines = [];\r\n\r\nlet items = [];\r\n\r\nfunction setItems() {\r\n  for (let i = 0; i < fieldSize ** 2; i += 1) {\r\n    const item = document.createElement('div');\r\n    item.classList.add('field__item', 'field-item');\r\n    item.setAttribute('num', i);\r\n    item.addEventListener('click', (e) => {\r\n      const num = Number(item.getAttribute('num'));\r\n      if (mines.length === 0) {\r\n        setMines(num);\r\n        setValue();\r\n      }\r\n      clickItem(item, num);\r\n    });\r\n    item.addEventListener('contextmenu', (e) => {\r\n      e.preventDefault();\r\n      if (!item.classList.contains('field-item--open')) {\r\n        const mineCount = Number(mineCounterNum.textContent);\r\n        const flagCount = Number(flagCounterNum.textContent);\r\n        if (item.classList.contains('field-item--flag')) {\r\n          item.classList.remove('field-item--flag');\r\n          mineCounterNum.innerText = mineCount + 1;\r\n          flagCounterNum.innerText = flagCount - 1;\r\n        } else {\r\n          item.classList.add('field-item--flag');\r\n          mineCounterNum.innerText = mineCount - 1;\r\n          flagCounterNum.innerText = flagCount + 1;\r\n        }\r\n      }\r\n    });\r\n    items.push(item);\r\n  }\r\n}\r\nsetItems();\r\nfield.append(...items);\r\n\r\nfunction setMines(num) {\r\n  const count = Number(range.value);\r\n  const size = fieldSize ** 2;\r\n  while (mines.length < count) {\r\n    const mine = Math.floor(Math.random() * size);\r\n    if (mine !== num && !mines.includes(mine)) {\r\n      mines.push(mine);\r\n    }\r\n  }\r\n}\r\n\r\nfunction setValue() {\r\n  items.forEach((item, i) => {\r\n    let value = '';\r\n    if (mines.includes(i)) {\r\n      value = 'mine';\r\n    } else {\r\n      value = getCount(i);\r\n    }\r\n    item.setAttribute('value', value);\r\n    const itemNum = document.createElement('div');\r\n    itemNum.classList.add('field-item__text');\r\n    if (value !== 0 && value !== 'mine') {\r\n      itemNum.innerHTML = value;\r\n    }\r\n    item.appendChild(itemNum);\r\n  });\r\n}\r\n\r\nfunction clickItem(item, i) {\r\n  if (item.classList.contains('field-item--flag')) {\r\n    return;\r\n  }\r\n  item.classList.add('field-item--open');\r\n  const value = item.getAttribute('value');\r\n  if (value === 'mine') {\r\n    result.classList.add('result--open');\r\n    resultText.innerHTML = 'Game over. Try again';\r\n    const mines = document.querySelectorAll('.field-item[value=\"mine\"]');\r\n    mines.forEach((mine) => mine.classList.add('field-item--open'));\r\n  } else if (checkWin()) {\r\n    result.classList.add('result--open');\r\n    resultText.innerHTML = 'Hooray! You win! You found all mines';\r\n  }\r\n  if (Number(value) === 0) {\r\n    openCell(i);\r\n  }\r\n}\r\n\r\nfunction getCount(num) {\r\n  let cells = getAdjacentCell(num);\r\n  const count = cells.filter((cell) => mines.includes(cell)).length;\r\n  return count;\r\n}\r\n\r\nfunction openCell(num) {\r\n  let cells = getAdjacentCell(num);\r\n  cells.forEach((cell) => {\r\n    const el = items[cell];\r\n    if (el.classList.contains('field-item--open')) {\r\n      return;\r\n    }\r\n    el.classList.add('field-item--open');\r\n    const value = Number(el.getAttribute('value'));\r\n    if (value === 0) {\r\n      openCell(cell);\r\n    }\r\n  });\r\n}\r\n\r\nfunction getAdjacentCell(num) {\r\n  if (fieldSize === 10) {\r\n    let cells = [num + 10, num - 10];\r\n    if (num % 10 === 0) {\r\n      cells = [...cells, num + 1, num + 11, num - 9];\r\n    } else if (num % 10 === 9) {\r\n      cells = [...cells, num - 1, num + 9, num - 11];\r\n    } else {\r\n      cells = [\r\n        ...cells,\r\n        num + 1,\r\n        num - 1,\r\n        num + 9,\r\n        num + 11,\r\n        num - 9,\r\n        num - 11,\r\n      ];\r\n    }\r\n    return cells.filter((cell) => cell >= 0 && cell < 100);\r\n  } else if (fieldSize === 15) {\r\n    let cells = [num + 15, num - 15];\r\n    if (num % 15 === 0) {\r\n      cells = [...cells, num + 1, num + 16, num - 14];\r\n    } else if (num % 15 === 14) {\r\n      cells = [...cells, num - 1, num + 14, num - 16];\r\n    } else {\r\n      cells = [\r\n        ...cells,\r\n        num + 1,\r\n        num - 1,\r\n        num + 14,\r\n        num + 16,\r\n        num - 14,\r\n        num - 16,\r\n      ];\r\n    }\r\n    return cells.filter((cell) => cell >= 0 && cell < 225);\r\n  } else if (fieldSize === 25) {\r\n    let cells = [num + 25, num - 25];\r\n    if (num % 25 === 0) {\r\n      cells = [...cells, num + 1, num + 26, num - 24];\r\n    } else if (num % 25 === 24) {\r\n      cells = [...cells, num - 1, num + 24, num - 26];\r\n    } else {\r\n      cells = [\r\n        ...cells,\r\n        num + 1,\r\n        num - 1,\r\n        num + 24,\r\n        num + 26,\r\n        num - 24,\r\n        num - 26,\r\n      ];\r\n    }\r\n    return cells.filter((cell) => cell >= 0 && cell < 625);\r\n  }\r\n}\r\n\r\nfunction checkWin() {\r\n  let win = true;\r\n  const cells = items.filter((cell) => cell.getAttribute('value') !== 'mine');\r\n  cells.forEach((cell) => {\r\n    if (!cell.classList.contains('field-item--open')) {\r\n      win = false;\r\n    }\r\n  });\r\n  return win;\r\n}\r\n\r\nfunction startNewGame() {\r\n  const openItems = document.querySelectorAll('.field-item--open');\r\n  openItems.forEach((item) => {\r\n    item.classList.remove('field-item--open');\r\n  });\r\n  const flagItems = document.querySelectorAll('.field-item--flag');\r\n  flagItems.forEach((item) => {\r\n    item.classList.remove('field-item--flag');\r\n  });\r\n  result.classList.remove('result--open');\r\n  mineCounterNum.innerText = range.value;\r\n  flagCounterNum.innerText = 0;\r\n  mines = [];\r\n  items.forEach((item) => {\r\n    item.removeAttribute('value');\r\n    item.innerHTML = '';\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/app.js?");

/***/ }),

/***/ "./src/assets/image/boom.jpg":
/*!***********************************!*\
  !*** ./src/assets/image/boom.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d569e818a552b48ccad8.jpg\";\n\n//# sourceURL=webpack://minesweeper/./src/assets/image/boom.jpg?");

/***/ }),

/***/ "./src/assets/image/flag.jpg":
/*!***********************************!*\
  !*** ./src/assets/image/flag.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"001c9b604e0b33db7f8d.jpg\";\n\n//# sourceURL=webpack://minesweeper/./src/assets/image/flag.jpg?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;