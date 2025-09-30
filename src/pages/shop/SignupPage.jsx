import { userSignUp } from "../../api/signUp.api.js";
import { useState } from "react";

export default function Signup() {
  // form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassord] = useState("");
  const [message, setMessage] = useState("");

  const userSignUpSubmit = async (e) => {
    e.preventDefault();

    const signUpData = {
      name: name,
      email: email,
      password: password,
    };

    console.log("Submitting: ", signUpData);

    // API Call
    try {
      const res = await userSignUp(signUpData);
      setMessage(res);
      console.log("User Created: ", res);
    } catch (error) {
      console.error(error.message);
    }

    // reset form
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassord("");
  };

  return (
    <div className="flex items-center justify-center bg-gray-400">
      <div className="w-full p-20">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">
          Join <span className="text-indigo-500">buythings.com</span>
        </h2>
        <p className="text-gray-500 text-center mt-2 mb-6">
          Create your account to start shopping
        </p>

        <form className="space-y-5" method="POST" onSubmit={userSignUpSubmit}>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name:{" "}
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border rounded outline-0"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email:{" "}
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded outline-0"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password:
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded outline-0"
              autoComplete="off"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Confirm Password:
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassord(e.target.value)}
              className="w-full px-4 py-3 border rounded outline-0"
              autoComplete="off"
              required
            />
          </div>

          <button
            type="submit"
            className="px-2 py-2 rounded-sm text-white bg-blue-600 hover:bg-blue-700 duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={password !== confirmPassword}
          >
            Submit
          </button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </div>
  );
}
