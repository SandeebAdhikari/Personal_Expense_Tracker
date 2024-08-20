const TransactionList = ({ transactions }) => {
  return (
    <div className="mt-6">
      <table className="table-auto w-full">
        <thead className=" ">
          <tr>
            <th className="text-center border-x border-slate-400">Type</th>
            <th className="text-center border-r border-slate-400">Date</th>
            <th className="text-center border-r border-slate-400">Time</th>
            <th className="text-center border-r border-slate-400">Category</th>
            <th className="text-center border-r border-slate-400">Amount</th>
            <th className="text-center border-r border-slate-400">
              Description
            </th>
            <th className="text-center border-r border-slate-400">
              Payment Mode
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="text-center">
                {transaction.transactionType.toUpperCase()}
              </td>
              <td className="text-center">{transaction.date}</td>
              <td className="text-center">{transaction.time}</td>
              <td className="text-center">
                {transaction.category.toUpperCase()}
              </td>
              <td className="text-center">{transaction.amount}</td>
              <td className="text-center">
                {transaction.description.toUpperCase()}
              </td>
              <td className="text-center">
                {transaction.paymentMode.toUpperCase()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
