import React from "react";
import PizzaCard from "./PizzaCard";

function PizzaApp() {
  let pizzaObj = [
    {
      title: "Veggie Forest",
      img: "https://static.toiimg.com/photo/53110049.cms",
      description:
        "Oozing with cheesy deliciousness! Enjoy the Mediterranean flavor with this hand-tossed 11-inch pizza - topped with Veg falafel, roasted veggies and onion",
      price: 1000,
      toppings: ["olives", "black pepper", "jalepeno", 4],
      //toppings: [1, 2, 3],
      cheese: "Yes",
      sauce: "",
    },
  ];
  return (
    <div>
      {pizzaObj.map((pizza, index) => (
        <PizzaCard key={index} {...pizza}>
          <h1>gdhvfh</h1>
        </PizzaCard>
      ))}
    </div>
  );
}

export default PizzaApp;
