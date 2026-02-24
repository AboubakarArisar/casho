import React from "react";

const securityFeatures = [
  {
    title: "End-to-End Encryption",
    description: "All your data and transactions are protected with industry-leading encryption.",
    icon: (
      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3V7a3 3 0 10-6 0v1c0 1.657 1.343 3 3 3zm6 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6a2 2 0 012-2h8a2 2 0 012 2z" /></svg>
    ),
  },
  {
    title: "Multi-Factor Authentication",
    description: "Add an extra layer of security to your account with MFA options.",
    icon: (
      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 01-8 0V8a4 4 0 018 0v4zm6 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 012-2h16a2 2 0 012 2z" /></svg>
    ),
  },
  {
    title: "Fraud Monitoring",
    description: "We monitor your account 24/7 to detect and prevent suspicious activity.",
    icon: (
      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0V4m0 16v-4" /></svg>
    ),
  },
  {
    title: "Data Privacy",
    description: "Your personal information is never shared without your consent and is always protected.",
    icon: (
      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4V7a4 4 0 10-8 0v1c0 2.21 1.79 4 4 4zm0 0v8" /></svg>
    ),
  },
];


const Security = () => {
  return (
    <section className="bg-gray-900 py-32 px-4 text-white min-h-screen">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-500 mb-4">
          Security at Casho
        </h1>
        <p className="text-gray-400 text-lg">
          Your safety is our top priority. Explore the robust security features that protect your data and transactions.
        </p>
      </div>
      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {securityFeatures.map((feature, idx) => (
          <div
            key={idx}
            className="bg-gray-800 border border-gray-700 rounded-2xl p-7 text-center
                       hover:border-green-500 hover:shadow-green-500/20 hover:shadow-xl
                       transform hover:-translate-y-2 transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex justify-center mb-5">
              {feature.icon}
            </div>
            {/* Title */}
            <h2 className="text-xl font-bold mb-3 text-white">
              {feature.title}
            </h2>
            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Security;
