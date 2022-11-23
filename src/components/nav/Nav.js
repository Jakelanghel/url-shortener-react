import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNav } from "./Nav.Styled";
import { images } from "../../constants/images";

const Nav = () => {
  return (
    <StyledNav className="side-padding">
      <div className="container-logo">
        <NavLink to="/">
          <img src={images.logo} alt="shortly" className="logo" />
        </NavLink>
      </div>

      <div className="container-menu">
        <div className="nav-left">
          <NavLink to="/features" className="nav-link">
            features
          </NavLink>
          <NavLink to="/pricing" className="nav-link">
            pricing
          </NavLink>
          <NavLink to="/resources" className="nav-link">
            resources
          </NavLink>
        </div>
        <div className="nav-right">
          <a href="#">login</a>
          <button>sign up</button>
        </div>
      </div>

      <div className="container-menu-icon">
        <img src={images.menuIcon} alt="shortly" className="menu-icon" />
      </div>
    </StyledNav>
  );
};

export default Nav;
