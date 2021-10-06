import react from 'react';
import Aux from '../../../hoc/Aux';
//import BurgerBuilder from '../../BurgerBuilder/BurgerBuilder';

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
</Aux>)
}

export default orderSummary;