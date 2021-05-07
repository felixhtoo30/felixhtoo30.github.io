import React from "react";
import BackgroundImage from "../assets/images/bg_pattern.svg";

const Hero = () => {
  return (
    <div
      className="hero hero-bg lg:w-11/12 lg:h-768p mx-auto"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="hero-main py-5 px-3 lg:p-12 text-left">
        <h1 className="text-5xl lg:text-7xl font-bold text-primary">I'm <br className="md:hidden"/> Felix Htoo</h1>
        <h3 className="text-xl lg:text-3xl my-3 text-primary">Web Developer & UI/UX Designer</h3>
        <div className="hero-contact flex justify-between mt-6 lg:mt-9 xl:mt-10 text-secondary">
          {/* <IconBtn iconHref="mailto:felixhtoo30@gmail.com" iconClass="fas fa-envelope" /> */}
          <IconBtn iconHref="//facebook.com/felixhtoo30" iconClass="fab fa-facebook" />
          <IconBtn iconHref="//twitter.com/felixhtoo30" iconClass="fab fa-twitter" />
          <IconBtn iconHref="//instagram.com/felixhtoo30" iconClass="fab fa-instagram" />
          <IconBtn iconHref="//linkedin.com/in/felixhtoo30" iconClass="fab fa-linkedin" />
          <IconBtn iconHref="//behance.com/felixhtoo30" iconClass="fab fa-behance" />
          <IconBtn iconHref="//dribbble.com/felixhtoo30" iconClass="fab fa-dribbble" />
          <IconBtn iconHref="//github.com/felixhtoo30" iconClass="fab fa-github" />
        </div>
      </div>
    </div>
  );
};

const IconBtn = ({iconHref, iconClass}) => {
  return (
    <a href={iconHref} target="_blank">
      <i className={`${iconClass} hover:text-primary text-2xl lg:text-2xl xl:text-3xl`}></i>
    </a>
  );
};

export default Hero;
