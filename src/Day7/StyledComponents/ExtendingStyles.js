import React from "react";
import styled from "styled-components";

const ExtendingStyles = () => {
  const Button = styled.button`
    color: blue;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid blue;
    border-radius: 3px;
  `;

  // A new component based on Button, but with some override styles
  const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
  `;
  return (
    <div>
      <Button> Button</Button>
      <TomatoButton>Tomato</TomatoButton>
    </div>
  );
};

export default ExtendingStyles;
