import React from "react";

const Header = () => {
  return (
    <header className="relative flex items-center justify-center text-center min-h-[85vh] px-6 bg-[#0B1220] text-white overflow-hidden">

      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_60%)]"></div>

      {/* Content */}
      <div className="relative max-w-4xl">

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Save Together, <span className="text-emerald-400">Grow Together</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          The traditional committee system reimagined for the digital age.
          Secure, transparent, and entirely digital community savings at your
          fingertips.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <button className="px-8 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold transition shadow-lg hover:shadow-emerald-500/20">
            Start Your Committee
          </button>

          <button className="px-8 py-3 rounded-full border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black transition">
            Learn More
          </button>

        </div>

      </div>
    </header>
  );
};

export default Header;
