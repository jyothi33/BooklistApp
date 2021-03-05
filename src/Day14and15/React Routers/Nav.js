import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="nav-links">
        {/* Link takes one prop "to" which as the path */}
        {/* <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>about</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link> */}
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
