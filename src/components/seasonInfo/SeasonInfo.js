import React from 'react';
import './SeasonInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function SeasonInfo({ stats }) {

    return (
        <div className="season-info-container">
            <FontAwesomeIcon className="arrow" icon={faChevronLeft} />
            <div className="season-info">
                <span className="season-info-element">{`season ${stats.season}`}</span>
                <span className="season-info-element">{`games played - ${stats.games_played}`}</span>
                <span className="season-info-element">{`minutes - ${stats.min}`}</span>
            </div>
            <FontAwesomeIcon className="arrow" icon={faChevronRight} />
        </div>
    );
}