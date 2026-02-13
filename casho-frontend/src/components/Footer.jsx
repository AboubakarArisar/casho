import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B1220] border-t border-gray-800 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Casho
            </h3>

            <p className="text-gray-400 leading-relaxed text-sm">
              Smart community savings platform designed to help you
              save together, grow together, and achieve financial
              freedom securely.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">

              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Features
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Pricing
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  About Us
                </a>
              </li>

            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Support
            </h4>

            <ul className="space-y-3 text-sm">

              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Help Center
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-emerald-400 transition">
                  Terms of Service
                </a>
              </li>

            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Follow Us
            </h4>

            <div className="flex gap-4">

              <a
                href="#"
                className="p-2 rounded-full border border-gray-700 hover:border-emerald-500 hover:text-emerald-400 transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                className="p-2 rounded-full border border-gray-700 hover:border-emerald-500 hover:text-emerald-400 transition"
              >
                <Twitter size={18} />
              </a>

              <a
                href="#"
                className="p-2 rounded-full border border-gray-700 hover:border-emerald-500 hover:text-emerald-400 transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                className="p-2 rounded-full border border-gray-700 hover:border-emerald-500 hover:text-emerald-400 transition"
              >
                <Linkedin size={18} />
              </a>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">

          <p>
            © 2026 Casho. All rights reserved.
          </p>

          <p>
            Built with  for smart saving
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
