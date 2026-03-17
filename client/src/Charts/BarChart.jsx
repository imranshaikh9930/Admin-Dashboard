import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  // Mapping the metrics from your stats array
  const data = {
    labels: ['Registered Users', 'Booth Bookings', 'Active Events'],
    datasets: [
      {
        label: 'Current Performance',
        // Using dummy values based on your stats (12450, 342, 6)
        // Note: Revenue is usually kept on a separate scale or chart due to size
        data: [12450, 342, 6], 
        backgroundColor: [
          '#03A9F4', // Blue for Users
          '#8BC34A', // Green for Bookings
          '#ff5722', // Orange for Events
        ],
        borderWidth: 1,
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hidden because labels are on the X-axis
      },
      title: {
        display: true,
        text: 'Platform Engagement Overview',
        font: { size: 16 }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className=" max-w-[550px] h-[280px] mb-2 mx-auto p-4 bg-white rounded-lg shadow-sm">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;