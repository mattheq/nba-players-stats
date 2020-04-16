import React from 'react';
import './StatsRecord.css';
import { getLabel } from '../../utils/statsUtil.js';

export default function StatsRecord({ value, label }) {
    let recordValue = value;
    let tooltip = '';
    if (typeof value === 'object') {
        const keys = Object.keys(value);
        recordValue = value[keys[0]];
        tooltip = <span className="tooltip-text">{`${getLabel(keys[1])}: ${value[keys[1]]}, ${getLabel(keys[2])}: ${value[keys[2]]}`}</span>;
    }

    return (
        <div className="stats-item">
            <div className="stats-name">{label} </div>
            <div className="stats-value tooltip">
                {recordValue}
                {tooltip}
            </div>
        </div>
    );
}