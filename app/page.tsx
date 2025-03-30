"use client";
import React, { useState } from "react";
import Sidebar from "./organisms/Sidebar";
import ExpenseForm from "./molecules/ExpenseForm";
import ExpenseList from "./organisms/ExpenseList";
import PredictionChart from "./organisms/PredictionChart";
import CategoryPieChart from "./organisms/CategoryPieChart.tsx";

interface Expense {
  id: number;
  title: string;
  amount: number;
  date: string;
  category: string;
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
        
        {/* Category Visualization */}
        <h2 className="text-3xl font-semibold mt-6">Category Visualization</h2>
        <CategoryPieChart expenses={expenses} />

        {/* Expense Prediction Chart */}
        <h2 className="text-3xl font-semibold mt-6">Expense Prediction</h2>
        <PredictionChart expenses={expenses} />
      </main>
    </div>
  );
};

export default Home;
