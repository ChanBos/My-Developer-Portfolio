// Imported the Link API to support client-side navigation.
import Link from "next/Link";
// Imported AppDisplay to set the holistic style of this page.
import AppDisplay from "../components/AppDisplay";

/**
 * Styled the home page.
 */

// Set the height and width of the background image.
const homeImageStyle = {
  height: "auto",
  width: 1349,
};

// Set the position of the home page's header text to absolute and aligned it to the top and left margins.
const homeTextStyle = {
  position: "absolute",
  left: 140,
  top: 150,
};

// Set the h1 header's font size, weight and color.
const h1Style = {
  fontSize: 40,
  fontWeight: "bold",
  color: "#5c1f1eb5",
};

// Set the h3 header's font size.
const h3Style = {
  fontSize: 30,
};

/**
 * Applied the styles and passed the AppDisplay props.
 * @returns Styled home page, displaying a styled introduction header text section an image and a header component.
 */

const Home = () => {
  return (
    <div>
      <AppDisplay>
        <div style={homeTextStyle}>
          <h3 style={h3Style}>Hi,</h3>
          <h1 style={h1Style}>I AM CHANELLE BÖSIGER.</h1>
          <h3 style={h3Style}>Welcome to my Developer Portfolio.</h3>
        </div>
        <img src="/static/images/HomePic.png" style={homeImageStyle} />
      </AppDisplay>
    </div>
  );
};

// Exported home page to be generated.
export default Home;
