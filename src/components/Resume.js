import React from "react";
import profileImg from "../assets/images/profile_masked.png";
// import {data} from "../db.js";
import data from "../db.json";

export class Resume extends React.PureComponent {
  render() {
    const SkillBar = ({ title, detail, level }) => (
      <div className="mb-6">
        <p className="pa-normal mb-2">{title}<br/>{detail}</p>
        <div className="pa-skill-bar w-10/12 flex">
          {[...Array(10)].map((el, i) => (
            <p
              className={`item w-full h-2 mr-2 ${i < level ? "on" : "off"}`}
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
        <p>duration: {dev.duration}</p>
        <p>skills: {dev.skills}</p>
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
        <div className="main flex mb-12">
          <div className="w-5/12">
            <img src={`${profileImg}`} alt="Felix Htoo" className="w-9/12" />
          </div>
          <div className="w-7/12">
            <h1 className="text-3xl text-primary mb-8">Htoo Ant Hlaing (Felix)</h1>
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
              I would like to work as Full Stack Developer. I have about 4 years
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
            I am interested in learning and developing products with Web technologies.
            <br />I'm UIUX Design Enthusiast.
            <br />I'm keen on logical thinking and problem solving.
            <br />I've worked as Software Engineer about 1 year and Web Developer about 3 years.
            <br />I usually use my free time by reading about Web technologies, Designs and honing my Programming knowledge and skills.
            <br />My Hobbies are Reading, Watching films, Learning, Psychology, Philosophy, Programming and Design.
            </p>
          </div>
        </div>
        <div className="flex mb-12" id="skill">
          <div className="w-4/12">
            <h1 className="pa-head text-primary mr-4">Skills</h1>
          </div>
          <div className="w-8/12">
            <p className="pa-subhead pt-2 mb-6">Hard-skills</p>
            <SkillBar title="HTML5/CSS3" level={7} />
            <SkillBar title="SCSS/SASS" level={6} />
            <SkillBar title="JQuery" level={6} />
            <SkillBar title="Reactjs" level={5} />
            <SkillBar title="Nodejs" level={4} />
            <SkillBar title="Laravel" level={7} />
            <SkillBar title="Wordpress" level={6} />
            <SkillBar title="Magento" level={4} />
            <SkillBar title="Figma" level={5} />
            <SkillBar title="Adobe XD" level={4} />
            {/* <SkillBar title="Adobe Photoshop/Illustrator" level={4} /> */}
            {/* <SkillBar title="Adobe Illustrator" level={4} /> */}
            <p className="pa-subhead pt-4 mb-4">Soft-skills</p>
            <p>Independent . Motivated . Organized . Teamwork . Problem solving . Self-taught . Adaptability . Responsibility</p>
          </div>
        </div>
        <div className="flex mb-12" id="experience">
          <div className="w-4/12">
            <h1 className="pa-head text-primary mr-4">Work Experiences</h1>
          </div>
          <div className="w-8/12">
            {data.experience.map((exp, i) => (
              <Experience exp={exp} key={i} />
            ))}
          </div>
        </div>
        <div className="flex mb-12" id="project">
          <div className="w-4/12">
            <h1 className="pa-head text-primary mr-4">Projects</h1>
          </div>
          <div className="w-8/12">
            <h3 className="pa-subhead">Development</h3>
            {data.project.dev.map((val, i) => (
              <ProjectDev dev={val} key={i} />
            ))}

            <h3 className="pa-subhead mt-12">UIUX Design</h3>
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
