import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import BuildControls from "../Burger/BuildControls/BuildControls";
import Burger from "../Burger/Burger";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "../Burger/OrderSummary/OrderSummary";
    
const INGREDIENTS_PRICES = {
        salad:10,
        cheese:15,
        meat: 25,
        bacon:10
    }

class BurgerBuilder extends Component {

    state={
            ingredients:{
                salad:0,
                bacon:0,
                cheese:0,
                meat:0
            },
            totalPrice:5,
            purchase:false,
            purchasing:false
        }

            updatePurchaseState(ingredients){
                
                const sum = Object.keys(ingredients).map(igKey => {
                    return ingredients[igKey];
                }).reduce((sum, el) =>{
                    return sum + el;
                },0)
                this.setState({purchase: sum > 0});
            }

            addIngredtientHandler = (type) => {
                const oldCount = this.state.ingredients[type];
                const updatedCounted = oldCount + 1;
                const updatedIngredients = { ...this.state.ingredients}
                updatedIngredients[type] = updatedCounted;
                const price_adition = INGREDIENTS_PRICES[type];
                const newPrice = this.state.totalPrice + price_adition;
                this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
                this.updatePurchaseState(updatedIngredients);
            }
            
            removeIngredientHandler = (type) => {
                const oldCount = this.state.ingredients[type];
                if(oldCount <=0){
                    return;}
                const updatedCounted = oldCount - 1;
                const updatedIngredients = { ...this.state.ingredients}
                updatedIngredients[type] = updatedCounted;
                const price_lowed = INGREDIENTS_PRICES[type];
                const newPrice = this.state.totalPrice - price_lowed;
                this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
                this.updatePurchaseState(updatedIngredients);
            }
 
            showOrder= () => {
                this.setState({purchasing:true});
            
            <Modal><OrderSummary ingredients={this.state.ingredients}/></Modal>
            }

    render(){

        const disabledInfo ={
            ...this.state.ingredients 
        }
        for( let value in disabledInfo){
            disabledInfo[value] = disabledInfo <= 0
        }
        return (
            <Aux>
                <Modal show = {this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientsAdded = {this.addIngredtientHandler}
                             ingredientsRemoved = {this.removeIngredientHandler}
                                       disabled = {disabledInfo}
                                    purchasable = {this.state.purchase}
                                          price = {this.state.totalPrice}
                                        ordered = {this.showOrder}
                             />
                               
            </Aux>
        );
    }
}

export default BurgerBuilder; 


                