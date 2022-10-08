import { useState } from "react";
import { Alert } from "react-bootstrap";

export default function Banner(props) {
  const { weatherWarning, setBannerMessage } = props;

  return (
    <Alert
      className="text-center"
      variant="danger"
      onClose={() => setBannerMessage([])}
      dismissible
    >
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
