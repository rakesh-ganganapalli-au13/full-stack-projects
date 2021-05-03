import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <div className="mycard">
            <div className="card input-field">
               <h2>instagram</h2>
               <input type="text" placeholder="Enter email" name="name"></input>
               <input type="text" placeholder="Enter password" name="password"></input>
                   
               <button className="btn waves-effect waves-light #2196f3 blue">Login</button>
               <p >Don't have an acount <Link to='/Signup'><strong>Signup</strong></Link></p>
            </div>
        </div>
    )
}

export default Login
