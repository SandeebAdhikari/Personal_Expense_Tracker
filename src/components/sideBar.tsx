import GitHubImg from "/assets/github.png";
import { Link } from "react-router-dom";
import { useContext } from "react";

const Sidebar = ({ balance }) => {
  return (
    <div className="w-80 shadow-lg shadow-slate-500 rounded-3xl">
      <div className="flex flex-col items-center w-80 min-h-screen py-8">
        <div className="flex flex-col items-center mt-4">
          <img src={GitHubImg} alt="random" className="rounded-full w-36" />
          <h1 className="text-center text-2xl font-bold mt-12">
            Sandeeb Adhikari
          </h1>
          <button className="rounded-lg hover:bg-slate-300 hover:text-white w-40 h-12 mt-2">
            <span className="text-xl">${balance}</span>
          </button>
        </div>
        <hr className="border-t border-white w-64 opacity-10 mt-16" />
        <ul className="w-52 space-y-8 text-center mt-24">
          <li className="p-2 rounded-full hover:bg-slate-300 hover:text-white text-xl">
            <Link to="/dashboard/">Dashboard</Link>
          </li>
          <li className="p-2 rounded-full hover:bg-slate-300 hover:text-white text-xl">
            <a href="/dashboard/transactions">Transaction</a>
          </li>
          <li className="p-2 rounded-full hover:bg-slate-300 hover:text-white text-xl">
            <a href={`/dashboard/about/`}>About</a>
          </li>
        </ul>
        <hr className="border-t border-white w-64 opacity-10 mt-28 hover:text-white text-xl" />
      </div>
    </div>
  );
};

export default Sidebar;
