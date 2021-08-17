import React from "react";
import "./App.css";
import Counter from "./compoments/Counter";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <Counter />
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <button
          className="plus"
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +
        </button>
        <button
          className="moins"
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          -
        </button>
      </div>
    );
  }
}

export default App;
