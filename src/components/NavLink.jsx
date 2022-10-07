import Nav from "react-bootstrap/Nav";
import "../styles/Navigation.scss";
import { useLocation } from "react-router-dom";

export default function NavLink({ href, label }) {
  const location = useLocation();
  const pathname = location.pathname;
  const isActive = pathname === href;

  return (
    <Nav.Link
      className={isActive ? "nav-link nav-link-selected" : "nav-link"}
      href={href}
    >
      {label}
    </Nav.Link>
  );
}
