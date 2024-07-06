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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/eaters-collective-unsplash.jpg */ \"./src/images/eaters-collective-unsplash.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --bg-light: rgba(255, 255, 255, 1);\n  --bg-dark: rgba(0, 0, 0, 0.2);\n  --bg-darker: rgba(0, 0, 0, 0.9);\n  --border-radius: 0.5rem;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 16px;\n  background-color: var(--bg-dark);\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  min-height: 100vh;\n  padding: 10px 10px;\n}\n\nbody > h1 {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n\n#navbar {\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 1rem;\n  width: clamp(520px, 80vw, 1200px);\n  justify-content: center;\n}\n\n#navbar button {\n  background-color: var(--bg-dark);\n  border: 1px solid var(--bg-darker);\n  border-radius: var(--border-radius) var(--border-radius) 0 0;\n  height: 3rem;\n  width: 10rem;\n  cursor: pointer;\n  font-size: 1rem;\n  font-weight: 300;\n  border-bottom: none;\n}\n\n#navbar button.active-tab {\n  background-color: var(--bg-darker);\n  color: white;\n}\n\n#content {\n  width: clamp(550px, 90vw, 1200px);\n  background-color: var(--bg-light);\n  /* border: 1px solid var(--bg-darker); */\n  border-radius: var(--border-radius);\n  margin-bottom: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  justify-content: center;\n}\n\n#homepage {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3rem;\n}\n\n#introduction {\n  height: 80vh;\n  width: clamp(550px, 90vw, 1200px);\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  border-radius: var(--border-radius);\n  padding: 3rem;\n  display: flex;\n  align-items: center;\n}\n\n#introductionText {\n  width: clamp(110px, 20vw, 500px);\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  vertical-align: middle;\n}\n\n#introductionText > p {\n  font-size: 1.2rem;\n}\n\n#about-div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  max-width: 1000px;\n  padding: 1rem;\n}\n\n#about-div div:nth-child(2) {\n  padding: 0 2rem;\n}\n\n#about-div > div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  font-size: 1.2rem;\n}\n\n#reviews {\n  width: clamp(550px, 90vw, 1200px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--bg-dark);\n  gap: 1rem;\n  padding: 4rem 2rem;\n  background-color: black;\n  color: white;\n  border-radius: var(--border-radius);\n}\n\n#reviews > div {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  gap: 1rem;\n  padding: 0 2rem;\n}\n\n#reviews > div > div {\n  display: flex;\n  gap: 0.2rem;\n  flex-direction: column;\n  background-color: grey;\n  border-radius: var(--border-radius);\n  padding: 1rem;\n}\n\n#reviews > div > div > div {\n  display: flex;\n  justify-content: space-between;\n}\n\n#reviews p:nth-child(1) {\n  font-size: 1.5rem;\n}\n\n#reviews p:last-child {\n  align-self: end;\n}\n\n#menu-container {\n  padding: 2rem 5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 2rem;\n  width: clamp(550px, 90vw, 1200px);\n}\n\n.menu-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.menu-section h2 {\n  text-align: center;\n  align-self: stretch;\n  font-size: 2rem;\n  background-color: var(--bg-darker);\n  color: white;\n  padding: 0.2rem 0.5rem;\n  border-radius: var(--border-radius);\n}\n\n.menu-section ul {\n  list-style: none;\n}\n\n.menu-section li {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1rem;;\n  padding: 0 2rem;\n  font-size: 1.2rem;\n}\n\n#contact-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-self: center;\n  gap: 2rem;\n  width: 60vw;\n}\n\n#contact-section > div {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\nfooter {\n  width: clamp(550px, 90vw, 1200px);\n  padding: 1rem;\n  text-align: center;\n  background-color: var(--bg-dark);\n  border-radius: var(--border-radius)\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact_us__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact-us */ \"./src/modules/contact-us.js\");\n\n\n\n\n\nconst headerSection = document.getElementById('header');\nconst restaurantName = document.createElement('h1');\nrestaurantName.textContent = \"Gojo's Bistroe\"\ndocument.body.insertBefore(restaurantName, headerSection);\n\nfunction resetPage(){\n  const contentSection = document.getElementById('content');\n  contentSection.textContent = \"\";\n\n  const navButtons = document.querySelectorAll('#navbar button');\n  navButtons.forEach(button => {\n    button.classList.remove('active-tab');\n  });\n}\n\nfunction highlightTab(button) {\n  button.classList.add('active-tab');\n}\n\nconst contentContainer = document.getElementById('content');\n\nconst navBar= document.getElementById('navbar');\nnavBar.addEventListener('click', (event) => {\n  if (event.target.tagName === 'BUTTON') {\n    resetPage();\n    highlightTab(event.target);\n    if (event.target.textContent === 'HOME'){\n      contentContainer.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n    } else if (event.target.textContent === 'MENU') {\n      contentContainer.appendChild((0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    } else if (event.target.textContent === 'CONTACT US') {\n      contentContainer.appendChild((0,_modules_contact_us__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n    }\n  }\n})\n\n// To load homepage by default\nwindow.addEventListener('load', () => {\n  const homeButton = document.querySelector('#navbar button:first-child');\n  homeButton.click();\n})\n\n//# sourceURL=webpack://top-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact-us.js":
/*!***********************************!*\
  !*** ./src/modules/contact-us.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactUs)\n/* harmony export */ });\n\n\nfunction contactUs() {\n  const contactDiv = document.createElement('div');\n  contactDiv.id = \"contact-section\"\n\n  const opener = document.createElement('h2');\n  opener.textContent = \"Please feel free to reach out to us\"\n\n  const contactInfo = document.createElement('div');\n\n  const contactAddress = document.createElement('p');\n  contactAddress.textContent = \"Address: 123 Abcdef ghij street, klmno state, pqrstu\";\n\n  const contactNumber = document.createElement('p');\n  contactNumber.textContent = \"Phone Number: +012-3456789\";\n\n  contactInfo.appendChild(contactAddress);\n  contactInfo.appendChild(contactNumber);\n\n  contactDiv.appendChild(opener);\n  contactDiv.appendChild(contactInfo);\n  return contactDiv\n}\n\n//# sourceURL=webpack://top-restaurant-page/./src/modules/contact-us.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _jsonfiles_reviews_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsonfiles/reviews.json */ \"./src/modules/jsonfiles/reviews.json\");\n\n\nfunction homePage() {\n  const homeContainer = document.createElement('div');\n  homeContainer.id = \"homepage\";\n\n  const introDiv = document.createElement('div');\n  introDiv.id = \"introduction\";\n\n  const introText = document.createElement('div');\n  introText.id = \"introductionText\";\n\n  const paragraphOne = document.createElement('h3');\n  paragraphOne.textContent = \"BRING YOUR TASTE BUDS TO LIFE...\";\n\n  const paragraphTwo = document.createElement('p');\n  paragraphTwo.textContent = \"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet\";\n\n  const paragraphThree = document.createElement('p');\n  paragraphThree.textContent = \"Open Everyday - 8AM to 8PM\";\n\n  introText.appendChild(paragraphOne);\n  introText.appendChild(paragraphTwo);\n  introText.appendChild(paragraphThree);\n  introDiv.appendChild(introText);\n\n  const aboutDiv = document.createElement('div');\n  aboutDiv.id = 'about-div'\n\n  const aboutTitleDiv = document.createElement('h2');\n  aboutTitleDiv.textContent = \"ABOUT US\";\n\n  const aboutParagraphOne = document.createElement('p');\n  aboutParagraphOne.textContent= \"Welcome to Gojo's Bistroe, your go-to destination for delightful culinary experiences. At Gojo's, we are passionate about creating dishes that are both delicious and memorable, using the freshest ingredients to ensure every bite is a treat. Whether you're here for a quick lunch or a leisurely dinner, our cozy atmosphere and friendly staff will make you feel right at home.\"\n\n  const aboutParagraphTwo = document.createElement('p');\n  aboutParagraphTwo.textContent = \"Our menu offers a variety of options to satisfy every palate, from classic comfort foods to innovative new dishes. We take pride in our commitment to quality and customer satisfaction, making sure each visit to Gojo's Bistroe is a pleasant one. Join us and enjoy a meal that’s prepared with love and served with a smile.\"\n\n  const aboutParagraphDiv = document.createElement('div');\n\n  aboutParagraphDiv.appendChild(aboutParagraphOne)\n  aboutParagraphDiv.appendChild(aboutParagraphTwo)\n\n  aboutDiv.appendChild(aboutTitleDiv);\n  aboutDiv.appendChild(aboutParagraphDiv);\n\n  const reviewsDiv = document.createElement('div');\n  reviewsDiv.id = 'reviews';\n\n  const reviewsTitleDiv = document.createElement('h2');\n  reviewsTitleDiv.textContent = \"WHAT OUR CUSTOMERS SAY\";\n\n  const reviewsDivBody = document.createElement('div');\n\n  reviewsDiv.appendChild(reviewsTitleDiv);\n  reviewsDiv.appendChild(reviewsDivBody);\n\n  Object.keys(_jsonfiles_reviews_json__WEBPACK_IMPORTED_MODULE_0__.reviews).forEach(item => {\n    const individualReview = document.createElement('div');\n\n    const reviewer = document.createElement('p');\n    reviewer.textContent = _jsonfiles_reviews_json__WEBPACK_IMPORTED_MODULE_0__.reviews[item].reviewer;\n\n    const comments = document.createElement('p');\n    comments.textContent = _jsonfiles_reviews_json__WEBPACK_IMPORTED_MODULE_0__.reviews[item].comments;\n\n    const rating = document.createElement('p');\n    rating.textContent = `${_jsonfiles_reviews_json__WEBPACK_IMPORTED_MODULE_0__.reviews[item].rating}/5`;\n\n    const date = document.createElement('p');\n    date.textContent = _jsonfiles_reviews_json__WEBPACK_IMPORTED_MODULE_0__.reviews[item].date;\n\n    const firsttLine = document.createElement('div');\n\n    firsttLine.appendChild(reviewer);\n    firsttLine.appendChild(rating);\n\n    individualReview.appendChild(firsttLine);\n    individualReview.appendChild(comments);\n    individualReview.appendChild(date);\n    \n    reviewsDivBody.appendChild(individualReview);\n  })\n\n  homeContainer.appendChild(introDiv);\n  homeContainer.appendChild(aboutDiv);\n  homeContainer.appendChild(reviewsDiv);\n\n  return homeContainer;\n}\n\n//# sourceURL=webpack://top-restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ restaurantMenu)\n/* harmony export */ });\n/* harmony import */ var _jsonfiles_menu_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsonfiles/menu.json */ \"./src/modules/jsonfiles/menu.json\");\n\n\n// function \n\nfunction restaurantMenu() {\n  const menuContainer = document.createElement('div');\n  menuContainer.id = 'menu-container';\n\n  Object.keys(_jsonfiles_menu_json__WEBPACK_IMPORTED_MODULE_0__).forEach(section => {\n    const sectionDiv = document.createElement('div');\n    sectionDiv.classList.add('menu-section');\n\n    const sectionTitle = document.createElement('h2');\n    sectionTitle.textContent = section;\n    sectionDiv.appendChild(sectionTitle);\n\n    const ul = document.createElement('ul');\n    _jsonfiles_menu_json__WEBPACK_IMPORTED_MODULE_0__[section].forEach(item => {\n      const li = document.createElement('li');\n\n      const dishName = document.createElement('span');\n      dishName.textContent = item[0];\n\n      const dishPrice = document.createElement('span');\n      dishPrice.textContent = item[1];\n\n      li.appendChild(dishName);\n      li.appendChild(dishPrice);\n      ul.appendChild(li);\n    });\n    sectionDiv.appendChild(ul);\n    menuContainer.appendChild(sectionDiv);\n  })\n  return menuContainer;\n};\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/modules/menu.js?");

/***/ }),

/***/ "./src/images/eaters-collective-unsplash.jpg":
/*!***************************************************!*\
  !*** ./src/images/eaters-collective-unsplash.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c7c9f2e9a3f69957aad9.jpg\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/images/eaters-collective-unsplash.jpg?");

/***/ }),

/***/ "./src/modules/jsonfiles/menu.json":
/*!*****************************************!*\
  !*** ./src/modules/jsonfiles/menu.json ***!
  \*****************************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"Appetizers\":[[\"Bruschetta\",\"$8.00\"],[\"Stuffed Mushrooms\",\"$9.50\"],[\"Garlic Bread\",\"$5.00\"]],\"Main Courses\":[[\"Grilled Salmon\",\"$18.00\"],[\"Steak Frites\",\"$22.50\"],[\"Chicken Alfredo\",\"$16.00\"]],\"Desserts\":[[\"Cheesecake\",\"$7.00\"],[\"Tiramisu\",\"$8.00\"],[\"Chocolate Mousse\",\"$6.50\"]]}');\n\n//# sourceURL=webpack://top-restaurant-page/./src/modules/jsonfiles/menu.json?");

/***/ }),

/***/ "./src/modules/jsonfiles/reviews.json":
/*!********************************************!*\
  !*** ./src/modules/jsonfiles/reviews.json ***!
  \********************************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"reviews\":[{\"reviewer\":\"John Doe\",\"date\":\"2024-05-01\",\"rating\":5,\"comments\":\"Amazing experience! The food was delicious, and the staff were incredibly friendly and attentive. Highly recommend!\"},{\"reviewer\":\"Jane Smith\",\"date\":\"2024-04-27\",\"rating\":4,\"comments\":\"Great atmosphere and tasty dishes. The service was a bit slow, but overall a very good dining experience.\"},{\"reviewer\":\"Michael Brown\",\"date\":\"2024-04-20\",\"rating\":3,\"comments\":\"The food was average, and the portions were smaller than expected. The ambiance was nice, but I felt it was a bit overpriced.\"},{\"reviewer\":\"Emily Johnson\",\"date\":\"2024-04-15\",\"rating\":5,\"comments\":\"Absolutely loved it! The chef\\'s special was out of this world, and the desserts were to die for. Will definitely be back!\"},{\"reviewer\":\"Chris Lee\",\"date\":\"2024-04-10\",\"rating\":2,\"comments\":\"Not impressed. The food was bland and the service was subpar. The wait time was too long, and it was quite noisy.\"}]}');\n\n//# sourceURL=webpack://top-restaurant-page/./src/modules/jsonfiles/reviews.json?");

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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;