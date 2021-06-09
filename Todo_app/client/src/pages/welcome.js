import React,{useContext} from 'react'
import {Link} from 'react-router-dom'

import {CredentialContext} from '../App'
import Todos from '../components/Todos'
// import Login from './login'


export default function Welcome() {
    const [credentials,setCredentials] = useContext(CredentialContext)
    // console.log(credentials)

    const logout = ()=>{
        setCredentials(null)
    }

    return (
        <div>
            {credentials && <button onClick={logout}>Logout</button>}
            <h1>Welcome {credentials && credentials.email}</h1>
            {!credentials&&<Link to='/register'>Register</Link>}
            <br/>
            {!credentials&&<Link to='/login'>Login</Link>}
            {/* {credentials && <Todos/>} */}
            <Todos/>
        </div>
    )
}
