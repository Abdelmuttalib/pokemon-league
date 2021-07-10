import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Nav } from "./components";

import { Home, About, NotFound } from "./views";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
