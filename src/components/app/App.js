import React, { useState } from 'react';
import './App.css';
import Searchbar from '../searchbar/Searchbar';
import PlayerInfo from '../playerInfo/PlayerInfo';
import SeasonInfo from '../seasonInfo/SeasonInfo';
import PlayerSection from '../playerSection/PlayerSection';

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
  }
  );

  return (
    <>
      <div className="searchbar-container">
        <h3 className="app-title">Simple stats</h3>
        <Searchbar setPlayer={setPlayer} />
      </div>
      <hr />
      <PlayerSection player={player} />
    </>
  );
}
