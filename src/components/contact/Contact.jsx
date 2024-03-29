import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7eexjzg', 'template_tzuchki', form.current, '4vFk9zAFZK6jYwAbD')
      e.target.reset()
  };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in Touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <a href="mailto:akindeleoluwasegun01@gmail.com" className="contact__button">Write me {" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>

                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">WhatsApp</h3>
                            <a href="https://wa.me/08166549248" className="contact__button">Write me {" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>

                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-twitter contact__card-icon"></i>
                            
                            <h3 className="contact__card-title">Twitter ID</h3>
                            <a href="https://twitter.com/messages/2154119859-2154119859?text=" className="contact__button">Write me {" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>

                    <form ref={form} onSubmit={sendEmail} action="#" className="contact__form">
                        <div className="contact__form-div">
                            <label for="input1" className="contact__form-tag">Name</label>
                            <input id="input1" type="text" name="name" className="contact__form-input" placeholder="Type your name" />

                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input type="email" name="email" className="contact__form-input" placeholder="Type your email" />
                            
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project Summary</label>
                            <textarea name="project" cols="5" rows="10" className="contact__form-input " placeholder="Write your project summary"></textarea>
                        </div>

                        <button className="button button--flex">
                Send Message <i class="uil uil-envelope-add"></i>
            </button>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default Contact;