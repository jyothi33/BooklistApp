import React, { useState } from "react";

const FormWithoutHooks = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`${firstName} ${lastName}`);
    setFirstName("");
    setLastName("");
  };

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="">First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormWithoutHooks;
