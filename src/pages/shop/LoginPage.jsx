export default function LoginPage() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-5/12 p-20 mt-10">
        <h2 className="text-3xl mb-10 font-extrabold text-center text-gray-800">
          Login <span className="text-indigo-500"> buythings.com</span>
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email:{" "}
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded outline-0"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password:
            </label>
            <input
              type="email"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded outline-0"
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
              <a href="http://">Register Here</a>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
