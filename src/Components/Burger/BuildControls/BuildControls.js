import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
import BurgerBuilder from '../../BurgerBuilder/BurgerBuilder';
//import orderSummary from '../OrderSummary/OrderSummary';

const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'}]
    
const buildControls = (props) => (
  <div className='BuildControls'>
   <p>Current Price: $<strong>{props.price}</strong> cup</p>   
    {controls.map(ctrl =>(<BuildControl   key= {ctrl.label} 
                                        label= {ctrl.label}
                                        added= {() => props.ingredientsAdded(ctrl.type)}
                                      removed= {() => props.ingredientsRemoved(ctrl.type)}
                                     disabled= {props.disabled[ctrl.type]}/>))}
                                     
    <button className= 'OrderButton'
             disabled= {!props.purchasable}
             onClick= {props.ordered} >
              
                Order now!</button>
</div>
);

export default buildControls;