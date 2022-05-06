import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div>
            <header>
                <h1 className='logo'>Thrift Finder</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to='/map'> Map </Link>
                        </li>
                        <li>
                            <Link to='/yelp'>Yelp</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
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