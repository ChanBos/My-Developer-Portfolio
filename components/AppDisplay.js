// Imported the Link API to support client-side navigation.
import Link from "next/link";
// Importing the Next built-in component to append elements to the head of the page.
import Head from "next/head";
// Importing the header component.
import Header from "./Header";

/**
 * Created a global style.
 */

// Set the application's margins, padding and font size and families.
const appDisplayStyle = {
  margin: 0,
  padding: 0,
  fontSize: 15,
  fontFamily: "Staatliches, Trebuchet, Helvetica",
};

/**
 * Added the links to utilize React Bootstrap and the Google font.
 * @param {*} props Children pages for appDisplayStyle to render - index, about, projects, contact.
 * @returns The application's general styling and the header component, with appended links, for use in the pages.
 */

const AppDisplay = (props) => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Staatliches"
      />
    </Head>
    <div style={appDisplayStyle}>
      <Header />
      {props.children}
    </div>
  </div>
);

// Exporting AppDisplay for use on the pages.
export default AppDisplay;
