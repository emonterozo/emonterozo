import React from 'react';
import './Skill.css';


const Skill = (props) => {
    return (
        <section class="skills-area bg-dark text-white" id="skills">
            <h3 class="section-title">Skills</h3>
            <ul class="skills-content">
                {
                props.skills.map(technology => (
                <li>
                    <a href={technology.technology_url} target="_blank">
                        <img src={technology.technology_image} alt={technology.technology_name} ></img>
                    </a>
                </li>
                ))
                }
            </ul>
        </section>
    )
}

export default Skill;