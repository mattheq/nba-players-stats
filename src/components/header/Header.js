import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import './Header.css';

export default function Header(props) {
    function handleOnKeyPress(e) {
        if (e.key === 'Enter') {
            props.handleOnSubmit();
        }
    }

    return (
        <div>
            <h1>Simple stats</h1>
            <input value={props.searchValue} onChange={(e) => props.handleOnChange(e.target.value)} onKeyPress={(e) => handleOnKeyPress(e)} className="searchbox" placeholder="Search..."></input>
            <button onClick={() => props.handleOnSubmit()} className="searchbutton"><FontAwesomeIcon icon={faSearch} /></button>
        </div>
    );
}