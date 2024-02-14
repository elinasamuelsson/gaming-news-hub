"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const PostHistory = () => {
  const [dataPostHistory, setdataPostHistory] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setdataPostHistory(json);
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
          <h2>Recent posts</h2>
        </div>
        <div>
          {dataPostHistory.slice(0, 10).map((post, index) => (
            <div key={index}>
              <h4>
                <Link href={`/reviews/${post.id}`}>{post.title}</Link>
              </h4>
            </div>
          ))}
        </div>
      </div>
    );
};

export default PostHistory;
