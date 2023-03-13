import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scaleShowVerticalLines: false,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
    scales: {
      x: {
        font: {
          size: 14,
        },
        grid: {
          display: false,
        },
        display: true,
      },
      y: {
        grid: {
          display: true,
        },
        display: true,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [10, 20, 30, 40, 50, 60, 30],
      backgroundColor: "#27B3AA",
      borderWidth: 1,
      borderRadius: 20,
      pointHoverRadius: 8,
    },
    {
      label: "Dataset 2",
      data: [10, 20, 30, 40, 50, 20, 40],
      backgroundColor: "#6160DC",
      borderWidth: 1,
      borderRadius: 20,
      pointHoverRadius: 8,
    },
  ],
};

export default function BarChart() {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}
