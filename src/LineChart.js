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
      
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
      borderColor: "rgb(210, 4, 45)",
      backgroundColor: "rgb(210, 4, 45)",
      tension:0.2,
      borderWidth: 1.5,
    },
    {
      label: "Dataset 2",
      
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
      borderColor: "#7393B3",
      backgroundColor: "#7393B3",
      tension:0.2,
      borderWidth: 1.5,
      borderDash: [10,10]
    },
  ],
};

export const LineChart = () => {
  return <Line options={options} data={data} />;
};
