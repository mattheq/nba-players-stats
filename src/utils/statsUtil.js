const statsLabels = {
    'pts': 'points',
    'ast': 'assists',
    'fg_pct': 'field goals %',
    'fgm': 'made',
    'fga': 'attempted',
    'fg3_pct': '3-PT goals %',
    'fg3m': 'made',
    'fg3a': 'attempted',
    'ft_pct': 'free throws %',
    'ftm': 'made',
    'fta': 'attempted',
    'reb': 'rebounds',
    'oreb': 'offensive',
    'dreb': 'defensive',
    'stl': 'steals',
    'blk': 'blocks',
    'turnover': 'turnovers',
    'pf': 'personal fouls'
};

export function getLabel(key) {
    return statsLabels[key];
};

export function normalizeData(value, maxValue) {
    return (value * 100) / maxValue;
};

export function createNestedStatsObject(stats) {
    return {
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
    };
};

export function createChartData(stats) {
    return [
        { entry: 'pts', normalizedValue: normalizeData(stats.pts, 50), value: stats.pts },
        { entry: 'ast', normalizedValue: normalizeData(stats.ast, 20), value: stats.ast },
        { entry: 'fg', normalizedValue: normalizeData(stats.fg_pct, 1), value: stats.fg_pct },
        { entry: '3fg', normalizedValue: normalizeData(stats.fg3_pct, 1), value: stats.fg3_pct },
        { entry: 'ft', normalizedValue: normalizeData(stats.ft_pct, 1), value: stats.ft_pct },
        { entry: 'reb', normalizedValue: normalizeData(stats.reb, 20), value: stats.reb },
        { entry: 'stl', normalizedValue: normalizeData(stats.stl, 5), value: stats.stl },
        { entry: 'blk', normalizedValue: normalizeData(stats.blk, 5), value: stats.blk },
        { entry: 'to', normalizedValue: normalizeData(stats.turnover, 10), value: stats.turnover },
        { entry: 'pf', normalizedValue: normalizeData(stats.pf, 10), value: stats.pf }
    ];
}