import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Navigation.scss";
import { useLocation } from "react-router-dom";

export default function NavLink({ href, label }) {
  const location = useLocation();
  console.log(location.pathname);
  const pathname = location.pathname;
  const isActive = pathname === href;
  console.log(isActive);

  return (
    <Nav.Link
      className={isActive ? "nav-text nav-link-selected" : "nav-text"}
      href={href}
    >
      {label}
    </Nav.Link>
  );
}
