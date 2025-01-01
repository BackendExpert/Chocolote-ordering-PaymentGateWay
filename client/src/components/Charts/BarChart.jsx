import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const getLastNDays = (n) => {
    const days = [];
    const today = new Date();
    for (let i = n - 1; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        days.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })); // Format: "Jan 1"
    }
    return days;
};

const BarChart = () => {
    const last5Days = getLastNDays(5);
    const data = {
        labels: last5Days,
        datasets: [
            {
                label: 'Sales',
                data: [10, 14, 6, 22, 35],
                backgroundColor: '#696cff',
                borderColor: '#4a58b2',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
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
        scales: {
            x: {
                ticks: { color: '#666' },
                grid: { display: false },
            },
            y: {
                ticks: { color: '#666' },
                grid: { color: '#e0e0e0' },
            },
        },
    };

    return (
        <div className="bg-white shadow rounded p-4">
            <h1 className="text-lg text-[#696cff] font-semibold mb-4 text-center">Orders in Last 5 Days</h1>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
