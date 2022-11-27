import React from "react";
import { images } from "../../../constants/images";
import { StyledHero } from "./Hero.Styled";
import { GetStartedBtn } from "../../../components/get-started-btn/GetStartedBtn.Styled";
import { Context } from "../../../Context";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const Hero = (props) => {
  const { navIsOpen } = React.useContext(Context);

  const heroImgVariants =
    props.screenWidth >= 900 || !navIsOpen
      ? {
          hidden: {
            opacity: 1,
          },
          visible: {
            opacity: 1,
          },
        }
      : {
          hidden: {
            opacity: 1,
          },
          visible: {
            zIndex: -1,
            opacity: 0,
            transition: {
              delay: 0.25,
            },
          },
        };

  return (
    <StyledHero>
      <div className="container-hero-copy">
        <h1 className="title-margin">More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <GetStartedBtn className="btn">Get Started</GetStartedBtn>
      </div>

      <AnimatePresence>
        <motion.div
          variants={heroImgVariants}
          initial="hidden"
          animate="visible"
          className="container-hero-img"
        >
          <img src={images.mainImg} alt="" className={"hero-img"} />
        </motion.div>
      </AnimatePresence>
    </StyledHero>
  );
};

export default Hero;
