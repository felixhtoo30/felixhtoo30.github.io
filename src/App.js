import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import { useReactToPrint } from "react-to-print";

import AboutTimeline from "./components/AboutTimeline";
// import Resume from "./components/Resume";
import { PrintArea } from "./components/PrintArea";

const App = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Router>
      <div className="container lg:container-lg relative">
        <Header />
        <Switch>
          <Route path="/about">
            <AboutTimeline />
          </Route>
          {/* <Route path="/resume">
            <Resume />
          </Route> */}
          <Route exact path="/">
            <Hero />
          </Route>
        </Switch>
      </div>
      <button
        className="w-16 h-16 lg:w-20 lg:h-20 rounded-full shadow-xl fixed right-6 lg:right-8 bottom-10 outline-none z-50 bg-white text-secondary hover:text-primary"
        onClick={handlePrint}
      >
        <span className="absolute right-0 bottom-14 lg:bottom-20 text-sm lg:text-lg rounded-lg bg-white text-primary text-center font-bold">
          Resume!
          <br />
          👇
        </span>
        <i className="fas fa-print text-2xl lg:text-4xl"></i>
      </button>
      <div className="overflow-hidden h-0">
        <PrintArea ref={componentRef} />
      </div>
    </Router>
  );
};

export default App;
