import { Form } from "react-bootstrap";

export default function SearchBar(props) {
  return (
    <>
      <Form className="text-center">
        <Form.Label as="h2">Browse Plants</Form.Label>
        <Form.Group controlId="searchBar">
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
