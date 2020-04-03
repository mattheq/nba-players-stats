import React, { useState, useEffect } from 'react';
import StatsRecord from '../statsRecord/StatsRecord';
import { getLabel, createNestedStatsObject } from '../../utils/statsUtil.js';

export default function PlayerStatsTable({ stats }) {
    let [nestedStats, setNestedStats] = useState(createNestedStatsObject(stats));

    useEffect(() => {
        setNestedStats(createNestedStatsObject(stats));
    }, [stats]);

    const playerStats = Object.keys(nestedStats)
        .map(key => <StatsRecord key={key} record={nestedStats[key]} label={getLabel(key)} />);

    return (<div>{playerStats}</div>);
}