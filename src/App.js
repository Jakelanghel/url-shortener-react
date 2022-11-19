import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { GlobalStyles } from "./components/shared/Global";

import Nav from "./components/nav/Nav";
import Home from "./components/pages/home/Home";

import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <GlobalStyles />
      <div className="container-app">
        <Nav />
        <Routes>
          <Route path="\" element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
