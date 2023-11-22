import React from 'react'
import '../Styles/Second.css'
import designer from'../Asset/Designer.png'
import landingpad from '../Asset/landingpad.png'
const SecondSection = () => {
  return (
    <div className=' main services'>
      <div className="service_header d-flex justify-content-center align-items-center mt-5">
        <p>
        We offer a complete spectrum <br/>
of services for your real estate needs
        </p>
      </div>
       <div className="profile d-flex justify-content-center align-items-center">
         <div className="profile_pic">
         <img src={landingpad} alt="" />
           <img src={designer} alt="" className='designer' />
         </div>
         <div className="profile_discription">
            <p className='profile_head'>Creative Attractive Profiles</p>
            <p className='discript'>Interior brings 41 years of interior designs experience<br/>
            right to your home or office.Our design professionals<br/>
            are equipped to help you determine the products and<br/>
            design that work best for our customers.
            </p>
            <div>
            <ul className='grouping'>
              <li>Create folders and files</li>
              <li>Set up an internet connection</li>
              <li>Connect your computer</li>
              <li>Navigate all of the programs</li>
              <li>Operating system</li>
            </ul>
            </div>
            
            <div className="getstart_button">
              <button className='start'>GET START</button>
            </div>
         </div>
       </div>
    </div>
  )
}

export default SecondSection
