import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu on mobile view
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mx-auto max-w-screen-xl pt-6 ">
      <div className="">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <div className="text-black font-bold text-xl">
            <Link to="/">HealthMap <span className="text-white">+</span> </Link>
          </div>

          <div className="flex items-center max-w-md mx-auto bg-white rounded-full shadow-md overflow-hidden">
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
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-black hover:text-gray-300">
              Home
            </Link>
            <Link to="/about" className="text-black hover:text-gray-300">
              About
            </Link>
            <Link to="/services" className="text-black hover:text-gray-300">
              Services
            </Link>
            <Link to="/contact" className="text-black hover:text-gray-300">
              Contact
            </Link>
          </div>

          {/* Hamburger Icon for mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
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
          <div className="md:hidden">
            <Link
              to="/"
              className="block py-2 px-4 text-black hover:bg-blue-700"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 px-4 text-black hover:bg-blue-700"
            >
              About
            </Link>
            <Link
              to="/services"
              className="block py-2 px-4 text-black hover:bg-blue-700 text-2xl font-serif uppercase"
            >
              Services
            </Link>
            <Link 
              to="/contact"
              className="block py-2 px-4 text-black hover:bg-blue-700 font-serif"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
