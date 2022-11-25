import React from "react"
import "./Header.css"
import CTA from "./CTA"
import ME from '../../assets/me.png'
import HeaderSocial from "./HeaderSocial"

export default function Header(){
    return(
        <header>
            <div className=" container header__container">
                <h4>Hello I,m</h4>
                <h1>Sumit</h1>
                <h5 className="text-light">FullStack Developer</h5>
                <CTA/>
                <div className="me">
                    <img src={ME} alt="me-img" />
                </div>
                <a href="#contact" className="scroll__down">Scroll To bottom</a>
                <HeaderSocial/>
            </div>
        </header>
    )
}