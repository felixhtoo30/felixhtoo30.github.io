import React from "react";
import profile from "../assets/images/profile_masked.png";

export class PrintArea extends React.PureComponent {
  render() {
    return (
      <div className="mx-auto my-8 px-10" id="printArea">
        <div className="main flex mb-12">
          <div className="w-5/12">
            <img src={`${profile}`} alt="Felix Htoo" className="w-9/12" />
          </div>
          <div className="w-7/12">
            <h1 className="text-4xl text-primary mb-8">Htoo Ant Hlaing</h1>
            <div className="main-info mb-4">
              <h3 className="pa-subhead">Email</h3>
              <p className="pa-normal">felixhtoo30@gmail.com</p>
            </div>
            <div className="main-info mb-4">
              <h3 className="pa-subhead">Phone</h3>
              <p className="pa-normal">+95-9450006369</p>
            </div>
            <div className="main-info mb-4">
              <h3 className="pa-subhead">LinkedIn</h3>
              <p className="pa-normal">https://linkedin.com/in/felixhtoo30</p>
            </div>
            <div className="main-info mb-4">
              <h3 className="pa-subhead">Address</h3>
              <p className="pa-normal">
                No.53, 7th floor (B), Eain Gyi St., Pazundaung Tsp., Yangon
              </p>
            </div>
          </div>
        </div>
        <div className="flex mb-12" id="objective">
          <div className="w-4/12">
            <h1 className="pa-head text-primary mr-4">Objective</h1>
          </div>
          <div className="w-8/12">
            <p className="pa-normal">
              I would like to work as Web Developer. I have about 4 years
              hands-on experience with Web Development since 2017.
            </p>
          </div>
        </div>
        <div className="flex mb-12" id="education">
          <div className="w-4/12">
            <h1 className="pa-head text-primary mr-4">Education</h1>
          </div>
          <div className="w-8/12">
            <p className="pa-normal">
              Bachelor of Computer Science (B.C.Sc) from University of Computer
              Studies, Yangon (UCSY)
              <br />
              (2012-2017)
            </p>
          </div>
        </div>
        <div className="flex mb-12" id="profile">
          <div className="w-4/12">
            <h1 className="pa-head text-primary mr-4">Profile</h1>
          </div>
          <div className="w-8/12">
            <p className="pa-normal">
              I am interested and enthusiastic in Making UI/UX Design and Web
              Development.
              <br />I love in both Designing and Developing.
              <br />I spend my spare time with learning UI/UX Design and Coding.
              <br />I used to work as Software Engineer, Developer about 4
              years.
              <br />
              As a Freelance UI/UX and Graphic Designer, I have 2 year hands on
              experience.
            </p>
          </div>
        </div>
        <div className="flex mb-12" id="skill">
          <div className="w-4/12">
            <h1 className="pa-head text-primary mr-4">Skills</h1>
          </div>
          <div className="w-8/12">
            <p className="pa-subhead pt-4 mb-6">Hard-skills</p>
            <SkillBar title="HTML5" level={6} />
            <SkillBar title="CSS3" level={6} />
            <SkillBar title="SCSS/SASS" level={5} />
            <SkillBar title="jQuery" level={6} />
            <SkillBar title="React" level={4} />
            <SkillBar title="Wordpress" level={4} />
            <SkillBar title="Laravel" level={5} />
            <SkillBar title="Figma" level={5} />
            <SkillBar title="Adobe XD" level={4} />
            <SkillBar title="Adobe Photoshop" level={4} />
            <SkillBar title="Adobe Illustrator" level={4} />
            <p className="pa-subhead pt-4 mb-4">Soft-skills</p>
            <ul>
              <li className="pa-normal">Independent</li>
              <li className="pa-normal">Teamwork</li>
              <li className="pa-normal">Responsibility</li>
              <li className="pa-normal">Logical Thinking</li>
              <li className="pa-normal">Self-Taught</li>
              <li className="pa-normal">Active Learner</li>
            </ul>
          </div>
        </div>
        <div className="flex mb-12" id="experience">
          <div className="w-4/12">
            <h1 className="pa-head text-primary mr-4">Work Experiences</h1>
          </div>
          <div className="w-8/12">
            {expArr.map((exp, i) => (
              <Experience exp={exp} key={i} />
            ))}
          </div>
        </div>
        {/* 595 x 842 */}
      </div>
    );
  }
}

const SkillBar = ({ title, level }) => (
  <div className="mb-6">
    <p className="pa-normal mb-2">{title}</p>
    <div className="pa-skill-bar w-10/12 flex">
      {[...Array(10)].map((el, i) => (
        <p
          className={`item w-full h-3 mr-2 ${i < level ? "on" : "off"}`}
          key={i}
        />
      ))}
    </div>
  </div>
);

const Experience = ({ exp }) => (
  <div className="mb-6">
    <h3 className="pa-subhead">{exp.title}</h3>
    <h4 className="pa-normal">{exp.company}</h4>
    <p className="pa-normal font-bold">{exp.duration}</p>
    <div dangerouslySetInnerHTML={{ __html: exp.description }} />
  </div>
);

const expArr = [
  {
    title: "Software Engineer",
    company: "Hirokei Myanmar Systems (Hims)",
    duration: "Oct, 2017 ~ Nov, 2018",
    description: `
      <ul>
        <li>
          Designed and developed for Web Distributor that is warehouse
          controlled system to ease at controlling export/import products.
        </li>
        <li>
          Designed and developed for Regi-Repo (Cloud Reporting System)
          that is useful for restaurant daily, monthly and yearly sales
          reports.
        </li>
        <li>
          Designed and developed Recoface (Face Recognition System) for
          Company Contest Project with 6 Branches.
        </li>
        <li>
          Developed CRM (Customer Relationship Management) that is useful
          for customer controlling and management with follow-ups,
          opportunites, and be suitable for marketing services.
        </li>
        <li>
          Drew pamphlets, and graphic designs for the events and
          products of company.
        </li>
      </ul>
    `
  },
  {
    title: "Web Developer",
    company: "CGM Golden Land (CGMGL)",
    duration: "March, 2019 ~ Nov, 2020",
    description: `
      <ul>
        <li>
          Developed Frontale Football School System to book and apply for Football school.
        </li>
        <li>
          Designed and developed Wordpress theme development for Training.
        </li>
        <li>
          Designed and developed Vue.js for Bulletinboard.
        </li>
        <li>
          Designed and developed GC Dental Events Management System to book and apply for Dental Events Booking.
        </li>
        <li>
          Designed and developed for Ecommerce site with Wordpress and EC-Cube.
        </li>
      </ul>
    `
  },
  {
    title: "UI Designer/Web Developer (Freelance)",
    company: "Century Links MM",
    duration: "June, 2020 ~ Present",
    description: `
      <ul>
        <li>
          Created freelance company logo and portfolio website.
        </li>
        <li>
          Created design and made development for online shopping website with Wordpress (Woocommerce plugin).
        </li>
      </ul>
    `
  },
  {
    title: "Web Designer",
    company: "Yammobots Co., Ltd.",
    duration: "Dec, 2020 ~ April, 2021",
    description: `
      <ul>
        <li>
          Developed Web UI of 'MyCar' Website.
        </li>
        <li>
          Designed UI/UX for e-commerce site.
        </li>
        <li>
          Developed Web UI (mobile/desktop responsive) of iSure Website.
        </li>
      </ul>
    `
  },
];

export default PrintArea;
