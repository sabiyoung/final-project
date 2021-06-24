import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SmsIcon from "@material-ui/icons/Sms";
import "./header.css";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { useStateValue } from "../stateProvider/StateProvider";
function Header() {
  const [{ cart, detail }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <div className="header__searchIcon">
          <SearchIcon />
          Search
        </div>
      </div>
      <div className="header__nav">
        <Link to="/" className="header__clearlink">
          <div className="header__option">
            <span className="header__optionLineOne">sign In </span>
            <span className="header__optionLineTwo">Join Free </span>
          </div>
        </Link>
        <Link to="/" className="header__clearlink">
          <div className="header__option">
            <span className="header__optionLineOne"> Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__clearlink">
          <div className="header__option">
            <span className="header__optionLineOne"> Messages</span>
            <span className="header__optionLineTwo">
              <SmsIcon />
            </span>
          </div>
        </Link>
        <Link to="/cart" className="header__clearlink">
          <div className="header__optionBasket">
            <span className="header__optionLineTwo header__basketCount">
              {cart?.length}
            </span>
            <ShoppingCartIcon />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
