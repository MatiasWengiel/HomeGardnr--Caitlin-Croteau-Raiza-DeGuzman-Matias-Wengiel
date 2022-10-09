import { Form } from "react-bootstrap";

export default function SearchBar(props) {
  return (
    <>
      <Form>
        <Form.Group controlId="searchBar">
          <Form.Control
            type="text"
            placeholder={props.placeholder}
            onChange={props.searchPlant}
          />
        </Form.Group>
      </Form>
    </>
  );
}
