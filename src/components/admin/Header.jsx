function Header() {
  return (
    <>
      <div className="w-full flex bg-gray-900 text-white p-4 justify-between items-center">
        <h1 className="text-lg font-bold">E-Commerce Admin</h1>
        <div>
          <span className="mr-4">Admin Name</span>
          <button className="bg-red-500 px-4 py-2 rounded cursor-pointer">
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
