import TopCard from "../components/dashboard/topCard";
import SideBar from "../components/sideBar";

const DashBoard = () => {
  const topCardsData = [
    { amount: "$21340", label: "Income" },
    { amount: "$12300", label: "Expenses" },
    { amount: "$9040", label: "Savings" },
    { amount: "$5000", label: "Investments" },
  ];

  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col m-6 w-full">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex justify-between">
          {topCardsData.map((data, index) => (
            <TopCard key={index} amount={data.amount} label={data.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
