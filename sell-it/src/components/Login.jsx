import React, {useState} from 'react'
import "../components/Login.css"
import {Link, useHistory} from "react-router-dom"
import { auth } from '../firebase';


function Login() {

 const history = useHistory();
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const signIn = (e) => {
   e.preventDefault();
   auth.signInWithEmailAndPassword(email, password)
   .then( auth => {
       history.push('/')
   })
   .catch(error => alert(error.message))
 }

const register = (e) => {
    e.preventDefault();  
    auth.createUserWithEmailAndPassword(email, password)
    .then( (auth) => {
       console.log(auth);
       if(auth){
         history.push('/')
       }
    })
    .catch(error => alert(error.message))
}

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
                    <input type="email" maxLength="128" value={email} onChange={ e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type="submit" className="login__signInButton" onClick={signIn}>Sign In</button>

                    <p>
                        By continuing, you agree to Amazon's Conditions 
                        of Use and Privacy Notice. 
                    </p>
               </form>
               <div className="a-divider a-divider-break">
                    <h5>New to Amazon?</h5>
            </div>
            <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>
           </div>

         
        </div>
    )
}

export default Login
