import React, {Component, Fragment} from 'react';
import './Person.css'; 
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth-context';

class Person extends Component{
    
    static contextType = AuthContext;

    constructor (props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount(){
        //this.inputElement.focus(); 
        this.inputElementRef.current.focus();
    }

    render(){
        {this.context.autenticated ? <p>Authenticated!</p>:<p>Please Log in</p>}
        
        console.log('[Person is rendering]');
        return (
        <Fragment>
        <p>Hi there, I'm {this.props.name} and I'm {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input ref={this.inputElementRef} type="text" onChange={this.props.changed}/>
        <button onClick={this.props.click}> Delete </button>
        </Fragment>
    )}  
}
  
Person.propTypes = {
    name:PropTypes.string,
    age: PropTypes.number,
    click: PropTypes.func,
    changed: PropTypes.func
}
export default Person;