import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const CreditCardExample = () => {
  const [number, setNumber] = useState("233456789");
  const [name, setName] = useState("jyothi");
  const [expiry, setExpiry] = useState("23/12");
  const [cvc, setCvc] = useState("345");
  return (
    <div>
      <Cards cvc={cvc} expiry={expiry} name={name} number={number} />
      <form action="">
        <input
          type="tel"
          name="number"
          value={number}
          placeholder="Credit Card"
          onChange={(e) => setNumber(e.target.value)}
        />
      </form>
    </div>
  );
};

export default CreditCardExample;
