import React, { useState, useEffect } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, PolarRadiusAxis } from 'recharts';
import { createChartData } from '../../utils/statsUtil';

export default function PlayerStatsChart({ stats }) {
    let [chartData, setChartData] = useState(createChartData(stats));

    useEffect(() => {
        setChartData(createChartData(stats));
    }, [stats]);

    return (
        <div>
            <RadarChart width={500} height={420} data={chartData} fill='#BBE1FA' >
                <PolarGrid />
                <PolarAngleAxis dataKey='entry' />
                <PolarRadiusAxis domain={[0, 100]} />
                <Radar dataKey="normalizedValue" fill='#FEE372' dot={{ fill: '#BBE1FA' }} />
            </RadarChart>
        </div>
    ) ;
}