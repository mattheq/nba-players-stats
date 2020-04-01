import React, { useState } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import { normalizeData } from '../../utils/statsUtil';

export default function PlayerStatsChart({ stats }) {
    let [chartData, setChartData] = useState([
        { entry: 'points', normalizedValue: normalizeData(stats.pts, 50), value: stats.pts },
        { entry: 'assists', normalizedValue: normalizeData(stats.ast, 20), value: stats.ast },
        { entry: 'field goals', normalizedValue: normalizeData(stats.fg_pct, 1), value: stats.fg_pct },
        { entry: '3-PT goals', normalizedValue: normalizeData(stats.fg3_pct, 1), value: stats.fg3_pct },
        { entry: 'free throws', normalizedValue: normalizeData(stats.ft_pct, 1), value: stats.ft_pct },
        { entry: 'rebounds', normalizedValue: normalizeData(stats.reb, 20), value: stats.reb },
        { entry: 'steals', normalizedValue: normalizeData(stats.stl, 5), value: stats.stl },
        { entry: 'blocks', normalizedValue: normalizeData(stats.blk, 5), value: stats.blk },
        { entry: 'turnovers', normalizedValue: normalizeData(stats.turnover, 10), value: stats.turnover },
        { entry: 'personal fouls', normalizedValue: normalizeData(stats.pf, 10), value: stats.pf }
    ]);

    return (
        <div>
            <RadarChart width={500} height={420} data={chartData} fill='#BBE1FA' >
                <PolarGrid />
                <PolarAngleAxis dataKey='entry' />
                <Radar dataKey="normalizedValue" fill='#FEE372' dot={{ fill: '#BBE1FA' }} />
            </RadarChart>
        </div>
    ) ;
}