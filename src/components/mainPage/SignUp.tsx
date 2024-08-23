const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/4 h-1/2 flex flex-col items-center justify-center border shadow-sm shadow-slate-300 rounded-2xl">
        <div className="flex flex-col justify-center item-center w-3/4 gap-5">
          <h2 className=" text-3xl font-bold text-center">Sign Up</h2>
          <input
            type="text"
            placeholder="Username"
            className="bg-slate-200 hover:bg-slate-300 rounded-xl w-10/12 p-4"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-slate-200 hover:bg-slate-300 rounded-xl w-10/12 p-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-slate-200 hover:bg-slate-300 rounded-xl w-10/12 p-4"
          />
          <input
            type="password"
            placeholder="Re-enter Password"
            className="bg-slate-200 hover:bg-slate-300 rounded-xl w-10/12 p-4"
          />
          <div className="card-actions justify-center mt-6">
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
