/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaInstagramSquare } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="linkedin.com/in/hamza-elabdi-276828239" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/hmz273" target="_blank"><BsGithub /></a>
      <a href="https://www.instagram.com/fastwebdigital/" target="_blank"><FaInstagramSquare /></a>

    </div>
  )
}

export default HeaderSocials