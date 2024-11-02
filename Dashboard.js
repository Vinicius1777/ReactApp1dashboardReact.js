import React from 'react';
import Chart from '../components/Chart';
import StatsCard from '../components/StatsCard';
import './Dashboard.css'; // Dashboard style

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="stats-container">
                <StatsCard title="Active Users" value="1200" description="Last 30 days" />
                <StatsCard title="Total Sales" value="$25,000" description="This month" />
                <StatsCard title="Growth Rate" value="15%" description="Compared to last month" />
            </div>
            <div className="chart-container">
                <Chart />
            </div>
        </div>
    );
};

export default Dashboard;
