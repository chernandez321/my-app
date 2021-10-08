import React from "react";
import Logo from '../../asset/images/logo.png';
import classes from'./Logo.module.css'

const logo =(props)=>(
<div className={classes.Logo} style ={{height:props.height}}>
    <img src={Logo} alt="MyBurger"/>
</div>
);

export default logo;