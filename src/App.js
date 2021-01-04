import React, { Component } from "react";
import Calculator from "./components/calculator";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      ops: [
        // setting up the rows of the calculator could be done as this.ops as well
        ["7", "8", "9", "/"],
        ["4", "5", "6", "*"],
        ["1", "2", "3", "+"],
        ["^", "0", ".", "-"]
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {/* {input button } */}
        {/* row of buttons  */}
        {/* clear and equal buttons  */}
        <Calculator />
      </div>
    );
  }
}
