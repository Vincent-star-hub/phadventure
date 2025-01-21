import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
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
    window.scrollTo(0, 0); // Scroll to the top on route change
  }, [navigate]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures scroll to top on route change */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adventures" element={<Adventures />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
