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
  width: 1349,
  backgroundRepeat: "repeat-y"
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
};
var section4Style = {
  top: 680,
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
        lineNumber: 111,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        style: h1Style,
        children: "PROJECTS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
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
            lineNumber: 119,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/static/images/ShoppingCart.png",
            alt: "Shopping Cart",
            style: imageStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLink,
              style: iconStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 15
            }, _this), "Link:"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
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
            lineNumber: 130,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: colStyle,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
            style: h5Style,
            children: "SUDOKU GAME APPLICATION:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/static/images/Sudoku.png",
            alt: "Sudoku",
            style: imageStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLink,
              style: iconStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 15
            }, _this), "Links:"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 149,
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
            lineNumber: 153,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
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
            lineNumber: 164,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
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
            lineNumber: 178,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/static/images/WebProjects.png",
            alt: "Web Projects",
            style: imageStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLink,
              style: iconStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 15
            }, _this), "Link:"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
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
            lineNumber: 189,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: colStyle,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
            style: h5Style,
            children: "iTunes WEB APPLICATION"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/static/images/iTunes.png",
            alt: "iTunes",
            style: imageStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLink,
              style: iconStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 15
            }, _this), "Links:"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 208,
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
            lineNumber: 212,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
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
            lineNumber: 223,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: Object.assign({}, containerStyle, section3Style),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: colStyle,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              style: h5Style,
              children: "CAR DATABASE APPLICATION:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/static/images/CarDatabase.png",
              alt: "Car Database",
              style: imageStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLink,
                style: iconStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 17
              }, _this), "Link:"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 243,
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
              lineNumber: 247,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: colStyle,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              style: h5Style,
              children: "BLOGGER.COM BLOG:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/static/images/Blogger.png",
              alt: "Car Database",
              style: imageStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLink,
                style: iconStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 267,
                columnNumber: 17
              }, _this), "Link:"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 15
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
              lineNumber: 270,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: Object.assign({}, containerStyle, section4Style),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: colStyle,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              style: h5Style,
              children: "BLOGGER.COM BLOG:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 284,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/static/images/Blogger.png",
              alt: "Car Database",
              style: imageStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 285,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 290,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLink,
                style: iconStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 292,
                columnNumber: 17
              }, _this), "Link:"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 15
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
              lineNumber: 295,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 109,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMuanMiXSwibmFtZXMiOlsiYmFja2dyb3VuZFN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiY29udGFpbmVyU3R5bGUiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwidGV4dEFsaWduIiwic2VjdGlvbjFTdHlsZSIsInRvcCIsImxlZnQiLCJzZWN0aW9uMlN0eWxlIiwic2VjdGlvbjNTdHlsZSIsInNlY3Rpb240U3R5bGUiLCJjb2xTdHlsZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImgxU3R5bGUiLCJoNVN0eWxlIiwiZm9udFdlaWdodCIsIm1hcmdpbkJvdHRvbSIsImljb25TdHlsZSIsImZvbnRTaXplIiwibGlua1N0eWxlIiwiY29sb3IiLCJ0ZXh0RGVjb3JhdGlvbiIsImNoYW5nZUZvbnRDb2xvciIsImUiLCJ0YXJnZXQiLCJzdHlsZSIsImNoYW5nZUJhY2tGb250Q29sb3IiLCJpbWFnZVN0eWxlIiwiUHJvamVjdHMiLCJPYmplY3QiLCJhc3NpZ24iLCJmYUxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLElBQU1BLGVBQWUsR0FBRztBQUN0QkMsUUFBTSxFQUFFLE1BRGM7QUFFdEJDLE9BQUssRUFBRSxJQUZlO0FBR3RCQyxrQkFBZ0IsRUFBRTtBQUhJLENBQXhCLEMsQ0FNQTtBQUNBOztBQUNBLElBQU1DLGNBQWMsR0FBRztBQUNyQkMsVUFBUSxFQUFFLFVBRFc7QUFFckJDLFNBQU8sRUFBRSxNQUZZO0FBR3JCQyxlQUFhLEVBQUUsS0FITTtBQUlyQkMsV0FBUyxFQUFFO0FBSlUsQ0FBdkIsQyxDQVFBOztBQUNBLElBQU1DLGFBQWEsR0FBRztBQUNwQkMsS0FBRyxFQUFFLEdBRGU7QUFFcEJDLE1B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LENBQWMsRUFBZCxFQUFrQi9CLGNBQWxCLEVBQWtDVSxhQUFsQyxDQUFaO0FBQUEsaUNBQ0U7QUFBSyxpQkFBSyxFQUFFQyxRQUFaO0FBQUEsb0NBQ0U7QUFBSSxtQkFBSyxFQUFFSSxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFDRSxpQkFBRyxFQUFDLDRCQUROO0FBRUUsaUJBQUcsRUFBQyxjQUZOO0FBR0UsbUJBQUssRUFBRWE7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRixlQVFFO0FBQUEsc0NBQ0UsOERBQUMsMkVBQUQ7QUFBaUIsb0JBQUksRUFBRUkscUVBQXZCO0FBQStCLHFCQUFLLEVBQUVkO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGLGVBWUU7QUFDRSxrQkFBSSxFQUFDLDBDQURQO0FBRUUsb0JBQU0sRUFBQyxRQUZUO0FBR0UsaUJBQUcsRUFBQyxZQUhOO0FBSUUsbUJBQUssRUFBRUUsU0FKVDtBQUtFLHlCQUFXLEVBQUVHLGVBTGY7QUFNRSx3QkFBVSxFQUFFSSxtQkFOZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFsRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMk1ELENBNU1ELEMsQ0E4TUE7OztLQTlNTUUsUTtBQStNTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy44MGFlMzNkMDJkMDkzMjU0ZTk4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0ZWQgdGhlIExpbmsgQVBJIHRvIHN1cHBvcnQgY2xpZW50LXNpZGUgbmF2aWdhdGlvbi5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG4vLyBJbXBvcnRlZCBBcHBEaXNwbGF5IHRvIHNldCB0aGUgaG9saXN0aWMgc3R5bGUgb2YgdGhpcyBwYWdlLlxyXG5pbXBvcnQgQXBwRGlzcGxheSBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBEaXNwbGF5XCI7XHJcbi8vIEltcG9ydGVkIEZvbnQgQXdlc29tZSBsaWJyYXJ5IGFuZCBpY29ucy4gQWxzbyBhZGRlZCBcImltcG9ydCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZS9zdHlsZXMuY3NzXCI7XCIgdG8gYWxsb3cgc3R5bGluZyB0aGUgaWNvbnMuXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFMaW5rIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUvc3R5bGVzLmNzc1wiO1xyXG5cclxuLyoqXHJcbiAqIFN0eWxlZCB0aGUgcHJvamVjdHMgcGFnZS5cclxuICovXHJcblxyXG4vLyBTZXQgdGhlIGhlaWdodCBhbmQgd2lkdGggb2YgdGhlIGJhY2tncm91bmQgaW1hZ2UuXHJcbmNvbnN0IGJhY2tncm91bmRTdHlsZSA9IHtcclxuICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gIHdpZHRoOiAxMzQ5LFxyXG4gIGJhY2tncm91bmRSZXBlYXQ6IFwicmVwZWF0LXlcIixcclxufTtcclxuXHJcbi8vIFNldCB0aGUgcG9zaXRpb24gb2YgdGhlIGNvbnRhaW5lcnMgdG8gYWJzb2x1dGUuIEFsc28gc2V0IHRoZSB0ZXh0IGFsaWdubWVudCB0byBjZW50ZXIsIGZvciB0aGUgY29udGFpbmVyIHRvIGRpc3BsYXkgYXMgZmxleCBhbmQgdGhlXHJcbi8vIGRpcmVjdGlvbiB0byBiZSBhIHJvdy5cclxuY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XHJcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICBkaXNwbGF5OiBcImZsZXhcIixcclxuICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICBcclxufTtcclxuXHJcbi8vIEFsaWduZWQgdGhlIHJvdydzIHRocmVlIHNlY3Rpb25zIHRvIHRoZSB0b3AgYW5kIGxlZnQgbWFyZ2lucy5cclxuY29uc3Qgc2VjdGlvbjFTdHlsZSA9IHtcclxuICB0b3A6IDE1NyxcclxuICBsZWZ0OiAxNDAsXHJcbn07XHJcblxyXG5jb25zdCBzZWN0aW9uMlN0eWxlID0ge1xyXG4gIHRvcDogNTAwLFxyXG4gIGxlZnQ6IDE0MCxcclxufTtcclxuXHJcbmNvbnN0IHNlY3Rpb24zU3R5bGUgPSB7XHJcbiAgdG9wOiAzNDIsXHJcbiAgbGVmdDogMCxcclxufTtcclxuXHJcbmNvbnN0IHNlY3Rpb240U3R5bGUgPSB7XHJcbiAgdG9wOiA2ODAsXHJcbiAgbGVmdDogMCxcclxufTtcclxuXHJcbi8vIFNldCB0aGUgd2lkdGggYW5kIHRoZSBtYXJnaW5zIG9mIHRoZSBjb2x1bW5zLlxyXG5jb25zdCBjb2xTdHlsZSA9IHtcclxuICB3aWR0aDogNDgwLFxyXG4gIG1hcmdpbkxlZnQ6IDI1LFxyXG4gIG1hcmdpblJpZ2h0OiAyNSxcclxufTtcclxuXHJcbi8vIFNldCB0aGUgcG9zaXRpb24gb2YgdGhlIHByb2plY3RzIHBhZ2UncyBoMSBoZWFkZXIgdGV4dCB0byBhYnNvbHV0ZSBhbmQgYWxpZ25lZCBpdCB0byB0aGUgdG9wIGFuZCBsZWZ0IG1hcmdpbnMuXHJcbmNvbnN0IGgxU3R5bGUgPSB7XHJcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICBsZWZ0OiA1ODAsXHJcbiAgdG9wOiA3MCxcclxufTtcclxuXHJcbi8vIFNldCB0aGUgZm9udCB3ZWlnaHQgYW5kIHRoZSBib3R0b20gbWFyZ2luIG9mIHRoZSBoNSBoZWFkZXJzLlxyXG5jb25zdCBoNVN0eWxlID0ge1xyXG4gIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gIG1hcmdpbkJvdHRvbTogMTAsXHJcbn07XHJcblxyXG4vLyBTZXQgdGhlIGZvbnQgc2l6ZSBhbmQgcmlnaHQgYW5kIGJvdHRvbSBtYXJnaW5zIG9mIHRoZSBpY29ucy5cclxuY29uc3QgaWNvblN0eWxlID0ge1xyXG4gIGZvbnRTaXplOiAxMixcclxuICBtYXJnaW5SaWdodDogNSxcclxuICBtYXJnaW5Cb3R0b206IDIsXHJcbn07XHJcblxyXG4vLyBTZXQgdGhlIGxlZnQgYW5kIHJpZ2h0IG1hcmdpbnMgYW5kIHRoZSBmb250IGNvbG9yLCBzaXplLCB3ZWlnaHQgYW5kIGRlY29yYXRpb24gb2YgdGhlIGhlYWRlciBsaW5rcy5cclxuY29uc3QgbGlua1N0eWxlID0ge1xyXG4gIGNvbG9yOiBcIiMwMDAwMDBcIixcclxuICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbn07XHJcblxyXG4vLyBDcmVhdGVkIG9uTW91c2VPdmVyIGFuZCBvbk1vdXNlT3V0IGV2ZW50IGhhbmRsZXIgZnVuY3Rpb25zIHRvIGNoYW5nZSB0aGUgZm9udCBjb2xvcnMgb2YgdGhlIGxpbmtzIG9uY2UgaG92ZXJlZCBvdmVyXHJcbi8vIGFuZCB0byBjaGFuZ2UgYmFjayB0aGUgY29sb3VyIHdoZW4gdGhlIGxpbmtzIGFyZSBubyBsb25nZXIgaG92ZXJlZCBvdmVyLlxyXG5jb25zdCBjaGFuZ2VGb250Q29sb3IgPSAoZSkgPT4ge1xyXG4gIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gXCIjOGU1ZTY2XCI7XHJcbn07XHJcblxyXG5jb25zdCBjaGFuZ2VCYWNrRm9udENvbG9yID0gKGUpID0+IHtcclxuICBlLnRhcmdldC5zdHlsZS5jb2xvciA9IFwiIzAwMDAwMFwiO1xyXG59O1xyXG5cclxuLy8gU2V0IHRoZSB3aWR0aCBhbmQgdGhlIGJvdHRvbSBtYXJnaW4gb2YgdGhlIGltYWdlcy5cclxuY29uc3QgaW1hZ2VTdHlsZSA9IHtcclxuICB3aWR0aDogNDcwLFxyXG4gIG1hcmdpbkJvdHRvbTogMTAsXHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJuaW5nIHBhZ2Ugd2l0aCBzdHlsZWQgaW1hZ2VzIG9mIHByb2plY3RzIGFuZCBHaXRIdWIgYW5kIEhlcm9rdSBsaW5rcyAob3BlbnMgaW4gbmV3IHRhYiB2aWEgdGFyZ2V0PVwiX2JsYW5rXCIpLiBFYWNoIHByb2plY3QgYWxzbyBoYXMgYVxyXG4gKiBoZWFkZXIgd2l0aCB0aGUgbmFtZSBvZiB0aGUgcHJvamVjdC5cclxuICogVXRpbGl6ZWQgT2JqZWN0LmFzc2lnbiB0byBhZGQgbXVsdGlwbGUgc3R5bGVzIHRvIGVsZW1lbnRzLlxyXG4gKi9cclxuXHJcbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8QXBwRGlzcGxheT5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9Qcm9qZWN0cy5wbmdcIlxyXG4gICAgICAgICAgYWx0PVwiQmFja2dyb3VuZFwiXHJcbiAgICAgICAgICBzdHlsZT17YmFja2dyb3VuZFN0eWxlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGgxIHN0eWxlPXtoMVN0eWxlfT5QUk9KRUNUUzwvaDE+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17T2JqZWN0LmFzc2lnbih7fSwgY29udGFpbmVyU3R5bGUsIHNlY3Rpb24xU3R5bGUpfT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbFN0eWxlfT5cclxuICAgICAgICAgICAgPGg1IHN0eWxlPXtoNVN0eWxlfT5TSE9QUElORyBDQVJUIEFQUExJQ0FUSU9OOjwvaDU+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9TaG9wcGluZ0NhcnQucG5nXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJTaG9wcGluZyBDYXJ0XCJcclxuICAgICAgICAgICAgICBzdHlsZT17aW1hZ2VTdHlsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlua30gc3R5bGU9e2ljb25TdHlsZX0gLz5cclxuICAgICAgICAgICAgICBMaW5rOlxyXG4gICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQ2hhbkJvcy9TaG9wcGluZy1DYXJ0XCJcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtsaW5rU3R5bGV9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9e2NoYW5nZUZvbnRDb2xvcn1cclxuICAgICAgICAgICAgICBvbk1vdXNlT3V0PXtjaGFuZ2VCYWNrRm9udENvbG9yfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgJiM4MjI2OyBHSVRIVUIgUkVQT1NJVE9SWVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbFN0eWxlfT5cclxuICAgICAgICAgICAgPGg1IHN0eWxlPXtoNVN0eWxlfT5TVURPS1UgR0FNRSBBUFBMSUNBVElPTjo8L2g1PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvU3Vkb2t1LnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiU3Vkb2t1XCJcclxuICAgICAgICAgICAgICBzdHlsZT17aW1hZ2VTdHlsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlua30gc3R5bGU9e2ljb25TdHlsZX0gLz5cclxuICAgICAgICAgICAgICBMaW5rczpcclxuICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0NoYW5Cb3MvU3Vkb2t1LUFwcFwiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17bGlua1N0eWxlfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VPdmVyPXtjaGFuZ2VGb250Q29sb3J9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZU91dD17Y2hhbmdlQmFja0ZvbnRDb2xvcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICYjODIyNjsgR0lUSFVCIFJFUE9TSVRPUllcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mYXRob21sZXNzLWlzbGFuZC03NzMxOC5oZXJva3VhcHAuY29tL1wiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17bGlua1N0eWxlfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VPdmVyPXtjaGFuZ2VGb250Q29sb3J9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZU91dD17Y2hhbmdlQmFja0ZvbnRDb2xvcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICYjODIyNjsgREVQTE9ZRUQgQVBQTElDQVRJT05cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17T2JqZWN0LmFzc2lnbih7fSwgY29udGFpbmVyU3R5bGUsIHNlY3Rpb24yU3R5bGUpfT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbFN0eWxlfT5cclxuICAgICAgICAgICAgPGg1IHN0eWxlPXtoNVN0eWxlfT5XRUIgUFJPSkVDVFMgTElTVCBBUFBMSUNBVElPTjo8L2g1PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvV2ViUHJvamVjdHMucG5nXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJXZWIgUHJvamVjdHNcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtpbWFnZVN0eWxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMaW5rfSBzdHlsZT17aWNvblN0eWxlfSAvPlxyXG4gICAgICAgICAgICAgIExpbms6XHJcbiAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWlnaHR5LWZvcmVzdC02NzMyMS5oZXJva3VhcHAuY29tL1wiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17bGlua1N0eWxlfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VPdmVyPXtjaGFuZ2VGb250Q29sb3J9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZU91dD17Y2hhbmdlQmFja0ZvbnRDb2xvcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICYjODIyNjsgREVQTE9ZRUQgQVBQTElDQVRJT05cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtjb2xTdHlsZX0+XHJcbiAgICAgICAgICAgIDxoNSBzdHlsZT17aDVTdHlsZX0+aVR1bmVzIFdFQiBBUFBMSUNBVElPTjwvaDU+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9pVHVuZXMucG5nXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJpVHVuZXNcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtpbWFnZVN0eWxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMaW5rfSBzdHlsZT17aWNvblN0eWxlfSAvPlxyXG4gICAgICAgICAgICAgIExpbmtzOlxyXG4gICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQ2hhbkJvcy9pVHVuZXMtU2VhcmNoLUFwcFwiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17bGlua1N0eWxlfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VPdmVyPXtjaGFuZ2VGb250Q29sb3J9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZU91dD17Y2hhbmdlQmFja0ZvbnRDb2xvcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICYjODIyNjsgR0lUSFVCIFJFUE9TSVRPUllcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9pdHVuZXMtc2VhcmNoLWFwcC1oZXJva3UuaGVyb2t1YXBwLmNvbS9cIlxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e2xpbmtTdHlsZX1cclxuICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17Y2hhbmdlRm9udENvbG9yfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VPdXQ9e2NoYW5nZUJhY2tGb250Q29sb3J9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAmIzgyMjY7IERFUExPWUVEIEFQUExJQ0FUSU9OXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17T2JqZWN0LmFzc2lnbih7fSwgY29udGFpbmVyU3R5bGUsIHNlY3Rpb24zU3R5bGUpfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29sU3R5bGV9PlxyXG4gICAgICAgICAgICAgIDxoNSBzdHlsZT17aDVTdHlsZX0+Q0FSIERBVEFCQVNFIEFQUExJQ0FUSU9OOjwvaDU+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvQ2FyRGF0YWJhc2UucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cIkNhciBEYXRhYmFzZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17aW1hZ2VTdHlsZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMaW5rfSBzdHlsZT17aWNvblN0eWxlfSAvPlxyXG4gICAgICAgICAgICAgICAgTGluazpcclxuICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0NoYW5Cb3MvQ2FyLURhdGFiYXNlLUFwcFwiXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17bGlua1N0eWxlfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9e2NoYW5nZUZvbnRDb2xvcn1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VPdXQ9e2NoYW5nZUJhY2tGb250Q29sb3J9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgJiM4MjI2OyBHSVRIVUIgUkVQT1NJVE9SWVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbFN0eWxlfT5cclxuICAgICAgICAgICAgICA8aDUgc3R5bGU9e2g1U3R5bGV9PkJMT0dHRVIuQ09NIEJMT0c6PC9oNT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9CbG9nZ2VyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJDYXIgRGF0YWJhc2VcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e2ltYWdlU3R5bGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlua30gc3R5bGU9e2ljb25TdHlsZX0gLz5cclxuICAgICAgICAgICAgICAgIExpbms6XHJcbiAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2hhbmVsbGVib3NpZ2VyZGV2LmJsb2dzcG90LmNvbS9cIlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e2xpbmtTdHlsZX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXtjaGFuZ2VGb250Q29sb3J9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlT3V0PXtjaGFuZ2VCYWNrRm9udENvbG9yfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICYjODIyNjsgQkxPR0dFUi5DT01cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtPYmplY3QuYXNzaWduKHt9LCBjb250YWluZXJTdHlsZSwgc2VjdGlvbjRTdHlsZSl9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtjb2xTdHlsZX0+XHJcbiAgICAgICAgICAgICAgPGg1IHN0eWxlPXtoNVN0eWxlfT5CTE9HR0VSLkNPTSBCTE9HOjwvaDU+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvQmxvZ2dlci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiQ2FyIERhdGFiYXNlXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXtpbWFnZVN0eWxlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxpbmt9IHN0eWxlPXtpY29uU3R5bGV9IC8+XHJcbiAgICAgICAgICAgICAgICBMaW5rOlxyXG4gICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2NoYW5lbGxlYm9zaWdlcmRldi5ibG9nc3BvdC5jb20vXCJcclxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXtsaW5rU3R5bGV9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17Y2hhbmdlRm9udENvbG9yfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZU91dD17Y2hhbmdlQmFja0ZvbnRDb2xvcn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAmIzgyMjY7IEJMT0dHRVIuQ09NXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0FwcERpc3BsYXk+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gRXhwb3J0ZWQgcHJvamVjdHMgcGFnZSB0byBiZSBnZW5lcmF0ZWQuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9