import React, { Component } from "react";
import * as math from "mathjs";

import Button from "./components/button";
import Input from "./components/input";

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
  handleChange = (value) => {
    const input = this.state.input;
    this.setState({
      input: input + value
    });
  };
  handleEqual = () => {
    this.setState({
      input: math.evaluate(this.state.input)
    });
  };
  renderButtons = () => {
    return this.state.ops.map((row) => {
      return (
        <div className="row">
          {row.map((digit) => {
            return <Button handleClick={this.handleChange}>{digit}</Button>;
          })}
        </div>
      );
    });
  };

  render() {
    return (
      <div className="App">
        {/* {input button } */}
        <Input input={this.state.input} />
        {/* row of buttons  */}
        {this.renderButtons()}
        {/* clear and equal buttons  */}
        <div className="row">
          <Button
            label="clear-btn"
            handleClick={() => this.setState({ input: "" })}
          >
            Clear
          </Button>
          <Button label="equal-btn" handleClick={this.handleEqual}>
            =
          </Button>
        </div>
      </div>
    );
  }
}
