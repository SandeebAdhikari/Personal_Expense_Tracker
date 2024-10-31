import DashBoard from "./dashboard.tsx";
import MainPage from "./WelcomePage.tsx";
import SignUp from "../components/mainPage/SignUp.tsx";
import About from "./about.tsx";
import Transactions from "./transactions.tsx";
import { TransactionProvider } from "../context/TransactionContext.tsx";

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
