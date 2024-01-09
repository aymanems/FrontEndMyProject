import React, { useEffect, useState } from 'react'
import Nav from '../layout/nav'
import axios from 'axios'
import '../css/profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


function Profile() {
  const [profileImage, setProfileImage] = useState(null);
  const [formPass, setFormPass] = useState({
    email: '',
    currentPassword: '',
    newPassword: '',
  });
  const id=localStorage.getItem('id')

  const axiosProfileImage = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/student/profile/getimage/${id}`);
      setProfileImage(response.data.imageUrl);
    } catch (error) {
      console.error('Erreur lors du chargement de l\'image du profil', error);
    }
  };
  useEffect(()=>{
    axiosProfileImage();
  })

  const handleImageChange=async (e)=>{
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    
    console.log(formData);

    try {
      const res=await axios.post(`http://127.0.0.1:8000/api/student/profile/image/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (res.data && res.data.message) {
        console.log(res.data.message);
      } else {
        console.error('Image property not found in the response');
      }

      axiosProfileImage();
    } catch (error) {
      console.error('Erreur lors du téléchargement de l\'image du profil', error);
    }
  }





  // funtction pour ajouter le premier lettre majuscule
  const PremiereLettreMajuscule=(texte)=>{
    if (!texte) {
      return null;
    }

    const premiereLettreMajuscule = texte.charAt(0).toUpperCase();
    const resteDuTexte = texte.slice(1);
    const texteAvecPremiereLettreMajuscule = premiereLettreMajuscule + resteDuTexte;

    return texteAvecPremiereLettreMajuscule
  }


  const handleChange = (e) => {
    setFormPass({ ...formPass, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission (e.g., API call)
    console.log('Form submitted:', formPass);
    // Reset form fields after submission if needed
    setFormPass({
      email: '',
      currentPassword: '',
      newPassword: '',
    });
  };
  const togglePasswordVisibility = () => {
    setFormPass({ ...formPass, showPassword: !formPass.showPassword });
  };
return (
  <div  className="cardProfile" >

    <div className='photoProfile'>
        <div className='pictureProfile' >
        {profileImage && profileImage.length>29 ? <img src={profileImage} alt="Profil" style={{ width: '150px', height: '150px',borderRadius:'50%',marginLeft:'30px' }} /> : <span style={{ width: '150px', height: '150px',borderRadius:'50%',marginLeft:'30px' }} className="loaderProfile"></span>}
        </div>
        <div className="textProfile">
          <h1 >{PremiereLettreMajuscule (localStorage.getItem('nom'))}  &ensp; {PremiereLettreMajuscule (localStorage.getItem('prenom'))}</h1> 
        </div>
        <label className="custom-file-input-label-Profile">
            <input type="file" accept="image/*" onChange={handleImageChange} className="custom-file-input-Profile" />
            Choose an image &ensp; <i style={{fontSize:'20px',position:'absolute',top:'14px',right:'1px'}} class='bx bx-image-add'></i>
        </label><br /><br />
        <span><b>Cin </b>: {localStorage.getItem('cin')}</span><br /><br />
        <span><b>Email </b>: {localStorage.getItem('email')}</span><br /><br />
        <span><b>Date naissance </b>: {localStorage.getItem('dateofbirth')}</span><br /><br />
        <span><b>Spécialité</b>: {localStorage.getItem('speciality')}</span><br /><br />
        <span><b>Téléphone</b>: {localStorage.getItem('phone')}</span><br /><br />
        <span><b>Niveau</b>: {localStorage.getItem('level')}</span><br /><br />
    </div>


    <div className="profile-form-container">
    <h1 style={{fontSize:'20px',textAlign:'center'}}>Changez votre mot de passe</h1><br />
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group-profile">
          <label className='label-form' htmlFor="email">Email:</label>
          <input className='input-profile' type="email" name="email"  value={formPass.email} onChange={handleChange} required />
        </div>

        <div className="form-group-profile">
          <label className='label-form' htmlFor="currentPassword">Current Password:</label>
          <input className='input-profile' type={formPass.showPassword ? 'text' : 'password'}  name="currentPassword" value={formPass.currentPassword} onChange={handleChange} required  />
          <FontAwesomeIcon icon={formPass.showPassword ? faEye : faEyeSlash}  className="eye-icon-profile" onClick={togglePasswordVisibility} />
        </div>

        <div className="form-group-profile">
          <label className='label-form' htmlFor="newPassword">New Password:</label>
          <input
          className='input-profile'
          type={formPass.showPassword ? 'text' : 'password'} name="newPassword" value={formPass.newPassword} onChange={handleChange} required />
          <FontAwesomeIcon icon={formPass.showPassword ? faEye : faEyeSlash} className="eye-icon-profile" onClick={togglePasswordVisibility} />
        </div>
        

        <button className='button-profile' type="submit">Update Profile</button>
      </form>
    </div>
    

    
    
  </div>
  )
}

export default Profile