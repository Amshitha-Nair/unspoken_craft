import React from "react";
import paytm from './Images/paytm.png';
import "./Footer.css";
import { useTranslation } from 'react-i18next';


const Footer = () => {
	const { t, i18n } = useTranslation();
	function handleClick(lang){
		i18n.changeLanguage(lang);
	}
return (
	<div className="box2">
	
		<div className="row2">
		<div className="columnf">
			<h1 className="heading1">{t('Information.1')}</h1>
			<p className="p1" href="#">{t('About Us.1')}</p>
			<p className="p1" href="#">{t('Be our Partner.1')}</p>
			<p className="p1" href="#">{t('Buyer Policy.1')}</p>
			<p className="p1" href="#">{t('Partner Policy.1')}</p>
			<p className="p1" href="#">{t('Terms and Conditions.1')}</p>
		</div>
		<div className="columnf">
		<h1 className="heading1">{t('Extras.1')}</h1>
			<p className="p1" href="#">{t('Made By.1')}</p>
			<p className="p1" href="#">{t('Contact Us.1')}</p>
		</div>
		<div className="columnf">
		<h1 className="heading1">{t('Account.1')}</h1>
		    <p className="p1" href="#">{t('Account.1')}</p>
		    <p className="p1" href="#">{t('Return.1')}</p>
			<p className="p1" href="#">{t('Wishlist.1')}</p>
		</div>
		
		<div className="columnf">
		<h1 className="heading1">{t('Contact.1')}</h1>
	
	<div>
      <p style={{fontSize: '20px'}}>
        
        <span style={{color: 'white',fontFamily:'Cambria, Cochin, Georgia, Times, serif'}}>
            {t('Datta Meghe College of Engineering, Airoli,.1')} <br/>
			{t('Maharashtra.1')}<br/>
			{t('Call At: 8928935997.1')}<br/>
			Unspokencraft.gmail.com<br/><br/>
			{t('Our Partner.1')}
			</span>{' '}</p>
    </div>
			<a href="https://google.com" target="_blank" rel="noreferrer">
			<img className="paytm" src={paytm} alt='paytm' width="104px" Height="60px"></img></a>
		</div>
		</div>
		
		
	<div className="rectanglef">
		<p>© Unspoken Craft {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"} {t('Made in India.1')}
    </p>
	</div>
    
	</div>
	
	
);
};
export default Footer;
