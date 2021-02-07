import React from 'react'
import "../components/Login.css"
import {Link} from "react-router-dom"


function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img 
                     className="login__logo" 
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png" 
                     alt="amazon"
                />
            </Link>
           
           <div className="login__container">
               <h1>Sign in</h1>

               <form action="">
                    <h5>E-mail</h5>
                    <input type="email" maxLength="128"/>

                    <h5>Password</h5>
                    <input type="password"/>

                    <button className="login__signInButton">Sign In</button>

                    <p>
                        By continuing, you agree to Amazon's Conditions 
                        of Use and Privacy Notice. 
                    </p>
               </form>
               <div className="a-divider a-divider-break">
                    <h5>New to Amazon?</h5>
            </div>
            <button className="login__registerButton">Create your Amazon Account</button>
           </div>

         
        </div>
    )
}

export default Login
