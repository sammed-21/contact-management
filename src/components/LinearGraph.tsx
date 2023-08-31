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
  // this is the function which get the contact[] and then it convert it into 
  // the way chart.js format with x and y coordinates divided 
  const buildChartData = (data: any, caseType: string): DataPoint[] => {
    const chartData: DataPoint[] = [];
    let lastPoint: number | undefined;
    // data has 3 object with cases || deaths ||recovered
    for (let date in data.cases) {
      if (lastPoint) {
        const newPoint: DataPoint = {
          x: date,
          y: data[caseType][date] - lastPoint,
        };
      // it get the prev date case with current day case and subtract it to get the different
        chartData.push(newPoint);
        // add it to the new chartData which formatted according to the chart.js
      }
      lastPoint = data[caseType][date];
    }
    return chartData;
  };
  const newdata = buildChartData(data,'cases');
  

   

  return (
    < >
      <div>
      {newdata?.length > 0 && (
        <Line
     
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


