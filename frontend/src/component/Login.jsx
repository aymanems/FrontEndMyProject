
import React, { useState } from 'react';
import '../css/login.css';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    try {
        if (email.trim() && password.trim() && email.match(/^\S+@\S+\.\S+$/))
    {
        const response =axios.post('http://127.0.0.1:8000/api/administrator-tcheck-login',{
          'email':email,
          'password':password
        })  

        if (response.data.message=='true') {
        }
    }
    else 
    {
        alert('Remplissez tous les champs')
        navigate('/page', { state: { bool: true } });
    }
        
    } catch (error) {
        console.error('Erreur de connexion', error);
    }
  };

  return (
    <div className="auth-container">
      <form action="">
            <div className="login-form">
                <h2>Connexion</h2>
                <input type="email" placeholder="Votre email"  value={email}  onChange={(e) => setEmail(e.target.value)}/>
                <input type="password"placeholder="Mot de passe"value={password}onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit' onClick={handleLogin}>Se connecter</button>
             </div>
      </form>
     
    </div>
  );
};

export default Login;
