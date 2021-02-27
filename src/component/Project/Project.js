import Item from '../Item/Item';


const Project = (props) => {
    return (
        <section className="projects-area d-flex flex-column align-items-center bg-dark text-white" id="projects">
            <h3 className="section-title">Projects</h3>
            <div className="container">
                <div className="row"> 
                {
                    props.projects.length > 0 &&
                    props.projects.map((project) =>{
                        return <Item project={project} />
                    })
                }
                </div>
            </div>
        </section>
    )
}

export default Project;