import React from 'react';
import './list.css';

const List = (props) => {
    return (
        <div className='listitem'>
            <p>{props.text}</p>
            <span>{props.cost} soms</span>
            <button onClick={props.del}>✘</button>
        </div>
    )
};

export default List;
