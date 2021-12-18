import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'

function Signup(props) {

    //email, full name, username, password
    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    if (props.loggedIn){
        return <Navigate to='/' />
      }

    let handleChange = (e) => {
        if(e.target.name === "username"){
            setUsername(e.target.value)
        } else if(e.target.name === "password"){
            setPassword(e.target.value)
        } else if(e.target.name === "name"){
            setFullName(e.target.value)
        } else if(e.target.name === "email"){
            setEmail(e.target.value)
        }
    }

    let handleSubmit = (e) => {
        //fetch will go here once backend is created
    }

    let randomColor = Math.floor(Math.random() * 16777215).toString(16);

    return (
        <div className='signup-component'>
            <form onSubmit={null}>
                <h1>🐕Animalgram📸</h1>
                <h3>Sign up to see photos of animals from your friends.</h3>
                <label>
                    <input 
                        type='text'
                        name='email'
                        autoComplete='off'
                        placeholder="Email"
                        value={email}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    <input 
                        type='text'
                        name='name'
                        autoComplete='off'
                        placeholder="Full Name"
                        value={fullName}
                        onChange={handleChange}
                    />
                </label>

                 <label>
                    <input 
                        type='text'
                        name='username'
                        autoComplete='off'
                        placeholder="Username"
                        value={username}
                         onChange={handleChange}
                    />
                </label>

                <label>
                    <input 
                        type='password'
                        name='password'
                        autoComplete='off'
                        placeholder="Password"
                        value={password}
                        onChange={handleChange}
                      />
                </label>

                <input type='submit' value='Sign Up'/>

                <p>By signing up, you agree to our terms of seeing adorable animals of all kinds.</p>
                </form>

                <form>
                    <h6>Already have an account? <a href="/login">Log in</a></h6>
                </form>
        </div>
    );
}

export default Signup;