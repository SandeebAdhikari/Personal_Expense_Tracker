import Login from "../components/mainPage/login";
import NavBar from "../components/mainPage/navBar";
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
