import React from 'react';
import './PlayerStats.css';

export default function PlayerStats({ stats }) {
    let playerStats = Object.keys(stats).map(key => {
        return <div className="stat-item" key={key}>
            <div className="stat-name">{key} </div>
            <div className="stat-value">{stats[key]}</div>
        </div>;
    });
    return (
        <div>
            {/* <div className="stat-item">
                <div className="stat-name">Assists </div>
                <div className="stat-value">{stats.ast}</div>
            </div>
            <div className="stat-item">
                <div className="stat-name">Points </div>
                <div className="stat-value">{stats.pts}</div>
            </div> */}
            {playerStats}
        </div>
    );
}