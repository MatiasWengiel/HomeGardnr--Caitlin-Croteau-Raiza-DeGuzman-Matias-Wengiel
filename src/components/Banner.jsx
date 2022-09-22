import { useState } from "react";
import { Alert, Button } from "react-bootstrap";

export default function Banner(props) {
  const weatherWarning = props.weatherWarning;
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <p className="m-0">
          <span style={{ fontWeight: "bold" }}>Weather Warning:</span>{" "}
          {props.weatherWarning}
        </p>
      </Alert>
    );
  }
}
