"use client";
import React, { useState } from "react";

interface ExpenseFormProps {
  onAddExpense: (expense: { title: string; amount: number; date: string }) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount || !date) return;

    onAddExpense({
      title,
      amount: parseFloat(amount),
      date,
    });

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-lg rounded-lg mb-4 transition-opacity duration-500 hover:opacity-80">
      <input type="text" placeholder="Expense Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 w-full mb-2" />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="border p-2 w-full mb-2" />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border p-2 w-full mb-2" />
      <button type="submit" className="bg-blue-600 text-white p-2 w-full rounded">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
