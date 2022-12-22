import React from "react";
import Navbar from "./Nav"
import Footer from "./Footer"
import "./Men.css";
import men from "./Images/menbg.png"
import dressm1 from "./Images/dressm1.png"
import dressm2 from "./Images/dressm2.png"
import dressm3 from "./Images/dressm3.png"
import { AiOutlineHeart} from 'react-icons/ai';


const Men = ({user}) => {
    return(
    <div>
<Navbar user={user} />      

      <div className="rectmen">
        <img className="men" src={men} alt="m"/>
      </div>
      <div className='paramen'>Shop / Men / Dress & Fusion Wear</div>
      
      <div className='paramen2'>
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
      <div className="container-men">
        <img className="dress1" src={dressm1} alt='dress' onClick="/public"></img>
        <img className="dress2" src={dressm2} alt='dress' onClick="/public"></img>
        <img className="dress3" src={dressm3} alt='handpaint' onClick="/public"></img>
        <p className="dress1p">Summer Breeze - Lehariya, Soft Mul Lavender Kurta & Pant Set<br/><b>Rs. 1,490/-  <AiOutlineHeart style={{marginLeft: '13rem' }} /></b></p>
        <p className="dress2p">Summer Breeze - Lehariya, Soft Mul Lavender Kurta & Pant Set<br/><b>Rs. 1,490/-  <AiOutlineHeart style={{marginLeft: '13rem' }} /></b></p>
        <p className="dress3p">Summer Breeze - Lehariya, Soft Mul Lavender Kurta & Pant Set<br/><b>Rs. 1,490/-  <AiOutlineHeart style={{marginLeft: '13rem' }} /></b></p>
        <img className="dress1" src={dressm1} alt='handpaint' onClick="/public"></img>
        <img className="dress2" src={dressm2} alt='handpaint' onClick="/public"></img>
        <img className="dress3" src={dressm3} alt='handpaint' onClick="/public"></img>
        <p className="dress1p">Summer Breeze - Lehariya, Soft Mul Lavender Kurta & Pant Set<br/><b>Rs. 1,490/-  <AiOutlineHeart style={{marginLeft: '13rem' }} /></b></p>
        <p className="dress2p">Summer Breeze - Lehariya, Soft Mul Lavender Kurta & Pant Set<br/><b>Rs. 1,490/-  <AiOutlineHeart style={{marginLeft: '13rem' }} /></b></p>
        <p className="dress3p">Summer Breeze - Lehariya, Soft Mul Lavender Kurta & Pant Set<br/><b>Rs. 1,490/-  <AiOutlineHeart style={{marginLeft: '13rem' }} /></b></p>
      </div>
      </div>
      <Footer />
    </div>
    )
}
export default Men;
