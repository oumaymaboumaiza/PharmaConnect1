import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-6 w-full bg-gray-50 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
