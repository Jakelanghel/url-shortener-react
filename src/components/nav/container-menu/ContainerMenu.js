import React from "react";
import { StyledContainerMenu } from "./ContainerMenu.Styled";
import { NavLink } from "react-router-dom";

const ContainerMenu = () => {
  return (
    <StyledContainerMenu>
      <div className="nav-left">
        <NavLink to="/features" className="nav-link nav-item">
          features
        </NavLink>
        <NavLink to="/pricing" className="nav-link nav-item">
          pricing
        </NavLink>
        <NavLink to="/resources" className="nav-link nav-item">
          resources
        </NavLink>
      </div>
      <div className="nav-right">
        <a className="nav-item login-btn" href="#">
          login
        </a>

        <button className="nav-item nav-btn">sign up</button>
      </div>
    </StyledContainerMenu>
  );
};

export default ContainerMenu;
