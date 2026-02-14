import React from "react";

/* Feature Card */
const FeatureCard = ({ icon, title, description }) => (
  <div
    className="
      relative flex flex-col gap-6 rounded-2xl p-8
      bg-slate-900/70 backdrop-blur-xl
      border border-white/5
      shadow-xl shadow-black/20

      transition-all duration-300
      hover:-translate-y-2
      hover:shadow-indigo-500/20
      hover:border-indigo-500/40

      group
    "
  >
    {/* Glow Effect */}
    <div
      className="
        absolute inset-0 rounded-2xl
        bg-gradient-to-br from-indigo-500/10 to-purple-500/10
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        pointer-events-none
      "
    />

    {/* Icon */}
    <div
      className="
        relative z-10 flex h-12 w-12 items-center justify-center rounded-xl
        bg-indigo-500/10 text-indigo-400

        group-hover:bg-gradient-to-br
        group-hover:from-indigo-500
        group-hover:to-purple-600
        group-hover:text-white

        transition-all duration-300
        shadow-lg
      "
    >
      <span className="material-symbols-outlined text-2xl transition-transform group-hover:scale-110">
        {icon}
      </span>
    </div>

    {/* Content */}
    <div className="relative z-10">
      <h3
        className="
          text-xl font-bold text-white mb-3
          group-hover:text-indigo-400
          transition-colors
        "
      >
        {title}
      </h3>

      <p
        className="
          text-sm leading-relaxed text-slate-400
          group-hover:text-slate-300
          transition-colors
        "
      >
        {description}
      </p>
    </div>
  </div>
);

/* Features Section */
const Features = () => {
  const features = [
    {
      icon: "shield_lock",
      title: "Bank-Grade Security",
      description:
        "Your funds are protected with industry-leading AES-256 encryption and multi-factor authentication.",
    },
    {
      icon: "group",
      title: "Private Communities",
      description:
        "Create exclusive savings circles with friends, family, or vetted colleagues you trust implicitly.",
    },
    {
      icon: "query_stats",
      title: "Real-Time Tracking",
      description:
        "Monitor your committee's progress and your personal financial growth with detailed analytics.",
    },
    {
      icon: "auto_awesome",
      title: "Smart Payouts",
      description:
        "Our automated system ensures fair, timely, and transparent payouts for every member on schedule.",
    },
  ];

  return (
    <section
      id="features"
      className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-40"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute -top-40 -left-40 h-96 w-96
            bg-indigo-500/20 rounded-full blur-3xl
          "
        />
        <div
          className="
            absolute top-40 -right-40 h-96 w-96
            bg-purple-500/20 rounded-full blur-3xl
          "
        />
      </div>

      {/* Heading */}
      <div className="mb-20 max-w-3xl">

        <span className="inline-block mb-4 text-sm font-semibold tracking-wide text-indigo-400 uppercase">
          Features
        </span>

        <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
          Everything you need to save smarter
        </h2>

        <p className="mt-6 text-slate-400 text-lg leading-relaxed">
          Secure, transparent, and social. Experience the future of rotating
          savings with bank-grade security and intelligent automation.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </div>
    </section>
  );
};

export default Features;
