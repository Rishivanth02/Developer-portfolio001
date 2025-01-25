import React, { useRef, useState } from "react";
import style from "../contact/contact.module.scss";
import Image from "../../assets/svg/doodle10.svg";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMail = (e) => {
    e.preventDefault();

    const serviceId = "service_pwqepbk";
    const templateId = "template_r1mw2wl";
    const publicKey = "gyN3rjNr0P9eVBJQS";

    const templateParams = {
      from_name: name,
      email_id: email,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };


  return (
    <>
    <section className={`${style["contact-wrapper"]}`}>
      <div className={`${style["contact-form-wrapper"]}`}>
        <h2
          className={`${style["skills-content-heading"]} skills-content-heading`}
        >
          Let’s Work{" "}
          <span className={`${style["sub-text"]} sub-text`}> Together!</span>
        </h2>
        <div className={`${style["contact-content-wrapper"]}`}>
          <div className= {`${style["footer-form"]} footer-form`}>
            <form  onSubmit={handleSendMail} >
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="from_name"
                value={name}
                placeholder="Enter your name"
                required
                onChange={(e) => setName(e.target.value)}
              />

              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email_id"
                value={email}
                placeholder="Enter your email address"
                required
                onChange={(e) => setEmail(e.target.value)}
              />

              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={message}
                placeholder="Type your message here..."
                rows="4"
                required
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
          <span>
            <img className={`${style["Do"]}`} src={Image} alt="" />
          </span>
        </div>
      </div>
    </section>
    </>
  );
}

export default Contact;
