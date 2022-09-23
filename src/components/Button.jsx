import "./Button.scss";

export default function Button(props) {
  return (
    <button className="btn btn-danger" onClick={props.onClick}>
      {props.children}
    </button>
  );
}
