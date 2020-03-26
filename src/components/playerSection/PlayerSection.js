import React, { useState, useEffect } from 'react';
import { getSeasonAveragesStats } from '../../api/api';
import './PlayerSection.css';
import PlayerInfo from '../playerInfo/PlayerInfo';
import SeasonInfo from '../seasonInfo/SeasonInfo';
import PlayerStats from '../playerStats/PlayerStats';

export default function PlayerSection({ player }) {
    let [playerStats, setPlayerStats] = useState({});
    let [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getSeasonAveragesStats(player.id)
            .then(seasonAveragesStats => {
                setPlayerStats(seasonAveragesStats[0]);
                setIsLoading(false);
            });
    }, [player]);

    return (
        <div className="player-container">
            {!isLoading &&
                <>
                    <PlayerInfo player={player} />
                    <SeasonInfo stats={playerStats} />
                    <PlayerStats stats={playerStats} />
                </>
            }
        </div>
    );
}