import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import BackgroundImage from "../assets/images/bg_pattern.svg?url";
import { Resume } from "./Resume";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const IconBtn = ({ iconHref, iconClass }) => {
  return (
    <a href={iconHref} target="_blank" rel="noreferrer">
      <i
        className={`${iconClass} hover:text-primary text-2xl lg:text-2xl xl:text-3xl`}
      ></i>
    </a>
  );
};

const Hero = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "Felix-Htoo-Resume",
  });

  const heroRef = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        ".anim-text span",
        {
          // y: -150, // slide up, from 50px -> to 0px
          display: "inline-block",
          scale: 0,
        },
        {
          // y: 0, // slide up, from 50px -> to 0px
          scale: 1,
          duration: 1, // each animation takes 0.6 second
          // stagger: 0.3, // delay between each span by 0.5 second
          ease: "power4",
          // immediateRender: false,
        }
      );
    },
    { scope: heroRef }
  );

  return (
    <>
      <div
        className="hero hero-bg lg:h-[768px] mx-auto relative"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundRepeat: "repeat",
          backgroundSize: "50% auto",
        }}
        ref={heroRef}
      >
        <div className="container lg:container-lg flex justify-center items-center relative h-full">
          <div className="max-w-[640px] w-full h-fit hero-main py-5 px-6 lg:p-12 text-left md:text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-primary flex justify-start md:justify-center gap-3 md:gap-4 anim-text">
              <div style={{ clipPath: "inset(0 0 0)" }}>
                <span>I'm</span>
              </div>
              <div className="flex gap-3 md:gap-4" style={{ clipPath: "inset(0 0 0)" }}>
                <span>Felix</span>
                <span>Htoo</span>
              </div>
            </h1>
            <h3 className="text-xl lg:text-3xl my-3 text-primary">
              Web Designer • Developer
            </h3>
            <div className="hero-contact flex justify-start md:justify-evenly gap-6 mt-6 lg:mt-9 xl:mt-10 text-secondary">
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
            type="button"
            aria-label="Print Felix Htoo's resume"
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
        </div>
        <div className="overflow-hidden h-0">
          <Resume contentRef={componentRef} />
        </div>
      </div>
    </>
  );
};

export default Hero;
