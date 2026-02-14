import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl 
            bg-gradient-to-br from-indigo-500 to-purple-600
            text-white shadow-xl transition-transform group-hover:scale-105">

          </div>

          <h2 className="text-2xl font-extrabold tracking-tight text-white">
            Bachat
          </h2>

        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">

          {["Features", "How it Works", "About"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm font-medium text-slate-300
              hover:text-indigo-400 transition-colors relative group"
            >
              {link}

              {/* Underline animation */}
              <span
                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-500
                transition-all duration-300 group-hover:w-full"
              ></span>
            </a>
          ))}

        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-6">

          {/* Login */}
          <button
            className="hidden sm:block text-sm font-semibold text-slate-300
            hover:text-indigo-400 transition"
          >
            Login
          </button>

          {/* Get Started */}
          <button
            className="flex h-11 items-center justify-center rounded-xl
            bg-gradient-to-r from-indigo-500 to-purple-600
            px-6 text-sm font-bold text-white
            hover:opacity-90 transition-all
            shadow-xl shadow-indigo-500/25
            active:scale-95"
          >
            Get Started
          </button>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
