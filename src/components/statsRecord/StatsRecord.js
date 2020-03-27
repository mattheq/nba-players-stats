import React, { useState, useEffect } from 'react';
import './StatsRecord.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareDown, faCaretSquareUp } from '@fortawesome/free-solid-svg-icons';

export default function StatsRecord({ record, label }) {
    let [isExpanded, setIsExpanded] = useState(false);
    let [icon, setIcon] = useState(faCaretSquareDown);

    useEffect(() => {
        const icon = isExpanded ? faCaretSquareUp : faCaretSquareDown;
        setIcon(icon);
    }, [isExpanded]);

    const row = () => {
        if (typeof record === 'object') {
            return <>
                <div className="stats-name">{label} </div>
                <div className="stats-value">
                    {record[Object.keys(record)[0]]}
                    <span> <FontAwesomeIcon icon={icon} onClick={() => setIsExpanded(!isExpanded)} /></span>
                </div>
                {isExpanded &&
                <div className='stats-item stats-subitem'>
                    <div className="stats-name">{Object.keys(record)[1]} </div>
                    <div className="stats-value">{record[Object.keys(record)[1]]}</div>
                    <div className="stats-name">{Object.keys(record)[2]} </div>
                    <div className="stats-value">{record[Object.keys(record)[2]]}</div>
                </div>
                }
            </>;
        }

        return <>
            <div className="stats-name">{label} </div>
            <div className="stats-value">{record}</div>
        </>;
    };

    return (
        <div className="stats-item">
            {row()}
        </div>
    );
}