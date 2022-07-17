import React from "react";
import { UsersAPI } from "../../api";

function UserTable() {
  UsersAPI.searchUser({
    query: "Be",
    page: 1,
    limit: 10,
    sortBy: "firstName",
  })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));

  return <div>UserTable</div>;
}

export default UserTable;
