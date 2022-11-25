import React from "react";
import "./Footer.css";
import {FaFacebookF} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {BsTwitter} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Logo
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
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
        >
            <FaFacebookF/>
        </a>
        <a
        href="https://www.linkedin.com/login"
        target="_blank"
        rel="noreferrer"
        >
        <BsLinkedin/>
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
            <AiFillInstagram/>
        </a>
        <a href="https://twitter.com/"
        target="_blank"
        rel="noreferrer">
            <BsTwitter/>
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Copyright if any </small>
      </div>
    </footer>
  );
}
