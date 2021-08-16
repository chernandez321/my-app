//import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context';
//import Aux from '../hoc/Aux';

class App extends Component {

  constructor(props){
    super(props);

  }
  state = { 
    persons: [{id:'1', name: 'Carlos', age: 25}, {id:'2', name: 'Suly',   age: 23}], 
    showPersons: true,
    showCockpit:true,
    changeCounter:0,
    authenticated:false
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

  //set state correctly right down
    this.setState((prevState, props)=>{
      return {  persons:persons, 
                changeCounter:this.state.changeCounter + 1
              }
  })     
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

loginHandler = () =>{
  this.setState({authenticated:true});
}

  render(){
   
    let persav= false;
    if(this.state.showPersons){
     persav = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersons}
          changed={this.nameChangeHandler}
          isAuthenticated={this.state.authenticated}
          />
      }

      return (
       <WithClass classes="App">       
         <button onClick= {()=>{this.setState({showCockpit:false})}}> Remove cockpit</button>
         <AuthContext.Provider value={{autenticated: this.state.authenticated, 
                                       login:this.loginHandler}}>
         {this.state.showCockpit ? (
                                    <Cockpit
                                    personsLength = {this.state.persons.length}
                                    show          = {this.togglePersons}
                                    shows         = {this.state.showPersons}
                                    login         = {this.loginHandler}
                                    />) :null }
         {persav}
         </AuthContext.Provider>
      </WithClass>
    );}
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