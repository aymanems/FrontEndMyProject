import React, {  useEffect, useRef, useState } from 'react'
import '../css/nav.css'
import'../css/page.css'
import { Link, useNavigate,Route,Routes  } from 'react-router-dom'
import Profile from '../component/Profile';
import Notification from './../component/Notification';
import Personnelle from './../component/Personnelle';
function Nav() {

  const navigate=useNavigate()
  const sidebarRef = useRef(null);
  const toggleRef = useRef(null);
  const [section,setSection]=useState('')

  useEffect(() => {
    const sidebar = sidebarRef.current;

    if (!localStorage.getItem('authStatus')) {
      navigate('/')
    }

    localStorage.removeItem('Notification')
    localStorage.removeItem('personnelle')
    localStorage.removeItem('Profile') 


    },[])

    

    const Logout = () => {
      
      localStorage.removeItem('authStatus');
      navigate('/')
    };

  return (
  <div>
        <nav className="navbar">
          <div className="navbar-container">
            <div  iv className="navbar-left">
              <Link to="/page">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="navbar-right">
              <img src="/image/logo.jpg" alt="Logo"  className="navbar-logo" />
            </div>
          </div>
        </nav>





        <container   >
        <nav className="sidebar close" ref={sidebarRef}>
          <header>
            <div className="image-text">
              <span className="image">
                <img  src="/image/logo.jpg" alt="lg" srcset="" />
              </span>
  
              <div className="text header-text">
                <span className="name"> Arizona </span>
                {/*<span className="profession"> web devlopper </span>*/}
  
              </div>
            </div>
  
          </header>
  
          <div className="menu-bar">
            <div className="menu">
              <li className="search-box" >
              <i className='bx bx-search icon'></i>
                  <input type="search" placeholder='Search...' name="" id="" />
              </li>
              <ul className="menu-links">
  
              
               


                
                <li className="">
                  <div type='submit' className='lien'>
                  <i className='bx bx-home icon'></i>
                  <span className="text nav-text">Home</span>
                  </div>
                </li>

                <li className="">
                  <div className='lien' onClick={()=>{setSection('Notification')}}>
                  <i className='bx bx-bell icon'></i>
                  <span className="text nav-text">Notification</span>
                  </div>
                </li>

                <li className="">
                  <div className='lien' onClick={()=>{setSection('personnelle')}}>
                  <i className='bx bxs-file-find icon'></i>
                  <span className="text nav-text">Les I personnelle</span>
                  </div>
                </li>

                <li className="">
                  <div className='lien' onClick={()=>{setSection('Profile')}}>
                  <i className='bx bx-home icon'></i>
                  <span className="text nav-text">Profile</span>
                  </div>
                </li>
  
  
              </ul>
            </div>
  
            <div className="buttom-content">
                <li className="">
                    <button className='lien' onClick={Logout}>
                    <i className='bx bx-log-out icon'></i>
                    <span className="text nav-text">Logout</span>
                    </button>
                </li>
                <li>
   {/* */}
  </li>
  
  
  
                
            </div>
          </div>
         </nav>
     </container>



    <div className="content">
     
        


        {section === 'Profile' && localStorage.getItem('Profile') === null ? (
          <div>
            <Profile />
            {localStorage.setItem('Profile', 'true')}
            {localStorage.removeItem('personnelle') }
            {localStorage.removeItem('Notification') }
          </div>
        ) : null} 


        {section === 'personnelle' && localStorage.getItem('personnelle') === null ? (
          <div>
            <Personnelle />
            {localStorage.setItem('personnelle', 'true')}
            {localStorage.removeItem('Profile') }
            {localStorage.removeItem('Notification') }
          </div>
        ) : null} 


        {section === 'Notification' && localStorage.getItem('Notification') === null ? (
          <div>
            <Notification />
            {localStorage.setItem('Notification', 'true')}
            {localStorage.removeItem('personnelle') }
            {localStorage.removeItem('Profile') }
          </div>
        ) : null} 
    
    
    </div>




     

  </div>

    



  );
}

export default Nav;
