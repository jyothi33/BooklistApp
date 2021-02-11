/**
 * Jyothi S
 * 
 * Typechecking With PropTypes
 * 
 * As your app grows, you can catch a lot of bugs with typechecking. For some applications, you can use JavaScript extensions like Flow or TypeScript to typecheck your whole application. But even if you don’t use those, React has some built-in typechecking abilities. To run typechecking on the props for a component, you can assign the special propTypes property as shown below.
 * PropTypes exports a range of validators that can be used to make sure the data you receive is valid. In this example, we’re using PropTypes.string. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. For performance reasons, propTypes is only checked in development mode.
 * Requiring Single Child
 * 
 * price: PropTypes.number, //Number type
    title: PropTypes.string.isRequired, //Mandate Value
    toppings: PropTypes.arrayOf(PropTypes.string), //String Type
    cheese: PropTypes.oneOf(['Yes', 'No']), //Enum Type
    children: PropTypes.element.isRequired, //Restrict to have only one child component.
    //Create custom validations
    sauce(props,propName,component){
        if(props[propName].length === 0){
            return new Error(`No sauce provided!!!`)
        }
    }
 * 
 * 
 * 
 * 
 */

import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

function PizzaCard({
  title,
  img,
  price,
  description,
  toppings,
  cheese,
  children,
  sauce,
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Rs.{price}</Card.Text>
        <Card.Text>Toppings : {toppings.join(", ").toUpperCase()}</Card.Text>
        <Button variant="primary">Order</Button>
      </Card.Body>
    </Card>
  );
}

PizzaCard.propTypes = {
  sauce(props, propName, component) {
    if (props[propName].length === 0) {
      return new Error(`No sauce provided`);
    }
  },
};

// PizzaCard.propTypes = {
//     price: PropTypes.number,
//     title: PropTypes.string.isRequired,
//     toppings: PropTypes.arrayOf(PropTypes.string),
//     cheese: PropTypes.oneOf(['Yes', 'No']),
//     children: PropTypes.element.isRequired,
//     sauce(props,propName,component){
//         if(props[propName].length === 0){
//             return new Error(`No sauce provided!!!`)
//         }
//     }
// }

export default PizzaCard;
