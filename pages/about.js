// Imported the Link API to support client-side navigation.
import Link from "next/link";
// Imported components from React Bootstrap.
import { Container, Col } from "react-bootstrap";
// Imported AppDisplay to set the holistic style of this page.
import AppDisplay from "../components/AppDisplay";

/**
 * Styled the about page.
 */

// Set the height and width of the background image.
const backgroundStyle = {
  height: "auto",
  width: 1349,
};

// Set the position of the about paragraph container to absolute and aligned it to the top and left margins. Also set the text alignment to
// center, the top margin and the width of the container.
const container1Style = {
  position: "absolute",
  top: 0,
  left: 140,
  width: 1000,
  marginTop: 135,
  textAlign: "center",
};

// Set the position of the education section container to absolute and aligned it to the top and left margins. Also set for the container to
// flex and the direction to row.
const container2Style = {
  position: "absolute",
  top: 200,
  left: 0,
  display: "flex",
  flexDirection: "row",
};

// Set the position of the education section container to absolute and aligned it to the top and left margins. Also set the padding and margins
// and for the container to display as flex and the direction to be a row.
const container3Style = {
  position: "absolute",
  top: 620,
  left: 0,
  display: "flex",
  flexDirection: "row",
  margin: 0,
  padding: 0,
};

// Set the width of the columns.
const colStyle = {
  width: 450,
};

// Set the position of the about page's h1 header text to absolute and aligned it to the top and left margins.
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

// Set the position of the work experience container's header text to absolute and aligned it to the top and left margins. Also set the font
// weight and the bottom margin.
const workH5Style = {
  position: "absolute",
  left: 15,
  top: 585,
  marginBottom: 10,
  fontWeight: "bold",
};

// Set the font weight and the bottom margin of the h6 headers.
const h6Style = {
  fontWeight: "bold",
  marginBottom: 0,
};

// Constructed a map array of objects to display the "About Me" information.
const about = [
  {
    id: "1",
    about_description:
      "I am an energetic, ambitious person who is hard working and willing to go the extra mile. I master skills quickly and enjoy taking on new challenges. I work well in a team or an individual environment and always endeavour to bring one hundred percent to the table.",
  },
];

/**
 * Implemented a map array to display the "About" text. Added a key.
 * Passed props to display "About Me" text.
 * @returns
 */

const AboutInfo = () => {
  const aboutData = about.map((about, index) => (
    <Col key={index}>
      <div>
        <p>{about.about_description}</p>
      </div>
    </Col>
  ));

  return (
    <Container>
      <Col>{aboutData}</Col>
    </Container>
  );
};

// Constructed a map array of objects to display the "Skills" information.
const skills = [
  {
    id: "2",
    skill_description: [
      "- Programming Languages: ",
      <br />,
      "HTML, CSS, Styled Components, Bootstrap, JavaScript, jQuery, Typescript, React.js, Node.js, Redux.js, Express.js, Git, Jest, Heroku, Refactoring, MongoDB.",
      <br />,
      "- Microsoft Office Suite: ",
      <br />,
      "Word, Excel, PowerPoint ",
      <br />,
      "- LibreOffice Suite:",
      <br />,
      "Writer, Calc ",
      <br />,
      "- Google Functions ",
      <br />,
      "- SagePay and PayPal ",
      <br />,
      "- Basic Wordpress ",
      <br />,
      "- Basic Photoshop ",
      <br />,
      "- Amazon UK ",
      <br />,
      "- Chatify",
      <br />,
      "- Pastel ",
    ],
  },
];

/**
 * Implemented a map array to display the skill data and added a key.
 * Passed props to display the skill descriptions and to return the data.
 * @returns The skill description data from the array.
 */

const Skills = () => {
  const listSkills = skills.map((skill, index) => (
    <div key={index}>
      <p>{skill.skill_description}</p>
    </div>
  ));
  return (
    <Container>
      <h5 style={h5Style}>COMPUTER AND TECHNICAL SKILLS:</h5>
      <div>{listSkills}</div>
    </Container>
  );
};

// Constructed a map array of objects to display the "Education" information.
const education = [
  {
    id: "3",
    education_degree: "Full Stack Web Developer Bootcamp",
    education_year: "01/2021 - Current",
    education_school: "HyperionDev",
  },
  {
    id: "4",
    education_degree: "Certificate in Customer Service Training",
    education_year: "08/2015 - 08/2015",
    education_school: "VETTA Communication (Pty) Ltd",
  },
  {
    id: "5",
    education_degree: "Bachelor of Commerce: Marketing Management",
    education_year: "01/2010 - 10/2013",
    education_school:
      "University of South Africa (UNISA), Durban, South Africa",
  },
  {
    id: "6",
    education_degree: "Matriculation",
    education_year: "01/1997 - 12/2008",
    education_school: "Gelofte Skool, Durban, South Africa",
  },
];

/**
 * Implemented a map array to display the education data and added a key.
 * Passed props to display the education data and to return the information.
 * @returns The education degree, year and institution data from the array.
 */

const Education = () => {
  const listEducation = education.map((education, index) => (
    <div key={index}>
      <h6 style={h6Style}>&#8226; {education.education_degree}</h6>
      <h6 style={h6Style}>{education.education_year}</h6>
      <p>{education.education_school}</p>
    </div>
  ));
  return (
    <Container>
      <h5 style={h5Style}>EDUCATION:</h5>
      <div>{listEducation}</div>
    </Container>
  );
};

// Constructed a map array of objects to display the "SupplementaryCourses" information.
// Utilized unicode within the strings to compensate for the items that do not have bullet points.
const courses = [
  {
    id: "7",
    course_school: "Codecademy ",
    course_year: "10/2020 - Current",
    course_course: "Web Development",
  },
  {
    id: "8",
    course_school: "Adobe Photoshop CC",
    course_year: "05/2020 - Current",
    course_course: "Online Essentials Training Course",
  },
  {
    id: "9",
    course_school: "Google Digital Skills for Africa",
    course_year: "04/2020 - Current",
    course_course: "Fundamentals of Digital Marketing Online Course",
  },
  {
    id: "10",
    course_school: "IT Intellect",
    course_year: "11/2004 - 11/2005",
    course_course: [
      "Competence in MS Excel 2000 (ICE Module 4) - 65% (November 2005)",
      <br />,
      " \u{2022} Competence in MS PowerPoint 2000 (ICE Module 6) – 85% (November 2005)",
      <br />,
      " \u{2022} Competence in MS Word 2000 (ICE Module 3) - 80% (November 2004)",
      <br />,
    ],
  },
];

/**
 * Implemented a map array to display the supplementary courses' data and added a key.
 * Passed props to display the supplementary courses' data and to return the information.
 * @returns The skill description data from the array.
 */

const SupplementaryCourses = () => {
  const listCourses = courses.map((courses, index) => (
    <div key={index}>
      <h6 style={h6Style}>&#8226; {courses.course_course}</h6>
      <h6 style={h6Style}>{courses.course_year}</h6>
      <p>{courses.course_school}</p>
    </div>
  ));
  return (
    <Container>
      <h5 style={h5Style}>SUPPLEMENTARY COURSES/ CERTIFICATIONS:</h5>
      <div>{listCourses}</div>
    </Container>
  );
};

// Constructed a map array of objects to display the "Work Experience" information.
const workexperience = [
  {
    id: "11",
    position_name:
      "E-commerce Administrator - The Safari Store (UK-based e-commerce retail store), Durban, South Africa",
    position_date: "04/2016 - 04/2020",
    position_company: "",
    position_description: [
      "Assisting clients over the phone, via email and via live support.",
      <br />,
      "Managing client orders that were placed via the online store.",
      <br />,
      "Coordination of deliveries, collections and couriers internationally, sometimes having to liaise with country’s Customs department.",
      <br />,
      "Making and releasing client payments via SagePay.",
      <br />,
      "Processing client returns (exchanges and refunds).",
      <br />,
      "Assisting the Managing Director in accumulating and capturing data.",
      <br />,
      "Social media posting in Creative Manager’s absence.",
      <br />,
      "Managing the company’s Partners Programme.",
      <br />,
      "Tracking down suppliers and acquiring quotations.",
      <br />,
      "Generating ideas of new products and strategies.",
      <br />,
      "Overseeing team members.",
      <br />,
      "Operations training and development of team members.",
      <br />,
      "Placing UK-based stock orders and liaising with the warehouse members once the shipment is received.",
    ],
    position_leaving:
      "Due to the COVID-19 pandemic having a big financial impact on the company the entire Durban team was retrenched.",
  },
  {
    id: "12",
    position_name:
      "Sales Coordinator - Spec Systems (Label printing company), Durban, South Africa",
    position_date: "10/2014 - 03/2016",
    position_company: "",
    position_description: [
      "Pastel:",
      <br />,
      "- Quotations",
      <br />,
      "- Placing orders",
      <br />,
      "- Invoicing",
      <br />,
      "- Informing customers of their order statuses",
      <br />,
      "- Assisting with inventory queries",
      <br />,
      "- Recording incidents",
      <br />,
      "Stock process management.",
      <br />,
      "Coordination of deliveries, collections and couriers.",
      <br />,
      "Management of the driver/store-man.",
      <br />,
      "Filing and updating customer files.",
      <br />,
      "Training of team members.",
    ],
    position_leaving:
      "I was looking for better career prospects, professional growth and work opportunities.",
  },
  {
    id: "13",
    position_name:
      "Junior Account Executive - Beetle Inc (Marketing agency), Durban, South Africa",
    position_date: "04/2014 - 07/2014",
    position_company: "",
    position_description: [
      "Assistant account manager in retail for the following shopping centre accounts:",
      <br />,
      "- Ballito Junction",
      <br />,
      "- Berea Centre",
      <br />,
      "- Capital Centre",
      <br />,
      "- Southcoast Mall",
      <br />,
      "- The Mall @ Scottsville",
      <br />,
      "Arranging shopper and tenant interviews.",
      <br />,
      "Coordinating the creation, collection and distribution of tenantnewsletters and marketing materials.",
      <br />,
      "Arranging events and taking photos for social media.",
      <br />,
      "Social media management for key accounts.",
      <br />,
      "Working alongside website platform designers creating and managingwebsites for key accounts.",
      <br />,
      "Managing advertising media rentals (snapper and poster frames).",
      <br />,
      "Managing promotional staff.",
      <br />,
      "Briefing artwork of marketing materials to the creative team.",
      <br />,
      "Copywriting.",
    ],
    position_leaving:
      "I was seeking a job with better career growth opportunities.",
  },
];

/**
 * Implemented a map array to display the work positions' data and added a key.
 * Passed props to display the work positions' data and to return the information.
 * @returns The work position, dates of employment, company name, the roles fulfilled and the reason for leaving data from the array.
 */

const WorkExperience = () => {
  const listWorkExperience = workexperience.map((workexperience, index) => (
    <Col key={index}>
      <div>
        <h6 style={h6Style}>&#8226; {workexperience.position_name}</h6>
        <h6 style={h6Style}>{workexperience.position_date}</h6>
        <h6 style={h6Style}>{workexperience.position_company}</h6>
        <h6 style={h6Style}>Role Description:</h6>
        <p>{workexperience.position_description}</p>
        <h6 style={h6Style}>Reason for Leaving:</h6>
        <p>{workexperience.position_leaving}</p>
      </div>
    </Col>
  ));
  return (
    <Container>
      <h5 style={workH5Style}>WORK EXPERIENCE:</h5>
      <Col style={container3Style}>{listWorkExperience}</Col>
    </Container>
  );
};

/**
 * Applied the styles and passed the AppDisplay props.
 * Returning the page with all of the about, education, skills, supplementary course and work experience data, displayed in containers with
 * columns. The text and headers, as well as the background has been styled and the props passed.
 */

const About = () => {
  return (
    <div>
      <AppDisplay>
        <img
          src="/static/images/About.png"
          alt="Background"
          style={backgroundStyle}
        />
        <h1 style={h1Style}>ABOUT</h1>
        <div style={container1Style}>{AboutInfo()}</div>
        <div style={container2Style}>
          <div style={colStyle}>{Education()}</div>
          <div style={colStyle}>{SupplementaryCourses()}</div>
          <div style={colStyle}>{Skills()}</div>
        </div>
        <div>{WorkExperience()}</div>
      </AppDisplay>
    </div>
  );
};

// Exported about page to be generated.
export default About;
