import React from 'react'
import logo from '../../assets/img/logo.png'
import { FcPrevious, FcNext } from 'react-icons/fc'

const Navbar = () => {
  return (
    <div className='bar'>
      <div className='left-div'>
        <img id="logo" src={logo} onClick={() => {window.open("https://www.ntnu.edu/learnnowyouth/info/welcome", "_blank")}} alt="Norsk for Ungdom logo" width="130"></img>
      </div>
      <div className='mid-div'>
        <h1 id="navbarTitle">HVA SKAL STÅ HER</h1>
      </div>
      <div className='right-div'>
      </div>
    </div>
  )
}

export default Navbar