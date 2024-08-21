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
      <div className="glass w-96 border shadow-sm shadow-orange-50 rounded-lg">
        <div className="card-body">
          <h2 className="card-title text-center">Login</h2>
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full mt-4"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full mt-4"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="card-actions justify-center mt-6">
            <button
              className="btn btn-primary"
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
