"use client";

import React, { useState } from "react";

interface ExpenseFormProps {
  onAddExpense: (expense: { id: number; title: string; amount: number }) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount) return;

    const newExpense = {
      id: Date.now(), // ✅ Generate a unique ID
      title,
      amount: parseFloat(amount),
    };

    onAddExpense(newExpense); // ✅ Now `id` is included
    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        placeholder="Expense title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
