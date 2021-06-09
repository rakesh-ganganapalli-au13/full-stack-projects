import React,{useState,useContext} from 'react'
import {useHistory} from 'react-router-dom'

import {CredentialContext} from '../App'
import {handleErrors} from './register' //same logic for error handling so we import that logic to reduce code



function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const [,setCredentials] = useContext(CredentialContext)



    const login = (e)=>{
        e.preventDefault()
        // console.log(email,password)

        fetch('http://localhost:4000/login',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email,password})
        })
        .then( handleErrors )             //handling error if we want acces error in catch block directlu not working in react
        .then(()=>{
            setCredentials({email,password})
            history.push('/')
        })
        .catch((error)=>{
            // console.log("we are hear",error.message)
            setError(error.message)
        })
        

    }
    const history = useHistory()
    return (
        <>    
             <h1>Login</h1>
            {error&& <span style={{color:"red"}}>{error}</span>} 
            <form>
                <input type="email" placeholder="enter email" onChange={(e)=>setEmail(e.target.value)}/>
                <br />
                <input type="password" placeholder="enter password" onChange={(e)=>setPassword(e.target.value)}/>
                <br />
                <button type='submit' onClick={login}>Login</button>
            </form>
            <p>Don't have a account <a href='/register'>Signup</a></p>
        </>
    )
}

export default Login
