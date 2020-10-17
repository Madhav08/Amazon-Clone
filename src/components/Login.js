import { Link, useHistory } from "react-router-dom"
import React, { useState } from 'react'
import "./Login.css"
import { auth } from "../firebase"

function Login() {
    const history=useHistory();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(auth =>{
            history.push("/")
        })
        .catch(error => alert(error.message))
    }  
    

    return (
        <div className="login">
            <Link to="/">
            <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png" alt=""/>
            </Link>

            <div className="login__container"> 
                <h1>Sign-In</h1> 
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={emailHandler} />

                    <h5>Password</h5>
                    <input type="Password" onChange={passwordHandler} />

                    <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
                </form>
                <p>I accept all the terms & condition, Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit omnis provident nam maiores officia magnam pariatur libero laboriosam qui! Totam qui vitae ad excepturi voluptatibus?</p>
                <Link to="/register">
                    <button className="login__registerButton">Create Account</button>
                </Link>
            </div>
        </div>
    )
}

export default Login
