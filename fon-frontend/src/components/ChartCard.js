import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function ChartCard({ chartData }) {
  return (
    <div className="card">
      <h1>Bar Chart</h1>
      <Bar data={chartData} />
    </div>
  );
}

export default ChartCard;
