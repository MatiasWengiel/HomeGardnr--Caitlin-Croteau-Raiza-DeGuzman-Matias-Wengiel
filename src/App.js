import "./App.css";
import Banner from "./components/Banner";
import PlantCard from "./components/PlantCard";
import WeatherCard from "./components/WeatherCard";
import Navigation from "./components/Navigation";
import LargeCardMain from "./components/LargeCardMain";
import SearchBar from './components/SearchBar';

import LargeCardUser from "./components/LargeCardUser";
import PlantForm from "./components/PlantForm";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <Navigation user="Waldo" />
      <SearchBar />
      {/* <WeatherCard currentProvince="BC" /> */}
      <LargeCardMain />
      <LargeCardUser />
      <h2>Here is the form to add new plants!</h2>
      <PlantForm />
      <WeatherCard currentProvince="BC" />
    </div>
  );
}

export default App;
