import React, { useContext } from "react";
import TopCard from "../components/dashboard/topCard";
import SideBar from "../components/sideBar";
import PieChart from "../components/dashboard/pieChart";
import LineChart from "../components/dashboard/lineChart";
import BarChart from "../components/dashboard/incomeExpense";
import { TransactionContext } from "../context/TransactionContext"; // Import the context

const DashBoard = () => {
  const { transactions } = useContext(TransactionContext);

  // Calculate total income, expenses, balance, and number of transactions
  const income = transactions
    .filter((transaction) => transaction.transactionType === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const expenses = transactions
    .filter((transaction) => transaction.transactionType === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const balance = income - expenses;
  const totalTransactions = transactions.length;

  // Data for the TopCards
  const topCardsData = [
    { amount: `$${income.toFixed(2)}`, label: "Income" },
    { amount: `$${expenses.toFixed(2)}`, label: "Expenses" },
    { amount: `$${balance.toFixed(2)}`, label: "Balance" },
    { amount: `${totalTransactions}`, label: "Transactions" },
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
            <PieChart data={transactions} />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-1/2 shadow-sm shadow-slate-400 mt-4 p-4">
            <h1 className="text-2xl font-bold">Account - Balance</h1>
            <div className="flex justify-between mt-4">
              <LineChart data={transactions} />
            </div>
          </div>
          <div className="w-1/2 shadow-sm shadow-slate-400 mt-4 p-4">
            <h1 className="text-2xl font-bold">Income - Expense</h1>
            <div className="flex justify-between mt-4">
              <BarChart data={transactions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
