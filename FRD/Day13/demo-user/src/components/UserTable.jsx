import React from "react";

function UserTable({ list }) {
  return (
    <div>
      <h1>Users result</h1>
      <div>
        {list.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid",
              margin: "5px 0px",
              padding: "5px",
            }}
          >
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserTable;
