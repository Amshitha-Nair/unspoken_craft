import React from "react";
import Navbar from "./Nav"
import Footer from "./Footer"
import "./Gifts.css";
import gift from "./Images/giftbg.png"
import gift1 from "./Images/gift1.png"
import gift2 from "./Images/gift2.png"
import gift3 from "./Images/gift3.png"
import { AiOutlineHeart} from 'react-icons/ai';


const Gifts = ({user}) => {
    return(
    <div>
<Navbar user={user} />      

      <div className="rectgifts">
        <img className="gifts" src={gift} alt="g"/>
      </div>
      <div className='paragifts'>Shop / Gifts / House Warming</div>
      
      <div className='paragifts2'>
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
      <div className="container-gifts">
        <img className="dress1" src={gift1} alt='dress' onClick="/public"></img>
        <img className="dress2" src={gift2} alt='dress' onClick="/public"></img>
        <img className="dress3" src={gift3} alt='handpaint' onClick="/public"></img>
        <p className="dress1p">Summer Breeze - Lehariya, Soft Mul Lavender Kurta & Pant Set<br/><b>Rs. 1,490/-  <AiOutlineHeart style={{marginLeft: '13rem' }} /></b></p>
        <p className="dress2p">Summer Breeze - Lehariya, Soft Mul Lavender Kurta & Pant Set<br/><b>Rs. 1,490/-  <AiOutlineHeart style={{marginLeft: '13rem' }} /></b></p>
        <p className="dress3p">Summer Breeze - Lehariya, Soft Mul Lavender Kurta & Pant Set<br/><b>Rs. 1,490/-  <AiOutlineHeart style={{marginLeft: '13rem' }} /></b></p>
        <img className="dress1" src={gift1} alt='handpaint' onClick="/public"></img>
        <img className="dress2" src={gift2} alt='handpaint' onClick="/public"></img>
        <img className="dress3" src={gift3} alt='handpaint' onClick="/public"></img>
        <p className="dress1p">Summer Breeze - Lehariya, Soft Mul Lavender Kurta & Pant Set<br/><b>Rs. 1,490/-  <AiOutlineHeart style={{marginLeft: '13rem' }} /></b></p>
        <p className="dress2p">Summer Breeze - Lehariya, Soft Mul Lavender Kurta & Pant Set<br/><b>Rs. 1,490/-  <AiOutlineHeart style={{marginLeft: '13rem' }} /></b></p>
        <p className="dress3p">Summer Breeze - Lehariya, Soft Mul Lavender Kurta & Pant Set<br/><b>Rs. 1,490/-  <AiOutlineHeart style={{marginLeft: '13rem' }} /></b></p>
      </div>
      </div>
      <Footer />
    </div>
    )
}
export default Gifts;
