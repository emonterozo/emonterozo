import React from 'react';
import renderHTML from 'react-render-html';

import './Project.css';


const Project = (props) => {
    return (
        <section class="projects-area bg-dark text-white" id="projects">
            <h3 class="section-title">Projects</h3>
            <ul class="projects-content">
            {
                props.projects.length > 0 ?
                props.projects.map((project, i) => (
                <li key={i}>
                    <div class="project-card">
                        <div class="project-container">
                            <h3><b>{ project.project_name }</b></h3>
                            <p>{ renderHTML( project.project_description ) }</p>
                            <i>
                            {project.project_tags.map(tag => (
                                ` #${tag}`
                            ))}
                            </i>
                        </div>
                        <a href={project.project_code} target="_blank" class="btn btn-primary">Code</a>
                        <a href={project.project_demo} target="_blank" class="btn btn-success">Demo</a>
                    </div>
                </li>
            )) :
            <h1 class="coming-soon">It will display soon. <br></br>Thank you!</h1>
            }
            </ul>
        </section>
    )
}

export default Project;