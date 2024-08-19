import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Expense Tracker</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2">
          <button
            className="btn btn-ghost size"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
          <button
            className="btn btn-active size"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
