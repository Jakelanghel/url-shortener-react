import React from "react";
import { images } from "../../../../constants/images";
import { StyledHero } from "./Hero.Styled";

const Hero = () => {
  return (
    <StyledHero>
      <div className="container-hero-copy">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button>Get Started</button>
      </div>

      <div className="container-hero-img">
        <img src={images.mainImg} alt="" />
      </div>
    </StyledHero>
  );
};

export default Hero;
