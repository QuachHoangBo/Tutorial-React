import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Eric",
    age: 26,
    like: "girl",
  };

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h1>
          My name is {this.state.name} {this.state.age} years old and i like{" "}
          {this.state.like}
        </h1>
      </div>
    );
  }
}

export default MyComponent;
