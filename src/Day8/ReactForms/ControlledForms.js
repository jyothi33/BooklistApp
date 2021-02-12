import React, { useState } from "react";

const ControlledForms = () => {
  const [message, setMessage] = useState();

  const submitCall = (event) => {
    alert(message);
    event.preventDefault();
  };

  return (
    <form action="" onSubmit={submitCall}>
      <h3>Controlled Components</h3>
      <label htmlFor="message">Write your Message : </label>
      <input
        type="textarea"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </form>
  );
};

export default ControlledForms;
