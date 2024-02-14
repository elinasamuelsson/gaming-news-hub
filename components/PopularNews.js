"use client";

import React, { useState, useEffect } from "react";

const PopularNews = () => {
  const [dataMostPopular, setDataMostPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "";

        const response = await fetch(url);
        const jsonData = await response.json();

        const popularArticles = jsonData.articles;
        setDataMostPopular(popularArticles);
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
          <h2>Top Headlines</h2>
        </div>
        {dataMostPopular.slice(0, 3).map((article, index) => (
          <div key={index}>
            <h3>
              <a href={article.url}>{article.title}</a>,
              <span className="emphasis"> {article.source.name}</span>
            </h3>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    );
};

export default PopularNews;
