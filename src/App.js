import React from 'react';
import './App.css';
import { Switch,Route } from 'react-router-dom'
import Home from './pages/Home/home'

import Header from './components/header/header'

import Login from "./pages/login/login"
import AddEmployee from "./components/employee/employee"

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component = {Login} />
        <Route exact path='/home' component = {Home}/>
        <Route exact path='/addEmployee' component = {AddEmployee} />
      </Switch>
    </div>
  );
}

export default App;
