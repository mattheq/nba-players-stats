import React, { useState } from 'react';
import './App.css';
import Searchbar from '../searchbar/Searchbar';
import PlayerDetails from '../playerDetails/PlayerDetails';
import PlayerStats from '../playerStats/PlayerStats';

export default function App() {
  let [player, setPlayer] = useState({
    'id': 237,
    'first_name': 'LeBron',
    'height_feet': 6,
    'height_inches': 8,
    'last_name': 'James',
    'position': 'F',
    'team': {
      'id': 14,
      'abbreviation': 'LAL',
      'city': 'Los Angeles',
      'conference': 'West',
      'division': 'Pacific',
      'full_name': 'Los Angeles Lakers',
      'name': 'Lakers'
    },
    'weight_pounds': 250
  });

  return (
    <>
      <div className="searchbar-container">
        <h3 className="app-title">NBA simple stats</h3>
        <Searchbar setPlayer={setPlayer} />
      </div>
      <hr />
      <div className="player-container">
        <PlayerDetails player={player} />
        <PlayerStats playerId={player.id} />
      </div>
    </>
  );
}
