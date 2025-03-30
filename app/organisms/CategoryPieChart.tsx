"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface CategoryPieChartProps {
  expenses: { amount: number; category: string }[];
}

const CategoryPieChart: React.FC<CategoryPieChartProps> = ({ expenses }) => {
  // Sum expenses by category
  const categoryTotals: { [category: string]: number } = {};

  expenses.forEach((expense) => {
    if (!categoryTotals[expense.category]) {
      categoryTotals[expense.category] = 0;
    }
    categoryTotals[expense.category] += expense.amount;
  });

  const labels = Object.keys(categoryTotals);
  const dataValues = Object.values(categoryTotals);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Expenses by Category",
        data: dataValues,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(0, 255, 127, 0.6)",
          "rgba(220, 20, 60, 0.6)",
          "rgba(128, 128, 0, 0.6)",
          "rgba(0, 255, 255, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="mt-6 p-4 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold mb-3">Expenses by Category</h3>
      <Pie data={data} />
    </div>
  );
};

export default CategoryPieChart;
