import React, {Component} from 'react';
import Person from '../Person/Person';

class Persons extends Component {

        shouldComponentUpdate(nextProps,nextState){
          if(nextProps.persons !== this.props.persons)
          return true;
          else {return false;}

        }

        render(){
          return this.props.persons.map((person, index) =>{
              return (  <Person name ={person.name} 
                           age  ={person.age} 
                           key  ={person.id} 
                         click  ={() => this.props.clicked(index)}
                        changed ={(event) => this.props.changed(event, person.id)} />
                        
        )}
          )}

        getSnapshotBeforeUpdate(prevProps,prevState){
          console.log('[ Person.js] getSnapshotBeforeUpdate');
          return {message:"flow"};
        } 
        componentDidUpdate(prevProps,prevState,snapchot){
          console.log('[ Person.js] componentDidUpdate');
          console.log(snapchot)
        }
        
        }

export default Persons;