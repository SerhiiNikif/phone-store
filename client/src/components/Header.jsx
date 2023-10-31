import { Link } from "react-router-dom";

import logoSvg from "../assets/img/phone-logo.svg";
import cartSvg from "../assets/img/cart.svg";
import { Search } from "./";

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo__search">
          <Link to="/">
            <div className="header__logo">
              <img width="38" src={logoSvg} alt="Phone logo" />
              <div>
                <h1>Phone Store</h1>
                <p>Best phones in the world</p>
              </div>
            </div>
          </Link>
          <Search />
        </div>
        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>53000 ₴</span>
            <div className="button__delimiter"></div>
            <img src={cartSvg} alt="Cart logo" />
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
