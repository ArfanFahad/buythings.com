import { Outlet, NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Tag,
  Package,
  ShoppingBag,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

export default function AdminLayout() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "flex items-center gap-3 px-4 py-2 bg-slate-600 text-white font-semibold rounded-lg shadow-sm transition-all"
      : "flex items-center gap-3 px-4 py-2 text-slate-300 hover:bg-slate-600/70 rounded-lg transition-all";

  return (
    <div className="flex min-h-screen bg-slate-700 text-slate-200">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-800 text-slate-100 m-4 rounded-2xl flex flex-col justify-between shadow-lg border border-slate-700">
        <div className="p-6">
          {/* Logo / Title */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-50">Admin Panel</h2>
            <p className="text-xs text-slate-400 mt-1">
              Manage your store efficiently
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2">
            <NavLink to="" end className={navLinkClass}>
              <LayoutDashboard size={18} />
              Dashboard
            </NavLink>
            <NavLink to="category" className={navLinkClass}>
              <Tag size={18} />
              Categories
            </NavLink>
            <NavLink to="productpage" className={navLinkClass}>
              <Package size={18} />
              Products
            </NavLink>
            <NavLink to="orders" className={navLinkClass}>
              <ShoppingBag size={18} />
              Orders
            </NavLink>
            <NavLink to="users" className={navLinkClass}>
              <Users size={18} />
              Users
            </NavLink>
            <NavLink to="setting" className={navLinkClass}>
              <Settings size={18} />
              Settings
            </NavLink>
          </nav>
        </div>

        {/* Logout Section */}
        <div className="p-6 border-t border-slate-700">
          <NavLink to="logout" className={navLinkClass}>
            <LogOut size={18} />
            Logout
          </NavLink>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 m-4 p-8 bg-slate-600 rounded-2xl shadow-inner border border-slate-700">
        <div className="text-slate-100">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
