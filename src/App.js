import React from 'react';
import './App.css';
import Container from "./Components/login/container";
import {  Switch , Route} from "react-router-dom";
import Dashboard from "./Components/Dashboard";
function App() {
  return (
   
    <Switch>
      <Route  exact path="/" component={ Container }/>
      <Route  path="/dashboard" component={ Dashboard }/>
      
    </Switch>
  );
}

export default App;
