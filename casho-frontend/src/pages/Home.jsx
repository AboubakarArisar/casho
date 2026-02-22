import React, { useState } from "react";
import Hero from "../components/Heros";
import Stats from "../components/Stats";
import Features from "../components/FeatureCard";
import Login from "./Login";

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="bg-gray-800">
      <Hero />
      <Stats />
      <Features />
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-900 p-8 rounded-lg w-96 relative">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-2 right-2 text-white text-lg"
            >
              X
            </button>
            <Login />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;