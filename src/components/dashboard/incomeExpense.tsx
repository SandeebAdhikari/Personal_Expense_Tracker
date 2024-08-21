import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = ({ data }) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  const incomeData = months.map((month) => {
    return data
      .filter(
        (transaction) =>
          transaction.transactionType === "income" &&
          new Date(transaction.date).toLocaleString("default", {
            month: "short",
          }) === month
      )
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  });

  const expenseData = months.map((month) => {
    return data
      .filter(
        (transaction) =>
          transaction.transactionType === "expense" &&
          new Date(transaction.date).toLocaleString("default", {
            month: "short",
          }) === month
      )
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  });

  const chartData = {
    labels: months,
    datasets: [
      {
        label: "Income",
        data: incomeData,
        backgroundColor: "rgba(76, 175, 80, 0.7)",
        borderColor: "rgba(76, 175, 80, 1)",
        borderWidth: 1,
      },
      {
        label: "Expense",
        data: expenseData,
        backgroundColor: "rgba(239, 83, 80, 0.7)",
        borderColor: "rgba(239, 83, 80, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full h-64">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
