import React, { useState } from "react";
import Counter from "./Counter";
import ProductPage from "./ProductSample/ProductPage";
import UserList from "./UserList";
import UserListMemo from "./UserListMemo";
import UserListShouldComponentUpdate from "./UserListShouldComponentUpdate";

function OptimizeRender() {
  const [showCounter, setShowCounter] = useState(true);

  const [userList, setUserList] = useState([
    { name: "Hoang", age: 18 },
    { name: "Ngoc", age: 20 },
  ]);

  //   const userList = [
  //     { name: "Hoang", age: 18 },
  //     { name: "Ngoc", age: 20 },
  //   ];

  const addUser = () => {
    setUserList([
      ...userList,
      {
        name: `User - ${userList.length + 1}`,
        age: Math.round(Math.random() * 50),
      },
    ]);

    // userList.push({
    //   name: `User mutable - ${userList.length + 1}`,
    //   age: Math.round(Math.random() * 50),
    // });
  };

  return (
    <div className="container">
      <h1>OptimizeRender</h1>
      <UserList users={userList} />
      {/* <UserListMemo users={userList} />
      <UserListShouldComponentUpdate users={userList} /> */}
      <button onClick={addUser}>Add user</button>
      <br />
      {/* <ProductPage /> */}
      <button onClick={() => setShowCounter((v) => !v)}>Toggle counter</button>
      {showCounter && <Counter />}
    </div>
  );
}

export default OptimizeRender;
