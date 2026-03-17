import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Users = () => {
  const TableHeader = [
    "ID",
    "Name/Company",
    "Type",
    "Status",
    "Registered",
    "Actions",
  ];

  const TableData = [
    { id: 1, name: "XYZ", Type: "Visitor", Status: "Active", Registered: "Jan 4, 2026", Actions: "Edit" },
    { id: 2, name: "XYZ", Type: "Visitor", Status: "Active", Registered: "Jan 4, 2026", Actions: "Edit" },
    { id: 3, name: "XYZ", Type: "Visitor", Status: "Active", Registered: "Jan 4, 2026", Actions: "Edit" },
  ];

  return (
    <div className="p-6">
      
      {/* Header */}
      {/* <div className="mb-6 mt-[53px">
        <h1 className="text-2xl font-bold text-gray-800">Users</h1>
      </div> */}
       <div className="flex justify-between items-center mb-6 py-4 mt-[31px]">
          <h1 className="text-2xl font-bold text-gray-800">Users</h1>


        </div>

     <div className="">

  {/* Header Content */}
  <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-800 rounded-t-xl px-4 py-5">
    <h2 className=" text-white  text-bold text-2xl font-semibold">User Management</h2>
    <p className="text-sm text-white pt-2">
      Manage and monitor all registered users
    </p>
  </div>

  {/* Table */}
  <TableContainer sx={{ height: "240px" }} component={Paper}>
    <Table sx={{ minWidth: 450 }}>
      <TableHead>
        <TableRow>
          {TableHeader.map((header, index) => (
            <TableCell key={index}>{header}</TableCell>
          ))}
        </TableRow>
      </TableHead>

      <TableBody>
        {TableData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.Type}</TableCell>
            <TableCell>{row.Status}</TableCell>
            <TableCell>{row.Registered}</TableCell>
            <TableCell>{row.Actions}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>

</div>

    </div>
  );
};

export default Users;