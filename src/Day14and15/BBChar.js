import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const BBChar = () => {
  let charFromUseParams = useParams();
  //console.log(charFromUseParams.charId);

  let location = new URLSearchParams(useLocation().search);
  console.log(location.get("first"));
  console.log(location.get("designation"));

  const [bbChar, setbbChar] = useState({});
  const fetchCharacters = async () => {
    const characters = await fetch(
      `https://www.breakingbadapi.com/api/characters/${charFromUseParams.charId}`
    );

    let person = await characters.json();

    setbbChar(person[0]);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
      <img
        src={bbChar.img}
        alt=""
        style={{ height: "200px", width: "200px" }}
      />
      <h1>{bbChar.name}</h1>
      <h2>{bbChar.birthday !== "Unknown" && bbChar.birthday}</h2>
    </>
  );
};

export default BBChar;
