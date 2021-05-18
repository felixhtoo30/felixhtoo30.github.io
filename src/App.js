import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";

import AboutTimeline from "./components/AboutTimeline";
// import Resume from "./components/Resume";

const App = () => {
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
    </Router>
  );
};

export default App;
