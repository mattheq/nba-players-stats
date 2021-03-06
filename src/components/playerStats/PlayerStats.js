import React, { useState, useEffect, useContext } from 'react';
import isempty from 'lodash.isempty';
import './PlayerStats.css';
import { getSeasonAveragesStats } from '../../api/api';
import PlayerStatsNav from '../playerStatsNav/PlayerStatsNav';
import PlayerStatsTable from '../playerStatsTable/PlayerStatsTable';
import PlayerStatsChart from '../playerStatsChart/PlayerStatsChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeh, faBasketballBall } from '@fortawesome/free-solid-svg-icons';
import { ToastContext } from '../contexts';

export default function PlayerStats({ playerId }) {
    let [stats, setStats] = useState({});
    let [season, setSeason] = useState(2019);
    let [icon, setIcon] = useState({ className: 'spinner', icon: faBasketballBall, spin: true });
    let [isLoadingNewPlayer, setIsLoadingNewPlayer] = useState(true);
    let [isRequestPending, setIsRequestPending] = useState(true);
    let { addToast } = useContext(ToastContext);

    const nextSeason = async() => await getSeason(season + 1);
    const prevSeason = async() => await getSeason(season - 1);

    const getSeason = async(value) => {
        setIsRequestPending(true);
        const seasonAveragesStats = await getSeasonAveragesStats(playerId, value);
        if (!isempty(seasonAveragesStats[0])) {
            setStats(seasonAveragesStats[0]);
            setSeason(value);
        } else {
            addToast(`Stats for season ${value}/${value + 1} doesn't exist`, 'danger');
        }
        setIsRequestPending(false);
    };

    useEffect(() => {
        setIsLoadingNewPlayer(true);
        setIsRequestPending(true);
        getSeasonAveragesStats(playerId)
            .then(seasonAveragesStats => {
                setStats(seasonAveragesStats[0]);
                setSeason(2019);
                setIsLoadingNewPlayer(false);
                setIsRequestPending(false);
            });
    }, [playerId]);

    useEffect(() => {
        isRequestPending ?
            setIcon({ className: 'spinner', icon: faBasketballBall, spin: true }) :
            setIcon({ className: 'not-found-icon', icon: faMeh, spin: false });
    }, [isRequestPending]);

    return (
        <>
            {!isempty(stats)?
                <>
                    <PlayerStatsNav stats={stats} isLoading={isLoadingNewPlayer} isRequestPending={isRequestPending} onClickNext={nextSeason} onClickPrev={prevSeason} />
                    {!isLoadingNewPlayer &&
                        <>
                            <PlayerStatsTable stats={stats} />
                            <PlayerStatsChart stats={stats} />
                        </>
                    }
                </> : (
                    <>
                        <FontAwesomeIcon {...icon} />
                        {!isRequestPending && <span className="not-found-msg">Player stats not found</span>}
                    </>
                )
            }
        </>
    );
}