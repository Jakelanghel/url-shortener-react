import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./components/Global";

import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import Features from "./pages/features/Features";
import Pricing from "./pages/pricing/Pricing";

function App() {
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.screen.width;
      console.log(width);
      setScreenWidth(width);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, []);
  return (
    <>
      <GlobalStyles />

      <Nav screenWidth={screenWidth} />

      <Routes>
        <Route path="/" element={<Home screenWidth={screenWidth} />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
