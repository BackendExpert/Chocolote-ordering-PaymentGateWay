import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const data = {
        labels: ['Online Card', 'Cash on Delivery'],
        datasets: [
            {
                label: 'Payment Methods',
                data: [70, 30],
                backgroundColor: [
                    '#dddddd',
                    '#696cff', // Blue
                ],
                borderColor: '#ffffff',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#333',
                    font: {
                        size: 12,
                    },
                },
            },
            tooltip: {
                enabled: true,
                backgroundColor: '#696cff',
                titleColor: '#fff',
                bodyColor: '#fff',
            },
        },
    };

    return (
        <div className="bg-white shadow rounded p-4">
            <h1 className="text-lg text-[#696cff] font-semibold mb-4 text-center">Payment Methods</h1>
            <Pie data={data} options={options} />
        </div>
    );
};

export default PieChart;
