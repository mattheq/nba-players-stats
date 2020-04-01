import React, { useState, useEffect } from 'react';
import './PlayerStatsNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faBasketballBall } from '@fortawesome/free-solid-svg-icons';

export default function PlayerStatsNav({ stats, isLoading, isRequestPending, onClickNext, onClickPrev }) {
    let [iconClass, setIconClass] = useState('arrow');

    useEffect(() => {
        const arrowClass = isRequestPending? 'arrow-disabled' : 'arrow';
        setIconClass(arrowClass);
    }, [isRequestPending]);

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
            <FontAwesomeIcon className={iconClass} icon={faChevronLeft} onClick={isRequestPending? null : () => onClickPrev()} />
            <div className="season-info">
                {seasonInfoElements()}
            </div>
            <FontAwesomeIcon className={iconClass} icon={faChevronRight} onClick={isRequestPending ? null : () => onClickNext()} />
        </div>
    );
}