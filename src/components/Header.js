import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger/Hamburger";

const Header = () => {
    const [hamburgerMenu, setHamburgerMenu] = useState(false)
    
    const toggleHamburger = () => {
        setHamburgerMenu((prevState) => !prevState)
        
    }

    return (
        <div>
            <header>
                <h1 className='logo'>Thrift Finder</h1>
                <nav>
                    {hamburgerMenu
                    ?
                    <div className="navigation">
                        
                    <ul>
                        <li className="burg">
                            <Link to='/yelp'>Home</Link>
                        </li >
                        <li className="burg">
                            <Link to='/about'>About</Link>
                        </li>
                        <li className="burg">
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                    </div>
                    :
                    <div className="toggle" onClick={toggleHamburger}>
                        <Hamburger isOpen={hamburgerMenu} />
                    </div>
}
                </nav>
            </header>
        </div>
    )
}

export default Header;