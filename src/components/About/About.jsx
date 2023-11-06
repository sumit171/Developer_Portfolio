import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
// import DP from "../../assets/portfolio-dp1.jpg";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { GoFileSubmodule } from "react-icons/go";

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div>
            <img className="about__me-image" src={ME} alt="portfolioAboutImage" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ years working</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>Air Asia & Air India</small>
            </article>
            <article className="about__card">
              <GoFileSubmodule className="about__icon" />
              <h5>Projects</h5>
              <small>5+ completed</small>
            </article>
          </div>
          <p>
            I am a MERN fullstack software developer With some expreince in Adobe Experince Managment.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}
