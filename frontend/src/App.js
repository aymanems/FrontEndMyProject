import React from 'react'
import Nav from './layout/nav';
import './App.css'
import Profile from './component/Profile';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './component/Login';
import About from './component/About';
import Contact from './component/Contact';

function App() {
  return (
    <div >
    <div className='content'>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/page' element={<Nav />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />

    </Routes>
  </div>
    </div>
  );  
}

export default App;
