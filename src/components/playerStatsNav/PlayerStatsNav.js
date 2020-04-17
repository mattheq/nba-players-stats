import React, { useState, useEffect } from 'react';
import './PlayerStatsNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faBasketballBall } from '@fortawesome/free-solid-svg-icons';

const ARROW_ICON = {
    ACTIVE: 'arrow',
    DISABLED: 'arrow-disabled'
};

export default function PlayerStatsNav({ stats, isLoading, isRequestPending, onClickNext, onClickPrev }) {
    let [iconClass, setIconClass] = useState(ARROW_ICON.ACTIVE);

    useEffect(() => {
        const arrowClass = isRequestPending ? ARROW_ICON.DISABLED : ARROW_ICON.ACTIVE;
        setIconClass(arrowClass);
    }, [isRequestPending]);

    return (
        <div className="season-info-container">
            <FontAwesomeIcon className={iconClass} icon={faChevronLeft} onClick={isRequestPending? null : () => onClickPrev()} />
            <div className="season-info">
                {isLoading?
                    <FontAwesomeIcon icon={faBasketballBall} spin /> :
                    <>
                        <span className="season-info-element">{`season ${stats.season}/${stats.season + 1}`}</span>
                        <span className="season-info-element">{`games played - ${stats.games_played}`}</span>
                        <span className="season-info-element">{`minutes - ${stats.min}`}</span>
                    </>
                }
            </div>
            <FontAwesomeIcon className={iconClass} icon={faChevronRight} onClick={isRequestPending ? null : () => onClickNext()} />
        </div>
    );
}