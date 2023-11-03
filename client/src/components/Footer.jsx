import React from "react";

import {
  facebook,
  instagram,
  twitter,
  pinterest,
  address,
  phone,
  mailOutline,
  masterCard,
  payPal,
  visa,
} from "../assets/img/footer";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="left">
          <h2>Community</h2>
          <div className="description__social">
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fugiat asperiores delectus, 
              ullam beatae quos inventore maxime quia eius distinctio minima quae nostrum, suscipit fuga quo!
            </div>

            <div className="social-container">
              <div className="social-icon">
                <img src={facebook} alt="Fasebook" />
              </div>
              <div className="social-icon">
                <img src={instagram} alt="Instagram" />
              </div>
              <div className="social-icon">
                <img src={twitter} alt="Twitter" />
              </div>
              <div className="social-icon">
                <img src={pinterest} alt="Pinterest" />
              </div>
            </div>
          </div>
        </div>

        <div className="center">
          <h2>Useful Links</h2>
          <div className="list">
            <div className="block">
              <div className="list-item">Home</div>
              <div className="list-item">Cart</div>
            </div>

            <div className="block">
              <div className="list-item">Accessories</div>
              <div className="list-item">My Account</div>
            </div>

            <div className="block">
              <div className="list-item">Order Tracking</div>
              <div className="list-item">Wishlist</div>
            </div>

            {/* <div className="block">
              <div className="list-item">Fashion</div>
              <div className="list-item">Terms</div>
            </div> */}
          </div>
        </div>

        <div className="right">
          <h2>Contact</h2>
          <div className="contact__payment">
            <div className="contact">
              <div className="contact-item">
                <img src={address} alt="Address" />
                <span>622 Dixie Path, <span className="address_sity">South Tobinchester 98336</span></span>
              </div>
              <div className="contact-item">
                <img src={phone} alt="Phone" />
                <span>+1 234 56 78</span>
              </div>
              <div className="contact-item">
                <img src={mailOutline} alt="Mail Outline" />
                <span>contact@star.dev</span>
              </div>
            </div>

            <div className="payment">
              <div className="payment-item">
                <img src={masterCard} alt="Master Card" />
              </div>

              <div className="payment-item">
                <img src={payPal} alt="Pay Pal" />
              </div>

              <div className="payment-item">
                <img src={visa} alt="Visa" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
