import React, { useContext } from "react";
import "./Nav.css"
import { auth } from '../config/config'
import { useTranslation } from 'react-i18next';
import {Link} from "react-router-dom"
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { CartContext } from '../global/CartContext'
import { useNavigate } from 'react-router-dom'
import logo from './Images/Logo.png'

export const Navbar = ({user} ) => {
	const { t, i18n } = useTranslation();
	function handleClick(lang){
		i18n.changeLanguage(lang);
	}
    
  const history = useNavigate();
    const { totalQty } = useContext(CartContext);

    // handle logout
    const handleLogout = () => {
        auth.signOut().then(() => {
            history('/login');
        })
    }



    return (
      <nav className="navigation">
        <a href="/"><img className="logo" src={logo} alt="logo" /></a>
        
        
        <div
          className="navigation-menu">
          <ul>
            <li>
              <a href="/">{t('Home.1')}</a>
            </li>
            <div class="dropdown">
    <button class="dropbtn">{t('Shop.1')}</button>
    <div class="dropdown-content">
      <div class="row">
        <div class="column">
          <a href="/women" class="heading-women">Women</a>
          
          <div class="women-content">
          <a1 class="inlinks" href="#">dress</a1>
          <a1 class="inlinks" href="#">skirt</a1>
          <a1 class="inlinks" href="#">pants</a1>
          
          </div>
        </div>
        <div class="column">
        <a href="/men" class="heading-women">Men</a>
          <a1 class="inlinks" href="#">Link 1</a1>
          <a1 class="inlinks" href="#">Link 2</a1>
          <a1 class="inlinks" href="#">Link 3</a1>
        </div>
        <div class="column">
        <a href="/gift" class="heading-women">Gifts</a>
          <a1 class="inlinks" href="#">Link 1</a1>
          <a1 class="inlinks" href="#">Link 2</a1>
          <a1 class="inlinks" href="#">Link 3</a1>
        </div>
      </div>
    </div>
  </div>
            <li>
              <a href="/toc">{t('Tale of Craft.1')}</a>
            </li>
            <li>
              <a href="/story">{t('Our Story.1')}</a>
            </li>
            <li>
              <a href="/products">{t('GI Products.1')}</a>
            </li>
            <li>
              <a href="/addproducts">{t('Add Products.1')}</a>
            </li>
          </ul>
        </div>
        <div className="navigation-menu2">
          
        {! user && <div className='rightside'>
          <ul>
                <span><Link to="/regs" className='signup'>{t('Sign Up.1')}</Link></span>
                <span><Link to="/login" className='login'>{t('Login.1')}</Link></span>
                </ul>
                  </div>}
        {user && <div className='rightside'>
                <span><Link to="/" className='navlink'>{user}</Link></span>
                <span><Link to="/cart" className='navlink'><Icon icon={cart} /></Link></span>
                <span className='no-of-products'>{totalQty}</span>
                <span><button className='logout-btn' onClick={handleLogout}>{t('Logout.1')}</button></span>
               </div>}
            
            </div>
                       
              
      </nav>
      
    );
  }
  export default Navbar;


