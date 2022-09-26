import { Form } from "react-bootstrap";
import axios from "axios";

export default function SearchBar(props) {
  const searchDB = (event) => {
    axios
      .get(`/api/plants/${event.target.value}`)
      .then((response) => console.log(response.data[0]));
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="searchBar">
        <Form.Label>Find your plant here</Form.Label>
        <Form.Control
          type="text"
          placeholder="Search for your next plant here!"
          onChange={searchDB}
        />
      </Form.Group>
    </Form>
  );
}
