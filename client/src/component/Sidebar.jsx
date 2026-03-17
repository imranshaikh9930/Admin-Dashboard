// import { House } from "lucide-react";
// import React, { useContext, useState } from "react";
// // import { CgProfile } from "react-icons/cg";
// // import { IoMdSettings } from "react-icons/io";
// // import { Tooltip } from "@mui/material";
// import { LayoutDashboard } from 'lucide-react';
// import { MdDashboard } from "react-icons/md";
// import { FaUsers } from "react-icons/fa";

// import { NavLink, useNavigate } from "react-router-dom";


//   const navclassName = ({ isActive }) =>
//     `flex items-center gap-5 px-6 py-2 rounded transition border
//      ${isActive
//       ? "bg-[#222F7D] text-white"
//       : "text-black hover:bg-[#222F7D] hover:text-white border-[#dbdbdb]"
//     }`;

// const Sidebar = () => {
//   const [open,setOpen] = useState(false);


//   return (
// //     <>
// //       {/* MOBILE OVERLAY - Only acts on mobile screens */}
// //       {/* {open && (
// //         <div
// //           classNameName="fixed inset-0 bg-black/50 z-30 md:hidden transition-opacity"
// //           onClick={() => setOpen(false)}
// //         />
// //       )}
// //  {/* ${open ? "translate-x-0" : "-translate-x-full"} */}
// //       <aside
// //         classNameName={`
// //           fixed inset-y-0 left-0 z-40  shadow-xl
// //           transition-all duration-300 ease-in-out 
// //           flex flex-col h-screen overflow-hidden 
// //           mt-16
        
// //           md:static md:translate-x-0 md:w-[250px] 
          
// //         `}
// //       >

// //            <div classNameName="relative flex items-center justify-center w-full h-16 border-b shrink-0">
// //          {/* Logo Container */}
// //          <div classNameName="flex items-center justify-center">
// //            <img 
// //             //  src={} 
// //              classNameName="w-[100px] h-[40px] object-contain" 
// //              alt="Logo" 
// //            />
// //          </div>
// //          </div>

// //            <nav classNameName="mt-4 space-y-2 px-4 flex-1 overflow-y-auto custom-scrollbar">
// //           {/* <h1 classNameName="text-center">Admin Dashboard</h1> */}
// //           <NavLink to="/admin" end 
// //           classNameName={navclassName}
// //           >
// //             <House size={15} classNameName="shrink-0" />
// //             <span classNameName="text-[15px]">Overview </span>
// //           </NavLink>
          
// //           </nav>
       

// //             <h1>Sidebar</h1>
      
// //       </aside> */}
// //     </>
// <></>
 
//   );
// };

// export default Sidebar;

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

        <NavLink to="overview" className="flex items-center justify-center group-hover:justify-start gap-4 p-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 transition">
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

        <a className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800">
          <IoSettingsOutline size={22} />
        </a>

        

      </div>

    </aside>
  );
}