import React, {useEffect} from 'react';
import classes  from './Cockpit.css';

const Cockpit = (props)=>{
        
        useEffect(()=>{
            setTimeout(()=> {alert("Uploaded!")}, 3000)
        return ()=>{console.log('cockpit removed')}
    }
        , [props.persons]);

    const clases = [];
    const style = {
        backgroundColor:'green',
        font: 'inherit',
        padding: '8px',
        cursor: 'pointer',
        } 
    if(props.persons.length <= 2 )
      clases.push('red');
    
    if(props.persons.length <= 1 )  
    clases.push('bold');

    if(props.shows)    
    style.backgroundColor = 'red';

    return(
            <div className= {classes.cockpit}>
                    <header className="Cockpit-header"> Cakemania </header>
                    <p className={clases.join(' ')}>Some dinamic css</p>
                    <button style={style} onClick = {props.show}>  Persons   </button> 
                    
            </div>);
}

export default Cockpit;