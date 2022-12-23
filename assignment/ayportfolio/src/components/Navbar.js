import React from "react";
import { NavLink } from "react-router-dom"; 

function Navbar() {
  return (
    <section className="px-10 py-7 lg:w-3/4 mx-auto">
      <nav className="flex justify-between">
        <h1>
          <NavLink to="/">
            <span className="font-extrabold text-xl">.ayp</span>
          </NavLink>
        </h1>
        <ul className="flex items-center font-bold">
          <li>
            <NavLink to="/about" className="px-5">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" className="px-5">
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className="px-5">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/interest" className="px-5">
              Interest
            </NavLink>
          </li>
          <li>
            <NavLink to="/awards" className="px-5">
              Awards
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
