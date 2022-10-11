import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import BackgroundImage from "../assets/images/bg_pattern.svg";
import { Resume } from "./Resume";

const Hero = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div
        className="hero hero-bg lg:h-768p mx-auto relative"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="hero-main py-5 px-3 lg:p-12 text-left md:text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-primary">
            I'm <br className="md:hidden" />
            Felix Htoo
          </h1>
          <h3 className="text-xl lg:text-3xl my-3 text-primary">
            Web Designer • Developer
          </h3>
          <div className="hero-contact flex justify-between mt-6 lg:mt-9 xl:mt-10 text-secondary">
            <IconBtn
              iconHref="mailto:felixhtoo30@gmail.com"
              iconClass="fas fa-envelope"
            />
            <IconBtn
              iconHref="//facebook.com/felixhtoo30"
              iconClass="fab fa-facebook"
            />
            <IconBtn
              iconHref="//twitter.com/felixhtoo30"
              iconClass="fab fa-twitter"
            />
            <IconBtn
              iconHref="//instagram.com/felixhtoo30"
              iconClass="fab fa-instagram"
            />
            <IconBtn
              iconHref="//linkedin.com/in/felixhtoo30"
              iconClass="fab fa-linkedin"
            />
            {/* <IconBtn
              iconHref="skype:live:mr.hah30?chat"
              iconClass="fab fa-skype"
            /> */}
            {/* <IconBtn
              iconHref="//behance.com/felixhtoo30"
              iconClass="fab fa-behance"
            /> */}
            {/* <IconBtn
              iconHref="//dribbble.com/felixhtoo30"
              iconClass="fab fa-dribbble"
            /> */}
            <IconBtn
              iconHref="//github.com/felixhtoo30"
              iconClass="fab fa-github"
            />
          </div>
        </div>

        <button
          className="w-14 h-14 lg:w-20 lg:h-20 rounded-full shadow-xl absolute right-2 lg:right-8 bottom-6 lg:bottom-14 outline-none bg-white text-secondary hover:text-primary"
          onClick={handlePrint}
        >
          <span className="absolute right-0 bottom-12 lg:bottom-16 text-sm lg:text-lg rounded-lg bg-white text-primary text-center font-bold">
            Resume!
            <br />
            👇
          </span>
          <i className="fas fa-print text-xl lg:text-3xl"></i>
        </button>
        <div className="overflow-hidden h-0">
          <Resume ref={componentRef} />
        </div>
      </div>
    </>
  );
};

const IconBtn = ({ iconHref, iconClass }) => {
  return (
    <a href={iconHref} target="_blank" rel="noreferrer">
      <i
        className={`${iconClass} hover:text-primary text-2xl lg:text-2xl xl:text-3xl`}
      ></i>
    </a>
  );
};

export default Hero;
