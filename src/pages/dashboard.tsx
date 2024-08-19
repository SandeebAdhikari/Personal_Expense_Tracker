import SideBar from "../components/sideBar";

const DashBoard = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col m-6 w-full">
        <h1>Dashboard</h1>
        <div className="flex justify-between mt-4 w-full gap-4">
          <div className="w-1/4 border p-4 text-center">
            <h1 className="text-xl">$21340</h1>
            <p>Income</p>
          </div>
          <div className="w-1/4 border p-4 text-center">
            <h1 className="text-xl">$21340</h1>
            <p>Income</p>
          </div>
          <div className="w-1/4 border p-4 text-center">
            <h1 className="text-xl">$21340</h1>
            <p>Income</p>
          </div>
          <div className="w-1/4 border p-4 text-center">
            <h1 className="text-xl">$21340</h1>
            <p>Income</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
