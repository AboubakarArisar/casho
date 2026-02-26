import { Link } from "react-router-dom";
import { Wallet, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur border-b border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-green-500 text-white p-2 rounded-lg">
              <Wallet className="w-6 h-6" />
            </div>
            <Link to="/" className="text-2xl font-bold text-white tracking-tight">
              Casho
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/features" className="text-gray-300 text-sm font-medium hover:text-green-500 transition">
              Features
            </Link>
            <Link to="/security" className="text-gray-300 text-sm font-medium hover:text-green-500 transition">
              Security
            </Link>
            <Link to="/how-it-works" className="text-gray-300 text-sm font-medium hover:text-green-500 transition">
              How it Works
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            {/* Login */}
            <Link
              to="/login"
              className="hidden sm:block text-gray-300 text-sm font-semibold hover:text-green-500 transition"
            >
              Login
            </Link>

            {/* Get Started */}
            <Link
              to="/login"
              className="px-6 py-2.5 bg-green-500 text-white rounded-xl text-sm font-bold hover:bg-green-600 transition shadow-md shadow-green-500/30"
            >
              Get Started
            </Link>

            {/* Mobile Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-200">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-4 space-y-4 shadow-lg">
          <Link to="/features" className="block text-gray-300 text-sm font-medium hover:text-green-500 transition">
            Features
          </Link>
          <Link to="/security" className="block text-gray-300 text-sm font-medium hover:text-green-500 transition">
            Security
          </Link>
          <Link to="/how-it-works" className="block text-gray-300 text-sm font-medium hover:text-green-500 transition">
            How it Works
          </Link>
          <Link to="/login" className="block w-full text-left text-gray-300 text-sm font-semibold hover:text-green-500 transition">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;