import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center py-6">
      {/* Main Container */}
      <div className="w-[95%] max-w-7xl flex items-center justify-between bg-[#0B1220]/90 backdrop-blur-md px-8 py-4 rounded-full shadow-lg text-white">

        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold">
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-emerald-500">
            💬
          </div>
          <span>Casho</span>
        </div>

        {/* Menu Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <li className="hover:text-white cursor-pointer transition">
            Features
          </li>
          <li className="hover:text-white cursor-pointer transition">
            Security
          </li>
          <li className="hover:text-white cursor-pointer transition">
            About
          </li>
          <li className="hover:text-white cursor-pointer transition">
            Pricing
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-gray-300 hover:text-white transition">
            Login
          </button>

          <button className="px-5 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
