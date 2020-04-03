import React, { useState, useEffect } from 'react';
import isempty from 'lodash.isempty';
import { getSeasonAveragesStats } from '../../api/api';
import PlayerStatsNav from '../playerStatsNav/PlayerStatsNav';
import PlayerStatsTable from '../playerStatsTable/PlayerStatsTable';
import PlayerStatsChart from '../playerStatsChart/PlayerStatsChart';

export default function PlayerStats({ playerId }) {
    let [stats, setStats] = useState({});
    let [season, setSeason] = useState(2019);
    let [isLoadingNewPlayer, setIsLoadingNewPlayer] = useState(false);
    let [isRequestPending, setIsRequestPending] = useState(false);

    const nextSeason = () => getSeason(season + 1);
    const prevSeason = () => getSeason(season - 1);

    const getSeason = (value) => {
        setIsRequestPending(true);
        getSeasonAveragesStats(playerId, value)
            .then(seasonAveragesStats => {
                if (!isempty(seasonAveragesStats[0])) {
                    setStats(seasonAveragesStats[0]);
                    setSeason(value);
                } else {
                    // TODO: display warning message
                    console.log('No stats for season');
                }
                setIsRequestPending(false);
            });
    };

    useEffect(() => {
        setIsLoadingNewPlayer(true);
        setIsRequestPending(true);
        getSeasonAveragesStats(playerId)
            .then(seasonAveragesStats => {
                setStats(seasonAveragesStats[0]);
                setSeason(seasonAveragesStats[0].season);
                setIsLoadingNewPlayer(false);
                setIsRequestPending(false);
            });
    }, [playerId]);

    return (
        <>
            <PlayerStatsNav stats={stats} onClick={setSeason} isLoading={isLoadingNewPlayer} isRequestPending={isRequestPending} onClickNext={nextSeason} onClickPrev={prevSeason}/>
            {!isLoadingNewPlayer && !isempty(stats) &&
                <>
                    <PlayerStatsTable stats={stats} />
                    <PlayerStatsChart stats={stats} />
                </>
            }
        </>
    );
}