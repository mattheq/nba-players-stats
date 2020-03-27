import React from 'react';
import './StatsRecord.css';

export default function StatsRecord({ record, label }) {

    const row = () => {
        if (typeof record === 'object') {
            return <>
                <div className="stat-name">{label} </div>
                <div className="stat-value">{record[Object.keys(record)[0]]}</div>
            </>;
        }

        return <>
            <div className="stat-name">{label} </div>
            <div className="stat-value">{record}</div>
        </>;
    };

    return (
        <div className="stat-item">
            {row()}
        </div>
    );
}