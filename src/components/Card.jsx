export default function Card(props) {
  const borderType = (status) => {
    if (status === "watered") {
      return "#198754"; //Matches the green from the Bootstrap button. Should we make the button change color too?
    }
    if (status === "should water") {
      return "yellow";
    }
    if (status === "urgent water") {
      return "red";
    }
  };
  return (
    <div
      class="card p-3"
      style={{
        width: "15rem",
        height: "17rem",
        borderWidth: "2px",
        borderColor: borderType(props.waterStatus),
      }}
    >
      <img src={props.picture} class="card-img-top" alt={props.altText} />
      <div class="card-body p-0">
        <h5 class="card-title m-0">{props.plant}</h5>
        <p
          class="card-text mb-0 d-flex justify-content-between"
          style={{ fontSize: "0.9rem" }}
        >
          Last watered: <span>{props.lastWatered}</span>
        </p>
        <p
          class="card-text mb-1 d-flex justify-content-between"
          style={{ fontSize: "0.9rem" }}
        >
          Next watering: <span>{props.nextWatering}</span>
        </p>
        <a href="/" class="btn btn-success">
          View Plant
        </a>
      </div>
    </div>
  );
}
