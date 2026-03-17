import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register ArcElement for Pie/Doughnut charts
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Rent', 'Groceries', 'Utilities', 'Entertainment', 'Savings'],
    datasets: [
      {
        label: 'Monthly Expenses',
        data: [1200, 400, 150, 200, 500],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom', // Moves labels to the bottom
      },
    },
  };

  return (
    <div style={{ width: '280px', margin: '0 auto' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;