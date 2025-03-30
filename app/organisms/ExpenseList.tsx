import React from "react";
import ExpenseCard from "../molecules/ExpenseCard";

interface Expense {
  id: number;
  title: string;
  amount: number;
  date: string;
  category: string;
}

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
  const categorizedExpenses: { [category: string]: Expense[] } = {};

  // Categorize expenses
  expenses.forEach((expense) => {
    if (!categorizedExpenses[expense.category]) {
      categorizedExpenses[expense.category] = [];
    }
    categorizedExpenses[expense.category].push(expense);
  });

  return (
    <div className="space-y-4">
      {Object.entries(categorizedExpenses).map(([category, expenses]) => (
        <div key={category} className="p-4 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold">{category}</h3>
          {expenses.map((expense) => (
            <ExpenseCard key={expense.id} title={expense.title} amount={expense.amount} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
