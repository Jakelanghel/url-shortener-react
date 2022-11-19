import React from "react";
import { StyledPageContainer } from "../../shared/page-container/PageContainer.Styled";

import About from "./about/About";
import Hero from "./hero/Hero";
import Cta from "../../shared/cta/Cta";

const Home = () => {
  return (
    <StyledPageContainer>
      <Hero />
      <About />
      <Cta />
    </StyledPageContainer>
  );
};

export default Home;
