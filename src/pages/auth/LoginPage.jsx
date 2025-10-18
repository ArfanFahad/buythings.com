import { userLogin } from "../../api/authAPI/login.api";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  // login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLoginSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };

    console.log("Login Data: ", loginData);

    // api call
    try {
      const data = await userLogin(loginData);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }

    // reset form
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="w-5/12 p-20 mt-10">
        <h2 className="text-3xl mb-10 font-extrabold text-center text-gray-800">
          Login <span className="text-indigo-500"> buythings.com</span>
        </h2>

        <form className="space-y-5" method="POST" onSubmit={userLoginSubmit}>
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
              required
            />
            <p className="mt-2 text-right cursor-pointer">
              <a href="http://">Forget Password?</a>
            </p>
          </div>

          <button
            type="submit"
            className="px-2 py-2 w-2/10 rounded-sm text-white bg-blue-600 hover:bg-blue-700 duration-300 cursor-pointer"
          >
            Log in
          </button>

          <p>
            Don't have an account?{" "}
            <span>
              <Link to="/signup">Register Here</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
