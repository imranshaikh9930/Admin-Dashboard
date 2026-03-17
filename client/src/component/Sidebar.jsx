

import { MdDashboard } from "react-icons/md";
import { FaUsers, FaChartBar } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import {NavLink} from "react-router-dom";
import { TbReportSearch } from "react-icons/tb";


export default function Sidebar() {
  return (
<aside className="group flex flex-col items-center hover:items-start w-16 hover:w-64 h-screen py-8 overflow-y-auto bg-white border-r dark:bg-[#128AA9] dark:border-gray-700 transition-all duration-300">

      {/* Logo */}
   

      {/* Menu */}
      <nav className="flex flex-col flex-1 space-y-6 w-full mt-[50px]">

        <NavLink to="/dashboard" className="flex items-center justify-center group-hover:justify-start gap-4 p-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 transition">
          <MdDashboard size={22} />
          <span className="hidden group-hover:block">Dashboard</span>
        </NavLink>

        <NavLink to="users" className="flex items-center justify-center group-hover:justify-start gap-4 p-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 transition">
          <FaUsers size={20} />
          <span className="hidden group-hover:block">Users</span>
        </NavLink>

        <NavLink to="booking"  className="flex items-center justify-center group-hover:justify-start gap-4 p-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 transition">
          <FaChartBar size={20} />
          <span className="hidden group-hover:block">Bookings</span>
        </NavLink>

        
        <NavLink to="reports"  className="flex items-center justify-center group-hover:justify-start gap-4 p-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 transition">
          <TbReportSearch size={20} />
          <span className="hidden group-hover:block">Reports</span>
        </NavLink>
        <NavLink to="audit-log"  className="flex items-center justify-center group-hover:justify-start gap-4 p-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 transition">
          <TbReportSearch size={20} />
          <span className="hidden group-hover:block">Audit Log</span>
        </NavLink>
      </nav>

      {/* Bottom */}
      <div className="flex flex-col space-y-6 mt-10">

        {/* <a className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800">
          <IoSettingsOutline size={22} />
        </a> */}

        

      </div>

    </aside>
  );
}