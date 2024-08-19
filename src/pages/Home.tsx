import NavBar from "../components/NavBar"; // Adjust the import as needed
import DashBoard from "./dashboard";
import Login from "./login"; // Import your Login component
import SignUp from "./signUp"; // Import your SignUp component

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
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

export default App;
