import React from "react";
import Logo from"../../../Logo/Logo";
import NavigationsItems from "../NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from"../../../UI/Backdrop/Backdrop"
import Aux from "../../../../hoc/Aux";

const sideDrawer =(props)=>{
    
    let attachedClasses = [classes.SideDrawer,classes.Close];

    if(props.open){
        attachedClasses = [classes.SideDrawer,classes.Open];
    }

    return(
        <Aux>
            <Backdrop show={props.showSideDrawer} clicked={props.closed}/>
                <div className={attachedClasses.join(' ')}>   
                        <Logo height="11%"/>
                    <nav>
                        <NavigationsItems />
                    </nav>
                </div>
        </Aux>
    );
}

export default sideDrawer;