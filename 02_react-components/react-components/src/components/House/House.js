import React from 'react';
import './House.css';

const House = function (props) {
    return (
        <div className='hosue' onMouseEnter={() => props.selectHouse(props.id)}>
            <img src={props.imageUrl} alt='house'></img>
        </div>
    )
}

export default House;