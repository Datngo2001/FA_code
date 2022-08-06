import React from "react";

function UserList({ users }) {
  return (
    <div>
      <h2>UserList</h2>
      {users?.length > 0 && (
        <div>
          {users.map((user) => (
            <p>
              Name: {user.name}, age: {user.age}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default React.memo(UserList);
