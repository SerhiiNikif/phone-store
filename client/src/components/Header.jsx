import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";

import logoSvg from "../assets/img/phone-logo.svg";
import cartSvg from "../assets/img/cart.svg";
import { Search } from "./";
import { selectCart } from "../redux/cart/selectors";
import { removeUser } from "../redux/user/slice";

export const Header = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector(selectCart);
  const location = useLocation();
  const isMounted = useRef(false);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

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

        <div className="logout__cart">
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

          <button
            className="button logout"
            onClick={() => dispatch(removeUser())}
          >Log out</button>
        </div>
      </div>
    </div>
  );
};
