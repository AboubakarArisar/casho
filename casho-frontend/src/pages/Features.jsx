import React from "react";

const features = [
  {
    title: "Instant Transfers",
    description:
      "Send and receive money instantly with zero hassle and enterprise-level security.",
    icon: (
      <svg
        className="w-10 h-10 text-green-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2M12 15V3m0 0l-4 4m4-4l4 4"
        />
      </svg>
    ),
  },

  {
    title: "Smart Analytics",
    description:
      "Monitor your spending, savings, and investments with real-time insights.",
    icon: (
      <svg
        className="w-10 h-10 text-green-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 17a2 2 0 104 0v-6a2 2 0 10-4 0v6zm-6 4a2 2 0 104 0v-2a2 2 0 10-4 0v2zm12-4a2 2 0 104 0v-4a2 2 0 10-4 0v4z"
        />
      </svg>
    ),
  },

  {
    title: "24/7 Support",
    description:
      "Get instant help from our expert support team anytime, anywhere.",
    icon: (
      <svg
        className="w-10 h-10 text-green-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.364 5.636A9 9 0 105.636 18.364 9 9 0 0018.364 5.636z"
        />
      </svg>
    ),
  },

  {
    title: "Multi-Platform",
    description:
      "Use your account seamlessly on mobile, tablet, and desktop devices.",
    icon: (
      <svg
        className="w-10 h-10 text-green-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 21h6l-.75-4M4 4h16v2a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
        />
      </svg>
    ),
  },
];

const Features = () => {
  return (
    <section className="bg-gray-900 py-32 px-4 text-white">

      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-14">

        <h1 className="text-4xl md:text-5xl font-extrabold text-green-500 mb-4">
          Powerful Features
        </h1>

        <p className="text-gray-400 text-lg">
          Everything you need to manage, grow, and protect your finances in one
          place.
        </p>

      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {features.map((feature, idx) => (
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

export default Features;