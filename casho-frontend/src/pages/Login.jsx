import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-green-600 mb-4">
            <span className="material-symbols-outlined text-white text-3xl">
              energy_savings_leaf
            </span>
          </div>
          <h1 className="text-3xl font-semibold text-white">Casho</h1>
          <p className="text-gray-400 text-sm mt-2">
            Grow your savings together
          </p>
        </div>

        {/* Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-xl">
          <div className="p-8">

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white">
                Sign in to your account
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Enter your credentials to continue
              </p>
            </div>

            <form className="space-y-6">

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition"
                />
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-300"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-sm text-green-500 hover:text-green-400"
                  >
                    Forgot password?
                  </a>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Enter your password"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 pr-12 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <span className="material-symbols-outlined text-xl">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Remember */}
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 border-gray-600 bg-gray-800 rounded focus:ring-green-600"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-400"
                >
                  Remember me
                </label>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition"
              >
                Sign In
              </button>
            </form>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-800 p-6 text-center">
            <p className="text-sm text-gray-400">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-green-500 hover:text-green-400 font-medium"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}