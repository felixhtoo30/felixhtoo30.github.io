import React from "react";
// import profileImg from "../assets/images/propic-fh-masked.png?url";
import profileImg from "../assets/images/propic-fh.jpg?url";
// import {data} from "../db.js";
import data from "../db.json";

const ResumeSection = ({ id, title, children }) => (
  <section className="flex mb-10" id={id}>
    <div className="w-[32%]">
      <h2 className="pa-head text-primary mr-4">{title}</h2>
    </div>
    <div className="w-[68%]">{children}</div>
  </section>
);

export class Resume extends React.PureComponent {
  render() {
    const Experience = ({ exp }) => (
      <div className="mb-6">
        <h3 className="pa-subhead">{exp.title}</h3>
        <h4 className="pa-normal">{exp.company}</h4>
        <p className="pa-normal font-bold">{exp.duration}</p>
        {/* <div dangerouslySetInnerHTML={{ __html: exp.description }} /> */}
        <ul>
          {exp.description.map((val) => (
            <li key={val}>{val}</li>
          ))}
        </ul>
      </div>
    );

    const ProjectDev = ({ dev }) => (
      <div className="my-5">
        <p className="font-bold text-lg">{dev.name}</p>
        <ul>
          <li>
            <strong>Duration</strong>: {dev.duration}
          </li>
          <li>
            <strong>Skills</strong>: {dev.skills}
          </li>
          {dev.remark ? (
            <li>
              <strong>Remark</strong>: {dev.remark}
            </li>
          ) : (
            ""
          )}
          {dev.url ? (
            <li>
              <a href={dev.url} className="pa-url">
                Check Website
              </a>
            </li>
          ) : (
            ""
          )}
        </ul>
        {/* <div className="mt-3 flex text-3xl text-primary">
          <i className="fab fa-html5 mx-2" />
          <i className="fab fa-css3-alt mx-2" />
          <i className="fab fa-php mx-2" />
          <i className="fab fa-laravel mx-2" />
        </div> */}
      </div>
    );

    const ProjectDesign = ({ design }) => {
      return (
        <p className="w-full mt-4">
          {design.name}
          <br />(
          <a href={design.link} className="text-primary">
            {design.link_text}
          </a>
          )
        </p>
      );
    };

    return (
      <div
        className="mx-auto my-0 px-10"
        id="printArea"
        ref={this.props.contentRef}
      >
        <div className="main flex mb-6">
          <div className="w-[32%]">
            <div className="w-[186px] overflow-hidden rounded-full">
              <img
                src={profileImg}
                alt="Felix Htoo"
                className="object-cover scale-105 translate-x-1"
              />
            </div>
          </div>
          <div className="w-[68%]">
            <h1 className="text-3xl text-primary mb-8">
              Htoo Ant Hlaing (Felix)
            </h1>
            <div className="main-info mb-4">
              <h3 className="pa-subhead">Email</h3>
              <p className="pa-normal">felixhtoo30@gmail.com</p>
            </div>
            {/* <div className="main-info mb-4">
              <h3 className="pa-subhead">Phone</h3>
              <p className="pa-normal">+66834748743</p>
            </div> */}
            <div className="main-info mb-4">
              <h3 className="pa-subhead">LinkedIn</h3>
              <p className="pa-normal">https://linkedin.com/in/felixhtoo30</p>
            </div>
            <div className="main-info mb-4">
              <h3 className="pa-subhead">GitHub</h3>
              <p className="pa-normal">https://github.com/felixhtoo30</p>
            </div>
            <div className="main-info mb-4">
              <h3 className="pa-subhead">Address</h3>
              <p className="pa-normal">Bangkok, Thailand</p>
              {/* <p className="pa-normal">Bangkok, Thailand</p> */}
            </div>
          </div>
        </div>
        <ResumeSection id="objective" title="Summary">
          <p className="pa-normal">
            I'm a Senior Full-Stack Engineer with 8+ years of experience
            building web products across frontend, backend, cloud
            infrastructure, and client-facing delivery. Combines strong
            engineering foundations with UX thinking and design-system
            stewardship to translate product requirements into usable,
            maintainable digital experiences. Experienced in remote
            collaboration with international teams and currently advancing
            AI-assisted, specification-driven development practices.
          </p>
        </ResumeSection>
        <ResumeSection id="profile" title="Core Strengths">
          <ul>
            <li>
              End-to-end web product development across frontend, backend, APIs,
              cloud deployment, and ongoing maintenance.
            </li>
            <li>
              Strong frontend and UX engineering focus, including design-system
              stewardship and translating product requirements into clear,
              usable interfaces.
            </li>
            <li>
              5 years of remote experience collaborating with international
              clients and cross-functional teams across the Southeast Asia.
            </li>
            <li>
              Product experience spanning e-commerce, marketplaces, education,
              logistics, reporting, real estate, and booking platforms.
            </li>
            <li>
              Projects experience with the following fields: Distribution,
              Warehouse, Cloud Reporting, Marketplace, E-commerce, Real Estate,
              LMS Education, Hotel Booking, Event Booking and School
              Registration.
            </li>
          </ul>
        </ResumeSection>
        <ResumeSection id="skill" title="Technical Skills">
          <div className="mb-4">
            <p className="pa-subhead mb-1">Frontend Engineering</p>
            <p className="pa-normal">
              React · JavaScript · HTML5 · CSS3 · SASS · Responsive UI
            </p>
          </div>
          <div className="mb-4">
            <p className="pa-subhead mb-1">Backend Engineering</p>
            <p className="pa-normal">Node.js · Laravel · REST API</p>
          </div>
          <div className="mb-4">
            <p className="pa-subhead mb-1">Databases & Persistence</p>
            <p className="pa-normal">PostgreSQL · MySQL · Prisma · TypeORM</p>
          </div>

          <div className="mb-4">
            <p className="pa-subhead mb-1">Platforms</p>
            <p className="pa-normal">WordPress · Shopify · Magento</p>
          </div>

          <div className="mb-4">
            <p className="pa-subhead mb-1">Cloud &amp; Delivery</p>
            <p className="pa-normal">
              Azure · AWS · Digital Ocean · Docker · Self-hosted infrastructure
              · Deployment and maintenance
            </p>
          </div>

          <div className="mb-4">
            <p className="pa-subhead mb-1">AI-Native Development</p>
            <p className="pa-normal">
              Codex · Specification-led implementation · Step-by-step
              AI-assisted implementation · Figma-MCP integration · AI-assisted
              code review · Database-schema exploration · Human validation and
              refactoring
            </p>
          </div>

          <div className="mb-4">
            <p className="pa-subhead mb-1">UX Engineering</p>
            <p className="pa-normal">
              UX/UI design · Design-system stewardship · UI implementation ·
              Translating product requirements into interface decisions
            </p>
          </div>
          <div>
            <p className="pa-subhead mb-1">Professional Collaboration</p>
            <p className="pa-normal">
              Remote collaboration · Client communication · Independent delivery
              · Requirements clarification · Technical leadership ·
              Cross-functional teamwork
            </p>
          </div>
        </ResumeSection>
        <ResumeSection id="experience" title="Work Experiences">
          {data.experience.map((exp, i) => (
            <Experience exp={exp} key={i} />
          ))}
        </ResumeSection>
        <ResumeSection id="project" title="Projects">
          <h3 className="pa-subhead">Development</h3>
          {data.project.dev.map((val, i) => (
            <ProjectDev dev={val} key={i} />
          ))}

          <h3 className="pa-subhead mt-12">UXUI Design</h3>
          <div className="flex flex-wrap">
            {data.project.design.map((val, i) => (
              <ProjectDesign design={val} key={i} />
            ))}
          </div>
        </ResumeSection>
        <ResumeSection id="education" title="Education">
          <p className="pa-normal">
            Bachelor of Computer Science (B.C.Sc) from University of Computer
            Studies, Yangon (UCSY)
            <br />
            (2012-2017)
          </p>
        </ResumeSection>
        <ResumeSection id="certifications" title="Certifications">
          <div className="mb-4">
            <p className="pa-subhead mb-1">
              Object-Oriented UI Design: Build Interfaces Users Love
            </p>
            <p className="pa-normal">
              - IxDF (Interaction Design Foundation), 2026 <br/>
              (<a
                href="https://ixdf.org/members/felix-htoo/certificate/course/2bb1e5fb-32e2-4fb5-9e9f-395002e95a32"
                className="pa-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                View credential
              </a>)
            </p>
          </div>
          <div className="mb-4">
            <p className="pa-subhead mb-1">
              Design Psychology: Master the Art and Science of UX Design
            </p>
            <p className="pa-normal">- LinkedIn Learning, 2026</p>
          </div>
        </ResumeSection>
        {/* 595 x 842 */}
      </div>
    );
  }
}

export default Resume;
