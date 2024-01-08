import React, { useEffect, useState } from 'react'
import Nav from '../layout/nav'
import axios from 'axios'
import '../css/profile.css'

function Profile() {
  
  return (
    <div >

    <h1 className='textProfile'>Bonjour &ensp; {localStorage.getItem('nom')} &ensp;{localStorage.getItem('prenom')}</h1>
    
    
    </div>
  )
}

export default Profile