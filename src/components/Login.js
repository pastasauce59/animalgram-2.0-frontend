import React, { useState} from 'react';

function Login(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let handleSubmit = (e) => {
        //fetch will go here once backend is created
    }

    return (
        <div>
            <form onSubmit={null}>
                <h1>Login</h1>
                <label>Username: </label>
                <input 
                    type='text'
                    name='username'
                    autoComplete='off'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label>Password: </label>
                <input 
                    type='password'
                    name='password'
                    autoComplete='off'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input type='submit' value='Login'/>

            </form> 
        </div>
    );
}

export default Login;