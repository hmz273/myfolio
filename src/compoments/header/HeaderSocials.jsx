/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaInstagramSquare } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="" target="_blank"><BsLinkedin /></a>
      <a href="" target="_blank"><BsGithub /></a>
      <a href="" target="_blank"><FaInstagramSquare /></a>

    </div>
  )
}

export default HeaderSocials