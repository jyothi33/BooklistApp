import React, { useRef } from "react";

const UncontrolledForms = () => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const place = useRef(null);
  //fileInput.current.files[0].name
  //type=number
  //checkbox //
  //    const { pet } = this.form;
  //    const checkboxArray = Array.prototype.slice.call(pet);
  // const checkedCheckboxes = checkboxArray.filter((input) => input.checked);
  //    const checkedCheckboxesValues = checkedCheckboxes.map(input => input.value);
  //<input type="checkbox" value="cat" name="pet" /><input type="checkbox" value="dog" name="pet" />
  //Radio buttons Refs for form const { pet } = this.form; //    console.log(pet, pet.value);
  //          ref={form => this.form = form}>
  //            <input type="radio" value="cat" name="pet" />
  //            <input type="radio" value="dog" name="pet" />

  //radio buttons

  const submitHandler = () => {
    alert(
      ` ${place.current.value} --  ${name.current.value} - ${email.current.value} - ${password.current.value}`
    );
  };

  return (
    <div>
      <h3>Uncontrolled Components Example</h3>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="text">Name :</label>
        <input type="text" ref={name} defaultValue="Bob" />
        <br />
        <label htmlFor="email">Email :</label>
        <input type="email" ref={email} />
        <br />
        <label htmlFor="password">Password :</label>
        <input type="password" ref={password} />
        <br />
        <label htmlFor="place"></label>
        <select ref={place} name="place">
          <option value="karnataka">KARNATAKA</option>
          <option value="kerala">KERALA</option>
          <option value="tamil">TAMILNADU</option>
          <option value="andra">ANDRA PRADESH</option>
          <option value="delhi">DELHI</option>
          <option value="mumbai">MUMBAI</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledForms;
