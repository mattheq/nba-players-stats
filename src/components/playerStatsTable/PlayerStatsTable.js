import React from 'react';
import './PlayerStatsTable.css';

export default function PlayerStatsTable({ stats, isLoading }) {

    let playerStats = Object.keys(stats).map(key => {
        return <div className="stat-item" key={key}>
            <div className="stat-name">{key} </div>
            <div className="stat-value">{stats[key]}</div>
        </div>;
    });

    return (
        <div>
            {playerStats}
        </div>
    );
}