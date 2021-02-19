import React, { Component } from "react";

export class ClassComponent extends Component {
  render() {
    return <div>This is a class component.</div>;
  }

  componentDidMount() {
    console.log("Mounting!");
  }

  componentDidUpdate() {
    console.log("I am updating");
  }
}

export default ClassComponent;
