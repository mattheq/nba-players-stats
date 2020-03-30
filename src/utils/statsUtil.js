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

export function getLabel(key) {
    return statsLabels[key];
};