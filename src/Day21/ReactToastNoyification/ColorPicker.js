import React, { useState } from "react";
import { ChromePicker, SketchPicker } from "react-color";


//AlphaPicker BlockPicker ChromePicker CirclePicker CompactPicker GithubPicker HuePicker MaterialPicker PhotoshopPicker SketchPicker SliderPicker SwatchesPicker TwitterPicker
const ColorPicker = () => {
  const [color, setColor] = useState("#FFF");

  return (
    <>
    <SketchPicker />
      {/* <ChromePicker
        color={color}
        onChange={(updatedColor) => setColor(updatedColor)}
      />
      <div>you picked {color}</div> */}
    </>
  );
};

export default ColorPicker;
