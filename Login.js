
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const validUser = users.find(user => user.username === username && user.password === password);
        validUser 
            ? onLogin(username) 
            : alert("Invalid username or password. Please try again.");
    };

    return (
        <div className='container'>
            <div id="loginSection">
                <h3>Login</h3>
                <form onSubmit={handleLogin}>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={e => setUsername(e.target.value)} 
                        placeholder="Username" 
                        required 
                    />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                        placeholder="Password" 
                        required 
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};


export default Login;

