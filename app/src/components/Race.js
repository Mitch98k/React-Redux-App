import React from 'react';
import { connect } from 'react-redux';

import { getRaces } from '../actions';

import './Race.css';

const Race = ({ races, isFetching, error, getRaces }) => {
    
    const handleGetRaces = e => {
        e.preventDefault();
        getRaces();
    }
    if (isFetching) {
        return <h2>Fetching races for you</h2>
    }

    return (
        <div className='five-E'>
            <div className='dnd'>
                <h1>DnD 5e race reference:</h1>
                <div className='races'>
                {races && races.map(race => {
                    return <h3 className='race' key={race.name}>{race.name}</h3>
                })}
                </div>
                
                {error && <h3>{error}</h3>}
                <button onClick={handleGetRaces}>See races</button>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        races: state.races,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getRaces })(Race);