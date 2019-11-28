import React from 'react';
import './input.css';

const Input = props => {
    return (
        <div>
            <input type='text' value={props.stringValue} onChange={props.updateFinance} className='textinput'/>
            <input type='number' value={props.costValue} onChange={props.updateCost} className='costinput'/>
            <button onClick={props.addFinance} className='btn'>Add</button>
        </div>
    )
};

export default Input;