import React from 'react';
import './PlayerInfo.css';

export default function PlayerInfo({ player }) {
    return (
        <div className="player-info-container">
            <div className="player-info">
                <h1 className="player-name">{player.first_name} {player.last_name}</h1>
                <h3 className="player-team">{player.team.full_name}</h3>
            </div>
            <img src="shirt.svg" alt="shirt" />
        </div>
    );
}