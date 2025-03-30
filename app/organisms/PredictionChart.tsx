"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface PredictionChartProps {
  expenses: { amount: number; date: string }[];
}

const PredictionChart: React.FC<PredictionChartProps> = ({ expenses }) => {
  const dates = expenses.map((exp) => exp.date);
  const amounts = expenses.map((exp) => exp.amount);
  
  // Generate future prediction (basic trend analysis)
  const futureDates = [...dates, "Future 1", "Future 2"];
  const predictedAmounts = [...amounts, amounts[amounts.length - 1] * 1.1, amounts[amounts.length - 1] * 1.2];

  const data = {
    labels: futureDates,
    datasets: [
      {
        label: "Expense Trend",
        data: predictedAmounts,
        borderColor: "blue",
        fill: false,
      },
    ],
  };

  return (
    <div className="mt-6 p-4 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold mb-3">Expense Prediction</h3>
      <Line data={data} />
    </div>
  );
};

export default PredictionChart;
