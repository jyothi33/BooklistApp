import React, { Component } from "react";
import PureComp from "./PureComp";
import ReactMemo from "./ReactMemo";
import RegularComp from "./RegularComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jyothi",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Jyothi" });
    }, 2000);
  }

  render() {
    console.log("*** Parent*****");
    return (
      <div>
        Parent Component
        <ReactMemo label={this.state.name} score="2" />
        {/* <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>
    );
  }
}

export default ParentComp;
