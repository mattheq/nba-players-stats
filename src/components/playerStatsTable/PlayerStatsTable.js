import React from 'react';
import './PlayerStatsTable.css';

export default function PlayerStatsTable({ stats, isLoading }) {

    const statsLabels = {
        'fgm': 'field goals made',
        'fga': 'field goals attempted',
        'fg3m': '3-PT field goals made',
        'fg3a': '3-PT field goals attempted',
        'ftm': 'free throws made',
        'fta': 'free throws attempted',
        'oreb': 'offensive rebounds',
        'dreb': 'defensive rebounds',
        'reb': 'rebounds',
        'ast': 'assists',
        'stl': 'steals',
        'blk': 'blocks',
        'turnover': 'turnovers',
        'pf': 'personal fouls',
        'pts': 'points',
        'fg_pct': 'field goals percentage',
        'fg3_pct': '3-PT goals percentage',
        'ft_pct': 'free throws percentage'
    };

    let playerStats = Object.keys(stats).filter(key => key in statsLabels).map(key => {
        return <div className="stat-item" key={key}>
            <div className="stat-name">{statsLabels[key]} </div>
            <div className="stat-value">{stats[key]}</div>
        </div>;
    });

    return (
        <div>
            {playerStats}
        </div>
    );
}