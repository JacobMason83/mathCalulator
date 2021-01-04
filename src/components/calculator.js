import React, { Component } from "react";

export default class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div>
        <h1> hi from Calculator</h1>
      </div>
    );
  }
}
