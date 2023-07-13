import React from 'react';
import { Box } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const FundingChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: ['0', '£1k', '£2k', '£3k'],
        backgroundColor: 'transparent',
        border: '1px dashed #485155',
        pointBorderColor: 'transparent',
        pointBorderWidth: 4,
        tension: 0.5,
      },
    ],
  };
  const options: any = {
    Plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        min: 2,
        max: 10,
        ticks: {
          stepSize: 2,
          callback: (value: any) => value + 'k',
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };
  return (
    <Box
      bg="#232629"
      maxW="411px"
      h="239px"
      p="32px 0px 24px 30px"
      borderRadius="30px"
    >
      <Line data={data} options={options}></Line>
    </Box>
  );
};

export default FundingChart;
