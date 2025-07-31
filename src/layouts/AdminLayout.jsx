import { Outlet, NavLink } from "react-router-dom";

export default function AdminLayout() {
  const navLinkClass = ({ isActive }) => {
    return isActive
      ? "font-semibold bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 transition-all duration-300"
      : "hover:bg-white/10 hover:backdrop-blur-sm hover:rounded-lg px-4 py-2 transition-all duration-300";
  };
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600">
      <aside className="w-50 m-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
        <nav className="flex flex-col p-6 gap-4 font-light">
          <div className="mb-2 text-white/90 text-xl font-semibold">
            Admin Panel
          </div>
          <NavLink to="" end className={navLinkClass}>
            Dashboard
          </NavLink>
          <NavLink to="category" className={navLinkClass}>
            Categories
          </NavLink>
          <NavLink to="productpage" className={navLinkClass}>
            Products
          </NavLink>
          <NavLink to="orders" className={navLinkClass}>
            Orders
          </NavLink>
          <NavLink to="users" className={navLinkClass}>
            Users
          </NavLink>
          <NavLink to="setting" className={navLinkClass}>
            Settings
          </NavLink>
        </nav>
      </aside>

      <main className="flex-1 m-4 p-6 rounded-2xl bg-white/40 shadow-2xl text-black">
        <Outlet />
      </main>
    </div>
  );
}
