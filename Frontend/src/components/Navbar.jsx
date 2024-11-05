import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu on mobile view
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-black font-bold text-xl">
          <Link to="/">HealthMap</Link>
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
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <Link to="/" className="block py-2 px-4 text-black hover:bg-blue-700">
            Home
          </Link>
          <Link to="/about" className="block py-2 px-4 text-black hover:bg-blue-700">
            About
          </Link>
          <Link to="/services" className="block py-2 px-4 text-black hover:bg-blue-700">
            Services
          </Link>
          <Link to="/contact" className="block py-2 px-4 text-black hover:bg-blue-700">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
