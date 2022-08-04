import React from "react";

function UserListMemo({ users }) {
  return (
    <div>
      <h2>UserListMemo</h2>
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

export default React.memo(UserListMemo);
