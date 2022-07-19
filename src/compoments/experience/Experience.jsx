import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './Experience.css'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>Html</h4>
            <small className="text-light">Experience</small>
            </div>
          </article>
          
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>Css</h4>
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
            <h4>XD / Figma</h4>
            <small className="text-light">Experience</small>
            </div>
          </article>
          </div>
        </div>

{/* ======================= */}

        <div className="experience__backend">
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