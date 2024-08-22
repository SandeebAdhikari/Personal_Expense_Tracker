import { useState } from "react";

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock login validation
    if (email === "admin" && password === "admin") {
      onLoginSuccess();
    } else {
      alert("Invalid email or password");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/4 h-1/2 flex flex-col items-center justify-center border shadow-sm shadow-slate-300 rounded-2xl">
        <div className="flex flex-col justify-center item-center w-3/4 gap-5">
          <h2 className="text-3xl font-bold text-center">Login</h2>
          <input
            type="text"
            placeholder="Username"
            className="bg-slate-200 hover:bg-slate-300 w-full h-12 rounded-xl p-2 "
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-slate-200 hover:bg-slate-300 w-full h-12 rounded-xl p-2 "
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className=" flex justify-center mt-6">
            <button
              className="bg-slate-200 hover:bg-slate-300 w-32 h-12 rounded-xl"
              onClick={handleLogin}
              disabled={!email || !password}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
