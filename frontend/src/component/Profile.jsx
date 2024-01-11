import React, { useEffect, useState } from 'react'
import Nav from '../layout/nav'
import axios from 'axios'
import '../css/profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


function Profile() {
  const [profileImage, setProfileImage] = useState(null);
  const [formPass, setFormPass] = useState({
    currentPassword: '',
    newPassword: '',
  });
  const [error,setError]=useState([]);
  const [confPass,setConfPass]=useState()
  console.log(formPass);
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

  // ***********gerer l'error  ****************
  const handleChange = (e) => {
    setFormPass({ ...formPass, [e.target.name]: e.target.value.trim() });
  };
 
  const togglePasswordVisibility = () => {
    setFormPass({ ...formPass, showPassword: !formPass.showPassword });
  };

  const changePassword= async (e)=>{
    e.preventDefault()
    if (formPass.newPassword.trim() && formPass.currentPassword.trim() && confPass==formPass.newPassword) {
      const response=await axios.post(`http://127.0.0.1:8000/api/student/profile/changePass/${id}`,formPass)
      console.log(response.data.message);
      setFormPass({
        currentPassword: '',
        newPassword: '',
      });
    }else{
      handelPass(e)
    }
  }

  const handelPass=(e)=>{
    document.getElementById('newPassword').style.boxShadow = 'none';
    document.getElementById('currentPassword').style.boxShadow = 'none';
    document.getElementById('confirmPassword').style.boxShadow = 'none';
    setError([])

    if ( !formPass.newPassword || !formPass.newPassword.trim() ) {
      setError((preventErr)=>[...error,{name:'newPassword',field:'Veuillez remplir le champ du nouveau mot de passe !!'}])
      document.getElementById('newPassword').style.boxShadow = '0 0 5px 1px red';
    }

    if (  !formPass.currentPassword || !formPass.currentPassword.trim()) {
      document.getElementById('currentPassword').style.boxShadow = '0 0 5px 1px red';
       setError((preventErr)=>[...error,{name:'currentPassword',field:'Veuillez remplir le champ du mot de passe actuel !!'}])
    }
    if ( !confPass || !confPass.trim()) {
      document.getElementById('confirmPassword').style.boxShadow = '0 0 5px 1px red';
       setError((preventErr)=>[...error,{name:'confirmPassword',field:'Veuillez remplir le champ du mot de passe de confirmation. !!'}])
    }
  }


  const gestionError=(name)=>{
    const erreur=error.find((ele)=>name==ele.field)
    if (erreur!==undefined && name!=='acceptCondition') {
      return <span >field required</span>
    }

  }
  console.log(formPass.newPassword);
return (
  <div  className="cardProfile" >
  <img className='imgProfile'  src="/image/profile.jpg" alt="" srcset="" />

    <div className='photoProfile'>
        <div className='pictureProfile' >
        {profileImage && profileImage.length>29 ? <img src={profileImage} alt="Profil" /> : <span style={{ width: '150px', height: '150px',borderRadius:'50%',marginLeft:'30px',marginLeft:'auto' }} className="loaderProfile"></span>}
        </div>
        <div className="textProfile">
          <h1 >{PremiereLettreMajuscule (localStorage.getItem('nom'))}   {PremiereLettreMajuscule (localStorage.getItem('prenom'))}</h1> 
        </div>
        <label className="custom-file-input-label-Profile">
            <input type="file" accept="image/*" onChange={handleImageChange} className="custom-file-input-Profile" />
            <span>Choose an image</span> &ensp; <i  class='bx bx-image-add iconProfile'></i>
        </label><br /><br />
        <span><b>Cin </b>: {localStorage.getItem('cin')}</span><br /><br />
        <span><b>Email </b>: {localStorage.getItem('email')}</span><br /><br />
        <span><b>Date naissance </b>: {localStorage.getItem('dateofbirth')}</span><br /><br />
        <span><b>Spécialité</b>: {localStorage.getItem('speciality')}</span><br /><br />
        <span><b>Téléphone</b>: {localStorage.getItem('phone')}</span><br /><br />
        <span><b>Niveau</b>: {localStorage.getItem('level')}</span><br /><br />
    </div>


    <div className="profile-form-container">
    <h1 style={{fontSize:'20px',textAlign:'center'}}>Changez votre mot de passe</h1>
    <center><small >Sans espace entre les mots</small></center>    <br />
      <form className="profile-form">

        <div className="form-group-profile">
          <label className='label-form' htmlFor="currentPassword">Current Password:</label>
          <input className='input-profile' type={formPass.showPassword ? 'text' : 'password'}  name="currentPassword" id='currentPassword' value={formPass.currentPassword} onChange={(e)=>{handleChange(e)}} required  />
          <FontAwesomeIcon icon={formPass.showPassword ? faEye : faEyeSlash}  className="eye-icon-profile" onClick={togglePasswordVisibility} />
          {gestionError('currentPassword')}
        </div>

        <div className="form-group-profile">
          <label className='label-form' htmlFor="newPassword">New Password:</label>
          <input
          className='input-profile'
          type={formPass.showPassword ? 'text' : 'password'} name="newPassword" id='newPassword' value={formPass.newPassword} onChange={(e)=>{handleChange(e)}} required />
          <FontAwesomeIcon icon={formPass.showPassword ? faEye : faEyeSlash} className="eye-icon-profile" onClick={togglePasswordVisibility} />
          {gestionError('newPassword')}
        </div>

        <div className="form-group-profile">
          <label className='label-form' htmlFor="newPassword">confirm Password:</label>
          <input
          className='input-profile'
          type={formPass.showPassword ? 'text' : 'password'} value={confPass} id='confirmPassword' onChange={(e)=>{setConfPass(e.target.value)}} required />
          <FontAwesomeIcon icon={formPass.showPassword ? faEye : faEyeSlash} className="eye-icon-profile" onClick={togglePasswordVisibility} />
          {gestionError('confirmPassword')}
        </div>
        

        <button className='button-profile' type="submit" onClick={changePassword}>Update Password</button>
      
        </form>

      
    </div>
    

    
    
  </div>
  )
}

export default Profile