import React,{useState,useContext} from 'react'
import {useHistory} from 'react-router-dom'

import {CredentialContext} from '../App'

export const handleErrors = async(responce)=>{
    if(!responce.ok){
        const {message} = await responce.json()
        throw Error(message)
    }
    return responce.json()
}

function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const [,setCredentials] = useContext(CredentialContext)



    const register = (e)=>{
        e.preventDefault()
        // console.log(email,password)

        fetch('http://localhost:4000/register',{
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
             <h1>Register</h1>
            {error&& <span style={{color:"red"}}>{error}</span>} 
            <form>
                <input type="email" placeholder="user email" onChange={(e)=>setEmail(e.target.value)}/>
                <br />
                <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
                <br />
                <button type='submit' onClick={register}>Register</button>
            </form>
            <p>have a account <a href='/login'>Login</a></p>
        </>
    )
}

export default Register
