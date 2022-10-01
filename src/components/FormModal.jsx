import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PlantForm from "./PlantForm";

export default function FormModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="xl"
    >
      <Modal.Body>
        <PlantForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
