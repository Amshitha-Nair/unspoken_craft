import React from "react"
import Navbar from "./Nav"
import { useTranslation } from 'react-i18next';
import "./Regc.css";
import regsuser from "./Images/croods.png"

export default function Regc () {
	const { t, i18n } = useTranslation();
	function handleClick(lang){
		i18n.changeLanguage(lang);
	}
  return (
    <div>
      <Navbar/>
    <div className="form-containeruser">
        <div className="form-content">
        <button onClick={()=>handleClick('en')}  className="english" type='submit'>English</button> 
		<button onClick={()=>handleClick('ma')}  className="marathi" type='submit'>Marathi</button> 
          <h3 className="form-titleuser">{t('User Profile.1')}</h3>

          
             <img className="regs" src={regsuser} alt='regs'></img> 
          <div className="sec">
          <input className="inboxn" type="text" placeholder={t('Name.1')} /><br/><br/><br/>
            	<input className="inboxe" type="email" placeholder={t('Email ID.1')} /><br/><br/>
            	<input className="inboxp" type="password" placeholder={t('Password.1')} /><br/><br/>
            	<input className="inboxm" type="mobile-number" placeholder={t('Mobile No.1')} /><br/><br/>
              <input className="inboxa" type="address" placeholder={t('Address.1')}/><br/><br/>
              {/* <p className="forgotpassword">
            Forgot <a href="#">password?</a>
          </p> */}
            </div>
            
            

            <button type="submit" className="btn">{t('Submit.1')}</button>
          
          </div>
          </div>
    
    </div>

  )
}