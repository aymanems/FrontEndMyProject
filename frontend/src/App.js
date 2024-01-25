import React from 'react'
import Nav from './Etudiants/layout/nav';
import './App.css'
import Profile from './Etudiants/Profile/Profile';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './component/Login';
import Contact from './Etudiants/Contact/Contact';

function App() {
  return (
    <div >
    <div className='content'>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/page' element={<Nav />} />
      <Route path='/contact' element={<Contact />} />

    </Routes>
  </div>
    </div>
  );  
}

export default App;
