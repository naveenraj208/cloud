import React from "react";
import ExpenseCard from "../molecules/ExpenseCard";

interface Expense {
  id: number;
  title: string;
  amount: number;
}

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
  return (
    <div className="space-y-2">
      {expenses.map((expense) => (
        <ExpenseCard key={expense.id} title={expense.title} amount={expense.amount} />
      ))}
    </div>
  );
};

export default ExpenseList;
