import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./Register.css"
import {auth, db} from "../firebase"

function Register() {
    const history = useHistory()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createAccount = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            db.collection('users').doc(auth.user.uid).set({
                UserName: name,
                Email: email,
                UserId: auth.user.uid,
            })

            if(auth) {
                history.push('/login')
            }
            
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="register">
            <Link to="/">
            <img className="register__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png" alt=""/>
            </Link>

            <div className="register__container">
                <h1>Create Account</h1>
                <form action="">
                    <h5>Your Name</h5>
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className="register__inputField"/>

                    <h5>Email</h5>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} className="register__inputField"/>

                    <h5>Password</h5>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} className="register__inputField" />

                    <button onClick={createAccount} className="register__button">Create your Account</button>
                </form>
                <p>By creating an account, you agree Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="register__signin">
                <p>Already have an account <Link to="/login">Sign in</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Register
