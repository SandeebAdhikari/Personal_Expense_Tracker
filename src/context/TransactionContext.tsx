import React, { createContext, useState, useEffect } from "react";
import { ReactNode } from "react";

export interface Transaction {
  id: string;

  transactionType: "income" | "expense" | string;

  date: string;

  time: string;

  category: string;

  amount: number;

  description: string;

  paymentMode: string;
}

interface TransactionContextType {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  updateTransaction: (transaction: Transaction) => void;
  deleteTransaction: (id: string) => void;
  income: number;
  expenses: number;
  balance: number;
}

export const TransactionContext = createContext<TransactionContextType>({
  transactions: [],
  addTransaction: () => {},
  updateTransaction: () => {},
  deleteTransaction: () => {},
  income: 0,
  expenses: 0,
  balance: 0,
});

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const storedTransactions =
      JSON.parse(localStorage.getItem("transactions") || "[]") || [];
    setTransactions(storedTransactions);
  }, []);

  useEffect(() => {
    if (transactions.length > 0) {
      localStorage.setItem("transactions", JSON.stringify(transactions));
    }
  }, [transactions]);

  const income = transactions
    .filter((transaction) => transaction.transactionType === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const expenses = transactions
    .filter((transaction) => transaction.transactionType === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const balance = income - expenses;

  const addTransaction = (transaction: Transaction) => {
    const updatedTransactions = [...transactions, transaction];
    setTransactions(updatedTransactions);
  };

  const updateTransaction = (updatedTransaction: Transaction) => {
    const updatedTransactions = transactions.map((transaction) =>
      transaction.id === updatedTransaction.id
        ? updatedTransaction
        : transaction
    );
    setTransactions(updatedTransactions);
  };

  const deleteTransaction = (id: string) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransaction,
        updateTransaction,
        deleteTransaction,
        income,
        expenses,
        balance,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
