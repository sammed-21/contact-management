// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { useGraphData } from '../api/api';

// const LineGraph: React.FC = () => {
//   const { data: graphData, error, isLoading } = useGraphData();

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>An error occurred during data fetch</div>;
//   }

//   const chartData = {
//     labels: Object.keys(graphData.cases),
//     datasets: [
//       {
//         label: 'Cases',
//         data: Object.values(graphData.cases),
//         borderColor: 'blue',
//         fill: false,
//       },
//     ],
//   };

//   const option = {
//     scales: {
//       x: {
//         type: 'time',
//         time: {
//           unit: 'day',
//           stepSize: 7,
//         },
//         title: {
//           display: true,
//           text: 'Date',
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Cases',
//         },
//       },
//     },
//   };

//   return (
//     <div className="my-4">
//       <Line data={chartData} options={option} />
//     </div>
//   );
// };

// export default LineGraph;
