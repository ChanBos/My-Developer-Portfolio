// Imported the Link API to support client-side navigation.
import Link from "next/link";
// Imported AppDisplay to set the holistic style of this page.
import AppDisplay from "../components/AppDisplay";
// Imported Font Awesome library and icons. Also added "import "@fortawesome/fontawesome-svg-core/styles.css";" to allow styling the icons.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

/**
 * Styled the projects page.
 */

// Set the height and width of the background image.
const backgroundStyle = {
  height: "auto",
  width: 1349,
};

// Set the position of the containers to absolute. Also set the text alignment to center, for the container to display as flex and the
// direction to be a row.
const containerStyle = {
  position: "absolute",
  display: "flex",
  flexDirection: "row",
  textAlign: "center",
};

// Aligned the row's three sections to the top and left margins.
const section1Style = {
  top: 157,
  left: 140,
};

const section2Style = {
  top: 500,
  left: 140,
};

const section3Style = {
  top: 342,
  left: 0,
};

const section4Style = {
  top: 680,
  left: 0,
};

// Set the width and the margins of the columns.
const colStyle = {
  width: 480,
  marginLeft: 25,
  marginRight: 25,
};

// Set the position of the projects page's h1 header text to absolute and aligned it to the top and left margins.
const h1Style = {
  position: "absolute",
  left: 580,
  top: 70,
};

// Set the font weight and the bottom margin of the h5 headers.
const h5Style = {
  fontWeight: "bold",
  marginBottom: 10,
};

// Set the font size and right and bottom margins of the icons.
const iconStyle = {
  fontSize: 12,
  marginRight: 5,
  marginBottom: 2,
};

// Set the left and right margins and the font color, size, weight and decoration of the header links.
const linkStyle = {
  color: "#000000",
  textDecoration: "none",
};

// Created onMouseOver and onMouseOut event handler functions to change the font colors of the links once hovered over
// and to change back the colour when the links are no longer hovered over.
const changeFontColor = (e) => {
  e.target.style.color = "#8e5e66";
};

const changeBackFontColor = (e) => {
  e.target.style.color = "#000000";
};

// Set the width and the bottom margin of the images.
const imageStyle = {
  width: 470,
  marginBottom: 10,
};

/**
 * Returning page with styled images of projects and GitHub and Heroku links (opens in new tab via target="_blank"). Each project also has a
 * header with the name of the project.
 * Utilized Object.assign to add multiple styles to elements.
 */

const Projects = () => {
  return (
    <div>
      <AppDisplay>
        <img
          src="/static/images/Projects.png"
          alt="Background"
          style={backgroundStyle}
        />
        <h1 style={h1Style}>PROJECTS</h1>
        <div style={Object.assign({}, containerStyle, section1Style)}>
          <div style={colStyle}>
            <h5 style={h5Style}>SHOPPING CART APPLICATION:</h5>
            <img
              src="/static/images/ShoppingCart.png"
              alt="Shopping Cart"
              style={imageStyle}
            />
            <br />
            <h6>
              <FontAwesomeIcon icon={faLink} style={iconStyle} />
              Link:
            </h6>
            <a
              href="https://github.com/ChanBos/Shopping-Cart"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
              onMouseOver={changeFontColor}
              onMouseOut={changeBackFontColor}
            >
              &#8226; GITHUB REPOSITORY
            </a>
          </div>
          <div style={colStyle}>
            <h5 style={h5Style}>SUDOKU GAME APPLICATION:</h5>
            <img
              src="/static/images/Sudoku.png"
              alt="Sudoku"
              style={imageStyle}
            />
            <br />
            <h6>
              <FontAwesomeIcon icon={faLink} style={iconStyle} />
              Links:
            </h6>
            <a
              href="https://github.com/ChanBos/Sudoku-App"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
              onMouseOver={changeFontColor}
              onMouseOut={changeBackFontColor}
            >
              &#8226; GITHUB REPOSITORY
            </a>
            <br />
            <a
              href="https://fathomless-island-77318.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
              onMouseOver={changeFontColor}
              onMouseOut={changeBackFontColor}
            >
              &#8226; DEPLOYED APPLICATION
            </a>
          </div>
        </div>
        <div style={Object.assign({}, containerStyle, section2Style)}>
          <div style={colStyle}>
            <h5 style={h5Style}>WEB PROJECTS LIST APPLICATION:</h5>
            <img
              src="/static/images/WebProjects.png"
              alt="Web Projects"
              style={imageStyle}
            />
            <br />
            <h6>
              <FontAwesomeIcon icon={faLink} style={iconStyle} />
              Link:
            </h6>
            <a
              href="https://mighty-forest-67321.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
              onMouseOver={changeFontColor}
              onMouseOut={changeBackFontColor}
            >
              &#8226; DEPLOYED APPLICATION
            </a>
          </div>
          <div style={colStyle}>
            <h5 style={h5Style}>iTunes WEB APPLICATION</h5>
            <img
              src="/static/images/iTunes.png"
              alt="iTunes"
              style={imageStyle}
            />
            <br />
            <h6>
              <FontAwesomeIcon icon={faLink} style={iconStyle} />
              Links:
            </h6>
            <a
              href="https://github.com/ChanBos/iTunes-Search-App"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
              onMouseOver={changeFontColor}
              onMouseOut={changeBackFontColor}
            >
              &#8226; GITHUB REPOSITORY
            </a>
            <br />
            <a
              href="https://itunes-search-app-heroku.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
              onMouseOver={changeFontColor}
              onMouseOut={changeBackFontColor}
            >
              &#8226; DEPLOYED APPLICATION
            </a>
          </div>
          <div style={Object.assign({}, containerStyle, section3Style)}>
            <div style={colStyle}>
              <h5 style={h5Style}>CAR DATABASE APPLICATION:</h5>
              <img
                src="/static/images/CarDatabase.png"
                alt="Car Database"
                style={imageStyle}
              />
              <br />
              <h6>
                <FontAwesomeIcon icon={faLink} style={iconStyle} />
                Link:
              </h6>
              <a
                href="https://github.com/ChanBos/Car-Database-App"
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
                onMouseOver={changeFontColor}
                onMouseOut={changeBackFontColor}
              >
                &#8226; GITHUB REPOSITORY
              </a>
            </div>
            <div style={colStyle}>
              <h5 style={h5Style}>NEXT.JS RECIPE SEARCH APP:</h5>
              <img
                src="/static/images/RecipeApp.png"
                alt="Recipe App"
                style={imageStyle}
              />
              <br />
              <h6>
                <FontAwesomeIcon icon={faLink} style={iconStyle} />
                Link:
              </h6>
              <a
                href="https://github.com/ChanBos/Next-Recipe-Search-App"
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
                onMouseOver={changeFontColor}
                onMouseOut={changeBackFontColor}
              >
                &#8226; GITHUB REPOSITORY
              </a>
              <br />
              <a
                href="https://next-recipe-search-app.vercel.app/"
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
                onMouseOver={changeFontColor}
                onMouseOut={changeBackFontColor}
              >
                &#8226; DEPLOYED APPLICATION
              </a>
            </div>
          </div>
          <div style={Object.assign({}, containerStyle, section4Style)}>
            <div style={colStyle}>
              <h5 style={h5Style}>BLOGGER.COM BLOG:</h5>
              <img
                src="/static/images/Blogger.png"
                alt="Car Database"
                style={imageStyle}
              />
              <br />
              <h6>
                <FontAwesomeIcon icon={faLink} style={iconStyle} />
                Link:
              </h6>
              <a
                href="https://chanellebosigerdev.blogspot.com/"
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
                onMouseOver={changeFontColor}
                onMouseOut={changeBackFontColor}
              >
                &#8226; BLOGGER.COM
              </a>
            </div>
          </div>
        </div>
      </AppDisplay>
    </div>
  );
};

// Exported projects page to be generated.
export default Projects;
