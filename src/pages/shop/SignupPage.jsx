export default function Signup() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full p-20">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">
          Join <span className="text-indigo-500">buythings.com</span>
        </h2>
        <p className="text-gray-500 text-center mt-2 mb-6">
          Create your account to start shopping
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name:{" "}
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border rounded outline-0"
            />
          </div>

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
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Confirm Password:
            </label>
            <input
              type="email"
              placeholder="Re-enter your password"
              className="w-full px-4 py-3 border rounded outline-0"
            />
          </div>

          <button
            type="submit"
            className="px-2 py-2 rounded-sm text-white bg-blue-600 hover:bg-blue-700 duration-300 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
