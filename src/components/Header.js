import React, { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  
  const [isToggle, setIsToggle] = useState(true);

  const handleMenu = () => {
    setIsToggle(!isToggle);
  };

  return (
    <>
      <i
        className={`nav-menu-icon ${isToggle ? "fas fa-bars" : "fas fa-times"} md:hidden p-4 bg-white text-xl text-primary z-50`}
        onClick={handleMenu}
      ></i>
      <header
        className={`nav md:nav-md ${isToggle ? "hidden" : "flex"} md:block z-40`}
      >
        <ul className={`nav-menu md:py-5 text-center block md:inline-flex`}>
          <li className="text-xl md:text-lg lg:text-xl xl:text-2xl p-4 md:p-2 my-0 mx-3 lg:my-4 lg:mx-5">
            <Link to="/" onClick={handleMenu}>Home</Link>
          </li>
          <li className="text-xl md:text-lg lg:text-xl xl:text-2xl p-4 md:p-2 my-0 mx-3 lg:my-4 lg:mx-5">
            <Link to="/about" onClick={handleMenu}>About Me</Link>
          </li>
          <li className="text-xl md:text-lg lg:text-xl xl:text-2xl p-4 md:p-2 my-0 mx-3 lg:my-4 lg:mx-5">
            <Link to="/works" onClick={handleMenu}>Works</Link>
          </li>
          <li className="text-xl md:text-lg lg:text-xl xl:text-2xl p-4 md:p-2 my-0 mx-3 lg:my-4 lg:mx-5">
            <Link to="/articles" onClick={handleMenu}>Articles</Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
