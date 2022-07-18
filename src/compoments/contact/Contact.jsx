import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
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
            icon
            <h4>Email</h4>
            <h5>hamzaelabdi58@gmail.com</h5>
            <a href="mailto:hamzaelabdi58@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            icon
            <h4>Email</h4>
            <h5>hamzaelabdi58@gmail.com</h5>
            <a href="mailto:hamzaelabdi58@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            icon
            <h4>Email</h4>
            <h5>hamzaelabdi58@gmail.com</h5>
            <a href="mailto:hamzaelabdi58@gmail.com">Send a message</a>
          </article>
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