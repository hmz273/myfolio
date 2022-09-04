/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/Agency.png";
import IMG2 from "../../assets/fit.png";
import IMG3 from "../../assets/trv.png";
import IMG4 from "../../assets/portfolio5.png";
import IMG5 from "../../assets/movies2.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Agency App",
    github: "https://github.com/hmz273",
    demo: "https://agency-gules.vercel.app/",
  },

  {
    id: 2,
    image: IMG2,
    title: "Fitness App",
    github: "https://github.com/hmz273",
    demo: "https://gym-fit.vercel.app/",
  },

  {
    id: 3,
    image: IMG3,
    title: "Travel App",
    github: "https://github.com/hmz273",
    demo: "https://travel-agency-gamma.vercel.app",
  },

  {
    id: 4,
    image: IMG5,
    title: "TMovies",
    github: "https://github.com/hmz273",
    demo: "https://react-movie-azure.vercel.app/",
  },

  {
    id: 5,
    image: IMG4,
    title: "This is a portfolio item title",
    github: "https://github.com/hmz273",
    demo: "https//google.com",
  },

  {
    id: 6,
    image: IMG6,
    title: "This is a portfolio item title",
    github: "https://github.com/hmz273",
    demo: "https//google.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
