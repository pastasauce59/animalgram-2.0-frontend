import React, { useState} from 'react';
import { Navigate } from 'react-router-dom'

function Login(props) {

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
        }
    }

    let handleSubmit = (e) => {
        //fetch will go here once backend is created
    }

    return (
        <div className="login-component">
            <form onSubmit={null}>
                <h1>🐕Animalgram📸</h1>
                <label>
                {/* <span>Username:</span> */}
            
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
                    {/* <span>Password:</span> */}
                <input 
                    type='password'
                    name='password'
                    autoComplete='off'
                    placeholder="Password"
                    value={password}
                    onChange={handleChange}
                />
                </label>

                <input type='submit' value='Login'/>

            {/* <h6>Don't have an account? <a href="http://localhost:3000/signup">Sign up</a></h6> */}
            </form>

            <form>
                <h6>Don't have an account? <a href="/signup">Sign up</a></h6>
            </form>
        </div>
    );
}

export default Login;