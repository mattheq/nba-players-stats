import React, { useState, useEffect } from 'react';
import { getSeasonAveragesStats } from '../../api/api';
import './PlayerStats.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function PlayerStats({ playerId }) {
    let [stats, setStats] = useState({});
    let [season, setSeason] = useState(2019);
    let [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getSeasonAveragesStats(playerId, season)
            .then(seasonAveragesStats => {
                setStats(seasonAveragesStats[0]);
                setIsLoading(false);
            });
    }, [playerId, season]);

    let playerStats = Object.keys(stats).map(key => {
        return <div className="stat-item" key={key}>
            <div className="stat-name">{key} </div>
            <div className="stat-value">{stats[key]}</div>
        </div>;
    });
    
    return (
        <>
        <div className="season-info-container">
            <FontAwesomeIcon className="arrow" icon={faChevronLeft} onClick={() => setSeason(season - 1)}/>
            <div className="season-info">
                <span className="season-info-element">{`season ${stats.season}/${stats.season + 1}`}</span>
                <span className="season-info-element">{`games played - ${stats.games_played}`}</span>
                <span className="season-info-element">{`minutes - ${stats.min}`}</span>
            </div>
            <FontAwesomeIcon className="arrow" icon={faChevronRight} onClick={() => setSeason(season + 1)}/>
        </div>
        {playerStats}
        </>
    );
}