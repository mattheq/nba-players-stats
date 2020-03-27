import React from 'react';
import './PlayerStatsNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faBasketballBall } from '@fortawesome/free-solid-svg-icons';

export default function PlayerStatsNav({ stats, onClick, isLoading }) {

    const seasonInfoElements = () => {
        if (isLoading) {
            return <FontAwesomeIcon icon={faBasketballBall} spin={isLoading} />;
        }

        return <>
            <span className="season-info-element">{`season ${stats.season}/${stats.season + 1}`}</span>
            <span className="season-info-element">{`games played - ${stats.games_played}`}</span>
            <span className="season-info-element">{`minutes - ${stats.min}`}</span>
        </>;
    };

    return (
        <div className="season-info-container">
            <FontAwesomeIcon className="arrow" icon={faChevronLeft} onClick={() => onClick(stats.season - 1)} />
            <div className="season-info">
                {seasonInfoElements()}
            </div>
            <FontAwesomeIcon className="arrow" icon={faChevronRight} onClick={() => onClick(stats.season + 1)} />
        </div>
    );
}