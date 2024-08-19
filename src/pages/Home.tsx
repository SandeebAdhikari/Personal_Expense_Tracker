import NavBar from "../components/NavBar";
import DashBoard from "./dashboard";
import Login from "./login";
import SignUp from "./SignUp";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Home() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default Home;
