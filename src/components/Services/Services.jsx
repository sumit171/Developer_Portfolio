import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

export default function Services() {
  return (
    <section id="services">
      <h5>What you will get here</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                quibusdam at voluptates molestiae fugit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                quibusdam at voluptates molestiae fugit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                quibusdam at voluptates molestiae fugit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                quibusdam at voluptates molestiae fugit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                quibusdam at voluptates molestiae fugit.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                quibusdam at voluptates molestiae fugit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                quibusdam at voluptates molestiae fugit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                quibusdam at voluptates molestiae fugit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                quibusdam at voluptates molestiae fugit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                quibusdam at voluptates molestiae fugit.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF Wev dev */}
        <article className="service">
          <div className="service__head">
            <h3>Content creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                quibusdam at voluptates molestiae fugit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                quibusdam at voluptates molestiae fugit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                quibusdam at voluptates molestiae fugit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                quibusdam at voluptates molestiae fugit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                quibusdam at voluptates molestiae fugit.
              </p>
            </li>
          </ul>
        </article>
        {/*content*/}
      </div>
    </section>
  );
}
