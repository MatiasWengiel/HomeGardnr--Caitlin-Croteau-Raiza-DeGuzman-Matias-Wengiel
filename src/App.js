import "./App.css";
import Banner from "./Components/Banner";
import PlantCard from "./Components/PlantCard";
import WeatherCard from "./Components/WeatherCard";
import Navigation from "./Components/Navigation";
import PlantForm from "./Components/PlantForm";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <Navigation user="Waldo" />
      <h2>Here is the form to add new plants!</h2>
      <PlantForm />
      <WeatherCard currentProvince="BC" />
    </div>
  );
}

export default App;
