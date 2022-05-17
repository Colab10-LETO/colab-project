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
               <Link className="buy" to='/'><img className="bottomNavImg" src={BuyImage} alt="" />Buy</Link>
            </li>
          </div>
          <div className="donate">
            <img className="bottomNavImg" src={DonateImage} alt="" />
            <li className="bottomNavLi">Donate</li>
          </div>
          <div className="recycle">
            <img className="bottomNavImg" src={RecycleImage} alt="" />
            <li className="bottomNavLi">Recycle</li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default BottomNav;
