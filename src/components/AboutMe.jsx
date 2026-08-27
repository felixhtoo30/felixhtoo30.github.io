import React, { useRef } from "react";

import profileImg from "../assets/images/propic-fh-masked.png?url";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const AboutMe = () => {
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
        className="container lg:container-lg flex my-20"
        ref={heroRef}
      >
        <div className="flex-[2] flex justify-center mt-12 relative h-full">
          <img
            src={profileImg}
            alt="Felix Htoo"
            className="w-[300px] aspect-auto object-cover object-center"
          />
        </div>
        <div className="flex-[3]">
          <div className="w-full h-fit hero-main py-5 px-6 text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary flex justify-start gap-3 md:gap-4 anim-text">
              <div style={{ clipPath: "inset(0 0 0)" }}>
                <span>About Me</span>
              </div>
            </h1>
            <div className="mt-8 text-md">
              <p>
                Hi! I'm a Senior Full-Stack Web Developer with over 7 years of
                experience building robust, scalable, and user-focused websites
                and applications.
                {/* <br />
                I hold a Bachelor of Computer Science from UCSY (2012-2017), and
                since then, I've worked across various industries—from
                e-commerce, marketplace, and cloud reporting to real estate,
                hotel/event booking, and education platforms.
                 <br />
                Since 2022, I've been working fully remotely with international
                clients from Singapore, London, Dubai, Malaysia, India, and
                Taiwan, currently serving as a full-time Senior Developer at
                ConnectingDNA Global Pte. Ltd.
                */}
                <br />
                Over the years, I've evolved from a WordPress Developer into a
                well-rounded Full-Stack Engineer, comfortable with both frontend
                UI/UX and backend logic. I'm passionate about designing seamless
                user experiences, crafting custom themes and plugins, and
                solving real-world problems through code.
                <br />
                When I'm not coding, I enjoy diving into topics like UX/UI
                Design, self-improvement, psychology, and philanthropy. I spend
                my free time reading tech blogs, listening to podcasts, and
                learning to be better—both as a developer and as a person.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
