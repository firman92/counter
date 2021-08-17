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
        <Counter
          count={this.state.count}
          increment={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
          substract={() =>
            this.setState({
              count: this.state.count - 1,
            })
          }
        />
      </div>
    );
  }
}

export default App;
