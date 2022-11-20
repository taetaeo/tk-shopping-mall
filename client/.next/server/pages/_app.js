"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/layouts/index.tsx":
/*!**************************************!*\
  !*** ./components/layouts/index.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Layout = ({ children  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"layout\",\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\태권\\\\OneDrive\\\\바탕 화면\\\\next-boilerplate\\\\client\\\\components\\\\layouts\\\\index.tsx\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBeUM7QUFFekMsTUFBTUMsU0FBUyxDQUFDLEVBQUVDLFNBQVEsRUFBMkIsR0FBSztJQUN4RCxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBSUMsV0FBVTtzQkFBVUY7Ozs7Ozs7QUFHL0I7QUFFQSxpRUFBZUQsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvbGF5b3V0cy9pbmRleC50c3g/Mzk0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPntjaGlsZHJlbn08L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsImNoaWxkcmVuIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layouts/index.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layouts */ \"./components/layouts/index.tsx\");\n/* harmony import */ var _styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globalStyles */ \"./styles/globalStyles.ts\");\n\n\n\n\n\nconst CustomApp = ({ Component , pageProps  })=>{\n    const clientRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const getClient = ()=>{\n        if (!clientRef.current) clientRef.current = new react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient({\n            defaultOptions: {\n                queries: {\n                    //  refetchInterval : 10000,\n                    refetchOnWindowFocus: false\n                }\n            }\n        });\n        return clientRef.current;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {\n        client: getClient(),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__.GlobalStyle, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\태권\\\\OneDrive\\\\바탕 화면\\\\next-boilerplate\\\\client\\\\pages\\\\_app.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\태권\\\\OneDrive\\\\바탕 화면\\\\next-boilerplate\\\\client\\\\pages\\\\_app.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\태권\\\\OneDrive\\\\바탕 화면\\\\next-boilerplate\\\\client\\\\pages\\\\_app.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\태권\\\\OneDrive\\\\바탕 화면\\\\next-boilerplate\\\\client\\\\pages\\\\_app.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\nCustomApp.getInitialProps = async ({ ctx , Component  })=>{\n    const pageProps = await Component.getInitialProps?.(ctx);\n    return {\n        pageProps\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFzQztBQUN5QjtBQUVwQjtBQUNVO0FBRXJELE1BQU1NLFlBQVksQ0FBQyxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxHQUFLO0lBQzlDLE1BQU1DLFlBQVlSLDZDQUFNQSxDQUFDLElBQUk7SUFDN0IsTUFBTVMsWUFBWSxJQUFNO1FBQ3RCLElBQUksQ0FBQ0QsVUFBVUUsT0FBTyxFQUNwQkYsVUFBVUUsT0FBTyxHQUFHLElBQUlULG9EQUFXQSxDQUFDO1lBQ2xDVSxnQkFBZ0I7Z0JBQ2RDLFNBQVM7b0JBQ1AsNEJBQTRCO29CQUM1QkMsc0JBQXNCLEtBQUs7Z0JBQzdCO1lBQ0Y7UUFDRjtRQUNGLE9BQU9MLFVBQVVFLE9BQU87SUFDMUI7SUFDQSxxQkFDRSw4REFBQ1IsNERBQW1CQTtRQUFDWSxRQUFRTDtrQkFDM0IsNEVBQUNOLDJEQUFNQTs7OEJBQ0wsOERBQUNDLDZEQUFXQTs7Ozs7OEJBQ1osOERBQUNFO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDO0FBRUFGLFVBQVVVLGVBQWUsR0FBRyxPQUFPLEVBQUVDLElBQUcsRUFBRVYsVUFBUyxFQUFFLEdBQUs7SUFDeEQsTUFBTUMsWUFBWSxNQUFNRCxVQUFVUyxlQUFlLEdBQUdDO0lBQ3BELE9BQU87UUFBRVQ7SUFBVTtBQUNyQjtBQUVBLGlFQUFlRixTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XHJcbmltcG9ydCB7IEh5ZHJhdGUgfSBmcm9tIFwicmVhY3QtcXVlcnkvaHlkcmF0aW9uXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0c1wiO1xyXG5pbXBvcnQgeyBHbG9iYWxTdHlsZSB9IGZyb20gXCIuLi9zdHlsZXMvZ2xvYmFsU3R5bGVzXCI7XHJcblxyXG5jb25zdCBDdXN0b21BcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgY29uc3QgY2xpZW50UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGdldENsaWVudCA9ICgpID0+IHtcclxuICAgIGlmICghY2xpZW50UmVmLmN1cnJlbnQpXHJcbiAgICAgIGNsaWVudFJlZi5jdXJyZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KHtcclxuICAgICAgICBkZWZhdWx0T3B0aW9uczoge1xyXG4gICAgICAgICAgcXVlcmllczoge1xyXG4gICAgICAgICAgICAvLyAgcmVmZXRjaEludGVydmFsIDogMTAwMDAsXHJcbiAgICAgICAgICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICByZXR1cm4gY2xpZW50UmVmLmN1cnJlbnQ7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtnZXRDbGllbnQoKX0+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuQ3VzdG9tQXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCwgQ29tcG9uZW50IH0pID0+IHtcclxuICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzPy4oY3R4KTtcclxuICByZXR1cm4geyBwYWdlUHJvcHMgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUFwcDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiTGF5b3V0IiwiR2xvYmFsU3R5bGUiLCJDdXN0b21BcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnRSZWYiLCJnZXRDbGllbnQiLCJjdXJyZW50IiwiZGVmYXVsdE9wdGlvbnMiLCJxdWVyaWVzIiwicmVmZXRjaE9uV2luZG93Rm9jdXMiLCJjbGllbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globalStyles.ts":
/*!********************************!*\
  !*** ./styles/globalStyles.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalStyle\": () => (/* binding */ GlobalStyle)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-reset */ \"styled-reset\");\n/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_reset__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\r\n    ${styled_reset__WEBPACK_IMPORTED_MODULE_1__.reset}\r\n    :focus {\r\n        outline: none;\r\n        border: none;\r\n    }\r\n    ::-webkit-scrollbar {\r\n        display: none;\r\n    }\r\n    html{\r\n        font-size: 11px;\r\n        -webkit-text-size-adjust: none;\r\n        font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;       \r\n        font-display: fallback;\r\n        -ms-overflow-style: none;\r\n        scrollbar-width: none;\r\n    }\r\n    a{\r\n      text-decoration: none;\r\n    }\r\n    button {\r\n        background: none;\r\n        padding: 0;\r\n        border: none;\r\n        cursor: pointer;\r\n        &:disabled {\r\n            cursor: default;\r\n            fill: #f2f3f4;\r\n        }\r\n    }\r\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvZ2xvYmFsU3R5bGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNEO0FBQ2pCO0FBRTlCLE1BQU1FLGNBQWNGLGdFQUFpQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3R5bGVzL2dsb2JhbFN0eWxlcy50cz81NGYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHJlc2V0IH0gZnJvbSBcInN0eWxlZC1yZXNldFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgICAke3Jlc2V0fVxyXG4gICAgOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBodG1se1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LGhlbHZldGljYSxBcHBsZSBTRCBHb3RoaWMgTmVvLHNhbnMtc2VyaWY7ICAgICAgIFxyXG4gICAgICAgIGZvbnQtZGlzcGxheTogZmFsbGJhY2s7XHJcbiAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcclxuICAgIH1cclxuICAgIGF7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgICAgZmlsbDogI2YyZjNmNDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVHbG9iYWxTdHlsZSIsInJlc2V0IiwiR2xvYmFsU3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/globalStyles.ts\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-reset":
/*!*******************************!*\
  !*** external "styled-reset" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("styled-reset");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();