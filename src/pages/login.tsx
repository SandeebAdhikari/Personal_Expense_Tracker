import NavBar from "../components/navBar";
const Login = () => {
  return (
    <>
      <NavBar />
      <div className="h-screen">
        <div className="flex justify-center">
          <div className="glass w-96 border shadow-sm shadow-orange-50 rounded-lg">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-center">
                <button className="btn">LOG IN</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
