import { Component } from "react";
import BurgerBuilder from "../Components/BurgerBuilder/BurgerBuilder";
import Layout from "../Components/Layout/Layout";
import classes from "./App.module.css";

class App extends Component {
  
  render(){
  return (
    <div>
          <Layout>
            <BurgerBuilder />
          </Layout>
    </div>
  );}
  
}

export default App;
