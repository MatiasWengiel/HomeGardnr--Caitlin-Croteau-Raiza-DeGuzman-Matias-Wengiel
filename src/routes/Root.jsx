import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { Outlet } from "react-router-dom";
import { useState } from "react";


export default function Root() {
  const [bannerAndMsg, setBannerAndMsg] = useState([]);

  return (
    <>
      <Navigation user="Waldo" bannerAndMsg={bannerAndMsg} setBannerAndMsg={setBannerAndMsg} />

      <Header />
      {bannerAndMsg.length > 0 && (
        <Banner
          weatherWarning={bannerAndMsg}
          setBannerAndMsg={setBannerAndMsg}
        />
      )}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
