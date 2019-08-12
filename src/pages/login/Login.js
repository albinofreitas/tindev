import React, { useState } from 'react';

import api from '../../services/api';
import './Login.css';
import logo from '../../assets/logo.svg';

function Login({ history }) {
    const [username, setUsername] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        
        api.post('devs', { username }).then(res => {
            const { _id } = res.data;
            
            history.push(`/dev/${_id}`);
        }).catch(err => {
            console.log(err.status);
        });
    }

    return (
        <div className="login-container">
            <form>
                <img src={logo} alt="Tindev Logo" />
                <input 
                    type="text"
                    placeholder="Digite seu usuário do github"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit" onClick={handleSubmit}>Enviar</button>
            </form>
        </div>
    );
}

export default Login;