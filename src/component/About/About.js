import React, { useState, useEffect } from 'react';
import renderHTML from 'react-render-html';
import './About.css';

const About = (props) => {
    const [ currentWork, setCurrentWork ] = useState([])

    useEffect(() => {
        filterWorks(props.works)
    });
               

    const filterWorks = (array) => {
        const value = array.filter(item => {
            return item.is_employed
        })
        setCurrentWork(value)
    }


    return (
        <section class="about-area" id="about">
            <h2 class="section-title">About Me</h2>
            <div class="about-container">
                <div class="image-container" >
                    <div style={{ backgroundImage: `url(${props.user.user_image})` }} class="about-image" /> 
                </div>
                <div class="info-container">
                {
                    currentWork.length  > 0 ?
                    <h2>
                        <i>
                            {currentWork[0].job_title} at
                            <br></br>
                            {currentWork[0].company_name}
                        </i>
                    </h2> :
                    <h2>
                        <i>
                            {props.user.user_title},
                            <br></br>
                            Looking for Job Opportunities
                        </i>
                    </h2>
                }
                <p>{renderHTML(props.user.user_summary)}</p>
                <a href={props.user.user_resume} target="_blank" class="btn btn-dark" >View Resume</a>    
                </div>
            </div>

           <div class="experiences-container">
                <div class="work-container">
                    <h2 class="text-danger">
                        <i class="fas fa-briefcase icon" />
                        Work History
                    </h2>
                    <ul>
                    {
                        props.works.map(experience => (
                        !experience.is_employed &&
                        <li>
                            <i>{`${experience.job_title} at ${experience.company_name}`}
                            <br></br>
                            { experience.company_address }
                            <br></br>
                            { experience.inclusive_date }
                            </i>
                        </li>
                        ))
                    }
                    </ul>
                </div>
                <div class="education-container">
                    <h2 class="text-danger">
                        <i class="fas fa-school icon" />
                        Education History
                    </h2>
                    <ul>
                    {
                        props.educations.map(education => (
                        <li>
                            <i>{`${education.degree} at ${education.school_name}`}
                            <br></br>
                            { education.school_address }
                            <br></br>
                            { education.inclusive_date }
                            </i>
                        </li>
                        ))
                    }
                    </ul>

                </div>
           </div>
        </section>
    )
}

export default About;