import React, { useState } from "react";
import Booklist from "./Components/Booklist";
import { PI } from "./Components/MathEx";
import booksArr from "./Components/BookArray";

import "bootstrap/dist/css/bootstrap.min.css";

import GlobalStyle from "./Day7/Themes/globalStyles";
import ConditionalRenderComponent from "../src/Day6/ConditionalRenderComponent";
import TemplateLiterals from "./Day7/TemplateLiterals";
import AllStyleComponents from "./Day7/StyledComponents/AllStyleComponents";
import CssModulesExample from "./Day7/CssModulesEx/CssModulesExample";
import UncontrolledForms from "./Day8/ReactForms/UncontrolledForms";
import ControlledForms from "./Day8/ReactForms/ControlledForms";
import ParentComp from "./Day9/PureComponents/ParentComp";
import PortalsDemo from "./Day9/Portals/PortalsDemo";
import { BasicStringValidation } from "./Day8/ReactForms/FormValidation/BasicStringValidation";
import PayPalApp from "./PayPalExperiments/PayPalApp";
import FragmentDemo from "./Day9/Fragments/FragmentDemo";

const App = () => {
  return (
    <div>
      {/* <FragmentDemo /> */}
      {/* <PayPalApp /> */}
      {/* <PortalsDemo /> */}
      <ParentComp />
      {/* <BasicStringValidation /> */}
      {/* <UncontrolledForms />
      <hr />
      <ControlledForms /> */}
      {/* <GlobalStyle /> */}
      {/* <TemplateLiterals /> */}
      {/* <AllStyleComponents /> */}
      {/* <CssModulesExample title={`Jyothi`} /> */}
      {/*<PizzaApp />*/}
      {/*booksArr.map((book,index) => <Booklist key={index} {...book}/>)*/}
    </div>
  );
};
export default App;
