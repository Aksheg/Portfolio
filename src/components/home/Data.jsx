import React from "react";
import hellopic from '../../assets/wave.png';


const Data = () => {
    return(
        <div className="home__data">
            <h1 className="home__title">
                Oluwasegun Akindele
                <img className="home__hand" src={hellopic} alt="my profile" />
            </h1>
            <h3 className="home__subtitle">Software Engineer</h3>
            <p className="home__description">I am a proactive software engineer skilled in agile development, building user-centric applications, and embracing challenges as growth opportunities.</p>

            <a href="#contact" className="button button--flex">
                Say Hi <i class="button__contact uil uil-envelope-send"></i>
            </a>
        </div>
    )
}

export default Data;