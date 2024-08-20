import TopCard from "../components/dashboard/topCard";
import SideBar from "../components/sideBar";
import PieChart from "../components/dashboard/pieChart";
import LineChart from "../components/dashboard/lineChart"; // Import the LineChart component
import BarChart from "../components/dashboard/incomeExpense";

const DashBoard = () => {
  const topCardsData = [
    { amount: "$21340", label: "Income" },
    { amount: "$12300", label: "Expenses" },
    { amount: "$9040", label: "Balance" },
    { amount: "$5000", label: "Transaction" },
  ];

  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col m-6 w-full">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex justify-between gap-4">
          {topCardsData.map((data, index) => (
            <TopCard key={index} amount={data.amount} label={data.label} />
          ))}
        </div>
        <div className="flex flex-col mt-6 shadow-sm shadow-slate-400 ">
          <h1 className="text-2xl font-bold m-4">Total Expenses</h1>
          <div className="flex justify-center mt-16 mb-8">
            <PieChart />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-1/2 shadow-sm shadow-slate-400 mt-4 p-4">
            <h1 className="text-2xl font-bold">Account - Balance</h1>
            <div className="flex justify-between mt-4">
              <LineChart />
            </div>
          </div>
          <div className="w-1/2 shadow-sm shadow-slate-400 mt-4 p-4">
            <h1 className="text-2xl font-bold">Income - Expense</h1>
            <div className="flex justify-between mt-4">
              <BarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
