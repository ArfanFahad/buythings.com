import { NavLink, Link, Outlet } from "react-router-dom";

function MainLayout() {
  const navLinkClass = ({ isActive }) => {
    return `${
      isActive ? "text-yellow-500" : "text-white"
    } hover:text-black duration-300`;
  };

  return (
    <div>
      <header className="bg-blue-600 text-white p-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-8">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="product" className={navLinkClass}>
              Shop
            </NavLink>
            <NavLink to="about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="contact" className={navLinkClass}>
              Contact
            </NavLink>
          </div>

          <div className="flex items-center justify-between">
            <input
              type="text"
              placeholder="Search products..."
              className="px-4 py-2 border-1 rounded w-[800px] text-white outline-none"
            />
          </div>

          <div className="flex items-center justify-between gap-8">
            <Link to="about">Cart</Link>
            <Link
              to="contact"
              className="bg-blue-700 px-3 py-1 rounded hover:bg-blue-900 duration-300"
            >
              Login
            </Link>
            <Link
              to="contact"
              className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500 duration-300"
            >
              Signup
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-blue-600 text-white text-center p-4 bottom-0 left-0 fixed w-full">
        &copy; {new Date().getFullYear()} All Right Reserved
      </footer>
    </div>
  );
}

export default MainLayout;
