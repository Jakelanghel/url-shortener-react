import React from "react";

import About from "./about/About";
import Hero from "./hero/Hero";
import Cta from "../../components/cta/Cta";

const Home = (props) => {
  return (
    <>
      <Hero screenWidth={props.screenWidth} />
      <About />
      <Cta />
    </>
  );
};

export default Home;
