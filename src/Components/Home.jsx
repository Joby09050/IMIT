import React from 'react'
import '../Styles/Home.css'
import logo from '../Asset/logo.png'
import builder from '../Asset/building.png'
import dashboard from '../Asset/dashboard.png'
const Home = () => {
  return (
    <div className='main_body'>
      <div className="main_container d-flex justify-content-between align-items-center">
        <div className="first_section">
          <img src={logo} alt="" />
        </div>
        <div className="second_section">
        <ul className='menus d-flex justify-content-between list-unstyled gap-5'>
        <li className='menu'><a href="home.jsx" className='decoration' >HOME</a></li>
        <li className='menu'><a href="profile.jsx" className='decoration'>PROFILE</a></li>
        <li className='menu'><a href="re.jsx" className='decoration'>REPORTS</a></li>
        <li className='menu'><a href="tt.jsx" className='decoration'>INSIGHTS</a></li>
      </ul>
        </div>
        <div className="third_section d-flex justify-content-between gap-3">
        <button className="btn1 butoon">LOGIN</button>
        <button className="btn2 butoon">GET START</button>
        </div>

      </div>
        <div className="sub_section d-flex justify-content-between align-items-center">
        
        <div className="left_container d-flx justify-content-center align-items-center">
        <div className="left_inner  ">
        <label className='block'>BUY YOUR</label>
        <label  className='block1'>DREAM HOME</label>
        <label className='block'>IN KYIV!</label>
        </div>
        <div className="getstart">
        <button className='Startbutoon main_btn'>GET START</button>
        </div>
       
        </div>

        <div className="right_section position-relative">
        <div className="pic1"><img src={builder} alt="" /></div>
        <div className="pic2 position-absolute top-50"><img src={ dashboard} alt="" /></div>
        </div>
        </div>
        <div className="discriptions">
        <div >
        <p className="discription_head">Selling a property can be quite challenging<br/>
        If you don't have the right tools at your disposals</p>

        <p className="discription">
        We help our clients sell, buy or rent properties hassle free. Due to our unparalleded results,<br/>
        expertise and dedication , we rank amongst the top 6 agencies in KYIV.We are proud of the<br/>
        service we provide and what our guest have to say about us.
        </p>
      </div>
        </div>
      
    </div>
  ) 
}

export default Home
