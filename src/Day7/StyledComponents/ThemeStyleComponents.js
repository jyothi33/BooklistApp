import React from "react";
import styled, { ThemeProvider } from "styled-components";
const ThemeStyleComponents = () => {
  // Define our button, but with the use of props.theme this time
  const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    color: ${(props) => props.theme.main};
    border: 2px solid ${(props) => props.theme.main};
  `;

  // We are passing a default theme for Buttons that aren't wrapped in the ThemeProvider
  Button.defaultProps = {
    theme: {
      main: "palevioletred",
    },
  };

  // Define what props.theme will look like
  const themeSettings = {
    main: "green",
  };

  return (
    <div>
      <Button>Normal 1</Button>
      <ThemeProvider theme={themeSettings}>
        <Button>Themed</Button>
      </ThemeProvider>
    </div>
  );
};

export default ThemeStyleComponents;
