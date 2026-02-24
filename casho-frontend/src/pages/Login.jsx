import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4 font-display">
      <div className="w-full max-w-md">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-green-500/20 p-3 rounded-xl mb-3">
            <span className="material-symbols-outlined text-green-500 text-4xl">
              energy_savings_leaf
            </span>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Casho
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Grow your savings together
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-gray-800 border border-gray-700 shadow-xl rounded-xl overflow-hidden">
          <div className="p-8">
            
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-white">
                Welcome Back
              </h2>
              <p className="text-gray-400 text-sm mt-2">
                Manage your savings and committees effortlessly.
              </p>
            </div>

            <form className="space-y-6">
              
              {/* Email Field */}
              <div className="space-y-2">
                <label
                  className="block text-sm font-medium text-gray-300"
                  htmlFor="email"
                >
                  Email Address
                </label>

                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl">
                    mail
                  </span>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 pl-11 pr-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label
                    className="block text-sm font-medium text-gray-300"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-xs font-semibold text-green-500 hover:text-green-400 transition-colors"
                  >
                    Forgot Password?
                  </a>
                </div>

                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl">
                    lock
                  </span>

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 pl-11 pr-12 text-white placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-500 transition-colors"
                  >
                    <span className="material-symbols-outlined text-xl">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-500 text-green-500 focus:ring-green-500 bg-transparent"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-400"
                >
                  Remember me for 30 days
                </label>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-green-500/20 transform active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>Secure Login</span>
                <span className="material-symbols-outlined text-xl">
                  login
                </span>
              </button>
            </form>

            {/* Role Redirection Hint */}
            <div className="mt-6 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 text-sm mt-0.5">
                  info
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-green-500 mb-1">
                    Redirection Logic
                  </p>
                  <p className="text-xs text-gray-400 leading-tight">
                    <span className="text-white font-medium">User</span> → Dashboard |{" "}
                    <span className="text-white font-medium">Committee Admin</span> → Management |{" "}
                    <span className="text-white font-medium">Admin</span> → System Panel
                  </p>
                </div>
              </div>
            </div>
          </div>

            {/* Signup Redirect */}
            <div className="bg-gray-800 p-6 text-center rounded-b-xl">
                <p className="text-sm text-gray-400">
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-green-500 font-semibold hover:text-green-400 transition-colors"
                    >
                      Sign Up
                    </Link>
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}