import { useState, useEffect } from 'react';
import renderHTML from 'react-render-html';

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
        <section className="about-area d-flex flex-column align-items-center" id="about">
            <h2 className="section-title">About Me</h2>
            <div className="container">
                <div className="row flex-column-reverse flex-lg-row py-2">
                    <div className="col-md-7">
                        <div className="container-fluid h-100 d-flex flex-column justify-content-center align-items-center">
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
                        <p className="lead">{renderHTML(props.user.user_summary)}</p>
                        <a href={props.user.user_resume} target="_blank" className="btn btn-dark" >View Resume</a> 
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card h-100 shadow-lg">
                            <img src={props.user.user_image} className="card-img-top" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="row py-2">
                    <div className="col-md">
                        <div className="container d-flex flex-column align-items-center">
                            <h2 className="text-warning">
                                <i className="fas fa-briefcase icon" />
                                Work History
                            </h2>
                            <ul className="text-center">
                            {
                                props.works.map(experience => (
                                !experience.is_employed &&
                                <li className="m-3 p-2">
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
                    </div>
                    <div className="col-md">
                        <div className="container d-flex flex-column align-items-center">
                            <h2 className="text-warning">
                                <i className="fas fa-school icon" />
                                Education History
                            </h2>
                            <ul className="text-center">
                            {
                                props.educations.map(education => (
                                <li className="m-3 p-2">
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
                </div>
            </div>
        </section>
    )
}

export default About;