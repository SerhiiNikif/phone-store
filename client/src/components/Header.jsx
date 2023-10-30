import logoSvg from "../assets/img/phone-logo.svg";
import cartSvg from "../assets/img/cart.svg";

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="38" src={logoSvg} alt="Phone logo" />
          <div>
            <h1>Phone Store</h1>
            <p>Best phones in the world</p>
          </div>
        </div>
        <div className="header__cart">
          <a href="/cart.html" className="button button--cart">
            <span>520 ₴</span>
            <div className="button__delimiter"></div>
            <img src={cartSvg} alt="Cart logo" />
            <span>3</span>
          </a>
        </div>
      </div>
    </div>
  );
}
