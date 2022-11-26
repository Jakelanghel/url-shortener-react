import React from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./components/Global";

import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import Features from "./pages/features/Features";
import Pricing from "./pages/pricing/Pricing";

function App() {
  return (
    <div>
      <GlobalStyles />
      <div className="container-app">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
