"use client";
import React, { useState } from "react";
import Sidebar from "./organisms/Sidebar";
import ExpenseForm from "./molecules/ExpenseForm";
import ExpenseList from "./organisms/ExpenseList";
import PredictionChart from "./organisms/PredictionChart";

interface Expense {
  id: number;
  title: string;
  amount: number;
  date: string;
}

const Home = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleAddExpense = (expense: Omit<Expense, "id">) => {
    setExpenses([...expenses, { id: Date.now(), ...expense }]);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-semibold mb-4">Dashboard</h2>
        <ExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseList expenses={expenses} />
        <PredictionChart expenses={expenses} />
      </main>
    </div>
  );
};

export default Home;
