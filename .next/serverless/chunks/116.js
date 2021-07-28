exports.id = 116;
exports.ids = [116];
exports.modules = {

/***/ 2481:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_AppDisplay; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/Link.js
var Link = __webpack_require__(4045);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
;// CONCATENATED MODULE: ./components/Header.js


// Imported the Link API to support client-side navigation.

/**
 * Styled the header component.
 */
// Setting the header's position to absolute and set the padding and background color to tran

const headerStyle = {
  position: "absolute",
  padding: 20,
  backgroundColor: "transparent"
}; // Set the left and right margins and the font color, size, weight and decoration of the header links.

const linkStyle = {
  marginLeft: 20,
  marginRight: 40,
  color: "#000000",
  fontSize: 20,
  textDecoration: "none",
  fontWeight: "bold"
}; // Created onMouseOver and onMouseOut event handler functions to change the font colors of the header links once hovered
// over and to change back the colour when the links are no longer hovered over.

const changeFontColor = e => {
  e.target.style.color = "#8e5e66";
};

const changeBackFontColor = e => {
  e.target.style.color = "#000000";
};
/**
 * Attached the event handlers to the links with onMouseOver and onMouseOut.
 * @returns The styled header component with navigatable, styled links.
 */


const Header = () => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
  style: headerStyle,
  children: [/*#__PURE__*/jsx_runtime.jsx(Link.default, {
    href: "/",
    children: /*#__PURE__*/jsx_runtime.jsx("a", {
      style: linkStyle,
      onMouseOver: changeFontColor,
      onMouseOut: changeBackFontColor,
      children: "HOME"
    })
  }), /*#__PURE__*/jsx_runtime.jsx(Link.default, {
    href: "/about",
    children: /*#__PURE__*/jsx_runtime.jsx("a", {
      style: linkStyle,
      onMouseOver: changeFontColor,
      onMouseOut: changeBackFontColor,
      children: "ABOUT"
    })
  }), /*#__PURE__*/jsx_runtime.jsx(Link.default, {
    href: "/projects",
    children: /*#__PURE__*/jsx_runtime.jsx("a", {
      style: linkStyle,
      onMouseOver: changeFontColor,
      onMouseOut: changeBackFontColor,
      children: "PROJECTS"
    })
  }), /*#__PURE__*/jsx_runtime.jsx(Link.default, {
    href: "/contact",
    children: /*#__PURE__*/jsx_runtime.jsx("a", {
      style: linkStyle,
      onMouseOver: changeFontColor,
      onMouseOut: changeBackFontColor,
      children: "CONTACT"
    })
  })]
}); // Exporting the Header to the AppDisplay component.


/* harmony default export */ var components_Header = (Header);
;// CONCATENATED MODULE: ./components/AppDisplay.js


// Imported the Link API to support client-side navigation.
 // Importing the Next built-in component to append elements to the head of the page.

 // Importing the header component.


/**
 * Created a global style.
 */
// Set the application's margins, padding and font size and families.

const appDisplayStyle = {
  margin: 0,
  padding: 0,
  fontSize: 15,
  fontFamily: "Staatliches, Trebuchet, Helvetica"
};
/**
 * Added the links to utilize React Bootstrap and the Google font.
 * @param {*} props Children pages for appDisplayStyle to render - index, about, projects, contact.
 * @returns The application's general styling and the header component, with appended links, for use in the pages.
 */

const AppDisplay = props => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
  children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(head.default, {
    children: [/*#__PURE__*/jsx_runtime.jsx("link", {
      rel: "stylesheet",
      href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
      integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
      crossOrigin: "anonymous"
    }), /*#__PURE__*/jsx_runtime.jsx("link", {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Staatliches"
    })]
  }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    style: appDisplayStyle,
    children: [/*#__PURE__*/jsx_runtime.jsx(components_Header, {}), props.children]
  })]
}); // Exporting AppDisplay for use on the pages.


/* harmony default export */ var components_AppDisplay = (AppDisplay);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;