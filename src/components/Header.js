import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div>
            <header>
                <h1 className='logo'>Thrift Finder</h1>
                <nav>
                    <ul className="headerNav">
                        <li>
                            <Link to='/about'>About Us</Link>
                        </li>
                        <li>
                            <Link to='/yelp'>Find a Shop</Link>
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
                </nav>
            </header>
        </div>
    )
}

export default Header;