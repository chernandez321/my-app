//import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
  }
  state = { 
    persons: [{id:'1', name: 'Carlos', age: 25}, {id:'2', name: 'Suly',   age: 23}], 
    showPersons: false,
    showCockpit:true
};

componentDidUpdate(){
  console.log('[App.js] shouldComponent did update?');
  return true;
}

nameChangeHandler = (event, id) =>{

  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person = {...this.state.persons[personIndex]};
  person.name = event.target.value;
  const persons = [...this.state.persons];
  persons[personIndex] = person;
  this.setState({persons:persons})     
}

togglePersons =()=>{
  const statePers = this.state.showPersons;    
  this.setState({showPersons: !statePers});
}

deletePersons =(personIndex)=>{
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
    }

  render(){
   
    let persav= false;
    if(this.state.showPersons){
     persav = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersons}
          changed={this.nameChangeHandler}/>
      }

    
      return (

       <div className="App">
         <button onClick= {()=>{this.setState({showCockpit:false})}}> Remove cockpit</button>
         {this.state.showCockpit ? <Cockpit
         persons = {this.state.persons}
         show = {this.togglePersons}
         shows = {this.state.showPersons}
         /> :null }
         {persav}
      </div>
      
)};
  
  }
  export default App;




  /*  
const switchAgeHandler = () =>{
        setPersonsState({
        persons:[{name: 'Carlos', age: personState.persons[0].age +1}, 
                 {name: 'Suly',   age: personState.persons[1].age +1},]
      })
  }


*/
/*
  setPersonsState({
        persons:[{name: event,    age: personState.persons[0].age}, 
                 {name: 'Suly',   age: personState.persons[1].age},]
        })
        */