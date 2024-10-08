import React, {useState} from "react";
import "./qualification.css"


const Qualification = () => {

    const [toggleState, setToggleState] = useState (1);
    const toggleTab = (index) => setToggleState (index);


    return (
        <section className="qualification section" id="portfolio">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Journey</span>


            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={ toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Experience
                    </div>

                    <div className={ toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Education
                    </div>
                </div>

                <div className="qualification__sections">

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        {/* <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Diploma in Software Engineering</h3>
                                <span className="qualification__subtitle">Frontend Engineering</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2022 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div> */}

                        {/* <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Udacity Nanodegree</h3>
                                <span className="qualification__subtitle">Junior Frontend Developer</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2022 - 2022
                                </div>
                            </div>
            
                        </div> */}

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachelor of Science (Economics)</h3>
                                {/* <span className="qualification__subtitle">Graduated top 5% of my class</span> */}
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2014 - 2018
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>
                    </div>

                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Software Engineer</h3>
                                <span className="qualification__subtitle">FIPAY</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> Dec 2023 - Present
                                </div>
                            </div>
            
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Backend Engineer</h3>
                                <span className="qualification__subtitle">CentBit</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> July 2023 - Dec 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Software Engineer</h3>
                                <span className="qualification__subtitle">Decagon</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> Oct 2022 - Present
                                </div>
                            </div>
            
                        </div>

                        {/* <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Frontend Engineer</h3>
                                <span className="qualification__subtitle">Pison Healthcare</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2019 - 2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;