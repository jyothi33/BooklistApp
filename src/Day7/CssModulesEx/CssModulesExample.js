import React from "react";
import style from "./stylefile.module.css";

const CssModulesExample = ({ title }) => {
  return <div className={style.title}>{title}</div>;
};

export default CssModulesExample;
