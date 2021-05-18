import React from "react";
import BackgroundImage from "../assets/images/bg_pattern.svg";

const Banner = ({title}) => {
  return (
    <div
      className="banner banner-bg h-60 md:h-72 lg:h-96 mx-auto"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <h3 className="banner-text p-4 lg:p-12 text-xl md:text-3xl font-bold text-primary bg-white">
        {title}
      </h3>
    </div>
  );
};

export default Banner;
