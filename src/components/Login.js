import React, { useState} from 'react';

function Login(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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
        <div>
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

            <h6>Don't Have an account? <a href="http://localhost:3000/register">Register Here</a></h6>
            </form> 
        </div>
    );
}

export default Login;