"use client";

import React, { useState, useEffect } from "react";

const UpcomingGamesList = () => {
  const [dataUpcoming, setDataUpcoming] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const today = new Date().toJSON().slice(0, 10);
        const url =
          "https://api.rawg.io/api/games?" +
          "key=b6c26555b3e74a048be322047e099f67&" +
          `dates=${today},2038-01-08&` +
          "ordering=released&" +
          "platforms=187,186,7,1";

        const response = await fetch(url);
        const jsonData = await response.json();
        console.log(jsonData);

        setDataUpcoming(jsonData.results);
        console.log(dataUpcoming);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div>
        <h2 className="h2-upcoming">Upcoming games</h2>
        <ul className="upcoming-list">
          {dataUpcoming.map((game, index) => (
            <li key={index}>
              <div>
                <h4 className="h4-upcoming">{game.name}</h4>
                <img src={game.background_image} className="image-upcoming" />
                <p className="game-details">{game.released}</p>
                <ul className="list-flex">
                  {game.genres.map((genre, i) => (
                    <li key={i}>{genre.name}, </li>
                  ))}
                </ul>
                <ul className="list-flex">
                  {game.platforms.map((platform, z) => (
                    <li key={z}>{platform.platform.name}, </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UpcomingGamesList;
