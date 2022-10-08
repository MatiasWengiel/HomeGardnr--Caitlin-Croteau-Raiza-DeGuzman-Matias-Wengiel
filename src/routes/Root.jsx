import Navigation from "../components/Navigation";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

import { useState } from "react";
import Banner from "../components/Banner";


export default function Root() {
  const [bannerMessage, setBannerMessage] = useState([]);

  return (
    <>
      <Navigation user="Waldo" setBannerMessage={setBannerMessage} bannerMessage={bannerMessage}/>
      <Header />
      {bannerMessage.length > 0 && (
        <Banner setBannerMessage={setBannerMessage} weatherWarning={bannerMessage} />
      )}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
