import React from "react";
import Navbar from "./Nav"
import Footer from "./Footer"
import "./Women.css";
import women from "./Images/womenbg.png"
import dress1 from "./Images/dress1.png"
import dress2 from "./Images/dress2.png"
import dress3 from "./Images/dress3.png"
import dress4 from "./Images/dress4.png"
import dress5 from "./Images/dress5.png"
import dress6 from "./Images/dress6.png"
import { AiOutlineHeart} from 'react-icons/ai';


const Women = ({user}) => {
    return(
    <div>
<Navbar user={user} />      

      <div className="rectwomen">
        <img className="women" src={women} alt="w"/>
      </div>
      <div className='parawomen'>Shop / Women / Dress & Fusion Wear</div>
      
      <div className='parawomen2'>
        PRICE
        <a>
        <br/><br/><button className="bw"></button> Upto 1,000
        <br/><br/><button className="bw"></button> Upto 2,000
        </a>
        <br/><br/><br/><br/>COLOR
        <a>
        <br/><br/><button className="bwb"></button> Black
        <br/><br/><button className="bwg"></button> Green
        <br/><br/><button className="bwp"></button> Pink
        <br/><br/><button className="bwbl"></button> Blue
        <br/><br/><button className="bwv"></button> Violet
        </a>
      </div>
      <div className="roww">
      <div className="container-women">
        <img className="dress1" src={dress1} alt='dress' onClick="/public"></img>
        <img className="dress2" src={dress2} alt='dress' onClick="/public"></img>
        <img className="dress3" src={dress3} alt='handpaint' onClick="/public"></img>
        <p className="dress1p">Ilkal Rose Red Gayathri Border Cotton-Silk Saree<br/><b>Rs. 1,490/-  <AiOutlineHeart style={{marginLeft: '13rem' }} /></b></p>
        <p className="dress2p">Udupi Peach Pure Cotton Saree<br/><b>Rs. 1,110/-  <AiOutlineHeart style={{marginLeft: '13rem' }} /></b></p>
        <p className="dress3p">Jamnagari Bandhani Jacquard Art Silk Saree<br/><b>Rs. 1,890/-  <AiOutlineHeart style={{marginLeft: '13rem' }} /></b></p>
        <img className="dress4" src={dress4} alt='handpaint' onClick="/public"></img>
        <img className="dress5" src={dress5} alt='handpaint' onClick="/public"></img>
        <img className="dress6" src={dress6} alt='handpaint' onClick="/public"></img>
        <p className="dress1p">Dharmavaram Red Floral Motif Grand Pallu Pure Silk Saree<br/><b>Rs. 1,490/-  <AiOutlineHeart style={{marginLeft: '13rem' }} /></b></p>
        <p className="dress2p"> Kancheepuram Pure Silk Saree (Plain)<br/><b>Rs. 1,490/-  <AiOutlineHeart style={{marginLeft: '13rem' }} /></b></p>
        <p className="dress3p">Bomkai Cotton-Silk Saree - Azure Blue With Dark Blue Border<br/><b>Rs. 1,490/-  <AiOutlineHeart style={{marginLeft: '13rem' }} /></b></p>
        </div>
                        
      
      </div>
      
      <Footer />
    </div>
    )
}
export default Women;
