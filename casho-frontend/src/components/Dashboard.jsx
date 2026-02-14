import React from "react";

const DashboardPreview = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-40">
      <div className="relative overflow-hidden rounded-[2rem] bg-surface-dark border border-border-dark p-2 group shadow-2xl shadow-primary/5">
        
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

        {/* Mock Image Display */}
        <div className="aspect-[16/9] w-full bg-[#0a110e] rounded-[1.5rem] overflow-hidden relative">
          <img
            alt="Financial dashboard showing growth analytics"
            className="w-full h-full object-cover opacity-80 mix-blend-screen transition-transform duration-700 group-hover:scale-105"
            src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=2000"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>

          {/* Dashboard HUD Overlay (Decorative) */}
          <div className="absolute top-8 left-8 flex gap-4">
            <div className="h-3 w-3 rounded-full bg-primary/50"></div>
            <div className="h-3 w-3 rounded-full bg-primary/30"></div>
            <div className="h-3 w-3 rounded-full bg-primary/10"></div>
          </div>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute bottom-10 right-10 p-6 glass rounded-2xl border-primary/20 hidden md:block animate-bounce-slow">
          <div className="flex items-center gap-4">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-background-dark">
              <span className="material-symbols-outlined font-bold">
                trending_up
              </span>
            </div>

            <div>
              <p className="text-[10px] uppercase font-bold text-primary tracking-widest">
                Global Rank
              </p>
              <p className="text-xl font-black text-white">
                #1 Savings App
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default DashboardPreview;
