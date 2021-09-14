"use strict";
self["webpackHotUpdate_N_E"]("pages/posts/allPosts",{

/***/ "./pages/posts/allPosts.jsx":
/*!**********************************!*\
  !*** ./pages/posts/allPosts.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ AllPosts; }
/* harmony export */ });
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/alert */ "./components/alert.jsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\wazig\\Desktop\\nextjs\\nextjs-blog\\pages\\posts\\allPosts.jsx";





var __N_SSG = true;
function AllPosts(_ref) {
  var _this = this;

  var allPostsData = _ref.allPostsData;
  console.log(allPostsData);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    AllPosts: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
      className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().headingMd),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: "[Your Self Introduction]"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: ["(This is a sample website - you\u2019ll be building a site like this on", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          href: "https://nextjs.org/learn",
          children: "our Next.js tutorial"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this), ".)"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: "/posts/firstPost",
        children: "Ir para o primeiro post"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_alert__WEBPACK_IMPORTED_MODULE_1__.default, {
        type: "error",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: "teste de alerta"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
      className: "".concat((_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().headingMd), " ").concat((_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().padding1px)),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().headingLg),
        children: "Blog"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("ul", {
        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().list),
        children: allPostsData.map(function (_ref2) {
          var id = _ref2.id,
              date = _ref2.date,
              title = _ref2.title,
              content = _ref2.content;
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
            className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().listItem),
            children: [title, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, _this), id, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 29
            }, _this), date, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 29
            }, _this), content]
          }, id, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);
}
_c = AllPosts;

var _c;

$RefreshReg$(_c, "AllPosts");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvYWxsUG9zdHMuZjFjYjhiMzA1MTFhYjE2YWJiMzguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBWWUsU0FBU0ksUUFBVCxPQUFvQztBQUFBOztBQUFBLE1BQWhCQyxZQUFnQixRQUFoQkEsWUFBZ0I7QUFFL0NDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixZQUFaO0FBQ0Esc0JBQ0ksOERBQUMsdURBQUQ7QUFBUSxZQUFRLE1BQWhCO0FBQUEsNEJBR0k7QUFBUyxlQUFTLEVBQUVMLDJFQUFwQjtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFBLDhGQUN1RSxHQUR2RSxlQUVJO0FBQUcsY0FBSSxFQUFDLDBCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBTUksOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUUsa0JBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSixlQVFJLDhEQUFDLHNEQUFEO0FBQU8sWUFBSSxFQUFFLE9BQWI7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQWtCSTtBQUFTLGVBQVMsWUFBS0EsMkVBQUwsY0FBNkJBLDRFQUE3QixDQUFsQjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBRUEsMkVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUksaUJBQVMsRUFBRUEsc0VBQWY7QUFBQSxrQkFDS0ssWUFBWSxDQUFDTyxHQUFiLENBQWlCO0FBQUEsY0FBR0MsRUFBSCxTQUFHQSxFQUFIO0FBQUEsY0FBT0MsSUFBUCxTQUFPQSxJQUFQO0FBQUEsY0FBYUMsS0FBYixTQUFhQSxLQUFiO0FBQUEsY0FBb0JDLE9BQXBCLFNBQW9CQSxPQUFwQjtBQUFBLDhCQUNkO0FBQUkscUJBQVMsRUFBRWhCLDBFQUFmO0FBQUEsdUJBQ0tlLEtBREwsZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLEVBR0tGLEVBSEwsZUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKLEVBS0tDLElBTEwsZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5KLEVBT0tFLE9BUEw7QUFBQSxhQUF5Q0gsRUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEYztBQUFBLFNBQWpCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFDSDtLQXhDdUJUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL2FsbFBvc3RzLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dldFNvcnRlZFBvc3RzRGF0YX0gZnJvbSBcIi4uLy4uL2xpYi9wb3N0c1wiO1xyXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWxlcnRcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIGNvbnN0IGFsbFBvc3RzRGF0YSA9IGdldFNvcnRlZFBvc3RzRGF0YSgpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGFsbFBvc3RzRGF0YVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsbFBvc3RzKHsgYWxsUG9zdHNEYXRhIH0pIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhhbGxQb3N0c0RhdGEpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQgQWxsUG9zdHM+XHJcbiAgICAgICAgICAgIHsvKiBLZWVwIHRoZSBleGlzdGluZyBjb2RlIGhlcmUgKi99XHJcblxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ01kfT5cclxuICAgICAgICAgICAgICAgIDxwPltZb3VyIFNlbGYgSW50cm9kdWN0aW9uXTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIChUaGlzIGlzIGEgc2FtcGxlIHdlYnNpdGUgLSB5b3XigJlsbCBiZSBidWlsZGluZyBhIHNpdGUgbGlrZSB0aGlzIG9ueycgJ31cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuXCI+b3VyIE5leHQuanMgdHV0b3JpYWw8L2E+LilcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3Bvc3RzL2ZpcnN0UG9zdFwifT5JciBwYXJhIG8gcHJpbWVpcm8gcG9zdDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8QWxlcnQgdHlwZT17XCJlcnJvclwifT5cclxuICAgICAgICAgICAgICAgICAgICA8cD50ZXN0ZSBkZSBhbGVydGFcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICB7LyogQWRkIHRoaXMgPHNlY3Rpb24+IHRhZyBiZWxvdyB0aGUgZXhpc3RpbmcgPHNlY3Rpb24+IHRhZyAqL31cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHt1dGlsU3R5bGVzLmhlYWRpbmdNZH0gJHt1dGlsU3R5bGVzLnBhZGRpbmcxcHh9YH0+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdMZ30+QmxvZzwvaDI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIHthbGxQb3N0c0RhdGEubWFwKCh7IGlkLCBkYXRlLCB0aXRsZSwgY29udGVudCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlzdEl0ZW19IGtleT17aWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1dGlsU3R5bGVzIiwiTGluayIsIkFsZXJ0IiwiTGF5b3V0IiwiQWxsUG9zdHMiLCJhbGxQb3N0c0RhdGEiLCJjb25zb2xlIiwibG9nIiwiaGVhZGluZ01kIiwicGFkZGluZzFweCIsImhlYWRpbmdMZyIsImxpc3QiLCJtYXAiLCJpZCIsImRhdGUiLCJ0aXRsZSIsImNvbnRlbnQiLCJsaXN0SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=