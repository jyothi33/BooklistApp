import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ToggleAnimation from "./Day17/ReactAnimations/ToggleAnimation";
//import SpreadOperatorExample, { x, y } from "./Day3/SpreadOperatorExample";
import LazyAndSuspense from "./Day16/LazyLoadingComponentExample/LazyAndSuspense";
import CounterReducerExample from "./Day19/ReactHooks/CounterReducerExample";
import CounterComplexReducerExample from "./Day19/ReactHooks/CounterComplexReducerExample";
import CounterMultipleReducersEx from "./Day19/ReactHooks/CounterMultipleReducersEx";
import DocumentOne from "./Day20/CustomHooks/DocumentOne";
import ComponentApp from "./Day19/ReactHooks/CombinationHooks/ComponentApp";
import DataFetchOne from "./Day19/ReactHooks/UseEffectsUseReducer/DataFetchOne";
import CounterHookMain from "./Day20/CustomHooks/CounterCustomHooks/CounterHookMain";
import FormCustomMain from "./Day20/CustomHooks/FormCustomHooks/FormCustomMain";
//import HocMain from "./Day9/HOC/HocMain";
import UseCallbackMain from "./Day19/ReactHooks/UseCallbackExample/UseCallbackMain";
import UseMemoExample from "./Day19/ReactHooks/UseMemoExample";
import ToastDemo from "./Day21/ReactToastNoyification/ToastDemo";
import ColorPicker from "./Day21/ReactToastNoyification/ColorPicker";
//import CreditCardExample from "./Day21/ReactToastNoyification/CreditCardExample";
//import TestJson from "./Day10/TestJson";
import MovieList from "./Day12and13 - ContextAPI/MovieList";
//import DynamicMain from "./DynamicComponents/DynamicMain";
//import DynamicComponents from "./DynamicComponents/DynamicImports";
import ReduxApp from "./ReduxDemo/ReduxApp";
import BookEx from "./Day2/BookEx";
import BookComponent from "./Day2/BookComponent";
import {PI, numb} from "./Day4/MathEx"
import ParentComp from "./Day6/ChildToParentPropsEx/ParentComp";
import PizzaApp from "./Day6/PropTypesExamples/PizzaApp";
import ConditionalRenderComponent from "./Day6/ConditionalRenderComponent";
import FragmentDemo from "./Day9/Fragments/FragmentDemo";
import CounterComp from "./Day5/CounterComp";
import ReactFormSubmitPreventDefault from "./Day5/ReactFormSubmitPreventDefault";
import ControlledForms from "./Day8/ReactForms/ControlledForms";
import UncontrolledForms from "./Day8/ReactForms/UncontrolledForms";
import ParentCountComp from "./Day5/ParentCountComp";
import BasicUseEffect from "./Day10/UseEffectHooks/BasicUseEffect";
import QuoteGenerator from "./Day10/UseEffectHooks/QuoteGenerator";
import RecipeSearchAPiDemo from "./Day10/UseEffectHooks/RecipeSearchAPiDemo";
import ParentComp1 from "./Day9/PureComponents/ParentComp1";
import UseEffectWithCleanUp from "./Day10/UseEffectHooks/UseEffectWithCleanUp";
import MovieAppDemo from "./CntextAPIDemo/MovieAppDemo";
import ExpenseContainer from "./ExpenseTracker/ExpenseContainer";
import NavDemo from "./ReactRouter/NavDemo";
import UseMemoCounterDemo from "./Day15/UseMemoCounterDemo";
import DocumentTitleCustomHook from "./Day20/CustomHooks/DocumentTitleCustomHook";
import DocTitleNewComp from "./Day20/CustomHooks/DocTitleNewComp";
import CounterCustomHookNew from "./Day20/CustomHooks/CounterCustomHookNew";
import InputTextCustomHook from "./Day20/CustomHooks/InputTextCustomHook";
import InputFocusHook from "./Day19/ReactHooks/InputFocusHook";
import HookTimer from "./Day19/ReactHooks/HookTimer";
import AllStyleComponents from "./Day7/StyledComponents/AllStyleComponents";
import ReduxEampleContainer from "./reduxExample/ReduxEampleContainer";
import BasicTable from "./ReactTable/BasicTable";
import MaterialUITable from "./ReactTable/MaterialUITable";
import Todo from "./TodoList/Todo";
import RouterApp from "./Day14and15/React Routers/RouterApp";
import SignupForm from "./ReactFormik/SignupForm";
import SignupYup from "./ReactFormik/SignupYup";
import SignupFormikComponent from "./ReactFormik/SignupFormikComponent";
import CreditCardExample from "./Day21/ReactToastNoyification/CreditCardExample";
const App = () => {
  return (
    <div>
      <ToastDemo />
      {/* <CreditCardExample /> */}
      {/* <ColorPicker /> */}
      {/* <SignupFormikComponent /> */}
      {/* <SignupYup /> */}
      {/* <SignupForm /> */}
      {/* <NavDemo /> */}
      {/* <Todo /> */}
      {/* <MaterialUITable /> */}
      {/* <BasicTable /> */}
      {/* <ReduxEampleContainer /> */}
      {/* <AllStyleComponents /> */}
      {/* <HookTimer /> */}
      {/* <InputFocusHook /> */}
      {/* <InputTextCustomHook /> */}
      {/* <CounterCustomHookNew /> */}
      {/* <DocumentTitleCustomHook />
      <DocTitleNewComp /> */}
      {/* <CounterComplexReducerExample /> */}
      {/* <CounterMultipleReducersEx /> */}
      {/* <DataFetchOne /> */}
      {/* <UseMemoCounterDemo /> */}
      {/* <UseCallbackMain /> */}
      {/* <NavDemo /> */}
      {/* <ExpenseContainer /> */}
      {/* <MovieAppDemo /> */}
      {/* <RecipeSearchAPiDemo /> */}
      {/* <QuoteGenerator /> */}
      {/* <BookComponent /> */}
      {/* <ParentCountComp /> */}
      {/* <UncontrolledForms /> */}
      {/* <ControlledForms /> */}
      {/* <ReactFormSubmitPreventDefault /> */}
      {/* <CounterComp /> */}
      {/* <ParentComp /> */}
      {/* <h1>{PI}</h1>
      <h2>{numb}</h2> */}
      {/* <BookComponent /> */}
      {/* <ReduxApp /> */}
      {/* <DynamicMain /> */}
      {/* <DynamicComponents /> */}
      {/* <TestJson /> */}
      {/* <ToastDemo /> */}
      {/* <ColorPicker /> */}
      {/* <CreditCardExample /> */}
      {/* <UseMemoExample /> */}
      {/* <LazyAndSuspense /> */}
      {/* <UseCallbackMain /> */}
      {/* <HocMain /> */}
      {/* <FormCustomMain /> */}
      {/* <CounterHookMain /> */}
      {/* <DataFetchOne /> */}
      {/* <ComponentApp /> */}
      {/* <DocumentOne /> */}
      {/* <ToggleAnimation />
      <SpreadOperatorExample /> */} 
      {/* <LazyAndSuspense /> */}
      {/* <CounterReducerExample /> */}
      {/* <CounterComplexReducerExample /> */}
      {/* <CounterMultipleReducersEx /> */}
      {/* <Recipe /> */}
      {/* <MovieList /> */}
      {/* <ConditionalRenderComponent /> */}
      {/* <PizzaApp /> */}
      {/* <Parent /> */}
      {/* <MainHp /> */}
      {/* <CounterExample />
      <First /> */}
      {/* <ClassComponent /> */}
      {/* <LazyLoadingImages /> */}
      {/* <BasicUseEffect /> */}
      {/* <UseEffectHookCounter /> */}
      {/* <ClassComponent /> */}
      {/* <UseEffectWithCleanUp /> */}
      {/* <UseEffectsFetch /> */}
      {/* <ParentButton /> */}
      {/* <BasicExample /> */}
      {/* <ParamsExample /> */}
      {/* <RouterApp /> */}
      {/* <FragmentDemo /> */}
      {/* <PayPalApp /> */}
      {/* <PortalsDemo /> */}
      {/* <ParentComp1 /> */}
      {/* <BasicStringValidation /> */}
      {/* <UncontrolledForms /> */}
      {/* <hr />
      <ControlledForms /> */}
      {/* <GlobalStyle /> */}
      {/* <TemplateLiterals /> */}
      {/* <AllStyleComponents /> */}
      {/* <CssModulesExample title={`Jyothi`} /> */}
      {/* <PizzaApp /> */}
      {/*booksArr.map((book,index) => <Booklist key={index} {...book}/>)*/}
    </div>
  );
};
export default App;
