import { useState, useEffect, useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";

const TransactionModal = ({ isOpen, onClose, onSubmit, transaction }) => {
  const [transactionType, setTransactionType] = useState("expense");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [paymentMode, setPaymentMode] = useState("cash");

  const { addTransaction, updateTransaction } = useContext(TransactionContext);

  useEffect(() => {
    if (transaction) {
      setTransactionType(transaction.transactionType);
      setDate(transaction.date);
      setTime(transaction.time);
      setCategory(transaction.category);
      setAmount(transaction.amount.toString());
      setDescription(transaction.description);
      setPaymentMode(transaction.paymentMode);
    } else {
      setTransactionType("expense");
      setDate("");
      setTime("");
      setCategory("");
      setAmount("");
      setDescription("");
      setPaymentMode("cash");
    }
  }, [transaction]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const transactionData = {
      id: transaction ? transaction.id : Date.now(), // Use the existing ID if editing
      transactionType,
      date,
      time,
      category,
      amount: parseFloat(amount),
      description,
      paymentMode,
    };

    if (transaction) {
      updateTransaction(transactionData);
    } else {
      addTransaction(transactionData);
    }

    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="p-8 rounded-lg w-1/2 bg-[#f0f4f8] shadow-sm shadow-slate-500">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {transaction ? "Edit Transaction" : "New Transaction"}
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-96 mb-8">
            <label className="flex mr-4">
              <input
                type="radio"
                name="transactionType"
                value="income"
                className="radio border-black"
                checked={transactionType === "income"}
                onChange={() => setTransactionType("income")}
              />
              <span className="ml-2">Income</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="transactionType"
                value="expense"
                className="radio border-black "
                checked={transactionType === "expense"}
                onChange={() => setTransactionType("expense")}
              />
              <span className="ml-2">Expense</span>
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1">Choose a Date</label>
              <input
                type="date"
                className="bg-slate-200 hover:bg-slate-300 h-12 rounded-xl p-2 w-full"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1">Choose a Time</label>
              <input
                type="time"
                className="bg-slate-200 hover:bg-slate-300 h-12 rounded-xl p-2 w-full"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1">Select a Category</label>
              <select
                className="bg-slate-200 hover:bg-slate-300 h-12 rounded-xl p-2 w-full"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select a Category</option>
                <option>Salary</option>
                <option>Mortgage / Rent</option>
                <option>Food</option>
                <option>Utilities</option>
                <option>Bills</option>
                <option>Shopping</option>
                <option>Transportation</option>
                <option>Insurance</option>
                <option>Health Care</option>
                <option>Clothing</option>
                <option>Others</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Enter an Amount</label>
              <input
                type="number"
                className="bg-slate-200 hover:bg-slate-300 h-12 rounded-xl p-2 w-full"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-1">Description</label>
            <textarea
              className="textarea bg-slate-200 hover:bg-slate-300 w-full"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-8">
            <label className="block mb-1">Payment Mode</label>
            <div className="flex justify-between w-3/4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMode"
                  value="cash"
                  className="radio border-black"
                  checked={paymentMode === "cash"}
                  onChange={() => setPaymentMode("cash")}
                />
                <span className="ml-2">Cash</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMode"
                  value="debit-card"
                  className="radio border-black"
                  checked={paymentMode === "debit-card"}
                  onChange={() => setPaymentMode("debit-card")}
                />
                <span className="ml-2">Debit Card</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMode"
                  value="credit-card"
                  className="radio border-black"
                  checked={paymentMode === "credit-card"}
                  onChange={() => setPaymentMode("credit-card")}
                />
                <span className="ml-2">Credit Card</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="submit"
              className="btn border shadow-sm shadow-slate-500 btn-ghost w-24"
            >
              {transaction ? "Update" : "Add"}
            </button>
            <button
              type="button"
              className="w-24 btn shadow-sm shadow-slate-500"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransactionModal;
