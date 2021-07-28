//import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js';


class App extends Component {

  state = {
    persons: [{id:'1', name: 'Carlos', age: 25}, {id:'2', name: 'Suly',   age: 23}], 
    showPersons: false
};


nameChangeHandler = (event, id) =>{

  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person = {...this.state.persons[personIndex]};
  person.name = event.target.value;
  const persons = [...this.state.persons];
  persons[personIndex] = person;
  this.setState({persons:persons})
      const statePers = this.state.showPersons;    
      this.setState({showPersons: !statePers});
}
deletePersons =(personIndex)=>{
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
    }

  render(){
    
    const style = {
      backgroundColor:'green',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer',
      } 

    let persav= false;
    if(this.state.showPersons){
     persav = (
       <div>
       {  this.state.persons.map((person, index) =>{
         return <Person name ={person.name} 
                        age  ={person.age} 
                        key  ={person.id} 
                      click  ={() => this.deletePersons(index)}
                      changed={(event) => this.nameChangeHandler(event, person.id)} />
       })}
       </div> 
      )
       style.backgroundColor = 'red';
      }; 
    
      const classes = [];
      if(this.state.persons.length <= 2 )
        classes.push('red');
      
      if(this.state.persons.length <= 1 )  
      classes.push('bold');

      return (
       
       <div className="App">
         <header className="App-header"> Cakemania </header>
         <p className={classes.join(' ')}>Some dinamic css</p>
            <button style={style}onClick = {this.togglePersons}>  Persons   </button> 
            {persav}
          
         
         <footer className="">derechos reservados</footer>
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