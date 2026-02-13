import React from "react";
import FeatureCard from "./FeatureCard";

const InfoSection = () => {
  const features = [
    {
      title: "Bank-Grade Security",
      description:
        "Your funds are secure with AES-256 encryption, plus global financial institution backing.",
    },
    {
      title: "Private Communities",
      description:
        "Invite family, friends, or trusted colleagues to create private savings communities.",
    },
    {
      title: "Real-time Tracking",
      description:
        "Monitor contributions, spending, and group savings in an interactive dashboard.",
    },
    {
      title: "Smart Payout Algorithms",
      description:
        "Automated & instant payouts for every member, hassle-free.",
    },
  ];

  return (
    <section className="bg-[#0B1220] px-6 md:px-10 py-20">

      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bank-Grade Savings for Everyone
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Secure, transparent, and reliable community savings built for
            modern users.
          </p>

        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default InfoSection;
