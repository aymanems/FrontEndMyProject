import React, {  useEffect, useRef, useState } from 'react'
import '../css/nav.css'
import'../css/page.css'
import { Link, useNavigate,Route,Routes  } from 'react-router-dom'
import Profile from '../component/Profile';
function Nav() {

  const navigate=useNavigate()
  const sidebarRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const sidebar = sidebarRef.current;

    if (!localStorage.getItem('authStatus')) {
      navigate('/')
    }
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
              <i class='bx bx-search icon'></i>
                  <input type="search" placeholder='Search...' name="" id="" />
              </li>
              <ul className="menu-links">
  
              
                <li className="nav-link">
                  <Link className='lien' to={'/page'}>
                  <i class='bx bx-home icon'></i>
                  <span className="text nav-text">Home</span>
                  </Link>
                </li>
                <li className="nav-link">
                  <Link className='lien' to={'/page'}>
                  <i class='bx bx-bell icon'></i>
                  <span className="text nav-text">Notification</span>
                  </Link>
                </li>
                <li className="nav-link">
                  <Link className='lien' to={'/page'}>
                  <i class='bx bx-home icon'></i>
                  <span className="text nav-text">Home</span>
                  </Link>
                </li>
                <li className="nav-link">
                  <Link className='lien' to={'/page'}>
                  <i class='bx bx-home icon'></i>
                  <span className="text nav-text">Home</span>
                  </Link>
                </li>
                <li className="nav-link">
                  <Link className='lien' to={'/page'}>
                  <i class='bx bxs-file-find icon'></i>
                  <span className="text nav-text">Les I personnelle</span>
                  </Link>
                </li>
                <li className="nav-link">
                  <Link className='lien' to={'/profile'}>
                  <i class='bx bx-user icon'></i>
                  <span className="text nav-text">Profile</span>
                  </Link>
                </li>
  
  
              </ul>
            </div>
  
            <div className="buttom-content">
                <li className="">
                    <button className='lien' onClick={Logout}>
                    <i class='bx bx-log-out icon'></i>
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
     
     
     </div>





  </div>


    



  );
}

export default Nav;
