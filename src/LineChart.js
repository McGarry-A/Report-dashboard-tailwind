import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
  },
  scales: {
      x: {
          ticks: {
            color:"white"
          },
          grid: {
              color: "grey",
          },
          title: {
            display:true,
            text:"Time",
            color: "white"
        }
          
      },
      y: {
          ticks:{
              color:"white",
          },
          grid: {
              color: "grey"
          },
          title: {
            display:true,
            text:"Revenue",
            color:"white"
        }
      }
  }
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      fill: true,
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
      borderColor: "rgb(210, 4, 45)",
      backgroundColor: "rgb(210, 4, 45)",
      tension:0.5
    },
  ],
};

export const LineChart = () => {
  return <Line options={options} data={data} />;
};
