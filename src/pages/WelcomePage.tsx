import Login from "../components/login";
import NavBar from "../components/navBar";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate("/dashboard"); // Replace with the desired route
  };
  return (
    <div>
      <NavBar />
      <Login onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default MainPage;
