import React from "react";
import { Link } from "react-router-dom";

import cartEmptyImg from "../assets/img/empty-cart.png";

const CartEmpty = () => (
      <div className="cart cart--empty">
        <h2>
          Cart is empty 😕
        </h2>
        <p>
          Most likely, you haven't ordered a phone yet.
          <br />
          To order a phone, go to the main page.
        </p>
        <img src={cartEmptyImg} alt="Empty cart" />
        <Link to="/" className="button button--sky">
          <span>Come back</span>
        </Link>
      </div>
  );

export default CartEmpty;
