"use client";

import React, { useState, useEffect } from "react";

const MainNews = () => {
  const [dataMainNews, setDataMainNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          "";

        const response = await fetch(url);
        const jsonData = await response.json();

        const mainArticles = jsonData.articles;
        setDataMainNews(mainArticles);
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
        <div className="card-container">
          {dataMainNews.slice(0, 50).map((article, index) => (
            <div key={index} className="card">
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  width="50px"
                  alt="Article image"
                />
              )}
              <h3>
                <a href={article.url}>{article.title}</a>,
                <span className="emphasis"> {article.source.name}</span>
              </h3>
              <p className="card-description">{article.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default MainNews;
