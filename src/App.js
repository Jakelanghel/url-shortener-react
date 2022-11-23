import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { GlobalStyles } from "./components/shared/Global";

import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

import Home from "./components/pages/home/Home";
import Features from "./components/pages/features/Features";
import Pricing from "./components/pages/pricing/Pricing";

function App() {
  return (
    <div>
      <GlobalStyles />
      <div className="container-app">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/features" element={<Features />} />
        </Routes>

        <Routes>
          <Route path="/pricing" element={<Pricing />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
