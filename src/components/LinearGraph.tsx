import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
// import { ChartData } from 'chart.js';
import { useGraphData } from "../api/api";
import { ChartOptions } from "chart.js";

interface DataPoint {
  x: string;
  y: number;
}

interface HistoricalData {
  cases: Record<string, number>;
  deaths: Record<string, number>;
  recovered: Record<string, number>;
}

interface LineGraphProps {
  casesType?: "cases" | "deaths" | "recovered";
}
const option = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem: any, data: any) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          callback: function (value: number, index: number, values: any) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};
const LineGraph: React.FC<LineGraphProps> = () => {
    const { data, isError, isLoading } = useGraphData();
    
    const buildChartData = (
        data: HistoricalData,
        caseType: "cases" | "deaths" | "recovered"
        ): DataPoint[] => {
            const chartData: DataPoint[] = [];
            let lastPoint: number | undefined;
            
            for (const date in data[caseType]) {
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
        
        const chartData = buildChartData(data, "cases");
  console.log(chartData);
  const chardData = {
      labels: data?.labels,
        datasets: [
          {
            label: 'Cases',
            data: data?.cases,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
    };
    const chartOptions = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
  console.log(chartData);
  if (isError) {
      return <div>Error fetching data...</div>;
  }
  
  if (isLoading || !data) {
      return <div>Loading...</div>;
    }
  return (
    <div>
      {chartData?.length > 0 && (
         <Line data={chardData} options={chartOptions} />
         )}
    </div>
  );
};

export default LineGraph;
