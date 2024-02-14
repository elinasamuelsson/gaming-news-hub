"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [hoveredLinks, setHoveredLinks] = useState({
    home: false,
    newshub: false,
    reviews: false,
    upcoming: false,
  });

  const handleMouseEnter = (link) => {
    setHoveredLinks({ hoveredLinks, [link]: true });
  };

  const handleMouseLeave = (link) => {
    setHoveredLinks({ hoveredLinks, [link]: false });
  };

  const getLinkStyle = (link) => {
    return {
      backgroundColor: hoveredLinks[link] ? "var(--dark-green)" : "transparent",
      color: hoveredLinks[link] ? "var(--black)" : "var(--dark-blue)",
      fontWeight: hoveredLinks[link] ? "bold" : "normal",
      borderRadius: hoveredLinks[link] ? "8px" : "",
      transition: hoveredLinks[link]
        ? "background-color 0.3s ease, color 0.3s ease, font-weight 0.3s ease, border-radius 0.3s ease"
        : "",
    };
  };

  return (
    <nav>
      <ul>
        <li>
          <Link
            href="/"
            onMouseEnter={() => handleMouseEnter("home")}
            onMouseLeave={() => handleMouseLeave("home")}
            style={getLinkStyle("home")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/newshub"
            onMouseEnter={() => handleMouseEnter("newshub")}
            onMouseLeave={() => handleMouseLeave("newshub")}
            style={getLinkStyle("newshub")}
          >
            News hub
          </Link>
        </li>
        <li>
          <Link
            href="/reviews"
            onMouseEnter={() => handleMouseEnter("reviews")}
            onMouseLeave={() => handleMouseLeave("reviews")}
            style={getLinkStyle("reviews")}
          >
            Reviews
          </Link>
        </li>
        <li>
          <Link
            href="/upcoming"
            onMouseEnter={() => handleMouseEnter("upcoming")}
            onMouseLeave={() => handleMouseLeave("upcoming")}
            style={getLinkStyle("upcoming")}
          >
            Upcoming games
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
