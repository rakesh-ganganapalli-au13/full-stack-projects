import './App.css';
import React,{useState} from 'react'
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Register from "./pages/register"
import Welcome from './pages/welcome';
import Login from './pages/login';

export const CredentialContext = React.createContext();

function App(){

   const credentialState = useState()

    return(
      <div className = "App">
        <CredentialContext.Provider value={credentialState}>
          <Router>
            <Switch>
                <Route path='/' exact   component ={Welcome}></Route>
                <Route path='/register' component={Register}></Route>
                <Route path='/login' component={Login}></Route>
            </Switch>
          </Router>
        </CredentialContext.Provider>
        
      </div>
    );
  }


export default App;

