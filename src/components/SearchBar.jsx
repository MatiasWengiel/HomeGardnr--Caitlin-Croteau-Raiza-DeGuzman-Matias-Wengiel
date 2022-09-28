import { Form } from "react-bootstrap";

export default function SearchBar(props) {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="searchBar">
          <Form.Label>Find your plant here</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search for your next plant here!"
            onChange={props.searchDB}
          />
        </Form.Group>
      </Form>
    </>
  );
}
