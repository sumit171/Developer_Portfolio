import React from "react";
import "./Footer.css";
// import {FaFacebookF} from "react-icons/fa";
import {BsGithub} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";
import {BsTwitter} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Sumit Kumar
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        {/* <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
        >
            <FaFacebookF/>
        </a> */}
        <a
          href="https://github.com/sumit171"
          target="_blank"
          rel="noreferrer"
        >
            <BsGithub/>
        </a>
        <a
        href="https://www.linkedin.com/in/sumit-kumar-274317147/"
        target="_blank"
        rel="noreferrer"
        >
        <BsLinkedin/>
        </a>
        <a
          href="https://www.instagram.com/_s_u_m_i_t_._/?next=%2F"
          target="_blank"
          rel="noreferrer"
        >
            <AiFillInstagram/>
        </a>
        <a href="https://twitter.com/SUMITKU79769628"
        target="_blank"
        rel="noreferrer">
            <BsTwitter/>
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Copyright SK developer </small>
      </div>
    </footer>
  );
}
