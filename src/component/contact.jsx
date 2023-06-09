import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import Spinner from "../component/spinner/spinner";

const defaultForm = {
  fullname: "",
  email: "",
  subject: "",
  message: "",
  number: "",
};

const Contact = () => {
  const [formInput, setForm] = useState(defaultForm);
  const { fullname, email, subject, message, number } = formInput;
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 

  const reSetform = () => {
    setForm(defaultForm);
  };

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setForm({ ...formInput, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    setIsLoading(true);

    axios
      .post("https://getform.io/f/494a595a-3cc7-4578-b1d8-55ad9e96a99f", formData)
      .then((response) => {
        console.log(response);
        reSetform();
        setSuccess("Thank you message sent!");
        setTimeout(() => {
          setSuccess('')
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        setSuccess(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Fragment>
      <div className="contact-container">
        <div className="map-container">
          <h1 data-aos="flip-up">Contact</h1>
          <iframe
            data-aos="zoom-in"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.125109309582!2d4.5423594148250235!3d7.776556509484942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103787ecec516945%3A0x59bdb37d614c67ca!2sGbongan%20-%20Ibadan%20Rd%2C%20Osogbo%2C%20Osun!5e0!3m2!1sen!2sng!4v1678671039167!5m2!1sen!2sng"
            title="map"
            width="1200"
            height="400"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      
        <div className="form-container">
          <form onSubmit={handleSubmit}>
        {isLoading && <Spinner />}
            <h3>Get In Touch</h3>
            <textarea
              data-aos="fade-down"
              name="message"
              id=""
              required
              cols="30"
              rows="10"
              placeholder="Enter Message"
              value={message}
              onChange={handleOnchange}
            ></textarea>
            <div className="input">
              <input
                data-aos="flip-up"
                type="text"
                required
                placeholder="Enter your name"
                value={fullname}
                name="fullname"
                onChange={handleOnchange}
              />
              <input
                data-aos="flip-down"
                type="email"
                required
                placeholder="Email"
                value={email}
                name="email"
                onChange={handleOnchange}
              />
            </div>
            <input
              data-aos="flip-up"
              type="number"
              required
              placeholder="Enter phone"
              value={number}
              name="number"
              onChange={handleOnchange}
            />
            <input
              data-aos="flip-left"
              type="text"
              required
              placeholder="Enter Subject"
              value={subject}
              name="subject"
              onChange={handleOnchange}
            />
            <p>{success}</p>
            <button type="submit" data-aos="zoom-out">
              SEND
            </button>
          </form>
          <div className="social-container">
            <h3 data-aos="zoom-out">CONTACT ME</h3>
            <div className="addre">
              <div className="same" data-aos="fade-down">
                <i className="fa-solid fa-house"></i>
                <p data-aos="fade-up">Osun Nigeria</p>
              </div>
              <h5 data-aos="zoom-in">Onward area Oshogbo</h5>
            </div>
            <div className="phone" data-aos="fade-down">
              <div className="same" data-aos="fade-up">
                <i className="fa-solid fa-phone" data-aos="zoom-in"></i>
                <a href="tel:+2349134914475" data-aos="zoom-out">
                  +234 913 491 4475
                </a>
              </div>
              <h5 data-aos="fade">Mon to Friday 9am to 8pm</h5>
            </div>
            <div className="mail" data-aos="fade-down">
              <div className="same" data-aos="fade-up">
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:naseernoor4864@gmail.com">
                  naseernoor4864@gmail.com
                </a>
              </div>
              <h5 data-aos="zoom-in">Send us your query anytime!</h5>
            </div>
            <div className="app" data-aos="flip-down">
              <a href="https://wa.me/2347036676508">
                <img
                  src="https://i.ibb.co/YfyN3V8/whatsapp.png"
                  alt=""
                  className="whats"
                />
              </a>
              <a href="https://www.facebook.com/nassopeyemi">
                <img
                  src="https://i.ibb.co/vLnnzFm/Facebook-Logo-2019.png"
                  alt=""
                  className="face"
                />
              </a>
              <a href="https://www.instagram.com/naseeradeniyi/">
                <img
                  src="https://i.ibb.co/4VDZsq1/pngtree-instagram-logo-inverse-png-image-556198.jpg"
                  alt=""
                  className="insta"
                />
              </a>
              <a href="https://twitter.com/naseeroladayo/">
                <img
                  src="https://i.ibb.co/f9dbYZC/png-transparent-computer-icons-logo-twitter-miscellaneous-blue-logo-thumbnail.png"
                  alt=""
                  className="twitt"
                />
              </a>
              <a href="https://github.com/naseer4864">
                <img
                  src="https://i.ibb.co/QnD3VkH/Git-Hub-Mark.png"
                  alt=""
                  className="git"
                />
              </a>
              <a href="https://www.linkedin.com/in/nasirudeen-nurudeen-44a702255?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BoqhK0QLTSHyXv5ZGehahXQ%3D%3D">
                <img
                  src="https://i.ibb.co/b72FPPN/linkedin-icon-logo-png-transparent.png"
                  alt=""
                  className="linkedin"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
