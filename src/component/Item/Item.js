import renderHTML from 'react-render-html';

import './Item.css';

const Item = (props) => {
    const { project } = props

    return (
        <div className="col-md py-2">
            <div className="item card h-100 text-white bg-dark">
                <div className="card-header">
                    <h3 className="card-title">{project.project_name}</h3>
                    <i className="card-subtitle mb-2">
                    {
                        project.project_tags.map(tag => (
                            ` #${tag}`
                        ))
                    }
                    </i>
                </div>
                <div className="card-body">
                    <p class="card-title">{renderHTML(project.project_description)}</p>
                </div>
                <div className="card-footer">
                <div className="d-flex flex-column justify-content-center align-items-center">
                        <a href={project.project_code} target="_blank" className="btn btn-primary m-2 btn-block">
                        <i class="fas fa-code m-2" />
                           Code
                        </a>
                        <a  href={project.project_demo} target="_blank" className="btn btn-warning m-2 btn-block">
                        <i className="fas fa-play m-2" />
                           Demo
                        </a>
                </div>
                </div>
            </div>
        </div>
    )
}


export default Item