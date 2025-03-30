"use client";  // ✅ Add this at the top

import React, { useState } from "react";
import Header from "./organisms/Header";
import ExpenseForm from "./molecules/ExpenseForm";
import ExpenseList from "./organisms/ExpenseList";

// Define Expense interface outside the component
interface Expense {
  id: number;
  title: string;
  amount: number;
}

const Home = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleAddExpense = (expense: Expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div>
      <Header />
      <main className="p-4">
        <h2 className="text-2xl mb-4">Add New Expense</h2>
        <ExpenseForm onAddExpense={handleAddExpense} />
        <h2 className="text-2xl mt-4">Expenses</h2>
        <ExpenseList expenses={expenses} />
      </main>
    </div>
  );
};

export default Home;
