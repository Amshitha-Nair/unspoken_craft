import React, {  useEffect } from 'react'
import Navbar from "./Nav"
import Footer from "./Footer"
import "./Home.css";
import lady from "./Images/homeimg1(lady).png"
import plate from "./Images/wallplate.png"
import sari from "./Images/Assamesesari.png"
import beeds from "./Images/beeds.png"
import rakhi from "./Images/rakhi.png"
import masks from "./Images/woodenmask.png"
import utility from "./Images/utensils.png"
import tree from './Images/cocotree.png'
import tree2 from './Images/cocotree2.png'
import kaka from './Images/rajeshpratap.png'
import kaki from './Images/kaki.png'
import { useNavigate } from 'react-router-dom'
import { auth } from '../config/config'
import { useTranslation } from 'react-i18next';

export const Home = ({ user }) => {
    const { t, i18n } = useTranslation();
	function handleClick(lang){
		i18n.changeLanguage(lang);
	}
    const history = useNavigate();

    useEffect(() => {
        // forcing user to signup
        auth.onAuthStateChanged(user => {
            if (!user) {
                history.push('/login');
            }
        })
    })

  return(
  <div>
    <Navbar user={user} />
    <div className="row">
    <button onClick={()=>handleClick('en')}  className="homeen" type='submit'>{t('English.1')}</button> 
		<button onClick={()=>handleClick('ma')}  className="homema" type='submit'>मराठी</button>
        <div className="text1">
            <div className="rectangle" >
                <h1 className="display-1">{t('Explore the.1')}
                    <br/>{t('spirit of India !.1')}</h1>
                    <p className="para1">{t('Unspoken craft offers a collection of.1')}
                       <br/>{t('authentic, affordable and high-quality products.1')}
                       <br/>{t('from Indias own artisans and craftsmen.1')}
                       <br/>{t('We want to identify the handicrafts of India.1')}
                       <br/>{t('& recognize the UNSPOKEN artisans all over.1')}
                       <br/>{t('India !!!.1')}

                       </p>
                       <a  href='/products' className="shop-now" type='submit'>{t('Shop Now.1')}</a>
                       <div className="rect2">
                         <img className="lady" src={lady} alt="lady"/>
                       </div>
            </div>
        </div>
    </div>
 
  
        <div className="text2">
        <h3 className="display-2">{t('Authentic Indian Handicrafts & Handloom.1')}</h3>
        <hr
        style={{
            background: '#913B10',
            color: '#913B10',
            height: '3px',
            width: '122px',
            
          }}
        />
        <p className="para2">{t('In an era driven by industry, we bring you one step closer to a world.1')} <br/>{t('of handmade treasures from the interiors of India....1')} </p>
        <div className="containerhome">
        <img className="plate" src={plate} alt='handpaint' onClick="/public"></img>
        <button className="wallplate" type="submit" href="/">{t('Hand painted wall plate.1')}</button>
        <img className="plate" src={sari} alt='handpaint' onClick="/public"></img>
        <button className="wallplate" type="submit">{t('Asaamese Saree.1')}</button>
        <img className="plate" src={beeds} alt='handpaint' onClick="/public"></img>
        <button className="wallplate" type="submit">{t('Handmade Beed Toran.1')}</button>
        <img className="plate" src={rakhi} alt='handpaint' onClick="/public"></img>
        <button className="wallplate" type="submit">{t('Unique Handmade Rakhi.1')}</button>
        <img className="plate" src={masks} alt='handpaint' onClick="/public"></img>
        <button className="wallplate" type="submit">{t('Wooden Masks.1')}</button>
        <img className="plate" src={utility} alt='handpaint' onClick="/public"></img>
        <button className="wallplate" type="submit">{t('Utiliy Products.1')}</button>
        </div>
        <a href='/gift' className="explore" type='submit'>{t('Explore More.1')}</a>
        </div>

        <div className="rectangle2" >
        <img className="coco2" src={tree2} alt='bg'></img>
        <h1 className="display-3">{t('Our Mission.1')}</h1>
                    <p className="para1">{t('We desire to become the instrument though which the artisans can directly.1')}<br/> {t('connect with the global audience, we desire to be the resource which helps.1')} <br/>{t('craft sell not as objects but stories and ideologies. We are vying to make not.1')}<br/> 
                                        {t('just sales but dialogues between the craftsmen and their patrons.1')}<br/> 
                                        {t('encouraging co-creation possibilities and a collective growth. We are.1')} <br/>
                                        {t('committed to keeping all the good practices intact and all processes humane,.1')}<br/>
                                        {t('just and ecologically balanced..1')}</p>
          <img className="coco" src={tree} alt='bg'></img>
        </div>

        <div className="text2">
        <h3 className="display-2">{t('Hear their Story.1')}</h3>
        <hr
        style={{
            background: '#913B10',
            color: '#913B10',
            height: '3px',
            width: '122px',
            
          }}
        />
        <p className="para2">{t('We bring you one step closer to a world of handmade treasures from the interiors of.1')} <br/>{t('India...Buy Indian crafts online directly from the home of Indian Craftsmen.1')}</p>
        </div>

      
        
        <div className="rect2">
            <img className="kaka" src={kaka} alt="ka"/>
        </div>
        <div className="rectangle3" >
            <h1 className="display-4">{t('Bidar, Karnataka.1')}</h1>
            <p className="para3">{t('The beauty of the aesthetic designs and patterns etched.1')} 
                                 {t('in silver against the deep black colour makes the products.1')} 
                                 {t('appealing to the eye and draws a large number of consumers world-wide.1')} 
                                 {t('The unique aspect of the Bidri craft is the soil used to ornament.1')} 
                                 {t('the art objects.1')} 
                                 {t('This soil has not received rain or sunlight for centuries and is collected.1')} 
                                 {t('by artisans from the inner areas of the Bidar Fort.1')}</p>
        </div>

        <div className="rect2">
            <img className="kaki" src={kaki} alt="ki"/>
        </div>
        <div className="rectangle4" >
            <h1 className="display-5">{t('Waraseoni, Madhya Pradesh.1')}</h1>
            <p className="para4">{t('Waraseoni sarees are known for their simplistic beauty.1')} 
                                 {t('and grace, much like the town, that holds a long history of handloom sarees in it.1')} 
                                 {t('The weavers community or the Koshtis are said to have derived their name from Kosa (Tussar silk); and Salewar is said to be from the Sanskrit SÄlika, a weave.1')}</p>
        </div>
        <a href='/women' className="explore2" type='submit'>{t('Explore More.1')}</a>
<Footer/>
</div>
  )
}
export default Home;