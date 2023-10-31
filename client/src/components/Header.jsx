import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import logoSvg from "../assets/img/phone-logo.svg";
import cartSvg from "../assets/img/cart.svg";
import { Search } from "./";
import { selectCart } from "../redux/slices/cartSlice";

export const Header = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const location = useLocation();
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

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
          {location.pathname !== "/cart" && <Search />}
        </div>
        <div className="header__cart">
          {location.pathname !== "/cart" && (
            <Link to="/cart" className="button button--cart">
              <span>{totalPrice} ₴</span>
              <div className="button__delimiter"></div>
              <img src={cartSvg} alt="Cart logo" />
              <span>{totalCount}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
