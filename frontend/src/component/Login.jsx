
import React, { useState, useContext } from 'react';
import '../css/login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [error,setError]=useState([])

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  

  const handleLogin =async (e) => {
    e.preventDefault()
    setError([])
    document.getElementById('email').style.boxShadow = 'none';
    document.getElementById('password').style.boxShadow = 'none';

    try {
        if (email.trim() && password.trim() && email.match(/^\S+@\S+\.\S+$/) && (password>=8 || password<=20))
    {
      console.log('ayyyy');
        const response =await axios.post('http://127.0.0.1:8000/api/tcheckLogin',{
          'email':email,
          'password':password
        }) 
        if (response.data.message=='true') 
        {
          //S'il est authentifié, je le mets à true
          localStorage.setItem('authStatus', 'true');

          //Informations sur qui a été authentifié
          localStorage.setItem('email', response.data.students[0].user.email);
          localStorage.setItem('id', response.data.students[0].user.id);
          localStorage.setItem('nom', response.data.students[0].user.name);
          localStorage.setItem('prenom', response.data.students[0].familyname);
          localStorage.setItem('cin', response.data.students[0].cin);
          localStorage.setItem('phone', response.data.students[0].phone);
          localStorage.setItem('amountpay', response.data.students[0].amountpay);
          localStorage.setItem('cost', response.data.students[0].cost);
          localStorage.setItem('country', response.data.students[0].country);
          localStorage.setItem('dateofbirth', response.data.students[0].dateofbirth);
          localStorage.setItem('enddate', response.data.students[0].enddate);
          localStorage.setItem('level', response.data.students[0].level);
          localStorage.setItem('integrationdate', response.data.students[0].integrationdate);
          localStorage.setItem('registration', response.data.students[0].registration);
          localStorage.setItem('speciality', response.data.students[0].speciality);
          localStorage.setItem('statut', response.data.students[0].statut);
          localStorage.setItem('university', response.data.students[0].university);
          console.log(localStorage.getItem('id'));
          navigate('/page');
        }else if (response.data.message=='falsere'){
          
          alert('il y aune erreur dans les champs')
        }
    }
    if (!email || !email.trim() || email=='') 
    {
     
      setError((prevError)=>[...prevError,{name:'email',field:'Remplissez le champ du email '}])
      document.getElementById('email').style.boxShadow =  '0 0 5px 1px red';
      
      
    }
    if ( password &&  (password.length < 8 || password.length > 20))
    {
      setError((prevError) => [...prevError, { name: 'passwordLength', field: "Format de password" }]);
      document.getElementById('password').style.boxShadow = '0 0 5px 1px red';
    }
    else if( !password || !password.trim() )
    {
      setError((prevError) => [...prevError, { name: 'password', field: 'Remplissez le champ du password' }]);
      document.getElementById('password').style.boxShadow = '0 0 5px 1px red';
    }

    if( email && !email.match(/^\S+@\S+\.\S+$/))
    {
      setError((prevError)=>[...prevError,{name:'formatEmail',field:"Format d'e-mail non valide" }])
      document.getElementById('email').style.boxShadow =  '0 0 5px 1px red';
    }
   
   
        
    } catch (error) {
        console.error('Erreur de connexion', error);
    }
  };

console.log(error);
const displayError = (name) => {
  const erreur = error.find((el) => el.name === name);

  if (erreur !== undefined) {
    if (erreur.name === 'formatEmail') {
      return "Format d'e-mail non valide !!";
    } else if (erreur.name === 'passwordLength') {
      return 'Le mot de passe doit comporter entre 8 et 20 caractères.';
    }
  }
  if (erreur !== undefined && erreur.name !== 'formatEmail' && erreur.name !== 'passwordLength') {
    
    return 'field required';
  }

  
};

  return (
   <div>
      <h1 className='textLogin' contentEditable='true' >Ofppt</h1>
      <form className="auth-container" action="">
          <div className="login-form">
            <h2 className='h2Login' >Connexion</h2>
            <input type="email" placeholder="Votre email"  value={email} id='email'  onChange={(e) => setEmail(e.target.value)}/>
            <small>{displayError('email')}</small>  <small>{displayError('formatEmail')}</small>  <br /><br />
            <div className="password-container">
            <input type={showPassword ? 'text' : 'password'} value={password} id='password' onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" />
            <small>{displayError('password')}</small>  <small>{displayError('passwordLength')}</small> 
           
              <span className="eye-icon" onClick={togglePasswordVisibility}>
                {showPassword ? <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512">
                                  <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                                </svg>
                              : <i class="bx bxs-low-vision"></i>
                }
              </span>
            </div><br />
            <button className='btnLogin' type='submit' onClick={handleLogin}>Se connecter</button>
           
          </div>
      </form>
   </div>
  );
};

export default Login;
