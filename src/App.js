import "./App.css";
import Banner from "./components/Banner";
import PlantCard from "./components/PlantCard";
import WeatherCard from "./components/WeatherCard";
import Navigation from "./components/Navigation";
import LargeCardVisitor from "./components/LargeCardVisitor";
import LargeCardUser from "./components/LargeCardUser";
import PlantForm from "./components/PlantForm";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <Navigation user="Waldo" />
      {/* <WeatherCard currentProvince="BC" /> */}
      <LargeCardVisitor />
      <LargeCardUser />
      <h2>Here is the form to add new plants!</h2>
      <PlantForm />
      <WeatherCard currentProvince="BC" />
    </div>
  );
}

export default App;
