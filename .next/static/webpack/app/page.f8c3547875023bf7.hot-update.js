"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Hero.tsx":
/*!*********************************!*\
  !*** ./app/components/Hero.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Hero)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowDown_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDown!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-down.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Hero(param) {\n    let { setActiveSection } = param;\n    _s();\n    const [displayedText, setDisplayedText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const fullText = \"I'm a Full Stack Developer skilled in building beautiful and functional user interfaces. I enjoy working on projects that utilize both front-end and back-end technologies to create seamless user experiences.\";\n    const typingInterval = 60 * 1000; // 1 minute in milliseconds\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Hero.useEffect\": ()=>{\n            let currentTextIndex = 0;\n            const typeEffect = setInterval({\n                \"Hero.useEffect.typeEffect\": ()=>{\n                    setDisplayedText({\n                        \"Hero.useEffect.typeEffect\": (prev)=>{\n                            if (currentTextIndex < fullText.length) {\n                                currentTextIndex++;\n                                return fullText.slice(0, currentTextIndex);\n                            } else {\n                                clearInterval(typeEffect);\n                                return prev; // Typing is complete\n                            }\n                        }\n                    }[\"Hero.useEffect.typeEffect\"]);\n                }\n            }[\"Hero.useEffect.typeEffect\"], typingInterval / fullText.length); // Adjust typing speed based on total time and length of text\n            return ({\n                \"Hero.useEffect\": ()=>clearInterval(typeEffect)\n            })[\"Hero.useEffect\"]; // Cleanup on component unmount\n        }\n    }[\"Hero.useEffect\"], [\n        fullText\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"home\",\n        className: \"min-h-screen flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-6 flex flex-col md:flex-row items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"md:w-1/2 mb-8 md:mb-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-64 h-64 mx-auto md:w-96 md:h-96\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: \"/thanks.jpg\",\n                            alt: \"Your Name\",\n                            layout: \"fill\",\n                            objectFit: \"cover\",\n                            className: \"rounded-full\"\n                        }, void 0, false, {\n                            fileName: \"/mnt/c/Users/USER/Desktop/portfolio/portfolio/app/components/Hero.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/Users/USER/Desktop/portfolio/portfolio/app/components/Hero.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/mnt/c/Users/USER/Desktop/portfolio/portfolio/app/components/Hero.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"md:w-1/2 text-center md:text-left\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-4xl md:text-6xl font-bold mb-6\",\n                            children: \"Hi, I'm Agbeble Thanks\"\n                        }, void 0, false, {\n                            fileName: \"/mnt/c/Users/USER/Desktop/portfolio/portfolio/app/components/Hero.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xl md:text-2xl mb-8\",\n                            children: displayedText\n                        }, void 0, false, {\n                            fileName: \"/mnt/c/Users/USER/Desktop/portfolio/portfolio/app/components/Hero.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>{\n                                var _document_getElementById;\n                                setActiveSection('projects');\n                                (_document_getElementById = document.getElementById('projects')) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.scrollIntoView({\n                                    behavior: 'smooth'\n                                });\n                            },\n                            className: \"bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center mx-auto md:mx-0\",\n                            children: [\n                                \"View My Work\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowDown_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    className: \"ml-2 h-5 w-5 animate-float\"\n                                }, void 0, false, {\n                                    fileName: \"/mnt/c/Users/USER/Desktop/portfolio/portfolio/app/components/Hero.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/mnt/c/Users/USER/Desktop/portfolio/portfolio/app/components/Hero.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/c/Users/USER/Desktop/portfolio/portfolio/app/components/Hero.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/mnt/c/Users/USER/Desktop/portfolio/portfolio/app/components/Hero.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/mnt/c/Users/USER/Desktop/portfolio/portfolio/app/components/Hero.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Hero, \"PLbRMeWiJa2NBtcoy3qeXvmWyJg=\");\n_c = Hero;\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0hlcm8udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ2I7QUFDVTtBQU0xQixTQUFTSSxLQUFLLEtBQStCO1FBQS9CLEVBQUVDLGdCQUFnQixFQUFhLEdBQS9COztJQUMzQixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNUSxXQUFZO0lBQ2xCLE1BQU1DLGlCQUFpQixLQUFLLE1BQU0sMkJBQTJCO0lBRTdEUixnREFBU0E7MEJBQUM7WUFDUixJQUFJUyxtQkFBbUI7WUFFdkIsTUFBTUMsYUFBYUM7NkNBQVk7b0JBQzdCTDtxREFBaUIsQ0FBQ007NEJBQ2hCLElBQUlILG1CQUFtQkYsU0FBU00sTUFBTSxFQUFFO2dDQUN0Q0o7Z0NBQ0EsT0FBT0YsU0FBU08sS0FBSyxDQUFDLEdBQUdMOzRCQUMzQixPQUFPO2dDQUNMTSxjQUFjTDtnQ0FDZCxPQUFPRSxNQUFNLHFCQUFxQjs0QkFDcEM7d0JBQ0Y7O2dCQUNGOzRDQUFHSixpQkFBaUJELFNBQVNNLE1BQU0sR0FBRyw2REFBNkQ7WUFFbkc7a0NBQU8sSUFBTUUsY0FBY0w7a0NBQWEsK0JBQStCO1FBQ3pFO3lCQUFHO1FBQUNIO0tBQVM7SUFFYixxQkFDRSw4REFBQ1M7UUFBUUMsSUFBRztRQUFPQyxXQUFVO2tCQUMzQiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDQzt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ2pCLGtEQUFLQTs0QkFDSm1CLEtBQUk7NEJBQ0pDLEtBQUk7NEJBQ0pDLFFBQU87NEJBQ1BDLFdBQVU7NEJBQ1ZMLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBSWhCLDhEQUFDQztvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNNOzRCQUFHTixXQUFVO3NDQUFzQzs7Ozs7O3NDQUNwRCw4REFBQ087NEJBQUVQLFdBQVU7c0NBQTRCYjs7Ozs7O3NDQUN6Qyw4REFBQ3FCOzRCQUNDQyxTQUFTO29DQUVQQztnQ0FEQXhCLGlCQUFpQjtpQ0FDakJ3QiwyQkFBQUEsU0FBU0MsY0FBYyxDQUFDLHlCQUF4QkQsK0NBQUFBLHlCQUFxQ0UsY0FBYyxDQUFDO29DQUFFQyxVQUFVO2dDQUFTOzRCQUMzRTs0QkFDQWIsV0FBVTs7Z0NBQ1g7OENBRUMsOERBQUNoQixxRkFBU0E7b0NBQUNnQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qQztHQXREd0JmO0tBQUFBIiwic291cmNlcyI6WyIvbW50L2MvVXNlcnMvVVNFUi9EZXNrdG9wL3BvcnRmb2xpby9wb3J0Zm9saW8vYXBwL2NvbXBvbmVudHMvSGVyby50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IEFycm93RG93biB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5cbmludGVyZmFjZSBIZXJvUHJvcHMge1xuICBzZXRBY3RpdmVTZWN0aW9uOiAoc2VjdGlvbjogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvKHsgc2V0QWN0aXZlU2VjdGlvbiB9OiBIZXJvUHJvcHMpIHtcbiAgY29uc3QgW2Rpc3BsYXllZFRleHQsIHNldERpc3BsYXllZFRleHRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBmdWxsVGV4dCA9IGBJJ20gYSBGdWxsIFN0YWNrIERldmVsb3BlciBza2lsbGVkIGluIGJ1aWxkaW5nIGJlYXV0aWZ1bCBhbmQgZnVuY3Rpb25hbCB1c2VyIGludGVyZmFjZXMuIEkgZW5qb3kgd29ya2luZyBvbiBwcm9qZWN0cyB0aGF0IHV0aWxpemUgYm90aCBmcm9udC1lbmQgYW5kIGJhY2stZW5kIHRlY2hub2xvZ2llcyB0byBjcmVhdGUgc2VhbWxlc3MgdXNlciBleHBlcmllbmNlcy5gO1xuICBjb25zdCB0eXBpbmdJbnRlcnZhbCA9IDYwICogMTAwMDsgLy8gMSBtaW51dGUgaW4gbWlsbGlzZWNvbmRzXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgY3VycmVudFRleHRJbmRleCA9IDA7XG5cbiAgICBjb25zdCB0eXBlRWZmZWN0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0RGlzcGxheWVkVGV4dCgocHJldikgPT4ge1xuICAgICAgICBpZiAoY3VycmVudFRleHRJbmRleCA8IGZ1bGxUZXh0Lmxlbmd0aCkge1xuICAgICAgICAgIGN1cnJlbnRUZXh0SW5kZXgrKztcbiAgICAgICAgICByZXR1cm4gZnVsbFRleHQuc2xpY2UoMCwgY3VycmVudFRleHRJbmRleCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0eXBlRWZmZWN0KTtcbiAgICAgICAgICByZXR1cm4gcHJldjsgLy8gVHlwaW5nIGlzIGNvbXBsZXRlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIHR5cGluZ0ludGVydmFsIC8gZnVsbFRleHQubGVuZ3RoKTsgLy8gQWRqdXN0IHR5cGluZyBzcGVlZCBiYXNlZCBvbiB0b3RhbCB0aW1lIGFuZCBsZW5ndGggb2YgdGV4dFxuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodHlwZUVmZmVjdCk7IC8vIENsZWFudXAgb24gY29tcG9uZW50IHVubW91bnRcbiAgfSwgW2Z1bGxUZXh0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cImhvbWVcIiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNiBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctMS8yIG1iLTggbWQ6bWItMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy02NCBoLTY0IG14LWF1dG8gbWQ6dy05NiBtZDpoLTk2XCI+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPVwiL3RoYW5rcy5qcGdcIlxuICAgICAgICAgICAgICBhbHQ9XCJZb3VyIE5hbWVcIlxuICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy0xLzIgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIG1kOnRleHQtNnhsIGZvbnQtYm9sZCBtYi02XCI+SGksIEknbSBBZ2JlYmxlIFRoYW5rczwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTJ4bCBtYi04XCI+e2Rpc3BsYXllZFRleHR9PC9wPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0QWN0aXZlU2VjdGlvbigncHJvamVjdHMnKTtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJyk/LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNjAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZmxleCBpdGVtcy1jZW50ZXIgbXgtYXV0byBtZDpteC0wXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBWaWV3IE15IFdvcmtcbiAgICAgICAgICAgIDxBcnJvd0Rvd24gY2xhc3NOYW1lPVwibWwtMiBoLTUgdy01IGFuaW1hdGUtZmxvYXRcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJBcnJvd0Rvd24iLCJIZXJvIiwic2V0QWN0aXZlU2VjdGlvbiIsImRpc3BsYXllZFRleHQiLCJzZXREaXNwbGF5ZWRUZXh0IiwiZnVsbFRleHQiLCJ0eXBpbmdJbnRlcnZhbCIsImN1cnJlbnRUZXh0SW5kZXgiLCJ0eXBlRWZmZWN0Iiwic2V0SW50ZXJ2YWwiLCJwcmV2IiwibGVuZ3RoIiwic2xpY2UiLCJjbGVhckludGVydmFsIiwic2VjdGlvbiIsImlkIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3JjIiwiYWx0IiwibGF5b3V0Iiwib2JqZWN0Rml0IiwiaDEiLCJwIiwiYnV0dG9uIiwib25DbGljayIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Hero.tsx\n"));

/***/ })

});