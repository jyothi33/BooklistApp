import React, { useState } from "react";

const ControlledForms = () => {
  const [message, setMessage] = useState();

  const submitCall = (event) => {
    alert(message);
    event.preventDefault();
  };

  const changeHandler = (event) => {
    setMessage(event.target.value);
    console.log(message);
  };

  return (
    <form action="" onSubmit={submitCall}>
      <h3>Controlled Components</h3>
      <label htmlFor="message">Write your Message : </label>
      <input type="textarea" name="message" onChange={changeHandler} />
    </form>
  );
};

export default ControlledForms;
