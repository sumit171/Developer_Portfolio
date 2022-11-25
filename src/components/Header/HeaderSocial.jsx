import React from "react"
import {BsLinkedin} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {FaFacebookF} from "react-icons/fa";

export default function HeaderSocial(){
    return(
        <div className="header__social">
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
        <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
        >
        <FaFacebookF/>
        </a>
        <a
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
        >
        <BsGithub/>
        </a>
        </div>
    )
}