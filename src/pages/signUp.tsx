const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="glass w-96 border shadow-sm shadow-orange-50 rounded-lg">
        <div className="card-body">
          <h2 className="card-title text-center">Sign Up</h2>
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full mt-4"
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full mt-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full mt-4"
          />
          <input
            type="password"
            placeholder="Re-enter Password"
            className="input input-bordered w-full mt-4"
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
