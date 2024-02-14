"use client";

import React, { useState, useEffect } from "react";

const RecentNews = () => {
  const [dataMostRecent, setDataMostRecent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "";

        const response = await fetch(url);
        const jsonData = await response.json();

        const recentArticles = jsonData.articles;
        setDataMostRecent(recentArticles);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error loading news.</div>;
  } else
    return (
      <div>
        <div>
          <h2>Most Recent News</h2>
        </div>
        {dataMostRecent.slice(0, 5).map((article, index) => (
          <div key={index}>
            <h3>
              <a href={article.url}>{article.title}</a>
            </h3>
          </div>
        ))}
      </div>
    );
};

export default RecentNews;
