import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";

import About from "./components/About";
import Works from "./components/Works";
import Articles from "./components/Articles";
import ResumeForm from "./components/ResumeForm";

const App = () => {
  return (
    <Router>
      <div className="container lg:container-lg relative">
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/works">
            <Works />
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
          <Route path="/resume-form">
            <ResumeForm />
          </Route>
          <Route exact path="/">
            <Hero />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
