import { useState } from "react";
import renderHTML from "react-render-html";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/row";

import "./Item.css";

function PreviewModal(props) {
  return (
    <Modal size="lg" {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Images</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          {props.project.preview.map((preview) => (
            <Col md="4" className="my-2">
              <div className="item card bg-dark">
                <Image fluid src={preview} />
              </div>
            </Col>
          ))}
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Item = (props) => {
  const { project } = props;
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="col-md py-2">
      <div className="item card h-100 text-white bg-dark">
        <div className="card-header">
          <h3 className="card-title">{project.project_name}</h3>
          <i className="card-subtitle mb-2">
            {project.project_tags.map((tag) => ` #${tag}`)}
          </i>
        </div>
        <div className="card-body">
          <p class="card-title">{renderHTML(project.project_description)}</p>
        </div>
        <div className="card-footer">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <a
              onClick={() => setModalShow(true)}
              target="_blank"
              className="btn btn-primary m-2 btn-block"
              rel="noreferrer"
            >
              <i class="fas fa-images m-2" />
              Preview
            </a>
            <a
              href={project.project_code}
              target="_blank"
              className="btn btn-secondary m-2 btn-block"
              rel="noreferrer"
            >
              <i class="fas fa-code m-2" />
              Code
            </a>
            <a
              href={project.project_demo}
              target="_blank"
              className="btn btn-warning m-2 btn-block"
              rel="noreferrer"
            >
              <i
                className={
                  project.is_mobile ? "fas fa-download m-2" : "fas fa-play m-2"
                }
              />
              {project.is_mobile ? "Download App" : "Demo"}
            </a>
          </div>
        </div>
      </div>
      <PreviewModal
        show={modalShow}
        project={project}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Item;
