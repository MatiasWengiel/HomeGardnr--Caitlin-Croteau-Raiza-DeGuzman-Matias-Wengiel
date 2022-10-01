import Navigation from "../components/Navigation";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Header user="Waldo" />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
