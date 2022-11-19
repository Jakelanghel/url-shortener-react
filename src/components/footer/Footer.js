import React from "react";
import { StyledFooter } from "../footer/Footer.Styled";
import { images } from "../../constants/images";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container-footer-logo">
        <img src={images.logo} alt="shortly" />
      </div>

      <div className="container-footer-links">
        <ul>
          <li className="title">features</li>
          <li>
            <a href="#">Link Shortening</a>
          </li>
          <li>
            <a href="#">Branded Links</a>
          </li>
          <li>
            <a href="#">Analytics</a>
          </li>
        </ul>

        <ul>
          <li className="title">Resources</li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Developers</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>

        <ul>
          <li className="title">Company</li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Our Team</a>
          </li>
          <li>
            <a href="#">Careers </a>
          </li>
          <li>
            <a href="#">Contact </a>
          </li>
        </ul>
      </div>

      <div className="container-social-links">
        <a href="#">
          <img src={images.facebookIcon} alt="" />
        </a>
        <a href="#">
          <img src={images.twitterIcon} alt="" />
        </a>
        <a href="#">
          <img src={images.pinterestIcon} alt="" />
        </a>
        <a href="#">
          <img src={images.instagramIcon} alt="" />
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
