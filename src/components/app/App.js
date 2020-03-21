import React, { Fragment, useState } from 'react';
import './App.css';
import Header from '../header/Header';

export default function App() {
  let [searchValue, setSearchValue] = useState('');
  let [playerData, setPlayerData] = useState({});

  function handleOnChange(e) {
    setSearchValue(e);
  }

  async function handleOnSubmit() {
    try {
      let playerInfo = await fetch(`https://www.balldontlie.io/api/v1/players?search=${searchValue}`)
        .then(response => response.json());

      setPlayerData(playerInfo.data[0]);
    } catch (error) {

    }

  }

  return (
    <Fragment>
      <Header searchValue={searchValue} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}/>
      <hr />
    </Fragment>
  );
}
