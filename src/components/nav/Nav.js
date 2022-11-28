import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { StyledNav } from "./Nav.Styled";
import { images } from "../../constants/images";
import { Context } from "../../Context";
import { AnimatePresence } from "framer-motion";
import ContainerMenu from "../nav/container-menu/ContainerMenu";
import MotionMenu from "./container-menu/MotionMenu";

const Nav = (props) => {
  const { navIsOpen, toggleNav } = React.useContext(Context);

  return (
    <StyledNav className="nav container-max-width">
      <div className="container-logo">
        <NavLink to="/">
          <img src={images.logo} alt="shortly" className="logo" />
        </NavLink>
      </div>

      <AnimatePresence>
        {navIsOpen || props.screenWidth >= 900 ? (
          <MotionMenu>
            <ContainerMenu />
          </MotionMenu>
        ) : null}
      </AnimatePresence>

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
