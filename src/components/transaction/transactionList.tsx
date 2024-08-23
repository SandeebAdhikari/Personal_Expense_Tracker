import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";

const TransactionList = ({ onSelectTransaction }) => {
  const { transactions } = useContext(TransactionContext);

  return (
    <div className="mt-6 border border-black rounded-xl">
      <table className="table-auto w-full">
        <thead className="border-r border-b border-slate-400 p-2">
          <tr>
            <th></th>
            <th className="text-center border border-slate-400 p-2 rounded-xl">
              Type
            </th>
            <th className="text-center border border-slate-400 p-2 rounded-xl">
              Date
            </th>
            <th className="text-center border border-slate-400 p-2 rounded-xl">
              Time
            </th>
            <th className="text-center border border-slate-400 p-2 rounded-xl">
              Category
            </th>
            <th className="text-center border border-slate-400 p-2">Amount</th>
            <th className="text-center border border-slate-400 p-2">
              Description
            </th>
            <th className="text-center border-b border-slate-400">
              Payment Mode
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border border-slate-400">
              <td className="p-2">
                <input
                  type="checkbox"
                  className="checkbox bg-slate-200 hover:bg-slate-300 "
                  onChange={() => onSelectTransaction(transaction)}
                />
              </td>
              <td className="text-center p-2 border border-slate-400">
                {transaction.transactionType.toUpperCase()}
              </td>
              <td className="text-center p-2 border border-slate-400">
                {transaction.date}
              </td>
              <td className="text-center p-2 border border-slate-400">
                {transaction.time}
              </td>
              <td className="text-center p-2 border border-slate-400">
                {transaction.category.toUpperCase()}
              </td>
              <td className="text-center p-2 border border-slate-400">
                ${transaction.amount.toFixed(2)}
              </td>
              <td className="text-center p-2 border border-slate-400">
                {transaction.description}
              </td>
              <td className="text-center p-2 border border-slate-400">
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
