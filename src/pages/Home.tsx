import DashBoard from "./Dashboard";
import MainPage from "./WelcomePage";
import SignUp from "./SignUp";
import About from "./About";
import Transactions from "./Transactions";
import { TransactionProvider } from "../context/TransactionContext";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Home() {
  return (
    <TransactionProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/dashboard/transactions" element={<Transactions />} />
          <Route path="/dashboard/about" element={<About />} />
        </Routes>
      </Router>
    </TransactionProvider>
  );
}

export default Home;
