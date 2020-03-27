import React, { useState } from 'react';
import './PlayerDetails.css';

export default function PlayerDetails({ player }) {
    let [isLoading, setIsLoading] = useState(false);

    return (
        <>
            {!isLoading &&
                <>
                <div className="player-info-container">
                    <div className="player-info">
                        <h1 className="player-name">{player.first_name} {player.last_name}</h1>
                        <h3 className="player-team">{player.team.full_name}</h3>
                    </div>
                    <img src="shirt.svg" alt="shirt" />
                </div>
                </>
            }
        </>
    );
}