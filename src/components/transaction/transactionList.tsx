import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
const TransactionList = ({ onSelectTransaction }) => {
  const { transactions } = useContext(TransactionContext);
  return (
    <div className="mt-6">
      <table className="table-auto w-full">
        <thead className=" ">
          <tr>
            <th></th>
            <th className="text-center border-r border-slate-400 p-2">Type</th>
            <th className="text-center border-r border-slate-400 p-2">Date</th>
            <th className="text-center border-r border-slate-400 p-2">Time</th>
            <th className="text-center border-r border-slate-400 p-2">
              Category
            </th>
            <th className="text-center border-r border-slate-400 p-2">
              Amount
            </th>
            <th className="text-center border-r border-slate-400 p-2">
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
              <td className="p-2">
                <input
                  type="checkbox"
                  className="checkbox "
                  onChange={() => onSelectTransaction(transaction)}
                />
              </td>
              <td className="text-center p-2">
                {transaction.transactionType.toUpperCase()}
              </td>
              <td className="text-center p-2">{transaction.date}</td>
              <td className="text-center p-2">{transaction.time}</td>
              <td className="text-center p-2">
                {transaction.category.toUpperCase()}
              </td>
              <td className="text-center p-2">{transaction.amount}</td>
              <td className="text-center p-2">{transaction.description}</td>
              <td className="text-center p-2">
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
