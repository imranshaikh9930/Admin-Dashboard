import React, { useState } from 'react'
import Badge from '@mui/material/Badge';
import avatarImg from "../assets/avatar.webp";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ChevronDown, LockKeyhole, Menu as MenuIcon } from "lucide-react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Divider, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { FaSearch } from "react-icons/fa";
import { Logout, Person } from '@mui/icons-material';
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  return (
    // <header className="bg-slate-500  border-b px-4 py-3 flex items-center justify-between h-16">
    //   {/* Left: Hamburger */}
    //   <button
    //     className="p-2 rounded hover:bg-gray-200/60"
    //     // onClick={() => setOpen(!open)}
    //   >
    //     <MenuIcon size={26} />
    //   </button>

    //   {/* Center: Title */}
    //   <h1 className="w-[70%] text-center text-[16px] md:text-[28px] font-bold text-[#212e7d] m-0 py-[0.25rem]">
    //    MedConf KSA
    //   </h1>

    //   {/* Right Section */}
    //   <div className="flex items-center gap-3">
    //     <span className="hidden md:block text-sm text-gray-500 text-nowrap">
    //       {/* {date} */}
    //     </span>

    //     {/* Avatar Section */}
    //     <div
    //       className="flex items-center gap-2 cursor-pointer select-none"
    //       // onClick={(e) => setAnchorEl(e.currentTarget)}
    //     >

    //       <Avatar
    //         src={
    //       avatarImg
    //         }
    //         alt="Profile"
    //       />

    //       <p className="hidden md:block font-semibold text-nowrap">
    //         {/* {user?.name} */}
    //         Admin
    //       </p>

    //       <ChevronDown
    //         size={18}
    //         // className={`transition-transform duration-200 ${openMenu ? "rotate-180" : ""
    //         //   }`}
    //       />
    //     </div>

    //     {/* Dropdown Menu */}
    //     <Menu
    //       anchorEl={anchorEl}
    //       // open={openMenu}
    //       onClose={() => setAnchorEl(null)}
    //       anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    //       transformOrigin={{ vertical: "top", horizontal: "right" }}
    //     >
    //       <div className="px-4 py-2">
    //         {/* <p className="font-semibold ">{user?.name}</p>
    //         <p className="text-sm text-gray-500">{user?.email}</p> */}
    //       </div>

    //       <Divider />

    //       <MenuItem
    //         onClick={() => {
    //           navigate(user?.role === "admin" ? "/admin/profile" : "/employee/profile");
    //           setAnchorEl(null);
    //         }}
    //       >
    //         <ListItemIcon><Person fontSize="small" /></ListItemIcon>
    //         My Profile
    //       </MenuItem>

    //       <MenuItem
    //         onClick={() => {
    //           // navigate(user?.role === "admin" ? "/admin/change-password" : "/employee/change-password");
    //           setAnchorEl(null);
    //         }}
    //       >
    //         <ListItemIcon><LockKeyhole size={18} /></ListItemIcon>
    //         Change Password
    //       </MenuItem>

    //       <Divider />

    //       <MenuItem 
    //       // onClick={handleLogout}
    //        className="text-red-600">
    //         <ListItemIcon><Logout fontSize="small" color="error" /></ListItemIcon>
    //         Logout
    //       </MenuItem>
    //     </Menu>
    //   </div>
    // </header>
    <nav className="fixed top-0 z-50 w-full shadow border bg-[#128AA9]">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="sm:hidden text-white hover:bg-white/20 rounded p-2"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h10"
                />
              </svg>
            </button>

            <h2 className="text-white font-semibold text-lg">
              MedConf KSA
            </h2>
          </div>

          {/* Right */}
          <div className="relative flex items-center gap-3">
            <ul className='flex items-center gap-5 text-white text-sm'>

              <li>Plan:Basic</li>
              <li className='font-bold'>UPGRADE</li>
              <li><FaSearch /></li>
              <li>

            <Badge
  badgeContent={7}
  sx={{
    "& .MuiBadge-badge": {
      backgroundColor: "black",
      color: "white"
    }
  }}
>
  <NotificationsIcon sx={{ color: "white" }} />
</Badge>
            
              </li>
              <li>English</li>
            </ul>
            <button
              onClick={() => setOpen(!open)}
              className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300"
            >
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="user"
              />
            </button>

            <MoreVertIcon sx={{color: 'white'}} />
            {/* 
            {open && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded shadow-lg border">
                <div className="px-4 py-3 border-b">
                  <p className="text-sm font-medium">Neil Sims</p>
                  <p className="text-sm text-gray-500 truncate">
                    neil.sims@flowbite.com
                  </p>
                </div> */}

            {/* <ul className="p-2 text-sm">
                  <li>
                    <a className="block p-2 hover:bg-gray-100 rounded" href="#">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a className="block p-2 hover:bg-gray-100 rounded" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="block p-2 hover:bg-gray-100 rounded" href="#">
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a className="block p-2 hover:bg-gray-100 rounded" href="#">
                      Sign out
                    </a>
                  </li>
                </ul> */}
            {/* </div>
            )} */}
          </div>

        </div>
      </div>
    </nav>

  )
}

export default Navbar