import './App.css';
import './components/navbar/navbar.css' //styling for navbar
import React from 'react'

import Navbar from "./components/navbar/nav"

import {BrowserRouter as Router,Route} from 'react-router-dom'

import Home from './components/screens/home'
import Profile from './components/screens/profile'
import Signup from './components/screens/Signup'
import Signin from './components/screens/Signin'




function App(){

  return(
      <div className = "App">
        <Router>
            <Navbar/>
            <Route path='/' exact><Home /></Route>
            <Route path='/profile'><Profile /></Route>
            <Route path='/signup'><Signup /></Route>
            <Route path='/signin'><Signin /></Route>
        </Router>
        
      </div>
    );
}

export default App;
