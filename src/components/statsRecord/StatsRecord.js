import React from 'react';
import './StatsRecord.css';
import { getLabel } from '../../utils/statsUtil.js';

export default function StatsRecord({ record, label }) {

    const row = () => {
        if (typeof record === 'object') {
            const value = `${record[Object.keys(record)[0]]} (${getLabel(Object.keys(record)[1])}: ${record[Object.keys(record)[1]]}, ${getLabel(Object.keys(record)[2])}: ${record[Object.keys(record)[2]]})`;
            return <>
                <div className="stats-name">{label} </div>
                <div className="stats-value">{value}</div>
            </>;
        }

        return <>
            <div className="stats-name">{label} </div>
            <div className="stats-value">{record}</div>
        </>;
    };

    return (
        <div className="stats-item">
            {row()}
        </div>
    );
}