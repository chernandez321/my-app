import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';
//import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';


const burger = (props) => {
  let transformedIngredients = Object.keys( props.ingredients )
  .map ( igKey => {      
      return [...Array(props.ingredients[igKey])].map((_,i) => {
            return <BurgerIngredient key={igKey + i} type ={igKey} />;
        }); 
    }).reduce((arr,el)=> {
        return arr.concat(el);
    },[])
  
    //console.log(transformedIngredients);
    if(transformedIngredients.length === 0)
        transformedIngredients = <p>Add your favorites ingredients!</p>

    return(
        <div className= "Burger">
            <BurgerIngredient type="breadtop"/>
            {transformedIngredients}
            <BurgerIngredient type="breadbottom" />
        </div>
    );
}
export default burger;
