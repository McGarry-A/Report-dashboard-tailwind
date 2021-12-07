import { Doughnut } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

export const DonughtChart = () => {

    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgba(210, 4, 45, 0.3)',
            '#7393B3',
            '#eee'
          ],
          hoverOffset: 3,
          borderWidth: 1,

        }]
      };

      const config = {
        responsive: true,
        type: 'doughnut',
        data: data,
        elements: {
            arc: {
                borderWidth: 1,
                borderAlign: "left"
            }
        }
    };
    
    return (
        <div className="w-96 h-auto">
            <Doughnut data={data} optinos={config} />
        </div>
    )
};
