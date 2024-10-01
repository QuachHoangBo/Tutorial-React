import React from "react";

class UserDate extends React.Component {
  state = {
    isShowlist: true,
  };
  handleShowHide = () => {
    this.setState({
      isShowlist: !this.state.isShowlist,
    });
  };

  render() {
    const { listusers } = this.props;

    return (
      <div>
        <h1
          onClick={() => {
            this.handleShowHide();
          }}
        >
          {this.state.isShowlist ? "Show list" : "Hide list"}
        </h1>

        {this.state.isShowlist &&
          listusers.map((user) => {
            return (
              <div key={user.id}>
                <h1>{user.name}</h1>
                {user.age >= 30 ? <h1>Old</h1> : <h1>Young</h1>}
              </div>
            );
          })}
      </div>
    );
  }
}

export default UserDate;
