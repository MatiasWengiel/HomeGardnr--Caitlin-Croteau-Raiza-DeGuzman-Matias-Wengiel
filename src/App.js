import "./App.css";
import Banner from "./components/Banner";
import PlantCard from "./components/PlantCard";
import WeatherCard from "./components/WeatherCard";
import Navigation from "./components/Navigation";
<<<<<<< HEAD
import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar';

=======
import LargeCardVisitor from "./components/LargeCardVisitor";
import LargeCardUser from "./components/LargeCardUser";
import PlantForm from "./components/PlantForm";
import { useState, useEffect } from "react";
import axios from "axios";
>>>>>>> main

function App() {
  return (
    <div className="App">
      <Navigation user="Waldo" />
<<<<<<< HEAD
      <SearchBar />
=======
      {/* <WeatherCard currentProvince="BC" /> */}
      <LargeCardVisitor />
      <LargeCardUser />
      <h2>Here is the form to add new plants!</h2>
      <PlantForm />
      <WeatherCard currentProvince="BC" />
>>>>>>> main
    </div>
  );
}

export default App;
