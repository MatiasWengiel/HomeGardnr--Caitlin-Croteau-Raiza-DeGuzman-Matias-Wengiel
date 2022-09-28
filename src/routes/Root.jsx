import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Navigation />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
