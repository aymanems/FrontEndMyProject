import React, {  useEffect, useRef, useState } from 'react'
import Nav from '../layout/nav'
import '../css/page.css'
import { Link, useNavigate  } from 'react-router-dom'

function Page() {
  
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
    <div className='element'>
      <div className="nav">

      <Nav />
      
      </div>

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
                <Link className='lien' to={'/page'}>
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



   <div className='content'>
   
 </div>

   



    </div>
  )
}

export default Page