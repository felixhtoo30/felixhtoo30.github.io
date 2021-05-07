import { useState } from "react";
import Hero from './components/Hero';

function App() {
  const [isToggle, setIsToggle] = useState(true);
  
  const handleMenu = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className="container lg:container-lg relative">
      <i className={`nav-menu-icon ${isToggle ? 'fas fa-bars': 'fas fa-times'} md:hidden p-4 bg-white text-xl text-primary z-50`} onClick={handleMenu}></i>
      <header className={`nav md:nav-md ${isToggle ? 'hidden': 'flex'} md:block`}>
        <ul className={`nav-menu md:py-5 text-center block md:inline-flex`}>
          <li className="text-xl md:text-lg lg:text-xl xl:text-2xl p-4 md:p-2 my-0 mx-3 lg:m-7"><a href="javascript:void(0)">About Me</a></li>
          <li className="text-xl md:text-lg lg:text-xl xl:text-2xl p-4 md:p-2 my-0 mx-3 lg:m-7"><a href="javascript:void(0)">Works</a></li>
          <li className="text-xl md:text-lg lg:text-xl xl:text-2xl p-4 md:p-2 my-0 mx-3 lg:m-7"><a href="javascript:void(0)">Articles</a></li>
        </ul>
      </header>
      <Hero />
    </div>
  );
}

export default App;
