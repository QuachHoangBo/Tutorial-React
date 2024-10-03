import React, { useState } from "react";
import FormUser from "./FormUser";
import UserDate from "./UserDate";

const MyComponent = (props) => {
  const [listusers, setlistusers] = useState([
    { id: 1, name: "hoangbo", age: 20 },
  ]);

  const addUser = (user) => {
    setlistusers([...listusers, user]);
    console.log(listusers);
  };
  const deleteUser = (user) => {
    setlistusers(listusers.filter((item) => item.id !== user.id));
    console.log(listusers);
  };
  return (
    <>
      <div className="container">
        <FormUser addUser={addUser} />
        <hr />
        <UserDate listusers={listusers} deleteUser={deleteUser} />
      </div>
    </>
  );
};
export default MyComponent;
