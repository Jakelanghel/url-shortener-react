import React from "react";
import { StyledCta } from "./Cta.Styled";
import { GetStartedBtn } from "../../components/get-started-btn/GetStartedBtn.Styled";

const Cta = () => {
  return (
    <StyledCta>
      <p>Boost your links today</p>
      <GetStartedBtn className="btn">Get Started </GetStartedBtn>
    </StyledCta>
  );
};

export default Cta;
