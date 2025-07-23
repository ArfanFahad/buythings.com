import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="w-64 h-screen bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <ul>
          <li className="mb-4">
            <Link to="/admin/dashboard" className="hover:text-gray-300">
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/admin/products" className="hover:text-gray-300">
              Products
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/admin/orders" className="hover:text-gray-300">
              Orders
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/admin/users" className="hover:text-gray-300">
              Users
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/admin/categories" className="hover:text-gray-300">
              Categories
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/admin/settings" className="hover:text-gray-300">
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
