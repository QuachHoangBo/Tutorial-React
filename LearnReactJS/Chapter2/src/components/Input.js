import React from "react";
class Input extends React.Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input onChange={this.props.onChange}></input>
      </div>
    );
  }
}

export default Input;
