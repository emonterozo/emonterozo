import './Skill.css';

const Skill = (props) => {
    return (
        <section className="skills-area d-flex flex-column align-items-center bg-dark text-white" id="skills">
            <h3 className="section-title">Skills</h3>
            <ul className="d-flex flex-wrap justify-content-center"> 
            {
                props.skills.map(skill => (
                <li className="p-2">
                    <div className="img-container d-flex justify-content-center align-items-center">
                        <a href={skill.technology_url} target="_blank">
                            <img src={skill.technology_image} alt={skill.technology_name} className="img"></img>
                        </a>
                    </div>
                </li>
                ))
            }
            </ul>
        </section>
    )
}

export default Skill;