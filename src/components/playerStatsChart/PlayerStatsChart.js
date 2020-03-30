import React, { useState } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, Legend, Dot, Tooltip } from 'recharts';
import { normalizeData } from '../../utils/statsUtil';

export default function PlayerStatsChart({ stats }) {
    let [chartData, setChartData] = useState([
        { entry: 'points', value: normalizeData(stats.pts, 50) },
        { entry: 'assists', value: normalizeData(stats.ast, 20) },
        { entry: 'field goals', value: normalizeData(stats.fg_pct, 1) },
        { entry: '3-PT goals', value: normalizeData(stats.fg3_pct, 1) },
        { entry: 'free throws', value: normalizeData(stats.ft_pct, 1) },
        { entry: 'rebounds', value: normalizeData(stats.reb, 20) },
        { entry: 'steals', value: normalizeData(stats.stl, 5) },
        { entry: 'blocks', value: normalizeData(stats.blk, 5) },
        { entry: 'turnovers', value: normalizeData(stats.turnover, 10) },
        { entry: 'personal fouls', value: normalizeData(stats.pf, 10) }
    ]);

    return (
        <div>
            <RadarChart width={500} height={420} data={chartData} fill='#BBE1FA'>
                <PolarGrid />
                <PolarAngleAxis dataKey='entry' />
                <Radar dataKey="value" fill='#FEE372' dot />
            </RadarChart>
        </div>
    ) ;
}