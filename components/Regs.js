import React, { useState } from 'react'
import { auth, db } from '../config/config'
import Navbar from "./Nav"
import { useTranslation } from 'react-i18next';
import "./Regs.css";
import regsuser from "./Images/croods.png"
import {useNavigate} from 'react-router-dom'

export const Regs = (props) => {
	const { t, i18n } = useTranslation();
	function handleClick(lang){
		i18n.changeLanguage(lang);
	}

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobnumber, setMobileNumber] = useState('');
    const [address, setAddress] = useState('');
    const [gitag, setGItag] = useState('');
    const [paddress, setPaddress] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [iso, setISO] = useState('');
    const [error, setError] = useState('');
     
    const history = useNavigate();
        // signup
        const signup = (e) => {
            e.preventDefault();
            auth.createUserWithEmailAndPassword(email, password).then((cred) => {
                db.collection('SignedUpSellersData').doc(cred.user.uid).set({
                    Name: name,
                    Email: email,
                    Password: password,
                    MobileNumber: mobnumber,
                    Address: address,
                    Gitag: gitag,
                    Paddress: paddress,
                    Aadhar:aadhar,
                    Iso: iso
                }).then(() => {
                    setName('');
                    setEmail('');
                    setPassword('');
                    setMobileNumber('');
                    setAddress('');
                    setGItag('');
                    setPaddress('');
                    setAadhar('');
                    setISO('');
                    setError('');
                    history('/login');
                }).catch(err => setError(err.message));
            }).catch(err => setError(err.message));
        }

  return (
    <div>
      <Navbar/>
    <div className="form-containerseller">
        <div className="form-content">
        <button onClick={()=>handleClick('en')}  className="english" type='submit'>{t('English.1')}</button> 
		    <button onClick={()=>handleClick('ma')}  className="marathi" type='submit'>मराठी</button> 
        
        <h3 className="form-title-seller">{t('Seller Profile.1')}</h3>
        <img className="regs" src={regsuser} alt='regs'></img> 
             
        <form autoComplete="off" className='sec' onSubmit={signup}>            	
             <input className="inboxn" type="text" placeholder={t('Name.1')} required
              onChange={(e) => setName(e.target.value)} value={name} /><br/><br/><br/>
            	<input className="inboxe" type="email" placeholder={t('Email ID.1')} 
              onChange={(e) => setEmail(e.target.value)} value={email}/><br/><br/>
            	<input className="inboxp" type="password" placeholder={t('Password.1')} required
              onChange={(e) => setPassword(e.target.value)} value={password}/><br/><br/>
            	<input className="inboxm" type="mobile-number" placeholder={t('Mobile No.1')}               
                onChange={(e) => setMobileNumber(e.target.value)} value={mobnumber} /><br/><br/>
              <input className="inboxa" type="address" placeholder={t('Address.1')} required
              onChange={(e) => setAddress(e.target.value)} value={address} /><br/><br/>
              <input className="inboxgi" type="number" placeholder={t('Geographical Indication Tag.1')} 
              onChange={(e) => setGItag(e.target.value)} value={gitag} /><br/><br/>
              <input className="inboxadd" type="address" placeholder={t('Production Address.1')} 
              onChange={(e) => setPaddress(e.target.value)} value={paddress} /><br/><br/>
              <input className="inboxaad" type="number" placeholder={t('Aadhar No.1')} required
              onChange={(e) => setAadhar(e.target.value)} value={aadhar} /><br/><br/>
              <input className="inboxiso" type="number" placeholder={t('ISO Certificate No.1')} 
              onChange={(e) => setISO(e.target.value)} value={iso} /><br/><br/>

              <button type="submit" className='btn btn-success btn-md mybtn1'>{t('Submit.1')}</button>
              {/* <a className='account'>Already have an account? Login
                 <a href="./Login.js"> Here</a>
              </a> */}
        </form>
        {error && <span className='error-msg'>{error}</span>}    
        </div>
    </div>
    </div>   
  
  )
 }
 export default Regs;

