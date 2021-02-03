import axios from 'axios';

export const FETCH_RACES = 'FETCH_RACES';
export const FETCH_RACES_SUCCESSFUL = 'FETCH_RACES_SUCCESSFUL';
export const FETCH_RACES_FAILED = 'FETCH_RACES_FAILED';

export const getRaces = () => (dispatch) => {
    dispatch({ type: FETCH_RACES });

    axios.get('http://www.dnd5eapi.co/api/races')
    .then(res => {
        console.log(res);
        dispatch({ type: FETCH_RACES_SUCCESSFUL, payload: res.data.results })
    })
    .catch(err => {
        console.error(err)
        dispatch({ type: FETCH_RACES_FAILED, payload: err.message })
    })
}