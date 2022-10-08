import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { Outlet } from "react-router-dom";
import { useState } from "react";


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
