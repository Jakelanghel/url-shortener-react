import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNav } from "./Nav.Styled";
import { images } from "../../constants/images";
import { Context } from "../../Context";
import { AnimatePresence } from "framer-motion";
import ContainerMenu from "../nav/container-menu/ContainerMenu";

const Nav = () => {
  const { navIsOpen, toggleNav } = React.useContext(Context);
  console.log(navIsOpen);
  return (
    <StyledNav className="side-padding">
      <div className="container-logo">
        <NavLink to="/">
          <img src={images.logo} alt="shortly" className="logo" />
        </NavLink>
      </div>

      <AnimatePresence>{navIsOpen && <ContainerMenu />}</AnimatePresence>

      <div className="container-menu-icon">
        <img
          src={images.menuIcon}
          alt="shortly"
          className="menu-icon"
          onClick={toggleNav}
        />
      </div>
    </StyledNav>
  );
};

export default Nav;
