import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import userIcon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" className="img"></img>
          <p>
            I'm a fullstack developer from Sri Lanka, B. Sc. Engineering,
            University of Jaffna
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={userIcon} alt="" />
            <input type="email" placeholder="Enter your Email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="foote-bottom">
        <div className="footer-bottom-left">
          <p>© 2023 Manuranga Jay. All rights reserved.</p>
        </div>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
