import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">Hamza</a>

      <ul className="permalink">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="#">icon</a>
        <a href="#">icon</a>
        <a href="#">icon</a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Hamza Portfolio. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer