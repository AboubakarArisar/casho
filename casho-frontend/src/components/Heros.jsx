import { LineChart, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gray-950 pt-32 pb-24 px-4">

      <div className="max-w-7xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 mb-6
                        rounded-full bg-green-500/10 border border-green-500/20">

          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>

          <span className="text-xs font-semibold text-green-400 uppercase">
            Trusted by 50k+ Users
          </span>
        </div>


        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">

          Save Together,
          <span className="text-green-400"> Grow Together</span>

        </h1>


        {/* Description */}
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">

          Digital community savings platform with full transparency,
          zero interest, and strong security.

        </p>


        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          {/* Primary Button */}
          <button
            className="px-8 py-4 bg-green-500 text-gray-900 rounded-xl
                       font-semibold text-lg flex items-center justify-center gap-2
                       hover:bg-green-400 transition shadow-lg"
          >
            Start Committee
            <ChevronRight className="w-5 h-5" />
          </button>


          {/* Secondary Button */}
          <button
            className="px-8 py-4 bg-gray-800 text-white rounded-xl
                       font-semibold text-lg border border-gray-700
                       hover:bg-gray-700 transition"
          >
            View Demo
          </button>

        </div>


        {/* Demo Card */}
        <div className="mt-16 max-w-5xl mx-auto">

          <div className="bg-gray-900 border border-gray-800
                          rounded-2xl shadow-2xl overflow-hidden">


            {/* Header */}
            <div className="flex gap-2 px-4 py-3 border-b border-gray-800 bg-gray-800/50">

              <span className="w-3 h-3 bg-red-500/40 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500/40 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500/40 rounded-full"></span>

            </div>


            {/* Content */}
            <div className="p-8 flex justify-center">

              <div className="max-w-md w-full space-y-4">

                <div className="h-8 bg-gray-800 rounded-lg w-3/4"></div>


                <div className="h-32 bg-green-500/10 border border-green-500/20
                                rounded-xl flex flex-col items-center justify-center gap-2">

                  <LineChart className="text-green-400 w-10 h-10" />

                  <span className="text-green-400/70 text-xs font-mono">
                    LIVE ANALYTICS
                  </span>

                </div>


                <div className="grid grid-cols-3 gap-4">

                  <div className="h-20 bg-gray-800 rounded-lg"></div>
                  <div className="h-20 bg-gray-800 rounded-lg"></div>
                  <div className="h-20 bg-gray-800 rounded-lg"></div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;