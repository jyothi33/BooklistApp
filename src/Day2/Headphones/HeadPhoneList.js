import React from "react";
import ImageHP from "./ImageHP";
import PriceHp from "./PriceHp";
import TitleHP from "./TitleHP";

const HeadPhoneList = ({ imgUrl, title, price }) => {
  //console.log(headphone);
  return (
    <div>
      <ImageHP imgUrl={imgUrl} />
      <TitleHP title={title} />
      <PriceHp price={price} />
    </div>
  );
};

export default HeadPhoneList;
