import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Total Registered Users',
        // Dummy data trending toward your 12,450 total
        data: [11800, 11950, 12100, 12200, 12300, 12400, 12450],
        fill: true,
        backgroundColor: 'rgba(3, 169, 244, 0.1)', // #03A9F4 with transparency
        borderColor: '#03A9F4',
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#03A9F4',
      },
      {
        label: 'Active Bookings',
        // Dummy data trending toward your 342 total
        data: [280, 295, 310, 305, 325, 338, 342],
        fill: false,
        borderColor: '#8BC34A', // Matching your Bookings stat color
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#8BC34A',
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Growth & Booking Trends',
        font: { size: 16 }
      },
    },
    scales: {
      y: {
        beginAtZero: false, // Better for showing growth in large numbers
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
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
    <div className="max-w-[550px] h-[280px] mb-2 mx-auto p-4 bg-white rounded-lg shadow-sm">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;