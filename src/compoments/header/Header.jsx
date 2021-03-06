import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/man.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>hello i'm</h5>
        <h1>Hamza Elabdi</h1>
        <h5 className="text-light">MERN Stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">ScrollDown</a>
      </div>
    </header>
  )
}

export default Header