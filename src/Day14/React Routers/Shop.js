import React, { useEffect, useState } from "react";

const Shop = () => {
  const [actor, setActor] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await fetch("https://www.breakingbadapi.com/api/characters")
        .then((data) => data.json())
        .then((response) => {
          setActor(response);
        });
    };
    fetchItems();
  }, []);
  console.log(actor);

  return (
    <div>
      {actor.map((item, index) => (
        <h1 key={index}>{item.name}</h1>
      ))}
    </div>
  );
};

export default Shop;
