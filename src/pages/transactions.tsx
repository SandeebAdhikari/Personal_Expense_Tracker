import { useState, useContext } from "react";
import Sidebar from "../components/sideBar";
import TransactionModal from "../components/transaction/addTransactionModal";
import TransactionList from "../components/transaction/transactionList";
import { TransactionContext } from "../context/TransactionContext";

const Transactions = () => {
  const {
    transactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    balance,
  } = useContext(TransactionContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setIsEditing(false);
    setSelectedTransaction(null);
  };

  const handleAddTransaction = (transaction) => {
    if (isEditing) {
      updateTransaction(transaction);
    } else {
      addTransaction(transaction);
    }
    closeModal();
  };

  const handleEditClick = () => {
    if (selectedTransaction) {
      setIsEditing(true);
      openModal();
    }
  };

  const handleDeleteClick = () => {
    if (selectedTransaction) {
      deleteTransaction(selectedTransaction.id);
      setSelectedTransaction(null); // Clear selection after deleting
    }
  };

  const handleSelectTransaction = (transaction) => {
    setSelectedTransaction(transaction); // Set the selected transaction
  };

  return (
    <div className="flex">
      <Sidebar balance={balance} />
      <div className="flex flex-col m-6 w-full">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <div className="flex h-12 mt-6 gap-2 w-full">
          <input
            type="text"
            placeholder="Search"
            className="bg-slate-200 hover:bg-slate-300 rounded-xl w-10/12 p-4"
          />
          <button
            className="bg-slate-200 hover:bg-slate-300 w-64 rounded-xl"
            onClick={openModal}
          >
            <span className="text-xl">ADD TRANSACTION</span>
          </button>
        </div>
        <div className="flex flex-row-reverse mt-6 px-10 gap-4 w-full">
          <button
            className=" bg-slate-200 hover:bg-slate-300 disabled:cursor-not-allowed p-2 w-48 rounded-xl"
            onClick={handleDeleteClick}
            disabled={!selectedTransaction}
          >
            DELETE
          </button>
          <button
            className="bg-slate-200 hover:bg-slate-300 disabled:cursor-not-allowed p-2 w-48 rounded-xl"
            onClick={handleEditClick}
            disabled={!selectedTransaction}
          >
            EDIT
          </button>
        </div>
        <TransactionModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSubmit={handleAddTransaction}
          transaction={selectedTransaction} // Pass current transaction for editing
        />
        <TransactionList
          transactions={transactions}
          onSelectTransaction={handleSelectTransaction} // Ensure selection works
        />
      </div>
    </div>
  );
};

export default Transactions;
