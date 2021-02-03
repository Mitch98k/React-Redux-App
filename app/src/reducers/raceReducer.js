import { FETCH_RACES, FETCH_RACES_SUCCESSFUL, FETCH_RACES_FAILED } from '../actions';

const initialState = {
    races: null,
    isFetching: false,
    error: ''
};

const raceReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RACES: {
            return {
                ...state, isFetching: true, error: ''
            }
        }
        case FETCH_RACES_SUCCESSFUL: {
            console.log('payload:' + action.payload)
            return {
                ...state, 
                races: action.payload,
                isFetching: false
            }
        }
        case FETCH_RACES_FAILED: {
            return {
                ...state, 
                error: action.payload,
                isFetching: false
            }
        }
        default: return state;
    }
};

export default raceReducer;