import { Link, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <header className="bg-blue-600 text-white p-4">
        <nav className="flex gap-4 font-extralight">
          <Link to="">Home</Link>
          <Link to="product">Product</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-blue-600 text-center p-4 bottom-0 left-0 fixed w-full">
        &copy; {new Date().getFullYear()} All Right Reserved
      </footer>
    </div>
  );
}

export default MainLayout;
