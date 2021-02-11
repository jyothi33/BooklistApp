import styled, { css } from "styled-components";

//Adapting based on props

const MyButton = styled.button`
  background: transparent;
  border: 3px solid palevioletred;
  border-radius: 3px;
  font-family: cascadia code;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  color: palevioletred;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
  ${(props) =>
    props.secondary &&
    css`
      background: lightcyan;
      color: black;
    `};
`;

const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

import React from "react";

function ButtonInterpolation() {
  return (
    <>
      <MyButton>Normal</MyButton>
      <MyButton primary>Primary</MyButton>
      <MyButton secondary>Secondary</MyButton>
      <hr />

      <Link>Unstyled, boring Link</Link>
      <br />
      <StyledLink>Styled, exciting Link</StyledLink>
    </>
  );
}
export { ButtonInterpolation };
