import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler
);

const BarChart = ({ income, expenses }) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  console.log("Income Data:", income);
  console.log("Expense Data:", expenses);

  const chartData = {
    labels: months,
    datasets: [
      {
        label: "Income",
        data: income, // Use the `income` prop directly
        backgroundColor: "rgba(76, 175, 80, 0.7)",
        borderColor: "rgba(76, 175, 80, 1)",
        borderWidth: 1,
        fill: false,
      },
      {
        label: "Expense",
        data: expenses, // Use the `expenses` prop directly
        backgroundColor: "rgba(239, 83, 80, 0.7)",
        borderColor: "rgba(239, 83, 80, 1)",
        borderWidth: 1,
        fill: false,
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
