"use client";

import { useEffect, useState } from "react";

export default function post({ params }) {
  const [post, setPost] = useState();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${params.postId}`
        );
        const json = await response.json();
        setPost(json);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, [params.postId]);

  return (
    <div className="content-column">
      {post &&(
        <div className="post">
          <h3>{post.title}</h3>
          <p>Author: {post.userId}, timestamp</p>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}