import React from "react";
import "./FormUser.scss";
class FormUser extends React.Component {
  state = {
    id: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
    name: "",
    age: 0,
  };
  onSubmitChanege = (event) => {
    event.preventDefault();
    this.props.addUser(this.state);
  };

  render() {
    return (
      <div>
        <form
          onSubmit={(event) => {
            this.onSubmitChanege(event);
          }}
          className="formUser"
        >
          <label className="labeltext">
            Nhập tên:
            <input
              type="text"
              onChange={(event) => {
                this.setState({ name: event.target.value });
              }}
            />
          </label>
          <h1>{this.state.name}</h1>
          <label>
            Nhập tuổi:
            <input
              type="text"
              onChange={(event) => {
                this.setState({ age: event.target.value });
              }}
            />
          </label>
          <h1>{this.state.age}</h1>
          <button>Click</button>
        </form>
      </div>
    );
  }
}

export default FormUser;
