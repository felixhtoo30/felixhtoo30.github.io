import React from "react";
import Banner from "./Banner";

const About = () => {
  const states = [
    {
      date: "2017 Oct",
      content: {
       text : "Started my career as Software Engineer at ",
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
        text : "Worked as Web Developer at ",
        linkText : "CGM Golden Land Co.,Ltd.",
        linkHref : "http://cgm-myanmar.com/"
      },
      duration: "(2019 Feb ~ 2020 Nov)",
      skills: []
    },{
      date: "2019 Nov",
      content: {
        text : "Started Learning UI/UX Design as Self-Taught",
        linkText : "Fresher's Works",
        linkHref : ""
      },
      duration: "(2019 Nov ~ Present)",
      skills: []
    },{
      date: "2020 June",
      content: {
        text : "Worked as Freelance UI/UX & Web Developer at ",
        linkText : "Century-Links",
        linkHref : "https://centurylinksmm.com/"
      },
      duration: "(2020 June ~ 2021 Dec)",
      skills: []
    },{
      date: "2020 Dec",
      content: {
        text : "Worked as UI/UX Web Designer at ",
        linkText : "Yammobots Co.,Ltd.",
        linkHref : "https://yammobots.com/"
      },
      duration: "(2020 Dec ~ 2021 May)",
      skills: []
    }, {
      date: "2020 Dec",
      content: {
        text : "Worked as Web Designer and Developer at ",
        linkText : "Blink23",
        linkHref : "https://blink23.com/"
      },
      duration: "(2020 Dec ~ 2022 Aug)",
      skills: []
    }, {
      date: "2022 Feb",
      content: {
        text : "Worked as Web Developer (Wordpress) at ",
        linkText : "Skills Union",
        linkHref : "https://blink23.com/"
      },
      duration: "(2022 Feb ~ 2022 Sep)",
      skills: []
    },{
      date: "2022 Oct",
      content: {
        text : "Worked as Web Developer at ",
        linkText : "TINL",
        linkHref : "https://thereisnolack.com/"
      },
      duration: "(2022 Oct ~ 2024 April)",
      skills: []
    },
    {
      date: "2024 May",
      content: {
        text : "Worked as Senior Web Developer at ",
        linkText : "LINKZ",
        linkHref : "https://linkzasia.com/"
      },
      duration: "(2024 May ~ 2025 Feb)",
      skills: []
    },
    {
      date: "2025 Mar",
      content: {
        text : "Worked as Senior Web Developer at ",
        linkText : "ConnectingDNA",
        linkHref : "https://connectingdna.com/"
      },
      duration: "(2025 Mar ~ Present)",
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

export default About;
