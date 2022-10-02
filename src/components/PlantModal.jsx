import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import LargeCardMain from "./LargeCardMain";
import LargeCardUser from "./LargeCardUser";

export default function MyModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="xl"
    >
      <Modal.Body>
        {props.modalMode === "main" && <LargeCardMain id={props.id} />}
        {props.modalMode === "user" && <LargeCardUser id={props.id} />}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
