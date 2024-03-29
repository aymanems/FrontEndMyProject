import React, {  useEffect, useRef, useState } from 'react'
import './nav.css'
import'./page.css'
import { Link, useNavigate,Route,Routes  } from 'react-router-dom'
import Profile from '../Profile/Profile';
import Notification from '../Notification/Notification';
import Home from '../Home/Home';
import Chat from '../Chat/Chat';

function Nav() {

  const navigate=useNavigate()
  const [section,setSection]=useState('Home')
  const [messageArrived, setMessageArrived] = useState(false);


  useEffect(() => {

    if (!localStorage.getItem('authStatus')) {
      navigate('/')
    }

    if (localStorage.getItem('messageArrived')=='true') {
      setMessageArrived(true)
    }

   

    },[])

    

    const Logout = () => {
      //Supprimer tous les cookies
      localStorage.removeItem('authStatus');
      localStorage.removeItem('id');
      localStorage.removeItem('email')
      localStorage.removeItem('nom')
      localStorage.removeItem('prenom')
      localStorage.removeItem('cin')
      localStorage.removeItem('phone')
      localStorage.removeItem('amountpay')
      localStorage.removeItem('cost')
      localStorage.removeItem('country')
      localStorage.removeItem('dateofbirth')
      localStorage.removeItem('enddate')
      localStorage.removeItem('level')
      localStorage.removeItem('integrationdate')
      localStorage.removeItem('registration')
      localStorage.removeItem('speciality')
      localStorage.removeItem('statut')
      localStorage.removeItem('university')
      navigate('/')
    };

  return (
  <div>
       





        <container   >
        <nav className="sidebar close" >
          <header>
            <div className="image-text">
              <span className="image">
                <img  src="/image/logo.jpg" alt="lg" srcset="" />
              </span>
  
              <div className="text header-text">
                <span className="name"> Ofppt </span>
                
                </div>
                </div><br />
                <hr /><br />
  
          </header>
  
          <div className="menu-bar">
            <div className="menu">
              <li className="search-box">
              <i className='bx bx-search icon'></i>
                  <input type="search" placeholder='Search...'/>
              </li>
              <ul className="menu-links">
  
              
               


                
                <li className="">
                  <div  className='lien' onClick={()=>{setSection('Home')}}>
                    <i className='bx bx-home icon'></i>
                    <span className="text nav-text">Home</span>
                  </div>
                </li>

                <li className="">
                  <div className='lien' onClick={()=>{setSection('Notification')}}>
                  <div className={`notification-icon ${messageArrived ? 'message-arrived' : ''}`}>
                    <i className='bx bx-bell icon'></i>
                    {messageArrived && <div className='notification-dot'></div>}
                  </div>
                  <span className="text nav-text">Notification</span>
                  </div>
                </li>

               

                <li className="">
                  <div className='lien' onClick={()=>{setSection('Profile')}}>
                  <i className='bx bxs-face icon'></i>
                  <span className="text nav-text">Profile</span>
                  </div>
                </li>


                <li>
                  <div className='lien' onClick={()=>{setSection('Chat')}}>
                  <i class='bx bx-message-dots icon'></i>
                  <span className="text nav-text">Chat</span>
                  </div>
                </li>
  
  
              </ul>
            </div>
  
                <li className="">
                    <button className='lienButton lien' onClick={Logout}>
                    <i className='bx bx-log-out icon'></i>
                    <span className="text nav-text">Logout</span>
                    </button>
                </li>
          </div>
         </nav>
     </container>



    
     
        


        {section === 'Home'  ? (
          <div className='content'>
              <Home/>
          </div>
        ) : null} 


        {section === 'Profile'  ? (
          <div className='content'>
            <Profile setMessageArrived={setMessageArrived} />
          </div>
        ) : null} 


       


        {section === 'Notification'? (
          <div className='content'>
            <Notification setMessageArrived={setMessageArrived} />
          </div>
        ) : null} 
        
        
        {section === 'Chat'? (
          <div className='content'>
            <Chat />
          </div>
        ) : null} 
    
    
    </div>




     

  

    



  );
}

export default Nav;
