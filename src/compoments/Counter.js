import React from "react";
import "../App.css";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h2>{this.props.count}</h2>
        <button className="moins" onClick={this.props.substract}>
          -
        </button>
        <button className="plus" onClick={this.props.increment}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
