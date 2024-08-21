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
    setSelectedTransaction(transaction);
    setIsEditing(true);
    openModal();
  };

  const handleDeleteClick = () => {
    if (selectedTransaction) {
      deleteTransaction(selectedTransaction.id);
      setSelectedTransaction(null);
    }
  };

  return (
    <div className="flex">
      <Sidebar balance={balance} />
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
        <div className="flex flex-row-reverse mt-6 px-10 gap-4 w-full">
          <button
            className="btn"
            onClick={handleDeleteClick}
            disabled={!selectedTransaction}
          >
            DELETE
          </button>
          <button
            className="btn"
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
          onSelectTransaction={handleEditClick}
        />
      </div>
    </div>
  );
};

export default Transactions;
