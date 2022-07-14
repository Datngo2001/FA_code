import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import User from "../components/User/User";

function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    getUser(id);
  }, [id]);

  function getUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (!data) {
          return null;
        }
        setUser(() => data);
      })
      .catch((err) => console.log(err));
  }

  return <div>{error ? "404" : <User user={user}></User>}</div>;
}

export default UserPage;
