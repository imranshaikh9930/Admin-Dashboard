import React, { useState } from 'react'
import BarChart from '../Charts/BarChart';
import PieChart from "../Charts/PieChart";
import LineChart from "../Charts/LineChart";
 import { LiaEyeSolid } from "react-icons/lia";
 import { LuUsersRound } from "react-icons/lu";
 import { FaBook } from "react-icons/fa";
 import { BsCalendarEvent } from "react-icons/bs";
import { MdEmojiEvents } from "react-icons/md";
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';




const Overview = () => {
  const [selectedChart, setSelectedChart] = useState('bar');

  // 2. Map keys to components for cleaner rendering
  const chartComponents = {
    bar: <BarChart />,
    pie: <PieChart />,
    line: <LineChart />
  };
  const stats = [
    {
      id: 1,
      description: "Total Registered Users",
      values: "12,450",
      icon: <LuUsersRound className="w-6 h-6 " />,
      bgColor: "#03A9F4",
    },
    {
      id: 2,
      description: "Active Booth Bookings",
      values: "342",
      icon: <FaBook className="w-6 h-6 " />,
      bgColor: "#8BC34A",
    },
    {
      id: 3,
      description: "Total Revenue",
      values: "SAR 18.5 M",
      icon: <BsCalendarEvent className="w-6 h-6 " />,
      bgColor:"#009688"
    },
    {
      id: 4,
      description: "Active Events",
      values: 6,
      icon: <MdEmojiEvents className="w-6 h-6 " />,
      bgColor:"#ff5722"
    }
  ]
  return (

    <div className="">

        {/* Header */}
       <div className="flex justify-between items-center mb-6 py-4 mt-[53px]">
          <h1 className="text-2xl font-bold text-gray-800">Overview</h1>


        </div>


        {/* Metric Cards Sample 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((item) => (
            <div
              key={item.id}
              className="p-5 bg-white border rounded-lg shadow-sm h-[130px] flex flex-col justify-between hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">
                  {item.description}
                </p>
                <div className="text-blue-500">
                  {item.icon}
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900">
                {item.values}
              </h2>
            </div>
          ))}
        </div>

        {/* Dummy Cards Sample 2 */}
    <div className="flex items-stretch gap-4  text-white rounded-lg shadow-md w-full ">

          {stats.map((item) => (
            <div key={item.id} className={`flex items-center gap-3  rounded-lg flex-1`} style={{backgroundColor: item.bgColor}}>
             <div
  className="flex items-center justify-center w-16 h-16 rounded-md"
  style={{ backgroundColor: "rgba(87, 87, 34, 0.3)" }}
>
  {item.icon}
</div>
              <div className="flex-1">
                <div className="text-sm font-medium whitespace-nowrap">{item.description}</div>
                <div className="text-xl font-bold  whitespace-nowrap ">{item.values}</div>
              </div>
            </div>
          ))}
 

</div>
       

          <div className='mt-4 mb-6'>
      <FormControl sx={{ m: 1, minWidth: 120,}} className='w[70px] text-[14px] '>
        {/* <InputLabel id="demo-simple-select-helper-label">Chart Type</InputLabel> */}
        <Select
          labelId="demo-simple-select-helper-label"
          // id="demo-simple-select-helper"
          value={selectedChart}
          // label=""
           onChange={(e) => setSelectedChart(e.target.value)}
           sx={{padding: "4px 10px",width:"140px",height:"40px",fontSize:"14px"}}
        >
          <MenuItem value="">
            {/* <em>None</em> */}
          </MenuItem>
          <MenuItem value={"bar"}>Bar Chart</MenuItem>
          <MenuItem value={"pie"}>Pie Chart</MenuItem>
          <MenuItem value={"line"}>Line Chart</MenuItem>
        </Select>
     
      </FormControl>
     
    </div>


        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Chart 1 */}
          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-xl transition-all">

            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Revenue Projection
            </h3>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-dashed border-gray-200 p-4">

              <h3 className="text-sm font-semibold mb-3 text-gray-600 capitalize">
                {selectedChart} Visualization
              </h3>

              <div className="w-full h-[260px]">
                {chartComponents[selectedChart]}
              </div>

            </div>
          </div>

              
          {/* Chart 2 */}
          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-xl transition-all">

            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Revenue Projection
            </h3>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-dashed border-gray-200 p-4">

              <h3 className="text-sm font-semibold mb-3 text-gray-600 capitalize">
                {selectedChart} Visualization
              </h3>

              <div className="w-full h-[260px]">
                {chartComponents[selectedChart]}
              </div>

            </div>
          </div>

        </div>

      </div>


  )
}

export default Overview