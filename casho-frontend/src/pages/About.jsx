import React from "react";

// Import images
import saifImg from "../assets/team/saif.jpg";
import abubakarImg from "../assets/team/abubakar.jpg";
import bismillahImg from "../assets/team/bismillah.jpeg";

const About = () => {
  const team = [
    {
      name: "Saifullah Latki",
      role: "CEO",
      img: saifImg,
    },
    {
      name: "AbouBakar Arisar Lee",
      role: "CTO",
      img: abubakarImg,
    },
    {
      name: "Bismillah Khan",
      role: "Lead Designer",
      img: bismillahImg,
    },
  ];

  return (
    <section className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 py-40 text-white">

      {/* Hero Section */}
      <div className="max-w-2xl w-full text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-500 mb-4">
          About Casho
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Casho is committed to empowering your financial journey with
          innovative solutions, transparency, and trust.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <span className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold shadow">
            Secure
          </span>

          <span className="px-4 py-2 bg-gray-700 text-white rounded-full text-sm font-semibold shadow">
            Reliable
          </span>

          <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-semibold shadow">
            Fast
          </span>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-16">

        <div className="bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:scale-105 transition">
          <h2 className="text-xl font-bold mb-2">Our Mission</h2>
          <p className="text-gray-400">
            To simplify finance for everyone, making it secure and easy to manage.
          </p>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:scale-105 transition">
          <h2 className="text-xl font-bold mb-2">Our Values</h2>
          <p className="text-gray-400">
            Integrity, innovation, and customer-first thinking.
          </p>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:scale-105 transition">
          <h2 className="text-xl font-bold mb-2">Our Promise</h2>
          <p className="text-gray-400">
            Transparency, support, and continuous improvement.
          </p>
        </div>

      </div>

      {/* Team Section */}
      <div className="max-w-3xl w-full text-center">

        <h3 className="text-3xl font-semibold text-green-500 mb-4">
          Meet Our Team
        </h3>

        <p className="text-gray-400 mb-8">
          A passionate group dedicated to your financial success.
        </p>

        <div className="flex flex-wrap justify-center gap-8">

          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg p-6 w-52 flex flex-col items-center hover:scale-105 transition"
            >
              {/* Profile Image */}
              <div className="w-24 h-24 rounded-full mb-4 overflow-hidden border-4 border-zinc-700 shadow-md">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Name */}
              <span className="font-semibold text-base">
                {member.name}
              </span>

              {/* Role */}
              <span className="text-sm text-gray-400 mt-1">
                {member.role}
              </span>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default About;