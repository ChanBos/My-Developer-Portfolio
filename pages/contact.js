// Imported the Link API to support client-side navigation.
import Link from "next/Link";
// Imported components from React Bootstrap.
import { Row } from "react-bootstrap";
// Imported AppDisplay to set the holistic style of this page.
import AppDisplay from "../components/AppDisplay";

/**
 * Styled the contact page.
 */

// Set the height and width of the background image.
const backgroundStyle = {
  height: "auto",
  width: 1349,
};

// Set for the container to display as flex and the direction to be a row.
const containerStyle = {
  display: "flex",
  flexDirection: "row",
};

// Set the position to absolute, the width and aligned the columns to the top of the page.
const colStyle = {
  position: "absolute",
  width: "auto",
  top: 155,
};

// Set the left margins of the two columns.
const col1Style = {
  left: 600,
};

const col2Style = {
  left: 900,
};

// Set the position of the h1 header to absolute and aligned the header to the top-left side of the page.
const h1Style = {
  position: "absolute",
  left: 580,
  top: 70,
};

// Set the font weight and the bottom margin of the h5 headers.
const h5Style = {
  fontWeight: "bold",
  marginBottom: 0,
};

// Set the top and right margins and the font size and weight of the labels.
const labelStyle = {
  marginTop: 10,
  marginRight: 10,
  fontSize: 15,
  fontWeight: "bold",
};

// Set the width, the padding, the border radius and set for the text to change to uppercase.
const inputStyle = {
  width: 350,
  padding: 5,
  borderRadius: 5,
  textTransform: "uppercase",
};

// Set the size (minHeight, height x width), the padding, the border radius and set for the text to change to uppercase.
const messageInputStyle = {
  minHeight: 100,
  height: "auto",
  width: 350,
  padding: 5,
  borderRadius: 5,
  textTransform: "uppercase",
};

// Set the width, the top margin, the padding and the border radius of the submit button.
const buttonStyle = {
  width: 80,
  marginTop: 10,
  padding: 5,
  borderRadius: 5,
};

// Created onMouseOver and onMouseOut event handler functions to change the font colors and the borders (styled, colored
// and sized) of the button once hovered over and to change back when no longer hovered over.
const changeButton = (e) => {
  e.target.style.color = "#8e5e66";
  e.target.style.border = "2px solid #8e5e66";
};

const changeBackButton = (e) => {
  e.target.style.color = "#000000";
  e.target.style.border = "2px outset #767676";
};

// Set the width and the bottom margin of the social media buttons/ images.
const socialImageStyle = {
  width: 35,
  marginLeft: 10,
};

/**
 * Returning page with a header component, a styled image, a styled and operational form, links to social pages and styled contact details with
 * corresponding headers.
 * Utilized Object.assign to add multiple styles to elements.
 */

const Contact = () => {
  return (
    <div>
      <AppDisplay>
        <img
          src="/static/images/Contact.png"
          alt="Background"
          style={backgroundStyle}
        />
        <h1 style={h1Style}>CONTACT</h1>
        <div style={containerStyle}>
          <div style={Object.assign({}, colStyle, col1Style)}>
            <h5 style={h5Style}>ADDRESS:</h5>
            <p>New Germany, Durban, South Africa, 3610</p>
            <h5 style={h5Style}>PHONE NUMBER:</h5>
            <p>071 866 6660</p>
            <h5 style={h5Style}>EMAIL ADDRESS:</h5>
            <p>scheeperschanelle@gmail.com</p>
            <Row>
              <a
                href="https://github.com/ChanBos"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/static/images/GitHub.png"
                  alt="Social Links"
                  title="GitHub"
                  style={socialImageStyle}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/chanelle-b%C3%B6siger-70587767/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/static/images/LinkedIn.png"
                  alt="Social Links"
                  title="LinkedIn"
                  style={socialImageStyle}
                />
              </a>
              <a
                href="https://www.hyperiondev.com/portfolio/58981/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/static/images/HyperionDev.png"
                  alt="Social Links"
                  title="HyperionDev"
                  style={socialImageStyle}
                />
              </a>
            </Row>
          </div>

          <div style={Object.assign({}, colStyle, col2Style)}>
            <h5 style={h5Style}>
              You may also contact me via the following form:
            </h5>
            <form
              action="mailto:scheeperschanelle@gmail.com"
              method="post"
              type="text/plain"
            >
              <label style={labelStyle} name="Name">
                NAME:
              </label>
              <br />
              <input
                type="text"
                name="Name"
                style={inputStyle}
                placeholder="ENTER NAME AND SURNAME"
              />
              <br />
              <label style={labelStyle} name="Email">
                EMAIL ADDRESS:
              </label>
              <br />
              <input
                type="text"
                name="Email"
                style={inputStyle}
                placeholder="ENTER EMAIL ADDRESS"
              />
              <br />
              <label style={labelStyle} name="Contact">
                PHONE NUMBER:
              </label>
              <br />
              <input
                type="text"
                name="Contact"
                style={inputStyle}
                placeholder="ENTER PHONE NUMBER"
              />
              <br />
              <label style={labelStyle} name="Message">
                MESSAGE:
              </label>
              <br />
              <textarea
                type="text"
                name="Message"
                style={messageInputStyle}
                placeholder="TYPE MESSAGE HERE"
              ></textarea>
              <br />
              <div>
                <button
                  type="submit"
                  value="submit"
                  style={buttonStyle}
                  onMouseOver={changeButton}
                  onMouseOut={changeBackButton}
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </AppDisplay>
    </div>
  );
};

// Exported contact page to be generated.
export default Contact;
