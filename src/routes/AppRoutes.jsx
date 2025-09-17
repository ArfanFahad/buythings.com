import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/shop/HomePage";
import ProductPage from "../pages/shop/ProductPage";
import AboutPage from "../pages/shop/AboutPage";
import ContactPage from "../pages/shop/ContactPage";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CategoriesPage from "../pages/admin/CategoriesPage";
import ProductPageAdmin from "../pages/admin/ProductPageAdmin";
import OrdersPage from "../pages/admin/OrdersPage";
import UsersPage from "../pages/admin/UsersPage";
import SettingsPage from "../pages/admin/SettingsPage";
import AddProduct from "../pages/admin/ProductForm";
import Signup from "../pages/shop/SignupPage";
import LoginPage from "../pages/shop/LoginPage";
import Logout from "../pages/admin/Logout";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="category" element={<CategoriesPage />} />
        <Route path="productpage" element={<ProductPageAdmin />} />
        <Route path="productpage/add" element={<AddProduct />} />
        <Route path="productpage/edit/:id" element={<AddProduct />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="setting" element={<SettingsPage />} />
        <Route path="logout" element={<Logout />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
