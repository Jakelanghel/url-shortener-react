import React from "react";

import About from "./about/About";
import Hero from "./hero/Hero";
import Cta from "../../components/cta/Cta";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Cta />
    </>
  );
};

export default Home;
