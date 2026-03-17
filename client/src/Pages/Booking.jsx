import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Booking = () => {

  const bookingHeader = [
    "Booth","Company","Size","Price","Status","Payment","Action"
  ]

  const bookingData = [
    {id:1, booth:"A1", company:"XYZ", size:"3x3", price:"SAR 5000", status:"Confirmed", payment:"Paid", action:"Approve"},
    {id:2, booth:"B2", company:"ABC", size:"4x4", price:"SAR 8000", status:"Pending", payment:"Unpaid", action:"View"},
    {id:3, booth:"C3", company:"DEF", size:"5x5", price:"SAR 12000", status:"Confirmed", payment:"Paid", action:"View"},
  ]

  return (
    <div className="p-6 mt-[53px]">

      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Booking</h1>
      </div>

      {/* Card with Gradient Header */}
      <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-purple-800 px-4 py-5">
          <h2 className="text-white text-2xl font-semibold">Exhibition Booking Management</h2>
          
        </div>

        {/* Table */}
        <TableContainer sx={{ maxHeight: 240 }} component={Paper} className="rounded-b-xl shadow-none">
          <Table stickyHeader sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                {bookingHeader.map((header, index) => (
                  <TableCell key={index} className="font-bold">{header}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {bookingData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.booth}</TableCell>
                  <TableCell>{row.company}</TableCell>
                  <TableCell>{row.size}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.payment}</TableCell>
                  <TableCell>{row.action}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </div>

    </div>
  )
}

export default Booking;