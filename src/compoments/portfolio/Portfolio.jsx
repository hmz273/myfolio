/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Portfolio.css";
import IMG1 from "../../assets/Agency.png";
import IMG2 from "../../assets/fit.png";
import IMG3 from "../../assets/trv.png";
import IMG4 from "../../assets/speecher.png";
import IMG5 from "../../assets/movies2.png";
import IMG6 from "../../assets/movies.png";
import IMG7 from "../../assets/growup.png";
import IMG8 from "../../assets/gimpo.png";
import IMG9 from "../../assets/robot.png";

// import FIMG1 from "../../assets/Agency.png";

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
    demo: "https://chafai-agency.vercel.app/",
  },

  {
    id: 4,
    image: IMG5,
    title: "TMovies App",
    github: "https://github.com/hmz273",
    demo: "https://react-movie-azure.vercel.app/",
  },

  {
    id: 5,
    image: IMG4,
    title: "Speech To Text App",
    github: "https://github.com/hmz273",
    demo: "https://speecher.vercel.app/",
  },

  {
    id: 6,
    image: IMG6,
    title: "Cinema App",
    github: "https://github.com/hmz273",
    demo: "https://movies-night.vercel.app/",
  },

  {
    id: 7,
    image: IMG7,
    title: "GrowUp App",
    github: "https://github.com/hmz273",
    demo: "https://growup-ten.vercel.app/",
  },

  {
    id: 8,
    image: IMG8,
    title: "Gimpo App",
    github: "https://github.com/hmz273",
    demo: "https://gimpo-eight.vercel.app/",
  },

  {
    id: 9,
    image: IMG9,
    title: "Robots App",
    github: "https://github.com/hmz273",
    demo: "https://robots-fawn.vercel.app/",
  },

  {
    id: 10,
    image: IMG9,
    title: "E-Health",
    github: "https://github.com/hmz273",
    demo: "https://e-health-seven.vercel.app/",
  },
];

// const featured = [
//   {
//     id: 1,
//     image: FIMG1,
//     title: "NFT Web3 App",
//     github: "https://github.com/hmz273",
//     demo: "https://agency-gules.vercel.app/",
//   },
// ];

const Portfolio = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item" data-aos="fade-up"
            data-aos-duration="2500">
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

        {/* {featured.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item__fetr" data-aos="fade-up"
            data-aos-duration="2500">
              <div className="portfolio__item-image-fetr">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta-fetr">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  demo
                </a>
              </div>
            </article>
          );
        })} */}
      </div>
    </section>
  );
};

export default Portfolio;
