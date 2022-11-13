const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <li className="navbar__item logo">QTemu</li>
        <li className="navbar__item"><a href="#">Create Meetups</a></li>
        <li className="navbar__item"><a href="#">Explore</a></li>
        <li className="navbar__item--right"><a href="#">Login</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
