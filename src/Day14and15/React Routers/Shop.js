import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

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

  return (
    <div>
      {actor.map((item) => (
        <h1 key={item.char_id}>
          <Link to={`shop/${item.char_id}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  );
};

export default Shop;
