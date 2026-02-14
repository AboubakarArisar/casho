import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Heros";
import Stats from "../components/Stats";
import Features from "../components/FeatureCard";

const Home = () => {
  return (
    <div className="bg-gray-800">
      <Navbar />
      <Hero />
      <Stats />
       <Features />
      <Footer />
    </div>
  );
};

export default Home;
