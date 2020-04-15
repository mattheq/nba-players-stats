import React from 'react';
import PropTypes from 'prop-types';
import './PlayerDetails.css';

function PlayerDetails({ first_name, last_name, team = 'No team' }) {
    return (
        <div className="player-info-container">
            <div className="player-info">
                <h1 className="player-name">{first_name} {last_name}</h1>
                <h3 className="player-team">{team}</h3>
            </div>
            <img src="shirt.svg" alt="shirt" />
        </div>
    );
}

PlayerDetails.propTypes = {
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    team: PropTypes.string
};

export default PlayerDetails;