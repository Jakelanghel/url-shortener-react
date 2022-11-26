import React from "react";
import { StyledContainerMenu } from "./ContainerMenu.Styled";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const ContainerMenu = () => {
  const navVariants = {
    hidden: {
      x: "-100vw",
      transition: {
        type: "spring",
        damping: 20,
        ease: "easeInOut",
      },
    },
    visible: {
      position: "absolute",
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        ease: "easeInOut",
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        type: "spring",
        damping: 10,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
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
          <a className="nav-item " href="#">
            login
          </a>
          <button className="nav-item nav-btn">sign up</button>
        </div>
      </StyledContainerMenu>
    </motion.div>
  );
};

export default ContainerMenu;
