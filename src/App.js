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
  renderButtons = () => {
    return this.state.ops.map((row) => {
      return (
        <div className="row">
          {row.map((digit) => {
            return <button className="button">{digit}</button>;
          })}
        </div>
      );
    });
  };
  render() {
    return (
      <div className="App">
        {/* {input button } */}
        <div className="input">{this.state.input}</div>
        {/* row of buttons  */}
        {this.renderButtons()}
        {/* clear and equal buttons  */}
        <Calculator />
      </div>
    );
  }
}
