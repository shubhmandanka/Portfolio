import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Contact = () => {
      const form = useRef();

      const[done, setDone] = useState(false);

      const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm(
            "service_gku2mlm",
            "template_d1qgpsk",
            form.current,
            "CBhJU0JoWZCreOHuu"
          )
          .then(
            (result) => {
              console.log(result.text);
              setDone(true);
            },
            (error) => {
              console.log(error.text);
            }
          );
      };





      
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="contact mt-0 mt-md-5">
      <div className="container">
        <div className="row">
          <div className="studies col-lg-6 d-flex flex-column position-relative text-center text-md-start align-items-center">
            <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
            <span>Contact Me</span>
            <span></span>
            <div
              className="blur s-blur"
              style={{ background: "var(--blueCard)" }}
            ></div>
          </div>

          {/* right side  */}

          <div className="c-right col-lg-6">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="user_name"
                className="user"
                placeholder="YOUR NAME"
              />
              <input
                type="email"
                name="user_email"
                className="user"
                placeholder="YOUR EMAIL"
              />
              <textarea
                name="message"
                className="user"
                placeholder="YOUR MESSAGE"
                cols="30"
                rows="10"
              ></textarea>
              <input type="submit" value="Send" className="button p-button" />
              <span className="c-span">
                {done && "Thanks for Contacting Me!"}
              </span>
              <div
                className="blur c-blur1"
                style={{ background: "var(--purple)" }}
              >
                {" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
