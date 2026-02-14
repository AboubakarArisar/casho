import React from "react";

const Hero = () => {
  return (
    <section className="hero-gradient relative flex flex-col items-center justify-center px-6 pt-24 pb-32 text-center lg:pt-40 lg:pb-48 overflow-hidden">
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none"></div>
      
      {/* Animated Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-30"></div>

      <div className="relative z-10 mx-auto max-w-4xl">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
          
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>

          Next Gen Community Savings
        </div>

        {/* Main Title */}
        <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-7xl lg:text-8xl">
          Save Together,
          <br />
          <span className="text-primary inline-block">Grow Together</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-10 max-w-2xl text-lg text-slate-400 sm:text-xl leading-relaxed">
          The digital community savings platform for modern financial freedom.
          Join thousands of circles and reach your goals faster with trusted members.
        </p>

        {/* Buttons */}
        <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">

          <button className="flex h-14 min-w-[220px] items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-background-dark hover:scale-105 transition-all shadow-2xl shadow-primary/30 active:scale-95">
            Start Committee
          </button>

          <button className="flex h-14 min-w-[220px] items-center justify-center rounded-xl border border-border-dark bg-surface-dark px-8 text-base font-bold text-white hover:bg-surface-dark/80 transition-all hover:border-primary/30 active:scale-95">
            View Demo
          </button>

        </div>

      </div>
    </section>
  );
};

export default Hero;
