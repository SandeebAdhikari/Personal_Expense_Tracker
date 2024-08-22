import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar ">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Expense Tracker</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <button
              className="btn btn-ghost size"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </li>
          <li>
            <button
              className="btn bg-slate-200 hover:bg-slate-300 h-12 rounded-xl text-black"
              onClick={() => navigate("/")}
            >
              Login
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
