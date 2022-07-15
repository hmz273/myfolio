/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <div className="about__icon">icon</div>
              <h5>Experience</h5>
              <small>+2 Years Working</small>
            </article>

            <article className="about__card">
              <div className="about__icon">icon</div>
              <h5>Experience</h5>
              <small>+2 Years Working</small>
            </article>

            <article className="about__card">
              <div className="about__icon">icon</div>
              <h5>Experience</h5>
              <small>+2 Years Working</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam vel
            natus quod optio assumenda dicta voluptates accusantium inventore
            consectetur dolore tenetur expedita hic explicabo veritatis, quos
            iste et deleniti iure!
          </p>

          <a href="" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
