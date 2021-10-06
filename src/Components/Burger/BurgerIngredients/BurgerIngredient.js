import React, {Component} from 'react';
import propTypes from 'prop-types';
import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
        
    render(){
    let ingredient = null;

    switch(this.props.type){
        case ('breadtop'):
            ingredient = (<div className="breadtop">
                    <div className="seeds"/>
                    <div className="seeds2"/>
                </div>);
            break;
        case ('breadbottom'):
            ingredient = <div className = "breadbottom"/>
            break;       
        case ('meat'):
            ingredient = <div className='meat'/>
            break;
        case('cheese'):
            ingredient = <div className='cheese'/>
            break;
        case ('bacon'):
            ingredient = <div className='bacon'/>
            break;
        case ('salad'):
                ingredient = <div className='salad'/>
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