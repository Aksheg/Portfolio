import React from "react";
import "./about.css";
import profilepic from "../../assets/Passport 1.jpeg";
import CV from "../../assets/Oluwasegun Akindele's CV.pdf"
import downloadicon from "../../assets/download.png"
import Info from './Info'

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>

            <div className="about__container container grid">
                <img className="about__img" src={profilepic} alt="my profile" />
                
                <div className="about__data">
                    <Info />

                    <p className="about__description">
                    I have experience in building scalable applications, and proficiency in modern technologies such as Node.JS, ExpressJS, TypeScript, React, MongoDB, PostgreSQL, MySQL, AWS, Payment Integration, REST API, Firebase, JIRA, Docker, and more. 
                        In addition to my technical expertise, I am a proactive learner, excellent in technical documentation, and have strong communication and collaboration skills. I am also skilled in problem-solving, Agile methodologies, and QA/testing.                    </p>

                    <a download="" href={CV} className=" button button--flex">Download CV <img className="btn__download" src={downloadicon} alt="download icon" /></a>
                </div>

            </div>
            
        </section>
    )
}

export default About;