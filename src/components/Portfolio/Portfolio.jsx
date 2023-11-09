import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/fitness-club.png";
import IMG2 from "../../assets/weather-app.png";
import IMG3 from "../../assets/multi-lang.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Fitness club",
    github: "https://github.com/sumit171",
    demo: "https://sumit-fitness-club.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Weather web app",
    github: "https://github.com/sumit171",
    demo: "https://weather-4-casting.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Multilingual app",
    github: "https://github.com/sumit171",
    demo: "https://multilang-utility.netlify.app/",
  },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: "Netflix",
  //   github: "https://github.com/",
  //   demo: "https://dribbble.com/search",
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: "Spotify",
  //   github: "https://github.com/",
  //   demo: "https://dribbble.com/search",
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "Amazon",
  //   github: "https://github.com/",
  //   demo: "https://dribbble.com/search",
  // },
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
              <h3 className="title-portfolio">{props.title}</h3>
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
                  href={props.demo ? props.demo : null}
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
