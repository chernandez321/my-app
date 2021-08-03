import React, {Component} from 'react';
import './Person.css'; 

class Person extends Component{
    render(){
       return (
        <div className="Person">
        <p>Hi there, I'm {this.props.name} and I'm {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed}/>
        <button onClick={this.props.click}> Delete </button>
        </div>
    )}
}
  
export default Person;