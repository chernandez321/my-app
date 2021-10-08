import React, {Component} from 'react';
import propTypes from 'prop-types';
import classes from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {
        
    render(){
    let ingredient = null;

    switch(this.props.type){
        case ('breadtop'):
            ingredient = (<div className={classes.breadtop}>
                    <div className={classes.seeds}/>
                    <div className={classes.seeds2}/>
                </div>);
            break;
        case ('breadbottom'):
            ingredient = <div className = {classes.breadbottom}/>
            break;       
        case ('meat'):
            ingredient = <div className= {classes.meat}/>
            break;
        case('cheese'):
            ingredient = <div className= {classes.cheese}/>
            break;
        case ('bacon'):
            ingredient = <div className= {classes.bacon}/>
            break;
        case ('salad'):
                ingredient = <div className={classes.salad}/>
                break;
        default:
            ingredient=null;
    }
    return ingredient;
}
}

BurgerIngredient.propTypes ={
    type: propTypes.string.isRequired
}

export default BurgerIngredient;