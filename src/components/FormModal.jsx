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
        <PlantForm onHide={props.onHide} updateLibrary={props.updateLibrary} />
      </Modal.Body>
    </Modal>
  );
}
