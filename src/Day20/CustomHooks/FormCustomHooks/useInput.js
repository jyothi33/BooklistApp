import React, { useState } from "react";

const useInput = (initialState) => {
  const [name, setName] = useState(initialState);

  const reset = () => {
    alert("resetting...." + initialState);

    setName(initialState);
  };

  const bind = {
    value: name,
    onChange: (e) => setName(e.target.value),
  };

  return [name, bind, reset];
};

export default useInput;
