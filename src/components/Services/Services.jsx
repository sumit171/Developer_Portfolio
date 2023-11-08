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
                Information Architecture: Organize content logically and create
                a structure that's easy to navigate.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Wireframing and Prototyping: Create wireframes to outline layout
                and functionality, and develop interactive prototypes for
                testing.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Choose readable fonts and ensure a clear hierarchy of text.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Microinteractions: Enhance the user experience with subtle
                animations and interactions
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Performance: Optimize the UI/UX for speed, responsiveness, and
                efficient interactions.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Security: Ensure robust security measures to protect user data.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>FrontEnd Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I have a strong focus on a React-oriented approach to web
                development. React is at the core of my expertise, and I
                leverage its capabilities to create responsive and highly
                interactive user interfaces.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                With a deep understanding of React's component-based
                architecture, I can design and build web applications that are
                both visually appealing and efficient.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I'm well-versed in state management using libraries like Redux
                and context API, and I ensure that applications I develop are
                optimized for performance through techniques such as lazy
                loading and code splitting.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF front end dev */}
        <article className="service">
          <div className="service__head">
            <h3>BackEnd Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Node.js allows me to efficiently handle asynchronous operations
                and develop real-time features, making it a valuable asset for
                projects that require fast, responsive applications. I've also
                implemented authentication and authorization mechanisms,
                including JWT.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I'm well-versed in popular web frameworks like Express.js, which
                I use to create RESTful APIs, enabling seamless communication
                between the frontend and backend.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Feel free to personalize this response to align with your
                specific experiences and expertise in Node.js-oriented backend
                development.
              </p>
            </li>
          </ul>
        </article>
        {/*content*/}
      </div>
    </section>
  );
}
