import { useState } from "react";
import { Alert } from "react-bootstrap";

export default function Banner(props) {
  const weatherWarning = props.weatherWarning;
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert className="text-center rounded-0" variant="danger" onClose={() => setShow(false)} dismissible>
        <span style={{ fontWeight: "bold" }}>Weather Warning:</span>
        {weatherWarning.map((msg, index) => {
          return (
            <p className="m-0" key={index}>
              {msg}
            </p>
          );
        })}
      </Alert>
    );
  }
}
