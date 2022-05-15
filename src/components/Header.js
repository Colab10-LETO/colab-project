import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger/Hamburger";

const Header = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const toggleHamburger = () => {
    setHamburgerMenu((prevState) => !prevState);
  };

  return (
    <div>
      <header>
        <h1 className="logo">Thrift Finder</h1>
        <nav>
          <div className="toggle" onClick={toggleHamburger}>
            <Hamburger isOpen={hamburgerMenu} />
          </div>
          {hamburgerMenu && (
            <div className="navigation">
              <ul>
              <li>
                            <Link to='/about'>About Us</Link>
                        </li>
                        <li>
                            <Link to='/yelp'>Find a Shop</Link>
                        </li>
                        <li>
                            <Link to='/donate'>Find a Donation Center</Link>
                        </li>
                        <li>
                            <Link to='/recycle'>Find a Recycling Center</Link>
                        </li>
                        <li>
                            <Link to='/thrift-guide'>Thrift Shopping Guide</Link>
                        </li>
                        <li>
                            <Link to='/donation-guide'>Clothing Donation Guide</Link>
                        </li>
                        <li>
                            <Link to='/recycling-guide'>Textile Recycling Guide</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
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
