import React from 'react'
import account from'../Asset/account.png'
import landingpad from '../Asset/landingpad.png'
const FifthSection = () => {
  return (
    <div className='main d-flex justify-content-center align-items-center'>
    <div className="profile_discription">
    <p className='profile_head'>Manage The Acccount</p>
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
 <div className="profile_pic">
 <img src={landingpad} alt="" />
   <img src={account} alt="" className='designer' />
 </div>
    </div>
  )
}

export default FifthSection
