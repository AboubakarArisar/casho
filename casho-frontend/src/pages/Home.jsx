import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import InfoSection from "../components/InfoSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Header />
      <InfoSection />
      <Footer />
    </div>
  );
};

export default Home;
