import React, { useState } from "react";

const TemplateLiterals = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isFirstTime, setIsFirstTime] = useState(true);

  //Single line  template literals
  let temp1 = `Single line string with "double quotes" `;

  //Multiline Normal string
  let multilineString =
    "I a multiline string... \n" +
    "I am in second line \n" +
    "I am in third line";

  //Multiline template literals
  let multilineTemplateLiteral = `
  Hi, Hello 
  This is a multi line string.
  `;

  //Expression interpolation
  let a = 3,
    b = 6;
  let normalinterpolation = "Nine is " + (a + b);
  let expressionString = `I can add numbers ${3 + 6} `;
  let name = `Jyothi`;
  let dynamicString = `My name is ${name}`;

  //Escaping backtics
  let excapeBacktick = `\`I am a backtick\``;

  //Nesting templates
  let buttonText = `${
    isLoggedIn
      ? ` ${
          isFirstTime
            ? `New user LOGGED IN successfully
      Please subscribe to our NEWSLETTER!`
            : `Welcome back!!!`
        }`
      : "LOGIN"
  }`;

  //Tagged templates are complex templates.
  let str = String.raw`Hi\n${2 + 3}!`;
  //let bad = `bad escape sequence: \unicode`;

  let person = "Jyothi";
  let exp = 8;
  let designation = `Developer`;

  function myTag(strings, ...keys) {
    let [personExp, workExp, designationExp] = keys;
    let str0 = strings[0]; // " "
    let str1 = strings[1]; // " is a "

    let ageStr;
    if (workExp > 5) {
      ageStr = "Senior ";
    } else {
      ageStr = "Junior ";
    }

    // We can even return a string built using a template literal
    return `${str0}${personExp}${str1}${ageStr}${designationExp}`;
  }

  let output = myTag`Hey, ${person} is a ${exp} ${designation}.`;

  return (
    <div>
      {temp1}
      <br></br>
      <pre>{multilineTemplateLiteral}</pre>
      <pre>{multilineString}</pre>
      {normalinterpolation}
      <br />
      {expressionString}
      <br />
      {dynamicString}
      <br />
      {excapeBacktick}
      <br />
      <pre>
        <h1>{buttonText}</h1>
      </pre>
      {str}
      <h3>{output}</h3>
    </div>
  );
};

export default TemplateLiterals;
