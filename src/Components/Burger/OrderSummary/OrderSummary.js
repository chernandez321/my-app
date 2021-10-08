import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'
import BurgerBuilder from '../../BurgerBuilder/BurgerBuilder';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).
    map(igKey => {
        return (<li key={igKey}><span>{igKey}</span>:{props.ingredients[igKey]}
                </li>);
    })
    
return(
<Aux>
    <h3>Your Order</h3>
    <p>A delicious burguer with the following ingredients:</p>

<ul>
    {ingredientSummary}
</ul>
<p>Continue to Checkout?</p>

<p><strong>Total amount: ${props.price}</strong></p>

<Button btnType='Danger' clicked={props.purchaseCanceled}>Cancel</Button>
<Button btnType='Success'clicked={props.purchaseContinued} >Continue</Button>
</Aux>)
}

export default orderSummary;