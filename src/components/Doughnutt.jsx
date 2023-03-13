import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [763, 321, 69, 154, 696],
      backgroundColor: [
        '#6160DC',
        '#22242C',
        '#54C5EB',
        '#FFB74A',
        '#FF4A55',
      ],
      borderColor: [
        '#6160DC',
        '#22242C',
        '#54C5EB',
        '#FFB74A',
        '#FF4A55',
      ],
      borderWidth: 1,
    },
  ],
};

export function Doughnutt() {
  return <Doughnut data={data} />;
}
