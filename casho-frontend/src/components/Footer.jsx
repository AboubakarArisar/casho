import { Wallet, Globe, Rss, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">

              <div className="bg-green-500 text-white p-2 rounded-lg flex items-center justify-center">
                <Wallet className="w-5 h-5" />
              </div>

              <span className="text-xl font-black tracking-tight text-white">
                Casho
              </span>

            </div>

            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Redefining how communities save and invest. Secure, transparent,
              and interest-free committees for everyone.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a className="hover:text-green-500 transition" href="#">Features</a></li>
              <li><a className="hover:text-green-500 transition" href="#">Security</a></li>
              <li><a className="hover:text-green-500 transition" href="#">Business</a></li>
              <li><a className="hover:text-green-500 transition" href="#">Roadmap</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-green-500 transition">About Us</Link></li>
              <li><Link className="hover:text-green-500 transition" to="/careers">Careers</Link></li>
              <li><Link className="hover:text-green-500 transition" to="/contact">Contact</Link></li>
              <li><Link className="hover:text-green-500 transition" to="/blog">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a className="hover:text-green-500 transition" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-green-500 transition" href="#">Terms of Service</a></li>
              <li><a className="hover:text-green-500 transition" href="#">Cookie Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-xs">
            © 2024 Casho Financial Technologies Inc. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a className="text-gray-500 hover:text-green-500 transition" href="#">
              <Globe className="w-5 h-5" />
            </a>
            <a className="text-gray-500 hover:text-green-500 transition" href="#">
              <Rss className="w-5 h-5" />
            </a>
            <a className="text-gray-500 hover:text-green-500 transition" href="#">
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;