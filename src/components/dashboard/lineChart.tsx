import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const LineChart = ({ data }) => {
  const balanceOverTime = data.reduce((acc, transaction) => {
    const lastBalance = acc.length > 0 ? acc[acc.length - 1].balance : 0;
    const newBalance =
      transaction.transactionType === "income"
        ? lastBalance + transaction.amount
        : lastBalance - transaction.amount;

    acc.push({ date: transaction.date, balance: newBalance });
    return acc;
  }, []);

  const chartData = {
    labels: balanceOverTime.map((entry) => entry.date),
    datasets: [
      {
        label: "Account Balance",
        data: balanceOverTime.map((entry) => entry.balance),
        backgroundColor: "rgba(66, 165, 245, 0.5)",
        borderColor: "rgba(66, 165, 245, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(66, 165, 245, 1)",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        fill: true,
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
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
