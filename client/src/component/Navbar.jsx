import React, { useState } from 'react'
import Badge from '@mui/material/Badge';
import avatarImg from "../assets/avatar.webp";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ChevronDown, LockKeyhole, Menu as MenuIcon } from "lucide-react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Divider, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { FaSearch } from "react-icons/fa";
import { Logout, Person } from '@mui/icons-material';
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";



const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    
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
          
            {/* <button
              onClick={() => setOpen(!open)}
              className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300"
            >
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="user"
              />
            </button> */}

            <MoreVertIcon sx={{color: 'white'}}
              id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='cursor-pointer'
            />

            <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
  <MenuItem onClick={handleClose} className="flex items-center gap-3 p-3">
        <CgProfile size={20} />
        <span className='text-sm'>Profile</span>
      </MenuItem>
            <MenuItem onClick={handleClose} className="flex items-center gap-3 p-3">
        <IoIosLogOut size={20} />
        <span className='text-sm'>Logout</span>
      </MenuItem>
      </Menu>
            
           
          </div>

        </div>
      </div>
    </nav>

  )
}

export default Navbar