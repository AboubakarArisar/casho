const Stats = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="text-center md:text-left">
            <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mb-1">
              Active Users
            </p>
            <p className="text-4xl font-black text-white">50,000+</p>
          </div>

          <div className="text-center md:text-left border-y md:border-y-0 md:border-x border-white/10 py-8 md:py-0 md:px-12">
            <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mb-1">
              Interest Rate
            </p>
            <p className="text-4xl font-black text-primary">0%</p>
          </div>

          <div className="text-center md:text-left md:pl-12">
            <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mb-1">
              Regulation
            </p>
            <p className="text-4xl font-black text-white">SEC Regulated</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;