import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Loginpage.css';
import { auth } from './firebase';

const Loginpage = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=>{
                console.log(auth);
                if (auth){
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src="data:image/jpeg;base64,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" alt="" />
            </Link>
            <div className="login_container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    
                    <button type='submit' onClick={signIn} 
                    className="loginButton">sign-in</button>
                </form>

                <p>
                    By signing in you agree to Shop Here's conditions of use & sale. Please see our Privacy Notice, our Cookies Notice and our Interest-based ads Notice.
                </p>

                <button onClick={register}
                className="registerButton">Create your own amazon clone account</button>
            </div>
        </div>
    )
}

export default Loginpage