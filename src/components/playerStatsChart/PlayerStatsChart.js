import React, { useState, useEffect } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { createChartData } from '../../utils/statsUtil';

const COLOR = {
    LIGHT_BLUE: '#BBE1FA',
    DARK_BLUE: '#0F4C75',
    YELLOW: '#FEE372',
    BACKGROUND: '#1B262C'
};

export default function PlayerStatsChart({ stats }) {
    let [chartData, setChartData] = useState(createChartData(stats));

    useEffect(() => {
        setChartData(createChartData(stats));
    }, [stats]);

    return (
        <div style={{ marginTop: '10px' }}>
            <ResponsiveContainer width='99%' aspect={1.15}>
                <RadarChart data={chartData} fill={COLOR.LIGHT_BLUE} >
                    <PolarGrid />
                    <PolarAngleAxis dataKey='entry' />
                    <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar dataKey="normalizedValue" fill={COLOR.YELLOW} dot={{ fill: COLOR.LIGHT_BLUE }} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    ) ;
}