import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import classes from './Layout.module.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/NavigationItems/SideDrawer/SideDrawer";

class Layout extends Component{
    
    state ={
        showSideDrawer:true
     //   menu:false
    }

    sideDrawerCloseHandler=()=>{
        this.setState({showSideDrawer:false});
    }
    /*
    menuOpen =()=>{
    this.setState(menu:true)    
    }
    menuClose=()=>{
    this.setState(menu:false)    
    }
    */

    render(){
        return(
                <Aux>
                    <div>
                        <Toolbar />
                        <SideDrawer open={this.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
                        Backdrop
                    </div>
                    <main className={classes.Content}>
                        {this.props.children}
                    </main>
                </Aux>
        );
    }
}

export default Layout;