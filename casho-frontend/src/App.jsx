import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Features from "./pages/Features";
import Security from "./pages/Security";
import Works from "./pages/Works";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/features" element={<Features />} />
        <Route path="/security" element={<Security />} />
        <Route path="/how-it-works" element={<Works />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;