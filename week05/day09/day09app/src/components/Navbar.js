import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/about/awards">Awards</Link>
          <Outlet />
        </li>
        <li>
          <Link to="/items">Item</Link>
        </li>
        {localStorage.getItem("token") && (
          <button className="logout-button" onClick={() => handleLogout()}>
            Logout
          </button>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
