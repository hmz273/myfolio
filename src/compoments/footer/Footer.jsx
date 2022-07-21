/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">Hamza</a>

      <ul className="permalink">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/hamza-elabdi-276828239" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://www.instagram.com/fastwebdigital/" target="_blank" rel="noreferrer"><BsInstagram /></a>
      <a href="https://github.com/hmz273" target="_blank" rel="noreferrer"><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Hamza Portfolio. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer