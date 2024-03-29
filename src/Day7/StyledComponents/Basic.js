import React from "react";
import styled from "styled-components";

const Basic = () => {
  // Create a Title component that'll render an <h1> tag with some styles
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: red;
  `;

  // Create a Wrapper component that'll render a <section> tag with some styles
  const Wrapper = styled.section`
    padding: 4em;
    background: lightseagreen;
  `;

  const Para = styled.p`
    color: white;
  `;

  return (
    <Wrapper>
      <Title>Hello World!</Title>
      <Para>I'm a new Paragraph</Para>
    </Wrapper>
  );
};

export default Basic;
