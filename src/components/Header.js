import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger/Hamburger";
import "./Header.css";

const Header = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const toggleHamburger = () => {
    setHamburgerMenu((prevState) => !prevState);
  };

  return (
    <div>
      <header>
        <div className="header">
          <h1 className="logo">Thrift Finder</h1>
          <div className="toggle" onClick={toggleHamburger}>
            <Hamburger isOpen={hamburgerMenu} />
          </div>
        </div>
        <nav>
          {hamburgerMenu && (
            <div className="navigation">
              <ul>
              <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/thrift-guide">Thrift Shopping Guide</Link>
                </li>
                <li>
                  <Link to="/donation-guide">Clothing Donation Guide</Link>
                </li>
                <li>
                  <Link to="/recycling-guide">Textile Recycling Guide</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
