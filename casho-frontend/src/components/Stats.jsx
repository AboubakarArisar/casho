import React from "react";

const Stats = () => {
  const statItems = [
    { label: "Active Users", value: "50,000+" },
    { label: "Interest Rate", value: "0%" },
    { label: "Regulated Platform", value: "SEC" },
  ];

  return (
    <section className="border-y border-border-dark bg-surface-dark/30 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          {statItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center sm:items-start sm:text-left ${
                index !== 0
                  ? "sm:border-l sm:border-border-dark sm:pl-16"
                  : ""
              }`}
            >
              <span className="text-5xl font-black text-white tracking-tight">
                {item.value}
              </span>

              <span className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-primary/60">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;
