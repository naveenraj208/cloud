import React from "react";

interface ExpenseCardProps {
  title: string;
  amount: number;
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({ title, amount }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">₹{amount}</p>
    </div>
  );
};

export default ExpenseCard;
