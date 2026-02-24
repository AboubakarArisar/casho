import React from "react";

const steps = [
  {
    title: "Sign Up",
    description: "Create your free Casho account in seconds with just your email and password.",
    icon: (
      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8zm6 8a2 2 0 002-2v-5a2 2 0 00-2-2H6a2 2 0 00-2 2v5a2 2 0 002 2h12z" /></svg>
    ),
  },
  {
    title: "Add Funds",
    description: "Securely link your bank or card and add money to your Casho wallet instantly.",
    icon: (
      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m4-4H8m8 8a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h12z" /></svg>
    ),
  },
  {
    title: "Send & Receive",
    description: "Transfer money to friends, family, or businesses instantly and securely.",
    icon: (
      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2m10 4v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6m16 0H2" /></svg>
    ),
  },
  {
    title: "Track & Grow",
    description: "Monitor your balance, spending, and savings with real-time analytics.",
    icon: (
      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 17a4 4 0 008 0m0 0V5m0 12a4 4 0 008 0" /></svg>
    ),
  },
];

const Works = () => {
  return (
    <section className="bg-gray-900 py-40 px-4 text-white min-h-screen">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-500 mb-4">
          How Casho Works
        </h1>
        <p className="text-gray-400 text-lg">
          Get started in just a few easy steps and experience seamless, secure money management.
        </p>
      </div>
      {/* Steps */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-gray-800 border border-gray-700 rounded-2xl p-7 text-center
                       hover:border-green-500 hover:shadow-green-500/20 hover:shadow-xl
                       transform hover:-translate-y-2 transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex justify-center mb-5">
              {step.icon}
            </div>
            {/* Title */}
            <h2 className="text-xl font-bold mb-3 text-white">
              {step.title}
            </h2>
            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
