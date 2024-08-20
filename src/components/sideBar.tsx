import GitHubImg from "/assets/github.png";

const Sidebar = () => {
  return (
    <div className="w-80 shadow-sm shadow-slate-400 ">
      <div className="flex flex-col items-center w-80 min-h-screen py-8">
        <div className="flex flex-col items-center mt-4">
          <img src={GitHubImg} alt="random" className="rounded-full w-36" />
          <h1 className="text-center text-2xl font-bold mt-2">
            Sandeeb Adhikari
          </h1>
          <button className="btn rounded-lg w-40 mt-2">
            <span className="text-xl">$5,400</span>
          </button>
        </div>
        <hr className="border-t border-white w-64 opacity-10 mt-16" />
        <ul className="w-52 space-y-8 text-center mt-28">
          <li className="p-2 rounded-full hover:bg-blue-800">
            <a href={`/mainDashBoard/`}>Dashboard</a>
          </li>
          <li className="p-2 rounded-full hover:bg-blue-800">
            <a href={`/mainDashBoard/`}>Transaction</a>
          </li>
          <li className="p-2 rounded-full hover:bg-blue-800">
            <a href={`/mainDashBoard/`}>About</a>
          </li>
        </ul>
        <hr className="border-t border-white w-64 opacity-10 mt-28" />
      </div>
    </div>
  );
};

export default Sidebar;