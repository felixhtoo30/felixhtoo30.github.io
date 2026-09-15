import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import BgPattern from "./BgPattern";
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

const HeroContent = ({ onPrint }) => {
  return (
    <div className="container lg:container-lg flex justify-center items-center relative z-10 h-full pointer-events-none">
      <div className="max-w-[640px] w-full h-fit hero-main py-5 px-6 lg:p-12 text-left md:text-center pointer-events-auto">
        <h1 className="text-5xl lg:text-7xl font-bold text-primary flex justify-start md:justify-center gap-3 md:gap-4 anim-text">
          <div style={{ clipPath: "inset(0 0 0)" }}>
            <span>I'm</span>
          </div>
          <div
            className="flex gap-3 md:gap-4"
            style={{ clipPath: "inset(0 0 0)" }}
          >
            <span>Felix</span>
            <span>Htoo</span>
          </div>
        </h1>
        <h3 className="text-xl lg:text-3xl my-3 text-primary">
          UX Engineer
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
          <IconBtn
            iconHref="//github.com/felixhtoo30"
            iconClass="fab fa-github"
          />
        </div>
      </div>

      <button
        type="button"
        aria-label="Print Felix Htoo's resume"
        className="w-14 h-14 lg:w-20 lg:h-20 rounded-full shadow-xl absolute right-2 lg:right-8 bottom-6 lg:bottom-14 outline-none bg-white text-secondary hover:text-primary pointer-events-auto"
        onClick={onPrint}
      >
        <span className="absolute right-0 bottom-12 lg:bottom-16 text-sm lg:text-lg rounded-lg bg-white text-primary text-center font-bold">
          Resume!
          <br />
          👇
        </span>
        <i className="fas fa-print text-xl lg:text-3xl"></i>
      </button>
    </div>
  );
};

const Hero = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "Felix-Htoo-Resume",
  });

  const heroRef = useRef();
  const patternRef = useRef();

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

      const pattern = patternRef.current;
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (!pattern || reducedMotion) return;

      const selectPattern = gsap.utils.selector(pattern);
      const waves = selectPattern(".hero-pattern-wave");
      const lines = selectPattern(".hero-pattern-line");
      const rotatingShapes = selectPattern(
        ".hero-pattern-triangle, .hero-pattern-square"
      );
      const circles = selectPattern(".hero-pattern-circle");
      const animatedElements = [
        ...waves,
        ...lines,
        ...rotatingShapes,
        ...circles,
      ];
      const rotationCenters = new Map();
      const circleRadii = new Map();

      rotatingShapes.forEach((element) => {
        const bounds = element.getBBox();
        rotationCenters.set(element, {
          x: bounds.x + bounds.width / 2,
          y: bounds.y + bounds.height / 2,
        });
      });

      circles.forEach((circle) => {
        circleRadii.set(circle, Number(circle.getAttribute("r")));
      });

      const startPatternAnimation = () => {
        gsap.killTweensOf(animatedElements);

        waves.forEach((wave) => {
          const travel = Number(wave.dataset.travel);

          gsap.fromTo(
            wave,
            { x: 0 },
            {
              x: -travel,
              duration: gsap.utils.random(3, 3.6),
              delay: gsap.utils.random(0, 0.7),
              ease: "none",
              repeat: -1,
            }
          );
        });

        lines.forEach((line) => {
          const travel = Number(line.dataset.travel);

          gsap.fromTo(
            line,
            { x: 0 },
            {
              x: -travel,
              duration: gsap.utils.random(2, 2.6),
              delay: gsap.utils.random(0, 0.8),
              ease: "none",
              repeat: -1,
            }
          );
        });

        rotatingShapes.forEach((element) => {
          const center = rotationCenters.get(element);
          const direction = Math.random() > 0.5 ? 360 : -360;

          gsap.fromTo(
            element,
            {
              attr: {
                transform: `rotate(0 ${center.x} ${center.y})`,
              },
            },
            {
              attr: {
                transform: `rotate(${direction} ${center.x} ${center.y})`,
              },
              duration: gsap.utils.random(0.8, 2.2),
              delay: gsap.utils.random(0, 0.8),
              ease: "none",
              repeat: -1,
            }
          );
        });

        circles.forEach((circle) => {
          const radius = circleRadii.get(circle);

          gsap.fromTo(
            circle,
            { attr: { r: radius } },
            {
              attr: { r: radius * gsap.utils.random(1.25, 1.8) },
              duration: gsap.utils.random(0.45, 1.1),
              delay: gsap.utils.random(0, 0.7),
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
            }
          );
        });
      };

      const stopPatternAnimation = () => {
        gsap.killTweensOf(animatedElements);

        gsap.to([...waves, ...lines], {
          x: 0,
          opacity: 1,
          duration: 0.35,
          ease: "power2.out",
          overwrite: true,
        });

        rotatingShapes.forEach((element) => {
          const center = rotationCenters.get(element);

          gsap.to(element, {
            attr: { transform: `rotate(0 ${center.x} ${center.y})` },
            duration: 0.35,
            ease: "power2.out",
            overwrite: true,
          });
        });

        circles.forEach((circle) => {
          gsap.to(circle, {
            attr: { r: circleRadii.get(circle) },
            duration: 0.35,
            ease: "power2.out",
            overwrite: true,
          });
        });
      };

      pattern.addEventListener("pointerenter", startPatternAnimation);
      pattern.addEventListener("pointerleave", stopPatternAnimation);

      return () => {
        pattern.removeEventListener("pointerenter", startPatternAnimation);
        pattern.removeEventListener("pointerleave", stopPatternAnimation);
        gsap.killTweensOf(animatedElements);

        rotatingShapes.forEach((element) => element.removeAttribute("transform"));
        circles.forEach((circle) => {
          circle.setAttribute("r", circleRadii.get(circle));
        });
      };
    },
    { scope: heroRef }
  );

  return (
    <>
      <div
        className="hero hero-bg lg:h-[768px] mx-auto relative overflow-hidden"
        ref={heroRef}
      >
        <div
          className="hero-pattern-layer"
          aria-hidden="true"
          ref={patternRef}
        >
          {Array.from({ length: 16 }, (_, index) => (
            <BgPattern className="hero-pattern-tile" key={index} />
          ))}
        </div>

        <HeroContent onPrint={handlePrint} />
        <div className="overflow-hidden h-0">
          <Resume contentRef={componentRef} />
        </div>
      </div>
    </>
  );
};

export default Hero;
