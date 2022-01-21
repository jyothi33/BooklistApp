import React, { useState } from "react";
import About from "./About";
import Home from "./Home";
import Nav from "./Nav";
import Shop from "./Shop";
import "./routerStyle.css";
//Renaming as it is big.
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import BBChar from "../BBChar";
import UserProfile from "./UserProfile";
import NotFound from "./NotFound";
const RouterApp = () => {
  const [login, setLogin] = useState(false);

  const clickHandler = () => {
    setLogin(!login);
  };

  return (
    <>
      <Router>
        <Nav />
        {/* <button onClick={clickHandler}> {login ? "Log Out" : "Login"}</button> */}
        {/* Route renders component based on path */}
        {/* Switch renders only first matched component */}
        {/* Exact should be used to avoid similar match issue */}
        {/* <Switch>
          <Route path="/about" component={About} />
          <Route path="/" exact component={Home} />
          <Route path="/shop" component={Shop} />
        </Switch> */}
        <Routes>

        
          <Route path="/" exact component={Home}></Route>
          <Route path="/about">
            {login && <UserProfile /> }
          </Route>
          <Route path="/shop" exact component={Shop}></Route>
          <Route path="/shop/:charId" component={BBChar}></Route>
          <Route component={NotFound}></Route>
          </Routes>
      </Router>
    </>
  );
};

export default RouterApp;
