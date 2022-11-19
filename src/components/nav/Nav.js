import React from "react";
import { StyledNav } from "./Nav.Styled";
import { images } from "../../constants/images";

const Nav = () => {
  return (
    <StyledNav>
      <div className="nav-left">
        <img src={images.logo} alt="shortly" />
        <a href="#">features</a>
        <a href="#">pricing</a>
        <a href="#">resources</a>
      </div>
      <div className="nav-right">
        <a href="#">login</a>
        <button>sign up</button>
      </div>
    </StyledNav>
  );
};

export default Nav;
