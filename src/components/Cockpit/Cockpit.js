import React, {useEffect, useRef, useContext} from 'react';
import classes  from './Cockpit.css';
import AuthContext from '../../context/auth-context';
import { ContextExclusionPlugin } from 'webpack';

const Cockpit = (props)=>{
   
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext)

    useEffect(()=>{
            //setTimeout(()=> {alert("Uploaded!")}, 3000)
            toggleBtnRef.current.click();
            return ()=>{console.log('cockpit removed')}
    }, [props.persons]);

    /*useEffect(()=>{
        setTimeout(()=> {alert("Uploaded!")}, 1000)
    return ()=>{console.log('cockpit 2nd removed')}
    });
    */


    const clases = [];
    const style = {
        backgroundColor:'green',
        font: 'inherit',
        padding: '8px',
        cursor: 'pointer',
        } 
    if(props.personsLength <= 2 )
      clases.push('red');
    
    if(props.personsLength <= 1 )  
    clases.push('bold');

    if(props.shows)    
    style.backgroundColor = 'red';
   
    return(
            <div className= {classes.cockpit}>
                    <header className="Cockpit-header"> Cakemania </header>
                    <p className={clases.join(' ')}>Some dinamic css</p>
                    <button ref={toggleBtnRef} style={style} onClick = {props.show}>  Persons   </button> 
                    <button onClick={authContext.login} style={style}>Log in</button>
                        //revisar
                    
                    
            </div>);
}

export default React.memo(Cockpit);