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
  height: "1500px",
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
        lineNumber: 110,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        style: h1Style,
        children: "PROJECTS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
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
            lineNumber: 118,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/static/images/ShoppingCart.png",
            alt: "Shopping Cart",
            style: imageStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLink,
              style: iconStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, _this), "Link:"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 125,
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
            lineNumber: 129,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: colStyle,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
            style: h5Style,
            children: "SUDOKU GAME APPLICATION:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/static/images/Sudoku.png",
            alt: "Sudoku",
            style: imageStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLink,
              style: iconStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, _this), "Links:"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 148,
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
            lineNumber: 152,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
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
            lineNumber: 163,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
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
            lineNumber: 177,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/static/images/WebProjects.png",
            alt: "Web Projects",
            style: imageStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLink,
              style: iconStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 15
            }, _this), "Link:"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 184,
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
            lineNumber: 188,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: colStyle,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
            style: h5Style,
            children: "iTunes WEB APPLICATION"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/static/images/iTunes.png",
            alt: "iTunes",
            style: imageStyle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLink,
              style: iconStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 15
            }, _this), "Links:"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 207,
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
            lineNumber: 211,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 221,
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
            lineNumber: 222,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 199,
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
              lineNumber: 235,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/static/images/CarDatabase.png",
              alt: "Car Database",
              style: imageStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLink,
                style: iconStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 17
              }, _this), "Link:"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 242,
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
              lineNumber: 246,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: colStyle,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
              style: h5Style,
              children: "NEXT.JS RECIPE SEARCH APP:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/static/images/RecipeApp.png",
              alt: "Recipe App",
              style: imageStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 264,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLink,
                style: iconStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 266,
                columnNumber: 17
              }, _this), "Link:"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://github.com/ChanBos/Next-Recipe-Search-App",
              target: "_blank",
              rel: "noreferrer",
              style: linkStyle,
              onMouseOver: changeFontColor,
              onMouseOut: changeBackFontColor,
              children: "\u2022 GITHUB REPOSITORY"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 269,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://next-recipe-search-app.vercel.app/",
              target: "_blank",
              rel: "noreferrer",
              style: linkStyle,
              onMouseOver: changeFontColor,
              onMouseOut: changeBackFontColor,
              children: "\u2022 DEPLOYED APPLICATION"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 280,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 233,
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
              lineNumber: 294,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/static/images/Blogger.png",
              alt: "Car Database",
              style: imageStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 300,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLink,
                style: iconStyle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 302,
                columnNumber: 17
              }, _this), "Link:"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 301,
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
              lineNumber: 305,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 108,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMuanMiXSwibmFtZXMiOlsiYmFja2dyb3VuZFN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiY29udGFpbmVyU3R5bGUiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwidGV4dEFsaWduIiwic2VjdGlvbjFTdHlsZSIsInRvcCIsImxlZnQiLCJzZWN0aW9uMlN0eWxlIiwic2VjdGlvbjNTdHlsZSIsInNlY3Rpb240U3R5bGUiLCJjb2xTdHlsZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImgxU3R5bGUiLCJoNVN0eWxlIiwiZm9udFdlaWdodCIsIm1hcmdpbkJvdHRvbSIsImljb25TdHlsZSIsImZvbnRTaXplIiwibGlua1N0eWxlIiwiY29sb3IiLCJ0ZXh0RGVjb3JhdGlvbiIsImNoYW5nZUZvbnRDb2xvciIsImUiLCJ0YXJnZXQiLCJzdHlsZSIsImNoYW5nZUJhY2tGb250Q29sb3IiLCJpbWFnZVN0eWxlIiwiUHJvamVjdHMiLCJPYmplY3QiLCJhc3NpZ24iLCJmYUxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLElBQU1BLGVBQWUsR0FBRztBQUN0QkMsUUFBTSxFQUFFLFFBRGM7QUFFdEJDLE9BQUssRUFBRSxJQUZlO0FBR3RCQyxrQkFBZ0IsRUFBRTtBQUhJLENBQXhCLEMsQ0FNQTtBQUNBOztBQUNBLElBQU1DLGNBQWMsR0FBRztBQUNyQkMsVUFBUSxFQUFFLFVBRFc7QUFFckJDLFNBQU8sRUFBRSxNQUZZO0FBR3JCQyxlQUFhLEVBQUUsS0FITTtBQUlyQkMsV0FBUyxFQUFFO0FBSlUsQ0FBdkIsQyxDQU9BOztBQUNBLElBQU1DLGFBQWEsR0FBRztBQUNwQkMsS0FBRyxFQUFFLEdBRGU7QUFFcEJDLE1B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REY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc05ELENBdk5ELEMsQ0F5TkE7OztLQXpOTUUsUTtBQTBOTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy40Y2M4MDdkOTQ3OWVmMzUyODAzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0ZWQgdGhlIExpbmsgQVBJIHRvIHN1cHBvcnQgY2xpZW50LXNpZGUgbmF2aWdhdGlvbi5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG4vLyBJbXBvcnRlZCBBcHBEaXNwbGF5IHRvIHNldCB0aGUgaG9saXN0aWMgc3R5bGUgb2YgdGhpcyBwYWdlLlxyXG5pbXBvcnQgQXBwRGlzcGxheSBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBEaXNwbGF5XCI7XHJcbi8vIEltcG9ydGVkIEZvbnQgQXdlc29tZSBsaWJyYXJ5IGFuZCBpY29ucy4gQWxzbyBhZGRlZCBcImltcG9ydCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZS9zdHlsZXMuY3NzXCI7XCIgdG8gYWxsb3cgc3R5bGluZyB0aGUgaWNvbnMuXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFMaW5rIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUvc3R5bGVzLmNzc1wiO1xyXG5cclxuLyoqXHJcbiAqIFN0eWxlZCB0aGUgcHJvamVjdHMgcGFnZS5cclxuICovXHJcblxyXG4vLyBTZXQgdGhlIGhlaWdodCBhbmQgd2lkdGggb2YgdGhlIGJhY2tncm91bmQgaW1hZ2UuXHJcbmNvbnN0IGJhY2tncm91bmRTdHlsZSA9IHtcclxuICBoZWlnaHQ6IFwiMTUwMHB4XCIsXHJcbiAgd2lkdGg6IDEzNDksXHJcbiAgYmFja2dyb3VuZFJlcGVhdDogXCJyZXBlYXQteVwiLFxyXG59O1xyXG5cclxuLy8gU2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgY29udGFpbmVycyB0byBhYnNvbHV0ZS4gQWxzbyBzZXQgdGhlIHRleHQgYWxpZ25tZW50IHRvIGNlbnRlciwgZm9yIHRoZSBjb250YWluZXIgdG8gZGlzcGxheSBhcyBmbGV4IGFuZCB0aGVcclxuLy8gZGlyZWN0aW9uIHRvIGJlIGEgcm93LlxyXG5jb25zdCBjb250YWluZXJTdHlsZSA9IHtcclxuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG59O1xyXG5cclxuLy8gQWxpZ25lZCB0aGUgcm93J3MgdGhyZWUgc2VjdGlvbnMgdG8gdGhlIHRvcCBhbmQgbGVmdCBtYXJnaW5zLlxyXG5jb25zdCBzZWN0aW9uMVN0eWxlID0ge1xyXG4gIHRvcDogMTU3LFxyXG4gIGxlZnQ6IDE0MCxcclxufTtcclxuXHJcbmNvbnN0IHNlY3Rpb24yU3R5bGUgPSB7XHJcbiAgdG9wOiA1MDAsXHJcbiAgbGVmdDogMTQwLFxyXG59O1xyXG5cclxuY29uc3Qgc2VjdGlvbjNTdHlsZSA9IHtcclxuICB0b3A6IDM0MixcclxuICBsZWZ0OiAwLFxyXG59O1xyXG5cclxuY29uc3Qgc2VjdGlvbjRTdHlsZSA9IHtcclxuICB0b3A6IDY4MCxcclxuICBsZWZ0OiAwLFxyXG59O1xyXG5cclxuLy8gU2V0IHRoZSB3aWR0aCBhbmQgdGhlIG1hcmdpbnMgb2YgdGhlIGNvbHVtbnMuXHJcbmNvbnN0IGNvbFN0eWxlID0ge1xyXG4gIHdpZHRoOiA0ODAsXHJcbiAgbWFyZ2luTGVmdDogMjUsXHJcbiAgbWFyZ2luUmlnaHQ6IDI1LFxyXG59O1xyXG5cclxuLy8gU2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgcHJvamVjdHMgcGFnZSdzIGgxIGhlYWRlciB0ZXh0IHRvIGFic29sdXRlIGFuZCBhbGlnbmVkIGl0IHRvIHRoZSB0b3AgYW5kIGxlZnQgbWFyZ2lucy5cclxuY29uc3QgaDFTdHlsZSA9IHtcclxuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gIGxlZnQ6IDU4MCxcclxuICB0b3A6IDcwLFxyXG59O1xyXG5cclxuLy8gU2V0IHRoZSBmb250IHdlaWdodCBhbmQgdGhlIGJvdHRvbSBtYXJnaW4gb2YgdGhlIGg1IGhlYWRlcnMuXHJcbmNvbnN0IGg1U3R5bGUgPSB7XHJcbiAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgbWFyZ2luQm90dG9tOiAxMCxcclxufTtcclxuXHJcbi8vIFNldCB0aGUgZm9udCBzaXplIGFuZCByaWdodCBhbmQgYm90dG9tIG1hcmdpbnMgb2YgdGhlIGljb25zLlxyXG5jb25zdCBpY29uU3R5bGUgPSB7XHJcbiAgZm9udFNpemU6IDEyLFxyXG4gIG1hcmdpblJpZ2h0OiA1LFxyXG4gIG1hcmdpbkJvdHRvbTogMixcclxufTtcclxuXHJcbi8vIFNldCB0aGUgbGVmdCBhbmQgcmlnaHQgbWFyZ2lucyBhbmQgdGhlIGZvbnQgY29sb3IsIHNpemUsIHdlaWdodCBhbmQgZGVjb3JhdGlvbiBvZiB0aGUgaGVhZGVyIGxpbmtzLlxyXG5jb25zdCBsaW5rU3R5bGUgPSB7XHJcbiAgY29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxufTtcclxuXHJcbi8vIENyZWF0ZWQgb25Nb3VzZU92ZXIgYW5kIG9uTW91c2VPdXQgZXZlbnQgaGFuZGxlciBmdW5jdGlvbnMgdG8gY2hhbmdlIHRoZSBmb250IGNvbG9ycyBvZiB0aGUgbGlua3Mgb25jZSBob3ZlcmVkIG92ZXJcclxuLy8gYW5kIHRvIGNoYW5nZSBiYWNrIHRoZSBjb2xvdXIgd2hlbiB0aGUgbGlua3MgYXJlIG5vIGxvbmdlciBob3ZlcmVkIG92ZXIuXHJcbmNvbnN0IGNoYW5nZUZvbnRDb2xvciA9IChlKSA9PiB7XHJcbiAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSBcIiM4ZTVlNjZcIjtcclxufTtcclxuXHJcbmNvbnN0IGNoYW5nZUJhY2tGb250Q29sb3IgPSAoZSkgPT4ge1xyXG4gIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gXCIjMDAwMDAwXCI7XHJcbn07XHJcblxyXG4vLyBTZXQgdGhlIHdpZHRoIGFuZCB0aGUgYm90dG9tIG1hcmdpbiBvZiB0aGUgaW1hZ2VzLlxyXG5jb25zdCBpbWFnZVN0eWxlID0ge1xyXG4gIHdpZHRoOiA0NzAsXHJcbiAgbWFyZ2luQm90dG9tOiAxMCxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5pbmcgcGFnZSB3aXRoIHN0eWxlZCBpbWFnZXMgb2YgcHJvamVjdHMgYW5kIEdpdEh1YiBhbmQgSGVyb2t1IGxpbmtzIChvcGVucyBpbiBuZXcgdGFiIHZpYSB0YXJnZXQ9XCJfYmxhbmtcIikuIEVhY2ggcHJvamVjdCBhbHNvIGhhcyBhXHJcbiAqIGhlYWRlciB3aXRoIHRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0LlxyXG4gKiBVdGlsaXplZCBPYmplY3QuYXNzaWduIHRvIGFkZCBtdWx0aXBsZSBzdHlsZXMgdG8gZWxlbWVudHMuXHJcbiAqL1xyXG5cclxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxBcHBEaXNwbGF5PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL1Byb2plY3RzLnBuZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJCYWNrZ3JvdW5kXCJcclxuICAgICAgICAgIHN0eWxlPXtiYWNrZ3JvdW5kU3R5bGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aDEgc3R5bGU9e2gxU3R5bGV9PlBST0pFQ1RTPC9oMT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXtPYmplY3QuYXNzaWduKHt9LCBjb250YWluZXJTdHlsZSwgc2VjdGlvbjFTdHlsZSl9PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17Y29sU3R5bGV9PlxyXG4gICAgICAgICAgICA8aDUgc3R5bGU9e2g1U3R5bGV9PlNIT1BQSU5HIENBUlQgQVBQTElDQVRJT046PC9oNT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL1Nob3BwaW5nQ2FydC5wbmdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIlNob3BwaW5nIENhcnRcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtpbWFnZVN0eWxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMaW5rfSBzdHlsZT17aWNvblN0eWxlfSAvPlxyXG4gICAgICAgICAgICAgIExpbms6XHJcbiAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9DaGFuQm9zL1Nob3BwaW5nLUNhcnRcIlxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e2xpbmtTdHlsZX1cclxuICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17Y2hhbmdlRm9udENvbG9yfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VPdXQ9e2NoYW5nZUJhY2tGb250Q29sb3J9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAmIzgyMjY7IEdJVEhVQiBSRVBPU0lUT1JZXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17Y29sU3R5bGV9PlxyXG4gICAgICAgICAgICA8aDUgc3R5bGU9e2g1U3R5bGV9PlNVRE9LVSBHQU1FIEFQUExJQ0FUSU9OOjwvaDU+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9TdWRva3UucG5nXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJTdWRva3VcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtpbWFnZVN0eWxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMaW5rfSBzdHlsZT17aWNvblN0eWxlfSAvPlxyXG4gICAgICAgICAgICAgIExpbmtzOlxyXG4gICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQ2hhbkJvcy9TdWRva3UtQXBwXCJcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtsaW5rU3R5bGV9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9e2NoYW5nZUZvbnRDb2xvcn1cclxuICAgICAgICAgICAgICBvbk1vdXNlT3V0PXtjaGFuZ2VCYWNrRm9udENvbG9yfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgJiM4MjI2OyBHSVRIVUIgUkVQT1NJVE9SWVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZhdGhvbWxlc3MtaXNsYW5kLTc3MzE4Lmhlcm9rdWFwcC5jb20vXCJcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtsaW5rU3R5bGV9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9e2NoYW5nZUZvbnRDb2xvcn1cclxuICAgICAgICAgICAgICBvbk1vdXNlT3V0PXtjaGFuZ2VCYWNrRm9udENvbG9yfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgJiM4MjI2OyBERVBMT1lFRCBBUFBMSUNBVElPTlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXtPYmplY3QuYXNzaWduKHt9LCBjb250YWluZXJTdHlsZSwgc2VjdGlvbjJTdHlsZSl9PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17Y29sU3R5bGV9PlxyXG4gICAgICAgICAgICA8aDUgc3R5bGU9e2g1U3R5bGV9PldFQiBQUk9KRUNUUyBMSVNUIEFQUExJQ0FUSU9OOjwvaDU+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9XZWJQcm9qZWN0cy5wbmdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIldlYiBQcm9qZWN0c1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e2ltYWdlU3R5bGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxpbmt9IHN0eWxlPXtpY29uU3R5bGV9IC8+XHJcbiAgICAgICAgICAgICAgTGluazpcclxuICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9taWdodHktZm9yZXN0LTY3MzIxLmhlcm9rdWFwcC5jb20vXCJcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtsaW5rU3R5bGV9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9e2NoYW5nZUZvbnRDb2xvcn1cclxuICAgICAgICAgICAgICBvbk1vdXNlT3V0PXtjaGFuZ2VCYWNrRm9udENvbG9yfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgJiM4MjI2OyBERVBMT1lFRCBBUFBMSUNBVElPTlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbFN0eWxlfT5cclxuICAgICAgICAgICAgPGg1IHN0eWxlPXtoNVN0eWxlfT5pVHVuZXMgV0VCIEFQUExJQ0FUSU9OPC9oNT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2lUdW5lcy5wbmdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cImlUdW5lc1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e2ltYWdlU3R5bGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxpbmt9IHN0eWxlPXtpY29uU3R5bGV9IC8+XHJcbiAgICAgICAgICAgICAgTGlua3M6XHJcbiAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9DaGFuQm9zL2lUdW5lcy1TZWFyY2gtQXBwXCJcclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtsaW5rU3R5bGV9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9e2NoYW5nZUZvbnRDb2xvcn1cclxuICAgICAgICAgICAgICBvbk1vdXNlT3V0PXtjaGFuZ2VCYWNrRm9udENvbG9yfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgJiM4MjI2OyBHSVRIVUIgUkVQT1NJVE9SWVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2l0dW5lcy1zZWFyY2gtYXBwLWhlcm9rdS5oZXJva3VhcHAuY29tL1wiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17bGlua1N0eWxlfVxyXG4gICAgICAgICAgICAgIG9uTW91c2VPdmVyPXtjaGFuZ2VGb250Q29sb3J9XHJcbiAgICAgICAgICAgICAgb25Nb3VzZU91dD17Y2hhbmdlQmFja0ZvbnRDb2xvcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICYjODIyNjsgREVQTE9ZRUQgQVBQTElDQVRJT05cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtPYmplY3QuYXNzaWduKHt9LCBjb250YWluZXJTdHlsZSwgc2VjdGlvbjNTdHlsZSl9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtjb2xTdHlsZX0+XHJcbiAgICAgICAgICAgICAgPGg1IHN0eWxlPXtoNVN0eWxlfT5DQVIgREFUQUJBU0UgQVBQTElDQVRJT046PC9oNT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9DYXJEYXRhYmFzZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiQ2FyIERhdGFiYXNlXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXtpbWFnZVN0eWxlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxpbmt9IHN0eWxlPXtpY29uU3R5bGV9IC8+XHJcbiAgICAgICAgICAgICAgICBMaW5rOlxyXG4gICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQ2hhbkJvcy9DYXItRGF0YWJhc2UtQXBwXCJcclxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXtsaW5rU3R5bGV9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17Y2hhbmdlRm9udENvbG9yfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZU91dD17Y2hhbmdlQmFja0ZvbnRDb2xvcn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAmIzgyMjY7IEdJVEhVQiBSRVBPU0lUT1JZXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29sU3R5bGV9PlxyXG4gICAgICAgICAgICAgIDxoNSBzdHlsZT17aDVTdHlsZX0+TkVYVC5KUyBSRUNJUEUgU0VBUkNIIEFQUDo8L2g1PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL1JlY2lwZUFwcC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiUmVjaXBlIEFwcFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17aW1hZ2VTdHlsZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFMaW5rfSBzdHlsZT17aWNvblN0eWxlfSAvPlxyXG4gICAgICAgICAgICAgICAgTGluazpcclxuICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0NoYW5Cb3MvTmV4dC1SZWNpcGUtU2VhcmNoLUFwcFwiXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17bGlua1N0eWxlfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9e2NoYW5nZUZvbnRDb2xvcn1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VPdXQ9e2NoYW5nZUJhY2tGb250Q29sb3J9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgJiM4MjI2OyBHSVRIVUIgUkVQT1NJVE9SWVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbmV4dC1yZWNpcGUtc2VhcmNoLWFwcC52ZXJjZWwuYXBwL1wiXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17bGlua1N0eWxlfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9e2NoYW5nZUZvbnRDb2xvcn1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VPdXQ9e2NoYW5nZUJhY2tGb250Q29sb3J9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgJiM4MjI2OyBERVBMT1lFRCBBUFBMSUNBVElPTlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e09iamVjdC5hc3NpZ24oe30sIGNvbnRhaW5lclN0eWxlLCBzZWN0aW9uNFN0eWxlKX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbFN0eWxlfT5cclxuICAgICAgICAgICAgICA8aDUgc3R5bGU9e2g1U3R5bGV9PkJMT0dHRVIuQ09NIEJMT0c6PC9oNT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9CbG9nZ2VyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJDYXIgRGF0YWJhc2VcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e2ltYWdlU3R5bGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlua30gc3R5bGU9e2ljb25TdHlsZX0gLz5cclxuICAgICAgICAgICAgICAgIExpbms6XHJcbiAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2hhbmVsbGVib3NpZ2VyZGV2LmJsb2dzcG90LmNvbS9cIlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e2xpbmtTdHlsZX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXtjaGFuZ2VGb250Q29sb3J9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlT3V0PXtjaGFuZ2VCYWNrRm9udENvbG9yfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICYjODIyNjsgQkxPR0dFUi5DT01cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQXBwRGlzcGxheT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBFeHBvcnRlZCBwcm9qZWN0cyBwYWdlIHRvIGJlIGdlbmVyYXRlZC5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=