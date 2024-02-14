"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const PostHistory = () => {
  const [dataPostHistory, setDataPostHistory] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setDataPostHistory(json);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      });
  }, []);

  if (error) {
    return <div>Error loading games.</div>;
  } else
    return (
      <div>
        <div>
          <h2>Popular posts</h2>
        </div>
        <div>
          {dataPostHistory.slice(0, 3).map((post, index) => (
            <div key={index}>
              <h3>
                <Link href={`/reviews/${post.id}`}>{post.title}</Link>
              </h3>
              <p className="post-details">Author: {post.userId}, timestamp</p>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default PostHistory;
