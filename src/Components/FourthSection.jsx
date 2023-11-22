import React from 'react'
import landingpad from'../Asset/landingpad.png'
import target from '../Asset/target.png'
const FourthSection = () => {
  return (
    <div className='main'>
    <div className="profile d-flex justify-content-center align-items-center">
    <div className="profile_pic">
    <img src={landingpad} alt="" />
      <img src={target} alt="" className='designer' />
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

export default FourthSection

