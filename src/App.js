import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutTimeline from "./components/AboutTimeline";

function App() {
  return (
    <Router>
      <div className="container lg:container-lg relative">
        <Header />
        <Switch>
          <Route path="/about">
            <AboutTimeline />
          </Route>
          <Route exact path="/">
            <Hero />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
