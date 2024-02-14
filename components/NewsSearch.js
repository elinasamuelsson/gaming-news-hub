"use client";

import React, { useState } from "react";

const NewsSearch = () => {
  const [dataSearch, setDataSearch] = useState([]);
  const [showResults, setShowResults] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      let newsSearchInput = document
        .getElementById("newsSearchInput")
        .value.trim();
      let newsSearchInputNoBlanks = newsSearchInput.replace(/\s+/g, "-");

      const url =
        "https://newsapi.org/v2/everything?" +
        "q=" +
        encodeURIComponent(newsSearchInputNoBlanks) +
        "&" +
        "sortBy=publishedAt&" +
        "apiKey=c30072e05d984e198cf7cc20aa1c134d";

      const response = await fetch(url);
      const jsonData = await response.json();

      const searchedArticles = jsonData.articles;
      setDataSearch(searchedArticles);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const toggleResults = () => {
    setShowResults(!showResults);
  };

  if (error) {
    return <div>Error searching news.</div>;
  }

  return (
    <div className="search-bar">
      <div className="search-input">
        <input
          type="text"
          id="newsSearchInput"
          placeholder="Search news articles"
        />{" "}
        <br />
        <button onClick={fetchData}>Search</button>
        <button onClick={toggleResults}>Show/hide search results</button>
      </div>
      <div>
        {showResults && (
          <div className="search-results">
            <ul>
              {dataSearch.slice(0, 5).map((article, index) => (
                <li key={index}>
                  <h3>
                    <a href={article.url}>{article.title}</a>,
                    <span className="emphasis"> {article.source.name}</span>
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsSearch;
