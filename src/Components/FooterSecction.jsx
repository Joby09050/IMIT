import React from 'react'
import certifi from '../Asset/certified.png'
import filter from'../Asset/filter.png'
import window from '../Asset/filter2.png'
import home from '../Asset/home.png'
import ring from '../Asset/ring.png'
import importent from'../Asset/importent.png'
import qrcod from '../Asset/qrcode.png'
import '../Styles/Footer1.css'
const FooterSecction = () => {
  return (
    <div className='main footer_body '>
    <div className="footer-section">
    <div className="left_footer_part">
      <p className='footer_header_left footer_discript'>
      Explore the most attractive<br/>
      areas in KYIV neighborhoods<br/>
      to buy a home
      </p>

      <p className='footer_discript dis_first'>
      We are very proud of the service we provide. Discover<br/>
      the hottest communities available in our portfolio.Look<br/>
      through the most popular areas.Our Locations and <br/>
      services prove we are the best.
      </p>

      <p className='footer_discript dis_second'>
      KYIV is the capital and most populous city of Ukraine.The<br/>
      city's name is said to derive from the name of KYIV,one of <br/>
      its four legendary founders.We rank amongst the Top 6<br/>
       agencies in the world.
      
      </p>
    </div>
    
    <div className="right_footer_part">
     <div className="businessicons">
     <div className='about_proterty'>
     <div>
       <img src={certifi} alt=""  className='moving_obects'/>
       <img src={ring} alt="" className='ring' />
     </div>
     <div className='footer_discript'>
     <p >
      Trusted and <br/>verified property<br/> listings.
      </p>
     
     </div>
     
     </div>

     <div className='about_proterty'>
     <div>
     <img src={window} alt="" className='moving_obects' />
     <img src={ring} alt=""  className='ring' />
   </div>
   <div className="footer_discript">
   <p>
   
   Peronalized filters <br/>that make property <br/>serach easier.
   </p>
   
   </div>
     </div>
     <div className='about_proterty'>
     <div className='About_logos'>
     <img src={home} alt=""  className='moving_obects'/>
     <img src={ring} alt="" className='ring'/>
   </div>
        <div className="footer_discript">
        <p className='footer_discript'>
        Complete info on <br/>trending properties <br/>listed.
        </p>
        
        </div>
     </div>
       <div className='about_proterty'>
       <div>
       <img src={importent} alt="" className='moving_obects' />
       <img src={ring} alt="" className='ring'/>
     </div>
     <div className="footer_discript">
     
     <p className='footer_discript'>Details info about<br/> the property that<br/> are in wishlist.</p>
     </div>
       </div>

       <div className='about_proterty'>
       <div>
       <img src={filter} alt="" className='moving_obects' />
       <img src={ring} alt="" className='ring' />
     </div>
     <div className="footer_discript">
     <p className='footer_discript'>
     Home plan layouts <br/>for virtual tour of <br/>every house.

     </p>
     
     </div>
       </div>
       <div className='about_proterty'>
       <div>
       <img src={qrcod} alt="" className='moving_obects qr'/>
       <img src={ring} alt="" className='ring' />
     </div>
     <div className="footer_discript">
     <p className='footer_discript'>
     QR scan code for <br/>retrieving property <br/>details.

     </p>
     
     </div>
       </div>
     </div>
         <div className="highlight">
           <p className='footer_discript'>
           With tons of benefits for customers.Go True People Wall is <br/>the ultimate place where a buyer will search for properties<br/> online.
           </p>
         </div>
    </div>
    
    </div>
    
    </div>
  )
}

export default FooterSecction
