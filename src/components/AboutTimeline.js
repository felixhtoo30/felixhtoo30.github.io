import React from "react";
import Banner from "./Banner";

const AboutTimeline = () => {
  const states = [
    {
      date: "2017 Oct",
      content: {
       text : "Started a job as Software Engineer at ",
       linkText : "HIMS Co.,Ltd.",
       linkHref : "https://hirokei-myanmar.com"
      },
      duration: "(2017 Oct ~ 2018 Nov)",
      skills: []
    },{
      date: "2018 Feb",
      content: {
        text : "Graduated from ",
        linkText : "University of Computer Studies, Yangon (UCSY)",
        linkHref : "https://ucsy.edu.mm/"
      },
      duration: "(2012 Dec ~ 2017 Sept)",
      skills: []
    },{
      date: "2018 Nov",
      content: {
        text : "Attended PHP Advanced Web Development Course at ",
        linkText : "ICTTI/IMCEITS",
        linkHref : "https://ictresearch.edu.mm/"
      },
      duration: "(2018 Nov ~ 2019 Jan)",
      skills: []
    },{
      date: "2019 Feb",
      content: {
        text : "Worked as a Web Developer at ",
        linkText : "CGM Golden Land Co.,Ltd.",
        linkHref : "http://cgm-myanmar.com/"
      },
      duration: "(2019 Feb ~ 2020 Nov)",
      skills: []
    },{
      date: "2019 Nov",
      content: {
        text : "Started Learning UI/UX Design as Self-Taught",
        linkText : "",
        linkHref : ""
      },
      duration: "(2019 Nov ~ Present)",
      skills: []
    },{
      date: "2020 June",
      content: {
        text : "Worked as a Freelance UI/UX & Web Designer at ",
        linkText : "Century-Links",
        linkHref : "https://centurylinksmm.com/"
      },
      duration: "(2020 June ~ Present)",
      skills: []
    },{
      date: "2020 Dec",
      content: {
        text : "Worked as a UI/UX Web Designer at ",
        linkText : "Yammobots Co.,Ltd.",
        linkHref : "https://yammobots.com/"
      },
      duration: "(2020 Dec ~ 2021 May)",
      skills: []
    },
  ];

  const TimelineState = ({ state }) => {
    return (
      <div className="timeline-state py-4">
        <p className="text-lg md:text-xl lg:text-2xl text-primary">{state.date}</p>
        <div className="timeline-card p-3 md:p-5 lg:p-6 my-2 md:my-4 text-secondary">
          <p className="text-sm md:text-lg lg:text-xl font-bold">
            {state.content.text}
            <a href={state.content.linkHref} target="_blank" rel="noreferrer" className="text-primary">{state.content.linkText}</a>
          </p>
          <p className="text-sm md:text-lg lg:text-xl py-2 text-secondary">{state.duration}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <Banner title="About Me" />
      <div className="flex justify-center py-4">
        <div className="timeline-baseline" />
        <div className="timeline-container mr-2 my-4">
          {states.map((state) => (
            <TimelineState state={state} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutTimeline;
