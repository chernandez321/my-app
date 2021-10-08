import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => (

<div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
        {props.Label}
    <button className= 'Less' onClick = {props.removed} disabled={props.disabled}>Less</button>
    <button className='More'  onClick = {props.added}>More</button>

</div>
);

export default buildControl;