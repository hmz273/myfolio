import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsPatchCheckFill } from 'react-icons/bs'
import './Experience.css'

const Experience = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend" data-aos="zoom-in-right">
          <h3>Frontend Development</h3>
          <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>Nextjs</h4>
            <small className="text-light">Experience</small>
            </div>
          </article>
          
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>Figma</h4>
            <small className="text-light">Experience</small>
            </div>
          </article>
          
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>Tailwined</h4>
            <small className="text-light">Experience</small>
            </div>
          </article>
          
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>Bootstrap</h4>
            <small className="text-light">Experience</small>
            </div>
          </article>

          
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>React-js</h4>
            <small className="text-light">Experience</small>
            </div>
          </article>

          
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>XD</h4>
            <small className="text-light">Experience</small>
            </div>
          </article>
          </div>
        </div>

{/* ======================= */}

        <div className="experience__backend" data-aos="zoom-in-left">
          <h3>Backend Development</h3>
          <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>Nodejs</h4>
            <small className="text-light">Experience</small>
            </div>
          </article>
          
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>Expressjs</h4>
            <small className="text-light">Experience</small>
            </div>
          </article>
          
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>Nestjs</h4>
            <small className="text-light">Experience</small>
            </div>
          </article>
          
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>MongoDB</h4>
            <small className="text-light">Experience</small>
            </div>
          </article>

          
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>Mysql</h4>
            <small className="text-light">Experience</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>GIT</h4>
            <small className="text-light">Experience</small>
            </div>
          </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience