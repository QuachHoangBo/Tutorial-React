import React, { useState } from "react";
import "./FormUser.scss";
const FormUser = (props) => {
  const [user, setUser] = useState({
    name: "",
    age: 0,
  });
  const onSubmitChanege = (event) => {
    event.preventDefault();
    // tắt sự kiên load lại khi nhấn enter trong form
    props.addUser({
      id: Math.floor(Math.random() * 100) + 10,
      name: user.name,
      age: user.age,
    });
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          onSubmitChanege(event);
        }}
        className="formUser"
      >
        <label className="labeltext">
          Nhập tên:
          <input
            type="text"
            onChange={(event) => {
              user.name = event.target.value;
            }}
          />
        </label>
        <h1>{user.name}</h1>
        <label>
          Nhập tuổi:
          <input
            type="text"
            onChange={(event) => {
              user.age = event.target.value;
            }}
          />
        </label>
        <h1>{user.age}</h1>
        <button>Click</button>
      </form>
    </div>
  );
};

export default FormUser;
