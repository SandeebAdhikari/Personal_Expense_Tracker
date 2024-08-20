const TopCard = ({ amount, label }) => {
  return (
    <div className="w-80 mt-6 flex flex-col justify-center items-center rounded-lg h-32 shadow-sm shadow-slate-400">
      <h1 className="text-2xl">{amount}</h1>
      <p>{label}</p>
    </div>
  );
};

export default TopCard;
