import React from "react";
import ImageSection from "./ImageSection";
import Price from "./Price";
import Title from "./Title";
import PropTypes from "prop-types";

function Booklist({ url, title, price, pcolor }) {
  return (
    <>
      <ImageSection imgUrl={url} />
      <Title title={title} />
      <Price price={price} pcolor={pcolor} />
    </>
  );
}

Booklist.propTypes = {
  price: PropTypes.number.isRequired,
};

export default Booklist;
