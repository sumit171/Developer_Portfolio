import React from "react"
import {BsLinkedin} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
// import {FaFacebookF} from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";

export default function HeaderSocial(){
    return(
        <div className="header__social">
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
    )
}