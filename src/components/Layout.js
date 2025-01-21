import React, { use, useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom
import {
  Menu,
  X,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // To track scroll position
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // To control navbar visibility
  const location = useLocation(); // Get current location to determine the active page

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setIsNavbarVisible(false);
    } else {
      // Scrolling up
      setIsNavbarVisible(true);
    }
    setLastScrollY(window.scrollY); // Update the scroll position
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to determine the class for the navbar based on the current location
  const getNavbarClass = () => {
    return location.pathname === "/"
      ? "text-white" // White text for homepage
      : "text-black"; // Black text for other pages
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav
        className={`fixed w-full bg-transparent backdrop-blur-sm z-50 shadow-md transition-transform duration-300 ${
          isNavbarVisible ? "transform translate-y-0" : "-translate-y-16"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" rel="noopener noreferrer">
                <span
                  className={`text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent`}
                >
                  PH Adventures
                </span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a
                  href="/"
                  className={`hover:text-blue-600 transition-colors ${getNavbarClass()}`}
                >
                  Home
                </a>
                <a
                  href="/destinations"
                  className={`hover:text-blue-600 transition-colors ${getNavbarClass()}`}
                >
                  Destinations
                </a>
                <a
                  href="/pricing"
                  className={`hover:text-blue-600 transition-colors ${getNavbarClass()}`}
                >
                  Pricing
                </a>
                <a
                  href="/about"
                  className={`hover:text-blue-600 transition-colors ${getNavbarClass()}`}
                >
                  About
                </a>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <a href="/adventures">Adventures</a>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className={`hover:text-blue-600 transition-colors`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className={`block px-3 py-2 `}>
                Home
              </a>
              <a href="/destinations" className={`block px-3 py-2 `}>
                Destinations
              </a>
              <a href="/pricing" className={`block px-3 py-2 `}>
                Pricing
              </a>
              <a href="/about" className={`block px-3 py-2 `}>
                About
              </a>
              <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <a href="/adventures">Adventure</a>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                PH Adventures
              </h3>
              <p className="text-gray-400">
                Discover the thrilling adventures waiting for you in the
                Philippines.
              </p>
              <div className="flex space-x-4">
                <Facebook className="text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="text-gray-400 hover:text-white cursor-pointer" />
                <Youtube className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/adventures"
                    className="text-gray-400 hover:text-white"
                  >
                    Adventures
                  </a>
                </li>
                <li>
                  <a
                    href="/destinations"
                    className="text-gray-400 hover:text-white"
                  >
                    Destinations
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="text-gray-400 hover:text-white">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* Adventures */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Adventures</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/adventures"
                    className="text-gray-400 hover:text-white"
                  >
                    Scuba Diving
                  </a>
                </li>
                <li>
                  <a
                    href="/adventures"
                    className="text-gray-400 hover:text-white"
                  >
                    Surfing
                  </a>
                </li>
                <li>
                  <a
                    href="/adventures"
                    className="text-gray-400 hover:text-white"
                  >
                    Canyoneering
                  </a>
                </li>
                <li>
                  <a
                    href="/adventures"
                    className="text-gray-400 hover:text-white"
                  >
                    Island Hopping
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Phone size={16} className="text-gray-400" />
                  <span className="text-gray-400">+63 912 345 6789</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail size={16} className="text-gray-400" />
                  <span className="text-gray-400">info@phadventures.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2014 PH Adventures. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
