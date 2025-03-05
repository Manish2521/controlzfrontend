import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Dumbbell className="h-8 w-8 text-red-500" />
              <span className="ml-2 text-xl font-bold">FitZone</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 hover:text-red-500 transition-colors">Home</Link>
            <Link to="/about" className="px-3 py-2 hover:text-red-500 transition-colors">About</Link>
            <Link to="/classes" className="px-3 py-2 hover:text-red-500 transition-colors">Classes</Link>
            <Link to="/trainers" className="px-3 py-2 hover:text-red-500 transition-colors">Trainers</Link>
            <Link to="/membership" className="px-3 py-2 hover:text-red-500 transition-colors">Membership</Link>
            <Link to="/contact" className="px-3 py-2 hover:text-red-500 transition-colors">Contact</Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
            <Link to="/" className="block px-3 py-2 hover:text-red-500 transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="block px-3 py-2 hover:text-red-500 transition-colors" onClick={toggleMenu}>About</Link>
            <Link to="/classes" className="block px-3 py-2 hover:text-red-500 transition-colors" onClick={toggleMenu}>Classes</Link>
            <Link to="/trainers" className="block px-3 py-2 hover:text-red-500 transition-colors" onClick={toggleMenu}>Trainers</Link>
            <Link to="/membership" className="block px-3 py-2 hover:text-red-500 transition-colors" onClick={toggleMenu}>Membership</Link>
            <Link to="/contact" className="block px-3 py-2 hover:text-red-500 transition-colors" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;