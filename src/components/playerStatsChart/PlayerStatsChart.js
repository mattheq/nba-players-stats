import React, { useState, useEffect } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { createChartData } from '../../utils/statsUtil';

export default function PlayerStatsChart({ stats }) {
    let [chartData, setChartData] = useState(createChartData(stats));

    useEffect(() => {
        setChartData(createChartData(stats));
    }, [stats]);

    return (
        <div style={{ marginTop: '10px' }}>
            <ResponsiveContainer width='99%' aspect={1.15}>
                <RadarChart data={chartData} fill='#BBE1FA' >
                    <PolarGrid />
                    <PolarAngleAxis dataKey='entry' />
                    <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar dataKey="normalizedValue" fill='#FEE372' dot={{ fill: '#BBE1FA' }} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    ) ;
}