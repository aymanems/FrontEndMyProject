
import React, { useState, useContext } from 'react';
import '../css/login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from '../privateRoute/AuthProvider'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()
  const { authStatus, setAuthStatus } = useContext(AuthContext);
  

  const handleLogin =async (e) => {
    e.preventDefault()
    try {
        if (email.trim() && password.trim() && email.match(/^\S+@\S+\.\S+$/))
    {
        const response =await axios.post('http://127.0.0.1:8000/api/tcheckLogin',{
          'email':email,
          'password':password
        })  
        // console.log(response.data.message);
        if (response.data.message=='true') 
        {
          setAuthStatus(true);
          navigate('/page');
          console.log(authStatus);
        }
    }
    else 
    {
        alert('Remplissez tous les champs')
    }
        
    } catch (error) {
        console.error('Erreur de connexion', error);
    }
  };

  return (
    <form className="auth-container" action="">
            <div className="login-form">
                <h2>Connexion</h2>
                <input type="email" placeholder="Votre email"  value={email}  onChange={(e) => setEmail(e.target.value)}/>
                <input type="password"placeholder="Mot de passe"value={password}onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit' onClick={handleLogin}>Se connecter</button>
             </div>
      </form>
  );
};

export default Login;
