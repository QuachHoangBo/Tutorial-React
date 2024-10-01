import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Eric",
    age: 26,
    like: "girl",
    count: 0,
  };

  CountNumber() {
    this.setState({ count: Math.floor(Math.random() * 100) + 1 });
  }

  render() {
    return (
      <div className="container">
        <h1>Hello World</h1>
        <h1>
          My name is {this.state.name} {this.state.age} years old and i like{" "}
          {this.state.like}
        </h1>
        <button
          onClick={() => {
            this.setState({ like: "boy" });
          }}
        >
          click me
        </button>
        <button onClick={() => this.CountNumber()}>tăng số</button>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}
<style>.container {}</style>;
export default MyComponent;
