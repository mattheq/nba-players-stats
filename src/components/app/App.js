import React, { useState } from 'react';
import './App.css';
import Searchbar from '../searchbar/Searchbar';
import PlayerDetails from '../playerDetails/PlayerDetails';
import PlayerStats from '../playerStats/PlayerStats';
import ToastProvider from '../toastProvider/ToastProvider';

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
      <header className="app-header">
        <h1 className="app-title">NBA simple stats</h1>
        <Searchbar setPlayer={setPlayer} />
      </header>
      <hr />
      <ToastProvider>
        <section className="player-container">
          <PlayerDetails first_name={player.first_name} last_name={player.last_name} team={player.team.full_name} />
          <PlayerStats playerId={player.id} />
        </section>
      </ToastProvider>
    </>
  );
}
