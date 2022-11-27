import React from "react";
import { motion } from "framer-motion";

const MotionMenu = ({ children }) => {
  const navVariants = {
    hidden: {
      x: "100vw",
      transition: {
        type: "spring",
        damping: 20,
        ease: "easeInOut",
      },
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        ease: "easeInOut",
      },
    },
    exit: {
      x: "100vw",
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
      className="motion-menu"
    >
      {children}
    </motion.div>
  );
};

export default MotionMenu;
