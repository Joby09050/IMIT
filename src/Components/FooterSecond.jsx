import React from 'react'
import search from '../Asset/search.png'
import logo from '../Asset/logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoLogoTwitter } from "react-icons/io";
import '../Styles/Footer2.css'
const FooterSecond = () => {
  return (
    <div className='main'>
       <div className="second_footer">
           <div className="second_f_left">
             <img src={search} alt="" />
           </div>
           <div className="second_f_right">
             <div>
             <p className='Ideas_h'>
             Let Us Help You Find Your Ideal<br/> Buyer!
             </p>
             </div>
             <div>
               <p className='Ideas_discript'>
               Interior brings 41 years of interior designs experience<br/>
               right to your home or office.Our design professionals<br/>
               are equipped to help you determine the products and<br/>
               design that work best for our customers.
               </p>
             </div>
             <div>
               <button className='main_btn'>REGISTER NOW</button>
             </div>
           </div>
       </div>
       <div className="footerinfo">
          <div className="company_logo">
          
          <img src={ logo} alt="" />
          </div>
          <div className="gotolink">
            <ul className='unstyle'>
              <li>HOME</li>
              <li>PROFILE</li>
              <li>REPORTS</li>
              <li>INSIGHTS</li>
            </ul>
            <ul className='unstyle'>
               <li>INFORMATION CENTER</li>
               <li>TERMS AND CONDITIONS</li>
               <li>PRIVACY POLICY</li>
            </ul>
          </div>
          <div className="social_copy">
          <div className="socialmeadias">
          <div>  <FaFacebookF /></div>
          <div>  <GrInstagram /></div>
          <div> <FaLinkedinIn/></div>
          <div>  <IoLogoTwitter/></div>
          </div>
          <div className="copy">
          &copy; 2022 Wealth Properties
          </div>
          </div>
       </div>
    </div>
  )
}

export default FooterSecond
