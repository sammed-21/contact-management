import React from 'react';
import { Line } from 'react-chartjs-2';

// import { CategoryScale, Chart } from "chart.js";
import {  useGraphData } from '../api/api';

import { Chart, LineController, LineElement, PointElement, LinearScale, Title,CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);
Chart.register(CategoryScale);
interface DataPoint {
  x: string;
  y: number;
}

interface LineGraphProps {
  casesType?: string;
}

const LineGraph: React.FC<LineGraphProps> = () => {

  const { data, error,isLoading } = useGraphData();
  if (error) {
    return <div>Error in the graph line</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  const buildChartData = (data: any, caseType: string): DataPoint[] => {
    const chartData: DataPoint[] = [];
    let lastPoint: number | undefined;
    
    for (let date in data.cases) {
      if (lastPoint) {
        const newPoint: DataPoint = {
          x: date,
          y: data[caseType][date] - lastPoint,
        };
      
        chartData.push(newPoint);
      }
      lastPoint = data[caseType][date];
    }
    return chartData;
  };
  const newdata = buildChartData(data,'cases');
  

  // const options = {
  //   legend: {
  //       display: false,
  //   },
  //   elements: {
  //       point: {
  //           radius: 0,
  //       },
  //   },
  //   maintainAspectRatio: false,
  //   tooltips: {
  //       mode: "index",
  //       intersect: false,
  //       callbacks: {
  //           label: function (tooltipItem: { value: any; }, data: any) {
  //               return numeral(tooltipItem.value).format("+0,0");
  //           },
  //       },
  //   },
  //   scales: {
  //       xAxes: [
  //           {
  //               type: "time",
  //               time: {
  //                   format: "MM/DD/YY",
  //                   tooltipFormat: "ll",
  //               },
  //           },
  //       ],
  //       yAxes: [
  //           {
  //               gridLines: {
  //                   display: false,
  //               },
  //               ticks: {
  //                   callback: function (value: any) {
  //                       return numeral(value).format("0a");
  //                   },
  //               },
  //           },
  //       ],
  //   },
  // };


  return (
    < >
      <div>
      {newdata?.length > 0 && (
        <Line
      // options={options}
          data={{
            datasets: [
              {
                backgroundColor: 'rgba(204, 16, 52, 0.5)',
                borderColor: '#CC1034',
                data: newdata,
                fill: true,
              },
            ],
          }}
        />
      )}
    </div>
    </>
  )


}
export default LineGraph


