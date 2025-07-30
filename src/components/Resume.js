import React from "react";
import profileImg from "../assets/images/profile_masked.png";
// import {data} from "../db.js";
import data from "../db.json";

export class Resume extends React.PureComponent {
  render() {
    const maxLevel = 10;
    const SkillBar = ({ title, detail, level }) => (
      <div className="mb-6">
        <p className="pa-normal mb-2">
          {title}
          <br />
          {detail}
        </p>
        <div className="pa-skill-bar w-10/12 flex">
          {[...Array(maxLevel)].map((el, i) => (
            <p
              className={`item w-full h-2 mr-1 ${i < level ? "on" : "off"}`}
              key={i}
            ></p>
          ))}
        </div>
      </div>
    );

    const Experience = ({ exp }) => (
      <div className="mb-6">
        <h3 className="pa-subhead">{exp.title}</h3>
        <h4 className="pa-normal">{exp.company}</h4>
        <p className="pa-normal font-bold">{exp.duration}</p>
        {/* <div dangerouslySetInnerHTML={{ __html: exp.description }} /> */}
        <ul>
          {exp.description.map((val) => (
            <li>{val}</li>
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
      <div className="mx-auto my-0 px-10" id="printArea">
        <div className="main flex mb-10">
          <div className="w-5/12">
            <img src={`${profileImg}`} alt="Felix Htoo" className="w-9/12" />
          </div>
          <div className="w-7/12">
            <h1 className="text-3xl text-primary mb-8">
              Htoo Ant Hlaing (Felix)
            </h1>
            <div className="main-info mb-4">
              <h3 className="pa-subhead">Email</h3>
              <p className="pa-normal">felixhtoo30@gmail.com</p>
            </div>
            <div className="main-info mb-4">
              <h3 className="pa-subhead">Phone</h3>
              <p className="pa-normal">+66834748743</p>
            </div>
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
              <p className="pa-normal">
                Room No. 49/102, Floor 6, Building 1, UTR Udomsuk Tower,
                Sukhumvit 103, Bang Na Nuea, Bang Na District, Bangkok 10260
              </p>
              {/* <p className="pa-normal">Bangkok, Thailand</p> */}
            </div>
          </div>
        </div>
        <div className="flex mb-10" id="objective">
          <div className="w-4/12">
            <h1 className="pa-head text-primary mr-4">Objective</h1>
          </div>
          <div className="w-8/12">
            <p className="pa-normal">
              I would like to apply DTV as remote senior full-stack Web
              Developer. I have around 7 years hands-on experience in Web
              Development Industry since 2017.
            </p>
          </div>
        </div>
        <div className="flex mb-10" id="education">
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
        <div className="flex mb-10" id="profile">
          <div className="w-4/12">
            <h1 className="pa-head text-primary mr-4">Profile</h1>
          </div>
          <div className="w-8/12">
            <ul>
              <li>
                I'm currently working as full-time remote as Senior Full-stack
                Web Developer for ConnectingDNA Global Pte. Ltd.
              </li>
              <li>
                As a remote experience, I have around 4 years hands on
                experience about developing the websites since 2022, negotiating
                and communicating with the foreign clients (London, Singapore,
                India, Dubai, Malaysia, and Taiwan).
              </li>
              <li>
                I've worked as Software Engineer about 1 year, and Web Developer
                about 6 years: 3 years as Wordpress Developer and 3 years as
                Full-stack Web Developer.
              </li>
              <li>
                I've projects experience with the following fields:
                Distribution, Warehouse, Cloud Reporting, Marketplace,
                E-commerce, Real Estate, LMS Education, Hotel Booking, Event
                Booking and School Registration.
              </li>
              <li>
                I enjoy building the websites, developing themes & plugins
              </li>
              <li>I'm a problem solver with can-do attitude</li>
              <li>I'm also a UXUI Design Enthusiast.</li>
              <li>
                I usually use my free time by reading about Web technologies,
                UXUI Designs and honing my Programming knowledge and skills.
              </li>
              <li>
                I usually read the books, listening the podcasts, and learning
                something as usual.
              </li>
              <li>
                My favorite topics are Design, Philanthropy, Maths, English,
                Psychology and Self-improvement.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex mb-10" id="skill">
          <div className="w-4/12">
            <h1 className="pa-head text-primary mr-4">Skills</h1>
          </div>
          <div className="w-8/12">
            <p className="pa-subhead pt-2 mb-6">Hard-skills</p>
            <div className="pa-flex-wrapper">
              {/* Level - 7 max. */}
              <SkillBar title="HTML5/CSS3" level={8} />
              <SkillBar title="SCSS/SASS" level={8} />
              <SkillBar title="JQuery" level={8} />
              <SkillBar title="Wordpress" level={8} />
              <SkillBar title="ReactJS" level={8} />
              <SkillBar title="NodeJS" level={7} />
              <SkillBar title="Self-Hosting" level={7} />
              <SkillBar title="AWS" level={7} />
              <SkillBar title="Laravel" level={4} />
              <SkillBar title="Shopify" level={5} />
              <SkillBar title="Magento" level={4} />
              <SkillBar title="UXUI Design" level={6} />
            </div>
            <p className="pa-subhead pt-4 mb-4">Soft-skills</p>
            <p>
              {" "}
              Independent . Self-Motivated . Client Communication . Negotiation
              . Organized . Leadership . Teamwork . Problem solving .
              Self-taught . Adaptability . Responsibility
            </p>
          </div>
        </div>
        <div className="flex mb-10" id="experience">
          <div className="w-4/12">
            <h1 className="pa-head text-primary mr-4">Work Experiences</h1>
          </div>
          <div className="w-8/12">
            {data.experience.map((exp, i) => (
              <Experience exp={exp} key={i} />
            ))}
          </div>
        </div>
        <div className="flex mb-10" id="project">
          <div className="w-4/12">
            <h1 className="pa-head text-primary mr-4">Projects</h1>
          </div>
          <div className="w-8/12">
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
          </div>
        </div>
        {/* 595 x 842 */}
      </div>
    );
  }
}

export default Resume;
