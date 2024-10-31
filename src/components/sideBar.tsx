import { useState } from "react";
import GitHubImg from "/assets/github.png";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  balance: number;
}

const Sidebar = ({ balance }: SidebarProps) => {
  const location = useLocation(); // This gives the current location
  const [activeItem, setActiveItem] = useState(location.pathname);

  const handleClick = (path: string) => {
    setActiveItem(path);
  };

  return (
    <div className="w-80 shadow-lg shadow-slate-500 rounded-3xl">
      <div className="flex flex-col items-center w-80 min-h-screen py-8">
        <div className="flex flex-col items-center mt-4">
          {/* Wrap the image in an anchor tag to make it clickable */}
          <a
            href="https://github.com/SandeebAdhikari" // Replace with your GitHub profile URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={GitHubImg}
              alt="GitHub Profile"
              className="rounded-full w-36 border-4 border-black" // Add border-black class for black border
            />
          </a>
          <h1 className="text-center text-2xl font-bold mt-12">
            Sandeeb Adhikari
          </h1>
          <button className="rounded-lg hover:bg-slate-300 hover:text-white w-40 h-12 mt-2">
            <span className="text-xl">${balance}</span>
          </button>
        </div>
        <hr className="border-t border-white w-64 opacity-10 mt-16" />
        <ul className="w-52 space-y-8 text-center mt-24">
          <li
            className={`p-2 rounded-full text-xl ${
              activeItem === "/dashboard/" ? "bg-slate-300" : ""
            } hover:bg-slate-300 hover:text-white`}
          >
            <Link to="/dashboard/" onClick={() => handleClick("/dashboard/")}>
              Dashboard
            </Link>
          </li>
          <li
            className={`p-2 rounded-full text-xl ${
              activeItem === "/dashboard/transactions" ? "bg-slate-300" : ""
            } hover:bg-slate-300 hover:text-white`}
          >
            <Link
              to="/dashboard/transactions"
              onClick={() => handleClick("/dashboard/transactions")}
            >
              Transaction
            </Link>
          </li>
          <li
            className={`p-2 rounded-full text-xl ${
              activeItem === "/dashboard/about" ? "bg-slate-300" : ""
            } hover:bg-slate-300 hover:text-white`}
          >
            <Link
              to="/dashboard/about"
              onClick={() => handleClick("/dashboard/about")}
            >
              About
            </Link>
          </li>
        </ul>
        <hr className="border-t border-white w-64 opacity-10 mt-28 hover:text-white text-xl" />
      </div>
    </div>
  );
};

export default Sidebar;
