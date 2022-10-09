import { Modal, Alert, Image } from "react-bootstrap";
import "../styles/Buttons.scss";

export default function DeleteConfirmation(props) {
  return (
    <Modal
      show={props.viewDeleteConfirmation}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title>Are you sure you wish to delete this plant?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Alert variant="danger">
          <span style={{ fontWeight: "bold" }}>Warning: </span>Deleted plant
          information cannot be recovered
        </Alert>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn-custom btn-delete" onClick={props.handleDelete}>
          Delete
        </button>
        <button
          className="btn-custom btn-view-plant"
          onClick={props.closeWarningModal}
        >
          Go Back
        </button>
      </Modal.Footer>
    </Modal>
  );
}
