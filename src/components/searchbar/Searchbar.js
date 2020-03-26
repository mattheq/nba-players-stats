import React, { useState, useRef, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import './Searchbar.css';
import { getPlayers } from '../../api/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';


export default function Searchbar(props) {
    let [searchValue, setSearchValue] = useState('');
    let [suggestions, setSuggestions] = useState([]);
    let [isLoading, setIsLoading] = useState(false);
    let [isFocused, setIsFocused] = useState(false);
    let timerId = useRef();

    useEffect(() => {
        return () => clearTimeout(timerId.current);
    }, []);

    function getSuggestionValue(suggestion) {
        props.setPlayer(suggestion);
        return `${suggestion.first_name} ${suggestion.last_name}`;
    }

    async function onSuggestionsFetchRequested({ value, reason }) {
        if (reason === 'input-focused') {
            return null;
        }

        clearTimeout(timerId.current);
        setIsLoading(true);
        timerId.current = setTimeout(async () => {
            try {
                const players = await getPlayers(value);
                setSuggestions(players);
                setIsLoading(false);
            } catch (error) {
                console.log(error.message);
            }
        }, 1000);
    }

    function onSuggestionsClearRequested() {
        return null;
    }

    function renderSuggestion(suggestion) {
        return (
            <span>{`${suggestion.first_name} ${suggestion.last_name}`}</span>
        );
    }

    function shouldRenderNoSuggestionsInfo() {
        return searchValue.trim() !== '' && suggestions.length === 0 && !isLoading && isFocused;
    }

    function renderNoSuggestionsInfo() {
        if (shouldRenderNoSuggestionsInfo()) {
            return (
                <div className="react-autosuggest__suggestions-container--open no-suggestions">
                    No players found
                </div>
            );
        }
    }

    function renderInputComponent(inputProps) {
        if (shouldRenderNoSuggestionsInfo()) {
            inputProps.className += ' react-autosuggest__input--open';
        }

        return (
            <>
                <input {...inputProps} />
                {isLoading && <FontAwesomeIcon className="loading-icon" icon={faBasketballBall} spin />}
            </>
        );
    }

    return (
        <div className="search-container">
            <Autosuggest
                focusInputOnSuggestionClick={false}
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                renderInputComponent={renderInputComponent}
                inputProps={{
                    placeholder: 'Search...',
                    value: searchValue,
                    onChange: (event, { newValue }) => setSearchValue(newValue),
                    onFocus: () => setIsFocused(true),
                    onBlur: () => setIsFocused(false),
                }} />
            {renderNoSuggestionsInfo()}
        </div>
    );
}