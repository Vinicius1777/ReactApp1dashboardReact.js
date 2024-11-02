import React from 'react';
import './StatsCard.css'; // Style

const StatsCard = ({ title, value, description }) => {
    return (
        <div className="stats-card">
            <h3>{title}</h3>
            <p>{value}</p>
            <small>{description}</small>
        </div>
    );
};

export default StatsCard;

