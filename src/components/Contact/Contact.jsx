import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nm1j7qk', 'template_qkwyh0g', form.current, 'JE86BlcecxHPqq0by')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>sumitskkumar56@gmail.com</h5>
            <a href="mailto:sumitskkumar56@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <MdAddIcCall className="contact__option-icon" />
            <h4>Let's Connect</h4>
            <h5>9898923408</h5>
            <a href="tel:9898923408">call me</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>Ping me on WhatsApp</h5>
            <a href="https://api.whatsapp.com/send?phone=+919898923408">Say Hi!</a>
          </article>
        </div>
        <form  ref={form} onSubmit={sendEmail} >
            <input type="text" name="name" placeholder="Your Full Name" required/>
            <input type="email" name="email" placeholder="Your Email" required/>
            <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}
