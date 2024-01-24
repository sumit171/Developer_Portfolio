import React from "react";
import CV from "../../assets/Sumit-portfolio-resume.pdf";

export default function CTA() {
  return (
    <div className="cta">
      <a href={CV} className="btn" target="_blank" rel="noreferrer">
        Resumeee
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}
