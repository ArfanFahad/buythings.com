import { Outlet, NavLink } from "react-router-dom";

export default function AdminLayout() {
  const navLinkClass = ({ isActive }) => {
    return isActive ? "font-semibold underline" : "hover:underline";
  };
  return (
    <div className="flex min-h-screen">
      <aside className="w-40 bg-blue-600 text-white">
        <nav className="flex flex-col p-6 gap-4 font-extralight">
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

      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}
