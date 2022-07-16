import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import User from "../components/User/User";
import api from "../services";
import { Link } from "react-router-dom";

function UserPage() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    Promise.allSettled([getUser(userId), getPost(userId)])
      .then((res) => {
        setUser(() => res[0].value.data);
        setPosts(() => res[1].value.data);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  function getUser(userId) {
    return api.get(`/users/${userId}`).catch((err) => {
      setError(true);
      console.log(err);
    });
  }

  function getPost(userId) {
    return api.get(`/users/${userId}/posts`).catch((err) => {
      setError(true);
      console.log(err);
    });
  }

  return (
    <div>
      <div>{error ? "404" : <User user={user}></User>}</div>
      <div>
        {posts.map((post) => (
          <Link
            style={{ display: "block", margin: "40px" }}
            to={`/posts/${post.id}`}
          >
            {post.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default UserPage;
