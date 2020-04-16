import React, { useState, useRef, useEffect, useContext } from 'react';
import Autosuggest from 'react-autosuggest';
import './Searchbar.css';
import { getPlayers } from '../../api/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';
import { ToastContext } from '../contexts';

// react-autosuggest onSuggestionsFetchRequested reasons
const FETCH_REASON = {
    INPUT_CHANGED: 'input-changed',
    INPUT_FOCUSED: 'input-focused',
    ESCAPE_PRESSED: 'escape-pressed',
    SUGGESTIONS_REVEALED: 'suggestions-revealed',
    SUGGESTION_SELECTED: 'suggestion-selected'
};

export default function Searchbar({ setPlayer }) {
    let [searchValue, setSearchValue] = useState('');
    let [suggestions, setSuggestions] = useState([]);
    let [isLoading, setIsLoading] = useState(false);
    let [isFocused, setIsFocused] = useState(false);
    let { addToast } = useContext(ToastContext);
    let timerId = useRef();

    useEffect(() => {
        return () => clearTimeout(timerId.current);
    }, []);

    const onSuggestionsFetchRequested = async({ value, reason }) => {
        if (reason === FETCH_REASON.INPUT_FOCUSED) {
            return null;
        }

        clearTimeout(timerId.current);
        setIsLoading(true);
        timerId.current = setTimeout(async () => {
            try {
                const players = await getPlayers(value);
                setSuggestions(players);
            } catch (error) {
                addToast(error, 'danger');
            }
            setIsLoading(false);
        }, 1000);
    };

    const onSuggestionsClearRequested = () => null;

    const getSuggestionValue = (suggestion) => {
        setPlayer(suggestion);
        return `${suggestion.first_name} ${suggestion.last_name}`;
    };

    const renderSuggestion = ({ first_name, last_name }) => <span>{`${first_name} ${last_name}`}</span>;

    const shouldRenderNoSuggestionsInfo = searchValue.trim() !== '' && suggestions.length === 0 && !isLoading && isFocused;

    const renderInputComponent = (inputProps) => {
        if (shouldRenderNoSuggestionsInfo) {
            inputProps.className += ' react-autosuggest__input--open';
        }

        return (
            <>
                <input {...inputProps} />
                {isLoading && <FontAwesomeIcon className="loading-icon" icon={faBasketballBall} spin />}
            </>
        );
    };

    return (
        <section className="search-container">
            <Autosuggest
                focusInputOnSuggestionClick={false}
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                renderInputComponent={renderInputComponent}
                inputProps={{
                    placeholder: 'Search player...',
                    value: searchValue,
                    onChange: (event, { newValue }) => setSearchValue(newValue),
                    onFocus: () => setIsFocused(true),
                    onBlur: () => setIsFocused(false),
                }} />
            {shouldRenderNoSuggestionsInfo &&
                <div className="react-autosuggest__suggestions-container--open no-suggestions">
                    No players found
                </div>
            }
        </section>
    );
}