import React, { useState } from 'react';
import StatsRecord from '../statsRecord/StatsRecord';

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

    const statsLabels = {
        'pts': 'points',
        'ast': 'assists',
        'fg_pct': 'field goals %',
        'fgm': 'field goals made',
        'fga': 'field goals attempted',
        'fg3_pct': '3-PT goals %',
        'fg3m': '3-PT field goals made',
        'fg3a': '3-PT field goals attempted',
        'ft_pct': 'free throws %',
        'ftm': 'free throws made',
        'fta': 'free throws attempted',
        'reb': 'rebounds',
        'oreb': 'offensive rebounds',
        'dreb': 'defensive rebounds',
        'stl': 'steals',
        'blk': 'blocks',
        'turnover': 'turnovers',
        'pf': 'personal fouls'
    };

    const playerStats = Object.keys(nestedStats)
        .map(key => <StatsRecord key={key} record={nestedStats[key]} label={statsLabels[key]} />);

    return (
        <div>
            {playerStats}
        </div>
    );
}