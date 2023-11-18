/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
// import { FiShoppingCart } from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/hamza-elabdi-276828239" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/hmz273" target="_blank" rel="noreferrer"><BsGithub /></a>
      {/* <a href="https://www.redbubble.com/people/HhaammZz24/shop" target="_blank" rel="noreferrer"><FiShoppingCart /></a> */}

    </div>
  )
}

export default HeaderSocials