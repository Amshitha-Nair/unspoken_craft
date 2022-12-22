import React, { useState } from 'react'
import { auth } from '../config/config'
import Navbar from "./Nav"
import './Login.css'
import girl from "./Images/girl.png"
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'


export const Login = (props) => {	
	const { t, i18n } = useTranslation();
	function handleClick(lang){
		i18n.changeLanguage(lang);
	}

	const history = useNavigate();

	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setEmail('');
            setPassword('');
            setError('');
            history('/');
        }).catch(err => setError(err.message));
    }

	return (
		<div>
		<Navbar/>
		<div className="bhoot">
		<button onClick={()=>handleClick('en')}  className="outline1" type='submit'>{t('English.1')}</button> 
		<button onClick={()=>handleClick('ma')}  className="outline2" type='submit'>मराठी</button> 	
		<h1  className="log">{t('Login.1')}</h1>
		<h3 className="or">{t('OR.1')}</h3>
		<a href="/regc" className="consumer" >{t('Consumer.1')}</a>
		<a href="/regs" className="seller" >{t('Seller.1')}</a>
		<form onSubmit={login}>

		<input className="textbox1" type="text" placeholder={t('Enter your email.1')} required
                    onChange={(e) => setEmail(e.target.value)} value={email} /><br/>
		<input className="textbox2" type="password" placeholder={t('Enter your password.1')}required
                    onChange={(e) => setPassword(e.target.value)} value={password} />
		<button className='btn btn-success btn-md mybtn' type='submit'>{t('Proceed.1')}</button>
		</form>
		{error && <span className='error-msg'>{error}</span>}
			<img className="girl" src={girl} alt='girl'></img>

		</div>
		
		 </div>
			
	)
}
export default Login;

