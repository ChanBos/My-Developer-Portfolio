// Imported the Link API to support client-side navigation.
import Link from "next/Link";

/**
 * Styled the header component.
 */

// Setting the header's position to absolute and set the padding and background color to tran
const headerStyle = {
  position: "absolute",
  padding: 20,
  backgroundColor: "transparent",
};

// Set the left and right margins and the font color, size, weight and decoration of the header links.
const linkStyle = {
  marginLeft: 20,
  marginRight: 40,
  color: "#000000",
  fontSize: 20,
  textDecoration: "none",
  fontWeight: "bold",
};

// Created onMouseOver and onMouseOut event handler functions to change the font colors of the header links once hovered
// over and to change back the colour when the links are no longer hovered over.
const changeFontColor = (e) => {
  e.target.style.color = "#8e5e66";
};

const changeBackFontColor = (e) => {
  e.target.style.color = "#000000";
};

/**
 * Attached the event handlers to the links with onMouseOver and onMouseOut.
 * @returns The styled header component with navigatable, styled links.
 */

const Header = () => (
  <div style={headerStyle}>
    <Link href="/">
      <a
        style={linkStyle}
        onMouseOver={changeFontColor}
        onMouseOut={changeBackFontColor}
      >
        HOME
      </a>
    </Link>
    <Link href="/about">
      <a
        style={linkStyle}
        onMouseOver={changeFontColor}
        onMouseOut={changeBackFontColor}
      >
        ABOUT
      </a>
    </Link>
    <Link href="/projects">
      <a
        style={linkStyle}
        onMouseOver={changeFontColor}
        onMouseOut={changeBackFontColor}
      >
        PROJECTS
      </a>
    </Link>
    <Link href="/contact">
      <a
        style={linkStyle}
        onMouseOver={changeFontColor}
        onMouseOut={changeBackFontColor}
      >
        CONTACT
      </a>
    </Link>
  </div>
);

// Exporting the Header to the AppDisplay component.
export default Header;
