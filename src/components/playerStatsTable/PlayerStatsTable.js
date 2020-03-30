import React, { useState } from 'react';
import StatsRecord from '../statsRecord/StatsRecord';
import { getLabel } from '../../utils/statsUtil.js';

export default function PlayerStatsTable({ stats }) {
    let [nestedStats, setNestedStats] = useState({
        'pts': stats.pts,
        'ast': stats.ast,
        'fg_pct': {
            'fg_pct': stats.fg_pct,
            'fgm': stats.fgm,
            'fga': stats.fga
        },
        'fg3_pct': {
            'fg3_pct': stats.fg3_pct,
            'fg3m': stats.fg3m,
            'fg3a': stats.fg3a
        },
        'ft_pct': {
            'ft_pct': stats.ft_pct,
            'ftm': stats.ftm,
            'fta': stats.fta
        },
        'reb': {
            'reb': stats.reb,
            'oreb': stats.oreb,
            'dreb': stats.dreb
        },
        'stl': stats.stl,
        'blk': stats.blk,
        'turnover': stats.turnover,
        'pf': stats.pf
    });

    const playerStats = Object.keys(nestedStats)
        .map(key => <StatsRecord key={key} record={nestedStats[key]} label={getLabel(key)} />);

    return (
        <div>
            {playerStats}
        </div>
    );
}