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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    AllPosts: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
      className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().headingMd),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: "[Your Self Introduction]"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        children: ["(This is a sample website - you\u2019ll be building a site like this on", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
          href: "https://nextjs.org/learn",
          children: "our Next.js tutorial"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this), ".)"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: "/posts/firstPost",
        children: "Ir para o primeiro post"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_alert__WEBPACK_IMPORTED_MODULE_1__.default, {
        type: "error",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: "teste de alerta"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
      className: "".concat((_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().headingMd), " ").concat((_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().padding1px)),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().headingLg),
        children: "Blog"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
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
              lineNumber: 43,
              columnNumber: 29
            }, _this), id, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, _this), date, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 29
            }, _this), content]
          }, id, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvYWxsUG9zdHMuNDQ1N2M3YTNjNDAyMTRmZGM0N2IuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBWWUsU0FBU0ksUUFBVCxPQUFvQztBQUFBOztBQUFBLE1BQWhCQyxZQUFnQixRQUFoQkEsWUFBZ0I7QUFDL0Msc0JBQ0ksOERBQUMsdURBQUQ7QUFBUSxZQUFRLE1BQWhCO0FBQUEsNEJBR0k7QUFBUyxlQUFTLEVBQUVMLDJFQUFwQjtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFBLDhGQUN1RSxHQUR2RSxlQUVJO0FBQUcsY0FBSSxFQUFDLDBCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBTUksOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUUsa0JBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSixlQVFJLDhEQUFDLHNEQUFEO0FBQU8sWUFBSSxFQUFFLE9BQWI7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQWtCSTtBQUFTLGVBQVMsWUFBS0EsMkVBQUwsY0FBNkJBLDRFQUE3QixDQUFsQjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBRUEsMkVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUksaUJBQVMsRUFBRUEsc0VBQWY7QUFBQSxrQkFDS0ssWUFBWSxDQUFDSyxHQUFiLENBQWlCO0FBQUEsY0FBR0MsRUFBSCxTQUFHQSxFQUFIO0FBQUEsY0FBT0MsSUFBUCxTQUFPQSxJQUFQO0FBQUEsY0FBYUMsS0FBYixTQUFhQSxLQUFiO0FBQUEsY0FBb0JDLE9BQXBCLFNBQW9CQSxPQUFwQjtBQUFBLDhCQUNkO0FBQUkscUJBQVMsRUFBRWQsMEVBQWY7QUFBQSx1QkFDS2EsS0FETCxlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosRUFHS0YsRUFITCxlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkosRUFLS0MsSUFMTCxlQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkosRUFPS0UsT0FQTDtBQUFBLGFBQXlDSCxFQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURjO0FBQUEsU0FBakI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBcUNIO0tBdEN1QlAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvYWxsUG9zdHMuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z2V0U29ydGVkUG9zdHNEYXRhfSBmcm9tIFwiLi4vLi4vbGliL3Bvc3RzXCI7XHJcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hbGVydFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICAgY29uc3QgYWxsUG9zdHNEYXRhID0gZ2V0U29ydGVkUG9zdHNEYXRhKClcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgYWxsUG9zdHNEYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxsUG9zdHMoeyBhbGxQb3N0c0RhdGEgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0IEFsbFBvc3RzPlxyXG4gICAgICAgICAgICB7LyogS2VlcCB0aGUgZXhpc3RpbmcgY29kZSBoZXJlICovfVxyXG5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdNZH0+XHJcbiAgICAgICAgICAgICAgICA8cD5bWW91ciBTZWxmIEludHJvZHVjdGlvbl08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAoVGhpcyBpcyBhIHNhbXBsZSB3ZWJzaXRlIC0geW914oCZbGwgYmUgYnVpbGRpbmcgYSBzaXRlIGxpa2UgdGhpcyBvbnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9sZWFyblwiPm91ciBOZXh0LmpzIHR1dG9yaWFsPC9hPi4pXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9wb3N0cy9maXJzdFBvc3RcIn0+SXIgcGFyYSBvIHByaW1laXJvIHBvc3Q8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0IHR5cGU9e1wiZXJyb3JcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+dGVzdGUgZGUgYWxlcnRhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgey8qIEFkZCB0aGlzIDxzZWN0aW9uPiB0YWcgYmVsb3cgdGhlIGV4aXN0aW5nIDxzZWN0aW9uPiB0YWcgKi99XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7dXRpbFN0eWxlcy5oZWFkaW5nTWR9ICR7dXRpbFN0eWxlcy5wYWRkaW5nMXB4fWB9PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTGd9PkJsb2c8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saXN0fT5cclxuICAgICAgICAgICAgICAgICAgICB7YWxsUG9zdHNEYXRhLm1hcCgoeyBpZCwgZGF0ZSwgdGl0bGUsIGNvbnRlbnQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpc3RJdGVtfSBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsidXRpbFN0eWxlcyIsIkxpbmsiLCJBbGVydCIsIkxheW91dCIsIkFsbFBvc3RzIiwiYWxsUG9zdHNEYXRhIiwiaGVhZGluZ01kIiwicGFkZGluZzFweCIsImhlYWRpbmdMZyIsImxpc3QiLCJtYXAiLCJpZCIsImRhdGUiLCJ0aXRsZSIsImNvbnRlbnQiLCJsaXN0SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=