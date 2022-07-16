import React from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import api from "../services";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPost(postId);
  }, [postId]);

  const getPost = (id) => {
    api
      .get(`${BASE_URL}/${postId}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ padding: "40px" }}>
      {post ? (
        <div>
          <h2>Post: {post.id}</h2>
          <h3>Title: {post.title}</h3>
          <p>Body: {post.body}</p>
        </div>
      ) : (
        <p>No post with id {postId}</p>
      )}
    </div>
  );
}

export default PostPage;
