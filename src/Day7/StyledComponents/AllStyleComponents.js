//https://www.robinwieruch.de/react-styled-components
// So much has been said about the appropriate way to style modern web apps. There's the general and oldest method of styling at document level - creating a style.css file and linking to it in the HTML file and more recently the method of styling in JS. This is popularly known as CSS-in-JS.

// CSS-in-JS is a styling approach that abstracts the CSS model to the component level, rather than the document level. This is the idea that CSS can be scoped to a specific component only and as opposed to the document level. The benefits of using CSS-in-JS includes:

// Reduce the number of HTTP requests: CSS-in-JS would mean that we don't have to make HTTP requests to load assets and resources.
// Styling Fragmentation: Using CSS-in-JS means you can write styles freely without worrying about compatibility issues.
// An example of the CSS-in-JS approach is styled-components. Styled Components allow you to write plain CSS in your components without worrying about class name collisions. It helps to write CSS that's scoped to a single component and does not leak to any other element in the page.
// WHY STYLED COMPONENTS?
// Styled Components enable writing of CSS in JavaScript using tagged template literals. It removes the mapping between components and styles — component is made into a low-level styling construct. Styled Components was created because of the following reasons:

// Automatic critical CSS: Styled Components keeps track of which components are rendered on a page and injects their styles and nothing else, fully automatically. Combined with code splitting, this means your users load the least amount of code necessary.
// No class name bugs: Styled Components generates unique class names for your styles. You never have to worry about duplication, overlap or misspellings.
// Easier deletion of CSS: it can be hard to know whether a class name is used somewhere in your codebase. Styled Components makes it obvious, as every bit of styling is tied to a specific component. If the component is unused (which tooling can detect) and gets deleted, all its styles get deleted with it.
// Simple dynamic styling: adapting the styling of a component based on its props or a global theme is simple and intuitive without having to manually manage dozens of classes.
// Painless maintenance: you never have to hunt across different files to find the styling affecting your component, so maintenance is a piece of cake no matter how big your codebase is.
// Automatic vendor prefixing: write your CSS to the current standard and let Styled Components handle the rest.
// GETTING STARTED WITH STYLED COMPONENTS
// We can install Styled Components using NPM, with the command below:

// npm install styled-components
// Styled Components utilizes tagged template literals to style your components. It removes the mapping between components and styles. This means that when you're defining your styles, you're actually creating a normal React component, that has your styles attached to it.

// With the installation done, let's go ahead to create our first Styled Component. We'll be creating a reusable Button component styled with Styled Components:

import React from "react";
import Basic from "./Basic";
import { ButtonInterpolation } from "./ButtonInterpolation";
import ExtendingStyles from "./ExtendingStyles";
import styled from "styled-components";
import ThemeStyleComponents from "./ThemeStyleComponents";
const AllStyleComponents = () => {
  const Container = styled.div`
    text-align: center;
    margin: 50px;
  `;

  return (
    <Container>
      {/* <Basic /> */}
      {/* <hr />
      <ButtonInterpolation />
      <hr /> */}
      {/* <ExtendingStyles />
      <hr /> */}
      <ThemeStyleComponents />
      <hr />
    </Container>
  );
};

export default AllStyleComponents;
