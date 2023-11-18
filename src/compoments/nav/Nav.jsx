/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { RiServiceLine } from 'react-icons/ri'
import { FiShoppingCart } from 'react-icons/fi'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import './Nav.css'

const Nav = () => {
  const [ activeNav, setActiveNav ] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      {/* <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a> */}
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
      {/* <a href="https://www.redbubble.com/people/HhaammZz24/shop" onClick={() => setActiveNav('https://www.redbubble.com/people/HhaammZz24/shop')} className={activeNav === 'https://www.redbubble.com/people/HhaammZz24/shop' ? 'active' : ''} target="_blank" rel="noreferrer"><FiShoppingCart/></a> */}
    </nav>
  )
}

export default Nav