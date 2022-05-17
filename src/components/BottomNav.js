import { Link } from "react-router-dom";
import BuyImage from "../assets/shirt-buy.png";
import DonateImage from "../assets/shirt-donate.png";
import RecycleImage from "../assets/shirt-recycle.png";

const BottomNav = () => {
  return (
    <div className="bottomNav">
      <nav>
        <ul className="bottomNavUl">
          <div className="buy">
            <li className="bottomNavLi">
               <Link className="buy" to='/'><img className="bottomNavImg" src={BuyImage} alt="shirt with cent sign" />Buy</Link>
            </li>
          </div>
          <div className="donate">
          <Link className="buy" to='/donate'> <img className="bottomNavImg" src={DonateImage} alt="shirt with heart on it" /> </Link>
            <li className="bottomNavLi">Donate</li>
          </div>
          <div className="recycle">
          <Link className="buy" to='/recycle'> <img className="bottomNavImg" src={RecycleImage} alt="shirt with recycle symbol" /></Link>
            <li className="bottomNavLi">Recycle</li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default BottomNav;
