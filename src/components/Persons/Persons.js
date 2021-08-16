import React, {PureComponent, useContext} from 'react';
import Person from '../Person/Person';
import AuthContext from '../../context/auth-context';

class Persons extends PureComponent {

  static authContext = useContext(AuthContext);

        /*shouldComponentUpdate(nextProps,nextState){
          if(nextProps.persons !== this.props.persons ||
             nextProps.changed !== this.props.changed ||
             nextProps.clicked !== this.props.clicked
              ) 
          return true;
          else {return false;}

        }*/

        render(){
          return this.props.persons.map((person, index) =>{
              return (  <Person name ={person.name} 
                           age  ={person.age} 
                           key  ={person.id} 
                         click  ={() => this.props.clicked(index)}
                        changed ={(event) => this.props.changed(event, person.id)}
                        isAuth ={this.props.isAuthenticated}
                        />
        );
        })};

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