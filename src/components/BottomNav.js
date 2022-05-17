import { NavLink } from "react-router-dom";
import BuyImage from "../assets/shirt-buy.png";
import DonateImage from "../assets/shirt-donate.png";
import RecycleImage from "../assets/shirt-recycle.png";

const BottomNav = () => {

    const buyLinkStyles = ({ isActive }) => {

        return {
            color: isActive ? "#D3A25E" : "#AAA",
            filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
            cursor: 'pointer',
        }

    }

    const donateLinkStyles = ({ isActive }) => {

        return {
            color: isActive ? "#C67B5C" : "#AAA",
            filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
            cursor: 'pointer',
        }

    }

    const recycleLinkStyles = ({ isActive }) => {

        return {
            color: isActive ? "#8E9D95" : "#AAA",
            filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
            cursor: 'pointer',
        }

    }

  return (
    <div className="bottomNav">
      <nav>
        <ul className="bottomNavUl">
          <div className="buy">
            <li className="bottomNavLi">
               <NavLink style={buyLinkStyles} className="buy" to='/'><img className="bottomNavImg" src={BuyImage} alt="shirt with cent sign" />Buy</NavLink>
            </li>
          </div>
          <div className="donate">
          <li className="bottomNavLi">
          <NavLink style={donateLinkStyles} className="buy" to='/donate'> <img className="bottomNavImg" src={DonateImage} alt="shirt with heart on it" /> 
            Donate</NavLink>
            </li>
          </div>
          <div className="recycle">
        <li className="bottomNavLi">
          <NavLink style={recycleLinkStyles} className="buy" to='/recycle'> <img className="bottomNavImg" src={RecycleImage} alt="shirt with recycle symbol" />
            Recycle</NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default BottomNav;
