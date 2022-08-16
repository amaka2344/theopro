import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../pages/about";
import HomePage from "../pages/HomePage";
import Contact from "../pages/contact";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">              
            <About />
          </Route>
          <Route path="/contact" >
            <Contact/>
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
