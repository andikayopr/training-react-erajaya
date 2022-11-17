import React from "react";
import PropTypes from "prop-types";
import Link from "../atoms/Link";

const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <li className="navbar__item logo">QTemu</li>
        <li className="navbar__item"><Link title="Create Meetups"/></li>
        <li className="navbar__item"><Link title="Explore"/></li>
        <li className="navbar__item--right"><Link title="Login"/></li>
      </ul>
    </div>
  );
};

export default Navbar;
