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

/***/ "(app-pages-browser)/./src/components/editForm.tsx":
/*!*************************************!*\
  !*** ./src/components/editForm.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EditForm: function() { return /* binding */ EditForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ui_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/dialog */ \"(app-pages-browser)/./src/components/ui/dialog.tsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ EditForm auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction EditForm(param) {\n    let { name, _id, updatedAt } = param;\n    _s();\n    const [newName, setNewName] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(name || undefined);\n    const editTodo = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].put(\"/api/todos/\".concat(_id), {});\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_1__.Dialog, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogTrigger, {\n                asChild: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    variant: \"default\",\n                    children: \"Edit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\editForm.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\editForm.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogContent, {\n                className: \"sm:max-w-[425px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogHeader, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogTitle, {\n                                children: \"Edit profile\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\editForm.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogDescription, {\n                                children: \"Make changes to your Todo here. Click save when you're done.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\editForm.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\editForm.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid gap-4 py-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    className: \"w-full\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\editForm.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\editForm.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-4 items-center gap-4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\editForm.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\editForm.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogFooter, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogClose, {\n                            asChild: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                type: \"submit\",\n                                children: \"Save changes\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\editForm.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\editForm.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\editForm.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\editForm.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\guilh\\\\OneDrive\\\\Documentos\\\\javascript\\\\React\\\\Projetos\\\\todo-list\\\\todo-list\\\\src\\\\components\\\\editForm.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(EditForm, \"7P+9DRZLTAhWjrFHW90zZtdRlKk=\");\n_c = EditForm;\nvar _c;\n$RefreshReg$(_c, \"EditForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2VkaXRGb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBWXFCO0FBQ2dCO0FBQ0Y7QUFDVDtBQUNPO0FBRTFCLFNBQVNZLFNBQVMsS0FBNkI7UUFBN0IsRUFBRUMsSUFBSSxFQUFFQyxHQUFHLEVBQUVDLFNBQVMsRUFBTyxHQUE3Qjs7SUFDdkIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDRSxRQUFRSztJQUUvQyxNQUFNQyxXQUFXO1FBQ2ZULDZDQUFLQSxDQUFDVSxHQUFHLENBQUMsY0FBa0IsT0FBSk4sTUFBTyxDQUFDO0lBQ2xDO0lBRUEscUJBQ0UsOERBQUNkLDhDQUFNQTs7MEJBQ0wsOERBQUNPLHFEQUFhQTtnQkFBQ2MsT0FBTzswQkFDcEIsNEVBQUNiLDhDQUFNQTtvQkFBQ2MsU0FBUTs4QkFBVTs7Ozs7Ozs7Ozs7MEJBRTVCLDhEQUFDcEIscURBQWFBO2dCQUFDcUIsV0FBVTs7a0NBQ3ZCLDhEQUFDbEIsb0RBQVlBOzswQ0FDWCw4REFBQ0MsbURBQVdBOzBDQUFDOzs7Ozs7MENBQ2IsOERBQUNILHlEQUFpQkE7MENBQUM7Ozs7Ozs7Ozs7OztrQ0FJckIsOERBQUNxQjt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFJRCxXQUFVOzBDQUNiLDRFQUFDZCw0Q0FBS0E7b0NBQUNjLFdBQVU7Ozs7Ozs7Ozs7OzBDQUVuQiw4REFBQ0M7Z0NBQUlELFdBQVU7Ozs7Ozs7Ozs7OztrQ0FFakIsOERBQUNuQixvREFBWUE7a0NBQ1gsNEVBQUNILG1EQUFXQTs0QkFBQ29CLE9BQU87c0NBQ2xCLDRFQUFDYiw4Q0FBTUE7Z0NBQUNpQixNQUFLOzBDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxDO0dBakNnQmI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZWRpdEZvcm0udHN4PzhjNWUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBJVG9kbyB9IGZyb20gXCJAL2ludGVyZmFjZXMvSVRvZG9cIjtcclxuaW1wb3J0IHtcclxuICBEaWFsb2csXHJcbiAgRGlhbG9nQ2xvc2UsXHJcbiAgRGlhbG9nQ29udGVudCxcclxuICBEaWFsb2dEZXNjcmlwdGlvbixcclxuICBEaWFsb2dGb290ZXIsXHJcbiAgRGlhbG9nSGVhZGVyLFxyXG4gIERpYWxvZ1RpdGxlLFxyXG4gIERpYWxvZ1RyaWdnZXIsXHJcbn0gZnJvbSBcIi4vdWkvZGlhbG9nXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL3VpL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuL3VpL2lucHV0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBFZGl0Rm9ybSh7IG5hbWUsIF9pZCwgdXBkYXRlZEF0IH06IGFueSkge1xyXG4gIGNvbnN0IFtuZXdOYW1lLCBzZXROZXdOYW1lXSA9IHVzZVN0YXRlKG5hbWUgfHwgdW5kZWZpbmVkKTtcclxuXHJcbiAgY29uc3QgZWRpdFRvZG8gPSAoKSA9PiB7XHJcbiAgICBheGlvcy5wdXQoYC9hcGkvdG9kb3MvJHtfaWR9YCwge30pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RGlhbG9nPlxyXG4gICAgICA8RGlhbG9nVHJpZ2dlciBhc0NoaWxkPlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRlZmF1bHRcIj5FZGl0PC9CdXR0b24+XHJcbiAgICAgIDwvRGlhbG9nVHJpZ2dlcj5cclxuICAgICAgPERpYWxvZ0NvbnRlbnQgY2xhc3NOYW1lPVwic206bWF4LXctWzQyNXB4XVwiPlxyXG4gICAgICAgIDxEaWFsb2dIZWFkZXI+XHJcbiAgICAgICAgICA8RGlhbG9nVGl0bGU+RWRpdCBwcm9maWxlPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgIDxEaWFsb2dEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgTWFrZSBjaGFuZ2VzIHRvIHlvdXIgVG9kbyBoZXJlLiBDbGljayBzYXZlIHdoZW4geW91J3JlIGRvbmUuXHJcbiAgICAgICAgICA8L0RpYWxvZ0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgIDwvRGlhbG9nSGVhZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNCBweS00XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8SW5wdXQgY2xhc3NOYW1lPVwidy1mdWxsXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IGl0ZW1zLWNlbnRlciBnYXAtNFwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxEaWFsb2dGb290ZXI+XHJcbiAgICAgICAgICA8RGlhbG9nQ2xvc2UgYXNDaGlsZD5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2F2ZSBjaGFuZ2VzPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0RpYWxvZ0Nsb3NlPlxyXG4gICAgICAgIDwvRGlhbG9nRm9vdGVyPlxyXG4gICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICA8L0RpYWxvZz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJEaWFsb2ciLCJEaWFsb2dDbG9zZSIsIkRpYWxvZ0NvbnRlbnQiLCJEaWFsb2dEZXNjcmlwdGlvbiIsIkRpYWxvZ0Zvb3RlciIsIkRpYWxvZ0hlYWRlciIsIkRpYWxvZ1RpdGxlIiwiRGlhbG9nVHJpZ2dlciIsIkJ1dHRvbiIsIklucHV0IiwiYXhpb3MiLCJ1c2VTdGF0ZSIsIkVkaXRGb3JtIiwibmFtZSIsIl9pZCIsInVwZGF0ZWRBdCIsIm5ld05hbWUiLCJzZXROZXdOYW1lIiwidW5kZWZpbmVkIiwiZWRpdFRvZG8iLCJwdXQiLCJhc0NoaWxkIiwidmFyaWFudCIsImNsYXNzTmFtZSIsImRpdiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/editForm.tsx\n"));

/***/ })

});