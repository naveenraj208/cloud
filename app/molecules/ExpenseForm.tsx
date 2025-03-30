"use client";
import React, { useState } from "react";

interface ExpenseFormProps {
  onAddExpense: (expense: { title: string; amount: number; date: string; category: string }) => void;
}

const categories = [
  "Food",
  "Transport",
  "Shopping",
  "Health",
  "Entertainment",
  "Bills",
  "Education",
  "Rent",
  "Travel",
  "Groceries",
  "Other",
];

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState(categories[0]); // Default category

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount || !date) return;

    onAddExpense({
      title,
      amount: parseFloat(amount),
      date,
      category,
    });

    setTitle("");
    setAmount("");
    setDate("");
    setCategory(categories[0]); // Reset category
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-lg rounded-lg mb-4 transition-opacity duration-500 hover:opacity-80">
      <input type="text" placeholder="Expense Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 w-full mb-2" />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="border p-2 w-full mb-2" />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border p-2 w-full mb-2" />
      
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 w-full mb-2">
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <button type="submit" className="bg-blue-600 text-white p-2 w-full rounded">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
