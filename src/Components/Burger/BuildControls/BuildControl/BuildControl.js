import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => (

<div className='BuildControl'>
    <div className='Label'>{props.label}</div>
        {props.label}
    <button className= 'Less' onClick = {props.removed} disabled={props.disabled}>Less</button>
    <button className='More'  onClick = {props.added}>More</button>

</div>
);

export default buildControl;