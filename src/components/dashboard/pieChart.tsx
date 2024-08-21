import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const categories = [
    "Mortgage / Rent",
    "Food",
    "Utilities",
    "Bills",
    "Shopping",
    "Transportation",
    "Insurance",
    "Health Care",
    "Clothing",
    "Others",
  ];
  const expenseData = categories.map((category) => {
    return data
      .filter(
        (transaction) =>
          transaction.transactionType === "expense" &&
          transaction.category === category
      )
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  });

  const chartData = {
    labels: categories,
    datasets: [
      {
        data: expenseData,
        backgroundColor: [
          "rgba(128, 203, 196, 0.8)",
          "rgba(255, 204, 128, 0.8)",
          "rgba(255, 171, 145, 0.8)",
          "rgba(255, 138, 101, 0.8)",
          "rgba(66, 165, 245, 0.8)",
          "rgba(239, 83, 80, 0.8)",
          "rgba(171, 71, 188, 0.8)",
          "rgba(126, 87, 194, 0.8)",
          "rgba(141, 110, 99, 0.8)",
          "rgba(77, 182, 172, 0.8)",
        ],
        hoverBackgroundColor: [
          "rgba(128, 203, 196, 1)",
          "rgba(255, 204, 128, 1)",
          "rgba(255, 171, 145, 1)",
          "rgba(255, 138, 101, 1)",
          "rgba(66, 165, 245, 1)",
          "rgba(239, 83, 80, 1)",
          "rgba(171, 71, 188, 1)",
          "rgba(126, 87, 194, 1)",
          "rgba(141, 110, 99, 1)",
          "rgba(77, 182, 172, 1)",
        ],
        borderColor: "rgba(255, 255, 255, 0.6)",
        borderWidth: 2,
        cutout: "70%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ": $" + tooltipItem.raw;
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-96">
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
