import React from "react";
import FormCustomHook from "./FormCustomHook";
import FormWithoutHooks from "./FormWithoutHooks";

const FormCustomMain = () => {
  return (
    <div>
      {/* <FormWithoutHooks /> */}
      <FormCustomHook />
    </div>
  );
};

export default FormCustomMain;
