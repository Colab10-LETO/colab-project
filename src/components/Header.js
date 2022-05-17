import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger/Hamburger";
import "./Header.css";

const Header = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [closeNav, setCloseNav] = useState(true)

  const toggleHamburger = () => {
    setHamburgerMenu((prevState) => !prevState);
  };
  const closeBurgerBar = () => {
      setCloseNav(false)
      closeNav.collaspe('hide')

 }
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
          <div className="navbar">
            {hamburgerMenu && (
              <div className="navigation">
                <ul className="nav-links">
                  <div className="style-container">
                  <li className="link">
                    <Link to="/" onClick={closeBurgerBar}>Home</Link>
                  </li>
                  <li className="link">
                    <Link to="/about" onClick={closeBurgerBar}>About Us</Link>
                  </li>
                  <li className="link">
                    <Link to="/thrift-guide" onClick={closeBurgerBar}>Thrift Shopping Guide</Link>
                  </li>
                  <li className="link">
                    <Link to="/donation-guide" onClick={closeBurgerBar}>Clothing Donation Guide</Link>
                  </li>
                  <li className="link">
                    <Link to="/recycling-guide" onClick={closeBurgerBar}>Textile Recycling Guide</Link>
                  </li>
                  <li className="link">
                    <Link to="/contact" onClick={closeBurgerBar}>Contact</Link>
                  </li>
                  </div>  
                </ul>
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
