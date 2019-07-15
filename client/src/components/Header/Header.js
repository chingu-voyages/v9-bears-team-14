import React from "react";
import { Link } from "react-router-dom";
const Header = props => {
  return (
    <header className="Header--wrapper">
      <Link to="/">
        <h1 className="Header--title">Geo Foods</h1>
      </Link>
      <h2 className=" Header--subtitle">
        Explore the World's Cuisines
      </h2>
    </header>
  );
};

export default Header;
