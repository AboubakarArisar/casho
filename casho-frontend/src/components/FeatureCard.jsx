import React from "react";

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-[#0F172A] border border-gray-800 text-white p-6 rounded-2xl transition hover:border-emerald-500/50 hover:shadow-lg">

      <h3 className="text-lg md:text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed text-sm md:text-base">
        {description}
      </p>

    </div>
  );
};

export default FeatureCard;
