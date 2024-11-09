import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="bg-emerald-300/35 shadow-lg mx-auto max-w-screen-xl pt-4 pb-4 rounded-lg ">
      <div className="container mx-auto flex justify-between items-center px-4 ">
        {/* Logo */}
        <div className="text-emerald-600 font-extrabold text-2xl">
          <Link to="/" className="flex items-center">
            HealthMap <span className="text-gray-800 ml-1 font-extrabold">+</span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center max-w-md bg-gray-100 rounded-full shadow-md overflow-hidden">
          <input
            className="w-full p-2.5 pl-4 text-sm text-gray-700 rounded-l-full focus:outline-none"
            type="search"
            placeholder="Search here..."
          />
          <button className="p-2.5 bg-emerald-600 text-white rounded-r-full hover:bg-emerald-700 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.42-1.42l4.38 4.39a1 1 0 01-1.42 1.41l-4.38-4.38zM8 14A6 6 0 108 2a6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex space-x-8 text-gray-800 font-semibold uppercase items-center">
          <Link to="/" className="hover:text-emerald-600 transition duration-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-emerald-600 transition duration-300">
            About
          </Link>
          <Link to="/services" className="hover:text-emerald-600 transition duration-300">
            Services
          </Link>
          <Link to="/contact" className="hover:text-emerald-600 transition duration-300">
            Contact
          </Link>

          {/* Sign In / Profile Icon */}
          {isLoggedIn ? (
            <Link to="/profile" className="text-emerald-600 hover:text-emerald-700 transition duration-300 flex items-center">
              <FaUserCircle className="w-6 h-6 mr-1" />
              Profile
            </Link>
          ) : (
            <button
              onClick={handleLoginToggle} 
              className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition"
            >
              Sign In
            </button>
          )}
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 rounded-lg mt-2">
          <Link
            to="/"
            className="block py-2 px-4 text-gray-800 hover:bg-emerald-100 hover:text-emerald-700 uppercase font-semibold transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 px-4 text-gray-800 hover:bg-emerald-100 hover:text-emerald-700 uppercase font-semibold transition"
          >
            About
          </Link>
          <Link
            to="/services"
            className="block py-2 px-4 text-gray-800 hover:bg-emerald-100 hover:text-emerald-700 uppercase font-semibold transition"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block py-2 px-4 text-gray-800 hover:bg-emerald-100 hover:text-emerald-700 uppercase font-semibold transition"
          >
            Contact
          </Link>
          {isLoggedIn ? (
            <Link
              to="/profile"
              className="block py-2 px-4 text-gray-800 hover:bg-emerald-100 hover:text-emerald-700 uppercase font-semibold transition"
            >
              Profile
            </Link>
          ) : (
            <button
              onClick={handleLoginToggle}
              className="block w-full text-left py-2 px-4 text-gray-800 hover:bg-emerald-100 hover:text-emerald-700 uppercase font-semibold transition"
            >
              Sign In
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
