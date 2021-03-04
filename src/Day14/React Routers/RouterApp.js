import React from "react";
import About from "./About";
import Home from "./Home";
import Nav from "./Nav";
import Shop from "./Shop";
import "./routerStyle.css";
//Renaming as it is big.
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const RouterApp = () => {
  return (
    <>
      <Router>
        <Nav />
        {/* Route renders component based on path */}
        {/* Switch renders only first matched component */}
        {/* Exact should be used to avoid similar match issue */}
        {/* <Switch>
          <Route path="/about" component={About} />
          <Route path="/" exact component={Home} />
          <Route path="/shop" component={Shop} />
        </Switch> */}

        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/shop" component={Shop}></Route>
      </Router>
    </>
  );
};

export default RouterApp;
