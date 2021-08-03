self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppDisplay */ "./components/AppDisplay.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\chane\\Desktop\\STUDIES\\CODING\\HYPERIONDEV\\TASKS\\TASK 10\\my-developer-portfolio\\pages\\projects.js",
    _this = undefined;

// Imported the Link API to support client-side navigation.
 // Imported AppDisplay to set the holistic style of this page.

 // Imported Font Awesome library and icons. Also added "import "@fortawesome/fontawesome-svg-core/styles.css";" to allow styling the icons.




/**
 * Styled the projects page.
 */
// Set the height and width of the background image.

var backgroundStyle = {
  height: "auto",
  width: 1349
}; // Set the position of the containers to absolute. Also set the text alignment to center, for the container to display as flex and the
// direction to be a row.

var containerStyle = {
  position: "absolute",
  display: "flex",
  flexDirection: "row",
  textAlign: "center"
}; // Aligned the row's three sections to the top and left margins.

var section1Style = {
  top: 157,
  left: 140
};
var section2Style = {
  top: 500,
  left: 140
};
var section3Style = {
  top: 342,
  left: 0
}; // Set the width and the margins of the columns.

var colStyle = {
  width: 480,
  marginLeft: 25,
  marginRight: 25
}; // Set the position of the projects page's h1 header text to absolute and aligned it to the top and left margins.

var h1Style = {
  position: "absolute",
  left: 580,
  top: 70
}; // Set the font weight and the bottom margin of the h5 headers.

var h5Style = {
  fontWeight: "bold",
  marginBottom: 10
}; // Set the font size and right and bottom margins of the icons.

var iconStyle = {
  fontSize: 12,
  marginRight: 5,
  marginBottom: 2
}; // Set the left and right margins and the font color, size, weight and decoration of the header links.

var linkStyle = {
  color: "#000000",
  textDecoration: "none"
}; // Created onMouseOver and onMouseOut event handler functions to change the font colors of the links once hovered over
// and to change back the colour when the links are no longer hovered over.

var changeFontColor = function changeFontColor(e) {
  e.target.style.color = "#8e5e66";
};

var changeBackFontColor = function changeBackFontColor(e) {
  e.target.style.color = "#000000";
}; // Set the width and the bottom margin of the images.


var imageStyle = {
  width: 470,
  marginBottom: 10
};
/**
 * Returning page with styled images of projects and GitHub and Heroku links (opens in new tab via target="_blank"). Each project also has a
 * header with the name of the project.
 * Utilized Object.assign to add multiple styles to elements.
 */

var Projects = function Projects() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppDisplay__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/static/images/Projects.png",
        alt: "Background",
        style: backgroundStyle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        style: h1Style,
        children: "PROJECTS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: Object.assign({}, containerStyle, section1Style),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: colStyle,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
            style: h5Style,
            children: "SHOPPING CART APPLICATION:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/static/images/ShoppingCart.png",
            alt: "Shopping Cart",
            style: imageStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLink,
              style: iconStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }, _this), "Link:"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "https://github.com/ChanBos/Shopping-Cart",
            target: "_blank",
            rel: "noreferrer",
            style: linkStyle,
            onMouseOver: changeFontColor,
            onMouseOut: changeBackFontColor,
            children: "\u2022 GITHUB REPOSITORY"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: colStyle,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
            style: h5Style,
            children: "SUDOKU GAME APPLICATION:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/static/images/Sudoku.png",
            alt: "Sudoku",
            style: imageStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLink,
              style: iconStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 15
            }, _this), "Links:"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "https://github.com/ChanBos/Sudoku-App",
            target: "_blank",
            rel: "noreferrer",
            style: linkStyle,
            onMouseOver: changeFontColor,
            onMouseOut: changeBackFontColor,
            children: "\u2022 GITHUB REPOSITORY"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "https://fathomless-island-77318.herokuapp.com/",
            target: "_blank",
            rel: "noreferrer",
            style: linkStyle,
            onMouseOver: changeFontColor,
            onMouseOut: changeBackFontColor,
            children: "\u2022 DEPLOYED APPLICATION"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: Object.assign({}, containerStyle, section2Style),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: colStyle,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
            style: h5Style,
            children: "WEB PROJECTS LIST APPLICATION:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/static/images/WebProjects.png",
            alt: "Web Projects",
            style: imageStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLink,
              style: iconStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 15
            }, _this), "Link:"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "https://mighty-forest-67321.herokuapp.com/",
            target: "_blank",
            rel: "noreferrer",
            style: linkStyle,
            onMouseOver: changeFontColor,
            onMouseOut: changeBackFontColor,
            children: "\u2022 DEPLOYED APPLICATION"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: colStyle,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
            style: h5Style,
            children: "iTunes WEB APPLICATION"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/static/images/iTunes.png",
            alt: "iTunes",
            style: imageStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLink,
              style: iconStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 15
            }, _this), "Links:"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "https://github.com/ChanBos/iTunes-Search-App",
            target: "_blank",
            rel: "noreferrer",
            style: linkStyle,
            onMouseOver: changeFontColor,
            onMouseOut: changeBackFontColor,
            children: "\u2022 GITHUB REPOSITORY"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "https://itunes-search-app-heroku.herokuapp.com/",
            target: "_blank",
            rel: "noreferrer",
            style: linkStyle,
            onMouseOver: changeFontColor,
            onMouseOut: changeBackFontColor,
            children: "\u2022 DEPLOYED APPLICATION"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: Object.assign({}, containerStyle, section3Style),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: colStyle,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              style: h5Style,
              children: "CAR DATABASE APPLICATION:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/static/images/CarDatabase.png",
              alt: "Car Database",
              style: imageStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLink,
                style: iconStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 17
              }, _this), "Link:"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://github.com/ChanBos/Car-Database-App",
              target: "_blank",
              rel: "noreferrer",
              style: linkStyle,
              onMouseOver: changeFontColor,
              onMouseOut: changeBackFontColor,
              children: "\u2022 GITHUB REPOSITORY"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: colStyle,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
            style: h5Style,
            children: "BLOGGER.COM BLOG:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/static/images/Blogger.png",
            alt: "Car Database",
            style: imageStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 254,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLink,
              style: iconStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 15
            }, _this), "Link:"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "https://chanellebosigerdev.blogspot.com/",
            target: "_blank",
            rel: "noreferrer",
            style: linkStyle,
            onMouseOver: changeFontColor,
            onMouseOut: changeBackFontColor,
            children: "\u2022 BLOGGER.COM"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 5
  }, _this);
}; // Exported projects page to be generated.


_c = Projects;
/* harmony default export */ __webpack_exports__["default"] = (Projects);

var _c;

$RefreshReg$(_c, "Projects");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMuanMiXSwibmFtZXMiOlsiYmFja2dyb3VuZFN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJjb250YWluZXJTdHlsZSIsInBvc2l0aW9uIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ0ZXh0QWxpZ24iLCJzZWN0aW9uMVN0eWxlIiwidG9wIiwibGVmdCIsInNlY3Rpb24yU3R5bGUiLCJzZWN0aW9uM1N0eWxlIiwiY29sU3R5bGUiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJoMVN0eWxlIiwiaDVTdHlsZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJpY29uU3R5bGUiLCJmb250U2l6ZSIsImxpbmtTdHlsZSIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJjaGFuZ2VGb250Q29sb3IiLCJlIiwidGFyZ2V0Iiwic3R5bGUiLCJjaGFuZ2VCYWNrRm9udENvbG9yIiwiaW1hZ2VTdHlsZSIsIlByb2plY3RzIiwiT2JqZWN0IiwiYXNzaWduIiwiZmFMaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNQSxlQUFlLEdBQUc7QUFDdEJDLFFBQU0sRUFBRSxNQURjO0FBRXRCQyxPQUFLLEVBQUU7QUFGZSxDQUF4QixDLENBS0E7QUFDQTs7QUFDQSxJQUFNQyxjQUFjLEdBQUc7QUFDckJDLFVBQVEsRUFBRSxVQURXO0FBRXJCQyxTQUFPLEVBQUUsTUFGWTtBQUdyQkMsZUFBYSxFQUFFLEtBSE07QUFJckJDLFdBQVMsRUFBRTtBQUpVLENBQXZCLEMsQ0FPQTs7QUFDQSxJQUFNQyxhQUFhLEdBQUc7QUFDcEJDLEtBQUcsRUFBRSxHQURlO0FBRXBCQyxNQUFJLEVBQUU7QUFGYyxDQUF0QjtBQUtBLElBQU1DLGFBQWEsR0FBRztBQUNwQkYsS0FBRyxFQUFFLEdB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ODQwNzM1Mzc0NzRmYTViYmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydGVkIHRoZSBMaW5rIEFQSSB0byBzdXBwb3J0IGNsaWVudC1zaWRlIG5hdmlnYXRpb24uXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLy8gSW1wb3J0ZWQgQXBwRGlzcGxheSB0byBzZXQgdGhlIGhvbGlzdGljIHN0eWxlIG9mIHRoaXMgcGFnZS5cclxuaW1wb3J0IEFwcERpc3BsYXkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwRGlzcGxheVwiO1xyXG4vLyBJbXBvcnRlZCBGb250IEF3ZXNvbWUgbGlicmFyeSBhbmQgaWNvbnMuIEFsc28gYWRkZWQgXCJpbXBvcnQgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUvc3R5bGVzLmNzc1wiO1wiIHRvIGFsbG93IHN0eWxpbmcgdGhlIGljb25zLlxyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhTGluayB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlL3N0eWxlcy5jc3NcIjtcclxuXHJcbi8qKlxyXG4gKiBTdHlsZWQgdGhlIHByb2plY3RzIHBhZ2UuXHJcbiAqL1xyXG5cclxuLy8gU2V0IHRoZSBoZWlnaHQgYW5kIHdpZHRoIG9mIHRoZSBiYWNrZ3JvdW5kIGltYWdlLlxyXG5jb25zdCBiYWNrZ3JvdW5kU3R5bGUgPSB7XHJcbiAgaGVpZ2h0OiBcImF1dG9cIixcclxuICB3aWR0aDogMTM0OSxcclxufTtcclxuXHJcbi8vIFNldCB0aGUgcG9zaXRpb24gb2YgdGhlIGNvbnRhaW5lcnMgdG8gYWJzb2x1dGUuIEFsc28gc2V0IHRoZSB0ZXh0IGFsaWdubWVudCB0byBjZW50ZXIsIGZvciB0aGUgY29udGFpbmVyIHRvIGRpc3BsYXkgYXMgZmxleCBhbmQgdGhlXHJcbi8vIGRpcmVjdGlvbiB0byBiZSBhIHJvdy5cclxuY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XHJcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICBkaXNwbGF5OiBcImZsZXhcIixcclxuICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxufTtcclxuXHJcbi8vIEFsaWduZWQgdGhlIHJvdydzIHRocmVlIHNlY3Rpb25zIHRvIHRoZSB0b3AgYW5kIGxlZnQgbWFyZ2lucy5cclxuY29uc3Qgc2VjdGlvbjFTdHlsZSA9IHtcclxuICB0b3A6IDE1NyxcclxuICBsZWZ0OiAxNDAsXHJcbn07XHJcblxyXG5jb25zdCBzZWN0aW9uMlN0eWxlID0ge1xyXG4gIHRvcDogNTAwLFxyXG4gIGxlZnQ6IDE0MCxcclxufTtcclxuXHJcbmNvbnN0IHNlY3Rpb24zU3R5bGUgPSB7XHJcbiAgdG9wOiAzNDIsXHJcbiAgbGVmdDogMCxcclxufTtcclxuXHJcbi8vIFNldCB0aGUgd2lkdGggYW5kIHRoZSBtYXJnaW5zIG9mIHRoZSBjb2x1bW5zLlxyXG5jb25zdCBjb2xTdHlsZSA9IHtcclxuICB3aWR0aDogNDgwLFxyXG4gIG1hcmdpbkxlZnQ6IDI1LFxyXG4gIG1hcmdpblJpZ2h0OiAyNSxcclxufTtcclxuXHJcbi8vIFNldCB0aGUgcG9zaXRpb24gb2YgdGhlIHByb2plY3RzIHBhZ2UncyBoMSBoZWFkZXIgdGV4dCB0byBhYnNvbHV0ZSBhbmQgYWxpZ25lZCBpdCB0byB0aGUgdG9wIGFuZCBsZWZ0IG1hcmdpbnMuXHJcbmNvbnN0IGgxU3R5bGUgPSB7XHJcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICBsZWZ0OiA1ODAsXHJcbiAgdG9wOiA3MCxcclxufTtcclxuXHJcbi8vIFNldCB0aGUgZm9udCB3ZWlnaHQgYW5kIHRoZSBib3R0b20gbWFyZ2luIG9mIHRoZSBoNSBoZWFkZXJzLlxyXG5jb25zdCBoNVN0eWxlID0ge1xyXG4gIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gIG1hcmdpbkJvdHRvbTogMTAsXHJcbn07XHJcblxyXG4vLyBTZXQgdGhlIGZvbnQgc2l6ZSBhbmQgcmlnaHQgYW5kIGJvdHRvbSBtYXJnaW5zIG9mIHRoZSBpY29ucy5cclxuY29uc3QgaWNvblN0eWxlID0ge1xyXG4gIGZvbnRTaXplOiAxMixcclxuICBtYXJnaW5SaWdodDogNSxcclxuICBtYXJnaW5Cb3R0b206IDIsXHJcbn07XHJcblxyXG4vLyBTZXQgdGhlIGxlZnQgYW5kIHJpZ2h0IG1hcmdpbnMgYW5kIHRoZSBmb250IGNvbG9yLCBzaXplLCB3ZWlnaHQgYW5kIGRlY29yYXRpb24gb2YgdGhlIGhlYWRlciBsaW5rcy5cclxuY29uc3QgbGlua1N0eWxlID0ge1xyXG4gIGNvbG9yOiBcIiMwMDAwMDBcIixcclxuICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbn07XHJcblxyXG4vLyBDcmVhdGVkIG9uTW91c2VPdmVyIGFuZCBvbk1vdXNlT3V0IGV2ZW50IGhhbmRsZXIgZnVuY3Rpb25zIHRvIGNoYW5nZSB0aGUgZm9udCBjb2xvcnMgb2YgdGhlIGxpbmtzIG9uY2UgaG92ZXJlZCBvdmVyXHJcbi8vIGFuZCB0byBjaGFuZ2UgYmFjayB0aGUgY29sb3VyIHdoZW4gdGhlIGxpbmtzIGFyZSBubyBsb25nZXIgaG92ZXJlZCBvdmVyLlxyXG5jb25zdCBjaGFuZ2VGb250Q29sb3IgPSAoZSkgPT4ge1xyXG4gIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gXCIjOGU1ZTY2XCI7XHJcbn07XHJcblxyXG5jb25zdCBjaGFuZ2VCYWNrRm9udENvbG9yID0gKGUpID0+IHtcclxuICBlLnRhcmdldC5zdHlsZS5jb2xvciA9IFwiIzAwMDAwMFwiO1xyXG59O1xyXG5cclxuLy8gU2V0IHRoZSB3aWR0aCBhbmQgdGhlIGJvdHRvbSBtYXJnaW4gb2YgdGhlIGltYWdlcy5cclxuY29uc3QgaW1hZ2VTdHlsZSA9IHtcclxuICB3aWR0aDogNDcwLFxyXG4gIG1hcmdpbkJvdHRvbTogMTAsXHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJuaW5nIHBhZ2Ugd2l0aCBzdHlsZWQgaW1hZ2VzIG9mIHByb2plY3RzIGFuZCBHaXRIdWIgYW5kIEhlcm9rdSBsaW5rcyAob3BlbnMgaW4gbmV3IHRhYiB2aWEgdGFyZ2V0PVwiX2JsYW5rXCIpLiBFYWNoIHByb2plY3QgYWxzbyBoYXMgYVxyXG4gKiBoZWFkZXIgd2l0aCB0aGUgbmFtZSBvZiB0aGUgcHJvamVjdC5cclxuICogVXRpbGl6ZWQgT2JqZWN0LmFzc2lnbiB0byBhZGQgbXVsdGlwbGUgc3R5bGVzIHRvIGVsZW1lbnRzLlxyXG4gKi9cclxuXHJcbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8QXBwRGlzcGxheT5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9Qcm9qZWN0cy5wbmdcIlxyXG4gICAgICAgICAgYWx0PVwiQmFja2dyb3VuZFwiXHJcbiAgICAgICAgICBzdHlsZT17YmFja2dyb3VuZFN0eWxlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGgxIHN0eWxlPXtoMVN0eWxlfT5QUk9KRUNUUzwvaDE+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17T2JqZWN0LmFzc2lnbih7fSwgY29udGFpbmVyU3R5bGUsIHNlY3Rpb24xU3R5bGUpfT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbFN0eWxlfT5cclxuICAgICAgICAgICAgPGg1IHN0eWxlPXtoNVN0eWxlfT5TSE9QUElORyBDQVJUIEFQUExJQ0FUSU9OOjwvaDU+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9TaG9wcGluZ0NhcnQucG5nXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJTaG9wcGluZyBDYXJ0XCJcclxuICAgICAgICAgICAgICBzdHlsZT17aW1hZ2VTdHlsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlua30gc3R5bGU9e2ljb25TdHlsZX0gLz5cclxuICAgICAgICAgICAgICBMaW5rOlxyXG4gICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQ2hhbkJvcy9TaG9wcGluZy1DYXJ0XCJcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtsaW5rU3R5bGV9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9e2NoYW5nZUZvbnRDb2xvcn1cclxuICAgICAgICAgICAgICBvbk1vdXNlT3V0PXtjaGFuZ2VCYWNrRm9udENvbG9yfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgJiM4MjI2OyBHSVRIVUIgUkVQT1NJVE9SWVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbFN0eWxlfT5cclxuICAgICAgICAgICAgPGg1IHN0eWxlPXtoNVN0eWxlfT5TVURPS1UgR0FNRSBBUFBMSUNBVElPTjo8L2g1PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvU3Vkb2t1LnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiU3Vkb2t1XCJcclxuICAgICAgICAgICAgICBzdHlsZT17aW1hZ2VTdHlsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlua30gc3R5bGU9e2ljb25TdHlsZX0gLz5cclxuICAgICAgICAgICAgICBMaW5rczpcclxuICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0NoYW5Cb3MvU3Vkb2t1LUFwcFwiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17bGlua1N0eWxlfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VPdmVyPXtjaGFuZ2VGb250Q29sb3J9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZU91dD17Y2hhbmdlQmFja0ZvbnRDb2xvcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICYjODIyNjsgR0lUSFVCIFJFUE9TSVRPUllcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mYXRob21sZXNzLWlzbGFuZC03NzMxOC5oZXJva3VhcHAuY29tL1wiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17bGlua1N0eWxlfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VPdmVyPXtjaGFuZ2VGb250Q29sb3J9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZU91dD17Y2hhbmdlQmFja0ZvbnRDb2xvcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICYjODIyNjsgREVQTE9ZRUQgQVBQTElDQVRJT05cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17T2JqZWN0LmFzc2lnbih7fSwgY29udGFpbmVyU3R5bGUsIHNlY3Rpb24yU3R5bGUpfT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbFN0eWxlfT5cclxuICAgICAgICAgICAgPGg1IHN0eWxlPXtoNVN0eWxlfT5XRUIgUFJPSkVDVFMgTElTVCBBUFBMSUNBVElPTjo8L2g1PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvV2ViUHJvamVjdHMucG5nXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJXZWIgUHJvamVjdHNcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtpbWFnZVN0eWxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMaW5rfSBzdHlsZT17aWNvblN0eWxlfSAvPlxyXG4gICAgICAgICAgICAgIExpbms6XHJcbiAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWlnaHR5LWZvcmVzdC02NzMyMS5oZXJva3VhcHAuY29tL1wiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17bGlua1N0eWxlfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VPdmVyPXtjaGFuZ2VGb250Q29sb3J9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZU91dD17Y2hhbmdlQmFja0ZvbnRDb2xvcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICYjODIyNjsgREVQTE9ZRUQgQVBQTElDQVRJT05cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtjb2xTdHlsZX0+XHJcbiAgICAgICAgICAgIDxoNSBzdHlsZT17aDVTdHlsZX0+aVR1bmVzIFdFQiBBUFBMSUNBVElPTjwvaDU+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9pVHVuZXMucG5nXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJpVHVuZXNcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtpbWFnZVN0eWxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMaW5rfSBzdHlsZT17aWNvblN0eWxlfSAvPlxyXG4gICAgICAgICAgICAgIExpbmtzOlxyXG4gICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQ2hhbkJvcy9pVHVuZXMtU2VhcmNoLUFwcFwiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17bGlua1N0eWxlfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VPdmVyPXtjaGFuZ2VGb250Q29sb3J9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZU91dD17Y2hhbmdlQmFja0ZvbnRDb2xvcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICYjODIyNjsgR0lUSFVCIFJFUE9TSVRPUllcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9pdHVuZXMtc2VhcmNoLWFwcC1oZXJva3UuaGVyb2t1YXBwLmNvbS9cIlxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e2xpbmtTdHlsZX1cclxuICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17Y2hhbmdlRm9udENvbG9yfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VPdXQ9e2NoYW5nZUJhY2tGb250Q29sb3J9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAmIzgyMjY7IERFUExPWUVEIEFQUExJQ0FUSU9OXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17T2JqZWN0LmFzc2lnbih7fSwgY29udGFpbmVyU3R5bGUsIHNlY3Rpb24zU3R5bGUpfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29sU3R5bGV9PlxyXG4gICAgICAgICAgICAgIDxoNSBzdHlsZT17aDVTdHlsZX0+Q0FSIERBVEFCQVNFIEFQUExJQ0FUSU9OOjwvaDU+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvQ2FyRGF0YWJhc2UucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIkNhciBEYXRhYmFzZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17aW1hZ2VTdHlsZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMaW5rfSBzdHlsZT17aWNvblN0eWxlfSAvPlxyXG4gICAgICAgICAgICAgICAgTGluazpcclxuICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0NoYW5Cb3MvQ2FyLURhdGFiYXNlLUFwcFwiXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17bGlua1N0eWxlfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9e2NoYW5nZUZvbnRDb2xvcn1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VPdXQ9e2NoYW5nZUJhY2tGb250Q29sb3J9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgJiM4MjI2OyBHSVRIVUIgUkVQT1NJVE9SWVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbFN0eWxlfT5cclxuICAgICAgICAgICAgPGg1IHN0eWxlPXtoNVN0eWxlfT5CTE9HR0VSLkNPTSBCTE9HOjwvaDU+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9CbG9nZ2VyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiQ2FyIERhdGFiYXNlXCJcclxuICAgICAgICAgICAgICBzdHlsZT17aW1hZ2VTdHlsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlua30gc3R5bGU9e2ljb25TdHlsZX0gLz5cclxuICAgICAgICAgICAgICBMaW5rOlxyXG4gICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2NoYW5lbGxlYm9zaWdlcmRldi5ibG9nc3BvdC5jb20vXCJcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtsaW5rU3R5bGV9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9e2NoYW5nZUZvbnRDb2xvcn1cclxuICAgICAgICAgICAgICBvbk1vdXNlT3V0PXtjaGFuZ2VCYWNrRm9udENvbG9yfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgJiM4MjI2OyBCTE9HR0VSLkNPTVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9BcHBEaXNwbGF5PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIEV4cG9ydGVkIHByb2plY3RzIHBhZ2UgdG8gYmUgZ2VuZXJhdGVkLlxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==