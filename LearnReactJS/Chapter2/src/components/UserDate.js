import React, { useState } from "react";

const UserDate = (props) => {
  const [isShowlist, setIsShowlist] = useState(true);

  const handleShowHide = () => {
    setIsShowlist(!isShowlist);
  };

  return (
    console.log(props.listusers),
    (
      <div>
        <h1 onClick={handleShowHide}>
          {isShowlist ? "Show list" : "Hide list"}
        </h1>

        {isShowlist &&
          props.listusers.map((user) => {
            return (
              <div key={user.id}>
                <h1>{user.name}</h1>
                {user.age >= 30 ? <h1>Old</h1> : <h1>Young</h1>}
                <button onClick={() => props.deleteUser(user)}>xóa</button>
              </div>
            );
          })}
      </div>
    )
  );
};

export default UserDate;
