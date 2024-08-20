import { useState } from "react";
import Sidebar from "../components/sideBar";
import TransactionModal from "../components/transaction/addTransactionModal";
import TransactionList from "../components/transaction/transactionList";

const Transactions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col m-6 w-full">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <div className="flex mt-6 gap-2 w-full">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-10/12"
          />
          <button className="btn w-64" onClick={openModal}>
            <span className="text-xl">ADD TRANSACTION</span>
          </button>
        </div>
        <TransactionModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSubmit={handleAddTransaction}
        />
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
};

export default Transactions;
