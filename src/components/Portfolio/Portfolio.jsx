import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "GYM SPA",
    github: "https://github.com/",
    demo: "https://dribbble.com/search",
  },
  {
    id: 2,
    image: IMG2,
    title: "Ecomm",
    github: "https://github.com/",
    demo: "https://dribbble.com/search",
  },
  {
    id: 3,
    image: IMG3,
    title: "Chat App",
    github: "https://github.com/",
    demo: "https://dribbble.com/search",
  },
  {
    id: 4,
    image: IMG4,
    title: "Netflix",
    github: "https://github.com/",
    demo: "https://dribbble.com/search",
  },
  {
    id: 5,
    image: IMG5,
    title: "Spotify",
    github: "https://github.com/",
    demo: "https://dribbble.com/search",
  },
  {
    id: 6,
    image: IMG6,
    title: "Amazon",
    github: "https://github.com/",
    demo: "https://dribbble.com/search",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((props) => {
          return (
            <article key={props.id}className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={props.image} alt={props.title} />
              </div>
              <h3>{props.title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={props.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={props.demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
