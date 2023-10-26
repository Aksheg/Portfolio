import React from "react";
import "./project.css";

const Project = () => {
    return(
        <section className="project section" id="project">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Some of my Projects</span>
        <div className="project__container">
            {/* <div className="project__content">
                <p>Portfolio Website</p>
                <p>A professional portfolio website highlighting my skills and projects as a Full Stack Developer.
                </p>
         
                <a href="https://github.com/ukadavid/react-portfolio" target="_blank" rel="noreferrer"><i class="uil social__github uil-github"></i></a>
                <a href="https://react-portfolio-git-main-ukadavid.vercel.app/" target="_blank" rel="noreferrer"><i class="uil social__external-link uil-external-link-alt"></i></a>
            </div>  */}
            <div className="project__content">
                <p>E-Aid</p>
                <p>A health-tech app that connects users with verified medical experts, and also finds hospitals nearby and connects with medical professionals. Built with ReactJS, ExpressJS, NodeJS, JWT, MySQL, Postman, Docker, TypeScript, Git, and Github.
                </p>
         
                <a href="https://github.com/Aksheg/E-Aid-Backend" target="_blank" rel="noreferrer"><i class="uil social__github uil-github"></i></a>
                <a href="https://github.com/Aksheg/E-Aid-Frontend" target="_blank" rel="noreferrer"><i class="uil social__external-link uil-external-link-alt"></i></a>
            </div> 
            <div className="project__content">
                <p>Film House</p>
                <p>A full-stack movie listing platform that performs crud operations, and role-based access control (RBAC). Built with Express, EJS, TypeScript, MongoDB, Docker, 
                </p>
                <a href="https://github.com/Aksheg/Movie-Listing-App-using-mongodb" target="_blank" rel="noreferrer"><i class="uil social__github uil-github"></i></a>
                <a href="https://movie-listing-app.onrender.com" target="_blank" rel="noreferrer"><i class="uil social__external-link uil-external-link-alt"></i></a>
            </div> 
            <div className="project__content">
                <p>PennyWise</p>
                <p>A savings app where users can manage their income effectively. Built with ReactJS, ExpressJS, NodeJS, JWT, MySQL, Paystack, Docker, TypeScript, Git, and Github.
                </p>
                <a href="https://github.com/Aksheg/PennyWise" target="_blank" rel="noreferrer"><i class="uil social__github uil-github"></i></a>
                <a href="https://github.com/Aksheg/PennyWise" target="_blank" rel="noreferrer"><i class="uil social__external-link uil-external-link-alt"></i></a>
            </div> 
            <div className="project__content">
                <p>Realtime ChatApp</p>
                <p>A chat app where users can create chat groups, add members and chat with one another. Built with ExpressJS, React, chatengine.io, JavaScript.

                </p>
                <a href="https://github.com/Aksheg/realtime-chatApp" target="_blank" rel="noreferrer"><i class="uil social__github uil-github"></i></a>
                <a href="https://github.com/Aksheg/realtime-chatApp" target="_blank" rel="noreferrer"><i class="uil social__external-link uil-external-link-alt"></i></a>
            </div> 
        </div>
    </section> 
    )
} 

export default Project