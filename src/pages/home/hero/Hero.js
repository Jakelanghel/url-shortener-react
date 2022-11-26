import React from "react";
import { images } from "../../../constants/images";
import { StyledHero } from "./Hero.Styled";
import { GetStartedBtn } from "../../../components/get-started-btn/GetStartedBtn.Styled";

const Hero = () => {
  return (
    <StyledHero className="side-padding">
      <div className="container-hero-copy">
        <h1 className="title-margin">More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <GetStartedBtn className="btn">Get Started</GetStartedBtn>
      </div>

      <div className="container-hero-img">
        <img src={images.mainImg} alt="" className="hero-img" />
      </div>
    </StyledHero>
  );
};

export default Hero;
