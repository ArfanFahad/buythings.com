import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/shop/HomePage/HomePage";
import ProductPage from "../pages/shop/ProductPage/ProductPage";
import AboutPage from "../pages/shop/AboutPage/AboutPage";
import ContactPage from "../pages/shop/ContactPage/ContactPage";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../adminPanel/adminDashboard/dashboard";
import CategoriesPage from "../adminPanel/adminCategories/CategoriesPage";
import ProductPageAdmin from "../adminPanel/adminDashboard/ProductPageAdmin";
import OrdersPage from "../adminPanel/adminDashboard/OrdersPage";
import UsersPage from "../adminPanel/adminUsers/UsersPage";
import SettingsPage from "../adminPanel/adminSettings/SettingsPage";
import AddProduct from "../adminPanel/adminProducts/ProductForm";
import Signup from "../pages/auth/SignupPage";
import LoginPage from "../pages/auth/LoginPage";
import Logout from "../adminPanel/adminAuth/Logout";
import CartPage from "../pages/shop/Cart/CartPage";
import AdminLogin from "../adminPanel/adminAuth/AdminLogin";
import CategoryForm from "../adminPanel/adminCategories/CategoryForm";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Layout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      {/* Admin Layout (Protected pages) */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="category" element={<CategoriesPage />} />
        <Route path="category/add" element={<CategoryForm />} />
        <Route path="productpage" element={<ProductPageAdmin />} />
        <Route path="productpage/add" element={<AddProduct />} />
        <Route path="productpage/edit/:id" element={<AddProduct />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="setting" element={<SettingsPage />} />
        <Route path="logout" element={<Logout />} />
      </Route>

      {/* Admin Login Page (No layout) */}
      <Route path="/admin/login" element={<AdminLogin />} />
    </Routes>
  );
}

export default AppRoutes;
