import React from 'react';
import axios from 'axios';

const Race = () => {
    axios.get('http://www.dnd5eapi.co/api/races')
    .then(res => console.log(res))
    .catch(err => console.error(err))
    return (
        <div>
            
        </div>
    )
}

export default Race;