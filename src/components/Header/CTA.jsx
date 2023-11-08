import React from "react";
import CV from "../../assets/Sumit-rezume.pdf";

export default function CTA() {
  return (
    <div className="cta">
      <a href={CV} className="btn" target="_blank" rel="noreferrer">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}
