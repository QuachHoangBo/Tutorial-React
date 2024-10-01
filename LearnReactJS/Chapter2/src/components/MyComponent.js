import React from "react";
import FormUser from "./FormUser";
import UserDate from "./UserDate";

class MyComponent extends React.Component {
  state = {
    listusers: [
      { id: 1, name: "quachhoangbo", age: 20 },
      { id: 2, name: "quachhoangbo2", age: 30 },
      { id: 3, name: "quachhoangbo3", age: 40 },
    ],
  };
  addUser = (user) => {
    this.setState({
      listusers: [...this.state.listusers, user],
    });
  };
  render() {
    return (
      <div className="container">
        <FormUser addUser={this.addUser} />
        <hr />
        <UserDate listusers={this.state.listusers} />
      </div>
    );
  }
}
<style>.container {}</style>;
export default MyComponent;
