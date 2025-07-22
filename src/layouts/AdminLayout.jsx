import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/admin/Sidebar";
import { Topbar } from "../components/admin/Topbar";

export const AdminLayout = () => {
  return (
    <>
      <div>
        <Sidebar />
      </div>
    </>
  );
};
