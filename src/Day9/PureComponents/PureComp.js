import React, { Component, PureComponent } from "react";

export class PureComp extends Component {
  render() {
    console.log("Pure Component !" + this.props.name);
    return <div>Pure Component {this.props.name}</div>;
  }
}

export default PureComp;
