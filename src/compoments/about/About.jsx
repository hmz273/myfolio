/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./about.css";
import ME from "../../assets/working.png";

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
              <h5>Clients</h5>
              <small>+2 Years Working</small>
            </article>

            <article className="about__card">
              <div className="about__icon">icon</div>
              <h5>Projects</h5>
              <small>+40 Completed</small>
            </article>
          </div>

          <p>
            I'm a web developer with a focus on the MERN stack, but still
            exploring other technologies and frameworks that catch my interest!
            if you're looking for a developer to add to your team, I'd love to
            hear from you!
          </p>

          <a href="" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
