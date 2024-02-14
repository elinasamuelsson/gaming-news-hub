import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>
        e Gaming News Hub is a school project created by Elina Samuelsson for
        the purpose of learning the basics of React/Next.js.
      </p>
      <p>
        News are fetched from <a href="https://newsapi.org/">NewsAPI</a>,
        upcoming games from <a href="https://rawg.io/apidocs">RAWG API</a>, and
        placeholder review posts from{" "}
        <a href="https://jsonplaceholder.typicode.com/">
          &#123;JSON&#125; Placeholder
        </a>.
      </p>
      <p>&#169; elsa0047</p>
    </footer>
  );
};

export default Footer;
