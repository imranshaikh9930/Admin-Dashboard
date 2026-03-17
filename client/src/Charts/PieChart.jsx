import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Conferences', 'Workshops', 'Exhibitions', 'Meetups'],
    datasets: [
      {
        label: 'Event Categories',
        // Dummy data based on your "6" Active Events
        data: [2, 1, 2, 1], 
        backgroundColor: [
          '#03A9F4', // Blue (Users color)
          '#8BC34A', // Green (Bookings color)
          '#009688', // Teal (Revenue color)
          '#ff5722', // Orange (Events color)
        ],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },
      title: {
        display: true,
        text: 'Active Events by Type',
        font: { size: 16 }
      },
    },
  };

  return (
    <div className="max-w-full h-[280px] mb-2 mx-auto p-4 bg-white rounded-lg shadow-sm">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;