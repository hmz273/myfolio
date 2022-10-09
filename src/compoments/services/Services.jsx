import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './Services.css'
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Logo</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Video Annimatio</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Flyers</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Print On Demand</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Carte Visit</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>UI/UX</p>
            </li>

          </ul>
        </article>


        <article className="service">
          <div className="service__head">
            <h3>web Development</h3>
          </div>
          
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Site Static</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Site Dynamic</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Site e-commerce</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Project SAAS</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Maintenance Services</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>SEO</p>
            </li>
          </ul>
        </article>


        <article className="service">
          <div className="service__head">
            <h3>Mobile Development</h3>
            <h4>featured</h4>
          </div>
          
          <ul className="service__list">

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor</p>
            </li>

          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services