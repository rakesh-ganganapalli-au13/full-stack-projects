import React from 'react';
import {Link} from 'react-router-dom'

function Signup() {
    return (
        <div className="mycard">
            <div className="card input-field">
               <h2>instagram</h2>
               <input type="text" placeholder="Enter name" name="name"></input>
               <input type="text" placeholder="Enter email" name="email"></input>
               <input type="text" placeholder="Enter password" name="password"></input>
                   
               <button className="btn waves-effect waves-light #2196f3 blue">Signup</button>
               <p >Have an acount <Link to='/Signin'><strong>Login</strong></Link></p>
            </div>
        </div>
    )
}

export default Signup
