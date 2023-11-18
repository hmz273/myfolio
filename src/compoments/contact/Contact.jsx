import React, { useRef } from 'react'
import emailjs from 'emailjs-com';

import { BsLinkedin } from 'react-icons/bs'
import { FaInstagramSquare } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import './Contact.css'

const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kbyju9g', 'template_dwx4iz2', form.current, '9W79oyy5--4NValuG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };



  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail />
            <h4>Email</h4>
            {/* <h5>hamzaelabdi58@gmail.com</h5> */}
            <a href="mailto:hamzaelabdi58@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <BsLinkedin />
            <h4>Linkedin</h4>
            {/* <h5>Linkedin</h5> */}
            <a href="https://www.linkedin.com/in/hamza-elabdi-276828239" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          {/* <article className="contact__option">
            <FaInstagramSquare />
            <h4>Instagram</h4>
            <h5>Instagram</h5>
            <a href="https://www.instagram.com/fastwebdigital/" target="_blank" rel="noreferrer">Send a message</a>
          </article> */}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full-Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" rows="7" required placeholder="Your Message"></textarea>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact