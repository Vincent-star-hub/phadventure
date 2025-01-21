import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Adventures from "./pages/Adventures";
import Destinations from "./pages/Destinations";
import Pricing from "./pages/Pricing";
import About from "./pages/About";

// ScrollToTop Component to scroll the page to the top on route change
const ScrollToTop = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter basename="/phadventure">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="adventures" element={<Adventures />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
