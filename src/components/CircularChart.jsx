import React, { useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';

// const data = {
//     labels: ['Completed', 'Remaining'],
//     datasets: [
//         {
//             data: [78, 22], // Adjust these values based on your data
//             backgroundColor: ['#36A2EB', '#eaeaea'], // Adjust colors as needed
//             hoverBackgroundColor: ['#36A2EB', '#eaeaea'],
//         },
//     ],
// };

ChartJS.register( ArcElement, Tooltip, Legend );

const options = {
    cutout: '75%', // Adjust the cutout percentage to control the size of the hole
    plugins: {
        responsive: true,
        legend: {
            display: false,
        },
    },
    // onRender: (chart) => {
    //     const ctx = chart.ctx;
    
    //     // Center text
    //     const text = '74';
    //     const textX = Math.round((chart.chartArea.left + chart.chartArea.right) / 2);
    //     const textY = Math.round((chart.chartArea.top + chart.chartArea.bottom) / 2);
    
    //     // Draw text in the center
    //     ctx.textAlign = 'center';
    //     ctx.textBaseline = 'middle';
    //     ctx.font = '20px Arial';
    //     ctx.fillStyle = '#000';
    //     ctx.fillText(text, textX, textY);
    //   },
};

// const textCenter = {
//     id: 'textCenter',
//     beforeDatasetsDraw(chart, args, pluginOptions) {
//           const {ctx, data} = chart;
//           ctx.save();
//           ctx.font = 'bold 20px "Work Sans"';
//           ctx.fillStyle = 'black';
//           ctx.textAlign = 'center';
//           ctx.textBaseline = 'middle';
//           ctx.fillText('text', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
//     }
// }

const CircularChart = ({ dataset, text }) => {

    const data = {
        //labels: ['Completed', 'Remaining'],
        datasets: [
            {
                data: dataset, // Adjust these values based on your data
                backgroundColor: ['#66d3ad', '#daf8ee'], // Adjust colors as needed
                hoverBackgroundColor: ['#66d3af', '#daf8ef'],
            },
        ],
    };

    const textCenter = {
        id: 'textCenter',
        beforeDatasetsDraw(chart, args, pluginOptions) {
              const {ctx, data} = chart;
              ctx.save();
              ctx.font = 'bold 15px "Work Sans"';
              ctx.fillStyle = 'black';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillText(`${dataset[0]}%`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
        }
    }
    

    // const chartRef = useRef(null);

    // useEffect(() => {
    //     // Access chartRef.current for any additional setup if needed
    //   }, []);

    // useEffect(() => {
    //     const chart = chartRef.current.chartInstance;
    //     const ctx = chart.ctx;

    //     // Center text
    //     const text = `${dataset[0]}%`;
    //     const textX = Math.round((chart.chartArea.left + chart.chartArea.right) / 2);
    //     const textY = Math.round((chart.chartArea.top + chart.chartArea.bottom) / 2);

    //     // Draw text in the center
    //     ctx.textAlign = 'center';
    //     ctx.textBaseline = 'middle';
    //     ctx.font = '20px Arial'; // Adjust font size and style as needed
    //     ctx.fillStyle = '#000'; // Adjust text color as needed
    //     ctx.fillText(text, textX, textY);
    // }, [dataset[0]]);

    return (
        <div className='text-center'>
            <Doughnut style={{ height: '37px'}} data={data} options={options} plugins={[textCenter]}/>
            <div className='text-xs font-medium'>{text}</div>
        </div>
    );
};

export default CircularChart;
