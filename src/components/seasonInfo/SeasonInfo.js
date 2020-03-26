import React, { useState, useEffect } from 'react';
import { getSeasonAveragesStats } from '../../api/api';
import './SeasonInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function SeasonInfo({ playerId }) {
    let [seasonStats, setSeasonStats] = useState(null);

    useEffect(() => {
        try {
            getSeasonAveragesStats(playerId)
                .then(seasonAveragesStats => setSeasonStats(seasonAveragesStats[0]));
        } catch (error) {
            console.log(error);
        }
    }, [playerId]);

    return (
        <>
        {seasonStats !== null &&
            <div className="season-info-container">
                <FontAwesomeIcon className="arrow" icon={faChevronLeft} />
                <div className="season-info">
                    <span className="season-info-element">{`season ${seasonStats.season}`}</span>
                    <span className="season-info-element">{`games played - ${seasonStats.games_played}`}</span>
                    <span className="season-info-element">{`minutes - ${seasonStats.min}`}</span>
                </div>
                <FontAwesomeIcon className="arrow" icon={faChevronRight} />
            </div>
        }
        </>
    );
}