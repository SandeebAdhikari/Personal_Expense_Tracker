import Login from "../components/mainPage/login";
import NavBar from "../components/mainPage/navBar";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate("/dashboard");
  };
  return (
    <div>
      <NavBar />
      <Login onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default MainPage;
