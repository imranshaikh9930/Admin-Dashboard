import { Outlet } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";

function Dashboard() {

  return (
    <div className="flex flex-col h-screen overflow-x-auto">

      {/* Top Navbar */}
      <Navbar />

      {/* Body Layout */}
      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
          {/* <main className="flex-1 bg-gray-100 transition-all duration-300 ease-in-out px-[10px] mt-12 overflow-h-auto"> */}
             <main className="flex-1 bg-gray-100 p-4 overflow-y-auto">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default Dashboard;