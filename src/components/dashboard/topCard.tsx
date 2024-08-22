const TopCard = ({ amount, label }) => {
  return (
    <div className="w-80 mt-6 flex flex-col justify-center items-center rounded-3xl h-32 shadow-lg shadow-slate-500">
      <h1 className="text-2xl">{amount}</h1>
      <p>{label}</p>
    </div>
  );
};

export default TopCard;
