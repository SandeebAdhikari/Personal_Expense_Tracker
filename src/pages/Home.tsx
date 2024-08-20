import DashBoard from "./dashboard";
import MainPage from "./mainPage";
import SignUp from "./SignUp";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default Home;
