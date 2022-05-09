import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger/Hamburger";

const Header = () => {
    const [hamburgerMenu, setHamburgerMenu] = useState(false)
    
    const toggleHamburger = () => {
        setHamburgerMenu(!hamburgerMenu)
    }

    return (
        <div>
            <header>
                <h1 className='logo'>Thrift Finder</h1>
                <nav> 
                    
                    <div className="navigation">
                    <ul>
                        <li>
                            <Link to='/yelp'>Finder</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                    </div>
                    
                    <div className="hamburger" onClick={toggleHamburger}>
                        <Hamburger isOpen={hamburgerMenu} />
                    </div>
                        
                </nav>
            </header>

            <style jsx>{`
                .navigation{
                    width: 100%;
                    height: 50px;
                }
                .navigation ul{
                    display:flex;
                    flex-wrap: wrap;
                    float: right;
                    margin: 0px;
                    padding: 0px;
                    overflow: hidden;
                }
                .navigation ul li{
                    list-style-type: none;
                    padding-right: 10px;
                }
                .hamburger{
                    display: none;
                    z-index: 6;
                } 
                @media (max-width: 780px){
                  
                    .hamburger{
                        display:fixed;
                        padding-top: 10px;
                        margin-left: 10px;
                        z-index: 6;
                    }
                
                    .navigation ul{
                        display: ${hamburgerMenu ? 'inline' : 'none'};
                        background-color: red;
                        height: 100vh;
                        width: 50vw;
                        margin-top: 50px;
                        position: fixed;
                        
                    }
                }
                
            `}</style>
        </div>
    )
}

export default Header;