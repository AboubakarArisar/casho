import { ShieldCheck, Users, LineChart, Sparkles } from "lucide-react";

const FeatureCard = () => {

  const features = [
    {
      icon: ShieldCheck,
      title: "Bank-Grade Security",
      description:
        "Your savings are protected with strong encryption and multi-factor authentication."
    },
    {
      icon: Users,
      title: "Private Communities",
      description:
        "Create invite-only savings groups for family and friends."
    },
    {
      icon: LineChart,
      title: "Real-Time Tracking",
      description:
        "Track your contributions and payouts in real-time."
    },
    {
      icon: Sparkles,
      title: "Smart Algorithm",
      description:
        "Automated system ensures fair and transparent payouts."
    }
  ];

  return (
    <section
      id="features"
      className="py-24 bg-gray-950 px-4"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to manage your savings safely and easily.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl p-8
                           hover:border-green-500/50 hover:-translate-y-1
                           transition-all duration-300"
              >

                {/* Icon */}
                <div className="w-12 h-12 bg-green-500/10 rounded-lg
                                flex items-center justify-center mb-6">

                  <Icon className="w-6 h-6 text-green-400" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default FeatureCard;