import React from "react";
import { Link } from "react-router-dom";
//Images

import instagram from "../img/instagram 1.svg";
import youtube from "../img/youtube-symbol 1.svg";
import twitter from "../img/twitter 1.svg";
import FooterStyling from "../Styles/FooterStyling";
//styles

const Footer = () => {
  return (
    <FooterStyling>
      <div className="footer-text">
        <h1>Elle Coder &copy; 2020</h1>
      </div>
      <div className="footer-social">
        <a href="https://www.instagram.com/ellecoder/" target="_blank">
          <img src={instagram} alt="instagram-social" />
        </a>
        <a href="#" target="_blank">
          <img src={youtube} alt="youtube-social" />
        </a>
        <a href="#" target="_blank">
          <img src={twitter} alt="twitter-social" />
        </a>
      </div>
    </FooterStyling>
  );
};

export default Footer;
