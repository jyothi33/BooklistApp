import React from "react";
import HeadPhoneList from "./HeadPhoneList";
import ImageHP from "./ImageHP";
import PriceHp from "./PriceHp";
import TitleHP from "./TitleHP";

const MainHp = () => {
  const headphones = [
    {
      imgUrl:
        "https://m.media-amazon.com/images/I/61+paS1uwjL._AC_UY436_FMwebp_QL65_.jpg",
      title:
        "boAt Rockerz 370 Wireless Headphone with Bluetooth 5.0, Immersive Audio, Lightweight Ergonomic Design, Cosy Padded Earcups and Up to 12H Playback Bliss (Fiery Red)",
      price: "1,399",
    },
    {
      imgUrl:
        "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_UY436_FMwebp_QL65_.jpg",
      title:
        "Sony WH-1000XM4 Industry Leading Wireless Noise Cancelling Headphones, Bluetooth Headset with Mic for Phone Calls, 30 Hours Battery Life, Quick Charge, Touch Control & Alexa Voice Control – (Black)",
      price: "2000",
    },
    {
      imgUrl:
        "https://m.media-amazon.com/images/I/61qpkPzbEEL._AC_UY436_FMwebp_QL65_.jpg",
      title:
        "pTron Boom Ultima 4D Dual Driver, in-Ear Gaming Wired Headphones with in-line Mic, Volume Control & Passive Noise Cancelling Boom 3 Earphones - (Dark Blue)",
    },
  ];

  return (
    <div>
      {headphones.map((headphone, index) => (
        <HeadPhoneList {...headphone} key={index} />
        // <div key={index}>
        //   <ImageHP imgUrl={headphone.imgUrl} />
        //   <TitleHP title={headphone.title} />
        //   <PriceHp price={headphone.price} />
        // </div>
      ))}
    </div>
  );
};

export default MainHp;
