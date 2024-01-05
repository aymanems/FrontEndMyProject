import React, { useEffect, useRef } from 'react'
import Nav from '../layout/nav'
import '../css/page.css'
import { Link } from 'react-router-dom'
function Page() {
  const sidebarRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    // Accessing the current property of the refs to get the actual DOM elements
    // const body = bodyRef.current;
    const sidebar = sidebarRef.current;
    const toggle = toggleRef.current;
    // const searchBtn = searchBtnRef.current;
    // const modeSwitch = modeSwitchRef.current;
    // const modeText = modeTextRef.current;

    if (toggle) {
      toggle.addEventListener('click', () => {
        sidebar.classList.toggle('close');
      });
    }},[])
return (
    <div>
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

          <i class='bx bx-chevron-right toggle'  ref={toggleRef}></i>
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
                <Link className='lien' to={'/page'}>
                  <i class='bx bx-log-out icon'></i>
                  <span className="text nav-text">Logout</span>
                </Link>
              </li>


              
          </div>
        </div>
       </nav>
   </container>



   <div className='content' >

   <div
    class="table-responsive"
   >
    <table
      class="table table-primary"
    >
      <thead>
        <tr>
          <th scope="col">Column 1</th>
          <th scope="col">Column 2</th>
          <th scope="col">Column 3</th>
        </tr>
      </thead>
      <tbody>
        <tr class="">
          <td scope="row">R1C1</td>
          <td>R1C2</td>
          <td>R1C3</td>
        </tr>
        <tr class="">
          <td scope="row">Item</td>
          <td>Item</td>
          <td>Item</td>
        </tr>
        <tr class="">
          <td scope="row">Item</td>
          <td>Item</td>
          <td>Item</td>
        </tr>
        <tr class="">
          <td scope="row">Item</td>
          <td>Item</td>
          <td>Item</td>
        </tr>
        <tr class="">
          <td scope="row">Item</td>
          <td>Item</td>
          <td>Item</td>
        </tr>
      </tbody>
    </table>
   </div>
   


   </div>
   



    </div>
  )
}

export default Page