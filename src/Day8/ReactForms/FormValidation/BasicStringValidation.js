import React, { useState } from "react";

export const BasicStringValidation = () => {
  const [firstName, setFirstName] = useState();
  const [firstNameErr, setFirstNameErr] = useState({});
  const [mobileNo, setMobileNo] = useState();
  const [mobileNoErr, setMobileNoErr] = useState();
  const submitHandler = (event) => {
    event.preventDefault();

    let isValid = isFormValid();

    if (isValid) {
      console.log("Form Validation successful");
    } else {
      console.log("Not a valid form to submit");
    }
  };

  const isFormValid = () => {
    let firstNameErr = {};
    let arr = {};
    let isValid = true;
    if (
      firstName == null ||
      (firstName == undefined && firstName.length == 0)
    ) {
      firstNameErr.empty = "First name cannot be empty!";
      isValid = false;
    } else if (firstName.length < 5) {
      firstNameErr.short = "First name too short!";
      isValid = false;
    } else if (firstName.length > 10) {
      firstNameErr.long = "First name too long!";
      isValid = false;
    }

    if (!isValid) {
      setFirstNameErr(firstNameErr);
    }

    let regxMobile = /^[7-9]\d{9}$/;

    if (!regxMobile.test(mobileNo)) {
      setMobileNoErr("Not a valid Indian Mobile Number!");
      isValid = false;
    } else {
      setMobileNoErr("");
    }
    return isValid;
  };

  const divStyle = {
    textAlign: "center",
    backgroundColor: "lightseagreen",
    margin: "50px",
    padding: "30px",
    width: "40%",
  };

  return (
    <div style={divStyle}>
      <h6 style={{ textAlign: "center", paddingBottom: "10px" }}>
        Login Form Validation
      </h6>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="">First Name : </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {Object.keys(firstNameErr).map((key) => (
          <div style={{ color: "red" }}>{firstNameErr[key]}</div>
        ))}
        <br />
        <label htmlFor="mobileNo">Mobile No: </label>
        <input
          type="text"
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
        />
        <div style={{ color: "red" }}>{mobileNoErr}</div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
