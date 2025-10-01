import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hanleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyan-800 px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-50">Admin Login</h1>
          <p className="mt-2 text-sm text-gray-50">
            Sign in to access dashboard
          </p>
        </div>

        {/* Card */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <form onSubmit={hanleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-4 block w-full rounded-sm p-1.5 border border-gray-600 outline-none"
              />
            </div>

            <div>
              <label htmlFor="" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-4 block w-full rounded-sm p-1.5 border border-gray-600 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center cursor-pointer rounded-lg bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
            >
              Login
            </button>
          </form>
        </div>

        {/* Footer text */}
        <p className="text-center text-xs text-gray-200">
          &copy; {new Date().getFullYear()} buythings.com | All rights reserved.
        </p>
      </div>
    </div>
  );
}
