import React from 'react'
import Sidebar from './Sidebar';
import img from '../Media/whatsapp.jpg';
import "./Home.css";

function Home({currentUser, signOut}) {
  return (
    <div className='home'>
        <div className='home-container'>
           <Sidebar currentUser={currentUser} signOut={signOut}/> 
           <div className='home-bg'>
              <img src={img} alt='backgrond image' />
           </div>
        </div>
    </div>
  )
}

export default Home