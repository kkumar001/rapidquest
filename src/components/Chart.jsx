// StackedBarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = () => {
    const data = {
        labels: ['20', '', '25', '', '30', '', '35', '', '40', '', '60', '', '65'],
        datasets: [
            {
                label: 'Employer',
                backgroundColor: 'rgb(7, 0, 156)',
                //borderColor: 'rgba(75,192,192,1)',
                // borderWidth: 1,
                // hoverBackgroundColor: 'rgba(75,192,192,0.9)',
                // hoverBorderColor: 'rgba(75,192,192,1)',
                data: [65, 59, 80, 81, 56, 45, 67, 34, 34, 12, 45, 62, 56],
                barPercentage: 0.5,
            },
            {
                label: 'Employee',
                backgroundColor: 'rgb(70, 54, 245)',
                //borderColor: 'rgba(255,99,132,1)',
                // borderWidth: 1,
                // hoverBackgroundColor: 'rgba(255,99,132,0.9)',
                // hoverBorderColor: 'rgba(255,99,132,1)',
                data: [35, 48, 60, 45, 70, 59, 80, 81, 56, 45, 67, 99, 65],
                barPercentage: 0.5,
            },
            {
                label: 'Total Interest',
                backgroundColor: 'rgb(142, 174, 249)',
                //borderColor: 'rgba(255,205,86,1)',
                // borderWidth: 1,
                // hoverBackgroundColor: 'rgba(255,205,86,0.9)',
                // hoverBorderColor: 'rgba(255,205,86,1)',
                data: [45, 30, 50, 65, 80, 56, 67, 70, 59, 80, 81, 99, 99],
                barPercentage: 0.5,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
                ticks: { stepSize: 100, min: 0, max: 300, values: [0, 100, 200, 300] },

            },
        },
    };

    return (
            <Bar data={data} options={options} />
    );
};

export default Chart;
